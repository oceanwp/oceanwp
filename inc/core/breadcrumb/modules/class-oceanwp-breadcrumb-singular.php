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
						'label' => get_the_title( $ancestor->ID ),
						'url'   => get_permalink( $ancestor->ID ),
					];
				}
			}

			// No need to add current page — it will be handled in the output.
			return $items;
		}

		public function is_terminal(): bool {
			return is_page() && ! is_front_page();
		}
	}
}
