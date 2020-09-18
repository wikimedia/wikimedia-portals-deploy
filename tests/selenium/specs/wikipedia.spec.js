'use strict';

const tests = require( './tests' );

describe( 'www.wikipedia.org page', function () {
	it( 'should expand language links and provide query suggestions', function () {
		browser.url( 'http://localhost:8080/wikipedia.org/' );
		tests.correctTitle( 'Wikipedia' );
		tests.focusOnSearch();
		tests.expandLanguageLinks();
		tests.collapseLanguageLinks();
		tests.searchSuggestionsForQuery( 'Paris' );
		tests.noBrowserErrors();
		tests.searchShouldRedirectTo( 'https://en.wikipedia.org/wiki/Paris' );
	} );
} );
