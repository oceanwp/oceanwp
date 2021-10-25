( function($) {

	$( document ).ready(function () {

		$( '.oceanwp-typography-select' ).each( function() {
			$(this).append( ocean_wp_fonts_list.content );
		});

		$( '.oceanwp-typography-select' ).select2();
	} );

} )( jQuery );