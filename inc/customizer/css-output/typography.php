<?php
/**
 * OceanWP Customizer CSS Output
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The OceanWP Customizer class
 */
class OceanWP_Typography_CSS {

	/**
	 * fonts
	 *
	 * @var $fonts
	 * @access private
	 * @since 3.5.1
	 */
	private $fonts = array();

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter('ocean_head_css', array($this, 'generate_css'), 99 );
		add_action('wp_enqueue_scripts', array($this, 'load_fonts'));
	}

	/**
	 * Generate css
	 *
	 * @var string $output  CSS String.
	 */
	public function generate_css( $output ) {

		$options = ocean_get_customize_settings_data();

		$css = '';

		foreach ( $options as $section_key => $section_options ) {
			if ( isset($section_options['options']) ) {
				$section_css = $this->get_css_data( $section_options['options'] );
				if ( ! empty( $section_css ) ) {
					$css .= $section_css;
				}
			}
		}

		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* Typography */' . $css;
		}

		return $output;
	}

	/**
	 * Get css data
	 *
	 * @var object $options Settings.
	 */
	public function get_css_data( $options ) {

		$css = '';

		if ( is_array($options) ) {
			foreach ( $options as $option_key => $option_data ) {
				if ( $this->is_typography_option( $option_data ) ) {
					$settings = $this->get_typography_settings( $option_data );
					if ( ! empty( $settings ) ) {
						$css .= $this->generate_css_string( $settings );
					}
				}

				if ( isset( $option_data['options'] ) ) {
					$css .= $this->get_css_data( $option_data['options'] );
				}
			}
		}

		return $css;
	}

	/**
	 * Check if type is typography
	 *
	 * @var object $option_data Settings.
	 */
	private function is_typography_option( $option_data ) {
		$result = isset( $option_data['type'] ) && $option_data['type'] === 'ocean-typography' &&
				isset( $option_data['setting_args'] ) && is_array( $option_data['setting_args'] );

		return $result;
	}

	/**
	 * Get typography settings.
	 *
	 * @param array $option_data Option data.
	 * @return array Typography settings.
	 */
	private function get_typography_settings($option_data) {
		$settings = array();

		foreach ($option_data['setting_args'] as $setting_arg_key => $setting_arg_data) {
			$idName = $setting_arg_data['id'];

			// Check if the ID contains brackets
			if (strpos($idName, '[') !== false && strpos($idName, ']') !== false) {
				$parts = explode('[', $idName);

				if (count($parts) > 1) {
					$theme_mod = rtrim($parts[0], '[');
					$property = rtrim($parts[1], ']');

					$selector = $option_data['selector'];

					if (!isset($settings[$selector])) {
						$settings[$selector] = array();
					}

					// Fetch and assign the setting value
					if (!isset($settings[$selector][$setting_arg_key])) {
						$value = get_theme_mod($theme_mod, array());
						$settings[$selector][$setting_arg_key] = isset($value[$property]) ? $value[$property] : '';
					}

					if (empty($settings[$selector][$setting_arg_key]) && isset($setting_arg_data['attr']['default'])) {
						$settings[$selector][$setting_arg_key] = $setting_arg_data['attr']['default'];
					}
				}
			} else {
				// Handle settings without brackets
				$theme_mod = $idName;
				$selector = $option_data['selector'];

				if (!isset($settings[$selector])) {
					$settings[$selector] = array();
				}

				// Fetch and assign the setting value
				if (!isset($settings[$selector][$setting_arg_key])) {
					$value = get_theme_mod($theme_mod);
					$settings[$selector][$setting_arg_key] = isset($value) ? $value : '';
				}

				if (empty($settings[$selector][$setting_arg_key]) && isset($setting_arg_data['attr']['default'])) {
					$settings[$selector][$setting_arg_key] = $setting_arg_data['attr']['default'];
				}

			}
		}

		return $settings;
	}





	/**
	 * Generate CSS string
	 *
	 * @var Object $settings Settings.
	 * @return string
	 */
	public function generate_css_string( $settings ) {

		$css = '';

		$properties = [
			'font-family' => 'fontFamily',
			'font-size' => 'fontSize',
			'line-height' => 'lineHeight',
			'letter-spacing' => 'letterSpacing',
			'font-weight' => 'fontWeight',
			'text-transform' => 'textTransform',
			'text-decoration' => 'textDecoration',
			//'color' => 'textColor',
		];

		foreach ( $settings as $selector => $settings_key ) {

			$selector_css = '';
			$selector_css_tablet = '';
			$selector_css_mobile = '';

			foreach ( $properties as $property => $key ) {
				if ( isset( $settings_key[$key] ) && $settings_key[$key] ) {
					$value = $settings_key[$key];

					// Check if a unit is specified in the settings.
					$unit_key = $key . 'Unit';

					if ( 'fontSize' === $key || 'letterSpacing' === $key ) {

						if ( ! preg_match('/(px|em|rem|%|vw|vh|pt)$/', $value) ) {
							if ( isset( $settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
								$value .= $settings_key[$unit_key];
							} else {
								$value .= 'px';
							}
						}
					}

					if ( 'lineHeight' === $key  ) {

						if ( ! preg_match('/(px|em|rem|%|vw|vh|pt)$/', $value) ) {
							if ( isset( $settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
								$value .= $settings_key[$unit_key];
							} else {
								$value .= '';
							}
						}
					}

					if ( 'fontFamily' === $key ) {

						if ((preg_match('/\s/', $value) && strpos($value, ',') === false) &&
							!in_array(strtolower(trim($value)), ['serif', 'sans-serif', 'monospace'])) {
							$value = "'" . $value . "'";
						}

						if ( isset($settings_key[$key] ) && $settings_key[$key] ) {
							$this->fonts[$settings_key[$key]]['name'] = $settings_key[$key];
							$this->fonts[$settings_key[$key]]['subset'] = $settings_key['fontSubset'];
							$this->fonts[$settings_key[$key]]['variant'] = $settings_key['fontWeight'];
						}
					}

					$selector_css .= $property . ': ' . $value . ';';
				}

				// Check for tablet and mobile settings
				$tabletKey = $key . 'Tablet';
				$mobileKey = $key . 'Mobile';

				// For tablet.
				if ( isset($settings_key[$tabletKey] ) && $settings_key[$tabletKey] ) {
					$value = $settings_key[$tabletKey];

					// Check if a unit is specified in the settings
					$unit_key = $key . 'Unit';

					if ( 'fontSize' === $key || 'letterSpacing' === $key ) {

						if ( ! preg_match('/(px|em|rem|%|vw|vh|pt)$/', $value) ) {
							if ( isset($settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
								$value .= $settings_key[$unit_key];
							} else {
								$value .= 'px';
							}
						}
					}

					if ( 'lineHeight' === $key  ) {

						if ( ! preg_match('/(px|em|rem|%|vw|vh|pt)$/', $value) ) {
							if ( isset( $settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
								$value .= $settings_key[$unit_key];
							} else {
								$value .= '';
							}
						}
					}

					$media_query = "@media screen and (max-width: 768px) { $selector {"
						. $property . ': ' . $value . ';}}';
					$selector_css_tablet .= $media_query;
				}

				// For mobile.
				if ( isset( $settings_key[$mobileKey] ) && $settings_key[$mobileKey] ) {
					$value = $settings_key[$mobileKey];

					// Check if a unit is specified in the settings
					$unit_key = $key . 'Unit';

					if ( 'fontSize' === $key || 'letterSpacing' === $key ) {

						if ( ! preg_match('/(px|em|rem|%|vw|vh|pt)$/', $value) ) {
							if ( isset($settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
								$value .= $settings_key[$unit_key];
							} else {
								$value .= 'px';
							}
						}
					}

					if ( 'lineHeight' === $key  ) {

						if ( ! preg_match('/(px|em|rem|%|vw|vh|pt)$/', $value) ) {
							if ( isset( $settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
								$value .= $settings_key[$unit_key];
							} else {
								$value .= '';
							}
						}
					}

					$media_query = "@media screen and (max-width: 480px) { $selector {"
						. $property . ': ' . $value . ';}}';
					$selector_css_mobile .= $media_query;
				}
			}

			// Check if the selector has any properties before adding it.
			if ( ! empty( $selector_css ) ) {
				$css .= $selector . '{' . $selector_css . '}';
			}

			if ( ! empty( $selector_css_tablet ) ) {
				$css .= $selector_css_tablet;
			}
			if ( ! empty( $selector_css_mobile ) ) {
				$css .= $selector_css_mobile;
			}
			if ( isset( $settings_key['textColorHover'] ) && '' !== $settings_key['textColorHover'] ) {
				$css .= $selector . ':hover {color:' . $settings_key['textColorHover'] . '}';
			}
		}

		return $css;
	}

	/**
	 * Get fonts
	 *
	 * @return array
	 */
	public function generate_fonts() {
		$options = ocean_get_customize_settings_data();
		$fonts = [];

		foreach ($options as $section_key => $section_options) {
			if (isset($section_options['options'])) {
				$section_fonts = $this->get_fonts_array($section_options['options']);
				if (!empty($section_fonts)) {
					$fonts = array_merge($fonts, $section_fonts);
				}
			}
		}

		return $fonts;
	}

	/**
	 * Get font names from options
	 *
	 * @var object $options Settings.
	 */
	public function get_fonts_array($options) {
		$fonts = [];

		if (is_array($options)) {
			foreach ($options as $option_key => $option_data) {
				if ($this->is_typography_option($option_data)) {
					$settings = $this->get_typography_settings($option_data);
					if (!empty($settings)) {
						$fonts = array_merge($fonts, $this->generate_font_data($settings));
					}
				}

				if (isset($option_data['options'])) {
					$fonts = array_merge($fonts, $this->get_fonts_array($option_data['options']));
				}
			}
		}

		return $fonts;
	}

	/**
	 * Generate font names
	 *
	 * @var Object $settings Settings.
	 * @return array Array of font names.
	 */
	public function generate_font_data($settings) {
		$fonts = [];

		foreach ($settings as $selector => $settings_key) {
			if (isset($settings_key['fontFamily']) && !empty($settings_key['fontFamily'])) {
				$fonts[] = $settings_key['fontFamily'];
			}
		}

		return $fonts;
	}


	/**
	 * Loads Google fonts
	 */
	public function load_fonts() {
		$fonts = $this->generate_fonts();

		if ( ! empty( $fonts ) && is_array( $fonts ) ) {
			foreach ( $fonts as $font ) {
				if (!empty($font)) {
					oceanwp_enqueue_google_font( $font );
				}
			}
		}
	}

}

return new OceanWP_Typography_CSS();
