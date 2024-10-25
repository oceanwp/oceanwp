<?php
/**
 * OceanWP Customizer Settings: Header
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_spacer_for_header_general_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_header',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	'ocean_header_general_section' => [
		'type' => 'section',
		'title' => esc_html__( 'General', 'oceanwp' ),
		'section' => 'ocean_header',
		'after' => 'ocean_spacer_for_header_general_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_header_style' => [
				'type' => 'ocean-radio-image',
				'label' => esc_html__( 'Header Type', 'oceanwp' ),
				'section' => 'ocean_header_general_section',
				'transport' => 'refresh',
				'default' => 'minimal',
				'priority' => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'minimal' => [
						'label'   => esc_html__( 'Minimal', 'oceanwp' ),
						'icon' => 'header_type_minimal_style',
					],
					'transparent' => [
						'label'   => esc_html__( 'Transparent', 'oceanwp' ),
						'icon' => 'header_type_transparent_style',
					],
					'top' => [
						'label'   => esc_html__( 'Top Menu', 'oceanwp' ),
						'icon' => 'header_type_topmenu_style',
					],
					'full_screen' => [
						'label'   => esc_html__( 'Full Screen', 'oceanwp' ),
						'icon' => 'header_type_fullscreen_style',
					],
					'center' => [
						'label'   => esc_html__( 'Center Header', 'oceanwp' ),
						'icon' => 'header_type_center_style',
					],
					'medium' => [
						'label'   => esc_html__( 'Medium Header', 'oceanwp' ),
						'icon' => 'header_type_medium_style',
					],
					'vertical' => [
						'label'   => esc_html__( 'Vertical Header', 'oceanwp' ),
						'icon' => 'header_type_vertical_style',
					],
					'custom' => [
						'label' => esc_html__( 'Custom Header', 'oceanwp' ),
						'icon' => 'header_type_custom_style',
					]
				],
			],

			'ocean_divider_after_header_style_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_custom_header_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Custom Header Settings', 'oceanwp' ),
				'section' => 'ocean_header_general_section',
				'after' => 'ocean_divider_after_header_style_setting',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_desc_for_custom_header_settings' => [
						'type' => 'ocean-content',
						'isContent' => esc_html__( 'If you select the Custom Header Type, additional options and settings will appear here.', 'oceanwp' ),
						'section' => 'ocean_custom_header_section',
						'class' => 'description',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_add_custom_header_container' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Add Container', 'oceanwp' ),
						'section' => 'ocean_custom_header_section',
						'default'  => true,
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_custom',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_header_template' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Select Template', 'oceanwp' ),
						'desc'              => esc_html__( 'Choose a template you created in OceanWP > My Library', 'oceanwp' ),
						'section'           => 'ocean_custom_header_section',
						'transport'         => 'refresh',
						'default'           => '0',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'ocean_cac_header_custom',
						'choices'           => oceanwp_library_template_choices(),
						'sanitize_callback' => 'sanitize_key',
					],

					'ocean_header_custom_header_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Custom-Header-Settings-Az_fG/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_custom_header_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_title_for_header_default_styling_sections' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Default Header Options', 'oceanwp' ),
				'section' => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_header_height' => [
				'id'      => 'ocean_header_height',
				'label'    => esc_html__( 'Height', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 200,
				'step'         => 1,
				'bottom'            => 25,
				'active_callback'   => 'ocean_cac_header_not_custom_and_vertical',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id'    => 'ocean_header_height',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr'  => [
							'transport' => 'postMessage',
							'default'   => 74,
						],
					],
					'unit' => [
						'id' => 'ocean_header_height_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'#site-logo #site-logo-inner,.oceanwp-social-menu .social-menu-inner,#site-header.full_screen-header .menu-bar-inner, .after-header-content .after-header-content-inner' => ['height'],
					'#site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a, .after-header-content-inner > a' => ['line-height']
				]
			],

			'ocean_header_padding' => [
				'id' => 'ocean_header_padding',
				'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'padding',
				'active_callback' => 'ocean_cac_header_not_medium_and_vertical',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_header_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_header_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_header_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_header_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_header_tablet_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_header_tablet_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_header_tablet_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_header_tablet_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_header_mobile_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_header_mobile_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_header_mobile_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_header_mobile_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => '#site-header-inner',
					'property' => 'padding'
				],
			],

			'ocean_divider_after_header_padding' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 5,
			],

			'ocean_header_full_width' => [
				'type' => 'ocean-switch',
				'label' => esc_html__( 'Full Width', 'oceanwp' ),
				'section' => 'ocean_header_general_section',
				'default'  => false,
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'active_callback' => 'ocean_cac_header_not_medium_and_vertical',
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_has_header_border_bottom' => [
				'type' => 'ocean-switch',
				'label' => esc_html__( 'Border Bottom', 'oceanwp' ),
				'section' => 'ocean_header_general_section',
				'default'  => true,
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'active_callback' => 'ocean_cac_header_not_vertical',
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_header_border_bottom' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
			],

			'ocean_header_additional_styling_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Additional Styling & Settings', 'oceanwp' ),
				'section' => 'ocean_header_general_section',
				'after' => 'ocean_divider_after_header_border_bottom',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_desc_for_additional_styling_settings' => [
						'type' => 'ocean-content',
						'isContent' => esc_html__( 'Additional settings are currently available for the Top Menu, Full Screen, Center, and Medium Header types.', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'class' => 'description',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_title_for_top_menu_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Top Menu Header Settings', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_top_menu',
					],

					'ocean_top_header_menu_position' => [
						'type' => 'ocean-select',
						'label' => esc_html__( 'Menu Position', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'refresh',
						'default' => 'before',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'ocean_cac_header_top_menu',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'before' => esc_html__( 'Before The Logo', 'oceanwp' ),
							'after'  => esc_html__( 'After The Logo', 'oceanwp' ),
						]
					],

					'ocean_title_for_fullscreen_menu_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Full Screen Header Settings', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_full_screen',
					],

					'ocean_full_screen_header_transparent' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Add Transparent Header', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_full_screen_header_hamburger_icon_width' => [
						'id'      => 'ocean_full_screen_header_hamburger_icon_width',
						'label'    => esc_html__( 'Hamburger Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_full_screen_header_hamburger_icon_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 23,
								],
							],
							'unit' => [
								'id' => 'ocean_full_screen_header_hamburger_icon_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after' => ['width']
						]
					],

					'ocean_full_screen_header_hamburger_icon_height' => [
						'id'      => 'ocean_full_screen_header_hamburger_icon_height',
						'label'    => esc_html__( 'Hamburger Bars Height', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 10,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_full_screen_header_hamburger_icon_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 2,
								],
							],
							'unit' => [
								'id' => 'ocean_full_screen_header_hamburger_icon_height_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after' => ['height']
						]
					],

					'ocean_full_screen_header_hamburger_icon_gap' => [
						'id'      => 'ocean_full_screen_header_hamburger_icon_gap',
						'label'    => esc_html__( 'Hamburger Bars Gap', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 25,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_full_screen_header_hamburger_icon_gap',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 8,
								],
							],
							'unit' => [
								'id' => 'ocean_full_screen_header_hamburger_icon_gap_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
					],

					'ocean_divider_after_fullscreen_hamburger_icon_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_full_screen',
					],

					'ocean_full_screen_header_logo' => [
						'label' => esc_html__( 'Logo (optional)', 'oceanwp' ),
						'desc' => esc_html__( 'Select a custom logo to display inside the menu when it\'s open.', 'oceanwp' ),
						'type' => 'ocean-image',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'mediaType' => 'image',
						'savetype' => 'url',
						'active_callback' => 'ocean_cac_header_full_screen',
					],

					'ocean_full_screen_header_retina_logo' => [
						'label' => esc_html__( 'Retina Logo (optional)', 'oceanwp' ),
						'desc' => esc_html__( 'Select a custom retina logo to display inside the menu when it\'s open.', 'oceanwp' ),
						'type' => 'ocean-image',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'mediaType' => 'image',
						'savetype' => 'url',
						'active_callback' => 'ocean_cac_header_full_screen',
					],

					'ocean_title_for_center_header_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Center Header Settings', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_center_style',
					],

					'ocean_center_header_transparent' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Add Transparent Header', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_center_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_center_header_transparent_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_center_style',
					],

					'ocean_center_header_left_menu' => [
						'type' => 'ocean-select',
						'label' => esc_html__( 'Left Menu', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'refresh',
						'default' => '0',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'ocean_cac_header_center_style',
						'choices' => oceanwp_get_menu_choices(),
						'sanitize_callback' => 'sanitize_key',
					],

					'ocean_center_header_menu_position' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Menu Position', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => 'centered',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'ocean_cac_header_center_style',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'wider' => [
								'id'     => 'wider',
								'label'   => esc_html__( 'Wider', 'oceanwp' ),
								'content' => esc_html__( 'Wider', 'oceanwp' ),
							],
							'centered'  => [
								'id'     => 'centered',
								'label'   => esc_html__( 'Centered', 'oceanwp' ),
								'content' => esc_html__( 'Centered', 'oceanwp' ),
							],
							'closer'  => [
								'id'     => 'closer',
								'label'   => esc_html__( 'Closer', 'oceanwp' ),
								'content' => esc_html__( 'Closer', 'oceanwp' ),
							]
						]
					],

					'ocean_title_for_medium_header_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Medium Header Settings', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_medium_style',
					],

					'ocean_medium_header_transparent' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Add Transparent Header', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_title_for_medium_header_top_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Medium Header Top', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 20,
						'active_callback' => 'ocean_cac_header_medium_style',
					],

					'ocean_medium_header_top_header_elements' => [
						'label' => esc_html__( 'Elements Positioning', 'oceanwp' ),
						'type' => 'ocean-sortable',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'refresh',
						'priority' => 20,
						'default'  => [ 'searchfrom', 'logo', 'social' ],
						'active_callback' => 'ocean_cac_header_medium_style',
						'hideLabel' => false,
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
						'choices' => [
							'searchfrom' => esc_html__( 'Search Form', 'oceanwp' ),
							'logo' => esc_html__( 'Logo', 'oceanwp' ),
							'social' => esc_html__( 'Social Buttons', 'oceanwp' ),
						],
					],

					'ocean_medium_header_top_header_padding' => [
						'id' => 'ocean_medium_header_top_header_padding',
						'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 20,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'active_callback' => 'ocean_cac_header_medium_style',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_medium_header_top_header_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 30,
								],
							],
							'spacingRight' => [
								'id' => 'ocean_medium_header_top_header_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_medium_header_top_header_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 30,
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_medium_header_top_header_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_medium_header_top_header_tablet_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_medium_header_top_header_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_medium_header_top_header_tablet_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_medium_header_top_header_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_medium_header_top_header_mobile_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_medium_header_top_header_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_medium_header_top_header_mobile_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_medium_header_top_header_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '#site-header.medium-header .top-header-wrap',
							'property' => 'padding'
						],
					],

					'ocean_title_for_medium_header_menu_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Medium Header Menu', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 30,
						'active_callback' => 'ocean_cac_header_medium_style',
					],

					'ocean_medium_header_menu_position' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Menus Position', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => 'center-menu',
						'transport' => 'postMessage',
						'priority' => 30,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'left-menu' => [
								'id'     => 'left-menu',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'center-menu'  => [
								'id'     => 'center-menu',
								'label'   => esc_html__( 'Center', 'oceanwp' ),
								'content' => esc_html__( 'Center', 'oceanwp' ),
							],
							'right-menu'  => [
								'id'     => 'right-menu',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						]
					],

					'ocean_medium_header_menu_height' => [
						'id'      => 'ocean_medium_header_menu_height',
						'label'    => esc_html__( 'Height', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 30,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 150,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_medium_header_menu_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 60,
								],
							],
							'unit' => [
								'id' => 'ocean_medium_header_menu_height_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header .oceanwp-mobile-menu-icon a' => ['line-height']
						]
					],

					'ocean_medium_header_menu_items_padding' => [
						'id' => 'ocean_medium_header_menu_items_padding',
						'label'    => esc_html__( 'Menu Items Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 30,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'isTop'        => false,
						'isBottom'     => false,
						'active_callback' => 'ocean_cac_header_medium_style',
						'setting_args' => [
							'spacingRight' => [
								'id' => 'ocean_medium_header_menu_items_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 22,
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_medium_header_menu_items_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 22,
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_medium_header_menu_items_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_medium_header_menu_items_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_medium_header_menu_items_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_medium_header_menu_items_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a',
							'property' => 'padding'
						],
					],

					'ocean_title_for_vertical_header_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Vertical Header Settings', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_transparent' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Add Transparent Header', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 40,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_vertical_header_shadow' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Add Header Shadow', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => true,
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_vertical_header_shadow_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_closed' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Closed Header', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => false,
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_vertical_header_collapse_width' => [
						'label'    => esc_html__( 'Collapse Width (px)', 'oceanwp' ),
						'desc'     => esc_html__( 'Add a screen width at which the open Vertical Header should close itself. The lower the value, the sooner the Vertical Header will get closed', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 959,
						'max'          => 3000,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_vertical_header_collapse_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 1280,
								],
							]
						]
					],

					'ocean_divider_after_vertical_header_collapse_width_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_position' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Position', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => 'left-header',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'left-header' => [
								'id'     => 'left-header',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'right-header'  => [
								'id'     => 'right-header',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						]
					],

					'ocean_vertical_header_width' => [
						'label'    => esc_html__( 'Open Header Width (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 2000,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_vertical_header_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 300,
								],
							]
						]
					],

					'ocean_vertical_header_inner_padding' => [
						'label'    => esc_html__( 'Open Header Inner Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'active_callback' => 'ocean_cac_header_vertical_style',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_vertical_header_inner_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 30,
								],
							],
							'spacingRight' => [
								'id' => 'ocean_vertical_header_inner_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_vertical_header_inner_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 30,
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_vertical_header_inner_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 30,
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_vertical_header_inner_tablet_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 30,
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_vertical_header_inner_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_vertical_header_inner_tablet_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_vertical_header_inner_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_vertical_header_inner_mobile_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_vertical_header_inner_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_vertical_header_inner_mobile_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_vertical_header_inner_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_vertical_header_inner_padding_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_logo_position' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Logo Position', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => 'center-logo',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'left-logo' => [
								'id'     => 'left-logo',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'center-logo'  => [
								'id'     => 'center-logo',
								'label'   => esc_html__( 'Center', 'oceanwp' ),
								'content' => esc_html__( 'Center', 'oceanwp' ),
							],
							'right-logo'  => [
								'id'     => 'right-logo',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						]
					],

					'ocean_divider_after_vertical_header_logo_position_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_menu_items_padding' => [
						'id' => 'ocean_vertical_header_menu_items_padding',
						'label'    => esc_html__( 'Spacing Between Menu Items (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_vertical_header_menu_items_padding',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 17,
								],
							]
						],
						'preview' => 'queryWithType',
						'css' => [
							'#site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a' => ['padding-top', 'padding-bottom'],
						]
					],

					'ocean_vertical_header_dropdown_target' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Submenus Dropdown Target', 'oceanwp' ),
						'desc' => esc_html__( 'Description: Choose what the user should click to reveal the submenu options. If you want the main menu item to be clickable too, choose the Icon option.', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => 'link',
						'transport' => 'refresh',
						'priority' => 40,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'icon' => [
								'id'     => 'icon',
								'label'   => esc_html__( 'Icon', 'oceanwp' ),
								'content' => esc_html__( 'Icon', 'oceanwp' ),
							],
							'link'  => [
								'id'     => 'link',
								'label'   => esc_html__( 'Link', 'oceanwp' ),
								'content' => esc_html__( 'Link', 'oceanwp' ),
							]
						]
					],

					'ocean_divider_after_vertical_header_dropdown_target_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_search_form' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Display Search Form', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 40,
						'hideLabel' => false,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_vertical_header_search_border_width' => [
						'id'      => 'ocean_vertical_header_search_border_width',
						'label'    => esc_html__( 'Search Form Border Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 20,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_vertical_header_search_border_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_vertical_header_search_border_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'#site-header.vertical-header #vertical-searchform form input' => ['border-width']
						]
					],

					'ocean_vertical_header_search_border_radius' => [
						'id'      => 'ocean_vertical_header_search_border_radius',
						'label'    => esc_html__( 'Search Form Border Radius', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 20,
						'step'         => 1,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_vertical_header_search_border_radius',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_vertical_header_search_border_radius_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'#site-header.vertical-header #vertical-searchform form input, #site-header.vertical-header #vertical-searchform form .search-bg' => ['border-radius']
						]
					],

					'ocean_divider_after_vertical_header_search_form_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 40,
						'top' => 10,
						'bottom' => 20,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_custom_vertical_header_section' => [
						'type' => 'section',
						'title' => esc_html__( 'Custom Vertical Header', 'oceanwp' ),
						'section' => 'ocean_header_additional_styling_section',
						'after' => 'ocean_divider_after_vertical_header_search_form_settings',
						'class' => 'section-site-layout',
						'priority' => 50,
						'options' => [
							'ocean_vertical_header_template' => [
								'type' => 'ocean-select',
								'label' => esc_html__( 'Select Vertical Top Template', 'oceanwp' ),
								'desc' => esc_html__( 'Select a template made in OceanWP > My Library to replace the top part of the Vertical Header (logo, navigation and search).', 'oceanwp' ),
								'section' => 'ocean_custom_vertical_header_section',
								'transport' => 'refresh',
								'default' => '0',
								'priority' => 50,
								'hideLabel' => false,
								'multiple' => false,
								'active_callback' => 'ocean_cac_header_vertical_style',
								'sanitize_callback' => 'sanitize_key',
								'choices' => oceanwp_library_template_choices(),
							],

							'ocean_divider_after_custom_vertical_header_top_selection_settings' => [
								'type' => 'ocean-divider',
								'section' => 'ocean_custom_vertical_header_section',
								'transport' => 'postMessage',
								'priority' => 50,
								'top' => 20,
								'bottom' => 20,
								'active_callback' => 'ocean_cac_header_vertical_style',
							],

							'ocean_vertical_header_bottom_template' => [
								'type'              => 'ocean-select',
								'label'             => esc_html__( 'Select Vertical Bottom Template', 'oceanwp' ),
								'desc'              => esc_html__( 'Select a template made in OceanWP > My Library to replace the bottom part of the Vertical Header.', 'oceanwp' ),
								'section'           => 'ocean_custom_vertical_header_section',
								'transport'         => 'refresh',
								'default'           => '0',
								'priority'          => 50,
								'hideLabel'         => false,
								'multiple'          => false,
								'active_callback'   => 'ocean_cac_header_vertical_style',
								'sanitize_callback' => 'sanitize_key',
								'choices'           => oceanwp_library_template_choices(),
							],
						]
					],

					'ocean_header_additional_styling_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Additional-Styling--Settings-SYH0o/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_additional_styling_section',
						'transport' => 'postMessage',
						'priority'  => 60,
					]
				]
			],

			'ocean_divider_after_header_additional_styling_section' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			],

			'ocean_header_colors_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Colors', 'oceanwp' ),
				'section' => 'ocean_header_general_section',
				'after' => 'ocean_divider_after_header_additional_styling_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_header_background_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Header Background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'active_callabck' => 'oceanwp_cac_hasnt_medium_or_transparent_header_styles',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_header_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header,.has-transparent-header .is-sticky #site-header,.has-vh-transparent .is-sticky #site-header.vertical-header,#searchform-header-replace' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_header_border_bottom_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Bottom Border', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_header_border_bottom',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f1f1f1',
								],
							],
						]
					],

					'ocean_title_for_transparent_header_color_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Transparent Header Colors', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_transparent_style',
					],

					'ocean_transparent_header_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Transparent Header Background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_transparent_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_transparent_header_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.transparent-header' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage'
								],
							],
						]
					],

					'ocean_title_for_top_menu_header_color_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Top Menu Header Colors', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_top_menu',
					],

					'ocean_top_header_menu_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Menu background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_top_menu',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_top_header_menu_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.top-header .header-top,#site-header.top-header #searchform-header-replace' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_top_header_search_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search button color', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_top_menu',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_top_header_search_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.top-header #search-toggle a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_top_header_search_button_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.top-header #search-toggle a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
						]
					],

					'ocean_top_header_search_button_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search button border color', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_top_menu',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_top_header_search_button_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.top-header #search-toggle' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f1f1f1',
								],
							],
						]
					],

					'ocean_title_for_fullscreen_header_color_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Full Screen Header Colors', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_full_screen',
					],

					'ocean_full_screen_header_menu_bar_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hamburger Icon', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_header_menu_bar_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_full_screen_header_menu_bar_close_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hamburger Close Icon', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_header_menu_bar_close_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .menu-bar.exit .ham:before,#site-header.full_screen-header .menu-bar.exit .ham:after' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_full_screen_header_links_bg_color_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Links Background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_header_links_bg_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu li a' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,0.9)',
								],
							],
							'hover' => [
								'id' => 'ocean_full_screen_header_links_hover_bg_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu li a:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_full_screen_header_links_color_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Links', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_header_links_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu li a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
							'hover' => [
								'id' => 'ocean_full_screen_header_links_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu li a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#929292'
								],
							]
						],

					],

					'ocean_divider_after_fullscreen_link_color_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_full_screen',
					],

					'ocean_full_screen_header_search_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Input', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_header_search_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input,#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li .search-text' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_full_screen_header_search_dashed_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Animated Dots ', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_header_search_dashed_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li .search-text i' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_full_screen_header_search_border_color_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Bottom Border', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_full_screen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_header_search_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#666666',
								],
							],
							'hover' => [
								'id' => 'ocean_full_screen_header_search_hover_border_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff'
								],
							],
							'focus' => [
								'id' => 'ocean_full_screen_header_search_focus_border_color',
								'key' => 'focus',
								'label' => esc_html__( 'Focus', 'oceanwp' ),
								'selector' => [
									'#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input:focus' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff'
								],
							]
						],
					],

					'ocean_title_for_medium_header_color_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Medium Header Colors', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_medium_style',
					],

					'ocean_medium_header_top_header_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_medium_header_top_header_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.medium-header .top-header-wrap,.is-sticky #site-header.medium-header.is-transparent .top-header-wrap,#searchform-header-replace' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_medium_header_menu_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Menu background Color', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_medium_header_menu_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.medium-header #site-navigation-wrap,#site-header.medium-header .oceanwp-mobile-menu-icon,.is-sticky #site-header.medium-header.is-transparent #site-navigation-wrap,.is-sticky #site-header.medium-header.is-transparent .oceanwp-mobile-menu-icon,#site-header.medium-header.is-transparent .is-sticky #site-navigation-wrap,#site-header.medium-header.is-transparent .is-sticky .oceanwp-mobile-menu-icon' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f9f9f9',
								],
							],
						]
					],

					'ocean_divider_after_medium_header_menu_color_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 20,
						'bottom' => 20,
						'active_callback' => 'ocean_cac_header_medium_style',
					],

					'ocean_medium_header_search_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_medium_header_search_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.medium-header #medium-searchform .search-bg' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f5f5f5',
								],
							],
						]
					],

					'ocean_medium_header_search_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Input', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_medium_header_search_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.medium-header #medium-searchform input' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_medium_header_search_placeholder_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Placeholder', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_medium_header_search_placeholder_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.medium-header #medium-searchform input::placeholder' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_medium_header_search_button_color_wrap' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Icon', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_medium_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_medium_header_search_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.medium-header #medium-searchform button' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_medium_header_search_button_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.medium-header #medium-searchform button:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0'
								],
							],
						]
					],

					'ocean_title_for_vertical_header_color_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Vertical Header Colors', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_hamburger_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hamburger Icon Color', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_hamburger_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.vertical-toggle .hamburger-inner, .vertical-toggle .hamburger-inner::before, .vertical-toggle .hamburger-inner::after' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#000000',
								],
							],
						]
					],

					'ocean_divider_after_vertical_header_menu_color_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_menu_items_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Menu Items Border', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_menu_items_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #site-navigation-wrap .dropdown-menu li, #site-header.vertical-header #site-navigation-wrap .dropdown-menu .sub-menu' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,0.05)',
								],
							],
						]
					],

					'ocean_vertical_header_sub_menu_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Submenu Background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_sub_menu_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #site-navigation-wrap .dropdown-menu .sub-menu' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,0.03)',
								],
							],
						]
					],

					'ocean_vertical_header_sub_menu_links_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Submenu Links', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_sub_menu_links_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header .dropdown-menu ul li a.menu-link' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_vertical_header_sub_menu_links_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header .dropdown-menu ul li a.menu-link:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#555555',
								],
							],
						]
					],

					'ocean_vertical_header_sub_menu_links_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Submenu Links Background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_sub_menu_links_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header .dropdown-menu ul li a.menu-link' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_vertical_header_sub_menu_links_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header .dropdown-menu ul li a.menu-link:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f8f8f8',
								],
							],
						]
					],

					'ocean_divider_after_vertical_header_submenu_color_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_header_vertical_style',
					],

					'ocean_vertical_header_search_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Background', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_search_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form .search-bg' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,0.03)',
								],
							],
						]
					],

					'ocean_vertical_header_search_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Input', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_search_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form input, #site-header.vertical-header #vertical-searchform form label' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_vertical_header_search_placeholder_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Placeholder', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_search_placeholder_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form input::placeholder' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_vertical_header_search_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Border', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_search_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form input' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,0.04)',
								],
							],
							'hover' => [
								'id' => 'ocean_vertical_header_search_hover_border_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form input:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'focus' => [
								'id' => 'ocean_vertical_header_search_focus_border_color',
								'key' => 'focus',
								'label' => esc_html__( 'Focus', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form input:focus' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						],
					],

					'ocean_vertical_header_search_btn_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Icon', 'oceanwp' ),
						'section' => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_vertical_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_vertical_header_search_btn_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form button' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#777777',
								],
							],
							'hover' => [
								'id' => 'ocean_vertical_header_search_btn_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#site-header.vertical-header #vertical-searchform form button:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_header_colors_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Colors-VLdZ2/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_colors_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_divider_after_header_colors_section' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			],

			'ocean_header_content_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Content', 'oceanwp' ),
				'section'  => 'ocean_header_general_section',
				'after'    => 'ocean_divider_after_header_colors_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_header_content_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'The Content option is supported by the Minimal and Transparent Header types. You can add text, HTML or shortcodes.', 'oceanwp' ),
						'section'   => 'ocean_header_content_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_after_header_content' => [
						'type'              => 'ocean-textarea',
						'label'             => esc_html__( 'Content After Header', 'oceanwp' ),
						'section'           => 'ocean_header_content_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_kses_post',
					],

					'ocean_header_content_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Content-ctTzG/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_content_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_header_general_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#General-Ludo_/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_header_general_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			]
		]
	],

	'ocean_title_for_header_logo_and_media_sections' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Logo & Media', 'oceanwp' ),
		'section'   => 'ocean_header',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 20,
		'bottom'    => 20,
	],

	'header_image' => [
		'type' => 'section',
		'title' => esc_html__( 'Header Media', 'oceanwp' ),
		'section' => 'ocean_header',
		'after' => 'ocean_title_for_header_logo_and_media_sections',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_divider_before_header_image_overlay_color_settings' => [
				'type' => 'ocean-divider',
				'section' => 'header_image',
				'transport' => 'postMessage',
				'top' => 10,
				'priority' => 40,
			],

			'ocean_header_image_overlay_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Overlay', 'oceanwp' ),
				'section' => 'header_image',
				'transport' => 'postMessage',
				'priority' => 40,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_header_image_overlay_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#site-header.has-header-media .overlay-header-media' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'rgba(0,0,0,0.3)',
						],
					],
				]
			],

			'ocean_divider_after_header_image_overlay_color_settings' => [
				'type' => 'ocean-divider',
				'section' => 'header_image',
				'transport' => 'postMessage',
				'top' => 10,
				'priority' => 40,
			],

			'ocean_header_image_position' => [
				'id' => 'ocean_header_image_position',
				'type' => 'ocean-select',
				'label' => esc_html__( 'Position', 'oceanwp' ),
				'section' => 'header_image',
				'transport' => 'postMessage',
				'default' => 'initial',
				'priority' => 40,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
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
					'selector' => '#site-header',
					'property' => 'background-position'
				]
			],

			'ocean_header_image_repeat' => [
				'id' => 'ocean_header_image_repeat',
				'type' => 'ocean-select',
				'label' => esc_html__( 'Repeat', 'oceanwp' ),
				'section' => 'header_image',
				'transport' => 'postMessage',
				'default' => 'initial',
				'priority' => 40,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'initial'   => esc_html__( 'Default', 'oceanwp' ),
					'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
					'repeat'    => esc_html__( 'Repeat', 'oceanwp' ),
					'repeat-x'  => esc_html__( 'Repeat-x', 'oceanwp' ),
					'repeat-y'  => esc_html__( 'Repeat-y', 'oceanwp' ),
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => '#site-header',
					'property' => 'background-repeat'
				]
			],

			'ocean_header_image_attachment' => [
				'id' => 'ocean_header_image_attachment',
				'type' => 'ocean-buttons',
				'label' => esc_html__( 'Attachment', 'oceanwp' ),
				'section' => 'header_image',
				'default'  => 'initial',
				'transport' => 'postMessage',
				'priority' => 40,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'initial' => [
						'id'     => 'initial',
						'label'   => esc_html__( 'Default', 'oceanwp' ),
						'content' => 'Default'
					],
					'scroll'  => [
						'id'     => 'scroll',
						'label'   => esc_html__( 'Scroll', 'oceanwp' ),
						'content' => 'Scroll'
					],
					'fixed'  => [
						'id'     => 'fixed',
						'label'   => esc_html__( 'Fixed', 'oceanwp' ),
						'content' => 'Fixed'
					]
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => '#site-header',
					'property' => 'background-attachment'
				]
			],

			'ocean_header_image_size' => [
				'id' => 'ocean_header_image_size',
				'type' => 'ocean-buttons',
				'label' => esc_html__( 'Size', 'oceanwp' ),
				'section' => 'header_image',
				'default'  => 'initial',
				'transport' => 'postMessage',
				'priority' => 40,
				'hideLabel' => false,
				'wrap'    => false,
				'active_callback' => 'oceanwp_is_bg_image_page_header',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'initial' => [
						'id'     => 'initial',
						'label'   => esc_html__( 'Default', 'oceanwp' ),
						'content' => 'Default'
					],
					'auto'  => [
						'id'     => 'auto',
						'label'   => esc_html__( 'Auto', 'oceanwp' ),
						'content' => 'Auto'
					],
					'cover'  => [
						'id'     => 'cover',
						'label'   => esc_html__( 'Cover', 'oceanwp' ),
						'content' => 'Cover'
					],
					'contain'  => [
						'id'     => 'contain',
						'label'   => esc_html__( 'Contain', 'oceanwp' ),
						'content' => 'Contain'
					]
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => '#site-header',
					'property' => 'background-size'
				]
			],

		]
	],

	'ocean_spacer_for_header_logo_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_header',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_header_logo_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Logo', 'oceanwp' ),
		'section' => 'ocean_header',
		'after' => 'ocean_spacer_for_header_logo_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_divider_after_header_logo_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority' => 40,
			],

			'ocean_retina_logo' => [
				'label' => esc_html__( 'Retina Logo', 'oceanwp' ),
				'desc' => esc_html__( 'Select a retina logo twice the normal logo size.', 'oceanwp' ),
				'type' => 'ocean-image',
				'section'  => 'ocean_header_logo_section',
				'transport' => 'refresh',
				'priority' => 40,
				'hideLabel' => false,
				'mediaType' => 'image',
				'savetype' => 'url',
			],

			'ocean_divider_after_header_retina_logo_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'top' => 40,
				'priority' => 40,
				'active_callback' => 'oceanwp_cac_custom_logo',
			],

			'ocean_logo_max_width' => [
				'id'      => 'ocean_logo_max_width',
				'label'    => esc_html__( 'Max Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority' => 40,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 0,
				'max'          => 500,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_custom_logo',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_logo_max_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'tablet' => [
						'id' => 'ocean_logo_max_width_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_logo_max_width_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_logo_max_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img' => ['max-width']
				]
			],

			'ocean_logo_max_height' => [
				'id'      => 'ocean_logo_max_height',
				'label'    => esc_html__( 'Max Height', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority' => 40,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 30,
				'max'          => 500,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_custom_logo',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_logo_max_height',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'tablet' => [
						'id' => 'ocean_logo_max_height_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_logo_max_height_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_logo_max_height_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'#site-header #site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img' => ['max-height']
				]
			],

			'ocean_title_for_logo_typography_and_color_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section' => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority' => 40,
				'top' => 20,
				'bottom' => 20,
				'active_callback' => 'oceanwp_cac_not_custom_logo',
			],

			'ocean_logo_typography' => [
				'id' => 'ocean_logo_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__( 'Textual Logo', 'oceanwp' ),
				'section' => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority' => 40,
				'hideLabel' => false,
				'selector' => '#site-logo a.site-logo-text',
				'active_callback' => 'oceanwp_cac_not_custom_logo',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'logo_typography[font-family]',
						'label' => esc_html__(esc_html__( 'Font Family', 'oceanwp' ), 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'logo_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'logo_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'logo_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'logo_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'logo_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 24
						],
					],
					'fontSizeTablet' => [
						'id' => 'logo_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'logo_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'logo_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'letterSpacing' => [
						'id' => 'logo_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id' => 'logo_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'logo_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'logo_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'logo_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1.8
						],
					],
					'lineHeightTablet' => [
						'id' => 'logo_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'logo_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'logo_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'logo_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'logo_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'logo_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'logo_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_divider_after_header_logo_typo_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority' => 40,
				'top' => 1,
				'bottom' => 10
			],

			'ocean_logo_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Textual Logo Color', 'oceanwp' ),
				'section' => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority' => 40,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'active_callback' => 'oceanwp_cac_not_custom_logo',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_logo_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#site-logo a.site-logo-text' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					],
					'hover' => [
						'id' => 'ocean_logo_hover_color',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#site-logo a.site-logo-text:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					],
				]
			],

			'ocean_header_logo_section_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Logo-9hk6s/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_header_logo_section',
				'transport' => 'postMessage',
				'priority'  => 40,
			]
		]
	],

	'ocean_title_for_header_menu_sections' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Menus', 'oceanwp' ),
		'section'   => 'ocean_header',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 20,
		'bottom' => 20,
	],

	'ocean_header_menu_section' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Menu', 'oceanwp' ),
		'section'  => 'ocean_header',
		'after'    => 'ocean_title_for_header_menu_sections',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_menu_position' => [
				'type'              => 'ocean-buttons',
				'label'             => esc_html__( 'Menu Position', 'oceanwp' ),
				'section'           => 'ocean_header_menu_section',
				'default'           => 'right-menu',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'wrap'              => false,
				'sanitize_callback' => 'sanitize_key',
				'active_callback'   => 'oceanwp_cac_hasnt_top_or_medium_header_styles',
				'choices'           => [
					'left-menu' => [
						'id'      => 'left-menu',
						'label'   => esc_html__( 'Left', 'oceanwp' ),
						'content' => esc_html__( 'Left', 'oceanwp' ),
					],
					'center-menu'  => [
						'id'      => 'center-menu',
						'label'   => esc_html__( 'Center', 'oceanwp' ),
						'content' => esc_html__( 'Center', 'oceanwp' ),
					],
					'right-menu'  => [
						'id'      => 'right-menu',
						'label'   => esc_html__( 'Right', 'oceanwp' ),
						'content' => esc_html__( 'Right', 'oceanwp' ),
					]
				]
			],

			'ocean_menu_links_effect' => [
				'type' => 'ocean-select',
				'label' => esc_html__( 'Link Effects', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'refresh',
				'default' => 'no',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'no'    => esc_html__( 'No Effect', 'oceanwp' ),
					'one'   => esc_html__( 'Underline From Left', 'oceanwp' ),
					'two'   => esc_html__( 'Underline Up', 'oceanwp' ),
					'three' => esc_html__( 'Underline Down', 'oceanwp' ),
					'four'  => esc_html__( 'Brackets', 'oceanwp' ),
					'five'  => esc_html__( 'Overline & Fixed Underline', 'oceanwp' ),
					'six'   => esc_html__( 'Circular Reveal', 'oceanwp' ),
					'seven' => esc_html__( 'Tripple Dot Under', 'oceanwp' ),
					'eight' => esc_html__( 'X Marks The Spot', 'oceanwp' ),
					'nine'  => esc_html__( 'Underline & Overline', 'oceanwp' ),
					'ten'   => esc_html__( 'Backlighting', 'oceanwp' ),
				]
			],

			'ocean_menu_links_effect_blue_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Links Effect Color', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'active_callback' => 'oceanwp_cac_menu_links_effect_blue',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_menu_links_effect_blue_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.effect-one #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-three #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-five #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-five #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-nine #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-nine #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after' => 'background-color',
							'.effect-four #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-four #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span:after' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					]
				]
			],

			'ocean_menu_links_effect_dark_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Links Effect Color', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'active_callback' => 'oceanwp_cac_menu_links_effect_dark',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_menu_links_effect_dark_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.effect-two #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-eight #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-eight #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after' => 'background-color',
							'.effect-six #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-six #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'rgba(0,0,0,0.1)',
						],
					]
				]
			],

			'ocean_menu_items_padding' => [
				'id'      => 'ocean_menu_items_padding',
				'label'    => esc_html__( 'Menu Items Left and Right Spacing', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 50,
				'step'         => 1,
				'top'               => 20,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id' => 'ocean_menu_items_padding',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 15,
						],
					],
					'unit' => [
						'id' => 'ocean_menu_items_padding_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'#site-navigation-wrap .dropdown-menu > li > a' => ['padding-left', 'padding-right'],
				]
			],

			'ocean_title_for_header_menu_typography_colors_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_menu_typography' => [
				'id' => 'ocean_menu_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__( 'Main Menu Item', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => '#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'menu_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'menu_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'menu_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'menu_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'menu_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'menu_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeTablet' => [
						'id' => 'menu_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'menu_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'menu_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'letterSpacing' => [
						'id' => 'menu_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id' => 'menu_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'menu_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'menu_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'menu_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightTablet' => [
						'id' => 'menu_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'menu_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'menu_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'menu_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'menu_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'menu_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'menu_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_divider_after_menu_typography_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 15,
			],

			'ocean_menu_link_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Links', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_menu_link_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#site-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a,#searchform-header-replace-close' => 'color',
							'#site-header #site-navigation-wrap .dropdown-menu > li > a .owp-icon use,.oceanwp-mobile-menu-icon a .owp-icon use,#searchform-header-replace-close .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#555555',
						],
					],
					'hover' => [
						'id' => 'ocean_menu_link_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#site-header #site-navigation-wrap .dropdown-menu > li > a:hover,.oceanwp-mobile-menu-icon a:hover,#searchform-header-replace-close:hover' => 'color',
							'#site-header #site-navigation-wrap .dropdown-menu > li > a:hover .owp-icon use,.oceanwp-mobile-menu-icon a:hover .owp-icon use,#searchform-header-replace-close:hover .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					],
				]
			],

			'ocean_menu_link_background' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Links: Background', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_menu_link_background',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#site-header #site-navigation-wrap .dropdown-menu > li > a' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'hover' => [
						'id' => 'ocean_menu_link_hover_background',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#site-header #site-navigation-wrap .dropdown-menu > li > a:hover,#site-navigation-wrap .dropdown-menu > li.sfHover > a' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_menu_link_color_active' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Current Menu: Link', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_menu_link_color_active',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#site-header #site-navigation-wrap .dropdown-menu > .current-menu-item > a,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a,#site-navigation-wrap .dropdown-menu > .current-menu-item > a:hover,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#555555',
						],
					]
				]
			],

			'ocean_menu_link_active_background' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Current Menu: Background', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_menu_link_active_background',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#site-header #site-navigation-wrap .dropdown-menu > .current-menu-item > a,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a,#site-navigation-wrap .dropdown-menu > .current-menu-item > a:hover,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a:hover' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_title_for_header_additional_menu_options' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Additional Menu Options', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_header_dropdown_menu_options_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Dropdown Menu Options', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'after' => 'ocean_title_for_header_additional_menu_options',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_menu_arrow_down' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Top Level Dropdown Icon', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_menu_arrow_side' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Second+ Level Dropdown Icon', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_menu_dropdown_top_border' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Dropdown Top Border', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'default'  => true,
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_menu_dropdown_top_border_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_dropdown_width' => [
						'id'      => 'ocean_dropdown_width',
						'label'    => esc_html__( 'Dropdown Panel Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 30,
						'max'          => 500,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_dropdown_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 180,
								],
							],
							'unit' => [
								'id' => 'ocean_dropdown_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.dropdown-menu .sub-menu' => ['min-width']
						]
					],

					'ocean_title_for_menu_dropdown_typography_and_colors_setting' => [
						'type' => 'ocean-title',
						'section' => 'ocean_header_dropdown_menu_options_section',
						'label' => esc_html__( 'Typograhpy and Colors', 'oceanwp' ),
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_menu_dropdown_typography' => [
						'id' => 'ocean_menu_dropdown_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__( 'Submenu Item', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'menu_dropdown_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'menu_dropdown_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'menu_dropdown_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'menu_dropdown_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'menu_dropdown_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'menu_dropdown_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 12
								],
							],
							'fontSizeTablet' => [
								'id' => 'menu_dropdown_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'menu_dropdown_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'menu_dropdown_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'menu_dropdown_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 0.6
								],
							],
							'letterSpacingTablet' => [
								'id' => 'menu_dropdown_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'menu_dropdown_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'menu_dropdown_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'menu_dropdown_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 1.2
								],
							],
							'lineHeightTablet' => [
								'id' => 'menu_dropdown_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'menu_dropdown_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'menu_dropdown_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'menu_dropdown_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'menu_dropdown_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'menu_dropdown_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'menu_dropdown_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_menu_dropdown_typography_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 10
					],

					'ocean_dropdown_menu_top_border' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Top Border', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_menu_top_border',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu .sub-menu,#searchform-dropdown,.current-shop-items-dropdown' => 'border-color',
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							]
						]
					],

					'ocean_divider_after_dropdown_menu_top_border_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 10
					],

					'ocean_dropdown_menu_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_menu_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu .sub-menu,#searchform-dropdown,.current-shop-items-dropdown' => 'background-color',
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							]
						]
					],

					'ocean_dropdown_menu_borders' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Borders Color', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_menu_borders',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu ul li.menu-item,.navigation > ul > li > ul.megamenu.sub-menu > li,.navigation .megamenu li ul.sub-menu' => 'border-color',
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f1f1f1',
								],
							]
						]
					],

					'ocean_divider_after_dropdown_menu_borders_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 10
					],

					'ocean_dropdown_menu_link_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Links', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_menu_link_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu ul li a.menu-link' => 'color',
									'.dropdown-menu ul li a.menu-link .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_dropdown_menu_link_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu ul li a.menu-link:hover' => 'color',
									'.dropdown-menu ul li a.menu-link:hover .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#555555',
								],
							]
						]
					],

					'ocean_dropdown_menu_link_hover_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Links Background Hover', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_menu_link_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu ul li a.menu-link:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f8f8f8',
								],
							]
						]
					],

					'ocean_divider_after_dropdown_menu_link_hover_bg_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_dropdown_menu_link_color_active' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Current Menu: Link', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_menu_link_color_active',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu ul > .current-menu-item > a.menu-link' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_dropdown_menu_link_bg_active' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Current Menu: Background', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_menu_link_bg_active',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.dropdown-menu ul > .current-menu-item > a.menu-link' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_title_for_header_dropdown_post_categories_section' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Post Categories Dropdown', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 20,
						'bottom' => 20
					],

					'ocean_dropdown_category_title_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Category Title: Background', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_category_title_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.navigation li.mega-cat .mega-cat-title' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f8f8f8',
								],
							]
						]
					],

					'ocean_dropdown_category_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Category Title: Name', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_category_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.navigation li.mega-cat .mega-cat-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#222222',
								],
							]
						]
					],

					'ocean_divider_after_dropdown_category_title_color_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 10
					],

					'ocean_dropdown_category_links_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Posts Links: Title', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_category_links_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.navigation li.mega-cat ul li .mega-post-title a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#555555',
								],
							],
							'hover' => [
								'id' => 'ocean_dropdown_category_links_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.navigation li.mega-cat ul li .mega-post-title a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_dropdown_category_date_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Posts Links: Date', 'oceanwp' ),
						'section' => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_dropdown_category_date_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.navigation li.mega-cat ul li .mega-post-date' => 'color',
									'.navigation li.mega-cat ul li .mega-post-date .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#bbbbbb',
								],
							]
						]
					],

					'ocean_header_dropdown_menu_options_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Dropdown-Menu-Options-ZRHz6/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_dropdown_menu_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_divider_after_dropdown_menu_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_header_search_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Header Search', 'oceanwp' ),
				'section' => 'ocean_header_menu_section',
				'after' => 'ocean_divider_after_dropdown_menu_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_menu_search_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__( 'Header Search Style', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'refresh',
						'default' => 'drop_down',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'disabled' => esc_html__( 'Disabled','oceanwp' ),
							'drop_down' => esc_html__( 'Drop Down','oceanwp' ),
							'header_replace' => esc_html__( 'Header Replace','oceanwp' ),
							'overlay' => esc_html__( 'Overlay','oceanwp' ),
						],
					],

					'ocean_divider_after_dropdown_search_style_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => function( $true ) {
							return (
								ocean_cac_header_search_dropdown( $true )
								|| ocean_cac_header_search_overlay( $true )
							);
						},
					],

					'ocean_search_dropdown_input_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Form Input: Background', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_dropdown',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_dropdown_input_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#searchform-dropdown input' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_search_dropdown_input_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Form Input: Text', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_dropdown',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_dropdown_input_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#searchform-dropdown input' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333'
								],
							]
						]
					],

					'ocean_search_dropdown_input_border' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Form Input: Border', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_dropdown',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_dropdown_input_border',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#searchform-dropdown input' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#dddddd'
								],
							],
							'focus' => [
								'id' => 'ocean_search_dropdown_input_border_focus',
								'key' => 'focus',
								'label' => esc_html__( 'Focus', 'oceanwp' ),
								'selector' => [
									'#searchform-dropdown input:focus' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#bbbbbb'
								],
							]
						]
					],

					'ocean_search_overlay_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Overlay Background', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_overlay',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_overlay_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'rgba(0,0,0,0.9)'
								],
							]
						]
					],

					'ocean_search_overlay_input_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Input: Text', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_overlay',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_overlay_input_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay form input, #searchform-overlay form .search-text' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff'
								],
							]
						]
					],

					'ocean_search_overlay_placeholder_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Input: Placeholder', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_overlay',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_overlay_placeholder_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay form input::placeholder' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff'
								],
							]
						]
					],

					'ocean_search_overlay_input_dashed_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Input: Animation', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_overlay',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_overlay_input_dashed_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay form label i' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff'
								],
							]
						]
					],

					'ocean_search_overlay_input_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Input: Border', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_overlay',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_overlay_input_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay form input' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#444444'
								],
							],
							'hover' => [
								'id' => 'ocean_search_overlay_input_hover_border_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay form input:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#777777'
								],
							],
							'focus' => [
								'id' => 'ocean_search_overlay_input_focus_border_color',
								'key' => 'focus',
								'label' => esc_html__( 'Focus', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay form input:focus' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff'
								],
							]
						]
					],

					'ocean_search_overlay_close_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Close Button', 'oceanwp' ),
						'section' => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_search_overlay',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_search_overlay_close_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#searchform-overlay a.search-overlay-close span::before, #searchform-overlay a.search-overlay-close span::after' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff',
								],
							]
						]
					],

					'ocean_header_menu_search_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Header-Search-xvjwW/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_search_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_title_for_custom_menu_section' => [
				'type'      => 'ocean-divider',
				'label'     => esc_html__( 'Custom Menu', 'oceanwp' ),
				'section'   => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
				'bottom'    => 10,
			],

			'ocean_header_custom_menu_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Custom Menu', 'oceanwp' ),
				'section'  => 'ocean_header_menu_section',
				'after'    => 'ocean_title_for_custom_menu_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_header_custom_menu_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'Select a custom template you created in OceanWP > My Library. This template will replace the default menu navigation only. For a complete custom header, use the Custom Header type option in Customize > Header > General.', 'oceanwp' ),
						'section'   => 'ocean_header_custom_menu_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_custom_nav_template' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Select Template', 'oceanwp' ),
						'section'           => 'ocean_header_custom_menu_section',
						'transport'         => 'refresh',
						'default'           => '0',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'choices'           => oceanwp_library_template_choices(),
						'sanitize_callback' => 'sanitize_key',
					],

					'ocean_header_custom_menu_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Custom-Menu-K7VpX/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_custom_menu_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_header_menu_section_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Menu-JnJGW/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_header_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			]

		]
	],

	'ocean_spacer_for_header_social_menu_section' => [
		'type'      => 'ocean-spacer',
		'section'   => 'ocean_header',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 1,
		'bottom'    => 10,
	],

	'ocean_header_social_menu_section' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Social Menu', 'oceanwp' ),
		'section'  => 'ocean_header',
		'after'    => 'ocean_spacer_for_header_social_menu_section',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_menu_social' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Enable Social Menu', 'oceanwp' ),
				'section'           => 'ocean_header_social_menu_section',
				'default'           => false,
				'transport'         => 'refresh',
				'priority'          => 10,
				'hideLabel'         => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_title_for_header_social_menu_sections' => [
				'type'            => 'ocean-title',
				'label'           => esc_html__( 'Default Social Menu', 'oceanwp' ),
				'section'         => 'ocean_header_social_menu_section',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 20,
				'bottom'          => 20,
				'active_callback' => 'oceanwp_cac_has_menu_social',
			],

			'ocean_menu_social_target' => [
				'type'              => 'ocean-buttons',
				'label'             => esc_html__( 'Links Target', 'oceanwp' ),
				'section'           => 'ocean_header_social_menu_section',
				'default'           => 'blank',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'wrap'              => false,
				'active_callback'   => 'oceanwp_cac_has_menu_social',
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'blank' => [
						'id'      => 'blank',
						'label'   => esc_html__( 'New Tab', 'oceanwp' ),
						'content' => esc_html__( 'New Tab', 'oceanwp' ),
					],
					'self'  => [
						'id'      => 'self',
						'label'   => esc_html__( 'Same Tab', 'oceanwp' ),
						'content' => esc_html__( 'Same Tab', 'oceanwp' ),
					]
				]
			],

			'ocean_menu_social_style' => [
				'type'              => 'ocean-buttons',
				'label'             => esc_html__( 'Social Icons Style', 'oceanwp' ),
				'section'           => 'ocean_header_social_menu_section',
				'default'           => 'simple',
				'transport'         => 'refresh',
				'priority'          => 10,
				'hideLabel'         => false,
				'wrap'              => false,
				'active_callback'   => 'oceanwp_cac_has_menu_social',
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'simple' => [
						'id'      => 'simple',
						'label'   => esc_html__( 'Simple', 'oceanwp' ),
						'content' => esc_html__( 'Simple', 'oceanwp' ),
					],
					'colored'  => [
						'id'      => 'colored',
						'label'   => esc_html__( 'Colored', 'oceanwp' ),
						'content' => esc_html__( 'Colored', 'oceanwp' ),
					],
					'minimal'  => [
						'id'      => 'minimal',
						'label'   => esc_html__( 'Minimal', 'oceanwp' ),
						'content' => esc_html__( 'Minimal', 'oceanwp' ),
					],
					'dark'  => [
						'id'      => 'dark',
						'label'   => esc_html__( 'Dark', 'oceanwp' ),
						'content' => esc_html__( 'Dark', 'oceanwp' ),
					]
				]
			],

			'ocean_divider_after_menu_social_style' => [
				'type'              => 'ocean-divider',
				'section'           => 'ocean_header_social_menu_section',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'active_callback'   => 'oceanwp_cac_has_menu_social',
			],

			'ocean_header_default_social_icon_setting_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Social Icons Settings', 'oceanwp' ),
				'section'  => 'ocean_header_social_menu_section',
				'after'    => 'ocean_divider_after_menu_social_style',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_menu_social_font_size' => [
						'id'                => 'ocean_menu_social_font_size',
						'label'             => esc_html__( 'Icon Size', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_header_default_social_icon_setting_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => true,
						'min'               => 1,
						'max'               => 100,
						'step'              => 1,
						'active_callback'   => 'oceanwp_cac_has_menu_social',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_menu_social_font_size',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'tablet' => [
								'id'    => 'ocean_menu_social_tablet_font_size',
								'label' => esc_html__( 'Tablet', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'mobile' => [
								'id'    => 'ocean_menu_social_mobile_font_size',
								'label' => esc_html__( 'Mobile', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id'    => 'ocean_menu_social_font_size_unit',
								'label' => esc_html__( esc_html__( 'Unit', 'oceanwp' ), 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a,.sidr-class-social-menu-inner ul li a' => ['font-size'],
							'.oceanwp-social-menu ul li a .owp-icon,.oceanwp-social-menu .colored ul li a .owp-icon,.oceanwp-social-menu .minimal ul li a .owp-icon,.oceanwp-social-menu .dark ul li a .owp-icon' => ['width', 'height']
						]
					],

					'ocean_menu_social_border_radius' => [
						'id'                => 'ocean_menu_social_border_radius',
						'label'             => esc_html__( 'Border Radius (px)', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_header_default_social_icon_setting_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 25,
						'step'              => 1,
						'active_callback'   => 'oceanwp_cac_has_menu_social',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_menu_social_border_radius',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							]
						],
						'preview' => 'queryWithType',
						'css' => [
							'.oceanwp-social-menu ul li a' => ['border-radius']
						]
					],

					'ocean_divider_after_header_social_icon_border_radius_setting' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_header_default_social_icon_setting_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'active_callback' => 'oceanwp_cac_has_menu_social',
					],

					'ocean_menu_social_margin' => [
						'id'              => 'ocean_menu_social_margin',
						'label'           => esc_html__( 'Icons Gap (px)', 'oceanwp' ),
						'type'            => 'ocean-spacing',
						'section'         => 'ocean_header_default_social_icon_setting_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'hideLabel'       => false,
						'isType'          => 'margin',
						'isTop'           => false,
						'isBottom'        => false,
						'active_callback' => 'oceanwp_cac_has_menu_social',
						'setting_args'    => [
							'spacingRight' => [
								'id'    => 'ocean_menu_social_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id'    => 'ocean_menu_social_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id'    => 'ocean_menu_social_tablet_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id'    => 'ocean_menu_social_tablet_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id'    => 'ocean_menu_social_mobile_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id'    => 'ocean_menu_social_mobile_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.oceanwp-social-menu ul li a',
							'property' => 'margin'
						],
					],

					'ocean_menu_social_padding' => [
						'id' => 'ocean_menu_social_padding',
						'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_header_default_social_icon_setting_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'active_callback' => 'ocean_cac_header_social_menu_simple',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_menu_social_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_menu_social_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_menu_social_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_menu_social_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_menu_social_tablet_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_menu_social_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_menu_social_tablet_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_menu_social_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_menu_social_mobile_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_menu_social_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_menu_social_mobile_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_menu_social_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.oceanwp-social-menu ul li a',
							'property' => 'padding'
						],
					],

					'ocean_divider_after_header_social_icon_spacing_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_default_social_icon_setting_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'active_callback' => 'ocean_cac_header_social_menu_simple',
					],

					'ocean_menu_social_links_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Icons Background', 'oceanwp' ),
						'section' => 'ocean_header_default_social_icon_setting_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_social_menu_simple',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_menu_social_links_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.oceanwp-social-menu.simple-social ul li a' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_menu_social_hover_links_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.oceanwp-social-menu.simple-social ul li a:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_menu_social_links_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Icons', 'oceanwp' ),
						'section' => 'ocean_header_default_social_icon_setting_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_header_social_menu_simple',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_menu_social_links_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.oceanwp-social-menu.simple-social ul li a' => 'color',
									'.oceanwp-social-menu.simple-social ul li a .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_menu_social_hover_links_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.oceanwp-social-menu.simple-social ul li a:hover' => 'color',
									'.oceanwp-social-menu.simple-social ul li a:hover .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_header_default_social_icon_section_need_help' => [
						'type'            => 'ocean-content',
						'isContent'       => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Social-Icons-Settings-f_NZX/" target="_blank">', '</a>' ),
						'class'           => 'need-help',
						'section'         => 'ocean_header_default_social_icon_setting_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_menu_social',
					]
				]
			],

			'ocean_spacer_for_social_menu_social_links_section' => [
				'type'            => 'ocean-spacer',
				'section'         => 'ocean_header_social_menu_section',
				'transport'       => 'postMessage',
				'priority'        => 10,
				'top'             => 10,
				'bottom'          => 10,
				'active_callback' => 'oceanwp_cac_has_menu_social',
			],

			'ocean_header_social_menu_links_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Social Links', 'oceanwp' ),
				'section'  => 'ocean_header_social_menu_section',
				'after'    => 'ocean_spacer_for_social_menu_social_links_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_menu_social_link_profile_options' => [
						'type'              => 'ocean-social-links',
						'label'             => esc_html__( 'Social Profile', 'oceanwp' ),
						'section'           => 'ocean_header_social_menu_links_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'active_callback'   => 'oceanwp_cac_has_menu_social',
						'social_setting_id' => 'ocean_menu_social_profiles',
						'social_profiles'   => oceanwp_social_options()
					],

					'ocean_header_social_menu_links_section_need_help' => [
						'type'            => 'ocean-content',
						'isContent'       => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Social-Links-CcHZe/" target="_blank">', '</a>' ),
						'class'           => 'need-help',
						'section'         => 'ocean_header_social_menu_links_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_menu_social',
					]
				]
			],

			'ocean_title_for_header_social_custom_template_sections' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Custom Social Menu', 'oceanwp' ),
				'section' => 'ocean_header_social_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
				'active_callback' => 'oceanwp_cac_has_menu_social',
			],

			'ocean_header_social_menu_custom_template_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Custom Template', 'oceanwp' ),
				'section' => 'ocean_header_social_menu_section',
				'after' => 'ocean_title_for_header_social_custom_template_sections',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_desc_for_social_menu_custom_template_settings' => [
						'type' => 'ocean-content',
						'isContent' => esc_html__( 'Select a template you created in OceanWP > My Library to replace default Header social icons.', 'oceanwp' ),
						'section' => 'ocean_header_social_menu_custom_template_section',
						'class' => 'description',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'oceanwp_cac_has_menu_social',
					],

					'ocean_menu_social_template' => [
						'type' => 'ocean-select',
						'label' => esc_html__( 'Select Template', 'oceanwp' ),
						'section' => 'ocean_header_social_menu_custom_template_section',
						'transport' => 'refresh',
						'default' => '0',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_has_menu_social',
						'sanitize_callback' => 'sanitize_key',
						'choices' => oceanwp_library_template_choices(),
					],

					'ocean_header_social_menu_custom_template_section_need_help' => [
						'type'            => 'ocean-content',
						'isContent'       => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Custom-Template-MsJOy/" target="_blank">', '</a>' ),
						'class'           => 'need-help',
						'section'         => 'ocean_header_social_menu_custom_template_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_menu_social',
					]

				]
			],

			'ocean_header_social_menu_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Social-Menu-JgR4T/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_header_social_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			]
		]
	],

	'ocean_title_for_header_mobile_menu_sections' => [
		'type'      => 'ocean-title',
		'label'     => esc_html__( 'Mobile', 'oceanwp' ),
		'section'   => 'ocean_header',
		'transport' => 'postMessage',
		'priority'  => 10,
		'top'       => 20,
		'bottom'    => 20,
	],

	'ocean_header_mobile_menu_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Mobile Menu', 'oceanwp' ),
		'section' => 'ocean_header',
		'after' => 'ocean_title_for_header_mobile_menu_sections',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_mobile_menu_breakpoints' => [
				'type'              => 'ocean-select',
				'label'             => esc_html__( 'Breakpoints', 'oceanwp' ),
				'desc'              => esc_html__( 'Set the screen width at which your website will switch to a mobile-friendly layout, displaying the mobile menu.', 'oceanwp' ),
				'section'           => 'ocean_header_mobile_menu_section',
				'transport'         => 'refresh',
				'default'           => '959',
				'priority'          => 10,
				'hideLabel'         => false,
				'multiple'          => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'1280'   => esc_html__( 'From 1280px', 'oceanwp' ),
					'1080'   => esc_html__( 'From 1080px', 'oceanwp' ),
					'959'    => esc_html__( 'From 959px', 'oceanwp' ),
					'767'    => esc_html__( 'From 767px', 'oceanwp' ),
					'480'    => esc_html__( 'From 480px', 'oceanwp' ),
					'320'    => esc_html__( 'From 320px', 'oceanwp' ),
					'custom' => esc_html__( 'Custom media query', 'oceanwp' ),
				]
			],

			'ocean_mobile_menu_custom_breakpoint' => [
				'label'             => esc_html__( 'Custom Media Query', 'oceanwp' ),
				'type'              => 'ocean-range-slider',
				'section'           => 'ocean_header_mobile_menu_section',
				'transport'         => 'postMessage',
				'priority'          => 10,
				'hideLabel'         => false,
				'isUnit'            => false,
				'isResponsive'      => false,
				'min'               => 1,
				'max'               => 3000,
				'step'              => 1,
				'active_callback'   => 'ocean_cac_mobile_menu_has_custom_breakpoints',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id'    => 'ocean_mobile_menu_custom_breakpoint',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr'  => [
							'transport' => 'refresh',
						],
					]
				]
			],

			'ocean_divider_after_mobile_menu_custom_breakpoint_setting' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_header_mobile_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
				'bottom'    => 10,
			],

			'ocean_mobile_menu_style' => [
				'type'              => 'ocean-radio-image',
				'label'             => esc_html__( 'Mobile Menu Type', 'oceanwp' ),
				'section'           => 'ocean_header_mobile_menu_section',
				'default'           => 'dropdown',
				'transport'         => 'refresh',
				'priority'          => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'sidebar' => [
						'label' => esc_html__( 'Sidebar', 'oceanwp' ),
						'icon'  => 'mobile_menu_style_sidebar',
					],
					'dropdown'  => [
						'label' => esc_html__( 'Dropdown', 'oceanwp' ),
						'icon'  => 'mobile_menu_style_dropdown',
					],
					'fullscreen'  => [
						'label' => esc_html__( 'Full Screen', 'oceanwp' ),
						'icon'  => 'mobile_menu_style_fullscreen',
					]
				]
			],

			'ocean_divider_after_mobile_menu_type_setting' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_header_mobile_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 1,
				'bottom'    => 10,
			],

			'ocean_mobile_menu_search_style' => [
				'type'              => 'ocean-buttons',
				'label'             => esc_html__( 'Mobile Header Search Type', 'oceanwp' ),
				'section'           => 'ocean_header_mobile_menu_section',
				'default'           => 'disabled',
				'transport'         => 'refresh',
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
					'drop_down'  => [
						'id'      => 'drop_down',
						'label'   => esc_html__( 'Dropdown', 'oceanwp' ),
						'content' => esc_html__( 'Dropdown', 'oceanwp' ),
					],
					'overlay'  => [
						'id'      => 'overlay',
						'label'   => esc_html__( 'Overlay', 'oceanwp' ),
						'content' => esc_html__( 'Overlay', 'oceanwp' ),
					]
				]
			],

			'ocean_title_for_header_mobile_menu_settings_sections' => [
				'type'      => 'ocean-title',
				'label'     => esc_html__( 'Mobile Menu Settings', 'oceanwp' ),
				'section'   => 'ocean_header_mobile_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
				'bottom'    => 20,
			],

			'ocean_header_mobile_menu_general_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'General Settings', 'oceanwp' ),
				'section'  => 'ocean_header_mobile_menu_section',
				'after'    => 'ocean_title_for_header_mobile_menu_settings_sections',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_mobile_header_height' => [
						'label'             => esc_html__( 'Mobile Header Height (px)', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_header_mobile_menu_general_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 300,
						'step'              => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_mobile_header_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_divider_after_mobile_header_height_setting' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_header_mobile_menu_general_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 10,
						'bottom'          => 10,
						'active_callback' => 'ocean_cac_mobile_header_not_medium_vetical_custom',
					],

					'ocean_mobile_elements_positioning' => [
						'label'             => esc_html__( 'Mobile Header Items Layout', 'oceanwp' ),
						'type'              => 'ocean-select',
						'section'           => 'ocean_header_mobile_menu_general_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'default'           => 'one',
						'hideLabel'         => false,
						'active_callback'   => 'ocean_cac_mobile_header_not_medium_vetical_custom',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'one'   => esc_html__( 'Logo / Cart / Menu', 'oceanwp' ),
							'two'   => esc_html__( 'Cart / Logo / Menu', 'oceanwp' ),
							'three' => esc_html__( 'Menu / Logo / Cart', 'oceanwp' ),
						],
					],

					'ocean_divider_for_mobile_logo_setting' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_header_mobile_menu_general_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 20,
						'bottom'    => 20,
					],

					'ocean_responsive_logo' => [
						'label'     => esc_html__( 'Mobile Logo (optional)', 'oceanwp' ),
						'desc'      => esc_html__( 'Select a custom responsive logo for tablet and mobile.', 'oceanwp' ),
						'type'      => 'ocean-image',
						'section'   => 'ocean_header_mobile_menu_general_section',
						'transport' => 'refresh',
						'priority'  => 10,
						'hideLabel' => false,
						'mediaType' => 'image',
						'savetype'  => 'url',
					],

					'ocean_divider_after_responsive_logo_setting' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_header_mobile_menu_general_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 10,
						'bottom'    => 10,
					],

					'ocean_responsive_logo_height' => [
						'id'                => 'ocean_responsive_logo_height',
						'label'             => esc_html__( 'Mobile Logo Height (px)', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_header_mobile_menu_general_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 500,
						'step'              => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_responsive_logo_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							]
						],
						'preview' => 'queryWithType',
						'css' => [
							'#site-logo.has-responsive-logo .responsive-logo-link img' => ['max-height']
						]
					],

					'ocean_header_mobile_menu_general_setting_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#General-Settings-DFFI1/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_mobile_menu_general_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_spacer_for_header_mobile_menu_options_section' => [
				'type'      => 'ocean-spacer',
				'section'   => 'ocean_header_mobile_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
				'bottom'    => 10,
			],

			'ocean_header_mobile_menu_options_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Mobile Menu Options', 'oceanwp' ),
				'section'  => 'ocean_header_mobile_menu_section',
				'after'    => 'ocean_spacer_for_header_mobile_menu_options_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_mobile_menu_sidr_direction' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Mobile Menu Opening Direction', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_options_section',
						'default'           => 'left',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_has_mobile_menu_sidebar',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'left' => [
								'id'      => 'left',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'right'  => [
								'id'      => 'right',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						]
					],

					'ocean_mobile_menu_sidr_displace' => [
						'type'              => 'ocean-switch',
						'label'             => esc_html__( 'Displace Content Effect', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_options_section',
						'default'           => true,
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'active_callback'   => 'ocean_cac_has_mobile_menu_sidebar',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_dropdown_mobile_menu_max_height' => [
						'id'                => 'ocean_dropdown_mobile_menu_max_height',
						'label'             => esc_html__( 'Dropdown Max Height (px)', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 1000,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_has_mobile_menu_dropdown',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_dropdown_mobile_menu_max_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 400,
								],
							]
						],
						'preview' => 'queryWithType',
						'css' => [
							'#mobile-dropdown' => ['max-height']
						]
					],

					'ocean_divider_after_dropdown_mobile_menu_max_height_setting' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_header_mobile_menu_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 10,
						'bottom'          => 10,
						'active_callback' => 'ocean_cac_has_mobile_menu_dropdown_sidebar'
					],

					'ocean_mobile_menu_search' => [
						'type'              => 'ocean-switch',
						'label'             => esc_html__( 'Display Search Form Inside Menu', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_options_section',
						'default'           => true,
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_mobile_menu_search_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_mobile_menu_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_has_mobile_menu_dropdown_sidebar'
					],

					'ocean_mobile_menu_sidr_dropdown_target' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Dropdown Target', 'oceanwp' ),
						'desc'              => esc_html__( 'Choose what the user should click to reveal the submenu options. If you want the main menu item to be clickable too, choose the Icon option.', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_options_section',
						'default'           => 'link',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_has_mobile_menu_dropdown_sidebar',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'icon' => [
								'id'      => 'icon',
								'label'   => esc_html__( 'Icon', 'oceanwp' ),
								'content' => esc_html__( 'Icon', 'oceanwp' ),
							],
							'link'  => [
								'id'      => 'link',
								'label'   => esc_html__( 'Link', 'oceanwp' ),
								'content' => esc_html__( 'Link', 'oceanwp' ),
							]
						]
					],

					'ocean_title_for_mobile_menu_button_settings' => [
						'type'      => 'ocean-title',
						'label'     => esc_html__( 'Mobile Open Button', 'oceanwp' ),
						'section'   => 'ocean_header_mobile_menu_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_mobile_menu_display_opening_text' => [
						'type'              => 'ocean-switch',
						'label'             => esc_html__( 'Display Menu Text', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_options_section',
						'default'           => true,
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_mobile_menu_text' => [
						'label'             => esc_html__( 'Menu Text', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'postMessage',
						'default'           => esc_html__( 'Menu', 'oceanwp' ),
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback'   => 'ocean_cac_has_mobile_menu_display_menu_text'
					],

					'ocean_divider_after_mobile_menu_text_setting' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_header_mobile_menu_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 10,
						'bottom'    => 10,
					],

					'ocean_mobile_menu_open_icon' => [
						'label'             => esc_html__( 'Hamburger Icon Class', 'oceanwp' ),
						'desc'              => esc_html__( 'Enter a full icon class to replace the default hamburger icon. This option will only function if the Hamburger Icon Animation is set to Default Icon.', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'postMessage',
						'default'           => 'fa fa-bars',
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
					],

					'ocean_mobile_menu_open_hamburger' => [
						'label'             => esc_html__( 'Hamburger Icon Animation', 'oceanwp' ),
						'type'              => 'ocean-select',
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'default'           => 'default',
						'hideLabel'         => false,
						'choices'           => oceanwp_hamburgers_styles(),
						'sanitize_callback' => 'sanitize_key',
					],

					'ocean_divider_after_mobile_menu_open_hamburger_setting' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_header_mobile_menu_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_mobile_menu_open_hamburger_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Hamburger Icon Animation', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_mobile_menu_open_hamburger_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.mobile-menu .hamburger-inner, .mobile-menu .hamburger-inner::before, .mobile-menu .hamburger-inner::after' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#000000'
								],
							]
						]
					],

					'ocean_title_for_mobile_close_button_settings' => [
						'type'            => 'ocean-title',
						'label'           => esc_html__( 'Mobile Close Button', 'oceanwp' ),
						'section'         => 'ocean_header_mobile_menu_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'active_callback' => function( $true ) {
							return (
								ocean_cac_has_mobile_menu_sidebar( $true )
								|| ocean_cac_has_mobile_menu_dropdown( $true )
							);
						},
					],

					'ocean_mobile_menu_close_btn' => [
						'type'              => 'ocean-switch',
						'label'             => esc_html__( 'Display Mobile Close Button', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_options_section',
						'default'           => true,
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'active_callback'   => 'ocean_cac_has_mobile_menu_sidebar',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_mobile_menu_close_btn_text' => [
						'label'             => esc_html__( 'Mobile Close Button Text', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'postMessage',
						'default'           => esc_html__( 'Close Menu', 'oceanwp' ),
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback'   => 'ocean_cac_has_mobile_menu_sidebar'
					],

					'ocean_mobile_menu_close_btn_icon' => [
						'label'             => esc_html__( 'Mobile Close Button Icon Class', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'postMessage',
						'default'           => 'fas fa-times',
						'priority'          => 10,
						'hideLabel'         => false,
						'active_callback'   => 'ocean_cac_has_mobile_menu_sidebar',
						'sanitize_callback' => 'wp_filter_nohtml_kses',
					],

					'ocean_mobile_menu_close_text' => [
						'label'             => esc_html__( 'Close Menu Text', 'oceanwp' ),
						'type'              => 'ocean-text',
						'section'           => 'ocean_header_mobile_menu_options_section',
						'transport'         => 'postMessage',
						'default'           => esc_html__( 'Close', 'oceanwp' ),
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback'   => 'ocean_cac_has_mobile_menu_dropdown'
					],

					'ocean_header_mobile_menu_options_setting_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Mobile-Menu-Options-HLKlq/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_mobile_menu_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_spacer_for_header_mobile_menu_styling_section' => [
				'type'      => 'ocean-spacer',
				'section'   => 'ocean_header_mobile_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 1,
				'bottom'    => 10,
			],

			'ocean_header_mobile_menu_styling_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Mobile Menu Styling', 'oceanwp' ),
				'section'  => 'ocean_header_mobile_menu_section',
				'after'    => 'ocean_spacer_for_header_mobile_menu_styling_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_mobile_menu_dropdown_typography' => [
						'id'           => 'ocean_mobile_menu_dropdown_typography',
						'type'         => 'ocean-typography',
						'label'        => esc_html__( 'Mobile Menu', 'oceanwp' ),
						'section'      => 'ocean_header_mobile_menu_styling_section',
						'transport'    => 'postMessage',
						'priority'     => 10,
						'hideLabel'    => false,
						'selector'     => '.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a',
						'setting_args' => [
							'fontFamily' => [
								'id'    => 'mobile_menu_dropdown_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'mobile_menu_dropdown_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'mobile_menu_dropdown_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'mobile_menu_dropdown_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'mobile_menu_dropdown_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'mobile_menu_dropdown_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 15,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'mobile_menu_dropdown_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'mobile_menu_dropdown_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'mobile_menu_dropdown_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id'    => 'mobile_menu_dropdown_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'mobile_menu_dropdown_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'mobile_menu_dropdown_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'mobile_menu_dropdown_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'lineHeight' => [
								'id'    => 'mobile_menu_dropdown_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.8,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'mobile_menu_dropdown_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'mobile_menu_dropdown_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'mobile_menu_dropdown_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'mobile_menu_dropdown_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'mobile_menu_dropdown_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'mobile_menu_dropdown_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'mobile_menu_dropdown_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_mobile_menu_typography_setting' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 1,
						'bottom'    => 10,
					],

					'ocean_mobile_menu_sidr_close_button_background' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Close Button Background', 'oceanwp' ),
						'section'           => 'ocean_header_mobile_menu_styling_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_has_mobile_menu_sidebar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_mobile_menu_sidr_close_button_background',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'a.sidr-class-toggle-sidr-close' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f8f8f8',
								],
							]
						]
					],

					'ocean_mobile_menu_sidr_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Menu Background', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_has_mobile_menu_sidebar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_sidr_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#sidr, #mobile-dropdown' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff',
								],
							]
						]
					],

					'ocean_mobile_menu_sidr_borders' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Separators', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_has_mobile_menu_sidebar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_sidr_borders',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#sidr li, #sidr ul, #mobile-dropdown ul li, #mobile-dropdown ul li ul' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,0.035)',
								],
							]
						]
					],

					'ocean_divider_after_mobile_menu_sidr_borders_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_has_mobile_menu_sidebar',
					],

					'ocean_mobile_menu_links' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Links', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_links',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'body .sidr a, body .sidr-class-dropdown-toggle, #mobile-dropdown ul li a, #mobile-dropdown ul li a .dropdown-toggle, #mobile-fullscreen ul li a, #mobile-fullscreen .oceanwp-social-menu.simple-social ul li a' => 'color',
									'#mobile-fullscreen a.close .close-icon-inner, #mobile-fullscreen a.close .close-icon-inner::after' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#555555',
								],
							],
							'hover' => [
								'id' => 'ocean_mobile_menu_links_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'body .sidr a:hover, body .sidr-class-dropdown-toggle:hover, body .sidr-class-dropdown-toggle .fa, body .sidr-class-menu-item-has-children.active > a, body .sidr-class-menu-item-has-children.active > a > .sidr-class-dropdown-toggle, #mobile-dropdown ul li a:hover, #mobile-dropdown ul li a .dropdown-toggle:hover, #mobile-dropdown .menu-item-has-children.active > a, #mobile-dropdown .menu-item-has-children.active > a > .dropdown-toggle, #mobile-fullscreen ul li a:hover, #mobile-fullscreen .oceanwp-social-menu.simple-social ul li a:hover' => 'color',
									'#mobile-fullscreen a.close:hover .close-icon-inner, #mobile-fullscreen a.close:hover .close-icon-inner::after{background-color' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							]
						]
					],

					'ocean_divider_after_mobile_menu_links_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
					],

					'ocean_mobile_menu_sidr_dropdowns_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Dropdowns Background', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_sidr_dropdowns_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.sidr-class-dropdown-menu ul, #mobile-dropdown ul li ul, #mobile-fullscreen ul ul.sub-menu' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'rgba(0,0,0,0.02)',
								],
							]
						]
					],

					'ocean_divider_after_menu_sidr_dropdowns_background_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'ocean_cac_has_mobile_menu_sidebar',
					],

					'ocean_mobile_menu_sidr_search_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Background', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_has_mobile_menu_dropdown_sidebar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_sidr_search_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'body .sidr-class-mobile-searchform input, #mobile-dropdown #mobile-menu-search form input' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_mobile_menu_sidr_search_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Text', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_sidr_search_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'body .sidr-class-mobile-searchform input,body .sidr-class-mobile-searchform input:focus, #mobile-dropdown #mobile-menu-search form input, #mobile-fullscreen #mobile-search input, #mobile-fullscreen #mobile-search .search-text' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_mobile_menu_sidr_search_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Border', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_sidr_search_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'body .sidr-class-mobile-searchform input, #mobile-dropdown #mobile-menu-search form input, #mobile-fullscreen #mobile-search input' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#dddddd',
								],
							],
							'hover' => [
								'id' => 'ocean_mobile_menu_sidr_search_border_color_focus',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'body .sidr-class-mobile-searchform input:focus, #mobile-dropdown #mobile-menu-search form input:focus, #mobile-fullscreen #mobile-search input:focus' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#bbbbbb',
								],
							]
						]
					],

					'ocean_full_screen_mobile_menu_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Menu Background', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_has_mobile_menu_fullscreen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_mobile_menu_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#mobile-fullscreen' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'rgba(0,0,0,0.9)',
								],
							]
						]
					],

					'ocean_full_screen_mobile_menu_links_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Links: Background', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_has_mobile_menu_fullscreen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_full_screen_mobile_menu_links_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#mobile-fullscreen ul > li > a' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_full_screen_mobile_menu_links_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'#mobile-fullscreen ul > li > a:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_full_screen_mobile_menu_search_border_color_hover' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Border: Hover', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_has_mobile_menu_fullscreen',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'hover' => [
								'id' => 'ocean_full_screen_mobile_menu_search_border_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#mobile-fullscreen #mobile-search input:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff',
								],
							]
						]
					],

					'ocean_mobile_menu_sidr_search_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Search Form Icon', 'oceanwp' ),
						'section' => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_has_mobile_menu_dropdown_sidebar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_mobile_menu_sidr_search_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.sidr-class-mobile-searchform button, #mobile-dropdown #mobile-menu-search form button' => 'color',
									'.sidr-class-mobile-searchform button .owp-icon use, #mobile-dropdown #mobile-menu-search form button .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#555555',
								],
							],
							'hover' => [
								'id' => 'ocean_mobile_menu_sidr_search_button_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.sidr-class-mobile-searchform button:hover, #mobile-dropdown #mobile-menu-search form button:hover' => 'color',
									'.sidr-class-mobile-searchform button:hover .owp-icon use, #mobile-dropdown #mobile-menu-search form button:hover .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#222222',
								],
							]
						]
					],

					'ocean_header_mobile_menu_styling_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Mobile-Menu-Styling-Inxy-/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_header_mobile_menu_styling_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_header_mobile_menu_styling_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header#Mobile-Menu-hupu2/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_header_mobile_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			]
		]
	],

	'ocean_spacer_before_header_upsell' => [
		'type'      => 'ocean-spacer',
		'section'   => 'ocean_header',
		'transport' => 'postMessage',
		'priority'  => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_divider_before_header_upsell_notice' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_header',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 1,
		'bottom'          => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_header_upsell_notice' => [
		'type'            => 'ocean-content',
		'isContent'       => owp_render_header_upsell_notice(),
		'section'         => 'ocean_header',
		'class'           => 'description',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_header_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/901-customizer-header/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'section'   => 'ocean_header',
		'transport' => 'postMessage',
		'priority'  => 10,
	]
];
