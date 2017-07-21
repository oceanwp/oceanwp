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
			add_filter( 'ocean_post_layout_class', array( $this, 'layouts' ) );
		}

		/**
		 * Add the OceanWP Settings metabox into the custom post types
		 *
		 * @since 1.2.10
		 */
		public static function add_metabox( $types ) {
			$types[] = 'course';
			$types[] = 'lesson';
			$types[] = 'llms_quiz';
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
		 * Tweaks the post layouts for LifterLMS Course and Lesson
		 *
		 * @since 1.0.0
		 */
		public static function layouts( $class ) {
			if ( is_singular( 'course' ) || is_singular( 'lesson' ) ) {
				$class = 'full-width';
			}
			return $class;
		}

	}

endif;

return new OceanWP_LifterLMS();