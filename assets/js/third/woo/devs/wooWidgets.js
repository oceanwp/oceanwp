var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
    // Woo remove brackets from categories and filter widgets
    oceanwpWooRemoveBrackets();
} );

/* ==============================================
WOOCOMMERCE REMOVE BRACKETS
============================================== */
function oceanwpWooRemoveBrackets() {
	"use strict"

	$j( '.widget_layered_nav span.count, .widget_product_categories span.count' ).each( function() {
		var count = $j( this ).html();
		count = count.substring( 1, count.length-1 );
		$j( this ).html( count );
	} );

}