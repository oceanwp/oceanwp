<?php
/**
 * OceanWP Customizer Class
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The OceanWP Customizer class
 */
class OceanWP_Dynamic_CSS {

	/**
	 * Setup class.
	 */
	public function __construct() {
		add_filter( 'ocean_head_css', array( $this, 'generate_css' ) );
	}

    public function generate_css( $output ) {

        $options = ocean_customize_options('options');

        $css = '';

        foreach ( $options as $section_key => $section_options ) {
            $section_css = $this->get_css_data( $section_options['options'] );
			if ( ! empty( $section_css ) ) {
				$css .= $section_css;
			}
        }

        if ( ! empty( $css ) ) {
            $output .= $css;
        }

        // Return output css.
        return $output;

    }

    public function get_css_data( $options ) {

        $settingsKey = [];

        foreach ( $options as $option_key => $option_data) {

            if ( 'ocean-typography' === $option_data['type'] && 'body' === $option_data['selector'] ) {
                if ( isset( $option_data['setting_args'] ) && $option_data['setting_args'] ) {
                    foreach ( $option_data['setting_args'] as $setting_arg_key => $setting_arg_data ) {

                        $idName = $setting_arg_data['id'];
                        $parts = explode('[', $idName);
                        $theme_mod = rtrim($parts[0], '[');

                        if ( 'fontFamily' === $setting_arg_key ) {
                            $settingsKey['fonts'] = get_theme_mod( $theme_mod )['font-family'];
                        }

                        if ( 'fontSize' === $setting_arg_key ) {
                            $settingsKey['fontSize'] =  get_theme_mod( $theme_mod )['font-size'];
                        }

                        if ( 'fontSizeTablet' === $setting_arg_key ) {
                            $settingsKey['fontSizeTablet'] =  get_theme_mod( $theme_mod )['font-size'];
                        }

                        if ( 'fontSizeMobile' === $setting_arg_key ) {
                            $settingsKey['fontSizeMobile'] =  get_theme_mod( $theme_mod )['font-size'];
                        }

                        if ( 'fontSizeUnit' === $setting_arg_key ) {
                            $settingsKey['fontSizeUnit'] =  get_theme_mod( $theme_mod )['font-size-unit'];
                        }

                        $this->generate_css_rule( $option_data['selector'], $settingsKey );
                    }
                }
            }

            if ( isset( $option_data['options'] ) && $option_data['options'] ) {
                $this->get_css_data( $option_data['options'] );
            }
        }

    }

    public function generate_css_rule( $selector, $settingsKey ) {

        $css = '';
        $cssTablet = '';
        $cssMobile = '';
        $finalCSS = '';
        $fonts = [];

        // if ( $settingsKey ) {

        // }



        return false;

    }

}

return new OceanWP_Dynamic_CSS();
