var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// Masonry grids
	oceanwpMasonryGrids();
} );

$j( window ).on( 'orientationchange', function() {
	"use strict";
	// Masonry grids
	oceanwpMasonryGrids();
} );

/* ==============================================
MASONRY
============================================== */
function oceanwpMasonryGrids() {
	"use strict"

	$j( '.blog-masonry-grid' ).each( function() {

		var $this               = $j( this ),
			$transitionDuration = '0.0',
			$layoutMode         = 'masonry';

		// Load isotope after images loaded
		$this.imagesLoaded( function() {
			$this.isotope( {
				itemSelector       : '.isotope-entry',
				transformsEnabled  : true,
				isOriginLeft       : oceanwpLocalize.isRTL ? false : true,
				transitionDuration : $transitionDuration + 's'
			} );
		} );

	} );

}