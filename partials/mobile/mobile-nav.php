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

// Menu arguments.
$menu_args = array(
	'theme_location' => $menu_location,
	'container'      => false,
	'fallback_cb'    => false,
);

// If sidebar mobile menu style.
if ( 'sidebar' === oceanwp_mobile_menu_style() ) {
	$menu_args['menu_class'] = 'mobile-menu dropdown-menu';
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
