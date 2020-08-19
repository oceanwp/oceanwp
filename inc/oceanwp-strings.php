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
	 *  @author Amit Singh (apprimit@gmail.com)
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

				'owp-string-header-skip-link'            => apply_filters( 'ocean_header_skip_link', __( 'Skip to content', 'oceanwp' ) ),
				'owp-string-search-text'                 => apply_filters( 'ocean_search_text', __( 'Search', 'oceanwp' ) ),
				'owp-string-mobile-search-text'          => apply_filters( 'ocean_mobile_search_text', __( 'Search', 'oceanwp' ) ),
				'owp-string-mobile-fs-search-text'       => apply_filters( 'ocean_mobile_fs_search_text', __( 'Type your search', 'oceanwp' ) ),
				'owp-string-header-replace-search-text'  => apply_filters( 'ocean_header_replace_search_text', __( 'Type then hit enter to search...', 'oceanwp' ) ),
				'owp-string-search-overlay-search-text'  => apply_filters( 'ocean_search_overlay_search_text', __( 'Type then hit enter to search', 'oceanwp' ) ),
				'owp-string-vertical-header-search-text' => apply_filters( 'ocean_vertical_header_search_text', __( 'Search...', 'oceanwp' ) ),
				'owp-string-medium-header-search-text'   => apply_filters( 'ocean_medium_header_search_text', __( 'Search...', 'oceanwp' ) ),
				'owp-string-comment-logout-text'         => apply_filters( 'ocean_comment_logout_text', __( 'Log out of this account', 'oceanwp' ) ),
				'owp-string-comment-placeholder'         => apply_filters( 'ocean_comment_placeholder', __( 'Your comment here...', 'oceanwp' ) ),
				'owp-string-comment-profile-edit'        => apply_filters( 'ocean_comment_profile_edit', __( 'Click to edit your profile', 'oceanwp' ) ),
				'owp-string-comment-post-button'         => apply_filters( 'ocean_comment_post_button', __( 'Post Comment', 'oceanwp' ) ),
				'owp-string-comment-name-req'            => apply_filters( 'ocean_comment_name_req', __( 'Name (required)', 'oceanwp' ) ),
				'owp-string-comment-email-req'           => apply_filters( 'ocean_comment_email_req', __( 'Email (required)', 'oceanwp' ) ),
				'owp-string-comment-name'                => apply_filters( 'ocean_comment_name', __( 'Name', 'oceanwp' ) ),
				'owp-string-comment-email'               => apply_filters( 'ocean_comment_email', __( 'Email', 'oceanwp' ) ),
				'owp-string-comment-website'             => apply_filters( 'ocean_comment_website', __( 'Website', 'oceanwp' ) ),
				'owp-string-search-continue-reading'     => apply_filters( 'ocean_search_continue_reading', __( 'Continue Reading', 'oceanwp' ) ),
				'owp-string-post-continue-reading'       => apply_filters( 'ocean_post_continue_reading', __( 'Continue Reading', 'oceanwp' ) ),
				'owp-string-single-related-posts'        => apply_filters( 'ocean_single_related_posts', __( 'You Might Also Like', 'oceanwp' ) ),
				'owp-string-single-next-post'            => apply_filters( 'ocean_single_next_post', __( 'Next Post', 'oceanwp' ) ),
				'owp-string-single-prev-post'            => apply_filters( 'ocean_single_prev_post', __( 'Previous Post', 'oceanwp' ) ),
				'owp-string-single-screen-reader-rm'     => apply_filters( 'ocean_single_screen_reader_rm', __( 'Read more articles', 'oceanwp' ) ),

				// Woocommerce.
				'owp-string-woo-quick-view-text'         => apply_filters( 'ocean_woo_quick_view_text', __( 'Quick View', 'oceanwp' ) ),
				'owp-string-woo-quick-view-close'        => apply_filters( 'ocean_woo_quick_view_close', __( 'Close quick preview', 'oceanwp' ) ),
				'owp-string-woo-floating-bar-select-btn' => apply_filters( 'ocean_woo_floating_bar_select_btn', __( 'Select Options', 'oceanwp' ) ),
				'owp-string-woo-floating-bar-selected'   => apply_filters( 'ocean_woo_floating_bar_selected', __( 'Selected:', 'oceanwp' ) ),
				'owp-string-woo-floating-bar-out-stock'  => apply_filters( 'ocean_woo_floating_bar_out_stock', __( 'Out of stock', 'oceanwp' ) ),
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
