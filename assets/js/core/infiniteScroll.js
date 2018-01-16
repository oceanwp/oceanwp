var $j 		= jQuery.noConflict(),
	$window = $j( window );

$window.on( 'load', function() {
	"use strict";
	if ( $j.fn.infiniteScroll !== undefined && $j( 'div.infinite-scroll-nav' ).length ) {
		// Infinite scroll
		oceanwpInfiniteScrollInit();
	}
} );

/* ==============================================
INFINITE SCROLL
============================================== */
function oceanwpInfiniteScrollInit() {
	"use strict"

	// Get infinite scroll container
	var $container = $j( '.infinite-scroll-wrap' );

	// Start infinite sccroll
	$container.infiniteScroll( {
		path 	: '.older-posts a',
		append 	: '.item-entry',
		status 	: '.scroller-status',
		hideNav : '.infinite-scroll-nav',
		history : false,
	} );

	$container.on( 'load.infiniteScroll', function( event, response, path, items ) {

		var $items = $j( response ).find( '.item-entry' );

		$items.imagesLoaded( function() {

			// Animate new Items
			$items.animate( {
				opacity : 1
			} );

			// Force the images to be parsed to fix Safari issue
			$items.find( 'img' ).each( function( index, img ) {
				img.outerHTML = img.outerHTML;
			} );

			// Isotope
			if ( $container.hasClass( 'blog-masonry-grid' ) ) {
				$container.isotope( 'appended', $items );
				$items.css( 'opacity', 0 );
			}

			// Re-run functions
			if ( ! $j( 'body' ).hasClass( 'no-carousel' ) ) {
				oceanwpInitCarousel( $items );
			}

			if ( ! $j( 'body' ).hasClass( 'no-lightbox' ) ) {
				oceanwpInitLightbox( $items );
			}

			// Match heights
			if ( ! $j( 'body' ).hasClass( 'no-matchheight' ) ) {
				$j( '.blog-equal-heights .blog-entry-inner' ).matchHeight({ property: 'min-height' });
			}

		    // Gallery posts
		    if ( $j( '.gallery-format' ).parent( '.thumbnail' ) && $j( '.blog-masonry-grid' ).length ) {
				setTimeout( function() {
					$j( '.blog-masonry-grid' ).isotope( 'layout' );
				}, 600 + 1 );
			}

		} );

	} );

}