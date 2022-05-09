<?php
/**
 * Archive product thumbnails for the hover style.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Get global product data.
global $product;

// Get first image.
$thumbnail_id = get_post_thumbnail_id();

// Get gallery images.
$attachment_ids = $product->get_gallery_image_ids();

// Get attachments count.
$attachments_count = count( $attachment_ids );

// Image args.
$img_args = array(
	'alt' => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$img_args['itemprop'] = 'image';
}

?>

<ul class="woo-product-gallery">

	<?php do_action( 'ocean_before_hover_product_gallery' ); ?>

	<?php
	if ( has_post_thumbnail() ) :
		$thumbnail_url = is_array( wp_get_attachment_image_src( $thumbnail_id, 'shop_catalog' ) ) ? wp_get_attachment_image_src( $thumbnail_id, 'shop_catalog' )[0] : '';
		?>

		<li class="active">
			<a href="<?php echo esc_url( $thumbnail_url ); ?>" class="woo-product-gallery-link no-lightbox">
				<?php
				echo wp_get_attachment_image( $thumbnail_id, 'thumbnail', '', $img_args );
				?>
			</a>
		</li>

		<?php
	endif;

	if ( $attachment_ids ) :

		// Define counter variable.
		$count = 0;

		if ( $attachments_count > 0 ) :

			// Loop through images.
			foreach ( $attachment_ids as $attachment_id ) :
				$attachment_url = wp_get_attachment_image_src( $attachment_id, 'shop_catalog' ) ? wp_get_attachment_image_src( $attachment_id, 'shop_catalog' )[0] : '';

				// Add to counter.
				$count++;

				// Only display the first 5 images.
				if ( $count < 5 ) :
					?>

					<li>
						<a href="<?php echo esc_url( $attachment_url ); ?>" class="woo-product-gallery-link no-lightbox">
							<?php
							echo wp_get_attachment_image( $attachment_id, 'thumbnail', '', $img_args );
							?>
						</a>
					</li>

					<?php
				endif;

			endforeach;

		endif;

	endif;
	?>

	<?php do_action( 'ocean_after_hover_product_gallery' ); ?>

</ul>
