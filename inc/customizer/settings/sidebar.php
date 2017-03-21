<?php
/**
 * Sidebar Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Sidebar_Customizer' ) ) :

	class OceanWP_Sidebar_Customizer {

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
			$section = 'ocean_sidebar_section';
			$wp_customize->add_section( $section , array(
				'title' 			=> esc_html__( 'Sidebar', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Sidebar Background
			 */
			$wp_customize->add_setting( 'ocean_sidebar_bg', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_sidebar_bg', array(
				'label'	   				=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_sidebar_bg',
				'priority' 				=> 10,
			) ) );

			/**
			 * Sidebar Padding
			 */
			$wp_customize->add_setting( 'ocean_sidebar_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_sidebar_padding', array(
				'label'	   				=> esc_html__( 'Padding (DECREPITATED)', 'oceanwp' ),
				'description'	   		=> esc_html__( 'This field will be removed in OceanWP 2.0, add your value(s) in the dimensions control below', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> $section,
				'settings' 				=> 'ocean_sidebar_padding',
				'priority' 				=> 10,
			) ) );

			/**
			 * Sidebar Padding
			 */
			$wp_customize->add_setting( 'ocean_sidebar_top_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> false,
			) );
			$wp_customize->add_setting( 'ocean_sidebar_right_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> false,
			) );
			$wp_customize->add_setting( 'ocean_sidebar_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> false,
			) );
			$wp_customize->add_setting( 'ocean_sidebar_left_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '30',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_sidebar_padding_dimensions', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> $section,				
				'settings'   => array(
					'top'    => 'ocean_sidebar_top_padding',
					'right'  => 'ocean_sidebar_right_padding',
					'bottom' => 'ocean_sidebar_bottom_padding',
					'left'   => 'ocean_sidebar_left_padding',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 500,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Widgets Heading
			 */
			$wp_customize->add_setting( 'ocean_widgets_heading', array(
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_widgets_heading', array(
				'label'    				=> esc_html__( 'Widgets', 'oceanwp' ),
				'section'  				=> $section,
				'priority' 				=> 10,
			) ) );

			/**
			 * Widgets Background
			 */
			$wp_customize->add_setting( 'ocean_widgets_bg', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_widgets_bg', array(
				'label'	   				=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_widgets_bg',
				'priority' 				=> 10,
			) ) );

			/**
			 * Widgets Padding
			 */
			$wp_customize->add_setting( 'ocean_widgets_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_widgets_padding', array(
				'label'	   				=> esc_html__( 'Padding (DECREPITATED)', 'oceanwp' ),
				'description'	   		=> esc_html__( 'This field will be removed in OceanWP 2.0, add your value(s) in the dimensions control below', 'oceanwp' ),
				'type' 					=> 'text',
				'section'  				=> $section,
				'settings' 				=> 'ocean_widgets_padding',
				'priority' 				=> 10,
			) ) );

			/**
			 * Widgets Padding
			 */
			$wp_customize->add_setting( 'ocean_widgets_top_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> false,
			) );
			$wp_customize->add_setting( 'ocean_widgets_right_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> false,
			) );
			$wp_customize->add_setting( 'ocean_widgets_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> false,
			) );
			$wp_customize->add_setting( 'ocean_widgets_left_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_widgets_padding_dimensions', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> $section,				
				'settings'   => array(
					'top'    => 'ocean_widgets_top_padding',
					'right'  => 'ocean_widgets_right_padding',
					'bottom' => 'ocean_widgets_bottom_padding',
					'left'   => 'ocean_widgets_left_padding',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 500,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Widgets Margin Bottom
			 */
			$wp_customize->add_setting( 'ocean_widgets_margin_bottom', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '40',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_widgets_margin_bottom', array(
				'label'	   				=> esc_html__( 'Margin Bottom (px)', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_widgets_margin_bottom',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Widgets Titles Margin Bottom
			 */
			$wp_customize->add_setting( 'ocean_widgets_titles_margin_bottom', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '20',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_widgets_titles_margin_bottom', array(
				'label'	   				=> esc_html__( 'Titles Margin Bottom (px)', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_widgets_titles_margin_bottom',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

		}

		/**
		 * Get CSS
		 *
		 * @since 1.0.0
		 */
		public static function head_css( $output ) {
		
			// Global vars
			$sidebar_bg 					= get_theme_mod( 'ocean_sidebar_bg' );
			$sidebar_top_padding 			= get_theme_mod( 'ocean_sidebar_top_padding', '0' );
			$sidebar_right_padding 			= get_theme_mod( 'ocean_sidebar_right_padding', '0' );
			$sidebar_bottom_padding 		= get_theme_mod( 'ocean_sidebar_bottom_padding', '0' );
			$sidebar_left_padding 			= get_theme_mod( 'ocean_sidebar_left_padding', '30' );
			$widgets_bg 					= get_theme_mod( 'ocean_widgets_bg' );
			$widgets_top_padding 			= get_theme_mod( 'ocean_widgets_top_padding', '0' );
			$widgets_right_padding 			= get_theme_mod( 'ocean_widgets_right_padding', '0' );
			$widgets_bottom_padding 		= get_theme_mod( 'ocean_widgets_bottom_padding', '0' );
			$widgets_left_padding 			= get_theme_mod( 'ocean_widgets_left_padding', '0' );
			$widgets_margin_bottom 			= get_theme_mod( 'ocean_widgets_margin_bottom', '40' );
			$widgets_titles_margin_bottom 	= get_theme_mod( 'ocean_widgets_titles_margin_bottom', '20' );

			// Define css var
			$css = '';
			$sidebar_padding_css = '';
			$widgets_padding_css = '';

			// Sidebar background
			if ( ! empty( $sidebar_bg ) ) {
				$css .= '#sidebar{background-color:'. $sidebar_bg .';}';
			}

			// DECREPITATED Sidebar padding
			$sidebar_padding = get_theme_mod( 'ocean_sidebar_padding' );
			if ( ! empty( $sidebar_padding ) ) {
				$css .= '.widget-area{padding:'. $sidebar_padding .';}';
			}

			// Sidebar top padding
			if ( ! empty( $sidebar_top_padding ) && '0' != $sidebar_top_padding ) {
				$sidebar_padding_css .= 'padding-top:'. $sidebar_top_padding .'px;';
			}

			// Sidebar right padding
			if ( ! empty( $sidebar_right_padding ) && '0' != $sidebar_right_padding ) {
				$sidebar_padding_css .= 'padding-right:'. $sidebar_right_padding .'px;';
			}

			// Sidebar bottom padding
			if ( ! empty( $sidebar_bottom_padding ) && '0' != $sidebar_bottom_padding ) {
				$sidebar_padding_css .= 'padding-bottom:'. $sidebar_bottom_padding .'px;';
			}

			// Sidebar left padding
			if ( ! empty( $sidebar_left_padding ) && '30' != $sidebar_left_padding ) {
				$sidebar_padding_css .= 'padding-left:'. $sidebar_left_padding .'px;';
			}

			// Sidebar padding css
			if ( ! empty( $sidebar_top_padding ) && '0' != $sidebar_top_padding
				|| ! empty( $sidebar_right_padding ) && '0' != $sidebar_right_padding
				|| ! empty( $sidebar_bottom_padding ) && '0' != $sidebar_bottom_padding
				|| ! empty( $sidebar_left_padding ) && '30' != $sidebar_left_padding ) {
				$css .= '.widget-area{'. $sidebar_padding_css .'}';
			}

			// Widgets background
			if ( ! empty( $widgets_bg ) ) {
				$css .= '#sidebar .sidebar-box{background-color:'. $widgets_bg .';}';
			}

			// Widgets padding
			if ( ! empty( $widgets_padding ) ) {
				$css .= '#sidebar .sidebar-box{padding:'. $widgets_padding .';}';
			}

			// DECREPITATED Widgets padding
			$widgets_padding = get_theme_mod( 'ocean_widgets_padding' );
			if ( ! empty( $widgets_padding ) ) {
				$css .= '#sidebar .sidebar-box{padding:'. $widgets_padding .';}';
			}

			// Widgets top padding
			if ( ! empty( $widgets_top_padding ) && '0' != $widgets_top_padding ) {
				$widgets_padding_css .= 'padding-top:'. $widgets_top_padding .'px;';
			}

			// Widgets right padding
			if ( ! empty( $widgets_right_padding ) && '0' != $widgets_right_padding ) {
				$widgets_padding_css .= 'padding-right:'. $widgets_right_padding .'px;';
			}

			// Widgets bottom padding
			if ( ! empty( $widgets_bottom_padding ) && '0' != $widgets_bottom_padding ) {
				$widgets_padding_css .= 'padding-bottom:'. $widgets_bottom_padding .'px;';
			}

			// Widgets left padding
			if ( ! empty( $widgets_left_padding ) && '0' != $widgets_left_padding ) {
				$widgets_padding_css .= 'padding-left:'. $widgets_left_padding .'px;';
			}

			// Widgets padding css
			if ( ! empty( $widgets_top_padding ) && '0' != $widgets_top_padding
				|| ! empty( $widgets_right_padding ) && '0' != $widgets_right_padding
				|| ! empty( $widgets_bottom_padding ) && '0' != $widgets_bottom_padding
				|| ! empty( $widgets_left_padding ) && '0' != $widgets_left_padding ) {
				$css .= '#sidebar .sidebar-box{'. $widgets_padding_css .'}';
			}

			// Widgets margin bottom
			if ( ! empty( $widgets_margin_bottom ) && '40' != $widgets_margin_bottom ) {
				$css .= '#sidebar .sidebar-box{margin-bottom:'. $widgets_margin_bottom .'px;}';
			}

			// Widgets titles margin bottom
			if ( ! empty( $widgets_titles_margin_bottom ) && '20' != $widgets_titles_margin_bottom ) {
				$css .= '.widget-title{margin-bottom:'. $widgets_titles_margin_bottom .'px;}';
			}
				
			// Return CSS
			if ( ! empty( $css ) ) {
				$output .= '/* Sidebar CSS */'. $css;
			}

			// Return output css
			return $output;

		}

	}

endif;

return new OceanWP_Sidebar_Customizer();