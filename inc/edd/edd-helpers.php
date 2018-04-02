<?php
/**
 * Easy Digital Downloads helper functions
 *
 * @package OceanWP WordPress theme
 */

/**
 * Checks if a page is using EDD
 *
 * @since 1.0.0
 */

if ( ! function_exists( 'oceanwp_is_edd_page' ) ) {
	function oceanwp_is_edd_page() {
		if (
			is_singular( 'download' ) ||
			is_post_type_archive( 'download' ) ||
			is_tax( 'download_category' ) ||
			is_tax( 'download_tag' ) ||
			edd_is_checkout() ||
			edd_is_success_page() ||
			edd_is_failed_transaction_page() ||
			edd_is_purchase_history_page()
		) {
			return true;
		}
		return false;
	}
}