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

	class OceanWP_Breadcrumb_Taxonomy {

		/**
		 * Get breadcrumb items for taxonomy archives (category, tag, custom taxonomies).
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_tax() && ! is_category() && ! is_tag() ) {
				return [];
			}

			$term = get_queried_object();

			if ( ! $term instanceof WP_Term ) {
				return [];
			}

			// Skip Ocean Portfolio taxonomies — handled in a separate class.
			if ( in_array( $term->taxonomy, [ 'ocean_portfolio_category', 'ocean_portfolio_tag' ], true ) ) {
				return [];
			}

			$taxonomy = get_taxonomy( $term->taxonomy );
			if ( ! $taxonomy ) {
				return [];
			}

			$items = [];

			$object_types = $taxonomy->object_type;

			// Posts page for native post taxonomies.
			if ( in_array( 'post', $object_types, true ) ) {
				$page_id = get_option( 'page_for_posts' );
				if ( $page_id && get_post_status( $page_id ) === 'publish' ) {
					$items[] = [
						'label'      => get_the_title( $page_id ),
						'url'        => get_permalink( $page_id ),
						'is_current' => false,
						'is_hidden'  => false,
					];
				}
			}
			// CPT archive page if available.
			elseif ( ! empty( $object_types ) ) {
				$post_type     = $object_types[0];
				$post_type_obj = get_post_type_object( $post_type );
				if ( $post_type_obj && $post_type_obj->has_archive ) {
					$items[] = [
						'label'      => $post_type_obj->labels->name,
						'url'        => get_post_type_archive_link( $post_type ),
						'is_current' => false,
						'is_hidden'  => false,
					];
				}
			}

			// Taxonomy term ancestors.
			if ( is_taxonomy_hierarchical( $term->taxonomy ) && $term->parent ) {
				$ancestors = array_reverse( get_ancestors( $term->term_id, $term->taxonomy ) );
				foreach ( $ancestors as $ancestor_id ) {
					$ancestor = get_term( $ancestor_id, $term->taxonomy );
					if ( $ancestor && ! is_wp_error( $ancestor ) ) {
						$items[] = [
							'label'      => $ancestor->name,
							'url'        => get_term_link( $ancestor ),
							'is_current' => false,
							'is_hidden'  => false,
						];
					}
				}
			}

			// Current term (unlinked if paged)
			$items[] = [
				'label'      => single_term_title( '', false ),
				'url'        => is_paged() ? get_term_link( $term ) : '',
				'is_current' => ! is_paged(),
				'is_hidden'  => false,
			];

			// Pagination trail if on paged archive.
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
		 * Determine if this is a terminal breadcrumb context.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_category() || is_tag() || is_tax();
		}
	}
}
