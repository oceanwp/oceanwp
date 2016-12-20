<?php
/**
 * Gallery Style WooCommerce
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

// Get global product data
global $product;

// Get gallery images and exclude featured image incase it's added in the gallery as well
$attachment_id    = get_post_thumbnail_id();
$attachment_ids   = $product->get_gallery_attachment_ids();
$attachment_ids[] = $attachment_id;
$attachment_ids   = array_unique( $attachment_ids );

// If there are attachments display slider
if ( $attachment_ids ) : ?>

	<div class="product-entry-slider owl-carousel owl-theme clr">

		<?php
		// Define counter variable
		$count=0; ?>

		<?php
		// Loop through images
		foreach ( $attachment_ids as $attachment_id ) : ?>

			<?php
			// Add to counter
			$count++; ?>

			<?php
			// Only display the first 5 images
			if ( $count < 5 ) : ?>

				<div class="oceanwp-slider-slide">
					<?php 
					echo wp_get_attachment_image( $attachment_id, 'shop_catalog', '', array(
				        'alt'           => get_the_title(),
				        'itemprop'      => 'image',
				    ) ); ?>
				</div>

			<?php endif; ?>

		<?php endforeach; ?>

	</div>

<?php

// There aren't any images so lets display the featured image
else : ?>

	<?php wc_get_template(  'loop/thumbnail/'. $style .'.php' ); ;?>

<?php endif; ?>