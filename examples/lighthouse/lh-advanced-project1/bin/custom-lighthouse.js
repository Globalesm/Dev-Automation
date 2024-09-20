#!/usr/bin/env node
'use strict';

const globby = require('globby');
const protocolify = require('protocolify');
const pkg = require('../package.json');
const commander = require('commander');
const customLighthouse = require('../lib/custom-lighthouse');
const lighthouseConstants = require('lighthouse/lighthouse-core/config/constants.js');

commander
	.version(pkg.version)
	.name('node custom-lighthouse.js')
	.usage('[options] <paths>')
	.option(
		'-s, --sitemap <url>',
		'the path to a sitemap'
	)
	.option(
		'-f, --sitemap-find <pattern>',
		'a pattern to find in sitemaps. Use with --sitemap-replace'
	)
	.option(
		'-r, --sitemap-replace <string>',
		'a replacement to apply in sitemaps. Use with --sitemap-find'
	)
	.option(
		'-x, --sitemap-exclude <pattern>',
		'a pattern to find in sitemaps and exclude any url that matches'
	)
	.option(
		'-c, --config <string>',
		'Use an alternate configuration for this analysis',
		'config/01-custom-lighthouse.config.js'
 	)
	.option(
		'-t, --template <string>',
		'Use an alternate template for this analysis',
		'config/index.handlebars'
	)
	.requiredOption(
		'-h, --html-report <dir>',
		'Output directory for lighthouse reports'
	).parse(process.argv);


// Parse the args into valid paths using glob and protocolify
const urls = globby.sync(commander.args, {
	// Ensure not-found paths (like "google.com"), are returned
	nonull: true
}).map(protocolify);

const configPath = `../${commander.opts().config}`;

const config = require(configPath);

const templateCustom = commander.opts().template;


// start from here and wait for results
(async () => {
	// Load a sitemap based on the `--sitemap` flag
	const newConfig = commander.sitemap ?
		await customLighthouse.loadSitemapIntoConfig(commander, config) : config;

	// configuration urls and sitemap urls before command line urls
	let allUrls = (newConfig.urls || []).concat(urls);
	await customLighthouse.scanAndReport(allUrls, commander.htmlReport, config.lighthouse, templateCustom);
	
})().catch(error => {
	console.error('unexpected failure: ');
	console.error(error);
	process.exit(1);
});
