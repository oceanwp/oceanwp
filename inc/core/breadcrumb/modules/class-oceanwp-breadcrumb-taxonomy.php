<?php
/**
 * OceanWP Breadcrumb Taxonomy Class
 * 
 * Module for taxonomy archives (categories, tags, custom taxonomies).
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Taxonomy' ) ) {

	/**
	 * Get breadcrumb items for taxonomy archive pages.
	 *
	 * @return array
	 */
	class OceanWP_Breadcrumb_Taxonomy {

		/**
		 * Get breadcrumb items for taxonomy archive pages.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_tax() && ! is_category() && ! is_tag() ) {
				return [];
			}

			$term = get_queried_object();

			if ( ! $term || ! isset( $term->term_id ) ) {
				return [];
			}

			$taxonomy = get_taxonomy( $term->taxonomy );

			if ( ! $taxonomy ) {
				return [];
			}

			$items = [];

			// Step 1: Add blog page if this taxonomy is used by "post"
			$object_types = $taxonomy->object_type;

			if ( in_array( 'post', $object_types, true ) ) {
				$posts_page_id = get_option( 'page_for_posts' );

				if ( $posts_page_id && get_post( $posts_page_id ) ) {
					$items[] = [
						'label' => get_the_title( $posts_page_id ),
						'url'   => get_permalink( $posts_page_id ),
					];
				}
			}
			// Step 2: For custom post types, add their archive (if any)
			elseif ( ! empty( $object_types ) && is_array( $object_types ) ) {
				$post_type = $object_types[0];
				$post_type_object = get_post_type_object( $post_type );

				if ( $post_type_object && $post_type_object->has_archive ) {
					$items[] = [
						'label' => $post_type_object->labels->name,
						'url'   => get_post_type_archive_link( $post_type ),
					];
				}
			}

			// Step 3: Add parent terms for hierarchical taxonomies
			if ( is_taxonomy_hierarchical( $term->taxonomy ) && $term->parent ) {
				$ancestors = array_reverse( get_ancestors( $term->term_id, $term->taxonomy ) );

				foreach ( $ancestors as $ancestor_id ) {
					$ancestor = get_term( $ancestor_id, $term->taxonomy );

					if ( $ancestor && ! is_wp_error( $ancestor ) ) {
						$items[] = [
							'label' => $ancestor->name,
							'url'   => get_term_link( $ancestor ),
						];
					}
				}
			}

			// Step 4: Add current term
			$items[] = [
				'label' => single_term_title( '', false ),
				'url'   => '',
			];

			return $items;
		}
	}

}

if ( ! class_exists( 'NO_OceanWP_Breadcrumb_Taxonomy' ) ) {

	/**
	 * Get breadcrumb items for taxonomy archive pages.
	 *
	 * @return array
	 */
	class NO_OceanWP_Breadcrumb_Taxonomy {

		/**
		 * Get breadcrumb items for taxonomy archive pages.
		 *
		 * @return array
		 */
		public function get_items() {
			if ( ! is_tax() && ! is_category() && ! is_tag() ) {
				return [];
			}

			$term = get_queried_object();

			if ( ! $term || ! isset( $term->term_id ) ) {
				return [];
			}

			$taxonomy = get_taxonomy( $term->taxonomy );

			if ( ! $taxonomy ) {
				return [];
			}

			$items = [];

			// If this taxonomy is linked to a custom post type, add its archive.
			$object_types = $taxonomy->object_type;

			if ( ! empty( $object_types ) && is_array( $object_types ) ) {
				$post_type = $object_types[0];
				$post_type_object = get_post_type_object( $post_type );

				if (
					$post_type_object &&
					$post_type_object->has_archive &&
					$post_type !== 'post'
				) {
					$items[] = [
						'label' => $post_type_object->labels->name,
						'url'   => get_post_type_archive_link( $post_type ),
					];
				}
			}

			// Add the taxonomy term name as the current item.
			$items[] = [
				'label' => single_term_title( '', false ),
				'url'   => '',
			];

			return $items;
		}
	}

}
