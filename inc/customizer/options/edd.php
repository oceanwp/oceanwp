<?php
/**
 * OceanWP Customizer Settings: EDD
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_spacer_for_edd_general_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_edd_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	'ocean_edd_general' => [
		'type' => 'section',
		'title' => esc_html__('General', 'oceanwp'),
		'section' => 'ocean_edd_settings',
		'after' => 'ocean_spacer_for_edd_general_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_desc_for_edd_general_section' => [
				'type' => 'ocean-content',
				'isContent' => esc_html__('For some options, you must save and refresh your live site to preview changes.', 'oceanwp'),
				'section' => 'ocean_edd_general',
				'class' => 'description',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_edd_custom_sidebar' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Custom EDD Sidebar', 'oceanwp'),
				'section' => 'ocean_edd_general',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_content_for_edd_custom_sidebar_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_edd_general',
				'transport' => 'postMessage',
				'priority' => 10,
			],

		]
	],

	'ocean_spacer_for_edd_menu_cart_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_edd_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_edd_menu_cart' => [
		'type' => 'section',
		'title' => esc_html__('Menu Cart', 'oceanwp'),
		'section' => 'ocean_edd_settings',
		'after' => 'ocean_spacer_for_edd_menu_cart_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_edd_menu_icon_visibility' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Visibility', 'oceanwp' ),
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'refresh',
				'default' => 'default',
				'priority' => 10,
				'hideLabel' => false,
				'wrapper' => 'ocean_edd_menu_icon_visibility',
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'  => [
					'default'  => esc_html__( 'Display On All Devices', 'oceanwp' ),
					'disabled' => esc_html__( 'Disabled On All Devices', 'oceanwp' ),
				],
			],

			'ocean_divider_after_edd_menu_icon_visibility' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_edd_menu_icon_hide_if_empty' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Hide when empty', 'oceanwp'),
				'section' => 'ocean_edd_menu_cart',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_edd_display_cart_edd_added' => [
				'id' => 'ocean_edd_display_cart_edd_added',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Display Cart When Product Added', 'oceanwp'),
				'desc' => esc_html__( 'Display the cart when a product is added, work in the shop and the single product pages if ajax is enabled.', 'oceanwp' ),
				'section' => 'ocean_edd_menu_cart',
				'default'  => 'no',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'yes'  => [
						'id'     => 'yes',
						'label'   => esc_html__('Yes', 'oceanwp'),
						'content' => esc_html__('Yes', 'oceanwp'),
					],
					'no'  => [
						'id'     => 'no',
						'label'   => esc_html__('No', 'oceanwp'),
						'content' => esc_html__('No', 'oceanwp'),
					]
				]
			],

			'ocean_title_for_edd_menu_cart' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Menu Icon', 'oceanwp' ),
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_edd_menu_bag_style' => [
				'id' => 'ocean_edd_menu_bag_style',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Menu Icon Style', 'oceanwp'),
				'desc' => esc_html__( 'This setting replace the cart icon by a bag with the items count in it.', 'oceanwp' ),
				'section' => 'ocean_edd_menu_cart',
				'default'  => 'no',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'yes'  => [
						'id'     => 'yes',
						'label'   => esc_html__('Bag Style', 'oceanwp'),
						'content' => esc_html__('Bag Style', 'oceanwp'),
					],
					'no'  => [
						'id'     => 'no',
						'label'   => esc_html__('Icon', 'oceanwp'),
						'content' => esc_html__('Icon', 'oceanwp'),
					]
				]
			],

			'ocean_divider_after_edd_menu_bag_style' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 20,
			],

			'ocean_edd_menu_cart_bag_style_section' => [
				'type' => 'section',
				'title' => esc_html__('Menu Icon Style', 'oceanwp'),
				'section' => 'ocean_edd_menu_cart',
				'after' => 'ocean_divider_after_edd_menu_bag_style',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_edd_menu_icon_display' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Display', 'oceanwp' ),
						'section' => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'refresh',
						'default' => 'icon_count',
						'priority' => 10,
						'hideLabel' => false,
						'wrapper' => 'ocean_edd_menu_icon_display',
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_not_edd_bag_style',
						'sanitize_callback' => 'sanitize_key',
						'choices'  => [
							'icon' => esc_html__( 'Icon', 'oceanwp' ),
							'icon_total' => esc_html__( 'Icon And Cart Total', 'oceanwp' ),
							'icon_count' => esc_html__( 'Icon And Cart Count', 'oceanwp' ),
							'icon_count_total' => esc_html__( 'Icon And Cart Count + Total', 'oceanwp' ),
						],
					],

					'ocean_edd_menu_icon' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__('Cart Icon', 'oceanwp'),
						'section' => 'ocean_edd_menu_cart_bag_style_section',
						'default'  => 'icon_handbag',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => true,
						'sanitize_callback' => 'sanitize_text_field',
						'active_callback' => 'oceanwp_cac_is_not_edd_bag_style',
						'choices' => oceanwp_cart_icons_list(),
					],

					'ocean_edd_menu_custom_icon' => [
						'label'    => esc_html__( 'Custom Icon', 'oceanwp' ),
						'desc' => esc_html__( 'Enter your full icon class', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback' => 'oceanwp_cac_is_not_edd_bag_style',
					],

					'ocean_edd_menu_icon_size' => [
						'id'       => 'ocean_edd_menu_icon_size',
						'label'    => esc_html__( 'Icon Size (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => true,
						'min'          => 10,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_not_edd_bag_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_edd_menu_icon_size',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'tablet' => [
								'id' => 'ocean_edd_menu_icon_size_tablet',
								'label' => esc_html__( 'Tablet', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'mobile' => [
								'id' => 'ocean_edd_menu_icon_size_mobile',
								'label' => esc_html__( 'Mobile', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.eddmenucart i' => ['font-size'],
							'.eddmenucart .owp-icon' => ['width', 'height'],
							'.oceanwp-mobile-menu-icon a.eddmenucart' => ['font-size'],
							'.oceanwp-mobile-menu-icon a.eddmenucart .owp-icon' => ['width', 'height'],
						]
					],

					'ocean_edd_menu_icon_center_vertically' => [
						'id'       => 'ocean_edd_menu_icon_center_vertically',
						'label'    => esc_html__( 'Center Vertically', 'oceanwp' ),
						'desc'     => esc_html__( 'Use this field to center your icon vertically', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => true,
						'min'          => 0,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_not_edd_bag_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_edd_menu_icon_center_vertically',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'tablet' => [
								'id' => 'ocean_edd_menu_icon_center_vertically_tablet',
								'label' => esc_html__( 'Tablet', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'mobile' => [
								'id' => 'ocean_edd_menu_icon_center_vertically_mobile',
								'label' => esc_html__( 'Mobile', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.eddmenucart i' => ['top'],
							'.oceanwp-mobile-menu-icon a.eddmenucart' => ['top'],
						]
					],


					'ocean_edd_menu_bag_style_total' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Icon Display Total', 'oceanwp'),
						'section' => 'ocean_edd_menu_cart_bag_style_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'oceanwp_cac_is_edd_bag_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_edd_menu_bag_style_total' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 10,
						'active_callback' => 'oceanwp_cac_is_edd_bag_style',
					],

					'ocean_edd_menu_bag_icon_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Icon Color', 'oceanwp' ),
						'section' => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_menu_bag_icon_color',
						'active_callback' => 'oceanwp_cac_is_edd_bag_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_menu_bag_icon_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.eddmenucart-cart-icon .eddmenucart-count, .eddmenucart-cart-icon .eddmenucart-count:after' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333'
								],
							],
							'hover' => [
								'id' => 'ocean_edd_menu_bag_icon_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count' => 'background-color',
									'.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count, .bag-style:hover .eddmenucart-cart-icon .eddmenucart-count:after, .show-cart .eddmenucart-cart-icon .eddmenucart-count:after' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0'
								],
							],
						]
					],

					'ocean_edd_menu_bag_icon_count_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Icon Count Color', 'oceanwp' ),
						'section' => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_menu_bag_icon_count_color',
						'active_callback' => 'oceanwp_cac_is_edd_bag_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_menu_bag_icon_count_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.eddmenucart-cart-icon .eddmenucart-count, .edd-menu-icon .eddmenucart-total span' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333'
								],
							],
							'hover' => [
								'id' => 'ocean_edd_menu_bag_icon_hover_count_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff'
								],
							],
						]
					],

					'ocean_content_for_edd_menu_icon_style_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_edd_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],

				]
			],

			'ocean_title_for_edd_menu_cart_icon_behaviour' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Menu Icon Behavior', 'oceanwp' ),
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_edd_menu_icon_style' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Style', 'oceanwp' ),
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'default' => 'drop_down',
				'priority' => 10,
				'hideLabel' => false,
				'wrapper' => 'ocean_edd_menu_icon_style',
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'  => [
					'drop_down'   => esc_html__( 'Drop-Down', 'oceanwp' ),
					'cart'        => esc_html__( 'Go To Cart', 'oceanwp' ),
					'custom_link' => esc_html__( 'Custom Link', 'oceanwp' ),
				]
			],

			'ocean_edd_menu_icon_custom_link' => [
				'label'    => esc_html__( 'Custom Link', 'oceanwp' ),
				'desc'     => esc_html__( 'The Custom Link style need to be selected', 'oceanwp' ),
				'type'     => 'ocean-text',
				'section'  => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'esc_url_raw'
			],

			'ocean_divider_after_edd_menu_icon_custom_link' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_edd_cart_dropdown_styling_section' => [
				'type' => 'section',
				'title' => esc_html__('Drop-down Styling', 'oceanwp'),
				'section' => 'ocean_edd_menu_cart',
				'after' => 'ocean_divider_after_edd_menu_icon_custom_link',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_edd_cart_dropdown_style' => [
						'id' => 'ocean_edd_cart_dropdown_style',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Style', 'oceanwp'),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'default'  => 'compact',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'compact'  => [
								'id'     => 'compact',
								'label'   => esc_html__('Compact', 'oceanwp'),
								'content' => esc_html__('Compact', 'oceanwp'),
							],
							'spacious'  => [
								'id'     => 'spacious',
								'label'   => esc_html__('Spacious', 'oceanwp'),
								'content' => esc_html__('Spacious', 'oceanwp'),
							]
						]
					],

					'ocean_divider_after_edd_cart_dropdown_style_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1
					],

					'ocean_edd_cart_dropdown_width' => [
						'id'       => 'ocean_edd_cart_dropdown_width',
						'label'    => esc_html__( 'Cart Dropdowns Width (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 30,
						'max'          => 600,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_edd_cart_dropdown_width',
								'label' => esc_html__( 'Value', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 350
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.current-shop-items-dropdown' => ['width']
						]
					],


					'ocean_divider_after_edd_cart_dropdown_width_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1
					],

					'ocean_edd_cart_dropdown_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Dropdown Background Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_borders' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Dropdown Borders Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_borders',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_borders',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget li' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e6e6e6'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Product Title Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_title_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget li .edd-cart-item-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Price Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_price_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget li .edd-cart-item-price' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#57bf6d'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_remove_link_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Remove Link Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_remove_link_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_remove_link_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#b3b3b3'
								],
							],
							'hover' => [
								'id' => 'ocean_edd_cart_dropdown_remove_link_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_subtotal_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Subtotal Background Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_subtotal_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_subtotal_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#fafafa'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_subtotal_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Subtotal Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_subtotal_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_subtotal_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#797979'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_subtotal_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Subtotal Border Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_subtotal_border_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_subtotal_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e6e6e6'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_total_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Total Price Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_total_price_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_total_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total .cart-total' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#57bf6d'
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_checkout_button_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Checkout Button Background', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_checkout_button_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_checkout_button_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_edd_cart_dropdown_checkout_button_bg_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_edd_cart_dropdown_checkout_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Checkout Button Color', 'oceanwp' ),
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_edd_cart_dropdown_checkout_button_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_cart_dropdown_checkout_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_edd_cart_dropdown_checkout_button_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_content_for_edd_dropdown_style_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_edd_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_content_for_edd_menu_cart_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_edd_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_spacer_for_edd_archives_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_edd_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_edd_archives' => [
		'type' => 'section',
		'title' => esc_html__('Archives', 'oceanwp'),
		'section' => 'ocean_edd_settings',
		'after' => 'ocean_spacer_for_edd_archives_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_edd_archive_layout' => [
				'label' => esc_html__( 'Layout', 'oceanwp' ),
				'type' => 'ocean-radio-image',
				'section' => 'ocean_edd_archives',
				'transport' => 'refresh',
				'default' => 'left-sidebar',
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

			'ocean_divider_after_edd_archive_layout_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_edd_archive_both_sidebars_style' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
				'section' => 'ocean_edd_archives',
				'transport' => 'refresh',
				'default' => 'scs-style',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_edd_archive_bs_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				],
			],

			'ocean_edd_archive_both_sidebars_content_width' => [
				'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_edd_archive_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_edd_archive_both_sidebars_content_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_edd_archive_both_sidebars_content_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_edd_archive_both_sidebars_sidebars_width' => [
				'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_edd_archive_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_edd_archive_both_sidebars_sidebars_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_edd_archive_both_sidebars_sidebars_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_edd_archive_sidebar_order' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
				'section' => 'ocean_edd_archives',
				'transport' => 'refresh',
				'default' => 'content-sidebar',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_edd_archive_rl_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
					'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
				],
			],

			'ocean_divider_after_edd_archive_sidebar_order_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_edd_archive_columns' => [
				'id'      => 'ocean_edd_archive_columns',
				'label'    => esc_html__( 'Shop Columns', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => true,
				'min'          => 1,
				'max'          => 4,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_edd_archive_columns',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 3,
						],
					],
					'tablet' => [
						'id' => 'ocean_edd_tablet_archive_columns',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_edd_mobile_archive_columns',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_divider_after_edd_archive_columns_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_edd_archives_product_section' => [
				'type' => 'section',
				'title' => esc_html__('Products', 'oceanwp'),
				'section' => 'ocean_edd_archives',
				'after' => 'ocean_divider_after_edd_archive_columns_settings',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'oceanwp_edd_archive_elements_positioning' => [
						'label' => esc_html__( 'Elements Positioning', 'oceanwp' ),
						'type' => 'ocean-sortable',
						'section'  => 'ocean_edd_archives_product_section',
						'transport' => 'refresh',
						'priority' => 10,
						'default'  => [ 'image', 'category', 'title', 'price', 'description', 'button' ],
						'hideLabel' => false,
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
						'choices' => [
							'image'       => esc_html__( 'Image', 'oceanwp' ),
							'category'    => esc_html__( 'Category', 'oceanwp' ),
							'title'       => esc_html__( 'Title', 'oceanwp' ),
							'price'       => esc_html__( 'Price', 'oceanwp' ),
							'description' => esc_html__( 'Description', 'oceanwp' ),
							'button'      => esc_html__( 'Add To Cart Button', 'oceanwp' ),
						]
					],

					'ocean_divider_after_edd_archive_elements_positioning_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_edd_archives_product_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
					],

					'ocean_edd_entry_content_alignment' => [
						'id' => 'ocean_edd_entry_content_alignment',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Content Alignment', 'oceanwp'),
						'section' => 'ocean_edd_archives_product_section',
						'default'  => 'center',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'left' => [
								'id'     => 'left',
								'label'   => esc_html__('Left', 'oceanwp'),
								'content' => esc_html__('Left', 'oceanwp'),
							],
							'center'  => [
								'id'     => 'center',
								'label'   => esc_html__('Center', 'oceanwp'),
								'content' => esc_html__('Center', 'oceanwp'),
							],
							'right'  => [
								'id'     => 'right',
								'label'   => esc_html__('Right', 'oceanwp'),
								'content' => esc_html__('Right', 'oceanwp'),
							]
						]
					],

					'ocean_edd_archive_variable_button' => [
						'id' => 'ocean_edd_archive_variable_button',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Variable Product Button', 'oceanwp'),
						'section' => 'ocean_edd_archives_product_section',
						'default'  => 'button',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'button' => [
								'id'     => 'button',
								'label'   => esc_html__('Button', 'oceanwp'),
								'content' => esc_html__('Button', 'oceanwp'),
							],
							'options'  => [
								'id'     => 'options',
								'label'   => esc_html__('Options', 'oceanwp'),
								'content' => esc_html__('Options', 'oceanwp'),
							]
						]
					],

					'ocean_edd_archive_image_width' => [
						'label'       => esc_html__( 'Custom Image Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_edd_archives_product_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 0,
						'max'          => 1000,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_edd_archive_image_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 450
								],
							],
							'unit' => [
								'id' => 'ocean_edd_archive_image_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 'px'
								],
							],
						],
					],

					'ocean_edd_archive_image_height' => [
						'label'       => esc_html__( 'Custom Image Height', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_edd_archives_product_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 0,
						'max'          => 1000,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_edd_archive_image_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 450
								],
							],
							'unit' => [
								'id' => 'ocean_edd_archive_image_height_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 'px'
								],
							],
						],
					],

					'ocean_edd_archive_excerpt_length' => [
						'label'    => esc_html__( 'Excerpt Length', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_edd_archives_product_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 0,
						'max'          => 500,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_edd_archive_excerpt_length',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 5,
								],
							]
						]
					],

					'ocean_content_for_edd_archive_product_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_edd_archives_product_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_divider_for_edd_archives_additional_styling_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_edd_archives_additional_styling_section' => [
				'type' => 'section',
				'title' => esc_html__('Additional Styling', 'oceanwp'),
				'section' => 'ocean_edd_archives',
				'after' => 'ocean_divider_for_edd_archives_additional_styling_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_edd_padding' => [
						'id' => 'ocean_edd_padding',
						'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_edd_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_edd_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_edd_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_edd_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_edd_tablet_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_edd_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_edd_tablet_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_edd_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_edd_mobile_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_edd_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_edd_mobile_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_edd_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.edd_downloads_list .edd_download_inner',
							'property' => 'padding'
						]
					],

					'ocean_edd_image_margin' => [
						'id' => 'ocean_edd_image_margin',
						'label'    => esc_html__( 'Image Margin (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'margin',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_edd_image_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_edd_image_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_edd_image_bottom_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_edd_image_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_edd_image_tablet_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_edd_image_tablet_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_edd_image_tablet_bottom_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_edd_image_tablet_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_edd_image_mobile_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_edd_image_mobile_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_edd_image_mobile_right_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_edd_image_mobile_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.edd_downloads_list .edd_download_inner .edd_download_image',
							'property' => 'margin'
						],
					],

					'ocean_edd_border_width' => [
						'id' => 'ocean_edd_border_width',
						'label'    => esc_html__( 'Border Width (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'border-width',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_edd_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_edd_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_edd_bottom_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_edd_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_edd_tablet_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_edd_tablet_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_edd_tablet_bottom_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_edd_tablet_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_edd_mobile_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_edd_mobile_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_edd_mobile_right_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_edd_mobile_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.edd_downloads_list .edd_download_inner',
							'property' => 'border-width'
						],
					],

					'ocean_edd_border_radius' => [
						'id' => 'ocean_edd_border_radius',
						'label'    => esc_html__( 'Border Radius (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'border-radius',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_edd_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_edd_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_edd_bottom_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_edd_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_edd_tablet_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_edd_tablet_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_edd_tablet_bottom_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_edd_tablet_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_edd_mobile_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_edd_mobile_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_edd_mobile_right_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_edd_mobile_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.edd_downloads_list .edd_download_inner',
							'property' => 'border-radius'
						],
					],

					'ocean_divider_after_edd_archives_border_radius_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_edd_background_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_background_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.edd_downloads_list .edd_download_inner' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_edd_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Border Color', 'oceanwp' ),
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.edd_downloads_list .edd_download_inner' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_edd_category_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Category Color', 'oceanwp' ),
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_category_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.edd_downloads_list .edd_download_inner .edd_download_categories a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'=> '#999999',
								],
							],
							'hover' => [
								'id' => 'ocean_edd_category_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.edd_downloads_list .edd_download_inner .edd_download_categories a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'=> '#13aff0',
								],
							],
						]
					],

					'ocean_edd_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.edd_downloads_list .edd_download_inner .edd_download_title a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'=> '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_edd_title_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.edd_downloads_list .edd_download_inner .edd_download_title a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'=> '#13aff0',
								],
							],
						]
					],

					'ocean_edd_entry_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Price Color', 'oceanwp' ),
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_edd_entry_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.edd_downloads_list .edd_download_inner span.edd_price, .edd_price_range_sep' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#57bf6d',
								],
							],
						]
					],

					'ocean_divider_after_edd_entry_price_color_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
					],

					'ocean_edd_archives_additional_styling_addtocart_section' => [
						'type' => 'section',
						'title' => esc_html__('Add to Cart', 'oceanwp'),
						'section' => 'ocean_edd_archives_additional_styling_section',
						'after' => 'ocean_divider_after_edd_entry_price_color_setting',
						'class' => 'section-site-layout',
						'priority' => 10,
						'options' => [
							'ocean_edd_entry_addtocart_border_style' => [
								'id' => 'ocean_edd_entry_addtocart_border_style',
								'type' => 'ocean-select',
								'label' => esc_html__('Border Style', 'oceanwp' ),
								'section' => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'default' => 'double',
								'priority' => 10,
								'hideLabel' => false,
								'multiple' => false,
								'sanitize_callback' => 'sanitize_key',
								'choices' => [
									'none' => esc_html__( 'None', 'oceanwp' ),
									'solid' => esc_html__( 'Solid', 'oceanwp' ),
									'double' => esc_html__( 'Double', 'oceanwp' ),
									'dashed' => esc_html__( 'Dashed', 'oceanwp' ),
									'dotted' => esc_html__( 'Dotted', 'oceanwp' ),
								],
								'preview' => 'queryWithAttr',
								'css' => [
									'selector' => '.edd_downloads_list .edd_download_inner .button',
									'property' => 'border-style'
								]
							],

							'ocean_edd_entry_addtocart_border_size' => [
								'id'      => 'ocean_edd_entry_addtocart_border_size',
								'label'    => esc_html__( 'Border Width', 'oceanwp' ),
								'type'     => 'ocean-range-slider',
								'section'  => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel'    => false,
								'isUnit'       => true,
								'isResponsive' => false,
								'min'          => 1,
								'max'          => 20,
								'step'         => 1,
								'sanitize_callback' => 'oceanwp_sanitize_number_blank',
								'setting_args' => [
									'desktop' => [
										'id' => 'ocean_edd_entry_addtocart_border_size',
										'label' => esc_html__( 'Desktop', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
										],
									],
									'unit' => [
										'id' => 'ocean_edd_entry_addtocart_border_size_unit',
										'label' => esc_html__( 'Unit', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
											'default' => 'px',
										],
									],
								],
								'preview' => 'queryWithType',
								'css' => [
									'.edd_downloads_list .edd_download_inner .button' => ['border-width']
								]
							],

							'ocean_edd_entry_addtocart_border_radius' => [
								'id'      => 'ocean_edd_entry_addtocart_border_radius',
								'label'    => esc_html__( 'Border Radius', 'oceanwp' ),
								'type'     => 'ocean-range-slider',
								'section'  => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel'    => false,
								'isUnit'       => true,
								'isResponsive' => false,
								'min'          => 1,
								'max'          => 100,
								'step'         => 1,
								'sanitize_callback' => 'oceanwp_sanitize_number_blank',
								'setting_args' => [
									'desktop' => [
										'id' => 'ocean_edd_entry_addtocart_border_radius',
										'label' => esc_html__( 'Desktop', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
										],
									],
									'unit' => [
										'id' => 'ocean_edd_entry_addtocart_border_radius_unit',
										'label' => esc_html__( 'Unit', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
											'default' => 'px',
										],
									],
								],
								'preview' => 'queryWithType',
								'css' => [
									'.edd_downloads_list .edd_download_inner .button' => ['border-radius']
								]
							],

							'ocean_divider_after_edd_entry_addtocart_border_radius_setting' => [
								'type' => 'ocean-divider',
								'section' => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'top' => 10
							],

							'ocean_edd_entry_addtocart_bg_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Background Color', 'oceanwp' ),
								'section' => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_edd_entry_addtocart_bg_color',
										'key' => 'normal',
										'label' => esc_html__( 'Normal', 'oceanwp' ),
										'selector' => [
											'.edd_downloads_list .edd_download_inner .button' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
										],
									],
									'hover' => [
										'id' => 'ocean_edd_entry_addtocart_bg_color_hover',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.edd_downloads_list .edd_download_inner .button:hover' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
										],
									],
								]
							],

							'ocean_edd_entry_addtocart_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Color', 'oceanwp' ),
								'section' => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_edd_entry_addtocart_color',
										'key' => 'normal',
										'label' => esc_html__( 'Normal', 'oceanwp' ),
										'selector' => [
											'.edd_downloads_list .edd_download_inner .button' => 'color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#848494',
										],
									],
									'hover' => [
										'id' => 'ocean_edd_entry_addtocart_color_hover',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.edd_downloads_list .edd_download_inner .button:hover' => 'color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#13aff0',
										],
									],
								]
							],

							'ocean_edd_entry_addtocart_border_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Border Color', 'oceanwp' ),
								'section' => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_edd_entry_addtocart_border_color',
										'key' => 'normal',
										'label' => esc_html__( 'Normal', 'oceanwp' ),
										'selector' => [
											'.edd_downloads_list .edd_download_inner .button' => 'border-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#e4e4e4',
										],
									],
									'hover' => [
										'id' => 'ocean_edd_entry_addtocart_border_color_hover',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.edd_downloads_list .edd_download_inner .button:hover' => 'border-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#13aff0',
										],
									],
								]
							],

							'ocean_content_for_edd_archive_additional_styling_addtocart_need_help_link' => [
								'type' => 'ocean-content',
								'isContent' => ocean_render_content_need_help(),
								'class' => 'need-help',
								'section' => 'ocean_edd_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
							],
						]
					],

					'ocean_content_for_edd_archive_additional_styling_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_edd_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_content_for_edd_archive_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_edd_archives',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_spacer_for_edd_single_product_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_edd_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_edd_single' => [
		'type' => 'section',
		'title' => esc_html__('Single Product', 'oceanwp'),
		'section' => 'ocean_edd_settings',
		'after' => 'ocean_spacer_for_edd_single_product_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_edd_download_layout' => [
				'label' => esc_html__( 'Layout', 'oceanwp' ),
				'type' => 'ocean-radio-image',
				'section' => 'ocean_edd_single',
				'transport' => 'refresh',
				'default' => 'left-sidebar',
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

			'ocean_divider_after_edd_download_layout_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_edd_download_both_sidebars_style' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
				'section' => 'ocean_edd_single',
				'transport' => 'refresh',
				'default' => 'scs-style',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_edd_download_bs_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				],
			],

			'ocean_edd_download_both_sidebars_content_width' => [
				'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_edd_download_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_edd_download_both_sidebars_content_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_edd_download_both_sidebars_content_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_edd_download_both_sidebars_sidebars_width' => [
				'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_edd_download_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_edd_download_both_sidebars_sidebars_width',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_edd_download_both_sidebars_sidebars_width_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_edd_download_sidebar_order' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
				'section' => 'ocean_edd_single',
				'transport' => 'refresh',
				'default' => 'content-sidebar',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_edd_download_rl_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
					'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
				],
			],

			'ocean_divider_after_edd_download_sidebar_order_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_edd_display_navigation' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Display Product Navigation', 'oceanwp'),
				'section' => 'ocean_edd_single',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_edd_display_add_to_cart' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Display Add to Cart Button', 'oceanwp'),
				'section' => 'ocean_edd_single',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_edd_display_add_to_cart_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_edd_next_prev_taxonomy' => [
				'id' => 'ocean_edd_next_prev_taxonomy',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Next/Prev Taxonomy', 'oceanwp'),
				'section' => 'ocean_edd_single',
				'default'  => 'download_tag',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'download_category' => [
						'id'     => 'download_category',
						'label'   => esc_html__('Category', 'oceanwp'),
						'content' => esc_html__('Category', 'oceanwp'),
					],
					'download_tag'  => [
						'id'     => 'download_tag',
						'label'   => esc_html__('Tag', 'oceanwp'),
						'content' => esc_html__('Tag', 'oceanwp'),
					]
				]
			],

			'ocean_divider_after_edd_next_prev_taxonomy_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_single_edd_title_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Title Color', 'oceanwp' ),
				'section' => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_single_edd_title_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.single-download .edd-download .edd_download_title' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					]
				]
			],

			'ocean_single_edd_description_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Description Color', 'oceanwp' ),
				'section' => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_single_edd_description_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.single-download .edd-download .edd_download_content' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#aaaaaa',
						],
					]
				]
			],

			'ocean_content_for_edd_single_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_edd_single',
				'transport' => 'postMessage',
				'priority' => 10,
			],

		]
	],

	'ocean_spacer_for_edd_checkout_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_edd_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_edd_cart_checkout' => [
		'type' => 'section',
		'title' => esc_html__('Checkout Page', 'oceanwp'),
		'section' => 'ocean_edd_settings',
		'after' => 'ocean_spacer_for_edd_checkout_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_edd_distraction_free_checkout' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Distraction Free Checkout', 'oceanwp'),
				'section' => 'ocean_edd_cart_checkout',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_edd_distraction_free_checkout_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_edd_checkout_titles_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Titles Color', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_titles_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_form_wrap legend' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#222',
						],
					],
				]
			],

			'ocean_edd_checkout_titles_border_bottom_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Titles Border Bottom Color', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_titles_border_bottom_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_form_wrap legend' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#e5e5e5',
						],
					],
				]
			],

			'ocean_edd_checkout_borders_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Borders Color', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_borders_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_cart th, #edd_checkout_cart td, #edd_checkout_form_wrap #edd-discount-code-wrap, #edd_checkout_form_wrap #edd_final_total_wrap, #edd_checkout_form_wrap #edd_show_discount, #edd_checkout_form_wrap fieldset' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#eee',
						],
					],
				]
			],

			'ocean_edd_checkout_label_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Label Color', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_label_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_form_wrap .edd-label' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#929292',
						],
					],
				]
			],

			'ocean_edd_checkout_description_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Description Color', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_description_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_form_wrap .edd-description' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#666',
						],
					],
				]
			],

			'ocean_edd_checkout_head_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Head Background', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_head_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_cart .edd_cart_header_row th, .edd-table tr th' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#fafafa',
						],
					],
				]
			],

			'ocean_edd_checkout_head_titles_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Head Titles Color', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_head_titles_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_cart .edd_cart_header_row th, .edd-table tr th' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#666',
						],
					],
				]
			],

			'ocean_edd_checkout_totals_table_titles_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Cart Totals Table Titles', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_totals_table_titles_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_cart th.edd_cart_total' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#666',
						],
					],
				]
			],

			'ocean_edd_checkout_remove_button_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Remove Button', 'oceanwp' ),
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_edd_checkout_remove_button_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_cart a.edd_cart_remove_item_btn' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333',
						],
					],
					'hover' => [
						'id' => 'ocean_edd_checkout_remove_button_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#edd_checkout_cart a.edd_cart_remove_item_btn:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					],
				]
			],

			'ocean_content_for_edd_checkout_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_edd_cart_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	]

];
