var $j 		= jQuery.noConflict(),
	$window = $j( window );

$j( document ).ready( function() {
	"use strict";
	// Drop down mobile menu
	oceanwpDropDownMobile();
} );

/* ==============================================
DROPDOWN MOBILE SCRIPT
============================================== */
function oceanwpDropDownMobile() {
	"use strict"

	if ( $j( 'body' ).hasClass( 'dropdown-mobile' ) ) {

		// Open drop down menu
		$j( '.mobile-menu' ).on( 'click', function() {
			$j( '#mobile-dropdown' ).slideToggle( 500 );
			$j( this ).toggleClass( 'opened' );
			$j( '.mobile-menu > .hamburger' ).toggleClass( 'is-active' );
			return false;
		} );

		// Close menu function
		var oceanwpDropDownMobileClose = function( e ) {
			$j( '#mobile-dropdown' ).slideUp( 200 );
			$j( '.mobile-menu' ).removeClass( 'opened' );
			$j( '.mobile-menu > .hamburger' ).removeClass( 'is-active' );
		}

		var $owpmenu = $j( '.mobile-menu > .hamburger' );
		var isMenuOpen = false;
		$owpmenu.on('click', function () {
			isMenuOpen = !isMenuOpen;
			$owpmenu.attr('aria-expanded', isMenuOpen);
		});

		// Declare useful vars
		var $hasChildren = $j( '#mobile-dropdown .menu-item-has-children' );

		// Add dropdown toggle (plus)
		$hasChildren.children( 'a' ).append( '<span class="dropdown-toggle"></span>' );

		// Toggle dropdowns
		var $dropdownTarget = $j( '.dropdown-toggle' );

		// Check localization
		if ( oceanwpLocalize.sidrDropdownTarget == 'link' ) {
			$dropdownTarget = $j( '#mobile-dropdown li.menu-item-has-children > a' );
		}

		// Add toggle click event
		$dropdownTarget.on( 'tap click', function() {

			// Define toggle vars
			if ( oceanwpLocalize.sidrDropdownTarget == 'link' ) {
				var $toggleParentLi = $j( this ).parent( 'li' );
			} else {
				var $toggleParentLink = $j( this ).parent( 'a' ),
					$toggleParentLi   = $toggleParentLink.parent( 'li' );
			}

			// Get parent items and dropdown
			var $allParentLis = $toggleParentLi.parents( 'li' ),
				$dropdown     = $toggleParentLi.children( 'ul' );

			// Toogle items
			if ( ! $toggleParentLi.hasClass( 'active' ) ) {
				$hasChildren.not( $allParentLis ).removeClass( 'active' ).children( 'ul' ).slideUp( 'fast' );
				$toggleParentLi.addClass( 'active' ).children( 'ul' ).slideDown( 'fast' );
			} else {
				$toggleParentLi.removeClass( 'active' ).children( 'ul' ).slideUp( 'fast' );
			}

			// Return false
			return false;

		} );

		// Close menu
		$j( document ).on( 'click', function() {
			oceanwpDropDownMobileClose();
		} ).on( 'click', '#mobile-dropdown', function( e ) {
		    e.stopPropagation();
		} );

		// Close on resize
		$window.resize( function() {
			if ( $window.width() >= 960 ) {
				oceanwpDropDownMobileClose();
			}
		} );

		// Close menu if anchor link
        $j( '#mobile-dropdown li a[href*="#"]:not([href="#"])' ).on( 'click', function() {
        	oceanwpDropDownMobileClose();
	    } );

	}

}