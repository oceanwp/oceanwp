var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
    // Woo mobile cart sidebar
    oceanwpWooMobileCart();
} );

/* ==============================================
WOOCOMMERCE MOBILE CART SIDEBAR
============================================== */
function oceanwpWooMobileCart() {
	"use strict"

	if ( $j( 'body' ).hasClass( 'woocommerce-cart' )
		|| $j( 'body' ).hasClass( 'woocommerce-checkout' ) ) {
		return;
	}

	var oceanwp_cart_filter_close = function() {
		$j( 'html' ).css( {
			'overflow': '',
			'margin-right': ''
		} );

		$j( 'body' ).removeClass( 'show-cart-sidebar' );
	};

	$j( document ).on( 'click', '.oceanwp-mobile-menu-icon a.wcmenucart', function( e ) {
		e.preventDefault();

		var innerWidth = $j( 'html' ).innerWidth();
		$j( 'html' ).css( 'overflow', 'hidden' );
		var hiddenInnerWidth = $j( 'html' ).innerWidth();
		$j( 'html' ).css( 'margin-right', hiddenInnerWidth - innerWidth );

		$j( 'body' ).addClass( 'show-cart-sidebar' );
	} );

	$j( '.oceanwp-cart-sidebar-overlay, .oceanwp-cart-close').on( 'click', function( e ) {
		e.preventDefault();
		
		oceanwp_cart_filter_close();

		// Remove show-cart here to let the header mini cart working
		$j( 'body' ).removeClass( 'show-cart' );
	} );

	// Close on resize to avoid conflict
	$j( window ).resize( function() {
		oceanwp_cart_filter_close();
	} );

}