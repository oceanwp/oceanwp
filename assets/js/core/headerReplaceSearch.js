/**
 *  Header replace search
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpHeaderReplaceSearch();
} );

// Header replace search function.
function oceanwpHeaderReplaceSearch() {

	// Return if is the not this search style
	if ( 'header_replace' != oceanwpLocalize.menuSearchStyle ) {
		return;
	}

	// Header
	var header = document.querySelector( '#site-header' );

	if ( header.matches( 'top-header' ) ) {

		// Show
		let headerReplace 	= document.querySelector( '#searchform-header-replace' ),
			siteLeft 		= document.querySelector( '#site-header.top-header .header-top .left' ),
			siteRight 		= document.querySelector( '#site-header.top-header .header-top .right' ),
			searchToggle    = document.querySelector( 'a.search-header-replace-toggle' ),
			replaceClose    = document.querySelector( '#searchform-header-replace-close' );

		searchToggle.addEventListener( 'click', function(e) {
			e.preventDefault();

			// Display search form
			headerReplace.classList.toggle( 'show' );
			siteLeft.classList.toggle( 'hide' );
			siteRight.classList.toggle( 'hide' );

			// Focus
			setTimeout( function() {
				headerReplace.querySelector( 'input[type="search"]' ).focus();
			}, 200 );

			// Return false
			return false;
		} );

		// Close on click
		replaceClose.addEventListener( 'click', function(e) {
			e.preventDefault();

			headerReplace.classList.remove( 'show' );
			siteLeft.classList.remove( 'hide' );
			siteRight.classList.remove( 'hide' );
			return false;
		} );

		// Close if click outside.
		window.addEventListener( 'click', function(e) {

			if ( ! headerReplace.contains( e.target ) && ( ! searchToggle.contains( e.target ) ) ) {
				headerReplace.classList.remove( 'show' );
				siteLeft.classList.remove( 'hide' );
				siteRight.classList.remove( 'hide' );
			}

		} );

	} else {

		// Show
		let headerReplace  = document.querySelector( '#searchform-header-replace' ),
			siteNavigation = document.querySelector( '#site-header.header-replace #site-navigation' ),
			searchToggle   = document.querySelector( 'a.search-header-replace-toggle' ),
			replaceClose   = document.querySelector( '#searchform-header-replace-close' ),
			dropdownMenu   = document.querySelectorAll( '#site-navigation > ul.dropdown-menu' );

		searchToggle.addEventListener( 'click', function(e) {
			e.preventDefault();

			// Display search form
			headerReplace.classList.toggle( 'show' );
			siteNavigation.classList.toggle( 'hide' );

			for ( const dropdown of dropdownMenu) {
				var menu_width = dropdown.innerWidth;
			}

			headerReplace.style.maxWidth = menu_width + 60;

			// Focus
			setTimeout( function() {
				headerReplace.querySelector( 'input[type="search"]' ).focus();
			}, 200 );

			// Return false
			return false;
		} );

		// Close on click
		replaceClose.addEventListener( 'click', function(e) {
			e.preventDefault();

			headerReplace.classList.remove( 'show' );
			siteNavigation.classList.remove( 'hide' );
			return false;
		} );

		// Close on doc click
		window.addEventListener( 'click', function(e) {

			if ( ! headerReplace.contains( e.target ) && ( ! searchToggle.contains( e.target ) ) ) {
				headerReplace.classList.remove( 'show' );
				siteNavigation.classList.remove( 'hide' );
			}

		} );

	}
}