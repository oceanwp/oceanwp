var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// Nav no click
	oceanwpNavNoClick();
} );

/* ==============================================
NAV NO CLICK
============================================== */
function oceanwpNavNoClick() {
	"use strict"

	$j( 'li.nav-no-click > a' ).on( 'click', function() {
		return false;
	} );

}