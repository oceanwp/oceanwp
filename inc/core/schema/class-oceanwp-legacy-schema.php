<?php
/**
 * OceanWP Legacy Schema Class.
 * 
 * Outputs Schema microdata.
 * This Class supports the use of minimal (layout) microdata.
 * Minimal microdata can be used individually or in combination with the OceanWP_JsonLD_Schema class.
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

if ( ! class_exists( 'OceanWP_Legacy_Schema' ) ) {

	/**
	 * Legacy microdata Schema constructor
	 */
	class OceanWP_Legacy_Schema {

		protected static $instance = null;

		protected $enabled;
		protected $use_manager;
		protected $schema_type;
		protected $use_minimal;

		/**
		 * Constructor.
		 */
		private function __construct() {
			$this->enabled     = get_theme_mod( 'ocean_schema_markup', true );
			$this->use_manager = get_theme_mod( 'ocean_schema_manager', false );
			$this->schema_type = get_theme_mod( 'ocean_schema_type', 'jsonld' );
			$this->use_minimal = get_theme_mod( 'ocean_schema_min_microdata', false );
		}

		/**
		 * Returns the singleton instance of the class.
		 *
		 * @return OceanWP_Legacy_Schema
		 */
		public static function instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Returns microdata attribute string for given location.
		 *
		 * @param string $location Schema context location.
		 * @return string|null Schema microdata attributes or null if not applicable.
		 */
		public function get_microdata( $location ) {
			// Return null if schema is disabled.
			if ( ! $this->enabled ) {
				return null;
			}

			if ( $this->use_manager ) {
				if ( 'jsonld' === $this->schema_type ) {
					return null;
				}
				if ( 'mixed' === $this->schema_type ) {
					$this->use_minimal = true;
				}
			}

			// Set schema for layout elements - minimal schema.
			$layout_schemas = [
				'header'      => 'https://schema.org/WPHeader',
				'footer'      => 'https://schema.org/WPFooter',
				'sidebar'     => 'https://schema.org/WPSideBar',
				'site_navigation'  => 'https://schema.org/SiteNavigationElement',
				'logo'        => $this->use_minimal ? null : 'https://schema.org/Brand',
				'author_link' => $this->use_minimal ? null : 'https://schema.org/Person',
			];

			if ( $this->use_minimal && ! isset( $layout_schemas[ $location ] ) ) {
				return null;
			}

			if ( 'html' === $location ) {
				$type = 'WebPage';
				if ( is_home() || is_front_page() ) {
					$type = 'WebPage';
				} elseif ( is_category() || is_tag() ) {
					$type = 'CollectionPage'; // Perhaps Blog instead?
				} elseif ( is_singular( 'post' ) ) {
					$type = 'Article';
				} elseif ( is_page() ) {
					$type = 'WebPage';
				} else {
					$type = 'WebPage';
				}

				$schema = 'itemscope itemtype="https://schema.org/' . esc_attr( $type ) . '"';
				return apply_filters( 'oceanwp_new_schema_location_html', $schema );
			}

			// Layout components.
			if ( isset( $layout_schemas[ $location ] ) ) {
				$schema = 'itemscope itemtype="' . esc_url( $layout_schemas[ $location ] ) . '"';
				return apply_filters( 'oceanwp_new_schema_markup', $schema, $location );
			}

			// Itemprops for content.
			$itemprops = [
				'headline'      => 'headline',
				'entry_content' => 'text',
				'publish_date'  => 'datePublished',
				'modified_date' => 'dateModified',
				'author_name'   => 'name',
				'author_link'   => 'author',
				'item'          => 'item',
				'url'           => 'url',
				'position'      => 'position',
				'image'         => 'image',
				'main'          => 'mainContentOfPage',
			];

			if ( isset( $itemprops[ $location ] ) ) {
				$schema = 'itemprop="' . esc_attr( $itemprops[ $location ] ) . '"';

				if ( 'main' === $location ) {
					$schema .= ' itemscope itemtype="https://schema.org/WebPageElement"';
				}

				return apply_filters( 'oceanwp_new_schema_markup', $schema, $location );
			}

			return null;
		}

	}

}
