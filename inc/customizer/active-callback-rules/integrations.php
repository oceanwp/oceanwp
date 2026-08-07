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
 * Client-side active callback rules for the integrations Customizer domain.
 *
 * @return array
 */
function ocean_get_customize_integrations_active_callback_rules() {
	return array(
		'oceanwp_cac_is_edd_bag_style' => array(
			'setting'  => 'ocean_edd_menu_bag_style',
			'operator' => 'equals',
			'value'    => 'yes',
		),
		'oceanwp_cac_is_not_edd_bag_style' => array(
			'setting'  => 'ocean_edd_menu_bag_style',
			'operator' => 'not-equals',
			'value'    => 'yes',
		),
		'oceanwp_cac_is_edd_archive_bs_layout' => array(
			'setting'  => 'ocean_edd_archive_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_edd_archive_rl_layout' => array(
			'setting'  => 'ocean_edd_archive_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
		'oceanwp_cac_is_edd_download_bs_layout' => array(
			'setting'  => 'ocean_edd_download_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_edd_download_rl_layout' => array(
			'setting'  => 'ocean_edd_download_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
		'oceanwp_cac_is_llms_global_bs_layout' => array(
			'setting'  => 'ocean_llms_global_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_llms_global_rl_layout' => array(
			'setting'  => 'ocean_llms_global_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
		'oceanwp_cac_is_llms_course_bs_layout' => array(
			'setting'  => 'ocean_llms_course_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_llms_course_rl_layout' => array(
			'setting'  => 'ocean_llms_course_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
		'oceanwp_cac_is_llms_lesson_bs_layout' => array(
			'setting'  => 'ocean_llms_lesson_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_llms_lesson_rl_layout' => array(
			'setting'  => 'ocean_llms_lesson_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
		'oceanwp_cac_is_ld_global_bs_layout' => array(
			'setting'  => 'ocean_ld_global_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_ld_global_rl_layout' => array(
			'setting'  => 'ocean_ld_global_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
		'oceanwp_cac_is_ld_course_bs_layout' => array(
			'setting'  => 'ocean_ld_course_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_ld_course_rl_layout' => array(
			'setting'  => 'ocean_ld_course_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
		'oceanwp_cac_is_ld_lesson_bs_layout' => array(
			'setting'  => 'ocean_ld_lesson_layout',
			'operator' => 'equals',
			'value'    => 'both-sidebars',
		),
		'oceanwp_cac_is_ld_lesson_rl_layout' => array(
			'setting'  => 'ocean_ld_lesson_layout',
			'operator' => 'in',
			'value'    => array( 'right-sidebar', 'left-sidebar' ),
		),
	);
}
