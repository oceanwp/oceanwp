var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
    // Woo reviews scroll
    oceanwpWooReviewsScroll();
} );

/* ==============================================
WOOCOMMERCE REVIEWS SCROLL
============================================== */
function oceanwpWooReviewsScroll() {
	"use strict"

	$j( '.woocommerce div.product .woocommerce-review-link' ).click( function( event ) {
		$j( '.woocommerce-tabs .description_tab' ).removeClass( 'active' );
      	$j( '.woocommerce-tabs .reviews_tab' ).addClass( 'active' );
		$j( '.woocommerce-tabs #tab-description' ).css( 'display', 'none' );
      	$j( '.woocommerce-tabs #tab-reviews' ).css( 'display', 'block' );

		$j( 'html, body' ).stop(true,true).animate( {
			scrollTop: $j( this.hash ).offset().top -120
		}, 'normal' );
		return false;
	} );

}