/**
 * Fixed Footer
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpFixedFooter();
} );

// Define variables.
var lastWindowWidth  = window.innerWidth,
	lastWindowHeight = window.innerHeight;

// On window resize.
window.addEventListener( 'resize', function() {

    var windowWidth  = window.innerWidth,
        windowHeight = window.innerHeight;

    if ( lastWindowWidth !== windowWidth || lastWindowHeight !== windowHeight ) {
        oceanwpFixedFooter();
    }
});

// Fixed footer function
function oceanwpFixedFooter() {

    var body = document.getElementsByTagName( 'body' )[0];

    // Return if not fixed footer.
    if ( ! body.matches( '.has-fixed-footer' ) ) {
        return;
    }

    // Set main vars.
    var mainEle     = document.querySelector( '#main' ),
        mainHeight 	= mainEle.offsetHeight,
    	htmlHeight 	= document.documentElement.offsetHeight,
        offset      = 0,
        adminBar    = document.getElementById( 'wpadminbar' );

    // If exist adminbar.
    if ( adminBar ) {
        offset = adminBar.offsetHeight;
    }

    // Get total height.
    var minEleHeight = mainHeight + ( window.innerHeight - htmlHeight - offset );

    // Add min height.
    mainEle.style.minHeight = minEleHeight+'px';
}