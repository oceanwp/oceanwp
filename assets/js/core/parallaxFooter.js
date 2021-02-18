/**
 * Parallax Footer
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpParallaxFooter();
} );

// On window resize.
window.addEventListener( 'resize', function() {
	oceanwpParallaxFooter();
} );

// Parallax footer function
function oceanwpParallaxFooter() {

	var body    = document.getElementsByTagName( 'body' )[0];
		mainEle = document.querySelector( '#main' );

	// Needed timeout for dynamic parallax content.
	if ( body.matches( '.has-parallax-footer' ) ) {

		setTimeout( function() {

			// Get height.
			let footerHeight = document.querySelector( '.parallax-footer' ).offsetHeight;

			// Add the margin-bottom.
			mainEle.style.marginBottom =  footerHeight+'px';

		}, 1 );

	}

}