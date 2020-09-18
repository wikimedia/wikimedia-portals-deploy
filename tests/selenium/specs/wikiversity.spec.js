'use strict';

const tests = require( './tests' );

describe( 'www.wikiversity.org page', function () {
	it( 'should display correct title without errors', function () {
		browser.url( 'http://localhost:8080/wikiversity.org/' );
		tests.correctTitle( 'Wikiversity' );
		tests.noBrowserErrors();
	} );
} );
