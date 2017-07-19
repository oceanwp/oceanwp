var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
	// Woo menu cart
	oceanwpWooMenuCart();
} );

/* ==============================================
WOOCOMMERCE MENU CART
============================================== */
function oceanwpWooMenuCart() {
	"use strict"

	if ( $j( 'a.wcmenucart' ).hasClass( 'go-to-shop' ) ) {
		return;
	}

	// Drop-down
	if ( 'drop_down' == oceanwpLocalize.wooCartStyle ) {

		// Display cart dropdown
		$j( '.toggle-cart-widget' ).click( function( event ) {
			$j( '#searchform-dropdown' ).removeClass( 'show' );
			$j( 'a.search-dropdown-toggle' ).parent( 'li' ).removeClass( 'active' );
			$j( 'div#current-shop-items-dropdown' ).toggleClass( 'show' );
			$j( this ).toggleClass( 'active' );
			return false;
		} );

		// Hide cart dropdown
		$j( 'div#current-shop-items-dropdown' ).click( function( event ) {
			event.stopPropagation(); 
		} );
		$j( document ).click( function() {
			$j( 'div#current-shop-items-dropdown' ).removeClass( 'show' );
			$j( 'li.wcmenucart-toggle-dropdown' ).removeClass( 'active' );
		} );

	}

}