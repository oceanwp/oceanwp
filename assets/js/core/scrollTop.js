/**
 * Scroll to Top
 */
document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpScrollTop();
} );

// Scroll to top function.
function oceanwpScrollTop() {

	var rootElement    = document.documentElement,
		scrollTopClass = document.querySelector( '#scroll-top' ),
		intervalId     = 0;

	window.addEventListener( 'scroll', function() {

		if ( rootElement.scrollTop > 100 ) {
			fadeIn( scrollTopClass );
		} else {
			fadeOut( scrollTopClass );
		}

	});

	scrollTopClass.addEventListener( 'click', function(e) {
		e.preventDefault();
		intervalId = setInterval( function() {
			if (window.pageYOffset === 0) {
				clearInterval(intervalId);
			}
			window.scroll(0, window.pageYOffset - 50);
		}, 10);
	});

}