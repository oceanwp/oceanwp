<?php
/**
 * The template for displaying the scroll top button.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// If no scroll top button
if ( ! oceanwp_display_scroll_up_button() ) {
	return;
}

// Get arrow
$arrow = apply_filters( 'ocean_scroll_top_arrow', get_theme_mod( 'ocean_scroll_top_arrow' ) );
$arrow = $arrow ? $arrow : 'fa fa-angle-up'; ?>

<a id="scroll-top" href="#"><span class="<?php echo esc_attr( $arrow ); ?>"></span></a>