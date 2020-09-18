'use strict';

const tests = require( './tests' );

describe( 'www.wikimedia.org page', function () {
	it( 'should display correct title without errors', function () {
		browser.url( 'http://localhost:8080/wikimedia.org/' );
		tests.correctTitle( 'Wikimedia' );
		tests.noBrowserErrors();
	} );
} );
