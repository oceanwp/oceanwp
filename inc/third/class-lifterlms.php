<?php
/**
 * LifterLMS class
 *
 * @package OceanWP WordPress theme
 */

// If LifterLMS plugins doesn't exist then return.
if ( ! class_exists( 'LifterLMS' ) ) {
	return;
}

if ( ! class_exists( 'OceanWP_LifterLMS' ) ) :

	class OceanWP_LifterLMS {

		/**
		 * Setup class.
		 *
		 * @since 1.2.10
		 */
		public function __construct() {

			// Body classes
			add_filter( 'body_class', array( $this, 'body_class' ) );

			add_action( 'ocean_main_metaboxes_post_types', array( $this, 'add_metabox' ), 20 );
			add_action( 'after_setup_theme', array( $this, 'theme_support' ) );
			add_filter( 'llms_get_theme_default_sidebar', array( $this, 'llms_sidebar' ) );
			// Post Layout Class
			add_filter( 'ocean_post_layout_class', array( $this, 'layouts' ) );
			// Set correct both sidebars layout style
			add_filter( 'ocean_both_sidebars_style', array( $this, 'bs_class' ) );
			// Set correct mobile sidebar order
			add_filter( 'ocean_sidebar_order', array( $this, 'sidebar_order' ) );
			add_filter( 'lifterlms_show_page_title', '__return_false' );

			// Remove Content Wrappers
			remove_action( 'lifterlms_before_main_content', 'lifterlms_output_content_wrapper', 10 );
			remove_action( 'lifterlms_after_main_content', 'lifterlms_output_content_wrapper_end', 10 );
			remove_action( 'lifterlms_sidebar', 'lifterlms_get_sidebar' );
			// Add Content Wrappers
			add_action( 'lifterlms_before_main_content', array( $this, 'before_main_content_start' ) );
			add_action( 'lifterlms_after_main_content', array( $this, 'before_main_content_end' ) );

			add_filter( 'llms_builder_register_custom_fields', array( $this, 'quiz_settings' ) );

			add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_scripts' ) );

			add_action( 'wp', array( $this, 'course_details' ) );

			// Distraction free checkout
			add_filter( 'ocean_display_top_bar', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_navigation', array( $this, 'distraction_free' ), 11 );
			add_filter( 'osh_enable_sticky_header', array( $this, 'distraction_free' ), 11 );
			add_filter( 'osp_display_side_panel', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_page_header', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_footer_widgets', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ocean_display_scroll_up_button', array( $this, 'distraction_free' ), 11 );
			add_filter( 'osh_header_sticky_logo', array( $this, 'distraction_free' ), 11 );
			add_filter( 'ofc_display_footer_callout', array( $this, 'distraction_free' ), 11 );

			// Grid.
			add_filter( 'lifterlms_loop_columns', array( $this, 'archive_columns' ) );
			add_filter( 'llms_get_loop_list_classes', array( $this, 'archive_responsive_columns' ), 999 );

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
			$types[] = 'course';
			$types[] = 'lesson';
			$types[] = 'llms_question';
			$types[] = 'llms_review';
			return $types;
		}

		/**
		 * Declare explicit theme support for LifterLMS course and lesson sidebars
		 *
		 * @since 1.2.10
		 */
		public static function theme_support() {
			add_theme_support( 'lifterlms-sidebars' );
		}

		/**
		 * Display LifterLMS Course and Lesson sidebars
		 * on courses and lessons in place of the sidebar returned by
		 * this function
		 *
		 * @since 1.2.10
		 */
		public static function llms_sidebar( $id ) {
			$id = 'sidebar';
			return $id;
		}

		/**
		 * Body classes
		 *
		 * @since 1.5.0
		 */
		public static function body_class( $classes ) {

			// Distraction free class
			if ( is_llms_checkout()
					&& true == get_theme_mod( 'ocean_llms_distraction_free_checkout', false ) ) {
				$classes[] = 'llms-distraction-free';
			}

			if( ( is_course() || is_lesson() ) 
				&& true == get_theme_mod( 'ocean_llms_distraction_free_learning', false ) ) {
				$classes[] = 'llms-distraction-free';	
			}

			if( is_llms_account_page() || is_membership() || is_memberships() || is_quiz() || is_courses() || is_tax( array( 'course_cat', 'course_tag', 'course_difficulty', 'course_track', 'membership_tag', 'membership_cat' ) ) ) {
				$classes[] = 'llms-global-layout';
			}
			return $classes;

		}

		/**
		 * Tweaks the post layouts for LifterLMS Course and Lesson
		 *
		 * @since 1.0.0
		 */
		public static function layouts( $class ) {
			if ( is_llms_account_page() || is_membership() || is_memberships() || is_quiz() || is_courses() || is_tax( array( 'course_cat', 'course_tag', 'course_difficulty', 'course_track', 'membership_tag', 'membership_cat' ) ) ) {
				$class = get_theme_mod( 'ocean_llms_global_layout', 'full-width' );
			}
			elseif ( is_lesson() ) {
				$class = get_theme_mod( 'ocean_llms_lesson_layout', 'left-sidebar' );
			} elseif ( is_course() ) {
				$class = get_theme_mod( 'ocean_llms_course_layout', 'left-sidebar' );
			}
			return $class;
		}

		/**
		 * Set correct both sidebars layout style.
		 *
		 * @since 1.4.0
		 */
		public static function bs_class( $class ) {
			if ( is_llms_account_page() || is_membership() || is_memberships() || is_quiz() || is_courses() || is_tax( array( 'course_cat', 'course_tag', 'course_difficulty', 'course_track', 'membership_tag', 'membership_cat' ) ) ) {
				$class = get_theme_mod( 'ocean_llms_global_both_sidebars_style', 'scs-style' );
			}
			elseif ( is_lesson() ) {
				$class = get_theme_mod( 'ocean_llms_lesson_both_sidebars_style', 'scs-style' );
			} elseif ( is_course() ) {
				$class = get_theme_mod( 'ocean_llms_course_both_sidebars_style', 'scs-style' );
			}
			return $class;
		}

		/**
		 * Set correct mobile sidebar order.
		 *
		 * @since 1.6
		 */
		public static function sidebar_order( $order ) {
			if ( is_llms_account_page() || is_membership() || is_memberships() || is_quiz() || is_courses() || is_tax( array( 'course_cat', 'course_tag', 'course_difficulty', 'course_track', 'membership_tag', 'membership_cat' ) ) ) {
				$order = get_theme_mod( 'ocean_llms_global_sidebar_order', 'content-sidebar' );
			}
			elseif ( is_lesson() ) {
				$order = get_theme_mod( 'ocean_llms_lesson_sidebar_order', 'content-sidebar' );
			} elseif ( is_course() ) {
				$order = get_theme_mod( 'ocean_llms_course_sidebar_order', 'content-sidebar' );
			}
			return $order;
		}

		/**
		 * Add Custom LLMS scripts.
		 *
		 * @since 1.0.0
		 */
		public static function add_custom_scripts() {

			wp_enqueue_style( 'oceanwp-llms', OCEANWP_CSS_DIR_URI .'llms/llms.min.css' );
		}

		/**
		 * Add start of wrapper
		 *
		 * @since 1.2.0
		 * @return void
		 */
		function before_main_content_start() {

			do_action( 'ocean_before_content_wrap' ); ?>

			<div id="content-wrap" class="container clr">

				<?php do_action( 'ocean_before_primary' ); ?>

				<div id="primary" class="content-area clr">

					<?php do_action( 'ocean_before_content' ); ?>

					<div id="content" class="site-content clr">

						<?php do_action( 'ocean_before_content_inner' );
		}

		/**
		 * Add end of wrapper
		 *
		 * @since 1.2.0
		 * @return void
		 */
		function before_main_content_end() {
			?>
						</div><!-- #content -->

					<?php do_action( 'ocean_after_content' ); ?>

				</div><!-- #primary -->

				<?php do_action( 'ocean_after_primary' ); ?>

			</div><!-- #content-wrap -->

			<?php do_action( 'ocean_after_content_wrap' );
		}

		/**
		 * Course Details
		 *
		 * @since 1.2.0
		 * @return void
		 */
		function course_details(){
			$details = get_theme_mod( 'ocean_llms_course_details', array( 'image', 'description', 'meta', 'author', 'progress', 'syllabus' ) );

			if (is_string($details)) {
				$details = json_decode($details, true);
			}

			if( in_array( 'image', $details) ) {

			}

			if( ! in_array( 'description', $details ) ) {
				add_filter( 'the_excerpt', '__return_empty_string', 9 );
				add_filter( 'the_content', '__return_empty_string', 9 );
			}

			if( ! in_array( 'meta', $details) ) {
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_length', 10 );
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_difficulty', 20 );
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_course_tracks', 25 );
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_course_categories', 30 );
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_course_tags', 35 );
			}

			if( ! in_array( 'author', $details) ) {
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_course_author', 40 );
			}

			if( ! ( in_array( 'meta', $details ) && in_array( 'author', $details ) ) ){
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_meta_wrapper_start', 5 );
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_meta_wrapper_end', 50 );
			}

			if( ! in_array( 'progress', $details) ) {
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_course_progress', 60 );
			}

			if( ! in_array( 'syllabus', $details) ) {
				remove_action( 'lifterlms_single_course_after_summary', 'lifterlms_template_single_syllabus', 90 );
			}
		}

		/**
		 * Add quiz custom fields
		 *
		 * @since 1.1.15
		 * @return void
		 */
		function quiz_settings( $fields ) {
			$fields['quiz']['layout'] = array(
				'title' => esc_html__( 'OceanWP Theme Setting', 'oceanwp' ),
				'toggleable' => true,
				'fields' => array(
					array(
						array(
							'attribute' => 'ocean_post_layout',
							'label'     => esc_html__( 'Layout', 'oceanwp' ),
							'type'      => 'select',
							'options' => array(
								''              => esc_html__( 'Default', 'oceanwp' ),
								'right-sidebar' => esc_html__( 'Right Sidebar', 'oceanwp' ),
								'left-sidebar'  => esc_html__( 'Left Sidebar', 'oceanwp' ),
								'full-width'    => esc_html__( 'Full Width', 'oceanwp' ),
								'full-screen'   => esc_html__( 'Full Screen', 'oceanwp' ),
								'both-sidebars' => esc_html__( 'Both Sidebar', 'oceanwp' ),
							),
						),
					),
				),
			);
			return $fields;
		}

		/**
		 * Distraction free on cart/checkout
		 *
		 * @since 1.5.0
		 */
		public static function distraction_free( $return ) {

			if ( is_llms_checkout()
					&& true == get_theme_mod( 'ocean_llms_distraction_free_checkout', false ) ) {
				$return = false;
			}

			if( ( is_course() || is_lesson() )
				&& true == get_theme_mod( 'ocean_llms_distraction_free_learning', false ) ) {
				$return = false;
			}

			return $return;
		}

		/**
		 * LLMS Courses and Membership Page Columns.
		 *
		 * @since 1.0.0
		 * @param  number $columns default number of columns (3).
		 * @return number
		 */
		function archive_columns( $columns ) {
			if ( is_post_type_archive( 'course' ) || is_tax( array( 'course_cat', 'course_tag', 'course_difficulty', 'course_track' ) ) ) {
				$columns = get_theme_mod( 'ocean_llms_courses_columns', 3 );
				$columns = $columns ? $columns : '3';
				return $columns;
			} elseif ( is_post_type_archive( 'llms_membership' ) || is_tax( array( 'membership_tag', 'membership_cat' ) ) ) {
				$columns = get_theme_mod( 'ocean_llms_membership_columns', 3 );
				$columns = $columns ? $columns : '3';
				return $columns;
			}
		}

		/**
		 * LLMS Courses and Membership Page Responsive Columns.
		 *
		 * @since 1.0.0
		 * @param  number $columns default number of columns (3).
		 * @return number
		 */
		function archive_responsive_columns( $classes ) {
			if ( is_post_type_archive( 'course' ) || is_tax( array( 'course_cat', 'course_tag', 'course_difficulty', 'course_track' ) ) ) {
				// Responsive columns
				$tablet_columns    = get_theme_mod( 'ocean_llms_tablet_courses_columns' );
				$mobile_columns    = get_theme_mod( 'ocean_llms_mobile_courses_columns' );

				if ( ! empty( $tablet_columns ) ) {
					$classes[] = 'tablet-col';
					$classes[] = 'tablet-' . $tablet_columns . '-col';
				}
				if ( ! empty( $mobile_columns ) ) {
					$classes[] = 'mobile-col';
					$classes[] = 'mobile-' . $mobile_columns . '-col';
				}
			} elseif ( is_post_type_archive( 'llms_membership' ) || is_tax( array( 'membership_tag', 'membership_cat' ) ) ) {
				// Responsive columns
				$tablet_columns    = get_theme_mod( 'ocean_llms_tablet_membership_columns' );
				$mobile_columns    = get_theme_mod( 'ocean_llms_mobile_membership_columns' );

				if ( ! empty( $tablet_columns ) ) {
					$classes[] = 'tablet-col';
					$classes[] = 'tablet-' . $tablet_columns . '-col';
				}
				if ( ! empty( $mobile_columns ) ) {
					$classes[] = 'mobile-col';
					$classes[] = 'mobile-' . $mobile_columns . '-col';
				}
			}

			return $classes;
		}

		/**
		 * Add typography options for the LifterLMS product title
		 *
		 * @since 1.0.0
		 */
		public static function typography_settings( $settings ) {
			$settings['lifterlms_course_title'] = array(
				'label' 				=> esc_html__( 'LifterLMS Course/Lesson Title', 'oceanwp' ),
				'target' 				=> '.single-course .entry-title, .single-lesson .entry-title',
				'defaults' 				=> array(
					'font-size' 		=> '34',
					'color' 			=> '#333',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['lifterlms_section_title'] = array(
				'label' 				=> esc_html__( 'LifterLMS Section Title', 'oceanwp' ),
				'target' 				=> '.llms-syllabus-wrapper .llms-section-title',
				'defaults' 				=> array(
					'font-size' 		=> '18',
					'color' 			=> '#fff',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['lifterlms_lesson_title'] = array(
				'label' 				=> esc_html__( 'LifterLMS Lesson Title', 'oceanwp' ),
				'target' 				=> '.single-lesson .entry-title',
				'defaults' 				=> array(
					'font-size' 		=> '34',
					'color' 			=> '#333',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['lifterlms_buy_button'] = array(
				'label'                 => esc_html__( 'LifterLMS Buy Button', 'oceanwp' ),
				'target'                => '.llms-access-plan-footer .llms-button-action',
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
				'.llms-course-navigation .llms-pre-text',
				'.llms-lesson-preview.is-free .llms-lesson-complete', 
				'.llms-lesson-preview.is-complete .llms-lesson-complete',
				'.llms-loop-item-content .llms-loop-title:hover',
				'.llms-meta-info .llms-meta a:hover',
			), $texts );
		}

		/**
		 * Adds border accents for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_borders( $borders ) {
			return array_merge( array(
				'.llms-instructor-info .llms-instructors .llms-author' => array( 'top' ),
				'.llms-notification' => array( 'top' ),
				'.llms-instructor-info .llms-instructors .llms-author .avatar',
			), $borders );
		}

		/**
		 * Adds background accents for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_backgrounds( $backgrounds ) {
			return array_merge( array(
				'.llms-button-action',
				'.llms-button-secondary',
				'.llms-field-button',
				'.llms-button-primary',
				'.llms-progress .progress-bar-complete',
				'.llms-instructor-info .llms-instructors .llms-author .avatar',
				'.llms-syllabus-wrapper .llms-section-title',
				'.llms-access-plan-title',
				'.llms-access-plan .stamp',
				'.llms-lesson-preview .llms-icon-free',
				'.llms-student-dashboard .llms-status.llms-active', 
				'.llms-student-dashboard .llms-status.llms-completed', 
				'.llms-student-dashboard .llms-status.llms-txn-succeeded',
				'.llms-checkout-wrapper .llms-form-heading',
			), $backgrounds );
		}

		/**
		 * Adds background hover accents for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function hover_primary_backgrounds( $hover ) {
			return array_merge( array(
				'.llms-button-action:hover',
				'.llms-button-secondary:hover',
				'.llms-field-button:hover',
				'.llms-button-primary:hover',
				'.llms-button-action:focus',
				'.llms-button-secondary:focus',
				'.llms-field-button:focus',
				'.llms-button-primary:focus',
			), $hover );
		}

		/**
		 * Adds border color elements for LLMS styles.
		 *
		 * @since 1.0.0
		 */
		public static function border_color_elements( $elements ) {
			return array_merge( array(
				'.llms-sd-notification-center .llms-notification',
			), $elements );
		}

	}

endif;

return new OceanWP_LifterLMS();