var $j 		= jQuery.noConflict(),
	$window = $j( window );

$j( document ).on( 'ready', function() {
	"use strict";
	// Scroll effect
	oceanwpScrollEffect();
} );

/* ==============================================
SCROLL EFFECT
============================================== */
function oceanwpScrollEffect() {
	"use strict"

	if ( ! $j( 'body' ).hasClass( 'single-product' )
		&& ! $j( 'body' ).hasClass( 'no-local-scroll' ) ) {

	    $j( 'a[href*="#"]:not([href="#"])' ).on( 'click', function() {

	        if ( ! $j( this ).hasClass( 'no-effect' )
	        	&& ! $j( this ).hasClass( 'page-numbers' )
	        	&& ! $j( this ).hasClass( 'omw-open-modal' )
	        	&& ! $j( this ).parent().hasClass( 'omw-open-modal' )
	        	&& ! $j( this ).parent().parent().parent().hasClass( 'omw-open-modal' ) ) {

	        	var $href     				= $j( this ).attr( 'href' ),
				    $hrefHash 				= $href.substr( $href.indexOf( '#' ) ).slice( 1 ),
				    $target   				= $j( '#' + $hrefHash ),
					$adminbarHeight        	= oceanwpGetAdminbarHeight(),
					$topbarHeight        	= oceanwpGetTopbarHeight(),
					$stickyHeaderHeight    	= oceanwpGetStickyHeaderHeight(),
				    $scrollPosition;

				if ( $target.length && '' !== $hrefHash ) {
					$scrollPosition     	= $target.offset().top - $adminbarHeight - $topbarHeight - $stickyHeaderHeight;

	                $j( 'html, body' ).stop().animate( {
						 scrollTop: Math.round( $scrollPosition )
					}, 1000 );

					return false;

	            }
	        }

	    } );

	}

}

// Admin bar height
function oceanwpGetAdminbarHeight() {
	"use strict"

	var $adminbarHeight = 0;

	if ( $j( '#wpadminbar' ).length ) {
		$adminbarHeight = parseInt( $j( '#wpadminbar' ).outerHeight() );
	}

	return $adminbarHeight;
}

// Top bar height
function oceanwpGetTopbarHeight() {
	"use strict"

	var $topbarHeight = 0;

	if ( $j( '#top-bar-wrap' ).hasClass( 'oceanwp-top-bar-sticky' )
		&& $j( '#top-bar-wrap' ).length ) {
		$topbarHeight = parseInt( $j( '#top-bar-wrap' ).outerHeight() );
	}

	return $topbarHeight;
}

// Header height
function oceanwpGetStickyHeaderHeight() {
	"use strict"

	var $stickyHeaderHeight = 0;

	if ( $j( '#site-header' ).hasClass( 'fixed-scroll' )
		&& $j( '#site-header' ).length ) {
		$stickyHeaderHeight = $j( '#site-header' ).attr( 'data-height' );
	}

	if ( $window.width() <= 960
		&& ! $j( '#site-header' ).hasClass( 'has-sticky-mobile' )
		&& $j( '#site-header' ).length ) {
		$stickyHeaderHeight = 0;
	}

	return $stickyHeaderHeight;
}