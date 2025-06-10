<?php
/**
 * OceanWP Breadcrumb Post Class
 * 
 * Module for single blog posts, and
 * general CPTs.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Post' ) ) {

	class OceanWP_Breadcrumb_Post {

		public function get_items(): array {
			if ( ! is_singular() || is_front_page() ) {
				return [];
			}

			global $post;

			if ( ! $post instanceof WP_Post ) {
				return [];
			}

			$post_type = get_post_type( $post );

			// Skip pages and portfolio (handled by separate modules).
			if ( in_array( $post_type, [ 'page', 'ocean_portfolio' ], true ) ) {
				return [];
			}

			$items = [];

			if ( $post_type === 'post' ) {
				$items = $this->get_post_items( $post );
			} else {
				$items = $this->get_generic_cpt_items( $post );
			}

			// Append pagination info if this is a paginated post view.
			if ( is_singular() && get_query_var( 'page' ) > 1 ) {
				$items[] = [
					'label'      => sprintf( esc_html__( 'Page %d', 'oceanwp' ), get_query_var( 'page' ) ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			} elseif ( is_singular() && get_option( 'page_comments' ) && get_query_var( 'cpage' ) > 1 ) {
				$items[] = [
					'label'      => sprintf( esc_html__( 'Comment Page %d', 'oceanwp' ), get_query_var( 'cpage' ) ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			}

			return $items;
		}

		protected function get_post_items( WP_Post $post ): array {
			$items           = [];
			$taxonomy_option = get_theme_mod( 'ocean_breadcrumb_posts_taxonomy', 'category' );

			switch ( $taxonomy_option ) {
				case 'blog':
					$page_id = get_option( 'page_for_posts' );
					if ( $page_id ) {
						$items[] = [
							'label' => get_the_title( $page_id ),
							'url'   => get_permalink( $page_id ),
						];
					}
					break;

				case 'category':
				case 'none':
					$terms = get_the_category( $post->ID );
					if ( ! empty( $terms ) ) {
						$term = $terms[0];
						if ( $taxonomy_option === 'category' ) {
							$items = array_merge( $items, $this->get_term_ancestors( $term, 'category' ) );
						}
						$items[] = [
							'label' => $term->name,
							'url'   => get_category_link( $term->term_id ),
						];
					}
					break;

				case 'post_tag':
					$tags = get_the_tags( $post->ID );
					if ( ! empty( $tags ) ) {
						$tag = $tags[0];
						$items[] = [
							'label' => $tag->name,
							'url'   => get_tag_link( $tag->term_id ),
						];
					}
					break;
			}

			return $items;
		}

		protected function get_generic_cpt_items( WP_Post $post ): array {
			$items = [];

			$post_type     = get_post_type( $post );
			$post_type_obj = get_post_type_object( $post_type );

			if ( ! $post_type_obj || ! $post_type_obj->public ) {
				return [];
			}

			if ( $post_type_obj->has_archive ) {
				$items[] = [
					'label' => $post_type_obj->labels->name,
					'url'   => get_post_type_archive_link( $post_type ),
				];
			}

			$taxonomies = get_object_taxonomies( $post_type, 'objects' );
			foreach ( $taxonomies as $taxonomy ) {
				if ( $taxonomy->public ) {
					$terms = get_the_terms( $post->ID, $taxonomy->name );
					if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
						$term = $terms[0];
						if ( $taxonomy->hierarchical ) {
							$items = array_merge( $items, $this->get_term_ancestors( $term, $taxonomy->name ) );
						}
						$items[] = [
							'label' => $term->name,
							'url'   => get_term_link( $term ),
						];
						break;
					}
				}
			}

			return $items;
		}

		protected function get_term_ancestors( WP_Term $term, string $taxonomy ): array {
			$breadcrumbs = [];
			$ancestors   = get_ancestors( $term->term_id, $taxonomy );

			foreach ( array_reverse( $ancestors ) as $ancestor_id ) {
				$ancestor = get_term( $ancestor_id, $taxonomy );
				if ( ! is_wp_error( $ancestor ) ) {
					$breadcrumbs[] = [
						'label' => $ancestor->name,
						'url'   => get_term_link( $ancestor ),
					];
				}
			}

			return $breadcrumbs;
		}
	}
}
