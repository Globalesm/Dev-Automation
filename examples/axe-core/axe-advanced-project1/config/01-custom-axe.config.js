const config1 = {
	urls: [
		// Hard-code URLs for testing here

		//"https://section508coordinators.github.io/BaselineTestPages2/test-cases/TC1005C001.html",
		//"https://section508coordinators.github.io/BaselineTestPages2/test-cases/TC1005C002.html",
		//"https://section508coordinators.github.io/BaselineTestPages2/test-cases/TC1005C003.html",
		//"https://section508coordinators.github.io/BaselineTestPages2/test-cases/TC1005C004.html",
		//"https://section508coordinators.github.io/BaselineTestPages2/test-cases/TC1005C007.html"

	],
	axeConfig: {
		// branding: {
		// 	brand: '';
		// 	application: '';
		// },
		// reporter: ReporterVersion,
		/////////////////////////////// tags can be used to select groups of tests
		// tags: [
		// 	"best-practice",
		// 	"cat.keyboard",
		// 	"cat.time-and-media",
		// 	"wcag2a",
		// 	"wcag121",
		// 	"section508",
		// 	"section508.22.a"
		// ],
		//////////////////////////// can define new checks or override existing
		// checks: [
		// 	// {
		// 	// 	id: '',
		// 	// 	// evaluate: Function | string;
		// 	// 	// after?: Function | string;
		// 	// 	// options?: any;
		// 	// 	// matches: '',
		// 	// 	enabled: true,
		// 	// }
		// ],
		// disableOtherRules: true,     //////// if true, only use our rules
		////////////////////////////// define new rules or override existing
		 rules: [
		 //{
		// 	// 	id: '',
		// 	// 	// selector: string;
		// 	// 	// excludeHidden?: boolean;
		// 	// 	// enabled?: boolean;
		// 	// 	// pageLevel?: boolean;
		// 	// 	// any?: string[];
		// 	// 	// all?: string[];
		// 	// 	// none?: string[];
		// 	// 	// tags: string[];
		// 	// 	// matches: string;
		 //}
		 //	{id: 'landmark-one-main', enabled: false},
		 //	{id: 'region', enabled: false}		 			 	
		// 	{id: 'area-alt', enabled: true},
		// 	{id: 'aria-allowed-attr', enabled: true},
		// 	{id: 'aria-allowed-role', enabled: true},
		// 	{id: 'aria-dpub-role-fallback', enabled: true},
		// 	{id: 'aria-hidden-body', enabled: true},
		// 	{id: 'aria-hidden-focus', enabled: true},
		// 	{id: 'aria-input-field-name', enabled: true},
		// 	{id: 'aria-required-attr', enabled: true},
		// 	{id: 'aria-required-children', enabled: true},
		// 	{id: 'aria-required-parent', enabled: true},
		// 	{id: 'aria-roledescription', enabled: true},
		// 	{id: 'aria-roles', enabled: true},
		// 	{id: 'aria-toggle-field-name', enabled: true},
		// 	{id: 'aria-valid-attr-value', enabled: true},
		// 	{id: 'aria-valid-attr', enabled: true},
		// 	{id: 'audio-caption', enabled: true},
		// 	{id: 'autocomplete-valid', enabled: true},
		// 	{id: 'avoid-inline-spacing', enabled: true},
		// 	{id: 'blink', enabled: true},
		// 	{id: 'button-name', enabled: true},
		// 	{id: 'bypass', enabled: true},
		// 	{id: 'checkboxgroup', enabled: true},
		// 	{id: 'color-contrast', enabled: false},
		// 	{id: 'css-orientation-lock', enabled: false},
		// 	{id: 'definition-list', enabled: false},
		// 	{id: 'dlitem', enabled: false},
		// 	{id: 'document-title', enabled: false},
		// 	{id: 'duplicate-id-active', enabled: false},
		// 	{id: 'duplicate-id-aria', enabled: false},
		// 	{id: 'duplicate-id', enabled: false},
		// 	{id: 'empty-heading', enabled: false},
		// 	{id: 'focus-order-semantics', enabled: false},
		// 	{id: 'form-field-multiple-labels', enabled: false},
		// 	{id: 'frame-tested', enabled: false},
		// 	{id: 'frame-title-unique', enabled: false},
		// 	{id: 'frame-title', enabled: false},
		// 	{id: 'heading-order', enabled: false},
		// 	{id: 'hidden-content', enabled: false},
		// 	{id: 'html-has-lang', enabled: false},
		// 	{id: 'html-lang-valid', enabled: false},
		// 	{id: 'html-xml-lang-mismatch', enabled: false},
		// 	{id: 'image-alt', enabled: false},
		// 	{id: 'img-redundant-alt', enabled: false},
		// 	{id: 'input-button-name', enabled: false},
		// 	{id: 'input-image-alt', enabled: false},
		// 	{id: 'label-content-name-mismatch', enabled: false},
		// 	{id: 'label-title-only', enabled: false},
		// 	{id: 'label', enabled: false},
		// 	{id: 'landmark-banner-is-top-level', enabled: false},
		// 	{id: 'landmark-complementary-is-top-level', enabled: false},
		// 	{id: 'landmark-contentinfo-is-top-level', enabled: false},
		// 	{id: 'landmark-main-is-top-level', enabled: false},
		// 	{id: 'landmark-no-duplicate-banner', enabled: false},
		// 	{id: 'landmark-no-duplicate-contentinfo', enabled: false},
		// 	{id: 'landmark-one-main', enabled: false},
		// 	{id: 'landmark-unique', enabled: false},
		// 	{id: 'layout-table', enabled: false},
		// 	{id: 'link-in-text-block', enabled: false},
		// 	{id: 'link-name', enabled: false},
		// 	{id: 'list', enabled: false},
		// 	{id: 'listitem', enabled: false},
		// 	{id: 'marquee', enabled: false},
		// 	{id: 'meta-refresh', enabled: false},
		// 	{id: 'meta-viewport-large', enabled: false},
		// 	{id: 'meta-viewport', enabled: false},
		// 	{id: 'object-alt', enabled: false},
		// 	{id: 'p-as-heading', enabled: false},
		// 	{id: 'page-has-heading-one', enabled: false},
		// 	{id: 'radiogroup', enabled: false},
		// 	{id: 'region', enabled: false},
		// 	{id: 'role-img-alt', enabled: false},
		// 	{id: 'scope-attr-valid', enabled: false},
		// 	{id: 'scrollable-region-focusable', enabled: false},
		// 	{id: 'server-side-image-map', enabled: false},
		// 	{id: 'skip-link', enabled: false},
		// 	{id: 'tabindex', enabled: false},
		// 	{id: 'table-duplicate-name', enabled: false},
		// 	{id: 'table-fake-caption', enabled: false},
		// 	{id: 'td-has-header', enabled: false},
		// 	{id: 'td-headers-attr', enabled: false},
		// 	{id: 'th-has-data-cells', enabled: false},
		// 	{id: 'valid-lang', enabled: false},
		// 	{id: 'video-caption', enabled: false},
		// 	{id: 'video-description', enabled: false},
		 ],
		// locale?: Locale;
		// axeVersion: ''
	}
};

module.exports = config1;