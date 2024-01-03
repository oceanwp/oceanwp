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
		'label' => esc_html__( 'Page Layout', 'oceanwp' ),
		'type' => 'ocean-radio-image',
		'section' => 'ocean_site_page_settings',
		'transport' => 'refresh',
		'default' => 'right-sidebar',
		'priority' => 10,
		'choices' => [
			// 'right-sidebar' => [
			// 	'default' => OCEANWP_INC_DIR_URI . 'customizer/assets/img/right-sidebar-default.png',
			// 	'active'  => OCEANWP_INC_DIR_URI . 'customizer/assets/img/right-sidebar-active.png',
			// ],
			// 'left-sidebar'  => [
			// 	'default' => OCEANWP_INC_DIR_URI . 'customizer/assets/img/left-sidebar-default.png',
			// 	'active'  => OCEANWP_INC_DIR_URI . 'customizer/assets/img/left-sidebar-active.png',
			// ],
			// 'full-width'    => [
			// 	'default' => OCEANWP_INC_DIR_URI . 'customizer/assets/img/full_width-no_sidebar-default.png',
			// 	'active'  => OCEANWP_INC_DIR_URI . 'customizer/assets/img/full_width-no_sidebar-active.png',
			// ],
			// 'full-screen'   => [
			// 	'default' => OCEANWP_INC_DIR_URI . 'customizer/assets/img/fullscreen_width-default.png',
			// 	'active'  => OCEANWP_INC_DIR_URI . 'customizer/assets/img/fullscreen_width-active.png',
			// ],
			// 'both-sidebars' => [
			// 	'default' => OCEANWP_INC_DIR_URI . 'customizer/assets/img/both_sidebar_layout-default.png',
			// 	'active'  => OCEANWP_INC_DIR_URI . 'customizer/assets/img/both_sidebar_layout-active.png',
			// ]
			'right-sidebar' => [
				'label'   => esc_html__( 'Right Sidebar', 'oceanwp' ),
				'default' => oceanwp_customizer_print_svg('right-sidebar-default'),
				'active'  => oceanwp_customizer_print_svg('right-sidebar-active'),
			],
			'left-sidebar'  => [
				'label'   => esc_html__( 'Left Sidebar', 'oceanwp' ),
				'default' => oceanwp_customizer_print_svg('left-sidebar-default'),
				'active'  => oceanwp_customizer_print_svg('left-sidebar-active'),
			],
			'full-width'    => [
				'label'   => esc_html__( 'Full Width', 'oceanwp' ),
				'default' => oceanwp_customizer_print_svg('full_width-no_sidebar-default'),
				'active'  => oceanwp_customizer_print_svg('full_width-no_sidebar-active'),
			],
			'full-screen'   => [
				'label'   => esc_html__( '100% Full Width', 'oceanwp' ),
				'default' => oceanwp_customizer_print_svg('fullscreen_width-default'),
				'active'  => oceanwp_customizer_print_svg('fullscreen_width-active'),
			],
			'both-sidebars' => [
				'label'   => esc_html__( 'Both Sidebar', 'oceanwp' ),
				'default' => oceanwp_customizer_print_svg('both_sidebar_layout-default'),
				'active'  => oceanwp_customizer_print_svg('both_sidebar_layout-active'),
			]
		]
	],

	'ocean_page_content_padding' => [
		'id' => 'ocean_page_content_padding',
		'label'    => esc_html__( 'Content Padding (px)', 'oceanwp' ),
		'type'     => 'ocean-spacing',
		'section'  => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel'    => false,
		'isLeft'        => false,
		'isRight'     => false,
		'isType'       => 'padding',
		'wrapper'      => 'ocean_page_content_padding',
		'setting_args' => [
			'spacingTop' => [
				'id' => 'ocean_page_content_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottom' => [
				'id' => 'ocean_page_content_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopTablet' => [
				'id' => 'ocean_page_content_tablet_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomTablet' => [
				'id' => 'ocean_page_content_tablet_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'spacingTopMobile' => [
				'id' => 'ocean_page_content_mobile_top_padding',
				'label' => esc_html__( 'Top', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'spacingBottomMobile' => [
				'id' => 'ocean_page_content_mobile_bottom_padding',
				'label' => esc_html__( 'Bottom', 'oceanwp' ),
				'attr' => [
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
		'type' => 'ocean-divider',
		'section' => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 1
	],

	'ocean_spacer_after_page_content_padding' => [
        'type' => 'ocean-spacer',
        'section' => 'ocean_site_page_settings',
        'transport' => 'postMessage',
        'priority' => 10,
    ],

    'ocean_section_page_layout_settings' => [
		'type' => 'section',
		'title' => esc_html__('Additional Layout Settings', 'oceanwp'),
		'section' => 'ocean_site_page_settings',
		'after' => 'ocean_spacer_after_page_content_padding',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_desc_for_layout_content_settings' => [
				'type' => 'ocean-content',
				'isContent' => esc_html__('If any, additional page layout settings will appear here based on your Page Layout choice. For now, additional page layout settings are available for the Both Sidebars Layout style.', 'oceanwp'),
				'section' => 'ocean_section_page_layout_settings',
				'class' => 'description',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_page_single_both_sidebars_style' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Both Sidebars: Content Order Style', 'oceanwp' ),
				'section' => 'ocean_section_page_layout_settings',
				'transport' => 'refresh',
				'default' => 'scs-style',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_is_page_single_bs_layout',
				'choices' => [
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
				'active_callback' => 'oceanwp_is_page_single_bs_layout',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_page_single_both_sidebars_content_width',
						'label' => 'Desktop',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_page_single_both_sidebars_content_unit',
						'label' => 'Unit',
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_page_single_both_sidebars_sidebars_width' => [
				'label'       => esc_html__( 'Both Sidebars: Sidebars Width', 'oceanwp' ),
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
				'active_callback' => 'oceanwp_is_page_single_bs_layout',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_page_single_both_sidebars_sidebars_width',
						'label' => 'Desktop',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_page_single_both_sidebars_sidebars_width_unit',
						'label' => 'Unit',
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],
		]
	],

	'ocean_spacer_after_page_layout_section' => [
        'type' => 'ocean-spacer',
        'section' => 'ocean_site_page_settings',
        'transport' => 'postMessage',
        'priority' => 10,
    ],

    'ocean_section_page_responsive_section' => [
		'type' => 'section',
		'title' => esc_html__('Responsive Page Settings', 'oceanwp'),
		'section' => 'ocean_site_page_settings',
		'after' => 'ocean_spacer_after_page_layout_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_desc_for_page_responsive_settings' => [
				'type' => 'ocean-content',
				'isContent' => esc_html__('If any, additional page responsive settings will appear here based on your Page Layout choice. For now, additional page responsive settings are available for any of the single Sidebar Page Layout styles.', 'oceanwp'),
				'section' => 'ocean_section_page_responsive_section',
				'class' => 'description',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_page_single_sidebar_order' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Both Sidebars: Content Order Style', 'oceanwp' ),
				'section' => 'ocean_section_page_responsive_section',
				'transport' => 'refresh',
				'default' => 'content-sidebar',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_is_page_single_rl_layout',
				'choices' => [
					'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
					'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
				],
			],
		]
	],

	'ocean_divider_after_page_responsive_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 20,
		'bottom' => 20
	],

	'ocean_section_page_title' => [
		'type' => 'section',
		'title' => esc_html__('Page Title', 'oceanwp'),
		'section' => 'ocean_site_page_settings',
		'after' => 'ocean_divider_after_page_responsive_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_page_title_display' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Enable Page Title', 'oceanwp'),
				'section' => 'ocean_section_page_title',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
			],

			'ocean_divider_after_page_title_display' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_title',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_header_visibility' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Visibility', 'oceanwp' ),
				'section' => 'ocean_section_page_title',
				'transport' => 'postMessage',
				'default' => 'all-devices',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_is_page_title_display',
				'choices' => [
					'all-devices'        => esc_html__( 'Show On All Devices', 'oceanwp' ),
					'hide-tablet'        => esc_html__( 'Hide On Tablet', 'oceanwp' ),
					'hide-mobile'        => esc_html__( 'Hide On Mobile', 'oceanwp' ),
					'hide-tablet-mobile' => esc_html__( 'Hide On Tablet & Mobile', 'oceanwp' ),
					'hide-all-devices'   => esc_html__( 'Hide On All Devices', 'oceanwp' ),
				],
			],

			'ocean_divider_after_page_header_visibility' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_title',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_page_header_heading_tag' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Heading Tag', 'oceanwp' ),
				'section' => 'ocean_section_page_title',
				'transport' => 'refresh',
				'default' => 'h1',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_is_page_title_display',
				'choices' => [
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

			'ocean_divider_after_page_header_title_tag' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_title',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 20,
				'active_callback' => 'oceanwp_is_page_title_display',
			],

			'ocean_section_page_title_style' => [
				'type' => 'section',
				'title' => esc_html__('Page Title Style', 'oceanwp'),
				'section' => 'ocean_section_page_title',
				'after' => 'ocean_divider_after_page_header_title_tag',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_page_header_padding' => [
						'id' => 'ocean_page_header_padding',
						'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'active_callback' => 'oceanwp_is_page_title_display',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_page_header_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'=> 34,
								],
							],
							'spacingRight' => [
								'id' => 'ocean_page_header_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_page_header_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'=> 34,
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_page_header_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_page_header_tablet_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_page_header_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_page_header_tablet_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_page_header_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_page_header_mobile_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_page_header_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_page_header_mobile_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_page_header_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
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

					'ocean_page_header_style' => [
						'type' => 'ocean-radio-image',
						'label' => esc_html__('Style', 'oceanwp' ),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'refresh',
						'default' => '',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_is_page_title_display',
						'choices' => [
							// ''                 => esc_html__( 'Default', 'oceanwp' ),
							// 'centered'         => esc_html__( 'Centered', 'oceanwp' ),
							// 'centered-minimal' => esc_html__( 'Centered Minimal', 'oceanwp' ),
							// 'background-image' => esc_html__( 'Background Image', 'oceanwp' ),
							// 'hidden'           => esc_html__( 'Hidden', 'oceanwp' ),

							'' => [
								'label'   => esc_html__( 'Default', 'oceanwp' ),
								'default' => oceanwp_customizer_print_svg('page_title_default_style-default'),
								'active'  => oceanwp_customizer_print_svg('page_title_default_style-active'),
							],
							'centered' => [
								'label'   => esc_html__( 'Centered', 'oceanwp' ),
								'default' => oceanwp_customizer_print_svg('page_title_centered_style-default'),
								'active'  => oceanwp_customizer_print_svg('page_title_centered_style-active'),
							],
							'centered-minimal' => [
								'label'   => esc_html__( 'Centered Minimal', 'oceanwp' ),
								'default' => oceanwp_customizer_print_svg('page_title_centered_minimal_style-default'),
								'active'  => oceanwp_customizer_print_svg('page_title_centered_minimal_style-active'),
							],
							'background-image' => [
								'label'   => esc_html__( 'Background Image', 'oceanwp' ),
								'default' => oceanwp_customizer_print_svg('page_title_background_image_style-default'),
								'active'  => oceanwp_customizer_print_svg('page_title_background_image_style-active'),
							]
						],
					],

					'ocean_spacer_after_page_title_style_setting' => [
						'type' => 'ocean-spacer',
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'oceanwp_is_page_title_display',
					],

					'ocean_section_page_title_additional_settings' => [
						'type' => 'section',
						'title' => esc_html__('Additional Title Settings', 'oceanwp'),
						'section' => 'ocean_section_page_title_style',
						'after' => 'ocean_spacer_after_page_title_style_setting',
						'class' => 'section-site-layout',
						'priority' => 10,
						'options' => [
							'ocean_desc_for_page_title_additional_settings' => [
								'type' => 'ocean-content',
								'isContent' => esc_html__('If any, additional Page Title style settings and options will appear here, based on your Page Title Style selection. For now, additional settings are available for the Background Image Page Title style.', 'oceanwp'),
								'section' => 'ocean_section_page_title_additional_settings',
								'class' => 'description',
								'transport' => 'postMessage',
								'priority' => 10,
								'active_callback' => 'oceanwp_is_page_title_display',
							],

							'ocean_page_header_bg_title_breadcrumb_position' => [
								'id' => 'ocean_page_header_bg_title_breadcrumb_position',
								'type' => 'ocean-buttons',
								'label' => esc_html__('Title / Breadcrumb Position', 'oceanwp'),
								'section' => 'ocean_section_page_title_additional_settings',
								'default'  => 'center',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'wrap'    => false,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'choices' => [
									'right' => [
										'id'     => 'right',
										'label'   => esc_html__('Right', 'oceanwp'),
										'content' => 'right'
									],
									'center'  => [
										'id'     => 'center',
										'label'   => esc_html__('Center', 'oceanwp'),
										'content' => 'center'
									],
									'left'  => [
										'id'     => 'left',
										'label'   => esc_html__('Left', 'oceanwp'),
										'content' => 'left'
									]
								],
								'preview' => 'queryWithAttr',
								'css' => [
									'selector' => '.background-image-page-header .page-header-inner, .background-image-page-header .site-breadcrumbs',
									'property' => 'text-align'
								]
							],

							'ocean_divider_after_page_header_bg_title_breadcrumb_position' => [
								'type' => 'ocean-divider',
								'section' => 'ocean_section_page_title_additional_settings',
								'transport' => 'postMessage',
								'priority' => 10,
								'top' => 1,
								'bottom' => 10,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
							],

							'ocean_page_header_bg_image' => [
								'label' => esc_html__( 'Image', 'oceanwp' ),
								'type' => 'ocean-image',
								'section'  => 'ocean_section_page_title_additional_settings',
								'transport' => 'refresh',
								'priority' => 10,
								'hideLabel' => false,
								'mediaType' => 'image',
								'active_callback' => 'oceanwp_is_bg_image_page_header',
							],

							'ocean_page_header_bg_image_height_setting' => [
								'id' => 'ocean_page_header_bg_image_height_setting',
								'label'    => esc_html__( 'Height', 'oceanwp' ),
								'type'     => 'ocean-range-slider',
								'section'  => 'ocean_section_page_title_additional_settings',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel'    => false,
								'isUnit'       => true,
								'isResponsive' => false,
								'min'          => 1,
								'max'          => 800,
								'step'         => 1,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'setting_args' => [
									'desktop' => [
										'id' => 'ocean_page_header_bg_image_height',
										'label' => 'Desktop',
										'attr' => [
											'transport' => 'postMessage',
											'default' => 400
										],
									],
									'unit' => [
										'id' => 'ocean_page_header_bg_image_height_unit',
										'label' => 'Unit',
										'attr' => [
											'transport' => 'postMessage',
											'default' => 'px'
										]
									]
								],
								'preview' => 'queryWithType',
								'css' => [
									'.page-header' => 'height',
								]
							],

							'ocean_page_header_bg_image_position' => [
								'id' => 'ocean_page_header_bg_image_position',
								'type' => 'ocean-select',
								'label' => esc_html__('Position', 'oceanwp' ),
								'section' => 'ocean_section_page_title_additional_settings',
								'transport' => 'postMessage',
								'default' => 'top center',
								'priority' => 10,
								'hideLabel' => false,
								'multiple' => false,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'choices' => [
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
								'id' => 'ocean_page_header_bg_image_repeat',
								'type' => 'ocean-select',
								'label' => esc_html__('Repeat', 'oceanwp' ),
								'section' => 'ocean_section_page_title_additional_settings',
								'transport' => 'postMessage',
								'default' => 'no-repeat',
								'priority' => 10,
								'hideLabel' => false,
								'multiple' => false,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'choices' => [
									'initial'   => esc_html__( 'Default', 'oceanwp' ),
									'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
									'repeat'    => esc_html__( 'Repeat', 'oceanwp' ),
									'repeat-x'  => esc_html__( 'Repeat-x', 'oceanwp' ),
									'repeat-y'  => esc_html__( 'Repeat-y', 'oceanwp' ),
								],
								'preview' => 'queryWithAttr',
								'css' => [
									'selector' => '.page-header',
									'property' => 'background-repeat'
								]
							],

							'ocean_page_header_bg_image_attachment' => [
								'id' => 'ocean_page_header_bg_image_attachment',
								'type' => 'ocean-buttons',
								'label' => esc_html__('Attachment', 'oceanwp'),
								'section' => 'ocean_section_page_title_additional_settings',
								'default'  => 'initial',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'wrap'    => false,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'choices' => [
									'initial' => [
										'id'     => 'initial',
										'label'   => esc_html__('Initial', 'oceanwp'),
										'content' => 'Initial'
									],
									'scroll'  => [
										'id'     => 'scroll',
										'label'   => esc_html__('Scroll', 'oceanwp'),
										'content' => 'Scroll'
									],
									'fixed'  => [
										'id'     => 'fixed',
										'label'   => esc_html__('Fixed', 'oceanwp'),
										'content' => 'Fixed'
									]
								],
								'preview' => 'queryWithAttr',
								'css' => [
									'selector' => '.page-header',
									'property' => 'background-attachment'
								]
							],

							'ocean_page_header_bg_image_size' => [
								'id' => 'ocean_page_header_bg_image_size',
								'type' => 'ocean-buttons',
								'label' => esc_html__('Size', 'oceanwp'),
								'section' => 'ocean_section_page_title_additional_settings',
								'default'  => 'cover',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'wrap'    => false,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'choices' => [
									'initial' => [
										'id'     => 'initial',
										'label'   => esc_html__('Default', 'oceanwp'),
										'content' => 'Initial'
									],
									'auto'  => [
										'id'     => 'auto',
										'label'   => esc_html__('Auto', 'oceanwp'),
										'content' => 'Auto'
									],
									'cover'  => [
										'id'     => 'cover',
										'label'   => esc_html__('Cover', 'oceanwp'),
										'content' => 'Cover'
									],
									'contain'  => [
										'id'     => 'contain',
										'label'   => esc_html__('Contain', 'oceanwp'),
										'content' => 'Contain'
									]
								],
								'preview' => 'queryWithAttr',
								'css' => [
									'selector' => '.page-header',
									'property' => 'background-size'
								]
							],

							'ocean_divider_after_page_header_bg_image_size' => [
								'type' => 'ocean-divider',
								'section' => 'ocean_section_page_title_additional_settings',
								'transport' => 'postMessage',
								'priority' => 10,
								'top' => 10,
								'bottom' => 10,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
							],

							'ocean_page_header_bg_image_overlay_opacity_setting' => [
								'id' => 'ocean_page_header_bg_image_overlay_opacity_setting',
								'label'    => esc_html__( 'Overlay Opacity', 'oceanwp' ),
								'type'     => 'ocean-range-slider',
								'section'  => 'ocean_section_page_title_additional_settings',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel'    => false,
								'isUnit'       => false,
								'isResponsive' => false,
								'min'          => 0.1,
								'max'          => 1,
								'step'         => 0.1,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'setting_args' => [
									'desktop' => [
										'id' => 'ocean_page_header_bg_image_overlay_opacity',
										'label' => 'Desktop',
										'attr' => [
											'transport' => 'postMessage',
											'default' => 0.5
										],
									]
								],
								'preview' => 'queryWithType',
								'css' => [
									'.background-image-page-header-overlay' => 'opacity',
								]
							],

							'ocean_page_header_bg_image_overlay_color_setting' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Overlay Color', 'oceanwp' ),
								'section' => 'ocean_section_page_title_additional_settings',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'active_callback' => 'oceanwp_is_bg_image_page_header',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_page_header_bg_image_overlay_color',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
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

						],

					],

					'ocean_divider_after_page_header_bg_image_add_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 20,
						'bottom' => 10,
						'active_callback' => 'oceanwp_is_page_title_display',
					],

					'ocean_page_header_background_setting' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_is_not_bg_image_page_header',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_page_header_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.page-header' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f5f5f5',
								],
							],
						]
					],

					'ocean_page_header_title_color_setting' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Text Color', 'oceanwp' ),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_is_page_title_display',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_page_header_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.page-header .page-header-title, .page-header.background-image-page-header .page-header-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_page_header_colors_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'oceanwp_is_page_title_display',
					],

					'ocean_page_title_typography' => [
						'id' => 'ocean_page_title_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Title Typography', 'oceanwp'),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.page-header .page-header-title, .page-header.background-image-page-header .page-header-title',
						'active_callback' => 'oceanwp_is_page_title_display',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'page_title_typography[font-family]',
								'label' => 'Font Family',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'page_title_typography[font-weight]',
								'label' => 'Font Weight',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'page_title_tablet_typography[font-weight]',
								'label' => 'Font Weight',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'page_title_mobile_typography[font-weight]',
								'label' => 'Font Weight',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'page_title_typography[font-subset]',
								'label' => 'Font Subset',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'page_title_typography[font-size]',
								'label' => 'Font Size',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '32'
								],
							],
							'fontSizeTablet' => [
								'id' => 'page_title_tablet_typography[font-size]',
								'label' => 'Font Size',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'page_title_mobile_typography[font-size]',
								'label' => 'Font Size',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'page_title_typography[font-size-unit]',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'page_title_typography[letter-spacing]',
								'label' => 'Letter Spacing',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id' => 'page_title_tablet_typography[letter-spacing]',
								'label' => 'Letter Spacing',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'page_title_mobile_typography[letter-spacing]',
								'label' => 'Letter Spacing',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'page_title_typography[letter-spacing-unit]',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'page_title_typography[line-height]',
								'label' => 'Line Height',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '1.4'
								],
							],
							'lineHeightTablet' => [
								'id' => 'page_title_tablet_typography[line-height]',
								'label' => 'Line Height',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'page_title_mobile_typography[line-height]',
								'label' => 'Line Height',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'page_title_typography[line-height-unit]',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'page_title_typography[text-transform]',
								'label' => 'Text Transform',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'page_title_tablet_typography[text-transform]',
								'label' => 'Text Transform',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'page_title_mobile_typography[text-transform]',
								'label' => 'Text Transform',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'page_title_typography[text-decoration]',
								'label' => 'Text Decoration',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'page_title_typography_color_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_is_page_title_display',
						'setting_args' => [
							'normal' => [
								'id' => 'page_title_typography[color]',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.page-header .page-header-title, .page-header.background-image-page-header .page-header-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f5f5f5',
								],
							],
						]
					],

					'ocean_page_subheading_typography' => [
						'id' => 'ocean_page_subheading_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Subtitle Typography', 'oceanwp'),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.page-header .page-subheading',
						'active_callback' => 'oceanwp_is_page_title_display',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'page_subheading_typography[font-family]',
								'label' => 'Font Family',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'page_subheading_typography[font-weight]',
								'label' => 'Font Weight',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'page_subheading_tablet_typography[font-weight]',
								'label' => 'Font Weight',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'page_subheading_mobile_typography[font-weight]',
								'label' => 'Font Weight',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'page_subheading_typography[font-subset]',
								'label' => 'Font Subset',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'page_subheading_typography[font-size]',
								'label' => 'Font Size',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '15'
								],
							],
							'fontSizeTablet' => [
								'id' => 'page_subheading_tablet_typography[font-size]',
								'label' => 'Font Size',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'page_subheading_mobile_typography[font-size]',
								'label' => 'Font Size',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'page_subheading_typography[font-size-unit]',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'page_subheading_typography[letter-spacing]',
								'label' => 'Letter Spacing',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id' => 'page_subheading_tablet_typography[letter-spacing]',
								'label' => 'Letter Spacing',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'page_subheading_mobile_typography[letter-spacing]',
								'label' => 'Letter Spacing',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'page_subheading_typography[letter-spacing-unit]',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'page_subheading_typography[line-height]',
								'label' => 'Line Height',
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '1.8'
								],
							],
							'lineHeightTablet' => [
								'id' => 'page_subheading_tablet_typography[line-height]',
								'label' => 'Line Height',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'page_subheading_mobile_typography[line-height]',
								'label' => 'Line Height',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'page_subheading_typography[line-height-unit]',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'page_subheading_typography[text-transform]',
								'label' => 'Text Transform',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'page_subheading_tablet_typography[text-transform]',
								'label' => 'Text Transform',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'page_subheading_mobile_typography[text-transform]',
								'label' => 'Text Transform',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'page_subheading_typography[text-decoration]',
								'label' => 'Text Decoration',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'page_subheading_typography_color_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Subtitle Color', 'oceanwp' ),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_is_page_title_display',
						'setting_args' => [
							'normal' => [
								'id' => 'page_subheading_typography[color]',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
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
						'type' => 'ocean-divider',
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_page_title_did_you_know_links' => [
						'type' => 'ocean-links',
						'label' => esc_html__('Did you know?', 'oceanwp' ),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'class' => 'didyouknow',
						'linkIcon' => 'link-2',
						'titleIcon' => 'did-you-know',
						'active_callback' => 'ocean_is_oe_active',
						'links' => [
							'google_font' => [
								'label' => esc_html__('You can control the Page Title visibility and styling for each of your pages individually, regardless of the global Page Settings.', 'oceanwp'),
								'url' => esc_url( '#' ),
							]
						]
					],

					'ocean_divider_after_page_title_did_you_know' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 20,
						'bottom' => 10,
						'active_callback' => 'ocean_is_oe_active',
					],

					'ocean_page_title_whatnext_links' => [
						'type' => 'ocean-links',
						'label' => esc_html__('What to do next?', 'oceanwp' ),
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
						'class' => 'whatnext',
						'linkIcon' => 'link-2',
						'titleIcon' => 'next-step',
						'active_callback' => 'ocean_is_oe_active',
						'links' => [
							'style_breadcrumb' => [
								'label' => esc_html__('Style breadcrumbs.', 'oceanwp'),
								'url' => '#'
							],
							'style_search_result' => [
								'label' => esc_html__('Style the Search Results Page.', 'oceanwp'),
								'url' => '#'
							],
							'seo_settings' => [
								'label' => esc_html__('View SEO Settings.', 'oceanwp'),
								'url' => '#'
							],
						]
					],

					'ocean_pagination_need_help' => [
						'type' => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
						'class' => 'need-help',
						'section' => 'ocean_section_page_title_style',
						'transport' => 'postMessage',
						'priority' => 10,
					]
				]
			],
		]
	],

	'ocean_spacer_after_page_title_section' => [
        'type' => 'ocean-spacer',
        'section' => 'ocean_site_page_settings',
        'transport' => 'postMessage',
        'priority' => 10,
    ],

	'ocean_section_page_breadcrumb' => [
		'type' => 'section',
		'title' => esc_html__('Page Breadcrumbs', 'oceanwp'),
		'section' => 'ocean_site_page_settings',
		'after' => 'ocean_spacer_after_page_title_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_desc_for_page_breadcrumb_section' => [
				'type' => 'ocean-content',
				'isContent' => esc_html__('Your website can display breadcrumbs regardless of your additional SEO Settings or SEO plugins usage. Breadcrumbs are displayed in the Page Title area. If the Page Title is disabled, breadcrumbs will not display.', 'oceanwp'),
				'section' => 'ocean_section_page_breadcrumb',
				'class' => 'description',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_breadcrumbs' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Enable Breadcrumbs', 'oceanwp'),
				'section' => 'ocean_section_page_breadcrumb',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
			],

			'ocean_divider_after_enable_breadcrumbs' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 20,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumbs_source' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Breadcrumbs Source', 'oceanwp' ),
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'refresh',
				'default' => 'default',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
				'choices' => oceanwp_breadcrumbs_source_choices(),
			],

			'ocean_breadcrumbs_position' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Position', 'oceanwp' ),
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'refresh',
				'default' => '',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
				'choices' => [
					'' => esc_html__( 'Absolute Right', 'oceanwp' ),
					'under-title' => esc_html__( 'Under Title', 'oceanwp' ),
				]
			],

			'ocean_divider_after_breadcrumbs_position' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumbs_typography' => [
				'id' => 'ocean_breadcrumbs_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__('Breadcrumbs', 'oceanwp'),
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => '.site-breadcrumbs',
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'breadcrumbs_typography[font-family]',
						'label' => 'Font Family',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'breadcrumbs_typography[font-weight]',
						'label' => 'Font Weight',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'breadcrumbs_tablet_typography[font-weight]',
						'label' => 'Font Weight',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'breadcrumbs_mobile_typography[font-weight]',
						'label' => 'Font Weight',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'breadcrumbs_typography[font-subset]',
						'label' => 'Font Subset',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'breadcrumbs_typography[font-size]',
						'label' => 'Font Size',
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '13'
						],
					],
					'fontSizeTablet' => [
						'id' => 'breadcrumbs_tablet_typography[font-size]',
						'label' => 'Font Size',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'breadcrumbs_mobile_typography[font-size]',
						'label' => 'Font Size',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'breadcrumbs_typography[font-size-unit]',
						'label' => 'Unit',
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'letterSpacing' => [
						'id' => 'breadcrumbs_typography[letter-spacing]',
						'label' => 'Letter Spacing',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id' => 'breadcrumbs_tablet_typography[letter-spacing]',
						'label' => 'Letter Spacing',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'breadcrumbs_mobile_typography[letter-spacing]',
						'label' => 'Letter Spacing',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'breadcrumbs_typography[letter-spacing-unit]',
						'label' => 'Unit',
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'breadcrumbs_typography[line-height]',
						'label' => 'Line Height',
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '1.4'
						],
					],
					'lineHeightTablet' => [
						'id' => 'breadcrumbs_tablet_typography[line-height]',
						'label' => 'Line Height',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'breadcrumbs_mobile_typography[line-height]',
						'label' => 'Line Height',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'breadcrumbs_typography[line-height-unit]',
						'label' => 'Unit',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'breadcrumbs_typography[text-transform]',
						'label' => 'Text Transform',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'breadcrumbs_tablet_typography[text-transform]',
						'label' => 'Text Transform',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'breadcrumbs_mobile_typography[text-transform]',
						'label' => 'Text Transform',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'breadcrumbs_typography[text-decoration]',
						'label' => 'Text Decoration',
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_divider_after_breadcrumbs_typography' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumbs_text_color_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Text', 'oceanwp' ),
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_breadcrumbs_text_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
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
				'type' => 'ocean-color',
				'label' => esc_html__( 'Link', 'oceanwp' ),
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_breadcrumbs_link_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
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
						'id' => 'ocean_breadcrumbs_link_color_hover',
						'key' => 'normal',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
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

			'ocean_divider_after_breadcrumbs_colors_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 20,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_trail_settings' => [
				'type' => 'section',
				'title' => esc_html__('Breadcrumbs Trail Settings', 'oceanwp'),
				'section' => 'ocean_section_page_breadcrumb',
				'after' => 'ocean_divider_after_breadcrumbs_colors_settings',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_breadcrumb_separator' => [
						'label'    => esc_html__( 'Breadcrumb Separator', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_section_breadcrumb_trail_settings',
						'transport' => 'postMessage',
						'default'   => '>',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_breadcrumbs_seperator_color_setting' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Separator Color', 'oceanwp' ),
						'section' => 'ocean_section_breadcrumb_trail_settings',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_breadcrumbs_seperator_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
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

					'ocean_divider_after_breadcrumbs_separator_color' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_section_breadcrumb_trail_settings',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_breadcrumb_show_title' => [
                        'type' => 'ocean-switch',
                        'label' => esc_html__('Display Item Title', 'oceanwp'),
                        'section' => 'ocean_section_breadcrumb_trail_settings',
                        'default'  => true,
                        'transport' => 'refresh',
                        'priority' => 10,
                        'hideLabel' => false,
                        'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
                    ],
				]
			],

			'ocean_spacer_after_breadcrumb_trail_settings_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_homepage_settings' => [
				'type' => 'section',
				'title' => esc_html__('Breadcrumbs Homepage Settings', 'oceanwp'),
				'section' => 'ocean_section_page_breadcrumb',
				'after' => 'ocean_spacer_after_breadcrumb_trail_settings_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_breadcrumb_home_item' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__('Display Home as Icon / Text', 'oceanwp'),
						'section' => 'ocean_section_breadcrumb_homepage_settings',
						'default'  => 'icon',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
						'choices' => [
							'icon' => [
								'id'     => 'icon',
								'label'   => esc_html__('Icon', 'oceanwp'),
								'content' => 'Icon'
							],
							'text'  => [
								'id'     => 'text',
								'label'   => esc_html__('Text', 'oceanwp'),
								'content' => 'Text'
							]
						]
					],

					'ocean_breadcrumb_translation_home' => [
						'label'    => esc_html__( 'Homepage Custom Text', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_section_breadcrumb_homepage_settings',
						'transport' => 'postMessage',
						'default' => esc_html__( 'Home', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					],
				]
			],

			'ocean_spacer_after_breadcrumb_homepage_settings_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_custom_text' => [
				'type' => 'section',
				'title' => esc_html__('Breadcrumbs Custom Texts', 'oceanwp'),
				'section' => 'ocean_section_page_breadcrumb',
				'after' => 'ocean_spacer_after_breadcrumb_homepage_settings_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_breadcrumb_translation_error' => [
						'label'    => esc_html__( 'Custom Text: 404 Not Found', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_section_breadcrumb_custom_text',
						'transport' => 'postMessage',
						'default' => esc_html__( '404 Not Found', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					],

					'ocean_breadcrumb_translation_search' => [
						'label'    => esc_html__( 'Custom Text: Search results for', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_section_breadcrumb_custom_text',
						'transport' => 'postMessage',
						'default' => esc_html__( 'Search results for', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
					],
				]
			],

			'ocean_spacer_after_breadcrumb_custom_text_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_section_breadcrumb_taxonomy_setting' => [
				'type' => 'section',
				'title' => esc_html__('Breadcrumbs Taxonomy Settings', 'oceanwp'),
				'section' => 'ocean_section_page_breadcrumb',
				'after' => 'ocean_spacer_after_breadcrumb_custom_text_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_breadcrumb_posts_taxonomy' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Posts Taxonomy', 'oceanwp' ),
						'section' => 'ocean_section_breadcrumb_taxonomy_setting',
						'transport' => 'refresh',
						'default' => 'category',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
						'choices' => [
							'none'     => esc_html__( 'None', 'oceanwp' ),
							'category' => esc_html__( 'Category', 'oceanwp' ),
							'post_tag' => esc_html__( 'Tag', 'oceanwp' ),
							'blog'     => esc_html__( 'Blog Page', 'oceanwp' ),
						],
					],

					'ocean_breadcrumb_products_taxonomy' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Products Taxonomy', 'oceanwp' ),
						'section' => 'ocean_section_breadcrumb_taxonomy_setting',
						'transport' => 'refresh',
						'default' => 'shop',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
						'choices' => [
							'none'        => esc_html__( 'None', 'oceanwp' ),
							'product_cat' => esc_html__( 'Category', 'oceanwp' ),
							'product_tag' => esc_html__( 'Tag', 'oceanwp' ),
							'shop'        => esc_html__( 'Shop Page', 'oceanwp' ),
						],
					],

					'ocean_breadcrumb_portfolio_taxonomy' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Portfolio Taxonomy', 'oceanwp' ),
						'section' => 'ocean_section_breadcrumb_taxonomy_setting',
						'transport' => 'refresh',
						'default' => 'ocean_portfolio_category',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_is_active_breadcrumb_portfolio_callback',
						'choices' => [
							'none'                     => esc_html__( 'None', 'oceanwp' ),
							'ocean_portfolio_category' => esc_html__( 'Category', 'oceanwp' ),
							'ocean_portfolio_tag'      => esc_html__( 'Tag', 'oceanwp' ),
							'portfolio'                => esc_html__( 'Portfolio Page', 'oceanwp' ),
						],
					],
				]
			],

			'ocean_divider_after_breadcrumb_taxonomy_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 10,
				'active_callback' => 'oceanwp_is_active_breadcrumb_callback',
			],

			'ocean_breadcrumb_whatnext_links' => [
				'type' => 'ocean-links',
				'label' => esc_html__('What to do next?', 'oceanwp' ),
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
				'class' => 'whatnext',
				'linkIcon' => 'link-2',
				'titleIcon' => 'next-step',
				'active_callback' => 'ocean_is_oe_active',
				'links' => [
					'style_page_title' => [
						'label' => esc_html__('Style Page Title.', 'oceanwp'),
						'url' => '#'
					],
					'seo_settings' => [
						'label' => esc_html__('View SEO Settings.', 'oceanwp'),
						'url' => '#'
					],
				]
			],

			'ocean_breadcrumbs_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_section_page_breadcrumb',
				'transport' => 'postMessage',
				'priority' => 10,
			]
		]
	],

	'ocean_divider_after_page_breadcrumb_did_you_know' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10,
	],

	'ocean_section_page_search_result' => [
		'type' => 'section',
		'title' => esc_html__('Search Results Page', 'oceanwp'),
		'section' => 'ocean_site_page_settings',
		'after' => 'ocean_divider_after_page_breadcrumb_did_you_know',
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
				'choices' => [
					'right-sidebar' => [
						'label'   => esc_html__( 'Right Sidebar', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('right-sidebar-default'),
						'active'  => oceanwp_customizer_print_svg('right-sidebar-active'),
					],
					'left-sidebar'  => [
						'label'   => esc_html__( 'Left Sidebar', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('left-sidebar-default'),
						'active'  => oceanwp_customizer_print_svg('left-sidebar-active'),
					],
					'full-width'    => [
						'label'   => esc_html__( 'Full Width', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('full_width-no_sidebar-default'),
						'active'  => oceanwp_customizer_print_svg('full_width-no_sidebar-active'),
					],
					'full-screen'   => [
						'label'   => esc_html__( '100% Full Width', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('fullscreen_width-default'),
						'active'  => oceanwp_customizer_print_svg('fullscreen_width-active'),
					],
					'both-sidebars' => [
						'label'   => esc_html__( 'Both Sidebar', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('both_sidebar_layout-default'),
						'active'  => oceanwp_customizer_print_svg('both_sidebar_layout-active'),
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
				'title' => esc_html__('Sidebar Layout Settings', 'oceanwp'),
				'section' => 'ocean_section_page_search_result',
				'after' => 'ocean_divider_after_search_result_layout',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_desc_for_page_search_result_sidebar_layout' => [
						'type' => 'ocean-content',
						'isContent' => esc_html__('If you are using any of the sidebar layouts, additional options will appear here.', 'oceanwp'),
						'section' => 'ocean_section_page_search_result_sidebar_layout',
						'class' => 'description',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_search_custom_sidebar' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Enable Custom Sidebar', 'oceanwp'),
						'section' => 'ocean_section_page_search_result_sidebar_layout',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_search_result_layout'
					],

					'ocean_search_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Both Sidebars: Content Order Style', 'oceanwp' ),
						'section' => 'ocean_section_page_search_result_sidebar_layout',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanw_cac_is_search_bs_layout',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_search_both_sidebars_content_width' => [
						'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_section_page_search_result_sidebar_layout',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanw_cac_is_search_bs_layout',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_search_both_sidebars_content_width',
								'label' => 'Desktop',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_search_both_sidebars_content_width_unit',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_search_both_sidebars_sidebars_width' => [
						'label'       => esc_html__( 'Both Sidebars: Sidebars Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_section_page_search_result_sidebar_layout',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanw_cac_is_search_bs_layout',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_search_both_sidebars_sidebars_width',
								'label' => 'Desktop',
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_search_both_sidebars_sidebars_width_unit',
								'label' => 'Unit',
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_search_sidebar_order' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Mobile Sidebar Order', 'oceanwp' ),
						'section' => 'ocean_section_page_search_result_sidebar_layout',
						'transport' => 'refresh',
						'default' => 'content-sidebar',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanw_cac_is_search_rs_layout',
						'choices' => [
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						],
					],
				]
			],

			'ocean_divider_after_search_page_sidebar_layout_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_search_result',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 10
			],

			'ocean_menu_search_source' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Select Source for SERP', 'oceanwp' ),
				'section' => 'ocean_section_page_search_result',
				'transport' => 'refresh',
				'default' => 'any',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'choices' => ocean_customizer_get_post_types(),
			],

			'ocean_search_post_per_page' => [
				'label'       => esc_html__( 'Number of Search Results to Display per Page', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_section_page_search_result',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanw_cac_is_search_bs_layout',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_search_post_per_page',
						'label' => 'Desktop',
						'attr' => [
							'transport' => 'refresh',
						],
					]
				],
			],

			'ocean_divider_after_search_post_per_page' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_search_result',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 10
			],

			'ocean_search_logo' => [
				'label' => esc_html__( 'Choose Logo', 'oceanwp' ),
				'desc' => esc_html__( 'Select a search result page logo.', 'oceanwp' ),
				'type' => 'ocean-image',
				'section'  => 'ocean_section_page_search_result',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'mediaType' => 'image',
			],
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
		'title' => esc_html__('404 Error Page', 'oceanwp'),
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
				'choices' => [
					'right-sidebar' => [
						'label'   => esc_html__( 'Right Sidebar', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('right-sidebar-default'),
						'active'  => oceanwp_customizer_print_svg('right-sidebar-active'),
					],
					'left-sidebar'  => [
						'label'   => esc_html__( 'Left Sidebar', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('left-sidebar-default'),
						'active'  => oceanwp_customizer_print_svg('left-sidebar-active'),
					],
					'full-width'    => [
						'label'   => esc_html__( 'Full Width', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('full_width-no_sidebar-default'),
						'active'  => oceanwp_customizer_print_svg('full_width-no_sidebar-active'),
					],
					'full-screen'   => [
						'label'   => esc_html__( '100% Full Width', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('fullscreen_width-default'),
						'active'  => oceanwp_customizer_print_svg('fullscreen_width-active'),
					],
					'both-sidebars' => [
						'label'   => esc_html__( 'Both Sidebar', 'oceanwp' ),
						'default' => oceanwp_customizer_print_svg('both_sidebar_layout-default'),
						'active'  => oceanwp_customizer_print_svg('both_sidebar_layout-active'),
					]
				]
			],

			'ocean_divider_after_404_error_layout' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_section_page_404_error',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_404_logo' => [
				'label' => esc_html__( 'Choose Logo', 'oceanwp' ),
				'desc' => esc_html__( 'Select a 404 error page logo.', 'oceanwp' ),
				'type' => 'ocean-image',
				'section'  => 'ocean_section_page_404_error',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'mediaType' => 'image',
			],

			'ocean_error_page_blank' => [
                'id' => 'ocean_error_page_blank',
                'type' => 'ocean-buttons',
                'label' => esc_html__('Blank Page', 'oceanwp'),
				'desc' => esc_html__( 'Enable this option to remove all the elements and have full control of the 404 error page.','oceanwp' ),
                'section' => 'ocean_section_page_404_error',
                'default'  => 'off',
                'transport' => 'refresh',
                'priority' => 10,
                'hideLabel' => false,
                'wrap'    => false,
                'choices' => [
                    'on' => [
                        'id'     => 'on',
                        'label'   => esc_html__('On', 'oceanwp'),
                        'content' => esc_html__('On', 'oceanwp'),
                    ],
                    'off'  => [
                        'id'     => 'off',
                        'label'   => esc_html__('Off', 'oceanwp'),
                        'content' => esc_html__('Off', 'oceanwp'),
                    ]
                ]
            ],

			'ocean_error_page_template' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Select Template', 'oceanwp' ),
				'desc' => esc_html__('Select a custom template you created in OceanWP > My Library that will replace the default 404 error page.', 'oceanwp'),
				'section' => 'ocean_section_page_404_error',
				'transport' => 'refresh',
				'default' => '0',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'choices' => oceanwp_library_template_choices(),
			],
		]
	],

	'ocean_divider_after_page_404_error_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 20,
		'bottom' => 10,
		'active_callback' => 'ocean_is_oe_active',
	],

	'ocean_page_settings_whatnext_links' => [
		'type' => 'ocean-links',
		'label' => esc_html__('What to do next?', 'oceanwp' ),
		'section' => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'class' => 'whatnext',
		'linkIcon' => 'link-2',
		'titleIcon' => 'next-step',
		'active_callback' => 'ocean_is_oe_active',
		'links' => [
			'style_search_result' => [
				'label' => esc_html__('Style the Search Results Page.', 'oceanwp'),
				'url' => '#'
			],
			'style_404' => [
				'label' => esc_html__('Style 404 page.', 'oceanwp'),
				'url' => '#'
			],
			'seo_settings' => [
				'label' => esc_html__('View SEO Settings.', 'oceanwp'),
				'url' => '#'
			],
		]
	],

	'ocean_page_settings_need_help' => [
		'type' => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
		'class' => 'need-help',
		'section' => 'ocean_site_page_settings',
		'transport' => 'postMessage',
		'priority' => 10,
	],

];
