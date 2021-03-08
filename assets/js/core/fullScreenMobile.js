/**
 * Full screen mobile menu
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpFullScreenMobile();
} );

// Full screen mobile menu function.
function oceanwpFullScreenMobile() {

	var htmlEle  = document.documentElement,
		body     = document.getElementsByTagName( 'body' )[0],
		fsMobile = document.querySelector( '#mobile-fullscreen' );

	if ( body.matches( '.fullscreen-mobile' ) ) {

		var mobileMenu 	= document.querySelector( '#mobile-fullscreen' ),
			mobileLink 	= document.querySelector( '.mobile-menu' ),
			hamburger   = document.querySelector( '.mobile-menu > .hamburger' ),
			closeMenu   = mobileMenu.querySelector( 'a.close' );

		// Close menu function.
		var oceanwpFullScreenMobileClose = function( e ) {
			mobileLink.classList.remove( 'exit' );
			mobileMenu.classList.remove( 'active' );
			fadeOut( mobileMenu );

			htmlEle.style.cssText = "overflow: ''; margin-right: ''";

			var fsDropdown = fsMobile.querySelectorAll( 'nav ul > li.dropdown' ),
				fsSubmenu  = fsMobile.querySelectorAll( 'nav ul.sub-menu' );

			for( const dropdown of fsDropdown ) {
				dropdown.classList.remove( 'open-sub' );
			}

			for( const submenu of fsSubmenu ) {
				slideUp( submenu, 200 );
			}

			hamburger.classList.remove( 'is-active' );

		}

		// Open full screen menu.
		mobileLink.addEventListener( 'click', function(e) {
			e.preventDefault();

			this.classList.add( 'exit' );
			mobileMenu.classList.add( 'active' );
			fadeIn( mobileMenu );
			hamburger.classList.add( 'is-active' );

            var innerWidth = htmlEle.innerWidth;
			htmlEle.style.overflow = 'hidden';

			var hiddenInnerWidth = htmlEle.innerWidth;
			htmlEle.style.marginRight = hiddenInnerWidth - innerWidth;

			return false;

		} );

		// Add dropdown toggle (plus)
		var menuhasChildren = mobileMenu.querySelectorAll( '.menu-item-has-children > a' );
			for ( const child of menuhasChildren ) {

				var addSpan = document.createElement( 'span' );

				addSpan.classList.add( 'dropdown-toggle' );
				child.appendChild( addSpan );
			}

		var linkArrow = mobileMenu.querySelectorAll( 'nav ul > li.menu-item-has-children > a > span.dropdown-toggle' );

		// Logic for open sub menus
		for( const link of linkArrow ) {
			link.addEventListener( 'click', function(e) {
				e.preventDefault();

				let thisEle   = this.parentNode.parentNode,
					ulSubmenu = thisEle.querySelector( 'ul.sub-menu' );

				if ( thisEle.matches( '.open-sub' ) ) {
					thisEle.classList.remove( 'open-sub' );
					slideUp( ulSubmenu, 200 );
				} else {
					thisEle.classList.add( 'open-sub' );
					slideDown( ulSubmenu, 200 );
				}

				return false;

			} );
		}

		// Close menu
		closeMenu.addEventListener( 'click', function(e) {
			e.preventDefault();
			oceanwpFullScreenMobileClose();
		} );

		var fsCloseLink = mobileMenu.querySelectorAll( '.fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-nav li a[href*="#"]:not([href="#"])' );

		// Close menu if anchor link
		for( const closeLink of fsCloseLink ) {
			closeLink.addEventListener( 'click', function(e) {
				e.preventDefault();
				oceanwpFullScreenMobileClose();
			});
		}

		// Close on resize
		window.addEventListener( 'resize', function() {
			if ( window.innerWidth >= 960 ) {
				oceanwpFullScreenMobileClose();
			}
		} );

	}

}