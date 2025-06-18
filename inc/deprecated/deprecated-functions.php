<?php
/**
 * Centralized place for all deprecated functions.
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
 * Return correct schema markup.
 *
 * @since 1.2.10
 * @deprecated 4.2.0 Use oceanwp_schema_microdata() instead.
 * @see oceanwp_schema_microdata()
 *
 * @param string $location Schema location key.
 * @return string|null Schema microdata attributes.
 */
if ( ! function_exists( 'oceanwp_get_schema_markup' ) ) {

	/**
	 * Outputs schema markup.
	 *
	 * @param string $location
	 * @return string|null
	 */
	function oceanwp_get_schema_markup( $location ) {
		_deprecated_function( __FUNCTION__, '4.2.0', 'oceanwp_schema_microdata()' );

		// Prefer new schema system.
		if ( function_exists( 'oceanwp_schema_microdata' ) && oceanwp_schema_microdata() ) {
			return oceanwp_schema_microdata( $location );
		}

		// Legacy fallback (old logic preserved here).
		if ( ! get_theme_mod( 'ocean_schema_markup', true ) ) {
			return null;
		}

		$schema = $itemprop = $itemtype = '';

		if ( 'html' === $location ) {
			if ( is_home() || is_front_page() ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/WebPage"';
			} elseif ( is_category() || is_tag() ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/Blog"';
			} elseif ( is_singular( 'post' ) ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/Article"';
			} elseif ( is_page() ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/WebPage"';
			} else {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/WebPage"';
			}

			return apply_filters( 'oceanwp_schema_location_html', $schema );
		}

		$map = [
			'header'         => 'itemscope="itemscope" itemtype="https://schema.org/WPHeader"',
			'logo'           => 'itemscope itemtype="https://schema.org/Brand"',
			'site_navigation'=> 'itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement"',
			'main'           => 'itemprop="mainContentOfPage" itemscope itemtype="https://schema.org/WebPageElement"',
			'sidebar'        => 'itemscope="itemscope" itemtype="https://schema.org/WPSideBar"',
			'footer'         => 'itemscope="itemscope" itemtype="https://schema.org/WPFooter"',
			'headline'       => 'itemprop="headline"',
			'entry_content'  => 'itemprop="text"',
			'publish_date'   => 'itemprop="datePublished"',
			'modified_date'  => 'itemprop="dateModified"',
			'author_name'    => 'itemprop="name"',
			'author_link'    => 'itemprop="author" itemscope="itemscope" itemtype="https://schema.org/Person"',
			'item'           => 'itemprop="item"',
			'url'            => 'itemprop="url"',
			'position'       => 'itemprop="position"',
			'image'          => 'itemprop="image"',
		];

		if ( isset( $map[ $location ] ) ) {
			$schema = $map[ $location ];
		}

		return ' ' . apply_filters( 'ocean_schema_markup', $schema );
	}

}

/**
 * Outputs correct schema markup.
 *
 * @since 1.2.10
 * @deprecated 4.2.0 Use oceanwp_schema_attr() instead.
 * @see oceanwp_schema_attr()
 *
 * @param string $location Schema location key.
 */
if ( ! function_exists( 'oceanwp_schema_markup' ) ) {

	/**
	 * Outputs schema markup.
	 *
	 * @param string $location
	 */
	function oceanwp_schema_markup( $location ) {
		_deprecated_function( __FUNCTION__, '4.2.0', 'oceanwp_schema_attr()' );

		// Prefer new system if available.
		if ( function_exists( 'oceanwp_schema_attr' ) ) {
			echo oceanwp_schema_attr( $location );
			return;
		}

		// Fallback to deprecated function (which already has its own fallback).
		echo oceanwp_get_schema_markup( $location );
	}

}

/**
 * @deprecated 4.2.0 Use logic inside oceanwp_breadcrumbs_source_choices() instead.
 */
if ( ! function_exists( 'oceanwp_breadcrumbs_sources' ) ) {

	/**
	 * Handles breadcrumb sources.
	 *
	 * @param array $options
	 * @return array
	 */
	function oceanwp_breadcrumbs_sources( $options ) {
		_deprecated_function( __FUNCTION__, '4.2.0', 'Handled directly in oceanwp_breadcrumbs_source_choices()' );

		// This function is now redundant but retained for backward compatibility.
		return $options;
	}

}

/**
 * Outputs the breadcrumb trail.
 *
 * @deprecated 4.2.0 Use oceanwp_display_breadcrumb() instead.
 * @see oceanwp_display_breadcrumb()
 *
 * @param array $args Unused. Retained for backward compatibility.
 * @return void
 */
if ( ! function_exists( 'oceanwp_breadcrumb_trail' ) ) {

	function oceanwp_breadcrumb_trail( $args = array() ) {
		_deprecated_function( __FUNCTION__, '4.2.0', 'oceanwp_display_breadcrumb()' );

		oceanwp_display_breadcrumb();
	}
}

/**
 * @deprecated 4.2.0 Use oceanwp_output_breadcrumbs() instead.
 * @see oceanwp_output_breadcrumbs()
 */
if ( ! function_exists( 'ocean_breadcrumbs_view' ) ) {

	function ocean_breadcrumbs_view() {
		_deprecated_function( __FUNCTION__, '4.2.0', 'oceanwp_output_breadcrumbs()' );

		oceanwp_output_breadcrumbs();
	}
}
