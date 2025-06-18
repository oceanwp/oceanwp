<?php
/**
 * OceanWP Breadcrumb 404 Class
 * 
 * Module for 404 error pages.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_404' ) ) {

	class OceanWP_Breadcrumb_404 {

		/**
		 * Get breadcrumb items for 404 pages.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_404() ) {
				return [];
			}

			// Get the label from the Customizer, with default fallback.
			$label = get_theme_mod(
				'ocean_breadcrumb_translation_error',
				esc_html__( '404 Not Found', 'oceanwp' )
			);

			$label = trim( $label );

			return [
				[
					'label' => '<span class="breadcrumb-error">' . esc_html( $label ) . '</span>',
					'url'   => '',
					'raw'   => true, // Contains raw HTML.
				],
			];
		}

		/**
		 * Whether this is a terminal breadcrumb (no more modules after it).
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_404();
		}
	}

}
