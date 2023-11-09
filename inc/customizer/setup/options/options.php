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
        'title' => __( 'Site Typography', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'typography' ),
    ],
    'ocean_colors' => [
        'title' => __( 'Site Colors', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'colors' )
    ],
    'ocean_styles_and_settings' => [
        'title' => __( 'Site Style & Settings', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'styles-and-settings' )
    ],
    'ocean_site_page_settings' => [
        'title' => __( 'Site Page Settings', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'page-settings' )
    ],
    'ocean_topbar_settings' => [
        'title' => __( 'Top Bar', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'topbar' )
    ],
    'ocean_header_settings' => [
        'title' => __( 'Header', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'header' )
    ],
    'ocean_blog_settings' => [
        'title' => __( 'Blog', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'blog' )
    ]
];
