var $j = jQuery.noConflict();

// On ready
$j( document ).ready( function() {
	"use strict";
	// Vertical header style
	oceanwpVerticalHeader();

} );

/* ==============================================
VERTICAL HEADER STYLE
============================================== */
function oceanwpVerticalHeader() {
	"use strict"

	// Return if no vertical header style
	if ( ! $j( '#site-header' ).hasClass( 'vertical-header' ) ) {
		return;
	}

	// Vars
	var $siteHeader = $j( '#site-header.vertical-header #site-header-inner' ),
		$hasChildren = $j( '#site-header.vertical-header li.menu-item-has-children' );

	// Add dropdown toggle (plus)
	$hasChildren.children( 'a' ).append( '<span class="dropdown-toggle"></span>' );

	// Toggle dropdowns
	var $dropdownTarget = $j( '.dropdown-toggle' );

	// Check localization
	if ( oceanwpLocalize.verticalHeaderTarget == 'link' ) {
		$dropdownTarget = $j( '#site-header.vertical-header li.menu-item-has-children > a' );
	}

	// Add toggle click event
	$dropdownTarget.on( 'tap click', function() {

		// Define toggle vars
		if ( oceanwpLocalize.verticalHeaderTarget == 'link' ) {
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
			$toggleParentLi.addClass( 'active' ).children( 'ul' ).slideDown( 'fast', function() {
				$siteHeader.getNiceScroll().resize();
			} );
		} else {
			$toggleParentLi.removeClass( 'active' ).children( 'ul' ).slideUp( 'fast', function() {
				$siteHeader.getNiceScroll().resize();
			} );
		}

		// Return false
		return false;

	} );

	// Scrollbar
	if ( $siteHeader.length
		&& ! navigator.userAgent.match( /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/ ) ) {
		$siteHeader.niceScroll( {
			autohidemode		: false,
			cursorborder		: 0,
			cursorborderradius	: 0,
			cursorcolor			: 'transparent',
			cursorwidth			: 0,
			horizrailenabled	: false,
			mousescrollstep		: 40,
			scrollspeed			: 60,
			zindex				: 100005,
		} );
	}

	// Open/Close header
	$j( 'a.vertical-toggle' ).on( 'click', function( e ) {
		e.preventDefault();

		if ( ! $j( 'body' ).hasClass( 'vh-opened' ) ) {

			$j( 'body' ).addClass( 'vh-opened' );
			$j( this ).find( '.hamburger' ).addClass( 'is-active' );

		} else {

			$j( 'body' ).removeClass( 'vh-opened' );
			$j( this ).find( '.hamburger' ).removeClass( 'is-active' );

		}

	} );

}