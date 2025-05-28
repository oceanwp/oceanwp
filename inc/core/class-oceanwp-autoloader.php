<?php
/**
 * OceanWP Core Classes Autoloader
 * 
 * Autoloads all OceanWP_* prefixed classes from the core folder.
 * 
 * @package OceanWP WordPress Theme
 * @link https://oceanwp.org/
 * @author OceanWP
 * @since 4.2.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Core_Autoloader' ) ) {

	/**
	 * Autoloader for OceanWP Core classes.
	 */
	class OceanWP_Core_Autoloader {

		private static $instance = null;

		/**
		 * Allowed subdirectories within /inc/core/.
		 * 
		 * Manually define allowed folders and subfolders:
		 * eg. 'folder' and 'folder/subfolder/'
		 *
		 * @var array
		 */
		private $allowed_dirs = [
			'schema',
		];

		private function __construct() {
			spl_autoload_register( [ $this, 'autoload' ] );
		}

		/**
		 * Returns the singleton instance of the class.
		 *
		 * @return OceanWP_Core_Autoloader
		 */
		public static function instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Autoload handler for OceanWP_* classes.
		 *
		 * @param string $class The class name.
		 */
		public function autoload( $class ) {
			if ( strpos( $class, 'OceanWP_' ) !== 0 ) {
				return;
			}

			// Reject invalid characters (block ../, $, etc.).
			if ( preg_match( '/[^A-Za-z0-9_\\\\]/', $class ) ) {
				return;
			}

			// Sanitize and convert class name to file name.
			$cleaned = preg_replace( '/[^A-Za-z0-9_]/', '', $class );

			// Convert to lowercase dashed format (eg. OceanWP_Schema_Loader → oceanwp-core-schema-loader).
			$filename_core = 'class-core-' . strtolower( str_replace( '_', '-', str_replace( 'OceanWP_', '', $cleaned ) ) ) . '.php';
			$filename_full = 'class-' . strtolower( str_replace( '_', '-', $cleaned ) ) . '.php';

			$base_path = OCEANWP_INC_DIR . 'core/';

			foreach ( $this->allowed_dirs as $folder ) {
				$path = trailingslashit( $base_path . $folder );

				foreach ( [ $filename_full, $filename_core ] as $file ) {
					$filepath = $path . $file;

					if ( file_exists( $filepath ) ) {
						require_once $filepath;
						return;
					}
				}
			}
			// Debug log for missing class files (uncomment the line below for development).
			// error_log( '[OceanWP Autoloader] Class not found: ' . $class );
		}
	}
}
