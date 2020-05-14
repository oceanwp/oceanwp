var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// Header search form label
	oceanwpHeaderSearchForm();
} );

/* ==============================================
HEADER SEARCH FORM LABEL
============================================== */
function oceanwpHeaderSearchForm() {
	"use strict"

	// Add class when the search input is not empty
	$j( 'form.header-searchform' ).each( function() {

		var form 		= $j( this ),
			listener	= form.find( 'input' ),
			$label 		= form.find( 'label' );

		if ( listener.val().length ) {
			form.addClass( 'search-filled' );
		}

		listener.on( 'keyup blur', function() {
			if ( listener.val().length > 0 ) {
			  form.addClass( 'search-filled' );
			} else {
			  form.removeClass( 'search-filled' );
			}
		} );

    } );

}