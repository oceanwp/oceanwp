<?php
/**
 * Shim class for legacy breadcrumb compatibility.
 *
 * Proxies rendering to the new modular OceanWP_Breadcrumb_Generator system.
 *
 * @deprecated 4.2.0 Use oceanwp_get_breadcrumb_html() instead.
 */
class OceanWP_Breadcrumb_Trail {

	/**
	 * Constructor.
	 *
	 * @param array $args Optional arguments (ignored in shim).
	 */
	public function __construct( $args = array() ) {
		_deprecated_class( __CLASS__, '4.2.0', 'OceanWP_Breadcrumb_Generator + oceanwp_get_breadcrumb_html()' );
	}

	/**
	 * Outputs breadcrumb HTML.
	 *
	 * @return void
	 */
	public function trail() {
		echo oceanwp_get_breadcrumb_html();
	}

	/**
	 * Returns breadcrumb HTML.
	 *
	 * Some legacy filters expect a method that returns HTML instead of echoing.
	 *
	 * @return string
	 */
	public function get_trail() {
		return oceanwp_get_breadcrumb_html();
	}
}
