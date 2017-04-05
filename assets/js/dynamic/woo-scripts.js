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
	// Woo quantity buttons
	wooQuantityButtons();
} );

$window.on( 'load', function() {
	"use strict";
	// Variable image product
	wooVariableImage();
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
WOOCOMMERCE VARIABLE IMAGE PRODUCT
============================================== */
function wooVariableImage() {
	"use strict"

	/**
	 * Stores a default attribute for an element so it can be reset later
	 */
	$j.fn.wc_set_variation_attr = function( attr, value ) {
		if ( undefined === this.attr( 'data-o_' + attr ) ) {
			this.attr( 'data-o_' + attr, ( ! this.attr( attr ) ) ? '' : this.attr( attr ) );
		}
		this.attr( attr, value );
	};

	/**
	 * Reset a default attribute for an element so it can be reset later
	 */
	$j.fn.wc_reset_variation_attr = function( attr ) {
		if ( undefined !== this.attr( 'data-o_' + attr ) ) {
			this.attr( attr, this.attr( 'data-o_' + attr ) );
		}
	};

	/**
	 * Sets product images for the chosen variation
	 */
	$j.fn.wc_variations_image_update = function( variation ) {
		var $form 			= this,
			$product 		= $form.closest( '.product' ),
			$product_img 	= $product.find( 'div.images .main-images img:eq(1), div.images .product-thumbnails .first-thumbnail:not(.slick-cloned) img' ),
			$product_link 	= $product.find( 'div.images a.woocommerce-main-image:eq(1), div.images .first-thumbnail:not(.slick-cloned) a.woo-thumbnail:eq(3)' );

		if ( variation && variation.image && variation.image.src && variation.image.src.length > 1 ) {

			// Image attrs
			$product_img.wc_set_variation_attr( 'src', variation.image.src );
			$product_img.wc_set_variation_attr( 'height', variation.image.src_h );
			$product_img.wc_set_variation_attr( 'width', variation.image.src_w );
			$product_img.wc_set_variation_attr( 'srcset', variation.image.srcset );
			$product_img.wc_set_variation_attr( 'sizes', variation.image.sizes );
			$product_img.wc_set_variation_attr( 'title', variation.image.title );
			$product_img.wc_set_variation_attr( 'alt', variation.image.alt );
			$product_img.wc_set_variation_attr( 'data-src', variation.image.full_src );
			$product_img.wc_set_variation_attr( 'data-large_image', variation.image.full_src );
			$product_img.wc_set_variation_attr( 'data-large_image_width', variation.image.full_src_w );
			$product_img.wc_set_variation_attr( 'data-large_image_height', variation.image.full_src_h );
			$product_link.wc_set_variation_attr( 'href', variation.image.full_src );
			$product_link.wc_set_variation_attr( 'title', variation.image.title );

			// Refresh slide
			if ( $j( 'body' ).hasClass( 'single-product' ) ) {
				$j( '.product .main-images, .product .product-thumbnails' ).slick( 'refresh' );

				// Refresh lightbox
				if ( $j( 'body' ).hasClass( 'has-lightbox' ) ) {
					$j( '.product-images-slider' ).removeData( 'chocolat' ).Chocolat( {
						loop           	: true,
						imageSelector   : '.product-image:not(.slick-cloned) .woo-lightbox'
		            } );
				}
	        }
		} else {

			// Reset image attrs
			$product_img.wc_reset_variation_attr( 'src' );
			$product_img.wc_reset_variation_attr( 'width' );
			$product_img.wc_reset_variation_attr( 'height' );
			$product_img.wc_reset_variation_attr( 'srcset' );
			$product_img.wc_reset_variation_attr( 'sizes' );
			$product_img.wc_reset_variation_attr( 'title' );
			$product_img.wc_reset_variation_attr( 'alt' );
			$product_img.wc_reset_variation_attr( 'data-src' );
			$product_img.wc_reset_variation_attr( 'data-large_image' );
			$product_img.wc_reset_variation_attr( 'data-large_image_width' );
			$product_img.wc_reset_variation_attr( 'data-large_image_height' );
			$product_link.wc_reset_variation_attr( 'href' );
			$product_link.wc_reset_variation_attr( 'title' );

			// Refresh slide
			if ( $j( 'body' ).hasClass( 'single-product' ) ) {
				$j( '.product .main-images, .product .product-thumbnails' ).slick( 'refresh' );

				// Refresh lightbox
				if ( $j( 'body' ).hasClass( 'has-lightbox' ) ) {
					$j( '.product-images-slider' ).removeData( 'chocolat' ).Chocolat( {
						loop           	: true,
						imageSelector   : '.product-image:not(.slick-cloned) .woo-lightbox'
		            } );
		        }
	        }
		}
	};
	
}

/* ==============================================
WOOCOMMERCE QUANTITY BUTTONS
============================================== */
function wooQuantityButtons() {
	"use strict"

	// Quantity buttons
	$j( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append('<div class="qty-changer"><a href="javascript:void(0)" class="plus"><i class="fa fa-angle-up"></i></a><a href="javascript:void(0)" class="minus"><i class="fa fa-angle-down"></i></a></div>');

	$j( document ).on( 'click', '.plus, .minus', function() {

		// Get values
		var $qty		= $j( this ).closest( '.quantity' ).find( '.qty' ),
			currentVal	= parseFloat( $qty.val() ),
			max			= parseFloat( $qty.attr( 'max' ) ),
			min			= parseFloat( $qty.attr( 'min' ) ),
			step		= $qty.attr( 'step' );

		// Format values
		if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
		if ( max === '' || max === 'NaN' ) max = '';
		if ( min === '' || min === 'NaN' ) min = 0;
		if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

		// Change the value
		if ( $j( this ).is( '.plus' ) ) {

			if ( max && ( max == currentVal || currentVal > max ) ) {
				$qty.val( max );
			} else {
				$qty.val( currentVal + parseFloat( step ) );
			}

		} else {

			if ( min && ( min == currentVal || currentVal < min ) ) {
				$qty.val( min );
			} else if ( currentVal > 0 ) {
				$qty.val( currentVal - parseFloat( step ) );
			}

		}

		// Trigger change event
		$qty.trigger( 'change' );

	} );

}