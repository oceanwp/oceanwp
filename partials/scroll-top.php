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
$arrow = in_array( $arrow, oceanwp_get_scrolltotop_icons(), true ) && $arrow ? $arrow : 'angle_up';

// Position.
$position = apply_filters( 'ocean_scroll_top_position', get_theme_mod( 'ocean_scroll_top_position' ) );
$position = $position ? $position : 'right'; ?>

<a aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-scroll-top', false ) ); ?>" href="#" id="scroll-top" class="scroll-top-<?php echo esc_attr( $position ); ?>"><?php oceanwp_icon( $arrow ); ?></a>
