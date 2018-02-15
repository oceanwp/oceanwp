<?php
/**
 * Image Swap style thumbnail
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Return dummy image if no featured image is defined
if ( ! has_post_thumbnail() ) {
	oceanwp_woo_placeholder_img();
	return;
}

// Globals
global $product;

// Get first image
$attachment = get_post_thumbnail_id();

// Get Second Image in Gallery
if ( version_compare( OceanWP_WooCommerce_Config::get_wc_version(), '2.7', '>=' ) ) {
	$attachment_ids   = $product->get_gallery_image_ids();
} else {
	$attachment_ids   = $product->get_gallery_attachment_ids();
}
$attachment_ids[] = $attachment; // Add featured image to the array
$secondary_img_id = '';

if ( ! empty( $attachment_ids ) ) {
	$attachment_ids = array_unique( $attachment_ids ); // remove duplicate images
	if ( count( $attachment_ids ) > '1' ) {
		if ( $attachment_ids['0'] !== $attachment ) {
			$secondary_img_id = $attachment_ids['0'];
		} elseif ( $attachment_ids['1'] !== $attachment ) {
			$secondary_img_id = $attachment_ids['1'];
		}
	}
}

// Image args
$first_img = array(
    'class'         => 'woo-entry-image-main',
    'alt'           => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$first_img['itemprop'] = 'image';
}

$second_img = array(
    'class'         => 'woo-entry-image-secondary',
    'alt'           => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$second_img['itemprop'] = 'image';
}


// Return thumbnail
if ( $secondary_img_id ) : ?>

	<div class="woo-entry-image-swap woo-entry-image clr">
		<?php do_action( 'ocean_before_product_entry_image' ); ?>
		<a href="<?php the_permalink(); ?>" class="woocommerce-LoopProduct-link">
			<?php
			// Main Image
			echo wp_get_attachment_image( $attachment, 'shop_catalog', '', $first_img ); ?>
			<?php
			// Secondary Image
			echo wp_get_attachment_image( $secondary_img_id, 'shop_catalog', '', $second_img ); ?>
		</a>
		<?php do_action( 'ocean_after_product_entry_image' ); ?>
	</div><!-- .woo-entry-image-swap -->

<?php else : ?>

	<div class="woo-entry-image clr">
		<?php do_action( 'ocean_before_product_entry_image' ); ?>
		<a href="<?php the_permalink(); ?>" class="woocommerce-LoopProduct-link">
			<?php
			// Single Image
			echo wp_get_attachment_image( $attachment, 'shop_catalog', '', $first_img ); ?>
		</a>
		<?php do_action( 'ocean_after_product_entry_image' ); ?>
	</div><!-- .woo-entry-image -->

<?php endif; ?>