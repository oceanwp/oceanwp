<?php
/**
 * Custom Code Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Custom_Code_Customizer' ) ) :

	class OceanWP_Custom_Code_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {

			add_action( 'customize_register', 	array( $this, 'customizer_options' ) );
			add_action( 'ocean_footer_js', 		array( $this, 'output_custom_js' ), 9999 );

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
			$section = 'ocean_custom_code_panel';
			$wp_customize->add_section( $section , array(
				'title' 			=> esc_html__( 'Custom CSS/JS', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Custom JS
			 */
			$wp_customize->add_setting( 'ocean_custom_js', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_custom_js', array(
				'label'	   				=> esc_html__( 'Custom JS', 'oceanwp' ),
				'description'	   		=> esc_html__( 'You need to reload to see the changes. No need to add the <script> tags.', 'oceanwp' ),
				'type' 					=> 'textarea',
				'section'  				=> $section,
				'settings' 				=> 'ocean_custom_js',
				'priority' 				=> 10,
			) ) );

		}

		/**
		 * Outputs the custom JS
		 *
		 * @since 1.0.0
		 */
		public function output_custom_js( $output ) {

			if ( $js = get_theme_mod( 'ocean_custom_js', false ) ) {
				$output .= $js;
			}
			return $output;

		}

	}

endif;

return new OceanWP_Custom_Code_Customizer();