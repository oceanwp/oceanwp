<?php
/**
 * Recommends plugins for use with the theme via the TGMA Script
 *
 * @package OceanWP WordPress theme
 */

function oceanwp_tgmpa_register() {

	// Get array of recommended plugins
	$plugins = array(
		
		array(
			'name'				=> 'Ocean Extra',
			'slug'				=> 'ocean-extra', 
			'required'			=> false,
			'force_activation'	=> false,
		),
		
		array(
			'name'				=> 'Elementor',
			'slug'				=> 'elementor', 
			'required'			=> false,
			'force_activation'	=> false,
		),
		
	);

	// WooCommerce Wishlist plugin will be recommended in case WooCommerce activated.
	if ( class_exists( 'WooCommerce' ) ) {
		// Because of free and premium version have different slugs we need to switch dynamically to avoid both version recommendation.
		$wishlist_name = ( defined( 'TINVWL_LOAD_PREMIUM' ) ) ? 'ti-woocommerce-wishlist-premium' : 'ti-woocommerce-wishlist';
		$plugins[]     = array(
			'name'     => 'WooCommerce Wishlist',
			'slug'     => $wishlist_name,
			'required' => false,
		);
	}

	// Register notice
	tgmpa( $plugins, array(
		'id'           => 'oceanwp_theme',
		'domain'       => 'oceanwp',
		'menu'         => 'install-required-plugins',
		'has_notices'  => true,
		'is_automatic' => true,
		'dismissable'  => true,
	) );

}
add_action( 'tgmpa_register', 'oceanwp_tgmpa_register' );