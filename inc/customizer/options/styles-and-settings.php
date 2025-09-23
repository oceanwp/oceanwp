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
	'ocean_spacer_for_styles_settings_site_layout' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1
	],

	'ocean_site_layout_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Site Layout', 'oceanwp' ),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_spacer_for_styles_settings_site_layout',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_main_layout_style' => [
				'type' => 'ocean-radio-image',
				'label' => esc_html__( 'Site Layout', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'transport' => 'refresh',
				'default' => 'wide',
				'priority' => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'wide' => [
						'label' => esc_html__( 'Wide', 'oceanwp' ),
						'icon' => 'wide_layout',
					],
					'boxed' => [
						'label' => esc_html__( 'Boxed', 'oceanwp' ),
						'icon' => 'boxed_layout',
					],
					'separate' => [
						'label' => esc_html__( 'Separate', 'oceanwp' ),
						'icon' => 'separate_layout',
					],
				],
			],

			'ocean_title_for_content_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Content Settings', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_main_container_width' => [
				'id'      => 'ocean_main_container_width',
				'label'    => esc_html__( 'Main Container Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 4096,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'active_callback' => 'ocean_is_not_boxed_layout',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_main_container_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 1200,
						],
					],
					'unit' => [
						'id' => 'ocean_main_container_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'.container' => ['width']
				]
			],

			'ocean_boxed_width' => [
				'id'      => 'ocean_boxed_width',
				'label'    => esc_html__( 'Boxed Width (px)', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 4000,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'active_callback' => 'oceanwp_cac_has_boxed_layout',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_boxed_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 1280,
						],
					]
				],
				'preview' => 'queryWithType',
				'css' => [
					'.boxed-layout #wrap, .boxed-layout .parallax-footer, .boxed-layout .owp-floating-bar' => ['width']
				]
			],

			'ocean_left_container_width' => [
				'id'      => 'ocean_left_container_width',
				'label'    => esc_html__( 'Content Width (%)', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => 0,
				'max'          => 100,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_left_container_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 72,
						],
					]
				]
			],

			'ocean_sidebar_width' => [
				'id'      => 'ocean_sidebar_width',
				'label'    => esc_html__( 'Sidebar Width (%)', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => 0,
				'max'          => 100,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_sidebar_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 28,
						],
					]
				]
			],

			'ocean_divider_after_main_container_width' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 20,
			],

			'ocean_site_layout_content_settings' => [
				'type' => 'section',
				'title' => esc_html__( 'Additional Content Settings', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'after' => 'ocean_divider_after_main_container_width',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_desc_for_site_layout_content_settings' => [
						'type' => 'ocean-content',
						'isContent' => esc_html__( 'Additional content settings are currently available only for the Separate site layout style. ', 'oceanwp' ),
						'section' => 'ocean_site_layout_content_settings',
						'class' => 'description',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_separate_content_padding' => [
						'id'      => 'ocean_separate_content_padding',
						'label'       => esc_html__( 'Content Padding', 'oceanwp' ),
						'description' => esc_html__( 'Add a custom content padding.', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_site_layout_content_settings',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 1000,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'active_callback' => 'oceanwp_cac_has_separate_layout',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_separate_content_padding',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 30
								],
							],
							'unit' => [
								'id' => 'ocean_separate_content_padding_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px'
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.separate-layout .content-area, .separate-layout.content-left-sidebar .content-area, .content-both-sidebars.scs-style .content-area, .separate-layout.content-both-sidebars.ssc-style .content-area, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner' => ['padding']
						]
					],

					'ocean_separate_widgets_padding' => [
						'id'      => 'ocean_separate_widgets_padding',
						'label'       => esc_html__( 'Widget Padding', 'oceanwp' ),
						'description' => esc_html__( 'Add a custom content padding.', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_site_layout_content_settings',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 1000,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'active_callback' => 'oceanwp_cac_has_separate_layout',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_separate_widgets_padding',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 30
								],
							],
							'unit' => [
								'id' => 'ocean_separate_widgets_padding_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px'
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.separate-layout .widget-area .sidebar-box' => ['padding']
						]
					],

					'ocean_site_layout_additional_content_section_need_help' => [
						'type' => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Additional-Content-Settings-panel-0dftA/" target="_blank">', '</a>' ),
						'class' => 'need-help',
						'section' => 'ocean_site_layout_content_settings',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_title_for_site_background' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Site Background', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
			],

			'ocean_site_bg_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background Color', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_site_bg_color',
				'sanitize_callback' => 'wp_kses_post',
				'active_callback' => 'ocean_is_not_boxed_layout',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_background_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'body, body.separate-layout, .has-parallax-footer:not(.separate-layout) #main' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					],
				]
			],

			'ocean_background_image' => [
				'label' => esc_html__( 'Image', 'oceanwp' ),
				'type' => 'ocean-image',
				'section'  => 'ocean_site_layout_section',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'mediaType' => 'image',
				'savetype' => 'url',
			],

			'ocean_background_image_position' => [
				'id' => 'ocean_background_image_position',
				'type' => 'ocean-select',
				'label' => esc_html__( 'Position', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'default' => 'initial',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_has_background_image',
				'sanitize_callback' => 'sanitize_text_field',
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
					'selector' => 'body',
					'property' => 'background-position'
				]
			],

			'ocean_background_image_repeat' => [
				'id' => 'ocean_background_image_repeat',
				'type' => 'ocean-select',
				'label' => esc_html__( 'Repeat', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'default' => 'no-repeat',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_has_background_image',
				'sanitize_callback' => 'sanitize_text_field',
				'choices' => [
					'initial'   => esc_html__( 'Default', 'oceanwp' ),
					'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
					'repeat'    => esc_html__( 'Repeat', 'oceanwp' ),
					'repeat-x'  => esc_html__( 'Repeat-x', 'oceanwp' ),
					'repeat-y'  => esc_html__( 'Repeat-y', 'oceanwp' ),
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => 'body',
					'property' => 'background-repeat'
				]
			],

			'ocean_background_image_attachment' => [
				'id' => 'ocean_background_image_attachment',
				'type' => 'ocean-buttons',
				'label' => esc_html__( 'Attachment', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'default'  => 'initial',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'active_callback' => 'oceanwp_cac_has_background_image',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'initial' => [
						'id'     => 'initial',
						'label'   => esc_html__( 'Initial', 'oceanwp' ),
						'content' => esc_html__( 'Initial', 'oceanwp' ),
					],
					'scroll'  => [
						'id'     => 'scroll',
						'label'   => esc_html__( 'Scroll', 'oceanwp' ),
						'content' => esc_html__( 'Scroll', 'oceanwp' ),
					],
					'fixed'  => [
						'id'     => 'fixed',
						'label'   => esc_html__( 'Fixed', 'oceanwp' ),
						'content' => esc_html__( 'Fixed', 'oceanwp' ),
					]
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => 'body',
					'property' => 'background-attachment'
				]
			],

			'ocean_background_image_size' => [
				'id' => 'ocean_background_image_size',
				'type' => 'ocean-buttons',
				'label' => esc_html__( 'Size', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'default'  => 'initial',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'active_callback' => 'oceanwp_cac_has_background_image',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'initial' => [
						'id'     => 'initial',
						'label'   => esc_html__( 'Default', 'oceanwp' ),
						'content' => esc_html__( 'Default', 'oceanwp' ),
					],
					'auto'  => [
						'id'     => 'auto',
						'label'   => esc_html__( 'Auto', 'oceanwp' ),
						'content' => esc_html__( 'Auto', 'oceanwp' ),
					],
					'cover'  => [
						'id'     => 'cover',
						'label'   => esc_html__( 'Cover', 'oceanwp' ),
						'content' => esc_html__( 'Cover', 'oceanwp' ),
					],
					'contain'  => [
						'id'     => 'contain',
						'label'   => esc_html__( 'Contain', 'oceanwp' ),
						'content' => esc_html__( 'Contain', 'oceanwp' ),
					]
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => 'body',
					'property' => 'background-size'
				]
			],

			'ocean_divider_after_site_bg_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 20
			],

			'ocean_site_background_settings' => [
				'type' => 'section',
				'title' => esc_html__( 'Site Background Options', 'oceanwp' ),
				'section' => 'ocean_site_layout_section',
				'after' => 'ocean_divider_after_site_bg_settings',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_desc_for_site_background_settings' => [
						'type' => 'ocean-content',
						'isContent' => esc_html__( 'Additional background options are currently available for the Boxed and Separate site layout styles.', 'oceanwp' ),
						'section' => 'ocean_site_background_settings',
						'class' => 'description',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_boxed_dropdshadow' => [
						'type' => 'ocean-switch',
						'label' => esc_html__( 'Display Boxed Layout Shadow Drop', 'oceanwp' ),
						'section' => 'ocean_site_background_settings',
						'default'  => true,
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'oceanwp_cac_has_boxed_layout',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_boxed_outside_bg_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Outside Background Color', 'oceanwp' ),
						'section' => 'ocean_site_background_settings',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_boxed_outside_bg_color',
						'active_callback' => 'oceanwp_cac_has_boxed_layout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_boxed_outside_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.boxed-layout' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e9e9e9',
								],
							],
						]
					],

					'ocean_separate_outside_bg_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Outside Background Color', 'oceanwp' ),
						'section' => 'ocean_site_background_settings',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_separate_outside_bg_color',
						'active_callback' => 'oceanwp_cac_has_separate_layout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_separate_outside_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'body.separate-layout' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f1f1f1',
								],
							],
						]
					],

					'ocean_boxed_inner_bg_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Inner Background Color', 'oceanwp' ),
						'section' => 'ocean_site_background_settings',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_boxed_inner_bg_color',
						'active_callback' => 'oceanwp_cac_has_boxed_or_separate_layout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_boxed_inner_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.boxed-layout #wrap, .separate-layout .content-area, .separate-layout .widget-area .sidebar-box, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner, .has-parallax-footer:not(.separate-layout) #main' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e9e9e9',
								],
							],
						]
					],

					'ocean_site_bg_inner_section_need_help' => [
						'type' => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Site-Background-Options-panel-gpEjd/" target="_blank">', '</a>' ),
						'class' => 'need-help',
						'section' => 'ocean_site_background_settings',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_site_bg_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Site-Layout-kC1LX/" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_site_layout_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_after_site_layout_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10
	],

	'ocean_site_icon_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Site Icons', 'oceanwp' ),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_divider_after_site_layout_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_theme_default_icons' => [
				'type' => 'ocean-select',
				'label' => esc_html__( 'Site Icons', 'oceanwp' ),
				'desc' => esc_html__( 'Select the main theme icons set.', 'oceanwp' ),
				'section' => 'ocean_site_icon_section',
				'transport' => 'refresh',
				'default' => 'sili',
				'priority' => 10,
				'hideLabel' => false,
				'wrapper' => 'ocean_theme_default_icons',
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'     => [
					'svg'  => esc_html__( 'Ocean SVG Icons', 'oceanwp' ),
					'sili' => esc_html__( 'Simple Line Icons', 'oceanwp' ),
					'fai'  => esc_html__( 'Font Awesome Icons', 'oceanwp' ),
				],
			],

			'ocean_divider_after_default_icons' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_icon_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 5,
				'bottom' => 1
			],

			'ocean_site_disable_unused_icon_links' => [
				'type' => 'ocean-links',
				'label' => esc_html__( 'Disable Unused Icons', 'oceanwp' ),
				'section' => 'ocean_site_icon_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'class' => 'common',
				'linkIcon' => 'link-2',
				'titleIcon' => 'right-arrow',
				'hideLabel' => false,
				'links' => [
					'disable_icons' => [
						'label' => esc_html__( 'Disable unused icon libraries from loading.', 'oceanwp' ),
						'url' => esc_url( admin_url( 'customize.php?autofocus[section]=ocean_site_performance' ) ),
					]
				]
			],

			'ocean_site_icons_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Site-Icons-GeV7c/" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_site_icon_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		],
	],

	'ocean_divider_after_site_icons_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10
	],

	'ocean_site_button_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Site Buttons', 'oceanwp' ),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_divider_after_site_icons_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_theme_button_padding_dimensions' => [
				'id' => 'ocean_theme_button_padding_dimensions',
				'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'padding',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_theme_button_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 14,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_theme_button_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 20,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_theme_button_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 14,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_theme_button_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 20,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_theme_button_tablet_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_theme_button_tablet_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_theme_button_tablet_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_theme_button_tablet_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_theme_button_mobile_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_theme_button_mobile_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_theme_button_mobile_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_theme_button_mobile_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => 'input[type="button"], input[type="reset"], input[type="submit"], button[type="submit"], .button, #site-navigation-wrap .dropdown-menu > li.btn > a > span, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button',
					'property' => 'padding'
				]
			],

			'ocean_divider_after_button_padding' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_theme_button_border_radius_settings' => [
				'id' => 'ocean_theme_button_border_radius_settings',
				'label'    => esc_html__( 'Radius (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'radius',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_theme_button_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_theme_button_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_theme_button_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_theme_button_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_theme_button_tablet_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_theme_button_tablet_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_theme_button_tablet_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_theme_button_tablet_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_theme_button_mobile_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_theme_button_mobile_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_theme_button_mobile_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_theme_button_mobile_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => 'input[type="button"], input[type="reset"], input[type="submit"], button[type="submit"], .button, #site-navigation-wrap .dropdown-menu > li.btn > a > span, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button',
					'property' => 'border-radius'
				]
			],

			'ocean_divider_after_button_radius' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_theme_button_border_type' => [
				'id' => 'ocean_theme_button_border_type',
				'type' => 'ocean-select',
				'label' => esc_html__( 'Border Type', 'oceanwp' ),
				'section' => 'ocean_site_button_section',
				'default' => 'solid',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'dotted' => esc_html__( 'Dotted', 'oceanwp' ),
					'dashed' => esc_html__( 'Dashed', 'oceanwp' ),
					'solid' => esc_html__( 'Solid', 'oceanwp' ),
					'double' => esc_html__( 'Double', 'oceanwp' ),
					'groove' => esc_html__( 'Groove', 'oceanwp' ),
					'ridge' => esc_html__( 'Ridge', 'oceanwp' ),
					'inset' => esc_html__( 'Inset', 'oceanwp' ),
					'outset' => esc_html__( 'Outset', 'oceanwp' ),
					'none' => esc_html__( 'None', 'oceanwp' ),
					'hidden' => esc_html__( 'Hidden', 'oceanwp' )
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => 'input[type="button"], input[type="reset"], input[type="submit"], button[type="submit"], .button, #site-navigation-wrap .dropdown-menu > li.btn > a > span, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button',
					'property' => 'border-style'
				]
			],

			'ocean_theme_button_border_width_setting' => [
				'id'      => 'ocean_theme_button_border_width_setting',
				'label'    => esc_html__( 'Border Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 1,
				'max'          => 20,
				'step'         => 1,
				'top'               => 20,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_theme_button_border_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 1,
						],
					],
					'tablet' => [
						'id' => 'ocean_theme_button_border_width_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_theme_button_border_width_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_theme_button_border_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'input[type="button"], input[type="reset"], input[type="submit"], button[type="submit"], .button, #site-navigation-wrap .dropdown-menu > li.btn > a > span, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button' => ['border-width']
				]
			],

			'ocean_title_for_site_button' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
			],

			'ocean_theme_button_typography' => [
				'id' => 'ocean_theme_button_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__( 'Button Text', 'oceanwp' ),
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => 'input[type="button"], input[type="reset"], input[type="submit"], button[type="submit"], .button, #site-navigation-wrap .dropdown-menu >li.btn >a >span, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'button_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'button_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'button_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'button_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'button_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'button_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeTablet' => [
						'id' => 'button_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'button_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'button_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacing' => [
						'id' => 'button_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id' => 'button_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'button_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'button_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'button_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightTablet' => [
						'id' => 'button_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'button_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'button_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'button_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'button_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'button_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'button_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_divider_after_site_button_typography' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10
			],

			'ocean_theme_button_bg_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background', 'oceanwp' ),
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_theme_button_bg_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_theme_button_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button, .woocommerce-cart .wp-element-button,.woocommerce-checkout .wp-element-button' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0'
						],
					],
					'hover' => [
						'id' => 'ocean_theme_button_hover_bg',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active, .woocommerce-cart .wp-element-button:hover,.woocommerce-checkout .wp-element-button:hover' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#0b7cac'
						],
					],
				]
			],

			'ocean_theme_button_text_color_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Text', 'oceanwp' ),
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_theme_button_text_color_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_theme_button_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button, .woocommerce-cart .wp-element-button,.woocommerce-checkout .wp-element-button' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff'
						],
					],
					'hover' => [
						'id' => 'ocean_theme_button_hover_color',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active, .woocommerce-cart .wp-element-button:hover,.woocommerce-checkout .wp-element-button:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff'
						],
					],
				]
			],

			'ocean_theme_button_border_color_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Border', 'oceanwp' ),
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_theme_button_border_color_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_theme_button_border_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button, .woocommerce-cart .wp-element-button,.woocommerce-checkout .wp-element-button' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'hover' => [
						'id' => 'ocean_theme_button_border_hover_color',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active, .woocommerce-cart .wp-element-button:hover,.woocommerce-checkout .wp-element-button:hover' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_site_button_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Site-Buttons-F_bj2/" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_site_button_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_after_site_button_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10
	],

	'ocean_site_forms_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Site Forms', 'oceanwp' ),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_divider_after_site_button_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_input_padding_dimensions' => [
				'id' => 'ocean_input_padding_dimensions',
				'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'padding',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_input_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 6,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_input_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 12,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_input_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 6,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_input_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 12,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_input_tablet_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_input_tablet_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_input_tablet_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_input_tablet_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_input_mobile_top_padding',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_input_mobile_right_padding',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_input_mobile_bottom_padding',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_input_mobile_left_padding',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea',
					'property' => 'padding'
				],
			],

			'ocean_divider_after_site_forms_padding' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 20,
			],

			'ocean_input_border_radius_wrap' => [
				'id' => 'ocean_input_border_radius_wrap',
				'label'    => esc_html__( 'Radius (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'radius',
				'wrapper'      => 'ocean_input_border_radius_wrap',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_input_border_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 3,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_input_border_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 3,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_input_border_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 3,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_input_border_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 3,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_input_border_tablet_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_input_border_tablet_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_input_border_tablet_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_input_border_tablet_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_input_border_mobile_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_input_border_mobile_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_input_border_mobile_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_input_border_mobile_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea',
					'property' => 'border-radius'
				]
			],

			'ocean_divider_after_forms_radius' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
			],

			'ocean_site_forms_border_type' => [
				'id' => 'ocean_site_forms_border_type',
				'type' => 'ocean-select',
				'label' => esc_html__( 'Border Type', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'default' => 'solid',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'bottom'            => 25,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'dotted' => esc_html__( 'Dotted', 'oceanwp' ),
					'dashed' => esc_html__( 'Dashed', 'oceanwp' ),
					'solid' => esc_html__( 'Solid', 'oceanwp' ),
					'double' => esc_html__( 'Double', 'oceanwp' ),
					'groove' => esc_html__( 'Groove', 'oceanwp' ),
					'ridge' => esc_html__( 'Ridge', 'oceanwp' ),
					'inset' => esc_html__( 'Inset', 'oceanwp' ),
					'outset' => esc_html__( 'Outset', 'oceanwp' ),
					'none' => esc_html__( 'None', 'oceanwp' ),
					'hidden' => esc_html__( 'Hidden', 'oceanwp' )
				],
				'preview' => 'queryWithAttr',
				'css' => [
					'selector' => 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea',
					'property' => 'border-style'
				]
			],

			'ocean_input_border_width_dimensions' => [
				'id'      => 'ocean_input_border_width_dimensions',
				'label'    => esc_html__( 'Border Width (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'width',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_input_top_border_width',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_input_right_border_width',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_input_bottom_border_width',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_input_left_border_width',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_input_tablet_top_border_width',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_input_tablet_right_border_width',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_input_tablet_bottom_border_width',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_input_tablet_left_border_width',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_input_mobile_top_border_width',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_input_mobile_right_border_width',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_input_mobile_bottom_border_width',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_input_mobile_left_border_width',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea',
					'property' => 'border-width'
				]
			],

			'ocean_title_for_site_forms' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
			],

			'ocean_site_form_label_typography' => [
				'id' => 'ocean_site_form_label_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__( 'Label', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => 'form label',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'form_label_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'form_label_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'form_label_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'form_label_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'form_label_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'form_label_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeTablet' => [
						'id' => 'form_label_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'form_label_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'form_label_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacing' => [
						'id' => 'form_label_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id' => 'form_label_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'form_label_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'form_label_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'form_label_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightTablet' => [
						'id' => 'form_label_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'form_label_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'form_label_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'form_label_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'form_label_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'form_label_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'form_label_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_site_form_placeholder_typography' => [
				'id' => 'ocean_site_form_placeholder_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__( 'Placeholder', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => 'form input[type=text], form input[type=password], form input[type=email], form input[type=url], form input[type=date], form input[type=month], form input[type=time], form input[type=datetime], form input[type=datetime-local], form input[type=week], form input[type=number], form input[type=search], form input[type=tel], form input[type=color], form select, form textarea',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'form_placeholder_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'form_placeholder_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'form_placeholder_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'form_placeholder_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'form_placeholder_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'form_placeholder_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeTablet' => [
						'id' => 'form_placeholder_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'form_placeholder_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'form_placeholder_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacing' => [
						'id' => 'form_placeholder_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id' => 'form_placeholder_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'form_placeholder_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'form_placeholder_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'form_placeholder_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightTablet' => [
						'id' => 'form_placeholder_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'form_placeholder_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'form_placeholder_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'form_placeholder_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'form_placeholder_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'form_placeholder_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'form_placeholder_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_site_form_text_typography' => [
				'id' => 'ocean_site_form_text_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__( 'Text', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => 'form input[type=text], form input[type=password], form input[type=email], form input[type=url], form input[type=date], form input[type=month], form input[type=time], form input[type=datetime], form input[type=datetime-local], form input[type=week], form input[type=number], form input[type=search], form input[type=tel], form input[type=color], form select, form textarea',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'form_text_typography[font-family]',
						'label' => esc_html__( 'Font Family', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'form_text_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'form_text_tablet_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'form_text_mobile_typography[font-weight]',
						'label' => esc_html__( 'Font Weight', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'form_text_typography[font-subset]',
						'label' => esc_html__( 'Font Subset', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'form_text_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeTablet' => [
						'id' => 'form_text_tablet_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'form_text_mobile_typography[font-size]',
						'label' => esc_html__( 'Font Size', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'form_text_typography[font-size-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacing' => [
						'id' => 'form_text_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingTablet' => [
						'id' => 'form_text_tablet_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'form_text_mobile_typography[letter-spacing]',
						'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'form_text_typography[letter-spacing-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'form_text_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightTablet' => [
						'id' => 'form_text_tablet_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'form_text_mobile_typography[line-height]',
						'label' => esc_html__( 'Line Height', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'form_text_typography[line-height-unit]',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'form_text_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'form_text_tablet_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'form_text_mobile_typography[text-transform]',
						'label' => esc_html__( 'Text Transform', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'form_text_typography[text-decoration]',
						'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_divider_after_forms_typography' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 15,
			],

			'ocean_input_background_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_input_background_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_input_background',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_input_label_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Label', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_input_label_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_label_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'label, body div.wpforms-container-full .wpforms-form .wpforms-field-label' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#929292'
						],
					]
				]
			],

			'ocean_input_placeholder_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Placeholder', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_input_placeholder_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_input_placeholder',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'form input[type="text"]::placeholder, form input[type="password"]::placeholder, form input[type="email"]::placeholder, form input[type="url"]::placeholder, form input[type="date"]::placeholder, form input[type="month"]::placeholder, form input[type="time"]::placeholder, form input[type="datetime"]::placeholder, form input[type="datetime-local"]::placeholder, form input[type="week"]::placeholder, form input[type="number"]::placeholder, form input[type="search"]::placeholder, form input[type="tel"]::placeholder, form input[type="color"]::placeholder, form select::placeholder, form textarea::placeholder, body div.wpforms-container-full .wpforms-form input[type=date]::placeholder, body div.wpforms-container-full .wpforms-form input[type=datetime]::placeholder, body div.wpforms-container-full .wpforms-form input[type=datetime-local]::placeholder, body div.wpforms-container-full .wpforms-form input[type=email]::placeholder, body div.wpforms-container-full .wpforms-form input[type=month]::placeholder, body div.wpforms-container-full .wpforms-form input[type=number]::placeholder, body div.wpforms-container-full .wpforms-form input[type=password]::placeholder, body div.wpforms-container-full .wpforms-form input[type=range]::placeholder, body div.wpforms-container-full .wpforms-form input[type=search]::placeholder, body div.wpforms-container-full .wpforms-form input[type=tel]::placeholder, body div.wpforms-container-full .wpforms-form input[type=text]::placeholder, body div.wpforms-container-full .wpforms-form input[type=time]::placeholder, body div.wpforms-container-full .wpforms-form input[type=url]::placeholder, body div.wpforms-container-full .wpforms-form input[type=week]::placeholder, body div.wpforms-container-full .wpforms-form select::placeholder, body div.wpforms-container-full .wpforms-form textarea::placeholder' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_input_color_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Text', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_input_color_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_input_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#333333',
						],
					]
				]
			],

			'ocean_input_border_color_wrap' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Border', 'oceanwp' ),
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_input_border_color_wrap',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_input_border_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea,.select2-container .select2-choice, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#dddddd',
						],
					],
					'focus' => [
						'id' => 'ocean_input_border_color_focus',
						'key' => 'focus',
						'label' => esc_html__( 'Focus', 'oceanwp' ),
						'selector' => [
							'form input[type="text"]:focus,form input[type="password"]:focus,form input[type="email"]:focus,form input[type="tel"]:focus,form input[type="url"]:focus,form input[type="search"]:focus,form textarea:focus,.select2-drop-active,.select2-dropdown-open.select2-drop-above .select2-choice,.select2-dropdown-open.select2-drop-above .select2-choices,.select2-drop.select2-drop-above.select2-drop-active,.select2-container-active .select2-choice,.select2-container-active .select2-choices, body div.wpforms-container-full .wpforms-form input:focus, body div.wpforms-container-full .wpforms-form textarea:focus, body div.wpforms-container-full .wpforms-form select:focus' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#bbbbbb',
						],
					]
				]
			],

			'ocean_site_forms_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Site-Forms-Zv0TX/" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_site_forms_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_after_site_forms_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10
	],

	'ocean_scroll_to_top_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Scroll To Top', 'oceanwp' ),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_divider_after_site_forms_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_scroll_top' => [
				'type' => 'ocean-switch',
				'label' => esc_html__( 'Enable Scroll To Top', 'oceanwp' ),
				'section' => 'ocean_scroll_to_top_section',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_scroll_top_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
				'active_callback' => 'ocean_is_scroll_top',
			],

			'ocean_scroll_top_visibility' => [
				'type' => 'ocean-select',
				'label' => esc_html__( 'Visibility', 'oceanwp' ),
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'default' => 'all-devices',
				'priority' => 10,
				'hideLabel' => false,
				'wrapper' => 'ocean_scroll_top_visibility',
				'multiple' => false,
				'active_callback' => 'ocean_is_scroll_top',
				'sanitize_callback' => 'sanitize_key',
				'choices'  => [
					'all-devices'        => esc_html__( 'Show on All Devices', 'oceanwp' ),
					'hide-tablet'        => esc_html__( 'Hide on Tablet', 'oceanwp' ),
					'hide-mobile'        => esc_html__( 'Hide on Mobile', 'oceanwp' ),
					'hide-tablet-mobile' => esc_html__( 'Hide on Tablet and Mobile', 'oceanwp' )
				],
			],

			'ocean_divider_after_scroll_top_visibility' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 20,
				'active_callback' => 'ocean_is_scroll_top',
			],

			'ocean_scroll_top_size_setting' => [
				'id' => 'ocean_scroll_top_size_setting',
				'label'    => esc_html__( 'Button Size', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'active_callback' => 'ocean_is_scroll_top',
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 1,
				'max'               => 60,
				'step'              => 1,
				'bottom'            => 25,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id' => 'ocean_scroll_top_size',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 40,
						],
					],
					'tablet' => [
						'id' => 'ocean_scroll_top_size_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_scroll_top_size_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_scroll_top_size_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'#scroll-top' => ['width', 'height', 'line-height']
				]
			],

			'ocean_scroll_top_border_radius_settings' => [
				'id' => 'ocean_scroll_top_border_radius_settings',
				'label'    => esc_html__( 'Border Radius (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'radius',
				'active_callback' => 'ocean_is_scroll_top',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_scroll_top_border_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 2,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_scroll_top_border_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 2,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_scroll_top_border_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 2,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_scroll_top_border_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 2,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_scroll_top_border_tablet_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_scroll_top_border_tablet_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_scroll_top_border_tablet_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_scroll_top_border_tablet_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_scroll_top_border_mobile_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_scroll_top_border_mobile_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_scroll_top_border_mobile_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_scroll_top_border_mobile_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => '#scroll-top',
					'property' => 'border-radius'
				],
			],

			'ocean_divider_after_scroll_top_border_radius' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'active_callback' => 'ocean_is_scroll_top',
			],

			'ocean_scroll_to_top_position_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Button Position', 'oceanwp' ),
				'section' => 'ocean_scroll_to_top_section',
				'after' => 'ocean_divider_after_scroll_top_border_radius',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_scroll_top_position' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Position', 'oceanwp' ),
						'section' => 'ocean_scroll_to_top_position_section',
						'default'  => 'right',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'ocean_is_scroll_top',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'left'  => [
								'id'     => 'left',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'right' => [
								'id'     => 'right',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						],
					],

					'ocean_divider_after_scroll_top_position_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_scroll_to_top_position_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'active_callback' => 'ocean_is_scroll_top',
					],

					'ocean_scroll_top_bottom_position_setting' => [
						'id' => 'ocean_scroll_top_bottom_position_setting',
						'label'    => esc_html__( 'Bottom Position', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_scroll_to_top_position_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'active_callback' => 'ocean_is_scroll_top',
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 200,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_scroll_top_bottom_position',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 20
								],
							],
							'unit' => [
								'id' => 'ocean_scroll_top_bottom_position_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px'
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'#scroll-top' => ['bottom'],
						]
					],

					'ocean_scroll_top_side_position_setting' => [
						'label'    => esc_html__( 'Side Position', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_scroll_to_top_position_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'wrapper'      => 'ocean_scroll_top_side_position_setting',
						'active_callback' => 'ocean_is_scroll_top',
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 200,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_scroll_top_side_position',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 20
								],
							],
							'unit' => [
								'id' => 'ocean_scroll_top_side_position_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px'
								],
							],
						],
					],

					'ocean_site_scroll_top_button_position_need_help' => [
						'type' => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Button-Position-panel-DKGjr/" target="_blank">', '</a>' ),
						'class' => 'need-help',
						'section' => 'ocean_scroll_to_top_position_section',
						'transport' => 'postMessage',
						'active_callback' => 'ocean_is_scroll_top',
						'priority' => 10,
					],
				]
			],

			'ocean_spacer_after_scroll_top_position_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'active_callback' => 'ocean_is_scroll_top',
			],

			'ocean_scroll_to_top_icon_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Button Icon', 'oceanwp' ),
				'section' => 'ocean_scroll_to_top_section',
				'after' => 'ocean_spacer_after_scroll_top_position_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_scroll_top_icon_size_setting' => [
						'id' => 'ocean_scroll_top_icon_size_setting',
						'label'    => esc_html__( 'Icon Size', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_scroll_to_top_icon_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'active_callback' => 'ocean_is_scroll_top',
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 60,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_scroll_top_icon_size',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 10
								],
							],
							'unit' => [
								'id' => 'ocean_scroll_top_icon_size_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px'
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'#scroll-top' => ['font-size'],
							'#scroll-top .owp-icon' => ['width', 'height'],
						]
					],

					'ocean_divider_after_scroll_top_icon_size_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_scroll_to_top_icon_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 20,
						'active_callback' => 'ocean_is_scroll_top',
					],

					'ocean_scroll_top_arrow' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Select Icon', 'oceanwp' ),
						'section' => 'ocean_scroll_to_top_icon_section',
						'default'  => 'angle_up',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => true,
						'active_callback' => 'ocean_is_scroll_top',
						'sanitize_callback' => 'sanitize_key',
						'choices' => oceanwp_get_scroll_top_icons(),
					],

					'ocean_site_scroll_top_button_icon_need_help' => [
						'type' => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Button-Icon-panel-Tsj_j/" target="_blank">', '</a>' ),
						'class' => 'need-help',
						'section' => 'ocean_scroll_to_top_icon_section',
						'transport' => 'postMessage',
						'active_callback' => 'ocean_is_scroll_top',
						'priority' => 10,
					],
				]
			],

			'ocean_divider_after_scroll_top_icon_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'active_callback' => 'ocean_is_scroll_top',
				'priority' => 10,
				'top' => 20,
				'bottom' => 10
			],

			'ocean_scroll_top_bg_color_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background', 'oceanwp' ),
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_scroll_top_bg_color_setting',
				'active_callback' => 'ocean_is_scroll_top',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_scroll_top_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#scroll-top' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'rgba(0,0,0,0.4)',
						],
					],
					'hover' => [
						'id' => 'ocean_scroll_top_bg_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#scroll-top:hover' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'rgba(0,0,0,0.8)',
						],
					]
				]
			],

			'ocean_scroll_top_color_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Icon', 'oceanwp' ),
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_scroll_top_color_setting',
				'active_callback' => 'ocean_is_scroll_top',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_scroll_top_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#scroll-top' => 'color',
							'#scroll-top .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#ffffff',
						],
					],
					'hover' => [
						'id' => 'ocean_scroll_top_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#scroll-top:hover' => 'color',
							'#scroll-top:hover .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#ffffff',
						],
					]
				]
			],

			'ocean_site_scroll_top_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Scroll-to-Top-0wIZt/" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_scroll_to_top_section',
				'transport' => 'postMessage',
				'active_callback' => 'ocean_is_scroll_top',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_after_scroll_top_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10
	],

	'ocean_site_pagination_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Site Pagination', 'oceanwp' ),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_divider_after_scroll_top_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_pagination_align' => [
				'type' => 'ocean-buttons',
				'label' => esc_html__( 'Position', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'default'  => 'right',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'left' => [
						'id'     => 'left',
						'label'   => esc_html__( 'Left','oceanwp' ),
						'content' => esc_html__( 'Left','oceanwp' ),
					],
					'center' => [
						'id'     => 'center',
						'label'   => esc_html__( 'Center','oceanwp' ),
						'content' => esc_html__( 'Center','oceanwp' ),
					],
					'right' => [
						'id'     => 'right',
						'label'   => esc_html__( 'Right','oceanwp' ),
						'content' => esc_html__( 'Right','oceanwp' ),
					]
				]
			],

			'ocean_divider_after_pagination_position_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 20,
			],

			'ocean_pagination_border_width_setting' => [
				'id' => 'ocean_pagination_border_width_setting',
				'label'    => esc_html__( 'Border Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 1,
				'max'          => 20,
				'step'         => 1,
				'bottom'            => 30,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args'      => [
					'desktop' => [
						'id' => 'ocean_pagination_border_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 1,
						],
					],
					'tablet' => [
						'id' => 'ocean_pagination_border_width_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_pagination_border_width_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_pagination_border_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span' => ['border-width'],
				]
			],

			'ocean_pagination_border_radius_setting' => [
				'id' => 'ocean_pagination_border_radius_setting',
				'label'    => esc_html__( 'Border Radius (px)', 'oceanwp' ),
				'type'     => 'ocean-spacing',
				'section'  => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isType'       => 'radius',
				'setting_args' => [
					'spacingTop' => [
						'id' => 'ocean_pagination_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingRight' => [
						'id' => 'ocean_pagination_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingBottom' => [
						'id' => 'ocean_pagination_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingLeft' => [
						'id' => 'ocean_pagination_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1,
						],
					],
					'spacingTopTablet' => [
						'id' => 'ocean_pagination_tablet_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightTablet' => [
						'id' => 'ocean_pagination_tablet_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomTablet' => [
						'id' => 'ocean_pagination_tablet_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftTablet' => [
						'id' => 'ocean_pagination_tablet_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingTopMobile' => [
						'id' => 'ocean_pagination_mobile_top_radius',
						'label' => esc_html__( 'Top', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingRightMobile' => [
						'id' => 'ocean_pagination_mobile_right_radius',
						'label' => esc_html__( 'Right', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingBottomMobile' => [
						'id' => 'ocean_pagination_mobile_bottom_radius',
						'label' => esc_html__( 'Bottom', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'spacingLeftMobile' => [
						'id' => 'ocean_pagination_mobile_left_radius',
						'label' => esc_html__( 'Left', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'selector' => '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span',
					'property' => 'border-radius'
				],
			],

			'ocean_title_for_site_pagination_typography_and_color' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
			],

			'ocean_pagination_font_size_setting' => [
				'id' => 'ocean_pagination_font_size_setting',
				'label'    => esc_html__( 'Pagination Text Size', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'top'               => 20,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_pagination_font_size',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 18,
						],
					],
					'tablet' => [
						'id' => 'ocean_pagination_font_size_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_pagination_font_size_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_pagination_font_size_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span' => ['font-size'],
				]
			],

			'ocean_divider_after_pagination_font_size_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 20,
			],

			'ocean_pagination_bg_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_pagination_bg_setting',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_pagination_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'hover' => [
						'id' => 'ocean_pagination_hover_bg',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#f8f8f8',
						],
					]
				]
			],

			'ocean_pagination_color_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Pagination Text', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_pagination_color_setting',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_pagination_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span' => 'color',
							'.page-numbers a .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#555555',
						],
					],
					'hover' => [
						'id' => 'ocean_pagination_hover_color',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover' => 'color',
							'.page-numbers:hover a .owp-icon use' => 'stroke'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#333333',
						],
					]
				]
			],

			'ocean_pagination_border_color_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Border', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_pagination_color_setting',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_pagination_border_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span' => 'border-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#e9e9e9',
						],
					],
					'hover' => [
						'id' => 'ocean_pagination_border_hover_color',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover' => 'border-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#e9e9e9',
						],
					]
				]
			],

			'ocean_pagination_bg_active_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background: Active', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_pagination_bg_active_setting',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_pagination_bg_active',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.page-numbers .page-numbers.current' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_pagination_color_active_setting' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Pagination Text: Active', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'wrapper' => 'ocean_pagination_color_active_setting',
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_pagination_color_active',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.page-numbers .page-numbers.current' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],


			'ocean_divider_after_pagination_colors_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_pagination_did_you_know_links' => [
				'type' => 'ocean-links',
				'label' => esc_html__( 'Did you know?', 'oceanwp' ),
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'class' => 'didyouknow',
				'linkIcon' => 'link-2',
				'titleIcon' => 'did-you-know',
				'active_callback' => 'ocean_is_oe_active',
				'links' => [
					'did_you_know_link_1' => [
						'label' => esc_html__( 'With OceanWP you can easily create unique pagination styles for your blog, shop, and other areas of your site..', 'oceanwp' ),
						'url' => esc_url( 'https://docs.oceanwp.org/' ),
						'target' => '_blank'
					]
				]
			],

			'ocean_pagination_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings#Site-Pagination-xRn8b/" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_site_pagination_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],

		]
	],

	'ocean_style_and_settings_need_help' => [
		'type' => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/898-customizer-site-style-settings/" target="_blank">', '</a>' ),
		'class' => 'need-help',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
	]

];
