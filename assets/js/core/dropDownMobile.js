/**
 * Drop down mobile menu
 */
document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpDropDownMobile();
} );

// Drop down mobile menu function.
function oceanwpDropDownMobile() {

	var htmlEle  = document.documentElement,
		body     = document.getElementsByTagName( 'body' )[0];

	if ( body.matches( '.dropdown-mobile' ) ) {

		var	mobileMenu     = document.querySelector( '.mobile-menu' ),
			mobileDropDown = document.querySelector( '#mobile-dropdown' ),
			menuHamburger  = document.querySelector( '.mobile-menu > .hamburger' );

		// Open drop down menu.
		mobileMenu.addEventListener( 'click', function(e) {
			e.preventDefault();
			slideToggle( mobileDropDown, 500 );
			mobileMenu.classList.toggle( 'opened' );
			menuHamburger.classList.toggle( 'is-active' );
			return false;
		} );

		// Close menu function.
		var oceanwpDropDownMobileClose = function( e ) {
			slideUp( mobileDropDown, 200 );
			mobileMenu.classList.remove( 'opened' );
			menuHamburger.classList.remove( 'is-active' );
		}

		var isMenuOpen = false;
		menuHamburger.addEventListener( 'click', function() {
			isMenuOpen = !isMenuOpen;
			this.setAttribute( 'aria-expanded', isMenuOpen );
		} );

		// Declare useful vars
		var hasChildren = mobileDropDown.querySelectorAll( '.menu-item-has-children > a' );
		for ( const child of hasChildren ) {

			var addSpan = document.createElement( 'span' );

			addSpan.classList.add( 'dropdown-toggle' );
			child.appendChild( addSpan );

		}

		var dropdownTarget = mobileDropDown.querySelectorAll( 'li.menu-item-has-children > a > span.dropdown-toggle' );

		// Check localization
		if ( oceanwpLocalize.sidrDropdownTarget == 'link' ) {
			dropdownTarget = mobileDropDown.querySelectorAll( 'li.menu-item-has-children > a' );
		}

		for ( const dropdown of dropdownTarget ) {

			// Add toggle click event
			dropdown.addEventListener( 'click', function(e) {
				e.preventDefault();

				// Define toggle vars
				if ( oceanwpLocalize.sidrDropdownTarget == 'link' ) {
					var toggleParentLi = this.parentNode;
				} else {
					var toggleParentLink = this.parentNode,
						toggleParentLi   = toggleParentLink.parentNode;
				}

				var ulSubmenu = toggleParentLi.querySelector( 'ul.sub-menu' );

				toggleParentLi.classList.toggle( 'active' );
				slideToggle( ulSubmenu, 200 );

				// Return false
				return false;

			} );

		}

		window.addEventListener( 'click', function(e) {
			if ( ! mobileMenu.contains( e.target ) && ! menuHamburger.contains( e.target ) && ! mobileDropDown.contains( e.target ) ) {
				mobileMenu.classList.remove( 'opened' );
				menuHamburger.classList.remove( 'is-active' );
				slideUp( mobileDropDown, 200 );
			}
		} );

		mobileDropDown.addEventListener( 'click', function(e) {
			e.stopPropagation();
		} );

		// Close on resize
		window.addEventListener( 'resize', function() {
			if ( window.innerWidth >= 960 ) {
				oceanwpDropDownMobileClose();
			}
		} );

		// Close menu if anchor link
		var anchorLink = mobileDropDown.querySelectorAll( 'li a[href*="#"]:not([href="#"])' );
		for ( const link of anchorLink ) {
			link.addEventListener( 'click', function(e) {
				e.preventDefault();
				oceanwpDropDownMobileClose();
			} );
		}

	}

}

( function() {

	var owpHeader = document.getElementById('site-header'),
		navWarap = document.querySelectorAll( '#mobile-dropdown nav' )[0];
	if ( ! owpHeader || ! navWarap ) {
		return;
	}

	document.addEventListener( 'keydown', function( event ) {

		var selectors = 'input, a, button',
			elements  = navWarap.querySelectorAll( selectors ),
			closMenu  = document.querySelector( '.mobile-menu.opened' ),
			lastEl    = elements[ elements.length - 1 ],
			firstEl   = elements[0],
			activeEl  = document.activeElement,
			tabKey    = event.keyCode === 9,
			shiftKey  = event.shiftKey;


		if ( ! shiftKey && tabKey && lastEl ===  activeEl ) {
			event.preventDefault();
			closMenu.focus();
		}

		if ( shiftKey && tabKey && firstEl === activeEl ) {
			event.preventDefault();
			closMenu.focus();
		}

		if ( shiftKey && tabKey && closMenu === activeEl ) {
			event.preventDefault();
			lastEl.focus();
		}

	});

}() );