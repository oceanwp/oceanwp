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
 * Client-side active callback rules for the header Customizer domain.
 *
 * @return array
 */
function ocean_get_customize_header_active_callback_rules() {
	return array(
		'oceanwp_is_bg_image_page_header' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_page_title_display', true ),
				ocean_customize_active_rule_equals( 'ocean_page_header_style', 'background-image' ),
			),
		),
		'oceanwp_is_not_bg_image_page_header' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_page_title_display', true ),
				array(
					'setting'  => 'ocean_page_header_style',
					'operator' => 'not-equals',
					'value'    => 'background-image',
				),
			),
		),
		'ocean_cac_header_custom' => ocean_customize_active_rule_equals(
			'ocean_header_style',
			'custom'
		),
		'ocean_cac_header_not_vertical' => array(
			'setting'  => 'ocean_header_style',
			'operator' => 'not-equals',
			'value'    => 'vertical',
		),
		'ocean_cac_header_top_menu' => ocean_customize_active_rule_equals(
			'ocean_header_style',
			'top'
		),
		'ocean_cac_header_full_screen' => ocean_customize_active_rule_equals(
			'ocean_header_style',
			'full_screen'
		),
		'ocean_cac_header_center_style' => ocean_customize_active_rule_equals(
			'ocean_header_style',
			'center'
		),
		'ocean_cac_header_medium_style' => ocean_customize_active_rule_equals(
			'ocean_header_style',
			'medium'
		),
		'ocean_cac_header_vertical_style' => ocean_customize_active_rule_equals(
			'ocean_header_style',
			'vertical'
		),
		'ocean_cac_header_transparent_style' => ocean_customize_active_rule_equals(
			'ocean_header_style',
			'transparent'
		),
		'oceanwp_cac_custom_logo' => array(
			'setting'  => 'custom_logo',
			'operator' => 'truthy',
		),
		'oceanwp_cac_not_custom_logo' => array(
			'setting'  => 'custom_logo',
			'operator' => 'falsy',
		),
		'oceanwp_cac_has_topbar' => ocean_customize_active_rule_equals(
			'ocean_top_bar',
			true
		),
		'oceanwp_cac_has_topbar_social' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_top_bar', true ),
				ocean_customize_active_rule_equals( 'ocean_top_bar_social', true ),
			),
		),
		'oceanwp_cac_hasnt_top_or_medium_header_styles' => array(
			'setting'  => 'ocean_header_style',
			'operator' => 'not-in',
			'value'    => array( 'top', 'medium' ),
		),
		'ocean_cac_header_search_dropdown' => ocean_customize_active_rule_equals(
			'ocean_menu_search_style',
			'drop_down'
		),
		'ocean_cac_header_search_overlay' => ocean_customize_active_rule_equals(
			'ocean_menu_search_style',
			'overlay'
		),
		'oceanwp_cac_has_menu_social' => ocean_customize_active_rule_equals(
			'ocean_menu_social',
			true
		),
		'ocean_cac_header_social_menu_simple' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_menu_social', true ),
				ocean_customize_active_rule_equals( 'ocean_menu_social_style', 'simple' ),
			),
		),
		'ocean_cac_mobile_menu_has_custom_breakpoints' => ocean_customize_active_rule_equals(
			'ocean_mobile_menu_breakpoints',
			'custom'
		),
		'ocean_cac_mobile_header_not_medium_vetical_custom' => array(
			'setting'  => 'ocean_header_style',
			'operator' => 'not-in',
			'value'    => array( 'medium', 'vertical', 'custom' ),
		),
		'ocean_cac_has_mobile_menu_sidebar' => ocean_customize_active_rule_equals(
			'ocean_mobile_menu_style',
			'sidebar'
		),
		'ocean_cac_has_mobile_menu_dropdown' => ocean_customize_active_rule_equals(
			'ocean_mobile_menu_style',
			'dropdown'
		),
		'ocean_cac_has_mobile_menu_fullscreen' => ocean_customize_active_rule_equals(
			'ocean_mobile_menu_style',
			'fullscreen'
		),
		'ocean_cac_has_mobile_menu_dropdown_sidebar' => ocean_customize_active_rule_in(
			'ocean_mobile_menu_style',
			array( 'dropdown', 'sidebar' )
		),
		'ocean_cac_has_mobile_menu_display_menu_text' => ocean_customize_active_rule_equals(
			'ocean_mobile_menu_display_opening_text',
			true
		),
		'oceanwp_cac_menu_links_effect_blue' => ocean_customize_active_rule_in(
			'ocean_menu_links_effect',
			array( 'one', 'three', 'four', 'five', 'seven', 'nine' )
		),
		'oceanwp_cac_menu_links_effect_dark' => ocean_customize_active_rule_in(
			'ocean_menu_links_effect',
			array( 'two', 'six', 'eight', 'ten' )
		),
	);
}
