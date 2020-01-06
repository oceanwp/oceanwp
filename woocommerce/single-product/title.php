<?php
/**
 * Single Product title
 *
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 1.6.4
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Heading tag
$heading = get_theme_mod( 'ocean_woo_product_title_tag', 'h2' );
$heading = $heading ? $heading : 'h2';
$heading = apply_filters( 'ocean_woo_product_title_tag', $heading ); ?>

<<?php echo esc_attr( $heading ); ?> class="single-post-title product_title entry-title"<?php oceanwp_schema_markup( 'author_name' ); ?>><?php the_title(); ?></<?php echo esc_attr( $heading ); ?>>