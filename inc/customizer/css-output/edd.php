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
class OceanWP_Customize_EDD_CSS {

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

		// Global vars.
		$menu_icon_size                            = get_theme_mod( 'ocean_edd_menu_icon_size' );
		$menu_icon_size_tablet                     = get_theme_mod( 'ocean_edd_menu_icon_size_tablet' );
		$menu_icon_size_mobile                     = get_theme_mod( 'ocean_edd_menu_icon_size_mobile' );
		$menu_icon_center_vertically               = get_theme_mod( 'ocean_edd_menu_icon_center_vertically' );
		$menu_icon_center_vertically_tablet        = get_theme_mod( 'ocean_edd_menu_icon_center_vertically_tablet' );
		$menu_icon_center_vertically_mobile        = get_theme_mod( 'ocean_edd_menu_icon_center_vertically_mobile' );
		$cart_dropdown_width                       = get_theme_mod( 'ocean_edd_cart_dropdown_width', '350' );
		$edd_menu_bag_icon_color                   = get_theme_mod( 'ocean_edd_menu_bag_icon_color', '#333333' );
		$edd_menu_bag_icon_hover_color             = get_theme_mod( 'ocean_edd_menu_bag_icon_hover_color', '#13aff0' );
		$edd_menu_bag_icon_count_color             = get_theme_mod( 'ocean_edd_menu_bag_icon_count_color', '#333333' );
		$edd_menu_bag_icon_hover_count_color       = get_theme_mod( 'ocean_edd_menu_bag_icon_hover_count_color', '#ffffff' );
		$cart_dropdown_bg                          = get_theme_mod( 'ocean_edd_cart_dropdown_bg', '#ffffff' );
		$cart_dropdown_borders                     = get_theme_mod( 'ocean_edd_cart_dropdown_borders', '#e6e6e6' );
		$cart_dropdown_title_color                 = get_theme_mod( 'ocean_edd_cart_dropdown_title_color' );
		$cart_dropdown_price_color                 = get_theme_mod( 'ocean_edd_cart_dropdown_price_color', '#57bf6d' );
		$cart_dropdown_remove_link_color           = get_theme_mod( 'ocean_edd_cart_dropdown_remove_link_color', '#b3b3b3' );
		$cart_dropdown_remove_link_color_hover     = get_theme_mod( 'ocean_edd_cart_dropdown_remove_link_color_hover', '#13aff0' );
		$cart_dropdown_subtotal_bg                 = get_theme_mod( 'ocean_edd_cart_dropdown_subtotal_bg', '#fafafa' );
		$cart_dropdown_subtotal_border_color       = get_theme_mod( 'ocean_edd_cart_dropdown_subtotal_border_color', '#e6e6e6' );
		$cart_dropdown_subtotal_color              = get_theme_mod( 'ocean_edd_cart_dropdown_subtotal_color', '#797979' );
		$cart_dropdown_total_price_color           = get_theme_mod( 'ocean_edd_cart_dropdown_total_price_color', '#57bf6d' );
		$cart_dropdown_checkout_button_bg          = get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_bg' );
		$cart_dropdown_checkout_button_hover_bg    = get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_bg_hover' );
		$cart_dropdown_checkout_button_color       = get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_color' );
		$cart_dropdown_checkout_button_hover_color = get_theme_mod( 'ocean_edd_cart_dropdown_checkout_button_hover_color' );

		// Styling vars.
		$edd_top_padding                        = get_theme_mod( 'ocean_edd_top_padding' );
		$edd_right_padding                      = get_theme_mod( 'ocean_edd_right_padding' );
		$edd_bottom_padding                     = get_theme_mod( 'ocean_edd_bottom_padding' );
		$edd_left_padding                       = get_theme_mod( 'ocean_edd_left_padding' );
		$tablet_edd_top_padding                 = get_theme_mod( 'ocean_edd_tablet_top_padding' );
		$tablet_edd_right_padding               = get_theme_mod( 'ocean_edd_tablet_right_padding' );
		$tablet_edd_bottom_padding              = get_theme_mod( 'ocean_edd_tablet_bottom_padding' );
		$tablet_edd_left_padding                = get_theme_mod( 'ocean_edd_tablet_left_padding' );
		$mobile_edd_top_padding                 = get_theme_mod( 'ocean_edd_mobile_top_padding' );
		$mobile_edd_right_padding               = get_theme_mod( 'ocean_edd_mobile_right_padding' );
		$mobile_edd_bottom_padding              = get_theme_mod( 'ocean_edd_mobile_bottom_padding' );
		$mobile_edd_left_padding                = get_theme_mod( 'ocean_edd_mobile_left_padding' );
		$edd_image_top_margin                   = get_theme_mod( 'ocean_edd_image_top_margin' );
		$edd_image_right_margin                 = get_theme_mod( 'ocean_edd_image_right_margin' );
		$edd_image_bottom_margin                = get_theme_mod( 'ocean_edd_image_bottom_margin' );
		$edd_image_left_margin                  = get_theme_mod( 'ocean_edd_image_left_margin' );
		$tablet_edd_image_top_margin            = get_theme_mod( 'ocean_edd_image_tablet_top_margin' );
		$tablet_edd_image_right_margin          = get_theme_mod( 'ocean_edd_image_tablet_right_margin' );
		$tablet_edd_image_bottom_margin         = get_theme_mod( 'ocean_edd_image_tablet_bottom_margin' );
		$tablet_edd_image_left_margin           = get_theme_mod( 'ocean_edd_image_tablet_left_margin' );
		$mobile_edd_image_top_margin            = get_theme_mod( 'ocean_edd_image_mobile_top_margin' );
		$mobile_edd_image_right_margin          = get_theme_mod( 'ocean_edd_image_mobile_right_margin' );
		$mobile_edd_image_bottom_margin         = get_theme_mod( 'ocean_edd_image_mobile_bottom_margin' );
		$mobile_edd_image_left_margin           = get_theme_mod( 'ocean_edd_image_mobile_left_margin' );
		$edd_top_border_width                   = get_theme_mod( 'ocean_edd_top_border_width' );
		$edd_right_border_width                 = get_theme_mod( 'ocean_edd_right_border_width' );
		$edd_bottom_border_width                = get_theme_mod( 'ocean_edd_bottom_border_width' );
		$edd_left_border_width                  = get_theme_mod( 'ocean_edd_left_border_width' );
		$tablet_edd_top_border_width            = get_theme_mod( 'ocean_edd_tablet_top_border_width' );
		$tablet_edd_right_border_width          = get_theme_mod( 'ocean_edd_tablet_right_border_width' );
		$tablet_edd_bottom_border_width         = get_theme_mod( 'ocean_edd_tablet_bottom_border_width' );
		$tablet_edd_left_border_width           = get_theme_mod( 'ocean_edd_tablet_left_border_width' );
		$mobile_edd_top_border_width            = get_theme_mod( 'ocean_edd_mobile_top_border_width' );
		$mobile_edd_right_border_width          = get_theme_mod( 'ocean_edd_mobile_right_border_width' );
		$mobile_edd_bottom_border_width         = get_theme_mod( 'ocean_edd_mobile_bottom_border_width' );
		$mobile_edd_left_border_width           = get_theme_mod( 'ocean_edd_mobile_left_border_width' );
		$edd_top_border_radius                  = get_theme_mod( 'ocean_edd_top_border_radius' );
		$edd_right_border_radius                = get_theme_mod( 'ocean_edd_right_border_radius' );
		$edd_bottom_border_radius               = get_theme_mod( 'ocean_edd_bottom_border_radius' );
		$edd_left_border_radius                 = get_theme_mod( 'ocean_edd_left_border_radius' );
		$tablet_edd_top_border_radius           = get_theme_mod( 'ocean_edd_tablet_top_border_radius' );
		$tablet_edd_right_border_radius         = get_theme_mod( 'ocean_edd_tablet_right_border_radius' );
		$tablet_edd_bottom_border_radius        = get_theme_mod( 'ocean_edd_tablet_bottom_border_radius' );
		$tablet_edd_left_border_radius          = get_theme_mod( 'ocean_edd_tablet_left_border_radius' );
		$mobile_edd_top_border_radius           = get_theme_mod( 'ocean_edd_mobile_top_border_radius' );
		$mobile_edd_right_border_radius         = get_theme_mod( 'ocean_edd_mobile_right_border_radius' );
		$mobile_edd_bottom_border_radius        = get_theme_mod( 'ocean_edd_mobile_bottom_border_radius' );
		$mobile_edd_left_border_radius          = get_theme_mod( 'ocean_edd_mobile_left_border_radius' );
		$edd_background_color                   = get_theme_mod( 'ocean_edd_background_color' );
		$edd_border_color                       = get_theme_mod( 'ocean_edd_border_color' );
		$category_color                         = get_theme_mod( 'ocean_edd_category_color', '#999999' );
		$category_color_hover                   = get_theme_mod( 'ocean_edd_category_color_hover', '#13aff0' );
		$edd_title_color                        = get_theme_mod( 'ocean_edd_title_color', '#333333' );
		$edd_title_color_hover                  = get_theme_mod( 'ocean_edd_title_color_hover', '#13aff0' );
		$edd_entry_price_color                  = get_theme_mod( 'ocean_edd_entry_price_color', '#57bf6d' );
		$edd_entry_addtocart_bg_color           = get_theme_mod( 'ocean_edd_entry_addtocart_bg_color' );
		$edd_entry_addtocart_bg_color_hover     = get_theme_mod( 'ocean_edd_entry_addtocart_bg_color_hover' );
		$edd_entry_addtocart_color              = get_theme_mod( 'ocean_edd_entry_addtocart_color', '#848494' );
		$edd_entry_addtocart_color_hover        = get_theme_mod( 'ocean_edd_entry_addtocart_color_hover', '#13aff0' );
		$edd_entry_addtocart_border_color       = get_theme_mod( 'ocean_edd_entry_addtocart_border_color', '#e4e4e4' );
		$edd_entry_addtocart_border_color_hover = get_theme_mod( 'ocean_edd_entry_addtocart_border_color_hover', '#13aff0' );
		$edd_entry_addtocart_border_style       = get_theme_mod( 'ocean_edd_entry_addtocart_border_style', 'double' );
		$edd_entry_addtocart_border_size        = get_theme_mod( 'ocean_edd_entry_addtocart_border_size' );
		$edd_entry_addtocart_border_radius      = get_theme_mod( 'ocean_edd_entry_addtocart_border_radius' );
		$single_edd_title_color                 = get_theme_mod( 'ocean_single_edd_title_color', '#333333' );
		$single_edd_description_color           = get_theme_mod( 'ocean_single_edd_description_color', '#aaaaaa' );

		// Checkout.
		$checkout_titles_color               = get_theme_mod( 'ocean_edd_checkout_titles_color', '#222' );
		$checkout_titles_border_bottom_color = get_theme_mod( 'ocean_edd_checkout_titles_border_bottom_color', '#e5e5e5' );
		$checkout_borders_color              = get_theme_mod( 'ocean_edd_checkout_borders_color', '#eee' );
		$checkout_label_color                = get_theme_mod( 'ocean_edd_checkout_label_color', '#929292' );
		$checkout_description_color          = get_theme_mod( 'ocean_edd_checkout_description_color', '#666' );
		$checkout_head_bg                    = get_theme_mod( 'ocean_edd_checkout_head_bg', '#fafafa' );
		$checkout_head_titles_color          = get_theme_mod( 'ocean_edd_checkout_head_titles_color', '#666' );
		$checkout_totals_table_titles_color  = get_theme_mod( 'ocean_edd_checkout_totals_table_titles_color', '#666' );
		$checkout_remove_button_color        = get_theme_mod( 'ocean_edd_checkout_remove_button_color', '#333' );
		$checkout_remove_button_color_hover  = get_theme_mod( 'ocean_edd_checkout_remove_button_color_hover', '#13aff0' );

		// Both sidebars shop page layout.
		$archives_layout                 = get_theme_mod( 'ocean_edd_archive_layout', 'left-sidebar' );
		$bs_archives_content_width       = get_theme_mod( 'ocean_edd_archive_both_sidebars_content_width' );
		$bs_archives_content_width_unit  = get_theme_mod( 'ocean_edd_archive_both_sidebars_content_width_unit', '%' );
		$bs_archives_sidebars_width      = get_theme_mod( 'ocean_edd_archive_both_sidebars_sidebars_width' );
		$bs_archives_sidebars_width_unit = get_theme_mod( 'ocean_edd_archive_both_sidebars_sidebars_width_unit', '%' );

		// Both sidebars single edd layout.
		$single_layout                 = get_theme_mod( 'ocean_edd_download_layout', 'left-sidebar' );
		$bs_single_content_width       = get_theme_mod( 'ocean_edd_download_both_sidebars_content_width' );
		$bs_single_content_width_unit  = get_theme_mod( 'ocean_edd_download_both_sidebars_content_width_unit', '%' );
		$bs_single_sidebars_width      = get_theme_mod( 'ocean_edd_download_both_sidebars_sidebars_width' );
		$bs_single_sidebars_width_unit = get_theme_mod( 'ocean_edd_download_both_sidebars_sidebars_width_unit', '%' );

		// Define css var.
		$css = '';

		// Menu cart icon size.
		if ( ! empty( $menu_icon_size ) ) {
			$css .= '.eddmenucart i{font-size:' . $menu_icon_size . 'px;}';
			$css .= '.eddmenucart .owp-icon{width:' . $menu_icon_size . 'px; height:' . $menu_icon_size . 'px;}';
		}

		// Menu cart icon size tablet.
		if ( ! empty( $menu_icon_size_tablet ) ) {
			$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart{font-size:' . $menu_icon_size_tablet . 'px;}}';
			$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart .owp-icon{width:' . $menu_icon_size_tablet . 'px; height:' . $menu_icon_size_tablet . 'px;}}';
		}

		// Menu cart icon size mobile.
		if ( ! empty( $menu_icon_size_mobile ) ) {
			$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart{font-size:' . $menu_icon_size_mobile . 'px;}}';
			$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart .owp-icon{width:' . $menu_icon_size_mobile . 'px; height:' . $menu_icon_size_mobile . 'px;}}';
		}

		// Menu cart icon center vertically.
		if ( ! empty( $menu_icon_center_vertically ) ) {
			$css .= '.eddmenucart i{top:' . $menu_icon_center_vertically . 'px;}';
		}

		// Menu cart icon center vertically tablet.
		if ( ! empty( $menu_icon_center_vertically_tablet ) ) {
			$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart{top:' . $menu_icon_center_vertically_tablet . 'px;}}';
		}

		// Menu cart icon center vertically mobile.
		if ( ! empty( $menu_icon_center_vertically_mobile ) ) {
			$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart{top:' . $menu_icon_center_vertically_mobile . 'px;}}';
		}

		// Cart dropdown width.
		if ( ! empty( $cart_dropdown_width ) && '350' != $cart_dropdown_width ) {
			$css .= '.current-shop-items-dropdown{width:' . $cart_dropdown_width . 'px;}';
		}

		// Bag icon style color.
		if ( ! empty( $edd_menu_bag_icon_color ) && '#333333' != $edd_menu_bag_icon_color ) {
			$css .= '.eddmenucart-cart-icon .eddmenucart-count{border-color:' . $edd_menu_bag_icon_color . ';}';
			$css .= '.eddmenucart-cart-icon .eddmenucart-count:after{border-color:' . $edd_menu_bag_icon_color . ';}';
		}

		// Bag icon style hover color.
		if ( ! empty( $edd_menu_bag_icon_hover_color ) && '#13aff0' != $edd_menu_bag_icon_hover_color ) {
			$css .= '.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count{background-color:' . $edd_menu_bag_icon_hover_color . '; border-color:' . $edd_menu_bag_icon_hover_color . ';}';
			$css .= '.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count:after, .show-cart .eddmenucart-cart-icon .eddmenucart-count:after{border-color:' . $edd_menu_bag_icon_hover_color . ';}';
		}

		// Bag icon style count color.
		if ( ! empty( $edd_menu_bag_icon_count_color ) && '#333333' != $edd_menu_bag_icon_count_color ) {
			$css .= '.eddmenucart-cart-icon .eddmenucart-count, .edd-menu-icon .eddmenucart-total span{color:' . $edd_menu_bag_icon_count_color . ';}';
		}

		// Bag icon style hover count color.
		if ( ! empty( $edd_menu_bag_icon_hover_count_color ) && '#ffffff' != $edd_menu_bag_icon_hover_count_color ) {
			$css .= '.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count{color:' . $edd_menu_bag_icon_hover_count_color . ';}';
		}

		// Cart dropdown background.
		if ( ! empty( $cart_dropdown_bg ) && '#ffffff' != $cart_dropdown_bg ) {
			$css .= '.current-shop-items-dropdown{background-color:' . $cart_dropdown_bg . ';}';
		}

		// Cart dropdown borders.
		if ( ! empty( $cart_dropdown_borders ) && '#e6e6e6' != $cart_dropdown_borders ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li{border-color:' . $cart_dropdown_borders . ';}';
		}

		// Cart dropdown product title color.
		if ( ! empty( $cart_dropdown_title_color ) ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li .edd-cart-item-title{color:' . $cart_dropdown_title_color . ';}';
		}

		// Cart dropdown price color.
		if ( ! empty( $cart_dropdown_price_color ) && '#57bf6d' != $cart_dropdown_price_color ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li .edd-cart-item-price{color:' . $cart_dropdown_price_color . ';}';
		}

		// Cart dropdown remove link color.
		if ( ! empty( $cart_dropdown_remove_link_color ) && '#b3b3b3' != $cart_dropdown_remove_link_color ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart{color:' . $cart_dropdown_remove_link_color . ';}';
		}

		// Cart dropdown remove link hover color.
		if ( ! empty( $cart_dropdown_remove_link_color_hover ) && '#13aff0' != $cart_dropdown_remove_link_color_hover ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart:hover{color:' . $cart_dropdown_remove_link_color_hover . ';}';
		}

		// Cart dropdown subtotal background color.
		if ( ! empty( $cart_dropdown_subtotal_bg ) && '#fafafa' != $cart_dropdown_subtotal_bg ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total{background-color:' . $cart_dropdown_subtotal_bg . ';}';
		}

		// Cart dropdown subtotal borde color.
		if ( ! empty( $cart_dropdown_subtotal_border_color ) && '#e6e6e6' != $cart_dropdown_subtotal_border_color ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total{border-color:' . $cart_dropdown_subtotal_border_color . ';}';
		}

		// Cart dropdown subtotal color.
		if ( ! empty( $cart_dropdown_subtotal_color ) && '#797979' != $cart_dropdown_subtotal_color ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total{color:' . $cart_dropdown_subtotal_color . ';}';
		}

		// Cart dropdown total price color.
		if ( ! empty( $cart_dropdown_total_price_color ) && '#57bf6d' != $cart_dropdown_total_price_color ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total .cart-total{color:' . $cart_dropdown_total_price_color . ';}';
		}

		// Cart dropdown checkout button background color.
		if ( ! empty( $cart_dropdown_checkout_button_bg ) ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a{background-color:' . $cart_dropdown_checkout_button_bg . ';}';
		}

		// Cart dropdown checkout button hover background color.
		if ( ! empty( $cart_dropdown_checkout_button_hover_bg ) ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover{background-color:' . $cart_dropdown_checkout_button_hover_bg . ';}';
		}

		// Cart dropdown checkout button color.
		if ( ! empty( $cart_dropdown_checkout_button_color ) ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a{color:' . $cart_dropdown_checkout_button_color . ';}';
		}

		// Cart dropdown checkout button hover color.
		if ( ! empty( $cart_dropdown_checkout_button_hover_color ) ) {
			$css .= '.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover{color:' . $cart_dropdown_checkout_button_hover_color . ';}';
		}

		// Product padding.
		if ( isset( $edd_top_padding ) && '' != $edd_top_padding
			|| isset( $edd_right_padding ) && '' != $edd_right_padding
			|| isset( $edd_bottom_padding ) && '' != $edd_bottom_padding
			|| isset( $edd_left_padding ) && '' != $edd_left_padding ) {
			$css .= '.edd_downloads_list .edd_download_inner{padding:' . oceanwp_spacing_css( $edd_top_padding, $edd_right_padding, $edd_bottom_padding, $edd_left_padding ) . '}';
		}

		// Tablet edd padding.
		if ( isset( $tablet_edd_top_padding ) && '' != $tablet_edd_top_padding
			|| isset( $tablet_edd_right_padding ) && '' != $tablet_edd_right_padding
			|| isset( $tablet_edd_bottom_padding ) && '' != $tablet_edd_bottom_padding
			|| isset( $tablet_edd_left_padding ) && '' != $tablet_edd_left_padding ) {
			$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner{padding:' . oceanwp_spacing_css( $tablet_edd_top_padding, $tablet_edd_right_padding, $tablet_edd_bottom_padding, $tablet_edd_left_padding ) . '}}';
		}

		// Mobile edd padding.
		if ( isset( $mobile_edd_top_padding ) && '' != $mobile_edd_top_padding
			|| isset( $mobile_edd_right_padding ) && '' != $mobile_edd_right_padding
			|| isset( $mobile_edd_bottom_padding ) && '' != $mobile_edd_bottom_padding
			|| isset( $mobile_edd_left_padding ) && '' != $mobile_edd_left_padding ) {
			$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner{padding:' . oceanwp_spacing_css( $mobile_edd_top_padding, $mobile_edd_right_padding, $mobile_edd_bottom_padding, $mobile_edd_left_padding ) . '}}';
		}

		// Product image margin.
		if ( isset( $edd_image_top_margin ) && '' != $edd_image_top_margin
			|| isset( $edd_image_right_margin ) && '' != $edd_image_right_margin
			|| isset( $edd_image_bottom_margin ) && '' != $edd_image_bottom_margin
			|| isset( $edd_image_left_margin ) && '' != $edd_image_left_margin ) {
			$css .= '.edd_downloads_list .edd_download_inner .edd_download_image{margin:' . oceanwp_spacing_css( $edd_image_top_margin, $edd_image_right_margin, $edd_image_bottom_margin, $edd_image_left_margin ) . '}';
		}

		// Tablet edd image margin.
		if ( isset( $tablet_edd_image_top_margin ) && '' != $tablet_edd_image_top_margin
			|| isset( $tablet_edd_image_right_margin ) && '' != $tablet_edd_image_right_margin
			|| isset( $tablet_edd_image_bottom_margin ) && '' != $tablet_edd_image_bottom_margin
			|| isset( $tablet_edd_image_left_margin ) && '' != $tablet_edd_image_left_margin ) {
			$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner .edd_download_image{margin:' . oceanwp_spacing_css( $tablet_edd_image_top_margin, $tablet_edd_image_right_margin, $tablet_edd_image_bottom_margin, $tablet_edd_image_left_margin ) . '}}';
		}

		// Mobile edd image margin.
		if ( isset( $mobile_edd_image_top_margin ) && '' != $mobile_edd_image_top_margin
			|| isset( $mobile_edd_image_right_margin ) && '' != $mobile_edd_image_right_margin
			|| isset( $mobile_edd_image_bottom_margin ) && '' != $mobile_edd_image_bottom_margin
			|| isset( $mobile_edd_image_left_margin ) && '' != $mobile_edd_image_left_margin ) {
			$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner .edd_download_image{margin:' . oceanwp_spacing_css( $mobile_edd_image_top_margin, $mobile_edd_image_right_margin, $mobile_edd_image_bottom_margin, $mobile_edd_image_left_margin ) . '}}';
		}

		// Product border style if border width.
		if ( isset( $edd_top_border_width ) && '' != $edd_top_border_width
			|| isset( $edd_right_border_width ) && '' != $edd_right_border_width
			|| isset( $edd_bottom_border_width ) && '' != $edd_bottom_border_width
			|| isset( $edd_left_border_width ) && '' != $edd_left_border_width
			|| isset( $tablet_edd_top_border_width ) && '' != $tablet_edd_top_border_width
			|| isset( $tablet_edd_right_border_width ) && '' != $tablet_edd_right_border_width
			|| isset( $tablet_edd_bottom_border_width ) && '' != $tablet_edd_bottom_border_width
			|| isset( $tablet_edd_left_border_width ) && '' != $tablet_edd_left_border_width
			|| isset( $mobile_edd_top_border_width ) && '' != $mobile_edd_top_border_width
			|| isset( $mobile_edd_right_border_width ) && '' != $mobile_edd_right_border_width
			|| isset( $mobile_edd_bottom_border_width ) && '' != $mobile_edd_bottom_border_width
			|| isset( $mobile_edd_left_border_width ) && '' != $mobile_edd_left_border_width ) {
			$css .= '.edd_downloads_list .edd_download_inner{border-style: solid}';
		}

		// Product border width.
		if ( isset( $edd_top_border_width ) && '' != $edd_top_border_width
			|| isset( $edd_right_border_width ) && '' != $edd_right_border_width
			|| isset( $edd_bottom_border_width ) && '' != $edd_bottom_border_width
			|| isset( $edd_left_border_width ) && '' != $edd_left_border_width ) {
			$css .= '.edd_downloads_list .edd_download_inner{border-width:' . oceanwp_spacing_css( $edd_top_border_width, $edd_right_border_width, $edd_bottom_border_width, $edd_left_border_width ) . '}';
		}

		// Tablet edd border width.
		if ( isset( $tablet_edd_top_border_width ) && '' != $tablet_edd_top_border_width
			|| isset( $tablet_edd_right_border_width ) && '' != $tablet_edd_right_border_width
			|| isset( $tablet_edd_bottom_border_width ) && '' != $tablet_edd_bottom_border_width
			|| isset( $tablet_edd_left_border_width ) && '' != $tablet_edd_left_border_width ) {
			$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner{border-width:' . oceanwp_spacing_css( $tablet_edd_top_border_width, $tablet_edd_right_border_width, $tablet_edd_bottom_border_width, $tablet_edd_left_border_width ) . '}}';
		}

		// Mobile edd border width.
		if ( isset( $mobile_edd_top_border_width ) && '' != $mobile_edd_top_border_width
			|| isset( $mobile_edd_right_border_width ) && '' != $mobile_edd_right_border_width
			|| isset( $mobile_edd_bottom_border_width ) && '' != $mobile_edd_bottom_border_width
			|| isset( $mobile_edd_left_border_width ) && '' != $mobile_edd_left_border_width ) {
			$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner{border-width:' . oceanwp_spacing_css( $mobile_edd_top_border_width, $mobile_edd_right_border_width, $mobile_edd_bottom_border_width, $mobile_edd_left_border_width ) . '}}';
		}

		// Product border radius.
		if ( isset( $edd_top_border_radius ) && '' != $edd_top_border_radius
			|| isset( $edd_right_border_radius ) && '' != $edd_right_border_radius
			|| isset( $edd_bottom_border_radius ) && '' != $edd_bottom_border_radius
			|| isset( $edd_left_border_radius ) && '' != $edd_left_border_radius ) {
			$css .= '.edd_downloads_list .edd_download_inner{border-radius:' . oceanwp_spacing_css( $edd_top_border_radius, $edd_right_border_radius, $edd_bottom_border_radius, $edd_left_border_radius ) . '}';
		}

		// Tablet edd border radius.
		if ( isset( $tablet_edd_top_border_radius ) && '' != $tablet_edd_top_border_radius
			|| isset( $tablet_edd_right_border_radius ) && '' != $tablet_edd_right_border_radius
			|| isset( $tablet_edd_bottom_border_radius ) && '' != $tablet_edd_bottom_border_radius
			|| isset( $tablet_edd_left_border_radius ) && '' != $tablet_edd_left_border_radius ) {
			$css .= '@media (max-width: 768px){.edd_downloads_list .edd_download_inner{border-radius:' . oceanwp_spacing_css( $tablet_edd_top_border_radius, $tablet_edd_right_border_radius, $tablet_edd_bottom_border_radius, $tablet_edd_left_border_radius ) . '}}';
		}

		// Mobile edd border radius.
		if ( isset( $mobile_edd_top_border_radius ) && '' != $mobile_edd_top_border_radius
			|| isset( $mobile_edd_right_border_radius ) && '' != $mobile_edd_right_border_radius
			|| isset( $mobile_edd_bottom_border_radius ) && '' != $mobile_edd_bottom_border_radius
			|| isset( $mobile_edd_left_border_radius ) && '' != $mobile_edd_left_border_radius ) {
			$css .= '@media (max-width: 480px){.edd_downloads_list .edd_download_inner{border-radius:' . oceanwp_spacing_css( $mobile_edd_top_border_radius, $mobile_edd_right_border_radius, $mobile_edd_bottom_border_radius, $mobile_edd_left_border_radius ) . '}}';
		}

		// Add background color.
		if ( ! empty( $edd_background_color ) ) {
			$css .= '.edd_downloads_list .edd_download_inner{background-color:' . $edd_background_color . ';}';
		}

		// Add border color.
		if ( ! empty( $edd_border_color ) ) {
			$css .= '.edd_downloads_list .edd_download_inner{border-color:' . $edd_border_color . ';}';
		}

		// Add category color.
		if ( ! empty( $category_color ) && '#999999' != $category_color ) {
			$css .= '.edd_downloads_list .edd_download_inner .edd_download_categories a{color:' . $category_color . ';}';
		}

		// Add category color hover.
		if ( ! empty( $category_color_hover ) && '#13aff0' != $category_color_hover ) {
			$css .= '.edd_downloads_list .edd_download_inner .edd_download_categories a:hover{color:' . $category_color_hover . ';}';
		}

		// Add edd entry title color.
		if ( ! empty( $edd_title_color ) && '#333333' != $edd_title_color ) {
			$css .= '.edd_downloads_list .edd_download_inner .edd_download_title a{color:' . $edd_title_color . ';}';
		}

		// Add edd entry title color hover.
		if ( ! empty( $edd_title_color_hover ) && '#13aff0' != $edd_title_color_hover ) {
			$css .= '.edd_downloads_list .edd_download_inner .edd_download_title a:hover{color:' . $edd_title_color_hover . ';}';
		}

		// Add edd entry price color.
		if ( ! empty( $edd_entry_price_color ) && '#57bf6d' != $edd_entry_price_color ) {
			$css .= '.edd_downloads_list .edd_download_inner span.edd_price, .edd_price_range_sep{color:' . $edd_entry_price_color . ';}';
		}

		// Add edd entry add to cart background color.
		if ( ! empty( $edd_entry_addtocart_bg_color ) ) {
			$css .= '.edd_downloads_list .edd_download_inner .button{background-color:' . $edd_entry_addtocart_bg_color . ';}';
		}

		// Add edd entry add to cart background color hover.
		if ( ! empty( $edd_entry_addtocart_bg_color_hover ) ) {
			$css .= '.edd_downloads_list .edd_download_inner .button:hover{background-color:' . $edd_entry_addtocart_bg_color_hover . ';}';
		}

		// Add edd entry add to cart color.
		if ( ! empty( $edd_entry_addtocart_color ) && '#848494' != $edd_entry_addtocart_color ) {
			$css .= '.edd_downloads_list .edd_download_inner .button{color:' . $edd_entry_addtocart_color . ';}';
		}

		// Add edd entry add to cart color hover.
		if ( ! empty( $edd_entry_addtocart_color_hover ) && '#13aff0' != $edd_entry_addtocart_color_hover ) {
			$css .= '.edd_downloads_list .edd_download_inner .button:hover{color:' . $edd_entry_addtocart_color_hover . ';}';
		}

		// Add edd entry add to cart border color.
		if ( ! empty( $edd_entry_addtocart_border_color ) && '#e4e4e4' != $edd_entry_addtocart_border_color ) {
			$css .= '.edd_downloads_list .edd_download_inner .button{border-color:' . $edd_entry_addtocart_border_color . ';}';
		}

		// Add edd entry add to cart border color hover.
		if ( ! empty( $edd_entry_addtocart_border_color_hover ) && '#13aff0' != $edd_entry_addtocart_border_color_hover ) {
			$css .= '.edd_downloads_list .edd_download_inner .button:hover{border-color:' . $edd_entry_addtocart_border_color_hover . ';}';
		}

		// Add edd entry add to cart border style.
		if ( ! empty( $edd_entry_addtocart_border_style ) && 'double' != $edd_entry_addtocart_border_style ) {
			$css .= '.edd_downloads_list .edd_download_inner .button{border-style:' . $edd_entry_addtocart_border_style . ';}';
		}

		// Add edd entry add to cart border size.
		if ( ! empty( $edd_entry_addtocart_border_size ) && '3' != $edd_entry_addtocart_border_size ) {
			$css .= '.edd_downloads_list .edd_download_inner .button{border-width:' . $edd_entry_addtocart_border_size . ';}';
		}

		// Add edd entry add to cart border radius.
		if ( ! empty( $edd_entry_addtocart_border_radius ) ) {
			$css .= '.edd_downloads_list .edd_download_inner .button{border-radius:' . $edd_entry_addtocart_border_radius . ';}';
		}

		// Add single edd title color.
		if ( ! empty( $single_edd_title_color ) && '#333333' != $single_edd_title_color ) {
			$css .= '.single-download .edd-download .edd_download_title{color:' . $single_edd_title_color . ';}';
		}

		// Add single edd description color.
		if ( ! empty( $single_edd_description_color ) && '#aaaaaa' != $single_edd_description_color ) {
			$css .= '.single-download .edd-download .edd_download_content{color:' . $single_edd_description_color . ';}';
		}

		// Add checkout titles color.
		if ( ! empty( $checkout_titles_color ) && '#222' != $checkout_titles_color ) {
			$css .= '#edd_checkout_form_wrap legend{color:' . $checkout_titles_color . ';}';
		}

		// Add checkout notices titles border bottom color.
		if ( ! empty( $checkout_titles_border_bottom_color ) && '#e5e5e5' != $checkout_titles_border_bottom_color ) {
			$css .= '#edd_checkout_form_wrap legend{border-color:' . $checkout_titles_border_bottom_color . ';}';
		}

		// Add checkout borders color.
		if ( ! empty( $checkout_borders_color ) && '#eee' != $checkout_borders_color ) {
			$css .= '#edd_checkout_cart th, #edd_checkout_cart td, #edd_checkout_form_wrap #edd-discount-code-wrap, #edd_checkout_form_wrap #edd_final_total_wrap, #edd_checkout_form_wrap #edd_show_discount, #edd_checkout_form_wrap fieldset{border-color:' . $checkout_borders_color . ';}';
		}

		// Add checkout label color.
		if ( ! empty( $checkout_label_color ) && '#929292' != $checkout_label_color ) {
			$css .= '#edd_checkout_form_wrap .edd-label{color:' . $checkout_label_color . ';}';
		}

		// Add checkout description color.
		if ( ! empty( $checkout_description_color ) && '#666' != $checkout_description_color ) {
			$css .= '#edd_checkout_form_wrap .edd-description{color:' . $checkout_description_color . ';}';
		}

		// Add checkout head background.
		if ( ! empty( $checkout_head_bg ) && '#fafafa' != $checkout_head_bg ) {
			$css .= '#edd_checkout_cart .edd_cart_header_row th, .edd-table tr th{background-color:' . $checkout_head_bg . ';}';
		}

		// Add checkout head titles color.
		if ( ! empty( $checkout_head_titles_color ) && '#666' != $checkout_head_titles_color ) {
			$css .= '#edd_checkout_cart .edd_cart_header_row th, .edd-table tr th{color:' . $checkout_head_titles_color . ';}';
		}

		// Add checkout totals table titles color.
		if ( ! empty( $checkout_totals_table_titles_color ) && '#666' != $checkout_totals_table_titles_color ) {
			$css .= '#edd_checkout_cart th.edd_cart_total{color:' . $checkout_totals_table_titles_color . ';}';
		}

		// Add checkout remove button color.
		if ( ! empty( $checkout_remove_button_color ) && '#333' != $checkout_remove_button_color ) {
			$css .= '#edd_checkout_cart a.edd_cart_remove_item_btn{color:' . $checkout_remove_button_color . ';}';
		}

		// Add checkout remove button color hover.
		if ( ! empty( $checkout_remove_button_color_hover ) && '#13aff0' != $checkout_remove_button_color_hover ) {
			$css .= '#edd_checkout_cart a.edd_cart_remove_item_btn:hover{color:' . $checkout_remove_button_color_hover . ';}';
		}

		// If shop page Both Sidebars layout.
		if ( 'both-sidebars' === $archives_layout ) {

			// Both Sidebars layout shop page content width.
			if ( ! empty( $bs_archives_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.edd.archive.content-both-sidebars .content-area {width: ' . $bs_archives_content_width . $bs_archives_content_width_unit . ';}
						body.edd.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.edd.archive.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_archives_content_width .  $bs_archives_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout shop page sidebars width.
			if ( ! empty( $bs_archives_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.edd.archive.content-both-sidebars .widget-area{width:' . $bs_archives_sidebars_width . $bs_archives_sidebars_width_unit . ';}
						body.edd.archive.content-both-sidebars.scs-style .content-area{left:' . $bs_archives_sidebars_width .  $bs_archives_sidebars_width_unit . ';}
						body.edd.archive.content-both-sidebars.ssc-style .content-area{left:' . $bs_archives_sidebars_width * 2 .  $bs_archives_sidebars_width_unit . ';}
					}';
			}
		}

		// If single edd Both Sidebars layout.
		if ( 'both-sidebars' === $single_layout ) {

			// Both Sidebars layout single edd content width.
			if ( ! empty( $bs_single_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-edd.content-both-sidebars .content-area {width: ' . $bs_single_content_width . $bs_single_content_width_unit . ';}
						body.single-edd.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-edd.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_single_content_width . $bs_single_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout single edd sidebars width.
			if ( ! empty( $bs_single_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-edd.content-both-sidebars .widget-area{width:' . $bs_single_sidebars_width . $bs_single_sidebars_width_unit . ';}
						body.single-edd.content-both-sidebars.scs-style .content-area{left:' . $bs_single_sidebars_width . $bs_single_sidebars_width_unit . ';}
						body.single-edd.content-both-sidebars.ssc-style .content-area{left:' . $bs_single_sidebars_width * 2 . $bs_single_sidebars_width_unit . ';}
					}';
			}
		}

		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* EDD */' . $css;
		}

		// Return output css.
		return $output;
	}
}

return new OceanWP_Customize_EDD_CSS();
