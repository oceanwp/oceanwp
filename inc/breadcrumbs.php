<?php
/**
 * OceanWP Breadcrumbs Gateway
 *
 * This file serves as a gateway to the new class-based breadcrumb system.
 * It maintains backward compatibility by keeping original function names
 * and providing a shim class for the legacy breadcrumb system.
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load the Manager from the new core location.
require_once OCEANWP_THEME_DIR . '/inc/core/breadcrumbs/class-breadcrumbs-manager.php';
require_once OCEANWP_THEME_DIR . '/inc/core/breadcrumbs/class-breadcrumbs-compatibility.php';

/**
 * Shows a breadcrumb for all types of pages.
 *
 * @param  array $args Arguments.
 * @return void
 */
function oceanwp_breadcrumb_trail( $args = array() ) {
	echo OceanWP_Breadcrumbs_Manager::instance()->get_breadcrumbs( $args );
}

/**
 * Legacy class wrapper for backward compatibility.
 * Ocean Extra and other plugins might still instantiate this.
 */
class OceanWP_Breadcrumb_Trail {
	protected $args;

	public function __construct( $args = array() ) {
		$this->args = $args;
	}

	public function trail() {
		return OceanWP_Breadcrumbs_Manager::instance()->get_breadcrumbs( $this->args );
	}

	public function get_trail() {
		return OceanWP_Breadcrumbs_Manager::instance()->get_breadcrumbs( $this->args );
	}
}

/**
 * Support for external plugin breadcrumbs.
 * This function is still used by various hooks in the theme.
 */
function oceanwp_breadcrumbs_sources( $options ) {
	return OceanWP_Breadcrumbs_Compatibility::instance()->get_sources( $options );
}
add_filter( 'oceanwp_breadcrumbs_source_list', 'oceanwp_breadcrumbs_sources' );

/**
 * Add container to SEOPRess breadcrumbs.
 */
function sp_breadcrumbs_before() {
	OceanWP_Breadcrumbs_Compatibility::instance()->sp_before();
}
add_action( 'seopress_breadcrumbs_before_html', 'sp_breadcrumbs_before' );

/**
 * Div closed
 */
function sp_breadcrumbs_after() {
	OceanWP_Breadcrumbs_Compatibility::instance()->sp_after();
}
add_action( 'seopress_breadcrumbs_after_html', 'sp_breadcrumbs_after' );

/**
 * Add container to Rank Math breadcrumbs.
 */
function rm_breadcrumbs( $args ) {
	return OceanWP_Breadcrumbs_Compatibility::instance()->rm_args( $args );
}
add_action( 'rank_math/frontend/breadcrumb/args', 'rm_breadcrumbs' );

/**
 * Add container to WooCommerce breadcrumbs.
 */
function owp_woo_breadcrumbs( $args ) {
	return OceanWP_Breadcrumbs_Compatibility::instance()->woo_defaults( $args );
}
add_filter( 'woocommerce_breadcrumb_defaults', 'owp_woo_breadcrumbs' );
