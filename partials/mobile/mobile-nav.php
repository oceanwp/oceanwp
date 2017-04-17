<?php
/**
 * Mobile nav template part.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Menu Location
$menu_location = apply_filters( 'ocean_mobile_menu_location', 'mobile_menu' );

// Display menu if defined
if ( has_nav_menu( $menu_location ) ) : ?>

	<div id="mobile-nav" class="navigation clr">

		<?php
		// Display menu
		wp_nav_menu( array(
			'theme_location' => $menu_location,
			'fallback_cb'    => false,
			'container'      => false,
			'menu_class'     => 'mobile-menu dropdown-menu',
		) ); ?>

	</div>

<?php endif; ?>