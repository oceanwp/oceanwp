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
        'options' => ocean_customize_options( 'colors' ),
    ]
];
