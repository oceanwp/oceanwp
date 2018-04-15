<?php
/**
 * EDD Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_EDD_Customizer' ) ) :

	class OceanWP_EDD_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {

			add_action( 'customize_register', 	array( $this, 'customizer_options' ) );
			add_filter( 'ocean_head_css', 		array( $this, 'head_css' ) );

		}

		/**
		 * Customizer options
		 *
		 * @since 1.0.0
		 */
		public function customizer_options( $wp_customize ) {

			/**
			 * Panel
			 */
			$panel = 'ocean_edd_panel';
			$wp_customize->add_panel( $panel , array(
				'title' 			=> esc_html__( 'Easy Digital Downloads', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_edd_general' , array(
				'title' 			=> esc_html__( 'General', 'oceanwp' ),
				'description' 		=> esc_html__( 'For some options, you must save and refresh your live site to preview changes.', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Custom EDD Sidebar
			 */
			$wp_customize->add_setting( 'ocean_edd_custom_sidebar', array(
				'default'           	=> true,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_custom_sidebar', array(
				'label'	   				=> esc_html__( 'Custom EDD Sidebar', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_edd_general',
				'settings' 				=> 'ocean_edd_custom_sidebar',
				'priority' 				=> 10,
			) ) );

			/**
			 * Display Cart When Product Added
			 */
			$wp_customize->add_setting( 'ocean_edd_display_cart_product_added', array(
				'default'           	=> 'no',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Buttonset_Control( $wp_customize, 'ocean_edd_display_cart_product_added', array(
				'label'	   				=> esc_html__( 'Display Cart When Product Added', 'oceanwp' ),
				'description'	   		=> esc_html__( 'Display the cart when a product is added, work in the shop and the single product pages if ajax is enabled.', 'oceanwp' ),
				'section'  				=> 'ocean_edd_general',
				'settings' 				=> 'ocean_edd_display_cart_product_added',
				'priority' 				=> 10,
				'choices' 				=> array(
					'yes' 	=> esc_html__( 'Yes', 'oceanwp' ),
					'no' 	=> esc_html__( 'No', 'oceanwp' ),
				),
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_edd_menu_cart' , array(
				'title' 			=> esc_html__( 'Menu Cart', 'oceanwp' ),
				'description' 		=> esc_html__( 'For some options, you must save and refresh your live site to preview changes.', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Hide If Empty
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon_hide_if_empty', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_menu_icon_hide_if_empty', array(
				'label'	   				=> esc_html__( 'Hide If Empty Cart', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_icon_hide_if_empty',
				'priority' 				=> 10,
			) ) );

			/**
			 * Visibility
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon_visibility', array(
				'default'           	=> 'default',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_menu_icon_visibility', array(
				'label'	   				=> esc_html__( 'Visibility', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_icon_visibility',
				'priority' 				=> 10,
				'choices' 				=> array(
					'default' 			=> esc_html__( 'Display On All Devices', 'oceanwp' ),
					'disabled' 			=> esc_html__( 'Disabled On All Devices', 'oceanwp' ),
				),
			) ) );

			/**
			 * Bag Style
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_bag_style', array(
				'default'           	=> 'no',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Buttonset_Control( $wp_customize, 'ocean_edd_menu_bag_style', array(
				'label'	   				=> esc_html__( 'Bag Style', 'oceanwp' ),
				'description'	   		=> esc_html__( 'This setting rep^lace the cart icon by a bag with the items count in it.', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_bag_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'yes' 	=> esc_html__( 'Yes', 'oceanwp' ),
					'no' 	=> esc_html__( 'No', 'oceanwp' ),
				),
			) ) );

			/**
			 * Bag Style Total
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_bag_style_total', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_menu_bag_style_total', array(
				'label'	   				=> esc_html__( 'Bag Icon Display Total', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_bag_style_total',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_bag_style',
			) ) );

			/**
			 * Bag Icon Color
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_bag_icon_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#333333',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_menu_bag_icon_color', array(
				'label'	   				=> esc_html__( 'Bag Icon Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_bag_icon_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_bag_style',
			) ) );

			/**
			 * Bag Icon Hover Color
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_bag_icon_hover_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#13aff0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_menu_bag_icon_hover_color', array(
				'label'	   				=> esc_html__( 'Bag Icon Hover Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_bag_icon_hover_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_bag_style',
			) ) );

			/**
			 * Bag Icon Count Color
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_bag_icon_count_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#333333',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_menu_bag_icon_count_color', array(
				'label'	   				=> esc_html__( 'Bag Icon Count Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_bag_icon_count_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_bag_style',
			) ) );

			/**
			 * Bag Icon Hover Count Color
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_bag_icon_hover_count_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#ffffff',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_menu_bag_icon_hover_count_color', array(
				'label'	   				=> esc_html__( 'Bag Icon Hover Count Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_bag_icon_hover_count_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_bag_style',
			) ) );

			/**
			 * Display
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon_display', array(
				'default'           	=> 'icon_count',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_menu_icon_display', array(
				'label'	   				=> esc_html__( 'Display', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_icon_display',
				'priority' 				=> 10,
				'choices' 				=> array(
					'icon' 				=> esc_html__( 'Icon', 'oceanwp' ),
					'icon_total' 		=> esc_html__( 'Icon And Cart Total', 'oceanwp' ),
					'icon_count' 		=> esc_html__( 'Icon And Cart Count', 'oceanwp' ),
					'icon_count_total' 	=> esc_html__( 'Icon And Cart Count + Total', 'oceanwp' ),
				),
				'active_callback' 		=> 'oceanwp_cac_hasnt_edd_bag_style',
			) ) );

			/**
			 * Style
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon_style', array(
				'transport'           	=> 'postMessage',
				'default'           	=> 'drop_down',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_menu_icon_style', array(
				'label'	   				=> esc_html__( 'Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_icon_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'drop_down' 		=> esc_html__( 'Drop-Down', 'oceanwp' ),
					'cart' 				=> esc_html__( 'Go To Cart', 'oceanwp' ),
					'custom_link' 		=> esc_html__( 'Custom Link', 'oceanwp' ),
				),
			) ) );

			/**
			 * Custom Link
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon_custom_link', array(
				'transport'           	=> 'postMessage',
				'sanitize_callback' 	=> 'esc_url_raw',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_menu_icon_custom_link', array(
				'label'	   				=> esc_html__( 'Custom Link', 'oceanwp' ),
				'description'	   		=> esc_html__( 'The Custom Link style need to be selected', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_icon_custom_link',
				'priority' 				=> 10,
			) ) );

			/**
			 * Icon
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon', array(
				'transport' 			=> 'postMessage',
				'default'           	=> 'icon-handbag',
				'sanitize_callback' 	=> 'wp_filter_nohtml_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Icon_Select_Control( $wp_customize, 'ocean_edd_menu_icon', array(
				'label'	   				=> esc_html__( 'Cart Icon', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_icon',
				'priority' 				=> 10,
			    'choices' 				=> oceanwp_get_cart_icons(),
				'active_callback' 		=> 'oceanwp_cac_hasnt_edd_bag_style',
			) ) );

			/**
			 * Custom Icon
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_custom_icon', array(
				'transport'           	=> 'postMessage',
				'sanitize_callback' 	=> 'wp_filter_nohtml_kses',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_menu_custom_icon', array(
				'label'	   				=> esc_html__( 'Custom Icon', 'oceanwp' ),
				'description'	   		=> esc_html__( 'Enter your full icon class', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_menu_custom_icon',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_hasnt_edd_bag_style',
			) ) );

			/**
			 * Icon Size
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon_size', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_edd_menu_icon_size_tablet', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_edd_menu_icon_size_mobile', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, 'ocean_edd_menu_icon_size', array(
				'label'	   				=> esc_html__( 'Icon Size (px)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' => array(
		            'desktop' 	=> 'ocean_edd_menu_icon_size',
		            'tablet' 	=> 'ocean_edd_menu_icon_size_tablet',
		            'mobile' 	=> 'ocean_edd_menu_icon_size_mobile',
			    ),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 10,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_hasnt_edd_bag_style',
			) ) );

			/**
			 * Center Vertically
			 */
			$wp_customize->add_setting( 'ocean_edd_menu_icon_center_vertically', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_edd_menu_icon_center_vertically_tablet', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_edd_menu_icon_center_vertically_mobile', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, 'ocean_edd_menu_icon_center_vertically', array(
				'label'	   				=> esc_html__( 'Center Vertically', 'oceanwp' ),
				'description'	   		=> esc_html__( 'Use this field to center your icon vertically', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' => array(
		            'desktop' 	=> 'ocean_edd_menu_icon_center_vertically',
		            'tablet' 	=> 'ocean_edd_menu_icon_center_vertically_tablet',
		            'mobile' 	=> 'ocean_edd_menu_icon_center_vertically_mobile',
			    ),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_hasnt_edd_bag_style',
			) ) );

			/**
			 * Heading Styling
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdowns_styling_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_edd_cart_dropdowns_styling_heading', array(
				'label'    	=> esc_html__( 'Cart Dropdown Styling', 'oceanwp' ),
				'section'  	=> 'ocean_edd_menu_cart',
				'priority' 	=> 10,
			) ) );

			/**
			 * Style
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_style', array(
				'transport' 			=> 'postMessage',
				'default'           	=> 'compact',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_cart_dropdown_style', array(
				'label'	   				=> esc_html__( 'Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'compact' 		=> esc_html__( 'Compact', 'oceanwp' ),
					'spacious' 		=> esc_html__( 'Spacious', 'oceanwp' ),
				),
			) ) );

			/**
			 * Dropdowns Width
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_width', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '350',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_edd_cart_dropdown_width', array(
				'label'	   				=> esc_html__( 'Cart Dropdowns Width (px)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 30,
			        'max'   => 600,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Dropdown Background Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_bg', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#ffffff',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_bg', array(
				'label'	   				=> esc_html__( 'Dropdown Background Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_bg',
				'priority' 				=> 10,
			) ) );

			/**
			 * Dropdown Borders Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_borders', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#e6e6e6',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_borders', array(
				'label'	   				=> esc_html__( 'Dropdown Borders Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_borders',
				'priority' 				=> 10,
			) ) );

			/**
			 * Remove Link Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_remove_link_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#b3b3b3',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_remove_link_color', array(
				'label'	   				=> esc_html__( 'Remove Link Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_remove_link_color',
				'priority' 				=> 10,
			) ) );

			/**
			 * Remove Link Hover Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_remove_link_color_hover', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#13aff0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_remove_link_color_hover', array(
				'label'	   				=> esc_html__( 'Remove Link Color: Hover', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_remove_link_color_hover',
				'priority' 				=> 10,
			) ) );

			/**
			 * Price Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_price_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#57bf6d',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_price_color', array(
				'label'	   				=> esc_html__( 'Price Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_price_color',
				'priority' 				=> 10,
			) ) );

			/**
			 * Subtotal Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_subtotal_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#797979',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_subtotal_color', array(
				'label'	   				=> esc_html__( 'Subtotal Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_subtotal_color',
				'priority' 				=> 10,
			) ) );

			/**
			 * Total Price Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_total_price_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#57bf6d',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_total_price_color', array(
				'label'	   				=> esc_html__( 'Total Price Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_total_price_color',
				'priority' 				=> 10,
			) ) );

			/**
			 * Checkout Button: Background Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_checkout_button_bg', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_checkout_button_bg', array(
				'label'	   				=> esc_html__( 'Checkout Button Background', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_checkout_button_bg',
				'priority' 				=> 10,
			) ) );

			/**
			 * Checkout Button Hover: Background Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_checkout_button_hover_bg', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_checkout_button_hover_bg', array(
				'label'	   				=> esc_html__( 'Checkout Button Background: Hover', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_checkout_button_hover_bg',
				'priority' 				=> 10,
			) ) );

			/**
			 * Checkout Button: Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_checkout_button_color', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_checkout_button_color', array(
				'label'	   				=> esc_html__( 'Checkout Button Color', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_checkout_button_color',
				'priority' 				=> 10,
			) ) );

			/**
			 * Checkout Button Hover: Color
			 */
			$wp_customize->add_setting( 'ocean_edd_cart_dropdown_checkout_button_hover_color', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_cart_dropdown_checkout_button_hover_color', array(
				'label'	   				=> esc_html__( 'Checkout Button Color: Hover', 'oceanwp' ),
				'section'  				=> 'ocean_edd_menu_cart',
				'settings' 				=> 'ocean_edd_cart_dropdown_checkout_button_hover_color',
				'priority' 				=> 10,
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_edd_archives' , array(
				'title' 			=> esc_html__( 'Archives', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Layout
			 */
			$wp_customize->add_setting( 'ocean_edd_archive_layout', array(
				'default'           	=> 'left-sidebar',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Radio_Image_Control( $wp_customize, 'ocean_edd_archive_layout', array(
				'label'	   				=> esc_html__( 'Layout', 'oceanwp' ),
				'section'  				=> 'ocean_edd_archives',
				'settings' 				=> 'ocean_edd_archive_layout',
				'priority' 				=> 10,
				'choices' 				=> oceanwp_customizer_layout(),
			) ) );

			/**
			 * Both Sidebars Style
			 */
			$wp_customize->add_setting( 'ocean_edd_archive_both_sidebars_style', array(
				'default'           	=> 'scs-style',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_archive_both_sidebars_style', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_archives',
				'settings' 				=> 'ocean_edd_archive_both_sidebars_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'ssc-style' 		=> esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' 		=> esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' 		=> esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				),
				'active_callback' 		=> 'oceanwp_cac_has_edd_shop_bs_layout',
			) ) );

			/**
			 * Both Sidebars Content Width
			 */
			$wp_customize->add_setting( 'ocean_edd_archive_both_sidebars_content_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_archive_both_sidebars_content_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Content Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_edd_archives',
				'settings' 				=> 'ocean_edd_archive_both_sidebars_content_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_edd_shop_bs_layout',
			) ) );

			/**
			 * Both Sidebars Sidebars Width
			 */
			$wp_customize->add_setting( 'ocean_edd_archive_both_sidebars_sidebars_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_archive_both_sidebars_sidebars_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Sidebars Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_edd_archives',
				'settings' 				=> 'ocean_edd_archive_both_sidebars_sidebars_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_edd_shop_bs_layout',
			) ) );

			/**
			 * Shop Columns
			 */
			$wp_customize->add_setting( 'ocean_edd_archive_columns', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '3',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_edd_tablet_archive_columns', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_edd_mobile_archive_columns', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, 'ocean_edd_archive_columns', array(
				'label' 			=> esc_html__( 'Shop Columns', 'oceanwp' ),
				'section'  			=> 'ocean_edd_archives',
				'settings' => array(
		            'desktop' 	=> 'ocean_edd_archive_columns',
		            'tablet' 	=> 'ocean_edd_tablet_archive_columns',
		            'mobile' 	=> 'ocean_edd_mobile_archive_columns',
			    ),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 1,
			        'max'   => 4,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Products Heading
			 */
			$wp_customize->add_setting( 'ocean_edd_archive_products_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_edd_archive_products_heading', array(
				'label'    				=> esc_html__( 'Products', 'oceanwp' ),
				'section'  				=> 'ocean_edd_archives',
				'priority' 				=> 10,
			) ) );

			/**
			 * Product Elements Positioning
			 */
			$wp_customize->add_setting( 'oceanwp_edd_archive_elements_positioning', array(
				'default' 				=> array( 'image', 'category', 'title', 'price', 'description' , 'button' ),
				'sanitize_callback' 	=> 'oceanwp_sanitize_multi_choices',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Sortable_Control( $wp_customize, 'oceanwp_edd_archive_elements_positioning', array(
				'label'	   				=> esc_html__( 'Elements Positioning', 'oceanwp' ),
				'section'  				=> 'ocean_edd_archives',
				'settings' 				=> 'oceanwp_edd_archive_elements_positioning',
				'priority' 				=> 10,
				'choices' 				=> array(
					'image'    			=> esc_html__( 'Image', 'oceanwp' ),
					'category'       	=> esc_html__( 'Category', 'oceanwp' ),
					'title' 			=> esc_html__( 'Title', 'oceanwp' ),
					'price' 		    => esc_html__( 'Price', 'oceanwp' ),
					'description' 		=> esc_html__( 'Description', 'oceanwp' ),
					'button' 			=> esc_html__( 'Add To Cart Button', 'oceanwp' ),
				),
			) ) );

			/**
			 * Product Entry Content Alignment
			 */
			$wp_customize->add_setting( 'ocean_edd_product_entry_content_alignment', array(
				'transport' 			=> 'postMessage',
				'default'           	=> 'center',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Buttonset_Control( $wp_customize, 'ocean_edd_product_entry_content_alignment', array(
				'label'	   				=> esc_html__( 'Content Alignment', 'oceanwp' ),
				'section'  				=> 'ocean_edd_archives',
				'settings' 				=> 'ocean_edd_product_entry_content_alignment',
				'priority' 				=> 10,
				'choices' 				=> array(
					'left' 		=> esc_html__( 'Left', 'oceanwp' ),
					'center' 	=> esc_html__( 'Center', 'oceanwp' ),
					'right' 	=> esc_html__( 'Right', 'oceanwp' ),
				),
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_edd_single' , array(
				'title' 			=> esc_html__( 'Single Product', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Layout
			 */
			$wp_customize->add_setting( 'ocean_edd_product_layout', array(
				'default'           	=> 'left-sidebar',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Radio_Image_Control( $wp_customize, 'ocean_edd_product_layout', array(
				'label'	   				=> esc_html__( 'Layout', 'oceanwp' ),
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'ocean_edd_product_layout',
				'priority' 				=> 10,
				'choices' 				=> oceanwp_customizer_layout(),
			) ) );

			/**
			 * Both Sidebars Style
			 */
			$wp_customize->add_setting( 'ocean_edd_product_both_sidebars_style', array(
				'default'           	=> 'scs-style',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_product_both_sidebars_style', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'ocean_edd_product_both_sidebars_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'ssc-style' 		=> esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' 		=> esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' 		=> esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				),
				'active_callback' 		=> 'oceanwp_cac_has_edd_product_bs_layout',
			) ) );

			/**
			 * Both Sidebars Content Width
			 */
			$wp_customize->add_setting( 'ocean_edd_product_both_sidebars_content_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_product_both_sidebars_content_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Content Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'ocean_edd_product_both_sidebars_content_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_edd_product_bs_layout',
			) ) );

			/**
			 * Both Sidebars Sidebars Width
			 */
			$wp_customize->add_setting( 'ocean_edd_product_both_sidebars_sidebars_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_product_both_sidebars_sidebars_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Sidebars Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'ocean_edd_product_both_sidebars_sidebars_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_edd_product_bs_layout',
			) ) );

			/**
			 * Elements Positioning
			 */
			$wp_customize->add_setting( 'oceanwp_edd_single_elements_positioning', array(
				'default' 				=> array( 'title', 'price', 'button', 'category', 'tag' ),
				'sanitize_callback' 	=> 'oceanwp_sanitize_multi_choices',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Sortable_Control( $wp_customize, 'oceanwp_edd_single_elements_positioning', array(
				'label'	   				=> esc_html__( 'Elements Positioning', 'oceanwp' ),
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'oceanwp_edd_single_elements_positioning',
				'priority' 				=> 10,
				'choices' 				=> array(
					'title'             => esc_html__( 'Title', 'oceanwp' ),
					'price'             => esc_html__( 'Price', 'oceanwp' ),
					'button' 	        => esc_html__( 'Add To Cart', 'oceanwp' ),
					'category'          => esc_html__( 'Category', 'oceanwp' ),
					'tag'               => esc_html__( 'Tag', 'oceanwp' )
				),
			) ) );

			/**
			 * Display Product Navigation
			 */
			$wp_customize->add_setting( 'ocean_edd_display_navigation', array(
				'default'           	=> true,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_display_navigation', array(
				'label'	   				=> esc_html__( 'Display Product Navigation', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'ocean_edd_display_navigation',
				'priority' 				=> 10,
			) ) );

			/**
			 * Image Width
			 */
			$wp_customize->add_setting( 'ocean_edd_product_image_width', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '52',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_edd_product_image_width', array(
				'label'	   				=> esc_html__( 'Image Width (%)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'ocean_edd_product_image_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Summary Width
			 */
			$wp_customize->add_setting( 'ocean_edd_product_summary_width', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '44',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_edd_product_summary_width', array(
				'label'	   				=> esc_html__( 'Summary Width (%)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_single',
				'settings' 				=> 'ocean_edd_product_summary_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Heading Checkout Page
			 */
			$wp_customize->add_setting( 'ocean_edd_checkout_page_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_edd_checkout_page_heading', array(
				'label'    				=> esc_html__( 'Checkout Page', 'oceanwp' ),
				'section'  				=> 'ocean_edd_cart_checkout',
				'priority' 				=> 10,
			) ) );

			/**
			 * Distraction Free Checkout
			 */
			$wp_customize->add_setting( 'ocean_edd_distraction_free_checkout', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_distraction_free_checkout', array(
				'label'	   				=> esc_html__( 'Distraction Free Checkout', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_edd_cart_checkout',
				'settings' 				=> 'ocean_edd_distraction_free_checkout',
				'priority' 				=> 10,
			) ) );

			/**
			 * Multi-Step Checkout
			 */
			$wp_customize->add_setting( 'ocean_edd_multi_step_checkout', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_multi_step_checkout', array(
				'label'	   				=> esc_html__( 'Multi-Step Checkout', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_edd_cart_checkout',
				'settings' 				=> 'ocean_edd_multi_step_checkout',
				'priority' 				=> 10,
			) ) );

			/**
			 * Multi-Step Checkout Timeline Style
			 */
			$wp_customize->add_setting( 'ocean_edd_multi_step_checkout_timeline_style', array(
				'transport'				=> 'postMessage',
				'default'           	=> 'arrow',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_edd_multi_step_checkout_timeline_style', array(
				'label'	   				=> esc_html__( 'Timeline Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_cart_checkout',
				'settings' 				=> 'ocean_edd_multi_step_checkout_timeline_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'arrow' 		=> esc_html__( 'Arrow', 'oceanwp' ),
					'square' 		=> esc_html__( 'Square', 'oceanwp' ),
				),
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
		     * Multi-Step Checkout Timeline Background
		     */
	        $wp_customize->add_setting( 'ocean_edd_checkout_timeline_bg', array(
				'default'				=> '#eeeeee',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_checkout_timeline_bg', array(
				'label'					=> esc_html__( 'Timeline: Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_cart_checkout',
				'settings'				=> 'ocean_edd_checkout_timeline_bg',
				'priority'				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
		     * Multi-Step Checkout Timeline Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_checkout_timeline_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_checkout_timeline_color', array(
				'label'					=> esc_html__( 'Timeline: Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_cart_checkout',
				'settings'				=> 'ocean_edd_checkout_timeline_color',
				'priority'				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
		     * Multi-Step Checkout Timeline Number Background
		     */
	        $wp_customize->add_setting( 'ocean_edd_checkout_timeline_number_bg', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_checkout_timeline_number_bg', array(
				'label'					=> esc_html__( 'Timeline Number: Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_cart_checkout',
				'settings'				=> 'ocean_edd_checkout_timeline_number_bg',
				'priority'				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
		     * Multi-Step Checkout Timeline Number Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_checkout_timeline_number_color', array(
				'default'				=> '#cccccc',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_checkout_timeline_number_color', array(
				'label'					=> esc_html__( 'Timeline Number: Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_cart_checkout',
				'settings'				=> 'ocean_edd_checkout_timeline_number_color',
				'priority'				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
		     * Multi-Step Checkout Timeline Number Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_checkout_timeline_number_border_color', array(
				'default'				=> '#cccccc',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_checkout_timeline_number_border_color', array(
				'label'					=> esc_html__( 'Timeline Number: Border Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_cart_checkout',
				'settings'				=> 'ocean_edd_checkout_timeline_number_border_color',
				'priority'				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
		     * Multi-Step Checkout Timeline Background
		     */
	        $wp_customize->add_setting( 'ocean_edd_checkout_timeline_active_bg', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_checkout_timeline_active_bg', array(
				'label'					=> esc_html__( 'Timeline Active: Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_cart_checkout',
				'settings'				=> 'ocean_edd_checkout_timeline_active_bg',
				'priority'				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
		     * Multi-Step Checkout Timeline Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_checkout_timeline_active_color', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_checkout_timeline_active_color', array(
				'label'					=> esc_html__( 'Timeline Active: Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_cart_checkout',
				'settings'				=> 'ocean_edd_checkout_timeline_active_color',
				'priority'				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_edd_multistep_checkout',
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_edd_styling' , array(
				'title' 				=> esc_html__( 'Advanced Styling', 'oceanwp' ),
				'priority' 				=> 10,
				'panel' 				=> $panel,
			) );

			/**
			 * Heading Product Entry
			 */
			$wp_customize->add_setting( 'ocean_product_entry_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_product_entry_heading', array(
				'label'    				=> esc_html__( 'Product Entry', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
			 * Product Padding
			 */
			$wp_customize->add_setting( 'ocean_product_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_product_tablet_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_product_mobile_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_product_padding', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_product_top_padding',
		            'desktop_right' 	=> 'ocean_product_right_padding',
		            'desktop_bottom' 	=> 'ocean_product_bottom_padding',
		            'desktop_left' 		=> 'ocean_product_left_padding',
		            'tablet_top' 		=> 'ocean_product_tablet_top_padding',
		            'tablet_right' 		=> 'ocean_product_tablet_right_padding',
		            'tablet_bottom' 	=> 'ocean_product_tablet_bottom_padding',
		            'tablet_left' 		=> 'ocean_product_tablet_left_padding',
		            'mobile_top' 		=> 'ocean_product_mobile_top_padding',
		            'mobile_right' 		=> 'ocean_product_mobile_right_padding',
		            'mobile_bottom' 	=> 'ocean_product_mobile_bottom_padding',
		            'mobile_left' 		=> 'ocean_product_mobile_left_padding',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Product Image Margin
			 */
			$wp_customize->add_setting( 'ocean_product_image_top_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_image_right_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_image_bottom_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_image_left_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_product_image_tablet_top_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_image_tablet_right_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_image_tablet_bottom_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_image_tablet_left_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_product_image_mobile_top_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_image_mobile_right_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_image_mobile_bottom_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_image_mobile_left_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_product_image_margin', array(
				'label'	   				=> esc_html__( 'Image Margin (px)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_product_image_top_margin',
		            'desktop_right' 	=> 'ocean_product_image_right_margin',
		            'desktop_bottom' 	=> 'ocean_product_image_bottom_margin',
		            'desktop_left' 		=> 'ocean_product_image_left_margin',
		            'tablet_top' 		=> 'ocean_product_image_tablet_top_margin',
		            'tablet_right' 		=> 'ocean_product_image_tablet_right_margin',
		            'tablet_bottom' 	=> 'ocean_product_image_tablet_bottom_margin',
		            'tablet_left' 		=> 'ocean_product_image_tablet_left_margin',
		            'mobile_top' 		=> 'ocean_product_image_mobile_top_margin',
		            'mobile_right' 		=> 'ocean_product_image_mobile_right_margin',
		            'mobile_bottom' 	=> 'ocean_product_image_mobile_bottom_margin',
		            'mobile_left' 		=> 'ocean_product_image_mobile_left_margin',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Product Border Width
			 */
			$wp_customize->add_setting( 'ocean_product_top_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_right_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_bottom_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_left_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_product_tablet_top_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_right_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_bottom_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_left_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_product_mobile_top_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_right_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_bottom_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_left_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_product_border_width', array(
				'label'	   				=> esc_html__( 'Border Width (px)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_product_top_border_width',
		            'desktop_right' 	=> 'ocean_product_right_border_width',
		            'desktop_bottom' 	=> 'ocean_product_bottom_border_width',
		            'desktop_left' 		=> 'ocean_product_left_border_width',
		            'tablet_top' 		=> 'ocean_product_tablet_top_border_width',
		            'tablet_right' 		=> 'ocean_product_tablet_right_border_width',
		            'tablet_bottom' 	=> 'ocean_product_tablet_bottom_border_width',
		            'tablet_left' 		=> 'ocean_product_tablet_left_border_width',
		            'mobile_top' 		=> 'ocean_product_mobile_top_border_width',
		            'mobile_right' 		=> 'ocean_product_mobile_right_border_width',
		            'mobile_bottom' 	=> 'ocean_product_mobile_bottom_border_width',
		            'mobile_left' 		=> 'ocean_product_mobile_left_border_width',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Product Border Radius
			 */
			$wp_customize->add_setting( 'ocean_product_top_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_right_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_bottom_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_product_left_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_product_tablet_top_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_right_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_bottom_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_tablet_left_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_product_mobile_top_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_right_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_bottom_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_product_mobile_left_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_product_border_radius', array(
				'label'	   				=> esc_html__( 'Border Radius (px)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_product_top_border_radius',
		            'desktop_right' 	=> 'ocean_product_right_border_radius',
		            'desktop_bottom' 	=> 'ocean_product_bottom_border_radius',
		            'desktop_left' 		=> 'ocean_product_left_border_radius',
		            'tablet_top' 		=> 'ocean_product_tablet_top_border_radius',
		            'tablet_right' 		=> 'ocean_product_tablet_right_border_radius',
		            'tablet_bottom' 	=> 'ocean_product_tablet_bottom_border_radius',
		            'tablet_left' 		=> 'ocean_product_tablet_left_border_radius',
		            'mobile_top' 		=> 'ocean_product_mobile_top_border_radius',
		            'mobile_right' 		=> 'ocean_product_mobile_right_border_radius',
		            'mobile_bottom' 	=> 'ocean_product_mobile_bottom_border_radius',
		            'mobile_left' 		=> 'ocean_product_mobile_left_border_radius',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 200,
			        'step'  => 1,
			    ),
			) ) );

			/**
		     * Background Color
		     */
	        $wp_customize->add_setting( 'ocean_product_background_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_background_color', array(
				'label'					=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_background_color',
				'priority'				=> 10
			) ) );

			/**
		     * Border Color
		     */
	        $wp_customize->add_setting( 'ocean_product_border_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_border_color', array(
				'label'					=> esc_html__( 'Border Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_border_color',
				'priority'				=> 10
			) ) );

			/**
		     * Category Color
		     */
	        $wp_customize->add_setting( 'ocean_category_color', array(
				'default'				=> '#999999',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_category_color', array(
				'label'					=> esc_html__( 'Category Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_category_color',
				'priority'				=> 10
			) ) );

			/**
		     * Category Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_category_color_hover', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_category_color_hover', array(
				'label'					=> esc_html__( 'Category Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_category_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Title Color
		     */
	        $wp_customize->add_setting( 'ocean_product_title_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_title_color', array(
				'label'					=> esc_html__( 'Title Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Title Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_product_title_color_hover', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_title_color_hover', array(
				'label'					=> esc_html__( 'Title Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_title_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Price Color
		     */
	        $wp_customize->add_setting( 'ocean_product_entry_price_color', array(
				'default'				=> '#57bf6d',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_entry_price_color', array(
				'label'					=> esc_html__( 'Price Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_entry_price_color',
				'priority'				=> 10,
			) ) );

			/**
			 * Heading Product Entry Add To Cart
			 */
			$wp_customize->add_setting( 'ocean_product_entry_addtocart_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_product_entry_addtocart_heading', array(
				'label'    				=> esc_html__( 'Product Entry: Add To Cart', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Product Entry Add To Cart Background Color
		     */
	        $wp_customize->add_setting( 'ocean_product_entry_addtocart_bg_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_entry_addtocart_bg_color', array(
				'label'					=> esc_html__( 'Add To Cart Background Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_entry_addtocart_bg_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Add To Cart Background Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_product_entry_addtocart_bg_color_hover', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_entry_addtocart_bg_color_hover', array(
				'label'					=> esc_html__( 'Add To Cart Background Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_entry_addtocart_bg_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Add To Cart Color
		     */
	        $wp_customize->add_setting( 'ocean_product_entry_addtocart_color', array(
				'default'				=> '#848494',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_entry_addtocart_color', array(
				'label'					=> esc_html__( 'Add To Cart Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_entry_addtocart_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Add To Cart Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_product_entry_addtocart_color_hover', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_entry_addtocart_color_hover', array(
				'label'					=> esc_html__( 'Add To Cart Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_entry_addtocart_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Add To Cart Border Color
		     */
	        $wp_customize->add_setting( 'ocean_product_entry_addtocart_border_color', array(
				'default'				=> '#e4e4e4',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_entry_addtocart_border_color', array(
				'label'					=> esc_html__( 'Add To Cart Border Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_entry_addtocart_border_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Product Entry Add To Cart Border Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_product_entry_addtocart_border_color_hover', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_product_entry_addtocart_border_color_hover', array(
				'label'					=> esc_html__( 'Add To Cart Border Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_product_entry_addtocart_border_color_hover',
				'priority'				=> 10,
			) ) );

			/**
			 * Product Entry Add To Cart Border Style
			 */
			$wp_customize->add_setting( 'ocean_product_entry_addtocart_border_style', array(
				'default'           	=> 'double',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_product_entry_addtocart_border_style', array(
				'label'	   				=> esc_html__( 'Add To Cart Border: Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_edd_styling',
				'settings' 				=> 'ocean_product_entry_addtocart_border_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'none' 			=> esc_html__( 'None', 'oceanwp' ),
					'solid' 		=> esc_html__( 'Solid', 'oceanwp' ),
					'double' 		=> esc_html__( 'Double', 'oceanwp' ),
					'dashed' 		=> esc_html__( 'Dashed', 'oceanwp' ),
					'dotted' 		=> esc_html__( 'Dotted', 'oceanwp' ),
				),
			) ) );

			/**
		     * Product Entry Add To Cart Border Size
		     */
			$wp_customize->add_setting( 'ocean_product_entry_addtocart_border_size', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'wp_kses_post',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_product_entry_addtocart_border_size', array(
				'label'	   				=> esc_html__( 'Add To Cart Border: Size', 'oceanwp' ),
				'description' 			=> esc_html__( 'Add a custom border size. px - em - %.', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> 'ocean_edd_styling',
				'settings' 				=> 'ocean_product_entry_addtocart_border_size',
				'priority' 				=> 10,
			) ) );

			/**
		     * Product Entry Add To Cart Border Radius
		     */
			$wp_customize->add_setting( 'ocean_product_entry_addtocart_border_radius', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'wp_kses_post',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_product_entry_addtocart_border_radius', array(
				'label'	   				=> esc_html__( 'Add To Cart Border: Radius', 'oceanwp' ),
				'description' 			=> esc_html__( 'Add a custom border radius. px - em - %.', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> 'ocean_edd_styling',
				'settings' 				=> 'ocean_product_entry_addtocart_border_radius',
				'priority' 				=> 10,
			) ) );

			/**
			 * Heading Quick View
			 */
			$wp_customize->add_setting( 'ocean_edd_quick_view_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_edd_quick_view_heading', array(
				'label'    				=> esc_html__( 'Quick View', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Quick View Button Background Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_button_bg', array(
				'default'				=> 'rgba(0,0,0,0.6)',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_button_bg', array(
				'label'					=> esc_html__( 'Button: Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_button_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Button Hover Background Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_button_hover_bg', array(
				'default'				=> 'rgba(0,0,0,0.9)',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_button_hover_bg', array(
				'label'					=> esc_html__( 'Button: Hover Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_button_hover_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Button Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_button_color', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_button_color', array(
				'label'					=> esc_html__( 'Button: Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_button_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Button Hover Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_button_hover_color', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_button_hover_color', array(
				'label'					=> esc_html__( 'Button: Hover Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_button_hover_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Overlay Background Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_overlay_bg', array(
				'default'				=> 'rgba(0,0,0,0.15)',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_overlay_bg', array(
				'label'					=> esc_html__( 'Overlay: Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_overlay_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Overlay Spinner Outside Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_overlay_spinner_outside_color', array(
				'default'				=> 'rgba(0,0,0,0.1)',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_overlay_spinner_outside_color', array(
				'label'					=> esc_html__( 'Overlay Spinner: Outside Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_overlay_spinner_outside_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Overlay Spinner Inner Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_overlay_spinner_inner_color', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_overlay_spinner_inner_color', array(
				'label'					=> esc_html__( 'Overlay Spinner: Inner Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_overlay_spinner_inner_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Modal Background Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_modal_bg', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_modal_bg', array(
				'label'					=> esc_html__( 'Modal: Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_modal_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Quick View Modal Close Button Color
		     */
	        $wp_customize->add_setting( 'ocean_edd_quick_view_modal_close_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_edd_quick_view_modal_close_color', array(
				'label'					=> esc_html__( 'Modal Close Button: Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_edd_quick_view_modal_close_color',
				'priority'				=> 10,
			) ) );

			/**
			 * Heading Single Product
			 */
			$wp_customize->add_setting( 'ocean_single_product_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_single_product_heading', array(
				'label'    				=> esc_html__( 'Single Product', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Single Product Title Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_title_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_title_color', array(
				'label'					=> esc_html__( 'Title Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Price Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_price_color', array(
				'default'				=> '#57bf6d',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_price_color', array(
				'label'					=> esc_html__( 'Price Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_price_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Description Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_description_color', array(
				'default'				=> '#aaaaaa',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_description_color', array(
				'label'					=> esc_html__( 'Description Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_description_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Meta Title Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_meta_title_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_meta_title_color', array(
				'label'					=> esc_html__( 'Meta Title Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_meta_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Meta Link Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_meta_link_color', array(
				'default'				=> '#aaaaaa',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_meta_link_color', array(
				'label'					=> esc_html__( 'Meta Link Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_meta_link_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Meta Link Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_single_product_meta_link_color_hover', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_meta_link_color_hover', array(
				'label'					=> esc_html__( 'Meta Link Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_meta_link_color_hover',
				'priority'				=> 10,
			) ) );

			/**
			 * Heading Single Product Navigation
			 */
			$wp_customize->add_setting( 'ocean_single_product_navigation_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_single_product_navigation_heading', array(
				'label'    				=> esc_html__( 'Single Product: Product Navigation', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
			 * Single Product Navigation Border Radius
			 */
			$wp_customize->add_setting( 'ocean_single_product_navigation_border_radius', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '30',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_single_product_navigation_border_radius', array(
				'label'	   				=> esc_html__( 'Border Radius (px)', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'settings' 				=> 'ocean_single_product_navigation_border_radius',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 30,
			        'step'  => 1,
			    ),
			) ) );

			/**
		     * Single Product Navigation Background Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_navigation_bg', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_navigation_bg', array(
				'label'					=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_navigation_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Navigation Hover Background Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_navigation_hover_bg', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_navigation_hover_bg', array(
				'label'					=> esc_html__( 'Background Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_navigation_hover_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Navigation Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_navigation_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_navigation_color', array(
				'label'					=> esc_html__( 'Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_navigation_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Navigation Hover Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_navigation_hover_color', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_navigation_hover_color', array(
				'label'					=> esc_html__( 'Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_navigation_hover_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Navigation Border Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_navigation_border_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_navigation_border_color', array(
				'label'					=> esc_html__( 'Border Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_navigation_border_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Single Product Navigation Hover Border Color
		     */
	        $wp_customize->add_setting( 'ocean_single_product_navigation_hover_border_color', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_single_product_navigation_hover_border_color', array(
				'label'					=> esc_html__( 'Border Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_single_product_navigation_hover_border_color',
				'priority'				=> 10,
			) ) );

			/**
			 * Heading Account
			 */
			$wp_customize->add_setting( 'ocean_account_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_account_heading', array(
				'label'    				=> esc_html__( 'Account', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Account Login/Register Links Color
		     */
	        $wp_customize->add_setting( 'ocean_account_login_register_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_login_register_color', array(
				'label'					=> esc_html__( 'Login/Register Links: Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_login_register_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Navigation Borders Color
		     */
	        $wp_customize->add_setting( 'ocean_account_navigation_borders_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_navigation_borders_color', array(
				'label'					=> esc_html__( 'Navigation: Borders Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_navigation_borders_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Navigation Icons Color
		     */
	        $wp_customize->add_setting( 'ocean_account_navigation_icons_color', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_navigation_icons_color', array(
				'label'					=> esc_html__( 'Navigation: Icons Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_navigation_icons_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Navigation Links Color
		     */
	        $wp_customize->add_setting( 'ocean_account_navigation_links_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_navigation_links_color', array(
				'label'					=> esc_html__( 'Navigation: Links Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_navigation_links_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Navigation Links Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_account_navigation_links_color_hover', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_navigation_links_color_hover', array(
				'label'					=> esc_html__( 'Navigation: Links Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_navigation_links_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Background
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_bg', array(
				'default'				=> '#f6f6f6',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_bg', array(
				'label'					=> esc_html__( 'Addresses: Box Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Title Color
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_title_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_title_color', array(
				'label'					=> esc_html__( 'Addresses: Box Title Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Title Border Bottom Color
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_title_border_color', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_title_border_color', array(
				'label'					=> esc_html__( 'Addresses: Box Title Border Bottom Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_title_border_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Content Color
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_content_color', array(
				'default'				=> '#898989',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_content_color', array(
				'label'					=> esc_html__( 'Addresses: Box Content Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_content_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Button Background Color
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_button_bg', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_button_bg', array(
				'label'					=> esc_html__( 'Addresses: Box Button Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_button_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Button Background Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_button_bg_hover', array(
				'default'				=> '#f8f8f8',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_button_bg_hover', array(
				'label'					=> esc_html__( 'Addresses: Box Button Background: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_button_bg_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Button Color
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_button_color', array(
				'default'				=> '#898989',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_button_color', array(
				'label'					=> esc_html__( 'Addresses: Box Button color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_button_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Addresses Box Button Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_account_addresses_button_color_hover', array(
				'default'				=> '#555555',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_account_addresses_button_color_hover', array(
				'label'					=> esc_html__( 'Addresses: Box Button color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_account_addresses_button_color_hover',
				'priority'				=> 10,
			) ) );

			/**
			 * Heading Cart
			 */
			$wp_customize->add_setting( 'ocean_cart_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_cart_heading', array(
				'label'    				=> esc_html__( 'Cart', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Borders Color
		     */
	        $wp_customize->add_setting( 'ocean_cart_borders_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_cart_borders_color', array(
				'label'					=> esc_html__( 'Borders Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_cart_borders_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Head Background
		     */
	        $wp_customize->add_setting( 'ocean_cart_head_bg', array(
				'default'				=> '#f7f7f7',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_cart_head_bg', array(
				'label'					=> esc_html__( 'Head Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_cart_head_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Head Titles Color
		     */
	        $wp_customize->add_setting( 'ocean_cart_head_titles_color', array(
				'default'				=> '#444444',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_cart_head_titles_color', array(
				'label'					=> esc_html__( 'Head Titles Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_cart_head_titles_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Cart Totals Table Titles Color
		     */
	        $wp_customize->add_setting( 'ocean_cart_totals_table_titles_color', array(
				'default'				=> '#444444',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_cart_totals_table_titles_color', array(
				'label'					=> esc_html__( 'Cart Totals Table: Titles Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_cart_totals_table_titles_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Remove Button Color
		     */
	        $wp_customize->add_setting( 'ocean_cart_remove_button_color', array(
				'default'				=> '#bbbbbb',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );
			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_cart_remove_button_color', array(
				'label'					=> esc_html__( 'Remove Button Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_cart_remove_button_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Remove Button Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_cart_remove_button_color_hover', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_cart_remove_button_color_hover', array(
				'label'					=> esc_html__( 'Remove Button Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_cart_remove_button_color_hover',
				'priority'				=> 10,
			) ) );

			/**
			 * Heading Checkout
			 */
			$wp_customize->add_setting( 'ocean_checkout_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_checkout_heading', array(
				'label'    				=> esc_html__( 'Checkout', 'oceanwp' ),
				'section'  				=> 'ocean_edd_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Notices Borders Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_notices_borders_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_notices_borders_color', array(
				'label'					=> esc_html__( 'Notices: Borders Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_notices_borders_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Notices Icon Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_notices_icon_color', array(
				'default'				=> '#dddddd',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_notices_icon_color', array(
				'label'					=> esc_html__( 'Notices: Icon Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_notices_icon_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Notices Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_notices_color', array(
				'default'				=> '#777777',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_notices_color', array(
				'label'					=> esc_html__( 'Notices: Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_notices_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Notices Link Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_notices_link_color', array(
				'default'				=> '#13aff0',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_notices_link_color', array(
				'label'					=> esc_html__( 'Notices: Link Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_notices_link_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Notices Link Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_checkout_notices_link_color_hover', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_notices_link_color_hover', array(
				'label'					=> esc_html__( 'Notices: Link Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_notices_link_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Notices Form Border Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_notices_form_border_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_notices_form_border_color', array(
				'label'					=> esc_html__( 'Notices Form: Border Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_notices_form_border_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Titles Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_titles_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_titles_color', array(
				'label'					=> esc_html__( 'Titles Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_titles_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Titles Border Bottom Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_titles_border_bottom_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_titles_border_bottom_color', array(
				'label'					=> esc_html__( 'Titles Border Bottom Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_titles_border_bottom_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Table Main Background
		     */
	        $wp_customize->add_setting( 'ocean_checkout_table_main_bg', array(
				'default'				=> '#f7f7f7',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_table_main_bg', array(
				'label'					=> esc_html__( 'Table Main Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_table_main_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Table Titles Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_table_titles_color', array(
				'default'				=> '#444444',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_table_titles_color', array(
				'label'					=> esc_html__( 'Table Titles Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_table_titles_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Table Borders Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_table_borders_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_table_borders_color', array(
				'label'					=> esc_html__( 'Table Borders Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_table_borders_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Payment Methods Background
		     */
	        $wp_customize->add_setting( 'ocean_checkout_payment_methods_bg', array(
				'default'				=> '#f8f8f8',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_payment_methods_bg', array(
				'label'					=> esc_html__( 'Payment Methods Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_payment_methods_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Payment Methods Borders Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_payment_methods_borders_color', array(
				'default'				=> '#e9e9e9',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_payment_methods_borders_color', array(
				'label'					=> esc_html__( 'Payment Methods Borders Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_payment_methods_borders_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Payment Box Background
		     */
	        $wp_customize->add_setting( 'ocean_checkout_payment_box_bg', array(
				'default'				=> '#ffffff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_payment_box_bg', array(
				'label'					=> esc_html__( 'Payment Box Background', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_payment_box_bg',
				'priority'				=> 10,
			) ) );

			/**
		     * Payment Box Color
		     */
	        $wp_customize->add_setting( 'ocean_checkout_payment_box_color', array(
				'default'				=> '#515151',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_checkout_payment_box_color', array(
				'label'					=> esc_html__( 'Payment Box Color', 'oceanwp' ),
				'section'				=> 'ocean_edd_styling',
				'settings'				=> 'ocean_checkout_payment_box_color',
				'priority'				=> 10,
			) ) );

		}

		/**
		 * Get CSS
		 *
		 * @since 1.0.0
		 */
		public static function head_css( $output ) {
		
			// Global vars
			$menu_icon_size										= get_theme_mod( 'ocean_edd_menu_icon_size' );
			$menu_icon_size_tablet								= get_theme_mod( 'ocean_edd_menu_icon_size_tablet' );
			$menu_icon_size_mobile								= get_theme_mod( 'ocean_edd_menu_icon_size_mobile' );
			$menu_icon_center_vertically						= get_theme_mod( 'ocean_edd_menu_icon_center_vertically' );
			$menu_icon_center_vertically_tablet					= get_theme_mod( 'ocean_edd_menu_icon_center_vertically_tablet' );
			$menu_icon_center_vertically_mobile					= get_theme_mod( 'ocean_edd_menu_icon_center_vertically_mobile' );
			$cart_dropdown_width 								= get_theme_mod( 'ocean_edd_cart_dropdown_width', '350' );
			$edd_menu_bag_icon_color 							= get_theme_mod( 'ocean_edd_menu_bag_icon_color', '#333333' );
			$edd_menu_bag_icon_hover_color 						= get_theme_mod( 'ocean_edd_menu_bag_icon_hover_color', '#13aff0' );
			$edd_menu_bag_icon_count_color 						= get_theme_mod( 'ocean_edd_menu_bag_icon_count_color', '#333333' );
			$edd_menu_bag_icon_hover_count_color 				= get_theme_mod( 'ocean_edd_menu_bag_icon_hover_count_color', '#ffffff' );
			$cart_dropdown_bg 									= get_theme_mod( 'ocean_edd_cart_dropdown_bg', '#ffffff' );
			$cart_dropdown_borders 								= get_theme_mod( 'ocean_edd_cart_dropdown_borders', '#e6e6e6' );
			$cart_dropdown_remove_link_color					= get_theme_mod( 'ocean_edd_cart_dropdown_remove_link_color', '#b3b3b3' );
			$cart_dropdown_remove_link_color_hover				= get_theme_mod( 'ocean_edd_cart_dropdown_remove_link_color_hover', '#13aff0' );
			$cart_dropdown_price_color							= get_theme_mod( 'ocean_edd_cart_dropdown_price_color', '#57bf6d' );
			$cart_dropdown_subtotal_color						= get_theme_mod( 'ocean_edd_cart_dropdown_subtotal_color', '#797979' );
			$cart_dropdown_total_price_color					= get_theme_mod( 'ocean_edd_cart_dropdown_total_price_color', '#57bf6d' );
			$cart_dropdown_checkout_button_bg					= get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_bg' );
			$cart_dropdown_checkout_button_hover_bg				= get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_hover_bg' );
			$cart_dropdown_checkout_button_color				= get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_color' );
			$cart_dropdown_checkout_button_hover_color			= get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_hover_color' );
			$edd_mobile_cart_sidebar_bg							= get_theme_mod( 'ocean_edd_mobile_cart_sidebar_bg', '#ffffff' );
			$edd_mobile_cart_sidebar_close_button_color			= get_theme_mod( 'ocean_edd_mobile_cart_sidebar_close_button_color', '#000000' );
			$edd_mobile_cart_sidebar_title_color				= get_theme_mod( 'ocean_edd_mobile_cart_sidebar_title_color', '#555555' );
			$edd_mobile_cart_sidebar_divider_color				= get_theme_mod( 'ocean_edd_mobile_cart_sidebar_divider_color', 'rgba(0,0,0,0.1)' );
		
			// Styling vars
			$infinite_scroll_spinners_color 					= get_theme_mod( 'ocean_edd_infinite_scroll_spinners_color', '#333333' );
			$edd_product_image_width 							= get_theme_mod( 'ocean_edd_product_image_width', '52' );
			$edd_product_summary_width 							= get_theme_mod( 'ocean_edd_product_summary_width', '44' );
			$floating_bar_bg 									= get_theme_mod( 'ocean_edd_floating_bar_bg', '#2c2c2c' );
			$floating_bar_title_color 							= get_theme_mod( 'ocean_edd_floating_bar_title_color', '#ffffff' );
			$floating_bar_price_color 							= get_theme_mod( 'ocean_edd_floating_bar_price_color', '#ffffff' );
			$floating_bar_quantity_buttons_bg 					= get_theme_mod( 'ocean_edd_floating_bar_quantity_buttons_bg', 'rgba(255,255,255,0.1)' );
			$floating_bar_quantity_buttons_hover_bg 			= get_theme_mod( 'ocean_edd_floating_bar_quantity_buttons_hover_bg', 'rgba(255,255,255,0.2)' );
			$floating_bar_quantity_buttons_color 				= get_theme_mod( 'ocean_edd_floating_bar_quantity_buttons_color', '#ffffff' );
			$floating_bar_quantity_buttons_hover_color 			= get_theme_mod( 'ocean_edd_floating_bar_quantity_buttons_hover_color', '#ffffff' );
			$floating_bar_quantity_input_bg 					= get_theme_mod( 'ocean_edd_floating_bar_quantity_input_bg', 'rgba(255,255,255,0.2)' );
			$floating_bar_quantity_input_color 					= get_theme_mod( 'ocean_edd_floating_bar_quantity_input_color', '#ffffff' );
			$floating_bar_addtocart_bg 							= get_theme_mod( 'ocean_edd_floating_bar_addtocart_bg', '#ffffff' );
			$floating_bar_addtocart_hover_bg 					= get_theme_mod( 'ocean_edd_floating_bar_addtocart_hover_bg', '#f1f1f1' );
			$floating_bar_addtocart_color 						= get_theme_mod( 'ocean_edd_floating_bar_addtocart_color', '#000000' );
			$floating_bar_addtocart_hover_color 				= get_theme_mod( 'ocean_edd_floating_bar_addtocart_hover_color', '#000000' );
			$checkout_timeline_bg 								= get_theme_mod( 'ocean_edd_checkout_timeline_bg', '#eeeeee' );
			$checkout_timeline_color 							= get_theme_mod( 'ocean_edd_checkout_timeline_color', '#333333' );
			$checkout_timeline_number_bg 						= get_theme_mod( 'ocean_edd_checkout_timeline_number_bg', '#ffffff' );
			$checkout_timeline_number_color 					= get_theme_mod( 'ocean_edd_checkout_timeline_number_color', '#cccccc' );
			$checkout_timeline_number_border_color 				= get_theme_mod( 'ocean_edd_checkout_timeline_number_border_color', '#cccccc' );
			$checkout_timeline_active_bg 						= get_theme_mod( 'ocean_edd_checkout_timeline_active_bg', '#13aff0' );
			$checkout_timeline_active_color 					= get_theme_mod( 'ocean_edd_checkout_timeline_active_color', '#ffffff' );
			$product_top_padding 								= get_theme_mod( 'ocean_product_top_padding' );
			$product_right_padding 								= get_theme_mod( 'ocean_product_right_padding' );
			$product_bottom_padding 							= get_theme_mod( 'ocean_product_bottom_padding' );
			$product_left_padding 								= get_theme_mod( 'ocean_product_left_padding' );
			$tablet_product_top_padding 						= get_theme_mod( 'ocean_product_tablet_top_padding' );
			$tablet_product_right_padding 						= get_theme_mod( 'ocean_product_tablet_right_padding' );
			$tablet_product_bottom_padding 						= get_theme_mod( 'ocean_product_tablet_bottom_padding' );
			$tablet_product_left_padding 						= get_theme_mod( 'ocean_product_tablet_left_padding' );
			$mobile_product_top_padding 						= get_theme_mod( 'ocean_product_mobile_top_padding' );
			$mobile_product_right_padding 						= get_theme_mod( 'ocean_product_mobile_right_padding' );
			$mobile_product_bottom_padding 						= get_theme_mod( 'ocean_product_mobile_bottom_padding' );
			$mobile_product_left_padding 						= get_theme_mod( 'ocean_product_mobile_left_padding' );
			$product_image_top_margin 							= get_theme_mod( 'ocean_product_image_top_margin' );
			$product_image_right_margin 						= get_theme_mod( 'ocean_product_image_right_margin' );
			$product_image_bottom_margin 						= get_theme_mod( 'ocean_product_image_bottom_margin' );
			$product_image_left_margin 							= get_theme_mod( 'ocean_product_image_left_margin' );
			$tablet_product_image_top_margin 					= get_theme_mod( 'ocean_product_image_tablet_top_margin' );
			$tablet_product_image_right_margin 					= get_theme_mod( 'ocean_product_image_tablet_right_margin' );
			$tablet_product_image_bottom_margin 				= get_theme_mod( 'ocean_product_image_tablet_bottom_margin' );
			$tablet_product_image_left_margin 					= get_theme_mod( 'ocean_product_image_tablet_left_margin' );
			$mobile_product_image_top_margin 					= get_theme_mod( 'ocean_product_image_mobile_top_margin' );
			$mobile_product_image_right_margin 					= get_theme_mod( 'ocean_product_image_mobile_right_margin' );
			$mobile_product_image_bottom_margin 				= get_theme_mod( 'ocean_product_image_mobile_bottom_margin' );
			$mobile_product_image_left_margin 					= get_theme_mod( 'ocean_product_image_mobile_left_margin' );
			$product_top_border_width 							= get_theme_mod( 'ocean_product_top_border_width' );
			$product_right_border_width 						= get_theme_mod( 'ocean_product_right_border_width' );
			$product_bottom_border_width 						= get_theme_mod( 'ocean_product_bottom_border_width' );
			$product_left_border_width 							= get_theme_mod( 'ocean_product_left_border_width' );
			$tablet_product_top_border_width 					= get_theme_mod( 'ocean_product_tablet_top_border_width' );
			$tablet_product_right_border_width 					= get_theme_mod( 'ocean_product_tablet_right_border_width' );
			$tablet_product_bottom_border_width 				= get_theme_mod( 'ocean_product_tablet_bottom_border_width' );
			$tablet_product_left_border_width 					= get_theme_mod( 'ocean_product_tablet_left_border_width' );
			$mobile_product_top_border_width 					= get_theme_mod( 'ocean_product_mobile_top_border_width' );
			$mobile_product_right_border_width 					= get_theme_mod( 'ocean_product_mobile_right_border_width' );
			$mobile_product_bottom_border_width 				= get_theme_mod( 'ocean_product_mobile_bottom_border_width' );
			$mobile_product_left_border_width 					= get_theme_mod( 'ocean_product_mobile_left_border_width' );
			$product_top_border_radius 							= get_theme_mod( 'ocean_product_top_border_radius' );
			$product_right_border_radius 						= get_theme_mod( 'ocean_product_right_border_radius' );
			$product_bottom_border_radius 						= get_theme_mod( 'ocean_product_bottom_border_radius' );
			$product_left_border_radius 						= get_theme_mod( 'ocean_product_left_border_radius' );
			$tablet_product_top_border_radius 					= get_theme_mod( 'ocean_product_tablet_top_border_radius' );
			$tablet_product_right_border_radius 				= get_theme_mod( 'ocean_product_tablet_right_border_radius' );
			$tablet_product_bottom_border_radius 				= get_theme_mod( 'ocean_product_tablet_bottom_border_radius' );
			$tablet_product_left_border_radius 					= get_theme_mod( 'ocean_product_tablet_left_border_radius' );
			$mobile_product_top_border_radius 					= get_theme_mod( 'ocean_product_mobile_top_border_radius' );
			$mobile_product_right_border_radius 				= get_theme_mod( 'ocean_product_mobile_right_border_radius' );
			$mobile_product_bottom_border_radius 				= get_theme_mod( 'ocean_product_mobile_bottom_border_radius' );
			$mobile_product_left_border_radius 					= get_theme_mod( 'ocean_product_mobile_left_border_radius' );
			$product_background_color 							= get_theme_mod( 'ocean_product_background_color' );
			$product_border_color 								= get_theme_mod( 'ocean_product_border_color' );
			$category_color 									= get_theme_mod( 'ocean_category_color', '#999999' );
			$category_color_hover 								= get_theme_mod( 'ocean_category_color_hover', '#13aff0' );
			$product_title_color 								= get_theme_mod( 'ocean_product_title_color', '#333333' );
			$product_title_color_hover 							= get_theme_mod( 'ocean_product_title_color_hover', '#13aff0' );
			$product_entry_price_color 							= get_theme_mod( 'ocean_product_entry_price_color', '#57bf6d' );
			$product_entry_addtocart_bg_color 					= get_theme_mod( 'ocean_product_entry_addtocart_bg_color' );
			$product_entry_addtocart_bg_color_hover 			= get_theme_mod( 'ocean_product_entry_addtocart_bg_color_hover' );
			$product_entry_addtocart_color 						= get_theme_mod( 'ocean_product_entry_addtocart_color', '#848494' );
			$product_entry_addtocart_color_hover 				= get_theme_mod( 'ocean_product_entry_addtocart_color_hover', '#13aff0' );
			$product_entry_addtocart_border_color 				= get_theme_mod( 'ocean_product_entry_addtocart_border_color', '#e4e4e4' );
			$product_entry_addtocart_border_color_hover 		= get_theme_mod( 'ocean_product_entry_addtocart_border_color_hover', '#13aff0' );
			$product_entry_addtocart_border_style 				= get_theme_mod( 'ocean_product_entry_addtocart_border_style', 'double' );
			$product_entry_addtocart_border_size 				= get_theme_mod( 'ocean_product_entry_addtocart_border_size' );
			$product_entry_addtocart_border_radius 				= get_theme_mod( 'ocean_product_entry_addtocart_border_radius' );
			$quick_view_button_bg 								= get_theme_mod( 'ocean_edd_quick_view_button_bg', 'rgba(0,0,0,0.6)' );
			$quick_view_button_hover_bg 						= get_theme_mod( 'ocean_edd_quick_view_button_hover_bg', 'rgba(0,0,0,0.9)' );
			$quick_view_button_color 							= get_theme_mod( 'ocean_edd_quick_view_button_color', '#ffffff' );
			$quick_view_button_hover_color 						= get_theme_mod( 'ocean_edd_quick_view_button_hover_color', '#ffffff' );
			$quick_view_overlay_bg 								= get_theme_mod( 'ocean_edd_quick_view_overlay_bg', 'rgba(0,0,0,0.15)' );
			$quick_view_overlay_spinner_outside_color 			= get_theme_mod( 'ocean_edd_quick_view_overlay_spinner_outside_color', 'rgba(0,0,0,0.1)' );
			$quick_view_overlay_spinner_inner_color 			= get_theme_mod( 'ocean_edd_quick_view_overlay_spinner_inner_color', '#ffffff' );
			$quick_view_modal_bg 								= get_theme_mod( 'ocean_edd_quick_view_modal_bg', '#ffffff' );
			$quick_view_modal_close_color 						= get_theme_mod( 'ocean_edd_quick_view_modal_close_color', '#333333' );
			$single_product_title_color 						= get_theme_mod( 'ocean_single_product_title_color', '#333333' );
			$single_product_price_color 						= get_theme_mod( 'ocean_single_product_price_color', '#57bf6d' );
			$single_product_description_color 					= get_theme_mod( 'ocean_single_product_description_color', '#aaaaaa' );
			$single_product_meta_title_color 					= get_theme_mod( 'ocean_single_product_meta_title_color', '#333333' );
			$single_product_meta_link_color 					= get_theme_mod( 'ocean_single_product_meta_link_color', '#aaaaaa' );
			$single_product_meta_link_color_hover 				= get_theme_mod( 'ocean_single_product_meta_link_color_hover', '#13aff0' );
			$single_product_navigation_border_radius 			= get_theme_mod( 'ocean_single_product_navigation_border_radius', '30' );
			$single_product_navigation_bg 						= get_theme_mod( 'ocean_single_product_navigation_bg' );
			$single_product_navigation_hover_bg 				= get_theme_mod( 'ocean_single_product_navigation_hover_bg', '#13aff0' );
			$single_product_navigation_color 					= get_theme_mod( 'ocean_single_product_navigation_color', '#333333' );
			$single_product_navigation_hover_color 				= get_theme_mod( 'ocean_single_product_navigation_hover_color', '#ffffff' );
			$single_product_navigation_border_color 			= get_theme_mod( 'ocean_single_product_navigation_border_color', '#e9e9e9' );
			$single_product_navigation_hover_border_color 		= get_theme_mod( 'ocean_single_product_navigation_hover_border_color', '#13aff0' );
			$account_login_register_color 						= get_theme_mod( 'ocean_account_login_register_color', '#333333' );
			$account_nav_borders_color 							= get_theme_mod( 'ocean_account_navigation_borders_color', '#e9e9e9' );
			$account_nav_icons_color 							= get_theme_mod( 'ocean_account_navigation_icons_color', '#13aff0' );
			$account_nav_links_color 							= get_theme_mod( 'ocean_account_navigation_links_color', '#333333' );
			$account_nav_links_color_hover 						= get_theme_mod( 'ocean_account_navigation_links_color_hover', '#13aff0' );
			$account_addresses_bg 								= get_theme_mod( 'ocean_account_addresses_bg', '#f6f6f6' );
			$account_addresses_title_color 						= get_theme_mod( 'ocean_account_addresses_title_color', '#333333' );
			$account_addresses_title_border_color 				= get_theme_mod( 'ocean_account_addresses_title_border_color', '#ffffff' );
			$account_addresses_content_color 					= get_theme_mod( 'ocean_account_addresses_content_color', '#898989' );
			$account_addresses_button_bg 						= get_theme_mod( 'ocean_account_addresses_button_bg', '#ffffff' );
			$account_addresses_button_bg_hover 					= get_theme_mod( 'ocean_account_addresses_button_bg_hover', '#f8f8f8' );
			$account_addresses_button_color 					= get_theme_mod( 'ocean_account_addresses_button_color', '#898989' );
			$account_addresses_button_color_hover 				= get_theme_mod( 'ocean_account_addresses_button_color_hover', '#555555' );
			$cart_borders_color 								= get_theme_mod( 'ocean_cart_borders_color', '#e9e9e9' );
			$cart_head_bg 										= get_theme_mod( 'ocean_cart_head_bg', '#f7f7f7' );
			$cart_head_titles_color 							= get_theme_mod( 'ocean_cart_head_titles_color', '#444444' );
			$cart_totals_table_titles_color 					= get_theme_mod( 'ocean_cart_totals_table_titles_color', '#444444' );
			$cart_remove_button_color 							= get_theme_mod( 'ocean_cart_remove_button_color', '#bbbbbb' );
			$cart_remove_button_color_hover 					= get_theme_mod( 'ocean_cart_remove_button_color_hover', '#333333' );
			$checkout_notices_borders_color 					= get_theme_mod( 'ocean_checkout_notices_borders_color', '#e9e9e9' );
			$checkout_notices_icon_color 						= get_theme_mod( 'ocean_checkout_notices_icon_color', '#dddddd' );
			$checkout_notices_color 							= get_theme_mod( 'ocean_checkout_notices_color', '#777777' );
			$checkout_notices_link_color 						= get_theme_mod( 'ocean_checkout_notices_link_color', '#13aff0' );
			$checkout_notices_link_color_hover 					= get_theme_mod( 'ocean_checkout_notices_link_color_hover', '#333333' );
			$checkout_notices_form_border_color 				= get_theme_mod( 'ocean_checkout_notices_form_border_color', '#e9e9e9' );
			$checkout_titles_color 								= get_theme_mod( 'ocean_checkout_titles_color', '#333333' );
			$checkout_titles_border_bottom_color 				= get_theme_mod( 'ocean_checkout_titles_border_bottom_color', '#e9e9e9' );
			$checkout_table_main_bg 							= get_theme_mod( 'ocean_checkout_table_main_bg', '#f7f7f7' );
			$checkout_table_titles_color 						= get_theme_mod( 'ocean_checkout_table_titles_color', '#444444' );
			$checkout_table_borders_color 						= get_theme_mod( 'ocean_checkout_table_borders_color', '#e9e9e9' );
			$checkout_payment_methods_bg 						= get_theme_mod( 'ocean_checkout_payment_methods_bg', '#f8f8f8' );
			$checkout_payment_methods_borders_color 			= get_theme_mod( 'ocean_checkout_payment_methods_borders_color', '#e9e9e9' );
			$checkout_payment_box_bg 							= get_theme_mod( 'ocean_checkout_payment_box_bg', '#ffffff' );
			$checkout_payment_box_color 						= get_theme_mod( 'ocean_checkout_payment_box_color', '#515151' );

			// Both sidebars shop page layout
			$archives_layout 									= get_theme_mod( 'ocean_edd_archive_layout', 'left-sidebar' );
			$bs_archives_content_width 							= get_theme_mod( 'ocean_edd_archive_both_sidebars_content_width' );
			$bs_archives_sidebars_width 						= get_theme_mod( 'ocean_edd_archive_both_sidebars_sidebars_width' );

			// Both sidebars single product layout
			$single_layout 										= get_theme_mod( 'ocean_edd_product_layout', 'left-sidebar' );
			$bs_single_content_width 							= get_theme_mod( 'ocean_edd_product_both_sidebars_content_width' );
			$bs_single_sidebars_width 							= get_theme_mod( 'ocean_edd_product_both_sidebars_sidebars_width' );

			// Define css var
			$css = '';

			// Menu cart icon size
			if ( ! empty( $menu_icon_size ) ) {
				$css .= '.eddmenucart i{font-size:'. $menu_icon_size .'px;}';
			}

			// Menu cart icon size tablet
			if ( ! empty( $menu_icon_size_tablet ) ) {
				$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart{font-size:'. $menu_icon_size_tablet .'px;}}';
			}

			// Menu cart icon size mobile
			if ( ! empty( $menu_icon_size_mobile ) ) {
				$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart{font-size:'. $menu_icon_size_mobile .'px;}}';
			}

			// Menu cart icon center vertically
			if ( ! empty( $menu_icon_center_vertically ) ) {
				$css .= '.eddmenucart i{top:'. $menu_icon_center_vertically .'px;}';
			}

			// Menu cart icon center vertically tablet
			if ( ! empty( $menu_icon_center_vertically_tablet ) ) {
				$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart{top:'. $menu_icon_center_vertically_tablet .'px;}}';
			}

			// Menu cart icon center vertically mobile
			if ( ! empty( $menu_icon_center_vertically_mobile ) ) {
				$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart{top:'. $menu_icon_center_vertically_mobile .'px;}}';
			}

			// Cart dropdown width
			if ( ! empty( $cart_dropdown_width ) && '350' != $cart_dropdown_width ) {
				$css .= '.current-shop-items-dropdown{width:'. $cart_dropdown_width .'px;}';
			}

			// Bag icon style color
			if ( ! empty( $edd_menu_bag_icon_color ) && '#333333' != $edd_menu_bag_icon_color ) {
				$css .= '.eddmenucart-cart-icon .eddmenucart-count{border-color:'. $edd_menu_bag_icon_color .';}';
				$css .= '.eddmenucart-cart-icon .eddmenucart-count:after{border-color:'. $edd_menu_bag_icon_color .';}';
			}

			// Bag icon style hover color
			if ( ! empty( $edd_menu_bag_icon_hover_color ) && '#13aff0' != $edd_menu_bag_icon_hover_color ) {
				$css .= '.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count{background-color:'. $edd_menu_bag_icon_hover_color .'; border-color:'. $edd_menu_bag_icon_hover_color .';}';
				$css .= '.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count:after, .show-cart .eddmenucart-cart-icon .eddmenucart-count:after{border-color:'. $edd_menu_bag_icon_hover_color .';}';
			}

			// Bag icon style count color
			if ( ! empty( $edd_menu_bag_icon_count_color ) && '#333333' != $edd_menu_bag_icon_count_color ) {
				$css .= '.eddmenucart-cart-icon .eddmenucart-count, .edd-menu-icon .eddmenucart-total span{color:'. $edd_menu_bag_icon_count_color .';}';
			}

			// Bag icon style hover count color
			if ( ! empty( $edd_menu_bag_icon_hover_count_color ) && '#ffffff' != $edd_menu_bag_icon_hover_count_color ) {
				$css .= '.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count{color:'. $edd_menu_bag_icon_hover_count_color .';}';
			}

			// Cart dropdown background
			if ( ! empty( $cart_dropdown_bg ) && '#ffffff' != $cart_dropdown_bg ) {
				$css .= '.current-shop-items-dropdown{background-color:'. $cart_dropdown_bg .';}';
			}

			// Cart dropdown borders
			if ( ! empty( $cart_dropdown_borders ) && '#e6e6e6' != $cart_dropdown_borders ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li{border-color:'. $cart_dropdown_borders .';}';
			}

			// Cart dropdown remove link color
			if ( ! empty( $cart_dropdown_remove_link_color ) && '#b3b3b3' != $cart_dropdown_remove_link_color ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart{color:'. $cart_dropdown_remove_link_color .';}';
			}

			// Cart dropdown remove link hover color
			if ( ! empty( $cart_dropdown_remove_link_color_hover ) && '#13aff0' != $cart_dropdown_remove_link_color_hover ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart:hover{color:'. $cart_dropdown_remove_link_color_hover .';}';
			}

			// Cart dropdown price color
			if ( ! empty( $cart_dropdown_price_color ) && '#57bf6d' != $cart_dropdown_price_color ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li .edd-cart-item-price{color:'. $cart_dropdown_price_color .';}';
			}

			// Cart dropdown subtotal color
			if ( ! empty( $cart_dropdown_subtotal_color ) && '#797979' != $cart_dropdown_subtotal_color ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_total{color:'. $cart_dropdown_subtotal_color .';}';
			}

			// Cart dropdown total price color
			if ( ! empty( $cart_dropdown_total_price_color ) && '#57bf6d' != $cart_dropdown_total_price_color ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_total .cart-total{color:'. $cart_dropdown_total_price_color .';}';
			}

			// Cart dropdown checkout button background color
			if ( ! empty( $cart_dropdown_checkout_button_bg ) ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a{background-color:'. $cart_dropdown_checkout_button_bg .';}';
			}

			// Cart dropdown checkout button hover background color
			if ( ! empty( $cart_dropdown_checkout_button_hover_bg ) ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover{background-color:'. $cart_dropdown_checkout_button_hover_bg .';}';
			}

			// Cart dropdown checkout button color
			if ( ! empty( $cart_dropdown_checkout_button_color ) ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a{color:'. $cart_dropdown_checkout_button_color .';}';
			}

			// Cart dropdown checkout button hover color
			if ( ! empty( $cart_dropdown_checkout_button_hover_color ) ) {
				$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover{color:'. $cart_dropdown_checkout_button_hover_color .';}';
			}

			// Mobile cart sidebar background color
			if ( ! empty( $edd_mobile_cart_sidebar_bg ) && '#ffffff' != $edd_mobile_cart_sidebar_bg ) {
				$css .= '#oceanwp-cart-sidebar-wrap .oceanwp-cart-sidebar{background-color:'. $edd_mobile_cart_sidebar_bg .';}';
			}

			// Mobile cart sidebar background color
			if ( ! empty( $edd_mobile_cart_sidebar_close_button_color ) && '#000000' != $edd_mobile_cart_sidebar_close_button_color ) {
				$css .= '#oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div, #oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div:before{background-color:'. $edd_mobile_cart_sidebar_close_button_color .';}';
			}

			// Mobile cart sidebar background color
			if ( ! empty( $edd_mobile_cart_sidebar_title_color ) && '#555555' != $edd_mobile_cart_sidebar_title_color ) {
				$css .= '#oceanwp-cart-sidebar-wrap h4{color:'. $edd_mobile_cart_sidebar_title_color .';}';
			}

			// Mobile cart sidebar background color
			if ( ! empty( $edd_mobile_cart_sidebar_divider_color ) && 'rgba(0,0,0,0.1)' != $edd_mobile_cart_sidebar_divider_color ) {
				$css .= '#oceanwp-cart-sidebar-wrap .divider{background-color:'. $edd_mobile_cart_sidebar_divider_color .';}';
			}

			// Infinite scroll spinners color
			if ( ! empty( $infinite_scroll_spinners_color ) && '#333333' != $infinite_scroll_spinners_color ) {
				$css .= '.edd .loader-ellips__dot{background-color:'. $infinite_scroll_spinners_color .';}';
			}

			// Product image width
			if ( ! empty( $edd_product_image_width ) && '52' != $edd_product_image_width ) {
				$css .= '.edd div.product div.images, .edd.content-full-width div.product div.images{width:'. $edd_product_image_width .'%;}';
			}

			// Product summary width
			if ( ! empty( $edd_product_summary_width ) && '44' != $edd_product_summary_width ) {
				$css .= '.edd div.product div.summary, .edd.content-full-width div.product div.summary{width:'. $edd_product_summary_width .'%;}';
			}

			// Add floating bar background
			if ( ! empty( $floating_bar_bg ) && '#2c2c2c' != $floating_bar_bg ) {
				$css .= '.owp-floating-bar{background-color:'. $floating_bar_bg .';}';
			}

			// Add floating bar title color
			if ( ! empty( $floating_bar_title_color ) && '#ffffff' != $floating_bar_title_color ) {
				$css .= '.owp-floating-bar p.selected, .owp-floating-bar h2.entry-title{color:'. $floating_bar_title_color .';}';
			}

			// Add floating bar price color
			if ( ! empty( $floating_bar_price_color ) && '#ffffff' != $floating_bar_price_color ) {
				$css .= '.owp-floating-bar .product_price del .amount, .owp-floating-bar .product_price .amount, .owp-floating-bar .out-of-stock{color:'. $floating_bar_price_color .';}';
			}

			// Add floating bar quantity buttons background
			if ( ! empty( $floating_bar_quantity_buttons_bg ) && 'rgba(255,255,255,0.1)' != $floating_bar_quantity_buttons_bg ) {
				$css .= '.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus{background-color:'. $floating_bar_quantity_buttons_bg .';}';
			}

			// Add floating bar quantity buttons hover background
			if ( ! empty( $floating_bar_quantity_buttons_hover_bg ) && 'rgba(255,255,255,0.2)' != $floating_bar_quantity_buttons_hover_bg ) {
				$css .= '.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover{background-color:'. $floating_bar_quantity_buttons_hover_bg .';}';
			}

			// Add floating bar quantity buttons color
			if ( ! empty( $floating_bar_quantity_buttons_color ) && '#ffffff' != $floating_bar_quantity_buttons_color ) {
				$css .= '.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus{color:'. $floating_bar_quantity_buttons_color .';}';
			}

			// Add floating bar quantity buttons hover color
			if ( ! empty( $floating_bar_quantity_buttons_hover_color ) && '#ffffff' != $floating_bar_quantity_buttons_hover_color ) {
				$css .= '.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover{color:'. $floating_bar_quantity_buttons_hover_color .';}';
			}

			// Add floating bar quantity input background
			if ( ! empty( $floating_bar_quantity_input_bg ) && 'rgba(255,255,255,0.2)' != $floating_bar_quantity_input_bg ) {
				$css .= '.owp-floating-bar form.cart .quantity .qty{background-color:'. $floating_bar_quantity_input_bg .';}';
			}

			// Add floating bar quantity input color
			if ( ! empty( $floating_bar_quantity_input_color ) && '#ffffff' != $floating_bar_quantity_input_color ) {
				$css .= '.owp-floating-bar form.cart .quantity .qty{color:'. $floating_bar_quantity_input_color .';}';
			}

			// Add add to cart background
			if ( ! empty( $floating_bar_addtocart_bg ) && '#ffffff' != $floating_bar_addtocart_bg ) {
				$css .= '.owp-floating-bar button.button{background-color:'. $floating_bar_addtocart_bg .';}';
			}

			// Add add to cart hover background
			if ( ! empty( $floating_bar_addtocart_hover_bg ) && '#f1f1f1' != $floating_bar_addtocart_hover_bg ) {
				$css .= '.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus{background-color:'. $floating_bar_addtocart_hover_bg .';}';
			}

			// Add add to cart color
			if ( ! empty( $floating_bar_addtocart_color ) && '#000000' != $floating_bar_addtocart_color ) {
				$css .= '.owp-floating-bar button.button{color:'. $floating_bar_addtocart_color .';}';
			}

			// Add add to cart hover color
			if ( ! empty( $floating_bar_addtocart_hover_color ) && '#000000' != $floating_bar_addtocart_hover_color ) {
				$css .= '.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus{color:'. $floating_bar_addtocart_hover_color .';}';
			}

			// Add checkout timeline bg
			if ( ! empty( $checkout_timeline_bg ) && '#eeeeee' != $checkout_timeline_bg ) {
				$css .= '#owp-checkout-timeline .timeline-wrapper{background-color:'. $checkout_timeline_bg .';}#owp-checkout-timeline.arrow .timeline-wrapper:before{border-top-color:'. $checkout_timeline_bg .'; border-bottom-color:'. $checkout_timeline_bg .';}#owp-checkout-timeline.arrow .timeline-wrapper:after{border-left-color:'. $checkout_timeline_bg .'; border-right-color:'. $checkout_timeline_bg .';}';
			}

			// Add checkout timeline color
			if ( ! empty( $checkout_timeline_color ) && '#333333' != $checkout_timeline_color ) {
				$css .= '#owp-checkout-timeline .timeline-wrapper{color:'. $checkout_timeline_color .';}';
			}

			// Add checkout timeline number background color
			if ( ! empty( $checkout_timeline_number_bg ) && '#ffffff' != $checkout_timeline_number_bg ) {
				$css .= '#owp-checkout-timeline .timeline-step{background-color:'. $checkout_timeline_number_bg .';}';
			}

			// Add checkout timeline number color
			if ( ! empty( $checkout_timeline_number_color ) && '#ffffff' != $checkout_timeline_number_color ) {
				$css .= '#owp-checkout-timeline .timeline-step{color:'. $checkout_timeline_number_color .';}';
			}

			// Add checkout timeline number border color
			if ( ! empty( $checkout_timeline_number_border_color ) && '#ffffff' != $checkout_timeline_number_border_color ) {
				$css .= '#owp-checkout-timeline .timeline-step{border-color:'. $checkout_timeline_number_border_color .';}';
			}

			// Add checkout timeline active background color
			if ( ! empty( $checkout_timeline_active_bg ) && '#13aff0' != $checkout_timeline_active_bg ) {
				$css .= '#owp-checkout-timeline .active .timeline-wrapper{background-color:'. $checkout_timeline_active_bg .';}#owp-checkout-timeline.arrow .active .timeline-wrapper:before{border-top-color:'. $checkout_timeline_active_bg .'; border-bottom-color:'. $checkout_timeline_active_bg .';}#owp-checkout-timeline.arrow .active .timeline-wrapper:after{border-left-color:'. $checkout_timeline_active_bg .'; border-right-color:'. $checkout_timeline_active_bg .';}';
			}

			// Add checkout timeline active color
			if ( ! empty( $checkout_timeline_active_color ) && '#ffffff' != $checkout_timeline_active_color ) {
				$css .= '#owp-checkout-timeline .active .timeline-wrapper{color:'. $checkout_timeline_active_color .';}';
			}

			// Add toolbar border color
			if ( ! empty( $toolbar_border_color ) && '#eaeaea' != $toolbar_border_color ) {
				$css .= '.edd .oceanwp-toolbar{border-color:'. $toolbar_border_color .';}';
			}

			// Add toolbar off canvas filter color
			if ( ! empty( $toolbar_off_canvas_filter_color ) && '#999999' != $toolbar_off_canvas_filter_color ) {
				$css .= '.edd .oceanwp-off-canvas-filter{color:'. $toolbar_off_canvas_filter_color .';}';
			}

			// Add toolbar off canvas filter border color
			if ( ! empty( $toolbar_off_canvas_filter_border_color ) && '#eaeaea' != $toolbar_off_canvas_filter_border_color ) {
				$css .= '.edd .oceanwp-off-canvas-filter{border-color:'. $toolbar_off_canvas_filter_border_color .';}';
			}

			// Add toolbar off canvas filter hover color
			if ( ! empty( $toolbar_off_canvas_filter_hover_color ) && '#13aff0' != $toolbar_off_canvas_filter_hover_color ) {
				$css .= '.edd .oceanwp-off-canvas-filter:hover{color:'. $toolbar_off_canvas_filter_hover_color .';}';
			}

			// Add toolbar off canvas filter hover border color
			if ( ! empty( $toolbar_off_canvas_filter_hover_border_color ) && '#13aff0' != $toolbar_off_canvas_filter_hover_border_color ) {
				$css .= '.edd .oceanwp-off-canvas-filter:hover{border-color:'. $toolbar_off_canvas_filter_hover_border_color .';}';
			}

			// Add toolbar grid/list color
			if ( ! empty( $toolbar_grid_list_color ) && '#999999' != $toolbar_grid_list_color ) {
				$css .= '.edd .oceanwp-grid-list a{color:'. $toolbar_grid_list_color .';}';
			}

			// Add toolbar grid/list border color
			if ( ! empty( $toolbar_grid_list_border_color ) && '#eaeaea' != $toolbar_grid_list_border_color ) {
				$css .= '.edd .oceanwp-grid-list a{border-color:'. $toolbar_grid_list_border_color .';}';
			}

			// Add toolbar grid/list hover color
			if ( ! empty( $toolbar_grid_list_hover_color ) && '#13aff0' != $toolbar_grid_list_hover_color ) {
				$css .= '.edd .oceanwp-grid-list a:hover{color:'. $toolbar_grid_list_hover_color .';border-color:'. $toolbar_grid_list_hover_color .';}';
			}

			// Add toolbar grid/list active color
			if ( ! empty( $toolbar_grid_list_active_color ) && '#13aff0' != $toolbar_grid_list_active_color ) {
				$css .= '.edd .oceanwp-grid-list a.active{color:'. $toolbar_grid_list_active_color .';border-color:'. $toolbar_grid_list_active_color .';}';
			}

			// Add toolbar select color
			if ( ! empty( $toolbar_select_color ) && '#999999' != $toolbar_select_color ) {
				$css .= '.edd .edd-ordering .theme-select,.edd .edd-ordering .theme-select:after{color:'. $toolbar_select_color .';}';
			}

			// Add toolbar select border color
			if ( ! empty( $toolbar_select_border_color ) && '#dddddd' != $toolbar_select_border_color ) {
				$css .= '.edd .edd-ordering .theme-select,.edd .edd-ordering .theme-select:after{border-color:'. $toolbar_select_border_color .';}';
			}

			// Add toolbar number of products color
			if ( ! empty( $toolbar_number_of_products_color ) && '#555555' != $toolbar_number_of_products_color ) {
				$css .= '.edd .result-count li.view-title,.edd .result-count li a.active, .edd .result-count li a:hover{color:'. $toolbar_number_of_products_color .';}';
			}

			// Add toolbar number of products inactive color
			if ( ! empty( $toolbar_number_of_products_inactive_color ) && '#999999' != $toolbar_number_of_products_inactive_color ) {
				$css .= '.edd .result-count li a{color:'. $toolbar_number_of_products_inactive_color .';}';
			}

			// Add toolbar number of products border color
			if ( ! empty( $toolbar_number_of_products_border_color ) && '#999999' != $toolbar_number_of_products_border_color ) {
				$css .= '.edd .result-count li:after{color:'. $toolbar_number_of_products_border_color .';}';
			}

			// Product padding
			if ( isset( $product_top_padding ) && '' != $product_top_padding
				|| isset( $product_right_padding ) && '' != $product_right_padding
				|| isset( $product_bottom_padding ) && '' != $product_bottom_padding
				|| isset( $product_left_padding ) && '' != $product_left_padding ) {
				$css .= '.edd_downloads_list .edd_download_inner{padding:'. oceanwp_spacing_css( $product_top_padding, $product_right_padding, $product_bottom_padding, $product_left_padding ) .'}';
			}

			// Tablet product padding
			if ( isset( $tablet_product_top_padding ) && '' != $tablet_product_top_padding
				|| isset( $tablet_product_right_padding ) && '' != $tablet_product_right_padding
				|| isset( $tablet_product_bottom_padding ) && '' != $tablet_product_bottom_padding
				|| isset( $tablet_product_left_padding ) && '' != $tablet_product_left_padding ) {
				$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner{padding:'. oceanwp_spacing_css( $tablet_product_top_padding, $tablet_product_right_padding, $tablet_product_bottom_padding, $tablet_product_left_padding ) .'}}';
			}

			// Mobile product padding
			if ( isset( $mobile_product_top_padding ) && '' != $mobile_product_top_padding
				|| isset( $mobile_product_right_padding ) && '' != $mobile_product_right_padding
				|| isset( $mobile_product_bottom_padding ) && '' != $mobile_product_bottom_padding
				|| isset( $mobile_product_left_padding ) && '' != $mobile_product_left_padding ) {
				$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner{padding:'. oceanwp_spacing_css( $mobile_product_top_padding, $mobile_product_right_padding, $mobile_product_bottom_padding, $mobile_product_left_padding ) .'}}';
			}

			// Product image margin
			if ( isset( $product_image_top_margin ) && '' != $product_image_top_margin
				|| isset( $product_image_right_margin ) && '' != $product_image_right_margin
				|| isset( $product_image_bottom_margin ) && '' != $product_image_bottom_margin
				|| isset( $product_image_left_margin ) && '' != $product_image_left_margin ) {
				$css .= '.edd_downloads_list .edd_download_inner .edd_download_image{margin:'. oceanwp_spacing_css( $product_image_top_margin, $product_image_right_margin, $product_image_bottom_margin, $product_image_left_margin ) .'}';
			}

			// Tablet product image margin
			if ( isset( $tablet_product_image_top_margin ) && '' != $tablet_product_image_top_margin
				|| isset( $tablet_product_image_right_margin ) && '' != $tablet_product_image_right_margin
				|| isset( $tablet_product_image_bottom_margin ) && '' != $tablet_product_image_bottom_margin
				|| isset( $tablet_product_image_left_margin ) && '' != $tablet_product_image_left_margin ) {
				$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner .edd_download_image{margin:'. oceanwp_spacing_css( $tablet_product_image_top_margin, $tablet_product_image_right_margin, $tablet_product_image_bottom_margin, $tablet_product_image_left_margin ) .'}}';
			}

			// Mobile product image margin
			if ( isset( $mobile_product_image_top_margin ) && '' != $mobile_product_image_top_margin
				|| isset( $mobile_product_image_right_margin ) && '' != $mobile_product_image_right_margin
				|| isset( $mobile_product_image_bottom_margin ) && '' != $mobile_product_image_bottom_margin
				|| isset( $mobile_product_image_left_margin ) && '' != $mobile_product_image_left_margin ) {
				$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner .edd_download_image{margin:'. oceanwp_spacing_css( $mobile_product_image_top_margin, $mobile_product_image_right_margin, $mobile_product_image_bottom_margin, $mobile_product_image_left_margin ) .'}}';
			}

			// Product border style if border width
			if ( isset( $product_top_border_width ) && '' != $product_top_border_width
				|| isset( $product_right_border_width ) && '' != $product_right_border_width
				|| isset( $product_bottom_border_width ) && '' != $product_bottom_border_width
				|| isset( $product_left_border_width ) && '' != $product_left_border_width
				|| isset( $tablet_product_top_border_width ) && '' != $tablet_product_top_border_width
				|| isset( $tablet_product_right_border_width ) && '' != $tablet_product_right_border_width
				|| isset( $tablet_product_bottom_border_width ) && '' != $tablet_product_bottom_border_width
				|| isset( $tablet_product_left_border_width ) && '' != $tablet_product_left_border_width
				|| isset( $mobile_product_top_border_width ) && '' != $mobile_product_top_border_width
				|| isset( $mobile_product_right_border_width ) && '' != $mobile_product_right_border_width
				|| isset( $mobile_product_bottom_border_width ) && '' != $mobile_product_bottom_border_width
				|| isset( $mobile_product_left_border_width ) && '' != $mobile_product_left_border_width ) {
				$css .= '.edd_downloads_list .edd_download_inner{border-style: solid}';
			}

			// Product border width
			if ( isset( $product_top_border_width ) && '' != $product_top_border_width
				|| isset( $product_right_border_width ) && '' != $product_right_border_width
				|| isset( $product_bottom_border_width ) && '' != $product_bottom_border_width
				|| isset( $product_left_border_width ) && '' != $product_left_border_width ) {
				$css .= '.edd_downloads_list .edd_download_inner{border-width:'. oceanwp_spacing_css( $product_top_border_width, $product_right_border_width, $product_bottom_border_width, $product_left_border_width ) .'}';
			}

			// Tablet product border width
			if ( isset( $tablet_product_top_border_width ) && '' != $tablet_product_top_border_width
				|| isset( $tablet_product_right_border_width ) && '' != $tablet_product_right_border_width
				|| isset( $tablet_product_bottom_border_width ) && '' != $tablet_product_bottom_border_width
				|| isset( $tablet_product_left_border_width ) && '' != $tablet_product_left_border_width ) {
				$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner{border-width:'. oceanwp_spacing_css( $tablet_product_top_border_width, $tablet_product_right_border_width, $tablet_product_bottom_border_width, $tablet_product_left_border_width ) .'}}';
			}

			// Mobile product border width
			if ( isset( $mobile_product_top_border_width ) && '' != $mobile_product_top_border_width
				|| isset( $mobile_product_right_border_width ) && '' != $mobile_product_right_border_width
				|| isset( $mobile_product_bottom_border_width ) && '' != $mobile_product_bottom_border_width
				|| isset( $mobile_product_left_border_width ) && '' != $mobile_product_left_border_width ) {
				$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner{border-width:'. oceanwp_spacing_css( $mobile_product_top_border_width, $mobile_product_right_border_width, $mobile_product_bottom_border_width, $mobile_product_left_border_width ) .'}}';
			}

			// Product border radius
			if ( isset( $product_top_border_radius ) && '' != $product_top_border_radius
				|| isset( $product_right_border_radius ) && '' != $product_right_border_radius
				|| isset( $product_bottom_border_radius ) && '' != $product_bottom_border_radius
				|| isset( $product_left_border_radius ) && '' != $product_left_border_radius ) {
				$css .= '.edd_downloads_list .edd_download_inner{border-radius:'. oceanwp_spacing_css( $product_top_border_radius, $product_right_border_radius, $product_bottom_border_radius, $product_left_border_radius ) .'}';
			}

			// Tablet product border radius
			if ( isset( $tablet_product_top_border_radius ) && '' != $tablet_product_top_border_radius
				|| isset( $tablet_product_right_border_radius ) && '' != $tablet_product_right_border_radius
				|| isset( $tablet_product_bottom_border_radius ) && '' != $tablet_product_bottom_border_radius
				|| isset( $tablet_product_left_border_radius ) && '' != $tablet_product_left_border_radius ) {
				$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner{border-radius:'. oceanwp_spacing_css( $tablet_product_top_border_radius, $tablet_product_right_border_radius, $tablet_product_bottom_border_radius, $tablet_product_left_border_radius ) .'}}';
			}

			// Mobile product border radius
			if ( isset( $mobile_product_top_border_radius ) && '' != $mobile_product_top_border_radius
				|| isset( $mobile_product_right_border_radius ) && '' != $mobile_product_right_border_radius
				|| isset( $mobile_product_bottom_border_radius ) && '' != $mobile_product_bottom_border_radius
				|| isset( $mobile_product_left_border_radius ) && '' != $mobile_product_left_border_radius ) {
				$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner{border-radius:'. oceanwp_spacing_css( $mobile_product_top_border_radius, $mobile_product_right_border_radius, $mobile_product_bottom_border_radius, $mobile_product_left_border_radius ) .'}}';
			}

			// Add background color
			if ( ! empty( $product_background_color ) ) {
				$css .= '.edd_downloads_list .edd_download_inner{background-color:'. $product_background_color .';}';
			}

			// Add border color
			if ( ! empty( $product_border_color ) ) {
				$css .= '.edd_downloads_list .edd_download_inner{border-color:'. $product_border_color .';}';
			}

			// Add category color
			if ( ! empty( $category_color ) && '#999999' != $category_color ) {
				$css .= '.edd_downloads_list .edd_download_inner .edd_download_categories a{color:'. $category_color .';}';
			}

			// Add category color hover
			if ( ! empty( $category_color_hover ) && '#13aff0' != $category_color_hover ) {
				$css .= '.edd_downloads_list .edd_download_inner .edd_download_categories a:hover{color:'. $category_color_hover .';}';
			}

			// Add product entry title color
			if ( ! empty( $product_title_color ) && '#333333' != $product_title_color ) {
				$css .= '.edd_downloads_list .edd_download_inner .edd_download_title a{color:'. $product_title_color .';}';
			}

			// Add product entry title color hover
			if ( ! empty( $product_title_color_hover ) && '#13aff0' != $product_title_color_hover ) {
				$css .= '.edd_downloads_list .edd_download_inner .edd_download_title a:hover{color:'. $product_title_color_hover .';}';
			}

			// Add product entry price color
			if ( ! empty( $product_entry_price_color ) && '#57bf6d' != $product_entry_price_color ) {
				$css .= '.edd_downloads_list .edd_download_inner .edd_download_title span.edd_price{color:'. $product_entry_price_color .';}';
			}

			// Add product entry add to cart background color
			if ( ! empty( $product_entry_addtocart_bg_color ) ) {
				$css .= '.edd_downloads_list .edd_download_inner .button{background-color:'. $product_entry_addtocart_bg_color .';}';
			}

			// Add product entry add to cart background color hover
			if ( ! empty( $product_entry_addtocart_bg_color_hover ) ) {
				$css .= '.edd_downloads_list .edd_download_inner .button:hover{background-color:'. $product_entry_addtocart_bg_color_hover .';}';
			}

			// Add product entry add to cart color
			if ( ! empty( $product_entry_addtocart_color ) && '#848494' != $product_entry_addtocart_color ) {
				$css .= '.edd_downloads_list .edd_download_inner .button{color:'. $product_entry_addtocart_color .';}';
			}

			// Add product entry add to cart color hover
			if ( ! empty( $product_entry_addtocart_color_hover ) && '#13aff0' != $product_entry_addtocart_color_hover ) {
				$css .= '.edd_downloads_list .edd_download_inner .button:hover{color:'. $product_entry_addtocart_color_hover .';}';
			}

			// Add product entry add to cart border color
			if ( ! empty( $product_entry_addtocart_border_color ) && '#e4e4e4' != $product_entry_addtocart_border_color ) {
				$css .= '.edd_downloads_list .edd_download_inner .button{border-color:'. $product_entry_addtocart_border_color .';}';
			}

			// Add product entry add to cart border color hover
			if ( ! empty( $product_entry_addtocart_border_color_hover ) && '#13aff0' != $product_entry_addtocart_border_color_hover ) {
				$css .= '.edd_downloads_list .edd_download_inner .button:hover{border-color:'. $product_entry_addtocart_border_color_hover .';}';
			}

			// Add product entry add to cart border style
			if ( ! empty( $product_entry_addtocart_border_style ) && 'double' != $product_entry_addtocart_border_style ) {
				$css .= '.edd_downloads_list .edd_download_inner .button{border-style:'. $product_entry_addtocart_border_style .';}';
			}

			// Add product entry add to cart border size
			if ( ! empty( $product_entry_addtocart_border_size ) && '3' != $product_entry_addtocart_border_size ) {
				$css .= '.edd_downloads_list .edd_download_inner .button{border-width:'. $product_entry_addtocart_border_size .';}';
			}

			// Add product entry add to cart border radius
			if ( ! empty( $product_entry_addtocart_border_radius ) ) {
				$css .= '.edd_downloads_list .edd_download_inner .button{border-radius:'. $product_entry_addtocart_border_radius .';}';
			}

			// Add quick view button background
			if ( ! empty( $quick_view_button_bg ) && 'rgba(0,0,0,0.6)' != $quick_view_button_bg ) {
				$css .= '.owp-quick-view{background-color:'. $quick_view_button_bg .';}';
			}

			// Add quick view button hover background
			if ( ! empty( $quick_view_button_hover_bg ) && 'rgba(0,0,0,0.9)' != $quick_view_button_hover_bg ) {
				$css .= '.owp-quick-view:hover{background-color:'. $quick_view_button_hover_bg .';}';
			}

			// Add quick view button color
			if ( ! empty( $quick_view_button_color ) && '#ffffff' != $quick_view_button_color ) {
				$css .= '.owp-quick-view{color:'. $quick_view_button_color .';}';
			}

			// Add quick view button hover color
			if ( ! empty( $quick_view_button_hover_color ) && '#ffffff' != $quick_view_button_hover_color ) {
				$css .= '.owp-quick-view:hover{color:'. $quick_view_button_hover_color .';}';
			}

			// Add quick view overlay background
			if ( ! empty( $quick_view_overlay_bg ) && 'rgba(0,0,0,0.15)' != $quick_view_overlay_bg ) {
				$css .= '.image-wrap.loading:after{background-color:'. $quick_view_overlay_bg .';}';
			}

			// Add quick view overlay spinner outside color
			if ( ! empty( $quick_view_overlay_spinner_outside_color ) && 'rgba(0,0,0,0.1)' != $quick_view_overlay_spinner_outside_color ) {
				$css .= '.image-wrap.loading:before{border-color:'. $quick_view_overlay_spinner_outside_color .';}';
			}

			// Add quick view overlay spinner inner color
			if ( ! empty( $quick_view_overlay_spinner_inner_color ) && '#ffffff' != $quick_view_overlay_spinner_inner_color ) {
				$css .= '.image-wrap.loading:before{border-left-color:'. $quick_view_overlay_spinner_inner_color .';}';
			}

			// Add quick view modal background
			if ( ! empty( $quick_view_modal_bg ) && '#ffffff' != $quick_view_modal_bg ) {
				$css .= '.owp-qv-content-inner{background-color:'. $quick_view_modal_bg .';}';
			}

			// Add quick view modal close button color
			if ( ! empty( $quick_view_modal_close_color ) && '#333333' != $quick_view_modal_close_color ) {
				$css .= '.owp-qv-content-inner .owp-qv-close{color:'. $quick_view_modal_close_color .';}';
			}

			// Add off canvas background
			if ( ! empty( $off_canvas_sidebar_bg ) && '#ffffff' != $off_canvas_sidebar_bg ) {
				$css .= '#oceanwp-off-canvas-sidebar-wrap .oceanwp-off-canvas-sidebar{background-color:'. $off_canvas_sidebar_bg .';}';
			}

			// Add off canvas border color
			if ( ! empty( $off_canvas_sidebar_widgets_border ) && 'rgba(84,84,84,0.15)' != $off_canvas_sidebar_widgets_border ) {
				$css .= '#oceanwp-off-canvas-sidebar-wrap .sidebar-box{border-color:'. $off_canvas_sidebar_widgets_border .';}';
			}

			// Add single product title color
			if ( ! empty( $single_product_title_color ) && '#333333' != $single_product_title_color ) {
				$css .= '.single-download .edd-download .edd_download_title{color:'. $single_product_title_color .';}';
			}

			// Add single product price color
			if ( ! empty( $single_product_price_color ) && '#57bf6d' != $single_product_price_color ) {
				$css .= 'span.edd_price{color:'. $single_product_price_color .';}';
			}

			// Add single product description color
			if ( ! empty( $single_product_description_color ) && '#aaaaaa' != $single_product_description_color ) {
				$css .= '.single-download .edd-download .edd_download_content{color:'. $single_product_description_color .';}';
			}

			// Add single product meta title color
			if ( ! empty( $single_product_meta_title_color ) && '#333333' != $single_product_meta_title_color ) {
				$css .= '.single-download .edd_download_categories, .single-download .edd_download_tags{color:'. $single_product_meta_title_color .';}';
			}

			// Add single product meta link color
			if ( ! empty( $single_product_meta_link_color ) && '#aaaaaa' != $single_product_meta_link_color ) {
				$css .= '..single-download .edd_download_categories a, .single-download .edd_download_tags a{color:'. $single_product_meta_link_color .';}';
			}

			// Add single product meta link color hover
			if ( ! empty( $single_product_meta_link_color_hover ) && '#13aff0' != $single_product_meta_link_color_hover ) {
				$css .= '.single-download .edd_download_categories a:hover, .single-download .edd_download_tags a:hover{color:'. $single_product_meta_link_color_hover .';}';
			}

			// Add single product navigation border radius
			if ( isset( $single_product_navigation_border_radius ) && '30' != $single_product_navigation_border_radius && '' != $single_product_navigation_border_radius ) {
				$css .= '.owp-product-nav li a.owp-nav-link{-webkit-border-radius: '. $single_product_navigation_border_radius .'px; -moz-border-radius: '. $single_product_navigation_border_radius .'px; -ms-border-radius: '. $single_product_navigation_border_radius .'px; border-radius: '. $single_product_navigation_border_radius .'px;}';
			}

			// Add single product navigation background color
			if ( ! empty( $single_product_navigation_bg ) ) {
				$css .= '.owp-product-nav li a.owp-nav-link{background-color:'. $single_product_navigation_bg .';}';
			}
			
			// Add single product navigation background color
			if ( ! empty( $single_product_navigation_hover_bg ) && '#13aff0' != $single_product_navigation_hover_bg ) {
				$css .= '.owp-product-nav li a.owp-nav-link:hover{background-color:'. $single_product_navigation_hover_bg .';}';
			}
			
			// Add single product navigation color
			if ( ! empty( $single_product_navigation_color ) && '#333333' != $single_product_navigation_color ) {
				$css .= '.owp-product-nav li a.owp-nav-link{color:'. $single_product_navigation_color .';}';
			}
			
			// Add single product navigation color
			if ( ! empty( $single_product_navigation_hover_color ) && '#ffffff' != $single_product_navigation_hover_color ) {
				$css .= '.owp-product-nav li a.owp-nav-link:hover{color:'. $single_product_navigation_hover_color .';}';
			}
			
			// Add single product navigation border color
			if ( ! empty( $single_product_navigation_border_color ) && '#e9e9e9' != $single_product_navigation_border_color ) {
				$css .= '.owp-product-nav li a.owp-nav-link{border-color:'. $single_product_navigation_border_color .';}';
			}
			
			// Add single product navigation border color
			if ( ! empty( $single_product_navigation_hover_border_color ) && '#13aff0' != $single_product_navigation_hover_border_color ) {
				$css .= '.owp-product-nav li a.owp-nav-link:hover{border-color:'. $single_product_navigation_hover_border_color .';}';
			}

			// Add single product tabs borders color
			if ( ! empty( $single_product_tabs_borders_color ) && '#e9e9e9' != $single_product_tabs_borders_color ) {
				$css .= '.edd div.product .edd-tabs ul.tabs{border-color:'. $single_product_tabs_borders_color .';}';
			}

			// Add single product tabs text color
			if ( ! empty( $single_product_tabs_text_color ) && '#999999' != $single_product_tabs_text_color ) {
				$css .= '.edd div.product .edd-tabs ul.tabs li a{color:'. $single_product_tabs_text_color .';}';
			}

			// Add single product tabs text color hover
			if ( ! empty( $single_product_tabs_text_color_hover ) && '#13aff0' != $single_product_tabs_text_color_hover ) {
				$css .= '.edd div.product .edd-tabs ul.tabs li a:hover{color:'. $single_product_tabs_text_color_hover .';}';
			}

			// Add single product tabs active text color
			if ( ! empty( $single_product_tabs_active_text_color ) && '#13aff0' != $single_product_tabs_active_text_color ) {
				$css .= '.edd div.product .edd-tabs ul.tabs li.active a{color:'. $single_product_tabs_active_text_color .';}';
			}

			// Add single product tabs active text borders color
			if ( ! empty( $single_product_tabs_active_text_borders_color ) && '#13aff0' != $single_product_tabs_active_text_borders_color ) {
				$css .= '.edd div.product .edd-tabs ul.tabs li.active a{border-color:'. $single_product_tabs_active_text_borders_color .';}';
			}

			// Add single product tabs product description title color
			if ( ! empty( $single_product_tabs_product_desc_title_color ) && '#333333' != $single_product_tabs_product_desc_title_color ) {
				$css .= '.edd div.product .edd-tabs .panel h2{color:'. $single_product_tabs_product_desc_title_color .';}';
			}

			// Add single product tabs product description color
			if ( ! empty( $single_product_tabs_product_desc_color ) && '#929292' != $single_product_tabs_product_desc_color ) {
				$css .= '.edd div.product .edd-tabs .panel p{color:'. $single_product_tabs_product_desc_color .';}';
			}

			// Add account Login/Register color
			if ( ! empty( $account_login_register_color ) && '#333333' != $account_login_register_color ) {
				$css .= '.edd .owp-account-links li .owp-account-link, .edd .owp-account-links li.orDisplay Related Items{color:'. $account_login_register_color .';}';
			}

			// Add account navigation borders color
			if ( ! empty( $account_nav_borders_color ) && '#e9e9e9' != $account_nav_borders_color ) {
				$css .= '.edd-MyAccount-navigation ul,.edd-MyAccount-navigation ul li{border-color:'. $account_nav_borders_color .';}';
			}

			// Add account navigation icons color
			if ( ! empty( $account_nav_icons_color ) && '#13aff0' != $account_nav_icons_color ) {
				$css .= '.edd-MyAccount-navigation ul li a:before{color:'. $account_nav_icons_color .';}';
			}

			// Add account navigation links color
			if ( ! empty( $account_nav_links_color ) && '#333333' != $account_nav_links_color ) {
				$css .= '.edd-MyAccount-navigation ul li a{color:'. $account_nav_links_color .';}';
			}

			// Add account navigation links color hover
			if ( ! empty( $account_nav_links_color_hover ) && '#13aff0' != $account_nav_links_color_hover ) {
				$css .= '.edd-MyAccount-navigation ul li a:hover{color:'. $account_nav_links_color_hover .';}';
			}

			// Add account addresses background color
			if ( ! empty( $account_addresses_bg ) && '#f6f6f6' != $account_addresses_bg ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address .title, .edd-MyAccount-content .addresses .edd-Address address{background-color:'. $account_addresses_bg .';}';
			}

			// Add account addresses title color
			if ( ! empty( $account_addresses_title_color ) && '#333333' != $account_addresses_title_color ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address .title h3{color:'. $account_addresses_title_color .';}';
			}

			// Add account addresses title border color
			if ( ! empty( $account_addresses_title_border_color ) && '#ffffff' != $account_addresses_title_border_color ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address .title{border-color:'. $account_addresses_title_border_color .';}';
			}

			// Add account addresses content color
			if ( ! empty( $account_addresses_content_color ) && '#898989' != $account_addresses_content_color ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address address{color:'. $account_addresses_content_color .';}';
			}

			// Add account addresses button background color
			if ( ! empty( $account_addresses_button_bg ) && '#ffffff' != $account_addresses_button_bg ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address .title a{background-color:'. $account_addresses_button_bg .';}';
			}

			// Add account addresses button background color hover
			if ( ! empty( $account_addresses_button_bg_hover ) && '#f8f8f8' != $account_addresses_button_bg_hover ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address .title a:hover{background-color:'. $account_addresses_button_bg_hover .';}';
			}

			// Add account addresses button color
			if ( ! empty( $account_addresses_button_color ) && '#898989' != $account_addresses_button_color ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address .title a{color:'. $account_addresses_button_color .';}';
			}

			// Add account addresses button color hover
			if ( ! empty( $account_addresses_button_color_hover ) && '#555555' != $account_addresses_button_color_hover ) {
				$css .= '.edd-MyAccount-content .addresses .edd-Address .title a:hover{color:'. $account_addresses_button_color_hover .';}';
			}

			// Add cart borders color
			if ( ! empty( $cart_borders_color ) && '#e9e9e9' != $cart_borders_color ) {
				$css .= '.edd-cart table.shop_table,.edd-cart table.shop_table th,.edd-cart table.shop_table td,.edd-cart .cart-collaterals .cross-sells,.edd-page .cart-collaterals .cross-sells,.edd-cart .cart-collaterals h2,.edd-cart .cart-collaterals .cart_totals,.edd-page .cart-collaterals .cart_totals,.edd-cart .cart-collaterals .cart_totals table th,.edd-cart .cart-collaterals .cart_totals .order-total th,.edd-cart table.shop_table td,.edd-cart .cart-collaterals .cart_totals tr td,.edd-cart .cart-collaterals .cart_totals .order-total td{border-color:'. $cart_borders_color .';}';
			}

			// Add cart head background
			if ( ! empty( $cart_head_bg ) && '#f7f7f7' != $cart_head_bg ) {
				$css .= '.edd-cart table.shop_table thead,.edd-cart .cart-collaterals h2{background-color:'. $cart_head_bg .';}';
			}

			// Add cart head titles color
			if ( ! empty( $cart_head_titles_color ) && '#444444' != $cart_head_titles_color ) {
				$css .= '.edd-cart table.shop_table thead th,.edd-cart .cart-collaterals h2{color:'. $cart_head_titles_color .';}';
			}

			// Add cart totals table titles color
			if ( ! empty( $cart_totals_table_titles_color ) && '#444444' != $cart_totals_table_titles_color ) {
				$css .= '.edd-cart .cart-collaterals .cart_totals table th{color:'. $cart_totals_table_titles_color .';}';
			}

			// Add cart remove button color
			if ( ! empty( $cart_remove_button_color ) && '#bbbbbb' != $cart_remove_button_color ) {
				$css .= '.edd table.shop_table a.remove{color:'. $cart_remove_button_color .';}';
			}

			// Add cart remove button color hover
			if ( ! empty( $cart_remove_button_color_hover ) && '#333333' != $cart_remove_button_color_hover ) {
				$css .= '.edd table.shop_table a.remove:hover{color:'. $cart_remove_button_color_hover .';}';
			}

			// Add checkout notices borders color
			if ( ! empty( $checkout_notices_borders_color ) && '#e9e9e9' != $checkout_notices_borders_color ) {
				$css .= '.edd-checkout .edd-info{border-color:'. $checkout_notices_borders_color .';}';
			}

			// Add checkout notices icon color
			if ( ! empty( $checkout_notices_icon_color ) && '#dddddd' != $checkout_notices_icon_color ) {
				$css .= '.edd-checkout .edd-info:before{color:'. $checkout_notices_icon_color .';}';
			}

			// Add checkout notices color
			if ( ! empty( $checkout_notices_color ) && '#777777' != $checkout_notices_color ) {
				$css .= '.edd-checkout .edd-info{color:'. $checkout_notices_color .';}';
			}

			// Add checkout notices link color
			if ( ! empty( $checkout_notices_link_color ) && '#13aff0' != $checkout_notices_link_color ) {
				$css .= '.edd-checkout .edd-info a{color:'. $checkout_notices_link_color .';}';
			}

			// Add checkout notices link color hover
			if ( ! empty( $checkout_notices_link_color_hover ) && '#333333' != $checkout_notices_link_color_hover ) {
				$css .= '.edd-checkout .edd-info a:hover{color:'. $checkout_notices_link_color_hover .';}';
			}

			// Add checkout notices form border color
			if ( ! empty( $checkout_notices_form_border_color ) && '#e9e9e9' != $checkout_notices_form_border_color ) {
				$css .= '.edd-checkout form.login,.edd-checkout form.checkout_coupon{border-color:'. $checkout_notices_form_border_color .';}';
			}

			// Add checkout titles color
			if ( ! empty( $checkout_titles_color ) && '#333333' != $checkout_titles_color ) {
				$css .= '.edd .edd-checkout #customer_details h3,.edd .edd-checkout h3#order_review_heading{color:'. $checkout_titles_color .';}';
			}

			// Add checkout notices titles border bottom color
			if ( ! empty( $checkout_titles_border_bottom_color ) && '#e9e9e9' != $checkout_titles_border_bottom_color ) {
				$css .= '.edd .edd-checkout #customer_details h3,.edd .edd-checkout h3#order_review_heading{border-color:'. $checkout_titles_border_bottom_color .';}';
			}

			// Add checkout table main background
			if ( ! empty( $checkout_table_main_bg ) && '#f7f7f7' != $checkout_table_main_bg ) {
				$css .= '.edd table.shop_table thead,.edd-checkout-review-order-table tfoot th{background-color:'. $checkout_table_main_bg .';}';
			}

			// Add checkout table titles color
			if ( ! empty( $checkout_table_titles_color ) && '#444444' != $checkout_table_titles_color ) {
				$css .= '.edd-checkout table.shop_table thead th,.edd-checkout table.shop_table tfoot th{color:'. $checkout_table_titles_color .';}';
			}

			// Add checkout table borders color
			if ( ! empty( $checkout_table_borders_color ) && '#e9e9e9' != $checkout_table_borders_color ) {
				$css .= '.edd-checkout table.shop_table,.edd-checkout table.shop_table th,.edd-checkout table.shop_table td,.edd-checkout table.shop_table tfoot th,.edd-checkout table.shop_table tfoot td{border-color:'. $checkout_table_borders_color .';}';
			}

			// Add checkout payment methods background
			if ( ! empty( $checkout_payment_methods_bg ) && '#f8f8f8' != $checkout_payment_methods_bg ) {
				$css .= '.edd-checkout #payment{background-color:'. $checkout_payment_methods_bg .';}';
			}

			// Add checkout payment methods borders color
			if ( ! empty( $checkout_payment_methods_borders_color ) && '#e9e9e9' != $checkout_payment_methods_borders_color ) {
				$css .= '.edd-checkout #payment,.edd-checkout #payment ul.payment_methods{border-color:'. $checkout_payment_methods_borders_color .';}';
			}

			// Add checkout payment box background
			if ( ! empty( $checkout_payment_box_bg ) && '#ffffff' != $checkout_payment_box_bg ) {
				$css .= '.edd-checkout #payment div.payment_box{background-color:'. $checkout_payment_box_bg .';}';
			}

			// Add checkout payment box color
			if ( ! empty( $checkout_payment_box_color ) && '#515151' != $checkout_payment_box_color ) {
				$css .= '.edd-checkout #payment div.payment_box{color:'. $checkout_payment_box_color .';}';
			}

			// If shop page Both Sidebars layout
			if ( 'both-sidebars' == $archives_layout ) {

				// Both Sidebars layout shop page content width
				if ( ! empty( $bs_archives_content_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.edd.archive.content-both-sidebars .content-area {width: '. $bs_archives_content_width .'%;}
							body.edd.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
							body.edd.archive.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_archives_content_width .'%;}
						}';
				}

				// Both Sidebars layout shop page sidebars width
				if ( ! empty( $bs_archives_sidebars_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.edd.archive.content-both-sidebars .widget-area{width:'. $bs_archives_sidebars_width .'%;}
							body.edd.archive.content-both-sidebars.scs-style .content-area{left:'. $bs_archives_sidebars_width .'%;}
							body.edd.archive.content-both-sidebars.ssc-style .content-area{left:'. $bs_archives_sidebars_width * 2 .'%;}
						}';
				}

			}

			// If single product Both Sidebars layout
			if ( 'both-sidebars' == $single_layout ) {

				// Both Sidebars layout single product content width
				if ( ! empty( $bs_single_content_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.single-product.content-both-sidebars .content-area {width: '. $bs_single_content_width .'%;}
							body.single-product.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
							body.single-product.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_single_content_width .'%;}
						}';
				}

				// Both Sidebars layout single product sidebars width
				if ( ! empty( $bs_single_sidebars_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.single-product.content-both-sidebars .widget-area{width:'. $bs_single_sidebars_width .'%;}
							body.single-product.content-both-sidebars.scs-style .content-area{left:'. $bs_single_sidebars_width .'%;}
							body.single-product.content-both-sidebars.ssc-style .content-area{left:'. $bs_single_sidebars_width * 2 .'%;}
						}';
				}

			}
				
			// Return CSS
			if ( ! empty( $css ) ) {
				$output .= '/* EDD CSS */'. $css;
			}

			// Return output css
			return $output;

		}

	}

endif;

return new OceanWP_EDD_Customizer();