var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
	// Carousel
	oceanwpInitCarousel();
} );

/* ==============================================
CAROUSEL
============================================== */
function oceanwpInitCarousel( $context ) {
	"use strict"

	var $carousel = $j( '.gallery-format, .product-entry-slider', $context );

	// If RTL
	if ( $j( 'body' ).hasClass( 'rtl' ) ) {
		var rtl = true;
	} else {
		var rtl = false;
	}

	// Return autoplay to false if woo slider
	if ( $carousel.hasClass( 'woo-entry-image' ) ) {
		var autoplay = false;
	} else {
		var autoplay = true;
	}

	// Slide speed
	var speed = 7000;

	// Gallery slider
	$carousel.imagesLoaded( function() {
		$carousel.slick( {
			autoplay: autoplay,
			autoplaySpeed: speed,
			prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
			rtl: rtl,
		} );
	} );

	// WooCommerce slider
    $j( '.product .main-images' ).slick( {
		prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
		asNavFor: '.product-thumbnails',
		rtl: rtl,
	} );

	// WooCommerce thumbnails slider
	$j( '.product .product-thumbnails' ).slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
		asNavFor: '.product .main-images',
		focusOnSelect: true,
		rtl: rtl,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	} );

	// WooCommerce: prevent clicking
	$j( '.product .main-images a, .product .product-thumbnails a' ).click( function(e) {
		e.preventDefault();
    } );

}