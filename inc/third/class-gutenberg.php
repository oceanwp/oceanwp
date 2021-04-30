<?php
/**
 * Generate Dynamic CSS for Gutenberg Editor
 *
 * @package OceanWP WordPress theme
 */

// Start and run class.
if ( ! class_exists( 'OceanWP_Gutenberg_Editor' ) ) {

	/**
	 * OceanWP Gutenberg Class
	 */
	class OceanWP_Gutenberg_Editor {

		/**
		 * Main Class Constructor
		 *
		 * @since 1.5.33
		 */
		public function __construct() {

			// After setup theme - Gutenberg.
			add_action( 'after_setup_theme', array( $this, 'gutenberg_support' ), 10 );

			add_action( 'admin_head', array( $this, 'gutenberg_editor_style' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'add_google_fonts' ) );

		}

		/**
		 * Add support for Gutenberg editor.
		 */
		public static function gutenberg_support() {

			// Adding Gutenberg support.
			add_theme_support( 'align-wide' );
			add_theme_support( 'wp-block-styles' );
			add_theme_support( 'responsive-embeds' );
			add_theme_support( 'editor-styles' );
			add_editor_style( 'assets/css/gutenberg/gutenberg-editor.min.css' );

		}

		/**
		 * Typograhpy
		 */
		public function elements() {

			return apply_filters(
				'ocean_gutenberg_typography_tags',
				array(
					'body'            => array(
						'label'    => esc_html__( 'Body', 'oceanwp' ),
						'target'   => '.block-editor .editor-styles-wrapper, .block-editor .editor-styles-wrapper .block-editor-block-list__layout',
						'defaults' => array(
							'font-size'   => '14px',
							'color'       => '#929292',
							'line-height' => '1.8',
						),
					),
					'headings'        => array(
						'label'    => esc_html__( 'All Headings', 'oceanwp' ),
						'target'   => '.block-editor .editor-styles-wrapper .block-editor-block-list__layout h1, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h2, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h3, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h4, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h5, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h6',
						'exclude'  => array( 'font-size' ),
						'defaults' => array(
							'color'       => '#333333',
							'line-height' => '1.4',
						),
					),
					'heading_h1'      => array(
						'label'    => esc_html__( 'Heading 1 (H1)', 'oceanwp' ),
						'target'   => '.block-editor .editor-styles-wrapper .block-editor-block-list__layout h1, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h1 a',
						'defaults' => array(
							'font-size'   => '23px',
							'color'       => '#333333',
							'line-height' => '1.4',
						),
					),
					'heading_h2'      => array(
						'label'    => esc_html__( 'Heading 2 (H2)', 'oceanwp' ),
						'target'   => '.block-editor .editor-styles-wrapper .block-editor-block-list__layout h2, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h2 a',
						'defaults' => array(
							'font-size'   => '20px',
							'color'       => '#333333',
							'line-height' => '1.4',
						),
					),
					'heading_h3'      => array(
						'label'    => esc_html__( 'Heading 3 (H3)', 'oceanwp' ),
						'target'   => '.block-editor .editor-styles-wrapper .block-editor-block-list__layout h3, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h3 a',
						'defaults' => array(
							'font-size'   => '18px',
							'color'       => '#333333',
							'line-height' => '1.4',
						),
					),
					'heading_h4'      => array(
						'label'    => esc_html__( 'Heading 4 (H4)', 'oceanwp' ),
						'target'   => '.block-editor .editor-styles-wrapper .block-editor-block-list__layout h4, .block-editor .editor-styles-wrapper .block-editor-block-list__layout h4 a',
						'defaults' => array(
							'font-size'   => '17px',
							'color'       => '#333333',
							'line-height' => '1.4',
						),
					),
					'blog_post_title' => array(
						'label'    => esc_html__( 'Blog Post Title', 'oceanwp' ),
						'target'   => '.block-editor .editor-styles-wrapper .editor-post-title__block .editor-post-title__input',
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
		 * Gutenberg editor css
		 *
		 * @param instance $return css.
		 */
		public function loop( $return = 'css' ) {

			// Define Vars.
			$css      = '';
			$fonts    = array();
			$elements = self::elements();

			if ( ! empty( $elements ) ) {

				// Loop through each elements that need typography styling applied to them.
				foreach ( $elements as $element => $array ) {

					// Add empty css var.
					$add_css    = '';
					$tablet_css = '';
					$mobile_css = '';

					// Get target and current mod.
					$target         = isset( $array['target'] ) ? $array['target'] : '';
					$get_mod        = get_theme_mod( $element . '_typography' );
					$tablet_get_mod = get_theme_mod( $element . '_tablet_typography' );
					$mobile_get_mod = get_theme_mod( $element . '_mobile_typography' );

					// Attributes to loop through.
					if ( ! empty( $array['attributes'] ) ) {
						$attributes = $array['attributes'];
					} else {
						$attributes = array(
							'font-family',
							'font-weight',
							'font-style',
							'font-size',
							'color',
							'line-height',
							'letter-spacing',
							'text-transform',
						);
					}

					// Loop through attributes.
					foreach ( $attributes as $attribute ) {

						// Define val.
						$default    = isset( $array['defaults'][ $attribute ] ) ? $array['defaults'][ $attribute ] : null;
						$val        = isset( $get_mod[ $attribute ] ) ? $get_mod[ $attribute ] : $default;
						$tablet_val = isset( $tablet_get_mod[ $attribute ] ) ? $tablet_get_mod[ $attribute ] : '';
						$mobile_val = isset( $mobile_get_mod[ $attribute ] ) ? $mobile_get_mod[ $attribute ] : '';

						// If there is a value lets do something.
						if ( $val && $default !== $val ) {

							// Sanitize.
							$val = str_replace( '"', '', $val );

							// Add px if font size or letter spacing.
							$px = '';
							if ( ( 'font-size' === $attribute
									&& is_numeric( $val ) )
								|| 'letter-spacing' === $attribute ) {
								$px = 'px';
							}

							// Add quotes around font-family && font family to scripts array.
							if ( 'font-family' === $attribute ) {
								$fonts[] = $val;

								// No brackets can be added as it cause issue with sans serif fonts.
								$val = $val;
							}

							// Add to inline CSS.
							if ( 'css' === $return ) {
								$add_css .= $attribute . ':' . $val . $px . ';';
							}
						}

						// If there is a value lets do something.
						if ( $tablet_val
							&& ( 'font-size' === $attribute
								|| 'line-height' === $attribute
								|| 'letter-spacing' === $attribute ) ) {

							// Sanitize.
							$tablet_val = str_replace( '"', '', $tablet_val );

							// Add px if font size or letter spacing.
							$px = '';
							if ( ( 'font-size' === $attribute
									&& is_numeric( $tablet_val ) )
								|| 'letter-spacing' === $attribute ) {
								$px = 'px';
							}

							// Add to inline CSS.
							if ( 'css' === $return ) {
								$tablet_css .= $attribute . ':' . $tablet_val . $px . ';';
							}
						}

						// If there is a value lets do something.
						if ( $mobile_val
							&& ( 'font-size' === $attribute
								|| 'line-height' === $attribute
								|| 'letter-spacing' === $attribute ) ) {

							// Sanitize.
							$mobile_val = str_replace( '"', '', $mobile_val );

							// Add px if font size or letter spacing.
							$px = '';
							if ( ( 'font-size' === $attribute
									&& is_numeric( $mobile_val ) )
								|| 'letter-spacing' === $attribute ) {
								$px = 'px';
							}

							// Add to inline CSS.
							if ( 'css' === $return ) {
								$mobile_css .= $attribute . ':' . $mobile_val . $px . ';';
							}
						}
					}

					// Front-end inline CSS.
					if ( $add_css && 'css' === $return ) {
						$css .= $target . '{' . $add_css . '}';
					}

					// Front-end inline tablet CSS.
					if ( $tablet_css && 'css' === $return ) {
						$css .= '@media (max-width: 768px){' . $target . '{' . $tablet_css . '}}';
					}

					// Front-end inline mobile CSS.
					if ( $mobile_css && 'css' === $return ) {
						$css .= '@media (max-width: 480px){' . $target . '{' . $mobile_css . '}}';
					}
				}

				// Return CSS.
				if ( 'css' === $return && ! empty( $css ) ) {
					$css = '/* OceanWP Gutenberg Style */' . $css;
					return $css;
				}

				// Return Fonts Array.
				if ( 'fonts' === $return && ! empty( $fonts ) ) {
					return array_unique( $fonts );
				}
			}

		}

		/**
		 * Output CSS
		 *
		 * @since 1.0.0
		 * @param instance $output css output.
		 */
		public function gutenberg_editor_style( $output ) {

			if ( ! is_null( get_current_screen() ) && get_current_screen()->is_block_editor() ) {

				$gutenberg_css = self::loop( 'css' );

				// Add extra css based on customizer setting.
				$primary_color     = get_theme_mod( 'ocean_primary_color', '#13aff0' );
				$links_color       = get_theme_mod( 'ocean_links_color', '#333333' );
				$links_color_hover = get_theme_mod( 'ocean_links_color_hover', '#13aff0' );

				// Links color.
				if ( ! empty( $links_color ) && '#333333' !== $links_color ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout a{color:' . $links_color . ';}';
				}

				// Links color hover.
				if ( ! empty( $links_color_hover ) && '#13aff0' !== $links_color_hover ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout a:hover{color:' . $links_color_hover . ';}';
				} elseif ( ! empty( $primary_color ) && '#13aff0' !== $primary_color ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout a:hover{color:' . $primary_color . ';}';
					$gutenberg_css .= '.block-editor .editor-styles-wrapper .block-editor-block-list__layout blockquote{border-left-color:' . $primary_color . ';}';
				}

				// Default color.
				$default_color = '#333333';

				$headings    = get_theme_mod( 'headings_typography' )['color'] ?? $default_color;
				$post_title  = get_theme_mod( 'blog_post_title_typography' )['color'] ?? $default_color;
				$heading_h1  = get_theme_mod( 'heading_h1_typography' )['color'] ?? $default_color;
				$heading_h2  = get_theme_mod( 'heading_h2_typography' )['color'] ?? $default_color;
				$heading_h3  = get_theme_mod( 'heading_h3_typography' )['color'] ?? $default_color;
				$heading_h4  = get_theme_mod( 'heading_h4_typography' )['color'] ?? $default_color;
				$heading_tag = get_theme_mod( 'ocean_single_post_heading_tag', 'h2' );

				// Input title style.
				if ( 'h1' === $heading_tag && ! empty( $heading_h1 ) && empty( $headings ) && empty( $post_title ) ) {
					$gutenberg_css .= '.editor-post-title__block .editor-post-title__input{color:' . $heading_h1 . ';}';
				} elseif ( 'h2' === $heading_tag && ! empty( $heading_h2 ) && empty( $headings ) && empty( $post_title ) ) {
					$gutenberg_css .= '.editor-post-title__block .editor-post-title__input{color:' . $heading_h2 . ';}';
				} elseif ( 'h3' === $heading_tag && ! empty( $heading_h3 ) && empty( $headings ) && empty( $post_title ) ) {
					$gutenberg_css .= '.editor-post-title__block .editor-post-title__input{color:' . $heading_h3 . ';}';
				} elseif ( 'h4' === $heading_tag && ! empty( $heading_h4 ) && empty( $headings ) && empty( $post_title ) ) {
					$gutenberg_css .= '.editor-post-title__block .editor-post-title__input{color:' . $heading_h4 . ';}';
				} elseif ( ! empty( $headings ) && empty( $post_title ) ) {
					$gutenberg_css .= '.editor-post-title__block .editor-post-title__input{color:' . $headings . ';}';
				} else {
					$gutenberg_css .= '.editor-post-title__block .editor-post-title__input{color:' . $post_title . ';}';
				}

				// Background style value.
				$background_layout           = get_theme_mod( 'ocean_main_layout_style', 'wide' );
				$background_color            = get_theme_mod( 'ocean_background_color', '#ffffff' );
				$boxed_separate_bg_color     = get_theme_mod( 'ocean_boxed_inner_bg', '#ffffff' );
				$background_image            = get_theme_mod( 'ocean_background_image' );
				$background_image_position   = get_theme_mod( 'ocean_background_image_position' );
				$background_image_attachment = get_theme_mod( 'ocean_background_image_attachment' );
				$background_image_repeat     = get_theme_mod( 'ocean_background_image_repeat' );
				$background_image_size       = get_theme_mod( 'ocean_background_image_size' );

				// Get editor background style.
				if ( ! empty( $background_image ) ) {

					$gutenberg_css .= '.editor-styles-wrapper{background-image:url(' . $background_image . ');}';

					// Get site background position.
					if ( ! empty( $background_image_position ) && 'initial' !== $background_image_position ) {
						$gutenberg_css .= '.editor-styles-wrapper{background-position:' . $background_image_position . ';}';
					}

					// Get site background attachment.
					if ( ! empty( $background_image_attachment ) && 'initial' !== $background_image_attachment ) {
						$gutenberg_css .= '.editor-styles-wrapper{background-attachment:' . $background_image_attachment . ';}';
					}

					// Get site background repeat.
					if ( ! empty( $background_image_repeat ) && 'initial' !== $background_image_repeat ) {
						$gutenberg_css .= '.editor-styles-wrapper{background-repeat:' . $background_image_repeat . ';}';
					}

					// Get site background size.
					if ( ! empty( $background_image_size ) && 'initial' !== $background_image_size ) {
						$gutenberg_css .= '.editor-styles-wrapper{background-size:' . $background_image_size . ';}';
					}
				} elseif ( ! empty( $background_color ) ) {
					if ( 'wide' === $background_layout ) {
						if ( '#ffffff' !== $background_color ) {
							$gutenberg_css .= '.editor-styles-wrapper{background-color:' . $background_color . ';}';
						}
					} else {
						if ( ! empty( $boxed_separate_bg_color ) && '#ffffff' !== $boxed_separate_bg_color ) {
							$gutenberg_css .= '.editor-styles-wrapper{background-color:' . $boxed_separate_bg_color . ';}';
						}
					}
				}

				// Output the css.
				if ( ! empty( $gutenberg_css ) ) {
					echo '<style id="ocean-gutenberg-style"> ' . esc_attr( $gutenberg_css ) . '</style>';
				}
			}

		}

		/**
		 * Add Google fonts
		 */
		public function add_google_fonts() {

			// Get fonts.
			$fonts = self::loop( 'fonts' );

			if ( ! empty( $fonts ) && is_array( $fonts ) ) {
				foreach ( $fonts as $font ) {
					oceanwp_enqueue_google_font( $font );
				}
			}

		}

	}

}

return new OceanWP_Gutenberg_Editor();
