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

	public function generate_css($output) {
		$primary_color       = get_theme_mod( 'ocean_primary_color', '#13aff0' );
		$hover_primary_color = get_theme_mod( 'ocean_hover_primary_color', '#0b7cac' );
		$main_border_color   = get_theme_mod( 'ocean_main_border_color', '#e9e9e9' );
		$background_color    = get_theme_mod( 'ocean_background_color', '#ffffff' );
		$links_color         = get_theme_mod( 'ocean_links_color', '#333333' );
		$links_color_hover   = get_theme_mod( 'ocean_links_color_hover', '#13aff0' );
		$boxed_outside_bg    = get_theme_mod( 'ocean_boxed_outside_bg', '#e9e9e9' );
		$separate_outside_bg = get_theme_mod( 'ocean_separate_outside_bg', '#f1f1f1' );
		$boxed_inner_bg      = get_theme_mod( 'ocean_boxed_inner_bg', '#ffffff' );

		$theme_button_bg               = get_theme_mod( 'ocean_theme_button_bg', '#13aff0' );
		$theme_button_hover_bg         = get_theme_mod( 'ocean_theme_button_hover_bg', '#0b7cac' );
		$theme_button_color            = get_theme_mod( 'ocean_theme_button_color', '#ffffff' );
		$theme_button_hover_color      = get_theme_mod( 'ocean_theme_button_hover_color', '#ffffff' );
		$theme_button_border_color     = get_theme_mod( 'ocean_theme_button_color', '#ffffff' );
		$theme_button_hover_border     = get_theme_mod( 'ocean_theme_button_hover_color', '#ffffff' );

		$input_background              = get_theme_mod( 'ocean_input_background' );
		$input_text_color              = get_theme_mod( 'ocean_input_color', '#333333' );
		$input_placeholder_color       = get_theme_mod( 'ocean_input_placeholder' );
		$input_label_color             = get_theme_mod( 'ocean_label_color', '#929292' );
		$input_border_color            = get_theme_mod( 'ocean_input_border_color', '#dddddd' );
		$input_border_color_focus      = get_theme_mod( 'ocean_input_border_color_focus', '#bbbbbb' );

		$page_title_typography         = get_theme_mod('page_title_typography');
		$page_header_title_color       = isset($page_title_typography['color']) ? $page_title_typography['color'] : '';
		$page_header_text_color        = get_theme_mod( 'ocean_page_header_title_color' );

		$page_subheading             = get_theme_mod('page_subheading_typography');
		$page_subheading_color       = isset($page_subheading['color']) ? $page_subheading['color'] : '';

		$breadcrumbs_text_color        = get_theme_mod( 'ocean_breadcrumbs_text_color', '#c6c6c6' );
		$breadcrumbs_seperator_color   = get_theme_mod( 'ocean_breadcrumbs_seperator_color', '#c6c6c6' );
		$breadcrumbs_link_color        = get_theme_mod( 'ocean_breadcrumbs_link_color', '#333333' );
		$breadcrumbs_link_color_hover  = get_theme_mod( 'ocean_breadcrumbs_link_color_hover', '#13aff0' );

		// Meta.
		$meta_breadcrumbs_text_color       = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_color', true );
		$meta_breadcrumbs_seperator_color  = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_separator_color', true );
		$meta_breadcrumbs_link_color       = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_links_color', true );
		$meta_breadcrumbs_link_color_hover = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_links_hover_color', true );


		$typography_body             = get_theme_mod('body_typography');
		$typography_body_color       = isset($typography_body['color']) ? $typography_body['color'] : '';
		$typography_headings         = get_theme_mod('headings_typography');
		$typography_headings_color   = isset($typography_headings['color']) ? $typography_headings['color'] : '';
		$typography_h1               = get_theme_mod('heading_h1_typography');
		$typography_h1_color         = isset($typography_h1['color']) ? $typography_h1['color'] : '';
		$typography_h2               = get_theme_mod('heading_h2_typography');
		$typography_h2_color         = isset($typography_h2['color']) ? $typography_h2['color'] : '';
		$typography_h3               = get_theme_mod('heading_h3_typography');
		$typography_h3_color         = isset($typography_h3['color']) ? $typography_h3['color'] : '';
		$typography_h4               = get_theme_mod('heading_h4_typography');
		$typography_h4_color         = isset($typography_h4['color']) ? $typography_h4['color'] : '';
		$typography_h5               = get_theme_mod('heading_h5_typography');
		$typography_h5_color         = isset($typography_h5['color']) ? $typography_h5['color'] : '';
		$typography_h6               = get_theme_mod('heading_h6_typography');
		$typography_h6_color         = isset($typography_h6['color']) ? $typography_h6['color'] : '';

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
		// if ( ! empty( $borders ) && '#13aff0' != $primary_color ) {
		// 	foreach ( $borders as $key => $val ) {
		// 		if (!is_array($val) && isset($val) && $val !== '') {
		// 			var_dump($val);
		// 			$css .= $key . '{border-color:' . $primary_color . ';}';
		// 		} else {
		// 			var_dump($val);
		// 			$css .= $key . '{';
		// 			$css .= 'border-' . $val . '-color:' . $primary_color . ';';
		// 			$css .= '}';
		// 		}
		// 	}
		// }

		if ( ! empty( $borders ) && '#13aff0' != $primary_color ) {
			foreach ( $borders as $key => $val ) {
				if ( is_array( $val ) ) {
					$css .= $key . '{';
					foreach ( $val as $key => $val ) {
						$css .= 'border-' . $val . '-color:' . $primary_color . ';';
					}
					$css .= '}';
				} else {
					$css .= $val . '{border-color:' . $primary_color . ';}';
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
			$css .= 'body, .separate-layout, .has-parallax-footer:not(.separate-layout) #main{background-color:' . $background_color . ';}';
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

		// Boxed outside background.
		if ( ! empty( $boxed_outside_bg ) && '#e9e9e9' != $boxed_outside_bg ) {
			$css .= '.boxed-layout{background-color:' . $boxed_outside_bg . ';}';
		}

		// Separate outside background.
		if ( ! empty( $separate_outside_bg ) && '#f1f1f1' != $separate_outside_bg ) {
			$css .= '.separate-layout, .has-parallax-footer.separate-layout #main{background-color:' . $separate_outside_bg . ';}';
		}

		// Boxed inner background.
		if ( ! empty( $boxed_inner_bg ) && '#ffffff' != $boxed_inner_bg ) {
			$css .= '.boxed-layout #wrap, .separate-layout .content-area, .separate-layout .widget-area .sidebar-box, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner, .has-parallax-footer:not(.separate-layout) #main{background-color:' . $boxed_inner_bg . ';}';
		}

		// Theme buttons background color.
		if ( ! empty( $theme_button_bg ) && '#13aff0' != $theme_button_bg ) {
			$css .= 'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button,.woocommerce-cart .wp-element-button,.woocommerce-checkout .wp-element-button,.wp-block-button__link{background-color:' . $theme_button_bg . ';}';
		}

		// Theme buttons background color.
		if ( ! empty( $theme_button_hover_bg ) && '#0b7cac' != $theme_button_hover_bg ) {
			$css .= 'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active,.woocommerce-cart .wp-element-button:hover,.woocommerce-checkout .wp-element-button:hover,.wp-block-button__link:hover{background-color:' . $theme_button_hover_bg . ';}';
		}

		// Theme buttons background color.
		if ( ! empty( $theme_button_color ) && '#ffffff' != $theme_button_color ) {
			$css .= 'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button,.woocommerce-cart .wp-element-button,.woocommerce-checkout .wp-element-button,.wp-block-button__link{color:' . $theme_button_color . ';}';
		}

		// Theme buttons hover color.
		if ( ! empty( $theme_button_hover_color ) && '#ffffff' != $theme_button_hover_color ) {
			$css .= 'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active,.woocommerce-cart .wp-element-button:hover,.woocommerce-checkout .wp-element-button:hover,.wp-block-button__link:hover{color:' . $theme_button_border_color . ';}';
		}

		// Theme buttons background color.
		if ( ! empty( $theme_button_border_color ) && '' != $theme_button_border_color ) {
			$css .= 'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button,.woocommerce-cart .wp-element-button,.woocommerce-checkout .wp-element-button,.wp-block-button__link{border-color:' . $theme_button_color . ';}';
		}

		// Theme buttons hover color.
		if ( ! empty( $theme_button_hover_border ) && '' != $theme_button_hover_border ) {
			$css .= 'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active,.woocommerce-cart .wp-element-button:hover,.woocommerce-checkout .wp-element-button:hover,.wp-block-button__link:hover{border-color:' . $theme_button_hover_border . ';}';
		}

		// Input border color.
		if ( ! empty( $input_border_color ) && '#dddddd' != $input_border_color ) {
			$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea,.select2-container .select2-choice, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single{border-color:' . $input_border_color . ';}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-color:' . $input_border_color . ';}';
		}

		// Input border color focus.
		if ( ! empty( $input_border_color_focus ) && '#bbbbbb' != $input_border_color_focus ) {
			$css .= 'form input[type="text"]:focus,form input[type="password"]:focus,form input[type="email"]:focus,form input[type="tel"]:focus,form input[type="url"]:focus,form input[type="search"]:focus,form textarea:focus,.select2-drop-active,.select2-dropdown-open.select2-drop-above .select2-choice,.select2-dropdown-open.select2-drop-above .select2-choices,.select2-drop.select2-drop-above.select2-drop-active,.select2-container-active .select2-choice,.select2-container-active .select2-choices{border-color:' . $input_border_color_focus . ';}';
			$css .= 'body div.wpforms-container-full .wpforms-form input:focus, body div.wpforms-container-full .wpforms-form textarea:focus, body div.wpforms-container-full .wpforms-form select:focus{border-color:' . $input_border_color_focus . ';}';
		}

		// Input border background.
		if ( ! empty( $input_background ) ) {
			$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single{background-color:' . $input_background . ';}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{background-color:' . $input_background . ';}';
		}

		// Input text color.
		if ( ! empty( $input_text_color ) && '#333333' != $input_text_color ) {
			$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{color:' . $input_text_color . ';}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{color:' . $input_text_color . ';}';
		}

		// Input label color.
		if ( ! empty( $input_label_color ) && '#929292' != $input_label_color ) {
			$css .= 'label, body div.wpforms-container-full .wpforms-form .wpforms-field-label{color:' . $input_label_color . ';}';
		}

		// Input placeholder color.
		if ( ! empty( $input_placeholder_color ) && '' != $input_placeholder_color ) {
			$css .= 'form input[type="text"]::placeholder, form input[type="password"]::placeholder, form input[type="email"]::placeholder, form input[type="url"]::placeholder, form input[type="date"]::placeholder, form input[type="month"]::placeholder, form input[type="time"]::placeholder, form input[type="datetime"]::placeholder, form input[type="datetime-local"]::placeholder, form input[type="week"]::placeholder, form input[type="number"]::placeholder, form input[type="search"]::placeholder, form input[type="tel"]::placeholder, form input[type="color"]::placeholder, form select::placeholder, form textarea::placeholder{color:' . $input_placeholder_color . ';}';
			$css .= 'body div.wpforms-container-full .wpforms-form input[type=date]::placeholder, body div.wpforms-container-full .wpforms-form input[type=datetime]::placeholder, body div.wpforms-container-full .wpforms-form input[type=datetime-local]::placeholder, body div.wpforms-container-full .wpforms-form input[type=email]::placeholder, body div.wpforms-container-full .wpforms-form input[type=month]::placeholder, body div.wpforms-container-full .wpforms-form input[type=number]::placeholder, body div.wpforms-container-full .wpforms-form input[type=password]::placeholder, body div.wpforms-container-full .wpforms-form input[type=range]::placeholder, body div.wpforms-container-full .wpforms-form input[type=search]::placeholder, body div.wpforms-container-full .wpforms-form input[type=tel]::placeholder, body div.wpforms-container-full .wpforms-form input[type=text]::placeholder, body div.wpforms-container-full .wpforms-form input[type=time]::placeholder, body div.wpforms-container-full .wpforms-form input[type=url]::placeholder, body div.wpforms-container-full .wpforms-form input[type=week]::placeholder, body div.wpforms-container-full .wpforms-form select::placeholder, body div.wpforms-container-full .wpforms-form textarea::placeholder{color:' . $input_placeholder_color . ';}';
		}

		// Page header color.
		if ( ! empty( $page_header_title_color ) && '#f5f5f5' != $page_header_title_color ) {
			$css .= '.page-header{color:' . $page_header_title_color . ';}';
		}

		// Page header color.
		if ( ! empty( $page_header_text_color ) ) {
			$css .= '.page-header .page-header-title, .page-header.background-image-page-header .page-header-title {color:' . $page_header_text_color . ';}';
		}

		// Page header subtitle color.
		if ( ! empty( $page_subheading_color ) && '' != $page_subheading_color ) {
			$css .= '.page-header .page-subheading {color:' . $page_subheading_color . ';}';
		}

		// Breadcrumbs text color.
		if ( ! empty( $breadcrumbs_text_color ) && '#c6c6c6' != $breadcrumbs_text_color ) {
			$css .= '.site-breadcrumbs, .background-image-page-header .site-breadcrumbs{color:' . $breadcrumbs_text_color . ';}';
		}

		// Breadcrumbs seperator color.
		if ( ! empty( $breadcrumbs_seperator_color ) && '#c6c6c6' != $breadcrumbs_seperator_color ) {
			$css .= '.site-breadcrumbs ul li .breadcrumb-sep, .site-breadcrumbs ol li .breadcrumb-sep{color:' . $breadcrumbs_seperator_color . ';}';
		}

		// Breadcrumbs link color.
		if ( ! empty( $breadcrumbs_link_color ) && '#333333' != $breadcrumbs_link_color ) {
			$css .= '.site-breadcrumbs a, .background-image-page-header .site-breadcrumbs a{color:' . $breadcrumbs_link_color . ';}';
			$css .= '.site-breadcrumbs a .owp-icon use, .background-image-page-header .site-breadcrumbs a .owp-icon use{stroke:' . $breadcrumbs_link_color . ';}';
		}

		// Breadcrumbs link hover color.
		if ( ! empty( $breadcrumbs_link_color_hover ) && '#13aff0' != $breadcrumbs_link_color_hover ) {
			$css .= '.site-breadcrumbs a:hover, .background-image-page-header .site-breadcrumbs a:hover{color:' . $breadcrumbs_link_color_hover . ';}';
			$css .= '.site-breadcrumbs a:hover .owp-icon use, .background-image-page-header .site-breadcrumbs a:hover .owp-icon use{stroke:' . $breadcrumbs_link_color_hover . ';}';
		}

		// Meta breadcrumbs text color.
		if ( ! empty( $meta_breadcrumbs_text_color ) ) {
			$css .= '.site-breadcrumbs, .background-image-page-header .site-breadcrumbs{color:' . $meta_breadcrumbs_text_color . ';}';
		}

		// Meta breadcrumbs seperator color.
		if ( ! empty( $meta_breadcrumbs_seperator_color ) ) {
			$css .= '.site-breadcrumbs ul li .breadcrumb-sep{color:' . $meta_breadcrumbs_seperator_color . ';}';
		}

		// Meta breadcrumbs link color.
		if ( ! empty( $meta_breadcrumbs_link_color ) ) {
			$css .= '.site-breadcrumbs a, .background-image-page-header .site-breadcrumbs a{color:' . $meta_breadcrumbs_link_color . ';}';
		}

		// Meta breadcrumbs link hover color.
		if ( ! empty( $meta_breadcrumbs_link_color_hover ) ) {
			$css .= '.site-breadcrumbs a:hover, .background-image-page-header .site-breadcrumbs a:hover{color:' . $meta_breadcrumbs_link_color_hover . ';}';
		}

		if ( ! empty( $typography_body_color ) && '#929292' != $typography_body_color ) {
			$css .= 'body {color:' . $typography_body_color . ';}';
		}
		if ( ! empty( $typography_headings_color ) && '' != $typography_headings_color ) {
			$css .= 'h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title {color:' . $typography_headings_color . ';}';
		}
		if ( ! empty( $typography_h1_color ) && '' != $typography_h1_color ) {
			$css .= 'h1 {color:' . $typography_h1_color . ';}';
		}
		if ( ! empty( $typography_h2_color ) && '' != $typography_h2_color ) {
			$css .= 'h2 {color:' . $typography_h2_color . ';}';
		}
		if ( ! empty( $typography_h3_color ) && '' != $typography_h3_color ) {
			$css .= 'h3 {color:' . $typography_h3_color . ';}';
		}
		if ( ! empty( $typography_h4_color ) && '' != $typography_h4_color ) {
			$css .= 'h4 {color:' . $typography_h4_color . ';}';
		}
		if ( ! empty( $typography_h5_color ) && '' != $typography_h5_color ) {
			$css .= 'h5 {color:' . $typography_h5_color . ';}';
		}
		if ( ! empty( $typography_h6_color ) && '' != $typography_h6_color ) {
			$css .= 'h6 {color:' . $typography_h6_color . ';}';
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
