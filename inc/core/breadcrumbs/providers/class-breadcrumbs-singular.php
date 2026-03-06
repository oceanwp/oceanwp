<?php
/**
 * OceanWP Breadcrumbs Singular Provider
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class OceanWP_Breadcrumbs_Singular_Provider extends OceanWP_Breadcrumbs_Provider_Abstract {

	/**
	 * Get items.
	 */
	public function get_items() {
		$post    = get_queried_object();
		$post_id = get_queried_object_id();

		if ( ! $post ) {
			return array();
		}

		// If the post has a parent, follow the parent trail.
		if ( 0 < $post->post_parent ) {
			$this->add_post_parents( $post->post_parent );
		} else {
			$this->add_post_hierarchy( $post_id );
		}

		// Post type taxonomy
		$posts_tax     = get_theme_mod( 'ocean_breadcrumb_posts_taxonomy', 'category' );
		$portfolio_tax = get_theme_mod( 'ocean_breadcrumb_portfolio_taxonomy', 'ocean_portfolio_category' );

		// If the post type is 'post'.
		if ( 'post' === $post->post_type && 'none' !== $posts_tax ) {
			if ( 'blog' === $posts_tax && 'posts' !== get_option( 'show_on_front' ) ) {
				$blog_page_id = get_option( 'page_for_posts' );
				if ( $blog_page_id ) {
					$this->add_crumb( get_the_title( $blog_page_id ), get_permalink( $blog_page_id ) );
				}
			} else {
				$this->add_post_terms( $post_id, $posts_tax );
			}
		} 
		// If the post type is 'ocean_portfolio'.
		elseif ( class_exists( 'Ocean_Portfolio' ) && 'ocean_portfolio' === $post->post_type && 'none' !== $portfolio_tax ) {
			$portfolio_id = get_theme_mod( 'op_portfolio_page' );
			if ( 'portfolio' === $portfolio_tax && ! empty( $portfolio_id ) ) {
				$this->add_crumb( get_the_title( $portfolio_id ), get_permalink( $portfolio_id ) );
			} else {
				$this->add_post_terms( $post_id, $portfolio_tax );
			}
		}
		// Other posts types
		else {
			if ( ! empty( $this->args['post_taxonomy'][ $post->post_type ] ) ) {
				$this->add_post_terms( $post_id, $this->args['post_taxonomy'][ $post->post_type ] );
			}
		}

		// Add post title
		if ( ! empty( $this->args['show_title'] ) ) {
			$url = '';
			if ( 1 < get_query_var( 'page' ) || is_paged() ) {
				$url = get_permalink( $post_id );
			}
			$this->add_crumb( get_the_title( $post_id ), $url, true );
		}

		return $this->crumbs;
	}

	/**
	 * Add post parents.
	 */
	protected function add_post_parents( $post_id ) {
		$parents = array();

		while ( $post_id ) {
			$post = get_post( $post_id );
			if ( ! $post ) break;

			// If we hit front page, bail
			if ( 'page' === $post->post_type && 'page' === get_option( 'show_on_front' ) && $post_id == get_option( 'page_on_front' ) ) {
				break;
			}

			$parents[] = array(
				'label' => get_the_title( $post_id ),
				'url'   => get_permalink( $post_id ),
			);

			if ( 0 >= $post->post_parent ) break;
			$post_id = $post->post_parent;
		}

		if ( ! empty( $parents ) ) {
			$parents = array_reverse( $parents );
			foreach ( $parents as $parent ) {
				$this->add_crumb( $parent['label'], $parent['url'] );
			}
		}
	}

	/**
	 * Add post hierarchy.
	 */
	protected function add_post_hierarchy( $post_id ) {
		$post_type = get_post_type( $post_id );
		$post_type_obj = get_post_type_object( $post_type );

		if ( ! $post_type_obj ) return;

		// If post type has an archive, add it
		if ( $post_type_obj->has_archive ) {
			$label = ! empty( $post_type_obj->labels->archive_title ) ? $post_type_obj->labels->archive_title : $post_type_obj->labels->name;
			$label = apply_filters( 'post_type_archive_title', $label, $post_type );
			$this->add_crumb( $label, get_post_type_archive_link( $post_type ) );
		}

		// Handle 'post' type especially (blog page)
		if ( 'post' === $post_type ) {
			$blog_page_id = get_option( 'page_for_posts' );
			if ( $blog_page_id && 'page' === get_option( 'show_on_front' ) ) {
				$this->add_crumb( get_the_title( $blog_page_id ), get_permalink( $blog_page_id ) );
			}
		}
	}
}
