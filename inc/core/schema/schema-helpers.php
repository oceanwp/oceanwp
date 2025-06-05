<?php
/**
 * Centralized functions for the OceanWP Schema functionality.
 * 
 * @package OceanWP WordPress Theme
 * @link https://oceanwp.org/
 * @author OceanWP
 * @since 4.2.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Determines whether legacy schema microdata should be used.
 * 
 * Evaluates Customizer settings to decide if legacy HTML microdata
 * (eg. BreadcrumbList, Article) should be output on the site.
 *
 * Conditions:
 * - Global schema setting ('ocean_schema_enable') must be enabled.
 * - If the Schema Manager ('ocean_schema_manager') is enabled, this function returns false
 *   since it uses JSON-LD and disables microdata output.
 * - If the Minimal Microdata option ('ocean_schema_min_microdata') is enabled,
 *   this function returns false, since only layout-related microdata (like WPHeader)
 *   is to be used, excluding things like breadcrumbs or article schema.
 *
 * @since 4.2.0
 *
 * @return bool True if legacy microdata schema should be used, false otherwise.
 */
if ( ! function_exists( 'oceanwp_use_schema_microdata' ) ) {
	function oceanwp_use_schema_microdata() {
		// If schema is disabled, bail.
		if ( ! get_theme_mod( 'ocean_schema_enable', true ) ) {
			return false;
		}

		// If manager is enabled, it takes over (JSON-LD output), no microdata.
		if ( get_theme_mod( 'ocean_schema_manager', false ) ) {
			return false;
		}

		// If minimal schema is enabled (layout only), skip microdata.
		if ( get_theme_mod( 'ocean_schema_min_microdata', false ) ) {
			return false;
		}

		// Otherwise, output legacy microdata.
		return true;
	}
}

/**
 * Helper function: returns value of the oceanwp_use_schema_microdata().
 * 
 * Used for clarity - determine wheterh to output legacy schema markup or not.
 *
 * @since 4.2.0
 *
 * @return bool True if legacy microdata schema should be used, false otherwise.
 */
function oceanwp_should_output_legacy_schema() {
	return oceanwp_use_schema_microdata();
}

/**
 * Global access helper for legacy schema microdata output.
 * 
 * @since 4.2.0
 *
 * @return OceanWP_Legacy_Schema|null
 */
if ( ! function_exists( 'oceanwp_schema_data' ) ) {
	function oceanwp_schema_data() {
		return OceanWP_Schema_Loader::instance()->init()->legacy_schema();
	}
}

/**
 * Returns legacy schema microdata for a given type, if available.
 *
 * This function checks if the legacy schema is active and returns
 * the appropriate microdata attribute string (eg. 'itemtype', 'itemscope')
 * for the provided schema element type. If legacy schema is disabled,
 * it returns an empty string.
 * 
 * Example usage: oceanwp_schema_microdata( 'image' );
 *
 * @since 4.2.0
 *
 * @param string $location The location type of schema microdata to retrieve (e.g., 'url', 'image').
 * @return string Microdata attribute string or an empty string if legacy schema is not enabled.
 */
if ( ! function_exists( 'oceanwp_schema_microdata' ) ) {
	function oceanwp_schema_microdata( $location ) {
		$schema = oceanwp_schema_data();
		return $schema ? $schema->get_microdata( $location ) : '';
	}
}

/**
 * Echo microdata attribute for a given location.
 *
 * Example usage: <div <?php oceanwp_schema_attr( 'header' ); ?>>
 * 
 * @since 4.2.0
 *
 * @param string $location Schema location key.
 */
if ( ! function_exists( 'oceanwp_schema_attr' ) ) {
	function oceanwp_schema_attr( $location ) {
		$schema = oceanwp_schema_data();
		if ( $schema ) {
			echo $schema->get_microdata( $location );
		}
	}
}
