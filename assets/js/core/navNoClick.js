( function() {

	var menu_link = document.querySelectorAll( 'li.nav-no-click > a' );

	if ( ! menu_link.length ) {
		return;
	}

	menu_link.forEach( function ( link, index ) {

		link.addEventListener( 'click', function( e ) {
			e.preventDefault();
			return false;
		});

	});

}() );