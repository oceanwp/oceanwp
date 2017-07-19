var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
	// Overlay search
	oceanwpOverlaySearch();
} );

/* ==============================================
OVERLAY SEARCH
============================================== */
function oceanwpOverlaySearch() {
	"use strict"

	// Return if is the not this search style
	if ( 'overlay' != oceanwpLocalize.menuSearchStyle ) {
		return;
	}

	var $searchOverlayToggle 	= $j( 'a.search-overlay-toggle' ),
		$searchOverlay 			= $j( '#searchform-overlay' );

	if ( $searchOverlayToggle.length ) {

		$searchOverlayToggle.on( 'click', function( e ) {
			e.preventDefault();

			if ( ! $j( this ).hasClass( 'exit' ) ) {

				$j( this ).addClass( 'exit' );
				$searchOverlay.addClass( 'active' );
				$searchOverlay.fadeIn( 200 );

                setTimeout( function() {
					$j( 'html' ).css( 'overflow', 'hidden' );
                }, 400);

	        } else {

				$j( this ).removeClass( 'exit' );
				$searchOverlay.removeClass( 'active' );
				$searchOverlay.fadeOut( 200 );

                setTimeout( function() {
					$j( 'html' ).css( 'overflow', 'visible' );
                }, 400);

	        }

		} );

	}

	$searchOverlayToggle.on( 'click', function() {
		if ( $j( this ).hasClass( 'exit' ) ) {
			$j( '#searchform-overlay input' ).focus();
		}
	} );

}