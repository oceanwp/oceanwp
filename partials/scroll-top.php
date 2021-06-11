<?php
/**
 * The template for displaying the scroll top button.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// If no scroll top button.
if ( ! oceanwp_display_scroll_up_button() ) {
	return;
}

// Get arrow.
$arrow = apply_filters( 'ocean_scroll_top_arrow', get_theme_mod( 'ocean_scroll_top_arrow', 'angle_up' ) );
$arrow = $arrow ? $arrow : 'angle_up';

// Position.
$position = apply_filters( 'ocean_scroll_top_position', get_theme_mod( 'ocean_scroll_top_position' ) );
$position = $position ? $position : 'right'; ?>

<a id="scroll-top" class="scroll-top-<?php echo esc_attr( $position ); ?>" href="#"><?php oceanwp_icon( $arrow ); ?></a>
