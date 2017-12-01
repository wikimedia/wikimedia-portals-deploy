const tests = require( './tests' );

describe( 'www.wikiversity.org page', function () {
	browser.url( 'http://localhost:8080/wikiversity.org/' );
	tests.correctTitle( 'Wikiversity' );
	tests.noBrowserErrors();
} );
