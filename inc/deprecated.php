<?php
/**
 * Deprecated functions
 *
 * @package OceanWP WordPress theme
 */

// No direct access, please
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Custom excerpts based on wp_trim_words
 *
 * @since	1.0.0
 * @link	http://codex.wordpress.org/Function_Reference/wp_trim_words
 */
if ( ! function_exists( 'oceanwp_excerpt' ) ) {

	function oceanwp_excerpt( $length = 30 ) {

		// Get global post
		global $post;

		// Get post data
		$id			= $post->ID;
		$excerpt	= $post->post_excerpt;
		$content 	= $post->post_content;

		// Display custom excerpt
		if ( $excerpt ) {
			$output = $excerpt;
		}

		// Check for more tag
		elseif ( strpos( $content, '<!--more-->' ) ) {
			$output = get_the_content( $excerpt );
		}

		// Generate auto excerpt
		else {
			$output = wp_trim_words( strip_shortcodes( get_the_content( $id ) ), $length );
		}

		// Echo output
		echo wp_kses_post( $output );

	}

}

/**
 * Main schema markup
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_main_schema_markup' ) ) {

	function oceanwp_main_schema_markup() {

		$itemtype = 'http://schema.org/WebPageElement';
		$itemprop = 'mainContentOfPage';

		if ( is_singular( 'post' ) ) {
			$itemprop = '';
			$itemtype = 'http://schema.org/Blog';
		}

		$schema = 'itemprop="'. $itemprop .'" itemscope="itemscope" itemtype="'. $itemtype .'"';

		return $schema;

	}

}

/**
 * Returns shortcode
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_has_shortcode' ) ) {

	function oceanwp_has_shortcode() {

		// Shortcode is NULL by default
		$shortcode = NULL;

		// Posts & Pages
		if ( $meta = get_post_meta( oceanwp_post_id(), 'ocean_has_shortcode', true ) ) {
			$shortcode = $meta;
		}

		// Apply filters and return
		return apply_filters( 'ocean_has_shortcode', $shortcode );

	}

}

/**
 * Returns page content from ID for the 404 page
 *
 * @since 1.2.0
 */
if ( ! function_exists( 'oceanwp_error_page_content' ) ) {

	function oceanwp_error_page_content() {

		// Get page ID from Customizer
		$page_id = get_theme_mod( 'ocean_error_page_id' );

		// Get page content
		if ( ! empty( $page_id ) ) {

			$page = get_post( $page_id );

			if ( $page && ! is_wp_error( $page ) ) {
				$page_id = $page->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'ocean_error_page_id', $page_id );

	}

}