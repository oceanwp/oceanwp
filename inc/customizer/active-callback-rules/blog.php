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
 * Client-side active callback rules for the blog Customizer domain.
 *
 * @return array
 */
function ocean_get_customize_blog_active_callback_rules() {
	return array(
		'ocean_cac_blog_archive_bs_layout' => ocean_customize_active_rule_equals(
			'ocean_blog_archives_layout',
			'both-sidebars'
		),
		'ocean_cac_blog_archive_sidebar_layout' => ocean_customize_active_rule_in(
			'ocean_blog_archives_layout',
			array( 'right-sidebar', 'left-sidebar' )
		),
		'ocean_cac_blog_archive_grid_style' => ocean_customize_active_rule_equals(
			'ocean_blog_style',
			'grid-entry'
		),
		'oceanwp_cac_blog_archive_pagination_infinite_scroll' => ocean_customize_active_rule_equals(
			'ocean_blog_pagination_style',
			'infinite_scroll'
		),
		'oceanwp_cac_blog_archive_pagination_load_more' => ocean_customize_active_rule_equals(
			'ocean_blog_pagination_style',
			'load_more'
		),
		'ocean_cac_blog_single_bs_layout' => ocean_customize_active_rule_equals(
			'ocean_blog_single_layout',
			'both-sidebars'
		),
		'ocean_cac_blog_single_fw_layout' => ocean_customize_active_rule_equals(
			'ocean_blog_single_layout',
			'full-width'
		),
		'ocean_cac_blog_single_sidebar_layout' => ocean_customize_active_rule_in(
			'ocean_blog_single_layout',
			array( 'right-sidebar', 'left-sidebar' )
		),
		'ocean_cac_blog_single_post_title_default' => ocean_customize_active_rule_equals(
			'oceanwp_single_post_header_style',
			'default'
		),
		'ocean_cac_not_blog_single_post_title_default' => array(
			'setting'  => 'oceanwp_single_post_header_style',
			'operator' => 'not-equals',
			'value'    => 'default',
		),
		'oceanwp_cac_single_post_title_cover' => ocean_customize_active_rule_equals(
			'oceanwp_single_post_header_style',
			'sph_style_3'
		),
		'ocean_cac_search_result_layout' => ocean_customize_active_rule_in(
			'ocean_search_layout',
			array( 'right-sidebar', 'left-sidebar', 'both-sidebars' )
		),
		'ocean_cac_blog_archive_thumbnail_style' => ocean_customize_active_rule_equals(
			'ocean_blog_style',
			'thumbnail-entry'
		),
		'oceanwp_cac_not_blog_archive_thumbnail_style' => array(
			'setting'  => 'ocean_blog_style',
			'operator' => 'not-equals',
			'value'    => 'thumbnail-entry',
		),
		'oceanwp_cac_blog_supports_equal_heights' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_blog_style', 'grid-entry' ),
				array(
					'setting'  => 'ocean_blog_grid_style',
					'operator' => 'not-equals',
					'value'    => 'masonry',
				),
			),
		),
		'ocean_cac_blog_single_post_title_has_featured_image' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'ocean_blog_single_featured_image_title', true ),
				ocean_customize_active_rule_equals( 'oceanwp_single_post_header_style', 'default' ),
			),
		),
		'oceanwp_cac_not_single_post_title_cover_default' => array(
			'setting'  => 'oceanwp_single_post_header_style',
			'operator' => 'not-in',
			'value'    => array( 'sph_style_3', 'default' ),
		),
		'oceanwp_cac_not_single_post_meta_stylish' => array(
			'all' => array(
				ocean_customize_active_rule_equals( 'oceanwp_single_post_header_meta_style', 'spm_style_3' ),
				array(
					'setting'  => 'oceanwp_single_post_header_style',
					'operator' => 'not-equals',
					'value'    => 'default',
				),
			),
		),
	);
}
