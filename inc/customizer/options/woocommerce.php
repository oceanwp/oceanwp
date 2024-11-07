<?php
/**
 * OceanWP Customizer Settings: WooCommerce
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_spacer_for_woo_store_notice_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	'woocommerce_store_notice' => [
		'type' => 'section',
		'title' => esc_html__('Store Notice', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_spacer_for_woo_store_notice_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_divider_before_woocommerce_store_notice_typography_settings' => [
				'type' => 'ocean-divider',
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20
			],

			'ocean_woo_store_notice_typography' => [
				'id' => 'ocean_woo_store_notice_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__('Store Notice', 'oceanwp'),
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => '.woocommerce-store-notice.demo_store',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'woo_store_notice_typography[font-family]',
						'label' => esc_html__('Font Family', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'woo_store_notice_typography[font-weight]',
						'label' => esc_html__('Font Weight', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'woo_store_notice_tablet_typography[font-weight]',
						'label' => esc_html__('Font Weight', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'woo_store_notice_mobile_typography[font-weight]',
						'label' => esc_html__('Font Weight', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'woo_store_notice_typography[font-subset]',
						'label' => esc_html__('Font Subset', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'woo_store_notice_typography[font-size]',
						'label' => esc_html__('Font Size', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeTablet' => [
						'id' => 'woo_store_notice_tablet_typography[font-size]',
						'label' => esc_html__('Font Size', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'woo_store_notice_mobile_typography[font-size]',
						'label' => esc_html__('Font Size', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'woo_store_notice_typography[font-size-unit]',
						'label' => esc_html__('Unit', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'letterSpacing' => [
						'id' => 'woo_store_notice_typography[letter-spacing]',
						'label' => esc_html__('Letter Spacing', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1.5
						],
					],
					'letterSpacingTablet' => [
						'id' => 'woo_store_notice_tablet_typography[letter-spacing]',
						'label' => esc_html__('Letter Spacing', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'woo_store_notice_mobile_typography[letter-spacing]',
						'label' => esc_html__('Letter Spacing', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'woo_store_notice_typography[letter-spacing-unit]',
						'label' => esc_html__('Unit', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'woo_store_notice_typography[line-height]',
						'label' => esc_html__('Line Height', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 2
						],
					],
					'lineHeightTablet' => [
						'id' => 'woo_store_notice_tablet_typography[line-height]',
						'label' => esc_html__('Line Height', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'woo_store_notice_mobile_typography[line-height]',
						'label' => esc_html__('Line Height', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'woo_store_notice_typography[line-height-unit]',
						'label' => esc_html__('Unit', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'woo_store_notice_typography[text-transform]',
						'label' => esc_html__('Text Transform', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'woo_store_notice_tablet_typography[text-transform]',
						'label' => esc_html__('Text Transform', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'woo_store_notice_mobile_typography[text-transform]',
						'label' => esc_html__('Text Transform', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'woo_store_notice_typography[text-decoration]',
						'label' => esc_html__('Text Decoration', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_woo_store_notice_dismiss_link_typography' => [
				'id' => 'ocean_woo_store_notice_dismiss_link_typography',
				'type' => 'ocean-typography',
				'label' => esc_html__('Store Notice Dismiss', 'oceanwp'),
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'selector' => '.demo_store .woocommerce-store-notice__dismiss-link',
				'setting_args' => [
					'fontFamily' => [
						'id' => 'woo_store_notice_dismiss_link_typography[font-family]',
						'label' => esc_html__('Font Family', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeight' => [
						'id' => 'woo_store_notice_dismiss_link_typography[font-weight]',
						'label' => esc_html__('Font Weight', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightTablet' => [
						'id' => 'woo_store_notice_dismiss_link_tablet_typography[font-weight]',
						'label' => esc_html__('Font Weight', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontWeightMobile' => [
						'id' => 'woo_store_notice_dismiss_link_mobile_typography[font-weight]',
						'label' => esc_html__('Font Weight', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSubset' => [
						'id' => 'woo_store_notice_dismiss_link_typography[font-subset]',
						'label' => esc_html__('Font Subset', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSize' => [
						'id' => 'woo_store_notice_dismiss_link_typography[font-size]',
						'label' => esc_html__('Font Size', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeTablet' => [
						'id' => 'woo_store_notice_dismiss_link_tablet_typography[font-size]',
						'label' => esc_html__('Font Size', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeMobile' => [
						'id' => 'woo_store_notice_dismiss_link_mobile_typography[font-size]',
						'label' => esc_html__('Font Size', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'fontSizeUnit' => [
						'id' => 'woo_store_notice_dismiss_link_typography[font-size-unit]',
						'label' => esc_html__('Unit', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'letterSpacing' => [
						'id' => 'woo_store_notice_dismiss_link_typography[letter-spacing]',
						'label' => esc_html__('Letter Spacing', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 1.5
						],
					],
					'letterSpacingTablet' => [
						'id' => 'woo_store_notice_dismiss_link_tablet_typography[letter-spacing]',
						'label' => esc_html__('Letter Spacing', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingMobile' => [
						'id' => 'woo_store_notice_dismiss_link_mobile_typography[letter-spacing]',
						'label' => esc_html__('Letter Spacing', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'letterSpacingUnit' => [
						'id' => 'woo_store_notice_dismiss_link_typography[letter-spacing-unit]',
						'label' => esc_html__('Unit', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 'px'
						],
					],
					'lineHeight' => [
						'id' => 'woo_store_notice_dismiss_link_typography[line-height]',
						'label' => esc_html__('Line Height', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 2
						],
					],
					'lineHeightTablet' => [
						'id' => 'woo_store_notice_dismiss_link_tablet_typography[line-height]',
						'label' => esc_html__('Line Height', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightMobile' => [
						'id' => 'woo_store_notice_dismiss_link_mobile_typography[line-height]',
						'label' => esc_html__('Line Height', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'lineHeightUnit' => [
						'id' => 'woo_store_notice_dismiss_link_typography[line-height-unit]',
						'label' => esc_html__('Unit', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransform' => [
						'id' => 'woo_store_notice_dismiss_link_typography[text-transform]',
						'label' => esc_html__('Text Transform', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformTablet' => [
						'id' => 'woo_store_notice_dismiss_link_tablet_typography[text-transform]',
						'label' => esc_html__('Text Transform', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textTransformMobile' => [
						'id' => 'woo_store_notice_dismiss_link_mobile_typography[text-transform]',
						'label' => esc_html__('Text Transform', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'textDecoration' => [
						'id' => 'woo_store_notice_dismiss_link_typography[text-decoration]',
						'label' => esc_html__('Text Decoration', 'oceanwp'),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
				]
			],

			'ocean_divider_before_woocommerce_store_color_settings' => [
				'type' => 'ocean-divider',
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20
			],
			'ocean_woo_store_notice_bg_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background Color', 'oceanwp' ),
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_woo_store_notice_bg_color',
						'key' => 'normal',
						'label' =>esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-store-notice.demo_store' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#3d9cd2',
						],
					],
				]
			],

			'ocean_woo_store_notice_dismiss_bg_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Dismiss Background Color', 'oceanwp' ),
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_woo_store_notice_dismiss_bg_color',
						'key' => 'normal',
						'label' =>esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.demo_store .woocommerce-store-notice__dismiss-link' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#0000001a',
						],
					],
				]
			],

			'ocean_woo_store_notice_text_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Notice Text Color', 'oceanwp' ),
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'woo_store_notice_typography[color]',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-store-notice.demo_store' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					]
				]
			],

			'ocean_woo_store_notice_dismiss_text_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Dismiss text Color', 'oceanwp' ),
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'woo_store_notice_dismiss_link_typography[color]',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.demo_store .woocommerce-store-notice__dismiss-link' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					],
					'hover' => [
						'id' => 'ocean_woo_store_notice_dismiss_text_hover_color',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.demo_store .woocommerce-store-notice__dismiss-link:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#f4dc00',
						],
					],
				]
			],

			'ocean_content_for_woo_store_notice_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'woocommerce_store_notice',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		],
	],

	'ocean_divider_for_woo_general_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

	'ocean_woocommerce_general' => [
		'type' => 'section',
		'title' => esc_html__('General', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_divider_for_woo_general_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_woo_remove_custom_features' => [
				'id' => 'ocean_woo_remove_custom_features',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Additional WooCommerce Features', 'oceanwp'),
				'desc' => esc_html__( 'Enable/disable additional WooCommerce features added by OceanWP. If you removed it, you only will have the default plugin features', 'oceanwp' ),
				'section' => 'ocean_woocommerce_general',
				'default'  => 'no',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'no'  => [
						'id'     => 'no',
						'label'   => esc_html__('Enable', 'oceanwp'),
						'content' => esc_html__('Enable', 'oceanwp'),
					],
					'yes'  => [
						'id'     => 'yes',
						'label'   => esc_html__('Disable', 'oceanwp'),
						'content' => esc_html__('Disable', 'oceanwp'),
					]
				]
			],

			'ocean_title_for_sidebar_and_widgets_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Sidebar and Widgets', 'oceanwp' ),
				'section' => 'ocean_woocommerce_general',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_custom_sidebar' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Display Custom WooCommerce Sidebar', 'oceanwp'),
				'section' => 'ocean_woocommerce_general',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_woo_custom_sidebar' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_general',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_woo_cat_widget_style' => [
				'id' => 'ocean_woo_cat_widget_style',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Categories Widget Style', 'oceanwp'),
				'desc' => esc_html__( 'Choose the WooCommerce Categories widget style.', 'oceanwp' ),
				'section' => 'ocean_woocommerce_general',
				'default'  => 'default',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'default'  => [
						'id'     => 'default',
						'label'   => esc_html__('Default', 'oceanwp'),
						'content' => esc_html__('Default', 'oceanwp'),
					],
					'dropdown'  => [
						'id'     => 'dropdown',
						'label'   => esc_html__('Dropdown', 'oceanwp'),
						'content' => esc_html__('Dropdown', 'oceanwp'),
					]
				]
			],

			'ocean_title_for_woo_wishlist_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Wishlist', 'oceanwp' ),
				'desc' => sprintf( esc_html__( 'You need to activate the %1$sTI WooCommerce Wishlist%2$s or %3$sYITH WooCommerce Wishlist%2$s plugin based on your selection to add a wishlist button and icon', 'oceanwp' ), '<a href="https://wordpress.org/plugins/ti-woocommerce-wishlist/" target="_blank">', '</a>', '<a href="https://wordpress.org/plugins/yith-woocommerce-wishlist/" target="_blank">' ),
				'section' => 'ocean_woocommerce_general',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_woo_wl_plugin' => [
				'id' => 'ocean_woo_wl_plugin',
				'type' => 'ocean-select',
				'label' => esc_html__('Select Wishlist Plugin', 'oceanwp' ),
				'section' => 'ocean_woocommerce_general',
				'transport' => 'postMessage',
				'default' => 'ti_wl',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'ti_wl'   => esc_html__( 'TI WC Wishlist', 'oceanwp' ),
					'yith_wl' => esc_html__( 'YITH WC Wishlist', 'oceanwp' )
				]
			],

			'ocean_divider_after_woo_wl_plugin_list_selection' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_general',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 1
			],

			'ocean_woo_wishlist_icon' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Add Wishlist Icon In Header', 'oceanwp'),
				'section' => 'ocean_woocommerce_general',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_content_for_woo_general_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_woocommerce_general',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_for_woo_menu_cart_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

	'ocean_woocommerce_menu_cart' => [
		'type' => 'section',
		'title' => esc_html__('Menu Cart', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_divider_for_woo_menu_cart_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_woo_menu_icon_visibility' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Visibility', 'oceanwp' ),
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'refresh',
				'default' => 'default',
				'priority' => 10,
				'hideLabel' => false,
				'wrapper' => 'ocean_woo_menu_icon_visibility',
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'  => [
					'default' => esc_html__( 'Display On All Devices', 'oceanwp' ),
					'disabled' => esc_html__( 'Disabled On All Devices', 'oceanwp' ),
					'disabled_desktop' => esc_html__( 'Disabled Only On Desktop', 'oceanwp' ),
				],
			],

			'ocean_divider_after_woo_menu_icon_visibility' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_woo_menu_icon_hide_if_empty' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Hide Empty Cart', 'oceanwp'),
				'section' => 'ocean_woocommerce_menu_cart',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_woo_display_cart_product_added' => [
				'id' => 'ocean_woo_display_cart_product_added',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Display Cart When Product Added', 'oceanwp'),
				'desc' => esc_html__( 'Display the cart when a product is added, work in the shop and the single product pages if ajax is enabled.', 'oceanwp' ),
				'section' => 'ocean_woocommerce_menu_cart',
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

			'ocean_title_for_woo_menu_cart_icon_style' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Menu Icon', 'oceanwp' ),
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_menu_bag_style' => [
				'id' => 'ocean_woo_menu_bag_style',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Menu Icon Style', 'oceanwp'),
				'desc' => esc_html__( 'This setting replace the cart icon by a bag with the items count in it.', 'oceanwp' ),
				'section' => 'ocean_woocommerce_menu_cart',
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

			'ocean_divider_for_woo_menu_icon_style_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
			],

			'ocean_woocommerce_menu_cart_bag_style_section' => [
				'type' => 'section',
				'title' => esc_html__('Menu Icon Style', 'oceanwp'),
				'section' => 'ocean_woocommerce_menu_cart',
				'after' => 'ocean_divider_for_woo_menu_icon_style_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_menu_icon_display' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Display', 'oceanwp' ),
						'section' => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'refresh',
						'default' => 'icon_count',
						'priority' => 10,
						'hideLabel' => false,
						'wrapper' => 'ocean_woo_menu_icon_display',
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_not_woo_bag_style',
						'sanitize_callback' => 'sanitize_key',
						'choices'  => [
							'icon'             => esc_html__( 'Icon', 'oceanwp' ),
							'icon_total'       => esc_html__( 'Icon And Cart Total', 'oceanwp' ),
							'icon_count'       => esc_html__( 'Icon And Cart Count', 'oceanwp' ),
							'icon_count_total' => esc_html__( 'Icon And Cart Count + Total', 'oceanwp' ),
						],
					],

					'ocean_woo_menu_icon' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__('Cart Icon', 'oceanwp'),
						'section' => 'ocean_woocommerce_menu_cart_bag_style_section',
						'default'  => 'icon_handbag',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => true,
						'sanitize_callback' => 'sanitize_key',
						'active_callback' => 'oceanwp_cac_is_not_woo_bag_style',
						'choices' => oceanwp_cart_icons_list(),
					],

					'ocean_woo_menu_custom_icon' => [
						'label'    => esc_html__( 'Custom Icon', 'oceanwp' ),
						'desc' => esc_html__( 'Enter your full icon class', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_filter_nohtml_kses',
						'active_callback' => 'oceanwp_cac_is_not_woo_bag_style',
					],

					'ocean_woo_menu_icon_size' => [
						'id'       => 'ocean_woo_menu_icon_size',
						'label'    => esc_html__( 'Icon Size (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => true,
						'min'          => 10,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_not_woo_bag_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_woo_menu_icon_size',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'tablet' => [
								'id' => 'ocean_woo_menu_icon_size_tablet',
								'label' => esc_html__( 'Tablet', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'mobile' => [
								'id' => 'ocean_woo_menu_icon_size_mobile',
								'label' => esc_html__( 'Mobile', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.wcmenucart i' => ['font-size'],
							'.wcmenucart .owp-icon' => ['width', 'height'],
							'.oceanwp-mobile-menu-icon a.wcmenucart' => ['font-size'],
							'.oceanwp-mobile-menu-icon a.wcmenucart .owp-icon' => ['width', 'height'],
						]
					],

					'ocean_woo_menu_icon_center_vertically' => [
						'id'       => 'ocean_woo_menu_icon_center_vertically',
						'label'    => esc_html__( 'Center Vertically', 'oceanwp' ),
						'desc'     => esc_html__( 'Use this field to center your icon vertically', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => true,
						'min'          => 0,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_not_woo_bag_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_woo_menu_icon_center_vertically',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'tablet' => [
								'id' => 'ocean_woo_menu_icon_center_vertically_tablet',
								'label' => esc_html__( 'Tablet', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'mobile' => [
								'id' => 'ocean_woo_menu_icon_center_vertically_mobile',
								'label' => esc_html__( 'Mobile', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.wcmenucart i' => ['top'],
							'.oceanwp-mobile-menu-icon a.wcmenucart' => ['top'],
						]
					],

					'ocean_woo_menu_bag_style_total' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Icon Display Total', 'oceanwp'),
						'section' => 'ocean_woocommerce_menu_cart_bag_style_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'oceanwp_cac_is_woo_bag_style',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_woo_menu_bag_style_total' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 10,
						'active_callback' => 'oceanwp_cac_is_woo_bag_style',
					],

					'ocean_woo_menu_bag_icon_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Icon Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_menu_bag_icon_color',
						'active_callback' => 'oceanwp_cac_is_woo_bag_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_menu_bag_icon_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.wcmenucart-cart-icon .wcmenucart-count, .wcmenucart-cart-icon .wcmenucart-count:after' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333'
								],
							],
							'hover' => [
								'id' => 'ocean_woo_menu_bag_icon_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count, .show-cart .wcmenucart-cart-icon .wcmenucart-count' => 'background-color',
									'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count:after, .show-cart .wcmenucart-cart-icon .wcmenucart-count:after' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0'
								],
							],
						]
					],

					'ocean_woo_menu_bag_icon_count_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Icon Count Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_menu_bag_icon_count_color',
						'active_callback' => 'oceanwp_cac_is_woo_bag_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_menu_bag_icon_count_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.wcmenucart-cart-icon .wcmenucart-count, .woo-menu-icon .wcmenucart-total span' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333'
								],
							],
							'hover' => [
								'id' => 'ocean_woo_menu_bag_icon_hover_count_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count, .show-cart .wcmenucart-cart-icon .wcmenucart-count' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff'
								],
							],
						]
					],

					'ocean_content_for_woo_menu_cart_bag_style_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_menu_cart_bag_style_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'oceanwp_cac_is_woo_bag_style',
					],

				]
			],

			'ocean_title_for_woo_menu_cart_icon_behaviour' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Menu Icon Behavior', 'oceanwp' ),
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_menu_icon_style' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Style', 'oceanwp' ),
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'default' => 'drop_down',
				'priority' => 10,
				'hideLabel' => false,
				'wrapper' => 'ocean_woo_menu_icon_style',
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices'  => [
					'drop_down'   => esc_html__( 'Drop-Down', 'oceanwp' ),
					'cart'        => esc_html__( 'Go To Cart', 'oceanwp' ),
					'custom_link' => esc_html__( 'Custom Link', 'oceanwp' ),
				]
			],

			'ocean_woo_menu_icon_custom_link' => [
				'label'    => esc_html__( 'Custom Link', 'oceanwp' ),
				'desc'     => esc_html__( 'The Custom Link style need to be selected', 'oceanwp' ),
				'type'     => 'ocean-text',
				'section'  => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'esc_url_raw'
			],

			'ocean_divider_after_woo_menu_icon_custom_link' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_woocommerce_cart_dropdown_styling_section' => [
				'type' => 'section',
				'title' => esc_html__('Drop-down Styling', 'oceanwp'),
				'section' => 'ocean_woocommerce_menu_cart',
				'after' => 'ocean_divider_after_woo_menu_icon_custom_link',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_cart_dropdown_style' => [
						'id' => 'ocean_woo_cart_dropdown_style',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Style', 'oceanwp'),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
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

					'ocean_divider_after_woo_cart_dropdown_style_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1
					],

					'ocean_woo_cart_dropdown_width' => [
						'id'       => 'ocean_woo_cart_dropdown_width',
						'label'    => esc_html__( 'Cart Dropdowns Width (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_cart_dropdown_styling_section',
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
								'id' => 'ocean_woo_cart_dropdown_width',
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

					'ocean_divider_after_woo_cart_dropdown_width_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1
					],

					'ocean_woo_cart_dropdown_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Dropdown Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_bg',
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

					'ocean_woo_cart_dropdown_borders' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Dropdown Borders Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_borders',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_borders',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid.thumbnail, .widget_shopping_cart ul.cart_list li, .woocommerce ul.product_list_widget li:first-child, .widget_shopping_cart .total' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e6e6e6'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_link_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Link Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_link_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_link_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333'
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_link_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_remove_link_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Remove Link Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_remove_link_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_remove_link_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#b3b3b3'
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_remove_link_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_quantity_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Quantity Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_quantity_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_quantity_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid .quantity' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#b2b2b2'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Price Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_price_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid .amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#57bf6d'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_subtotal_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Subtotal Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_subtotal_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_subtotal_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart .total' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#fafafa'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_subtotal_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Subtotal Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_subtotal_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_subtotal_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart .total strong' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#797979'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_total_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Total Price Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_total_price_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_total_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart .total .amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#57bf6d'
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_cart_button_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Cart Button Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_cart_button_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_cart_button_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .button:first-child' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_cart_button_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .button:first-child:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_cart_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Cart Button Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_cart_button_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_cart_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .button:first-child' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_cart_button_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .button:first-child:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_cart_button_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Cart Button Border', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_cart_button_border_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_cart_button_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .button:first-child' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_cart_button_hover_border_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .button:first-child:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_checkout_button_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Checkout Button Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_checkout_button_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_checkout_button_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .checkout' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_checkout_button_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .checkout:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_checkout_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Checkout Button Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_checkout_button_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_checkout_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .checkout' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_checkout_button_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .checkout:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_woo_cart_dropdown_checkout_button_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Checkout Button Border', 'oceanwp' ),
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_cart_dropdown_checkout_button_border_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_cart_dropdown_checkout_button_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .checkout' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_cart_dropdown_checkout_button_border_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.widget_shopping_cart_content .buttons .checkout:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_content_for_woo_cart_dropdown_styling_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_cart_dropdown_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_title_for_woo_menu_cart_responsive_setting' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Responsive Settings', 'oceanwp' ),
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_add_mobile_mini_cart' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Display Mini Cart On Mobile', 'oceanwp'),
				'section' => 'ocean_woocommerce_menu_cart',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_woocommerce_mobile_cart_sidebar_styling_section' => [
				'type' => 'section',
				'title' => esc_html__('Mobile Cart Sidebar', 'oceanwp'),
				'section' => 'ocean_woocommerce_menu_cart',
				'after' => 'ocean_woo_add_mobile_mini_cart',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_mobile_cart_sidebar_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_mobile_cart_sidebar_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_mobile_cart_sidebar_bg',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_mobile_cart_sidebar_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#oceanwp-cart-sidebar-wrap .oceanwp-cart-sidebar' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff'
								],
							]
						]
					],

					'ocean_woo_mobile_cart_sidebar_close_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Close Button Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_mobile_cart_sidebar_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_mobile_cart_sidebar_close_button_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_mobile_cart_sidebar_close_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div, #oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div:before' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#000000'
								],
							]
						]
					],

					'ocean_woo_mobile_cart_sidebar_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_mobile_cart_sidebar_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_mobile_cart_sidebar_title_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_mobile_cart_sidebar_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#oceanwp-cart-sidebar-wrap h4' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#555555'
								],
							]
						]
					],

					'ocean_woo_mobile_cart_sidebar_divider_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Divider Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_mobile_cart_sidebar_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_mobile_cart_sidebar_divider_color',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_mobile_cart_sidebar_divider_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#oceanwp-cart-sidebar-wrap .divider' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,0.1)'
								],
							]
						]
					],

					'ocean_content_for_woo_mobile_cart_sidebar_styling_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_mobile_cart_sidebar_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_content_for_woo_menu_cart_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_woocommerce_menu_cart',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_for_woo_archive_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

	'ocean_woocommerce_archives' => [
		'type' => 'section',
		'title' => esc_html__('Archives', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_divider_for_woo_archive_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_title_for_archives_display_options' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Display Options', 'oceanwp' ),
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 5,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_title_for_archives_layout_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Archives Page Layout', 'oceanwp' ),
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_shop_layout' => [
				'label' => esc_html__( 'Layout', 'oceanwp' ),
				'type' => 'ocean-radio-image',
				'section' => 'ocean_woocommerce_archives',
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

			'ocean_divider_after_woo_shop_layout_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_woo_shop_both_sidebars_style' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'refresh',
				'default' => 'scs-style',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_woo_shop_bs_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				],
			],

			'ocean_woo_shop_both_sidebars_content_width' => [
				'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_woo_shop_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woo_shop_both_sidebars_content_width',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_woo_shop_both_sidebars_content_width_unit',
						'label' =>esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_woo_shop_both_sidebars_sidebars_width' => [
				'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_woo_shop_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woo_shop_both_sidebars_sidebars_width',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_woo_shop_both_sidebars_sidebars_width_unit',
						'label' =>esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_woo_shop_sidebar_order' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Responsive Page Content Order', 'oceanwp' ),
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'refresh',
				'default' => 'content-sidebar',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_woo_shop_rl_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
					'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
				],
			],

			'ocean_title_for_archives_product_option_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Product Options', 'oceanwp' ),
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_catalog_view' => [
				'id' => 'ocean_woo_catalog_view',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Default Catalog View', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives',
				'default'  => 'grid',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'active_callback' => 'oceanwp_cac_is_grid_list_buttons',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'grid' => [
						'id'     => 'grid',
						'label'   => esc_html__('Grid', 'oceanwp'),
						'content' => esc_html__('Grid', 'oceanwp'),
					],
					'list'  => [
						'id'     => 'list',
						'label'   => esc_html__('List', 'oceanwp'),
						'content' => esc_html__('List', 'oceanwp'),
					]
				]
			],

			'ocean_divider_after_archives_woo_catalog_view' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
				'active_callback' => 'oceanwp_cac_is_grid_list_buttons',
			],

			'ocean_woo_shop_posts_per_page' => [
				'label'    => esc_html__( 'Products Per Page', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_archives',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 100,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woo_shop_posts_per_page',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'refresh',
							'default'  => 12,
						],
					]
				]
			],

			'ocean_woocommerce_shop_columns' => [
				'id'      => 'ocean_woocommerce_shop_columns',
				'label'    => esc_html__( 'Product Columns', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => true,
				'min'          => 1,
				'max'          => 7,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woocommerce_shop_columns',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 3,
						],
					],
					'tablet' => [
						'id' => 'ocean_woocommerce_tablet_shop_columns',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_woocommerce_mobile_shop_columns',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_divider_after_woo_shop_columns_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_woo_products_style' => [
				'id' => 'ocean_woo_products_style',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Product Display Style', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives_products_section',
				'default'  => 'default',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'default' => [
						'id'     => 'default',
						'label'   => esc_html__('Default', 'oceanwp'),
						'content' => esc_html__('Default', 'oceanwp'),
					],
					'hover'  => [
						'id'     => 'hover',
						'label'   => esc_html__('Hover', 'oceanwp'),
						'content' => esc_html__('Hover', 'oceanwp'),
					]
				]
			],

			'ocean_spacer_for_woo_archive_products_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_woocommerce_archives_products_section' => [
				'type' => 'section',
				'title' => esc_html__('Product Display Options', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives',
				'after' => 'ocean_spacer_for_woo_archive_products_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_quick_view' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Display Quick View Button', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_products_section',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_woo_product_entry_content_alignment' => [
						'id' => 'ocean_woo_product_entry_content_alignment',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Content Alignment', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_products_section',
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

					'ocean_divider_after_product_entry_content_alignment' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_products_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'oceanwp_cac_is_woo_default_products_style',
					],

					'ocean_woo_product_entry_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Product Image Style', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_products_section',
						'transport' => 'refresh',
						'default' => 'image-swap',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_woo_default_products_style',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'featured-image' => esc_html__( 'Featured Image', 'oceanwp' ),
							'image-swap' => esc_html__( 'Image Swap', 'oceanwp' ),
							'gallery-slider' => esc_html__( 'Gallery Slider', 'oceanwp' ),
						],
					],

					'ocean_divider_after_product_entry_style' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_products_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'oceanwp_cac_is_woo_default_products_style',
					],

					'oceanwp_woo_product_elements_positioning' => [
						'label' => esc_html__( 'Elements Positioning', 'oceanwp' ),
						'type' => 'ocean-sortable',
						'section'  => 'ocean_woocommerce_archives_products_section',
						'transport' => 'refresh',
						'priority' => 10,
						'default'  => [ 'image', 'category', 'title', 'price-rating', 'woo-rating', 'description', 'button' ],
						'active_callback' => 'oceanwp_cac_is_woo_default_products_style',
						'hideLabel' => false,
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
						'choices' => [
							'image'        => esc_html__( 'Image', 'oceanwp' ),
							'category'     => esc_html__( 'Category', 'oceanwp' ),
							'title'        => esc_html__( 'Title', 'oceanwp' ),
							'price-rating' => esc_html__( 'Price', 'oceanwp' ),
							'woo-rating'   => esc_html__( 'Star Rating', 'oceanwp' ),
							'description'  => esc_html__( 'List Description', 'oceanwp' ),
							'button'       => esc_html__( 'Add To Cart Button', 'oceanwp' ),
						]
					],

					'ocean_divider_after_product_elements_positioning' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_products_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
						'active_callback' => 'oceanwp_cac_is_woo_default_products_style',
					],

					'ocean_woo_list_excerpt_length' => [
						'label'    => esc_html__( 'Product Description Excerpt Length', 'oceanwp' ),
						'desc'     => esc_html__( 'Length of the short description of the list view.', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_archives_products_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 0,
						'max'          => 500,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_grid_list_buttons',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_woo_list_excerpt_length',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 60,
								],
							]
						]
					],

					'ocean_content_for_woo_archives_products_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_archives_products_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_spacer_for_woo_archives_additional_styling_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_woocommerce_archives_additional_styling_section' => [
				'type' => 'section',
				'title' => esc_html__('Product Styling, Typography and Colors', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives',
				'after' => 'ocean_spacer_for_woo_archives_additional_styling_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_product_padding' => [
						'id' => 'ocean_product_padding',
						'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_product_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_product_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_product_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_product_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_product_tablet_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_product_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_product_tablet_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_product_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_product_mobile_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_product_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_product_mobile_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_product_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.woocommerce .products .product-inner',
							'property' => 'padding'
						]
					],

					'ocean_product_image_margin' => [
						'id' => 'ocean_product_image_margin',
						'label'    => esc_html__( 'Image Margin (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'margin',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_product_image_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_product_image_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_product_image_bottom_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_product_image_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_product_image_tablet_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_product_image_tablet_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_product_image_tablet_bottom_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_product_image_tablet_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_product_image_mobile_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_product_image_mobile_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_product_image_mobile_right_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_product_image_mobile_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.woocommerce ul.products li.product .woo-entry-inner li.image-wrap',
							'property' => 'margin'
						],
					],

					'ocean_product_border_width' => [
						'id' => 'ocean_product_border_width',
						'label'    => esc_html__( 'Border Width (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'border-width',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_product_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_product_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_product_bottom_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_product_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_product_tablet_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_product_tablet_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_product_tablet_bottom_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_product_tablet_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_product_mobile_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_product_mobile_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_product_mobile_right_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_product_mobile_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.woocommerce .products .product-inner',
							'property' => 'border-width'
						],
					],

					'ocean_product_border_radius' => [
						'id' => 'ocean_product_border_radius',
						'label'    => esc_html__( 'Border Radius (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'border-radius',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_product_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_product_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_product_bottom_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_product_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_product_tablet_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_product_tablet_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_product_tablet_bottom_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_product_tablet_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_product_mobile_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_product_mobile_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_product_mobile_right_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_product_mobile_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.woocommerce .products .product-inner',
							'property' => 'border-radius'
						],
					],

					'ocean_divider_after_woo_archives_product_border_radius_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_woo_archive_title_typography' => [
						'id' => 'ocean_woo_archive_title_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Product Title', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_archive_title_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_archive_title_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_archive_title_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_archive_title_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_archive_title_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_archive_title_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 14
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_archive_title_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_archive_title_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_archive_title_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_archive_title_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 0
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_archive_title_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_archive_title_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_archive_title_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_archive_title_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1.5
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_archive_title_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_archive_title_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_archive_title_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_archive_title_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_archive_title_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_archive_title_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_archive_title_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_woo_archive_cats_typography' => [
						'id' => 'ocean_woo_archive_cats_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Product Category', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_archive_cats_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_archive_cats_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_archive_cats_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_archive_cats_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_archive_cats_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_archive_cats_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 12
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_archive_cats_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_archive_cats_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_archive_cats_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_archive_cats_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 0
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_archive_cats_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_archive_cats_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_archive_cats_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_archive_cats_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_archive_cats_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_archive_cats_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_archive_cats_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_archive_cats_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_archive_cats_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_archive_cats_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_archive_cats_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_woo_archive_price_typography' => [
						'id' => 'ocean_woo_archive_price_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Product Price', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce ul.products li.product .price',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_archive_price_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_archive_price_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_archive_price_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_archive_price_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_archive_price_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_archive_price_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 18
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_archive_price_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_archive_price_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_archive_price_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_archive_price_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 0
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_archive_price_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_archive_price_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_archive_price_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_archive_price_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_archive_price_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_archive_price_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_archive_price_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_archive_price_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_archive_price_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_archive_price_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_archive_price_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_woo_product_add_to_cart_typography' => [
						'id' => 'ocean_woo_product_add_to_cart_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Add To Cart', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_product_add_to_cart_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_product_add_to_cart_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_product_add_to_cart_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_product_add_to_cart_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_product_add_to_cart_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_product_add_to_cart_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 12
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_product_add_to_cart_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_product_add_to_cart_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_product_add_to_cart_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_product_add_to_cart_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_product_add_to_cart_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_product_add_to_cart_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_product_add_to_cart_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_product_add_to_cart_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1.5
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_product_add_to_cart_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_product_add_to_cart_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_product_add_to_cart_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_product_add_to_cart_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_product_add_to_cart_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_product_add_to_cart_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_product_add_to_cart_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_woo_archives_product_typography_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_product_background_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_background_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce .products .product-inner, .woocommerce ul.products li.product .woo-product-info, .woocommerce ul.products li.product .woo-product-gallery' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_product_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Border Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce .products .product-inner' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_category_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Category Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_category_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_category_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product li.category a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							],
						]
					],

					'ocean_product_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_product_title_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product li.title a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							],
						]
					],

					'ocean_product_entry_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Price Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .price, .woocommerce ul.products li.product .price .amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#57bf6d',
								],
							],
						]
					],

					'ocean_product_entry_del_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Del Price Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_del_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .price del .amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#666666',
								],
							],
						]
					],

					'ocean_product_entry_cond_note_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Conditional Notice', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_cond_note_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product li.owp-woo-cond-notice span, .woocommerce ul.products li.product li.owp-woo-cond-notice a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_product_entry_cond_note_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product li.owp-woo-cond-notice a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#52a7fe',
								],
							],
						]
					],

					'ocean_product_entry_hover_thumbnails_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hover: Thumbnails Border', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_has_woo_hover_products_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_hover_thumbnails_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-product-gallery .active a, .woocommerce ul.products li.product .woo-product-gallery a:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							],
						]
					],

					'ocean_product_entry_hover_quickview_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hover: Quick View Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_has_woo_hover_products_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_hover_quickview_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
							'hover' => [
								'id' => 'ocean_product_entry_hover_quickview_hover_background',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff',
								],
							],
						]
					],

					'ocean_product_entry_hover_quickview_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hover: Quick View Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_has_woo_hover_products_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_hover_quickview_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#444444',
								],
							],
							'hover' => [
								'id' => 'ocean_product_entry_hover_quickview_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							],
						]
					],

					'ocean_product_entry_hover_wishlist_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hover: Wishlist Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_has_woo_hover_products_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_hover_wishlist_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff',
								],
							],
							'hover' => [
								'id' => 'ocean_product_entry_hover_wishlist_hover_background',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#ffffff',
								],
							],
						]
					],

					'ocean_product_entry_hover_wishlist_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Hover: Wishlist Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_has_woo_hover_products_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_product_entry_hover_wishlist_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#444444',
								],
							],
							'hover' => [
								'id' => 'ocean_product_entry_hover_wishlist_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							],
						]
					],

					'ocean_divider_after_woo_product_entry_hover_wishlist_color_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
					],

					'ocean_woocommerce_archives_additional_styling_addtocart_section' => [
						'type' => 'section',
						'title' => esc_html__('Add to Cart', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'after' => 'ocean_divider_after_woo_product_entry_hover_wishlist_color_setting',
						'class' => 'section-site-layout',
						'priority' => 10,
						'options' => [
							'ocean_product_entry_addtocart_border_style' => [
								'id' => 'ocean_product_entry_addtocart_border_style',
								'type' => 'ocean-select',
								'label' => esc_html__('Border Style', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
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
									'selector' => '.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart',
									'property' => 'border-style'
								]
							],

							'ocean_product_entry_addtocart_border_size' => [
								'id'      => 'ocean_product_entry_addtocart_border_size',
								'label'    => esc_html__( 'Border Width', 'oceanwp' ),
								'type'     => 'ocean-range-slider',
								'section'  => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
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
										'id' => 'ocean_product_entry_addtocart_border_size',
										'label' =>esc_html__( 'Desktop', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
										],
									],
									'unit' => [
										'id' => 'ocean_product_entry_addtocart_border_size_unit',
										'label' =>esc_html__( 'Unit', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
											'default' => 'px',
										],
									],
								],
								'preview' => 'queryWithType',
								'css' => [
									'.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart' => ['border-width']
								]
							],

							'ocean_product_entry_addtocart_border_radius' => [
								'id'      => 'ocean_product_entry_addtocart_border_radius',
								'label'    => esc_html__( 'Border Radius', 'oceanwp' ),
								'type'     => 'ocean-range-slider',
								'section'  => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
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
										'id' => 'ocean_product_entry_addtocart_border_radius',
										'label' =>esc_html__( 'Desktop', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
										],
									],
									'unit' => [
										'id' => 'ocean_product_entry_addtocart_border_radius_unit',
										'label' =>esc_html__( 'Unit', 'oceanwp' ),
										'attr' => [
											'transport' => 'postMessage',
											'default' => 'px',
										],
									],
								],
								'preview' => 'queryWithType',
								'css' => [
									'.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart' => ['border-radius']
								]
							],

							'ocean_divider_after_woo_product_entry_addtocart_border_radius_setting' => [
								'type' => 'ocean-divider',
								'section' => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'top' => 10
							],

							'ocean_product_entry_addtocart_bg_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Background Color', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_product_entry_addtocart_bg_color',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
										],
									],
									'hover' => [
										'id' => 'ocean_product_entry_addtocart_bg_color_hover',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button:hover' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
										],
									],
								]
							],

							'ocean_product_entry_addtocart_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Color', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_product_entry_addtocart_color',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button' => 'color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#848494',
										],
									],
									'hover' => [
										'id' => 'ocean_product_entry_addtocart_color_hover',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button:hover' => 'color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#13aff0',
										],
									],
								]
							],

							'ocean_product_entry_addtocart_border_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Border Color', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_product_entry_addtocart_border_color',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button' => 'border-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#e4e4e4',
										],
									],
									'hover' => [
										'id' => 'ocean_product_entry_addtocart_border_color_hover',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button:hover' => 'border-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#13aff0',
										],
									],
								]
							],

							'ocean_content_for_woo_archives_additional_styling_addtocart_need_help_link' => [
								'type' => 'ocean-content',
								'isContent' => ocean_render_content_need_help(),
								'class' => 'need-help',
								'section' => 'ocean_woocommerce_archives_additional_styling_addtocart_section',
								'transport' => 'postMessage',
								'priority' => 10,
							],
						]
					],

					'ocean_spacer_for_woo_archives_additional_styling_quick_view_section' => [
						'type' => 'ocean-spacer',
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
					],

					'ocean_woocommerce_archives_additional_styling_quick_view_section' => [
						'type' => 'section',
						'title' => esc_html__('Quick View', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'after' => 'ocean_spacer_for_woo_archives_additional_styling_quick_view_section',
						'class' => 'section-site-layout',
						'priority' => 10,
						'options' => [
							'ocean_woo_quick_view_button_bg' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Button Background', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_woo_quick_view_button_bg',
										'key' => 'normal',
										'label' => esc_html__( 'Normal', 'oceanwp' ),
										'selector' => [
											'.owp-quick-view' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default' => 'rgba(0,0,0,0.6)',
										],
									],
									'hover' => [
										'id' => 'ocean_woo_quick_view_button_hover_bg',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.owp-quick-view:hover' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default' => 'rgba(0,0,0,0.9)',
										],
									],
								]
							],

							'ocean_woo_quick_view_button_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Button Color', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_woo_quick_view_button_color',
										'key' => 'normal',
										'label' => esc_html__( 'Normal', 'oceanwp' ),
										'selector' => [
											'.owp-quick-view' => 'color',
											'.owp-quick-view .owp-icon use' => 'stroke'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#ffffff',
										],
									],
									'hover' => [
										'id' => 'ocean_woo_quick_view_button_hover_color',
										'key' => 'hover',
										'label' => esc_html__( 'Hover', 'oceanwp' ),
										'selector' => [
											'.owp-quick-view:hover' => 'color',
											'.owp-quick-view:hover .owp-icon use' => 'stroke'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#ffffff',
										],
									],
								]
							],

							'ocean_woo_quick_view_overlay_bg' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Overlay Background', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_woo_quick_view_overlay_bg',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.image-wrap.loading:after' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => 'rgba(0,0,0,0.15)',
										],
									]
								]
							],

							'ocean_woo_quick_view_overlay_spinner_outside_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Overlay Spinner Outside Color', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_woo_quick_view_overlay_spinner_outside_color',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.image-wrap.loading:before' => 'border-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => 'rgba(0,0,0,0.1)',
										],
									]
								]
							],

							'ocean_woo_quick_view_overlay_spinner_inner_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Overlay Spinner Inner Color', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_woo_quick_view_overlay_spinner_inner_color',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.image-wrap.loading:before' => 'border-left-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#ffffff',
										],
									]
								]
							],

							'ocean_woo_quick_view_modal_bg' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Modal Background', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_woo_quick_view_modal_bg',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.owp-qv-content-inner' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#ffffff',
										],
									]
								]
							],

							'ocean_woo_quick_view_modal_close_color' => [
								'type' => 'ocean-color',
								'label' => esc_html__( 'Modal Close Button Color', 'oceanwp' ),
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
								'hideLabel' => false,
								'showAlpha' => true,
								'showPalette' => true,
								'sanitize_callback' => 'wp_kses_post',
								'setting_args' => [
									'normal' => [
										'id' => 'ocean_woo_quick_view_modal_close_color',
										'key' => 'normal',
										'label' => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.owp-qv-content-inner .owp-qv-close' => 'color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#333333',
										],
									]
								]
							],

							'ocean_content_for_woo_archives_additional_styling_quick_view_need_help_link' => [
								'type' => 'ocean-content',
								'isContent' => ocean_render_content_need_help(),
								'class' => 'need-help',
								'section' => 'ocean_woocommerce_archives_additional_styling_quick_view_section',
								'transport' => 'postMessage',
								'priority' => 10,
							],
						]
					],

					'ocean_content_for_woo_archives_additional_styling_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_archives_additional_styling_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_divider_for_woo_archive_shop_conditional_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
			],

			'ocean_woocommerce_archives_shop_conditional_section' => [
				'type' => 'section',
				'title' => esc_html__('Shop Conditional', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives',
				'after' => 'ocean_divider_for_woo_archive_shop_conditional_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_shop_conditional' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Display Price and Add to Cart', 'oceanwp'),
						'desc' => esc_html__( 'Display price and Add to Cart button only to logged in users', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_shop_cond_msg' => [
						'id' => 'ocean_shop_cond_msg',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Display message to logged out users', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'default'  => 'yes',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'oceanwp_cac_is_shop_condition',
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

					'ocean_shop_msg_text' => [
						'label'    => esc_html__( 'Conditional replacement message', 'oceanwp' ),
						'desc'     => esc_html__( 'Message to display to logged out users instead of the price and Add to Cart button. The message will be displayed in the position of the Add to Cart button', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_woocommerce_archives_shop_conditional_section',
						'transport' => 'postMessage',
						'default'   => esc_html__( 'Log in to view price and purchase', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'oceanwp_cac_is_shop_condition',
					],

					'ocean_shop_add_myaccount_link' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('My Account page link', 'oceanwp'),
						'desc' => esc_html__( 'Include My Account page link in conditional message.', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'oceanwp_cac_is_shop_condition',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_shop_woo_disable_links' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Disable Links', 'oceanwp'),
						'desc' => esc_html__( 'Disable image and product title links functionality.', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_shop_woo_disable_links_cond' => [
						'id' => 'ocean_shop_woo_disable_links_cond',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Disable links only for logged out users', 'oceanwp'),
						'desc'  => esc_html__( 'If selected, image and title product archive links will be functional only for logged in users','oceanwp' ),
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'default'  => 'no',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'oceanwp_cac_is_shop_links_disabled',
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

					'ocean_divider_for_woo_archives_shop_conditional_typo_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_woo_archive_notice_typography' => [
						'id' => 'ocean_woo_archive_notice_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Conditonal Notice', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_archive_notice_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_archive_notice_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '600'
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_archive_notice_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_archive_notice_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_archive_notice_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_archive_notice_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 16
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_archive_notice_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_archive_notice_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_archive_notice_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_archive_notice_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_archive_notice_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_archive_notice_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_archive_notice_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_archive_notice_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_archive_notice_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_archive_notice_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_archive_notice_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_archive_notice_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'capitalize'
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_archive_notice_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_archive_notice_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_archive_notice_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_content_for_woo_archives_shop_conditional_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_archives_shop_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_title_for_woo_archive_additional_customization_section' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Additional Shop Customization', 'oceanwp' ),
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woocommerce_archives_toolbar_section' => [
				'type' => 'section',
				'title' => esc_html__('Toolbar', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives',
				'after' => 'ocean_title_for_woo_archive_additional_customization_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_grid_list' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Grid/List Buttons', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_woo_shop_sort' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Shop Sort', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_woo_shop_result_count' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Shop Result Count', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'default'  => true,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_woo_shop_result_count_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
					],

					'ocean_toolbar_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Border Top/Bottom Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#eaeaea',
								],
							],
						]
					],

					'ocean_toolbar_grid_list_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Grid/List Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_grid_list_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#999999',
								],
							],
							'hover' => [
								'id' => 'ocean_toolbar_grid_list_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.oceanwp-off-canvas-close:hover svg' => 'fill'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => '#13aff0'
								],
							],
							'active' => [
								'id' => 'ocean_toolbar_grid_list_active_color',
								'key' => 'hover',
								'label' => esc_html__( 'Active', 'oceanwp' ),
								'selector' => [
									'.oceanwp-off-canvas-close:hover svg' => 'fill'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => '#13aff0'
								],
							]
						]
					],

					'ocean_toolbar_grid_list_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Grid/List Border Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_grid_list_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#eaeaea',
								],
							]
						]
					],

					'ocean_toolbar_select_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_select_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#999999',
								],
							]
						]
					],

					'ocean_toolbar_select_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Select Border Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_select_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#dddddd',
								],
							]
						]
					],


					'ocean_toolbar_number_of_products_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Number of Products Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_number_of_products_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#555555',
								],
							]
						]
					],

					'ocean_toolbar_number_of_products_inactive_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Number of Products: Inactive', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_number_of_products_inactive_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#999999',
								],
							]
						]
					],

					'ocean_toolbar_number_of_products_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Number of Products: Border', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_number_of_products_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#999999',
								],
							]
						]
					],

					'ocean_content_for_woo_archives_toolbar_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_archives_toolbar_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_spacer_for_woo_archive_offcanvas_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_woocommerce_archives_offcanvas_section' => [
				'type' => 'section',
				'title' => esc_html__('Off Canvas Filter', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives',
				'after' => 'ocean_spacer_for_woo_archive_offcanvas_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_off_canvas_filter' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Display Filter Button', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_woo_off_canvas_filter_text' => [
						'label'    => esc_html__( 'Filter Button Text', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_woocommerce_archives_offcanvas_section',
						'transport' => 'postMessage',
						'default'   => esc_html__( 'Filter', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'oceanwp_cac_is_woo_filter_button'
					],

					'ocean_woo_off_canvas_close_button' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Add Close Button', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_toolbar_off_canvas_filter_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Off Canvas Filter Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_filter_button',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_off_canvas_filter_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#999999',
								],
							],
							'hover' => [
								'id' => 'ocean_toolbar_off_canvas_filter_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.oceanwp-off-canvas-close:hover svg' => 'fill'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => '#13aff0'
								],
							]
						]
					],

					'ocean_toolbar_off_canvas_filter_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Off Canvas Filter Border', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_filter_button',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_toolbar_off_canvas_filter_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#999999',
								],
							],
							'hover' => [
								'id' => 'ocean_toolbar_off_canvas_filter_hover_border_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.oceanwp-off-canvas-close:hover svg' => 'fill'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => '#13aff0'
								],
							]
						]
					],

					'ocean_woo_off_canvas_sidebar_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_off_canvas_sidebar_bg',
						'active_callback' => 'oceanwp_cac_is_woo_filter_button',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_off_canvas_sidebar_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#oceanwp-off-canvas-sidebar-wrap .oceanwp-off-canvas-sidebar' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => '#ffffff'
								],
							]
						]
					],

					'ocean_woo_off_canvas_sidebar_widgets_border' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Widgets Border Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_off_canvas_sidebar_widgets_border',
						'active_callback' => 'oceanwp_cac_is_woo_filter_button',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_off_canvas_sidebar_widgets_border',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#oceanwp-off-canvas-sidebar-wrap .sidebar-box' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => 'rgba(84,84,84,0.15)'
								],
							]
						]
					],

					'ocean_woo_off_canvas_close_button_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Close Button Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'wrapper' => 'ocean_woo_off_canvas_close_button_color',
						'active_callback' => 'oceanwp_cac_is_woo_filter_close_button',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_off_canvas_close_button_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.oceanwp-off-canvas-close svg' => 'fill'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => '#333333'
								],
							],
							'hover' => [
								'id' => 'ocean_woo_off_canvas_close_button_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.oceanwp-off-canvas-close:hover svg' => 'fill'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'  => '#777777'
								],
							]
						]
					],

					'ocean_content_for_woo_archives_offcanvas_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_archives_offcanvas_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_spacer_for_woo_archive_shop_pagination_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_woocommerce_archives_pagination_section' => [
				'type' => 'section',
				'title' => esc_html__('Pagination', 'oceanwp'),
				'section' => 'ocean_woocommerce_archives',
				'after' => 'ocean_spacer_for_woo_archive_shop_pagination_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_pagination_style' => [
						'id' => 'ocean_woo_pagination_style',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Pagination Style', 'oceanwp'),
						'section' => 'ocean_woocommerce_archives_pagination_section',
						'default'  => 'standard',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'standard'  => [
								'id'     => 'standard',
								'label'   => esc_html__('Standard', 'oceanwp'),
								'content' => esc_html__('Standard', 'oceanwp'),
							],
							'infinite_scroll'  => [
								'id'     => 'infinite_scroll',
								'label'   => esc_html__('Infinite Scroll', 'oceanwp'),
								'content' => esc_html__('Infinite Scroll', 'oceanwp'),
							]
						]
					],

					'ocean_woo_infinite_scroll_last_text' => [
						'label'    => esc_html__( 'Infinite Scroll: Last Text', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_woocommerce_archives_pagination_section',
						'transport' => 'postMessage',
						'default'   => esc_html__( 'End of content', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'oceanwp_cac_is_woo_infinite_scroll',
					],

					'ocean_woo_infinite_scroll_error_text' => [
						'label'    => esc_html__( 'Infinite Scroll: Error Text', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_woocommerce_archives_pagination_section',
						'transport' => 'postMessage',
						'default'   => esc_html__( 'No more pages to load', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'oceanwp_cac_is_woo_infinite_scroll',
					],

					'ocean_woo_infinite_scroll_spinners_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Infinite Scroll: Spinners Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_archives_pagination_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_infinite_scroll',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_infinite_scroll_spinners_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce .loader-ellips__dot' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_content_for_woo_archives_pagination_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_archives_pagination_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_divider_after_woo_archive_pagination_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 10
			],

			'ocean_woo_category_image' => [
				'id' => 'ocean_woo_category_image',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Category Page Featured Image ', 'oceanwp'),
				'desc' => esc_html__( 'Display the categories featured images before the product archives.', 'oceanwp' ),
				'section' => 'ocean_woocommerce_archives',
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

			'ocean_content_for_woo_archives_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_woocommerce_archives',
				'transport' => 'postMessage',
				'priority' => 10,
			],

		]
	],

	'ocean_spacer_for_woo_single_product_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_woocommerce_single' => [
		'type' => 'section',
		'title' => esc_html__('Single Product', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_spacer_for_woo_single_product_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_woo_product_layout' => [
				'label' => esc_html__( 'Layout', 'oceanwp' ),
				'type' => 'ocean-radio-image',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'refresh',
				'default' => 'left-sidebar',
				'priority' => 10,
				'sanitize_callback' => 'sanitize_text_field',
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

			'ocean_woo_product_both_sidebars_style' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
				'section' => 'ocean_woocommerce_single',
				'transport' => 'refresh',
				'default' => 'scs-style',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_woo_product_bs_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				],
			],

			'ocean_woo_product_both_sidebars_content_width' => [
				'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 0,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_woo_product_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woo_product_both_sidebars_content_width',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_woo_product_both_sidebars_content_width_unit',
						'label' =>esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_woo_product_both_sidebars_sidebars_width' => [
				'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 0,
				'max'          => 100,
				'step'         => 1,
				'active_callback' => 'oceanwp_cac_is_woo_product_bs_layout',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woo_product_both_sidebars_sidebars_width',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_woo_product_both_sidebars_sidebars_width_unit',
						'label' =>esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_divider_for_product_sidebar_order_setting' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'active_callback' => 'oceanwp_cac_is_woo_product_rl_layout',
			],

			'ocean_woo_product_sidebar_order' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Responsive Page Order', 'oceanwp' ),
				'section' => 'ocean_woocommerce_single',
				'transport' => 'refresh',
				'default' => 'content-sidebar',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'active_callback' => 'oceanwp_cac_is_woo_product_rl_layout',
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
					'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
				],
			],

			'ocean_title_for_woo_single_product_summary' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Single Product Summary', 'oceanwp' ),
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woocommerce_display_navigation' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Display Product Navigation', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'default'  => true,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_spacer_for_woo_single_product_nav_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_woocommerce_single_additional_styling_product_nav_section' => [
				'type' => 'section',
				'title' => esc_html__('Product Navigation', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'after' => 'ocean_spacer_for_woo_single_product_nav_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_single_product_navigation_border_radius' => [
						'id'      => 'ocean_single_product_navigation_border_radius',
						'label'    => esc_html__( 'Border Radius', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_single_additional_styling_product_nav_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 0,
						'max'          => 100,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_single_product_navigation_border_radius',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_single_product_navigation_border_radius_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.owp-product-nav li a.owp-nav-link' => ['-webkit-border-radius', '-moz-border-radius', '-ms-border-radius', 'border-radius'],
						]
					],

					'ocean_divider_after_woo_single_product_navigation_border_radius_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_additional_styling_product_nav_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1
					],

					'ocean_single_product_navigation_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_additional_styling_product_nav_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_navigation_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.owp-product-nav li a.owp-nav-link' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_navigation_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.owp-product-nav li a.owp-nav-link:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
						]
					],

					'ocean_single_product_navigation_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_additional_styling_product_nav_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_navigation_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.owp-product-nav li a.owp-nav-link' => 'color',
									'.owp-product-nav li a.owp-nav-link .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_navigation_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.owp-product-nav li a.owp-nav-link:hover' => 'color',
									'.owp-product-nav li a.owp-nav-link:hover .owp-icon use' => 'stroke'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_single_product_navigation_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Border Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_additional_styling_product_nav_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_navigation_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.owp-product-nav li a.owp-nav-link' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e9e9e9',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_navigation_hover_border_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.owp-product-nav li a.owp-nav-link:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
						]
					],

					'ocean_content_for_woo_single_additional_styling_product_nav_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_single_additional_styling_product_nav_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_divider_after_woo_single_product_nav_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20
			],

			'ocean_woo_product_title_tag' => [
				'type' => 'ocean-select',
				'label' => esc_html__('Title Tag', 'oceanwp' ),
				'section' => 'ocean_woocommerce_single',
				'transport' => 'refresh',
				'default' => 'h2',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
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

			'ocean_divider_after_woo_product_title_tag_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_woo_product_summary_width' => [
				'label'       => esc_html__( 'Summary Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 0,
				'max'          => 100,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woo_product_summary_width',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 44
						],
					],
					'unit' => [
						'id' => 'ocean_woo_product_summary_width_unit',
						'label' =>esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_divider_after_woo_product_summary_width_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'oceanwp_woo_summary_elements_positioning' => [
				'label' => esc_html__( 'Product Summary Content Builder', 'oceanwp' ),
				'type' => 'ocean-sortable',
				'section'  => 'ocean_woocommerce_single',
				'transport' => 'refresh',
				'priority' => 10,
				'default'  => apply_filters( 'ocean_woo_summary_element_default', [ 'title', 'rating', 'price', 'excerpt', 'quantity-button', 'meta' ] ),
				'hideLabel' => false,
				'sanitize_callback' => 'ocean_sanitize_sortable_control',
				'choices' => apply_filters(
					'ocean_woo_summary_element_choices',
					[
						'title' => __( 'Title', 'oceanwp' ),
						'rating' => __( 'Rating', 'oceanwp' ),
						'price' => __( 'Price', 'oceanwp' ),
						'excerpt' => __( 'Excerpt', 'oceanwp' ),
						'quantity-button' => __( 'Quantity & Add To Cart', 'oceanwp' ),
						'meta' => __( 'Product Meta', 'oceanwp' ),
					]
				),
			],

			'ocean_divider_for_woo_single_product_summary_typo_and_color_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_woocommerce_single_product_summary_typo_and_color_section' => [
				'type' => 'section',
				'title' => esc_html__('Product Summary Typography and Colors', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'after' => 'ocean_divider_for_woo_single_product_summary_typo_and_color_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_product_title_typography' => [
						'id' => 'ocean_woo_product_title_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Product Title', 'oceanwp'),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce div.product .product_title',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_product_title_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_product_title_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_product_title_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_product_title_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_product_title_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_product_title_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 24
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_product_title_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_product_title_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_product_title_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_product_title_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 0.6
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_product_title_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_product_title_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_product_title_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_product_title_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1.4
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_product_title_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_product_title_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_product_title_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_product_title_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_product_title_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_product_title_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_product_title_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_woo_product_price_typography' => [
						'id' => 'ocean_woo_product_price_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Product Price', 'oceanwp'),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce div.product p.price',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_product_price_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_product_price_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_product_price_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_product_price_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_product_price_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_product_price_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 36
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_product_price_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_product_price_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_product_price_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_product_price_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 0
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_product_price_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_product_price_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_product_price_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_product_price_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_product_price_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_product_price_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_product_price_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_product_price_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_product_price_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_product_price_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_product_price_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_woo_single_product_summary_typo_and_color_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_single_product_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .product_title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#333333',
								],
							]
						]
					],

					'ocean_single_product_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Price Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.price,.amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#57bf6d',
								],
							],
						]
					],

					'ocean_single_product_del_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Del Price Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_del_price_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.price del,del .amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#555555',
								],
							],
						]
					],

					'ocean_single_product_description_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Description Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_description_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product div[itemprop="description"], .woocommerce-product-details__short-description' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#aaaaaa',
								],
							],
						]
					],

					'ocean_quantity_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Quantity Border Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_quantity_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.quantity .qty,.quantity .qty-changer a' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e4e4e4',
								],
							],
						]
					],

					'ocean_quantity_border_color_focus' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Quantity Border Focus Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_quantity_border_color_focus',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'body .quantity .qty:focus' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#bbbbbb',
								],
							],
						]
					],

					'ocean_quantity_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Quantity Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_quantity_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.quantity .qty' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#777777',
								],
							],
						]
					],

					'ocean_quantity_plus_minus_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Quantity Plus/Minus Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_quantity_plus_minus_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.quantity .qty-changer a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#cccccc',
								],
							],
							'hover' => [
								'id' => 'ocean_quantity_plus_minus_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.quantity .qty-changer a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#cccccc',
								],
							],
						]
					],

					'ocean_quantity_plus_minus_border_color_hover' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Quantity Plus/Minus Border Hover', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_quantity_plus_minus_border_color_hover',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.quantity .qty-changer a:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e0e0e0',
								],
							]
						]
					],

					'ocean_single_product_meta_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Meta Title Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_meta_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.product_meta .posted_in,.product_meta .tagged_as' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_single_product_meta_link_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Meta Link Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_summary_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_meta_link_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.product_meta .posted_in a,.product_meta .tagged_as a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#aaaaaa',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_meta_link_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.product_meta .posted_in a:hover,.product_meta .tagged_as a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
						]
					],
				]
			],

			'ocean_title_for_woo_single_product_image_section' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Single Product Image', 'oceanwp' ),
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_product_image_width' => [
				'label'       => esc_html__( 'Image Width', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => false,
				'min'          => 0,
				'max'          => 100,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woo_product_image_width',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 52
						],
					],
					'unit' => [
						'id' => 'ocean_woo_product_image_width_unit',
						'label' =>esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => '%'
						],
					],
				],
			],

			'ocean_divider_after_woo_product_image_width_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_woo_product_thumbs_layout' => [
				'id' => 'ocean_woo_product_thumbs_layout',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Thumbnails Layout', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'default'  => 'horizontal',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'horizontal'  => [
						'id'     => 'horizontal',
						'label'   => esc_html__('Horizontal', 'oceanwp'),
						'content' => esc_html__('Horizontal', 'oceanwp'),
					],
					'vertical'  => [
						'id'     => 'vertical',
						'label'   => esc_html__('Vertical', 'oceanwp'),
						'content' => esc_html__('Vertical', 'oceanwp'),
					]
				]
			],

			'ocean_title_for_woo_single_product_addtocart_section' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Single Product Add to Cart', 'oceanwp' ),
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_product_ajax_add_to_cart' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Enable Ajax Add To Cart', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_woo_product_ajax_add_to_cart_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10
			],

			'ocean_woo_product_addtocart_style' => [
				'id' => 'ocean_woo_product_addtocart_style',
				'type' => 'ocean-buttons',
				'label' => esc_html__('Add To Cart Button Style', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'default'  => 'normal',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'normal'  => [
						'id'     => 'normal',
						'label'   => esc_html__('Normal', 'oceanwp'),
						'content' => esc_html__('Normal', 'oceanwp'),
					],
					'big'  => [
						'id'     => 'big',
						'label'   => esc_html__('Big', 'oceanwp'),
						'content' => esc_html__('Big', 'oceanwp'),
					],
					'very-big'  => [
						'id'     => 'very-big',
						'label'   => esc_html__('Very Big', 'oceanwp'),
						'content' => esc_html__('Very Big', 'oceanwp'),
					]
				]
			],

			'ocean_spacer_for_woo_single_product_addtocart_typo_and_color_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_woocommerce_single_product_addtocart_typo_and_color_section' => [
				'type' => 'section',
				'title' => esc_html__('Add to Cart Style, Typography and Color', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'after' => 'ocean_spacer_for_woo_single_product_addtocart_typo_and_color_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_single_product_addtocart_border_style' => [
						'id' => 'ocean_single_product_addtocart_border_style',
						'type' => 'ocean-select',
						'label' => esc_html__('Border Style', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
						'transport' => 'postMessage',
						'default' => 'none',
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
							'selector' => '.woocommerce div.product div.summary button.single_add_to_cart_button',
							'property' => 'border-style'
						]
					],

					'ocean_single_product_addtocart_border_size' => [
						'id'      => 'ocean_single_product_addtocart_border_size',
						'label'    => esc_html__( 'Border Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
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
								'id' => 'ocean_single_product_addtocart_border_size',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_single_product_addtocart_border_size_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.woocommerce div.product div.summary button.single_add_to_cart_button' => ['border-width']
						]
					],

					'ocean_single_product_addtocart_border_radius' => [
						'id'      => 'ocean_single_product_addtocart_border_radius',
						'label'    => esc_html__( 'Border Radius', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
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
								'id' => 'ocean_single_product_addtocart_border_radius',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_single_product_addtocart_border_radius_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'px',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'.woocommerce div.product div.summary button.single_add_to_cart_button' => ['border-radius']
						]
					],

					'ocean_divider_after_woo_single_product_addtocart_border_radius_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10
					],

					'ocean_woo_single_add_to_cart_typography' => [
						'id' => 'ocean_woo_single_add_to_cart_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Product Add To Cart', 'oceanwp'),
						'section' => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_single_add_to_cart_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_single_add_to_cart_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_single_add_to_cart_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_single_add_to_cart_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_single_add_to_cart_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_single_add_to_cart_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 12
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_single_add_to_cart_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_single_add_to_cart_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_single_add_to_cart_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_single_add_to_cart_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_single_add_to_cart_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_single_add_to_cart_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_single_add_to_cart_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_single_add_to_cart_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1.5
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_single_add_to_cart_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_single_add_to_cart_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_single_add_to_cart_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_single_add_to_cart_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'uppercase'
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_single_add_to_cart_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_single_add_to_cart_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_single_add_to_cart_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_woo_single_product_add_to_cart_typo_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10
					],

					'ocean_single_product_addtocart_bg_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_addtocart_bg_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product div.summary button.single_add_to_cart_button' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_addtocart_bg_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product div.summary button.single_add_to_cart_button:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_single_product_addtocart_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_addtocart_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product div.summary button.single_add_to_cart_button' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_addtocart_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product div.summary button.single_add_to_cart_button:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_single_product_addtocart_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Border Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_addtocart_typo_and_color_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_addtocart_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product div.summary button.single_add_to_cart_button' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_addtocart_border_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product div.summary button.single_add_to_cart_button:hover' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],
				]
			],

			'ocean_divider_after_woo_single_product_addtocart_typo_and_color_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
			],

			'ocean_woocommerce_single_product_conditional_section' => [
				'type' => 'section',
				'title' => esc_html__('Single Product Conditional', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'after' => 'ocean_divider_after_woo_single_product_addtocart_typo_and_color_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_single_conditional' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('Display Price and Add to Cart', 'oceanwp'),
						'desc' => esc_html__( 'Display price and Add to Cart button only to logged in users', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_woo_single_cond_msg' => [
						'id' => 'ocean_woo_single_cond_msg',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Display message to logged out users', 'oceanwp'),
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'default'  => 'yes',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'oceanwp_cac_is_single_condition',
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

					'ocean_woo_single_cond_msg_text' => [
						'label'    => esc_html__( 'Price replacement message', 'oceanwp' ),
						'desc'     => esc_html__( 'Message to display to logged out users instead of the price and Add to Cart button. The message will be displayed in the position of the Add to Cart button', 'oceanwp' ),
						'type'     => 'ocean-text',
						'section'  => 'ocean_woocommerce_single_product_conditional_section',
						'transport' => 'postMessage',
						'default'   => esc_html__( 'Log in to view price and purchase', 'oceanwp' ),
						'priority' => 10,
						'hideLabel' => false,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'oceanwp_cac_is_single_condition',
					],

					'ocean_single_add_myaccount_link' => [
						'type' => 'ocean-switch',
						'label' => esc_html__('My Account page link', 'oceanwp'),
						'desc' => esc_html__( 'Include My Account page link in conditional message.', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'default'  => false,
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'active_callback' => 'oceanwp_cac_is_single_condition',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_for_woo_single_add_myaccount_link' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_woo_single_notice_typography' => [
						'id' => 'ocean_woo_single_notice_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Product Notice', 'oceanwp'),
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'woo_single_notice_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'woo_single_notice_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '600'
								],
							],
							'fontWeightTablet' => [
								'id' => 'woo_single_notice_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'woo_single_notice_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'woo_single_notice_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'woo_single_notice_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 18
								],
							],
							'fontSizeTablet' => [
								'id' => 'woo_single_notice_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'woo_single_notice_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'woo_single_notice_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'woo_single_notice_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 1.5
								],
							],
							'letterSpacingTablet' => [
								'id' => 'woo_single_notice_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'woo_single_notice_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'woo_single_notice_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'woo_single_notice_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 2
								],
							],
							'lineHeightTablet' => [
								'id' => 'woo_single_notice_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'woo_single_notice_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'woo_single_notice_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'woo_single_notice_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 'capitalize'
								],
							],
							'textTransformTablet' => [
								'id' => 'woo_single_notice_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'woo_single_notice_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'woo_single_notice_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_for_woo_single_notice_typography' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_single_cond_note_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Conditional Notice Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_cond_note_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.price del,del .amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id' => 'ocean_single_cond_note_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.price del,del .amount' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#52a7fe',
								],
							],
						]
					],

					'ocean_content_for_woo_single_product_conditional_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_single_product_conditional_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_title_for_woo_single_product_additional_options' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Single Product Additional Options', 'oceanwp' ),
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woocommerce_single_product_tab_section' => [
				'type' => 'section',
				'title' => esc_html__('Tabs', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'after' => 'ocean_title_for_woo_single_product_additional_options',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_product_tabs_layout' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Tabs Layout', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'default' => 'horizontal',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'horizontal' => esc_html__( 'Horizontal', 'oceanwp' ),
							'vertical' => esc_html__( 'Vertical', 'oceanwp' ),
							'section' => esc_html__( 'Section', 'oceanwp' ),
						],
					],

					'ocean_woo_product_meta_tabs_position' => [
						'id' => 'ocean_woo_product_meta_tabs_position',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Tabs Position', 'oceanwp'),
						'section' => 'ocean_woocommerce_single_product_tab_section',
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

					'ocean_divider_for_woo_product_meta_tabs_position' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_single_product_tabs_borders_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Borders Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_tabs_borders_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .woocommerce-tabs ul.tabs' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#e9e9e9',
								],
							]
						]
					],

					'ocean_single_product_tabs_text_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Text Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_tabs_text_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .woocommerce-tabs ul.tabs li a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#999999',
								],
							],
							'hover' => [
								'id' => 'ocean_single_product_tabs_text_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
						]
					],

					'ocean_single_product_tabs_active_text_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Active Text Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_tabs_active_text_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							]
						]
					],

					'ocean_single_product_tabs_active_text_borders_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Active Text Borders Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_tabs_active_text_borders_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#13aff0',
								],
							]
						]
					],

					'ocean_single_product_tabs_product_description_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Description Title Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_tabs_product_description_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .woocommerce-tabs .panel h2' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#333333',
								],
							]
						]
					],

					'ocean_single_product_tabs_product_description_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Description Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_single_product_tabs_product_description_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.woocommerce div.product .woocommerce-tabs .panel p' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default' => '#929292',
								],
							]
						]
					],

					'ocean_content_for_woo_single_product_tab_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_single_product_tab_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_divider_for_woo_single_product_upsell_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
			],

			'ocean_woocommerce_single_product_upsell_section' => [
				'type' => 'section',
				'title' => esc_html__('Up-Sell and Related Items', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'after' => 'ocean_divider_for_woo_single_product_upsell_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woocommerce_upsells_count' => [
						'label'    => esc_html__( 'Up-Sells Count', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'refresh',
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
								'id' => 'ocean_woocommerce_upsells_count',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 3,
								],
							]
						]
					],

					'ocean_woocommerce_upsells_columns' => [
						'label'    => esc_html__( 'Up-Sells Columns', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 7,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_woocommerce_upsells_columns',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 3,
								],
							]
						]
					],

					'ocean_divider_before_woocommerce_upsells_columns_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1
					],

					'ocean_title_for_woocommerce_upsells_columns_settings' => [
						'type' => 'ocean-title',
						'label' => esc_html__( 'Related Items', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 20,
						'bottom' => 20,
					],

					'ocean_woocommerce_display_related_items' => [
						'id' => 'ocean_woocommerce_display_related_items',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Display Related Items', 'oceanwp'),
						'section' => 'ocean_woocommerce_single_product_upsell_section',
						'default'  => 'on',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'on'  => [
								'id'     => 'on',
								'label'   => esc_html__('Yes', 'oceanwp'),
								'content' => esc_html__('Yes', 'oceanwp'),
							],
							'off'  => [
								'id'     => 'off',
								'label'   => esc_html__('No', 'oceanwp'),
								'content' => esc_html__('No', 'oceanwp'),
							]
						]
					],

					'ocean_divider_after_woocommerce_upsells_columns_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'active_callback' => 'oceanwp_cac_is_woo_single_related_items',
					],

					'ocean_woocommerce_related_count' => [
						'label'    => esc_html__( 'Related Items Count', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_woo_single_related_items',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_woocommerce_related_count',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 3,
								],
							]
						]
					],

					'ocean_woocommerce_related_columns' => [
						'label'    => esc_html__( 'Related Products Columns', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 7,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_woo_single_related_items',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_woocommerce_related_columns',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
									'default' => 3,
								],
							]
						]
					],

					'ocean_content_for_woo_single_product_upsell_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_single_product_upsell_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_divider_for_woo_single_product_floating_bar_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
			],

			'ocean_woocommerce_single_product_floating_bar_section' => [
				'type' => 'section',
				'title' => esc_html__('Floating Bar', 'oceanwp'),
				'section' => 'ocean_woocommerce_single',
				'after' => 'ocean_divider_for_woo_single_product_floating_bar_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_display_floating_bar' => [
						'id' => 'ocean_woo_display_floating_bar',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Display Floating Bar', 'oceanwp'),
						'desc' => esc_html__( 'The floating bar is to display the add to cart button when you scroll to increase conversions.', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'default'  => 'on',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'on'  => [
								'id'     => 'on',
								'label'   => esc_html__('Yes', 'oceanwp'),
								'content' => esc_html__('Yes', 'oceanwp'),
							],
							'off'  => [
								'id'     => 'off',
								'label'   => esc_html__('No', 'oceanwp'),
								'content' => esc_html__('No', 'oceanwp'),
							]
						]
					],

					'ocean_divider_after_woo_display_floating_bar_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
					],

					'ocean_woo_floating_bar_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_bg',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#2c2c2c',
								],
							],
						]
					],

					'ocean_woo_floating_bar_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_title_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar p.selected, .owp-floating-bar h2.entry-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_woo_floating_bar_price_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Price Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_price_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar .product_price del .amount, .owp-floating-bar .product_price .amount, .owp-floating-bar .out-of-stock' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_divider_after_woo_floating_bar_price_color_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
					],

					'ocean_woo_floating_bar_quantity_buttons_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Buttons: Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_quantity_buttons_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(255,255,255,0.1)',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_floating_bar_quantity_buttons_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(255,255,255,0.2)',
								],
							],
						]
					],

					'ocean_woo_floating_bar_quantity_buttons_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Buttons: Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_quantity_buttons_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_floating_bar_quantity_buttons_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_woo_floating_bar_quantity_input_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Input: Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_quantity_input_bg',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar form.cart .quantity .qty' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'rgba(255,255,255,0.2)',
								],
							],
						]
					],

					'ocean_woo_floating_bar_quantity_input_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Input: Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_quantity_input_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar form.cart .quantity .qty' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_divider_after_woo_floating_bar_quantity_input_color_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
					],

					'ocean_woo_floating_bar_addtocart_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Add To Cart: Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_addtocart_bg',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar button.button' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_floating_bar_addtocart_hover_bg',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f1f1f1',
								],
							],
						]
					],

					'ocean_woo_floating_bar_addtocart_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Add To Cart: Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_floating_bar',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_floating_bar_addtocart_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar button.button' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f1f1f1',
								],
							],
							'hover' => [
								'id' => 'ocean_woo_floating_bar_addtocart_hover_color',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#000000',
								],
							],
						]
					],

					'ocean_content_for_woo_single_product_floating_bar_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_single_product_floating_bar_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],
				]
			],

			'ocean_content_for_woo_single_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_woocommerce_single',
				'transport' => 'postMessage',
				'priority' => 50,
			],
		]
	],

	'ocean_spacer_for_woo_product_image_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'woocommerce_product_images' => [
		'type' => 'section',
		'title' => esc_html__('Product Images', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_spacer_for_woo_product_image_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_spacer_woo_product_image_setting' => [
				'type' => 'ocean-spacer',
				'section' => 'woocommerce_product_images',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 1
			],

			'ocean_content_for_woo_product_image_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'woocommerce_product_images',
				'transport' => 'postMessage',
				'priority' => 50,
			],
		]
	],

	'ocean_spacer_after_woo_product_image_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
		'active_callback' => 'ocean_cb_oec_active',
	],

	'ocean_divider_for_woo_cart_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

	'ocean_woocommerce_cart' => [
		'type' => 'section',
		'title' => esc_html__('Cart', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_divider_for_woo_cart_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_desc_for_woocommerce_cart_section' => [
				'type' => 'ocean-content',
				'isContent' => esc_html__('For some options, you must save and refresh your live site to preview changes.', 'oceanwp'),
				'section' => 'ocean_woocommerce_cart',
				'class' => 'description',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_woo_distraction_free_cart' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Distraction Free Cart', 'oceanwp'),
				'section' => 'ocean_woocommerce_cart',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_woo_distraction_free_cart_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10
			],

			'ocean_woocommerce_cross_sells_count' => [
				'label'    => esc_html__( 'Cart: Cross-Sells Count', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_cart',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => 0,
				'max'          => 10,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woocommerce_cross_sells_count',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'refresh',
							'default' => 2,
						],
					]
				]
			],

			'ocean_woocommerce_cross_sells_columns' => [
				'label'    => esc_html__( 'Cart: Cross-Sells Columns', 'oceanwp' ),
				'type'     => 'ocean-range-slider',
				'section'  => 'ocean_woocommerce_cart',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => 1,
				'max'          => 7,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_woocommerce_cross_sells_columns',
						'label' =>esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'refresh',
							'default' => 2,
						],
					]
				]
			],

			'ocean_divider_after_woo_cross_sells_columns_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
			],

			'ocean_cart_borders_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Borders Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_cart_borders_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-cart table.shop_table,.woocommerce-cart table.shop_table th,.woocommerce-cart table.shop_table td,.woocommerce-cart .cart-collaterals .cross-sells,.woocommerce-page .cart-collaterals .cross-sells,.woocommerce-cart .cart-collaterals h2,.woocommerce-cart .cart-collaterals .cart_totals,.woocommerce-page .cart-collaterals .cart_totals,.woocommerce-cart .cart-collaterals .cart_totals table th,.woocommerce-cart .cart-collaterals .cart_totals .order-total th,.woocommerce-cart table.shop_table td,.woocommerce-cart .cart-collaterals .cart_totals tr td,.woocommerce-cart .cart-collaterals .cart_totals .order-total td' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#e9e9e9',
						],
					]
				]
			],

			'ocean_cart_head_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Head Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_cart_head_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-cart table.shop_table thead,.woocommerce-cart .cart-collaterals h2' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#f7f7f7',
						],
					]
				]
			],

			'ocean_cart_head_titles_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Head Title Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_cart_head_titles_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-cart table.shop_table thead th,.woocommerce-cart .cart-collaterals h2' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#444444',
						],
					]
				]
			],

			'ocean_cart_totals_table_titles_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Cart Totals Table: Titles Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_cart_totals_table_titles_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-cart .cart-collaterals .cart_totals table th' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#444444',
						],
					]
				]
			],

			'ocean_cart_remove_button_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Remove Button Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_cart_remove_button_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.woocommerce table.shop_table a.remove' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#bbbbbb',
						],
					],
					'hover' => [
						'id' => 'ocean_cart_remove_button_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.woocommerce table.shop_table a.remove:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default' => '#333333',
						],
					]
				]
			],

			'ocean_content_for_woo_cart_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_woocommerce_cart',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_spacer_for_woo_checkout_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_woocommerce_checkout' => [
		'type' => 'section',
		'title' => esc_html__('Checkout', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_spacer_for_woo_checkout_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_divider_after_default_woo_checkout_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 10
			],

			'ocean_woo_distraction_free_checkout' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Distraction Free Checkout', 'oceanwp'),
				'section' => 'ocean_woocommerce_checkout',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_divider_after_woo_distraction_free_checkout_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_woo_multi_step_checkout' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Checkout Style: Default and Multi-Step', 'oceanwp'),
				'section' => 'ocean_woocommerce_checkout',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_woocommerce_multistep_checkout_section' => [
				'type' => 'section',
				'title' => esc_html__('Multi-Step Checkout Style', 'oceanwp'),
				'section' => 'ocean_woocommerce_checkout',
				'after' => 'ocean_woo_multi_step_checkout',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_woo_multi_step_checkout_timeline_style' => [
						'id' => 'ocean_woo_multi_step_checkout_timeline_style',
						'type' => 'ocean-buttons',
						'label' => esc_html__('Timeline Style', 'oceanwp'),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'default'  => 'arrow',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'arrow'  => [
								'id'     => 'arrow',
								'label'   => esc_html__('Arrow', 'oceanwp'),
								'content' => esc_html__('Arrow', 'oceanwp'),
							],
							'square'  => [
								'id'     => 'square',
								'label'   => esc_html__('Square', 'oceanwp'),
								'content' => esc_html__('Square', 'oceanwp'),
							]
						]
					],

					'ocean_divider_after_woo_multi_step_checkout_timeline_style_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'bottom' => 10,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
					],

					'ocean_woo_checkout_timeline_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_checkout_timeline_bg',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-wrapper' => 'background-color',
									'#owp-checkout-timeline.arrow .timeline-wrapper:before' => 'border-top-color',
									'#owp-checkout-timeline.arrow .timeline-wrapper:before' => 'border-right-color',
									'#owp-checkout-timeline.arrow .timeline-wrapper:before' => 'border-bottom-color',
									'#owp-checkout-timeline.arrow .timeline-wrapper:before' => 'border-left-color',
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#eeeeee',
								],
							],
						]
					],

					'ocean_woo_checkout_timeline_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_checkout_timeline_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-wrapper' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_woo_checkout_timeline_number_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Number Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_checkout_timeline_number_bg',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_woo_checkout_timeline_number_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Number Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_checkout_timeline_number_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#cccccc',
								],
							],
						]
					],

					'ocean_woo_checkout_timeline_number_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Number Border', 'oceanwp' ),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_checkout_timeline_number_border_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .timeline-step' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#cccccc',
								],
							],
						]
					],

					'ocean_woo_checkout_timeline_active_bg' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Active Background', 'oceanwp' ),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_checkout_timeline_active_bg',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .active .timeline-wrapper' => 'background-color',
									'#owp-checkout-timeline.arrow .active .timeline-wrapper:before' => 'border-top-color',
									'#owp-checkout-timeline.arrow .active .timeline-wrapper:before' => 'border-right-color',
									'#owp-checkout-timeline.arrow .active .timeline-wrapper:before' => 'border-bottom-color',
									'#owp-checkout-timeline.arrow .active .timeline-wrapper:before' => 'border-left-color',
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
						]
					],

					'ocean_woo_checkout_timeline_active_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Active Color', 'oceanwp' ),
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_woo_checkout_timeline_active_color',
								'key' => 'normal',
								'label' =>esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'#owp-checkout-timeline .active .timeline-wrapper' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ffffff',
								],
							],
						]
					],

					'ocean_content_for_woo_checkout_multistep_need_help_link' => [
						'type' => 'ocean-content',
						'isContent' => ocean_render_content_need_help(),
						'class' => 'need-help',
						'section' => 'ocean_woocommerce_multistep_checkout_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
					],
				]
			],

			'ocean_spacer_after_woo_multistep_checkout_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'active_callback' => 'oceanwp_cac_is_woo_multistep_checkout',
			],

			'ocean_divider_after_woo_multistep_checkout_section' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1
			],

			'ocean_checkout_notices_borders_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Notices: Borders Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_notices_borders_color',
						'key' => 'normal',
						'label' =>esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout .woocommerce-info' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#e9e9e9',
						],
					],
				]
			],

			'ocean_checkout_notices_icon_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Notices: Icon Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_notices_icon_color',
						'key' => 'normal',
						'label' =>esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout .woocommerce-info:before' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#dddddd',
						],
					],
				]
			],

			'ocean_checkout_notices_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Notices: Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_notices_color',
						'key' => 'normal',
						'label' =>esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout .woocommerce-info' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#777777',
						],
					],
				]
			],

			'ocean_checkout_notices_link_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Notices: Link Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_notices_link_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout .woocommerce-info a' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					],
					'hover' => [
						'id' => 'ocean_checkout_notices_link_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout .woocommerce-info a:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					],
				]
			],

			'ocean_checkout_notices_form_border_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Notices Form: Border Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_notices_form_border_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout form.login,.woocommerce-checkout form.checkout_coupon' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#e9e9e9',
						],
					],
				]
			],

			'ocean_checkout_titles_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Titles Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_titles_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce .woocommerce-checkout #customer_details h3,.woocommerce .woocommerce-checkout h3#order_review_heading' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					],
				]
			],

			'ocean_checkout_titles_border_bottom_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Titles Border Bottom Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_titles_border_bottom_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce .woocommerce-checkout #customer_details h3,.woocommerce .woocommerce-checkout h3#order_review_heading' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#e9e9e9',
						],
					],
				]
			],

			'ocean_checkout_table_main_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Table Main Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_table_main_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce table.shop_table thead,.woocommerce-checkout-review-order-table tfoot th' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#f7f7f7',
						],
					],
				]
			],

			'ocean_checkout_table_titles_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Table Titles Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_table_titles_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout table.shop_table thead th,.woocommerce #order_review table.shop_table tfoot th' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#444444',
						],
					],
				]
			],

			'ocean_checkout_table_borders_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Table Borders Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_table_borders_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout table.shop_table,.woocommerce-checkout table.shop_table th,.woocommerce-checkout table.shop_table td,.woocommerce-checkout table.shop_table tfoot th,.woocommerce-checkout table.shop_table tfoot td' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#e9e9e9',
						],
					],
				]
			],

			'ocean_checkout_payment_methods_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Payment Methods Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_payment_methods_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout #payment' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#f8f8f8',
						],
					],
				]
			],

			'ocean_checkout_payment_methods_borders_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Payment Methods Borders Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_payment_methods_borders_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout #payment,.woocommerce-checkout #payment ul.payment_methods' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#e9e9e9',
						],
					],
				]
			],

			'ocean_checkout_payment_box_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Payment Box Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_payment_box_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout #payment div.payment_box' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					],
				]
			],

			'ocean_checkout_payment_box_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Payment Box Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_checkout_payment_box_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-checkout #payment div.payment_box' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#515151',
						],
					],
				]
			],

			'ocean_content_for_woo_checkout_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_woocommerce_checkout',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_for_woo_styling_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

	'ocean_woocommerce_styling' => [
		'type' => 'section',
		'title' => esc_html__('Additional Options', 'oceanwp'),
		'section' => 'ocean_woocommerce_settings',
		'after' => 'ocean_divider_for_woo_styling_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_title_for_woo_sales_badge_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'On Sale Badge', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_sale_badge_style' => [
				'id' => 'ocean_woo_sale_badge_style',
				'type' => 'ocean-select',
				'label' => esc_html__('On Sale Badge Style', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'default' => 'square',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'square' => esc_html__( 'Square', 'oceanwp' ),
					'circle' => esc_html__( 'Circle', 'oceanwp' ),
				]
			],

			'ocean_woo_sale_badge_content' => [
				'id' => 'ocean_woo_sale_badge_content',
				'type' => 'ocean-select',
				'label' => esc_html__('On Sale Badge Content', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'refresh',
				'default' => 'sale',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'sale'    => esc_html__( 'On Sale Text', 'oceanwp' ),
					'percent' => esc_html__( 'Percentage', 'oceanwp' ),
				]
			],

			'ocean_divider_after_woo_sale_badge_content' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
			],

			'ocean_onsale_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'On Sale Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_onsale_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#owp-checkout-timeline .timeline-step' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#3fc387',
						],
					],
				]
			],

			'ocean_onsale_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'On Sale Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_onsale_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#owp-checkout-timeline .timeline-step' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					],
				]
			],

			'ocean_title_for_woo_my_account_page_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'My Account Page', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_woo_account_page_style' => [
				'type' => 'ocean-buttons',
				'label' => esc_html__('Login/Register Style', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'default' => 'original',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'original' => [
						'id'     => 'original',
						'label'   => esc_html__('Original', 'oceanwp'),
						'content' => esc_html__('Original', 'oceanwp'),
					],
					'side'  => [
						'id'     => 'side',
						'label'   => esc_html__( 'Side by Side', 'oceanwp' ),
						'content' => esc_html__( 'Side by Side', 'oceanwp' ),
					],
				]
			],

			'ocean_divider_after_woo_account_page_style' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10,
			],

			'ocean_account_login_register_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Login/Register Links', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_login_register_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce .owp-account-links li .owp-account-link, .woocommerce .owp-account-links li.orDisplay Related Items' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					],
				]
			],

			'ocean_divider_after_woo_account_login_register_color' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_account_navigation_borders_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Navigation: Borders', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_navigation_borders_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-navigation ul,.woocommerce-MyAccount-navigation ul li' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#e9e9e9',
						],
					],
				]
			],

			'ocean_account_navigation_icons_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Navigation: Icons', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_navigation_icons_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-navigation ul li a:before' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					],
				]
			],

			'ocean_account_navigation_links_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Navigation: Links', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_navigation_links_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-navigation ul li a' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					],
					'hover' => [
						'id' => 'ocean_account_navigation_links_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-navigation ul li a:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#13aff0',
						],
					],
				]
			],

			'ocean_divider_after_woo_account_navigation_links_color' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
				'bottom' => 10
			],

			'ocean_account_addresses_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Addresses Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_addresses_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address .title, .woocommerce-MyAccount-content .addresses .woocommerce-Address address' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#f6f6f6',
						],
					],
				]
			],

			'ocean_account_addresses_title_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Addresses Title', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_addresses_title_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address .title h3' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333333',
						],
					],
				]
			],

			'ocean_account_addresses_title_border_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Addresses Title Border Bottom', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_addresses_title_border_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address .title' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					],
				]
			],

			'ocean_account_addresses_content_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Addresses Content', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_addresses_content_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address address' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#898989',
						],
					],
				]
			],

			'ocean_account_addresses_button_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Addresses Button Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_addresses_button_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					],
					'hover' => [
						'id' => 'ocean_account_addresses_button_bg_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a:hover' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#f8f8f8',
						],
					],
				]
			],

			'ocean_account_addresses_button_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Addresses Button', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_account_addresses_button_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#898989',
						],
					],
					'hover' => [
						'id' => 'ocean_account_addresses_button_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#555555',
						],
					],
				]
			],

			'ocean_title_for_woo_out_of_stock_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Out Of Stock', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_outofstock_bg' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Out of Stock Background', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_outofstock_bg',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce ul.products li.product.outofstock .outofstock-badge' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#000000',
						],
					],
				]
			],

			'ocean_outofstock_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Out of Stock Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_outofstock_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce ul.products li.product.outofstock .outofstock-badge' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						],
					],
				]
			],

			'ocean_title_for_woo_rating_stars_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Rating Stars', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20,
			],

			'ocean_stars_color_before' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Stars Color Before', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_stars_color_before',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce .star-rating:before' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#dfdbdf',
						],
					],
				]
			],

			'ocean_stars_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Stars Color', 'oceanwp' ),
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_stars_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.woocommerce .star-rating span, .woocommerce .star-rating span:before' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#f9ca63',
						],
					],
				]
			],

			'ocean_content_for_woo_styling_need_help_link' => [
				'type' => 'ocean-content',
				'isContent' => ocean_render_content_need_help(),
				'class' => 'need-help',
				'section' => 'ocean_woocommerce_styling',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_content_for_woo_need_help_link' => [
		'type' => 'ocean-content',
		'isContent' => ocean_render_content_need_help(),
		'class' => 'need-help',
		'section' => 'ocean_woocommerce_settings',
		'transport' => 'postMessage',
		'priority' => 10,
	],
];
