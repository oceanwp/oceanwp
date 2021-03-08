/**
 * Full screen menu
 */
 document.addEventListener( 'DOMContentLoaded', function() {
	oceanwpFullScreenMenu();
} );

// Full screen menu fucntion
function oceanwpFullScreenMenu() {

	var htmlEle    = document.documentElement,
		siteHeader = document.querySelector( '#site-header.full_screen-header' );

	if ( ! siteHeader ) {
		return;
	}

	var	menuWrap   = siteHeader.querySelector( '#full-screen-menu' ),
		menuBar    = siteHeader.querySelector( '.menu-bar' ),
		customLogo = document.querySelector( '#site-logo.has-full-screen-logo' );

	if ( menuBar ) {

		// Open menu function.
		var oceanwpFullScreenMenuOpen = function() {
			siteHeader.classList.add( 'nav-open' );
			menuBar.classList.add( 'exit' );
			if ( customLogo ) {
				customLogo.classList.add( 'opened' );
			}
			menuWrap.classList.add( 'active' );
			fadeIn( menuWrap );

			var innerWidth = htmlEle.innerWidth;
			htmlEle.style.overflow = 'hidden';

			var hiddenInnerWidth = htmlEle.innerWidth;
			htmlEle.style.marginRight = hiddenInnerWidth - innerWidth;
		}

		// Close menu function.
		var oceanwpFullScreenMenuClose = function() {
			siteHeader.classList.remove( 'nav-open' );
			menuBar.classList.remove( 'exit' );
			if ( customLogo ) {
				customLogo.classList.remove( 'opened' );
			}
			menuWrap.classList.remove( 'active' );
			fadeOut( menuWrap );

			htmlEle.style.cssText = "overflow: ''; margin-right: ''";

			var fsDropdown = menuWrap.querySelectorAll( '#site-navigation ul > li.dropdown' ),
				fsSubmenu  = menuWrap.querySelectorAll( '#site-navigation ul.sub-menu' );

			for ( const dropdown of fsDropdown) {
				dropdown.classList.remove( 'open-sub' );
			}

			for ( const submenu of fsSubmenu) {
				slideUp( submenu, 200 );
			}

		}

		menuBar.addEventListener( 'click', function(e) {
			e.preventDefault();

			if ( ! this.matches( '.exit' ) ) {
				oceanwpFullScreenMenuOpen();
	        } else {
	        	oceanwpFullScreenMenuClose();
	        }

		} );

		var linkArrow = menuWrap.querySelectorAll( '#site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow' );

		// Logic for open sub menus
		for( const link of linkArrow ) {
			link.addEventListener( 'click', function(e) {
				e.preventDefault();

				let thisEle   = this.parentNode.parentNode.parentNode,
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

		var fsCloseLink = menuWrap.querySelectorAll( '#site-navigation a.menu-link[href*="#"]:not([href="#"])' );

		for( const closeLink of fsCloseLink ) {
			closeLink.addEventListener( 'click', function(e) {
				e.preventDefault();
				oceanwpFullScreenMenuClose();
			});
		}

	}

}