const tests = require( './tests' );

describe( 'www.wikiquote.org page', function () {
	browser.url( 'http://localhost:8080/wikiquote.org/' );
	tests.correctTitle( 'Wikiquote' );
	tests.noBrowserErrors();
} );
