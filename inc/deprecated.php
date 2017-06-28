<?php
/**
 * Deprecated functions
 *
 * @package OceanWP WordPress theme
 */

// No direct access, please
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Returns header page ID
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_header_page_id' ) ) {

	function oceanwp_header_page_id() {

		// Return false if custom header is not selected
		if ( 'custom' != oceanwp_header_style() ) {
			return false;
		}

		// Get page ID from Customizer
		$page_id = get_theme_mod( 'ocean_header_page_id' );

		// Get page content
		if ( ! empty( $page_id ) ) {

			$page = get_post( $page_id );

			if ( $page && ! is_wp_error( $page ) ) {
				$page_id = $page->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'ocean_header_page_id', $page_id );

	}

}

/**
 * Returns footer page ID
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_footer_page_id' ) ) {

	function oceanwp_footer_page_id() {

		// Return false if disabled via Customizer
		if ( true != get_theme_mod( 'ocean_footer_widgets', true ) ) {
			return null;
		}

		// Get page ID from Customizer
		$page_id = get_theme_mod( 'ocean_footer_widgets_page_id' );

		// Get page content
		if ( ! empty( $page_id ) ) {

			$page = get_post( $page_id );

			if ( $page && ! is_wp_error( $page ) ) {
				$page_id = $page->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'ocean_footer_page_id', $page_id );

	}

}

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