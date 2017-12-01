const tests = require( './tests' );

describe( 'www.wikibooks.org page', function () {
	browser.url( 'http://localhost:8080/wikibooks.org/' );
	tests.correctTitle( 'Wikibooks' );
	tests.noBrowserErrors();
} );
