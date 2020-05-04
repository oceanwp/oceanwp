var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
    // Edd display cart
    oceanwpEDDCartDetails();
} );

/* ==============================================
Easy Digital Downloads Cart Details
============================================== */
function oceanwpEDDCartDetails() {
	"use strict"
	/**
	 * EDD cart information in the header
	 */
	var cartTotalAmount = $j('.eddmenucart-details.total');

	$j('body').on('edd_cart_item_added', function( event, response ) {

		$j( '.edd-menu-icon' ).removeClass('edd-cart-empty');

		cartTotalAmount.html( response.total );

	});

	$j('body').on('edd_cart_item_removed', function( event, response ) {

		cartTotalAmount.html( response.total );
	});

}  