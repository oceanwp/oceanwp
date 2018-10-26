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

	// If WPForms Pro is not active, recommend WPForms
	if ( ! class_exists( 'WPForms_Pro' ) ) {
		$plugins[] = array(
			'name'				=> 'WPForms',
			'slug'				=> 'wpforms-lite', 
			'required'			=> false,
			'force_activation'	=> false,
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