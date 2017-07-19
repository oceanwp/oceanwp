var $j 		= jQuery.noConflict(),
	$window = $j( window );

$window.on( 'load', function() {
	"use strict";
	if ( $j.fn.infinitescroll !== undefined && $j( 'div.infinite-scroll-nav' ).length ) {
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
	var $container = $j( '#blog-entries' );

	// Start infinite sccroll
	$container.infinitescroll( {
		loading : {
			msg         : null,
			finishedMsg : null,
			msgText     : '<div class="infinite-scroll-loader"></div>',
		},
		navSelector  : 'div.infinite-scroll-nav',
		nextSelector : 'div.infinite-scroll-nav div.older-posts a',
		itemSelector : '.blog-entry',
	},

	// Callback function
	function( newElements ) {

		var $newElems = $j( newElements ).css( 'opacity', 0 );

		$newElems.imagesLoaded( function() {

			// Isotope
			if ( $container.hasClass( 'blog-masonry-grid' ) ) {
				$container.isotope( 'appended', $newElems );
				$newElems.css( 'opacity', 0 );
			}

			// Animate new Items
			$newElems.animate( {
				opacity : 1
			} );

			// Add trigger
			$container.trigger( 'oceanwpinfiniteScrollLoaded' );

			// Re-run functions
			if ( ! $j( 'body' ).hasClass( 'no-carousel' ) ) {
				oceanwpInitCarousel( $newElems );
			}

			if ( ! $j( 'body' ).hasClass( 'no-lightbox' ) ) {
				oceanwpInitLightbox( $newElems );
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