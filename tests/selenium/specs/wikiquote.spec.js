'use strict';

const tests = require( './tests' );

describe( 'www.wikiquote.org page', function () {
	it( 'should display correct title without errors', function () {
		browser.url( 'http://localhost:8080/wikiquote.org/' );
		tests.correctTitle( 'Wikiquote' );
		tests.noBrowserErrors();
	} );
} );
