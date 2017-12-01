const tests = require( './tests' );

describe( 'www.wikinews.org page', function () {
	browser.url( 'http://localhost:8080/wikinews.org/' );
	tests.correctTitle( 'Wikinews' );
	tests.noBrowserErrors();
} );
