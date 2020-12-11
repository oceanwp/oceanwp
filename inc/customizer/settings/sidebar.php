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
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
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
			$wp_customize->add_setting( 'ocean_sidebar_top_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_right_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_left_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '30',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_sidebar_tablet_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_tablet_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_tablet_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_tablet_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_sidebar_mobile_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_mobile_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_mobile_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_sidebar_mobile_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_sidebar_padding_dimensions', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> $section,
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_sidebar_top_padding',
		            'desktop_right' 	=> 'ocean_sidebar_right_padding',
		            'desktop_bottom' 	=> 'ocean_sidebar_bottom_padding',
		            'desktop_left' 		=> 'ocean_sidebar_left_padding',
		            'tablet_top' 		=> 'ocean_sidebar_tablet_top_padding',
		            'tablet_right' 		=> 'ocean_sidebar_tablet_right_padding',
		            'tablet_bottom' 	=> 'ocean_sidebar_tablet_bottom_padding',
		            'tablet_left' 		=> 'ocean_sidebar_tablet_left_padding',
		            'mobile_top' 		=> 'ocean_sidebar_mobile_top_padding',
		            'mobile_right' 		=> 'ocean_sidebar_mobile_right_padding',
		            'mobile_bottom' 	=> 'ocean_sidebar_mobile_bottom_padding',
		            'mobile_left' 		=> 'ocean_sidebar_mobile_left_padding',
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
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_widgets_heading', array(
				'label'    				=> esc_html__( 'Widgets', 'oceanwp' ),
				'section'  				=> $section,
				'priority' 				=> 10,
			) ) );

			/**
			 * Sidebar widget Title Heading Tag
			 */
			$wp_customize->add_setting(
				'ocean_sidebar_widget_heading_tag',
				array(
					'default'           => 'h4',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_sidebar_widget_heading_tag',
					array(
						'label'    => esc_html__( 'Heading Tag', 'oceanwp' ),
						'type'     => 'select',
						'section'  => $section,
						'settings' => 'ocean_sidebar_widget_heading_tag',
						'priority' => 10,
						'choices'  => array(
							'h1'   => esc_html__( 'H1', 'oceanwp' ),
							'h2'   => esc_html__( 'H2', 'oceanwp' ),
							'h3'   => esc_html__( 'H3', 'oceanwp' ),
							'h4'   => esc_html__( 'H4', 'oceanwp' ),
							'h5'   => esc_html__( 'H5', 'oceanwp' ),
							'h6'   => esc_html__( 'H6', 'oceanwp' ),
							'div'  => esc_html__( 'div', 'oceanwp' ),
							'span' => esc_html__( 'span', 'oceanwp' ),
							'p'    => esc_html__( 'p', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Widgets Background
			 */
			$wp_customize->add_setting( 'ocean_widgets_bg', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
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
			$wp_customize->add_setting( 'ocean_widgets_top_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_widgets_right_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_widgets_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_widgets_left_padding', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_widgets_tablet_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_widgets_tablet_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_widgets_tablet_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_widgets_tablet_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_widgets_mobile_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_widgets_mobile_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_widgets_mobile_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_widgets_mobile_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_widgets_padding_dimensions', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> $section,				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_widgets_top_padding',
		            'desktop_right' 	=> 'ocean_widgets_right_padding',
		            'desktop_bottom' 	=> 'ocean_widgets_bottom_padding',
		            'desktop_left' 		=> 'ocean_widgets_left_padding',
		            'tablet_top' 		=> 'ocean_widgets_tablet_top_padding',
		            'tablet_right' 		=> 'ocean_widgets_tablet_right_padding',
		            'tablet_bottom' 	=> 'ocean_widgets_tablet_bottom_padding',
		            'tablet_left' 		=> 'ocean_widgets_tablet_left_padding',
		            'mobile_top' 		=> 'ocean_widgets_mobile_top_padding',
		            'mobile_right' 		=> 'ocean_widgets_mobile_right_padding',
		            'mobile_bottom' 	=> 'ocean_widgets_mobile_bottom_padding',
		            'mobile_left' 		=> 'ocean_widgets_mobile_left_padding',
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
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_widgets_margin_bottom', array(
				'label'	   				=> esc_html__( 'Margin Bottom (px)', 'oceanwp' ),
				'type' 					=> 'number',
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
			 * Widgets Title Border Color
			 */
			$wp_customize->add_setting( 'ocean_widgets_titles_border_color', array(
				'transport' 			=> 'postMessage',
				'default' 				=> '#13aff0',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_widgets_titles_border_color', array(
				'label'	   				=> esc_html__( 'Titles Border Color', 'oceanwp' ),
				'section'  				=> $section,
				'settings' 				=> 'ocean_widgets_titles_border_color',
				'priority' 				=> 10,
			) ) );

			/**
			 * Widgets Titles Margin Bottom
			 */
			$wp_customize->add_setting( 'ocean_widgets_titles_margin_bottom', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '20',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
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
			$sidebar_bg 							= get_theme_mod( 'ocean_sidebar_bg' );
			$sidebar_top_padding 					= get_theme_mod( 'ocean_sidebar_top_padding', '0' );
			$sidebar_right_padding 					= get_theme_mod( 'ocean_sidebar_right_padding', '0' );
			$sidebar_bottom_padding 				= get_theme_mod( 'ocean_sidebar_bottom_padding', '0' );
			$sidebar_left_padding 					= get_theme_mod( 'ocean_sidebar_left_padding', '30' );
			$tablet_sidebar_top_padding 			= get_theme_mod( 'ocean_sidebar_tablet_top_padding' );
			$tablet_sidebar_right_padding 			= get_theme_mod( 'ocean_sidebar_tablet_right_padding' );
			$tablet_sidebar_bottom_padding 			= get_theme_mod( 'ocean_sidebar_tablet_bottom_padding' );
			$tablet_sidebar_left_padding 			= get_theme_mod( 'ocean_sidebar_tablet_left_padding' );
			$mobile_sidebar_top_padding 			= get_theme_mod( 'ocean_sidebar_mobile_top_padding' );
			$mobile_sidebar_right_padding 			= get_theme_mod( 'ocean_sidebar_mobile_right_padding' );
			$mobile_sidebar_bottom_padding 			= get_theme_mod( 'ocean_sidebar_mobile_bottom_padding' );
			$mobile_sidebar_left_padding 			= get_theme_mod( 'ocean_sidebar_mobile_left_padding' );
			$widgets_bg 							= get_theme_mod( 'ocean_widgets_bg' );
			$widgets_top_padding 					= get_theme_mod( 'ocean_widgets_top_padding', '0' );
			$widgets_right_padding 					= get_theme_mod( 'ocean_widgets_right_padding', '0' );
			$widgets_bottom_padding 				= get_theme_mod( 'ocean_widgets_bottom_padding', '0' );
			$widgets_left_padding 					= get_theme_mod( 'ocean_widgets_left_padding', '0' );
			$tablet_widgets_top_padding 			= get_theme_mod( 'ocean_widgets_tablet_top_padding' );
			$tablet_widgets_right_padding 			= get_theme_mod( 'ocean_widgets_tablet_right_padding' );
			$tablet_widgets_bottom_padding 			= get_theme_mod( 'ocean_widgets_tablet_bottom_padding' );
			$tablet_widgets_left_padding 			= get_theme_mod( 'ocean_widgets_tablet_left_padding' );
			$mobile_widgets_top_padding 			= get_theme_mod( 'ocean_widgets_mobile_top_padding' );
			$mobile_widgets_right_padding 			= get_theme_mod( 'ocean_widgets_mobile_right_padding' );
			$mobile_widgets_bottom_padding 			= get_theme_mod( 'ocean_widgets_mobile_bottom_padding' );
			$mobile_widgets_left_padding 			= get_theme_mod( 'ocean_widgets_mobile_left_padding' );
			$widgets_margin_bottom 					= get_theme_mod( 'ocean_widgets_margin_bottom' );
			$widgets_titles_border_color 			= get_theme_mod( 'ocean_widgets_titles_border_color', '#13aff0' );
			$widgets_titles_margin_bottom 			= get_theme_mod( 'ocean_widgets_titles_margin_bottom', '20' );

			// Define css var
			$css = '';

			// Sidebar background
			if ( ! empty( $sidebar_bg ) ) {
				$css .= '.widget-area{background-color:'. $sidebar_bg .';}';
			}

			// Sidebar padding
			if ( isset( $sidebar_top_padding ) && '0' != $sidebar_top_padding && '' != $sidebar_top_padding
				|| isset( $sidebar_right_padding ) && '0' != $sidebar_right_padding && '' != $sidebar_right_padding
				|| isset( $sidebar_bottom_padding ) && '0' != $sidebar_bottom_padding && '' != $sidebar_bottom_padding
				|| isset( $sidebar_left_padding ) && '30' != $sidebar_left_padding && '' != $sidebar_left_padding ) {
				$css .= '.widget-area{padding:'. oceanwp_spacing_css( $sidebar_top_padding, $sidebar_right_padding, $sidebar_bottom_padding, $sidebar_left_padding ) .'!important}';
			}

			// Tablet sidebar padding
			if ( isset( $tablet_sidebar_top_padding ) && '' != $tablet_sidebar_top_padding
				|| isset( $tablet_sidebar_right_padding ) && '' != $tablet_sidebar_right_padding
				|| isset( $tablet_sidebar_bottom_padding ) && '' != $tablet_sidebar_bottom_padding
				|| isset( $tablet_sidebar_left_padding ) && '' != $tablet_sidebar_left_padding ) {
				$css .= '@media (max-width: 768px){.widget-area{padding:'. oceanwp_spacing_css( $tablet_sidebar_top_padding, $tablet_sidebar_right_padding, $tablet_sidebar_bottom_padding, $tablet_sidebar_left_padding ) .'!important}}';
			}

			// Mobile sidebar padding
			if ( isset( $mobile_sidebar_top_padding ) && '' != $mobile_sidebar_top_padding
				|| isset( $mobile_sidebar_right_padding ) && '' != $mobile_sidebar_right_padding
				|| isset( $mobile_sidebar_bottom_padding ) && '' != $mobile_sidebar_bottom_padding
				|| isset( $mobile_sidebar_left_padding ) && '' != $mobile_sidebar_left_padding ) {
				$css .= '@media (max-width: 480px){.widget-area{padding:'. oceanwp_spacing_css( $mobile_sidebar_top_padding, $mobile_sidebar_right_padding, $mobile_sidebar_bottom_padding, $mobile_sidebar_left_padding ) .'!important}}';
			}

			// Widgets background
			if ( ! empty( $widgets_bg ) ) {
				$css .= '.widget-area .sidebar-box{background-color:'. $widgets_bg .';}';
			}

			// Widgets padding
			if ( ! empty( $widgets_padding ) ) {
				$css .= '.widget-area .sidebar-box{padding:'. $widgets_padding .';}';
			}

			// Widget padding
			if ( isset( $widgets_top_padding ) && '0' != $widgets_top_padding && '' != $widgets_top_padding
				|| isset( $widgets_right_padding ) && '0' != $widgets_right_padding && '' != $widgets_right_padding
				|| isset( $widgets_bottom_padding ) && '0' != $widgets_bottom_padding && '' != $widgets_bottom_padding
				|| isset( $widgets_left_padding ) && '0' != $widgets_left_padding && '' != $widgets_left_padding ) {
				$css .= '.widget-area .sidebar-box{padding:'. oceanwp_spacing_css( $widgets_top_padding, $widgets_right_padding, $widgets_bottom_padding, $widgets_left_padding ) .'}';
			}

			// Tablet widget padding
			if ( isset( $tablet_widgets_top_padding ) && '' != $tablet_widgets_top_padding
				|| isset( $tablet_widgets_right_padding ) && '' != $tablet_widgets_right_padding
				|| isset( $tablet_widgets_bottom_padding ) && '' != $tablet_widgets_bottom_padding
				|| isset( $tablet_widgets_left_padding ) && '' != $tablet_widgets_left_padding ) {
				$css .= '@media (max-width: 768px){.widget-area .sidebar-box{padding:'. oceanwp_spacing_css( $tablet_widgets_top_padding, $tablet_widgets_right_padding, $tablet_widgets_bottom_padding, $tablet_widgets_left_padding ) .'}}';
			}

			// Mobile widget padding
			if ( isset( $mobile_widgets_top_padding ) && '' != $mobile_widgets_top_padding
				|| isset( $mobile_widgets_right_padding ) && '' != $mobile_widgets_right_padding
				|| isset( $mobile_widgets_bottom_padding ) && '' != $mobile_widgets_bottom_padding
				|| isset( $mobile_widgets_left_padding ) && '' != $mobile_widgets_left_padding ) {
				$css .= '@media (max-width: 480px){.widget-area .sidebar-box{padding:'. oceanwp_spacing_css( $mobile_widgets_top_padding, $mobile_widgets_right_padding, $mobile_widgets_bottom_padding, $mobile_widgets_left_padding ) .'}}';
			}

			// Widgets margin bottom
			if ( ! empty( $widgets_margin_bottom ) ) {
				$css .= '.widget-area .sidebar-box, .separate-layout .sidebar-box{margin-bottom:'. $widgets_margin_bottom .'px;}';
			}

			// Widgets titles border color
			if ( ! empty( $widgets_titles_border_color ) && '#13aff0' != $widgets_titles_border_color ) {
				$css .= '.widget-title{border-color:'. $widgets_titles_border_color .';}';
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