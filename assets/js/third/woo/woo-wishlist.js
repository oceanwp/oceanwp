var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
    // Woo wishlist icon
    oceanwpWooWishlistIcon();
} );

/* ==============================================
WOOCOMMERCE WISHLIST ICON
============================================== */
function oceanwpWooWishlistIcon() {
	"use strict"

	var $overlay = $j( '.owp-cart-overlay' );
	
	// Set cookie
	var oceanwp_get_cookie = function( name ) {
	    var dc = document.cookie,
	    	prefix = name + "=",
	    	begin = dc.indexOf("; " + prefix);

	    if ( begin == -1 ) {
	        begin = dc.indexOf( prefix );
	        if ( begin != 0 ) return null;
	    } else {
	        begin += 2;
	        var end = document.cookie.indexOf( ";", begin );

	        if ( end == -1 ) {
	        	end = dc.length;
	        }
	    }
	    return decodeURIComponent( decodeURIComponent( ( dc.substring( begin + prefix.length, end ) ) ) );
	};
	
	// Update wishlist count
	var oceanwp_wishlist_count = function( count ) {
	    if ( ( typeof count === 'number'
	    		&& isFinite( count )
	    		&& Math.floor( count ) === count )
	    	&& count >=0 ) {
			$j( '.owp-wishlist-count' ).html( count );
		}
	};

	if ( $j('.owp-wishlist-count').length ) {

		// Vars
		var counter 	= 0,
			cookie 		= oceanwp_get_cookie( 'yith_wcwl_products' ),
			products;

		if ( cookie != null ) {
            cookie = cookie.slice( 0, cookie.indexOf( ']' ) + 1 );
			products = JSON.parse( cookie );
			counter =  Object.keys( products ).length;
		} else 	{
			counter = Number( $j( '.owp-wishlist-count' ).html() );
		}

		// Increase counter on item add
		$j( 'body' ).on( 'added_to_wishlist', function() {
			counter++;
			oceanwp_wishlist_count( counter );
		} );

		// Decrease counter on item remove
		$j( 'body' ).on( 'removed_from_wishlist', function() {
			counter--;
			oceanwp_wishlist_count( counter );
		} );

		oceanwp_wishlist_count( counter );

	}

}