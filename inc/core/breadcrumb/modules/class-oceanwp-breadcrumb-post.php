<?php
/**
 * OceanWP Breadcrumb Post Class
 * 
 * Module for single blog posts, Ocean Portfolio CPTs, and
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

	/**
	 * Get breadcrumb items for single posts, ocean_portfolio, or general CPTs.
	 *
	 * @return array
	 */
	class OceanWP_Breadcrumb_Post {

		/**
		 * Get breadcrumb items for single posts, ocean_portfolio, or general CPTs.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_singular() || is_front_page() ) {
				return [];
			}

			global $post;

			if ( ! $post instanceof WP_Post ) {
				return [];
			}

			$post_type = get_post_type( $post );
			$items     = [];

			// Only support valid post types.
			if ( 'post' === $post_type ) {
				$items = $this->get_post_items( $post );
			} elseif ( 'ocean_portfolio' === $post_type && class_exists( 'Ocean_Portfolio' ) ) {
				$items = $this->get_portfolio_items( $post );
			} else {
				$items = $this->get_generic_cpt_items( $post );
			}

			$items[] = [
				'label'      => get_the_title( $post ),
				'url'        => '',
				'is_title'   => true,
				'is_current' => true,
			];

			return $items;
		}

		/**
		 * Breadcrumbs for standard blog posts.
		 */
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
						if ( 'category' === $taxonomy_option ) {
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

		/**
		 * Breadcrumbs for Ocean Portfolio posts.
		 */
		protected function get_portfolio_items( WP_Post $post ): array {
			$items           = [];
			$taxonomy_option = get_theme_mod( 'ocean_breadcrumb_portfolio_taxonomy', 'ocean_portfolio_category' );

			switch ( $taxonomy_option ) {
				case 'portfolio':
					$page_id = get_theme_mod( 'op_portfolio_page' );
					if ( $page_id ) {
						$items[] = [
							'label' => get_the_title( $page_id ),
							'url'   => get_permalink( $page_id ),
						];
					}
					break;

				case 'ocean_portfolio_category':
				case 'none':
					$terms = get_the_terms( $post->ID, 'ocean_portfolio_category' );
					if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
						$term = $terms[0];
						if ( 'ocean_portfolio_category' === $taxonomy_option ) {
							$items = array_merge( $items, $this->get_term_ancestors( $term, 'ocean_portfolio_category' ) );
						}
						$items[] = [
							'label' => $term->name,
							'url'   => get_term_link( $term ),
						];
					}
					break;

				case 'ocean_portfolio_tag':
					$tags = get_the_terms( $post->ID, 'ocean_portfolio_tag' );
					if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
						$tag = $tags[0];
						$items[] = [
							'label' => $tag->name,
							'url'   => get_term_link( $tag ),
						];
					}
					break;
			}

			return $items;
		}

		/**
		 * Fallback breadcrumbs for general custom post types.
		 */
		protected function get_generic_cpt_items( WP_Post $post ): array {
			$items = [];

			$post_type     = get_post_type( $post );
			$post_type_obj = get_post_type_object( $post_type );

			if ( ! $post_type_obj || ! $post_type_obj->public ) {
				return [];
			}

			// Archive page (if any)
			if ( $post_type_obj->has_archive ) {
				$items[] = [
					'label' => $post_type_obj->labels->name,
					'url'   => get_post_type_archive_link( $post_type ),
				];
			}

			// Try to fetch the first public taxonomy with a term.
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
						break; // Use only one taxonomy.
					}
				}
			}

			return $items;
		}

		/**
		 * Get parent terms for hierarchical taxonomies.
		 *
		 * @param WP_Term $term     Term object.
		 * @param string  $taxonomy Taxonomy name.
		 * @return array
		 */
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
