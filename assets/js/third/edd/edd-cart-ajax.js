<<<<<<< HEAD
var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
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

=======
var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
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

>>>>>>> 6238349295930c9be2289cb5c6fbcdab354fd6e2
}  