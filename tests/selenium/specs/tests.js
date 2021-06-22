'use strict';

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
		const title = browser.getTitle();
		assert.equal( title, correctTitle );
	},
	noBrowserErrors() {
		const logs = browser.getLogs( 'browser' ),
			errors = logs.filter( ( log ) => {
				const isError = log.level === 'SEVERE',
					isNotaKnownError = !knownErrors( log.message );
				if ( isError && isNotaKnownError ) {
					return true;
				} else {
					return false;
				}
			} );
		assert.equal( errors.length, 0, `${JSON.stringify( errors )}` );
	},
	// Wikipedia.org specific tests
	focusOnSearch() {
		$( 'input[name=search]' ).isFocused();
	},
	expandLanguageLinks() {
		$( '.lang-list-button' ).click();
		assert( $( '.lang-list-content' ).waitForDisplayed( 1000 ) );
	},
	collapseLanguageLinks() {
		$( '.lang-list-button' ).click();
		assert( $( '.lang-list-content' ).waitForDisplayed( 2000, true ) );
	},
	searchSuggestionsForQuery( query ) {
		$( '#searchInput' ).setValue( query );

		assert( $( '.suggestions-dropdown' ).waitForDisplayed( 3000 ) );
		assert( $( '.suggestion-link' ).waitForDisplayed( 3000 ) );
		assert( $( '.suggestion-title' ).getText(), query );
	},
	searchShouldRedirectTo( article ) {
		$( '#search-form button[type="submit"]' ).click();
		assert( browser.getUrl(), article );
	}
};

module.exports = tests;
