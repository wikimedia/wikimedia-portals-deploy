const tests = require( './tests' );

describe( 'www.wikimedia.org page', function () {
	browser.url( 'http://localhost:8080/wikimedia.org/' );
	tests.correctTitle( 'Wikimedia' );
	tests.noBrowserErrors();
} );
