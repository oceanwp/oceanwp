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

global $post, $product;

// Get first image
$thumbnail_id  = get_post_thumbnail_id( $post->ID );

// Get gallery images
if ( version_compare( OceanWP_WooCommerce_Config::get_wc_version(), '2.7', '>=' ) ) {
	$attachment_ids   = $product->get_gallery_image_ids();
} else {
	$attachment_ids   = $product->get_gallery_attachment_ids();
}

// Get attachments count
$attachments_count = count( $attachment_ids );

// Get first image data
$full_size_image 	= wp_get_attachment_image_src( $thumbnail_id, 'full' );
$image_title 		= get_the_title( $thumbnail_id ); ?>

<div class="woocommerce-product-gallery images clr">

	<div class="product-images-slider main-images woocommerce-product-gallery__wrapper">

		<?php
		// Var
		$html = '';
		
		$attributes = array(
			'title'                   => $image_title,
			'data-src'                => $full_size_image[0],
			'data-large_image'        => $full_size_image[0],
			'data-large_image_width'  => $full_size_image[1],
			'data-large_image_height' => $full_size_image[2],
		);

		if ( has_post_thumbnail() ) {
			$html .= '<div class="product-image woocommerce-product-gallery__image">';
			$html .= '<a href="' . esc_url( $full_size_image[0] ) . '" class="woocommerce-main-image no-lightbox">';
			$html .= get_the_post_thumbnail( $post->ID, 'shop_single', $attributes );
	 		$html .= '</a>';
			$html .= '<a href="' . esc_url( $full_size_image[0] ) . '" class="oceanwp-lightbox-trigger woo-lightbox"></a>';
	 		$html .= '</div>';
		} else {
			// Display placeholder image
			oceanwp_woo_placeholder_img();
		}

		echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, get_post_thumbnail_id( $post->ID ) );

		if ( $attachment_ids && has_post_thumbnail() ) {

			foreach ( $attachment_ids as $attachment_id ) {

				$full_size_image = wp_get_attachment_image_src( $attachment_id, 'full' );
				$image_title     = get_the_title( $attachment_id );

				$attributes = array(
					'title'                   => $image_title,
					'data-src'                => $full_size_image[0],
					'data-large_image'        => $full_size_image[0],
					'data-large_image_width'  => $full_size_image[1],
					'data-large_image_height' => $full_size_image[2],
				);

				$html  = '<div class="product-image woocommerce-product-gallery__image">';
				$html .= '<a href="' . esc_url( $full_size_image[0] ) . '" class="woocommerce-main-image no-lightbox">';
				$html .= wp_get_attachment_image( $attachment_id, 'shop_single', false, $attributes );
		 		$html .= '</a>';
				$html .= '<a href="' . esc_url( $full_size_image[0] ) . '" class="oceanwp-lightbox-trigger woo-lightbox"></a>';
		 		$html .= '</div>';

				echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $attachment_id );

			}

		} ?>

	</div><!-- .main-images -->

	<div class="product-thumbnails">

		<?php
		// Var
		$html = '';

		// Get image data
		$thumbnail = wp_get_attachment_image_src( $thumbnail_id, 'shop_thumbnail' );

		$attributes = array(
			'title'                   => $image_title,
			'data-src'                => $thumbnail[0],
			'data-large_image'        => $thumbnail[0],
			'data-large_image_width'  => $thumbnail[1],
			'data-large_image_height' => $thumbnail[2],
		);

		if ( has_post_thumbnail() ) {
			$html .= '<div class="thumbnail-item first-thumbnail"><a href="' . esc_url( $thumbnail[0] ) . '" class="woo-thumbnail">';
			$html .= get_the_post_thumbnail( $post->ID, 'shop_thumbnail', $attributes );
			$html .= '</a></div>';
		} else {
			// Display placeholder image
			oceanwp_woo_placeholder_img();
		}

		echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, get_post_thumbnail_id( $post->ID ) );

		if ( $attachment_ids && has_post_thumbnail() ) {

			foreach ( $attachment_ids as $attachment_id ) {

				$thumbnail 		= wp_get_attachment_image_src( $attachment_id, 'shop_thumbnail' );
				$image_title    = get_the_title( $attachment_id );

				$attributes = array(
					'title'                   => $image_title,
					'data-src'                => $thumbnail[0],
					'data-large_image'        => $thumbnail[0],
					'data-large_image_width'  => $thumbnail[1],
					'data-large_image_height' => $thumbnail[2],
				);

				$html  = '<div class="thumbnail-item"><a href="' . esc_url( $thumbnail[0] ) . '" class="woo-thumbnail">';
				$html .= wp_get_attachment_image( $attachment_id, 'shop_thumbnail', false, $attributes );
		 		$html .= '</a></div>';

				echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $attachment_id );

			}

		} ?>

	</div><!-- .product-thumbnails -->

</div>