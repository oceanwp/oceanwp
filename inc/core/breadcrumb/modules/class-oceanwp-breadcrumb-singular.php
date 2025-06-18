<?php
/**
 * OceanWP Breadcrumb Singular Class
 * 
 * Module for pages and other singular items, except posts and CPTs.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Singular' ) ) {

	class OceanWP_Breadcrumb_Singular {

		/**
		 * Get breadcrumb items for static pages (with parent pages and optional pagination).
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_page() || is_front_page() ) {
				return [];
			}

			global $post;
			if ( ! $post instanceof WP_Post ) {
				return [];
			}

			$items = [];

			// Collect parent pages in correct hierarchy.
			$ancestors = get_post_ancestors( $post );
			$ancestors = array_reverse( $ancestors );

			foreach ( $ancestors as $ancestor_id ) {
				$ancestor = get_post( $ancestor_id );
				if ( $ancestor && $ancestor instanceof WP_Post ) {
					$items[] = [
						'label'      => get_the_title( $ancestor->ID ),
						'url'        => get_permalink( $ancestor->ID ),
						'is_current' => false,
						'is_hidden'  => false,
					];
				}
			}

			// If on a paginated page (<!--nextpage--> or paged comments), show pagination label.
			$current_page = get_query_var( 'page' );
			$current_comment_page = get_query_var( 'cpage' );

			if ( $current_page > 1 ) {
				$items[] = [
					/* translators: %d: comment page number in breadcrumb trail */
					'label'      => sprintf( esc_html_x( 'Page %d', 'Breadcrumb: paged items trail', 'oceanwp' ), $current_page ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			} elseif ( get_option( 'page_comments' ) && $current_comment_page > 1 ) {
				$items[] = [
					/* translators: %d: comment page number in breadcrumb trail */
					'label'      => sprintf( esc_html_x( 'Comment Page %d', 'Breadcrumb: comments paged items trail', 'oceanwp' ), $current_comment_page ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			}

			return $items;
		}

		/**
		 * Determine if this is a terminal breadcrumb context.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_page() && ! is_front_page();
		}
	}
}
