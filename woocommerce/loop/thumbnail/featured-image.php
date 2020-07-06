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

// Return placeholder if there isn't a thumbnail defined.
if ( ! has_post_thumbnail() ) {
	oceanwp_woo_placeholder_img();
	return;
}

// Get global product data.
global $product;

// Get featured image.
$attachment = $product->get_image_id();

// Image args.
$img_args = array(
	'class' => 'woo-entry-image-main',
	'alt'   => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$img_args['itemprop'] = 'image';
}

// Display featured image if defined.
if ( $attachment ) {
	?>

	<div class="woo-entry-image clr">
		<?php do_action( 'ocean_before_product_entry_image' ); ?>
		<a href="<?php the_permalink(); ?>" class="woocommerce-LoopProduct-link">
			<?php
			// Single Image.
			echo wp_get_attachment_image( $attachment, 'shop_catalog', '', $img_args );
			?>
		</a>
		<?php do_action( 'ocean_after_product_entry_image' ); ?>
	</div><!-- .woo-entry-image -->

	<?php
} else {
	// Display placeholder.
	?>

	<div class="woo-entry-image clr">
		<?php do_action( 'ocean_before_product_entry_image' ); ?>
		<a href="<?php the_permalink(); ?>" class="woocommerce-LoopProduct-link">
			<?php echo '<img src="' . esc_url( wc_placeholder_img_src() ) . '" alt="' . esc_html__( 'Placeholder Image', 'oceanwp' ) . '" class="woo-entry-image-main" />'; ?>
		</a>
		<?php do_action( 'ocean_after_product_entry_image' ); ?>
	</div><!-- .woo-entry-image -->
<?php } ?>
