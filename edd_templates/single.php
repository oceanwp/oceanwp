<?php
/**
 * Template for displaying single layout for easy digital downloads 
 *
 */

global $post;

do_action( 'ocean_before_single_product_item' );
?>

<div class="oceanwp-row">

	<div class="col span_1_of_2 image-wrap">
	<?php 
		do_action( 'ocean_before_single_product_image' );
		the_post_thumbnail();
		do_action( 'ocean_after_single_product_image' );
	?>
	</div>

	<?php
	echo '<ul class="col span_1_of_2 clr">';

		// Get elements
		$elements = oceanwp_edd_single_elements_positioning();

		// Loop through elements
		foreach ( $elements as $element ) {

			// Category
			if ( 'category' == $element ) {

				echo '<li class="category">';
				do_action( 'ocean_before_single_product_categories' );
				echo oceanwp_edd_terms_list( 'download_category' );
				do_action( 'ocean_after_single_product_categories' );
				echo '</li>';

			}

			// Tag
			if ( 'tag' == $element ) {

				echo '<li class="tag">';
				do_action( 'ocean_before_single_product_tags' );
				echo oceanwp_edd_terms_list( 'download_tag' );
				do_action( 'ocean_before_single_product_tags' );
				echo '</li>';

			}

			// Title
			if ( 'title' == $element ) {

				do_action( 'ocean_before_single_product_title' );

				echo '<li class="title">';
					do_action( 'ocean_before_single_product_title_inner' );
					echo get_the_title();
					echo oceanwp_edd_download_navigation();
					do_action( 'ocean_after_single_product_title_inner' );
				echo '</li>';

				do_action( 'ocean_after_single_product_title' );

			}

			// Price
			if ( 'price' == $element ) {

				do_action( 'ocean_before_single_product_inner' );

				echo '<li class="inner">';
					do_action( 'ocean_before_single_product_price' );
					edd_price();
					do_action( 'ocean_before_single_product_price' );
				echo '</li>';

				do_action( 'ocean_after_single_product_inner' );

			}

			// Add to cart button
			if ( 'button' == $element ) {

				do_action( 'ocean_before_single_product_add_to_cart' );

				echo '<li class="btn-wrap clr">';

					do_action( 'ocean_before_single_product_add_to_cart_inner' );
					
					echo edd_get_purchase_link( array('price' => false, 'text' => esc_html__( 'Add to Cart', 'oceanwp') ) );
					
					do_action( 'ocean_after_single_product_add_to_cart_inner' );

				echo '</li>';

				do_action( 'ocean_after_single_product_add_to_cart' );

			}

		}

	echo '</ul>';
?>
</div>

<div class="oceanwp-row downloads-content"> 
	<?php echo get_the_content(); ?>
</div>

<?php do_action( 'ocean_after_single_product_item' ); ?>