<?php
/**
 * Image Swap style thumbnail
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Return dummy image if no featured image is defined.
if ( ! has_post_thumbnail() ) {
	oceanwp_woo_placeholder_img();
	return;
}

// Globals.
global $product;

// Get links conditional mod.
$ocean_woo_disable_links = get_theme_mod( 'ocean_shop_woo_disable_links', false );
$ocean_woo_disable_links_cond = get_theme_mod( 'ocean_shop_woo_disable_links_cond', 'no' );

$disable_links = '';
$disable_links = ( true === $ocean_woo_disable_links && 'yes' === $ocean_woo_disable_links_cond );

// Get first image.
$attachment = $product->get_image_id();

// Get Second Image in Gallery.
if ( version_compare( OceanWP_WooCommerce_Config::get_wc_version(), '2.7', '>=' ) ) {
	$attachment_ids = $product->get_gallery_image_ids();
} else {
	$attachment_ids = $product->get_gallery_attachment_ids();
}
$attachment_ids[] = $attachment; // Add featured image to the array.
$secondary_img_id = '';

if ( ! empty( $attachment_ids ) ) {
	$attachment_ids = array_unique( $attachment_ids ); // remove duplicate images.
	if ( count( $attachment_ids ) > '1' ) {
		if ( $attachment_ids['0'] !== $attachment ) {
			$secondary_img_id = $attachment_ids['0'];
		} elseif ( $attachment_ids['1'] !== $attachment ) {
			$secondary_img_id = $attachment_ids['1'];
		}
	}
}

// Image args.
$first_img = array(
	'class' => 'woo-entry-image-main',
	'alt'   => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$first_img['itemprop'] = 'image';
}
// Second image args.
$second_img = array(
	'class' => 'woo-entry-image-secondary',
	'alt'   => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$second_img['itemprop'] = 'image';
}


// Return thumbnail.
if ( $secondary_img_id ) : ?>

	<div class="woo-entry-image-swap woo-entry-image clr">
		<?php
		do_action( 'ocean_before_product_entry_image' );

		if ( false === $ocean_woo_disable_links
			|| ( $disable_links && is_user_logged_in() ) ) {

			ocean_woo_img_link_open();
			
				// Main Image.
				echo wp_get_attachment_image( $attachment, 'woocommerce_thumbnail', '', $first_img );

				// Secondary Image.
				echo wp_get_attachment_image( $secondary_img_id, 'woocommerce_thumbnail', '', $second_img );
					
			ocean_woo_img_link_close();

		} else {
				
			// Main Image.
			echo wp_get_attachment_image( $attachment, 'woocommerce_thumbnail', '', $first_img );

			// Secondary Image.
			echo wp_get_attachment_image( $secondary_img_id, 'woocommerce_thumbnail', '', $second_img );

		}

		do_action( 'ocean_after_product_entry_image' );
		?>
	</div><!-- .woo-entry-image-swap -->

<?php else : ?>

	<div class="woo-entry-image clr">
		<?php
		do_action( 'ocean_before_product_entry_image' );

		if ( false === $ocean_woo_disable_links
			|| ( $disable_links && is_user_logged_in() ) ) {

			ocean_woo_img_link_open();
			
				// Single Image.
				echo wp_get_attachment_image( $attachment, 'woocommerce_thumbnail', '', $first_img );
					
			ocean_woo_img_link_close();

		} else {
				
			// Single Image.
			echo wp_get_attachment_image( $attachment, 'woocommerce_thumbnail', '', $first_img );

		}

		do_action( 'ocean_after_product_entry_image' );
		?>
	</div><!-- .woo-entry-image -->

<?php endif; ?>
