'use strict';

const tests = require( './tests' );

describe( 'www.wikipedia.org page', function () {

	before( function () {
		browser.url( 'http://localhost:8080/wikipedia.org/' );
	} );

	it( 'Should have the correct title: "Wikipedia" ', function () {
		tests.correctTitle( 'Wikipedia' );
	} );

	it( 'should focus on search input when page is loaded', function () {
		tests.focusOnSearch();
	} );

	it( 'should expand language links', function () {
		tests.expandLanguageLinks();
	} );

	it( 'should collapse language links', function () {
		tests.collapseLanguageLinks();
	} );

	it( 'should produce search suggestions for the query "Paris"', function () {
		tests.searchSuggestionsForQuery( 'Paris' );
	} );

	it( 'should produce no console errors', function () {
		tests.noBrowserErrors();
	} );

	it( 'Clicking on first search result should redirect to: "https://en.wikipedia.org/wiki/Paris" ', function () {
		tests.searchShouldRedirectTo( 'https://en.wikipedia.org/wiki/Paris' );
	} );
} );
