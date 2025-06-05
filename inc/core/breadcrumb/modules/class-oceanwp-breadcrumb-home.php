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
	 */
	class OceanWP_Breadcrumb_Home {

		/**
		 * Get the breadcrumb items for the home page.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( is_front_page() && is_home() ) {
				return [];
			}

			$setting         = get_theme_mod( 'ocean_breadcrumb_home_item', 'icon' );
			$custom_label    = trim( get_theme_mod( 'ocean_breadcrumb_translation_home', __( 'Home', 'oceanwp' ) ) );
			$network_enabled = get_theme_mod( 'ocean_breadcrumb_network_home', false );

			$is_network_link = is_multisite() && ! is_main_site() && $network_enabled;
			$url             = $is_network_link ? network_home_url( '/' ) : home_url( '/' );

			$label = '';

			if ( 'icon' === $setting ) {
				// Output icon first (outside span).
				$label = oceanwp_icon( 'home', false );

				// In Customizer, also show label beside icon for clarity.
				if ( is_customize_preview() ) {
					$label .= '<span class="breadcrumb-home has-text">' . esc_html( $custom_label ) . '</span>';
				}
			}
			elseif ( 'text' === $setting ) {
				// Text-only label.
				$class = is_customize_preview() ? 'breadcrumb-home has-text' : 'breadcrumb-home';
				$label = '<span class="' . esc_attr( $class ) . '">' . esc_html( $custom_label ) . '</span>';
			}

			// Optional: network site label.
			if ( $is_network_link ) {
				$label .= '<span class="breadcrumb-home network-label">' . esc_html( get_bloginfo( 'name' ) ) . '</span>';
			}

			return [
				[
					'label' => $label,
					'url'   => $url,
					'raw'   => true,
				],
			];
		}
	}
}
