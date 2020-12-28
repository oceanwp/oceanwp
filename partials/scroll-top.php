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

// Scroll-top attributes.
$scroll_top_attrs = apply_filters( 'oceanwp_attrs_scroll_top', '' );

// Get arrow.
$arrow = apply_filters( 'ocean_scroll_top_arrow', get_theme_mod( 'ocean_scroll_top_arrow' ) );
$arrow = $arrow ? $arrow : 'fa fa-angle-up';

// Position.
$position = apply_filters( 'ocean_scroll_top_position', get_theme_mod( 'ocean_scroll_top_position' ) );
$position = $position ? $position : 'right'; ?>

<a id="scroll-top" href="#" class="scroll-top-<?php echo esc_attr( $position ); ?>" <?php echo $scroll_top_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<span class="<?php echo esc_attr( $arrow ); ?>" aria-label="<?php esc_attr_e( 'Scroll to the top of the page', 'oceanwp' ); ?>"></span>
</a>

