<?php
/**
 * OceanWP composite Customizer control.
 *
 * @package OceanWP WordPress theme
 * @since 4.2.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( class_exists( 'WP_Customize_Control' ) ) {

	/**
	 * Provides one React mount point for an entire Customizer section.
	 */
	class OWP_Customize_Composite_Control extends WP_Customize_Control {

		/**
		 * Control type.
		 *
		 * @var string
		 */
		public $type = 'ocean-composite';

		/**
		 * Internal route definitions for this section.
		 *
		 * @var array
		 */
		public $routes = array();

		/**
		 * Top-level Customizer section ID.
		 *
		 * @var string
		 */
		public $root_section = '';

		/**
		 * Export control data to JavaScript.
		 */
		public function to_json() {
			parent::to_json();

			$this->json['routes']      = $this->routes;
			$this->json['rootSection'] = $this->root_section;
		}

		/**
		 * Render the stable React mount point.
		 */
		protected function render_content() {
			?>
			<div class="ocean-composite-customizer-root"></div>
			<?php
		}
	}
}
