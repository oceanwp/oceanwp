<?php
/**
 * Topbar menu displays inside the topbar "content" area
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} ?>

<div id="top-bar-nav" class="navigation clr">

	<?php
	// Display menu
	wp_nav_menu( array(
		'theme_location' => 'topbar_menu',
		'fallback_cb'    => false,
		'container'      => false,
		'menu_class'     => 'top-bar-menu dropdown-menu sf-menu',
		'walker'         => new OceanWP_Custom_Nav_Walker(),
	) ); ?>

</div>