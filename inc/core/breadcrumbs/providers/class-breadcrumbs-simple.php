<?php
/**
 * OceanWP Breadcrumbs Simple Providers
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Search Provider
 */
class OceanWP_Breadcrumbs_Search_Provider extends OceanWP_Breadcrumbs_Provider_Abstract {
	public function get_items() {
		$label = sprintf( 
			'%s “%s”', 
			$this->args['labels']['search'], 
			get_search_query() 
		);
		if ( ! empty( $this->args['show_title'] ) ) {
			$this->add_crumb( $label, '', true );
		}
		return $this->crumbs;
	}
}

/**
 * 404 Provider
 */
class OceanWP_Breadcrumbs_404_Provider extends OceanWP_Breadcrumbs_Provider_Abstract {
	public function get_items() {
		if ( ! empty( $this->args['show_title'] ) ) {
			$this->add_crumb( $this->args['labels']['error_404'], '', true );
		}
		return $this->crumbs;
	}
}

/**
 * Archive Provider
 */
class OceanWP_Breadcrumbs_Archive_Provider extends OceanWP_Breadcrumbs_Provider_Abstract {
	public function get_items() {
		if ( is_category() || is_tag() || is_tax() ) {
			$term = get_queried_object();
			if ( $term ) {
				// Add parents if hierarchical
				if ( is_taxonomy_hierarchical( $term->taxonomy ) && $term->parent ) {
					$this->add_term_parents( $term->parent, $term->taxonomy );
				}
				if ( ! empty( $this->args['show_title'] ) ) {
					$this->add_crumb( $term->name, '', true );
				}
			}
		} elseif ( is_post_type_archive() ) {
			$post_type = get_query_var( 'post_type' );
			$post_type_obj = get_post_type_object( $post_type );
			if ( $post_type_obj ) {
				if ( ! empty( $this->args['show_title'] ) ) {
					$this->add_crumb( $post_type_obj->labels->name, '', true );
				}
			}
		} elseif ( is_author() ) {
			$author = get_queried_object();
			if ( $author ) {
				if ( ! empty( $this->args['show_title'] ) ) {
					$this->add_crumb( $author->display_name, '', true );
				}
			}
		} else {
			if ( ! empty( $this->args['show_title'] ) ) {
				$this->add_crumb( $this->args['labels']['archives'], '', true );
			}
		}
		return $this->crumbs;
	}
}
