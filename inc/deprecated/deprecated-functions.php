<?php
/**
 * Centralized place for all deprecated functions.
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
 * Return correct schema markup.
 *
 * @since 1.2.10
 * @deprecated 4.1.1 Use oceanwp_schema_data() instead.
 * @see oceanwp_schema_data()
 *
 * @param string $location Schema location key.
 * @return string|null Schema microdata attributes.
 */
function oceanwp_get_schema_markup( $location ) {
	_deprecated_function( __FUNCTION__, '4.1.1', 'oceanwp_schema_data()' );

	// Prefer new schema system.
	if ( function_exists( 'oceanwp_schema_data' ) && oceanwp_schema_data() ) {
		return oceanwp_schema_data()->get_microdata( $location );
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

/**
 * Outputs correct schema markup.
 *
 * @since 1.2.10
 * @deprecated 4.1.1 Use oceanwp_schema_attr() instead.
 * @see oceanwp_schema_attr()
 *
 * @param string $location Schema location key.
 */
function oceanwp_schema_markup( $location ) {
	_deprecated_function( __FUNCTION__, '4.1.1', 'oceanwp_schema_attr()' );

	// Prefer new system if available.
	if ( function_exists( 'oceanwp_schema_attr' ) ) {
		echo oceanwp_schema_attr( $location );
		return;
	}

	// Fallback to deprecated function (which already has its own fallback).
	echo oceanwp_get_schema_markup( $location );
}
