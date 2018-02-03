var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
    // Woo display cart
    oceanwpWooDisplayCart();
} );

/* ==============================================
WOOCOMMERCE DISPLAY CART
============================================== */
function oceanwpWooDisplayCart() {
	"use strict"

	var $overlay = $j( '.owp-cart-overlay' );
	
	var oceanwp_cart_overlay_close = function() {
		$j( this ).fadeOut();
		$j( 'body' ).removeClass( 'show-cart' );
	};

	$j( 'body' ).on( 'added_to_cart', function() {
		$overlay.fadeIn();
		$j( 'body' ).addClass( 'show-cart' );
    } );

    $overlay.on( 'click', function() {
		$j( this ).fadeOut();
		$j( 'body' ).removeClass( 'show-cart' );
	} );

	// Close on resize to avoid conflict
	$j( window ).resize( function() {
		$overlay.fadeOut();
		$j( 'body' ).removeClass( 'show-cart' );
	} );

}