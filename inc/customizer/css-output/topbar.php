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
class OceanWP_Customize_Topbar_CSS {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter('ocean_head_css', array($this, 'generate_css'));
	}

	public function generate_css($output) {

		$top_padding                    = get_theme_mod( 'ocean_top_bar_top_padding', 8 );
		$right_padding                  = get_theme_mod( 'ocean_top_bar_right_padding', 0 );
		$bottom_padding                 = get_theme_mod( 'ocean_top_bar_bottom_padding', 8 );
		$left_padding                   = get_theme_mod( 'ocean_top_bar_left_padding', 0 );
		$tablet_top_padding             = get_theme_mod( 'ocean_top_bar_tablet_top_padding' );
		$tablet_right_padding           = get_theme_mod( 'ocean_top_bar_tablet_right_padding' );
		$tablet_bottom_padding          = get_theme_mod( 'ocean_top_bar_tablet_bottom_padding' );
		$tablet_left_padding            = get_theme_mod( 'ocean_top_bar_tablet_left_padding' );
		$mobile_top_padding             = get_theme_mod( 'ocean_top_bar_mobile_top_padding' );
		$mobile_right_padding           = get_theme_mod( 'ocean_top_bar_mobile_right_padding' );
		$mobile_bottom_padding          = get_theme_mod( 'ocean_top_bar_mobile_bottom_padding' );
		$mobile_left_padding            = get_theme_mod( 'ocean_top_bar_mobile_left_padding' );
		$social_font_size               = get_theme_mod( 'ocean_top_bar_social_font_size' );
		$social_font_size_tablet        = get_theme_mod( 'ocean_top_bar_social_tablet_font_size' );
		$social_font_size_mobile        = get_theme_mod( 'ocean_top_bar_social_mobile_font_size' );
		$social_font_size_unit          = get_theme_mod( 'ocean_top_bar_social_font_size_unit', 'px' );
		$social_right_padding           = get_theme_mod( 'ocean_top_bar_social_right_padding', 6 );
		$social_left_padding            = get_theme_mod( 'ocean_top_bar_social_left_padding', 6 );
		$social_tablet_right_padding    = get_theme_mod( 'ocean_top_bar_social_tablet_right_padding' );
		$social_tablet_left_padding     = get_theme_mod( 'ocean_top_bar_social_tablet_left_padding' );
		$social_mobile_right_padding    = get_theme_mod( 'ocean_top_bar_social_mobile_right_padding' );
		$social_mobile_left_padding     = get_theme_mod( 'ocean_top_bar_social_mobile_left_padding' );
		$social_links_color             = get_theme_mod( 'ocean_top_bar_social_links_color', '#bbbbbb' );
		$social_hover_links_color       = get_theme_mod( 'ocean_top_bar_social_hover_links_color' );
		$background                     = get_theme_mod( 'ocean_top_bar_bg', '#ffffff' );
		$border_color                   = get_theme_mod( 'ocean_top_bar_border_color', '#f1f1f1' );
		$text_color                     = get_theme_mod( 'ocean_top_bar_text_color', '#929292' );
		$link_color                     = get_theme_mod( 'ocean_top_bar_link_color', '#555555' );
		$link_color_hover               = get_theme_mod( 'ocean_top_bar_link_color_hover', '#13aff0' );

		$css = '';

		// Top bar padding
		if ( isset( $top_padding ) && 8 != $top_padding && '' != $top_padding
			|| isset( $right_padding ) && 0 != $right_padding && '' != $right_padding
			|| isset( $bottom_padding ) && 8 != $bottom_padding && '' != $bottom_padding
			|| isset( $left_padding ) && 0 != $left_padding && '' != $left_padding ) {
			$css .= '#top-bar{padding:'. oceanwp_spacing_css( $top_padding, $right_padding, $bottom_padding, $left_padding ) .'}';
		}

		// Tablet top bar padding
		if ( isset( $tablet_top_padding ) && '' != $tablet_top_padding
			|| isset( $tablet_right_padding ) && '' != $tablet_right_padding
			|| isset( $tablet_bottom_padding ) && '' != $tablet_bottom_padding
			|| isset( $tablet_left_padding ) && '' != $tablet_left_padding ) {
			$css .= '@media (max-width: 768px){#top-bar{padding:'. oceanwp_spacing_css( $tablet_top_padding, $tablet_right_padding, $tablet_bottom_padding, $tablet_left_padding ) .'}}';
		}

		// Mobile top bar padding
		if ( isset( $mobile_top_padding ) && '' != $mobile_top_padding
			|| isset( $mobile_right_padding ) && '' != $mobile_right_padding
			|| isset( $mobile_bottom_padding ) && '' != $mobile_bottom_padding
			|| isset( $mobile_left_padding ) && '' != $mobile_left_padding ) {
			$css .= '@media (max-width: 480px){#top-bar{padding:'. oceanwp_spacing_css( $mobile_top_padding, $mobile_right_padding, $mobile_bottom_padding, $mobile_left_padding ) .'}}';
		}

		// Add top bar social font size
		if ( ! empty( $social_font_size ) && 14 != $social_font_size ) {
			$css .= '#top-bar-social li a{font-size:'. $social_font_size . $social_font_size_unit . ';}';
		}
		// Add top bar social font size
		if ( ! empty( $social_font_size_tablet ) && '' != $social_font_size_tablet ) {
			$css .= '@media (max-width: 768px){#top-bar-social li a{font-size:'. $social_font_size_tablet . $social_font_size_unit . ';}}';
		}
		// Add top bar social font size
		if ( ! empty( $social_font_size_mobile ) && '' != $social_font_size_mobile ) {
			$css .= '@media (max-width: 480px){#top-bar-social li a{font-size:'. $social_font_size_mobile . $social_font_size_unit . ';}}';
		}

		// Top bar padding
		if ( isset( $social_right_padding ) && 6 != $social_right_padding && '' != $social_right_padding
			|| isset( $social_left_padding ) && 6 != $social_left_padding && '' != $social_left_padding ) {
			$css .= '#top-bar-social li a{padding:'. oceanwp_spacing_css( '', $social_right_padding, '', $social_left_padding ) .'}';
		}

		// Tablet top bar padding
		if ( isset( $social_tablet_right_padding ) && '' != $social_tablet_right_padding
			|| isset( $social_tablet_left_padding ) && '' != $social_tablet_left_padding ) {
			$css .= '@media (max-width: 768px){#top-bar-social li a{padding:'. oceanwp_spacing_css( '', $social_tablet_right_padding, '', $social_tablet_left_padding ) .'}}';
		}

		// Mobile top bar padding
		if ( isset( $social_mobile_right_padding ) && '' != $social_mobile_right_padding
			|| isset( $social_mobile_left_padding ) && '' != $social_mobile_left_padding ) {
			$css .= '@media (max-width: 480px){#top-bar-social li a{padding:'. oceanwp_spacing_css( '', $social_mobile_right_padding, '', $social_mobile_left_padding ) .'}}';
		}

		// Top bar social link color
		if ( ! empty( $social_links_color ) && '#bbbbbb' != $social_links_color ) {
			$css .= '#top-bar-social li a{color:'. $social_links_color .';}';
			$css .= '#top-bar-social li a .owp-icon use{stroke:'. $social_links_color .';}';
		}

		// Top bar social link color hover
		if ( ! empty( $social_hover_links_color ) ) {
			$css .= '#top-bar-social li a:hover{color:'. $social_hover_links_color .'!important;}';
			$css .= '#top-bar-social li a:hover .owp-icon use{stroke:'. $social_hover_links_color .'!important;}';
		}

		// Top bar background color
		if ( ! empty( $background ) && '#ffffff' != $background ) {
			$css .= '#top-bar-wrap,.oceanwp-top-bar-sticky{background-color:'. $background .';}';
		}

		// Top bar border color
		if ( ! empty( $border_color ) && '#f1f1f1' != $border_color ) {
			$css .= '#top-bar-wrap{border-color:'. $border_color .';}';
		}

		// Top bar text color
		if ( ! empty( $text_color ) && '#929292' != $text_color ) {
			$css .= '#top-bar-wrap,#top-bar-content strong{color:'. $text_color .';}';
		}

		// Top bar link color
		if ( ! empty( $link_color ) && '#555555' != $link_color ) {
			$css .= '#top-bar-content a,#top-bar-social-alt a{color:'. $link_color .';}';
		}

		// Top bar link color hover
		if ( ! empty( $link_color_hover ) && '#13aff0' != $link_color_hover ) {
			$css .= '#top-bar-content a:hover,#top-bar-social-alt a:hover{color:'. $link_color_hover .';}';
		}

		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* Topbar */' . $css;
		}

		// Return output css.
		return $output;

	}
}

return new OceanWP_Customize_Topbar_CSS();
