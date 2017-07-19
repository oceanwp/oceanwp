<?php
/**
 * Top Bar Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Top_Bar_Customizer' ) ) :

	class OceanWP_Top_Bar_Customizer {

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
			$panel = 'ocean_topbar_panel';
			$wp_customize->add_panel( $panel , array(
				'title' 			=> esc_html__( 'Top Bar', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_topbar_general' , array(
				'title' 			=> esc_html__( 'General', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Top Bar
			 */
			$wp_customize->add_setting( 'ocean_top_bar', array(
				'default'           	=> true,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar', array(
				'label'	   				=> esc_html__( 'Enable Top Bar', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar',
				'priority' 				=> 10,
			) ) );

			/**
			 * Top Bar Full Width
			 */
			$wp_customize->add_setting( 'ocean_top_bar_full_width', array(
				'transport' 			=> 'postMessage',
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar_full_width', array(
				'label'	   				=> esc_html__( 'Top Bar Full Width', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_full_width',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Top Bar Visibility
			 */
			$wp_customize->add_setting( 'ocean_top_bar_visibility', array(
				'transport' 			=> 'postMessage',
				'default'           	=> 'all-devices',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar_visibility', array(
				'label'	   				=> esc_html__( 'Visibility', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_visibility',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
				'choices' 				=> array(
					'all-devices' 			=> esc_html__( 'Show On All Devices', 'oceanwp' ),
					'hide-tablet' 			=> esc_html__( 'Hide On Tablet', 'oceanwp' ),
					'hide-mobile' 			=> esc_html__( 'Hide On Mobile', 'oceanwp' ),
					'hide-tablet-mobile' 	=> esc_html__( 'Hide On Tablet & Mobile', 'oceanwp' ),
				),
			) ) );

			/**
			 * Top Bar Style
			 */
			$wp_customize->add_setting( 'ocean_top_bar_style', array(
				'default'           	=> 'one',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar_style', array(
				'label'	   				=> esc_html__( 'Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_style',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
				'choices' 				=> array(
					'one' 		=> esc_html__( 'Left Content & Right Social', 'oceanwp' ),
					'two' 		=> esc_html__( 'Left Social & Right Content', 'oceanwp' ),
					'three' 	=> esc_html__( 'Centered Content & Social', 'oceanwp' ),
				),
			) ) );

			/**
			 * Top Bar Padding
			 */
			$wp_customize->add_setting( 'ocean_top_bar_top_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '8',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_right_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '8',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_left_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_top_bar_tablet_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_tablet_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_tablet_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_tablet_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_top_bar_mobile_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_mobile_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_mobile_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_mobile_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_top_bar_padding', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_general',
				'settings' => array(
		            'desktop_top' 		=> 'ocean_top_bar_top_padding',
		            'desktop_right' 	=> 'ocean_top_bar_right_padding',
		            'desktop_bottom' 	=> 'ocean_top_bar_bottom_padding',
		            'desktop_left' 		=> 'ocean_top_bar_left_padding',
		            'tablet_top' 		=> 'ocean_top_bar_tablet_top_padding',
		            'tablet_right' 		=> 'ocean_top_bar_tablet_right_padding',
		            'tablet_bottom' 	=> 'ocean_top_bar_tablet_bottom_padding',
		            'tablet_left' 		=> 'ocean_top_bar_tablet_left_padding',
		            'mobile_top' 		=> 'ocean_top_bar_mobile_top_padding',
		            'mobile_right' 		=> 'ocean_top_bar_mobile_right_padding',
		            'mobile_bottom' 	=> 'ocean_top_bar_mobile_bottom_padding',
		            'mobile_left' 		=> 'ocean_top_bar_mobile_left_padding',
			    ),
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Top Bar Background Color
			 */
			$wp_customize->add_setting( 'ocean_top_bar_bg', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#ffffff',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_top_bar_bg', array(
				'label'	   				=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_bg',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Top Bar Border Color
			 */
			$wp_customize->add_setting( 'ocean_top_bar_border_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#f1f1f1',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_top_bar_border_color', array(
				'label'	   				=> esc_html__( 'Border Color', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_border_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Top Bar Text Color
			 */
			$wp_customize->add_setting( 'ocean_top_bar_text_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#929292',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_top_bar_text_color', array(
				'label'	   				=> esc_html__( 'Text Color', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_text_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Top Bar Link Color
			 */
			$wp_customize->add_setting( 'ocean_top_bar_link_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#555555',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_top_bar_link_color', array(
				'label'	   				=> esc_html__( 'Link Color', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_link_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Top Bar Link Color Hover
			 */
			$wp_customize->add_setting( 'ocean_top_bar_link_color_hover', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#13aff0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_top_bar_link_color_hover', array(
				'label'	   				=> esc_html__( 'Link Color: Hover', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_general',
				'settings' 				=> 'ocean_top_bar_link_color_hover',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_topbar_content' , array(
				'title' 			=> esc_html__( 'Content', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Top Bar Content
			 */
			$wp_customize->add_setting( 'ocean_top_bar_content', array(
				'transport'           	=> 'postMessage',
				'sanitize_callback' 	=> 'wp_kses_post',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Textarea_Control( $wp_customize, 'ocean_top_bar_content', array(
				'label'	   				=> esc_html__( 'Content', 'oceanwp' ),
				'description'	   		=> sprintf( esc_html__( 'Shortcodes allowed, %1$ssee the list%2$s.', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
				'section'  				=> 'ocean_topbar_content',
				'settings' 				=> 'ocean_top_bar_content',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_topbar_social' , array(
				'title' 			=> esc_html__( 'Social', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Top Bar Social
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social', array(
				'default'           	=> true,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar_social', array(
				'label'	   				=> esc_html__( 'Enable Social', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_topbar_social',
				'settings' 				=> 'ocean_top_bar_social',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar',
			) ) );

			/**
			 * Top Bar Social Alternative
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social_alt', array(
				'default' 				=> '',
				'sanitize_callback' 	=> 'oceanwp_sanitize_dropdown_pages',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dropdown_Pages( $wp_customize, 'ocean_top_bar_social_alt', array(
				'label'	   				=> '<span style="color: red;">' . esc_html__( 'Social Alternative', 'oceanwp' ) . '</span>',
				'description'	   		=> esc_html__( 'Deprecated, this field is no longer supported. Please use the Social Alternative field below instead.', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_social',
				'settings' 				=> 'ocean_top_bar_social_alt',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
			) ) );

			/**
			 * Top Bar Social Alternative
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social_alt_template', array(
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar_social_alt_template', array(
				'label'	   				=> esc_html__( 'Social Alternative', 'oceanwp' ),
				'description'	   		=> esc_html__( 'Choose a template created in Theme Panel > My Library.', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_topbar_social',
				'settings' 				=> 'ocean_top_bar_social_alt_template',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
				'choices' 				=> oceanwp_customizer_helpers( 'library' ),
			) ) );

			/**
			 * Top Bar Social Link Target
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social_target', array(
				'transport'           	=> 'postMessage',
				'default'           	=> 'blank',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar_social_target', array(
				'label'	   				=> esc_html__( 'Social Link Target', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_topbar_social',
				'settings' 				=> 'ocean_top_bar_social_target',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
				'choices' 				=> array(
					'blank' => esc_html__( 'New Window', 'oceanwp' ),
					'self' 	=> esc_html__( 'Same Window', 'oceanwp' ),
				),
			) ) );

			/**
			 * Top Bar Social Font Size
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social_font_size', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '14',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_top_bar_social_tablet_font_size', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_top_bar_social_mobile_font_size', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, 'ocean_top_bar_social_font_size', array(
				'label' 			=> esc_html__( 'Font Size (px)', 'oceanwp' ),
				'section'  			=> 'ocean_topbar_social',
				'settings' => array(
		            'desktop' 	=> 'ocean_top_bar_social_font_size',
		            'tablet' 	=> 'ocean_top_bar_social_tablet_font_size',
		            'mobile' 	=> 'ocean_top_bar_social_mobile_font_size',
			    ),
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Top Bar Social Padding
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social_right_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '6',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_social_left_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '6',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_top_bar_social_tablet_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_social_tablet_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_top_bar_social_mobile_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_top_bar_social_mobile_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_top_bar_social_padding', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_social',
				'settings' => array(
		            'desktop_right' 	=> 'ocean_top_bar_social_right_padding',
		            'desktop_left' 		=> 'ocean_top_bar_social_left_padding',
		            'tablet_right' 		=> 'ocean_top_bar_social_tablet_right_padding',
		            'tablet_left' 		=> 'ocean_top_bar_social_tablet_left_padding',
		            'mobile_right' 		=> 'ocean_top_bar_social_mobile_right_padding',
		            'mobile_left' 		=> 'ocean_top_bar_social_mobile_left_padding',
			    ),
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 60,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Top Bar Social Link Color
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social_links_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#bbbbbb',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_top_bar_social_links_color', array(
				'label'	   				=> esc_html__( 'Social Links Color', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_social',
				'settings' 				=> 'ocean_top_bar_social_links_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
			) ) );

			/**
			 * Top Bar Social Link Color Hover
			 */
			$wp_customize->add_setting( 'ocean_top_bar_social_hover_links_color', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_top_bar_social_hover_links_color', array(
				'label'	   				=> esc_html__( 'Social Links Color: Hover', 'oceanwp' ),
				'section'  				=> 'ocean_topbar_social',
				'settings' 				=> 'ocean_top_bar_social_hover_links_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
			) ) );

			/**
			 * Top Bar Social Settings
			 */
			$social_options = oceanwp_social_options();
			foreach ( $social_options as $key => $val ) {
				if ( 'skype' == $key ) {
					$sanitize = 'wp_filter_nohtml_kses';
				} else if ( 'email' == $key ) {
					$sanitize = 'sanitize_email';
				} else {
					$sanitize = 'esc_url_raw';
				}

				$wp_customize->add_setting( 'ocean_top_bar_social_profiles[' . $key .']', array(
					'sanitize_callback' 	=> $sanitize,
				) );

				$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_top_bar_social_profiles[' . $key .']', array(
					'label'	   				=> esc_html( $val['label'] ),
					'type' 					=> 'text',
					'section'  				=> 'ocean_topbar_social',
					'settings' 				=> 'ocean_top_bar_social_profiles[' . $key .']',
					'priority' 				=> 10,
					'active_callback' 		=> 'oceanwp_cac_has_topbar_social',
				) ) );
			}

		}

		/**
		 * Get CSS
		 *
		 * @since 1.0.0
		 */
		public static function head_css( $output ) {
		
			// Global vars
			$top_padding 					= get_theme_mod( 'ocean_top_bar_top_padding', '8' );
			$right_padding 					= get_theme_mod( 'ocean_top_bar_right_padding', '0' );
			$bottom_padding 				= get_theme_mod( 'ocean_top_bar_bottom_padding', '8' );
			$left_padding 					= get_theme_mod( 'ocean_top_bar_left_padding', '0' );
			$tablet_top_padding 			= get_theme_mod( 'ocean_top_bar_tablet_top_padding' );
			$tablet_right_padding 			= get_theme_mod( 'ocean_top_bar_tablet_right_padding' );
			$tablet_bottom_padding 			= get_theme_mod( 'ocean_top_bar_tablet_bottom_padding' );
			$tablet_left_padding 			= get_theme_mod( 'ocean_top_bar_tablet_left_padding' );
			$mobile_top_padding 			= get_theme_mod( 'ocean_top_bar_mobile_top_padding' );
			$mobile_right_padding 			= get_theme_mod( 'ocean_top_bar_mobile_right_padding' );
			$mobile_bottom_padding 			= get_theme_mod( 'ocean_top_bar_mobile_bottom_padding' );
			$mobile_left_padding 			= get_theme_mod( 'ocean_top_bar_mobile_left_padding' );
			$background 					= get_theme_mod( 'ocean_top_bar_bg', '#ffffff' );
			$border_color 					= get_theme_mod( 'ocean_top_bar_border_color', '#f1f1f1' );
			$text_color 					= get_theme_mod( 'ocean_top_bar_text_color', '#929292' );
			$link_color 					= get_theme_mod( 'ocean_top_bar_link_color', '#555555' );
			$link_color_hover 				= get_theme_mod( 'ocean_top_bar_link_color_hover', '#13aff0' );
			$social_font_size 				= get_theme_mod( 'ocean_top_bar_social_font_size' );
			$social_tablet_font_size 		= get_theme_mod( 'ocean_top_bar_social_tablet_font_size' );
			$social_mobile_font_size 		= get_theme_mod( 'ocean_top_bar_social_mobile_font_size' );
			$social_right_padding 			= get_theme_mod( 'ocean_top_bar_social_right_padding' );
			$social_left_padding 			= get_theme_mod( 'ocean_top_bar_social_left_padding' );
			$social_tablet_right_padding 	= get_theme_mod( 'ocean_top_bar_social_tablet_right_padding' );
			$social_tablet_left_padding 	= get_theme_mod( 'ocean_top_bar_social_tablet_left_padding' );
			$social_mobile_right_padding 	= get_theme_mod( 'ocean_top_bar_social_mobile_right_padding' );
			$social_mobile_left_padding 	= get_theme_mod( 'ocean_top_bar_social_mobile_left_padding' );
			$social_links_color 			= get_theme_mod( 'ocean_top_bar_social_links_color', '#bbbbbb' );
			$social_hover_links_color 		= get_theme_mod( 'ocean_top_bar_social_hover_links_color' );

			// Define css var
			$css = '';
			$padding_css = '';
			$tablet_padding_css = '';
			$mobile_padding_css = '';
			$social_padding_css = '';
			$social_tablet_padding_css = '';
			$social_mobile_padding_css = '';

			// Top bar top padding
			if ( ! empty( $top_padding ) && '8' != $top_padding ) {
				$padding_css .= 'padding-top:'. $top_padding .'px;';
			}

			// Top bar right padding
			if ( ! empty( $right_padding ) && '0' != $right_padding ) {
				$padding_css .= 'padding-right:'. $right_padding .'px;';
			}

			// Top bar bottom padding
			if ( ! empty( $bottom_padding ) && '8' != $bottom_padding ) {
				$padding_css .= 'padding-bottom:'. $bottom_padding .'px;';
			}

			// Top bar left padding
			if ( ! empty( $left_padding ) && '0' != $left_padding ) {
				$padding_css .= 'padding-left:'. $left_padding .'px;';
			}

			// Top bar padding css
			if ( ! empty( $top_padding ) && '8' != $top_padding
				|| ! empty( $right_padding ) && '0' != $right_padding
				|| ! empty( $bottom_padding ) && '8' != $bottom_padding
				|| ! empty( $left_padding ) && '0' != $left_padding ) {
				$css .= '#top-bar{'. $padding_css .'}';
			}

			// Tablet top bar top padding
			if ( ! empty( $tablet_top_padding ) ) {
				$tablet_padding_css .= 'padding-top:'. $tablet_top_padding .'px;';
			}

			// Tablet top bar right padding
			if ( ! empty( $tablet_right_padding ) ) {
				$tablet_padding_css .= 'padding-right:'. $tablet_right_padding .'px;';
			}

			// Tablet top bar bottom padding
			if ( ! empty( $tablet_bottom_padding ) ) {
				$tablet_padding_css .= 'padding-bottom:'. $tablet_bottom_padding .'px;';
			}

			// Tablet top bar left padding
			if ( ! empty( $tablet_left_padding ) ) {
				$tablet_padding_css .= 'padding-left:'. $tablet_left_padding .'px;';
			}

			// Tablet top bar padding css
			if ( ! empty( $tablet_top_padding )
				|| ! empty( $tablet_right_padding )
				|| ! empty( $tablet_bottom_padding )
				|| ! empty( $tablet_left_padding ) ) {
				$css .= '@media (max-width: 768px){#top-bar{'. $tablet_padding_css .'}}';
			}

			// Mobile top bar top padding
			if ( ! empty( $mobile_top_padding ) ) {
				$mobile_padding_css .= 'padding-top:'. $mobile_top_padding .'px;';
			}

			// Mobile top bar right padding
			if ( ! empty( $mobile_right_padding ) ) {
				$mobile_padding_css .= 'padding-right:'. $mobile_right_padding .'px;';
			}

			// Mobile top bar bottom padding
			if ( ! empty( $mobile_bottom_padding ) ) {
				$mobile_padding_css .= 'padding-bottom:'. $mobile_bottom_padding .'px;';
			}

			// Mobile top bar left padding
			if ( ! empty( $mobile_left_padding ) ) {
				$mobile_padding_css .= 'padding-left:'. $mobile_left_padding .'px;';
			}

			// Mobile top bar padding css
			if ( ! empty( $mobile_top_padding )
				|| ! empty( $mobile_right_padding )
				|| ! empty( $mobile_bottom_padding )
				|| ! empty( $mobile_left_padding ) ) {
				$css .= '@media (max-width: 480px){#top-bar{'. $mobile_padding_css .'}}';
			}

			// Top bar background color
			if ( ! empty( $background ) && '#ffffff' != $background ) {
				$css .= '#top-bar-wrap,.oceanwp-top-bar-sticky{background-color:'. $background .';}';
			}

			// Top bar border color
			if ( ! empty( $border_color ) && '#f1f1f1' != $border_color ) {
				$css .= '#top-bar-wrap{border-color:'. $border_color .';}';
			}

			// Top bar text color
			if ( ! empty( $text_color ) && '#929292' != $text_color ) {
				$css .= '#top-bar-wrap,#top-bar-content strong{color:'. $text_color .';}';
			}

			// Top bar link color
			if ( ! empty( $link_color ) && '#555555' != $link_color ) {
				$css .= '#top-bar-content a,#top-bar-social-alt a{color:'. $link_color .';}';
			}

			// Top bar link color hover
			if ( ! empty( $link_color_hover ) && '#13aff0' != $link_color_hover ) {
				$css .= '#top-bar-content a:hover,#top-bar-social-alt a:hover{color:'. $link_color_hover .';}';
			}

			// Add top bar social font size
			if ( ! empty( $social_font_size ) && '14' != $social_font_size ) {
				$css .= '#top-bar-social li a{font-size:'. $social_font_size .'px;}';
			}

			// Add top bar social tablet font size
			if ( ! empty( $social_tablet_font_size ) ) {
				$css .= '@media (max-width: 768px){#top-bar-social li a{font-size:'. $social_tablet_font_size .'px;}}';
			}

			// Add top bar social mobile font size
			if ( ! empty( $social_mobile_font_size ) ) {
				$css .= '@media (max-width: 480px){#top-bar-social li a{font-size:'. $social_mobile_font_size .'px;}}';
			}

			// Add top bar social right padding
			if ( ! empty( $social_right_padding ) && '6' != $social_right_padding ) {
				$social_padding_css .= 'padding-right:'. $social_right_padding .'px;';
			}

			// Add top bar social left padding
			if ( ! empty( $social_left_padding ) && '6' != $social_left_padding ) {
				$social_padding_css .= 'padding-left:'. $social_left_padding .'px;';
			}

			// Top bar social padding css
			if ( ! empty( $social_right_padding ) && '6' != $social_right_padding
				|| ! empty( $social_left_padding ) && '6' != $social_left_padding ) {
				$css .= '#top-bar-social li a{'. $social_padding_css .'}';
			}

			// Tablet top bar social right padding
			if ( ! empty( $social_tablet_right_padding ) ) {
				$social_tablet_padding_css .= 'padding-right:'. $social_tablet_right_padding .'px;';
			}

			// Tablet top bar social left padding
			if ( ! empty( $social_tablet_left_padding ) ) {
				$social_tablet_padding_css .= 'padding-left:'. $social_tablet_left_padding .'px;';
			}

			// Tablet top bar social padding css
			if ( ! empty( $social_tablet_right_padding )
				|| ! empty( $social_tablet_left_padding ) ) {
				$css .= '@media (max-width: 768px){#top-bar-social li a{'. $social_tablet_padding_css .'}}';
			}

			// Mobile top bar social right padding
			if ( ! empty( $social_mobile_right_padding ) ) {
				$social_mobile_padding_css .= 'padding-right:'. $social_mobile_right_padding .'px;';
			}

			// Mobile top bar social left padding
			if ( ! empty( $social_mobile_left_padding ) ) {
				$social_mobile_padding_css .= 'padding-left:'. $social_mobile_left_padding .'px;';
			}

			// Mobile top bar social padding css
			if ( ! empty( $social_mobile_right_padding )
				|| ! empty( $social_mobile_left_padding ) ) {
				$css .= '@media (max-width: 480px){#top-bar-social li a{'. $social_mobile_padding_css .'}}';
			}

			// Top bar social link color
			if ( ! empty( $social_links_color ) && '#bbbbbb' != $social_links_color ) {
				$css .= '#top-bar-social li a{color:'. $social_links_color .';}';
			}

			// Top bar social link color hover
			if ( ! empty( $social_hover_links_color ) ) {
				$css .= '#top-bar-social li a:hover{color:'. $social_hover_links_color .'!important;}';
			}
				
			// Return CSS
			if ( ! empty( $css ) ) {
				$output .= '/* Top Bar CSS */'. $css;
			}

			// Return output css
			return $output;

		}

	}

endif;

return new OceanWP_Top_Bar_Customizer();