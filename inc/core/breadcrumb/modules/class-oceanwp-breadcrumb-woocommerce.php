<?php
/**
 * OceanWP Breadcrumb WooCommerce Class
 * 
 * Module for WooCommerce pages (products, product taxonomy, etc.).
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

if ( ! class_exists( 'OceanWP_Breadcrumb_WooCommerce' ) ) {

	class OceanWP_Breadcrumb_WooCommerce {

		/**
		 * Get breadcrumb items for WooCommerce pages.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! function_exists( 'is_woocommerce' ) || ! is_woocommerce() ) {
				return [];
			}

			$items = [];

			// Shop Page.
			if ( is_shop() ) {
				$items[] = [
					'label'      => get_the_title( wc_get_page_id( 'shop' ) ),
					'url'        => '',
					'is_current'=> ! is_paged(),
					'is_hidden' => false,
				];

				// Pagination
				if ( is_paged() ) {
					$items[] = [
						'label'      => sprintf( esc_html__( 'Page %d', 'oceanwp' ), get_query_var( 'paged' ) ),
						'url'        => '',
						'is_current'=> true,
						'is_hidden' => false,
					];
				}

				return $items;
			}

			// My Account Page
			if ( is_account_page() ) {
				$items[] = [
					'label'      => esc_html__( 'My Account', 'oceanwp' ),
					'url'        => '',
					'is_current'=> true,
					'is_hidden' => false,
				];

				// Handle endpoint subpages
				if ( function_exists( 'is_wc_endpoint_url' ) && is_wc_endpoint_url() ) {
					$endpoint       = WC()->query->get_current_endpoint();
					$endpoint_title = WC()->query->get_endpoint_title( $endpoint );

					if ( $endpoint && $endpoint_title ) {
						$items[] = [
							'label'      => $endpoint_title,
							'url'        => '',
							'is_current'=> true,
							'is_hidden' => false,
						];
					}
				}

				return $items;
			}

			// Cart Page
			if ( is_cart() ) {
				$items[] = [
					'label'      => esc_html__( 'Cart', 'oceanwp' ),
					'url'        => '',
					'is_current'=> true,
					'is_hidden' => false,
				];
				return $items;
			}

			// Checkout Page
			if ( is_checkout() ) {
				$items[] = [
					'label'      => esc_html__( 'Checkout', 'oceanwp' ),
					'url'        => '',
					'is_current'=> true,
					'is_hidden' => false,
				];
				return $items;
			}

			// Product Category or Tag
			if ( is_product_category() || is_product_tag() ) {
				$term = get_queried_object();

				if ( $term instanceof WP_Term ) {
					// Optional "Products" link
					if ( get_theme_mod( 'ocean_breadcrumb_woo_tax_include_products', true ) ) {
						$label_setting = get_theme_mod( 'ocean_breadcrumb_woo_tax_products_label', 'default' );
						$label         = esc_html__( 'Products', 'oceanwp' );

						if ( 'shop' === $label_setting ) {
							$shop_id = wc_get_page_id( 'shop' );
							if ( $shop_id && get_post_status( $shop_id ) === 'publish' ) {
								$label = get_the_title( $shop_id );
							}
						}

						$items[] = [
							'label'      => $label,
							'url'        => get_permalink( wc_get_page_id( 'shop' ) ),
							'is_current'=> false,
							'is_hidden' => false,
						];
					}

					// Ancestor terms
					$ancestors = array_reverse( get_ancestors( $term->term_id, $term->taxonomy ) );
					foreach ( $ancestors as $ancestor_id ) {
						$ancestor = get_term( $ancestor_id, $term->taxonomy );
						if ( $ancestor && ! is_wp_error( $ancestor ) ) {
							$items[] = [
								'label'      => $ancestor->name,
								'url'        => get_term_link( $ancestor, $term->taxonomy ),
								'is_current'=> false,
								'is_hidden' => false,
							];
						}
					}

					$items[] = [
						'label'      => $term->name,
						'url'        => is_paged() ? get_term_link( $term ) : '',
						'is_current'=> ! is_paged(),
						'is_hidden' => false,
					];

					// Pagination for term archives
					if ( is_paged() ) {
						$items[] = [
							'label'      => sprintf( esc_html__( 'Page %d', 'oceanwp' ), get_query_var( 'paged' ) ),
							'url'        => '',
							'is_current'=> true,
							'is_hidden' => false,
						];
					}
				}

				return $items;
			}

			// Single Product
			if ( is_singular( 'product' ) ) {
				$post_id          = get_the_ID();
				$taxonomy_setting = get_theme_mod( 'ocean_breadcrumb_products_taxonomy', 'shop' );

				// Shop link
				if ( 'shop' === $taxonomy_setting ) {
					$shop_id = wc_get_page_id( 'shop' );
					if ( $shop_id && get_post_status( $shop_id ) === 'publish' ) {
						$items[] = [
							'label'      => get_the_title( $shop_id ),
							'url'        => get_permalink( $shop_id ),
							'is_current'=> false,
							'is_hidden' => false,
						];
					}
				}

				// Product_cat or product_tag trail
				elseif ( in_array( $taxonomy_setting, [ 'product_cat', 'product_tag' ], true ) ) {
					$terms = wc_get_product_terms(
						$post_id,
						$taxonomy_setting,
						apply_filters(
							'woocommerce_breadcrumb_product_terms_args',
							[
								'orderby' => 'parent',
								'order'   => 'DESC',
							]
						)
					);

					if ( $terms && ! is_wp_error( $terms ) ) {
						$main_term = apply_filters( 'woocommerce_breadcrumb_main_term', $terms[0], $terms );

						if ( $main_term ) {
							$ancestors = array_reverse( get_ancestors( $main_term->term_id, $taxonomy_setting ) );
							foreach ( $ancestors as $ancestor_id ) {
								$ancestor = get_term( $ancestor_id, $taxonomy_setting );
								if ( $ancestor && ! is_wp_error( $ancestor ) ) {
									$items[] = [
										'label'      => $ancestor->name,
										'url'        => get_term_link( $ancestor, $taxonomy_setting ),
										'is_current'=> false,
										'is_hidden' => false,
									];
								}
							}

							$items[] = [
								'label'      => $main_term->name,
								'url'        => get_term_link( $main_term, $taxonomy_setting ),
								'is_current'=> false,
								'is_hidden' => false,
							];
						}
					}
				}

				return $items;
			}

			return $items;
		}

		/**
		 * Determine if this is a terminal breadcrumb module.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_woocommerce();
		}
	}
}
