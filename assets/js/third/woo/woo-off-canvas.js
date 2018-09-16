var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
    // Woo off canvas
    oceanwpWooOffCanvas();
} );

/* ==============================================
WOOCOMMERCE OFF CANVAS
============================================== */
function oceanwpWooOffCanvas() {
	"use strict"

	$j( document ).on( 'click', '.oceanwp-off-canvas-filter', function( e ) {
		e.preventDefault();

		var innerWidth = $j( 'html' ).innerWidth();
		$j( 'html' ).css( 'overflow', 'hidden' );
		var hiddenInnerWidth = $j( 'html' ).innerWidth();
		$j( 'html' ).css( 'margin-right', hiddenInnerWidth - innerWidth );

		$j( 'body' ).addClass( 'off-canvas-enabled' );
	} );

	$j( '.oceanwp-off-canvas-overlay' ).on( 'click', function() {
		$j( 'html' ).css( {
			'overflow': '',
			'margin-right': '' 
		} );

		$j( 'body' ).removeClass( 'off-canvas-enabled' );
	} );

}