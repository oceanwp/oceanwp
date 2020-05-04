var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// Superfish menus
	oceanwpSuperFish();
} );

/* ==============================================
SUPERFISH MENUS
============================================== */
function oceanwpSuperFish() {
	"use strict"

	// Return if vertical header style
	if ( $j( '#site-header' ).hasClass( 'vertical-header' ) ) {
		return;
	}

	$j( 'ul.sf-menu' ).superfish( {
		delay: 600,
		animation: {
			opacity: 'show'
		},
		animationOut: {
			opacity: 'hide'
		},
		speed: 'fast',
		speedOut: 'fast',
		cssArrows: false,
		disableHI: false,
	} );

}