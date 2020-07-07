<?php
/**
 * OceanWP theme strings
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'oceanwp_theme_strings' ) ) {

	/**
	 * OceanWP Theme Strings
	 *
	 *  @author Amit Singh (@apprimit)
	 *  @since 1.8.5
	 *
	 * @param  string  $value  String key.
	 * @param  boolean $echo   Print string.
	 * @return mixed           Return string or nothing.
	 */
	function oceanwp_theme_strings( $value, $echo = true ) {

		$oceanwp_strings = apply_filters(
			'oceanwp_theme_strings',
			array(

				'owp-string-header-skip-link'            => __( 'Skip to content', 'oceanwp' ),
				'owp-string-search-text'                 => __( 'Search', 'oceanwp' ),
				'owp-string-mobile-search-text'          => __( 'Search', 'oceanwp' ),
				'owp-string-mobile-fs-search-text'       => __( 'Type your search', 'oceanwp' ),
				'owp-string-header-replace-search-text'  => __( 'Type then hit enter to search...', 'oceanwp' ),
				'owp-string-search-overlay-search-text'  => __( 'Type then hit enter to search...', 'oceanwp' ),
				'owp-string-vertical-header-search-text' => __( 'Search...', 'oceanwp' ),
				'owp-string-medium-header-search-text'   => __( 'Search...', 'oceanwp' ),
				'owp-string-comment-logout-text'         => __( 'Log out of this account', 'oceanwp' ),
				'owp-string-comment-placeholder'         => __( 'Your comment here...', 'oceanwp' ),
				'owp-string-comment-profile-edit'        => __( 'Click to edit your profile', 'oceanwp' ),
				'owp-string-comment-post-button'         => __( 'Post Comment', 'oceanwp' ),
				'owp-string-comment-name-req'            => __( 'Name (required)', 'oceanwp' ),
				'owp-string-comment-email-req'           => __( 'Email (required)', 'oceanwp' ),
				'owp-string-comment-name'                => __( 'Name', 'oceanwp' ),
				'owp-string-comment-email'               => __( 'Email', 'oceanwp' ),
				'owp-string-comment-website'             => __( 'Website', 'oceanwp' ),
				'owp-string-search-continue-reading'     => __( 'Continue Reading', 'oceanwp' ),
				'owp-string-post-continue-reading'       => __( 'Continue Reading', 'oceanwp' ),
				'owp-string-single-related-posts'        => __( 'You Might Also Like', 'oceanwp' ),
				'owp-string-single-next-post'            => __( 'Next Post', 'oceanwp' ),
				'owp-string-single-screen-reader-rm'     => __( 'Read more articles', 'oceanwp' ),

				// Woocommerce.
				'owp-string-woo-quick-view-text'         => __( 'Quick View', 'oceanwp' ),
				'owp-string-woo-quick-view-close'        => __( 'Close quick preview', 'oceanwp' ),
				'owp-string-woo-floating-bar-select-btn' => __( 'Select Options', 'oceanwp' ),
				'owp-string-woo-floating-bar-selected'   => __( 'Selected:', 'oceanwp' ),
				'owp-string-woo-floating-bar-out-stock'  => __( 'Out of stock', 'oceanwp' ),

			)
		);

		if ( is_rtl() ) {
			// do your stuff.
		}

		$owp_string = isset( $oceanwp_strings[ $value ] ) ? $oceanwp_strings[ $value ] : '';

		/**
		 * Print or return strings
		 */
		if ( $echo ) {
			echo $owp_string; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $owp_string;
		}
	}
}
