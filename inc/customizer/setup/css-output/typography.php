<?php
/**
 * OceanWP Customizer CSS Output
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// /**
//  * The OceanWP Customizer class
//  */
// class OceanWP_Dynamic_CSS {

//     /**
//      * fonts
//      *
//      * @var $fonts
//      * @access private
//      * @since 3.5.1
//      */
//     private $fonts = array();

//     /**
//      * Constructor
//      */
//     public function __construct() {
//         add_filter('ocean_head_css', array($this, 'generate_css'));
//     }

//     /**
//      * Generate css
//      *
//      * @var string $output  CSS String.
//      */
//     public function generate_css( $output ) {

//         $options = ocean_customize_options('options');
//         $css = '';

//         foreach ( $options as $section_key => $section_options ) {
//             $section_css = $this->get_css_data( $section_options['options'] );
//             if ( ! empty( $section_css ) ) {
//                 $css .= $section_css;
//             }
//         }

//         if ( ! empty( $css ) ) {
//             $output .= $css;
//         }

//         return $output;
//     }

//     /**
//      * Get css data
//      *
//      * @var object $options Settings.
//      */
//     public function get_css_data( $options ) {

//         $css = '';

//         foreach ( $options as $option_key => $option_data ) {
//             if ( $this->is_typography_option( $option_data ) ) {
//                 $settings = $this->get_typography_settings( $option_data );
//                 if ( ! empty( $settings ) ) {
//                     $css .= $this->generate_css_string( $settings );
//                 }
//             }

//             if ( isset( $option_data['options'] ) ) {
//                 $css .= $this->get_css_data( $option_data['options'] );
//             }
//         }

//         return $css;
//     }

//     /**
//      * Check if type is typography
//      *
//      * @var object $option_data Settings.
//      */
//     private function is_typography_option( $option_data ) {
//         $result = isset( $option_data['type'] ) && $option_data['type'] === 'ocean-typography' &&
//                 isset( $option_data['setting_args'] ) && is_array( $option_data['setting_args'] );

//         return $result;
//     }

//     /**
//      * Get all existing settings at once
//      *
//      * @var object $option_data Settings.
//      */
//     private function get_typography_settings( $option_data ) {

//         $settings = array();

//         foreach ( $option_data['setting_args'] as $setting_arg_key => $setting_arg_data ) {

//             $idName = $setting_arg_data['id'];
//             $parts = explode('[', $idName);
//             $theme_mod = rtrim($parts[0], '[');
//             $property = rtrim($parts[1], ']');

//             $selector = $option_data['selector'];

//             if ( ! isset( $settings[$selector] ) ) {
//                 $settings[$selector] = array();
//             }

//             if ( ! isset( $settings[$selector][$setting_arg_key] ) ) {
//                 $value = get_theme_mod( $theme_mod, array() );
//                 $settings[$selector][$setting_arg_key] = isset( $value[$property] ) ? $value[$property] : '';
//             }
//         }

//         return $settings;
//     }

//     /**
//      * Generate CSS string
//      *
//      * @var Object $settings Settings.
//      * @return string
//      */
//     public function generate_css_string( $settings ) {

//         $css = '';

//         $properties = [
//             'font-family' => 'fontFamily',
//             'font-size' => 'fontSize',
//             'line-height' => 'lineHeight',
//             'letter-spacing' => 'letterSpacing',
//             'font-weight' => 'fontWeight',
//             'text-transform' => 'textTransform',
//             'color' => 'textColor',
//         ];

//         foreach ( $settings as $selector => $settings_key ) {

//             $selector_css = '';
//             $selector_css_tablet = '';
//             $selector_css_mobile = '';

//             foreach ( $properties as $property => $key ) {
//                 if ( isset( $settings_key[$key] ) && $settings_key[$key] ) {
//                     $value = $settings_key[$key];

//                     // Check if a unit is specified in the settings.
//                     $unit_key = $key . 'Unit';

//                     if ( 'fontSize' === $key || 'lineHeight' === $key || 'letterSpacing' === $key ) {

//                         if ( isset( $settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
//                             $value .= $settings_key[$unit_key];
//                         } else {
//                             $value .= 'px';
//                         }
//                     }

//                     if ( 'fontFamily' === $key ) {

//                         if ( isset($settings_key[$key] ) && $settings_key[$key] ) {
//                             $this->fonts[$settings_key[$key]]['name'] = $settings_key[$key];
//                             $this->fonts[$settings_key[$key]]['subset'] = $settings_key['fontSubset'];
//                         }
//                     }

//                     $selector_css .= $property . ': ' . $value . ';';
//                 }

//                 // Check for tablet and mobile settings
//                 $tabletKey = $key . 'Tablet';
//                 $mobileKey = $key . 'Mobile';

//                 // For tablet.
//                 if ( isset($settings_key[$tabletKey] ) && $settings_key[$tabletKey] ) {
//                     $value = $settings_key[$tabletKey];

//                     // Check if a unit is specified in the settings
//                     $unit_key = $key . 'Unit';

//                     if ( 'fontSize' === $key || 'lineHeight' === $key || 'letterSpacing' === $key ) {

//                         if ( isset($settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
//                             $value .= $settings_key[$unit_key];
//                         } else {
//                             $value .= 'px';
//                         }
//                     }

//                     $media_query = "@media screen and (max-width: 768px) { $selector {"
//                         . $property . ': ' . $value . ';}}';
//                     $selector_css_tablet .= $media_query;
//                 }

//                 // For mobile.
//                 if ( isset( $settings_key[$mobileKey] ) && $settings_key[$mobileKey] ) {
//                     $value = $settings_key[$mobileKey];

//                     // Check if a unit is specified in the settings
//                     $unit_key = $key . 'Unit';

//                     if ( 'fontSize' === $key || 'lineHeight' === $key || 'letterSpacing' === $key ) {

//                         if ( isset($settings_key[$unit_key] ) && $settings_key[$unit_key] ) {
//                             $value .= $settings_key[$unit_key];
//                         } else {
//                             $value .= 'px';
//                         }
//                     }

//                     $media_query = "@media screen and (max-width: 480px) { $selector {"
//                         . $property . ': ' . $value . ';}}';
//                     $selector_css_mobile .= $media_query;
//                 }
//             }

//             // Check if the selector has any properties before adding it.
//             if ( ! empty( $selector_css ) ) {
//                 $css .= $selector . '{' . $selector_css . '}';
//             }

//             if ( ! empty( $selector_css_tablet ) ) {
//                 $css .= $selector_css_tablet;
//             }
//             if ( ! empty( $selector_css_mobile ) ) {
//                 $css .= $selector_css_mobile;
//             }
//             if ( isset( $settings_key['textColorHover'] ) && '' !== $settings_key['textColorHover'] ) {
//                 $css .= $selector . ':hover {color:' . $settings_key['textColorHover'] . '}';
//             }
//         }

//         $fonts = $this->fonts;

//         // Loop through and enqueue fonts with associated subset.
//         if ( ! empty( $fonts ) && is_array( $fonts ) ) {
//             foreach ( $fonts as $font_key => $font ) {
//                 oceanwp_enqueue_google_font( $font['name'], $font['subset'] );
//             }
//         }

//         return $css;
//     }
// }

// return new OceanWP_Dynamic_CSS();
