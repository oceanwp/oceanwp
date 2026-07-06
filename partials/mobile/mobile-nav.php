<?php
/**
 * Mobile nav template part.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Menu Location.
$menu_location = apply_filters( 'ocean_mobile_menu_location', 'mobile_menu' );

$mobile_style = oceanwp_mobile_menu_style();

if (
	'sidebar' === $mobile_style
	&& ! has_nav_menu( $menu_location )
	&& has_nav_menu( 'main_menu' )
) {
	$menu_location = apply_filters( 'ocean_main_menu_location', 'main_menu' );
}

// Menu arguments.
$menu_args = array(
	'theme_location' => $menu_location,
	'container'      => false,
	'fallback_cb'    => false,
	'custom_output'  => 'mobile_menu',
);

// If sidebar mobile menu style.
if ( 'sidebar' === $mobile_style ) {
	$menu_args['menu_class'] = 'mobile-menu dropdown-menu';
}

if ( 'dropdown' === $mobile_style ) {
	$menu_args = oceanwp_apply_nav_walker_context( $menu_args, 'mobile-dropdown' );
} elseif ( 'fullscreen' === $mobile_style ) {
	$menu_args = oceanwp_apply_nav_walker_context( $menu_args, 'mobile-fullscreen' );
}

// Display menu if defined.
if ( has_nav_menu( $menu_location ) ) : ?>

	<div id="mobile-nav" class="navigation clr">

		<?php

		// Display menu.
		wp_nav_menu( $menu_args );

		?>

	</div>

<?php endif; ?>
