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
 * Client-side active callback rules for the general Customizer domain.
 *
 * @return array
 */
function ocean_get_customize_general_active_callback_rules() {
	return array(
		'ocean_is_google_font_settings' => ocean_customize_active_rule_equals(
			'ocean_enable_google_fonts',
			true
		),
		'ocean_is_local_google_font' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_enable_google_fonts', true ),
				ocean_customize_active_rule_equals( 'ocean_local_google_font', true ),
			),
		),
		'ocean_is_not_boxed_layout' => array(
			'setting'  => 'ocean_main_layout_style',
			'operator' => 'not-equals',
			'value'    => 'boxed',
		),
		'oceanwp_cac_has_boxed_layout' => ocean_customize_active_rule_equals(
			'ocean_main_layout_style',
			'boxed'
		),
		'oceanwp_cac_has_boxed_or_separate_layout' => ocean_customize_active_rule_in(
			'ocean_main_layout_style',
			array( 'boxed', 'separate' )
		),
		'oceanwp_cac_has_separate_layout' => ocean_customize_active_rule_equals(
			'ocean_main_layout_style',
			'separate'
		),
		'ocean_is_scroll_top' => ocean_customize_active_rule_equals(
			'ocean_scroll_top',
			true
		),
		'oceanwp_cac_has_page_single_bs_layout' => ocean_customize_active_rule_equals(
			'ocean_page_single_layout',
			'both-sidebars'
		),
		'oceanwp_cac_has_page_single_rl_layout' => ocean_customize_active_rule_in(
			'ocean_page_single_layout',
			array( 'right-sidebar', 'left-sidebar' )
		),
		'oceanwp_is_page_title_display' => ocean_customize_active_rule_equals(
			'ocean_page_title_display',
			true
		),
		'oceanwp_is_active_breadcrumb_callback' => ocean_customize_active_rule_equals(
			'ocean_breadcrumbs',
			true
		),
		'oceanwp_cac_has_background_image' => array(
			'setting'  => 'ocean_background_image',
			'operator' => 'not-empty',
		),
		'ocean_cac_footer_widget' => ocean_customize_active_rule_equals(
			'ocean_footer_widgets',
			true
		),
		'ocean_cac_footer_copyright' => ocean_customize_active_rule_equals(
			'ocean_footer_bottom',
			true
		),
		'oceanwp_cac_has_search_bs_layout' => ocean_customize_active_rule_equals(
			'ocean_search_layout',
			'both-sidebars'
		),
		'oceanwp_cac_has_search_rl_layout' => ocean_customize_active_rule_in(
			'ocean_search_layout',
			array( 'right-sidebar', 'left-sidebar' )
		),
		'oceanwp_cac_is_grid_list_buttons' => ocean_customize_active_rule_equals(
			'ocean_woo_grid_list',
			true
		),
		'oceanwp_cac_is_shop_links_disabled' => ocean_customize_active_rule_equals(
			'ocean_shop_woo_disable_links',
			true
		),
		'ocean_cac_accessibility_mode_disabled' => array(
			'not' => array(
				'setting'  => 'ocean_accessibility_mode',
				'operator' => 'truthy',
			),
		),
		'ocean_cac_display_search_form_label' => ocean_customize_active_rule_equals(
			'ocean_display_header_search_form_label',
			true
		),
		'ocean_cac_display_comment_form_label' => ocean_customize_active_rule_equals(
			'ocean_display_comment_form_label',
			true
		),
	);
}
