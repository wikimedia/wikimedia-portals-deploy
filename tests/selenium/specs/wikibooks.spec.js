'use strict';

const tests = require( './tests' );

describe( 'www.wikibooks.org page', function () {
	it( 'should display correct title without errors', function () {
		browser.url( 'http://localhost:8080/wikibooks.org/' );
		tests.correctTitle( 'Wikibooks' );
		tests.noBrowserErrors();
	} );
} );
