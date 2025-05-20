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
class OceanWP_Customize_LearnDash_CSS {

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

	public function generate_css($output) {

		// Course Table.
		$heading_color     = get_theme_mod( 'ocean_ld_heading_color' );
		$heading_bg_color  = get_theme_mod( 'ocean_ld_heading_bg_color' );
		$item_color        = get_theme_mod( 'ocean_ld_item_color' );
		$item_hover_color  = get_theme_mod( 'ocean_ld_item_hover_color' );
		$complete_color    = get_theme_mod( 'ocean_ld_complete_color' );
		$incomplete_color  = get_theme_mod( 'ocean_ld_incomplete_color' );
		$progressbar_color = get_theme_mod( 'ocean_ld_progressbar_color' );

		// Both Sidebars - Global.
		$ld_global_layout              = get_theme_mod( 'ocean_ld_global_layout', 'full-width' );
		$bs_global_content_width       = get_theme_mod( 'ocean_ld_global_both_sidebars_content_width' );
		$bs_global_content_width_unit  = get_theme_mod( 'ocean_ld_global_both_sidebars_content_width_unit', '%' );
		$bs_global_sidebars_width      = get_theme_mod( 'ocean_ld_global_both_sidebars_sidebars_width' );
		$bs_global_sidebars_width_unit = get_theme_mod( 'ocean_ld_global_both_sidebars_sidebars_width_unit', '%' );

		// Both Sidebars - Course.
		$ld_course_layout              = get_theme_mod( 'ocean_ld_course_layout', 'left-sidebar' );
		$bs_course_content_width       = get_theme_mod( 'ocean_ld_course_both_sidebars_content_width' );
		$bs_course_content_width_unit  = get_theme_mod( 'ocean_ld_course_both_sidebars_content_width_unit', '%' );
		$bs_course_sidebars_width      = get_theme_mod( 'ocean_ld_course_both_sidebars_sidebars_width' );
		$bs_course_sidebars_width_unit = get_theme_mod( 'ocean_ld_course_both_sidebars_sidebars_width_unit', '%' );

		// Both Sidebars - Lesson.
		$ld_lesson_layout              = get_theme_mod( 'ocean_ld_lesson_layout', 'left-sidebar' );
		$bs_lesson_content_width       = get_theme_mod( 'ocean_ld_lesson_both_sidebars_content_width' );
		$bs_lesson_content_width_unit  = get_theme_mod( 'ocean_ld_lesson_both_sidebars_content_width_unit', '%' );
		$bs_lesson_sidebars_width      = get_theme_mod( 'ocean_ld_lesson_both_sidebars_sidebars_width' );
		$bs_lesson_sidebars_width_unit = get_theme_mod( 'ocean_ld_lesson_both_sidebars_sidebars_width_unit', '%' );

		// Define css var.
		$css = '';

		// Add Heading color.
		if ( ! empty( $heading_color ) ) {
			$css .= '#learndash_lessons #lesson_heading, #learndash_profile .learndash_profile_heading, #learndash_quizzes #quiz_heading, #learndash_lesson_topics_list div > strong{color:' . $heading_color . ';}';
		}

		// Add Heading Background color.
		if ( ! empty( $heading_bg_color ) ) {
			$css .= '#learndash_lessons #lesson_heading, #learndash_profile .learndash_profile_heading, #learndash_quizzes #quiz_heading, #learndash_lesson_topics_list div > strong{background-color:' . $heading_bg_color . ';}';
		}

		// Add Item color.
		if ( ! empty( $item_color ) ) {
			$css .= '#lessons_list > div h4 a, #course_list > div h4 a, #quiz_list > div h4 a, .learndash_topic_dots a, .learndash_topic_dots a > span, #learndash_lesson_topics_list span a{color:' . $item_color . ';}';
		}

		// Add Item Hover color.
		if ( ! empty( $item_hover_color ) ) {
			$css .= '#lessons_list > div h4 a:hover, #lessons_list > div h4 a:hover > span, #course_list > div h4 a:hover, #course_list > div h4 a:hover > span, #quiz_list > div h4 a:hover, #quiz_list > div h4 a:hover > span, .learndash_topic_dots a:hover, .learndash_topic_dots a:hover span, #learndash_lesson_topics_list span a:hover{color:' . $item_hover_color . ';}';
		}

		// Add Complete Icon color.
		if ( ! empty( $complete_color ) ) {
			$css .= '.learndash_navigation_lesson_topics_list .topic-completed span:before, .learndash_navigation_lesson_topics_list ul .topic-completed span:before, .learndash_topic_dots .topic-completed span:before, .learndash_topic_dots ul .topic-completed span:before, .learndash .completed:before, #learndash_profile .completed:before{color:' . $complete_color . ';}';
		}

		// Add Incomplete Icon color.
		if ( ! empty( $incomplete_color ) ) {
			$css .= '.learndash_navigation_lesson_topics_list .topic-notcompleted span:before, .learndash_navigation_lesson_topics_list ul .topic-notcompleted span:before, .learndash_topic_dots .topic-notcompleted span:before, .learndash_topic_dots ul .topic-notcompleted span:before, .learndash .notcompleted:before, #learndash_profile .notcompleted:before{color:' . $incomplete_color . ';}';
		}

		// Add Progress Bar color.
		if ( ! empty( $progressbar_color ) ) {
			$css .= 'dd.course_progress div.course_progress_blue{background-color:' . $progressbar_color . ';}';
		}

		// LearnDash Both Sidebars - Global.
		if ( 'both-sidebars' === $ld_global_layout ) {

			// Both Sidebars layout ld Global page content width.
			if ( ! empty( $bs_global_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.ld-global-layout.content-both-sidebars .content-area {width: ' . $bs_global_content_width . $bs_global_content_width_unit . ';}
						body.ld-global-layout.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.ld-global-layout.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_global_content_width . $bs_global_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout ld Global sidebars width.
			if ( ! empty( $bs_global_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.ld-global-layout.content-both-sidebars .widget-area{width:' . $bs_global_sidebars_width . $bs_global_sidebars_width_unit .';}
						body.ld-global-layout.content-both-sidebars.scs-style .content-area{left:' . $bs_global_sidebars_width . $bs_global_sidebars_width_unit .';}
						body.ld-global-layout.content-both-sidebars.ssc-style .content-area{left:' . $bs_global_sidebars_width * 2 . $bs_global_sidebars_width_unit .';}
					}';
			}
		}

		// LearnDash Both Sidebars - Course.
		if ( 'both-sidebars' === $ld_course_layout ) {

			// Both Sidebars layout ld Course page content width.
			if ( ! empty( $bs_course_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-sfwd-courses.content-both-sidebars .content-area {width: ' . $bs_course_content_width . $bs_course_content_width_unit . ';}
						body.single-sfwd-courses.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-sfwd-courses.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_course_content_width . $bs_course_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout ld Course sidebars width.
			if ( ! empty( $bs_course_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-sfwd-courses.content-both-sidebars .widget-area{width:' . $bs_course_sidebars_width . $bs_course_sidebars_width_unit . ';}
						body.single-sfwd-courses.content-both-sidebars.scs-style .content-area{left:' . $bs_course_sidebars_width . $bs_course_sidebars_width_unit . ';}
						body.single-sfwd-courses.content-both-sidebars.ssc-style .content-area{left:' . $bs_course_sidebars_width * 2 . $bs_course_sidebars_width_unit . ';}
					}';
			}
		}

		// LearnDash Both Sidebars  - Lesson.
		if ( 'both-sidebars' === $ld_lesson_layout ) {

			// Both Sidebars layout ld Lesson page content width.
			if ( ! empty( $bs_lesson_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-sfwd-lessons.content-both-sidebars .content-area, body.single-sfwd-topic.content-both-sidebars .content-area {width: ' . $bs_lesson_content_width . $bs_lesson_content_width_unit . ';}
						body.single-sfwd-lessons.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-sfwd-lessons.content-both-sidebars.ssc-style .widget-area, body.single-sfwd-topic.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-sfwd-topic.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_lesson_content_width . $bs_lesson_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout ld Lesson sidebars width.
			if ( ! empty( $bs_lesson_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-sfwd-lessons.content-both-sidebars .widget-area, body.single-sfwd-topic.content-both-sidebars .widget-area{width:' . $bs_lesson_sidebars_width . $bs_lesson_sidebars_width_unit .';}
						body.single-sfwd-lessons.content-both-sidebars.scs-style .content-area,
						body.single-sfwd-topic.content-both-sidebars.scs-style .content-area{left:' . $bs_lesson_sidebars_width . $bs_lesson_sidebars_width_unit .';}
						body.single-sfwd-lessons.content-both-sidebars.ssc-style .content-area,
						body.single-sfwd-topic.content-both-sidebars.ssc-style .content-area{left:' . $bs_lesson_sidebars_width * 2 . $bs_lesson_sidebars_width_unit .';}
					}';
			}
		}


		// Return CSS
		if ( ! empty( $css ) ) {
			$output .= '/* LearnDash */'. $css;
		}

		// Return output css.
		return $output;

	}
}

return new OceanWP_Customize_LearnDash_CSS();
