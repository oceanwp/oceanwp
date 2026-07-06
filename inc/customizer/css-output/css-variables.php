<?php
/**
 * OceanWP CSS Variables Output.
 *
 * @package OceanWP WordPress theme
 * @since 4.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * OceanWP CSS variables class.
 */
class OceanWP_CSS_Variables {

	/**
	 * Version where new defaults are introduced.
	 *
	 * Existing installs before this version keep old defaults.
	 */
	const COMPAT_VERSION = '4.2.0';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_filter( 'ocean_head_css', array( $this, 'generate_css' ) );
	}

	/**
	 * Generate CSS variables.
	 *
	 * @param string $output CSS output.
	 * @return string
	 */
	public function generate_css( $output ) {

		if ( function_exists( 'oceanwp_is_accessibility_feature_enabled' )
			&& ! oceanwp_is_accessibility_feature_enabled( 'ocean_accessibility_mode' ) ) {
			return $output;
		}

		$desktop_vars = array();
		$tablet_vars  = array();
		$mobile_vars  = array();

		foreach ( $this->get_token_map() as $token ) {
			$value = $this->get_token_value( $token );

			if ( '' === $value || null === $value ) {
				continue;
			}

			$media = isset( $token['media'] ) ? $token['media'] : 'desktop';

			if ( 'tablet' === $media ) {
				$tablet_vars[ $token['var'] ] = $value;
			} elseif ( 'mobile' === $media ) {
				$mobile_vars[ $token['var'] ] = $value;
			} else {
				$desktop_vars[ $token['var'] ] = $value;
			}
		}

		// Tablet inherits desktop.
		foreach ( $desktop_vars as $name => $value ) {
			if (
				! isset( $tablet_vars[ $name ] ) ||
				'' === $tablet_vars[ $name ] ||
				'inherit' === $tablet_vars[ $name ]
			) {
				$tablet_vars[ $name ] = $value;
			}
		}

		// Mobile inherits tablet (which already inherited desktop).
		foreach ( $desktop_vars as $name => $value ) {

			$tablet_value = isset( $tablet_vars[ $name ] )
				? $tablet_vars[ $name ]
				: $value;

			if (
				! isset( $mobile_vars[ $name ] ) ||
				'' === $mobile_vars[ $name ] ||
				'inherit' === $mobile_vars[ $name ]
			) {
				$mobile_vars[ $name ] = $tablet_value;
			}
		}

		$css = '';

		if ( ! empty( $desktop_vars ) ) {
			$css .= $this->build_root_css( $desktop_vars );
		}

		if ( ! empty( $tablet_vars ) ) {
			$css .= '@media screen and (max-width: 768px){';
			$css .= $this->build_root_css( $tablet_vars );
			$css .= '}';
		}

		if ( ! empty( $mobile_vars ) ) {
			$css .= '@media screen and (max-width: 480px){';
			$css .= $this->build_root_css( $mobile_vars );
			$css .= '}';
		}

		if ( ! empty( $css ) ) {
			$output .= '/* CSS Variables */' . $css;
		}

		return $output;
	}

	/**
	 * Build :root CSS.
	 *
	 * @param array $vars CSS variables.
	 * @return string
	 */
	private function build_root_css( $vars ) {

		$css = ':root{';

		foreach ( $vars as $name => $value ) {
			$name  = $this->sanitize_css_variable_name( $name );
			$value = $this->sanitize_css_value( $value );

			if ( '' === $name || '' === $value ) {
				continue;
			}

			$css .= $name . ':' . $value . ';';
		}

		$css .= '}';

		return $css;
	}

	/**
	 * Get token value.
	 *
	 * Priority:
	 * 1. User-saved Customizer value.
	 * 2. Compatibility-aware Customizer default.
	 * 3. Internal token old/new default.
	 * 4. Fallback.
	 *
	 * @param array $token Token data.
	 * @return string
	 */
	private function get_token_value( $token ) {

		$setting  = isset( $token['setting'] ) ? $token['setting'] : '';
		$fallback = isset( $token['fallback'] ) ? $token['fallback'] : '';
		$type     = isset( $token['type'] ) ? $token['type'] : 'text';

		/*
		 * Real Customizer-backed token.
		 *
		 * Example:
		 * ocean_theme_button_color
		 * button_typography[font-size]
		 */
		if ( $setting ) {
			$default = function_exists( 'oceanwp_get_customizer_default' )
				? oceanwp_get_customizer_default( $setting, $fallback, self::COMPAT_VERSION )
				: $fallback;

			$value = $this->get_theme_mod_value( $setting, $default );
		}

		/*
		 * Internal-only token.
		 *
		 * Example:
		 * --owp-focus-outline-width
		 * --owp-widget-link-underline-offset
		 */
		else {
			$old_default = isset( $token['old'] ) ? $token['old'] : $fallback;
			$new_default = isset( $token['new'] ) ? $token['new'] : $old_default;

			$value = $this->get_compatible_default( $old_default, $new_default );
		}

		if ( '' === $value || null === $value ) {
			return '';
		}

		if ( 'size' === $type ) {
			$value = $this->maybe_add_unit( $value, $token );
		}

		return $this->sanitize_token_value( $value, $type );
	}

	/**
	 * Get old or new default.
	 *
	 * @param mixed $old_default Old default.
	 * @param mixed $new_default New default.
	 * @return mixed
	 */
	private function get_compatible_default( $old_default, $new_default ) {

		if ( function_exists( 'oceanwp_is_existing_installation' ) && oceanwp_is_existing_installation( self::COMPAT_VERSION ) ) {
			return $old_default;
		}

		return $new_default;
	}

	/**
	 * Get theme mod value.
	 *
	 * Supports normal settings:
	 * ocean_theme_button_color
	 *
	 * And array settings:
	 * button_typography[font-size]
	 *
	 * @param string $setting Setting ID.
	 * @param mixed  $default Default value.
	 * @return mixed
	 */
	private function get_theme_mod_value( $setting, $default = '' ) {

		if ( false === strpos( $setting, '[' ) ) {
			return get_theme_mod( $setting, $default );
		}

		preg_match( '/^([^\[]+)\[([^\]]+)\]$/', $setting, $matches );

		if ( empty( $matches[1] ) || empty( $matches[2] ) ) {
			return $default;
		}

		$theme_mod = get_theme_mod( $matches[1], array() );
		$key       = $matches[2];

		if ( ! is_array( $theme_mod ) || ! array_key_exists( $key, $theme_mod ) || '' === $theme_mod[ $key ] || null === $theme_mod[ $key ] ) {
			return $default;
		}

		return $theme_mod[ $key ];
	}

	/**
	 * Maybe add unit to size values.
	 *
	 * @param mixed $value Value.
	 * @param array $token Token data.
	 * @return string
	 */
	private function maybe_add_unit( $value, $token ) {

		$value = trim( (string) $value );

		if ( '' === $value ) {
			return '';
		}

		if ( in_array( $value, array(
			'inherit',
			'initial',
			'unset',
			'revert',
			'auto',
		), true ) ) {
			return $value;
		}

		/*
		 * Already has a CSS unit or CSS function.
		 */
		if ( preg_match( '/(px|em|rem|%|vw|vh|pt|ch|ex|clamp\(|calc\(|min\(|max\()/i', $value ) ) {
			return $value;
		}

		$unit = isset( $token['unit'] ) ? $token['unit'] : '';

		/*
		 * Unit controlled by another Customizer setting.
		 *
		 * Example:
		 * button_typography[font-size-unit]
		 */
		if ( isset( $token['unit_setting'] ) && $token['unit_setting'] ) {
			$unit_fallback = isset( $token['unit_fallback'] ) ? $token['unit_fallback'] : $unit;

			$unit_default = function_exists( 'oceanwp_get_customizer_default' )
				? oceanwp_get_customizer_default( $token['unit_setting'], $unit_fallback, self::COMPAT_VERSION )
				: $unit_fallback;

			$unit = $this->get_theme_mod_value( $token['unit_setting'], $unit_default );
		}

		if ( '' === $unit || null === $unit ) {
			return $value;
		}

		$unit = $this->sanitize_token_value( $unit, 'unit' );

		if ( '' === $unit ) {
			return $value;
		}

		return $value . $unit;
	}

	/**
	 * Sanitize token value.
	 *
	 * @param mixed  $value Value.
	 * @param string $type  Value type.
	 * @return string
	 */
	private function sanitize_token_value( $value, $type ) {

		$value = trim( (string) $value );

		if ( '' === $value ) {
			return '';
		}

		switch ( $type ) {
			case 'color':
				/*
				 * Supports:
				 * #RGB, #RGBA, #RRGGBB, #RRGGBBAA,
				 * rgb(), rgba(), hsl(), hsla(),
	 			 * transparent, currentColor.
				 */
				if ( preg_match(
					'/^(#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})|rgb[a]?\([0-9.,%\s]+\)|hsl[a]?\([0-9.,%\s]+\)|transparent|currentColor)$/',
					$value
				) ) {
					return $value;
				}
				return '';

			case 'raw':
				/*
				 * Controlled raw values.
				 *
				 * Needed for safe variable references such as:
				 * var(--owp-link-color, #333333)
				 */
				if ( preg_match( '/^[a-zA-Z0-9#(),.%\-\s_]+$|^var\(--[a-zA-Z0-9\-_]+,\s*#[A-Fa-f0-9]{3,6}\)$/', $value ) ) {
					return $value;
				}
				return '';

			case 'size':
				$value = trim( $value );

				// Keywords should never receive a unit.
				if ( in_array( $value, array( 'inherit', 'initial', 'unset', 'revert', 'auto' ), true ) ) {
					return $value;
				}

				/*
				 * Supports:
				 * 14px, 1.2em, 100%, clamp(), calc(), min(), max().
				 */
				if ( preg_match( '/^[0-9.\-+\s%a-zA-Z(),\/]+$/', $value ) ) {
					return $value;
				}
				return '';

			case 'number':
				if ( is_numeric( $value ) ) {
					return $value;
				}
				return '';

			case 'unit':
				$allowed_units = array(
					'px',
					'em',
					'rem',
					'%',
					'vw',
					'vh',
					'pt',
					'ch',
					'ex',
				);

				if ( in_array( $value, $allowed_units, true ) ) {
					return $value;
				}
				return '';

			case 'font-family':
				return sanitize_text_field( $value );

			case 'font-weight':
				$allowed_weights = array(
					'normal',
					'bold',
					'bolder',
					'lighter',
					'100',
					'200',
					'300',
					'400',
					'500',
					'600',
					'700',
					'800',
					'900',
				);

				if ( in_array( $value, $allowed_weights, true ) ) {
					return $value;
				}
				return '';

			case 'text-transform':
				$allowed_transforms = array(
					'none',
					'capitalize',
					'uppercase',
					'lowercase',
				);

				if ( in_array( $value, $allowed_transforms, true ) ) {
					return $value;
				}
				return '';

			case 'text-decoration':
				$allowed_decorations = array(
					'none',
					'underline',
					'overline',
					'line-through',
				);

				if ( in_array( $value, $allowed_decorations, true ) ) {
					return $value;
				}
				return '';

			case 'keyword':
				return sanitize_key( $value );

			default:
				return sanitize_text_field( $value );
		}
	}

	/**
	 * Sanitize CSS variable name.
	 *
	 * @param string $name Variable name.
	 * @return string
	 */
	private function sanitize_css_variable_name( $name ) {

		$name = trim( (string) $name );

		if ( preg_match( '/^--[a-zA-Z0-9\-_]+$/', $name ) ) {
			return $name;
		}

		return '';
	}

	/**
	 * Sanitize final CSS value.
	 *
	 * @param string $value CSS value.
	 * @return string
	 */
	private function sanitize_css_value( $value ) {

		$value = trim( (string) $value );

		/*
		 * Avoid breaking out of declarations.
		 */
		$value = str_replace( array( ';', '{', '}' ), '', $value );

		return $value;
	}

	/**
	 * CSS token map.
	 *
	 * This is where future CSS variables are added.
	 *
	 * For real Customizer settings:
	 * - use setting + fallback
	 * - old/new defaults live in oceanwp_get_customizer_defaults_map()
	 *
	 * For internal-only values:
	 * - leave setting empty
	 * - use old/new directly in the token
	 *
	 * @return array
	 */
	private function get_token_map() {

		return apply_filters(
			'oceanwp_css_variables_token_map',
			array(

				/*
				 * Global primary/accent colors.
				 */
				array(
					'var'      => '--owp-primary-color',
					'setting'  => 'ocean_primary_color',
					'fallback' => '#13aff0',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-primary-color-hover',
					'setting'  => 'ocean_hover_primary_color',
					'fallback' => '#0b7cac',
					'type'     => 'color',
				),

				/*
				 * Global links.
				 */
				array(
					'var'      => '--owp-link-color',
					'setting'  => 'ocean_links_color',
					'fallback' => '#333333',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-link-color-hover',
					'setting'  => 'ocean_links_color_hover',
					'fallback' => '#13aff0',
					'type'     => 'color',
				),

				/*
				 * Buttons: colors.
				 */
				array(
					'var'      => '--owp-button-bg-color',
					'setting'  => 'ocean_theme_button_bg',
					'fallback' => '#13aff0',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-button-bg-color-hover',
					'setting'  => 'ocean_theme_button_hover_bg',
					'fallback' => '#0b7cac',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-button-text-color',
					'setting'  => 'ocean_theme_button_color',
					'fallback' => '#ffffff',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-button-text-color-hover',
					'setting'  => 'ocean_theme_button_hover_color',
					'fallback' => '#ffffff',
					'type'     => 'color',
				),

				/*
				 * Buttons: spacing.
				 */
				array(
					'var'      => '--owp-button-padding-top',
					'setting'  => 'ocean_theme_button_top_padding',
					'fallback' => '14',
					'type'     => 'size',
					'unit'     => 'px',
				),

				array(
					'var'      => '--owp-button-padding-right',
					'setting'  => 'ocean_theme_button_right_padding',
					'fallback' => '20',
					'type'     => 'size',
					'unit'     => 'px',
				),

				array(
					'var'      => '--owp-button-padding-bottom',
					'setting'  => 'ocean_theme_button_bottom_padding',
					'fallback' => '14',
					'type'     => 'size',
					'unit'     => 'px',
				),

				array(
					'var'      => '--owp-button-padding-left',
					'setting'  => 'ocean_theme_button_left_padding',
					'fallback' => '20',
					'type'     => 'size',
					'unit'     => 'px',
				),

				/*
				 * Buttons: typography.
				 */
				array(
					'var'           => '--owp-button-font-size',
					'setting'       => 'button_typography[font-size]',
					'unit_setting'  => 'button_typography[font-size-unit]',
					'fallback'      => '12',
					'unit_fallback' => 'px',
					'type'          => 'size',
				),

				array(
					'var'      => '--owp-button-font-weight',
					'setting'  => 'button_typography[font-weight]',
					'fallback' => '600',
					'type'     => 'font-weight',
				),

				array(
					'var'           => '--owp-button-letter-spacing',
					'setting'       => 'button_typography[letter-spacing]',
					'unit_setting'  => 'button_typography[letter-spacing-unit]',
					'fallback'      => '0.1',
					'unit_fallback' => 'em',
					'type'          => 'size',
				),

				array(
					'var'      => '--owp-button-line-height',
					'setting'  => 'button_typography[line-height]',
					'fallback' => '1',
					'type'     => 'number',
				),

				array(
					'var'      => '--owp-button-text-transform',
					'setting'  => 'button_typography[text-transform]',
					'fallback' => 'uppercase',
					'type'     => 'text-transform',
				),

				/*
				 * Responsive button typography.
				 *
				 * These only output if users saved tablet/mobile values.
				 */
				array(
					'var'           => '--owp-button-font-size',
					'setting'       => 'button_tablet_typography[font-size]',
					'unit_setting'  => 'button_typography[font-size-unit]',
					'fallback'      => '',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'tablet',
				),

				array(
					'var'           => '--owp-button-font-size',
					'setting'       => 'button_mobile_typography[font-size]',
					'unit_setting'  => 'button_typography[font-size-unit]',
					'fallback'      => '',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'mobile',
				),

				/*
				 * Forms: colors.
				 */
				array(
					'var'      => '--owp-input-text-color',
					'setting'  => 'ocean_input_color',
					'fallback' => '#333333',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-input-border-color',
					'setting'  => 'ocean_input_border_color',
					'fallback' => '#dddddd',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-input-border-color-focus',
					'setting'  => 'ocean_input_border_color_focus',
					'fallback' => '#bbbbbb',
					'type'     => 'color',
				),

				/*
				 * Forms: internal size examples.
				 *
				 * No direct Customizer setting yet.
				 */
				array(
					'var'     => '--owp-input-font-size',
					'setting' => '',
					'old'     => '14',
					'new'     => '16',
					'type'    => 'size',
					'unit'    => 'px',
				),

				array(
					'var'     => '--owp-input-line-height',
					'setting' => '',
					'old'     => '1.8',
					'new'     => '1.6',
					'type'    => 'number',
				),

				/*
				 * Widget/sidebar links.
				 *
				 * Example of new styling that did not really exist before.
				 * Existing sites keep old behavior.
				 * New sites get stronger link styling.
				 */
				array(
					'var'     => '--owp-widget-link-color',
					'setting' => '',
					'old'     => 'var(--owp-link-color, #333333)',
					'new'     => '#007a99',
					'type'    => 'raw',
				),

				array(
					'var'     => '--owp-widget-link-color-hover',
					'setting' => '',
					'old'     => 'var(--owp-link-color-hover, #13aff0)',
					'new'     => '#005f78',
					'type'    => 'raw',
				),

				array(
					'var'     => '--owp-widget-link-text-decoration',
					'setting' => '',
					'old'     => 'none',
					'new'     => 'underline',
					'type'    => 'text-decoration',
				),

				array(
					'var'     => '--owp-widget-link-text-decoration-hover',
					'setting' => '',
					'old'     => 'none',
					'new'     => 'underline',
					'type'    => 'text-decoration',
				),

				array(
					'var'     => '--owp-widget-link-underline-offset',
					'setting' => '',
					'old'     => 'auto',
					'new'     => '0.2em',
					'type'    => 'size',
				),

				/*
				 * Accessibility/internal variables.
				 */
				array(
					'var'     => '--owp-focus-outline-width',
					'setting' => '',
					'old'     => '2',
					'new'     => '2',
					'type'    => 'size',
					'unit'    => 'px',
				),

				array(
					'var'     => '--owp-focus-outline-offset',
					'setting' => '',
					'old'     => '2',
					'new'     => '2',
					'type'    => 'size',
					'unit'    => 'px',
				),

				array(
					'var'     => '--owp-focus-outline-color',
					'setting' => '',
					'old'     => 'currentColor',
					'new'     => 'currentColor',
					'type'    => 'color',
				),

				array(
					'var'     => '--owp-button-focus-outline-color',
					'setting' => '',
					'old'     => 'var(--owp-button-bg-color-hover, var(--owp-button-bg-color, var(--owp-primary-color, currentColor)))',
					'new'     => 'var(--owp-button-bg-color-hover, var(--owp-button-bg-color, var(--owp-primary-color, currentColor)))',
					'type'    => 'raw',
				),

				/**
				 * A11y CSS
				 */
				// Search form label
				array(
					'var'      => '--owp-search-form-label-color',
					'setting'  => 'ocean_custom_header_search_form_label_color',
					'fallback' => '#000000',
					'type'     => 'color',
				),

				array(
					'var'           => '--owp-search-form-label-font-size',
					'setting'       => 'ocean_custom_header_search_form_label_size',
					'unit_setting'  => 'ocean_custom_header_search_form_label_size_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
				),

				array(
					'var'           => '--owp-search-form-label-font-size',
					'setting'       => 'ocean_custom_header_search_form_label_size_tablet',
					'unit_setting'  => 'ocean_custom_header_search_form_label_size_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'tablet',
				),

				array(
					'var'           => '--owp-search-form-label-font-size',
					'setting'       => 'ocean_custom_header_search_form_label_size_mobile',
					'unit_setting'  => 'ocean_custom_header_search_form_label_size_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'mobile',
				),

				// Comment form label
				array(
					'var'      => '--owp-comment-form-label-color',
					'setting'  => 'ocean_comment_form_label_color',
					'fallback' => '#000000',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-comment-form-label-required-mark-color',
					'setting'  => 'ocean_comment_form_label_required_mark_color',
					'fallback' => '#000000',
					'type'     => 'color',
				),

				array(
					'var'           => '--owp-comment-form-label-font-size',
					'setting'       => 'ocean_comment_form_label_size',
					'unit_setting'  => 'ocean_comment_form_label_size_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
				),

				array(
					'var'           => '--owp-comment-form-label-font-size',
					'setting'       => 'ocean_comment_form_label_size',
					'unit_setting'  => 'ocean_comment_form_label_size_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'tablet',
				),

				array(
					'var'           => '--owp-comment-form-label-font-size',
					'setting'       => 'ocean_comment_form_label_size_mobile',
					'unit_setting'  => 'ocean_comment_form_label_size_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'mobile',
				),

				// Header social external icon.
				array(
					'var'      => '--owp-social-external-mark-color',
					'setting'  => 'ocean_header_social_external_icon_color',
					'fallback' => '#ffffff',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-social-external-mark-bg',
					'setting'  => 'ocean_header_social_external_icon_background_color',
					'fallback' => '#000000',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-social-external-mark-size',
					'setting'  => 'ocean_header_social_external_icon_size',
					'fallback' => '0.72',
					'type'     => 'size',
					'unit'     => 'em',
				),

				array(
					'var'      => '--owp-social-external-mark-size',
					'setting'  => 'ocean_header_social_external_icon_size_tablet',
					'fallback' => '',
					'type'     => 'size',
					'unit'     => 'em',
					'media'    => 'tablet',
				),

				array(
					'var'      => '--owp-social-external-mark-size',
					'setting'  => 'ocean_header_social_external_icon_size_mobile',
					'fallback' => '',
					'type'     => 'size',
					'unit'     => 'em',
					'media'    => 'mobile',
				),

				array(
					'var'      => '--owp-social-external-mark-offset-x',
					'setting'  => 'ocean_header_social_external_icon_x_offset',
					'fallback' => '-0.15',
					'type'     => 'size',
					'unit'     => 'em',
				),

				array(
					'var'      => '--owp-social-external-mark-offset-y',
					'setting'  => 'ocean_header_social_external_icon_y_offset',
					'fallback' => '-0.25',
					'type'     => 'size',
					'unit'     => 'em',
				),

				// Header media
				array(
					'var'      => '--owp-header-media-button-bg-color',
					'setting'  => 'ocean_header_video_button_background_color',
					'fallback' => 'rgba(0, 0, 0, 0.5)',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-bg-color-hover',
					'setting'  => 'ocean_header_video_button_background_color_hover',
					'fallback' => 'rgba(0, 0, 0, 0.75)',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-bg-color-focus',
					'setting'  => 'ocean_header_video_button_background_color_focus',
					'fallback' => 'rgba(0, 0, 0, 0.75)',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-icon-color',
					'setting'  => 'ocean_header_video_button_icon_color',
					'fallback' => 'rgba(255, 255, 255, 0.8)',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-icon-color-hover',
					'setting'  => 'ocean_header_video_button_icon_color_hover',
					'fallback' => '#ffffff',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-icon-color-focus',
					'setting'  => 'ocean_header_video_button_icon_color_focus',
					'fallback' => '#ffffff',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-border-color',
					'setting'  => 'ocean_header_video_button_border_color',
					'fallback' => 'rgba(255, 255, 255, 0.6)',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-border-color-hover',
					'setting'  => 'ocean_header_video_button_border_color_hover',
					'fallback' => 'rgba(255, 255, 255, 0.9)',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-button-border-color-focus',
					'setting'  => 'ocean_header_video_button_border_color_focus',
					'fallback' => 'rgba(255, 255, 255, 0.9)',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-header-media-overlay-color',
					'setting'  => 'ocean_header_image_overlay_color',
					'fallback' => 'rgba(0, 0, 0, 0.3)',
					'type'     => 'color',
				),

				array(
					'var'           => '--owp-header-media-height',
					'setting'       => 'ocean_accessible_header_media_height',
					'unit_setting'  => 'ocean_accessible_header_media_height_unit',
					'fallback'      => 600,
					'unit_fallback' => 'px',
					'type'          => 'size',
				),

				array(
					'var'           => '--owp-header-media-height',
					'setting'       => 'ocean_accessible_header_media_height_tablet',
					'unit_setting'  => 'ocean_accessible_header_media_height_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'tablet',
				),

				array(
					'var'           => '--owp-header-media-height',
					'setting'       => 'ocean_accessible_header_media_height_mobile',
					'unit_setting'  => 'ocean_accessible_header_media_height_unit',
					'fallback'      => 'inherit',
					'unit_fallback' => 'px',
					'type'          => 'size',
					'media'         => 'mobile',
				),

				array(
					'var'      => '--owp-header-media-image-position',
					'setting'  => 'ocean_header_image_position',
					'fallback' => 'initial',
				),

				array(
					'var'      => '--owp-header-media-image-size',
					'setting'  => 'ocean_header_image_size',
					'fallback' => 'initial',
				),

				// Top bar social external icon.
				array(
					'var'      => '--owp-topbar-social-external-mark-color',
					'setting'  => 'ocean_top_bar_social_external_icon_color',
					'fallback' => '#ffffff',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-topbar-social-external-mark-bg',
					'setting'  => 'ocean_top_bar_social_external_icon_background_color',
					'fallback' => '#000000',
					'type'     => 'color',
				),

				array(
					'var'      => '--owp-topbar-social-external-mark-size',
					'setting'  => 'ocean_top_bar_social_external_icon_size',
					'fallback' => '0.72',
					'type'     => 'size',
					'unit'     => 'em',
				),

				array(
					'var'      => '--owp-topbar-social-external-mark-size',
					'setting'  => 'ocean_top_bar_social_external_icon_size_tablet',
					'fallback' => '',
					'type'     => 'size',
					'unit'     => 'em',
					'media'    => 'tablet',
				),

				array(
					'var'      => '--owp-topbar-social-external-mark-size',
					'setting'  => 'ocean_top_bar_social_external_icon_size_mobile',
					'fallback' => '',
					'type'     => 'size',
					'unit'     => 'em',
					'media'    => 'mobile',
				),

				array(
					'var'      => '--owp-topbar-social-external-mark-offset-x',
					'setting'  => 'ocean_top_bar_social_external_icon_x_offset',
					'fallback' => '-0.15',
					'type'     => 'size',
					'unit'     => 'em',
				),

				array(
					'var'      => '--owp-topbar-social-external-mark-offset-y',
					'setting'  => 'ocean_top_bar_social_external_icon_y_offset',
					'fallback' => '-0.25',
					'type'     => 'size',
					'unit'     => 'em',
				),
			)
		);
	}
}

return new OceanWP_CSS_Variables();
