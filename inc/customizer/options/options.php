<?php
/**
 * OceanWP Customizer Class
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [
	'ocean_typography' => [
		'title' => __( 'Typography', 'oceanwp' ),
		'priority' => 1,
		'options' => ocean_customize_options( 'typography' ),
	],
	'ocean_colors' => [
		'title' => __( 'Colors', 'oceanwp' ),
		'priority' => 1,
		'options' => ocean_customize_options( 'colors' )
	],
	'ocean_styles_and_settings' => [
		'title' => __( 'Site Style & Settings', 'oceanwp' ),
		'priority' => 2,
		'options' => ocean_customize_options( 'styles-and-settings' )
	],
	'ocean_site_page_settings' => [
		'title' => __( 'Pages & Special Pages', 'oceanwp' ),
		'priority' => 2,
		'options' => ocean_customize_options( 'page-settings' )
	],
	'ocean_topbar' => [
		'title' => __( 'Top Bar', 'oceanwp' ),
		'priority' => 3,
		'options' => ocean_customize_options( 'topbar' )
	],
	'ocean_header' => [
		'title' => __( 'Header', 'oceanwp' ),
		'priority' => 3,
		'options' => ocean_customize_options( 'header' )
	],
	'ocean_blog' => [
		'title' => __( 'Blog', 'oceanwp' ),
		'priority' => 4,
		'options' => ocean_customize_options( 'blog' )
	],
	'ocean_sidebar' => [
		'title' => __( 'Sidebar', 'oceanwp' ),
		'priority' => 5,
		'options' => ocean_customize_options( 'sidebar' )
	],
	'ocean_footer_widgets' => [
		'title' => __( 'Footer Widgets', 'oceanwp' ),
		'priority' => 6,
		'options' => ocean_customize_options( 'footer-widget' )
	],
	'ocean_footer_bottom' => [
		'title' => __( 'Footer Copyright', 'oceanwp' ),
		'priority' => 6,
		'options' => ocean_customize_options( 'footer-copyright' )
	],
	'ocean_seo_settings' => [
		'title' => __( 'SEO Settings', 'oceanwp' ),
		'priority' => 7,
		'options' => ocean_customize_options( 'seo' )
	],
	'ocean_site_performance' => [
		'title' => __( 'Performance', 'oceanwp' ),
		'priority' => 7,
		'options' => ocean_customize_options( 'performance' )
	],
	'ocean_woocommerce_settings' => [
		'title' => __( 'WooCommerce', 'oceanwp' ),
		'priority' => 9,
		'options' => ocean_customize_options( 'woocommerce' ),
		'condition' => OCEANWP_WOOCOMMERCE_ACTIVE
	],
	'ocean_edd_settings' => [
		'title' => __( 'Easy Digital Downloads', 'oceanwp' ),
		'priority' => 9,
		'options' => ocean_customize_options( 'edd' ),
		'condition' => OCEANWP_EDD_ACTIVE
	],
	'ocean_learndash_settings' => [
		'title' => __( 'LearnDash', 'oceanwp' ),
		'priority' => 10,
		'options' => ocean_customize_options( 'learndash' ),
		'condition' => OCEANWP_LEARNDASH_ACTIVE
	],
	'ocean_lifterlms_settings' => [
		'title' => __( 'LifterLMS', 'oceanwp' ),
		'priority' => 10,
		'options' => ocean_customize_options( 'lifterlms' ),
		'condition' => OCEANWP_LIFTERLMS_ACTIVE
	]
];
