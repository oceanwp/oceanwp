<?php
/**
 * LearnDash class
 *
 * @package OceanWP WordPress theme
 */

// If LearnDash plugins doesn't exist then return.
if ( ! class_exists( 'SFWD_LMS' ) ) {
	return;
}

if ( ! class_exists( 'OceanWP_LearnDash' ) ) :

	class OceanWP_LearnDash {

		/**
		 * Setup class.
		 *
		 * @since 1.2.10
		 */
		public function __construct() {

			// Body classes
			add_filter( 'body_class', array( $this, 'body_class' ) );

			add_action( 'ocean_main_metaboxes_post_types', array( $this, 'add_metabox' ), 20 );
			// Post Layout Class
			add_filter( 'ocean_post_layout_class', array( $this, 'layouts' ) );
			// Set correct both sidebars layout style
			add_filter( 'ocean_both_sidebars_style', array( $this, 'bs_class' ) );
			// Set correct mobile sidebar order
			add_filter( 'ocean_sidebar_order', array( $this, 'sidebar_order' ) );

			add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_scripts' ) );

			// Distraction free learning
			add_filter( 'ocean_display_top_bar', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_navigation', array( $this, 'distraction_free' ), 11 );
			add_filter( 'osh_enable_sticky_header', array( $this, 'distraction_free' ), 11 );
			add_filter( 'osp_display_side_panel', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_page_header', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_footer_widgets', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_scroll_up_button', array( $this, 'distraction_free' ), 11 );
			add_filter( 'osh_header_sticky_logo', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ofc_display_footer_callout', array( $this, 'distraction_free' ), 11 );

			// Define accents
			add_filter( 'ocean_primary_texts', array( $this, 'primary_texts' ) );
			add_filter( 'ocean_primary_borders', array( $this, 'primary_borders' ) );
			add_filter( 'ocean_primary_backgrounds', array( $this, 'primary_backgrounds' ) );
			add_filter( 'ocean_hover_primary_backgrounds', array( $this, 'hover_primary_backgrounds' ) );
			add_filter( 'ocean_border_color_elements', array( $this, 'border_color_elements' ) );

			// Add new typography settings
			add_filter( 'ocean_typography_settings', array( $this, 'typography_settings' ) );
		}

		/**
		 * Add the OceanWP Settings metabox into the custom post types
		 *
		 * @since 1.2.10
		 */
		public static function add_metabox( $types ) {
			$types[] = 'sfwd-courses';
			$types[] = 'sfwd-lessons';
			$types[] = 'sfwd-quiz';
			$types[] = 'sfwd-topic';
			return $types;
		}

		/**
		 * Body classes
		 *
		 * @since 1.5.0
		 */
		public static function body_class( $classes ) {
			
			if( ( is_singular( array( 'sfwd-courses', 'sfwd-lessons', 'sfwd-quiz', 'sfwd-topic' ) ) )
				 && true == get_theme_mod( 'ocean_ld_distraction_free_learning', false ) ) {
				$classes[] = 'ld-distraction-free';
			}

			if ( is_singular( array( 'sfwd-courses', 'sfwd-lessons', 'sfwd-quiz', 'sfwd-topic' ) ) || is_tax( array( 'ld_course_category', 'ld_course_tag', 'ld_lesson_category', 'ld_lesson_tag', 'ld_topic_category', 'ld_topic_tag' ) ) ) {
				$classes[] = 'ld-global-layout';
			}

			return $classes;

		}

		/**
		 * Tweaks the post layouts for LearnDash Course and Lesson
		 *
		 * @since 1.0.0
		 */
		public static function layouts( $class ) {
			if ( is_singular( array( 'sfwd-quiz' ) ) || is_tax( array( 'ld_course_category', 'ld_course_tag', 'ld_lesson_category', 'ld_lesson_tag', 'ld_topic_category', 'ld_topic_tag' ) ) ) {
				$class = get_theme_mod( 'ocean_ld_global_layout', 'full-width' );
			}
			elseif ( is_singular( array( 'sfwd-lessons', 'sfwd-topic' ) ) ) {
				$class = get_theme_mod( 'ocean_ld_lesson_layout', 'left-sidebar' );
			} elseif ( is_singular( 'sfwd-courses' ) ) {
				$class = get_theme_mod( 'ocean_ld_course_layout', 'left-sidebar' );
			}
			return $class;
		}

		/**
		 * Set correct both sidebars layout style.
		 *
		 * @since 1.4.0
		 */
		public static function bs_class( $class ) {
			if ( is_singular( array( 'sfwd-quiz', 'sfwd-topic' ) ) || is_tax( array( 'ld_course_category', 'ld_course_tag', 'ld_lesson_category', 'ld_lesson_tag', 'ld_topic_category', 'ld_topic_tag' ) ) ) {
				$class = get_theme_mod( 'ocean_ld_global_both_sidebars_style', 'scs-style' );
			}
			elseif ( is_singular( array( 'sfwd-lessons', 'sfwd-topic' ) ) ) {
				$class = get_theme_mod( 'ocean_ld_lesson_both_sidebars_style', 'scs-style' );
			} elseif ( is_singular( 'sfwd-courses' ) ) {
				$class = get_theme_mod( 'ocean_ld_course_both_sidebars_style', 'scs-style' );
			}
			return $class;
		}

		/**
		 * Set correct mobile sidebar order.
		 *
		 * @since 1.6
		 */
		public static function sidebar_order( $order ) {
			if ( is_singular( array( 'sfwd-quiz' ) ) || is_tax( array( 'ld_course_category', 'ld_course_tag', 'ld_lesson_category', 'ld_lesson_tag', 'ld_topic_category', 'ld_topic_tag' ) ) ) {
				$order = get_theme_mod( 'ocean_ld_global_sidebar_order', 'content-sidebar' );
			}
			elseif ( is_singular( array( 'sfwd-lessons', 'sfwd-topic' ) ) ) {
				$order = get_theme_mod( 'ocean_ld_lesson_sidebar_order', 'content-sidebar' );
			} elseif ( is_singular( 'sfwd-courses' ) ) {
				$order = get_theme_mod( 'ocean_ld_course_sidebar_order', 'content-sidebar' );
			}
			return $order;
		}

		/**
		 * Add Custom LLMS scripts.
		 *
		 * @since 1.0.0
		 */
		public static function add_custom_scripts() {

			wp_enqueue_style( 'oceanwp-learndash', OCEANWP_CSS_DIR_URI .'learndash/learndash.min.css' );
		}

		/**
		 * Distraction free learning
		 *
		 * @since 1.5.0
		 */
		public static function distraction_free( $return ) {

			if( ( is_singular( array( 'sfwd-courses', 'sfwd-lessons', 'sfwd-quiz', 'sfwd-topic' ) ) )
				&& true == get_theme_mod( 'ocean_ld_distraction_free_learning', false ) ) {
				$return = false;
			}

			return $return;
		}

		/**
		 * Add typography options for the LearnDash product title
		 *
		 * @since 1.0.0
		 */
		public static function typography_settings( $settings ) {
			$settings['learndash_course_title'] = array(
				'label' 				=> esc_html__( 'LearnDash Titles', 'oceanwp' ),
				'target' 				=> '.single-sfwd-courses .entry-title, .single-sfwd-lessons .entry-title, .single-sfwd-topic .entry-title, .single-sfwd-quiz .entry-title, .single-sfwd-certificates .entry-title, .single-sfwd-assignment .entry-title',
				'defaults' 				=> array(
					'font-size' 		=> '34',
					'color' 			=> '#333',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['learndash_table_heading'] = array(
				'label' 				=> esc_html__( 'LearnDash Table Heading', 'oceanwp' ),
				'target' 				=> '#learndash_lessons #lesson_heading, #learndash_profile .learndash_profile_heading, #learndash_quizzes #quiz_heading, #learndash_lesson_topics_list div>strong',
				'defaults' 				=> array(
					'font-size' 		=> '18',
					'color' 			=> '#fff',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['learndash_table_item'] = array(
				'label' 				=> esc_html__( 'LearnDash Table Item', 'oceanwp' ),
				'target' 				=> '#lessons_list>div h4>a, #course_list>div h4>a, #quiz_list>div h4>a',
				'defaults' 				=> array(
					'font-size' 		=> '34',
					'color' 			=> '#333',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['learndash_buy_button'] = array(
				'label'                 => esc_html__( 'LearnDash Take Course Button', 'oceanwp' ),
				'target'                => '.learndash_checkout_button .btn-join',
				'exclude' 				=> array( 'font-color' ),
				'defaults'              => array(
					'font-size'         => '12',
					'line-height'       => '1',
				),
			);

			return $settings;
		}

		/**
		 * Adds color accents for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_texts( $texts ) {
			return array_merge( array(
				'.learndash a:hover',
				'#learndash_lessons a:hover', 
				'#learndash_quizzes a:hover', 
				'.expand_collapse a:hover', 
				'.learndash_topic_dots a:hover', 
				'.learndash_topic_dots a:hover > span', 
				'#learndash_lesson_topics_list span a:hover',
				'.learndash .completed:before', 
				'.learndash .notcompleted:before', 
				'#learndash_profile .completed:before', 
				'#learndash_profile .notcompleted:before',
			), $texts );
		}

		/**
		 * Adds border accents for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_borders( $borders ) {
			return array_merge( array(
				'.learndash-instructor-info .learndash-instructors .learndash-author' => array( 'top' ),
				'.learndash-notification' => array( 'top' ),
				'.learndash-instructor-info .learndash-instructors .learndash-author .avatar',
			), $borders );
		}

		/**
		 * Adds background accents for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_backgrounds( $backgrounds ) {
			return array_merge( array(
				'.learndash-button-action',
				'#learndash_lessons #lesson_heading', 
				'#learndash_profile .learndash_profile_heading', 
				'#learndash_quizzes #quiz_heading', 
				'#learndash_lesson_topics_list div>strong',
				'dd.course_progress div.course_progress_blue',
				'body #ld_course_list .btn',
			), $backgrounds );
		}

		/**
		 * Adds background hover accents for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function hover_primary_backgrounds( $hover ) {
			return array_merge( array(
				'.learndash-button-action:hover',
				'body #ld_course_list .btn:hover',
			), $hover );
		}

		/**
		 * Adds border color elements for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function border_color_elements( $elements ) {
			return array_merge( array(
				'.learndash-sd-notification-center .learndash-notification',
			), $elements );
		}

	}

endif;

return new OceanWP_LearnDash();