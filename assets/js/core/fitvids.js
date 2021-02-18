/**
 * Fitvids
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpInitFitVids();
} );

// Fitvids function.
function oceanwpInitFitVids( $context ) {

	var frameClass = document.querySelectorAll( '.responsive-video-wrap, .responsive-audio-wrap', $context );

	for ( const elem of frameClass ) {
		var videos = new FitVids();
		videos.render();
	}
}