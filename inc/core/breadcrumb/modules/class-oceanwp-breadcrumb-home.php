<?php
/**
 * OceanWP Breadcrumb Home Class
 * 
 * Module for the breadcrumb homepage item.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Home' ) ) {

	/**
	 * Get the breadcrumb items for the home page.
	 *
	 * @return array
	 */
	class OceanWP_Breadcrumb_Home {

		/**
		 * Get the breadcrumb items for the home page.
		 *
		 * @return array
		 */
		public function get_items(): array {
			// Only exclude the home item on the real front page (when blog and front page are same).
			if ( is_front_page() && is_home() ) {
				return [];
			}

			// Customizer settings.
			$setting         = get_theme_mod( 'ocean_breadcrumb_home_item', 'icon' );
			$custom_label    = trim( get_theme_mod( 'ocean_breadcrumb_translation_home', __( 'Home', 'oceanwp' ) ) );
			$network_enabled = get_theme_mod( 'ocean_breadcrumb_network_home', false ); // Add Customizer settings or filter?

			// Determine if this is a multisite subsite and network breadcrumb is enabled.
			$is_network_link = is_multisite() && ! is_main_site() && $network_enabled;

			// Set label.
			$label = '';
			if ( 'icon' === $setting ) {
				$label = oceanwp_icon( 'home', false );
				if ( is_customize_preview() ) {
					$label .= '<span class="breadcrumb-home has-text">' . esc_html( $custom_label ) . '</span>';
				}
			} else {
				$label = '<span class="breadcrumb-home has-icon">' . esc_html( $custom_label ) . '</span>';
			}

			// Override label with network name if we're linking to network.
			if ( $is_network_link ) {
				$label .= '<span class="breadcrumb-home network-label">' . esc_html( get_bloginfo( 'name' ) ) . '</span>'; // Check CSS class for this.
			}

			// Home URL.
			$url = $is_network_link ? network_home_url( '/' ) : home_url( '/' );

			return [
				[
					'label' => $label,
					'url'   => $url,
					// Use raw if the label is supposed to return any HTML elements, but ensure escaping is properly done previously.
					'raw'   => true,
				],
			];
		}
	}

}
