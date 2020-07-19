<?php
/**
 * Single product template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Get price conditional display state.
$ocean_woo_single_cond = get_theme_mod( 'ocean_woo_single_conditional', false );

// Conditional vars.
$show_woo_single = '';
$show_woo_single = ( is_user_logged_in() && $ocean_woo_single_cond === true );

/**
 * Display Single Product template
 * 
 */

// Get elements.
$elements = oceanwp_woo_summary_elements_positioning();

// Loop through elements.
foreach ( $elements as $element ) {

	do_action( 'ocean_before_single_product_' . $element );

	// Title.
	if ( 'title' === $element ) {

		woocommerce_template_single_title();

	}

	// Rating.
	if ( 'rating' === $element ) {

		woocommerce_template_single_rating();

	}

	// Price.
	if ( 'price' === $element ) {

		if ( false === $ocean_woo_single_cond || $show_woo_single ) {

			woocommerce_template_single_price();

		}
	}

	// Excerpt.
	if ( 'excerpt' === $element ) {

		woocommerce_template_single_excerpt();

	}

	// Quantity & Add to cart button.
	if ( 'quantity-button' === $element ) {

		if ( false === $ocean_woo_single_cond || $show_woo_single ) {

			woocommerce_template_single_add_to_cart();

		} else {

			// Get Add to Cart button message display state.
			$ocean_woo_single_msg = get_theme_mod( 'ocean_woo_single_cond_msg', 'yes' );

			if ( 'yes' === $ocean_woo_single_msg ) {

				// Get Add to Cart button replacement message.
				$ocean_woo_single_msg_txt = get_theme_mod( 'ocean_woo_single_cond_msg_text' );
				$ocean_woo_single_msg_txt = $ocean_woo_single_msg_txt ? $ocean_woo_single_msg_txt : esc_html__( 'Log in to view price and purchase', 'oceanwp' );

				echo '<div class="owp-woo-single-cond-notice">';
					echo '<span">'. $ocean_woo_single_msg_txt .'</span>';
				echo '</div>';

			}
		}
	}

	// Meta.
	if ( 'meta' === $element ) {

		woocommerce_template_single_meta();
		
	}

	do_action( 'ocean_after_single_product_' . $element );

}
