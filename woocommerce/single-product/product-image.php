<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 11.1.0
 */

use Automattic\WooCommerce\Enums\ProductType;
use Automattic\WooCommerce\Internal\ProductGallery\ProductMediaGallery;

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
	return;
}

global $product;

$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = $product->get_image_id();

$has_product_media_gallery = class_exists(
	'\Automattic\WooCommerce\Internal\ProductGallery\ProductMediaGallery'
);

$first_media_item = array();
$first_media_id   = $post_thumbnail_id;
$has_media        = (bool) $post_thumbnail_id;
$is_video         = false;

if ( $has_product_media_gallery ) {

	$media_items = ProductMediaGallery::get_product_media_gallery_items_for_display( $product );

	$first_media_item = $media_items[0] ?? array();

	$first_media_id = isset( $first_media_item['id'] )
		? absint( $first_media_item['id'] )
		: $post_thumbnail_id;

	$has_media = ! empty( $first_media_item )
		&& 'placeholder' !== ( $first_media_item['source_type'] ?? '' );

	$is_video = $has_media
		&& 'video' === ( $first_media_item['media_type'] ?? '' );
}


$wrapper_classes   = apply_filters(
	'woocommerce_single_product_image_gallery_classes',
	array(
		'woocommerce-product-gallery',
		'woocommerce-product-gallery--' . ( $post_thumbnail_id ? 'with-images' : 'without-images' ),
		'woocommerce-product-gallery--columns-' . absint( $columns ),
		'images',
	)
);
?>
<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?>" data-columns="<?php echo esc_attr( $columns ); ?>" style="opacity: 0; transition: opacity .25s ease-in-out;">
	<?php
	if ( class_exists( 'Custom_Product_Badges' ) ) {
		Custom_Product_Badges::oec_custom_product_badge_display_single();
	}
	?>
	<figure class="woocommerce-product-gallery__wrapper">
		<?php
		/*
		 * WooCommerce 11.1+.
		 */
		if ( $has_product_media_gallery && $is_video ) {

			$html = ProductMediaGallery::get_gallery_video_html(
				$first_media_item,
				true
			);

		} elseif ( $post_thumbnail_id ) {

			/*
			 * Works with both older WooCommerce and 11.1+.
			 */
			$html = wc_get_gallery_image_html(
				$has_product_media_gallery ? $first_media_id : $post_thumbnail_id,
				true
			);

		} else {
			// Check for visible children with prices to determine if variation image swapping is possible.
			// Using get_visible_children() + get_price() is more efficient than get_available_variations()
			// as it uses cached IDs and synced price data rather than loading all variation objects.
			$wrapper_classname = $product->is_type( ProductType::VARIABLE ) && ! empty( $product->get_visible_children() ) && '' !== $product->get_price() ?
				'woocommerce-product-gallery__image woocommerce-product-gallery__image--placeholder' :
				'woocommerce-product-gallery__image--placeholder';
			$html              = sprintf( '<div class="%s">', esc_attr( $wrapper_classname ) );
			$html             .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
			$html             .= '</div>';
		}

		if ( $has_product_media_gallery && $is_video ) {
			/**
			 * Filter product video thumbnail HTML string.
			 *
			 * @since 11.0.0
			 * @internal For exclusive usage of WooCommerce core, backwards compatibility not guaranteed.
			 *
			 * @param string $html          Product video thumbnail HTML string.
			 * @param int    $attachment_id Video attachment ID.
			 * @param array  $media_item    Product media gallery item.
			 */
			echo apply_filters( 'woocommerce_single_product_video_thumbnail_html', $html, $first_media_id, $first_media_item ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			/**
			 * Filter product image thumbnail HTML string.
			 *
			 * @since 1.6.4
			 *
			 * @param string $html          Product image thumbnail HTML string.
			 * @param int    $attachment_id Attachment ID.
			 */
			echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $has_product_media_gallery ? $first_media_id : $post_thumbnail_id ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		do_action( 'woocommerce_product_thumbnails' );
		?>
	</figure>
</div>
