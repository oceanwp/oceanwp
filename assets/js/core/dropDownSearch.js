/**
 * DropDown search
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpDropDownSearch();
} );

// DropDown search function.
function oceanwpDropDownSearch() {

	// Return if is the not this search style.
	if ( 'drop_down' != oceanwpLocalize.menuSearchStyle ) {
		return;
	}

	var searchDropdownToggle = document.querySelector( 'a.search-dropdown-toggle' ),
		searchDropdownForm   = document.querySelector( '#searchform-dropdown' );

	searchDropdownToggle.addEventListener( 'click', function(e) {
		e.preventDefault();

		// Display search form.
		searchDropdownForm.classList.toggle( 'show' );

		// Active menu item.
		this.parentNode.classList.toggle( 'active' );

		setTimeout( function() {
			searchDropdownForm.querySelector( 'input.field' ).focus();
		}, 200 );

		// Return false.
		return false;
	} );

	// Close if click outside.
	window.addEventListener( 'click', function(e) {

		if ( ! searchDropdownForm.contains( e.target ) && ( ! searchDropdownToggle.contains( e.target ) ) ) {
			searchDropdownForm.classList.remove( 'show' );
			searchDropdownToggle.parentNode.classList.remove( 'active' );
		}

	} );

}