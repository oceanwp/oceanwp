<?php
/**
 * OceanWP Breadcrumb Archive Class.
 * 
 * Module for archive pages.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Archive' ) ) {

	class OceanWP_Breadcrumb_Archive {

		/**
		 * Get breadcrumb items for archive pages (including blog index).
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ( ! is_post_type_archive() && ! is_home() ) || is_front_page() ) {
				return [];
			}

			$items    = [];
			$page_id  = null;
			$post_type = get_query_var( 'post_type' );

			// Handle blog index.
			if ( is_home() ) {
				$page_id = get_option( 'page_for_posts' );

				if ( $page_id ) {
					$items[] = [
						'label'      => get_the_title( $page_id ),
						'url'        => is_paged() ? get_permalink( $page_id ) : '',
						'is_current' => ! is_paged(),
						'is_hidden'  => false,
					];
				}
			}
			// Handle custom post type archive.
			elseif ( is_post_type_archive() ) {
				if ( empty( $post_type ) ) {
					$post_type = get_post_type();
				}

				$post_type_object = get_post_type_object( $post_type );

				if ( $post_type_object && $post_type_object->has_archive ) {
					$items[] = [
						'label'      => $post_type_object->labels->name,
						'url'        => is_paged() ? get_post_type_archive_link( $post_type ) : '',
						'is_current' => ! is_paged(),
						'is_hidden'  => false,
					];
				}
			}

			// Append pagination if on a paginated archive.
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
			return is_post_type_archive() || is_home();
		}
	}
}
