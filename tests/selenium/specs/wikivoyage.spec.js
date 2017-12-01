const tests = require( './tests' );

describe( 'www.wikivoyage.org page', function () {
	browser.url( 'http://localhost:8080/wikivoyage.org/' );
	tests.correctTitle( 'Wikivoyage' );
	tests.noBrowserErrors();
} );
