<?php
/**
 * OceanWP Breadcrumb Loader Class
 * 
 * Loads all breadcrumb modules.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Loader' ) ) {

	/**
	 * Registered breadcrumb modules.
	 *
	 * @var array
	 */
	class OceanWP_Breadcrumb_Loader {

		/**
		 * Registered breadcrumb modules.
		 *
		 * @var array
		 */
		private $modules = [];

		/**
		 * Constructor.
		 */
		public function __construct() {
			$this->load_modules();
		}

		/**
		 * Load and register all breadcrumb modules.
		 */
		private function load_modules() {
			$this->modules[] = new OceanWP_Breadcrumb_Home();
			$this->modules[] = new OceanWP_Breadcrumb_First_Page();
			$this->modules[] = new OceanWP_Breadcrumb_Singular();
			$this->modules[] = new OceanWP_Breadcrumb_Post();
			$this->modules[] = new OceanWP_Breadcrumb_Archive();
			$this->modules[] = new OceanWP_Breadcrumb_Taxonomy();
			$this->modules[] = new OceanWP_Breadcrumb_Author();
			$this->modules[] = new OceanWP_Breadcrumb_Search();
			$this->modules[] = new OceanWP_Breadcrumb_Date();
			$this->modules[] = new OceanWP_Breadcrumb_404();
			$this->modules[] = new OceanWP_Breadcrumb_WooCommerce();
		}

		/**
		 * Get the loaded modules.
		 *
		 * @return array
		 */
		public function get_modules() {
			return $this->modules;
		}
	}

}
