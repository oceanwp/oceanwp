<?php
/**
 * Template for displaying single layout for easy digital downloads 
 *
 */

global $post;

do_action( 'ocean_before_archive_product_item' );

echo '<ul class="edd-entry-inner clr">';

	// Get elements
	$elements = oceanwp_edd_archive_elements_positioning();

	print_r($elements);

	// Loop through elements
	foreach ( $elements as $element ) {

		// Image
		if ( 'image' == $element ) {

			echo '<li class="image-wrap">';
				do_action( 'ocean_before_archive_product_image' );
				the_post_thumbnail();
				do_action( 'ocean_after_archive_product_image' );
			echo '</li>';

		}

		// Category
		if ( 'category' == $element ) {

			echo '<li class="category">';
			do_action( 'ocean_before_archive_product_categories' );
			echo oceanwp_edd_terms_list( 'download_category' );
			do_action( 'ocean_after_archive_product_categories' );
			echo '</li>';

		}

		// Title
		if ( 'title' == $element ) {

			do_action( 'ocean_before_archive_product_title' );

			echo '<li class="title">';
				do_action( 'ocean_before_archive_product_title_inner' );
				echo '<a href="'. esc_url( get_the_permalink() ) .'">'. get_the_title() .'</a>';
				do_action( 'ocean_after_archive_product_title_inner' );
			echo '</li>';

			do_action( 'ocean_after_archive_product_title' );

		}

		// Price
		if ( 'price' == $element ) {

			do_action( 'ocean_before_archive_product_inner' );

			echo '<li class="inner">';
				do_action( 'ocean_before_archive_product_price' );
				edd_price();
				do_action( 'ocean_before_archive_product_price' );
			echo '</li>';

			do_action( 'ocean_after_archive_product_inner' );

		}

		// Description
		if ( 'description' == $element ) {

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

		}

		// Add to cart button
		if ( 'button' == $element ) {

			do_action( 'ocean_before_archive_product_add_to_cart' );

			echo '<li class="btn-wrap clr">';

				do_action( 'ocean_before_archive_product_add_to_cart_inner' );
				
				echo edd_get_purchase_link( array( 'download_id' => get_the_ID(), 'price_id' => false ) );
				
				do_action( 'ocean_after_archive_product_add_to_cart_inner' );

			echo '</li>';

			do_action( 'ocean_after_archive_product_add_to_cart' );

		}

	}

echo '</ul>';

do_action( 'ocean_after_archive_product_item' );