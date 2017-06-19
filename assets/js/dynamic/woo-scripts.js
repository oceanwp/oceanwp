var $j 					= jQuery.noConflict(),
	$window 			= $j( window );

$j( document ).on( 'ready', function() {
	"use strict";
	// Woo menu cart
	woomenuCart();
    // Woo catalog view
    wooGridList();
    // Woo reviews scroll
    wooReviewsScroll();
	// Woo categories widget
	wooCategoriesWidget();
} );

$window.on( 'load', function() {
	"use strict";
	// Woo quantity buttons
	wooQuantityButtons();
} );

$j( document ).ajaxComplete( function() {
	"use strict";
	// Woo quantity buttons
	wooQuantityButtons();
} );

/* ==============================================
WOOCOMMERCE MENU CART
============================================== */
function woomenuCart() {
	"use strict"

	if ( $j( 'a.wcmenucart' ).hasClass( 'go-to-shop' ) ) {
		return;
	}

	// Drop-down
	if ( 'drop_down' == oceanwpLocalize.wooCartStyle ) {

		// Display cart dropdown
		$j( '.toggle-cart-widget' ).click( function( event ) {
			$j( '#searchform-dropdown' ).removeClass( 'show' );
			$j( 'a.search-dropdown-toggle' ).parent( 'li' ).removeClass( 'active' );
			$j( 'div#current-shop-items-dropdown' ).toggleClass( 'show' );
			$j( this ).toggleClass( 'active' );
			return false;
		} );

		// Hide cart dropdown
		$j( 'div#current-shop-items-dropdown' ).click( function( event ) {
			event.stopPropagation(); 
		} );
		$j( document ).click( function() {
			$j( 'div#current-shop-items-dropdown' ).removeClass( 'show' );
			$j( 'li.wcmenucart-toggle-dropdown' ).removeClass( 'active' );
		} );

	}

}

/* ==============================================
WOOCOMMERCE GRID LIST VIEW
============================================== */
function wooGridList() {
	"use strict"

	if ( $j( 'body' ).hasClass( 'has-grid-list' ) ) {

		$j( '#oceanwp-grid' ).on( 'click', function() {
			$j( this ).addClass( 'active' );
			$j( '#oceanwp-list' ).removeClass( 'active' );
			Cookies.set( 'gridcookie', 'grid', { path: '' } );
			$j( '.archive.woocommerce ul.products' ).fadeOut( 300, function() {
				$j( this ).addClass( 'grid' ).removeClass( 'list' ).fadeIn( 300 );
			} );
			return false;
		} );

		$j( '#oceanwp-list' ).on( 'click', function() {
			$j( this ).addClass( 'active' );
			$j( '#oceanwp-grid' ).removeClass( 'active' );
			Cookies.set( 'gridcookie', 'list', { path: '' } );
			$j( '.archive.woocommerce ul.products' ).fadeOut( 300, function() {
				$j( this ).addClass( 'list' ).removeClass( 'grid' ).fadeIn( 300 );
			} );
			return false;
		} );

		if ( Cookies.get( 'gridcookie' ) == 'grid' ) {
	        $j( '.oceanwp-grid-list #oceanwp-grid' ).addClass( 'active' );
	        $j( '.oceanwp-grid-list #oceanwp-list' ).removeClass( 'active' );
	        $j( '.archive.woocommerce ul.products' ).addClass( 'grid' ).removeClass( 'list' );
	    }

	    if ( Cookies.get( 'gridcookie' ) == 'list' ) {
	        $j( '.oceanwp-grid-list #oceanwp-list' ).addClass( 'active' );
	        $j( '.oceanwp-grid-list #oceanwp-grid' ).removeClass( 'active' );
	        $j( '.archive.woocommerce ul.products' ).addClass( 'list' ).removeClass( 'grid' );
	    }

	} else {

		Cookies.remove( 'gridcookie', { path: '' } );

	}

}

/* ==============================================
WOOCOMMERCE REVIEWS SCROLL
============================================== */
function wooReviewsScroll() {
	"use strict"

	$j( '.woocommerce div.product .woocommerce-review-link' ).click( function( event ) {
		$j( '.woocommerce-tabs .description_tab' ).removeClass( 'active' );
      	$j( '.woocommerce-tabs .reviews_tab' ).addClass( 'active' );
		$j( '.woocommerce-tabs #tab-description' ).css( 'display', 'none' );
      	$j( '.woocommerce-tabs #tab-reviews' ).css( 'display', 'block' );

		$j( 'html, body' ).stop(true,true).animate( {
			scrollTop: $j( this.hash ).offset().top -120
		}, 'normal' );
		return false;
	} );

}

/* ==============================================
WOOCOMMERCE CATEGORIES WIDGET
============================================== */
function wooCategoriesWidget() {
	"use strict"

	$j( '.product-categories' ).each( function() {

		var IconDown 	= '<i class="fa fa-angle-down"></i>';
		var IconUp 		= '<i class="fa fa-angle-up"></i>';

		$j( this ).find( 'li' ).has( '.children' ).has( 'li' ).prepend( '<div class="open-this">'+ IconDown +'</div>' );

		$j( this ).find( '.open-this' ).on( 'click', function(){
	        if ( $j( this ).parent().hasClass( 'opened' ) ) {
	            $j( this ).html( IconDown ).parent().removeClass( 'opened' ).find( '> ul' ).slideUp( 200 );
	        } else {
	            $j( this ).html( IconUp ).parent().addClass( 'opened' ).find( '> ul' ).slideDown( 200 );
	        }
	    } );

	} );
	
}

/* ==============================================
WOOCOMMERCE QUANTITY BUTTONS
============================================== */
function wooQuantityButtons( $quantitySelector ) {

	var $quantityBoxes;

	if ( ! $quantitySelector ) {
		$quantitySelector = '.qty';
	}

	$quantityBoxes = $j( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).find( $quantitySelector );

	if ( $quantityBoxes && 'date' !== $quantityBoxes.prop( 'type' ) && 'hidden' !== $quantityBoxes.prop( 'type' ) ) {

		// Add plus and minus icons
		$quantityBoxes.parent().addClass( 'buttons_added' ).append('<div class="qty-changer"><a href="javascript:void(0)" class="plus"><i class="fa fa-angle-up"></i></a><a href="javascript:void(0)" class="minus"><i class="fa fa-angle-down"></i></a></div>');

		// Target quantity inputs on product pages
		$j( 'input' + $quantitySelector + ':not(.product-quantity input' + $quantitySelector + ')' ).each( function() {
				var $min = parseFloat( $j( this ).attr( 'min' ) );

				if ( $min && $min > 0 && parseFloat( $j( this ).val() ) < $min ) {
					$j( this ).val( $min );
				}
		});

		$j( '.plus, .minus' ).unbind( 'click' );

		$j( '.plus, .minus' ).on( 'click', function() {

				// Get values
				var $quantityBox     = $j( this ).closest( '.quantity' ).find( $quantitySelector ),
				    $currentQuantity = parseFloat( $quantityBox.val() ),
				    $maxQuantity     = parseFloat( $quantityBox.attr( 'max' ) ),
				    $minQuantity     = parseFloat( $quantityBox.attr( 'min' ) ),
				    $step            = $quantityBox.attr( 'step' );

				// Fallback default values
				if ( ! $currentQuantity || '' === $currentQuantity  || 'NaN' === $currentQuantity ) {
					$currentQuantity = 0;
				}
				if ( '' === $maxQuantity || 'NaN' === $maxQuantity ) {
					$maxQuantity = '';
				}

				if ( '' === $minQuantity || 'NaN' === $minQuantity ) {
					$minQuantity = 0;
				}
				if ( 'any' === $step || '' === $step  || undefined === $step || 'NaN' === parseFloat( $step )  ) {
					$step = 1;
				}

				// Change the value
				if ( $j( this ).is( '.plus' ) ) {

					if ( $maxQuantity && ( $maxQuantity == $currentQuantity || $currentQuantity > $maxQuantity ) ) {
						$quantityBox.val( $maxQuantity );
					} else {
						$quantityBox.val( $currentQuantity + parseFloat( $step ) );
					}

				} else {

					if ( $minQuantity && ( $minQuantity == $currentQuantity || $currentQuantity < $minQuantity ) ) {
						$quantityBox.val( $minQuantity );
					} else if ( $currentQuantity > 0 ) {
						$quantityBox.val( $currentQuantity - parseFloat( $step ) );
					}

				}

				// Trigger change event
				$quantityBox.trigger( 'change' );
			}
		);
	}
}