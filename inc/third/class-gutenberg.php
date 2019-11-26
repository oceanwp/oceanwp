<?php
/**
 * Generate Dynamic CSS for Gutenberg Editor
 *
 * @package OceanWP WordPress theme
 */

// Start and run class
if( ! class_exists( 'OceanWP_Gutenberg_Editor' ) ) {

    class OceanWP_Gutenberg_Editor {

        /**
		 * Main Class Constructor
		 *
		 * @since 1.5.33
		 */
        public function __construct() {

			// After setup theme - Gutenberg
			add_action( 'after_setup_theme', array( $this, 'gutenberg_support' ), 10 );

        }

        public static function gutenberg_support() {

            // Adding Gutenberg support
            add_theme_support( 'align-wide' );
            add_theme_support( 'wp-block-styles' );
			add_theme_support( 'responsive-embeds' );
			add_theme_support( 'editor-styles' );
			add_editor_style( 'assets/css/gutenberg/gutenberg-editor.min.css' );

		}

    }

}
return new OceanWP_Gutenberg_Editor();