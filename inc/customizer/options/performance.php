<?php
/**
 * OceanWP Customizer Settings: Performance
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [
	'ocean_customzer_styling' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Styling Options Location', 'oceanwp' ),
		'desc'              => esc_html__( 'Both settings apply only to the custom CSS added in the Custom CSS field in the Customizer. If you choose the Custom File location, a dedicated CSS file will be created in your uploads folder of your WordPress installation.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'head',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'head' => [
				'id'      => 'head',
				'label'   => esc_html__( 'WP Head', 'oceanwp' ),
				'content' => esc_html__( 'WP Head', 'oceanwp' ),
			],
			'file'  => [
				'id'      => 'file',
				'label'   => esc_html__( 'Custom File', 'oceanwp' ),
				'content' => esc_html__( 'Custom File', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_ocean_customzer_styling_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],

	'ocean_performance_emoji' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Emoji', 'oceanwp' ),
		'desc'              => esc_html__( 'This file contains all the CSS rules that define the appearance and behavior of WP emoji.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_performance_emoji_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],

	'ocean_performance_fontawesome' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Font Awesome Icons', 'oceanwp' ),
		'desc'              => esc_html__( 'This file contains all the CSS rules that define the appearance of Font Awesome icons.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_performance_fontawesome_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],

	'ocean_disable_svg_icons' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Ocean SVG Icons', 'oceanwp' ),
		'desc'              => esc_html__( 'This file contains all the CSS rules that define the appearance of OceanWP SVG icons.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_performance_svg_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],

	'ocean_performance_simple_line_icons' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Simple Line Icons', 'oceanwp' ),
		'desc'              => esc_html__( 'This file contains all the CSS rules that define the appearance of Simple Line icons.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_performance_simple_line_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],

	'ocean_performance_lightbox' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Lightbox', 'oceanwp' ),
		'desc'              => esc_html__( 'This script enables image preview in a special window overlay that appears over the current page. It is used in galleries, single product and content images.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_performance_lightbox_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],


	'ocean_performance_custom_select' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Custom Select', 'oceanwp' ),
		'desc'              => esc_html__( 'This script enhances the native select box by adding a visually appealing overlay that can be styled to match your design.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_performance_custom_select_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],


	'ocean_load_widgets_stylesheet' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Widgets Stylesheet Load', 'oceanwp' ),
		'desc'              => esc_html__( 'This file contains all the CSS rules that define the appearance and behavior of OceanWP custom widgets for WordPress.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'active_callback'   => 'ocean_is_oe_active',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_divider_after_performance_widgets_stylesheet_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],

	'ocean_performance_scroll_effect' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Scroll Effect', 'oceanwp' ),
		'desc'              => esc_html__( 'This script controls the smooth scrolling effect within the theme. It is used for anchor links.', 'oceanwp' ),
		'section'           => 'ocean_site_performance',
		'default'           => 'enabled',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'disabled' => [
				'id'      => 'disabled',
				'label'   => esc_html__( 'Disabled', 'oceanwp' ),
				'content' => esc_html__( 'Disabled', 'oceanwp' ),
			],
			'enabled'  => [
				'id'      => 'enabled',
				'label'   => esc_html__( 'Enabled', 'oceanwp' ),
				'content' => esc_html__( 'Enabled', 'oceanwp' ),
			]
		]
	],

	'ocean_scroll_effect_offset_value' => [
		'label'             => esc_html__( 'Scroll Effect - Custom Offset (px)', 'oceanwp' ),
		'type'              => 'ocean-range-slider',
		'section'           => 'ocean_site_performance',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'isUnit'            => false,
		'isResponsive'      => false,
		'min'               => 0,
		'max'               => 600,
		'step'              => 1,
		'sanitize_callback' => 'oceanwp_sanitize_number_blank',
		'setting_args'      => [
			'desktop' => [
				'id'    => 'ocean_scroll_effect_offset_value',
				'label' => esc_html__( 'Desktop', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_site_performance_section_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/907-customizer-performance/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'priority'  => 10,
		'section'   => 'ocean_site_performance',
		'transport' => 'postMessage',
	]
];
