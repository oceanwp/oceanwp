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

	/**
	 * Get breadcrumb items for singular pages and static posts page.
	 *
	 * @return array
	 */
	class OceanWP_Breadcrumb_Singular {

		/**
		 * Get breadcrumb items for singular pages and static posts page.
		 *
		 * @return array
		 */
		public function get_items() {
			if ( is_front_page() || ! is_singular() || get_post_type() === 'post' ) {
				return [];
			}

			global $post;

			$items = [];

			$post_type = get_post_type( $post );
			$post_type_object = get_post_type_object( $post_type );

			if ( $post_type_object && $post_type !== 'post' && ! is_attachment() ) {
				if ( $post_type_object->has_archive ) {
					$items[] = [
						'label' => $post_type_object->labels->name,
						'url'   => get_post_type_archive_link( $post_type ),
					];
				}
			}

			if ( is_page() ) {
				$parent_id = $post->post_parent;
				$parent_links = [];

				while ( $parent_id ) {
					$page = get_post( $parent_id );
					$parent_links[] = [
						'label' => get_the_title( $page->ID ),
						'url'   => get_permalink( $page->ID ),
					];
					$parent_id = $page->post_parent;
				}

				$parent_links = array_reverse( $parent_links );
				$items = array_merge( $items, $parent_links );
			}

			$items[] = [
				'label'      => get_the_title(),
				'url'        => '',
				'is_current' => true,
			];

			return $items;
		}

	}

}
