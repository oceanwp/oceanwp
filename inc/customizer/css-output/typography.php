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
		add_filter('ocean_head_css', array($this, 'generate_css'), 99);
		add_action('enqueue_block_editor_assets', array( $this, 'gutenberg_editor_style' ));
		add_action('wp_enqueue_scripts', array($this, 'load_fonts'));
		add_action('block_editor_settings_all', array( $this, 'load_fonts_in_block_editor' ), 10, 1);
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
	 * Generate css
	 *
	 * @since 4.0.5
	 *
	 * @var string $output  CSS String.
	 */
	public function gutenberg_editor_style( $output ) {

		$options = ocean_get_customize_settings_data();

		$css = '';

		foreach ( $options as $section_key => $section_options ) {
			if ( isset($section_options['options']) ) {
				$section_css = $this->get_css_data( $section_options['options'], 'custom' );
				if ( ! empty( $section_css ) ) {
					$css .= $section_css;
				}
			}
		}

		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* Editor Typography */' . $css;
		}

		if ( ! empty( $output ) ) {
			wp_add_inline_style( 'wp-block-editor', $output );
		}
	}

	/**
	 * Get css data
	 *
	 * @var object $options Settings.
	 */
	public function get_css_data( $options, $isSelector='default' ) {

		$css = '';

		if ( is_array($options) ) {
			foreach ( $options as $option_key => $option_data ) {
				if ( $this->is_typography_option( $option_data ) ) {
					$settings = $this->get_typography_settings( $option_data, $isSelector );
					if ( ! empty( $settings ) ) {
						$css .= $this->generate_css_string( $settings );
					}
				}

				if ( isset( $option_data['options'] ) ) {
					$css .= $this->get_css_data( $option_data['options'], $isSelector );
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
	 * Typography
	 *
	 * @since 4.0.5
	 */
	public static function elements() {

		return apply_filters(
			'ocean_gutenberg_typography_tags',
			array(
				'ocean_body_typography' => array(
					'label'    => esc_html__( 'Body', 'oceanwp' ),
					'target'   => '.editor-styles-wrapper, .editor-styles-wrapper .block-editor-block-list__layout',
					'defaults' => array(
						'font-size'   => '14px',
						'color'       => '#929292',
						'line-height' => '1.8',
					),
				),
				'ocean_headings_typography'        => array(
					'label'    => esc_html__( 'All Headings', 'oceanwp' ),
					'target'   => '.editor-styles-wrapper .block-editor-block-list__layout h1, .editor-styles-wrapper .block-editor-block-list__layout h2, .editor-styles-wrapper .block-editor-block-list__layout h3, .editor-styles-wrapper .block-editor-block-list__layout h4, .editor-styles-wrapper .block-editor-block-list__layout h5, .editor-styles-wrapper .block-editor-block-list__layout h6',
					'exclude'  => array( 'font-size' ),
					'defaults' => array(
						'color'       => '#333333',
						'line-height' => '1.4',
					),
				),
				'ocean_heading_h1_typography'      => array(
					'label'    => esc_html__( 'Heading 1 (H1)', 'oceanwp' ),
					'target'   => '.editor-styles-wrapper .block-editor-block-list__layout h1, .editor-styles-wrapper .block-editor-block-list__layout h1 a',
					'defaults' => array(
						'font-size'   => '23px',
						'color'       => '#333333',
						'line-height' => '1.4',
					),
				),
				'ocean_heading_h2_typography'      => array(
					'label'    => esc_html__( 'Heading 2 (H2)', 'oceanwp' ),
					'target'   => '.editor-styles-wrapper .block-editor-block-list__layout h2, .editor-styles-wrapper .block-editor-block-list__layout h2 a',
					'defaults' => array(
						'font-size'   => '20px',
						'color'       => '#333333',
						'line-height' => '1.4',
					),
				),
				'ocean_heading_h3_typography'      => array(
					'label'    => esc_html__( 'Heading 3 (H3)', 'oceanwp' ),
					'target'   => '.editor-styles-wrapper .block-editor-block-list__layout h3, .editor-styles-wrapper .block-editor-block-list__layout h3 a',
					'defaults' => array(
						'font-size'   => '18px',
						'color'       => '#333333',
						'line-height' => '1.4',
					),
				),
				'ocean_heading_h4_typography'      => array(
					'label'    => esc_html__( 'Heading 4 (H4)', 'oceanwp' ),
					'target'   => '.editor-styles-wrapper .block-editor-block-list__layout h4, .editor-styles-wrapper .block-editor-block-list__layout h4 a',
					'defaults' => array(
						'font-size'   => '17px',
						'color'       => '#333333',
						'line-height' => '1.4',
					),
				),
				'ocean_title_for_single_post_page_title' => array(
					'label'    => esc_html__( 'Blog Post Title', 'oceanwp' ),
					'target'   => '.editor-styles-wrapper .editor-post-title__block .editor-post-title__input',
					'defaults' => array(
						'font-size'      => '34px',
						'color'          => '#333333',
						'line-height'    => '1.4',
						'letter-spacing' => '0.6',
					),
				),
			)
		);

	}

	/**
	 * Get typography settings.
	 *
	 * @param array $option_data Option data.
	 * @return array Typography settings.
	 */
	private function get_typography_settings($option_data, $isSelector) {
		$settings = array();

		$custom_selector = '';
		if ($isSelector === 'custom') {
			$elements = self::elements();
			foreach ($elements as $key => $element) {
				if ($key === $option_data['id']) {
					$custom_selector = isset($element['target']) ? $element['target'] : '';
					break;
				}
			}

			if (!empty($custom_selector)) {
				$settings = $this->process_settings($option_data['setting_args'], $custom_selector);
			}
		} else {
			$settings = $this->process_settings($option_data['setting_args'], $option_data['selector']);
		}

		return $settings;
	}

	/**
	 * Reusable function to process settings.
	 *
	 * @since 4.0.5
	 *
	 * @param array $setting_args Array of setting arguments.
	 * @param string $selector CSS selector for the settings.
	 * @return array Processed settings.
	 */
	private function process_settings($setting_args, $selector) {
		$settings = array();

		foreach ($setting_args as $setting_arg_key => $setting_arg_data) {
			$idName = $setting_arg_data['id'];

			// Check if the ID contains brackets
			if (strpos($idName, '[') !== false && strpos($idName, ']') !== false) {
				$parts = explode('[', $idName);

				if (count($parts) > 1) {
					$theme_mod = rtrim($parts[0], '[');
					$property = rtrim($parts[1], ']');

					if (!isset($settings[$selector])) {
						$settings[$selector] = array();
					}

					// Fetch and assign the setting value
					$value = get_theme_mod($theme_mod, array());
					$settings[$selector][$setting_arg_key] = $value[$property] ?? '';

					// Use default value if empty
					if (empty($settings[$selector][$setting_arg_key]) && isset($setting_arg_data['attr']['default'])) {
						$settings[$selector][$setting_arg_key] = $setting_arg_data['attr']['default'];
					}
				}
			} else {
				// Handle settings without brackets
				$theme_mod = $idName;

				if (!isset($settings[$selector])) {
					$settings[$selector] = array();
				}

				// Fetch and assign the setting value
				$value = get_theme_mod($theme_mod);
				$settings[$selector][$setting_arg_key] = $value ?? '';

				// Use default value if empty
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
					$settings = $this->get_typography_settings($option_data, 'default');
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

	/**
	 * Loads Google fonts in block editor
	 *
	 * @since 4.0.5
	 */
	public function load_fonts_in_block_editor($editor_settings) {
		$fonts = $this->generate_fonts();

		$styles = '';

		if ( ! empty( $fonts ) && is_array( $fonts ) ) {
			foreach ( $fonts as $font ) {
				if (!empty($font)) {
					$font_url = $this->get_google_font_url( $font );
					$styles .= "@import url('$font_url');\n";
				}
			}
		}

		if ( ! empty( $styles ) ) {
			$editor_settings['styles'][] = [
				'css'    => $styles,
				'inline' => true,
			];
		}

		return $editor_settings;

		// $css = '';
		// foreach ( $url as $font_name => $font_url ) {
		// 	$css .= "@import url('$font_url');\n";
		// }

		// // Save to a file or inline the style dynamically
		// $file = get_template_directory() . '/editor-fonts.css';
		// file_put_contents( $file, $css );

		// add_editor_style( 'editor-fonts.css' );
	}

	/**
	 * Generate the Google Font URL for a specified font.
	 *
	 * @since 4.0.5
	 *
	 * @param string $font The name of the Google Font to generate the URL for.
	 * @return string|null The constructed Google Fonts URL or null if the font is not enabled or valid.
	 */
	public function get_google_font_url( $font ) {
		$google_fonts_enabled = get_theme_mod( 'ocean_enable_google_fonts', ocean_inherit_legacy_google_settings() );

		// Return if 'Enable Google Fonts' setting is not true
		if ( true !== $google_fonts_enabled ) {
			return;
		}

		// Get list of all Google Fonts
		$google_fonts = oceanwp_google_fonts_array();

		// Make sure font is in our list of fonts
		if ( ! $google_fonts || ! in_array( $font, $google_fonts ) ) {
			return;
		}

		// Sanitize handle
		$handle = trim( $font );
		$handle = strtolower( $handle );
		$handle = str_replace( ' ', '-', $handle );

		// Sanitize font name
		$font = trim( $font );
		$font = str_replace( ' ', '+', $font );

		// Subset
		$get_subsets = get_theme_mod( 'ocean_google_font_subsets', array('latin') );

		if (is_string($get_subsets)) {
			$get_subsets = json_decode($get_subsets, true);
		}

		$subsets     = '';
		if ( ! empty( $get_subsets ) ) {
			$font_subsets = array();
			foreach ( $get_subsets as $get_subset ) {
				$font_subsets[] = $get_subset;
			}
			$subsets .= implode( ',', $font_subsets );
		} else {
			$subsets = 'latin';
		}
		$subset = '&amp;subset=' . $subsets;

		// Weights
		$weights = array( '100', '200', '300', '400', '500', '600', '700', '800', '900' );
		$weights = apply_filters( 'ocean_google_font_enqueue_weights', $weights, $font );
		$italics = apply_filters( 'ocean_google_font_enqueue_italics', true );

		// Determine the protocol (http/https).
		$protocol = is_ssl() ? 'https:' : 'http:';

		// Main URL
		$url = $protocol . '//fonts.googleapis.com/css?family=' . str_replace( ' ', '%20', $font ) . ':';

		if ( ! empty( $weights ) ) {
			$url .= implode( ',', $weights ) . ',';
			$italic_weights = array();
			if ( $italics ) {
				foreach ( $weights as $weight ) {
					$italic_weights[] = $weight . 'i';
				}
				$url .= implode( ',', $italic_weights );
			}
		}

		// Add subset to URL
		$url .= $subset;
		$url  = $url . '&display=swap';

		return apply_filters( 'oceanwp_enqueue_google_font_url', $url, $handle );

	}

}

return new OceanWP_Typography_CSS();
