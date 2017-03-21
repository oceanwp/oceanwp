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

// Return placeholder if there isn't a thumbnail defined.
if ( ! has_post_thumbnail() ) {
    oceanwp_woo_placeholder_img();
    return;
}

// Get featured image
$attachment = get_post_thumbnail_id();

// Display featured image if defined
if ( $attachment ) { ?>

	<div class="woo-entry-image clr">
		<a href="<?php the_permalink(); ?>" class="woocommerce-LoopProduct-link">
			<?php
			// Single Image
			echo wp_get_attachment_image( $attachment, 'shop_catalog', '', array(
		        'class'         => 'woo-entry-image-main',
		        'alt'           => get_the_title(),
		        'itemprop'      => 'image',
		    ) ); ?>
	    </a>
	</div><!-- .woo-entry-image -->

<?php
}

// Display placeholder
else { ?>

	<div class="woo-entry-image clr">
		<a href="<?php the_permalink(); ?>" class="woocommerce-LoopProduct-link">
    		<?php echo '<img src="'. esc_url( wc_placeholder_img_src() ) .'" alt="'. esc_html__( 'Placeholder Image', 'oceanwp' ) .'" class="woo-entry-image-main" />'; ?>
    	</a>
	</div><!-- .woo-entry-image -->
<?php } ?>