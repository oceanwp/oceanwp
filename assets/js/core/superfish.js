var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
	// Superfish menus
	oceanwpSuperFish();
} );

/* ==============================================
SUPERFISH MENUS
============================================== */
function oceanwpSuperFish() {
	"use strict"

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