<?php
/**
 * Main Schema Loader Class
 * 
 * @package OceanWP WordPress Theme
 * @link https://oceanwp.org/
 * @since 4.1.1
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Schema_Loader' ) ) {

	// Initiate Class.
	class OceanWP_Schema_Loader {

		protected static $instance = null;

		protected $enabled;
		protected $use_manager;
		protected $schema_type;

		protected $legacy_schema;
		protected $jsonld_schema;

		private function __construct() {
			$this->enabled     = get_theme_mod( 'ocean_schema_markup', true );
			$this->use_manager = get_theme_mod( 'ocean_schema_manager', false );
			$this->schema_type = get_theme_mod( 'ocean_schema_type', 'jsonld' );

			if ( ! $this->enabled ) {
				return;
			}
		}

		public static function instance() {
			if ( self::$instance === null ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function init() {
			if ( ! $this->use_manager ) {
				$this->legacy_schema = OceanWP_Legacy_Schema::instance();
				return $this;
			}

			if ( $this->schema_type === 'jsonld' ) {
				$this->jsonld_schema = OceanWP_JsonLD_Schema::instance();
			} elseif ( $this->schema_type === 'mixed' ) {
				$this->legacy_schema = OceanWP_Legacy_Schema::instance();
				$this->jsonld_schema = OceanWP_JsonLD_Schema::instance();
			}

			return $this;
		}

		public function legacy_schema() {
			return $this->legacy_schema;
		}

		public function jsonld_schema() {
			return $this->jsonld_schema;
		}
	}

}
