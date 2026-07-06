<?php
/**
 * OceanWP Customizer compatibility defaults.
 *
 * @package OceanWP WordPress theme
 * @since 4.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'oceanwp_get_customizer_defaults_map' ) ) {

	/**
	 * Get Customizer compatibility defaults map.
	 *
	 * old = existing installs
	 * new = new installs
	 *
	 * Important:
	 * - Use real Customizer setting IDs where possible.
	 * - Array-style typography IDs are supported, for example:
	 *   button_typography[font-size]
	 *
	 * @return array
	 */
	function oceanwp_get_customizer_defaults_map() {

		return apply_filters(
			'oceanwp_customizer_defaults_map',
			array(

				'ocean_primary_color' => array(
					'old' => '#13aff0',
					'new' => '#007a99',
				),

				'ocean_hover_primary_color' => array(
					'old' => '#0b7cac',
					'new' => '#005f78',
				),

				'ocean_links_color' => array(
					'old' => '#333333',
					'new' => '#333333',
				),

				'ocean_links_color_hover' => array(
					'old' => '#13aff0',
					'new' => '#007a99',
				),

				'ocean_theme_button_bg' => array(
					'old' => '#13aff0',
					'new' => '#007a99',
				),

				'ocean_theme_button_hover_bg' => array(
					'old' => '#0b7cac',
					'new' => '#005f78',
				),

				'ocean_theme_button_color' => array(
					'old' => '#ffffff',
					'new' => '#ffffff',
				),

				'ocean_theme_button_hover_color' => array(
					'old' => '#ffffff',
					'new' => '#ffffff',
				),

				/*
				 * Button spacing.
				 */
				'ocean_theme_button_top_padding' => array(
					'old' => '14',
					'new' => '14',
				),

				'ocean_theme_button_right_padding' => array(
					'old' => '20',
					'new' => '20',
				),

				'ocean_theme_button_bottom_padding' => array(
					'old' => '14',
					'new' => '14',
				),

				'ocean_theme_button_left_padding' => array(
					'old' => '20',
					'new' => '20',
				),

				/*
				 * Button typography.
				 *
				 * These are individual array-style values.
				 * This lets the same helper work for CSS variables and Customizer defaults.
				 */
				'button_typography[font-size]' => array(
					'old' => '12',
					'new' => '14',
				),

				'button_typography[font-size-unit]' => array(
					'old' => 'px',
					'new' => 'px',
				),

				'button_typography[font-weight]' => array(
					'old' => '600',
					'new' => '600',
				),

				'button_typography[line-height]' => array(
					'old' => '1',
					'new' => '1.2',
				),

				'button_typography[letter-spacing]' => array(
					'old' => '0.1',
					'new' => '0.05',
				),

				'button_typography[letter-spacing-unit]' => array(
					'old' => 'em',
					'new' => 'em',
				),

				'button_typography[text-transform]' => array(
					'old' => 'uppercase',
					'new' => 'none',
				),

				/*
				 * Full array default for the Customizer typography control itself.
				 *
				 * Use this in the option definition if the control expects the whole array.
				 */
				'button_typography' => array(
					'old' => array(
						'font-size'           => '12',
						'font-size-unit'      => 'px',
						'font-weight'         => '600',
						'line-height'         => '1',
						'letter-spacing'      => '0.1',
						'letter-spacing-unit' => 'em',
						'text-transform'      => 'uppercase',
					),
					'new' => array(
						'font-size'           => '14',
						'font-size-unit'      => 'px',
						'font-weight'         => '600',
						'line-height'         => '1.2',
						'letter-spacing'      => '0.05',
						'letter-spacing-unit' => 'em',
						'text-transform'      => 'none',
					),
				),

				/*
				 * Form/input examples.
				 */
				'ocean_input_color' => array(
					'old' => '#333333',
					'new' => '#333333',
				),

				'ocean_input_border_color' => array(
					'old' => '#dddddd',
					'new' => '#767676',
				),

				'ocean_input_border_color_focus' => array(
					'old' => '#bbbbbb',
					'new' => '#333333',
				),

				/*
				 * Future Customizer options.
				 *
				 * These may not exist yet, but adding them here is okay.
				 * If you later create the controls, the defaults are already ready.
				 */
				'ocean_widget_link_color' => array(
					'old' => '',
					'new' => '#000000',
				),

				'ocean_widget_link_color_hover' => array(
					'old' => '',
					'new' => '#000000',
				),

				'ocean_widget_link_text_decoration' => array(
					'old' => 'none',
					'new' => 'underline',
				),

				'ocean_widget_link_text_decoration_hover' => array(
					'old' => 'none',
					'new' => 'underline',
				),
			)
		);
	}
}

if ( ! function_exists( 'oceanwp_get_customizer_default' ) ) {

	/**
	 * Get compatibility-aware Customizer default.
	 *
	 * @param string $setting_id Setting ID.
	 * @param mixed  $fallback   Fallback value.
	 * @param string $version    Compatibility version.
	 *
	 * @return mixed
	 */
	function oceanwp_get_customizer_default( $setting_id, $fallback = '', $version = '4.2.0' ) {

		$defaults = oceanwp_get_customizer_defaults_map();

		if ( empty( $defaults[ $setting_id ] ) ) {
			return $fallback;
		}

		$is_existing_install = function_exists( 'oceanwp_is_existing_installation' )
			&& oceanwp_is_existing_installation( $version );

		if ( $is_existing_install ) {
			return array_key_exists( 'old', $defaults[ $setting_id ] )
				? $defaults[ $setting_id ]['old']
				: $fallback;
		}

		return array_key_exists( 'new', $defaults[ $setting_id ] )
			? $defaults[ $setting_id ]['new']
			: $fallback;
	}
}
