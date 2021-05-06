var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// Custom select
	oceanwpCustomSelects();
} );

/* ==============================================
CUSTOM SELECT
============================================== */
function oceanwpCustomSelects() {
	"use strict"

	$j( oceanwpLocalize.customSelects ).customSelect( {
		customClass: 'theme-select'
	} );

}