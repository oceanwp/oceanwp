<?php
/**
 * OceanWP Breadcrumb Search Class
 * 
 * Module for the search results page.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Search' ) ) {

	/**
	 * Get breadcrumb items for search results.
	 *
	 * @return array
	 */
	class OceanWP_Breadcrumb_Search {

		/**
		 * Get breadcrumb items for search results.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_search() ) {
				return [];
			}

			$search_query = get_search_query();

			// Get the label from the Customizer, fallback to default.
			$label_base = get_theme_mod(
				'ocean_breadcrumb_translation_search',
				esc_html__( 'Search results for', 'oceanwp' )
			);

			$label_base = trim( $label_base );

			// Construct label.
			$label = sprintf(
				'<span class="breadcrumb-search">%s</span>: %s',
				esc_html( $label_base ),
				esc_html( $search_query )
			);

			return [
				[
					'label' => $label,
					'url'   => '',
					'raw'   => true, // Label contains raw HTML.
				],
			];
		}

		/**
		 * Whether this is a terminal breadcrumb (no more modules after it).
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_search();
		}
	}

}
