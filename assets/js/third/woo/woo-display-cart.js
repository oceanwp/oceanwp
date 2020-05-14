var $j = jQuery.noConflict();

$j( document ).ready( function() {
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

	$j( 'body' ).on( 'added_to_cart', function() {
		$overlay.fadeIn();
		$j( 'body' ).addClass( 'show-cart' );

		// Close quick view modal if enabled
		var qv_modal 		= $j( '#owp-qv-wrap' ),
			qv_content 		= $j( '#owp-qv-content' ),
			header 			= $j( '#site-header' );

		if ( qv_modal.length ) {
			$j( 'html' ).css( {
				'overflow': '',
				'margin-right': '' 
			} );
			$j( 'html' ).removeClass( 'owp-qv-open' );

			qv_modal.fadeOut();
			qv_modal.removeClass( 'is-visible' );

			setTimeout( function() {
				qv_content.html( '' );
			}, 600);
		}

		if ( header.length
			&& ! header.hasClass( 'fixed-scroll' ) ) {
			$j( 'html, body' ).animate( { scrollTop: 0 }, 400 );
		}
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