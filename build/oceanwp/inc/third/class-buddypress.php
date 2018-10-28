<?php
/**
 * BuddyPress class
 *
 * @package OceanWP WordPress theme
 */

// If BuddyPress plugins doesn't exist then return.
if ( ! class_exists( 'BuddyPress' ) ) {
	return;
}

if ( ! class_exists( 'OceanWP_BuddyPress' ) ) :

	class OceanWP_BuddyPress {

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
			wp_enqueue_style( 'oceanwp-buddypress', OCEANWP_CSS_DIR_URI .'third/buddypress.min.css' );
		}

	}

endif;

return new OceanWP_BuddyPress();