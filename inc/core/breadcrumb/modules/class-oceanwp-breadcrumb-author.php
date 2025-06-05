<?php
/**
 * OceanWP Breadcrumb Author Class
 * 
 * Module for author archive pages.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Author' ) ) {

	/**
	 * Get breadcrumb items for author archive pages.
	 *
	 * @return array
	 */
	class OceanWP_Breadcrumb_Author {

		/**
		 * Get breadcrumb items for author archive pages.
		 *
		 * @return array
		 */
		public function get_items() {
			if ( ! is_author() ) {
				return [];
			}

			$author = get_queried_object();

			if ( ! $author || ! isset( $author->ID ) ) {
				return [];
			}

			$items = [];

			// Translators: %s represents the Author's name for author archive pages.
			$items[] = [
				'label' => sprintf( esc_html_x( 'Author: %s', 'Author name for author archive pages', 'oceanwp' ), esc_html( $author->display_name ) ),
				'url'   => '',
			];

			return $items;
		}
	}

}
