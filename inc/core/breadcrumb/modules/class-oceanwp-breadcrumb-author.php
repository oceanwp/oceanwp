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
	 * Handles breadcrumb items for author archive pages.
	 */
	class OceanWP_Breadcrumb_Author {

		/**
		 * Get breadcrumb items for author archive pages.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_author() ) {
				return [];
			}

			$author = get_queried_object();

			if ( ! $author || ! isset( $author->ID ) ) {
				return [];
			}

			$items = [];

			$items[] = [
				'label'      => sprintf(
					/* translators: %s: author name for author archive breadcrumb trail */
					esc_html_x( 'Author: %s', 'Author name for author archive pages', 'oceanwp' ),
					$author->display_name
				),
				'url'        => is_paged() ? get_author_posts_url( $author->ID ) : '',
				'is_current' => ! is_paged(),
				'is_hidden'  => false,
			];

			if ( is_paged() ) {
				$items[] = [
					/* translators: %d: page number in breadcrumb trail */
					'label'      => sprintf( esc_html_x( 'Page %d', 'Breadcrumb: paged items trail', 'oceanwp' ), get_query_var( 'paged' ) ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			}

			return $items;
		}

		/**
		 * Whether this is a terminal breadcrumb module.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_author();
		}
	}
}
