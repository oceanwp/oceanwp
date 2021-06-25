var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// Nav no click
	mobileSearchIcon();
} );

function mobileSearchIcon() {
	"use strict"

	// Return if disabled.
	if ( 'disabled' === oceanwpLocalize.mobileMenuSearchStyle ) {
		return;
	}

	if ( 'drop_down' === oceanwpLocalize.mobileMenuSearchStyle ) {

		var $searchDropdownToggle = $j( '.search-icon-dropdown' ),
			$searchDropdownForm   = $j( '.search-style-dropdown' );

		$searchDropdownToggle.click( function( event ) {
			// Display search form
			$searchDropdownForm.toggleClass( 'show' );
			// Active menu item
			$j( this ).toggleClass( 'active' );
			// Focus
			var $transitionDuration = $searchDropdownForm.css( 'transition-duration' );
			$transitionDuration = $transitionDuration.replace( 's', '' ) * 1000;
			if ( $transitionDuration ) {
				setTimeout( function() {
					$searchDropdownForm.find( 'input.field' ).focus();
				}, $transitionDuration );
			}
			// Return false
			return false;
		} );

		// Close on doc click
		$j( document ).on( 'click', function( event ) {
			if ( ! $j( event.target ).closest( '#searchform-dropdown.show' ).length ) {
				$searchDropdownToggle.removeClass( 'active' );
				$searchDropdownForm.removeClass( 'show' );
			}
		} );

	} else if ( 'overlay' === oceanwpLocalize.mobileMenuSearchStyle ) {

		var $searchOverlayToggle 	= $j( '.search-icon-overlay' ),
			$searchOverlayClose 	= $j( '.search-overlay-close' ),
			$searchOverlay 			= $j( '.search-style-overlay' );

		if ( $searchOverlayToggle.length ) {

			$searchOverlayToggle.on( 'click', function( e ) {
				e.preventDefault();

				$searchOverlay.addClass( 'active' );
				$searchOverlay.fadeIn( 200 );

				setTimeout( function() {
					$j( 'html' ).css( 'overflow', 'hidden' );
				}, 400);

			} );
		}

		$searchOverlayClose.on( 'click', function( e ) {
			e.preventDefault();

			$searchOverlay.removeClass( 'active' );
			$searchOverlay.fadeOut( 200 );

			setTimeout( function() {
				$j( 'html' ).css( 'overflow', 'visible' );
			}, 400);

		} );

		$searchOverlayToggle.on( 'click', function() {
			$j( '.search-style-overlay input' ).focus();
		} );

	}
}
