<?php
/**
 * OceanWP Customizer Settings: Sidebar
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_sidebar_padding_dimensions' => [
		'id'           => 'ocean_sidebar_padding_dimensions',
		'label'        => esc_html__( 'Padding (px)', 'oceanwp' ),
		'type'         => 'ocean-spacing',
		'section'      => 'ocean_sidebar',
		'transport'    => 'postMessage',
		'priority'     => 10,
		'hideLabel'    => false,
		'isType'       => 'padding',
		'setting_args' => [
			'spacingTop' => [
				'id'    => 'ocean_sidebar_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingRight' => [
				'id'    => 'ocean_sidebar_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingBottom' => [
				'id'    => 'ocean_sidebar_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingLeft' => [
				'id'    => 'ocean_sidebar_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 30,
				],
			],
			'spacingTopTablet' => [
				'id'    => 'ocean_sidebar_tablet_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightTablet' => [
				'id'    => 'ocean_sidebar_tablet_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomTablet' => [
				'id'    => 'ocean_sidebar_tablet_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftTablet' => [
				'id'    => 'ocean_sidebar_tablet_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopMobile' => [
				'id'    => 'ocean_sidebar_mobile_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightMobile' => [
				'id'    => 'ocean_sidebar_mobile_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomMobile' => [
				'id'    => 'ocean_sidebar_mobile_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftMobile' => [
				'id'    => 'ocean_sidebar_mobile_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		],
		'preview' => 'queryWithType',
		'css'     => [
			'selector' => '.widget-area',
			'property' => 'padding',
		],
	],

	'ocean_divider_after_sidebar_padding_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_sidebar',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_sidebar_bg' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'Sidebar Background', 'oceanwp' ),
		'section'           => 'ocean_sidebar',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_sidebar_bg',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'.widget-area' => 'background-color'
				],
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_title_for_sidebar_widget_heading' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Widget Options', 'oceanwp' ),
		'section'   => 'ocean_sidebar',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 20,
		'padding'   => 20,
	],


	'ocean_widgets_padding_dimensions' => [
		'id'           => 'ocean_widgets_padding_dimensions',
		'label'        => esc_html__( 'Padding (px)', 'oceanwp' ),
		'type'         => 'ocean-spacing',
		'section'      => 'ocean_sidebar',
		'transport'    => 'postMessage',
		'priority'     => 10,
		'hideLabel'    => false,
		'isType'       => 'padding',
		'setting_args' => [
			'spacingTop' => [
				'id'    => 'ocean_widgets_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingRight' => [
				'id'    => 'ocean_widgets_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingBottom' => [
				'id'    => 'ocean_widgets_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingLeft' => [
				'id'    => 'ocean_widgets_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 30,
				],
			],
			'spacingTopTablet' => [
				'id'    => 'ocean_widgets_tablet_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightTablet' => [
				'id'    => 'ocean_widgets_tablet_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomTablet' => [
				'id'    => 'ocean_widgets_tablet_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftTablet' => [
				'id'    => 'ocean_widgets_tablet_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopMobile' => [
				'id'    => 'ocean_widgets_mobile_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightMobile' => [
				'id'    => 'ocean_widgets_mobile_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomMobile' => [
				'id'    => 'ocean_widgets_mobile_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftMobile' => [
				'id'    => 'ocean_widgets_mobile_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		],
		'preview' => 'queryWithType',
		'css' => [
			'selector' => '.widget-area .sidebar-box',
			'property' => 'padding'
		],
	],

	'ocean_divider_after_sidebar_widget_heading_padding_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_sidebar',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_sidebar_widget_heading_tag' => [
		'type'              => 'ocean-select',
		'label'             => esc_html__( 'Heading Tag', 'oceanwp' ),
		'section'           => 'ocean_sidebar',
		'transport'         => 'refresh',
		'default'           => 'h4',
		'priority'          => 10,
		'hideLabel'         => false,
		'multiple'          => false,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'h1'   => esc_html__( 'H1', 'oceanwp' ),
			'h2'   => esc_html__( 'H2', 'oceanwp' ),
			'h3'   => esc_html__( 'H3', 'oceanwp' ),
			'h4'   => esc_html__( 'H4', 'oceanwp' ),
			'h5'   => esc_html__( 'H5', 'oceanwp' ),
			'h6'   => esc_html__( 'H6', 'oceanwp' ),
			'div'  => esc_html__( 'div', 'oceanwp' ),
			'span' => esc_html__( 'span', 'oceanwp' ),
			'p'    => esc_html__( 'p', 'oceanwp' ),
		],
	],

	'ocean_divider_after_sidebar_widget_heading_tag_setting' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_sidebar',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_widgets_margin_bottom' => [
		'id'                => 'ocean_widgets_margin_bottom',
		'label'             => esc_html__( 'Widget Margin Bottom (px)', 'oceanwp' ),
		'type'              => 'ocean-range-slider',
		'section'           => 'ocean_sidebar',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'isUnit'            => false,
		'isResponsive'      => false,
		'min'               => 0,
		'max'               => 100,
		'step'              => 1,
		'sanitize_callback' => 'oceanwp_sanitize_number_blank',
		'setting_args'      => [
			'desktop' => [
				'id'    => 'ocean_widgets_margin_bottom',
				'label' => esc_html__( 'Desktop', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			]
		],
		'preview' => 'queryWithType',
		'css' => [
			'.widget-area .sidebar-box, .separate-layout .sidebar-box' => ['margin-bottom'],
		]
	],

	'ocean_widgets_titles_margin_bottom' => [
		'id'                => 'ocean_widgets_titles_margin_bottom',
		'label'             => esc_html__( 'Heading Margin Bottom (px)', 'oceanwp' ),
		'type'              => 'ocean-range-slider',
		'section'           => 'ocean_sidebar',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'isUnit'            => false,
		'isResponsive'      => false,
		'min'               => 0,
		'max'               => 100,
		'step'              => 1,
		'sanitize_callback' => 'oceanwp_sanitize_number_blank',
		'setting_args'      => [
			'desktop' => [
				'id'    => 'ocean_widgets_titles_margin_bottom',
				'label' => esc_html__( 'Desktop', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 20,
				],
			]
		],
		'preview' => 'queryWithType',
		'css' => [
			'.widget-title' => ['margin-bottom'],
		]
	],

	'ocean_title_for_sidebar_widget_typo_and_color' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Typography and Colors', 'oceanwp' ),
		'section'   => 'ocean_sidebar',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 20,
		'padding'   => 20,
	],

	'ocean_sidebar_widget_title_typography' => [
		'id'           => 'ocean_sidebar_widget_title_typography',
		'type'         => 'ocean-typography',
		'label'        => esc_html__( 'SB Widget Heading', 'oceanwp' ),
		'section'      => 'ocean_sidebar',
		'transport'    => 'postMessage',
		'priority'     => 10,
		'hideLabel'    => false,
		'selector'     => '.sidebar-box .widget-title, .sidebar-box.widget_block .wp-block-heading',
		'setting_args' => [
			'fontFamily' => [
				'id'    => 'sidebar_widget_title_typography[font-family]',
				'label' => esc_html__(esc_html__( 'Font Family', 'oceanwp' ), 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id'    => 'sidebar_widget_title_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id'    => 'sidebar_widget_title_tablet_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id'    => 'sidebar_widget_title_mobile_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id'    => 'sidebar_widget_title_typography[font-subset]',
				'label' => esc_html__( 'Font Subset', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id'    => 'sidebar_widget_title_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 13,
				],
			],
			'fontSizeTablet' => [
				'id'    => 'sidebar_widget_title_tablet_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id'    => 'sidebar_widget_title_mobile_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id'    => 'sidebar_widget_title_typography[font-size-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 'px',
				],
			],
			'letterSpacing' => [
				'id'    => 'sidebar_widget_title_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 1,
				],
			],
			'letterSpacingTablet' => [
				'id'    => 'sidebar_widget_title_tablet_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id'    => 'sidebar_widget_title_mobile_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id'    => 'sidebar_widget_title_typography[letter-spacing-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 'px',
				],
			],
			'lineHeight' => [
				'id'    => 'sidebar_widget_title_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 1,
				],
			],
			'lineHeightTablet' => [
				'id'    => 'sidebar_widget_title_tablet_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id'    => 'sidebar_widget_title_mobile_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id'    => 'sidebar_widget_title_typography[line-height-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id'    => 'sidebar_widget_title_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id'    => 'sidebar_widget_title_tablet_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id'    => 'sidebar_widget_title_mobile_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textDecoration' => [
				'id'    => 'sidebar_widget_title_typography[text-decoration]',
				'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		]
	],

	'ocean_widgets_typography' => [
		'id'           => 'ocean_widgets_typography',
		'type'         => 'ocean-typography',
		'label'        => esc_html__( 'SB Widget Text', 'oceanwp' ),
		'section'      => 'ocean_sidebar',
		'transport'    => 'postMessage',
		'priority'     => 10,
		'hideLabel'    => false,
		'selector'     => '.sidebar-box, .footer-box',
		'setting_args' => [
			'fontFamily' => [
				'id'    => 'widgets_typography[font-family]',
				'label' => esc_html__(esc_html__( 'Font Family', 'oceanwp' ), 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id'    => 'widgets_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id'    => 'widgets_tablet_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id'    => 'widgets_mobile_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id'    => 'widgets_typography[font-subset]',
				'label' => esc_html__( 'Font Subset', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id'    => 'widgets_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeTablet' => [
				'id'    => 'widgets_tablet_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id'    => 'widgets_mobile_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id'    => 'widgets_typography[font-size-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacing' => [
				'id'    => 'widgets_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id'    => 'widgets_tablet_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id'    => 'widgets_mobile_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id'    => 'widgets_typography[letter-spacing-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeight' => [
				'id'    => 'widgets_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightTablet' => [
				'id'    => 'widgets_tablet_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id'    => 'widgets_mobile_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id'    => 'widgets_typography[line-height-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id'    => 'widgets_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id'    => 'widgets_tablet_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id'    => 'widgets_mobile_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textDecoration' => [
				'id'    => 'widgets_typography[text-decoration]',
				'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		]
	],

	'ocean_divider_after_sidebar_widget_typo_settings' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_sidebar',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
	],

	'ocean_widgets_bg' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'SB Widget Background', 'oceanwp' ),
		'section'           => 'ocean_sidebar',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'hover' => [
				'id'       => 'ocean_widgets_bg',
				'key'      => 'hover',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'.widget-area .sidebar-box' => 'background-color'
				],
				'attr'     => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_sidebar_widget_title_typography_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'SB Widget Heading', 'oceanwp' ),
		'section'           => 'ocean_sidebar',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'sidebar_widget_title_typography[color]',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'.sidebar-box .widget-title' => 'color'
				],
				'attr'     => [
					'transport' => 'postMessage',
					'default'   => '#333333',
				],
			]
		]
	],

	'ocean_widgets_typography_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'SB Widget Text', 'oceanwp' ),
		'section'           => 'ocean_sidebar',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'widgets_typography[color]',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'.sidebar-box, .footer-box' => 'color'
				],
				'attr'     => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_widgets_titles_border_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'SB Heading Border', 'oceanwp' ),
		'section'           => 'ocean_sidebar',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_widgets_titles_border_color',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'.widget-title' => 'border-color'
				],
				'attr'     => [
					'transport' => 'postMessage',
					'default'   => '#13aff0',
				],
			]
		]
	],

	'ocean_sidebar_section_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/903-customizer-sidebar/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'priority'  => 10,
		'section'   => 'ocean_sidebar',
		'transport' => 'postMessage',
	]
];
