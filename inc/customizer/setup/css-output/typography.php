<?php
/**
 * OceanWP Customizer Class
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// /**
//  * The OceanWP Customizer class
//  */
// class OceanWP_Typography_CSS {

// 	/**
// 	 * Setup class.
// 	 */
// 	public function __construct() {
// 		add_filter( 'ocean_dynamic_css', array( $this, 'generate_css' ) );
// 	}

//     public function generate_css( $output ) {

//         $options = ocean_customize_options('options');

//         foreach ( $options as $section_key => $section_options ) {
//             do_action( 'ocean_dynamic_css', $section_options['options'] );
//         }

//         $css = '';

//         if ( ! empty( $css ) ) {
//             $output .= '/* Typography CSS */' . $css;
//         }

//         // Return output css.
//         return $output;

//     }

// }

// return new OceanWP_Typography_CSS();

