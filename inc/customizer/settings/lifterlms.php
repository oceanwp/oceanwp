<?php
/**
 * LifterLMS Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_LifterLMS_Customizer' ) ) :

	class OceanWP_LifterLMS_Customizer {

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
			$panel = 'ocean_llms_panel';
			$wp_customize->add_panel( $panel , array(
				'title' 			=> esc_html__( 'LifterLMS', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_llms_general' , array(
				'title' 			=> esc_html__( 'General', 'oceanwp' ),
				'description' 		=> esc_html__( 'For some options, you must save and refresh your live site to preview changes.', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Courses
			 */
			$wp_customize->add_setting( 'ocean_llms_courses_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_courses_heading', array(
				'label'    	=> esc_html__( 'Grid', 'oceanwp' ),
				'section'  	=> 'ocean_llms_general',
				'priority' 	=> 10,
			) ) );

			/**
			 * Courses Columns
			 */
			$wp_customize->add_setting( 'ocean_llms_courses_columns', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '3',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_llms_tablet_courses_columns', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_llms_mobile_courses_columns', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, 'ocean_llms_courses_columns', array(
				'label' 			=> esc_html__( 'Courses Columns', 'oceanwp' ),
				'section'  			=> 'ocean_llms_general',
				'settings' => array(
		            'desktop' 	=> 'ocean_llms_courses_columns',
		            'tablet' 	=> 'ocean_llms_tablet_courses_columns',
		            'mobile' 	=> 'ocean_llms_mobile_courses_columns',
			    ),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 1,
			        'max'   => 7,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Membership Columns
			 */
			$wp_customize->add_setting( 'ocean_llms_membership_columns', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '3',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_llms_tablet_membership_columns', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number	_blank',
			) );

			$wp_customize->add_setting( 'ocean_llms_mobile_membership_columns', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, 'ocean_llms_membership_columns', array(
				'label' 			=> esc_html__( 'Membership Columns', 'oceanwp' ),
				'section'  			=> 'ocean_llms_general',
				'settings' => array(
		            'desktop' 	=> 'ocean_llms_membership_columns',
		            'tablet' 	=> 'ocean_llms_tablet_membership_columns',
		            'mobile' 	=> 'ocean_llms_mobile_membership_columns',
			    ),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 1,
			        'max'   => 7,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Distraction Free Checkout
			 */
			$wp_customize->add_setting( 'ocean_llms_distraction_free_checkout', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_distraction_free_checkout', array(
				'label'	   				=> esc_html__( 'Distraction Free Checkout', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_llms_general',
				'settings' 				=> 'ocean_llms_distraction_free_checkout',
				'priority' 				=> 10,
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_llms_layout' , array(
				'title' 			=> esc_html__( 'Layout', 'oceanwp' ),
				'description' 		=> esc_html__( 'For some options, you must save and refresh your live site to preview changes.', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Global Layout Header
			 */
			$wp_customize->add_setting( 'ocean_llms_global_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_global_heading', array(
				'label'    	=> esc_html__( 'Global', 'oceanwp' ),
				'section'  	=> 'ocean_llms_layout',
				'priority' 	=> 10,
			) ) );
			/**
			 * Layout
			 */
			$wp_customize->add_setting( 'ocean_llms_global_layout', array(
				'default'           	=> 'left-sidebar',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Radio_Image_Control( $wp_customize, 'ocean_llms_global_layout', array(
				'label'	   				=> esc_html__( 'Layout', 'oceanwp' ),
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_global_layout',
				'priority' 				=> 10,
				'choices' 				=> oceanwp_customizer_layout(),
			) ) );

			/**
			 * Both Sidebars Style
			 */
			$wp_customize->add_setting( 'ocean_llms_global_both_sidebars_style', array(
				'default'           	=> 'scs-style',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_global_both_sidebars_style', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_global_both_sidebars_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'ssc-style' 		=> esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' 		=> esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' 		=> esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_global_bs_layout',
			) ) );

			/**
			 * Both Sidebars Content Width
			 */
			$wp_customize->add_setting( 'ocean_llms_global_both_sidebars_content_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_global_both_sidebars_content_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Content Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_global_both_sidebars_content_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_global_bs_layout',
			) ) );

			/**
			 * Both Sidebars Sidebars Width
			 */
			$wp_customize->add_setting( 'ocean_llms_global_both_sidebars_sidebars_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_global_both_sidebars_sidebars_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Sidebars Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_global_both_sidebars_sidebars_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_global_bs_layout',
			) ) );

			/**
			 * Course Page Header
			 */
			$wp_customize->add_setting( 'ocean_llms_course_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_course_heading', array(
				'label'    	=> esc_html__( 'Course', 'oceanwp' ),
				'section'  	=> 'ocean_llms_layout',
				'priority' 	=> 10,
			) ) );
			/**
			 * Layout
			 */
			$wp_customize->add_setting( 'ocean_llms_course_layout', array(
				'default'           	=> 'left-sidebar',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Radio_Image_Control( $wp_customize, 'ocean_llms_course_layout', array(
				'label'	   				=> esc_html__( 'Layout', 'oceanwp' ),
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_course_layout',
				'priority' 				=> 10,
				'choices' 				=> oceanwp_customizer_layout(),
			) ) );

			/**
			 * Both Sidebars Style
			 */
			$wp_customize->add_setting( 'ocean_llms_course_both_sidebars_style', array(
				'default'           	=> 'scs-style',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_course_both_sidebars_style', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_course_both_sidebars_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'ssc-style' 		=> esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' 		=> esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' 		=> esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_course_bs_layout',
			) ) );

			/**
			 * Both Sidebars Content Width
			 */
			$wp_customize->add_setting( 'ocean_llms_course_both_sidebars_content_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_course_both_sidebars_content_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Content Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_course_both_sidebars_content_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_course_bs_layout',
			) ) );

			/**
			 * Both Sidebars Sidebars Width
			 */
			$wp_customize->add_setting( 'ocean_llms_course_both_sidebars_sidebars_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_course_both_sidebars_sidebars_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Sidebars Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_course_both_sidebars_sidebars_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_course_bs_layout',
			) ) );

			/**
			 * Lesson Page Header
			 */
			$wp_customize->add_setting( 'ocean_llms_lesson_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_lesson_heading', array(
				'label'    	=> esc_html__( 'Lesson', 'oceanwp' ),
				'section'  	=> 'ocean_llms_layout',
				'priority' 	=> 10,
			) ) );

			/**
			 * Layout
			 */
			$wp_customize->add_setting( 'ocean_llms_lesson_layout', array(
				'default'           	=> 'left-sidebar',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Radio_Image_Control( $wp_customize, 'ocean_llms_lesson_layout', array(
				'label'	   				=> esc_html__( 'Layout', 'oceanwp' ),
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_lesson_layout',
				'priority' 				=> 10,
				'choices' 				=> oceanwp_customizer_layout(),
			) ) );

			/**
			 * Both Sidebars Style
			 */
			$wp_customize->add_setting( 'ocean_llms_lesson_both_sidebars_style', array(
				'default'           	=> 'scs-style',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_lesson_both_sidebars_style', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_lesson_both_sidebars_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'ssc-style' 		=> esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
					'scs-style' 		=> esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
					'css-style' 		=> esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
				),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_lesson_bs_layout',
			) ) );

			/**
			 * Both Sidebars Content Width
			 */
			$wp_customize->add_setting( 'ocean_llms_lesson_both_sidebars_content_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_lesson_both_sidebars_content_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Content Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_lesson_both_sidebars_content_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_lesson_bs_layout',
			) ) );

			/**
			 * Both Sidebars Sidebars Width
			 */
			$wp_customize->add_setting( 'ocean_llms_lesson_both_sidebars_sidebars_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_lesson_both_sidebars_sidebars_width', array(
				'label'	   				=> esc_html__( 'Both Sidebars: Sidebars Width (%)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_llms_layout',
				'settings' 				=> 'ocean_llms_lesson_both_sidebars_sidebars_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_lifterlms_lesson_bs_layout',
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

			// Define css var
			$css = '';

			// Menu cart icon size
			if ( ! empty( $menu_icon_size ) ) {
				$css .= '.eddmenucart i{font-size:'. $menu_icon_size .'px;}';
			}

			// Return CSS
			if ( ! empty( $css ) ) {
				$output .= '/* LifterLMS CSS */'. $css;
			}

			// Return output css
			return $output;
		}
	}

endif;

return new OceanWP_LifterLMS_Customizer();