<?php
/**
 * OceanWP Breadcrumbs Abstract Provider
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

abstract class OceanWP_Breadcrumbs_Provider_Abstract {

	/**
	 * Array of OceanWP_Breadcrumbs_Crumb objects.
	 *
	 * @var array
	 */
	protected $crumbs = array();

	/**
	 * Configuration arguments.
	 *
	 * @var array
	 */
	protected $args = array();

	/**
	 * Constructor.
	 *
	 * @param array $args Arguments.
	 */
	public function __construct( $args = array() ) {
		$this->args = $args;
	}

	/**
	 * Get the items for the breadcrumb trail.
	 *
	 * @return array
	 */
	abstract public function get_items();

	/**
	 * Add a crumb to the trail.
	 *
	 * @param string $label   Label.
	 * @param string $url     URL.
	 * @param bool   $is_last Is last.
	 */
	protected function add_crumb( $label, $url = '', $is_last = false ) {
		$this->crumbs[] = new OceanWP_Breadcrumbs_Crumb( $label, $url, $is_last );
	}

	/**
	 * Add term parents.
	 */
	protected function add_term_parents( $term_id, $taxonomy ) {
		$parents = array();
		while ( $term_id ) {
			$term = get_term( $term_id, $taxonomy );
			if ( ! $term || is_wp_error( $term ) ) break;
			$parents[] = array(
				'label' => $term->name,
				'url'   => get_term_link( $term ),
			);
			$term_id = $term->parent;
		}
		if ( ! empty( $parents ) ) {
			$parents = array_reverse( $parents );
			foreach ( $parents as $parent ) {
				$this->add_crumb( $parent['label'], $parent['url'] );
			}
		}
	}

	/**
	 * Add post terms to the trail.
	 */
	protected function add_post_terms( $post_id, $taxonomy ) {
		$terms = get_the_terms( $post_id, $taxonomy );
		if ( $terms && ! is_wp_error( $terms ) ) {
			if ( function_exists( 'wp_list_sort' ) ) {
				$terms = wp_list_sort( $terms, 'term_id' );
			} else {
				usort( $terms, '_usort_terms_by_ID' );
			}

			$term = get_term( $terms[0], $taxonomy );

			if ( 0 < $term->parent ) {
				$this->add_term_parents( $term->parent, $taxonomy );
			}

			$this->add_crumb( $term->name, get_term_link( $term, $taxonomy ) );
		}
	}
}
