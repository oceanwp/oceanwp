<?php
/**
 * bbPress class
 *
 * @package OceanWP WordPress theme
 */

// If bbPress plugins doesn't exist then return.
if ( ! class_exists( 'bbPress' ) ) {
	return;
}

if ( ! class_exists( 'OceanWP_bbPress' ) ) :

	class OceanWP_bbPress {

		/**
		 * Setup class.
		 *
		 * @since 1.4.0
		 */
		public function __construct() {
			add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_css' ) );
		}

		/**
		 * Load custom CSS file
		 *
		 * @since 1.4.3
		 */
		public static function add_custom_css() {
			wp_enqueue_style( 'oceanwp-bbpress', OCEANWP_CSS_DIR_URI .'third/bbpress.min.css' );
		}

	}

endif;

return new OceanWP_bbPress();