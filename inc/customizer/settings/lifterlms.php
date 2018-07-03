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
			 * General Header
			 */
			$wp_customize->add_setting( 'ocean_llms_general_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_general_heading', array(
				'label'    	=> esc_html__( 'General', 'oceanwp' ),
				'section'  	=> 'ocean_llms_general',
				'priority' 	=> 10,
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
			 * Distraction Free Learning
			 */
			$wp_customize->add_setting( 'ocean_llms_distraction_free_learning', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_distraction_free_learning', array(
				'label'	   				=> esc_html__( 'Distraction Free Learning', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_llms_general',
				'settings' 				=> 'ocean_llms_distraction_free_learning',
				'priority' 				=> 10,
			) ) );

			/**
			 * Grid
			 */
			$wp_customize->add_setting( 'ocean_llms_grid_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_grid_heading', array(
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
			        'max'   => 6,
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
			        'max'   => 6,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Course Details
			 */
			$wp_customize->add_setting( 'ocean_llms_course_details_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_course_details_heading', array(
				'label'    	=> esc_html__( 'Course Details', 'oceanwp' ),
				'section'  	=> 'ocean_llms_general',
				'priority' 	=> 10,
			) ) );

			/**
			 * Course Details
			 */
			$wp_customize->add_setting( 'ocean_llms_course_details', array(
				'default'				=> array( 'image', 'description', 'meta', 'author', 'progress', 'syllabus' ),
				'sanitize_callback'		=> 'oceanwp_sanitize_multicheck',
			) );

			$wp_customize->add_control( new OceanWP_Customize_Multicheck_Control( $wp_customize, 'ocean_llms_course_details', array(
				'label'	   				=> esc_html__( 'Course Details', 'oceanwp' ),
				'section'  				=> 'ocean_llms_general',
				'settings' 				=> 'ocean_llms_course_details',
				'priority' 				=> 10,
				'choices' 				=> array(
					'image'		 		=> esc_html__( 'Featured Image', 'oceanwp' ),
					'description'		=> esc_html__( 'Description', 'oceanwp' ),
					'meta' 				=> esc_html__( 'Meta', 'oceanwp' ),
					'author' 			=> esc_html__( 'Author', 'oceanwp' ),
					'progress' 			=> esc_html__( 'Progress', 'oceanwp' ),
					'syllabus' 			=> esc_html__( 'Syllabus', 'oceanwp' ),
				),
			) ) );

			/**
			 * Membership Details
			 */
			$wp_customize->add_setting( 'ocean_llms_membership_image_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_membership_image_heading', array(
				'label'    	=> esc_html__( 'Membership Details', 'oceanwp' ),
				'section'  	=> 'ocean_llms_general',
				'priority' 	=> 10,
			) ) );

			/**
			 * Membership Image
			 **/
			$wp_customize->add_setting( 'ocean_llms_membership_image', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_llms_membership_image', array(
				'label'	   				=> esc_html__( 'Featured Image', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_llms_general',
				'settings' 				=> 'ocean_llms_membership_image',
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
				'default'           	=> 'full-width',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_global_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_global_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_global_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_course_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_course_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_course_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_lesson_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_lesson_bs_layout',
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
				'active_callback' 		=> 'oceanwp_cac_has_llms_lesson_bs_layout',
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_llms_styling' , array(
				'title' 			=> esc_html__( 'Advanced Styling', 'oceanwp' ),
				'description' 		=> esc_html__( 'For some options, you must save and refresh your live site to preview changes.', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Global Layout Header
			 */
			$wp_customize->add_setting( 'ocean_llms_archive_heading', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_llms_archive_heading', array(
				'label'    	=> esc_html__( 'Courses/Memberships', 'oceanwp' ),
				'section'  	=> 'ocean_llms_styling',
				'priority' 	=> 10,
			) ) );


			/**
			 * Archive Padding
			 */
			$wp_customize->add_setting( 'ocean_llms_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_llms_tablet_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_llms_mobile_top_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_right_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_bottom_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_left_padding', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_llms_padding', array(
				'label'	   				=> esc_html__( 'Padding (px)', 'oceanwp' ),
				'section'  				=> 'ocean_llms_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_llms_top_padding',
		            'desktop_right' 	=> 'ocean_llms_right_padding',
		            'desktop_bottom' 	=> 'ocean_llms_bottom_padding',
		            'desktop_left' 		=> 'ocean_llms_left_padding',
		            'tablet_top' 		=> 'ocean_llms_tablet_top_padding',
		            'tablet_right' 		=> 'ocean_llms_tablet_right_padding',
		            'tablet_bottom' 	=> 'ocean_llms_tablet_bottom_padding',
		            'tablet_left' 		=> 'ocean_llms_tablet_left_padding',
		            'mobile_top' 		=> 'ocean_llms_mobile_top_padding',
		            'mobile_right' 		=> 'ocean_llms_mobile_right_padding',
		            'mobile_bottom' 	=> 'ocean_llms_mobile_bottom_padding',
		            'mobile_left' 		=> 'ocean_llms_mobile_left_padding',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Archive Image Margin
			 */
			$wp_customize->add_setting( 'ocean_llms_image_top_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_right_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_bottom_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_left_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_llms_image_tablet_top_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_tablet_right_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_tablet_bottom_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_tablet_left_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_llms_image_mobile_top_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_mobile_right_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_mobile_bottom_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_image_mobile_left_margin', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_llms_image_margin', array(
				'label'	   				=> esc_html__( 'Image Margin (px)', 'oceanwp' ),
				'section'  				=> 'ocean_llms_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_llms_image_top_margin',
		            'desktop_right' 	=> 'ocean_llms_image_right_margin',
		            'desktop_bottom' 	=> 'ocean_llms_image_bottom_margin',
		            'desktop_left' 		=> 'ocean_llms_image_left_margin',
		            'tablet_top' 		=> 'ocean_llms_image_tablet_top_margin',
		            'tablet_right' 		=> 'ocean_llms_image_tablet_right_margin',
		            'tablet_bottom' 	=> 'ocean_llms_image_tablet_bottom_margin',
		            'tablet_left' 		=> 'ocean_llms_image_tablet_left_margin',
		            'mobile_top' 		=> 'ocean_llms_image_mobile_top_margin',
		            'mobile_right' 		=> 'ocean_llms_image_mobile_right_margin',
		            'mobile_bottom' 	=> 'ocean_llms_image_mobile_bottom_margin',
		            'mobile_left' 		=> 'ocean_llms_image_mobile_left_margin',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Archive Border Width
			 */
			$wp_customize->add_setting( 'ocean_llms_top_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_right_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_bottom_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_left_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_llms_tablet_top_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_right_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_bottom_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_left_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_llms_mobile_top_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_right_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_bottom_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_left_border_width', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_llms_border_width', array(
				'label'	   				=> esc_html__( 'Border Width (px)', 'oceanwp' ),
				'section'  				=> 'ocean_llms_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_llms_top_border_width',
		            'desktop_right' 	=> 'ocean_llms_right_border_width',
		            'desktop_bottom' 	=> 'ocean_llms_bottom_border_width',
		            'desktop_left' 		=> 'ocean_llms_left_border_width',
		            'tablet_top' 		=> 'ocean_llms_tablet_top_border_width',
		            'tablet_right' 		=> 'ocean_llms_tablet_right_border_width',
		            'tablet_bottom' 	=> 'ocean_llms_tablet_bottom_border_width',
		            'tablet_left' 		=> 'ocean_llms_tablet_left_border_width',
		            'mobile_top' 		=> 'ocean_llms_mobile_top_border_width',
		            'mobile_right' 		=> 'ocean_llms_mobile_right_border_width',
		            'mobile_bottom' 	=> 'ocean_llms_mobile_bottom_border_width',
		            'mobile_left' 		=> 'ocean_llms_mobile_left_border_width',
				),
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 100,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Archive Border Radius
			 */
			$wp_customize->add_setting( 'ocean_llms_top_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_right_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_bottom_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );
			$wp_customize->add_setting( 'ocean_llms_left_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_setting( 'ocean_llms_tablet_top_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_right_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_bottom_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_tablet_left_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_setting( 'ocean_llms_mobile_top_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_right_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_bottom_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );
			$wp_customize->add_setting( 'ocean_llms_mobile_left_border_radius', array(
				'transport' 			=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Dimensions_Control( $wp_customize, 'ocean_llms_border_radius', array(
				'label'	   				=> esc_html__( 'Border Radius (px)', 'oceanwp' ),
				'section'  				=> 'ocean_llms_styling',				
				'settings'   => array(
		            'desktop_top' 		=> 'ocean_llms_top_border_radius',
		            'desktop_right' 	=> 'ocean_llms_right_border_radius',
		            'desktop_bottom' 	=> 'ocean_llms_bottom_border_radius',
		            'desktop_left' 		=> 'ocean_llms_left_border_radius',
		            'tablet_top' 		=> 'ocean_llms_tablet_top_border_radius',
		            'tablet_right' 		=> 'ocean_llms_tablet_right_border_radius',
		            'tablet_bottom' 	=> 'ocean_llms_tablet_bottom_border_radius',
		            'tablet_left' 		=> 'ocean_llms_tablet_left_border_radius',
		            'mobile_top' 		=> 'ocean_llms_mobile_top_border_radius',
		            'mobile_right' 		=> 'ocean_llms_mobile_right_border_radius',
		            'mobile_bottom' 	=> 'ocean_llms_mobile_bottom_border_radius',
		            'mobile_left' 		=> 'ocean_llms_mobile_left_border_radius',
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
	        $wp_customize->add_setting( 'ocean_llms_background_color', array(
	        	'default'				=> '#f1f1f1',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_background_color', array(
				'label'					=> esc_html__( 'Background Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_background_color',
				'priority'				=> 10
			) ) );

			/**
		     * Border Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_border_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_border_color', array(
				'label'					=> esc_html__( 'Border Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_border_color',
				'priority'				=> 10
			) ) );

			/**
		     * Archive Entry Title Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_title_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_title_color', array(
				'label'					=> esc_html__( 'Title Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Archive Entry Title Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_llms_title_color_hover', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_title_color_hover', array(
				'label'					=> esc_html__( 'Title Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_title_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Author Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_author_color', array(
				'default'				=> '#444',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_author_color', array(
				'label'					=> esc_html__( 'Author Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_author_color',
				'priority'				=> 10
			) ) );

			/**
		     * Meta Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_meta_color', array(
				'default'				=> '#444',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_meta_color', array(
				'label'					=> esc_html__( 'Meta Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_meta_color',
				'priority'				=> 10
			) ) );

			/**
			 * Course
			 */
			$wp_customize->add_setting( 'ocean_lllms_styling_course', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_lllms_styling_course', array(
				'label'    				=> esc_html__( 'Course', 'oceanwp' ),
				'section'  				=> 'ocean_llms_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Course Title Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_title_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_title_color', array(
				'label'					=> esc_html__( 'Title Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Course Sub Title Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_subtitle_color', array(
				'default'				=> '',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_subtitle_color', array(
				'label'					=> esc_html__( 'Sub Title Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_subtitle_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Course Meta Title Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_meta_title_color', array(
				'default'				=> '#333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_meta_title_color', array(
				'label'					=> esc_html__( 'Meta Title Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_meta_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Course Meta Link Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_meta_link_color', array(
				'default'				=> '#929292',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_meta_link_color', array(
				'label'					=> esc_html__( 'Meta Link/SubTitle Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_meta_link_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Course Meta Link Color Hover
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_meta_link_color_hover', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_meta_link_color_hover', array(
				'label'					=> esc_html__( 'Meta Link Color: Hover', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_meta_link_color_hover',
				'priority'				=> 10,
			) ) );

			/**
		     * Author Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_author_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_author_color', array(
				'label'					=> esc_html__( 'Author Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_author_color',
				'priority'				=> 10
			) ) );

			/**
		     * Course Progress Bar Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_progress_color', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_progress_color', array(
				'label'					=> esc_html__( 'Progress Bar Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_progress_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Course Section Title Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_section_title_color', array(
				'default'				=> '#fff',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_section_title_color', array(
				'label'					=> esc_html__( 'Section Title Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_section_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Course Section Title Background
		     */
	        $wp_customize->add_setting( 'ocean_llms_course_section_title_background', array(
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_course_section_title_background', array(
				'label'					=> esc_html__( 'Section Title Background', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_course_section_title_background',
				'priority'				=> 10,
			) ) );


			/**
			 * Lesson
			 */
			$wp_customize->add_setting( 'ocean_lllms_styling_lesson', array(
				'sanitize_callback' 	=> 'wp_kses',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Heading_Control( $wp_customize, 'ocean_lllms_styling_lesson', array(
				'label'    				=> esc_html__( 'Lesson', 'oceanwp' ),
				'section'  				=> 'ocean_llms_styling',
				'priority' 				=> 10,
			) ) );

			/**
		     * Lesson Title Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_lesson_title_color', array(
				'default'				=> '#333333',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_lesson_title_color', array(
				'label'					=> esc_html__( 'Title Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_lesson_title_color',
				'priority'				=> 10,
			) ) );

			/**
		     * Lesson Description Color
		     */
	        $wp_customize->add_setting( 'ocean_llms_lesson_description_color', array(
				'default'				=> '',
				'transport'				=> 'postMessage',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_llms_lesson_description_color', array(
				'label'					=> esc_html__( 'Description Color', 'oceanwp' ),
				'section'				=> 'ocean_llms_styling',
				'settings'				=> 'ocean_llms_lesson_description_color',
				'priority'				=> 10,
			) ) );
		}

		/**
		 * Get CSS
		 *
		 * @since 1.0.0
		 */
		public static function head_css( $output ) {
		
			// Styling vars
			$llms_top_padding 								= get_theme_mod( 'ocean_llms_top_padding' );
			$llms_right_padding 							= get_theme_mod( 'ocean_llms_right_padding' );
			$llms_bottom_padding 							= get_theme_mod( 'ocean_llms_bottom_padding' );
			$llms_left_padding 								= get_theme_mod( 'ocean_llms_left_padding' );
			$tablet_llms_top_padding 						= get_theme_mod( 'ocean_llms_tablet_top_padding' );
			$tablet_llms_right_padding 						= get_theme_mod( 'ocean_llms_tablet_right_padding' );
			$tablet_llms_bottom_padding 					= get_theme_mod( 'ocean_llms_tablet_bottom_padding' );
			$tablet_llms_left_padding 						= get_theme_mod( 'ocean_llms_tablet_left_padding' );
			$mobile_llms_top_padding 						= get_theme_mod( 'ocean_llms_mobile_top_padding' );
			$mobile_llms_right_padding 						= get_theme_mod( 'ocean_llms_mobile_right_padding' );
			$mobile_llms_bottom_padding 					= get_theme_mod( 'ocean_llms_mobile_bottom_padding' );
			$mobile_llms_left_padding 						= get_theme_mod( 'ocean_llms_mobile_left_padding' );
			$llms_image_top_margin 							= get_theme_mod( 'ocean_llms_image_top_margin' );
			$llms_image_right_margin 						= get_theme_mod( 'ocean_llms_image_right_margin' );
			$llms_image_bottom_margin 						= get_theme_mod( 'ocean_llms_image_bottom_margin' );
			$llms_image_left_margin 						= get_theme_mod( 'ocean_llms_image_left_margin' );
			$tablet_llms_image_top_margin 					= get_theme_mod( 'ocean_llms_image_tablet_top_margin' );
			$tablet_llms_image_right_margin 				= get_theme_mod( 'ocean_llms_image_tablet_right_margin' );
			$tablet_llms_image_bottom_margin 				= get_theme_mod( 'ocean_llms_image_tablet_bottom_margin' );
			$tablet_llms_image_left_margin 					= get_theme_mod( 'ocean_llms_image_tablet_left_margin' );
			$mobile_llms_image_top_margin 					= get_theme_mod( 'ocean_llms_image_mobile_top_margin' );
			$mobile_llms_image_right_margin 				= get_theme_mod( 'ocean_llms_image_mobile_right_margin' );
			$mobile_llms_image_bottom_margin 				= get_theme_mod( 'ocean_llms_image_mobile_bottom_margin' );
			$mobile_llms_image_left_margin 					= get_theme_mod( 'ocean_llms_image_mobile_left_margin' );
			$llms_top_border_width 							= get_theme_mod( 'ocean_llms_top_border_width' );
			$llms_right_border_width 						= get_theme_mod( 'ocean_llms_right_border_width' );
			$llms_bottom_border_width 						= get_theme_mod( 'ocean_llms_bottom_border_width' );
			$llms_left_border_width 						= get_theme_mod( 'ocean_llms_left_border_width' );
			$tablet_llms_top_border_width 					= get_theme_mod( 'ocean_llms_tablet_top_border_width' );
			$tablet_llms_right_border_width 				= get_theme_mod( 'ocean_llms_tablet_right_border_width' );
			$tablet_llms_bottom_border_width 				= get_theme_mod( 'ocean_llms_tablet_bottom_border_width' );
			$tablet_llms_left_border_width 					= get_theme_mod( 'ocean_llms_tablet_left_border_width' );
			$mobile_llms_top_border_width 					= get_theme_mod( 'ocean_llms_mobile_top_border_width' );
			$mobile_llms_right_border_width 				= get_theme_mod( 'ocean_llms_mobile_right_border_width' );
			$mobile_llms_bottom_border_width 				= get_theme_mod( 'ocean_llms_mobile_bottom_border_width' );
			$mobile_llms_left_border_width 					= get_theme_mod( 'ocean_llms_mobile_left_border_width' );
			$llms_top_border_radius 						= get_theme_mod( 'ocean_llms_top_border_radius' );
			$llms_right_border_radius 						= get_theme_mod( 'ocean_llms_right_border_radius' );
			$llms_bottom_border_radius 						= get_theme_mod( 'ocean_llms_bottom_border_radius' );
			$llms_left_border_radius 						= get_theme_mod( 'ocean_llms_left_border_radius' );
			$tablet_llms_top_border_radius 					= get_theme_mod( 'ocean_llms_tablet_top_border_radius' );
			$tablet_llms_right_border_radius 				= get_theme_mod( 'ocean_llms_tablet_right_border_radius' );
			$tablet_llms_bottom_border_radius 				= get_theme_mod( 'ocean_llms_tablet_bottom_border_radius' );
			$tablet_llms_left_border_radius 				= get_theme_mod( 'ocean_llms_tablet_left_border_radius' );
			$mobile_llms_top_border_radius 					= get_theme_mod( 'ocean_llms_mobile_top_border_radius' );
			$mobile_llms_right_border_radius 				= get_theme_mod( 'ocean_llms_mobile_right_border_radius' );
			$mobile_llms_bottom_border_radius 				= get_theme_mod( 'ocean_llms_mobile_bottom_border_radius' );
			$mobile_llms_left_border_radius 				= get_theme_mod( 'ocean_llms_mobile_left_border_radius' );
			$llms_background_color 							= get_theme_mod( 'ocean_llms_background_color', '#f1f1f1' );
			$llms_border_color 								= get_theme_mod( 'ocean_llms_border_color' );
			$llms_title_color 								= get_theme_mod( 'ocean_llms_title_color' );
			$llms_title_color_hover 						= get_theme_mod( 'ocean_llms_title_color_hover' );
			$author_color 									= get_theme_mod( 'ocean_llms_author_color', '#444' );
			$meta_color 									= get_theme_mod( 'ocean_llms_meta_color', '#444' );

			// Course
			$course_title_color 							= get_theme_mod( 'ocean_llms_course_title_color' );
			$course_subtitle_color 							= get_theme_mod( 'ocean_llms_course_subtitle_color' );
			$course_meta_title_color 						= get_theme_mod( 'ocean_llms_course_meta_title_color', '#333' );
			$course_meta_link_color 						= get_theme_mod( 'ocean_llms_course_meta_link_color', '#929292' );
			$course_meta_link_color_hover 					= get_theme_mod( 'ocean_llms_course_meta_link_color_hover', '' );
			$course_author_color 							= get_theme_mod( 'ocean_llms_course_author_color' );
			$course_progress_color							= get_theme_mod( 'ocean_llms_course_progress_color' );
			$course_section_title_color 					= get_theme_mod( 'ocean_llms_course_section_title_color' );
			$course_section_title_background 				= get_theme_mod( 'ocean_llms_course_section_title_background' );

			// Lesson 
			$lesson_title_color								= get_theme_mod( 'ocean_llms_lesson_title_color' );
			$lesson_description_color						= get_theme_mod( 'ocean_llms_lesson_description_color' );

			// Both Sidebars - Global
			$llms_global_layout 							= get_theme_mod( 'ocean_llms_global_layout', 'full-width' );
			$bs_global_content_width 						= get_theme_mod( 'ocean_llms_global_both_sidebars_content_width' );
			$bs_global_sidebars_width 						= get_theme_mod( 'ocean_llms_global_both_sidebars_sidebars_width' );

			// Both Sidebars - Course
			$llms_course_layout 							= get_theme_mod( 'ocean_llms_course_layout', 'left-sidebar' );
			$bs_course_content_width 						= get_theme_mod( 'ocean_llms_course_both_sidebars_content_width' );
			$bs_course_sidebars_width 						= get_theme_mod( 'ocean_llms_course_both_sidebars_sidebars_width' );

			// Both Sidebars - Lesson
			$llms_lesson_layout 							= get_theme_mod( 'ocean_llms_lesson_layout', 'left-sidebar' );
			$bs_lesson_content_width 						= get_theme_mod( 'ocean_llms_lesson_both_sidebars_content_width' );
			$bs_lesson_sidebars_width 						= get_theme_mod( 'ocean_llms_lesson_both_sidebars_sidebars_width' );

			// Define css var
			$css = '';

			// Product padding
			if ( isset( $llms_top_padding ) && '' != $llms_top_padding
				|| isset( $llms_right_padding ) && '' != $llms_right_padding
				|| isset( $llms_bottom_padding ) && '' != $llms_bottom_padding
				|| isset( $llms_left_padding ) && '' != $llms_left_padding ) {
				$css .= '.llms-loop-item .llms-loop-item-content{padding:'. oceanwp_spacing_css( $llms_top_padding, $llms_right_padding, $llms_bottom_padding, $llms_left_padding ) .'}';
			}

			// Tablet llms padding
			if ( isset( $tablet_llms_top_padding ) && '' != $tablet_llms_top_padding
				|| isset( $tablet_llms_right_padding ) && '' != $tablet_llms_right_padding
				|| isset( $tablet_llms_bottom_padding ) && '' != $tablet_llms_bottom_padding
				|| isset( $tablet_llms_left_padding ) && '' != $tablet_llms_left_padding ) {
				$css .= '@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{padding:'. oceanwp_spacing_css( $tablet_llms_top_padding, $tablet_llms_right_padding, $tablet_llms_bottom_padding, $tablet_llms_left_padding ) .'}}';
			}

			// Mobile llms padding
			if ( isset( $mobile_llms_top_padding ) && '' != $mobile_llms_top_padding
				|| isset( $mobile_llms_right_padding ) && '' != $mobile_llms_right_padding
				|| isset( $mobile_llms_bottom_padding ) && '' != $mobile_llms_bottom_padding
				|| isset( $mobile_llms_left_padding ) && '' != $mobile_llms_left_padding ) {
				$css .= '@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{padding:'. oceanwp_spacing_css( $mobile_llms_top_padding, $mobile_llms_right_padding, $mobile_llms_bottom_padding, $mobile_llms_left_padding ) .'}}';
			}

			// Product image margin
			if ( isset( $llms_image_top_margin ) && '' != $llms_image_top_margin
				|| isset( $llms_image_right_margin ) && '' != $llms_image_right_margin
				|| isset( $llms_image_bottom_margin ) && '' != $llms_image_bottom_margin
				|| isset( $llms_image_left_margin ) && '' != $llms_image_left_margin ) {
				$css .= '.llms-loop-item .llms-loop-item-content .llms-featured-image{margin:'. oceanwp_spacing_css( $llms_image_top_margin, $llms_image_right_margin, $llms_image_bottom_margin, $llms_image_left_margin ) .'}';
			}

			// Tablet llms image margin
			if ( isset( $tablet_llms_image_top_margin ) && '' != $tablet_llms_image_top_margin
				|| isset( $tablet_llms_image_right_margin ) && '' != $tablet_llms_image_right_margin
				|| isset( $tablet_llms_image_bottom_margin ) && '' != $tablet_llms_image_bottom_margin
				|| isset( $tablet_llms_image_left_margin ) && '' != $tablet_llms_image_left_margin ) {
				$css .= '@media (max-width: 768px){.llms-loop-item .llms-loop-item-content .llms-featured-image{margin:'. oceanwp_spacing_css( $tablet_llms_image_top_margin, $tablet_llms_image_right_margin, $tablet_llms_image_bottom_margin, $tablet_llms_image_left_margin ) .'}}';
			}

			// Mobile llms image margin
			if ( isset( $mobile_llms_image_top_margin ) && '' != $mobile_llms_image_top_margin
				|| isset( $mobile_llms_image_right_margin ) && '' != $mobile_llms_image_right_margin
				|| isset( $mobile_llms_image_bottom_margin ) && '' != $mobile_llms_image_bottom_margin
				|| isset( $mobile_llms_image_left_margin ) && '' != $mobile_llms_image_left_margin ) {
				$css .= '@media (max-width: 480px){.llms-loop-item .llms-loop-item-content .llms-featured-image{margin:'. oceanwp_spacing_css( $mobile_llms_image_top_margin, $mobile_llms_image_right_margin, $mobile_llms_image_bottom_margin, $mobile_llms_image_left_margin ) .'}}';
			}

			// Product border style if border width
			if ( isset( $llms_top_border_width ) && '' != $llms_top_border_width
				|| isset( $llms_right_border_width ) && '' != $llms_right_border_width
				|| isset( $llms_bottom_border_width ) && '' != $llms_bottom_border_width
				|| isset( $llms_left_border_width ) && '' != $llms_left_border_width
				|| isset( $tablet_llms_top_border_width ) && '' != $tablet_llms_top_border_width
				|| isset( $tablet_llms_right_border_width ) && '' != $tablet_llms_right_border_width
				|| isset( $tablet_llms_bottom_border_width ) && '' != $tablet_llms_bottom_border_width
				|| isset( $tablet_llms_left_border_width ) && '' != $tablet_llms_left_border_width
				|| isset( $mobile_llms_top_border_width ) && '' != $mobile_llms_top_border_width
				|| isset( $mobile_llms_right_border_width ) && '' != $mobile_llms_right_border_width
				|| isset( $mobile_llms_bottom_border_width ) && '' != $mobile_llms_bottom_border_width
				|| isset( $mobile_llms_left_border_width ) && '' != $mobile_llms_left_border_width ) {
				$css .= '.llms-loop-item .llms-loop-item-content{border-style: solid}';
			}

			// Product border width
			if ( isset( $llms_top_border_width ) && '' != $llms_top_border_width
				|| isset( $llms_right_border_width ) && '' != $llms_right_border_width
				|| isset( $llms_bottom_border_width ) && '' != $llms_bottom_border_width
				|| isset( $llms_left_border_width ) && '' != $llms_left_border_width ) {
				$css .= '.llms-loop-item .llms-loop-item-content{border-width:'. oceanwp_spacing_css( $llms_top_border_width, $llms_right_border_width, $llms_bottom_border_width, $llms_left_border_width ) .'}';
			}

			// Tablet llms border width
			if ( isset( $tablet_llms_top_border_width ) && '' != $tablet_llms_top_border_width
				|| isset( $tablet_llms_right_border_width ) && '' != $tablet_llms_right_border_width
				|| isset( $tablet_llms_bottom_border_width ) && '' != $tablet_llms_bottom_border_width
				|| isset( $tablet_llms_left_border_width ) && '' != $tablet_llms_left_border_width ) {
				$css .= '@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{border-width:'. oceanwp_spacing_css( $tablet_llms_top_border_width, $tablet_llms_right_border_width, $tablet_llms_bottom_border_width, $tablet_llms_left_border_width ) .'}}';
			}

			// Mobile llms border width
			if ( isset( $mobile_llms_top_border_width ) && '' != $mobile_llms_top_border_width
				|| isset( $mobile_llms_right_border_width ) && '' != $mobile_llms_right_border_width
				|| isset( $mobile_llms_bottom_border_width ) && '' != $mobile_llms_bottom_border_width
				|| isset( $mobile_llms_left_border_width ) && '' != $mobile_llms_left_border_width ) {
				$css .= '@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{border-width:'. oceanwp_spacing_css( $mobile_llms_top_border_width, $mobile_llms_right_border_width, $mobile_llms_bottom_border_width, $mobile_llms_left_border_width ) .'}}';
			}

			// Product border radius
			if ( isset( $llms_top_border_radius ) && '' != $llms_top_border_radius
				|| isset( $llms_right_border_radius ) && '' != $llms_right_border_radius
				|| isset( $llms_bottom_border_radius ) && '' != $llms_bottom_border_radius
				|| isset( $llms_left_border_radius ) && '' != $llms_left_border_radius ) {
				$css .= '.llms-loop-item .llms-loop-item-content{border-radius:'. oceanwp_spacing_css( $llms_top_border_radius, $llms_right_border_radius, $llms_bottom_border_radius, $llms_left_border_radius ) .'}';
			}

			// Tablet llms border radius
			if ( isset( $tablet_llms_top_border_radius ) && '' != $tablet_llms_top_border_radius
				|| isset( $tablet_llms_right_border_radius ) && '' != $tablet_llms_right_border_radius
				|| isset( $tablet_llms_bottom_border_radius ) && '' != $tablet_llms_bottom_border_radius
				|| isset( $tablet_llms_left_border_radius ) && '' != $tablet_llms_left_border_radius ) {
				$css .= '@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{border-radius:'. oceanwp_spacing_css( $tablet_llms_top_border_radius, $tablet_llms_right_border_radius, $tablet_llms_bottom_border_radius, $tablet_llms_left_border_radius ) .'}}';
			}

			// Mobile llms border radius
			if ( isset( $mobile_llms_top_border_radius ) && '' != $mobile_llms_top_border_radius
				|| isset( $mobile_llms_right_border_radius ) && '' != $mobile_llms_right_border_radius
				|| isset( $mobile_llms_bottom_border_radius ) && '' != $mobile_llms_bottom_border_radius
				|| isset( $mobile_llms_left_border_radius ) && '' != $mobile_llms_left_border_radius ) {
				$css .= '@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{border-radius:'. oceanwp_spacing_css( $mobile_llms_top_border_radius, $mobile_llms_right_border_radius, $mobile_llms_bottom_border_radius, $mobile_llms_left_border_radius ) .'}}';
			}

			// Add background color
			if ( ! empty( $llms_background_color && '#f1f1f1' != $llms_background_color ) ) {
				$css .= '.llms-loop-item .llms-loop-item-content{background-color:'. $llms_background_color .';}';
			}

			// Add border color
			if ( ! empty( $llms_border_color ) ) {
				$css .= '.llms-loop-item .llms-loop-item-content{border-color:'. $llms_border_color .';}';
			}

			// Add llms entry title color
			if ( ! empty( $llms_title_color ) ) {
				$css .= '.llms-loop-item-content .llms-loop-title{color:'. $llms_title_color .';}';
			}

			// Add llms entry title color hover
			if ( ! empty( $llms_title_color_hover ) && '#13aff0' != $llms_title_color_hover ) {
				$css .= '.llms-loop-item-content .llms-loop-title:hover{color:'. $llms_title_color_hover .';}';
			}

			// Add author color
			if ( ! empty( $author_color ) && '#444' != $author_color ) {
				$css .= '.llms-loop-item-content .llms-author{color:'. $author_color .';}';
			}

			// Add meta color
			if ( ! empty( $meta_color ) && '#444' != $meta_color ) {
				$css .= '.llms-loop-item-content .llms-meta{color:'. $meta_color .';}';
			}

			// Course Title Color
			if ( ! empty( $course_title_color ) ) {
				$css .= '.single-course .entry-title{color:'. $course_title_color .';}';
			}

			// Course Sub Title Color
			if ( ! empty( $course_subtitle_color ) ) {
				$css .= '.single-course .llms-meta-title{color:'. $course_subtitle_color .';}';
			}

			// Course Meta Title Color
			if ( ! empty( $course_meta_title_color ) && '#333' != $course_meta_title_color ) {
				$css .= '.llms-meta-info .llms-meta p{color:'. $course_meta_title_color .';}';
			}

			// Course Meta Link Color
			if ( ! empty( $course_meta_link_color ) && '#929292' != $course_meta_link_color ) {
				$css .= '.llms-meta-info .llms-meta span, .llms-meta-info .llms-meta a{color:'. $course_meta_link_color .';}';
			}

			// Course Meta Link Color Hover
			if ( ! empty( $course_meta_link_color_hover ) ) {
				$css .= '.llms-meta-info .llms-meta a:hover{color:'. $course_meta_link_color_hover .';}';
			}

			// Course Author Color
			if ( ! empty( $course_author_color ) ) {
				$css .= '.llms-instructor-info .llms-instructors .llms-author{color:'. $course_author_color .';}';
			}

			// Course Progress Color
			if ( ! empty( $course_progress_color ) ) {
				$css .= '.llms-progress .progress-bar-complete{color:'. $course_progress_color .';}';
			}

			// Course Section Title Color
			if ( ! empty( $course_section_title_color ) && '#fff' != $course_section_title_color ) {
				$css .= '.llms-syllabus-wrapper .llms-section-title, .llms-access-plan-title{color:'. $course_section_title_color .';}';
			}

			// Course Section Title Color
			if ( ! empty( $course_section_title_background ) ) {
				$css .= '.llms-syllabus-wrapper .llms-section-title, .llms-access-plan-title{background-color:'. $course_section_title_background .';}';
			}

			// Lesson Title Color
			if ( ! empty( $lesson_title_color ) ) {
				$css .= '.single-lesson .entry-title{color:'. $lesson_title_color .';}';
			}

			// Course Progress Color
			if ( ! empty( $lesson_description_color ) ) {
				$css .= '.single-lesson .entry-content{color:'. $lesson_description_color .';}';
			}

			// LifterLMS Both Sidebars - Global
			if ( 'both-sidebars' == $llms_global_layout ) {

				// Both Sidebars layout LLMS Global page content width
				if ( ! empty( $bs_global_content_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.llms-global-layout.content-both-sidebars .content-area {width: '. $bs_global_content_width .'%;}
							body.llms-global-layout.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
							body.llms-global-layout.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_global_content_width .'%;}
						}';
				}

				// Both Sidebars layout LLMS Global sidebars width
				if ( ! empty( $bs_global_sidebars_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.llms-global-layout.content-both-sidebars .widget-area{width:'. $bs_global_sidebars_width .'%;}
							body.llms-global-layout.content-both-sidebars.scs-style .content-area{left:'. $bs_global_sidebars_width .'%;}
							body.llms-global-layout.content-both-sidebars.ssc-style .content-area{left:'. $bs_global_sidebars_width * 2 .'%;}
						}';
				}

			}

			// LifterLMS Both Sidebars - Course
			if ( 'both-sidebars' == $llms_course_layout ) {

				// Both Sidebars layout LLMS Course page content width
				if ( ! empty( $bs_course_content_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.single-course.content-both-sidebars .content-area {width: '. $bs_course_content_width .'%;}
							body.single-course.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
							body.single-course.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_course_content_width .'%;}
						}';
				}

				// Both Sidebars layout LLMS Course sidebars width
				if ( ! empty( $bs_course_sidebars_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.single-course.content-both-sidebars .widget-area{width:'. $bs_course_sidebars_width .'%;}
							body.single-course.content-both-sidebars.scs-style .content-area{left:'. $bs_course_sidebars_width .'%;}
							body.single-course.content-both-sidebars.ssc-style .content-area{left:'. $bs_course_sidebars_width * 2 .'%;}
						}';
				}

			}

			// LifterLMS Both Sidebars  - Lesson
			if ( 'both-sidebars' == $llms_lesson_layout ) {

				// Both Sidebars layout LLMS Lesson page content width
				if ( ! empty( $bs_lesson_content_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.single-lesson.content-both-sidebars .content-area {width: '. $bs_lesson_content_width .'%;}
							body.single-lesson.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
							body.single-lesson.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_lesson_content_width .'%;}
						}';
				}

				// Both Sidebars layout LLMS Lesson sidebars width
				if ( ! empty( $bs_lesson_sidebars_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.single-lesson.content-both-sidebars .widget-area{width:'. $bs_lesson_sidebars_width .'%;}
							body.single-lesson.content-both-sidebars.scs-style .content-area{left:'. $bs_lesson_sidebars_width .'%;}
							body.single-lesson.content-both-sidebars.ssc-style .content-area{left:'. $bs_lesson_sidebars_width * 2 .'%;}
						}';
				}

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