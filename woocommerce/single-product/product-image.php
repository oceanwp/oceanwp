<?php
/**
 * Single Product Image
 *
 * @author      WooThemes
 * @package     WooCommerce/Templates
 * @version     9999 // this file should never need updating...
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post, $woocommerce, $product;

// Get first image
$thumbnail_id  = get_post_thumbnail_id();

// Get gallery images
if ( version_compare( OceanWP_WooCommerce_Config::get_wc_version(), '2.7', '>=' ) ) {
	$attachment_ids   = $product->get_gallery_image_ids();
} else {
	$attachment_ids   = $product->get_gallery_attachment_ids();
}

// Get attachments count
$attachments_count = count( $attachment_ids );

// Get first image data
$image_title = get_the_title( $thumbnail_id );
$image_link  = wp_get_attachment_url( $thumbnail_id );
$image       = wp_get_attachment_image( $thumbnail_id, 'shop_single', '', array(
    'alt'           => get_the_title(),
    'itemprop'      => 'image',
) ); ?>

<div class="images clr">

	<div class="product-images-slider main-images">

		<?php if ( has_post_thumbnail() ) : ?>

        	<div class="product-image">

                <?php echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" itemprop="image" class="woocommerce-main-image woo-lightbox" title="%s">%s</a>', esc_url( $image_link ), esc_attr( $image_title ), $image ), $post->ID ); ?>

        	</div>

    	<?php else :

			// Display placeholder image
			oceanwp_woo_placeholder_img();

    	endif;

        if ( $attachments_count > 0 ) :

			foreach ( $attachment_ids as $id ) :

				// Get image data
				$image_title 	= get_the_title( $id );
				$image_link  	= wp_get_attachment_url( $id );
				$image       	= wp_get_attachment_image( $id, 'shop_single', '', array(
				    'alt'           => get_the_title(),
				    'itemprop'      => 'image',
				) ); ?>

				<div class="product-image">

    				<?php 
        			echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" itemprop="image" class="woocommerce-main-image woo-lightbox" title="%s">%s</a>', esc_url( $image_link ), esc_attr( $image_title ), $image ), $post->ID ); ?>

				</div>

			<?php 
			endforeach;

		endif; ?>

	</div>

	<div class="product-thumbnails">

		<?php
		$columns = apply_filters( 'woocommerce_product_thumbnails_columns', 3 );
        
		$thumbnail_title = esc_attr( get_the_title( $thumbnail_id ) );
		$thumbnail_link  = wp_get_attachment_url( $thumbnail_id );
		$thumbnail       = wp_get_attachment_image( $thumbnail_id, 'shop_thumbnail', '', array(
		    'alt'           => get_the_title(),
		    'itemprop'      => 'image',
		) );

		if ( has_post_thumbnail() ) : ?>

        	<div class="thumbnail-item first-thumbnail">

        		<?php echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<a href="%s" title="%s" class="woo-thumbnail">%s</a>', esc_url( $thumbnail_link ), esc_html( $thumbnail_title ), $thumbnail ), $post->ID ); ?>

        	</div>

        <?php else :

			// Display placeholder image
			oceanwp_woo_placeholder_img();

        endif;

		// Add thumbnails
		foreach ( $attachment_ids as $id ) :

			$thumbnail_title = esc_attr( get_the_title( $id ) );
			$thumbnail_link  = wp_get_attachment_url( $id );
			$thumbnail       = wp_get_attachment_image( $id, 'shop_thumbnail', '', array(
			    'alt'           => get_the_title(),
			    'itemprop'      => 'image',
			) );

			// Display thumbnail
			if ( $thumbnail ) : ?>

	        	<div class="thumbnail-item">

	        		<?php echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<a href="%s" title="%s" class="woo-thumbnail">%s</a>', esc_url( $thumbnail_link ), esc_html( $thumbnail_title ), $thumbnail ), $post->ID ); ?>

	        	</div>

        	<?php endif;

		endforeach; ?>

	</div><!-- .product-thumbnails -->

</div>