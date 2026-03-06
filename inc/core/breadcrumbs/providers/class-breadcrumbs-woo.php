<?php
/**
 * OceanWP Breadcrumbs WooCommerce Provider
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class OceanWP_Breadcrumbs_WooCommerce_Provider extends OceanWP_Breadcrumbs_Provider_Abstract {

	/**
	 * Get items.
	 */
	public function get_items() {
		if ( ! class_exists( 'WooCommerce' ) ) {
			return array();
		}

		$products_tax = get_theme_mod( 'ocean_breadcrumb_products_taxonomy', 'shop' );

		if ( is_shop() && ! is_search() ) {
			$this->add_crumb( get_the_title( wc_get_page_id( 'shop' ) ), '', true );
		} elseif ( is_product_category() || is_product_tag() ) {
			if ( 'none' !== $products_tax ) {
				$this->add_shop_link();
			}
			$term = get_queried_object();
			$this->add_term_parents( $term->parent, $term->taxonomy );
			$this->add_crumb( $term->name, '', true );
		} elseif ( is_product() ) {
			if ( 'none' !== $products_tax ) {
				if ( 'shop' === $products_tax ) {
					$this->add_shop_link();
				} elseif ( 'product_cat' === $products_tax || 'product_tag' === $products_tax ) {
					$this->add_shop_link();
					$terms = wc_get_product_terms(
						get_the_ID(),
						$products_tax,
						apply_filters(
							'woocommerce_breadcrumb_product_terms_args',
							array(
								'orderby' => 'parent',
								'order'   => 'DESC',
							)
						)
					);

					if ( $terms ) {
						$main_term = apply_filters( 'woocommerce_breadcrumb_main_term', $terms[0], $terms );
						$this->add_term_parents( $main_term->parent, $products_tax );
						$this->add_crumb( $main_term->name, get_term_link( $main_term ) );
					}
				} else {
					$this->add_shop_link();
					$this->add_post_terms( get_the_ID(), $products_tax );
				}
			}

			if ( ! empty( $this->args['show_title'] ) ) {
				$this->add_crumb( get_the_title(), '', true );
			}
		}

		return $this->crumbs;
	}

	protected function add_shop_link() {
		$shop_id = wc_get_page_id( 'shop' );
		$this->add_crumb( get_the_title( $shop_id ), get_permalink( $shop_id ) );
	}
}
