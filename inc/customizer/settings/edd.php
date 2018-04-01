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
				'priority' 			=> 220,
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
		}
	}
endif;

return new OceanWP_EDD_Customizer();