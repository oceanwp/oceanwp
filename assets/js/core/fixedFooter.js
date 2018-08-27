var $j 					= jQuery.noConflict(),
	$window 			= $j( window ),
	$lastWindowWidth 	= $window.width(),
	$lastWindowHeight 	= $window.height();

$window.on( 'load', function() {
	"use strict";
	// Fixed footer
	oceanwpFixedFooter();
} );

$window.resize( function() {
	"use strict";

	var $windowWidth  = $window.width(),
		$windowHeight = $window.height();

    if ( $lastWindowWidth !== $windowWidth
    	|| $lastWindowHeight !== $windowHeight ) {
        oceanwpFixedFooter();
    }

} );

/* ==============================================
FIXED FOOTER
============================================== */
function oceanwpFixedFooter() {
	"use strict"

    if ( ! $j( 'body' ).hasClass( 'has-fixed-footer' ) ) {
        return;
    }

    // Set main vars
    var $mainHeight 	= $j( '#main' ).outerHeight(),
    	$htmlHeight 	= $j( 'html' ).height(),
        $offset         = 0,
        $adminBar       = $j( '#wpadminbar' );

    if ( $adminBar.length ) {
        $offset         = $adminBar.outerHeight();
    }

    var $minHeight 		= $mainHeight + ( $window.height() - $htmlHeight - $offset );

    // Add min height
    $j( '#main' ).css( 'min-height', $minHeight );

}