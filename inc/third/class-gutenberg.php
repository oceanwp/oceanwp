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
			add_action( 'enqueue_block_editor_assets', array( $this, 'gutenberg_editor_style' ) );

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
		 * Output CSS
		 *
		 * @since 1.0.0
		 * @param instance $output css output.
		 */
		public function gutenberg_editor_style( $output ) {

			if ( ! is_null( get_current_screen() ) && get_current_screen()->is_block_editor() ) {

				// Add extra css based on customizer setting.
				$primary_color     = get_theme_mod( 'ocean_primary_color', '#13aff0' );
				$links_color       = get_theme_mod( 'ocean_links_color', '#333333' );
				$links_color_hover = get_theme_mod( 'ocean_links_color_hover', '#13aff0' );

				$gutenberg_css = '';

				// Links color.
				if ( ! empty( $links_color ) && '#333333' !== $links_color ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout a{color:' . $links_color . ';}';
				}

				// Links color hover.
				if ( ! empty( $links_color_hover ) && '#13aff0' !== $links_color_hover ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout a:hover{color:' . $links_color_hover . ';}';
				} elseif ( ! empty( $primary_color ) && '#13aff0' !== $primary_color ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout a:hover{color:' . $primary_color . ';}';
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout blockquote{border-left-color:' . $primary_color . ';}';
				}

				// Default color.
				$default_color = '#333333';

				$body        = get_theme_mod( 'body_typography' )['color'] ?? $default_color;
				$headings    = get_theme_mod( 'headings_typography' )['color'] ?? $default_color;
				$post_title  = get_theme_mod( 'blog_post_title_typography' )['color'] ?? $default_color;
				$heading_h1  = get_theme_mod( 'heading_h1_typography' )['color'] ?? $default_color;
				$heading_h2  = get_theme_mod( 'heading_h2_typography' )['color'] ?? $default_color;
				$heading_h3  = get_theme_mod( 'heading_h3_typography' )['color'] ?? $default_color;
				$heading_h4  = get_theme_mod( 'heading_h4_typography' )['color'] ?? $default_color;
				$heading_h5  = get_theme_mod( 'heading_h5_typography' )['color'] ?? $default_color;
				$heading_h6  = get_theme_mod( 'heading_h6_typography' )['color'] ?? $default_color;
				$heading_tag = get_theme_mod( 'ocean_single_post_heading_tag', 'h2' );

				// Input title style.
				if ( 'h1' === $heading_tag && ! empty( $heading_h1 ) && empty( $headings ) && empty( $post_title ) ) {
					$gutenberg_css .= '.editor-post-title__block .editor-post-title__input, .editor-post-title.editor-post-title__input{color:' . $heading_h1 . ';}';
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

				if ( ! empty( $body ) && '#929292' != $body ) {
					$gutenberg_css .= '.editor-styles-wrapper, .editor-styles-wrapper .block-editor-block-list__layout{color:' . $body . ';}';
				}
				if ( ! empty( $headings ) && '#333333' != $headings ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout h1, .editor-styles-wrapper .block-editor-block-list__layout h2, .editor-styles-wrapper .block-editor-block-list__layout h3, .editor-styles-wrapper .block-editor-block-list__layout h4, .editor-styles-wrapper .block-editor-block-list__layout h5, .editor-styles-wrapper .block-editor-block-list__layout h6{color:' . $headings . ';}';
				}
				if ( ! empty( $heading_h1 ) && '#333333' != $heading_h1 ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout h1, .editor-styles-wrapper .block-editor-block-list__layout h1 a{color:' . $heading_h1 . ';}';
				}
				if ( ! empty( $heading_h2 ) && '#333333' != $heading_h2 ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout h2, .editor-styles-wrapper .block-editor-block-list__layout h2 a{color:' . $heading_h2 . ';}';
				}
				if ( ! empty( $heading_h3 ) && '#333333' != $heading_h3 ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout h3, .editor-styles-wrapper .block-editor-block-list__layout h3 a{color:' . $heading_h3 . ';}';
				}
				if ( ! empty( $heading_h4 ) && '#333333' != $heading_h4 ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout h4, .editor-styles-wrapper .block-editor-block-list__layout h4 a{color:' . $heading_h4 . ';}';
				}
				if ( ! empty( $heading_h5 ) && '#333333' != $heading_h5 ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout h5, .editor-styles-wrapper .block-editor-block-list__layout h5 a{color:' . $heading_h5 . ';}';
				}
				if ( ! empty( $heading_h6 ) && '#333333' != $heading_h6 ) {
					$gutenberg_css .= '.editor-styles-wrapper .block-editor-block-list__layout h6, .editor-styles-wrapper .block-editor-block-list__layout h6 a{color:' . $heading_h6 . ';}';
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
					wp_add_inline_style( 'wp-block-editor', $gutenberg_css );
				}
			}

		}
	}

}

return new OceanWP_Gutenberg_Editor();
