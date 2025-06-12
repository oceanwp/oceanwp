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
	 */
	class OceanWP_Breadcrumb_Search {

		/**
		 * Get breadcrumb items for search result pages.
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

			// Construct the base label (with raw span).
			$label = sprintf(
				'<span class="breadcrumb-search">%s</span>: %s',
				esc_html( $label_base ),
				esc_html( $search_query )
			);

			$items = [
				[
					'label'      => $label,
					'url'        => '',
					'raw'        => true,
					'is_current' => ! is_paged(),
					'is_hidden'  => false,
				],
			];

			// Add pagination label if needed.
			if ( is_paged() ) {
				$items[] = [
					/* translators: %d: comment page number in breadcrumb trail */
					'label'      => sprintf( esc_html_x( 'Page %d', 'Breadcrumb: paged items trail', 'oceanwp' ), get_query_var( 'paged' ) ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			}

			return $items;
		}

		/**
		 * Whether this module is terminal.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_search();
		}
	}
}
