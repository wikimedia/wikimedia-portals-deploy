'use strict';

const tests = require( './tests' );

describe( 'www.wikinews.org page', function () {
	it( 'should display correct title without errors', function () {
		browser.url( 'http://localhost:8080/wikinews.org/' );
		tests.correctTitle( 'Wikinews' );
		tests.noBrowserErrors();
	} );
} );
