<?php
/**
 * OceanWP Customizer Settings: SEO
 *
 * @package OceanWP WordPress theme
 * @link https://oceanwp.org/
 * @since 4.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [
	'ocean_schema_markup' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable Schema Markup', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => true,
		'transport'         => 'refresh',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_schema_min_microdata' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Use Minimal Microdata Only (Layout)', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'active_callback'   => 'oceanwp_cac_is_schema_markup_enabled',
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_schema_manager' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable Schema Manager', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'refresh',
		'priority'          => 10,
		'hideLabel'         => false,
		'active_callback'   => 'oceanwp_cac_is_schema_markup_enabled',
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_schema_type' => [
		'type'              => 'ocean-select',
		'label'             => esc_html__( 'Select Schema Type', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => 'jsonld',
		'priority'          => 10,
		'hideLabel'         => false,
		'multiple'          => false,
		'active_callback'   => 'oceanwp_cac_is_schema_manager_enabled',
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'jsonld' => esc_html__( 'JSON-LD (Recommended)', 'oceanwp' ),
			'mixed'  => esc_html__( 'Both', 'oceanwp' ),
		],
	],

	'ocean_schema_breadcrumbs' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Include Breadcrumbs Schema', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'active_callback'   => 'oceanwp_cac_is_schema_manager_enabled',
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_configure_breadcrumb_link' => [
		'type'      => 'ocean-content',
		'label'     => esc_html__( 'Configure Breadcrumbs Trail', 'oceanwp' ),
		'isContent' => sprintf( esc_html__( 'Visit the %1$s Breadcrumbs settings page %2$s', 'oceanwp' ), '<a href="' . admin_url( 'customize.php?autofocus%5Bcontrol%5D=ocean_breadcrumbs' ) . '">', '</a>' ),
		'section'   => 'ocean_seo_settings',
		'class'     => 'description',
		'transport' => 'postMessage',
		'bottom'    => 20,
		'priority'  => 10,
	],

	'ocean_schema_output_location' => [
		'type'              => 'ocean-select',
		'label'             => esc_html__( 'Schema Output Location', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => 'wp_head',
		'priority'          => 12,
		'hideLabel'         => false,
		'multiple'          => false,
		'active_callback'   => 'oceanwp_cac_is_schema_manager_enabled',
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'wp_head'   => esc_html__( 'WP Head (Recommended)', 'oceanwp' ),
			'wp_footer' => esc_html__( 'WP Footer', 'oceanwp' ),
		],
	],

	'ocean_configure_portfolio_schema_link' => [
		'type'      => 'ocean-content',
		'label'     => esc_html__( 'Configure Portfolio Schema', 'oceanwp' ),
		'isContent' => sprintf( esc_html__( 'Visit %1$s Portfolio Schema Settings %2$s', 'oceanwp' ), '<a href="' . admin_url( 'customize.php?autofocus%5Bcontrol%5D=ocean_breadcrumbs' ) . '">', '</a>' ),
		'section'   => 'ocean_seo_settings',
		'class'     => 'description',
		'transport' => 'postMessage',
		'top'       => 20,
		'bottom'    => 10,
		'priority'  => 13,
		'active_callback' => function() {
			return oceanwp_cac_is_portfolio_schema_available();
		},
	],

	'ocean_divider_before_schema_caching' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 14,
		'top'       => 10,
		'bottom'    => 10,
		'active_callback' => function() {
			return oceanwp_cac_is_schema_caching_available();
		},
	],

	'ocean_seo_image_alt_heading' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Image ALT Text', 'oceanwp' ),
		'desc'      => esc_html__( 'Choose what ALT text should featured images return.', 'oceanwp' ),
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 19,
	],

	'ocean_enable_be_fimage_alt' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Use featured image ALT text on blog entries', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 20,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_enable_be_fimage_alt_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 21,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_enable_sp_fimage_alt' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Use featured image ALT text on single posts', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 22,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_enable_sp_fimage_alt_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 23,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_enable_srp_fimage_alt' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Use featured image ALT text on single post related items', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 24,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_opengraph_heading' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'OpenGraph', 'oceanwp' ),
		'desc'      => esc_html__( 'This information is read and used by social media when a link from your website is shared.', 'oceanwp' ),
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 25,
	],

	'ocean_open_graph' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable OpenGraph', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 26,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_open_graph_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 27,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_twitter_handle' => [
		'label'             => esc_html__( 'X (ex Twitter) Username', 'oceanwp' ),
		'type'              => 'ocean-text',
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => '',
		'priority'          => 28,
		'hideLabel'         => false,
		'sanitize_callback' => 'wp_filter_nohtml_kses',
	],

	'ocean_divider_after_twitter_handle_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 29,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_facebook_page_url' => [
		'label'             => esc_html__( 'Facebook Page URL', 'oceanwp' ),
		'type'              => 'ocean-text',
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => '',
		'priority'          => 30,
		'hideLabel'         => false,
		'sanitize_callback' => 'wp_filter_nohtml_kses',
	],

	'ocean_facebook_appid' => [
		'label'             => esc_html__( 'Facebook App ID', 'oceanwp' ),
		'type'              => 'ocean-text',
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => '',
		'priority'          => 31,
		'hideLabel'         => false,
		'sanitize_callback' => 'wp_filter_nohtml_kses',
	],

	'ocean_seo_settings_section_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/906-customizer-seo-settings/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'priority'  => 32,
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
	]
];
