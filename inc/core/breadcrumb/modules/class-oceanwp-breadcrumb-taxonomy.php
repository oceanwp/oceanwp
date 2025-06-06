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
		public function get_items(): array {
			if ( ! is_tax() && ! is_category() && ! is_tag() ) {
				return [];
			}

			$term = get_queried_object();
			if ( ! $term || ! isset( $term->term_id ) ) {
				return [];
			}

			// Skip portfolio taxonomies
			if ( in_array( $term->taxonomy, [ 'ocean_portfolio_category', 'ocean_portfolio_tag' ], true ) ) {
				return [];
			}

			$taxonomy = get_taxonomy( $term->taxonomy );
			if ( ! $taxonomy ) {
				return [];
			}

			$items = [];
			$object_types = $taxonomy->object_type;

			// Posts Page for post taxonomies
			if ( in_array( 'post', $object_types, true ) ) {
				$posts_page_id = get_option( 'page_for_posts' );
				if ( $posts_page_id && get_post( $posts_page_id ) ) {
					$items[] = [
						'label' => get_the_title( $posts_page_id ),
						'url'   => get_permalink( $posts_page_id ),
					];
				}
			} elseif ( ! empty( $object_types ) ) {
				$post_type      = $object_types[0];
				$post_type_obj  = get_post_type_object( $post_type );
				if ( $post_type_obj && $post_type_obj->has_archive ) {
					$items[] = [
						'label' => $post_type_obj->labels->name,
						'url'   => get_post_type_archive_link( $post_type ),
					];
				}
			}

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

			$items[] = [
				'label' => single_term_title( '', false ),
				'url'   => '',
			];

			return $items;
		}

		public function is_terminal(): bool {
			return is_category() || is_tag() || is_tax();
		}
	}
}
