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
 * Global access helper for legacy schema microdata output.
 * 
 * Example usage: oceanwp_schema_data()->get_microdata( $location );
 * Example usage: replace $location with relevant elements, eg. 'header', 'url', 'footer', 'image', etc. 
 * 
 * @since 4.2.0
 *
 * @return OceanWP_Legacy_Schema
 */
if ( ! function_exists( 'oceanwp_schema_data' ) ) {
	function oceanwp_schema_data() {
		return OceanWP_Schema_Loader::instance()->init()->legacy_schema();
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
