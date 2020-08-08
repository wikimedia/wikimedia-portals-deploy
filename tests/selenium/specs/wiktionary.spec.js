'use strict';

const tests = require( './tests' );

describe( 'www.wiktionary.org page', function () {
	it( 'should display correct title without errors', function () {
		browser.url( 'http://localhost:8080/wiktionary.org/' );
		tests.correctTitle( 'Wiktionary' );
		tests.noBrowserErrors();
	} );
} );
