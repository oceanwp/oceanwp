<?php
/**
 * OceanWP Customizer Settings: Footer Copyright
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_footer_bottom' => [
		'type'      => 'ocean-switch',
		'label'     => esc_html__( 'Enable Footer Copyright', 'oceanwp' ),
		'section'   => 'ocean_footer_bottom',
		'default'   => true,
		'transport' => 'refresh',
		'priority'  => 10,
		'hideLabel' => false,
	],

	'ocean_bottom_footer_visibility' => [
		'type'              => 'ocean-select',
		'label'             => esc_html__( 'Visibility', 'oceanwp' ),
		'section'           => 'ocean_footer_bottom',
		'transport'         => 'postMessage',
		'default'           => 'all-devices',
		'priority'          => 10,
		'hideLabel'         => false,
		'multiple'          => false,
		'active_callback'   => 'ocean_cac_footer_copyright',
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'all-devices'        => esc_html__( 'Show on All Devices', 'oceanwp' ),
			'hide-tablet'        => esc_html__( 'Hide on Tablet', 'oceanwp' ),
			'hide-mobile'        => esc_html__( 'Hide on Mobile', 'oceanwp' ),
			'hide-tablet-mobile' => esc_html__( 'Hide on Tablet and Mobile', 'oceanwp' ),
		]
	],

	'ocean_divider_after_footer_bottom_visibility_setting' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 10,
		'active_callback' => 'ocean_cac_footer_copyright',
	],

	'ocean_bottom_footer_padding_dimensions' => [
		'id'              => 'ocean_bottom_footer_padding_dimensions',
		'label'           => esc_html__( 'Padding (px)', 'oceanwp' ),
		'type'            => 'ocean-spacing',
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'hideLabel'       => false,
		'isType'          => 'padding',
		'active_callback' => 'ocean_cac_footer_copyright',
		'setting_args'    => [
			'spacingTop' => [
				'id'    => 'ocean_bottom_footer_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 15,
				],
			],
			'spacingRight' => [
				'id'    => 'ocean_bottom_footer_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingBottom' => [
				'id'    => 'ocean_bottom_footer_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 15,
				],
			],
			'spacingLeft' => [
				'id'    => 'ocean_bottom_footer_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 0,
				],
			],
			'spacingTopTablet' => [
				'id'    => 'ocean_bottom_footer_tablet_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightTablet' => [
				'id'    => 'ocean_bottom_footer_tablet_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomTablet' => [
				'id'    => 'ocean_bottom_footer_tablet_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftTablet' => [
				'id'    => 'ocean_bottom_footer_tablet_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopMobile' => [
				'id'    => 'ocean_bottom_footer_mobile_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingRightMobile' => [
				'id'    => 'ocean_bottom_footer_mobile_right_padding',
				'label' => esc_html__( 'Right', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomMobile' => [
				'id'    => 'ocean_bottom_footer_mobile_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingLeftMobile' => [
				'id'    => 'ocean_bottom_footer_mobile_left_padding',
				'label' => esc_html__( 'Left', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		],
		'preview' => 'queryWithType',
		'css' => [
			'selector' => '#footer-bottom',
			'property' => 'padding',
		],
	],

	'ocean_title_for_footer_copyright_content_settings' => [
		'type'            => 'ocean-title',
		'label'           => esc_html__( 'Content', 'oceanwp' ),
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_cac_footer_copyright',
	],

	'ocean_footer_copyright_text' => [
		'type'              => 'ocean-textarea',
		'label'             => esc_html__( 'Copyright Text', 'oceanwp' ),
		'section'           => 'ocean_footer_bottom',
		'transport'         => 'postMessage',
		'default'           => 'Copyright [oceanwp_date] - WordPress Theme by OceanWP',
		'priority'          => 10,
		'hideLabel'         => false,
		'active_callback'   => 'ocean_cac_footer_copyright',
		'sanitize_callback' => 'wp_kses_post',
	],

	'ocean_title_for_footer_copyright_typography_colors_settings' => [
		'type'            => 'ocean-title',
		'label'           => esc_html__( 'Typography and Colors', 'oceanwp' ),
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_cac_footer_copyright',
	],

	'footer_copyright_text_settings' => [
		'id'              => 'copyright',
		'type'            => 'ocean-typography',
		'label'           => esc_html__( 'Copyright Text', 'oceanwp' ),
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'hideLabel'       => false,
		'selector'        => '#footer-bottom #copyright',
		'active_callback' => 'ocean_cac_footer_copyright',
		'setting_args'    => [
			'fontFamily' => [
				'id'    => 'copyright_typography[font-family]',
				'label' => esc_html__( 'Font Family', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id'    => 'copyright_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id'    => 'copyright_tablet_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id'    => 'copyright_mobile_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id'    => 'copyright_typography[font-subset]',
				'label' => esc_html__( 'Font Subset', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id'    => 'copyright_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 12,
				],
			],
			'fontSizeTablet' => [
				'id'    => 'copyright_tablet_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id'    => 'copyright_mobile_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id'    => 'copyright_typography[font-size-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacing' => [
				'id'    => 'copyright_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id'    => 'copyright_tablet_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id'    => 'copyright_mobile_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id'    => 'copyright_typography[letter-spacing-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 'px',
				],
			],
			'lineHeight' => [
				'id'    => 'copyright_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 1,
				],
			],
			'lineHeightTablet' => [
				'id'    => 'copyright_tablet_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id'    => 'copyright_mobile_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id'    => 'copyright_typography[line-height-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id'    => 'copyright_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id'    => 'copyright_tablet_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id'    => 'copyright_mobile_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textDecoration' => [
				'id'    => 'copyright_typography[text-decoration]',
				'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		]
	],

	'footer_footer_menu_settings' => [
		'id'              => 'footer_menu',
		'type'            => 'ocean-typography',
		'label'           => esc_html__( 'Footer Menu', 'oceanwp' ),
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'hideLabel'       => false,
		'selector'        => '#footer-bottom #footer-bottom-menu',
		'active_callback' => 'ocean_cac_footer_copyright',
		'setting_args'    => [
			'fontFamily' => [
				'id'    => 'footer_menu_typography[font-family]',
				'label' => esc_html__( 'Font Family', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id'    => 'footer_menu_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id'    => 'footer_menu_tablet_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id'    => 'footer_menu_mobile_typography[font-weight]',
				'label' => esc_html__( 'Font Weight', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id'    => 'footer_menu_typography[font-subset]',
				'label' => esc_html__( 'Font Subset', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id'    => 'footer_menu_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 12,
				],
			],
			'fontSizeTablet' => [
				'id'    => 'footer_menu_tablet_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id'    => 'footer_menu_mobile_typography[font-size]',
				'label' => esc_html__( 'Font Size', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id'    => 'footer_menu_typography[font-size-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacing' => [
				'id'    => 'footer_menu_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id'    => 'footer_menu_tablet_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id'    => 'footer_menu_mobile_typography[letter-spacing]',
				'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id'    => 'footer_menu_typography[letter-spacing-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 'px',
				],
			],
			'lineHeight' => [
				'id'    => 'footer_menu_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
					'default'   => 1,
				],
			],
			'lineHeightTablet' => [
				'id'    => 'footer_menu_tablet_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id'    => 'footer_menu_mobile_typography[line-height]',
				'label' => esc_html__( 'Line Height', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id'    => 'footer_menu_typography[line-height-unit]',
				'label' => esc_html__( 'Unit', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id'    => 'footer_menu_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id'    => 'footer_menu_tablet_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id'    => 'footer_menu_mobile_typography[text-transform]',
				'label' => esc_html__( 'Text Transform', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'textDecoration' => [
				'id'    => 'footer_menu_typography[text-decoration]',
				'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		]
	],

	'ocean_divider_after_footer_copyright_typo_setting' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 1,
		'bottom'          => 10,
		'active_callback' => 'ocean_cac_footer_copyright',
	],

	'ocean_bottom_footer_background' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'Copyright Background', 'oceanwp' ),
		'section'           => 'ocean_footer_bottom',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_copyright',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_bottom_footer_background',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'#footer-bottom' => 'background-color'
				],
				'attr'     => [
					'transport' => 'postMessage',
					'default'   => '#1b1b1b',
				],
			],
		]
	],

	'ocean_bottom_footer_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'Copyright Text', 'oceanwp' ),
		'section'           => 'ocean_footer_bottom',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_copyright',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_bottom_footer_color',
				'key'      => 'normal',
				'label'    => esc_html__( 'Select Color', 'oceanwp' ),
				'selector' => [
					'#footer-bottom,#footer-bottom p' => 'color'
				],
				'attr'     => [
					'transport' => 'postMessage',
					'default'   => '#ffffff',
				],
			],
		]
	],

	'ocean_bottom_footer_link_color' => [
		'type'              => 'ocean-color',
		'label'             => esc_html__( 'Copyright Links', 'oceanwp' ),
		'section'           => 'ocean_footer_bottom',
		'transport'         => 'postMessage',
		'priority'          => 10,
		'hideLabel'         => false,
		'showAlpha'         => true,
		'showPalette'       => true,
		'active_callback'   => 'ocean_cac_footer_copyright',
		'sanitize_callback' => 'wp_kses_post',
		'setting_args'      => [
			'normal' => [
				'id'       => 'ocean_bottom_footer_link_color',
				'key'      => 'normal',
				'label'    => esc_html__( 'Normal', 'oceanwp' ),
				'selector' => [
					'#footer-bottom a,#footer-bottom #footer-bottom-menu a' => 'color'
				],
				'attr'     => [
					'transport' => 'postMessage',
					'default'   => '#ffffff',
				],
			],
			'hover' => [
				'id'       => 'ocean_bottom_footer_link_color_hover',
				'key'      => 'hover',
				'label'    => esc_html__( 'Hover', 'oceanwp' ),
				'selector' => [
					'#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover' => 'color'
				],
				'attr'     => [
					'transport' => 'postMessage',
					'default'   => '#13aff0',
				],
			],
		]
	],

	'ocean_divider_before_copyright_upsell_notice' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_footer_bottom',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 1,
		'bottom'          => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_copyright_upsell_notice' => [
		'type'            => 'ocean-content',
		'isContent'       => owp_render_footer_copyright_upsell_notice(),
		'section'         => 'ocean_footer_bottom',
		'class'           => 'description',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_footer_bottom_section_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/905-customizer-footer-copyright/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'priority'  => 10,
		'section'   => 'ocean_footer_bottom',
		'transport' => 'postMessage',
	]
];
