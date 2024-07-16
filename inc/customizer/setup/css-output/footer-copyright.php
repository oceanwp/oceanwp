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
class OceanWP_Customize_Footer_Copyright_CSS {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter('ocean_head_css', array($this, 'generate_css'));
	}

	public function generate_Css($output) {

		// Global vars.
		$bottom_top_padding      = get_theme_mod( 'ocean_bottom_footer_top_padding', 15 );
		$bottom_right_padding    = get_theme_mod( 'ocean_bottom_footer_right_padding', 0 );
		$bottom_bottom_padding   = get_theme_mod( 'ocean_bottom_footer_bottom_padding', 15 );
		$bottom_left_padding     = get_theme_mod( 'ocean_bottom_footer_left_padding', 0 );
		$tablet_top_padding      = get_theme_mod( 'ocean_bottom_footer_tablet_top_padding' );
		$tablet_right_padding    = get_theme_mod( 'ocean_bottom_footer_tablet_right_padding' );
		$tablet_bottom_padding   = get_theme_mod( 'ocean_bottom_footer_tablet_bottom_padding' );
		$tablet_left_padding     = get_theme_mod( 'ocean_bottom_footer_tablet_left_padding' );
		$mobile_top_padding      = get_theme_mod( 'ocean_bottom_footer_mobile_top_padding' );
		$mobile_right_padding    = get_theme_mod( 'ocean_bottom_footer_mobile_right_padding' );
		$mobile_bottom_padding   = get_theme_mod( 'ocean_bottom_footer_mobile_bottom_padding' );
		$mobile_left_padding     = get_theme_mod( 'ocean_bottom_footer_mobile_left_padding' );
		$bottom_background       = get_theme_mod( 'ocean_bottom_footer_background', '#1b1b1b' );
		$bottom_color            = get_theme_mod( 'ocean_bottom_footer_color', '#ffffff' );
		$bottom_link_color       = get_theme_mod( 'ocean_bottom_footer_link_color', '#ffffff' );
		$bottom_link_color_hover = get_theme_mod( 'ocean_bottom_footer_link_color_hover', '#13aff0' );

		// Define css var.
		$css = '';

		// Footer bottom padding.
		if ( isset( $bottom_top_padding ) && 15 != $bottom_top_padding && '' != $bottom_top_padding
			|| isset( $bottom_right_padding ) && 0 != $bottom_right_padding && '' != $bottom_right_padding
			|| isset( $bottom_bottom_padding ) && 15 != $bottom_bottom_padding && '' != $bottom_bottom_padding
			|| isset( $bottom_left_padding ) && 0 != $bottom_left_padding && '' != $bottom_left_padding ) {
			$css .= '#footer-bottom{padding:' . oceanwp_spacing_css( $bottom_top_padding, $bottom_right_padding, $bottom_bottom_padding, $bottom_left_padding ) . '}';
		}

		// Tablet footer bottom padding.
		if ( isset( $tablet_top_padding ) && '' != $tablet_top_padding
			|| isset( $tablet_right_padding ) && '' != $tablet_right_padding
			|| isset( $tablet_bottom_padding ) && '' != $tablet_bottom_padding
			|| isset( $tablet_left_padding ) && '' != $tablet_left_padding ) {
			$css .= '@media (max-width: 768px){#footer-bottom{padding:' . oceanwp_spacing_css( $tablet_top_padding, $tablet_right_padding, $tablet_bottom_padding, $tablet_left_padding ) . '}}';
		}

		// Mobile footer bottom padding.
		if ( isset( $mobile_top_padding ) && '' != $mobile_top_padding
			|| isset( $mobile_right_padding ) && '' != $mobile_right_padding
			|| isset( $mobile_bottom_padding ) && '' != $mobile_bottom_padding
			|| isset( $mobile_left_padding ) && '' != $mobile_left_padding ) {
			$css .= '@media (max-width: 480px){#footer-bottom{padding:' . oceanwp_spacing_css( $mobile_top_padding, $mobile_right_padding, $mobile_bottom_padding, $mobile_left_padding ) . '}}';
		}

		// Footer bottom background.
		if ( ! empty( $bottom_background ) && '#1b1b1b' != $bottom_background ) {
			$css .= '#footer-bottom{background-color:' . $bottom_background . ';}';
		}

		// Footer bottom color.
		if ( ! empty( $bottom_color ) && '#ffffff' != $bottom_color ) {
			$css .= '#footer-bottom,#footer-bottom p{color:' . $bottom_color . ';}';
		}

		// Footer bottom links color.
		if ( ! empty( $bottom_link_color ) && '#ffffff' != $bottom_link_color ) {
			$css .= '#footer-bottom a,#footer-bottom #footer-bottom-menu a{color:' . $bottom_link_color . ';}';
		}

		// Footer bottom links hover color.
		if ( ! empty( $bottom_link_color_hover ) && '#13aff0' != $bottom_link_color_hover ) {
			$css .= '#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover{color:' . $bottom_link_color_hover . ';}';
		}

		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* Footer Copyright */' . $css;
		}

		// Return output css.
		return $output;

	}
}

return new OceanWP_Customize_Footer_Copyright_CSS();
