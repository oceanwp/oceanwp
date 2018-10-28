var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
	// Header replace search
	oceanwpHeaderReplaceSearch();
} );

/* ==============================================
HEADER REPLACE SEARCH
============================================== */
function oceanwpHeaderReplaceSearch() {
	"use strict"

	// Return if is the not this search style
	if ( 'header_replace' != oceanwpLocalize.menuSearchStyle ) {
		return;
	}

	// Header
	var $header = $j( '#site-header' );

	// If is top menu header style
	if ( $header.hasClass( 'top-header' ) ) {

		// Show
		var $headerReplace 	= $j( '#searchform-header-replace' ),
			$siteLeft 		= $j( '#site-header.top-header .header-top .left' ),
			$siteRight 		= $j( '#site-header.top-header .header-top .right' );
		
		$j( 'a.search-header-replace-toggle' ).click( function( event ) {
			// Display search form
			$headerReplace.toggleClass( 'show' );
			$siteLeft.toggleClass( 'hide' );
			$siteRight.toggleClass( 'hide' );
			// Focus
			var $transitionDuration =  $headerReplace.css( 'transition-duration' );
			$transitionDuration = $transitionDuration.replace( 's', '' ) * 1000;
			if ( $transitionDuration ) {
				setTimeout( function() {
					$headerReplace.find( 'input[type="search"]' ).focus();
				}, $transitionDuration );
			}
			// Return false
			return false;
		} );

		// Close on click
		$j( '#searchform-header-replace-close' ).click( function() {
			$headerReplace.removeClass( 'show' );
			$siteLeft.removeClass( 'hide' );
			$siteRight.removeClass( 'hide' );
			return false;
		} );

		// Close on doc click
		$j( document ).on( 'click', function( event ) {
			if ( ! $j( event.target ).closest( $j( '#searchform-header-replace.show' ) ).length ) {
				$headerReplace.removeClass( 'show' );
				$siteLeft.removeClass( 'hide' );
				$siteRight.removeClass( 'hide' );
			}
		} );

	} else {

		// Show
		var $headerReplace 	= $j( '#searchform-header-replace' ),
			$siteNavigation = $j( '#site-header.header-replace #site-navigation' );
		
		$j( 'a.search-header-replace-toggle' ).click( function( event ) {
			// Display search form
			$headerReplace.toggleClass( 'show' );
			$siteNavigation.toggleClass( 'hide' );
			var menu_width = $j( '#site-navigation > ul.dropdown-menu' ).width();
			$headerReplace.css( 'max-width', menu_width + 60 );
			// Focus
			var $transitionDuration =  $headerReplace.css( 'transition-duration' );
			$transitionDuration = $transitionDuration.replace( 's', '' ) * 1000;
			if ( $transitionDuration ) {
				setTimeout( function() {
					$headerReplace.find( 'input[type="search"]' ).focus();
				}, $transitionDuration );
			}
			// Return false
			return false;
		} );

		// Close on click
		$j( '#searchform-header-replace-close' ).click( function() {
			$headerReplace.removeClass( 'show' );
			$siteNavigation.removeClass( 'hide' );
			return false;
		} );

		// Close on doc click
		$j( document ).on( 'click', function( event ) {
			if ( ! $j( event.target ).closest( $j( '#searchform-header-replace.show' ) ).length ) {
				$headerReplace.removeClass( 'show' );
				$siteNavigation.removeClass( 'hide' );
			}
		} );

	}

}