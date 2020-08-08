'use strict';

const tests = require( './tests' );

describe( 'www.wikivoyage.org page', function () {
	it( 'should display correct title without errors', function () {
		browser.url( 'http://localhost:8080/wikivoyage.org/' );
		tests.correctTitle( 'Wikivoyage' );
		tests.noBrowserErrors();
	} );
} );
