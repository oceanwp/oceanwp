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
class OceanWP_Customize_Footer_Widget_CSS {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter('ocean_head_css', array($this, 'generate_css'));
	}

	public function generate_css($output) {

		// Global vars.
		$footer_top_padding           = get_theme_mod( 'ocean_footer_top_padding', 30 );
		$footer_right_padding         = get_theme_mod( 'ocean_footer_right_padding', 0 );
		$footer_bottom_padding        = get_theme_mod( 'ocean_footer_bottom_padding', 30 );
		$footer_left_padding          = get_theme_mod( 'ocean_footer_left_padding', 0 );
		$tablet_footer_top_padding    = get_theme_mod( 'ocean_footer_tablet_top_padding' );
		$tablet_footer_right_padding  = get_theme_mod( 'ocean_footer_tablet_right_padding' );
		$tablet_footer_bottom_padding = get_theme_mod( 'ocean_footer_tablet_bottom_padding' );
		$tablet_footer_left_padding   = get_theme_mod( 'ocean_footer_tablet_left_padding' );
		$mobile_footer_top_padding    = get_theme_mod( 'ocean_footer_mobile_top_padding' );
		$mobile_footer_right_padding  = get_theme_mod( 'ocean_footer_mobile_right_padding' );
		$mobile_footer_bottom_padding = get_theme_mod( 'ocean_footer_mobile_bottom_padding' );
		$mobile_footer_left_padding   = get_theme_mod( 'ocean_footer_mobile_left_padding' );
		$footer_background            = get_theme_mod( 'ocean_footer_background', '#222222' );
		$footer_color                 = get_theme_mod( 'ocean_footer_color', '#929292' );
		$footer_borders               = get_theme_mod( 'ocean_footer_borders', '#555555' );
		$footer_link_color            = get_theme_mod( 'ocean_footer_link_color', '#ffffff' );
		$footer_link_color_hover      = get_theme_mod( 'ocean_footer_link_color_hover', '#13aff0' );

		$footer_widget_title_typography  = get_theme_mod('footer_widget_title_typography');
		$footer_widget_title_typography  = isset($footer_widget_title_typography['color']) ? $footer_widget_title_typography['color'] : '#ffffff';

		// Define css var.
		$css = '';

		// Footer padding.
		if ( isset( $footer_top_padding ) && 30 != $footer_top_padding && '' != $footer_top_padding
			|| isset( $footer_right_padding ) && 0 != $footer_right_padding && '' != $footer_right_padding
			|| isset( $footer_bottom_padding ) && 30 != $footer_bottom_padding && '' != $footer_bottom_padding
			|| isset( $footer_left_padding ) && 0 != $footer_left_padding && '' != $footer_left_padding ) {
			$css .= '#footer-widgets{padding:' . oceanwp_spacing_css( $footer_top_padding, $footer_right_padding, $footer_bottom_padding, $footer_left_padding ) . '}';
		}

		// Tablet footer padding.
		if ( isset( $tablet_footer_top_padding ) && '' != $tablet_footer_top_padding
			|| isset( $tablet_footer_right_padding ) && '' != $tablet_footer_right_padding
			|| isset( $tablet_footer_bottom_padding ) && '' != $tablet_footer_bottom_padding
			|| isset( $tablet_footer_left_padding ) && '' != $tablet_footer_left_padding ) {
			$css .= '@media (max-width: 768px){#footer-widgets{padding:' . oceanwp_spacing_css( $tablet_footer_top_padding, $tablet_footer_right_padding, $tablet_footer_bottom_padding, $tablet_footer_left_padding ) . '}}';
		}

		// Mobile footer padding.
		if ( isset( $mobile_footer_top_padding ) && '' != $mobile_footer_top_padding
			|| isset( $mobile_footer_right_padding ) && '' != $mobile_footer_right_padding
			|| isset( $mobile_footer_bottom_padding ) && '' != $mobile_footer_bottom_padding
			|| isset( $mobile_footer_left_padding ) && '' != $mobile_footer_left_padding ) {
			$css .= '@media (max-width: 480px){#footer-widgets{padding:' . oceanwp_spacing_css( $mobile_footer_top_padding, $mobile_footer_right_padding, $mobile_footer_bottom_padding, $mobile_footer_left_padding ) . '}}';
		}

		// Footer background.
		if ( ! empty( $footer_background ) && '#222222' != $footer_background ) {
			$css .= '#footer-widgets{background-color:' . $footer_background . ';}';
		}

		if ( ! empty( $footer_widget_title_typography ) && '#ffffff' != $footer_widget_title_typography ) {
			$css .= '#footer-widgets .footer-box .widget-title{color:' . $footer_widget_title_typography . ';}';
		}

		// Footer color.
		if ( ! empty( $footer_color ) && '#929292' != $footer_color ) {
			$css .= '#footer-widgets,#footer-widgets p,#footer-widgets li a:before,#footer-widgets .contact-info-widget span.oceanwp-contact-title,#footer-widgets .recent-posts-date,#footer-widgets .recent-posts-comments,#footer-widgets .widget-recent-posts-icons li .fa{color:' . $footer_color . ';}';
		}

		// Footer borders color.
		if ( ! empty( $footer_borders ) && '#555555' != $footer_borders ) {
			$css .= '#footer-widgets li,#footer-widgets #wp-calendar caption,#footer-widgets #wp-calendar th,#footer-widgets #wp-calendar tbody,#footer-widgets .contact-info-widget i,#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"],#footer-widgets .posts-thumbnails-widget li,#footer-widgets .social-widget li a{border-color:' . $footer_borders . ';}';
			$css .= '#footer-widgets .contact-info-widget .owp-icon{border-color:' . $footer_borders . ';}';
		}

		// Footer link color.
		if ( ! empty( $footer_link_color ) && '#ffffff' != $footer_link_color ) {
			$css .= '#footer-widgets .footer-box a,#footer-widgets a{color:' . $footer_link_color . ';}';
		}

		// Footer link hover color.
		if ( ! empty( $footer_link_color_hover ) && '#13aff0' != $footer_link_color_hover ) {
			$css .= '#footer-widgets .footer-box a:hover,#footer-widgets a:hover{color:' . $footer_link_color_hover . ';}';
		}

		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* Footer Widgets */' . $css;
		}

		// Return output css.
		return $output;

	}
}

return new OceanWP_Customize_Footer_Widget_CSS();
