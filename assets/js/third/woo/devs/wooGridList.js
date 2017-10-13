var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
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

		$j( '#oceanwp-grid' ).on( 'click', function() {
			$j( this ).addClass( 'active' );
			$j( '#oceanwp-list' ).removeClass( 'active' );
			Cookies.set( 'gridcookie', 'grid', { path: '' } );
			$j( '.archive.woocommerce ul.products' ).fadeOut( 300, function() {
				$j( this ).addClass( 'grid' ).removeClass( 'list' ).fadeIn( 300 );
			} );
			return false;
		} );

		$j( '#oceanwp-list' ).on( 'click', function() {
			$j( this ).addClass( 'active' );
			$j( '#oceanwp-grid' ).removeClass( 'active' );
			Cookies.set( 'gridcookie', 'list', { path: '' } );
			$j( '.archive.woocommerce ul.products' ).fadeOut( 300, function() {
				$j( this ).addClass( 'list' ).removeClass( 'grid' ).fadeIn( 300 );
			} );
			return false;
		} );

		if ( Cookies.get( 'gridcookie' ) == 'grid' ) {
	        $j( '.oceanwp-grid-list #oceanwp-grid' ).addClass( 'active' );
	        $j( '.oceanwp-grid-list #oceanwp-list' ).removeClass( 'active' );
	        $j( '.archive.woocommerce ul.products' ).addClass( 'grid' ).removeClass( 'list' );
	    }

	    if ( Cookies.get( 'gridcookie' ) == 'list' ) {
	        $j( '.oceanwp-grid-list #oceanwp-list' ).addClass( 'active' );
	        $j( '.oceanwp-grid-list #oceanwp-grid' ).removeClass( 'active' );
	        $j( '.archive.woocommerce ul.products' ).addClass( 'list' ).removeClass( 'grid' );
	    }

	} else {

		Cookies.remove( 'gridcookie', { path: '' } );

	}

}