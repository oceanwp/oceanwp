<?php
/**
 * OceanWP Customizer Settings: Sidebar
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_sidebar_dfds' => [
		'type' => 'ocean-switch',
		'label' => esc_html__('Enable Sidebar', 'oceanwp'),
		'section' => 'ocean_sidebar',
		'default'  => true,
		'transport' => 'refresh',
		'priority' => 10,
		'hideLabel' => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],
];
