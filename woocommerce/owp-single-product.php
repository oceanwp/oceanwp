<?php
/**
 * Single product template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Get elements
$elements = oceanwp_woo_summary_elements_positioning();

// Loop through elements
foreach ( $elements as $element ) {

	do_action( 'ocean_before_single_product_' . $element );

	// Title
	if ( 'title' == $element ) {
		woocommerce_template_single_title();
	}

	// Rating
	if ( 'rating' == $element ) {
		woocommerce_template_single_rating();
	}

	// Price
	if ( 'price' == $element ) {
		woocommerce_template_single_price();
	}

	// Excerpt
	if ( 'excerpt' == $element ) {
		woocommerce_template_single_excerpt();
	}

	// Quantity & Add to cart button
	if ( 'quantity-button' == $element ) {
		woocommerce_template_single_add_to_cart();
	}

	// Meta
	if ( 'meta' == $element ) {
		woocommerce_template_single_meta();
	}

	do_action( 'ocean_after_single_product_' . $element );

}