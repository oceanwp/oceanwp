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
	 * Class to generate breadcrumb items.
	 */
	class OceanWP_Breadcrumb_Generator {

		/**
		 * Final array of breadcrumb items.
		 *
		 * @var array
		 */
		protected $items = [];

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

			$this->add_module_items();

			return apply_filters( 'oceanwp_breadcrumb_items', $this->items );
		}

		/**
		 * Reset breadcrumb items if needed.
		 * 
		 * Example usage:
		 * $generator = new OceanWP_Breadcrumb_Generator();
		 * $generator->reset_items();
		 * add_filter( 'oceanwp_breadcrumb_items', 'my_custom_breadcrumb_alter' );
		 * $items = $generator->get_items();
		 * remove_filter( 'oceanwp_breadcrumb_items', 'my_custom_breadcrumb_alter' );
		 *
		 * @return void
		 */
		public function reset_items() {

			$this->items = [];
		}

		/**
		 * Add breadcrumb items from the appropriate module.
		 *
		 * @return void
		 */
		protected function add_module_items() {

			$modules = [
				new OceanWP_Breadcrumb_Home(),
				new OceanWP_Breadcrumb_WooCommerce(),
				new OceanWP_Breadcrumb_First_Page(),
				new OceanWP_Breadcrumb_Singular(),
				new OceanWP_Breadcrumb_Post(),
				new OceanWP_Breadcrumb_Archive(),
				new OceanWP_Breadcrumb_Taxonomy(),
				new OceanWP_Breadcrumb_Author(),
				new OceanWP_Breadcrumb_Search(),
				new OceanWP_Breadcrumb_Date(),
				new OceanWP_Breadcrumb_404(),
			];

			foreach ( $modules as $module ) {
				if ( method_exists( $module, 'get_items' ) ) {
					$this->items = array_merge( $this->items, $module->get_items() );
				}
				if ( method_exists( $module, 'is_terminal' ) && $module->is_terminal() ) {
					return;
				}
			}
		}
	}

}
