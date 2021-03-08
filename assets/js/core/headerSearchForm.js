/**
 *  Header search form
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpHeaderSearchForm();
} );

// Header search form function.
function oceanwpHeaderSearchForm() {

	var searchForm = document.querySelectorAll( 'form.header-searchform' );

	if ( ! searchForm.length ) {
		return;
	}

	searchForm.forEach( function ( owpSearchForm, e ) {

		var	listener = owpSearchForm.querySelector( 'input' );

		if ( listener.value.length ) {
			owpSearchForm.classList.add( 'search-filled' );
		}

		listener.addEventListener( 'keyup', function() {
			if ( listener.value.length > 0 ) {
				owpSearchForm.classList.add( 'search-filled' );
			} else {
				owpSearchForm.classList.remove( 'search-filled' );
			}
		} );

	} );

}