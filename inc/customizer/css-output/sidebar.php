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
class OceanWP_Customize_Sidebar_CSS {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter('ocean_head_css', array($this, 'generate_css'));
	}

	public function generate_css($output) {

		$sidebar_bg 							= get_theme_mod( 'ocean_sidebar_bg' );
		$sidebar_top_padding 					= get_theme_mod( 'ocean_sidebar_top_padding', 0 );
		$sidebar_right_padding 					= get_theme_mod( 'ocean_sidebar_right_padding', 0 );
		$sidebar_bottom_padding 				= get_theme_mod( 'ocean_sidebar_bottom_padding', 0 );
		$sidebar_left_padding 					= get_theme_mod( 'ocean_sidebar_left_padding', 30 );
		$tablet_sidebar_top_padding 			= get_theme_mod( 'ocean_sidebar_tablet_top_padding' );
		$tablet_sidebar_right_padding 			= get_theme_mod( 'ocean_sidebar_tablet_right_padding' );
		$tablet_sidebar_bottom_padding 			= get_theme_mod( 'ocean_sidebar_tablet_bottom_padding' );
		$tablet_sidebar_left_padding 			= get_theme_mod( 'ocean_sidebar_tablet_left_padding' );
		$mobile_sidebar_top_padding 			= get_theme_mod( 'ocean_sidebar_mobile_top_padding' );
		$mobile_sidebar_right_padding 			= get_theme_mod( 'ocean_sidebar_mobile_right_padding' );
		$mobile_sidebar_bottom_padding 			= get_theme_mod( 'ocean_sidebar_mobile_bottom_padding' );
		$mobile_sidebar_left_padding 			= get_theme_mod( 'ocean_sidebar_mobile_left_padding' );
		$widgets_bg 							= get_theme_mod( 'ocean_widgets_bg' );
		$widgets_top_padding 					= get_theme_mod( 'ocean_widgets_top_padding', 0 );
		$widgets_right_padding 					= get_theme_mod( 'ocean_widgets_right_padding', 0 );
		$widgets_bottom_padding 				= get_theme_mod( 'ocean_widgets_bottom_padding', 0 );
		$widgets_left_padding 					= get_theme_mod( 'ocean_widgets_left_padding', 0 );
		$tablet_widgets_top_padding 			= get_theme_mod( 'ocean_widgets_tablet_top_padding' );
		$tablet_widgets_right_padding 			= get_theme_mod( 'ocean_widgets_tablet_right_padding' );
		$tablet_widgets_bottom_padding 			= get_theme_mod( 'ocean_widgets_tablet_bottom_padding' );
		$tablet_widgets_left_padding 			= get_theme_mod( 'ocean_widgets_tablet_left_padding' );
		$mobile_widgets_top_padding 			= get_theme_mod( 'ocean_widgets_mobile_top_padding' );
		$mobile_widgets_right_padding 			= get_theme_mod( 'ocean_widgets_mobile_right_padding' );
		$mobile_widgets_bottom_padding 			= get_theme_mod( 'ocean_widgets_mobile_bottom_padding' );
		$mobile_widgets_left_padding 			= get_theme_mod( 'ocean_widgets_mobile_left_padding' );
		$widgets_margin_bottom 					= get_theme_mod( 'ocean_widgets_margin_bottom' );
		$widgets_titles_border_color 			= get_theme_mod( 'ocean_widgets_titles_border_color', '#13aff0' );
		$widgets_titles_margin_bottom 			= get_theme_mod( 'ocean_widgets_titles_margin_bottom', 20 );

		$sidebar_widget_title_typography        = get_theme_mod('sidebar_widget_title_typography');
		$sidebar_widget_title_typography        = isset($sidebar_widget_title_typography['color']) ? $sidebar_widget_title_typography['color'] : '#333333';

		$widgets_typography                     = get_theme_mod('widgets_typography');
		$widgets_typography                     = isset($widgets_typography['color']) ? $widgets_typography['color'] : '';

		// Define css var
		$css = '';

		// Sidebar background
		if ( ! empty( $sidebar_bg ) ) {
			$css .= '.widget-area{background-color:'. $sidebar_bg .';}';
		}

		// Sidebar padding
		if ( isset( $sidebar_top_padding ) && 0 != $sidebar_top_padding && '' != $sidebar_top_padding
			|| isset( $sidebar_right_padding ) && 0 != $sidebar_right_padding && '' != $sidebar_right_padding
			|| isset( $sidebar_bottom_padding ) && 0 != $sidebar_bottom_padding && '' != $sidebar_bottom_padding
			|| isset( $sidebar_left_padding ) && 30 != $sidebar_left_padding && '' != $sidebar_left_padding ) {
			$css .= '.widget-area{padding:'. oceanwp_spacing_css( $sidebar_top_padding, $sidebar_right_padding, $sidebar_bottom_padding, $sidebar_left_padding ) .'!important}';
		}

		// Tablet sidebar padding
		if ( isset( $tablet_sidebar_top_padding ) && '' != $tablet_sidebar_top_padding
			|| isset( $tablet_sidebar_right_padding ) && '' != $tablet_sidebar_right_padding
			|| isset( $tablet_sidebar_bottom_padding ) && '' != $tablet_sidebar_bottom_padding
			|| isset( $tablet_sidebar_left_padding ) && '' != $tablet_sidebar_left_padding ) {
			$css .= '@media (max-width: 768px){.widget-area{padding:'. oceanwp_spacing_css( $tablet_sidebar_top_padding, $tablet_sidebar_right_padding, $tablet_sidebar_bottom_padding, $tablet_sidebar_left_padding ) .'!important}}';
		}

		// Mobile sidebar padding
		if ( isset( $mobile_sidebar_top_padding ) && '' != $mobile_sidebar_top_padding
			|| isset( $mobile_sidebar_right_padding ) && '' != $mobile_sidebar_right_padding
			|| isset( $mobile_sidebar_bottom_padding ) && '' != $mobile_sidebar_bottom_padding
			|| isset( $mobile_sidebar_left_padding ) && '' != $mobile_sidebar_left_padding ) {
			$css .= '@media (max-width: 480px){.widget-area{padding:'. oceanwp_spacing_css( $mobile_sidebar_top_padding, $mobile_sidebar_right_padding, $mobile_sidebar_bottom_padding, $mobile_sidebar_left_padding ) .'!important}}';
		}

		// Widgets background
		if ( ! empty( $widgets_bg ) ) {
			$css .= '.widget-area .sidebar-box{background-color:'. $widgets_bg .';}';
		}

		// Widgets padding
		if ( ! empty( $widgets_padding ) ) {
			$css .= '.widget-area .sidebar-box{padding:'. $widgets_padding .';}';
		}

		// Widget padding
		if ( isset( $widgets_top_padding ) && 0 != $widgets_top_padding && '' != $widgets_top_padding
			|| isset( $widgets_right_padding ) && 0 != $widgets_right_padding && '' != $widgets_right_padding
			|| isset( $widgets_bottom_padding ) && 0 != $widgets_bottom_padding && '' != $widgets_bottom_padding
			|| isset( $widgets_left_padding ) && 0 != $widgets_left_padding && '' != $widgets_left_padding ) {
			$css .= '.widget-area .sidebar-box{padding:'. oceanwp_spacing_css( $widgets_top_padding, $widgets_right_padding, $widgets_bottom_padding, $widgets_left_padding ) .'}';
		}

		// Tablet widget padding
		if ( isset( $tablet_widgets_top_padding ) && '' != $tablet_widgets_top_padding
			|| isset( $tablet_widgets_right_padding ) && '' != $tablet_widgets_right_padding
			|| isset( $tablet_widgets_bottom_padding ) && '' != $tablet_widgets_bottom_padding
			|| isset( $tablet_widgets_left_padding ) && '' != $tablet_widgets_left_padding ) {
			$css .= '@media (max-width: 768px){.widget-area .sidebar-box{padding:'. oceanwp_spacing_css( $tablet_widgets_top_padding, $tablet_widgets_right_padding, $tablet_widgets_bottom_padding, $tablet_widgets_left_padding ) .'}}';
		}

		// Mobile widget padding
		if ( isset( $mobile_widgets_top_padding ) && '' != $mobile_widgets_top_padding
			|| isset( $mobile_widgets_right_padding ) && '' != $mobile_widgets_right_padding
			|| isset( $mobile_widgets_bottom_padding ) && '' != $mobile_widgets_bottom_padding
			|| isset( $mobile_widgets_left_padding ) && '' != $mobile_widgets_left_padding ) {
			$css .= '@media (max-width: 480px){.widget-area .sidebar-box{padding:'. oceanwp_spacing_css( $mobile_widgets_top_padding, $mobile_widgets_right_padding, $mobile_widgets_bottom_padding, $mobile_widgets_left_padding ) .'}}';
		}

		// Widgets margin bottom
		if ( ! empty( $widgets_margin_bottom ) ) {
			$css .= '.widget-area .sidebar-box, .separate-layout .sidebar-box{margin-bottom:'. $widgets_margin_bottom .'px;}';
		}

		if ( ! empty( $sidebar_widget_title_typography ) && '#333333' != $sidebar_widget_title_typography ) {
			$css .= '.sidebar-box .widget-title{color:'. $sidebar_widget_title_typography .';}';
		}

		// Widgets titles border color
		if ( ! empty( $widgets_titles_border_color ) && '#13aff0' != $widgets_titles_border_color ) {
			$css .= '.widget-title{border-color:'. $widgets_titles_border_color .';}';
		}

		if ( ! empty( $widgets_typography ) ) {
			$css .= '.sidebar-box, .footer-box{color:'. $widgets_typography .';}';
		}

		// Widgets titles margin bottom
		if ( ! empty( $widgets_titles_margin_bottom ) && 20 != $widgets_titles_margin_bottom ) {
			$css .= '.widget-title{margin-bottom:'. $widgets_titles_margin_bottom .'px;}';
		}

		// Return CSS
		if ( ! empty( $css ) ) {
			$output .= '/* Sidebar */'. $css;
		}

		// Return output css
		return $output;
	}
}

return new OceanWP_Customize_Sidebar_CSS();
