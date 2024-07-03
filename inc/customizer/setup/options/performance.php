<?php
/**
 * OceanWP Customizer Settings: performance
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [
	'ocean_performance_emoji' => [
		'type' => 'ocean-buttons',
		'label' => esc_html__( 'Emoji', 'oceanwp' ),
		'desc' => esc_html__( 'This style is all the css for the WP emoji.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_performance_fontawesome' => [
		'type' => 'ocean-buttons',
		'label' => esc_html__( 'Font Awesome Icons', 'oceanwp' ),
		'desc' => esc_html__( 'This style is all the css for the font awesome icons.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_disable_svg_icons' => [
		'type' => 'ocean-buttons',
		'label' => esc_html__( 'Ocean SVG Icons', 'oceanwp' ),
		'desc' => esc_html__( 'This file is for all the Ocean SVG icons.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_performance_simple_line_icons' => [
		'type' => 'ocean-buttons',
		'label' => esc_html__( 'Simple Line Icons', 'oceanwp' ),
		'desc' => esc_html__( 'This style is all the css for the simple line icons.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_performance_lightbox' => [
		'type' => 'ocean-buttons',
		'label'       => esc_html__( 'Lightbox', 'oceanwp' ),
		'desc' => esc_html__( 'This script enables you to overlay your images on the current page, used for the gallerie, single product and content images.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_performance_custom_select' => [
		'type' => 'ocean-buttons',
		'label' => esc_html__( 'Custom Select', 'oceanwp' ),
		'desc' => esc_html__( 'This script uses the native select box and add overlays a stylable <span> element in order to acheive the desired look.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_load_widgets_stylesheet' => [
		'type' => 'ocean-buttons',
		'label' => esc_html__( 'Widgets Stylesheet Load', 'oceanwp' ),
		'desc' => esc_html__( 'You can disable loading widgets.css stylesheet on your site.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'active_callback' => 'ocean_is_oe_active',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_performance_scroll_effect' => [
		'type' => 'ocean-buttons',
		'label' => esc_html__( 'Scroll Effect', 'oceanwp' ),
		'desc' => esc_html__( 'This script is responsible for the scroll effect in theme.', 'oceanwp' ),
		'section' => 'ocean_site_performance',
		'default'  => 'enabled',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'wrap'    => false,
		'sanitize_callback' => 'sanitize_key',
		'choices' => [
			'disabled' => [
				'id'     => 'disabled',
				'label'   => esc_html__('Disabled', 'oceanwp'),
				'content' => esc_html__('Disabled', 'oceanwp'),
			],
			'enabled'  => [
				'id'     => 'enabled',
				'label'   => esc_html__('Enabled', 'oceanwp'),
				'content' => esc_html__('Enabled', 'oceanwp'),
			]
		]
	],

	'ocean_scroll_effect_offset_value' => [
		'label'    => esc_html__( 'Scroll Effect - Custom Offset', 'oceanwp' ),
		'type'     => 'ocean-range-slider',
		'section'  => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel'    => false,
		'isUnit'       => false,
		'isResponsive' => false,
		'min'          => 0,
		'max'          => 600,
		'step'         => 1,
		'sanitize_callback' => 'oceanwp_sanitize_number_blank',
		'setting_args' => [
			'desktop' => [
				'id' => 'ocean_scroll_effect_offset_value',
				'label' => esc_html__( 'Desktop', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],
];
