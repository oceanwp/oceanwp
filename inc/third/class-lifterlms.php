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

			add_action( 'ocean_main_metaboxes_post_types', array( $this, 'add_metabox' ), 20 );
			add_action( 'after_setup_theme', array( $this, 'theme_support' ) );
			add_filter( 'llms_get_theme_default_sidebar', array( $this, 'llms_sidebar' ) );
			// add_filter( 'ocean_post_layout_class', array( $this, 'layouts' ) );
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

			// Fix for the OceanWP Settings values not saved
			if ( OCEAN_EXTRA_ACTIVE ) {
				add_action( 'llms_metabox_after_save_lifterlms-course-options', array( $this, 'butterbean_fix' ) );
			}

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

		// /**
		//  * Tweaks the post layouts for LifterLMS Course and Lesson
		//  *
		//  * @since 1.0.0
		//  */
		// public static function layouts( $class ) {
		// 	if ( is_singular( 'course' ) || is_singular( 'lesson' ) ) {
		// 		$class = 'full-width';
		// 	}
		// 	return $class;
		// }


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

				<?php do_action( 'ocean_display_sidebar' ); ?>

			</div><!-- #content-wrap -->

			<?php do_action( 'ocean_after_content_wrap' );
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
		 * Fix for the OceanWP Settings values not saved
		 *
		 * @since 1.2.10
		 */
		public static function butterbean_fix( $post_id ) {
			butterbean()->update( $post_id );
		}

		/**
		 * Add typography options for the LifterLMS product title
		 *
		 * @since 1.0.0
		 */
		public static function typography_settings( $settings ) {
			$settings['lifterlms_course_title'] = array(
				'label' 				=> esc_html__( 'LifterLMS Title', 'oceanwp' ),
				'target' 				=> '.llms-loop-title',
				'defaults' 				=> array(
					'font-size' 		=> '24',
					'color' 			=> '#333333',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['lifterlms_course_price'] = array(
				'label' 				=> esc_html__( 'LifterLMS Price', 'oceanwp' ),
				'target' 				=> '.llms-access-plan-pricing .lifterlms-price',
				'defaults' 				=> array(
					'font-size' 		=> '36',
					'line-height' 		=> '1',
					'letter-spacing' 	=> '0',
				),
			);

			$settings['lifterlms_product_add_to_cart'] = array(
				'label'                 => esc_html__( 'LifterLMS Product Add To Cart', 'oceanwp' ),
				'target'                => '.lifterlms_downloads_list .button, .lifterlms-add-to-cart',
				'exclude' 				=> array( 'font-color' ),
				'defaults'              => array(
					'font-size'         => '12',
					'line-height'       => '1.5',
					'letter-spacing'    => '1',
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
				'.llms-loop-item-content .llms-loop-title:hover',
				'.llms-lesson-preview.is-free .llms-lesson-complete', 
				'.llms-lesson-preview.is-complete .llms-lesson-complete',
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
				'.llms-checkout-section',
				'.llms-notice',
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