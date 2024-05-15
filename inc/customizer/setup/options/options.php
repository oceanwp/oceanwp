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
    ],
    'ocean_footer_widget_settings' => [
        'title' => __( 'Footer Widget', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'footer-widget' )
    ],
    'ocean_footer_copyright_settings' => [
        'title' => __( 'Footer Copyright', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'footer-copyright' )
    ],
    'ocean_woocommerce_settings' => [
        'title' => __( 'WooCommerce', 'oceanwp' ),
        'priority' => 1,
        'options' => ocean_customize_options( 'woocommerce' ),
        'condition' => OCEANWP_WOOCOMMERCE_ACTIVE
    ],
    'ocean_edd_settings' => [
        'title' => __( 'Easy Digital Downloads', 'oceanwp' ),
        'priority' => 2,
        'options' => ocean_customize_options( 'edd' ),
        'condition' => OCEANWP_EDD_ACTIVE
    ],
    'ocean_learndash_settings' => [
        'title' => __( 'LearnDash', 'oceanwp' ),
        'priority' => 3,
        'options' => ocean_customize_options( 'learndash' ),
        'condition' => OCEANWP_LEARNDASH_ACTIVE
    ],
    'ocean_lifterlms_settings' => [
        'title' => __( 'LifterLMS', 'oceanwp' ),
        'priority' => 4,
        'options' => ocean_customize_options( 'lifterlms' ),
        'condition' => OCEANWP_LIFTERLMS_ACTIVE
    ]
];
