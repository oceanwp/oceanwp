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
if ( true != get_theme_mod( 'ocean_scroll_top', true ) ) {
	return;
}

// Get arrow
$arrow = get_theme_mod( 'ocean_scroll_top_arrow' );
$arrow = $arrow ? $arrow : 'fa fa-angle-up'; ?>

<a id="scroll-top" href="#"><span class="<?php echo esc_attr( $arrow ); ?>"></span></a>