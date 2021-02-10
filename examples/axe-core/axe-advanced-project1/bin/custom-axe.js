#!/usr/bin/env node
'use strict';

//
//*** THIS VERSION RUNS TESTS AGAINST ALL AXE RULES - NONE ARE DISABLED
//


const customAxe = require('..');
const pkg = require('../package.json');
const globby = require('globby');
const protocolify = require('protocolify');
const commander = require('commander');
const allConfig = require('../config');

const fs = require('fs');

let configCustom = null;
let templateCustom = 'index.handlebars';

commander
	.version(pkg.version)
	.name('node custom-axe.js')
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
	.option('--config <string>')
	.option('--template <string>')
	.requiredOption(
		'-h, --html-report <dir>',
		'Takes json output and uses pa11y-ci-reporter-html to generate a report in <dir>'
	)
	.action((config, args) => {
		let rawArgs = config.rawArgs;
		let indexConfig = rawArgs.findIndex(value => value === '--config');
		let indexTemplate = rawArgs.findIndex(value => value === '--template');

		if(indexConfig !== -1) {
			let nameConfig = rawArgs[++indexConfig];
			
			for (const key in allConfig) {
				if(key == nameConfig) configCustom = allConfig[key];
			}
		}

		if(!configCustom) {
			configCustom = allConfig.config;
		}

		if(indexTemplate !== -1) {
			templateCustom = rawArgs[++indexTemplate];
		}
	})
	.parse(process.argv);

// Parse the args into valid paths using glob and protocolify
let commandLineUrls = globby.sync(commander.args, {nonull: true}).map(protocolify);

const main = async () => {
	// configuration urls first, then commandline urls then sitemap
	console.log(templateCustom)
	configCustom.urls = configCustom.urls.concat(commandLineUrls);

	const filteredSitemapUrls = await customAxe.retrieveSitemapUrls(commander.sitemap,
		commander.sitemapFind,
		commander.sitemapReplace,
		commander.sitemapExclude);

	configCustom.urls = configCustom.urls.concat(filteredSitemapUrls);

	const results = await customAxe.scanUrls(configCustom.urls, configCustom.axeConfig);

	const summaryResults = await customAxe.convertAxeResultsToPa11yReportCompatible(results);
	// console.log(JSON.stringify(summaryResults, null, 2));

	await customAxe.generateHtmlReports(summaryResults, commander.htmlReport, {}, templateCustom);
};

main().catch(error => {
	console.error('unexpected failure: ');
	console.error(error);
	process.exit(1);
});

