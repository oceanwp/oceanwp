var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
    // Responsive Video
	oceanwpInitFitVids();
} );

/* ==============================================
RESPONSIVE VIDEOS
============================================== */
function oceanwpInitFitVids( $context ) {
	"use strict"

	$j( '.responsive-video-wrap, .responsive-audio-wrap', $context ).fitVids();

}