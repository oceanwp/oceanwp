var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
    // Woo catalog view
    oceanwpWooGridList();
} );

/* ==============================================
WOOCOMMERCE GRID LIST VIEW
============================================== */
function oceanwpWooGridList() {
	"use strict"

	if ( $j( 'body' ).hasClass( 'has-grid-list' ) ) {

		// Re-run function
		var oceanwpProductSlider = function() {
			if ( ! $j( 'body' ).hasClass( 'no-carousel' )
				&& $j( '.woo-entry-image.product-entry-slider' ).length) {
                setTimeout( function() {
                    $j( '.woo-entry-image.product-entry-slider' ).slick( 'unslick' );
                    oceanwpInitCarousel();
                }, 350 );
            }
        }

		$j( '#oceanwp-grid' ).on( 'click', function() {
			oceanwpProductSlider();

			$j( this ).addClass( 'active' );
			$j( '#oceanwp-list' ).removeClass( 'active' );
			Cookies.set( 'gridcookie', 'grid', { path: '' } );
			$j( '.woocommerce ul.products' ).fadeOut( 300, function() {
				$j( this ).addClass( 'grid' ).removeClass( 'list' ).fadeIn( 300 );
			} );
			return false;
		} );

		$j( '#oceanwp-list' ).on( 'click', function() {
			oceanwpProductSlider();
            
			$j( this ).addClass( 'active' );
			$j( '#oceanwp-grid' ).removeClass( 'active' );
			Cookies.set( 'gridcookie', 'list', { path: '' } );
			$j( '.woocommerce ul.products' ).fadeOut( 300, function() {
				$j( this ).addClass( 'list' ).removeClass( 'grid' ).fadeIn( 300 );
			} );
			return false;
		} );

		if ( Cookies.get( 'gridcookie' ) == 'grid' ) {
	        $j( '.oceanwp-grid-list #oceanwp-grid' ).addClass( 'active' );
	        $j( '.oceanwp-grid-list #oceanwp-list' ).removeClass( 'active' );
	        $j( '.woocommerce ul.products' ).addClass( 'grid' ).removeClass( 'list' );
	    }

	    if ( Cookies.get( 'gridcookie' ) == 'list' ) {
	        $j( '.oceanwp-grid-list #oceanwp-list' ).addClass( 'active' );
	        $j( '.oceanwp-grid-list #oceanwp-grid' ).removeClass( 'active' );
	        $j( '.woocommerce ul.products' ).addClass( 'list' ).removeClass( 'grid' );
	    }

	} else {

		Cookies.remove( 'gridcookie', { path: '' } );

	}

}