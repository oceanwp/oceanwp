<?php
/**
 * Perform all main Easy Digital Downloads configurations for this theme
 *
 * @package OceanWP WordPress theme
 */

// Start and run class
if ( ! class_exists( 'OceanWP_EDD_Config' ) ) {

	class OceanWP_EDD_Config {

		/**
		 * Main Class Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {

			// Include helper functions
			require_once( OCEANWP_INC_DIR .'edd/edd-helpers.php' );

		} // End __construct
	}
}

new OceanWP_EDD_Config();