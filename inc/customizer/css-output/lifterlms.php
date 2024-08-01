<?php
/**
 * OceanWP Customizer CSS Output
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The OceanWP Customizer class
 */
class OceanWP_Customize_LifterLMS_CSS {

	/**
	 * fonts
	 *
	 * @var $fonts
	 * @access private
	 * @since 3.5.1
	 */
	private $fonts = array();

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter('ocean_head_css', array($this, 'generate_css'));
	}

	public function generate_Css($output) {

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
		$bs_global_content_width_unit 				    = get_theme_mod( 'ocean_llms_global_both_sidebars_content_width_unit', '%' );
		$bs_global_sidebars_width 						= get_theme_mod( 'ocean_llms_global_both_sidebars_sidebars_width' );
		$bs_global_sidebars_width_unit				    = get_theme_mod( 'ocean_llms_global_both_sidebars_sidebars_width_unit', '%' );

		// Both Sidebars - Course
		$llms_course_layout 							= get_theme_mod( 'ocean_llms_course_layout', 'left-sidebar' );
		$bs_course_content_width 						= get_theme_mod( 'ocean_llms_course_both_sidebars_content_width' );
		$bs_course_content_width_unit 				    = get_theme_mod( 'ocean_llms_course_both_sidebars_content_width_unit', '%' );
		$bs_course_sidebars_width 						= get_theme_mod( 'ocean_llms_course_both_sidebars_sidebars_width' );
		$bs_course_sidebars_width_unit 					= get_theme_mod( 'ocean_llms_course_both_sidebars_sidebars_width_unit', '%' );

		// Both Sidebars - Lesson
		$llms_lesson_layout 							= get_theme_mod( 'ocean_llms_lesson_layout', 'left-sidebar' );
		$bs_lesson_content_width 						= get_theme_mod( 'ocean_llms_lesson_both_sidebars_content_width' );
		$bs_lesson_content_width_unit 					= get_theme_mod( 'ocean_llms_lesson_both_sidebars_content_width_unit', '%' );
		$bs_lesson_sidebars_width 						= get_theme_mod( 'ocean_llms_lesson_both_sidebars_sidebars_width' );
		$bs_lesson_sidebars_width_unit 					= get_theme_mod( 'ocean_llms_lesson_both_sidebars_sidebars_width_unit', '%' );

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
						body.llms-global-layout.content-both-sidebars .content-area {width: '. $bs_global_content_width . $bs_global_content_width_unit . ';}
						body.llms-global-layout.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.llms-global-layout.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_global_content_width . $bs_global_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout LLMS Global sidebars width
			if ( ! empty( $bs_global_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.llms-global-layout.content-both-sidebars .widget-area{width:'. $bs_global_sidebars_width . $bs_global_sidebars_width_unit .';}
						body.llms-global-layout.content-both-sidebars.scs-style .content-area{left:'. $bs_global_sidebars_width . $bs_global_sidebars_width_unit .';}
						body.llms-global-layout.content-both-sidebars.ssc-style .content-area{left:'. $bs_global_sidebars_width * 2 . $bs_global_sidebars_width_unit .';}
					}';
			}

		}

		// LifterLMS Both Sidebars - Course
		if ( 'both-sidebars' == $llms_course_layout ) {

			// Both Sidebars layout LLMS Course page content width
			if ( ! empty( $bs_course_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-course.content-both-sidebars .content-area {width: ' . $bs_course_content_width . $bs_course_content_width_unit . ';}
						body.single-course.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-course.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_course_content_width . $bs_course_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout LLMS Course sidebars width
			if ( ! empty( $bs_course_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-course.content-both-sidebars .widget-area{width:'. $bs_course_sidebars_width . $bs_course_sidebars_width_unit . ';}
						body.single-course.content-both-sidebars.scs-style .content-area{left:'. $bs_course_sidebars_width . $bs_course_sidebars_width_unit . ';}
						body.single-course.content-both-sidebars.ssc-style .content-area{left:'. $bs_course_sidebars_width * 2 . $bs_course_sidebars_width_unit . ';}
					}';
			}

		}

		// LifterLMS Both Sidebars  - Lesson
		if ( 'both-sidebars' == $llms_lesson_layout ) {

			// Both Sidebars layout LLMS Lesson page content width
			if ( ! empty( $bs_lesson_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-lesson.content-both-sidebars .content-area {width: '. $bs_lesson_content_width . $bs_lesson_content_width_unit . ';}
						body.single-lesson.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-lesson.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_lesson_content_width . $bs_lesson_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout LLMS Lesson sidebars width
			if ( ! empty( $bs_lesson_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-lesson.content-both-sidebars .widget-area{width:'. $bs_lesson_sidebars_width . $bs_lesson_sidebars_width_unit .';}
						body.single-lesson.content-both-sidebars.scs-style .content-area{left:'. $bs_lesson_sidebars_width . $bs_lesson_sidebars_width_unit .';}
						body.single-lesson.content-both-sidebars.ssc-style .content-area{left:'. $bs_lesson_sidebars_width * 2 . $bs_lesson_sidebars_width_unit .';}
					}';
			}

		}

		// Return CSS
		if ( ! empty( $css ) ) {
			$output .= '/* LifterLMS */'. $css;
		}

		// Return output css.
		return $output;

	}
}

return new OceanWP_Customize_LifterLMS_CSS();
