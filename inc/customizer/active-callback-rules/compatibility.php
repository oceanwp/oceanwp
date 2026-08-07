<?php
/**
 * OceanWP Customizer Active Rules.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Client-side active callback rules for the compatibility Customizer domain.
 *
 * @return array
 */
function ocean_get_customize_compatibility_active_callback_rules() {
	return array(
		'ocean_legacy_setting_disabled' => array(
			'literal' => false,
		),
		'ocean_is_elementor_google_font' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_enable_google_fonts', true ),
				ocean_customize_active_rule_equals( 'ocean_local_google_font', true ),
				array(
					'literal' => (bool) did_action( 'elementor/loaded' ),
				),
			),
		),
		'ocean_is_oe_active' => array(
			'literal' => class_exists( 'Ocean_Extra' ),
		),
		'oceanwp_is_page_title_when_oe_active' => array(
			'all' => array(
				array(
					'literal' => class_exists( 'Ocean_Extra' ),
				),
				ocean_customize_active_rule_equals( 'ocean_page_title_display', true ),
			),
		),
		'oceanwp_is_active_breadcrumb_product_callback' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_breadcrumbs', true ),
				array(
					'literal' => class_exists( 'WooCommerce' ) || class_exists( 'Easy_Digital_Downloads' ),
				),
			),
		),
		'oceanwp_is_active_breadcrumb_portfolio_callback' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_breadcrumbs', true ),
				array(
					'literal' => class_exists( 'Ocean_Portfolio' ),
				),
			),
		),
		'ocean_cac_header_not_custom_and_vertical' => array(
			'literal' => true,
		),
		'ocean_cac_header_not_medium_and_vertical' => array(
			'literal' => true,
		),
		'oceanwp_cac_header_video_controls' => array(
			'all' => array(
				array(
					'literal' => function_exists( 'has_header_video' ) && has_header_video(),
				),
				ocean_customize_active_rule_equals( 'ocean_display_header_video_controls', true ),
			),
		),
		'ocean_upsell_notice_callback' => array(
			'literal' => function_exists( 'ocean_upsell_notice_callback' ) && (bool) ocean_upsell_notice_callback(),
		),
		'ocean_cb_oec_active' => array(
			'literal' => function_exists( 'ocean_cb_oec_active' ) && (bool) ocean_cb_oec_active(),
		),
	);
}
