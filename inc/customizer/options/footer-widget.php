<?php
/**
 * OceanWP Customizer Settings: Footer Widgets
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_footer_widgets' => [
		'type'      => 'ocean-switch',
		'label'     => esc_html__( 'Enable Footer Widgets', 'oceanwp' ),
		'section'   => 'ocean_footer_widgets',
		'default'   => true,
		'transport' => 'refresh',
		'priority'  => 10,
		'hideLabel' => false,
	],

	'ocean_footer_widgets_visibility' => [
		'type'              => 'ocean-select',
		'label'             => esc_html__( 'Visibility', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'postMessage',
		'default'           => 'all-devices',
		'priority'          => 10,
		'hideLabel'         => false,
		'multiple'          => false,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'all-devices'        => esc_html__( 'Show on All Devices', 'oceanwp' ),
			'hide-tablet'        => esc_html__( 'Hide on Tablet', 'oceanwp' ),
			'hide-mobile'        => esc_html__( 'Hide on Mobile', 'oceanwp' ),
			'hide-tablet-mobile' => esc_html__( 'Hide on Tablet and Mobile', 'oceanwp' ),
		]
	],

	'ocean_divider_after_footer_widget_visibility_setting' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 10,
		'bottom'          => 1,
		'active_callback' => 'ocean_cac_footer_widget',
	],

	'ocean_add_footer_container' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable Container', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'default'           => true,
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_footer_padding_dimensions' => [
		'id'              => 'ocean_footer_padding_dimensions',
		'label'           => esc_html__( 'Padding (px)', 'oceanwp' ),
		'type'            => 'ocean-spacing',
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'hideLabel'       => false,
		'isType'          => 'padding',
		'active_callback' => 'ocean_cac_footer_widget',
		'setting_args'    => [
			'spacingTop' => [
				'id'    => 'ocean_footer_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 30,
				],
			],
			'spacingRight' => [
				'id'    => 'ocean_footer_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingBottom' => [
				'id'    => 'ocean_footer_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 30,
				],
			],
			'spacingLeft' => [
				'id'    => 'ocean_footer_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingTopTablet' => [
				'id'    => 'ocean_footer_tablet_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightTablet' => [
				'id'    => 'ocean_footer_tablet_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomTablet' => [
				'id'    => 'ocean_footer_tablet_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftTablet' => [
				'id'    => 'ocean_footer_tablet_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopMobile' => [
				'id'    => 'ocean_footer_mobile_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightMobile' => [
				'id'    => 'ocean_footer_mobile_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomMobile' => [
				'id'    => 'ocean_footer_mobile_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftMobile' => [
				'id'    => 'ocean_footer_mobile_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		],
		'preview' => 'queryWithType',
		'css' => [
			'selector' => '#footer-widgets',
			'property' => 'padding',
		],
	],

	'ocean_title_for_footer_widget_default_settings' => [
		'type'            => 'ocean-title',
		'label'           => esc_html__( 'Default Settings', 'oceanwp' ),
		'desc'            => esc_html__( 'These options are designed only for the default Footer Widgets area utilizing WordPress widgets. They cannot be used with a custom template.', 'oceanwp' ),
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_cac_footer_widget',
	],

	'ocean_footer_widget_heading_tag' => [
		'type'              => 'ocean-select',
		'label'             => esc_html__( 'Heading Tag', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'refresh',
		'default'           => 'h4',
		'priority'          => 10,
		'hideLabel'         => false,
		'multiple'          => false,
		'active_callback'   => 'ocean_cac_footer_widget',
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

	'ocean_divider_after_footer_widget_heading_tag_setting' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 10,
		'active_callback' => 'ocean_cac_footer_widget',
	],

	'ocean_footer_widgets_columns' => [
		'id'                => 'ocean_footer_widgets_columns',
		'label'             => esc_html__( 'Footer Columns', 'oceanwp' ),
		'type'              => 'ocean-range-slider',
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'refresh',
		'priority'          => 10,
		'hideLabel'         => false,
		'isUnit'            => false,
		'isResponsive'      => true,
		'min'               => 1,
		'max'               => 4,
		'step'              => 1,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'oceanwp_sanitize_number_blank',
		'setting_args'      => [
			'desktop' => [
				'id'    => 'ocean_footer_widgets_columns',
				'label' => esc_html__( 'Desktop', 'oceanwp' ),
				'attr'  => [
					'transport' => 'refresh',
					'default'   => 4,
				],
			],
			'tablet' => [
				'id'    => 'ocean_footer_widgets_tablet_columns',
				'label' => esc_html__( 'Tablet', 'oceanwp' ),
				'attr'  => [
					'transport' => 'refresh',
				],
			],
			'mobile' => [
				'id'    => 'ocean_footer_widgets_mobile_columns',
				'label' => esc_html__( 'Mobile', 'oceanwp' ),
				'attr'  => [
					'transport' => 'refresh',
				],
			]
		]
	],

	'ocean_title_for_footer_custom_settings' => [
		'type'            => 'ocean-title',
		'label'           => esc_html__( 'Custom Footer Widgets', 'oceanwp' ),
		'desc'            => esc_html__( 'Select a template you created in OceanWP > My Library to replace the default Footer Widgets.', 'oceanwp' ),
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_cac_footer_widget',
	],

	'ocean_footer_widgets_template' => [
		'type'              => 'ocean-select',
		'label'             => esc_html__( 'Select Template', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'refresh',
		'default'           => '0',
		'priority'          => 10,
		'hideLabel'         => false,
		'multiple'          => false,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'sanitize_key',
		'choices'           => oceanwp_library_template_choices(),
	],

	'ocean_title_for_footer_special_effect_settings' => [
		'type'            => 'ocean-title',
		'label'           => esc_html__( 'Special Effects', 'oceanwp' ),
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_cac_footer_widget',
	],

	'ocean_fixed_footer' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Fixed Footer', 'oceanwp' ),
		'desc'              => esc_html__( 'This option automatically adjusts the height of the content area, so that the footer is always displayed at the bottom.', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'default'           => 'off',
		'transport'         => 'refresh',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'on' => [
				'id'      => 'on',
				'label'   => esc_html__( 'On', 'oceanwp' ),
				'content' => esc_html__( 'On', 'oceanwp' ),
			],
			'off'  => [
				'id'      => 'off',
				'label'   => esc_html__( 'Off', 'oceanwp' ),
				'content' => esc_html__( 'Off', 'oceanwp' ),
			]
		]
	],

	'ocean_parallax_footer' => [
		'type'              => 'ocean-buttons',
		'label'             => esc_html__( 'Footer Parallax', 'oceanwp' ),
		'desc'              => esc_html__( 'This options enables the footer parallax scrolling effect.', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'default'           => 'off',
		'transport'         => 'refresh',
		'priority'          => 10,
		'hideLabel'         => false,
		'wrap'              => false,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'on' => [
				'id'      => 'on',
				'label'   => esc_html__( 'On', 'oceanwp' ),
				'content' => esc_html__( 'On', 'oceanwp' ),
			],
			'off'  => [
				'id'      => 'off',
				'label'   => esc_html__( 'Off', 'oceanwp' ),
				'content' => esc_html__( 'Off', 'oceanwp' ),
			]
		]
	],

	'ocean_title_for_footer_typography_colors_settings' => [
		'type'            => 'ocean-title',
		'label'           => esc_html__( 'Typography and Colors', 'oceanwp' ),
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_cac_footer_widget',
	],

	'footer_widget_title' => [
		'id'              => 'footer_widget_title',
		'type'            => 'ocean-typography',
		'label'           => esc_html__( 'FW Widget Heading', 'oceanwp' ),
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'hideLabel'       => false,
		'selector'        => '#footer-widgets .footer-box .widget-title',
		'active_callback' => 'ocean_cac_footer_widget',
		'setting_args'    => [
			'fontFamily' => [
				'id'    => 'footer_widget_title_typography[font-family]',
				'label' => esc_html__( 'Font Family', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id'    => 'footer_widget_title_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id'    => 'footer_widget_title_tablet_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id'    => 'footer_widget_title_mobile_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id'    => 'footer_widget_title_typography[font-subset]',
				'label' => esc_html__( 'Font Subset', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id'    => 'footer_widget_title_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 13,
				],
			],
			'fontSizeTablet' => [
				'id'    => 'footer_widget_title_tablet_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id'    => 'footer_widget_title_mobile_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id'    => 'footer_widget_title_typography[font-size-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacing' => [
				'id'    => 'footer_widget_title_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 1,
				],
			],
			'letterSpacingTablet' => [
				'id'    => 'footer_widget_title_tablet_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id'    => 'footer_widget_title_mobile_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id'    => 'footer_widget_title_typography[letter-spacing-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 'px',
				],
			],
			'lineHeight' => [
				'id'    => 'footer_widget_title_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 1,
				],
			],
			'lineHeightTablet' => [
				'id'    => 'footer_widget_title_tablet_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id'    => 'footer_widget_title_mobile_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id'    => 'footer_widget_title_typography[line-height-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id'    => 'footer_widget_title_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id'    => 'footer_widget_title_tablet_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id'    => 'footer_widget_title_mobile_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textDecoration' => [
				'id'    => 'footer_widget_title_typography[text-decoration]',
				'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		]
	],

	'ocean_divider_after_footer_widget_heading_typo_setting' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 1,
		'bottom'          => 10,
		'active_callback' => 'ocean_cac_footer_widget',
	],

	'ocean_footer_background' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'FW Background', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_footer_background',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'#footer-widgets' => 'background-color'
				],
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '#222222',
				],
			],
		]
	],

	'ocean_footer_borders' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'FW Borders', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_footer_borders',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'#footer-widgets li,#footer-widgets #wp-calendar caption,#footer-widgets #wp-calendar th,#footer-widgets #wp-calendar tbody,#footer-widgets .contact-info-widget i,#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"],#footer-widgets .posts-thumbnails-widget li,#footer-widgets .social-widget li a, #footer-widgets .contact-info-widget .owp-icon' => 'border-color'
				],
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '#555555',
				],
			],
		]
	],

	'footer_widget_title_typography_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'FW Widget Heading', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'footer_widget_title_typography[color]',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'#footer-widgets .footer-box .widget-title' => 'color'
				],
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '#ffffff',
				],
			],
		]
	],

	'ocean_footer_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'FW Widget Text', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_footer_color',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'#footer-widgets,#footer-widgets p,#footer-widgets li a:before,#footer-widgets .contact-info-widget span.oceanwp-contact-title,#footer-widgets .recent-posts-date,#footer-widgets .recent-posts-comments,#footer-widgets .widget-recent-posts-icons li .fa' => 'color'
				],
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '#929292',
				],
			],
		]
	],

	'ocean_footer_link_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'FW Widget Links', 'oceanwp' ),
		'section'           => 'ocean_footer_widgets',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_widget',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_footer_link_color',
				'key'      => 'normal',
				'label'    => esc_html__( 'Normal', 'oceanwp' ),
				'selector' => [
					'#footer-widgets .footer-box a,#footer-widgets a' => 'color'
				],
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '#ffffff',
				],
			],
			'hover' => [
				'id'       => 'ocean_footer_link_color_hover',
				'key'      => 'hover',
				'label'    => esc_html__( 'Hover', 'oceanwp' ),
				'selector' => [
					'#footer-widgets .footer-box a:hover,#footer-widgets a:hover' => 'color'
				],
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '#13aff0',
				],
			],
		]
	],

	'ocean_divider_before_footer_upsell_notice' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_footer_widgets',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 1,
		'bottom'          => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_footer_upsell_notice' => [
		'type'            => 'ocean-content',
		'isContent'       => owp_render_footer_upsell_notice(),
		'section'         => 'ocean_footer_widgets',
		'class'           => 'description',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_footer_widgets_section_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/904-customizer-footer-widgets/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'priority'  => 10,
		'section'   => 'ocean_footer_widgets',
		'transport' => 'postMessage',
	]
];
