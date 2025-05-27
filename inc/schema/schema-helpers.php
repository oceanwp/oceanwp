<?php
/**
 * Centralized functions for the OceanWP Schema functionality.
 * 
 * @package OceanWP WordPress Theme
 * @link https://oceanwp.org/
 * @since 4.1.1
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Global access helper for legacy schema microdata output.
 * 
 * @since 4.1.1
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
 * @since 4.1.1
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

/**
 * Initiate the OceanWP Schema Loader.
 * 
 * @since 4.1.1
 *
 * @return OceanWP_Schema_Loader
 */
add_action( 'after_setup_theme', 'oceanwp_load_schema' );

if ( ! function_exists( 'oceanwp_load_schema' ) ) {
	function oceanwp_load_schema() {
		if ( class_exists( 'OceanWP_Schema_Loader' ) ) {
			OceanWP_Schema_Loader::instance()->init();
		}
	}
}
