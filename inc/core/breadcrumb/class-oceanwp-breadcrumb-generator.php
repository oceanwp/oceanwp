<?php
/**
 * OceanWP Breadcrumb Generator Class
 * 
 * Main breadcrumb generator class.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Generator' ) ) {

	/**
	 * Class to generate breadcrumb items and manage modules.
	 */
	class OceanWP_Breadcrumb_Generator {

		/**
		 * Final array of breadcrumb items.
		 *
		 * @var array
		 */
		protected $items = [];

		/**
		 * Registered breadcrumb modules.
		 *
		 * @var array
		 */
		protected $modules = [];

		/**
		 * Get the breadcrumb items if enabled.
		 *
		 * @return array
		 */
		public function get_items() {
			if ( ! get_theme_mod( 'ocean_breadcrumbs', true ) ) {
				return [];
			}

			$this->items = [];
			$this->load_modules();

			foreach ( $this->modules as $module ) {
				$class = get_class( $module );

				$is_terminal = method_exists( $module, 'is_terminal' ) && $module->is_terminal();
				// Line below added for testing purposes. Comment out to check which module is loaded on which page.
				//error_log( sprintf( '[Breadcrumb] Checking module: %s — Terminal: %s', $class, $is_terminal ? 'yes' : 'no' ) );

				if ( method_exists( $module, 'get_items' ) ) {
					$this->items = array_merge( $this->items, $module->get_items() );
				}

				if ( $is_terminal ) {
					break;
				}
			}

			return apply_filters( 'oceanwp_breadcrumb_items', $this->items );
		}

		/**
		 * Reset breadcrumb items manually.
		 *
		 * @return void
		 */
		public function reset_items() {
			$this->items = [];
		}

		/**
		 * Load all breadcrumb modules.
		 *
		 * @return void
		 */
		protected function load_modules() {
			$this->modules = [];

			// WooCommerce first if active.
			if ( defined( 'OCEANWP_WOOCOMMERCE_ACTIVE' ) && OCEANWP_WOOCOMMERCE_ACTIVE ) {
				$this->modules[] = new OceanWP_Breadcrumb_WooCommerce();
			}

			// Load remaining modules.
			$this->modules = array_merge( $this->modules, [
				new OceanWP_Breadcrumb_Home(),
				new OceanWP_Breadcrumb_First_Page(),
				new OceanWP_Breadcrumb_Post(),
				new OceanWP_Breadcrumb_Singular(),
				new OceanWP_Breadcrumb_Author(),
				new OceanWP_Breadcrumb_Taxonomy(),
				new OceanWP_Breadcrumb_Date(),
				new OceanWP_Breadcrumb_Archive(),
				new OceanWP_Breadcrumb_Search(),
				new OceanWP_Breadcrumb_404(),
			]);

			// Load Portfolio module if Ocean Portfolio plugin is active.
			if ( class_exists( 'Ocean_Portfolio' ) ) {
				$this->modules[] = new OceanWP_Breadcrumb_Portfolio();
			}
		}

		/**
		 * Get the loaded modules.
		 *
		 * @return array
		 */
		public function get_modules() {
			return $this->modules;
		}

		/**
		 * Reset modules if needed (eg. for dynamic reloading).
		 *
		 * @return void
		 */
		public function reset_modules() {
			$this->modules = [];
		}
	}
}
