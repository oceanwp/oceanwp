<?php
/**
 * OceanWP Customizer Settings: SEO
 *
 * @package OceanWP WordPress theme
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
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_schema_markup_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_enable_be_fimage_alt' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Use featured image ALT text on blog entries', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_enable_be_fimage_alt_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_enable_sp_fimage_alt' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Use featured image ALT text on single posts', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_enable_sp_fimage_alt_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_enable_srp_fimage_alt' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Use featured image ALT text on single post related items', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_enable_srp_fimage_alt_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_configure_breadcrumb_link' => [
		'type'      => 'ocean-content',
		'label'     => esc_html__( 'Configure Breadcrumbs', 'oceanwp' ),
		'isContent' => sprintf( esc_html__( 'Visit the %1$s Breadcrumbs settings page %2$s', 'oceanwp' ), '<a href="' . admin_url( 'customize.php?autofocus%5Bcontrol%5D=ocean_breadcrumbs' ) . '">', '</a>' ),
		'section'   => 'ocean_seo_settings',
		'class'     => 'description',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_opengraph_heading' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'OpenGraph', 'oceanwp' ),
		'desc'      => esc_html__( 'This information is read and used by social media when a link from your website is shared.', 'oceanwp' ),
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_open_graph' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable OpenGraph', 'oceanwp' ),
		'section'           => 'ocean_seo_settings',
		'default'           => false,
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_open_graph_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_twitter_handle' => [
		'label'             => esc_html__( 'X (ex Twitter) Username', 'oceanwp' ),
		'type'              => 'ocean-text',
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => '',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'wp_filter_nohtml_kses',
	],

	'ocean_divider_after_twitter_handle_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
		'bottom'    => 10,
	],

	'ocean_facebook_page_url' => [
		'label'             => esc_html__( 'Facebook Page URL', 'oceanwp' ),
		'type'              => 'ocean-text',
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => '',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'wp_filter_nohtml_kses',
	],

	'ocean_facebook_appid' => [
		'label'             => esc_html__( 'Facebook App ID', 'oceanwp' ),
		'type'              => 'ocean-text',
		'section'           => 'ocean_seo_settings',
		'transport'         => 'postMessage',
		'default'           => '',
		'priority'          => 10,
		'hideLabel'         => false,
		'sanitize_callback' => 'wp_filter_nohtml_kses',
	],

	'ocean_seo_settings_section_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/906-customizer-seo-settings/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'priority'  => 10,
		'section'   => 'ocean_seo_settings',
		'transport' => 'postMessage',
	]
];
