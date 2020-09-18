'use strict';

/* eslint-disable mocha/no-exports */

const assert = require( 'assert' );

/**
 * Checks if error is expected and can be ignored,
 * or if it's a ligitimate error.
 *
 */

function knownErrors( message ) {
	// ignore missing favicons on dev server
	if ( /favicon/.test( message ) ) {
		return true;
	}
	// ignore missing images from this directory on dev server
	if ( /\/static\/images\/project-logos\//.test( message ) ) {
		return true;
	}

	// ignore this missing image on dev server
	if ( /\/static\/images\/wikimedia-button/.test( message ) ) {
		return true;
	}

	// ignore event-logging events sent from dev page
	if ( /\/beacon\/event/.test( message ) ) {
		return true;
	}
	return false;
}

const tests = {
	// common tests
	correctTitle( correctTitle ) {
		return it( `should have the title: "${correctTitle}"`, function () {
			const title = browser.getTitle();
			assert.equal( title, correctTitle );
		} );
	},
	noBrowserErrors() {
		return it( 'should not produce browser errors', function () {

			const logs = browser.log( 'browser' ),
				errors = logs.value.filter( ( log ) => {
					const isError = log.level === 'SEVERE',
						isNotaKnownError = !knownErrors( log.message );
					if ( isError && isNotaKnownError ) {
						return true;
					} else {
						return false;
					}
				} );
			assert.equal( errors.length, 0, `${JSON.stringify( errors )}` );
		} );
	},
	// Wikipedia.org specific tests
	focusOnSearch() {
		return it( 'search input should have focus', function () {
			assert( browser.hasFocus( 'input[name=search]' ) );
		} );
	},
	expandLanguageLinks() {
		return it( 'language list should expand', function () {
			browser.click( '.lang-list-button' );
			assert( browser.waitForVisible( '.lang-list-content', 1000 ) );
		} );
	},
	collapseLanguageLinks() {
		return it( 'language list should collapse', function () {
			browser.click( '.lang-list-button' );
			assert( browser.waitForVisible( '.lang-list-content', 1000, true ) );
		} );
	},
	searchSuggestionsForQuery( query ) {
		return it( `search suggestions should appear for the query: ${query}`, function () {
			browser.setValue( '#searchInput', query );
			assert( browser.waitForVisible( '.suggestions-dropdown', 3000 ) );
			assert( browser.waitForVisible( '.suggestion-link', 3000 ) );
			assert( browser.getText( '.suggestion-title' ), query );
		} );
	},
	searchShouldRedirectTo( article ) {
		return it( `Submitting search form should land on: ${article}`, function () {
			browser.click( '#search-form button[type="submit"]' );
			assert( browser.getUrl(), article );
		} );
	}
};

module.exports = tests;
