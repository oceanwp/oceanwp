<?php
/**
 * Footer Bottom Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Footer_Bottom_Customizer' ) ) :

	class OceanWP_Footer_Bottom_Customizer {

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
			$section = 'ocean_footer_bottom_section';
			$wp_customize->add_section( $section , array(
				'title' 			=> esc_html__( 'Footer Bottom', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Enable Footer Bottom
			 */
			$wp_customize->add_setting( 'ocean_footer_bottom', array(
				'default'           	=> true,
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_footer_bottom', array(
				'label'	   				=> esc_html__( 'Enable Footer Bottom', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_bottom',
				'priority' 				=> 10,
			) ) );

			/**
			 * Footer Bottom Copyright
			 */
			$wp_customize->add_setting( 'ocean_footer_copyright_text', array(
				'transport'           	=> 'postMessage',
				'default'           	=> 'Copyright - OceanWP Theme by Nick Powered by <a href="https://wordpress.org/" title="WordPress" target="_blank">WordPress</a>',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_footer_copyright_text', array(
				'label'	   				=> esc_html__( 'Copyright', 'oceanwp' ),
				'type' 					=> 'textarea',
				'section'  				=> $section,
				'settings' 				=> 'ocean_footer_copyright_text',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
			) ) );

			/**
			 * Footer Bottom Padding
			 */
			$wp_customize->add_setting( 'ocean_bottom_footer_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_bottom_footer_padding', array(
				'label'	   				=> esc_html__( 'Padding', 'oceanwp' ),
				'description' 			=> esc_html__( 'Format: top right bottom left.', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> $section,
				'settings' 				=> 'ocean_bottom_footer_padding',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
			) ) );

			/**
			 * Footer Bottom Background Color
			 */
			$wp_customize->add_setting( 'ocean_bottom_footer_background', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#1b1b1b',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_bottom_footer_background', array(
				'label'	   				=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_bottom_footer_background',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
			) ) );

			/**
			 * Footer Bottom Color
			 */
			$wp_customize->add_setting( 'ocean_bottom_footer_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#929292',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_bottom_footer_color', array(
				'label'	   				=> esc_html__( 'Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_bottom_footer_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
			) ) );

			/**
			 * Footer Bottom Links Color
			 */
			$wp_customize->add_setting( 'ocean_bottom_footer_link_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#ffffff',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_bottom_footer_link_color', array(
				'label'	   				=> esc_html__( 'Links Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_bottom_footer_link_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
			) ) );

			/**
			 * Footer Bottom Links Hover Color
			 */
			$wp_customize->add_setting( 'ocean_bottom_footer_link_color_hover', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#13aff0',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_bottom_footer_link_color_hover', array(
				'label'	   				=> esc_html__( 'Links Color: Hover', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_bottom_footer_link_color_hover',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
			) ) );

		}

		/**
		 * Get CSS
		 *
		 * @since 1.0.0
		 */
		public static function head_css( $output ) {
		
			// Global vars
			$bottom_padding 			= get_theme_mod( 'ocean_bottom_footer_padding' );
			$bottom_background 			= get_theme_mod( 'ocean_bottom_footer_background', '#1b1b1b' );
			$bottom_color 				= get_theme_mod( 'ocean_bottom_footer_color', '#929292' );
			$bottom_link_color 			= get_theme_mod( 'ocean_bottom_footer_link_color', '#ffffff' );
			$bottom_link_color_hover 	= get_theme_mod( 'ocean_bottom_footer_link_color_hover', '#13aff0' );

			// Define css var
			$css = '';

			// Footer bottom padding
			if ( ! empty( $bottom_padding ) ) {
				$css .= '#footer-bottom{padding:'. $bottom_padding .';}';
			}

			// Footer bottom background
			if ( ! empty( $bottom_background ) && '#1b1b1b' != $bottom_background ) {
				$css .= '#footer-bottom{background-color:'. $bottom_background .';}';
			}

			// Footer bottom color
			if ( ! empty( $bottom_color ) && '#929292' != $bottom_color ) {
				$css .= '#footer-bottom,#footer-bottom p{color:'. $bottom_color .';}';
			}

			// Footer bottom links color
			if ( ! empty( $bottom_link_color ) && '#ffffff' != $bottom_link_color ) {
				$css .= '#footer-bottom a,#footer-bottom #footer-bottom-menu a{color:'. $bottom_link_color .';}';
			}

			// Footer bottom links hover color
			if ( ! empty( $bottom_link_color_hover ) && '#13aff0' != $bottom_link_color_hover ) {
				$css .= '#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover{color:'. $bottom_link_color_hover .';}';
			}
				
			// Return CSS
			if ( ! empty( $css ) ) {
				$output .= '/* Footer Bottom CSS */'. $css;
			}

			// Return output css
			return $output;

		}

	}

endif;

return new OceanWP_Footer_Bottom_Customizer();