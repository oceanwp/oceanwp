<?php
/**
 * OceanWP Customizer Settings: General
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_page_single_layout' => [
		'label'             => esc_html__( 'Page Layout', 'oceanwp' ),
		'type'              => 'ocean-radio-image',
		'section'           => 'ocean_site_page_settings',
		'transport'         => 'refresh',
		'default'           => 'right-sidebar',
		'priority'          => 10,
		'bottom'            => 40,
		'sanitize_callback' => 'sanitize_key',
		'choices'           => [
			'right-sidebar' => [
				'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
				'icon'  => 'right-sidebar',
			],
			'left-sidebar'  => [
				'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
				'icon'  => 'left-sidebar',
			],
			'full-width'    => [
				'label' => esc_html__( 'Full Width', 'oceanwp' ),
				'icon'  => 'full_width-no_sidebar',
			],
			'full-screen'   => [
				'label' => esc_html__( '100% Full Width', 'oceanwp' ),
				'icon'  => 'fullscreen_width',
			],
			'both-sidebars' => [
				'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
				'icon'  => 'both_sidebar_layout',
			]
		]
	],

	'ocean_page_content_padding' => [
		'id'           => 'ocean_page_content_padding',
		'label'        => esc_html__( 'Content Padding (px)', 'oceanwp' ),
		'type'         => 'ocean-spacing',
		'section'      => 'ocean_site_page_settings',
		'transport'    => 'postMessage',
		'priority'     => 10,
		'hideLabel'    => false,
		'isLeft'       => false,
		'isRight'      => false,
		'isType'       => 'padding',
		'wrapper'      => 'ocean_page_content_padding',
		'setting_args' => [
			'spacingTop' => [
				'id'    => 'ocean_page_content_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottom' => [
				'id'    => 'ocean_page_content_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopTablet' => [
				'id'    => 'ocean_page_content_tablet_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomTablet' => [
				'id'    => 'ocean_page_content_tablet_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopMobile' => [
				'id'    => 'ocean_page_content_mobile_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomMobile' => [
				'id'    => 'ocean_page_content_mobile_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr'  => [
					'transport' => 'postMessage',
				],
			],
		],
		'preview' => 'queryWithType',
		'css' => [
			'selector' => '#main #content-wrap, .separate-layout #main #content-wrap',
			'property' => 'padding'
		],
	],

	'ocean_divider_after_page_content_padding' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 10,
		'bottom'    => 1
	],

	'ocean_spacer_after_page_content_padding' => [
		'type'      => 'ocean-spacer',
		'section'   => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_section_page_layout_settings' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Additional Layout Settings', 'oceanwp' ),
		'section'  => 'ocean_site_page_settings',
		'after'    => 'ocean_spacer_after_page_content_padding',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_desc_for_page_layout_content_settings' => [
				'type'      => 'ocean-content',
				'isContent' => esc_html__( 'Additional page layout settings are currently available for the Both Sidebars page layout style.', 'oceanwp' ),
				'section'   => 'ocean_section_page_layout_settings',
				'class'     => 'description',
				'transport' => 'postMessage',
				'priority'  => 10,
			],

			'ocean_page_single_both_sidebars_style' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( 'Both Sidebars: Content Order Style', 'oceanwp' ),
				'section'           => 'ocean_section_page_layout_settings',
				'transport'         => 'refresh',
				'default'           => 'scs-style',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'active_callback' => 'oceanwp_cac_has_page_single_bs_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				],
			],

			'ocean_page_single_both_sidebars_content_width' => [
				'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_section_page_layout_settings',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_has_page_single_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id'    => 'ocean_page_single_both_sidebars_content_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id'    => 'ocean_page_single_both_sidebars_content_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => '%',
						],
					],
				],
			],

			'ocean_page_single_both_sidebars_sidebars_width' => [
				'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_section_page_layout_settings',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_has_page_single_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id'    => 'ocean_page_single_both_sidebars_sidebars_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id'    => 'ocean_page_single_both_sidebars_sidebars_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '%',
						],
					],
				],
			],

			'ocean_page_additional_layout_section_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Additional-Layout-Settings-UCH5y/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_section_page_layout_settings',
				'transport' => 'postMessage',
				'priority'  => 10,
			],
		]
	],

	'ocean_spacer_after_page_layout_section' => [
		'type'      => 'ocean-spacer',
		'section'   => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_section_page_responsive_section' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Responsive Page Settings', 'oceanwp' ),
		'section'  => 'ocean_site_page_settings',
		'after'    => 'ocean_spacer_after_page_layout_section',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_desc_for_page_responsive_settings' => [
				'type'      => 'ocean-content',
				'isContent' => esc_html__( 'Additional responsive settings are currently available for any of the Single Sidebar page layout styles.', 'oceanwp' ),
				'section'   => 'ocean_section_page_responsive_section',
				'class'     => 'description',
				'transport' => 'postMessage',
				'priority'  => 10,
			],

			'ocean_page_single_sidebar_order' => [
				'type' => 'ocean-buttons',
				'label' => esc_html__( 'Responsive Setting: Sidebar Order Layout', 'oceanwp' ),
				'section' => 'ocean_section_page_responsive_section',
				'transport' => 'refresh',
				'default' => 'content-sidebar',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'              => false,
				'active_callback'   => 'oceanwp_cac_has_page_single_rl_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'content-sidebar' => [
						'id'      => 'content-sidebar',
						'label'   => esc_html__( 'After Content', 'oceanwp' ),
						'content' => esc_html__( 'After Content', 'oceanwp' ),
					],
					'sidebar-content'  => [
						'id'      => 'sidebar-content',
						'label'   => esc_html__( 'Before Content', 'oceanwp' ),
						'content' => esc_html__( 'Before Content', 'oceanwp' ),
					]
				]
			],

			'ocean_page_responsive_section_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Responsive-Page-Settings-o8Arq/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_section_page_responsive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			],
		]
	],

	'ocean_title_for_page_title_section' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Page Title', 'oceanwp' ),
		'section'   => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 20,
		'bottom'    => 20,
	],

	'ocean_section_page_title' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Page Title', 'oceanwp' ),
		'section'  => 'ocean_site_page_settings',
		'after'    => 'ocean_title_for_page_title_section',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_page_title_display' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Enable Page Title', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'default'           => true,
				'transport'         => 'refresh',
				'priority'          => 10,
				'hideLabel'         => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_page_title_display' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 1,
				'bottom'          => 10,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_header_visibility' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( 'Visibility', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'transport'         => 'postMessage',
				'default'           => 'all-devices',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'active_callback'   => 'oceanwp_is_page_title_display',
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'all-devices'        => esc_html__( 'Show on All Devices', 'oceanwp' ),
					'hide-tablet'        => esc_html__( 'Hide on Tablet', 'oceanwp' ),
					'hide-mobile'        => esc_html__( 'Hide on Mobile', 'oceanwp' ),
					'hide-tablet-mobile' => esc_html__( 'Hide on Tablet and Mobile', 'oceanwp' ),
				],
			],

			'ocean_title_for_page_title_style_sections' => [
				'type'            => 'ocean-title',
				'label'           => esc_html__( 'Content Settings', 'oceanwp' ),
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 10,
				'bottom'          => 20,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_header_heading_tag' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( 'Heading Tag', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'transport'         => 'refresh',
				'default'           => 'h1',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'active_callback'   => 'oceanwp_is_page_title_display',
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

			'ocean_divider_after_page_header_heading_tag' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 10,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_header_style' => [
				'type'              => 'ocean-radio-image',
				'label'             => esc_html__( 'Style', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'transport'         => 'refresh',
				'default'           => '',
				'priority'          => 10,
				'hideLabel'         => false,
				'bottom'            => 40,
				'active_callback'   => 'oceanwp_is_page_title_display',
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'' => [
						'label' => esc_html__( 'Default', 'oceanwp' ),
						'icon'  =>  'page_title_initial_style',
					],
					'centered' => [
						'label' => esc_html__( 'Centered', 'oceanwp' ),
						'icon'  => 'page_title_centered_style',
					],
					'centered-minimal' => [
						'label' => esc_html__( 'Centered Minimal', 'oceanwp' ),
						'icon'  => 'page_title_centered_minimal_style',
					],
					'background-image' => [
						'label' => esc_html__( 'Background Image', 'oceanwp' ),
						'icon'  => 'page_title_background_image_style',
					]
				]
			],

			'ocean_page_header_padding' => [
				'id'              => 'ocean_page_header_padding',
				'label'           => esc_html__( 'Padding (px)', 'oceanwp' ),
				'type'            => 'ocean-spacing',
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'hideLabel'       => false,
				'isType'          => 'padding',
				'active_callback' => 'oceanwp_is_page_title_display',
				'setting_args'    => [
					'spacingTop' => [
						'id'    => 'ocean_page_header_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 34,
						],
					],
					'spacingRight' => [
						'id'    => 'ocean_page_header_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottom' => [
						'id'    => 'ocean_page_header_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 34,
						],
					],
					'spacingLeft' => [
						'id'    => 'ocean_page_header_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopTablet' => [
						'id'    => 'ocean_page_header_tablet_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id'    => 'ocean_page_header_tablet_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id'    => 'ocean_page_header_tablet_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id'    => 'ocean_page_header_tablet_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id'    => 'ocean_page_header_mobile_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id'    => 'ocean_page_header_mobile_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id'    => 'ocean_page_header_mobile_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id'    => 'ocean_page_header_mobile_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => '.page-header',
					'property' => 'padding'
				],
			],
			
			'ocean_divider_for_page_title_additional_settings_setting' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 10,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_section_page_title_additional_settings' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Additional Title Settings', 'oceanwp' ),
				'section'  => 'ocean_section_page_title',
				'after'    => 'ocean_divider_for_page_title_additional_settings_setting',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_page_title_additional_settings' => [
						'type'           => 'ocean-content',
						'isContent'       => esc_html__( 'Additional page title style settings are currently available for the Background Image page title style.', 'oceanwp' ),
						'section'         => 'ocean_section_page_title_additional_settings',
						'class'           => 'description',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'active_callback' => 'oceanwp_is_page_title_display',
					],

					'ocean_page_header_bg_title_breadcrumb_position' => [
						'id'                => 'ocean_page_header_bg_title_breadcrumb_position',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Title / Breadcrumbs Position', 'oceanwp' ),
						'section'           => 'ocean_section_page_title_additional_settings',
						'default'           => 'center',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'left'  => [
								'id'      => 'left',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'center'  => [
								'id'      => 'center',
								'label'   => esc_html__( 'Center', 'oceanwp' ),
								'content' => esc_html__( 'Center', 'oceanwp' ),
							],
							'right' => [
								'id'      => 'right',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						],
						'preview' => 'queryWithAttr',
						'css' => [
							'selector' => '.background-image-page-header .page-header-inner, .background-image-page-header .site-breadcrumbs',
							'property' => 'text-align',
						]
					],

					'ocean_divider_after_page_header_bg_title_breadcrumb_position' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_section_page_title_additional_settings',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'bottom'          => 15,
						'active_callback' => 'oceanwp_is_bg_image_page_header',
					],

					'ocean_page_header_bg_image' => [
						'label'           => esc_html__( 'Image', 'oceanwp' ),
						'type'            => 'ocean-image',
						'section'         => 'ocean_section_page_title_additional_settings',
						'transport'       => 'refresh',
						'priority'        => 10,
						'hideLabel'       => false,
						'mediaType'       => 'image',
						'savetype'        => 'url',
						'active_callback' => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'ocean_sanitize_image_control'
					],

					'ocean_page_header_bg_image_height_setting' => [
						'id'                => 'ocean_page_header_bg_image_height_setting',
						'label'             => esc_html__( 'Height', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_section_page_title_additional_settings',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 800,
						'step'              => 1,
						'top'               => 15,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_page_header_bg_image_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 400,
								],
							],
							'unit' => [
								'id'    => 'ocean_page_header_bg_image_height_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								]
							]
						],
						'preview' => 'queryWithType',
						'css' => [
							'.page-header' => ['height'],
						]
					],

					'ocean_page_header_bg_image_position' => [
						'id'                => 'ocean_page_header_bg_image_position',
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Position', 'oceanwp' ),
						'section'           => 'ocean_section_page_title_additional_settings',
						'transport'         => 'postMessage',
						'default'           => 'top center',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'sanitize_text_field',
						'choices'           => [
							'initial'       => esc_html__( 'Default', 'oceanwp' ),
							'top left'      => esc_html__( 'Top Left', 'oceanwp' ),
							'top center'    => esc_html__( 'Top Center', 'oceanwp' ),
							'top right'     => esc_html__( 'Top Right', 'oceanwp' ),
							'center left'   => esc_html__( 'Center Left', 'oceanwp' ),
							'center center' => esc_html__( 'Center Center', 'oceanwp' ),
							'center right'  => esc_html__( 'Center Right', 'oceanwp' ),
							'bottom left'   => esc_html__( 'Bottom Left', 'oceanwp' ),
							'bottom center' => esc_html__( 'Bottom Center', 'oceanwp' ),
							'bottom right'  => esc_html__( 'Bottom Right', 'oceanwp' ),
						],
						'preview' => 'queryWithAttr',
						'css' => [
							'selector' => '.page-header',
							'property' => 'background-position'
						]
					],

					'ocean_page_header_bg_image_repeat' => [
						'id'                => 'ocean_page_header_bg_image_repeat',
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Repeat', 'oceanwp' ),
						'section'           => 'ocean_section_page_title_additional_settings',
						'transport'         => 'postMessage',
						'default'           => 'no-repeat',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'top'               => 20,
						'bottom'            => 25,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'sanitize_text_field',
						'choices'           => [
							'initial'   => esc_html__( 'Default', 'oceanwp' ),
							'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
							'repeat'    => esc_html__( 'Repeat', 'oceanwp' ),
							'repeat-x'  => esc_html__( 'Repeat-x', 'oceanwp' ),
							'repeat-y'  => esc_html__( 'Repeat-y', 'oceanwp' ),
						],
						'preview' => 'queryWithAttr',
						'css'     => [
							'selector' => '.page-header',
							'property' => 'background-repeat',
						]
					],

					'ocean_page_header_bg_image_attachment' => [
						'id'                => 'ocean_page_header_bg_image_attachment',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Attachment', 'oceanwp' ),
						'section'           => 'ocean_section_page_title_additional_settings',
						'default'           => 'initial',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'initial' => [
								'id'      => 'initial',
								'label'   => esc_html__( 'Initial', 'oceanwp' ),
								'content' => esc_html__( 'Initial', 'oceanwp' ),
							],
							'scroll'  => [
								'id'      => 'scroll',
								'label'   => esc_html__( 'Scroll', 'oceanwp' ),
								'content' => esc_html__( 'Scroll', 'oceanwp' ),
							],
							'fixed'  => [
								'id'      => 'fixed',
								'label'   => esc_html__( 'Fixed', 'oceanwp' ),
								'content' => esc_html__( 'Fixed', 'oceanwp' ),
							]
						],
						'preview' => 'queryWithAttr',
						'css'     => [
							'selector' => '.page-header',
							'property' => 'background-attachment'
						]
					],

					'ocean_page_header_bg_image_size' => [
						'id'                => 'ocean_page_header_bg_image_size',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Size', 'oceanwp' ),
						'section'           => 'ocean_section_page_title_additional_settings',
						'default'           => 'cover',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'initial' => [
								'id'      => 'initial',
								'label'   => esc_html__( 'Default', 'oceanwp' ),
								'content' => esc_html__( 'Default', 'oceanwp' ),
							],
							'auto'  => [
								'id'      => 'auto',
								'label'   => esc_html__( 'Auto', 'oceanwp' ),
								'content' => esc_html__( 'Auto', 'oceanwp' ),
							],
							'cover'  => [
								'id'      => 'cover',
								'label'   => esc_html__( 'Cover', 'oceanwp' ),
								'content' => esc_html__( 'Cover', 'oceanwp' ),
							],
							'contain'  => [
								'id'      => 'contain',
								'label'   => esc_html__( 'Contain', 'oceanwp' ),
								'content' => esc_html__( 'Contain', 'oceanwp' ),
							]
						],
						'preview' => 'queryWithAttr',
						'css' => [
							'selector' => '.page-header',
							'property' => 'background-size'
						]
					],

					'ocean_divider_after_page_header_bg_image_size' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_section_page_title_additional_settings',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'bottom'          => 15,
						'active_callback' => 'oceanwp_is_bg_image_page_header',
					],

					'ocean_page_header_bg_image_overlay_opacity_setting' => [
						'id'                => 'ocean_page_header_bg_image_overlay_opacity_setting',
						'label'             => esc_html__( 'Overlay Opacity', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_section_page_title_additional_settings',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 0.1,
						'max'               => 1,
						'step'              => 0.1,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'oceanwp_sanitize_number',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_page_header_bg_image_overlay_opacity',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 0.5,
								],
							]
						]
					],

					'ocean_page_header_bg_image_overlay_color_setting' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Overlay Color', 'oceanwp' ),
						'section'           => 'ocean_section_page_title_additional_settings',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'oceanwp_is_bg_image_page_header',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_page_header_bg_image_overlay_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.background-image-page-header-overlay' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#000000',
								],
							],
						]
					],

					'ocean_page_title_additional_settings_need_help' => [
						'type'            => 'ocean-content',
						'isContent'       => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Additional-Title-Settings-D2ruV/" target="_blank">', '</a>' ),
						'class'           => 'need-help',
						'section'         => 'ocean_section_page_title_additional_settings',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'active_callback' => 'oceanwp_is_page_title_display',
					]

				],

			],

			'ocean_title_for_page_title_typography_and_color' => [
				'type'            => 'ocean-title',
				'label'           => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 20,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_header_background_setting' => [
				'type'              => 'ocean-color',
				'label'             => esc_html__( 'Background Color', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'showAlpha'         => true,
				'showPalette'       => true,
				'active_callback'   => 'oceanwp_is_not_bg_image_page_header',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args'      => [
					'normal' => [
						'id'       => 'ocean_page_header_background',
						'key'      => 'normal',
						'label'    => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.page-header' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#f5f5f5',
						],
					],
				]
			],

			'page_title_typography_color_wrap' => [
				'type'              => 'ocean-color',
				'label'             => esc_html__( 'Text Color', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'showAlpha'         => true,
				'showPalette'       => true,
				'active_callback'   => 'oceanwp_is_page_title_display',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args'      => [
					'normal' => [
						'id'       => 'page_title_typography[color]',
						'key'      => 'normal',
						'label'    => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.page-header' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
				]
			],

			'ocean_divider_after_page_header_colors_settings' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 5,
				'bottom'          => 15,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_title_typography' => [
				'id'              => 'ocean_page_title_typography',
				'type'            => 'ocean-typography',
				'label'           => esc_html__( 'Title Typography', 'oceanwp' ),
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'hideLabel'       => false,
				'selector'        => '.page-header .page-header-title, .page-header.background-image-page-header .page-header-title',
				'active_callback' => 'oceanwp_is_page_title_display',
				'setting_args'    => [
					'fontFamily' => [
						'id'    => 'page_title_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id'    => 'page_title_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id'    => 'page_title_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id'    => 'page_title_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id'    => 'page_title_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id'    => 'page_title_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => '32',
						],
					],
					'fontSizeTablet' => [
						'id'    => 'page_title_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id'    => 'page_title_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id'    => 'page_title_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 'px',
						],
					],
					'letterSpacing' => [
						'id'    => 'page_title_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id'    => 'page_title_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'page_title_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id'    => 'page_title_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 'px',
						],
					],
					'lineHeight' => [
						'id'    => 'page_title_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => '1.4',
						],
					],
					'lineHeightTablet' => [
						'id'    => 'page_title_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id'    => 'page_title_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id'    => 'page_title_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id'    => 'page_title_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id'    => 'page_title_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id'    => 'page_title_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id'    => 'page_title_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_page_header_title_color_setting' => [
				'type'              => 'ocean-color',
				'label'             => esc_html__( 'Title Color', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'showAlpha'         => true,
				'showPalette'       => true,
				'active_callback'   => 'oceanwp_is_page_title_display',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args'      => [
					'normal' => [
						'id'       => 'ocean_page_header_title_color',
						'key'      => 'normal',
						'label'    => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.page-header .page-header-title, .page-header.background-image-page-header .page-header-title' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_page_subheading_typography' => [
				'id'              => 'ocean_page_subheading_typography',
				'type'            => 'ocean-typography',
				'label'           => esc_html__( 'Subtitle Typography', 'oceanwp' ),
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'hideLabel'       => false,
				'selector'        => '.page-header .page-subheading',
				'active_callback' => 'oceanwp_is_page_title_display',
				'setting_args'    => [
					'fontFamily' => [
						'id'    => 'page_subheading_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id'    => 'page_subheading_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id'    => 'page_subheading_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id'    => 'page_subheading_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id'    => 'page_subheading_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id'    => 'page_subheading_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => '15',
						],
					],
					'fontSizeTablet' => [
						'id'    => 'page_subheading_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id'    => 'page_subheading_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id'    => 'page_subheading_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 'px',
						],
					],
					'letterSpacing' => [
						'id'    => 'page_subheading_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id'    => 'page_subheading_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id'    => 'page_subheading_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id'    => 'page_subheading_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 'px',
						],
					],
					'lineHeight' => [
						'id'    => 'page_subheading_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => '1.8',
						],
					],
					'lineHeightTablet' => [
						'id'    => 'page_subheading_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id'    => 'page_subheading_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id'    => 'page_subheading_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id'    => 'page_subheading_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id'    => 'page_subheading_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id'    => 'page_subheading_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id'    => 'page_subheading_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'page_subheading_typography_color_wrap' => [
				'type'              => 'ocean-color',
				'label'             => esc_html__( 'Subtitle Color', 'oceanwp' ),
				'section'           => 'ocean_section_page_title',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'showAlpha'         => true,
				'showPalette'       => true,
				'active_callback'   => 'oceanwp_is_page_title_display',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args'      => [
					'normal' => [
						'id'       => 'page_subheading_typography[color]',
						'key'      => 'normal',
						'label'    => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.page-header .page-subheading' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#929292',
						],
					],
				]
			],

			'ocean_divider_after_page_title_typography_settings' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 10,
				'bottom'          => 10,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_title_style_did_you_know_links' => [
				'type'            => 'ocean-links',
				'label'           => esc_html__( 'Did you know?', 'oceanwp' ),
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'class'           => 'didyouknow',
				'linkIcon'        => 'link-2',
				'titleIcon'       => 'did-you-know',
				'active_callback' => 'oceanwp_is_page_title_when_oe_active',
				'links'           => [
					'did_you_help_link_1' => [
						'label'  => esc_html__( 'OceanWP enables you to customize Page Title visibility and styling for individual pages, giving you more control over website appearance.', 'oceanwp' ),
						'url'    => esc_url( 'https://docs.oceanwp.org/article/872-page-title-oceanwp-settings' ),
						'target' => '_blank'
					]
				]
			],

			'ocean_page_title_need_help' => [
				'type'            => 'ocean-content',
				'isContent'       => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Page-Title-_X3BW/" target="_blank">', '</a>' ),
				'class'           => 'need-help',
				'section'         => 'ocean_section_page_title',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'active_callback' => 'oceanwp_is_page_title_display',
			]
		]
	],

	'ocean_spacer_after_page_title_section' => [
		'type'      => 'ocean-spacer',
		'section'   => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_section_page_breadcrumb' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Page Breadcrumbs', 'oceanwp' ),
		'section'  => 'ocean_site_page_settings',
		'after'    => 'ocean_spacer_after_page_title_section',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_desc_for_page_breadcrumb_section' => [
				'type'      => 'ocean-content',
				'isContent' => esc_html__( 'OceanWP breadcrumbs function independently of SEO plugin settings. Breadcrumbs display in the Page Title area. Disabling the Page Title will also hide breadcrumbs.', 'oceanwp' ),
				'section'   => 'ocean_section_page_breadcrumb',
				'class'     => 'description',
				'transport' => 'postMessage',
				'priority'  => 10,
			],

			'ocean_breadcrumbs' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Enable Breadcrumbs', 'oceanwp' ),
				'section'           => 'ocean_section_page_breadcrumb',
				'default'           => true,
				'transport'         => 'refresh',
				'priority'          => 10,
				'hideLabel'         => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_enable_breadcrumbs' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 1,
				'bottom'          => 15,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumbs_source' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( 'Breadcrumbs Source', 'oceanwp' ),
				'section'           => 'ocean_section_page_breadcrumb',
				'transport'         => 'refresh',
				'default'           => 'default',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
				'sanitize_callback' => 'sanitize_key',
				'choices'           => oceanwp_breadcrumbs_source_choices(),
			],

			'ocean_divider_after_breadcrumbs_source' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 10,
				'bottom'          => 15,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumbs_position' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( 'Position', 'oceanwp' ),
				'section'           => 'ocean_section_page_breadcrumb',
				'transport'         => 'refresh',
				'default'           => '',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					''            => esc_html__( 'Absolute Right', 'oceanwp' ),
					'under-title' => esc_html__( 'Under Title', 'oceanwp' ),
				]
			],

			'ocean_title_for_breadcrumb_typography_and_colors' => [
				'type'            => 'ocean-title',
				'label'           => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumbs_typography' => [
				'id'              => 'ocean_breadcrumbs_typography',
				'type'            => 'ocean-typography',
				'label'           => esc_html__( 'Breadcrumbs', 'oceanwp' ),
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'hideLabel'       => false,
				'selector'        => '.site-breadcrumbs, .site-breadcrumbs a',
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
				'setting_args'    => [
					'fontFamily' => [
						'id'    => 'breadcrumbs_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id'    => 'breadcrumbs_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id'    => 'breadcrumbs_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id'    => 'breadcrumbs_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id'    => 'breadcrumbs_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id'    => 'breadcrumbs_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => '13',
						],
					],
					'fontSizeTablet' => [
						'id'    => 'breadcrumbs_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id'    => 'breadcrumbs_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id'    => 'breadcrumbs_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 'px',
						],
					],
					'letterSpacing' => [
						'id'    => 'breadcrumbs_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id'    => 'breadcrumbs_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id'    => 'breadcrumbs_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id'    => 'breadcrumbs_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 'px',
						],
					],
					'lineHeight' => [
						'id'    => 'breadcrumbs_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => '1.4',
						],
					],
					'lineHeightTablet' => [
						'id'    => 'breadcrumbs_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id'    => 'breadcrumbs_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id'    => 'breadcrumbs_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id'    => 'breadcrumbs_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id'    => 'breadcrumbs_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id'    => 'breadcrumbs_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id'    => 'breadcrumbs_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_divider_after_breadcrumbs_typography' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 5,
				'bottom'          => 15,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumbs_text_color_setting' => [
				'type'              => 'ocean-color',
				'label'             => esc_html__( 'Text', 'oceanwp' ),
				'section'           => 'ocean_section_page_breadcrumb',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'showAlpha'         => true,
				'showPalette'       => true,
				'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args'      => [
					'normal' => [
						'id'       => 'ocean_breadcrumbs_text_color',
						'key'      => 'normal',
						'label'    => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.site-breadcrumbs, .background-image-page-header .site-breadcrumbs' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#c6c6c6',
						],
					],
				]
			],

			'ocean_breadcrumbs_link_color_setting' => [
				'type'              => 'ocean-color',
				'label'             => esc_html__( 'Links', 'oceanwp' ),
				'section'           => 'ocean_section_page_breadcrumb',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'showAlpha'         => true,
				'showPalette'       => true,
				'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args'      => [
					'normal' => [
						'id'       => 'ocean_breadcrumbs_link_color',
						'key'      => 'normal',
						'label'    => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.site-breadcrumbs a, .background-image-page-header .site-breadcrumbs a' => 'color',
							'.site-breadcrumbs a .owp-icon use, .background-image-page-header .site-breadcrumbs a .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					],
					'hover' => [
						'id'       => 'ocean_breadcrumbs_link_color_hover',
						'key'      => 'normal',
						'label'    => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.site-breadcrumbs a:hover, .background-image-page-header .site-breadcrumbs a:hover' => 'color',
							'.site-breadcrumbs a:hover .owp-icon use, .background-image-page-header .site-breadcrumbs a:hover .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					],
				]
			],

			'ocean_breadcrumbs_seperator_color_setting' => [
				'type'              => 'ocean-color',
				'label'             => esc_html__( 'Separator', 'oceanwp' ),
				'section'           => 'ocean_section_page_breadcrumb',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'showAlpha'         => true,
				'showPalette'       => true,
				'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args'      => [
					'normal' => [
						'id'       => 'ocean_breadcrumbs_seperator_color',
						'key'      => 'normal',
						'label'    => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.site-breadcrumbs ul li .breadcrumb-sep, .site-breadcrumbs ol li .breadcrumb-sep' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#c6c6c6',
						],
					],
				]
			],

			'ocean_title_for_breadcrumb_additonal_settings' => [
				'type'            => 'ocean-title',
				'label'           => esc_html__( 'Additional Settings', 'oceanwp' ),
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'bottom'          => 20,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_homepage_settings' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Breadcrumbs Homepage Settings', 'oceanwp' ),
				'section'  => 'ocean_section_page_breadcrumb',
				'after'    => 'ocean_title_for_breadcrumb_additonal_settings',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_breadcrumb_home_item' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Display Home as Icon / Text', 'oceanwp' ),
						'section'           => 'ocean_section_breadcrumb_homepage_settings',
						'default'           => 'icon',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'icon' => [
								'id'      => 'icon',
								'label'   => esc_html__( 'Icon', 'oceanwp' ),
								'content' => esc_html__( 'Icon', 'oceanwp' ),
							],
							'text'  => [
								'id'      => 'text',
								'label'   => esc_html__( 'Text', 'oceanwp' ),
								'content' => esc_html__( 'Text', 'oceanwp' ),
							]
						]
					],

					'ocean_breadcrumb_translation_home' => [
						'label'             => esc_html__( 'Homepage Custom Text', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_section_breadcrumb_homepage_settings',
						'transport'         => 'postMessage',
						'default'           => esc_html__( 'Home', 'oceanwp' ),
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_breadcrumbs_homepage_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Breadcrumbs-Homepage-Settings-SAwRC/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_section_breadcrumb_homepage_settings',
						'transport' => 'postMessage',
						'priority'  => 10,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					]
				]
			],

			'ocean_spacer_after_breadcrumb_homepage_settings_section' => [
				'type'            => 'ocean-spacer',
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_trail_settings' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Breadcrumbs Trail Settings', 'oceanwp' ),
				'section'  => 'ocean_section_page_breadcrumb',
				'after'    => 'ocean_spacer_after_breadcrumb_homepage_settings_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_breadcrumb_separator' => [
						'label'             => esc_html__( 'Breadcrumb Separator', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_section_breadcrumb_trail_settings',
						'transport'         => 'postMessage',
						'default'           => '>',
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_divider_after_breadcrumbs_separator_color' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_section_breadcrumb_trail_settings',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 10,
						'bottom'          => 10,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_breadcrumb_show_title' => [
						'type'              => 'ocean-switch',
						'label'             => esc_html__( 'Display Item Title', 'oceanwp' ),
						'section'           => 'ocean_section_breadcrumb_trail_settings',
						'default'           => true,
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_breadcrumbs_trail_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Breadcrumbs-Trail-Settings-jIA_k/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_section_breadcrumb_trail_settings',
						'transport' => 'postMessage',
						'priority'  => 10,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					]
				]
			],

			'ocean_spacer_after_breadcrumb_trail_settings_section' => [
				'type'            => 'ocean-spacer',
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_taxonomy_setting' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Breadcrumbs Taxonomy Settings', 'oceanwp' ),
				'section'  => 'ocean_section_page_breadcrumb',
				'after'    => 'ocean_spacer_after_breadcrumb_trail_settings_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_breadcrumb_posts_taxonomy' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Posts Taxonomy', 'oceanwp' ),
						'section'           => 'ocean_section_breadcrumb_taxonomy_setting',
						'transport'         => 'refresh',
						'default'           => 'category',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'none'     => esc_html__( 'None', 'oceanwp' ),
							'category' => esc_html__( 'Category', 'oceanwp' ),
							'post_tag' => esc_html__( 'Tag', 'oceanwp' ),
							'blog'     => esc_html__( 'Blog Page', 'oceanwp' ),
						],
					],

					'ocean_breadcrumb_products_taxonomy' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Products Taxonomy', 'oceanwp' ),
						'section'           => 'ocean_section_breadcrumb_taxonomy_setting',
						'transport'         => 'refresh',
						'default'           => 'shop',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'top'               => 20,
						'bottom'            => 25,
						'active_callback'   => 'oceanwp_is_active_breadcrumb_product_callback',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'none'        => esc_html__( 'None', 'oceanwp' ),
							'product_cat' => esc_html__( 'Category', 'oceanwp' ),
							'product_tag' => esc_html__( 'Tag', 'oceanwp' ),
							'shop'        => esc_html__( 'Shop Page', 'oceanwp' ),
						],
					],

					'ocean_breadcrumb_portfolio_taxonomy' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Portfolio Taxonomy', 'oceanwp' ),
						'section'           => 'ocean_section_breadcrumb_taxonomy_setting',
						'transport'         => 'refresh',
						'default'           => 'ocean_portfolio_category',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'oceanwp_is_active_breadcrumb_portfolio_callback',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'none'                     => esc_html__( 'None', 'oceanwp' ),
							'ocean_portfolio_category' => esc_html__( 'Category', 'oceanwp' ),
							'ocean_portfolio_tag'      => esc_html__( 'Tag', 'oceanwp' ),
							'portfolio'                => esc_html__( 'Portfolio Page', 'oceanwp' ),
						],
					],

					'ocean_breadcrumbs_taxonomy_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Breadcrumbs-Taxonomy-Settings-0-J-Y/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_section_breadcrumb_taxonomy_setting',
						'transport' => 'postMessage',
						'priority'  => 10,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					]
				]
			],

			'ocean_spacer_after_breadcrumb_taxonomy_settings_section' => [
				'type'            => 'ocean-spacer',
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_custom_text' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Breadcrumbs Custom Texts', 'oceanwp' ),
				'section'  => 'ocean_section_page_breadcrumb',
				'after'    => 'ocean_spacer_after_breadcrumb_taxonomy_settings_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_breadcrumb_translation_error' => [
						'label'             => esc_html__( 'Custom Text: 404 Not Found', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_section_breadcrumb_custom_text',
						'transport'         => 'postMessage',
						'default'           => esc_html__( '404 Not Found', 'oceanwp' ),
						'priority'          => 10,
						'bottom'            => 25,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_breadcrumb_translation_search' => [
						'label'             => esc_html__( 'Custom Text: Search results for', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_section_breadcrumb_custom_text',
						'transport'         => 'postMessage',
						'default'           => esc_html__( 'Search results for', 'oceanwp' ),
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback'   => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_breadcrumbs_custom_text_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Breadcrumbs-Custom-Text-ZlpmE/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_section_breadcrumb_custom_text',
						'transport' => 'postMessage',
						'priority'  => 10,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					]
				]
			],

			'ocean_divider_after_breadcrumb_custom_text_section' => [
				'type'            => 'ocean-divider',
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 20,
				'bottom'          => 1,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumb_did_you_know_links' => [
				'type'            => 'ocean-links',
				'label'           => esc_html__( 'Did you know?', 'oceanwp' ),
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'class'           => 'didyouknow',
				'linkIcon'        => 'link-2',
				'titleIcon'       => 'did-you-know',
				'active_callback' => 'ocean_is_oe_active',
				'links'           => [
					'link_one' => [
						'label'  => esc_html__( 'Using the [oceanwp_breadcrumb] shortcode, you can display breadcrumbs at any location within website content.', 'oceanwp' ),
						'url'    => esc_url( 'https://docs.oceanwp.org/article/468-oceanwpbreadcrumb-shortcode' ),
						'target' => '_blank'
					]
				]
			],

			'ocean_breadcrumb_did_you_know_links_2' => [
				'type'            => 'ocean-links',
				'label'           => esc_html__( 'Did you know?', 'oceanwp' ),
				'section'         => 'ocean_section_page_breadcrumb',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'class'           => 'didyouknow',
				'linkIcon'        => 'link-2',
				'titleIcon'       => 'did-you-know',
				'active_callback' => 'ocean_is_oe_active',
				'links'           => [
					'link_one' => [
						'label'  => esc_html__( 'OceanWP enables you to customize Breadcrumbs visbility and styling for individual pages, giving you more control over website appearance.', 'oceanwp' ),
						'url'    => esc_url( 'https://docs.oceanwp.org/article/873-breadcrumbs-oceanwp-settings' ),
						'target' => '_blank'
					]
				]
			],

			'ocean_breadcrumbs_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Page-Breadcrumbs-EbdG9/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority'  => 10,
			]
		]
	],

	'ocean_title_for_special_pages_section' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Special Pages', 'oceanwp' ),
		'section'   => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 20,
		'bottom'    => 20,
	],

	'ocean_section_page_search_result' => [
		'type' => 'section',
		'title' => esc_html__( 'Search Results Page', 'oceanwp' ),
		'section' => 'ocean_site_page_settings',
		'after' => 'ocean_title_for_special_pages_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_search_layout' => [
				'label' => esc_html__( 'Layout', 'oceanwp' ),
				'type' => 'ocean-radio-image',
				'section' => 'ocean_section_page_search_result',
				'transport' => 'refresh',
				'default' => 'right-sidebar',
				'priority' => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'right-sidebar' => [
						'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
						'icon' => 'right-sidebar',
					],
					'left-sidebar'  => [
						'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
						'icon' => 'left-sidebar',
					],
					'full-width'    => [
						'label' => esc_html__( 'Full Width', 'oceanwp' ),
						'icon' => 'full_width-no_sidebar',
					],
					'full-screen'   => [
						'label' => esc_html__( '100% Full Width', 'oceanwp' ),
						'icon' => 'fullscreen_width',
					],
					'both-sidebars' => [
						'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
						'icon' => 'both_sidebar_layout',
					]
				]
			],

			'ocean_divider_after_search_result_layout' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_search_result',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_section_page_search_result_sidebar_layout' => [
				'type' => 'section',
				'title' => esc_html__( 'Sidebar Layout Settings', 'oceanwp' ),
				'section' => 'ocean_section_page_search_result',
				'after' => 'ocean_divider_after_search_result_layout',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_desc_for_page_search_result_sidebar_layout' => [
						'type' => 'ocean-content',
						'isContent' => esc_html__( 'Additional customization options are currently available for any of the Sidebar layouts.', 'oceanwp' ),
						'section' => 'ocean_section_page_search_result_sidebar_layout',
						'class' => 'description',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_search_custom_sidebar' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Enable Custom Sidebar', 'oceanwp' ),
						'section' => 'ocean_section_page_search_result_sidebar_layout',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_search_result_layout',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_search_custom_sidebar' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_section_page_search_result_sidebar_layout',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 1,
						'active_callback'   => 'oceanwp_cac_has_search_bs_layout',
					],

					'ocean_search_both_sidebars_style' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Both Sidebars: Content Order Style', 'oceanwp' ),
						'section'           => 'ocean_section_page_search_result_sidebar_layout',
						'transport'         => 'refresh',
						'default'           => 'scs-style',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'oceanwp_cac_has_search_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_divider_after_search_both_sidebars_style' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_section_page_search_result_sidebar_layout',
						'transport' => 'postMessage',
						'priority'  => 10,
						'active_callback'   => 'oceanwp_cac_has_search_bs_layout',
					],

					'ocean_search_both_sidebars_content_width' => [
						'label'             => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_section_page_search_result_sidebar_layout',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 100,
						'step'              => 1,
						'active_callback'   => 'oceanwp_cac_has_search_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_search_both_sidebars_content_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'unit'   => [
								'id'    => 'ocean_search_both_sidebars_content_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => '%'
								],
							],
						],
					],

					'ocean_search_both_sidebars_sidebars_width' => [
						'label'             => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_section_page_search_result_sidebar_layout',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 100,
						'step'              => 1,
						'active_callback'   => 'oceanwp_cac_has_search_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_search_both_sidebars_sidebars_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'unit'   => [
								'id'    => 'ocean_search_both_sidebars_sidebars_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => '%'
								],
							],
						],
					],

					'ocean_search_sidebar_order' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Mobile Sidebar Order', 'oceanwp' ),
						'section'           => 'ocean_section_page_search_result_sidebar_layout',
						'transport'         => 'refresh',
						'default'           => 'content-sidebar',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'oceanwp_cac_has_search_rl_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						],
					],

					'ocean_section_page_search_result_sidebar_need_help' => [
						'type'            => 'ocean-content',
						'isContent'       => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Sidebar-Layout-Settings-VgIIM/" target="_blank">', '</a>' ),
						'class'           => 'need-help',
						'section'         => 'ocean_section_page_search_result_sidebar_layout',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_topbar',
					]
				]
			],

			'ocean_divider_after_search_page_sidebar_layout_section' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_section_page_search_result',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 10
			],

			'ocean_menu_search_source' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( ' Select Source for SERP', 'oceanwp' ),
				'section'           => 'ocean_section_page_search_result',
				'transport'         => 'refresh',
				'default'           => 'any',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => ocean_customizer_get_post_types(),
			],

			'ocean_divider_after_menu_search_source_setting' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_section_page_search_result',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
				'bottom'    => 10
			],

			'ocean_search_post_per_page' => [
				'label'             => esc_html__( 'Number of Search Results to Display per Page', 'oceanwp' ),
				'type'              => 'ocean-range-slider',
				'section'           => 'ocean_section_page_search_result',
				'transport'         => 'refresh',
				'priority'          => 10,
				'hideLabel'         => false,
				'isUnit'            => false,
				'isResponsive'      => false,
				'min'               => 1,
				'max'               => 100,
				'step'              => 1,
				'active_callback'   => 'oceanwp_cac_has_search_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id'    => 'ocean_search_post_per_page',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr'  => [
							'transport' => 'refresh',
						],
					]
				],
			],

			'ocean_divider_after_search_post_per_page_setting' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_section_page_search_result',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 1,
				'bottom'    => 10,
				'active_callback'   => 'oceanwp_cac_has_search_bs_layout',
			],

			'ocean_search_logo' => [
				'label' => esc_html__( 'Logo', 'oceanwp' ),
				'desc' => esc_html__( 'Select a logo for the search results page.', 'oceanwp' ),
				'type' => 'ocean-image',
				'section'  => 'ocean_section_page_search_result',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'mediaType' => 'image',
				'savetype' => 'url',
				'sanitize_callback' => 'ocean_sanitize_image_control'
			],

			'ocean_search_result_page_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#Search-Results-Page-2c0W2/" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_section_page_search_result',
				'transport' => 'postMessage',
				'priority' => 10,
			]
		]
	],

	'ocean_spacer_for_404_error_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10
	],

	'ocean_section_page_404_error' => [
		'type' => 'section',
		'title' => esc_html__( '404 Error Page', 'oceanwp' ),
		'section' => 'ocean_site_page_settings',
		'after' => 'ocean_spacer_for_404_error_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_error_page_layout' => [
				'label' => esc_html__( 'Layout', 'oceanwp' ),
				'type' => 'ocean-radio-image',
				'section' => 'ocean_section_page_404_error',
				'transport' => 'refresh',
				'default' => 'full-width',
				'priority' => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'right-sidebar' => [
						'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
						'icon' => 'right-sidebar',
					],
					'left-sidebar'  => [
						'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
						'icon' => 'left-sidebar',
					],
					'full-width'    => [
						'label' => esc_html__( 'Full Width', 'oceanwp' ),
						'icon' => 'full_width-no_sidebar',
					],
					'full-screen'   => [
						'label' => esc_html__( '100% Full Width', 'oceanwp' ),
						'icon' => 'fullscreen_width',
					],
					'both-sidebars' => [
						'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
						'icon' => 'both_sidebar_layout',
					]
				]
			],

			'ocean_divider_after_error_page_layout_setting' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_section_page_404_error',
				'transport' => 'postMessage',
				'priority'  => 10,
			],

			'ocean_404_logo' => [
				'label'     => esc_html__( 'Logo', 'oceanwp' ),
				'desc'      => esc_html__( 'Select a logo for the 404 error page.', 'oceanwp' ),
				'type'      => 'ocean-image',
				'section'   => 'ocean_section_page_404_error',
				'transport' => 'refresh',
				'priority'  => 10,
				'hideLabel' => false,
				'mediaType' => 'image',
				'savetype' => 'url',
				'sanitize_callback' => 'ocean_sanitize_image_control'
			],

			'ocean_title_for_page_error_custom_404' => [
				'type'      => 'ocean-divider',
				'label'     => esc_html__( 'Custom 404 Page', 'oceanwp' ),
				'section'   => 'ocean_section_page_404_error',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 20,
			],

			'ocean_error_page_blank' => [
				'id'                => 'ocean_error_page_blank',
				'type'              => 'ocean-buttons',
				'label'             => esc_html__( 'Custom 404', 'oceanwp' ),
				'desc'              => esc_html__( 'Enabling this option will remove all default elements, giving you full control over the 404 error page.','oceanwp' ),
				'section'           => 'ocean_section_page_404_error',
				'default'           => 'off',
				'transport'         => 'refresh',
				'priority'          => 10,
				'hideLabel'         => false,
				'wrap'              => false,
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

			'ocean_error_page_template' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( 'Select Template', 'oceanwp' ),
				'desc'              => esc_html__( 'You can replace the default 404 error page with a custom page template. Select a template created in OceanWP > My Library.', 'oceanwp' ),
				'section'           => 'ocean_section_page_404_error',
				'transport'         => 'refresh',
				'default'           => '0',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => oceanwp_library_template_choices(),
			],

			'ocean_error_page_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages#404-Error-Page-06edq/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_section_page_404_error',
				'transport' => 'postMessage',
				'priority'  => 10,
			]
		]
	],

	'ocean_page_settings_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/899-customizer-pages-special-pages/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'section'   => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

];
