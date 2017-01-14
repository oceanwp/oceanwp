<?php
/**
 * Footer Widgets Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Footer_Widgets_Customizer' ) ) :

	class OceanWP_Footer_Widgets_Customizer {

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
			 * Section
			 */
			$section = 'ocean_footer_widgets_section';
			$wp_customize->add_section( $section , array(
				'title' 			=> esc_html__( 'Footer Widgets', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Enable Footer Widgets
			 */
			$wp_customize->add_setting( 'ocean_footer_widgets', array(
				'default'           	=> true,
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_footer_widgets', array(
				'label'	   				=> esc_html__( 'Enable Footer Widgets', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_widgets',
				'priority' 				=> 10,
			) ) );

			/**
			 * Footer Widgets Page ID
			 */
			$wp_customize->add_setting( 'ocean_footer_widgets_page_id', array(
				'default' 				=> '',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dropdown_Pages( $wp_customize, 'ocean_footer_widgets_page_id', array(
				'label'	   				=> esc_html__( 'Page ID', 'oceanwp' ),
				'description'	   		=> esc_html__( 'Choose a page to replace the widgets by this page.', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_widgets_page_id',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
			) ) );

			/**
			 * Footer Widgets Columns
			 */
			$wp_customize->add_setting( 'ocean_footer_widgets_columns', array(
				'default'           	=> '4',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_footer_widgets_columns', array(
				'label'	   				=> esc_html__( 'Columns', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_widgets_columns',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
				'choices' 				=> array(
					'4' => '4',
					'3' => '3',
					'2' => '2',
					'1' => '1',
				),
			) ) );

			/**
			 * Footer Widgets Padding
			 */
			$wp_customize->add_setting( 'ocean_footer_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_footer_padding', array(
				'label'	   				=> esc_html__( 'Padding', 'oceanwp' ),
				'description' 			=> esc_html__( 'Format: top right bottom left.', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_padding',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
			) ) );

			/**
			 * Footer Widgets Background
			 */
			$wp_customize->add_setting( 'ocean_footer_background', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#222222',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_footer_background', array(
				'label'	   				=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_background',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
			) ) );

			/**
			 * Footer Widgets Color
			 */
			$wp_customize->add_setting( 'ocean_footer_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#929292',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_footer_color', array(
				'label'	   				=> esc_html__( 'Text Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
			) ) );

			/**
			 * Footer Widgets Borders Color
			 */
			$wp_customize->add_setting( 'ocean_footer_borders', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#555555',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_footer_borders', array(
				'label'	   				=> esc_html__( 'Borders Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_borders',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
			) ) );

			/**
			 * Footer Widgets Links Color
			 */
			$wp_customize->add_setting( 'ocean_footer_link_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#ffffff',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_footer_link_color', array(
				'label'	   				=> esc_html__( 'Links Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_link_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
			) ) );

			/**
			 * Footer Widgets Links Hover Color
			 */
			$wp_customize->add_setting( 'ocean_footer_link_color_hover', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#13aff0',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_footer_link_color_hover', array(
				'label'	   				=> esc_html__( 'Links Color: Hover', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_link_color_hover',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
			) ) );

		}

		/**
		 * Get CSS
		 *
		 * @since 1.0.0
		 */
		public static function head_css( $output ) {
		
			// Global vars
			$footer_padding 			= get_theme_mod( 'ocean_footer_padding' );
			$footer_background 			= get_theme_mod( 'ocean_footer_background', '#222222' );
			$footer_color 				= get_theme_mod( 'ocean_footer_color', '#929292' );
			$footer_borders 			= get_theme_mod( 'ocean_footer_borders', '#555555' );
			$footer_link_color 			= get_theme_mod( 'ocean_footer_link_color', '#ffffff' );
			$footer_link_color_hover 	= get_theme_mod( 'ocean_footer_link_color_hover', '#13aff0' );

			// Define css var
			$css = '';

			// Footer padding
			if ( ! empty( $footer_padding ) ) {
				$css .= '#footer-widgets{padding:'. $footer_padding .';}';
			}

			// Footer background
			if ( ! empty( $footer_background ) && '#222222' != $footer_background ) {
				$css .= '#footer-widgets{background-color:'. $footer_background .';}';
			}

			// Footer color
			if ( ! empty( $footer_color ) && '#929292' != $footer_color ) {
				$css .= '#footer-widgets,#footer-widgets p,#footer-widgets li a:before,#footer-widgets .contact-info-widget span.oceanwp-contact-title,#footer-widgets .recent-posts-date,#footer-widgets .recent-posts-comments,#footer-widgets .widget-recent-posts-icons li .fa{color:'. $footer_color .';}';
			}

			// Footer borders color
			if ( ! empty( $footer_borders ) && '#555555' != $footer_borders ) {
				$css .= '#footer-widgets li,#footer-widgets #wp-calendar caption,#footer-widgets #wp-calendar th,#footer-widgets #wp-calendar tbody,#footer-widgets .contact-info-widget i,#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"],#footer-widgets .posts-thumbnails-widget li,#footer-widgets .social-widget li a{border-color:'. $footer_borders .';}';
			}

			// Footer link color
			if ( ! empty( $footer_link_color ) && '#ffffff' != $footer_link_color ) {
				$css .= '#footer-widgets .footer-box a,#footer-widgets a{color:'. $footer_link_color .';}';
			}

			// Footer link hover color
			if ( ! empty( $footer_link_color_hover ) && '#13aff0' != $footer_link_color_hover ) {
				$css .= '#footer-widgets .footer-box a:hover,#footer-widgets a:hover{color:'. $footer_link_color_hover .';}';
			}
				
			// Return CSS
			if ( ! empty( $css ) ) {
				$output .= '/* Footer Widgets CSS */'. $css;
			}

			// Return output css
			return $output;

		}

	}

endif;

return new OceanWP_Footer_Widgets_Customizer();