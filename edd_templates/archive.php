<?php
/**
 * Template for displaying single layout for easy digital downloads 
 *
 */

global $post;

do_action( 'ocean_before_archive_download_item' );
?>
<li <?php post_class(); ?>>
	<div class="download-item-inner">
	<?php
	// Get elements
	$elements = oceanwp_edd_archive_elements_positioning();

	// Loop through elements
	foreach ( $elements as $element ) {

		// Image
		if ( 'image' == $element ) {

			echo '<div class="image-wrap">';
				do_action( 'ocean_before_archive_download_image' );
				the_post_thumbnail();
				do_action( 'ocean_after_archive_download_image' );
			echo '</div>';

		}

		// Category
		if ( 'category' == $element ) {

			echo '<div class="category">';
			do_action( 'ocean_before_archive_download_categories' );
			echo oceanwp_edd_terms_list( 'download_category' );
			do_action( 'ocean_after_archive_download_categories' );
			echo '</div>';

		}

		// Title
		if ( 'title' == $element ) {

			do_action( 'ocean_before_archive_download_title' );

			echo '<div class="title">';
				do_action( 'ocean_before_archive_download_title_inner' );
				echo '<a href="'. esc_url( get_the_permalink() ) .'">'. get_the_title() .'</a>';
				do_action( 'ocean_after_archive_download_title_inner' );
			echo '</div>';

			do_action( 'ocean_after_archive_download_title' );

		}

		// Price
		if ( 'price' == $element ) {

			do_action( 'ocean_before_archive_download_inner' );

			echo '<div class="inner">';
				do_action( 'ocean_before_archive_download_price' );
				edd_price();
				do_action( 'ocean_before_archive_download_price' );
			echo '</div>';

			do_action( 'ocean_after_archive_download_inner' );

		}

		// Description
		if ( 'description' == $element ) {

			do_action( 'ocean_before_archive_download_description' );

			if ( ( oceanwp_is_woo_shop() || oceanwp_is_woo_tax() )
				&& get_theme_mod( 'ocean_woo_grid_list', true ) ) {
				$length = get_theme_mod( 'ocean_woo_list_excerpt_length', '60' );
				echo '<div class="woo-desc">';
					if ( ! $length ) {
						echo wp_kses_post( strip_shortcodes( $post->post_excerpt ) );
					} else {
						echo wp_trim_words( strip_shortcodes( $post->post_excerpt ), $length );
					}
				echo '</div>';
			}

			do_action( 'ocean_after_archive_download_description' );

		}

		// Add to cart button
		if ( 'button' == $element ) {

			do_action( 'ocean_before_archive_download_add_to_cart' );

			echo '<div class="btn-wrap clr">';

				do_action( 'ocean_before_archive_download_add_to_cart_inner' );
				
				echo oceanwp_edd_add_to_cart_link();
				
				do_action( 'ocean_after_archive_download_add_to_cart_inner' );

			echo '</div>';

			do_action( 'ocean_after_archive_download_add_to_cart' );

		}

	}
	?>
	</div>
</li>
<?php 
do_action( 'ocean_after_archive_download_item' );