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
 * Client-side active callback rules for the woocommerce Customizer domain.
 *
 * @return array
 */
function ocean_get_customize_woocommerce_active_callback_rules() {
	return array(
		'oceanwp_cac_is_woo_bag_style' => ocean_customize_active_rule_equals(
			'ocean_woo_menu_bag_style',
			'yes'
		),
		'oceanwp_cac_is_not_woo_bag_style' => array(
			'setting'  => 'ocean_woo_menu_bag_style',
			'operator' => 'not-equals',
			'value'    => 'yes',
		),
		'oceanwp_cac_is_woo_shop_bs_layout' => ocean_customize_active_rule_equals(
			'ocean_woo_shop_layout',
			'both-sidebars'
		),
		'oceanwp_cac_is_woo_shop_rl_layout' => ocean_customize_active_rule_in(
			'ocean_woo_shop_layout',
			array( 'right-sidebar', 'left-sidebar' )
		),
		'oceanwp_cac_is_woo_filter_button' => ocean_customize_active_rule_equals(
			'ocean_woo_off_canvas_filter',
			true
		),
		'oceanwp_cac_is_woo_filter_close_button' => ocean_customize_active_rule_equals(
			'ocean_woo_off_canvas_close_button',
			true
		),
		'oceanwp_cac_is_woo_default_products_style' => ocean_customize_active_rule_equals(
			'ocean_woo_products_style',
			'default'
		),
		'oceanwp_cac_has_woo_hover_products_style' => ocean_customize_active_rule_equals(
			'ocean_woo_products_style',
			'hover'
		),
		'oceanwp_cac_is_shop_condition' => ocean_customize_active_rule_equals(
			'ocean_shop_conditional',
			true
		),
		'oceanwp_cac_is_woo_infinite_scroll' => ocean_customize_active_rule_equals(
			'ocean_woo_pagination_style',
			'infinite_scroll'
		),
		'oceanwp_cac_is_woo_load_more_pagination' => ocean_customize_active_rule_equals(
			'ocean_woo_pagination_style',
			'load_more'
		),
		'oceanwp_cac_is_woo_product_bs_layout' => ocean_customize_active_rule_equals(
			'ocean_woo_product_layout',
			'both-sidebars'
		),
		'oceanwp_cac_is_woo_product_rl_layout' => ocean_customize_active_rule_in(
			'ocean_woo_product_layout',
			array( 'right-sidebar', 'left-sidebar' )
		),
		'oceanwp_cac_is_single_condition' => ocean_customize_active_rule_equals(
			'ocean_woo_single_conditional',
			true
		),
		'oceanwp_cac_is_woo_single_related_items' => ocean_customize_active_rule_equals(
			'ocean_woocommerce_display_related_items',
			'on'
		),
		'oceanwp_cac_is_woo_floating_bar' => ocean_customize_active_rule_equals(
			'ocean_woo_display_floating_bar',
			'on'
		),
		'oceanwp_cac_is_woo_multistep_checkout' => ocean_customize_active_rule_equals(
			'ocean_woo_multi_step_checkout',
			true
		),
		'oceanwp_cac_is_woo_shop_result_count_enabled' => ocean_customize_active_rule_equals(
			'ocean_woo_shop_result_count',
			true
		),
	);
}
