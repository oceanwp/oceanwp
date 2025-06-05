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

	/**
	 * Get breadcrumb items for WooCommerce pages.
	 */
	class OceanWP_Breadcrumb_WooCommerce {

		public function get_items(): array {
			if ( ! function_exists( 'is_woocommerce' ) || ! is_woocommerce() ) {
				return [];
			}

			$items = [];

			// Shop Page.
			if ( is_shop() ) {
				$items[] = [
					'label' => get_the_title( wc_get_page_id( 'shop' ) ),
					'url'   => '',
				];
				return $items;
			}

			// My Account.
			if ( is_account_page() ) {
				$items[] = [
					'label' => esc_html__( 'My Account', 'oceanwp' ),
					'url'   => '',
				];

				// Handle endpoint pages like "orders", "edit-account", etc.
				if ( function_exists( 'is_wc_endpoint_url' ) && is_wc_endpoint_url() ) {
					$endpoint       = WC()->query->get_current_endpoint();
					$endpoint_title = WC()->query->get_endpoint_title( $endpoint );

					if ( $endpoint && $endpoint_title ) {
						$items[] = [
							'label' => $endpoint_title,
							'url'   => '',
						];
					}
				}

				return $items;
			}

			// Cart.
			if ( is_cart() ) {
				$items[] = [
					'label' => esc_html__( 'Cart', 'oceanwp' ),
					'url'   => '',
				];
				return $items;
			}

			// Checkout.
			if ( is_checkout() ) {
				$items[] = [
					'label' => esc_html__( 'Checkout', 'oceanwp' ),
					'url'   => '',
				];
				return $items;
			}

			// Product Category or Tag archive.
			if ( is_product_category() || is_product_tag() ) {
				$term = get_queried_object();
				if ( $term ) {

					// Optional: Insert "Products" item before taxonomy terms.
					if ( get_theme_mod( 'ocean_breadcrumb_woo_tax_include_products', true ) ) {
						$label_setting = get_theme_mod( 'ocean_breadcrumb_woo_tax_products_label', 'default' );
						$label = esc_html__( 'Products', 'oceanwp' );

						if ( 'shop' === $label_setting ) {
							$shop_id = wc_get_page_id( 'shop' );
							if ( $shop_id && get_post_status( $shop_id ) === 'publish' ) {
								$label = get_the_title( $shop_id );
							}
						}

						$items[] = [
							'label' => $label,
							'url'   => get_permalink( wc_get_page_id( 'shop' ) ),
						];
					}

					$ancestors = get_ancestors( $term->term_id, $term->taxonomy );
					$ancestors = array_reverse( $ancestors );
					foreach ( $ancestors as $ancestor_id ) {
						$ancestor = get_term( $ancestor_id, $term->taxonomy );
						if ( $ancestor && ! is_wp_error( $ancestor ) ) {
							$items[] = [
								'label' => $ancestor->name,
								'url'   => get_term_link( $ancestor, $term->taxonomy ),
							];
						}
					}

					$items[] = [
						'label' => $term->name,
						'url'   => '',
					];
				}
				return $items;
			}

			// Single Product.
			if ( is_singular( 'product' ) ) {
				$post_id          = get_the_ID();
				$taxonomy_setting = get_theme_mod( 'ocean_breadcrumb_products_taxonomy', 'shop' );

				// Optional: Shop Page.
				if ( 'shop' === $taxonomy_setting ) {
					$shop_id = wc_get_page_id( 'shop' );
					if ( $shop_id && get_post_status( $shop_id ) === 'publish' ) {
						$items[] = [
							'label' => get_the_title( $shop_id ),
							'url'   => get_permalink( $shop_id ),
						];
					}
				}

				// Product_cat or product_tag breadcrumb.
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
							$ancestors = get_ancestors( $main_term->term_id, $taxonomy_setting );
							$ancestors = array_reverse( $ancestors );

							foreach ( $ancestors as $ancestor_id ) {
								$ancestor = get_term( $ancestor_id, $taxonomy_setting );
								if ( $ancestor && ! is_wp_error( $ancestor ) ) {
									$items[] = [
										'label' => $ancestor->name,
										'url'   => get_term_link( $ancestor, $taxonomy_setting ),
									];
								}
							}

							$items[] = [
								'label' => $main_term->name,
								'url'   => get_term_link( $main_term, $taxonomy_setting ),
							];
						}
					}
				}

				// Product title.
				if ( get_theme_mod( 'ocean_breadcrumb_show_title', true ) ) {
					$items[] = [
						'label'      => get_the_title(),
						'url'        => '',
						'is_current' => true,
						'is_title'   => true, // for use with cleanup in HTML output if needed
					];
				}

				return $items;
			}

			return $items;
		}

		/**
		 * Whether this is a terminal breadcrumb (no more modules after it).
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_woocommerce();
		}
	}

}
