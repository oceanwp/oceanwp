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
		
			// Always start with the home link.
			$home = new OceanWP_Breadcrumb_Home();
			$this->items = array_merge( $this->items, $home->get_items() );

			// WooCommerce - check early.
			if ( function_exists( 'is_woocommerce' ) && is_woocommerce() ) {
				$woocommerce = new OceanWP_Breadcrumb_WooCommerce();
				$this->items = array_merge( $this->items, $woocommerce->get_items() );
			}

			// Static blog page.
			if ( is_home() && ! is_singular() ) {
				$posts_page_id = get_option( 'page_for_posts' );
				if ( $posts_page_id ) {
					$this->items[] = [
						'label'      => get_the_title( $posts_page_id ),
						'url'        => '',
						'is_current' => true,
					];
				}
				return; // Home + blog page only; skip the rest.
			}

			// Handle other conditions...
			if ( is_singular() && ! is_page() ) {
				$post_handler = new OceanWP_Breadcrumb_Post();
				$this->items = array_merge( $this->items, $post_handler->get_items() );
			} elseif ( is_page() ) {
				$singular = new OceanWP_Breadcrumb_Singular();
				$this->items = array_merge( $this->items, $singular->get_items() );
			} elseif ( is_search() ) {
				$search = new OceanWP_Breadcrumb_Search();
				$this->items = array_merge( $this->items, $search->get_items() );
			} elseif ( is_404() ) {
				$not_found = new OceanWP_Breadcrumb_404();
				$this->items = array_merge( $this->items, $not_found->get_items() );
			} elseif ( is_author() ) {
				$author = new OceanWP_Breadcrumb_Author();
				$this->items = array_merge( $this->items, $author->get_items() );
			} elseif ( is_year() || is_month() || is_day() ) {
				$date = new OceanWP_Breadcrumb_Date();
				$this->items = array_merge( $this->items, $date->get_items() );
			} elseif ( is_category() || is_tag() || is_tax() ) {
				$taxonomy = new OceanWP_Breadcrumb_Taxonomy();
				$this->items = array_merge( $this->items, $taxonomy->get_items() );
			} elseif ( is_archive() ) {
				$archive = new OceanWP_Breadcrumb_Archive();
				$this->items = array_merge( $this->items, $archive->get_items() );
			}
		}

	}

}
