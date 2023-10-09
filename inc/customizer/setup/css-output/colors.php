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
class OceanWP_Colors_CSS {

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
        add_filter('ocean_head_css', array($this, 'generate_css'));
    }

    public function generate_Css($output) {
        $primary_color       = get_theme_mod( 'ocean_primary_color', '#13aff0' );
        $hover_primary_color = get_theme_mod( 'ocean_hover_primary_color', '#0b7cac' );
        $main_border_color   = get_theme_mod( 'ocean_main_border_color', '#e9e9e9' );
        $background_color    = get_theme_mod( 'ocean_background_color', '#ffffff' );
        $links_color         = get_theme_mod( 'ocean_links_color', '#333333' );
        $links_color_hover   = get_theme_mod( 'ocean_links_color_hover', '#13aff0' );

        $css = '';

        $texts       = ocean_primary_color_selector( 'texts' );
        $svg_icons   = ocean_primary_color_selector( 'svg_icons' );
        $backgrounds = ocean_primary_color_selector( 'backgrounds' );
        $borders     = ocean_primary_color_selector( 'borders' );

        // Get hover primary color arrays.
        $hover_primary = ocean_primary_color_hover_selector( 'hover' );

        // Get hover primary color arrays.
        $main_border = ocean_main_border_selector();

        // Texts.
        if ( ! empty( $texts ) && '#13aff0' != $primary_color ) {
            $css .= implode( ',', $texts ) . '{color:' . $primary_color . ';}';
            $css .= implode( ',', $svg_icons ) . '{stroke:' . $primary_color . ';}';
        }

        // Backgrounds.
        if ( ! empty( $backgrounds ) && '#13aff0' != $primary_color ) {
            $css .= implode( ',', $backgrounds ) . '{background-color:' . $primary_color . ';}';
        }

        // Borders.
        if ( ! empty( $borders ) && '#13aff0' != $primary_color ) {
            foreach ( $borders as $key => $val ) {
                if ( isset( $val ) && $val ) {
                    $css .= $key . '{';
                    $css .= 'border-' . $val . '-color:' . $primary_color . ';';
                    $css .= '}';
                } else {
                    $css .= $key . '{border-color:' . $primary_color . ';}';
                }
            }
        }

        // Hover primary color.
        if ( ! empty( $hover_primary ) && '#0b7cac' != $hover_primary_color ) {
            $css .= implode( ',', $hover_primary ) . '{background-color:' . $hover_primary_color . ';}';
        }

        // Main border color.
        if ( ! empty( $main_border ) && '#e9e9e9' != $main_border_color ) {
            $css .= implode( ',', $main_border ) . '{border-color:' . $main_border_color . ';}';
        }

        // Get site background color.
        if ( ! empty( $background_color ) && '#ffffff' != $background_color ) {
            $css .= 'body, .has-parallax-footer:not(.separate-layout) #main{background-color:' . $background_color . ';}';
        }

        // Links color.
        if ( ! empty( $links_color ) && '#333333' != $links_color ) {
            $css .= 'a{color:' . $links_color . ';}';
            $css .= 'a .owp-icon use {stroke:' . $links_color . ';}';
        }

        // Links color hover.
        if ( ! empty( $links_color_hover ) && '#13aff0' != $links_color_hover ) {
            $css .= 'a:hover{color:' . $links_color_hover . ';}';
            $css .= 'a:hover .owp-icon use {stroke:' . $links_color_hover . ';}';
        }

        // Return CSS.
        if ( ! empty( $css ) ) {
            $output .= '/* Colors */' . $css;
        }

        // Return output css.
        return $output;

    }



}

return new OceanWP_Colors_CSS();
