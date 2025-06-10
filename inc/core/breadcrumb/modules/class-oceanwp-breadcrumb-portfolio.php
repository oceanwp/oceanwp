<?php
/**
 * OceanWP Breadcrumb Portfolio Class
 *
 * Handles breadcrumbs for single portfolio items and portfolio taxonomies.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Portfolio' ) ) {

	class OceanWP_Breadcrumb_Portfolio {

		/**
		 * Return portfolio breadcrumb items if applicable.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( is_singular( 'ocean_portfolio' ) ) {
				return $this->get_single_items();
			}

			if ( is_tax( 'ocean_portfolio_category' ) ) {
				return $this->get_taxonomy_items( 'ocean_portfolio_category' );
			}

			if ( is_tax( 'ocean_portfolio_tag' ) ) {
				return $this->get_taxonomy_items( 'ocean_portfolio_tag' );
			}

			return [];
		}

		/**
		 * Breadcrumbs for single portfolio items.
		 */
		protected function get_single_items(): array {
			$items = [];

			$post = get_post();
			if ( ! $post ) {
				return [];
			}

			$taxonomy_option = get_theme_mod( 'ocean_breadcrumb_portfolio_taxonomy', 'ocean_portfolio_category' );

			// Step 1: Optional portfolio page.
			if ( in_array( $taxonomy_option, [ 'ocean_portfolio_category', 'ocean_portfolio_tag' ], true ) ) {
				$page_id = get_theme_mod( 'op_portfolio_page' );
				if ( $page_id && get_post_status( $page_id ) === 'publish' ) {
					$items[] = [
						'label' => get_the_title( $page_id ),
						'url'   => get_permalink( $page_id ),
					];
				}
			}

			// Step 2: Add taxonomy trail.
			if ( 'ocean_portfolio_category' === $taxonomy_option ) {
				$terms = get_the_terms( $post->ID, 'ocean_portfolio_category' );
				if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
					$term = $terms[0];

					$ancestors = array_reverse( get_ancestors( $term->term_id, 'ocean_portfolio_category' ) );
					foreach ( $ancestors as $ancestor_id ) {
						$ancestor = get_term( $ancestor_id, 'ocean_portfolio_category' );
						if ( $ancestor && ! is_wp_error( $ancestor ) ) {
							$items[] = [
								'label' => $ancestor->name,
								'url'   => get_term_link( $ancestor ),
							];
						}
					}

					$items[] = [
						'label' => $term->name,
						'url'   => get_term_link( $term ),
					];
				}
			} elseif ( 'ocean_portfolio_tag' === $taxonomy_option ) {
				$tags = get_the_terms( $post->ID, 'ocean_portfolio_tag' );
				if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
					$items[] = [
						'label' => $tags[0]->name,
						'url'   => get_term_link( $tags[0] ),
					];
				}
			}

			return $items;
		}

		/**
		 * Breadcrumbs for portfolio category or tag archives with pagination support.
		 */
		protected function get_taxonomy_items( string $taxonomy ): array {
			$term = get_queried_object();
			if ( ! $term instanceof WP_Term ) {
				return [];
			}

			$items = [];

			$page_id = get_theme_mod( 'op_portfolio_page' );
			if ( $page_id && get_post_status( $page_id ) === 'publish' ) {
				$items[] = [
					'label' => get_the_title( $page_id ),
					'url'   => get_permalink( $page_id ),
				];
			}

			if ( is_taxonomy_hierarchical( $taxonomy ) && $term->parent ) {
				$ancestors = array_reverse( get_ancestors( $term->term_id, $taxonomy ) );
				foreach ( $ancestors as $ancestor_id ) {
					$ancestor = get_term( $ancestor_id, $taxonomy );
					if ( $ancestor && ! is_wp_error( $ancestor ) ) {
						$items[] = [
							'label' => $ancestor->name,
							'url'   => get_term_link( $ancestor ),
						];
					}
				}
			}

			// Term item — linked if paged, otherwise final
			$items[] = [
				'label'      => $term->name,
				'url'        => is_paged() ? get_term_link( $term ) : '',
				'is_current' => ! is_paged(),
				'is_hidden'  => false,
			];

			// Append pagination item if paged
			if ( is_paged() ) {
				$items[] = [
					'label'      => sprintf( esc_html__( 'Page %d', 'oceanwp' ), get_query_var( 'paged' ) ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			}

			return $items;
		}

		/**
		 * Marks this as the terminal module for Ocean Portfolio pages.
		 */
		public function is_terminal(): bool {
			return is_singular( 'ocean_portfolio' ) || is_tax( 'ocean_portfolio_category' ) || is_tax( 'ocean_portfolio_tag' );
		}
	}
}
