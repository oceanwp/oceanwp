var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// Nav no click
	mobileSearchIcon();
} );

function mobileSearchIcon() {
	"use strict"

	console.log('Hi Search');

	if ( 'drop_down' === oceanwpLocalize.menuSearchStyle ) {

		var $searchDropdownToggle = $j( '.search-icon-dropdown' ),
			$searchDropdownForm   = $j( '.search-style-dropdown' );

		$searchDropdownToggle.click( function( event ) {
			// Display search form
			$searchDropdownForm.toggleClass( 'show' );
			// Active menu item
			$j( this ).parent().toggleClass( 'active' );
			// Focus
			var $transitionDuration = $searchDropdownForm.css( 'transition-duration' );
			$transitionDuration = $transitionDuration.replace( 's', '' ) * 1000;
			if ( $transitionDuration ) {
				setTimeout( function() {
					$searchDropdownForm.find( 'input.field' ).focus();
				}, $transitionDuration );
			}
			// Return false
			return false;
		} );

		// Close on doc click
		$j( document ).on( 'click', function( event ) {
			if ( ! $j( event.target ).closest( '#searchform-dropdown.show' ).length ) {
				$searchDropdownToggle.parent( 'li' ).removeClass( 'active' );
				$searchDropdownForm.removeClass( 'show' );
			}
		} );

	} else if ( 'overlay' === oceanwpLocalize.menuSearchStyle ) {

		var $searchOverlayToggle 	= $j( '.search-icon-overlay' ),
			$searchOverlayClose 	= $j( '.search-overlay-close' ),
			$searchOverlay 			= $j( '.search-style-overlay' );

		if ( $searchOverlayToggle.length ) {

			$searchOverlayToggle.on( 'click', function( e ) {
				e.preventDefault();

				$searchOverlay.addClass( 'active' );
				$searchOverlay.fadeIn( 200 );

				setTimeout( function() {
					$j( 'html' ).css( 'overflow', 'hidden' );
				}, 400);

			} );
		}

		$searchOverlayClose.on( 'click', function( e ) {
			e.preventDefault();

			$searchOverlay.removeClass( 'active' );
			$searchOverlay.fadeOut( 200 );

			setTimeout( function() {
				$j( 'html' ).css( 'overflow', 'visible' );
			}, 400);

		} );

		$searchOverlayToggle.on( 'click', function() {
			$j( '.search-style-overlay input' ).focus();
		} );

	}
}

// ( function( $ ) {
// 	var mobileSearchIcon = function( $scope, $ ) {


// 		// Drop Down
// 		if ( $search.find( '.icon-search-style-dropdown' ).length ) {

// 			var	$icon 	= $search.find( '.search-icon-dropdown' ),
// 				$form 	= $search.find( '.search-style-dropdown' );

// 			$icon.click( function( event ) {

// 				// Display search form
// 				$form.fadeToggle( 'fast' );

// 				// Active menu item
// 				$j( this ).parent().toggleClass( 'active' );

// 				// Focus
// 				$form.find( 'input.field' ).focus();

// 				// Return false
// 				return false;
// 			} );

// 			// Close on doc click
// 			$j( document ).on( 'click', function( event ) {
// 				if ( ! $j( event.target ).closest( '.search-style-dropdown' ).length ) {
// 					$icon.parent().removeClass( 'active' );
// 					$form.fadeOut( 'fast' );
// 				}
// 			} );

// 		}

// 		// Overlay
// 		if ( $search.find( '.oew-search-icon-overlay' ).length ) {

// 			var $link 		= $search.find( 'a.oew-overlay-link' ),
// 				$close 		= $search.find( 'a.oew-search-overlay-close' ),
// 				$overlay 	= $search.find( '.oew-search-overlay' );

// 			if ( $link.length ) {

// 				$link.on( 'click', function( e ) {
// 					e.preventDefault();

// 					$overlay.addClass( 'active' );
// 					$overlay.fadeIn( 200 );

// 		            setTimeout( function() {
// 						$j( 'html' ).css( 'overflow', 'hidden' );
// 		            }, 400);

// 				} );

// 			}

// 			$close.on( 'click', function( e ) {
// 				e.preventDefault();

// 				$overlay.removeClass( 'active' );
// 				$overlay.fadeOut( 200 );

// 		        setTimeout( function() {
// 					$j( 'html' ).css( 'overflow', 'visible' );
// 		        }, 400);

// 			} );

// 			$link.on( 'click', function() {
// 				$overlay.find( 'input' ).focus();
// 			} );

// 	        // Move the modal to the footer
// 	        $overlay.appendTo( 'body' );

// 	        // Add class when the search input is not empty
// 			$overlay.find( 'form' ).each( function() {

// 				var form 		= $j( this ),
// 					listener	= form.find( 'input' ),
// 					$label 		= form.find( 'label' );

// 				if ( listener.val().length ) {
// 					form.addClass( 'search-filled' );
// 				}

// 				listener.on( 'keyup blur', function() {
// 					if ( listener.val().length > 0 ) {
// 					  form.addClass( 'search-filled' );
// 					} else {
// 					  form.removeClass( 'search-filled' );
// 					}
// 				} );

// 		    } );

// 		}

// 	};

// } )( jQuery );