<?php
/**
 * OceanWP Plugin Installer Skin
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Oceanwp_Upgrader_Skin extends Plugin_Installer_Skin {

	public function header() {  }

	public function footer() {  }

	public function feedback( $string, ...$args ) {     }

	public function before() {  }

	public function after() {   }

	protected function decrement_update_count( $type ) {    }

	public function bulk_header() {     }

	public function bulk_footer() {     }

	public function error( $errors ) {  }
}
