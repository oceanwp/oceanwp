<?php
/**
 * Archive product hover style template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product, $post;

do_action( 'ocean_before_archive_product_item' );

echo '<ul class="woo-entry-inner clr">';

	echo '<li class="image-wrap">';
		do_action( 'ocean_before_archive_product_image' );
		if ( class_exists( 'OceanWP_WooCommerce_Config' ) ) {
			OceanWP_WooCommerce_Config::add_out_of_stock_badge();
		}
		woocommerce_show_product_loop_sale_flash();
		
		if ( function_exists( 'wc_get_template' ) ) {
			wc_get_template( 'loop/thumbnail/featured-image.php' );
		}

		do_action( 'ocean_before_archive_product_add_to_cart_inner' );
		woocommerce_template_loop_add_to_cart();
		do_action( 'ocean_after_archive_product_add_to_cart_inner' );

		
		if ( get_theme_mod( 'ocean_woo_quick_view', true )
			|| class_exists( 'TInvWL_Wishlist' ) ) {
			echo '<ul class="woo-entry-buttons">';
				do_action( 'ocean_before_archive_woo_entry_buttons' );
				if ( get_theme_mod( 'ocean_woo_quick_view', true ) ) {
					echo '<li class="woo-quickview-btn">'. apply_filters( 'ocean_woo_quick_view_button_html', '<a href="#" class="owp-quick-view" id="product_id_' . $product->get_id() . '" data-product_id="' . $product->get_id() . '"><i class="icon-eye"></i></a>' ) .'</li>';
				}

				if ( class_exists( 'TInvWL_Wishlist' ) ) {
					echo '<li class="woo-wishlist-btn">'. do_shortcode( '[ti_wishlists_addtowishlist]' ) .'</li>';
				}
				do_action( 'ocean_after_archive_woo_entry_buttons' );
			echo '</ul>';
		}

		do_action( 'ocean_after_archive_product_image' );
	echo '</li>';

	echo '<ul class="woo-product-info">';

		do_action( 'ocean_before_archive_product_categories' );
		echo wp_kses_post( wc_get_product_category_list( $product->get_id(), ', ', '<li class="category">', '</li>' ) );
		do_action( 'ocean_after_archive_product_categories' );

		do_action( 'ocean_before_archive_product_title' );

		echo '<li class="title">';
			do_action( 'ocean_before_archive_product_title_inner' );
			echo '<a href="'. esc_url( get_the_permalink() ) .'">'. get_the_title() .'</a>';
			do_action( 'ocean_after_archive_product_title_inner' );
		echo '</li>';

		do_action( 'ocean_after_archive_product_title' );

		do_action( 'ocean_before_archive_product_inner' );

		echo '<li class="price-wrap">';
			do_action( 'ocean_before_archive_product_price' );
			woocommerce_template_loop_price();
			do_action( 'ocean_after_archive_product_price' );
		echo '</li>';

		if ( $product->get_rating_count() ) {
			echo '<li class="rating">';
				do_action( 'ocean_before_archive_product_rating' );
				woocommerce_template_loop_rating();
				do_action( 'ocean_after_archive_product_rating' );
			echo '</li>';
		}

		do_action( 'ocean_after_archive_product_inner' );

		do_action( 'ocean_before_archive_product_description' );

		if ( ( oceanwp_is_woo_shop() || oceanwp_is_woo_tax() )
			&& get_theme_mod( 'ocean_woo_grid_list', true ) ) {
			$length = get_theme_mod( 'ocean_woo_list_excerpt_length', '60' );
			echo '<li class="woo-desc">';
				if ( ! $length ) {
					echo wp_kses_post( strip_shortcodes( $post->post_excerpt ) );
				} else {
					echo wp_trim_words( strip_shortcodes( $post->post_excerpt ), $length );
				}
			echo '</li>';
		}

		do_action( 'ocean_after_archive_product_description' );

	echo '</ul>';

	if ( function_exists( 'wc_get_template' ) ) {
		wc_get_template( 'owp-archive-product-thumbnails.php' );
	}

echo '</ul>';

do_action( 'ocean_after_archive_product_item' );