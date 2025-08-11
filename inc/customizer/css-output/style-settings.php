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
class OceanWP_Style_Settings_CSS {

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

	public function generate_css($output) {
		$main_container_width          = get_theme_mod( 'ocean_main_container_width', 1200 );
		$main_container_width_unit     = get_theme_mod( 'ocean_main_container_width_unit', 'px' );
		$left_container_width          = get_theme_mod( 'ocean_left_container_width', 72 );
		$sidebar_width                 = get_theme_mod( 'ocean_sidebar_width', 28 );
		$separate_content_padding      = get_theme_mod( 'ocean_separate_content_padding', 30 );
		$separate_content_padding_unit = get_theme_mod( 'ocean_separate_content_padding_unit', 'px' );
		$separate_widgets_padding      = get_theme_mod( 'ocean_separate_widgets_padding', 30 );
		$separate_widgets_padding_unit = get_theme_mod( 'ocean_separate_widgets_padding_unit', 'px' );
		$boxed_width                   = get_theme_mod( 'ocean_boxed_width', 1280 );

		$background_image              = get_theme_mod( 'ocean_background_image' );
		$background_image_position     = get_theme_mod( 'ocean_background_image_position' );
		$background_image_attachment   = get_theme_mod( 'ocean_background_image_attachment' );
		$background_image_repeat       = get_theme_mod( 'ocean_background_image_repeat' );
		$background_image_size         = get_theme_mod( 'ocean_background_image_size' );

		$theme_button_top_padding      = get_theme_mod( 'ocean_theme_button_top_padding', 14 );
		$theme_button_right_padding    = get_theme_mod( 'ocean_theme_button_right_padding', 20 );
		$theme_button_bottom_padding   = get_theme_mod( 'ocean_theme_button_bottom_padding', 14 );
		$theme_button_left_padding     = get_theme_mod( 'ocean_theme_button_left_padding', 20 );
		$tablet_tb_top_padding         = get_theme_mod( 'ocean_theme_button_tablet_top_padding' );
		$tablet_tb_right_padding       = get_theme_mod( 'ocean_theme_button_tablet_right_padding' );
		$tablet_tb_bottom_padding      = get_theme_mod( 'ocean_theme_button_tablet_bottom_padding' );
		$tablet_tb_left_padding        = get_theme_mod( 'ocean_theme_button_tablet_left_padding' );
		$mobile_tb_top_padding         = get_theme_mod( 'ocean_theme_button_mobile_top_padding' );
		$mobile_tb_right_padding       = get_theme_mod( 'ocean_theme_button_mobile_right_padding' );
		$mobile_tb_bottom_padding      = get_theme_mod( 'ocean_theme_button_mobile_bottom_padding' );
		$mobile_tb_left_padding        = get_theme_mod( 'ocean_theme_button_mobile_left_padding' );

		$theme_button_top_radius      = get_theme_mod( 'ocean_theme_button_top_radius', 0 );
		$theme_button_right_radius    = get_theme_mod( 'ocean_theme_button_right_radius', 0 );
		$theme_button_bottom_radius   = get_theme_mod( 'ocean_theme_button_bottom_radius', 0 );
		$theme_button_left_radius     = get_theme_mod( 'ocean_theme_button_left_radius', 0 );
		$tablet_tb_top_radius         = get_theme_mod( 'ocean_theme_button_tablet_top_radius' );
		$tablet_tb_right_radius       = get_theme_mod( 'ocean_theme_button_tablet_right_radius' );
		$tablet_tb_bottom_radius      = get_theme_mod( 'ocean_theme_button_tablet_bottom_radius' );
		$tablet_tb_left_radius        = get_theme_mod( 'ocean_theme_button_tablet_left_radius' );
		$mobile_tb_top_radius         = get_theme_mod( 'ocean_theme_button_mobile_top_radius' );
		$mobile_tb_right_radius       = get_theme_mod( 'ocean_theme_button_mobile_right_radius' );
		$mobile_tb_bottom_radius      = get_theme_mod( 'ocean_theme_button_mobile_bottom_radius' );
		$mobile_tb_left_radius        = get_theme_mod( 'ocean_theme_button_mobile_left_radius' );
		$theme_button_border_type     = get_theme_mod( 'ocean_theme_button_border_type', 'solid' );
		$theme_button_border_width        = get_theme_mod( 'ocean_theme_button_border_width', 1 );
		$theme_button_border_width_tablet = get_theme_mod( 'ocean_theme_button_border_width_tablet' );
		$theme_button_border_width_mobile = get_theme_mod( 'ocean_theme_button_border_width_mobile' );
		$theme_button_border_width_unit   = get_theme_mod( 'ocean_theme_button_border_width_unit', 'px' );

		$input_top_padding             = get_theme_mod( 'ocean_input_top_padding', 6 );
		$input_right_padding           = get_theme_mod( 'ocean_input_right_padding', 12 );
		$input_bottom_padding          = get_theme_mod( 'ocean_input_bottom_padding', 6 );
		$input_left_padding            = get_theme_mod( 'ocean_input_left_padding', 12 );
		$tablet_input_top_padding      = get_theme_mod( 'ocean_input_tablet_top_padding' );
		$tablet_input_right_padding    = get_theme_mod( 'ocean_input_tablet_right_padding' );
		$tablet_input_bottom_padding   = get_theme_mod( 'ocean_input_tablet_bottom_padding' );
		$tablet_input_left_padding     = get_theme_mod( 'ocean_input_tablet_left_padding' );
		$mobile_input_top_padding      = get_theme_mod( 'ocean_input_mobile_top_padding' );
		$mobile_input_right_padding    = get_theme_mod( 'ocean_input_mobile_right_padding' );
		$mobile_input_bottom_padding   = get_theme_mod( 'ocean_input_mobile_bottom_padding' );
		$mobile_input_left_padding     = get_theme_mod( 'ocean_input_mobile_left_padding' );

		$input_top_radius               = get_theme_mod( 'ocean_input_border_top_radius', 3 );
		$input_right_radius             = get_theme_mod( 'ocean_input_border_right_radius', 3 );
		$input_bottom_radius            = get_theme_mod( 'ocean_input_border_bottom_radius', 3 );
		$input_left_radius              = get_theme_mod( 'ocean_input_border_left_radius', 3 );
		$tablet_input_top_radius        = get_theme_mod( 'ocean_input_border_tablet_top_radius' );
		$tablet_input_right_radius      = get_theme_mod( 'ocean_input_border_tablet_right_radius' );
		$tablet_input_bottom_radius     = get_theme_mod( 'ocean_input_border_tablet_bottom_radius' );
		$tablet_input_left_radius       = get_theme_mod( 'ocean_input_border_tablet_left_radius' );
		$mobile_input_top_radius        = get_theme_mod( 'ocean_input_border_mobile_top_radius' );
		$mobile_input_right_radius      = get_theme_mod( 'ocean_input_border_mobile_right_radius' );
		$mobile_input_bottom_radius     = get_theme_mod( 'ocean_input_border_mobile_bottom_radius' );
		$mobile_input_left_radius       = get_theme_mod( 'ocean_input_border_mobile_left_radius' );
		$input_border_type             = get_theme_mod( 'ocean_site_forms_border_type', 'solid' );
		$input_top_border_width        = get_theme_mod( 'ocean_input_top_border_width', 1 );
		$input_right_border_width      = get_theme_mod( 'ocean_input_right_border_width', 1 );
		$input_bottom_border_width     = get_theme_mod( 'ocean_input_bottom_border_width', 1 );
		$input_left_border_width       = get_theme_mod( 'ocean_input_left_border_width', 1 );
		$tablet_input_top_bw           = get_theme_mod( 'ocean_input_tablet_top_border_width' );
		$tablet_input_right_bw         = get_theme_mod( 'ocean_input_tablet_right_border_width' );
		$tablet_input_bottom_bw        = get_theme_mod( 'ocean_input_tablet_bottom_border_width' );
		$tablet_input_left_bw          = get_theme_mod( 'ocean_input_tablet_left_border_width' );
		$mobile_input_top_bw           = get_theme_mod( 'ocean_input_mobile_top_border_width' );
		$mobile_input_right_bw         = get_theme_mod( 'ocean_input_mobile_right_border_width' );
		$mobile_input_bottom_bw        = get_theme_mod( 'ocean_input_mobile_bottom_border_width' );
		$mobile_input_left_bw          = get_theme_mod( 'ocean_input_mobile_left_border_width' );

		$content_top_padding           = get_theme_mod( 'ocean_page_content_top_padding' );
		$content_bottom_padding        = get_theme_mod( 'ocean_page_content_bottom_padding' );
		$tablet_content_top_padding    = get_theme_mod( 'ocean_page_content_tablet_top_padding' );
		$tablet_content_bottom_padding = get_theme_mod( 'ocean_page_content_tablet_bottom_padding' );
		$mobile_content_top_padding    = get_theme_mod( 'ocean_page_content_mobile_top_padding' );
		$mobile_content_bottom_padding = get_theme_mod( 'ocean_page_content_mobile_bottom_padding' );
		$title_breadcrumb_position     = get_theme_mod( 'ocean_page_header_bg_title_breadcrumb_position', 'center' );

		$pagination_font_size          = get_theme_mod( 'ocean_pagination_font_size', 18 );
		$pagination_font_size_tablet   = get_theme_mod( 'ocean_pagination_font_size_tablet');
		$pagination_font_size_mobile   = get_theme_mod( 'ocean_pagination_font_size_mobile' );
		$pagination_font_size_unit     = get_theme_mod( 'ocean_pagination_font_size_unit', 'px' );
		$pagination_border_width        = get_theme_mod( 'ocean_pagination_border_width', 1 );
		$pagination_border_width_tablet = get_theme_mod( 'ocean_pagination_border_width_tablet' );
		$pagination_border_width_mobile = get_theme_mod( 'ocean_pagination_border_width_mobile' );
		$pagination_border_width_unit   = get_theme_mod( 'ocean_pagination_border_width_unit', 'px' );
		$pagination_top_radius           = get_theme_mod( 'ocean_pagination_top_radius', 1 );
		$pagination_right_radius         = get_theme_mod( 'ocean_pagination_right_radius', 1 );
		$pagination_bottom_radius        = get_theme_mod( 'ocean_pagination_bottom_radius', 1 );
		$pagination_left_radius          = get_theme_mod( 'ocean_pagination_left_radius', 1 );
		$tablet_pagination_top_radius    = get_theme_mod( 'ocean_pagination_tablet_top_radius' );
		$tablet_pagination_right_radius  = get_theme_mod( 'ocean_pagination_tablet_right_radius' );
		$tablet_pagination_bottom_radius = get_theme_mod( 'ocean_pagination_tablet_bottom_radius' );
		$tablet_pagination_left_radius   = get_theme_mod( 'ocean_pagination_tablet_left_radius' );
		$mobile_pagination_top_radius    = get_theme_mod( 'ocean_pagination_mobile_top_radius' );
		$mobile_pagination_right_radius  = get_theme_mod( 'ocean_pagination_mobile_right_radius' );
		$mobile_pagination_bottom_radius = get_theme_mod( 'ocean_pagination_mobile_bottom_radius' );
		$mobile_pagination_left_radius   = get_theme_mod( 'ocean_pagination_mobile_left_radius' );
		$pagination_bg                 = get_theme_mod( 'ocean_pagination_bg' );
		$pagination_hover_bg           = get_theme_mod( 'ocean_pagination_hover_bg', '#f8f8f8' );
		$pagination_color              = get_theme_mod( 'ocean_pagination_color', '#555555' );
		$pagination_hover_color        = get_theme_mod( 'ocean_pagination_hover_color', '#333333' );
		$pagination_border_color       = get_theme_mod( 'ocean_pagination_border_color', '#e9e9e9' );
		$pagination_border_hover_color = get_theme_mod( 'ocean_pagination_border_hover_color', '#e9e9e9' );

		$pagination_active_bg           = get_theme_mod( 'ocean_pagination_bg_active', '' );
		$pagination_active_color        = get_theme_mod( 'ocean_pagination_color_active', '' );

		$scroll_top_bottom_position    = get_theme_mod( 'ocean_scroll_top_bottom_position', 20 );
		$scroll_top_size               = get_theme_mod( 'ocean_scroll_top_size', 40 );
		$scroll_top_size_tablet        = get_theme_mod( 'ocean_scroll_top_size_tablet' );
		$scroll_top_size_mobile        = get_theme_mod( 'ocean_scroll_top_size_mobile' );
		$scroll_top_size_unit          = get_theme_mod( 'ocean_scroll_top_size_unit', 'px' );
		$scroll_top_icon_size          = get_theme_mod( 'ocean_scroll_top_icon_size', 18 );
		$scroll_top_icon_size_unit     = get_theme_mod( 'ocean_scroll_top_icon_size_unit', 'px' );

		$ocean_scroll_top_position       = get_theme_mod( 'ocean_scroll_top_position', 'right' );
		$scroll_top_side_position        = get_theme_mod( 'ocean_scroll_top_side_position', 20 );
		$scroll_top_side_position_unit   = get_theme_mod( 'ocean_scroll_top_side_position_unit', 'px' );

		$scroll_top_top_radius           = get_theme_mod( 'ocean_scroll_top_border_top_radius', 2 );
		$scroll_top_right_radius         = get_theme_mod( 'ocean_scroll_top_border_right_radius', 2 );
		$scroll_top_bottom_radius        = get_theme_mod( 'ocean_scroll_top_border_bottom_radius', 2 );
		$scroll_top_left_radius          = get_theme_mod( 'ocean_scroll_top_border_left_radius', 2 );
		$tablet_scroll_top_top_radius    = get_theme_mod( 'ocean_scroll_top_border_tablet_top_radius' );
		$tablet_scroll_top_right_radius  = get_theme_mod( 'ocean_scroll_top_border_tablet_right_radius' );
		$tablet_scroll_top_bottom_radius = get_theme_mod( 'ocean_scroll_top_border_tablet_bottom_radius' );
		$tablet_scroll_top_left_radius   = get_theme_mod( 'ocean_scroll_top_border_tablet_left_radius' );
		$mobile_scroll_top_top_radius    = get_theme_mod( 'ocean_scroll_top_border_mobile_top_radius' );
		$mobile_scroll_top_right_radius  = get_theme_mod( 'ocean_scroll_top_border_mobile_right_radius' );
		$mobile_scroll_top_bottom_radius = get_theme_mod( 'ocean_scroll_top_border_mobile_bottom_radius' );
		$mobile_scroll_top_left_radius   = get_theme_mod( 'ocean_scroll_top_border_mobile_left_radius' );

		$scroll_top_bg                 = get_theme_mod( 'ocean_scroll_top_bg', 'rgba(0,0,0,0.4)' );
		$scroll_top_bg_hover           = get_theme_mod( 'ocean_scroll_top_bg_hover', 'rgba(0,0,0,0.8)' );
		$scroll_top_color              = get_theme_mod( 'ocean_scroll_top_color', '#ffffff' );
		$scroll_top_color_hover        = get_theme_mod( 'ocean_scroll_top_color_hover', '#ffffff' );

		$page_layout            = get_theme_mod( 'ocean_page_single_layout', 'right-sidebar' );
		$bs_page_content_width  = get_theme_mod( 'ocean_page_single_both_sidebars_content_width' );
		$bs_page_content_width_unit = get_theme_mod( 'ocean_page_single_both_sidebars_content_width_unit', '%' );
		$bs_page_sidebars_width = get_theme_mod( 'ocean_page_single_both_sidebars_sidebars_width' );
		$bs_page_sidebars_width_unit = get_theme_mod( 'ocean_page_single_both_sidebars_sidebars_width_unit', '%' );

		$search_layout            = get_theme_mod( 'ocean_search_layout', 'right-sidebar' );
		$bs_search_content_width  = get_theme_mod( 'ocean_search_both_sidebars_content_width' );
		$bs_search_content_width_unit  = get_theme_mod( 'ocean_search_both_sidebars_content_width_unit', '%' );
		$bs_search_sidebars_width = get_theme_mod( 'ocean_search_both_sidebars_sidebars_width' );
		$bs_search_sidebars_width_unit = get_theme_mod( 'ocean_search_both_sidebars_sidebars_width_unit'. '%' );


		$page_header_top_padding       = get_theme_mod( 'ocean_page_header_top_padding', 34 );
		$page_header_bottom_padding    = get_theme_mod( 'ocean_page_header_bottom_padding', 34 );
		$tablet_ph_top_padding         = get_theme_mod( 'ocean_page_header_tablet_top_padding' );
		$tablet_ph_bottom_padding      = get_theme_mod( 'ocean_page_header_tablet_bottom_padding' );
		$mobile_ph_top_padding         = get_theme_mod( 'ocean_page_header_mobile_top_padding' );
		$mobile_ph_bottom_padding      = get_theme_mod( 'ocean_page_header_mobile_bottom_padding' );

		$css = '';
		$content_padding_css = '';
		$tablet_content_padding_css = '';
		$mobile_content_padding_css = '';

		// Texts.
		if ( ! empty( $main_container_width ) && 1200 != $main_container_width ) {
			$css .= '.container{width:' . $main_container_width . $main_container_width_unit . ';}';
		}

		// Content top padding.
		if ( ! empty( $left_container_width ) && 72 != $left_container_width ) {
			$css .= '@media only screen and (min-width: 960px){ .content-area, .content-left-sidebar .content-area{width:' . $left_container_width . '%;} }';
		}

		// Content top padding.
		if ( ! empty( $sidebar_width ) && 28 != $sidebar_width ) {
			$css .= '@media only screen and (min-width: 960px){ .widget-area, .content-left-sidebar .widget-area{width:' . $sidebar_width . '%;} }';
		}

		if ( ! empty( $separate_content_padding ) && 30 != $separate_content_padding ) {
			$css .= '.separate-layout .content-area, .separate-layout.content-left-sidebar .content-area, .content-both-sidebars.scs-style .content-area, .separate-layout.content-both-sidebars.ssc-style .content-area, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner{padding:' . $separate_content_padding . $separate_content_padding_unit . ';}.separate-layout.content-full-width .content-area{padding:' . $separate_content_padding . $separate_content_padding_unit . ' !important;}';
		}

		// Separate widgets padding.
		if ( ! empty( $separate_widgets_padding ) && 30 != $separate_widgets_padding ) {
			$css .= '.separate-layout .widget-area .sidebar-box{padding:' . $separate_widgets_padding . $separate_widgets_padding_unit . ';}';
		}

		// Boxed width.
		if ( ! empty( $boxed_width ) && 1280 != $boxed_width ) {
			$css .= '.boxed-layout #wrap, .boxed-layout .parallax-footer, .boxed-layout .owp-floating-bar{width:' . $boxed_width . 'px;}';
		}

		// Get site background image.
		if ( ! empty( $background_image ) ) {
			$css .= 'body{background-image:url(' . $background_image . ');}';
		}

		// Get site background position.
		if ( ! empty( $background_image_position ) && 'initial' != $background_image_position ) {
			$css .= 'body{background-position:' . $background_image_position . ';}';
		}

		// Get site background attachment.
		if ( ! empty( $background_image_attachment ) && 'initial' != $background_image_attachment ) {
			$css .= 'body{background-attachment:' . $background_image_attachment . ';}';
		}

		// Get site background repeat.
		if ( ! empty( $background_image_repeat ) && 'initial' != $background_image_repeat ) {
			$css .= 'body{background-repeat:' . $background_image_repeat . ';}';
		}

		// Get site background size.
		if ( ! empty( $background_image_size ) && 'initial' != $background_image_size ) {
			$css .= 'body{background-size:' . $background_image_size . ';}';
		}

		// Theme buttons padding.
		if ( isset( $theme_button_top_padding ) && '14' != $theme_button_top_padding && '' != $theme_button_top_padding
			|| isset( $theme_button_right_padding ) && '20' != $theme_button_right_padding && '' != $theme_button_right_padding
			|| isset( $theme_button_bottom_padding ) && '14' != $theme_button_bottom_padding && '' != $theme_button_bottom_padding
			|| isset( $theme_button_left_padding ) && '20' != $theme_button_left_padding && '' != $theme_button_left_padding ) {
			$css .= '.theme-button,input[type="submit"],button[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{padding:' . oceanwp_spacing_css( $theme_button_top_padding, $theme_button_right_padding, $theme_button_bottom_padding, $theme_button_left_padding ) . '}';
		}

		// Tablet theme buttons padding.
		if ( isset( $tablet_tb_top_padding ) && '' != $tablet_tb_top_padding
			|| isset( $tablet_tb_right_padding ) && '' != $tablet_tb_right_padding
			|| isset( $tablet_tb_bottom_padding ) && '' != $tablet_tb_bottom_padding
			|| isset( $tablet_tb_left_padding ) && '' != $tablet_tb_left_padding ) {
			$css .= '@media (max-width: 768px){.theme-button,input[type="submit"],button[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{padding:' . oceanwp_spacing_css( $tablet_tb_top_padding, $tablet_tb_right_padding, $tablet_tb_bottom_padding, $tablet_tb_left_padding ) . '}}';
		}

		// Mobile theme buttons padding.
		if ( isset( $mobile_tb_top_padding ) && '' != $mobile_tb_top_padding
			|| isset( $mobile_tb_right_padding ) && '' != $mobile_tb_right_padding
			|| isset( $mobile_tb_bottom_padding ) && '' != $mobile_tb_bottom_padding
			|| isset( $mobile_tb_left_padding ) && '' != $mobile_tb_left_padding ) {
			$css .= '@media (max-width: 480px){.theme-button,input[type="submit"],button[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{padding:' . oceanwp_spacing_css( $mobile_tb_top_padding, $mobile_tb_right_padding, $mobile_tb_bottom_padding, $mobile_tb_left_padding ) . '}}';
		}

		// Theme buttons radius.
		if ( isset( $theme_button_top_radius ) && 0 != $theme_button_top_radius && '' != $theme_button_top_radius
			|| isset( $theme_button_right_radius ) && 0 != $theme_button_right_radius && '' != $theme_button_right_radius
			|| isset( $theme_button_bottom_radius ) && 0 != $theme_button_bottom_radius && '' != $theme_button_bottom_radius
			|| isset( $theme_button_left_radius ) && 0 != $theme_button_left_radius && '' != $theme_button_left_radius ) {
			$css .= '.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-radius:' . oceanwp_spacing_css( $theme_button_top_radius, $theme_button_right_radius, $theme_button_bottom_radius, $theme_button_left_radius ) . '}';
		}

		// Tablet theme buttons radius.
		if ( isset( $tablet_tb_top_radius ) && '' != $tablet_tb_top_radius
			|| isset( $tablet_tb_right_radius ) && '' != $tablet_tb_right_radius
			|| isset( $tablet_tb_bottom_radius ) && '' != $tablet_tb_bottom_radius
			|| isset( $tablet_tb_left_radius ) && '' != $tablet_tb_left_radius ) {
			$css .= '@media (max-width: 768px){.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-radius:' . oceanwp_spacing_css( $tablet_tb_top_radius, $tablet_tb_right_radius, $tablet_tb_bottom_radius, $tablet_tb_left_radius ) . '}}';
		}

		// Mobile theme buttons radius.
		if ( isset( $mobile_tb_top_radius ) && '' != $mobile_tb_top_radius
			|| isset( $mobile_tb_right_radius ) && '' != $mobile_tb_right_radius
			|| isset( $mobile_tb_bottom_radius ) && '' != $mobile_tb_bottom_radius
			|| isset( $mobile_tb_left_radius ) && '' != $mobile_tb_left_radius ) {
			$css .= '@media (max-width: 480px){.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-radius:' . oceanwp_spacing_css( $mobile_tb_top_radius, $mobile_tb_right_radius, $mobile_tb_bottom_radius, $mobile_tb_left_radius ) . '}}';
		}

		// Theme buttons border type.
		if ( $theme_button_border_type ) {
			$css .= '.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-style:' . $theme_button_border_type . ';}';
		}

		// Theme buttons border width.
		if ( $theme_button_border_width ) {
			$css .= '.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-width:' . $theme_button_border_width . $theme_button_border_width_unit . ';}';
		}
		if ( $theme_button_border_width_tablet ) {
			$css .= '@media (max-width: 768px){.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-width:' . $theme_button_border_width_tablet . $theme_button_border_width_unit . ';}}';
		}
		if ( $theme_button_border_width_mobile ) {
			$css .= '@media (max-width: 768px){.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-width:' . $theme_button_border_width_mobile . $theme_button_border_width_unit . ';}}';
		}

		// Input padding.
		if ( isset( $input_top_padding ) && 6 != $input_top_padding && '' != $input_top_padding
			|| isset( $input_right_padding ) && 12 != $input_right_padding && '' != $input_right_padding
			|| isset( $input_bottom_padding ) && 6 != $input_bottom_padding && '' != $input_bottom_padding
			|| isset( $input_left_padding ) && 12 != $input_left_padding && '' != $input_left_padding ) {
			$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{padding:' . oceanwp_spacing_css( $input_top_padding, $input_right_padding, $input_bottom_padding, $input_left_padding ) . '}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{padding:' . oceanwp_spacing_css( $input_top_padding, $input_right_padding, $input_bottom_padding, $input_left_padding ) . '; height: auto;}';
		}

		// Tablet input padding.
		if ( isset( $tablet_input_top_padding ) && '' != $tablet_input_top_padding
			|| isset( $tablet_input_right_padding ) && '' != $tablet_input_right_padding
			|| isset( $tablet_input_bottom_padding ) && '' != $tablet_input_bottom_padding
			|| isset( $tablet_input_left_padding ) && '' != $tablet_input_left_padding ) {
			$css .= '@media (max-width: 768px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{padding:' . oceanwp_spacing_css( $tablet_input_top_padding, $tablet_input_right_padding, $tablet_input_bottom_padding, $tablet_input_left_padding ) . '}}';
			$css .= '@media (max-width: 768px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{padding:' . oceanwp_spacing_css( $tablet_input_top_padding, $tablet_input_right_padding, $tablet_input_bottom_padding, $tablet_input_left_padding ) . '}}';
		}

		// Mobile input padding.
		if ( isset( $mobile_input_top_padding ) && '' != $mobile_input_top_padding
			|| isset( $mobile_input_right_padding ) && '' != $mobile_input_right_padding
			|| isset( $mobile_input_bottom_padding ) && '' != $mobile_input_bottom_padding
			|| isset( $mobile_input_left_padding ) && '' != $mobile_input_left_padding ) {
			$css .= '@media (max-width: 480px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{padding:' . oceanwp_spacing_css( $mobile_input_top_padding, $mobile_input_right_padding, $mobile_input_bottom_padding, $mobile_input_left_padding ) . '}}';
			$css .= '@media (max-width: 480px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{padding:' . oceanwp_spacing_css( $mobile_input_top_padding, $mobile_input_right_padding, $mobile_input_bottom_padding, $mobile_input_left_padding ) . '}}';
		}

		// Input border width border width.
		if ( isset( $input_top_border_width ) && 1 != $input_top_border_width && '' != $input_top_border_width
			|| isset( $input_right_border_width ) && 1 != $input_right_border_width && '' != $input_right_border_width
			|| isset( $input_bottom_border_width ) && 1 != $input_bottom_border_width && '' != $input_bottom_border_width
			|| isset( $input_left_border_width ) && 1 != $input_left_border_width && '' != $input_left_border_width ) {
			$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-width:' . oceanwp_spacing_css( $input_top_border_width, $input_right_border_width, $input_bottom_border_width, $input_left_border_width ) . '}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-width:' . oceanwp_spacing_css( $input_top_border_width, $input_right_border_width, $input_bottom_border_width, $input_left_border_width ) . '}';
		}

		// Tablet input border width border width.
		if ( isset( $tablet_input_top_bw ) && '' != $tablet_input_top_bw
			|| isset( $tablet_input_right_bw ) && '' != $tablet_input_right_bw
			|| isset( $tablet_input_bottom_bw ) && '' != $tablet_input_bottom_bw
			|| isset( $tablet_input_left_bw ) && '' != $tablet_input_left_bw ) {
			$css .= '@media (max-width: 768px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-width:' . oceanwp_spacing_css( $tablet_input_top_bw, $tablet_input_right_bw, $tablet_input_bottom_bw, $tablet_input_left_bw ) . '}}';
			$css .= '@media (max-width: 768px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-width:' . oceanwp_spacing_css( $tablet_input_top_bw, $tablet_input_right_bw, $tablet_input_bottom_bw, $tablet_input_left_bw ) . '}}';
		}

		// Mobile input border width border width.
		if ( isset( $mobile_input_top_bw ) && '' != $mobile_input_top_bw
			|| isset( $mobile_input_right_bw ) && '' != $mobile_input_right_bw
			|| isset( $mobile_input_bottom_bw ) && '' != $mobile_input_bottom_bw
			|| isset( $mobile_input_left_bw ) && '' != $mobile_input_left_bw ) {
			$css .= '@media (max-width: 480px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-width:' . oceanwp_spacing_css( $mobile_input_top_bw, $mobile_input_right_bw, $mobile_input_bottom_bw, $mobile_input_left_bw ) . '}}';
			$css .= '@media (max-width: 480px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-width:' . oceanwp_spacing_css( $mobile_input_top_bw, $mobile_input_right_bw, $mobile_input_bottom_bw, $mobile_input_left_bw ) . '}}';
		}

		// Site forms border type.
		if ( $input_border_type ) {
			$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single{border-style:' . $input_border_type . ';}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-style:' . $input_border_type . ';}';
		}

		// Input border width border radius.
		if ( isset( $input_top_radius ) && 1 != $input_top_radius && '' != $input_top_radius
			|| isset( $input_right_radius ) && 1 != $input_right_radius && '' != $input_right_radius
			|| isset( $input_bottom_radius ) && 1 != $input_bottom_radius && '' != $input_bottom_radius
			|| isset( $input_left_radius ) && 1 != $input_left_radius && '' != $input_left_radius ) {
			$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-radius:' . oceanwp_spacing_css( $input_top_radius, $input_right_radius, $input_bottom_radius, $input_left_radius ) . '}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-radius:' . oceanwp_spacing_css( $input_top_radius, $input_right_radius, $input_bottom_radius, $input_left_radius ) . '}';
		}

		// Tablet input border width border radius.
		if ( isset( $tablet_input_top_radius ) && '' != $tablet_input_top_radius
			|| isset( $tablet_input_right_radius ) && '' != $tablet_input_right_radius
			|| isset( $tablet_input_bottom_radius ) && '' != $tablet_input_bottom_radius
			|| isset( $tablet_input_left_radius ) && '' != $tablet_input_left_radius ) {
			$css .= '@media (max-width: 768px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-radius:' . oceanwp_spacing_css( $tablet_input_top_radius, $tablet_input_right_radius, $tablet_input_bottom_radius, $tablet_input_left_radius ) . '}}';
			$css .= '@media (max-width: 768px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-radius:' . oceanwp_spacing_css( $tablet_input_top_radius, $tablet_input_right_radius, $tablet_input_bottom_radius, $tablet_input_left_radius ) . '}}';
		}

		// Mobile input border width border radius.
		if ( isset( $mobile_input_top_radius ) && '' != $mobile_input_top_radius
			|| isset( $mobile_input_right_radius ) && '' != $mobile_input_right_radius
			|| isset( $mobile_input_bottom_radius ) && '' != $mobile_input_bottom_radius
			|| isset( $mobile_input_left_radius ) && '' != $mobile_input_left_radius ) {
			$css .= '@media (max-width: 480px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-radius:' . oceanwp_spacing_css( $mobile_input_top_radius, $mobile_input_right_radius, $mobile_input_bottom_radius, $mobile_input_left_radius ) . '}}';
			$css .= '@media (max-width: 480px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-radius:' . oceanwp_spacing_css( $mobile_input_top_radius, $mobile_input_right_radius, $mobile_input_bottom_radius, $mobile_input_left_radius ) . '}}';
		}

		// Content top padding.
		if ( isset( $content_top_padding ) && '' != $content_top_padding ) {
			$content_padding_css .= 'padding-top:' . $content_top_padding . 'px;';
		}

		// Content bottom padding.
		if ( isset( $content_bottom_padding ) && '' != $content_bottom_padding ) {
			$content_padding_css .= 'padding-bottom:' . $content_bottom_padding . 'px;';
		}

		// Content padding css.
		if ( isset( $content_top_padding ) && '' != $content_top_padding
			|| isset( $content_bottom_padding ) && '' != $content_bottom_padding ) {
			$css .= '#main #content-wrap, .separate-layout #main #content-wrap{' . $content_padding_css . '}';
		}

		// Tablet content top padding.
		if ( isset( $tablet_content_top_padding ) && '' != $tablet_content_top_padding ) {
			$tablet_content_padding_css .= 'padding-top:' . $tablet_content_top_padding . 'px;';
		}

		// Tablet content bottom padding.
		if ( isset( $tablet_content_bottom_padding ) && '' != $tablet_content_bottom_padding ) {
			$tablet_content_padding_css .= 'padding-bottom:' . $tablet_content_bottom_padding . 'px;';
		}

		// Tablet content padding css.
		if ( isset( $tablet_content_top_padding ) && '' != $tablet_content_top_padding
			|| isset( $tablet_content_bottom_padding ) && '' != $tablet_content_bottom_padding ) {
			$css .= '@media (max-width: 768px){#main #content-wrap, .separate-layout #main #content-wrap{' . $tablet_content_padding_css . '}}';
		}

		// Mobile content top padding.
		if ( isset( $mobile_content_top_padding ) && '' != $mobile_content_top_padding ) {
			$mobile_content_padding_css .= 'padding-top:' . $mobile_content_top_padding . 'px;';
		}

		// Mobile content bottom padding.
		if ( isset( $mobile_content_bottom_padding ) && '' != $mobile_content_bottom_padding ) {
			$mobile_content_padding_css .= 'padding-bottom:' . $mobile_content_bottom_padding . 'px;';
		}

		// Mobile content padding css.
		if ( isset( $mobile_content_top_padding ) && '' != $mobile_content_top_padding
			|| isset( $mobile_content_bottom_padding ) && '' != $mobile_content_bottom_padding ) {
			$css .= '@media (max-width: 480px){#main #content-wrap, .separate-layout #main #content-wrap{' . $mobile_content_padding_css . '}}';
		}

		// Title/breadcrumb position.
		if ( ! empty( $title_breadcrumb_position ) && 'center' != $title_breadcrumb_position ) {
			$css .= '.background-image-page-header .page-header-inner, .background-image-page-header .site-breadcrumbs{text-align: ' . $title_breadcrumb_position . '}';
		}

		// Pagination font size.
		if ( ! empty( $pagination_font_size ) && 18 != $pagination_font_size ) {
			$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{font-size:' . $pagination_font_size . $pagination_font_size_unit . ';}';
		}

		if ( ! empty( $pagination_font_size ) && 18 != $pagination_font_size ) {
			$css .= '@media (max-width: 768px){.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{font-size:' . $pagination_font_size_tablet . $pagination_font_size_unit . ';}}';
		}

		if ( ! empty( $pagination_font_size ) && 18 != $pagination_font_size ) {
			$css .= '@media (max-width: 480px){.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{font-size:' . $pagination_font_size_mobile . $pagination_font_size_unit . ';}}';
		}

		// Pagination border width.
		if ( ! empty( $pagination_border_width ) && 1 != $pagination_border_width ) {
			$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-width:' . $pagination_border_width . $pagination_border_width_unit . ';}';
		}
		if ( ! empty( $pagination_border_width ) && 1 != $pagination_border_width ) {
			$css .= '@media (max-width: 768px){.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-width:' . $pagination_border_width_tablet . $pagination_border_width_unit . ';}}';
		}
		if ( ! empty( $pagination_border_width ) && 1 != $pagination_border_width ) {
			$css .= '@media (max-width: 480px){.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-width:' . $pagination_border_width_mobile . $pagination_border_width_unit . ';}}';
		}

		// Input border width border radius.
		if ( isset( $pagination_top_radius ) && 1 != $pagination_top_radius && '' != $pagination_top_radius
			|| isset( $pagination_right_radius ) && 1 != $pagination_right_radius && '' != $pagination_right_radius
			|| isset( $pagination_bottom_radius ) && 1 != $pagination_bottom_radius && '' != $pagination_bottom_radius
			|| isset( $pagination_left_radius ) && 1 != $pagination_left_radius && '' != $pagination_left_radius ) {
			$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-radius:' . oceanwp_spacing_css( $pagination_top_radius, $pagination_right_radius, $pagination_bottom_radius, $pagination_left_radius ) . '}';
		}

		// Tablet input border width border radius.
		if ( isset( $tablet_pagination_top_radius ) && '' != $tablet_pagination_top_radius
			|| isset( $tablet_pagination_right_radius ) && '' != $tablet_pagination_right_radius
			|| isset( $tablet_pagination_bottom_radius ) && '' != $tablet_pagination_bottom_radius
			|| isset( $tablet_pagination_left_radius ) && '' != $tablet_pagination_left_radius ) {
			$css .= '@media (max-width: 768px){.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-radius:' . oceanwp_spacing_css( $tablet_pagination_top_radius, $tablet_pagination_right_radius, $tablet_pagination_bottom_radius, $tablet_pagination_left_radius ) . '}}';
		}

		// Mobile input border width border radius.
		if ( isset( $mobile_pagination_top_radius ) && '' != $mobile_pagination_top_radius
			|| isset( $mobile_pagination_right_radius ) && '' != $mobile_pagination_right_radius
			|| isset( $mobile_pagination_bottom_radius ) && '' != $mobile_pagination_bottom_radius
			|| isset( $mobile_pagination_left_radius ) && '' != $mobile_pagination_left_radius ) {
			$css .= '@media (max-width: 480px){.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-radius:' . oceanwp_spacing_css( $mobile_pagination_top_radius, $mobile_pagination_right_radius, $mobile_pagination_bottom_radius, $mobile_pagination_left_radius ) . '}}';
		}

		// Pagination background color.
		if ( ! empty( $pagination_bg ) ) {
			$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{background-color:' . $pagination_bg . ';}';
		}

		if ( ! empty( $pagination_active_bg ) ) {
			$css .= '.page-numbers .page-numbers.current{background-color:' . $pagination_active_bg . ';}';
		}

		// Pagination background color hover.
		if ( ! empty( $pagination_hover_bg ) && '#f8f8f8' != $pagination_hover_bg ) {
			$css .= '.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover{background-color:' . $pagination_hover_bg . ';}';
		}

		// Pagination color.
		if ( ! empty( $pagination_color ) && '#555555' != $pagination_color ) {
			$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{color:' . $pagination_color . ';}';
			$css .= '.page-numbers a .owp-icon use{stroke:' . $pagination_color . ';}';
		}

		// Pagination color hover.
		if ( ! empty( $pagination_hover_color ) && '#333333' != $pagination_hover_color ) {
			$css .= '.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover{color:' . $pagination_hover_color . ';}';
			$css .= '.page-numbers a:hover .owp-icon use{stroke:' . $pagination_hover_color . ';}';
		}

		if ( ! empty( $pagination_active_color ) ) {
			$css .= '.page-numbers .page-numbers.current{color:' . $pagination_active_color . ';}';
		}

		// Pagination border color.
		if ( ! empty( $pagination_border_color ) && '#e9e9e9' != $pagination_border_color ) {
			$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-color:' . $pagination_border_color . ';}';
		}

		// Pagination border color hover.
		if ( ! empty( $pagination_border_hover_color ) && '#e9e9e9' != $pagination_border_hover_color ) {
			$css .= '.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover{border-color:' . $pagination_border_hover_color . ';}';
		}

		// Scroll top button bottom position.
		if ( ! empty( $scroll_top_bottom_position ) && 20 != $scroll_top_bottom_position ) {
			$css .= '#scroll-top{bottom:' . $scroll_top_bottom_position . 'px;}';
		}

		if ( ! empty( $ocean_scroll_top_position ) && 'right' === $ocean_scroll_top_position ) {
			if ( ! empty( $scroll_top_side_position ) && 20 != $scroll_top_side_position ) {
				$css .= '#scroll-top.scroll-top-right{right:' . $scroll_top_side_position . $scroll_top_side_position_unit . ';}';
			}
		}

		if ( ! empty( $ocean_scroll_top_position ) && 'left' === $ocean_scroll_top_position ) {
			if ( ! empty( $scroll_top_side_position ) && 20 != $scroll_top_side_position ) {
				$css .= '#scroll-top.scroll-top-left{left:' . $scroll_top_side_position . $scroll_top_side_position_unit . ';}';
			}
		}

		// Scroll top button size.
		if ( ! empty( $scroll_top_size ) && 40 != $scroll_top_size ) {
			$css .= '#scroll-top{width:' . $scroll_top_size . $scroll_top_size_unit . ';height:' . $scroll_top_size . $scroll_top_size_unit . ';line-height:' . $scroll_top_size . $scroll_top_size_unit . ';}';
		}
		if ( ! empty( $scroll_top_size_tablet ) ) {
			$css .= '@media (max-width: 768px){#scroll-top{width:' . $scroll_top_size_tablet . $scroll_top_size_unit . ';height:' . $scroll_top_size_tablet . $scroll_top_size_unit . ';line-height:' . $scroll_top_size_tablet . $scroll_top_size_unit . ';}}';
		}
		if ( ! empty( $scroll_top_size_mobile ) ) {
			$css .= '@media (max-width: 480px){#scroll-top{width:' . $scroll_top_size_mobile . $scroll_top_size_unit . ';height:' . $scroll_top_size_mobile . $scroll_top_size_unit . ';line-height:' . $scroll_top_size_mobile . $scroll_top_size_unit . ';}}';
		}

		// Scroll top button icon size.
		if ( ! empty( $scroll_top_icon_size ) && 18 != $scroll_top_icon_size ) {
			$css .= '#scroll-top{font-size:' . $scroll_top_icon_size . $scroll_top_icon_size_unit . ';}';
			$css .= '#scroll-top .owp-icon{width:' . $scroll_top_icon_size . $scroll_top_icon_size_unit . '; height:' . $scroll_top_icon_size . $scroll_top_icon_size_unit . ';}';
		}

		// Scroll top button border radius.
		if ( isset( $scroll_top_top_radius ) && 2 != $scroll_top_top_radius && '' != $scroll_top_top_radius
			|| isset( $scroll_top_right_radius ) && 2 != $scroll_top_right_radius && '' != $scroll_top_right_radius
			|| isset( $scroll_top_bottom_radius ) && 2 != $scroll_top_bottom_radius && '' != $scroll_top_bottom_radius
			|| isset( $scroll_top_left_radius ) && 2 != $scroll_top_left_radius && '' != $scroll_top_left_radius ) {
			$css .= '#scroll-top{border-radius:' . oceanwp_spacing_css( $scroll_top_top_radius, $scroll_top_right_radius, $scroll_top_bottom_radius, $scroll_top_left_radius ) . '}';
		}

		// Tablet input border width border radius.
		if ( isset( $tablet_scroll_top_top_radius ) && '' != $tablet_scroll_top_top_radius
			|| isset( $tablet_scroll_top_right_radius ) && '' != $tablet_scroll_top_right_radius
			|| isset( $tablet_scroll_top_bottom_radius ) && '' != $tablet_scroll_top_bottom_radius
			|| isset( $tablet_scroll_top_left_radius ) && '' != $tablet_scroll_top_left_radius ) {
			$css .= '@media (max-width: 768px){#scroll-top{border-radius:' . oceanwp_spacing_css( $tablet_scroll_top_top_radius, $tablet_scroll_top_right_radius, $tablet_scroll_top_bottom_radius, $tablet_scroll_top_left_radius ) . '}}';
		}

		// Mobile input border width border radius.
		if ( isset( $mobile_scroll_top_top_radius ) && '' != $mobile_scroll_top_top_radius
			|| isset( $mobile_scroll_top_right_radius ) && '' != $mobile_scroll_top_right_radius
			|| isset( $mobile_scroll_top_bottom_radius ) && '' != $mobile_scroll_top_bottom_radius
			|| isset( $mobile_scroll_top_left_radius ) && '' != $mobile_scroll_top_left_radius ) {
			$css .= '@media (max-width: 480px){#scroll-top{border-radius:' . oceanwp_spacing_css( $mobile_scroll_top_top_radius, $mobile_scroll_top_right_radius, $mobile_scroll_top_bottom_radius, $mobile_scroll_top_left_radius ) . '}}';
		}

		// Scroll top button background color.
		if ( ! empty( $scroll_top_bg ) && 'rgba(0,0,0,0.4)' != $scroll_top_bg ) {
			$css .= '#scroll-top{background-color:' . $scroll_top_bg . ';}';
		}

		// Scroll top button background hover color.
		if ( ! empty( $scroll_top_bg_hover ) && 'rgba(0,0,0,0.8)' != $scroll_top_bg_hover ) {
			$css .= '#scroll-top:hover{background-color:' . $scroll_top_bg_hover . ';}';
		}

		// Scroll top button background color.
		if ( ! empty( $scroll_top_color ) && '#ffffff' != $scroll_top_color ) {
			$css .= '#scroll-top{color:' . $scroll_top_color . ';}';
			$css .= '#scroll-top .owp-icon use{stroke:' . $scroll_top_color . ';}';
		}

		// Scroll top button background hover color.
		if ( ! empty( $scroll_top_color_hover ) && '#ffffff' != $scroll_top_color_hover ) {
			$css .= '#scroll-top:hover{color:' . $scroll_top_color_hover . ';}';
			$css .= '#scroll-top:hover .owp-icon use{stroke:' . $scroll_top_color . ';}';
		}

		// If page Both Sidebars layout.
		if ( 'both-sidebars' == $page_layout ) {

			// Both Sidebars layout page content width.
			if ( ! empty( $bs_page_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.page.content-both-sidebars .content-area {width: ' . $bs_page_content_width . $bs_page_content_width_unit .';}
						body.page.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.page.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_page_content_width . $bs_page_content_width_unit .';}
					}';
			}

			// Both Sidebars layout page sidebars width.
			if ( ! empty( $bs_page_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.page.content-both-sidebars .widget-area{width:' . $bs_page_sidebars_width . $bs_page_sidebars_width_unit . ';}
						body.page.content-both-sidebars.scs-style .content-area{left:' . $bs_page_sidebars_width . $bs_page_sidebars_width_unit . ';}
						body.page.content-both-sidebars.ssc-style .content-area{left:' . $bs_page_sidebars_width * 2 . $bs_page_sidebars_width_unit . ';}
					}';
			}
		}

		// If search Both Sidebars layout.
		if ( 'both-sidebars' == $search_layout ) {

			// Both Sidebars layout search content width.
			if ( ! empty( $bs_search_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.search-results.content-both-sidebars .content-area {width: ' . $bs_search_content_width . $bs_search_content_width_unit . ';}
						body.search-results.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.search-results.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_search_content_width . $bs_search_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout search sidebars width.
			if ( ! empty( $bs_search_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.search-results.content-both-sidebars .widget-area{width:' . $bs_search_sidebars_width . $bs_search_content_width_unit . ';}
						body.search-results.content-both-sidebars.scs-style .content-area{left:' . $bs_search_sidebars_width . $bs_search_content_width_unit . ';}
						body.search-results.content-both-sidebars.ssc-style .content-area{left:' . $bs_search_sidebars_width * 2 . $bs_search_content_width_unit . ';}
					}';
			}
		}

		// Page header padding.
		if ( isset( $page_header_top_padding ) && 34 != $page_header_top_padding && '' != $page_header_top_padding
			|| isset( $page_header_bottom_padding ) && 34 != $page_header_bottom_padding && '' != $page_header_bottom_padding ) {
			$css .= '.page-header, .has-transparent-header .page-header{padding:' . oceanwp_spacing_css( $page_header_top_padding, '', $page_header_bottom_padding, '' ) . '}';
		}

		// Tablet page header padding.
		if ( isset( $tablet_ph_top_padding ) && '' != $tablet_ph_top_padding
			|| isset( $tablet_ph_bottom_padding ) && '' != $tablet_ph_bottom_padding ) {
			$css .= '@media (max-width: 768px){.page-header, .has-transparent-header .page-header{padding:' . oceanwp_spacing_css( $tablet_ph_top_padding, '', $tablet_ph_bottom_padding, '' ) . '}}';
		}

		// Mobile page header padding.
		if ( isset( $mobile_ph_top_padding ) && '' != $mobile_ph_top_padding
			|| isset( $mobile_ph_bottom_padding ) && '' != $mobile_ph_bottom_padding ) {
			$css .= '@media (max-width: 480px){.page-header, .has-transparent-header .page-header{padding:' . oceanwp_spacing_css( $mobile_ph_top_padding, '', $mobile_ph_bottom_padding, '' ) . '}}';
		}


		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* OceanWP Style Settings CSS */' . $css;
		}

		// Return output css.
		return $output;

	}
}

return new OceanWP_Style_Settings_CSS();
