const tests = require( './tests' );

describe( 'www.wiktionary.org page', function () {
	browser.url( 'http://localhost:8080/wiktionary.org/' );
	tests.correctTitle( 'Wiktionary' );
	tests.noBrowserErrors();
} );
