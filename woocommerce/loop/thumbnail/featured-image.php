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
if ( $attachment ) {

    echo wp_get_attachment_image( $attachment, 'shop_catalog', '', array(
        'class'         => 'woo-entry-image-main',
        'alt'           => get_the_title(),
        'itemprop'      => 'image',
    ) );

}

// Display placeholder
else {
    echo '<img src="'. wc_placeholder_img_src() .'" alt="'. esc_html__( 'Placeholder Image', 'oceanwp' ) .'" class="woo-entry-image-main" />';
} ?>