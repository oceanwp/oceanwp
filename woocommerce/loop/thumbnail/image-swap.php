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
$attachment_ids   = $product->get_gallery_attachment_ids();
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
			
// Return thumbnail
if ( $secondary_img_id ) : ?>

	<div class="woo-entry-image-swap oceanwp-clr">
		<?php
		// Main Image
		echo wp_get_attachment_image( $attachment, 'shop_catalog', '', array(
	        'class'         => 'woo-entry-image-main',
	        'alt'           => get_the_title(),
	        'itemprop'      => 'image',
	    ) ); ?>
		<?php
		// Secondary Image
		echo wp_get_attachment_image( $secondary_img_id, 'shop_catalog', '', array(
	        'class'         => 'woo-entry-image-secondary',
	        'alt'           => get_the_title(),
	        'itemprop'      => 'image',
	    ) ); ?>
	</div><!-- .woo-entry-image-swap -->

<?php else : ?>

	<?php
	// Single Image
	echo wp_get_attachment_image( $attachment, 'shop_catalog', '', array(
        'class'         => 'woo-entry-image-main',
        'alt'           => get_the_title(),
        'itemprop'      => 'image',
    ) ); ?>

<?php endif; ?>