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

// Classes.
$classes = array();

// Position.
$position = apply_filters( 'ocean_scroll_top_position', get_theme_mod( 'ocean_scroll_top_position' ) );
$position = $position ? $position : 'right';

$classes[] = 'scroll-top-' . esc_attr( $position );

// Visibility.
$visibility = get_theme_mod( 'ocean_scroll_top_visibility', 'all-devices' );
if ( 'all-devices' !== $visibility ) {
	$classes[] = $visibility;
}

// Turn into space seperated list.
$classes = implode( ' ', $classes );

// Get arrow.
$arrow = apply_filters( 'ocean_scroll_top_arrow', get_theme_mod( 'ocean_scroll_top_arrow', 'angle_up' ) );
$arrow = in_array( $arrow, oceanwp_get_scrolltotop_icons(), true ) && $arrow ? $arrow : 'angle_up'; ?>

<a aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-scroll-top', false ) ); ?>" href="#" id="scroll-top" class="<?php echo esc_attr( $classes ); ?>"><?php oceanwp_icon( $arrow ); ?></a>
