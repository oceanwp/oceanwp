var $j = jQuery.noConflict();

$j( document ).ready( function() {
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

}