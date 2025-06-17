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
class OceanWP_Customize_WooCommerce_CSS {

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

		// Global vars
		$menu_icon_size                                     = get_theme_mod( 'ocean_woo_menu_icon_size' );
		$menu_icon_size_tablet                              = get_theme_mod( 'ocean_woo_menu_icon_size_tablet' );
		$menu_icon_size_mobile                              = get_theme_mod( 'ocean_woo_menu_icon_size_mobile' );
		$menu_icon_center_vertically                        = get_theme_mod( 'ocean_woo_menu_icon_center_vertically' );
		$menu_icon_center_vertically_tablet                 = get_theme_mod( 'ocean_woo_menu_icon_center_vertically_tablet' );
		$menu_icon_center_vertically_mobile                 = get_theme_mod( 'ocean_woo_menu_icon_center_vertically_mobile' );
		$cart_dropdown_width                                = get_theme_mod( 'ocean_woo_cart_dropdown_width', '350' );
		$woo_menu_bag_icon_color                            = get_theme_mod( 'ocean_woo_menu_bag_icon_color', '#333333' );
		$woo_menu_bag_icon_hover_color                      = get_theme_mod( 'ocean_woo_menu_bag_icon_hover_color', '#13aff0' );
		$woo_menu_bag_icon_count_color                      = get_theme_mod( 'ocean_woo_menu_bag_icon_count_color', '#333333' );
		$woo_menu_bag_icon_hover_count_color                = get_theme_mod( 'ocean_woo_menu_bag_icon_hover_count_color', '#ffffff' );
		$cart_dropdown_bg                                   = get_theme_mod( 'ocean_woo_cart_dropdown_bg', '#ffffff' );
		$cart_dropdown_borders                              = get_theme_mod( 'ocean_woo_cart_dropdown_borders', '#e6e6e6' );
		$cart_dropdown_link_color                           = get_theme_mod( 'ocean_woo_cart_dropdown_link_color', '#333333' );
		$cart_dropdown_link_color_hover                     = get_theme_mod( 'ocean_woo_cart_dropdown_link_color_hover', '#13aff0' );
		$cart_dropdown_remove_link_color					= get_theme_mod( 'ocean_woo_cart_dropdown_remove_link_color', '#b3b3b3' );
		$cart_dropdown_remove_link_color_hover				= get_theme_mod( 'ocean_woo_cart_dropdown_remove_link_color_hover', '#13aff0' );
		$cart_dropdown_quantity_color						= get_theme_mod( 'ocean_woo_cart_dropdown_quantity_color', '#b2b2b2' );
		$cart_dropdown_price_color							= get_theme_mod( 'ocean_woo_cart_dropdown_price_color', '#57bf6d' );
		$cart_dropdown_subtotal_bg							= get_theme_mod( 'ocean_woo_cart_dropdown_subtotal_bg', '#fafafa' );
		$cart_dropdown_subtotal_color						= get_theme_mod( 'ocean_woo_cart_dropdown_subtotal_color', '#797979' );
		$cart_dropdown_total_price_color					= get_theme_mod( 'ocean_woo_cart_dropdown_total_price_color', '#57bf6d' );
		$cart_dropdown_cart_button_bg						= get_theme_mod( 'ocean_woo_cart_dropdown_cart_button_bg' );
		$cart_dropdown_cart_button_hover_bg					= get_theme_mod( 'ocean_woo_cart_dropdown_cart_button_hover_bg' );
		$cart_dropdown_cart_button_color					= get_theme_mod( 'ocean_woo_cart_dropdown_cart_button_color' );
		$cart_dropdown_cart_button_hover_color				= get_theme_mod( 'ocean_woo_cart_dropdown_cart_button_hover_color' );
		$cart_dropdown_cart_button_border_color				= get_theme_mod( 'ocean_woo_cart_dropdown_cart_button_border_color' );
		$cart_dropdown_cart_button_hover_border_color		= get_theme_mod( 'ocean_woo_cart_dropdown_cart_button_hover_border_color' );
		$cart_dropdown_checkout_button_bg					= get_theme_mod( 'ocean_woo_cart_dropdown_checkout_button_bg' );
		$cart_dropdown_checkout_button_hover_bg				= get_theme_mod( 'ocean_woo_cart_dropdown_checkout_button_hover_bg' );
		$cart_dropdown_checkout_button_color				= get_theme_mod( 'ocean_woo_cart_dropdown_checkout_button_color' );
		$cart_dropdown_checkout_button_hover_color			= get_theme_mod( 'ocean_woo_cart_dropdown_checkout_button_hover_color' );
		$cart_dropdown_checkout_button_border_color		    = get_theme_mod( 'ocean_woo_cart_dropdown_checkout_button_border_color' );
		$cart_dropdown_checkout_button_border_hover_color	= get_theme_mod( 'ocean_woo_cart_dropdown_checkout_button_border_hover_color' );
		$woo_mobile_cart_sidebar_bg							= get_theme_mod( 'ocean_woo_mobile_cart_sidebar_bg', '#ffffff' );
		$woo_mobile_cart_sidebar_close_button_color			= get_theme_mod( 'ocean_woo_mobile_cart_sidebar_close_button_color', '#000000' );
		$woo_mobile_cart_sidebar_close_button_color_icon    = get_theme_mod( 'ocean_woo_mobile_cart_sidebar_close_button_color_icon', '#333' );
		$woo_mobile_cart_sidebar_title_color				= get_theme_mod( 'ocean_woo_mobile_cart_sidebar_title_color', '#555555' );
		$woo_mobile_cart_sidebar_divider_color				= get_theme_mod( 'ocean_woo_mobile_cart_sidebar_divider_color', 'rgba(0,0,0,0.1)' );

		// Styling vars
		$off_canvas_close_button_color 						= get_theme_mod( 'ocean_woo_off_canvas_close_button_color', '#333333' );
		$off_canvas_close_button_hover_color 				= get_theme_mod( 'ocean_woo_off_canvas_close_button_hover_color', '#777777' );
		$infinite_scroll_spinners_color 					= get_theme_mod( 'ocean_woo_infinite_scroll_spinners_color', '#333333' );

		$load_more_btn_color                                = get_theme_mod( 'ocean_woo_pagination_load_more_button_color' );
		$load_more_btn_color_hover                          = get_theme_mod( 'ocean_woo_pagination_load_more_button_color_hover' );
		$load_more_btn_text_color                           = get_theme_mod( 'ocean_woo_pagination_load_more_button_text_color' );
		$load_more_btn_text_color_hover                     = get_theme_mod( 'ocean_woo_pagination_load_more_button_text_color_hover' );

		$woo_product_image_width 							= get_theme_mod( 'ocean_woo_product_image_width', '52' );
		$woo_product_summary_width 							= get_theme_mod( 'ocean_woo_product_summary_width', '44' );
		$floating_bar_bg 									= get_theme_mod( 'ocean_woo_floating_bar_bg', '#2c2c2c' );
		$floating_bar_title_color 							= get_theme_mod( 'ocean_woo_floating_bar_title_color', '#ffffff' );
		$floating_bar_price_color 							= get_theme_mod( 'ocean_woo_floating_bar_price_color', '#ffffff' );
		$floating_bar_quantity_buttons_bg 					= get_theme_mod( 'ocean_woo_floating_bar_quantity_buttons_bg', 'rgba(255,255,255,0.1)' );
		$floating_bar_quantity_buttons_hover_bg 			= get_theme_mod( 'ocean_woo_floating_bar_quantity_buttons_hover_bg', 'rgba(255,255,255,0.2)' );
		$floating_bar_quantity_buttons_color 				= get_theme_mod( 'ocean_woo_floating_bar_quantity_buttons_color', '#ffffff' );
		$floating_bar_quantity_buttons_hover_color 			= get_theme_mod( 'ocean_woo_floating_bar_quantity_buttons_hover_color', '#ffffff' );
		$floating_bar_quantity_input_bg 					= get_theme_mod( 'ocean_woo_floating_bar_quantity_input_bg', 'rgba(255,255,255,0.2)' );
		$floating_bar_quantity_input_color 					= get_theme_mod( 'ocean_woo_floating_bar_quantity_input_color', '#ffffff' );
		$floating_bar_addtocart_bg 							= get_theme_mod( 'ocean_woo_floating_bar_addtocart_bg', '#ffffff' );
		$floating_bar_addtocart_hover_bg 					= get_theme_mod( 'ocean_woo_floating_bar_addtocart_hover_bg', '#f1f1f1' );
		$floating_bar_addtocart_color 						= get_theme_mod( 'ocean_woo_floating_bar_addtocart_color', '#000000' );
		$floating_bar_addtocart_hover_color 				= get_theme_mod( 'ocean_woo_floating_bar_addtocart_hover_color', '#000000' );
		$checkout_timeline_bg 								= get_theme_mod( 'ocean_woo_checkout_timeline_bg', '#eeeeee' );
		$checkout_timeline_color 							= get_theme_mod( 'ocean_woo_checkout_timeline_color', '#333333' );
		$checkout_timeline_number_bg 						= get_theme_mod( 'ocean_woo_checkout_timeline_number_bg', '#ffffff' );
		$checkout_timeline_number_color 					= get_theme_mod( 'ocean_woo_checkout_timeline_number_color', '#cccccc' );
		$checkout_timeline_number_border_color 				= get_theme_mod( 'ocean_woo_checkout_timeline_number_border_color', '#cccccc' );
		$checkout_timeline_active_bg 						= get_theme_mod( 'ocean_woo_checkout_timeline_active_bg', '#13aff0' );
		$checkout_timeline_active_color 					= get_theme_mod( 'ocean_woo_checkout_timeline_active_color', '#ffffff' );
		$onsale_bg 											= get_theme_mod( 'ocean_onsale_bg', '#3FC387' );
		$onsale_color 										= get_theme_mod( 'ocean_onsale_color', '#ffffff' );
		$product_thumbs_layout                              = get_theme_mod( 'ocean_woo_product_thumbs_layout', 'horizontal' );
		$outofstock_bg 										= get_theme_mod( 'ocean_outofstock_bg', '#000000' );
		$outofstock_color 									= get_theme_mod( 'ocean_outofstock_color', '#ffffff' );
		$stars_color_before 								= get_theme_mod( 'ocean_stars_color_before', '#dfdbdf' );
		$stars_color 										= get_theme_mod( 'ocean_stars_color', '#f9ca63' );
		$quantity_border_color 								= get_theme_mod( 'ocean_quantity_border_color', '#e4e4e4' );
		$quantity_border_color_focus 						= get_theme_mod( 'ocean_quantity_border_color_focus', '#bbbbbb' );
		$quantity_color 									= get_theme_mod( 'ocean_quantity_color', '#777777' );
		$quantity_plus_minus_color 							= get_theme_mod( 'ocean_quantity_plus_minus_color', '#cccccc' );
		$quantity_plus_minus_color_hover 					= get_theme_mod( 'ocean_quantity_plus_minus_color_hover', '#cccccc' );
		$quantity_plus_minus_border_color_hover 			= get_theme_mod( 'ocean_quantity_plus_minus_border_color_hover', '#e0e0e0' );
		$toolbar_border_color 								= get_theme_mod( 'ocean_toolbar_border_color', '#eaeaea' );
		$toolbar_off_canvas_filter_color 					= get_theme_mod( 'ocean_toolbar_off_canvas_filter_color', '#999999' );
		$toolbar_off_canvas_filter_border_color 			= get_theme_mod( 'ocean_toolbar_off_canvas_filter_border_color', '#eaeaea' );
		$toolbar_off_canvas_filter_hover_color 				= get_theme_mod( 'ocean_toolbar_off_canvas_filter_hover_color', '#13aff0' );
		$toolbar_off_canvas_filter_hover_border_color 		= get_theme_mod( 'ocean_toolbar_off_canvas_filter_hover_border_color', '#13aff0' );
		$toolbar_grid_list_color 							= get_theme_mod( 'ocean_toolbar_grid_list_color', '#999999' );
		$toolbar_grid_list_border_color 					= get_theme_mod( 'ocean_toolbar_grid_list_border_color', '#eaeaea' );
		$toolbar_grid_list_hover_color 						= get_theme_mod( 'ocean_toolbar_grid_list_hover_color', '#13aff0' );
		$toolbar_grid_list_active_color 					= get_theme_mod( 'ocean_toolbar_grid_list_active_color', '#13aff0' );
		$toolbar_select_color 								= get_theme_mod( 'ocean_toolbar_select_color', '#999999' );
		$toolbar_select_border_color 						= get_theme_mod( 'ocean_toolbar_select_border_color', '#dddddd' );
		$toolbar_number_of_products_color 					= get_theme_mod( 'ocean_toolbar_number_of_products_color', '#555555' );
		$toolbar_number_of_products_inactive_color 			= get_theme_mod( 'ocean_toolbar_number_of_products_inactive_color', '#999999' );
		$toolbar_number_of_products_border_color 			= get_theme_mod( 'ocean_toolbar_number_of_products_border_color', '#999999' );
		$product_top_padding 								= get_theme_mod( 'ocean_product_top_padding' );
		$product_right_padding 								= get_theme_mod( 'ocean_product_right_padding' );
		$product_bottom_padding 							= get_theme_mod( 'ocean_product_bottom_padding' );
		$product_left_padding 								= get_theme_mod( 'ocean_product_left_padding' );
		$tablet_product_top_padding 						= get_theme_mod( 'ocean_product_tablet_top_padding' );
		$tablet_product_right_padding 						= get_theme_mod( 'ocean_product_tablet_right_padding' );
		$tablet_product_bottom_padding 						= get_theme_mod( 'ocean_product_tablet_bottom_padding' );
		$tablet_product_left_padding 						= get_theme_mod( 'ocean_product_tablet_left_padding' );
		$mobile_product_top_padding 						= get_theme_mod( 'ocean_product_mobile_top_padding' );
		$mobile_product_right_padding 						= get_theme_mod( 'ocean_product_mobile_right_padding' );
		$mobile_product_bottom_padding 						= get_theme_mod( 'ocean_product_mobile_bottom_padding' );
		$mobile_product_left_padding 						= get_theme_mod( 'ocean_product_mobile_left_padding' );
		$product_image_top_margin 							= get_theme_mod( 'ocean_product_image_top_margin' );
		$product_image_right_margin 						= get_theme_mod( 'ocean_product_image_right_margin' );
		$product_image_bottom_margin 						= get_theme_mod( 'ocean_product_image_bottom_margin' );
		$product_image_left_margin 							= get_theme_mod( 'ocean_product_image_left_margin' );
		$tablet_product_image_top_margin 					= get_theme_mod( 'ocean_product_image_tablet_top_margin' );
		$tablet_product_image_right_margin 					= get_theme_mod( 'ocean_product_image_tablet_right_margin' );
		$tablet_product_image_bottom_margin 				= get_theme_mod( 'ocean_product_image_tablet_bottom_margin' );
		$tablet_product_image_left_margin 					= get_theme_mod( 'ocean_product_image_tablet_left_margin' );
		$mobile_product_image_top_margin 					= get_theme_mod( 'ocean_product_image_mobile_top_margin' );
		$mobile_product_image_right_margin 					= get_theme_mod( 'ocean_product_image_mobile_right_margin' );
		$mobile_product_image_bottom_margin 				= get_theme_mod( 'ocean_product_image_mobile_bottom_margin' );
		$mobile_product_image_left_margin 					= get_theme_mod( 'ocean_product_image_mobile_left_margin' );
		$product_top_border_width 							= get_theme_mod( 'ocean_product_top_border_width' );
		$product_right_border_width 						= get_theme_mod( 'ocean_product_right_border_width' );
		$product_bottom_border_width 						= get_theme_mod( 'ocean_product_bottom_border_width' );
		$product_left_border_width 							= get_theme_mod( 'ocean_product_left_border_width' );
		$tablet_product_top_border_width 					= get_theme_mod( 'ocean_product_tablet_top_border_width' );
		$tablet_product_right_border_width 					= get_theme_mod( 'ocean_product_tablet_right_border_width' );
		$tablet_product_bottom_border_width 				= get_theme_mod( 'ocean_product_tablet_bottom_border_width' );
		$tablet_product_left_border_width 					= get_theme_mod( 'ocean_product_tablet_left_border_width' );
		$mobile_product_top_border_width 					= get_theme_mod( 'ocean_product_mobile_top_border_width' );
		$mobile_product_right_border_width 					= get_theme_mod( 'ocean_product_mobile_right_border_width' );
		$mobile_product_bottom_border_width 				= get_theme_mod( 'ocean_product_mobile_bottom_border_width' );
		$mobile_product_left_border_width 					= get_theme_mod( 'ocean_product_mobile_left_border_width' );
		$product_top_border_radius 							= get_theme_mod( 'ocean_product_top_border_radius' );
		$product_right_border_radius 						= get_theme_mod( 'ocean_product_right_border_radius' );
		$product_bottom_border_radius 						= get_theme_mod( 'ocean_product_bottom_border_radius' );
		$product_left_border_radius 						= get_theme_mod( 'ocean_product_left_border_radius' );
		$tablet_product_top_border_radius 					= get_theme_mod( 'ocean_product_tablet_top_border_radius' );
		$tablet_product_right_border_radius 				= get_theme_mod( 'ocean_product_tablet_right_border_radius' );
		$tablet_product_bottom_border_radius 				= get_theme_mod( 'ocean_product_tablet_bottom_border_radius' );
		$tablet_product_left_border_radius 					= get_theme_mod( 'ocean_product_tablet_left_border_radius' );
		$mobile_product_top_border_radius 					= get_theme_mod( 'ocean_product_mobile_top_border_radius' );
		$mobile_product_right_border_radius 				= get_theme_mod( 'ocean_product_mobile_right_border_radius' );
		$mobile_product_bottom_border_radius 				= get_theme_mod( 'ocean_product_mobile_bottom_border_radius' );
		$mobile_product_left_border_radius 					= get_theme_mod( 'ocean_product_mobile_left_border_radius' );
		$product_background_color 							= get_theme_mod( 'ocean_product_background_color' );
		$product_border_color 								= get_theme_mod( 'ocean_product_border_color' );
		$category_color 									= get_theme_mod( 'ocean_category_color', '#999999' );
		$category_color_hover 								= get_theme_mod( 'ocean_category_color_hover', '#13aff0' );
		$product_title_color 								= get_theme_mod( 'ocean_product_title_color', '#333333' );
		$product_title_color_hover 							= get_theme_mod( 'ocean_product_title_color_hover', '#13aff0' );
		$product_entry_price_color 							= get_theme_mod( 'ocean_product_entry_price_color', '#57bf6d' );
		$product_entry_del_price_color 						= get_theme_mod( 'ocean_product_entry_del_price_color', '#666666' );
		$product_entry_cond_note_color                      = get_theme_mod( 'ocean_product_entry_cond_note_color', '#333' );
		$product_entry_cond_note_color_hover                = get_theme_mod( 'ocean_product_entry_cond_note_color_hover', '#52a7fe' );
		$product_entry_hover_thumbnails_border_color 		= get_theme_mod( 'ocean_product_entry_hover_thumbnails_border_color', '#13aff0' );
		$product_entry_hover_quickview_background 			= get_theme_mod( 'ocean_product_entry_hover_quickview_background', '#ffffff' );
		$product_entry_hover_quickview_hover_background 	= get_theme_mod( 'ocean_product_entry_hover_quickview_hover_background', '#ffffff' );
		$product_entry_hover_quickview_color 				= get_theme_mod( 'ocean_product_entry_hover_quickview_color', '#444444' );
		$product_entry_hover_quickview_hover_color 			= get_theme_mod( 'ocean_product_entry_hover_quickview_hover_color', '#13aff0' );
		$product_entry_hover_wishlist_background 			= get_theme_mod( 'ocean_product_entry_hover_wishlist_background', '#ffffff' );
		$product_entry_hover_wishlist_hover_background 		= get_theme_mod( 'ocean_product_entry_hover_wishlist_hover_background', '#ffffff' );
		$product_entry_hover_wishlist_color 				= get_theme_mod( 'ocean_product_entry_hover_wishlist_color', '#444444' );
		$product_entry_hover_wishlist_hover_color 			= get_theme_mod( 'ocean_product_entry_hover_wishlist_hover_color', '#13aff0' );
		$product_entry_addtocart_bg_color 					= get_theme_mod( 'ocean_product_entry_addtocart_bg_color' );
		$product_entry_addtocart_bg_color_hover 			= get_theme_mod( 'ocean_product_entry_addtocart_bg_color_hover' );
		$product_entry_addtocart_color 						= get_theme_mod( 'ocean_product_entry_addtocart_color', '#848494' );
		$product_entry_addtocart_color_hover 				= get_theme_mod( 'ocean_product_entry_addtocart_color_hover', '#13aff0' );
		$product_entry_addtocart_border_color 				= get_theme_mod( 'ocean_product_entry_addtocart_border_color', '#e4e4e4' );
		$product_entry_addtocart_border_color_hover 		= get_theme_mod( 'ocean_product_entry_addtocart_border_color_hover', '#13aff0' );
		$product_entry_addtocart_border_style 				= get_theme_mod( 'ocean_product_entry_addtocart_border_style', 'double' );
		$product_entry_addtocart_border_size 				= get_theme_mod( 'ocean_product_entry_addtocart_border_size' );
		$product_entry_addtocart_border_size_unit 			= get_theme_mod( 'ocean_product_entry_addtocart_border_size_unit', 'px' );
		$product_entry_addtocart_border_radius 				= get_theme_mod( 'ocean_product_entry_addtocart_border_radius' );
		$product_entry_addtocart_border_radius_unit 		= get_theme_mod( 'ocean_product_entry_addtocart_border_radius_unit', 'px' );
		$quick_view_button_bg 								= get_theme_mod( 'ocean_woo_quick_view_button_bg', 'rgba(0,0,0,0.6)' );
		$quick_view_button_hover_bg 						= get_theme_mod( 'ocean_woo_quick_view_button_hover_bg', 'rgba(0,0,0,0.9)' );
		$quick_view_button_color 							= get_theme_mod( 'ocean_woo_quick_view_button_color', '#ffffff' );
		$quick_view_button_hover_color 						= get_theme_mod( 'ocean_woo_quick_view_button_hover_color', '#ffffff' );
		$quick_view_overlay_bg 								= get_theme_mod( 'ocean_woo_quick_view_overlay_bg', 'rgba(0,0,0,0.15)' );
		$quick_view_overlay_spinner_outside_color 			= get_theme_mod( 'ocean_woo_quick_view_overlay_spinner_outside_color', 'rgba(0,0,0,0.1)' );
		$quick_view_overlay_spinner_inner_color 			= get_theme_mod( 'ocean_woo_quick_view_overlay_spinner_inner_color', '#ffffff' );
		$quick_view_modal_bg 								= get_theme_mod( 'ocean_woo_quick_view_modal_bg', '#ffffff' );
		$quick_view_modal_close_color 						= get_theme_mod( 'ocean_woo_quick_view_modal_close_color', '#333333' );
		$off_canvas_sidebar_bg 								= get_theme_mod( 'ocean_woo_off_canvas_sidebar_bg', '#ffffff' );
		$off_canvas_sidebar_widgets_border 					= get_theme_mod( 'ocean_woo_off_canvas_sidebar_widgets_border', 'rgba(84,84,84,0.15)' );
		$single_product_title_color 						= get_theme_mod( 'ocean_single_product_title_color', '#333333' );
		$single_product_price_color 						= get_theme_mod( 'ocean_single_product_price_color', '#57bf6d' );
		$single_product_del_price_color 					= get_theme_mod( 'ocean_single_product_del_price_color', '#555555' );
		$single_product_description_color 					= get_theme_mod( 'ocean_single_product_description_color', '#aaaaaa' );
		$single_product_meta_title_color 					= get_theme_mod( 'ocean_single_product_meta_title_color', '#333333' );
		$single_product_meta_link_color 					= get_theme_mod( 'ocean_single_product_meta_link_color', '#aaaaaa' );
		$single_product_meta_link_color_hover 				= get_theme_mod( 'ocean_single_product_meta_link_color_hover', '#13aff0' );
		$single_product_cond_notice_color                   = get_theme_mod( 'ocean_single_cond_note_color', '#333333' );
		$single_product_cond_notice_color_hover             = get_theme_mod( 'ocean_single_cond_note_color_hover', '#52a7fe' );
		$single_product_navigation_border_radius 			= get_theme_mod( 'ocean_single_product_navigation_border_radius', '30' );
		$single_product_navigation_bg 						= get_theme_mod( 'ocean_single_product_navigation_bg' );
		$single_product_navigation_hover_bg 				= get_theme_mod( 'ocean_single_product_navigation_hover_bg', '#13aff0' );
		$single_product_navigation_color 					= get_theme_mod( 'ocean_single_product_navigation_color', '#333333' );
		$single_product_navigation_hover_color 				= get_theme_mod( 'ocean_single_product_navigation_hover_color', '#ffffff' );
		$single_product_navigation_border_color 			= get_theme_mod( 'ocean_single_product_navigation_border_color', '#e9e9e9' );
		$single_product_navigation_hover_border_color 		= get_theme_mod( 'ocean_single_product_navigation_hover_border_color', '#13aff0' );
		$single_product_addtocart_bg_color 					= get_theme_mod( 'ocean_single_product_addtocart_bg_color' );
		$single_product_addtocart_bg_color_hover 			= get_theme_mod( 'ocean_single_product_addtocart_bg_color_hover' );
		$single_product_addtocart_color 					= get_theme_mod( 'ocean_single_product_addtocart_color' );
		$single_product_addtocart_color_hover 				= get_theme_mod( 'ocean_single_product_addtocart_color_hover' );
		$single_product_addtocart_border_color 				= get_theme_mod( 'ocean_single_product_addtocart_border_color' );
		$single_product_addtocart_border_color_hover 		= get_theme_mod( 'ocean_single_product_addtocart_border_color_hover' );
		$single_product_addtocart_border_style 				= get_theme_mod( 'ocean_single_product_addtocart_border_style' );
		$single_product_addtocart_border_size 				= get_theme_mod( 'ocean_single_product_addtocart_border_size' );
		$single_product_addtocart_border_size_unit 			= get_theme_mod( 'ocean_single_product_addtocart_border_size_unit', 'px' );
		$single_product_addtocart_border_radius 			= get_theme_mod( 'ocean_single_product_addtocart_border_radius' );
		$single_product_addtocart_border_radius_unit 	    = get_theme_mod( 'ocean_single_product_addtocart_border_radius_unit', 'px' );
		$single_product_tabs_borders_color 					= get_theme_mod( 'ocean_single_product_tabs_borders_color', '#e9e9e9' );
		$single_product_tabs_text_color 					= get_theme_mod( 'ocean_single_product_tabs_text_color', '#999999' );
		$single_product_tabs_text_color_hover 				= get_theme_mod( 'ocean_single_product_tabs_text_color_hover', '#13aff0' );
		$single_product_tabs_active_text_color 				= get_theme_mod( 'ocean_single_product_tabs_active_text_color', '#13aff0' );
		$single_product_tabs_active_text_borders_color 		= get_theme_mod( 'ocean_single_product_tabs_active_text_borders_color', '#13aff0' );
		$single_product_tabs_product_desc_title_color 		= get_theme_mod( 'ocean_single_product_tabs_product_description_title_color', '#333333' );
		$single_product_tabs_product_desc_color 			= get_theme_mod( 'ocean_single_product_tabs_product_description_color', '#929292' );
		$account_login_register_color 						= get_theme_mod( 'ocean_account_login_register_color', '#333333' );
		$account_nav_borders_color 							= get_theme_mod( 'ocean_account_navigation_borders_color', '#e9e9e9' );
		$account_nav_icons_color 							= get_theme_mod( 'ocean_account_navigation_icons_color', '#13aff0' );
		$account_nav_links_color 							= get_theme_mod( 'ocean_account_navigation_links_color', '#333333' );
		$account_nav_links_color_hover 						= get_theme_mod( 'ocean_account_navigation_links_color_hover', '#13aff0' );
		$account_addresses_bg 								= get_theme_mod( 'ocean_account_addresses_bg', '#f6f6f6' );
		$account_addresses_title_color 						= get_theme_mod( 'ocean_account_addresses_title_color', '#333333' );
		$account_addresses_title_border_color 				= get_theme_mod( 'ocean_account_addresses_title_border_color', '#ffffff' );
		$account_addresses_content_color 					= get_theme_mod( 'ocean_account_addresses_content_color', '#898989' );
		$account_addresses_button_bg 						= get_theme_mod( 'ocean_account_addresses_button_bg', '#ffffff' );
		$account_addresses_button_bg_hover 					= get_theme_mod( 'ocean_account_addresses_button_bg_hover', '#f8f8f8' );
		$account_addresses_button_color 					= get_theme_mod( 'ocean_account_addresses_button_color', '#898989' );
		$account_addresses_button_color_hover 				= get_theme_mod( 'ocean_account_addresses_button_color_hover', '#555555' );
		$cart_borders_color 								= get_theme_mod( 'ocean_cart_borders_color', '#e9e9e9' );
		$cart_head_bg 										= get_theme_mod( 'ocean_cart_head_bg', '#f7f7f7' );
		$cart_head_titles_color 							= get_theme_mod( 'ocean_cart_head_titles_color', '#444444' );
		$cart_totals_table_titles_color 					= get_theme_mod( 'ocean_cart_totals_table_titles_color', '#444444' );
		$cart_remove_button_color 							= get_theme_mod( 'ocean_cart_remove_button_color', '#bbbbbb' );
		$cart_remove_button_color_hover 					= get_theme_mod( 'ocean_cart_remove_button_color_hover', '#333333' );
		$checkout_notices_borders_color 					= get_theme_mod( 'ocean_checkout_notices_borders_color', '#e9e9e9' );
		$checkout_notices_icon_color 						= get_theme_mod( 'ocean_checkout_notices_icon_color', '#dddddd' );
		$checkout_notices_color 							= get_theme_mod( 'ocean_checkout_notices_color', '#777777' );
		$checkout_notices_link_color 						= get_theme_mod( 'ocean_checkout_notices_link_color', '#13aff0' );
		$checkout_notices_link_color_hover 					= get_theme_mod( 'ocean_checkout_notices_link_color_hover', '#333333' );
		$checkout_notices_form_border_color 				= get_theme_mod( 'ocean_checkout_notices_form_border_color', '#e9e9e9' );
		$checkout_titles_color 								= get_theme_mod( 'ocean_checkout_titles_color', '#333333' );
		$checkout_titles_border_bottom_color 				= get_theme_mod( 'ocean_checkout_titles_border_bottom_color', '#e9e9e9' );
		$checkout_table_main_bg 							= get_theme_mod( 'ocean_checkout_table_main_bg', '#f7f7f7' );
		$checkout_table_titles_color 						= get_theme_mod( 'ocean_checkout_table_titles_color', '#444444' );
		$checkout_table_borders_color 						= get_theme_mod( 'ocean_checkout_table_borders_color', '#e9e9e9' );
		$checkout_payment_methods_bg 						= get_theme_mod( 'ocean_checkout_payment_methods_bg', '#f8f8f8' );
		$checkout_payment_methods_borders_color 			= get_theme_mod( 'ocean_checkout_payment_methods_borders_color', '#e9e9e9' );
		$checkout_payment_box_bg 							= get_theme_mod( 'ocean_checkout_payment_box_bg', '#ffffff' );
		$checkout_payment_box_color 						= get_theme_mod( 'ocean_checkout_payment_box_color', '#515151' );

		// Both sidebars shop page layout
		$archives_layout 									= get_theme_mod( 'ocean_woo_shop_layout', 'left-sidebar' );
		$bs_archives_content_width 							= get_theme_mod( 'ocean_woo_shop_both_sidebars_content_width' );
		$bs_archives_content_width_unit 				    = get_theme_mod( 'ocean_woo_shop_both_sidebars_content_width_unit', '%' );
		$bs_archives_sidebars_width 						= get_theme_mod( 'ocean_woo_shop_both_sidebars_sidebars_width' );
		$bs_archives_sidebars_width_unit 					= get_theme_mod( 'ocean_woo_shop_both_sidebars_sidebars_width_unit', '%' );

		// Both sidebars single product layout
		$single_layout 										= get_theme_mod( 'ocean_woo_product_layout', 'left-sidebar' );
		$bs_single_content_width 							= get_theme_mod( 'ocean_woo_product_both_sidebars_content_width');
		$bs_single_content_width_unit 						= get_theme_mod( 'ocean_woo_product_both_sidebars_content_width_unit', '%' );
		$bs_single_sidebars_width 							= get_theme_mod( 'ocean_woo_product_both_sidebars_sidebars_width' );
		$bs_single_sidebars_width_unit 						= get_theme_mod( 'ocean_woo_product_both_sidebars_sidebars_width_unit', "%" );

		$store_notice_bg_color                              = get_theme_mod( 'ocean_woo_store_notice_bg_color', '#3d9cd2' );
		$store_notice_bg_dismiss_color                      = get_theme_mod( 'ocean_woo_store_notice_dismiss_bg_color', '#0000001a' );
		$store_notice_dismiss_text_hover_color              = get_theme_mod( 'ocean_woo_store_notice_dismiss_text_hover_color', '#f4dc00' );

		// Define css var
		$css = '';

		// Store notice style.
		if ( ! empty( $store_notice_bg_color ) && '#3d9cd2' != $store_notice_bg_color ) {
			$css .= '.woocommerce-store-notice.demo_store{background-color:'. $store_notice_bg_color .';}';
		}
		if ( ! empty( $store_notice_bg_dismiss_color ) && '#0000001a' != $store_notice_bg_dismiss_color ) {
			$css .= '.demo_store .woocommerce-store-notice__dismiss-link{background-color:'. $store_notice_bg_dismiss_color .';}';
		}
		if ( ! empty( $store_notice_dismiss_text_hover_color ) && '#f4dc00' != $store_notice_dismiss_text_hover_color ) {
			$css .= '.demo_store .woocommerce-store-notice__dismiss-link:hover{color:'. $store_notice_dismiss_text_hover_color .';}';
		}

		// Menu cart icon size
		if ( ! empty( $menu_icon_size ) ) {
			$css .= '.wcmenucart i{font-size:'. $menu_icon_size .'px;}';
			$css .= '.wcmenucart .owp-icon{width:'. $menu_icon_size .'px; height:'. $menu_icon_size .'px;}';
		}

		// Menu cart icon size tablet
		if ( ! empty( $menu_icon_size_tablet ) ) {
			$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.wcmenucart{font-size:'. $menu_icon_size_tablet .'px;}}';
			$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.wcmenucart .owp-icon{width:'. $menu_icon_size_tablet .'px; height:'. $menu_icon_size_tablet .'px;}}';
		}

		// Menu cart icon size mobile
		if ( ! empty( $menu_icon_size_mobile ) ) {
			$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.wcmenucart{font-size:'. $menu_icon_size_mobile .'px;}}';
			$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.wcmenucart .owp-icon{width:'. $menu_icon_size_mobile .'px; height:'. $menu_icon_size_mobile .'px;}}';
		}

		// Menu cart icon center vertically
		if ( ! empty( $menu_icon_center_vertically ) ) {
			$css .= '.wcmenucart i{top:'. $menu_icon_center_vertically .'px;}';
		}

		// Menu cart icon center vertically tablet
		if ( ! empty( $menu_icon_center_vertically_tablet ) ) {
			$css .= '@media (max-width: 768px){.oceanwp-mobile-menu-icon a.wcmenucart{top:'. $menu_icon_center_vertically_tablet .'px;}}';
		}

		// Menu cart icon center vertically mobile
		if ( ! empty( $menu_icon_center_vertically_mobile ) ) {
			$css .= '@media (max-width: 480px){.oceanwp-mobile-menu-icon a.wcmenucart{top:'. $menu_icon_center_vertically_mobile .'px;}}';
		}

		// Cart dropdown width
		if ( ! empty( $cart_dropdown_width ) && '350' != $cart_dropdown_width ) {
			$css .= '.current-shop-items-dropdown{width:'. $cart_dropdown_width .'px;}';
		}

		// Bag icon style color
		if ( ! empty( $woo_menu_bag_icon_color ) && '#333333' != $woo_menu_bag_icon_color ) {
			$css .= '.wcmenucart-cart-icon .wcmenucart-count{border-color:'. $woo_menu_bag_icon_color .';}';
			$css .= '.wcmenucart-cart-icon .wcmenucart-count:after{border-color:'. $woo_menu_bag_icon_color .';}';
		}

		// Bag icon style hover color
		if ( ! empty( $woo_menu_bag_icon_hover_color ) && '#13aff0' != $woo_menu_bag_icon_hover_color ) {
			$css .= '.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count, .show-cart .wcmenucart-cart-icon .wcmenucart-count{background-color:'. $woo_menu_bag_icon_hover_color .'; border-color:'. $woo_menu_bag_icon_hover_color .';}';
			$css .= '.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count:after, .show-cart .wcmenucart-cart-icon .wcmenucart-count:after{border-color:'. $woo_menu_bag_icon_hover_color .';}';
		}

		// Bag icon style count color
		if ( ! empty( $woo_menu_bag_icon_count_color ) && '#333333' != $woo_menu_bag_icon_count_color ) {
			$css .= '.wcmenucart-cart-icon .wcmenucart-count, .woo-menu-icon .wcmenucart-total span{color:'. $woo_menu_bag_icon_count_color .';}';
		}

		// Bag icon style hover count color
		if ( ! empty( $woo_menu_bag_icon_hover_count_color ) && '#ffffff' != $woo_menu_bag_icon_hover_count_color ) {
			$css .= '.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count, .show-cart .wcmenucart-cart-icon .wcmenucart-count{color:'. $woo_menu_bag_icon_hover_count_color .';}';
		}

		// Cart dropdown background
		if ( ! empty( $cart_dropdown_bg ) && '#ffffff' != $cart_dropdown_bg ) {
			$css .= '.current-shop-items-dropdown{background-color:'. $cart_dropdown_bg .';}';
		}

		// Cart dropdown borders
		if ( ! empty( $cart_dropdown_borders ) && '#e6e6e6' != $cart_dropdown_borders ) {
			$css .= '.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid.thumbnail, .widget_shopping_cart ul.cart_list li, .woocommerce ul.product_list_widget li:first-child, .widget_shopping_cart .total{border-color:'. $cart_dropdown_borders .';}';
		}

		// Cart dropdown link color
		if ( ! empty( $cart_dropdown_link_color ) && '#333333' != $cart_dropdown_link_color ) {
			$css .= '.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a{color:'. $cart_dropdown_link_color .';}';
		}

		// Cart dropdown link hover color
		if ( ! empty( $cart_dropdown_link_color_hover ) && '#13aff0' != $cart_dropdown_link_color_hover ) {
			$css .= '.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a:hover{color:'. $cart_dropdown_link_color_hover .';}';
		}

		// Cart dropdown remove link color
		if ( ! empty( $cart_dropdown_remove_link_color ) && '#b3b3b3' != $cart_dropdown_remove_link_color ) {
			$css .= '.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove{color:'. $cart_dropdown_remove_link_color .';border-color:'. $cart_dropdown_remove_link_color .';}';
		}

		// Cart dropdown remove link hover color
		if ( ! empty( $cart_dropdown_remove_link_color_hover ) && '#13aff0' != $cart_dropdown_remove_link_color_hover ) {
			$css .= '.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover{color:'. $cart_dropdown_remove_link_color_hover .';border-color:'. $cart_dropdown_remove_link_color_hover .';}';
		}

		// Cart dropdown quantity color
		if ( ! empty( $cart_dropdown_quantity_color ) && '#b2b2b2' != $cart_dropdown_quantity_color ) {
			$css .= '.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid .quantity{color:'. $cart_dropdown_quantity_color .';}';
		}

		// Cart dropdown price color
		if ( ! empty( $cart_dropdown_price_color ) && '#57bf6d' != $cart_dropdown_price_color ) {
			$css .= '.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid .amount{color:'. $cart_dropdown_price_color .';}';
		}

		// Cart dropdown subtotal background
		if ( ! empty( $cart_dropdown_subtotal_bg ) && '#fafafa' != $cart_dropdown_subtotal_bg ) {
			$css .= '.widget_shopping_cart .total{background-color:'. $cart_dropdown_subtotal_bg .';}';
		}

		// Cart dropdown subtotal color
		if ( ! empty( $cart_dropdown_subtotal_color ) && '#797979' != $cart_dropdown_subtotal_color ) {
			$css .= '.widget_shopping_cart .total strong{color:'. $cart_dropdown_subtotal_color .';}';
		}

		// Cart dropdown total price color
		if ( ! empty( $cart_dropdown_total_price_color ) && '#57bf6d' != $cart_dropdown_total_price_color ) {
			$css .= '.widget_shopping_cart .total .amount{color:'. $cart_dropdown_total_price_color .';}';
		}

		// Cart dropdown cart button background color
		if ( ! empty( $cart_dropdown_cart_button_bg ) ) {
			$css .= '.widget_shopping_cart_content .buttons .button:first-child{background-color:'. $cart_dropdown_cart_button_bg .';}';
		}

		// Cart dropdown cart button hover background color
		if ( ! empty( $cart_dropdown_cart_button_hover_bg ) ) {
			$css .= '.widget_shopping_cart_content .buttons .button:first-child:hover{background-color:'. $cart_dropdown_cart_button_hover_bg .';}';
		}

		// Cart dropdown cart button color
		if ( ! empty( $cart_dropdown_cart_button_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .button:first-child{color:'. $cart_dropdown_cart_button_color .';}';
		}

		// Cart dropdown cart button hover color
		if ( ! empty( $cart_dropdown_cart_button_hover_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .button:first-child:hover{color:'. $cart_dropdown_cart_button_hover_color .';}';
		}

		// Cart dropdown cart button border color
		if ( ! empty( $cart_dropdown_cart_button_border_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .button:first-child{border-color:'. $cart_dropdown_cart_button_border_color .';}';
		}

		// Cart dropdown cart button hover border color
		if ( ! empty( $cart_dropdown_cart_button_hover_border_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .button:first-child:hover{border-color:'. $cart_dropdown_cart_button_hover_border_color .';}';
		}

		// Cart dropdown checkout button background color
		if ( ! empty( $cart_dropdown_checkout_button_bg ) ) {
			$css .= '.widget_shopping_cart_content .buttons .checkout{background-color:'. $cart_dropdown_checkout_button_bg .';}';
		}

		// Cart dropdown checkout button hover background color
		if ( ! empty( $cart_dropdown_checkout_button_hover_bg ) ) {
			$css .= '.widget_shopping_cart_content .buttons .checkout:hover{background-color:'. $cart_dropdown_checkout_button_hover_bg .';}';
		}

		// Cart dropdown checkout button color
		if ( ! empty( $cart_dropdown_checkout_button_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .checkout{color:'. $cart_dropdown_checkout_button_color .';}';
		}

		// Cart dropdown checkout button hover color
		if ( ! empty( $cart_dropdown_checkout_button_hover_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .checkout:hover{color:'. $cart_dropdown_checkout_button_hover_color .';}';
		}

		// Cart dropdown checkout button border color
		if ( ! empty( $cart_dropdown_checkout_button_border_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .checkout{border: solid 1px '. $cart_dropdown_checkout_button_border_color .';}';
		}

		// Cart dropdown checkout button border hover color
		if ( ! empty( $cart_dropdown_checkout_button_border_hover_color ) ) {
			$css .= '.widget_shopping_cart_content .buttons .checkout:hover{border: solid 1px '. $cart_dropdown_checkout_button_border_hover_color .';}';
		}

		// Mobile cart sidebar background color
		if ( ! empty( $woo_mobile_cart_sidebar_bg ) && '#ffffff' != $woo_mobile_cart_sidebar_bg ) {
			$css .= '#oceanwp-cart-sidebar-wrap .oceanwp-cart-sidebar{background-color:'. $woo_mobile_cart_sidebar_bg .';}';
		}

		// Mobile cart sidebar background color
		if ( ! empty( $woo_mobile_cart_sidebar_close_button_color ) && '#000000' != $woo_mobile_cart_sidebar_close_button_color ) {
			$css .= '#oceanwp-cart-sidebar-wrap .oceanwp-cart-sidebar .oceanwp-cart-close, #oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div, #oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div:before{background-color:'. $woo_mobile_cart_sidebar_close_button_color .';}';
		}

		if ( ! empty( $woo_mobile_cart_sidebar_close_button_color_icon ) && '#333' != $woo_mobile_cart_sidebar_close_button_color_icon ) {
			$css .= '#oceanwp-cart-sidebar-wrap .oceanwp-cart-sidebar .oceanwp-cart-close, #oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div, #oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div:before{color:'. $woo_mobile_cart_sidebar_close_button_color_icon .';}';
		}

		// Mobile cart sidebar background color
		if ( ! empty( $woo_mobile_cart_sidebar_title_color ) && '#555555' != $woo_mobile_cart_sidebar_title_color ) {
			$css .= '#oceanwp-cart-sidebar-wrap h4{color:'. $woo_mobile_cart_sidebar_title_color .';}';
		}

		// Mobile cart sidebar background color
		if ( ! empty( $woo_mobile_cart_sidebar_divider_color ) && 'rgba(0,0,0,0.1)' != $woo_mobile_cart_sidebar_divider_color ) {
			$css .= '#oceanwp-cart-sidebar-wrap .divider{background-color:'. $woo_mobile_cart_sidebar_divider_color .';}';
		}

		// Off canvas close button color
		if ( ! empty( $off_canvas_close_button_color ) && '#333333' != $off_canvas_close_button_color ) {
			$css .= '.oceanwp-off-canvas-close svg{fill:'. $off_canvas_close_button_color .';}';
		}

		// Off canvas close button hover color
		if ( ! empty( $off_canvas_close_button_hover_color ) && '#777777' != $off_canvas_close_button_hover_color ) {
			$css .= '.oceanwp-off-canvas-close:hover svg{fill:'. $off_canvas_close_button_hover_color .';}';
		}

		// Infinite scroll spinners color
		if ( ! empty( $infinite_scroll_spinners_color ) && '#333333' != $infinite_scroll_spinners_color ) {
			$css .= '.woocommerce .loader-ellips__dot{background-color:'. $infinite_scroll_spinners_color .';}';
		}

		// Blog load more pagination color.
		if ( ! empty( $load_more_btn_color ) && '' != $load_more_btn_color ) {
			$css .= '.load-more-pagination.load-more-product .button{background-color:' . $load_more_btn_color . ';}';
		}
		if ( ! empty( $load_more_btn_color_hover ) && '' != $load_more_btn_color_hover ) {
			$css .= '.load-more-pagination.load-more-product .button:hover{background-color:' . $load_more_btn_color_hover . ';}';
		}
		if ( ! empty( $load_more_btn_text_color ) && '' != $load_more_btn_text_color ) {
			$css .= '.load-more-pagination.load-more-product .button{color:' . $load_more_btn_text_color . ';}';
		}
		if ( ! empty( $load_more_btn_text_color_hover ) && '' != $load_more_btn_text_color_hover ) {
			$css .= '.load-more-pagination.load-more-product .button:hover{color:' . $load_more_btn_text_color_hover . ';}';
		}

		// Product image width
		if ( ! empty( $woo_product_image_width ) && '52' != $woo_product_image_width ) {
			$css .= '.woocommerce div.product div.images, .woocommerce.content-full-width div.product div.images{width:'. $woo_product_image_width .'%;}';
		}

		// Product summary width
		if ( ! empty( $woo_product_summary_width ) && '44' != $woo_product_summary_width ) {
			$css .= '.woocommerce div.product div.summary, .woocommerce.content-full-width div.product div.summary{width:'. $woo_product_summary_width .'%;}';
		}

		// Add floating bar background
		if ( ! empty( $floating_bar_bg ) && '#2c2c2c' != $floating_bar_bg ) {
			$css .= '.owp-floating-bar{background-color:'. $floating_bar_bg .';}';
		}

		// Add floating bar title color
		if ( ! empty( $floating_bar_title_color ) && '#ffffff' != $floating_bar_title_color ) {
			$css .= '.owp-floating-bar p.selected, .owp-floating-bar h2.entry-title{color:'. $floating_bar_title_color .';}';
		}

		// Add floating bar price color
		if ( ! empty( $floating_bar_price_color ) && '#ffffff' != $floating_bar_price_color ) {
			$css .= '.owp-floating-bar .product_price del .amount, .owp-floating-bar .product_price .amount, .owp-floating-bar .out-of-stock{color:'. $floating_bar_price_color .';}';
		}

		// Add floating bar quantity buttons background
		if ( ! empty( $floating_bar_quantity_buttons_bg ) && 'rgba(255,255,255,0.1)' != $floating_bar_quantity_buttons_bg ) {
			$css .= '.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus{background-color:'. $floating_bar_quantity_buttons_bg .';}';
		}

		// Add floating bar quantity buttons hover background
		if ( ! empty( $floating_bar_quantity_buttons_hover_bg ) && 'rgba(255,255,255,0.2)' != $floating_bar_quantity_buttons_hover_bg ) {
			$css .= '.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover{background-color:'. $floating_bar_quantity_buttons_hover_bg .';}';
		}

		// Add floating bar quantity buttons color
		if ( ! empty( $floating_bar_quantity_buttons_color ) && '#ffffff' != $floating_bar_quantity_buttons_color ) {
			$css .= '.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus{color:'. $floating_bar_quantity_buttons_color .';}';
		}

		// Add floating bar quantity buttons hover color
		if ( ! empty( $floating_bar_quantity_buttons_hover_color ) && '' != $floating_bar_quantity_buttons_hover_color ) {
			$css .= '.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover{color:'. $floating_bar_quantity_buttons_hover_color .';}';
		}

		// Add floating bar quantity input background
		if ( ! empty( $floating_bar_quantity_input_bg ) && 'rgba(255,255,255,0.2)' != $floating_bar_quantity_input_bg ) {
			$css .= '.owp-floating-bar form.cart .quantity .qty{background-color:'. $floating_bar_quantity_input_bg .';}';
		}

		// Add floating bar quantity input color
		if ( ! empty( $floating_bar_quantity_input_color ) && '#ffffff' != $floating_bar_quantity_input_color ) {
			$css .= '.owp-floating-bar form.cart .quantity .qty{color:'. $floating_bar_quantity_input_color .';}';
		}

		// Add add to cart background
		if ( ! empty( $floating_bar_addtocart_bg ) && '#ffffff' != $floating_bar_addtocart_bg ) {
			$css .= '.owp-floating-bar button.button{background-color:'. $floating_bar_addtocart_bg .';}';
		}

		// Add add to cart hover background
		if ( ! empty( $floating_bar_addtocart_hover_bg ) && '#f1f1f1' != $floating_bar_addtocart_hover_bg ) {
			$css .= '.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus{background-color:'. $floating_bar_addtocart_hover_bg .';}';
		}

		// Add add to cart color
		if ( ! empty( $floating_bar_addtocart_color ) && '#000000' != $floating_bar_addtocart_color ) {
			$css .= '.owp-floating-bar button.button{color:'. $floating_bar_addtocart_color .';}';
		}

		// Add add to cart hover color
		if ( ! empty( $floating_bar_addtocart_hover_color ) && '#000000' != $floating_bar_addtocart_hover_color ) {
			$css .= '.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus{color:'. $floating_bar_addtocart_hover_color .';}';
		}

		// Add checkout timeline bg
		if ( ! empty( $checkout_timeline_bg ) && '#eeeeee' != $checkout_timeline_bg ) {
			$css .= '#owp-checkout-timeline .timeline-wrapper{background-color:'. $checkout_timeline_bg .';}#owp-checkout-timeline.arrow .timeline-wrapper:before{border-top-color:'. $checkout_timeline_bg .'; border-bottom-color:'. $checkout_timeline_bg .';}#owp-checkout-timeline.arrow .timeline-wrapper:after{border-left-color:'. $checkout_timeline_bg .'; border-right-color:'. $checkout_timeline_bg .';}';
		}

		// Add checkout timeline color
		if ( ! empty( $checkout_timeline_color ) && '#333333' != $checkout_timeline_color ) {
			$css .= '#owp-checkout-timeline .timeline-wrapper{color:'. $checkout_timeline_color .';}';
		}

		// Add checkout timeline number background color
		if ( ! empty( $checkout_timeline_number_bg ) && '#ffffff' != $checkout_timeline_number_bg ) {
			$css .= '#owp-checkout-timeline .timeline-step{background-color:'. $checkout_timeline_number_bg .';}';
		}

		// Add checkout timeline number color
		if ( ! empty( $checkout_timeline_number_color ) && '#ffffff' != $checkout_timeline_number_color ) {
			$css .= '#owp-checkout-timeline .timeline-step{color:'. $checkout_timeline_number_color .';}';
		}

		// Add checkout timeline number border color
		if ( ! empty( $checkout_timeline_number_border_color ) && '#ffffff' != $checkout_timeline_number_border_color ) {
			$css .= '#owp-checkout-timeline .timeline-step{border-color:'. $checkout_timeline_number_border_color .';}';
		}

		// Add checkout timeline active background color
		if ( ! empty( $checkout_timeline_active_bg ) && '#13aff0' != $checkout_timeline_active_bg ) {
			$css .= '#owp-checkout-timeline .active .timeline-wrapper{background-color:'. $checkout_timeline_active_bg .';}#owp-checkout-timeline.arrow .active .timeline-wrapper:before{border-top-color:'. $checkout_timeline_active_bg .'; border-bottom-color:'. $checkout_timeline_active_bg .';}#owp-checkout-timeline.arrow .active .timeline-wrapper:after{border-left-color:'. $checkout_timeline_active_bg .'; border-right-color:'. $checkout_timeline_active_bg .';}';
		}

		// Add checkout timeline active color
		if ( ! empty( $checkout_timeline_active_color ) && '#ffffff' != $checkout_timeline_active_color ) {
			$css .= '#owp-checkout-timeline .active .timeline-wrapper{color:'. $checkout_timeline_active_color .';}';
		}

		// Add onsale bg
		if ( ! empty( $onsale_bg ) && '#3FC387' != $onsale_bg ) {
			$css .= '.woocommerce span.onsale{background-color:'. $onsale_bg .';}';
		}

		// Add onsale color
		if ( ! empty( $onsale_color ) && '#ffffff' != $onsale_color ) {
			$css .= '.woocommerce span.onsale{color:'. $onsale_color .';}';
		}

		$has_product_thumbnails = get_post_meta( get_the_ID(), '_product_image_gallery', true );
		if ( ! empty( 'vertical' === $product_thumbs_layout && $has_product_thumbnails ) ) {
			$css .= '.woocommerce .owp-thumbs-layout-vertical span.onsale{left: 15% !important;}';
		}

		// Add out of stock bg
		if ( ! empty( $outofstock_bg ) && '#000000' != $outofstock_bg ) {
			$css .= '.woocommerce ul.products li.product.outofstock .outofstock-badge{background-color:'. $outofstock_bg .';}';
		}

		// Add out of stock color
		if ( ! empty( $outofstock_color ) && '#ffffff' != $outofstock_color ) {
			$css .= '.woocommerce ul.products li.product.outofstock .outofstock-badge{color:'. $outofstock_color .';}';
		}

		// Add stars color before
		if ( ! empty( $stars_color_before ) && '#dfdbdf' != $stars_color_before ) {
			$css .= '.woocommerce .star-rating:before{color:'. $stars_color_before .';}';
		}

		// Add stars color
		if ( ! empty( $stars_color ) && '#f9ca63' != $stars_color ) {
			$css .= '.woocommerce .star-rating span, .woocommerce .star-rating span:before{color:'. $stars_color .';}';
		}

		// Add quantity border color
		if ( ! empty( $quantity_border_color ) && '#e4e4e4' != $quantity_border_color ) {
			$css .= '.quantity .qty,.quantity .qty-changer a, .quantity .plus, .quantity .minus{border-color:'. $quantity_border_color .';}';
		}

		// Add quantity border color focus
		if ( ! empty( $quantity_border_color_focus ) && '#bbbbbb' != $quantity_border_color_focus ) {
			$css .= 'body .quantity .qty:focus{border-color:'. $quantity_border_color_focus .';}';
		}

		// Add quantity color
		if ( ! empty( $quantity_color ) && '#777777' != $quantity_color ) {
			$css .= '.quantity .qty{color:'. $quantity_color .';}';
		}

		// Add quantity plus/minus color
		if ( ! empty( $quantity_plus_minus_color ) && '#cccccc' != $quantity_plus_minus_color ) {
			$css .= '.quantity .qty-changer a, .quantity .plus, .quantity .minus{color:'. $quantity_plus_minus_color .';}';
		}

		// Add quantity plus/minus color hover
		if ( ! empty( $quantity_plus_minus_color_hover ) && '#cccccc' != $quantity_plus_minus_color_hover ) {
			$css .= '.quantity .qty-changer a:hover, .quantity .plus:hover, .quantity .minus:hover{color:'. $quantity_plus_minus_color_hover .';}';
		}

		// Add quantity plus/minus border color hover
		if ( ! empty( $quantity_plus_minus_border_color_hover ) && '#e0e0e0' != $quantity_plus_minus_border_color_hover ) {
			$css .= '.quantity .qty-changer a:hover, .quantity .plus:hover, .quantity .minus:hover{border-color:'. $quantity_plus_minus_border_color_hover .';}';
		}

		// Add toolbar border color
		if ( ! empty( $toolbar_border_color ) && '#eaeaea' != $toolbar_border_color ) {
			$css .= '.woocommerce .oceanwp-toolbar{border-color:'. $toolbar_border_color .';}';
		}

		// Add toolbar off canvas filter color
		if ( ! empty( $toolbar_off_canvas_filter_color ) && '#999999' != $toolbar_off_canvas_filter_color ) {
			$css .= '.woocommerce .oceanwp-off-canvas-filter{color:'. $toolbar_off_canvas_filter_color .';}';
		}

		// Add toolbar off canvas filter border color
		if ( ! empty( $toolbar_off_canvas_filter_border_color ) && '#eaeaea' != $toolbar_off_canvas_filter_border_color ) {
			$css .= '.woocommerce .oceanwp-off-canvas-filter{border-color:'. $toolbar_off_canvas_filter_border_color .';}';
		}

		// Add toolbar off canvas filter hover color
		if ( ! empty( $toolbar_off_canvas_filter_hover_color ) && '#13aff0' != $toolbar_off_canvas_filter_hover_color ) {
			$css .= '.woocommerce .oceanwp-off-canvas-filter:hover{color:'. $toolbar_off_canvas_filter_hover_color .';}';
		}

		// Add toolbar off canvas filter hover border color
		if ( ! empty( $toolbar_off_canvas_filter_hover_border_color ) && '#13aff0' != $toolbar_off_canvas_filter_hover_border_color ) {
			$css .= '.woocommerce .oceanwp-off-canvas-filter:hover{border-color:'. $toolbar_off_canvas_filter_hover_border_color .';}';
		}

		// Add toolbar grid/list color
		if ( ! empty( $toolbar_grid_list_color ) && '#999999' != $toolbar_grid_list_color ) {
			$css .= '.woocommerce .oceanwp-grid-list a{color:'. $toolbar_grid_list_color .';}';
			$css .= '.woocommerce .oceanwp-grid-list a .owp-icon use{stroke:'. $toolbar_grid_list_color .';}';
		}

		// Add toolbar grid/list border color
		if ( ! empty( $toolbar_grid_list_border_color ) && '#eaeaea' != $toolbar_grid_list_border_color ) {
			$css .= '.woocommerce .oceanwp-grid-list a{border-color:'. $toolbar_grid_list_border_color .';}';
		}

		// Add toolbar grid/list hover color
		if ( ! empty( $toolbar_grid_list_hover_color ) && '#13aff0' != $toolbar_grid_list_hover_color ) {
			$css .= '.woocommerce .oceanwp-grid-list a:hover{color:'. $toolbar_grid_list_hover_color .';border-color:'. $toolbar_grid_list_hover_color .';}';
			$css .= '.woocommerce .oceanwp-grid-list a:hover .owp-icon use{stroke:'. $toolbar_grid_list_hover_color .';}';
		}

		// Add toolbar grid/list active color
		if ( ! empty( $toolbar_grid_list_active_color ) && '#13aff0' != $toolbar_grid_list_active_color ) {
			$css .= '.woocommerce .oceanwp-grid-list a.active{color:'. $toolbar_grid_list_active_color .';border-color:'. $toolbar_grid_list_active_color .';}';
			$css .= '.woocommerce .oceanwp-grid-list a.active .owp-icon use{stroke:'. $toolbar_grid_list_hover_color .';}';
		}

		// Add toolbar select color
		if ( ! empty( $toolbar_select_color ) && '#999999' != $toolbar_select_color ) {
			$css .= '.woocommerce .woocommerce-ordering .theme-select,.woocommerce .woocommerce-ordering .theme-select:after{color:'. $toolbar_select_color .';}';
		}

		// Add toolbar select border color
		if ( ! empty( $toolbar_select_border_color ) && '#dddddd' != $toolbar_select_border_color ) {
			$css .= '.woocommerce .woocommerce-ordering .theme-select,.woocommerce .woocommerce-ordering .theme-select:after{border-color:'. $toolbar_select_border_color .';}';
		}

		// Add toolbar number of products color
		if ( ! empty( $toolbar_number_of_products_color ) && '#555555' != $toolbar_number_of_products_color ) {
			$css .= '.woocommerce .result-count li.view-title,.woocommerce .result-count li a.active, .woocommerce .result-count li a:hover{color:'. $toolbar_number_of_products_color .';}';
		}

		// Add toolbar number of products inactive color
		if ( ! empty( $toolbar_number_of_products_inactive_color ) && '#999999' != $toolbar_number_of_products_inactive_color ) {
			$css .= '.woocommerce .result-count li a{color:'. $toolbar_number_of_products_inactive_color .';}';
		}

		// Add toolbar number of products border color
		if ( ! empty( $toolbar_number_of_products_border_color ) && '#999999' != $toolbar_number_of_products_border_color ) {
			$css .= '.woocommerce .result-count li:after{color:'. $toolbar_number_of_products_border_color .';}';
		}

		// Product padding
		if ( isset( $product_top_padding ) && '' != $product_top_padding
			|| isset( $product_right_padding ) && '' != $product_right_padding
			|| isset( $product_bottom_padding ) && '' != $product_bottom_padding
			|| isset( $product_left_padding ) && '' != $product_left_padding ) {
			$css .= '.woocommerce .products .product-inner{padding:'. oceanwp_spacing_css( $product_top_padding, $product_right_padding, $product_bottom_padding, $product_left_padding ) .'}';
		}

		// Tablet product padding
		if ( isset( $tablet_product_top_padding ) && '' != $tablet_product_top_padding
			|| isset( $tablet_product_right_padding ) && '' != $tablet_product_right_padding
			|| isset( $tablet_product_bottom_padding ) && '' != $tablet_product_bottom_padding
			|| isset( $tablet_product_left_padding ) && '' != $tablet_product_left_padding ) {
			$css .= '@media (max-width: 768px){.woocommerce .products .product-inner{padding:'. oceanwp_spacing_css( $tablet_product_top_padding, $tablet_product_right_padding, $tablet_product_bottom_padding, $tablet_product_left_padding ) .'}}';
		}

		// Mobile product padding
		if ( isset( $mobile_product_top_padding ) && '' != $mobile_product_top_padding
			|| isset( $mobile_product_right_padding ) && '' != $mobile_product_right_padding
			|| isset( $mobile_product_bottom_padding ) && '' != $mobile_product_bottom_padding
			|| isset( $mobile_product_left_padding ) && '' != $mobile_product_left_padding ) {
			$css .= '@media (max-width: 480px){.woocommerce .products .product-inner{padding:'. oceanwp_spacing_css( $mobile_product_top_padding, $mobile_product_right_padding, $mobile_product_bottom_padding, $mobile_product_left_padding ) .'}}';
		}

		// Product image margin
		if ( isset( $product_image_top_margin ) && '' != $product_image_top_margin
			|| isset( $product_image_right_margin ) && '' != $product_image_right_margin
			|| isset( $product_image_bottom_margin ) && '' != $product_image_bottom_margin
			|| isset( $product_image_left_margin ) && '' != $product_image_left_margin ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-inner li.image-wrap{margin:'. oceanwp_spacing_css( $product_image_top_margin, $product_image_right_margin, $product_image_bottom_margin, $product_image_left_margin ) .'}';
		}

		// Tablet product image margin
		if ( isset( $tablet_product_image_top_margin ) && '' != $tablet_product_image_top_margin
			|| isset( $tablet_product_image_right_margin ) && '' != $tablet_product_image_right_margin
			|| isset( $tablet_product_image_bottom_margin ) && '' != $tablet_product_image_bottom_margin
			|| isset( $tablet_product_image_left_margin ) && '' != $tablet_product_image_left_margin ) {
			$css .= '@media (max-width: 768px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap{margin:'. oceanwp_spacing_css( $tablet_product_image_top_margin, $tablet_product_image_right_margin, $tablet_product_image_bottom_margin, $tablet_product_image_left_margin ) .'}}';
		}

		// Mobile product image margin
		if ( isset( $mobile_product_image_top_margin ) && '' != $mobile_product_image_top_margin
			|| isset( $mobile_product_image_right_margin ) && '' != $mobile_product_image_right_margin
			|| isset( $mobile_product_image_bottom_margin ) && '' != $mobile_product_image_bottom_margin
			|| isset( $mobile_product_image_left_margin ) && '' != $mobile_product_image_left_margin ) {
			$css .= '@media (max-width: 480px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap{margin:'. oceanwp_spacing_css( $mobile_product_image_top_margin, $mobile_product_image_right_margin, $mobile_product_image_bottom_margin, $mobile_product_image_left_margin ) .'}}';
		}

		// Product border style if border width
		if ( isset( $product_top_border_width ) && '' != $product_top_border_width
			|| isset( $product_right_border_width ) && '' != $product_right_border_width
			|| isset( $product_bottom_border_width ) && '' != $product_bottom_border_width
			|| isset( $product_left_border_width ) && '' != $product_left_border_width
			|| isset( $tablet_product_top_border_width ) && '' != $tablet_product_top_border_width
			|| isset( $tablet_product_right_border_width ) && '' != $tablet_product_right_border_width
			|| isset( $tablet_product_bottom_border_width ) && '' != $tablet_product_bottom_border_width
			|| isset( $tablet_product_left_border_width ) && '' != $tablet_product_left_border_width
			|| isset( $mobile_product_top_border_width ) && '' != $mobile_product_top_border_width
			|| isset( $mobile_product_right_border_width ) && '' != $mobile_product_right_border_width
			|| isset( $mobile_product_bottom_border_width ) && '' != $mobile_product_bottom_border_width
			|| isset( $mobile_product_left_border_width ) && '' != $mobile_product_left_border_width ) {
			$css .= '.woocommerce .products .product-inner{border-style: solid}';
		}

		// Product border width
		if ( isset( $product_top_border_width ) && '' != $product_top_border_width
			|| isset( $product_right_border_width ) && '' != $product_right_border_width
			|| isset( $product_bottom_border_width ) && '' != $product_bottom_border_width
			|| isset( $product_left_border_width ) && '' != $product_left_border_width ) {
			$css .= '.woocommerce .products .product-inner{border-width:'. oceanwp_spacing_css( $product_top_border_width, $product_right_border_width, $product_bottom_border_width, $product_left_border_width ) .'}';
		}

		// Tablet product border width
		if ( isset( $tablet_product_top_border_width ) && '' != $tablet_product_top_border_width
			|| isset( $tablet_product_right_border_width ) && '' != $tablet_product_right_border_width
			|| isset( $tablet_product_bottom_border_width ) && '' != $tablet_product_bottom_border_width
			|| isset( $tablet_product_left_border_width ) && '' != $tablet_product_left_border_width ) {
			$css .= '@media (max-width: 768px){.woocommerce .products .product-inner{border-width:'. oceanwp_spacing_css( $tablet_product_top_border_width, $tablet_product_right_border_width, $tablet_product_bottom_border_width, $tablet_product_left_border_width ) .'}}';
		}

		// Mobile product border width
		if ( isset( $mobile_product_top_border_width ) && '' != $mobile_product_top_border_width
			|| isset( $mobile_product_right_border_width ) && '' != $mobile_product_right_border_width
			|| isset( $mobile_product_bottom_border_width ) && '' != $mobile_product_bottom_border_width
			|| isset( $mobile_product_left_border_width ) && '' != $mobile_product_left_border_width ) {
			$css .= '@media (max-width: 480px){.woocommerce .products .product-inner{border-width:'. oceanwp_spacing_css( $mobile_product_top_border_width, $mobile_product_right_border_width, $mobile_product_bottom_border_width, $mobile_product_left_border_width ) .'}}';
		}

		// Product border radius
		if ( isset( $product_top_border_radius ) && '' != $product_top_border_radius
			|| isset( $product_right_border_radius ) && '' != $product_right_border_radius
			|| isset( $product_bottom_border_radius ) && '' != $product_bottom_border_radius
			|| isset( $product_left_border_radius ) && '' != $product_left_border_radius ) {
			$css .= '.woocommerce .products .product-inner{border-radius:'. oceanwp_spacing_css( $product_top_border_radius, $product_right_border_radius, $product_bottom_border_radius, $product_left_border_radius ) .'}';
		}

		// Tablet product border radius
		if ( isset( $tablet_product_top_border_radius ) && '' != $tablet_product_top_border_radius
			|| isset( $tablet_product_right_border_radius ) && '' != $tablet_product_right_border_radius
			|| isset( $tablet_product_bottom_border_radius ) && '' != $tablet_product_bottom_border_radius
			|| isset( $tablet_product_left_border_radius ) && '' != $tablet_product_left_border_radius ) {
			$css .= '@media (max-width: 768px){.woocommerce .products .product-inner{border-radius:'. oceanwp_spacing_css( $tablet_product_top_border_radius, $tablet_product_right_border_radius, $tablet_product_bottom_border_radius, $tablet_product_left_border_radius ) .'}}';
		}

		// Mobile product border radius
		if ( isset( $mobile_product_top_border_radius ) && '' != $mobile_product_top_border_radius
			|| isset( $mobile_product_right_border_radius ) && '' != $mobile_product_right_border_radius
			|| isset( $mobile_product_bottom_border_radius ) && '' != $mobile_product_bottom_border_radius
			|| isset( $mobile_product_left_border_radius ) && '' != $mobile_product_left_border_radius ) {
			$css .= '@media (max-width: 480px){.woocommerce .products .product-inner{border-radius:'. oceanwp_spacing_css( $mobile_product_top_border_radius, $mobile_product_right_border_radius, $mobile_product_bottom_border_radius, $mobile_product_left_border_radius ) .'}}';
		}

		// Add background color
		if ( ! empty( $product_background_color ) ) {
			$css .= '.woocommerce .products .product-inner, .woocommerce ul.products li.product .woo-product-info, .woocommerce ul.products li.product .woo-product-gallery{background-color:'. $product_background_color .';}';
		}

		// Add border color
		if ( ! empty( $product_border_color ) ) {
			$css .= '.woocommerce .products .product-inner{border-color:'. $product_border_color .';}';
		}

		// Add category color
		if ( ! empty( $category_color ) && '#999999' != $category_color ) {
			$css .= '.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{color:'. $category_color .';}';
		}

		// Add category color hover
		if ( ! empty( $category_color_hover ) && '#13aff0' != $category_color_hover ) {
			$css .= '.woocommerce ul.products li.product li.category a:hover{color:'. $category_color_hover .';}';
		}

		// Add product entry title color
		if ( ! empty( $product_title_color ) && '#333333' != $product_title_color ) {
			$css .= '.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{color:'. $product_title_color .';}';
		}

		// Add product entry title color hover
		if ( ! empty( $product_title_color_hover ) && '#13aff0' != $product_title_color_hover ) {
			$css .= '.woocommerce ul.products li.product li.title a:hover{color:'. $product_title_color_hover .';}';
		}

		// Add product entry price color
		if ( ! empty( $product_entry_price_color ) && '#57bf6d' != $product_entry_price_color ) {
			$css .= '.woocommerce ul.products li.product .price, .woocommerce ul.products li.product .price .amount{color:'. $product_entry_price_color .';}';
		}

		// Add product entry del price color
		if ( ! empty( $product_entry_del_price_color ) && '#666666' != $product_entry_del_price_color ) {
			$css .= '.woocommerce ul.products li.product .price del .amount{color:'. $product_entry_del_price_color .';}';
		}

		// Add product entry conditional notice color.
		if ( ! empty( $product_entry_cond_note_color ) && '#333' != $product_entry_cond_note_color ) {
			$css .= '.woocommerce ul.products li.product li.owp-woo-cond-notice span, .woocommerce ul.products li.product li.owp-woo-cond-notice a{color:'. $product_entry_cond_note_color .';}';
		}

		// Add product entry conditional notice hover color.
		if ( ! empty( $product_entry_cond_note_color_hover ) && '#52a7fe' != $product_entry_cond_note_color_hover ) {
			$css .= '.woocommerce ul.products li.product li.owp-woo-cond-notice a:hover{color:'. $product_entry_cond_note_color_hover .';}';
		}


		// Add product hover thumbnails border color
		if ( ! empty( $product_entry_hover_thumbnails_border_color ) && '#13aff0' != $product_entry_hover_thumbnails_border_color ) {
			$css .= '.woocommerce ul.products li.product .woo-product-gallery .active a, .woocommerce ul.products li.product .woo-product-gallery a:hover{border-color:'. $product_entry_hover_thumbnails_border_color .';}';
		}

		// Add product hover quick view background
		if ( ! empty( $product_entry_hover_quickview_background ) && '#ffffff' != $product_entry_hover_quickview_background ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view{background-color:'. $product_entry_hover_quickview_background .';}';
		}

		// Add product hover quick view hover background
		if ( ! empty( $product_entry_hover_quickview_hover_background ) && '#ffffff' != $product_entry_hover_quickview_hover_background ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view:hover{background-color:'. $product_entry_hover_quickview_hover_background .';}';
		}

		// Add product hover quick view color
		if ( ! empty( $product_entry_hover_quickview_color ) && '#444444' != $product_entry_hover_quickview_color ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view{color:'. $product_entry_hover_quickview_color .';}';
		}

		// Add product hover quick view hover color
		if ( ! empty( $product_entry_hover_quickview_hover_color ) && '#13aff0' != $product_entry_hover_quickview_hover_color ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.owp-quick-view:hover{color:'. $product_entry_hover_quickview_hover_color .';}';
		}

		// Add product hover wishlist background
		if ( ! empty( $product_entry_hover_wishlist_background ) && '#ffffff' != $product_entry_hover_wishlist_background ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button{background-color:'. $product_entry_hover_wishlist_background .';}';
		}

		// Add product hover wishlist hover background
		if ( ! empty( $product_entry_hover_wishlist_hover_background ) && '#ffffff' != $product_entry_hover_wishlist_hover_background ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button:hover{background-color:'. $product_entry_hover_wishlist_hover_background .';}';
		}

		// Add product hover wishlist color
		if ( ! empty( $product_entry_hover_wishlist_color ) && '#444444' != $product_entry_hover_wishlist_color ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button{color:'. $product_entry_hover_wishlist_color .';}';
		}

		// Add product hover wishlist hover color
		if ( ! empty( $product_entry_hover_wishlist_hover_color ) && '#13aff0' != $product_entry_hover_wishlist_hover_color ) {
			$css .= '.woocommerce ul.products li.product .woo-entry-buttons li a.tinvwl_add_to_wishlist_button:hover{color:'. $product_entry_hover_wishlist_hover_color .';}';
		}

		// Add product entry add to cart background color
		if ( ! empty( $product_entry_addtocart_bg_color ) ) {
			$css .= '.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button{background-color:'. $product_entry_addtocart_bg_color .';}';
		}

		// Add product entry add to cart background color hover
		if ( ! empty( $product_entry_addtocart_bg_color_hover ) ) {
			$css .= '.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button:hover{background-color:'. $product_entry_addtocart_bg_color_hover .';}';
		}

		// Add product entry add to cart color
		if ( ! empty( $product_entry_addtocart_color ) && '#848494' != $product_entry_addtocart_color ) {
			$css .= '.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button {color:'. $product_entry_addtocart_color .';}';
		}

		// Add product entry add to cart color hover
		if ( ! empty( $product_entry_addtocart_color_hover ) && '#13aff0' != $product_entry_addtocart_color_hover ) {
			$css .= '.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button:hover{color:'. $product_entry_addtocart_color_hover .';}';
		}

		// Add product entry add to cart border color
		if ( ! empty( $product_entry_addtocart_border_color ) && '#e4e4e4' != $product_entry_addtocart_border_color ) {
			$css .= '.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button{border-color:'. $product_entry_addtocart_border_color .';}';
		}

		// Add product entry add to cart border color hover
		if ( ! empty( $product_entry_addtocart_border_color_hover ) && '#13aff0' != $product_entry_addtocart_border_color_hover ) {
			$css .= '.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover, .woocommerce ul.products li.product:not(.product-category) .image-wrap .button:hover{border-color:'. $product_entry_addtocart_border_color_hover .';}';
		}

		// Add product entry add to cart border style
		if ( ! empty( $product_entry_addtocart_border_style ) && 'double' != $product_entry_addtocart_border_style ) {
			$css .= '.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart{border-style:'. $product_entry_addtocart_border_style .';}';
		}

		// Add product entry add to cart border size
		if ( ! empty( $product_entry_addtocart_border_size ) && '3' != $product_entry_addtocart_border_size ) {
			$css .= '.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart{border-width:'. $product_entry_addtocart_border_size . $product_entry_addtocart_border_size_unit . ';}';
		}

		// Add product entry add to cart border radius
		if ( ! empty( $product_entry_addtocart_border_radius ) ) {
			$css .= '.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart{border-radius:'. $product_entry_addtocart_border_radius . $product_entry_addtocart_border_radius_unit . ';}';
		}

		// Add quick view button background
		if ( ! empty( $quick_view_button_bg ) && 'rgba(0,0,0,0.6)' != $quick_view_button_bg ) {
			$css .= '.owp-quick-view{background-color:'. $quick_view_button_bg .';}';
		}

		// Add quick view button hover background
		if ( ! empty( $quick_view_button_hover_bg ) && 'rgba(0,0,0,0.9)' != $quick_view_button_hover_bg ) {
			$css .= '.owp-quick-view:hover{background-color:'. $quick_view_button_hover_bg .';}';
		}

		// Add quick view button color
		if ( ! empty( $quick_view_button_color ) && '#ffffff' != $quick_view_button_color ) {
			$css .= '.owp-quick-view{color:'. $quick_view_button_color .';}';
			$css .= '.owp-quick-view .owp-icon use{stroke:'. $quick_view_button_color .';}';
		}

		// Add quick view button hover color
		if ( ! empty( $quick_view_button_hover_color ) && '#ffffff' != $quick_view_button_hover_color ) {
			$css .= '.owp-quick-view:hover{color:'. $quick_view_button_hover_color .';}';
			$css .= '.owp-quick-view:hover .owp-icon use{stroke:'. $quick_view_button_hover_color .';}';
		}

		// Add quick view overlay background
		if ( ! empty( $quick_view_overlay_bg ) && 'rgba(0,0,0,0.15)' != $quick_view_overlay_bg ) {
			$css .= '.image-wrap.loading:after{background-color:'. $quick_view_overlay_bg .';}';
		}

		// Add quick view overlay spinner outside color
		if ( ! empty( $quick_view_overlay_spinner_outside_color ) && 'rgba(0,0,0,0.1)' != $quick_view_overlay_spinner_outside_color ) {
			$css .= '.image-wrap.loading:before{border-color:'. $quick_view_overlay_spinner_outside_color .';}';
		}

		// Add quick view overlay spinner inner color
		if ( ! empty( $quick_view_overlay_spinner_inner_color ) && '#ffffff' != $quick_view_overlay_spinner_inner_color ) {
			$css .= '.image-wrap.loading:before{border-left-color:'. $quick_view_overlay_spinner_inner_color .';}';
		}

		// Add quick view modal background
		if ( ! empty( $quick_view_modal_bg ) && '#ffffff' != $quick_view_modal_bg ) {
			$css .= '.owp-qv-content-inner{background-color:'. $quick_view_modal_bg .';}';
		}

		// Add quick view modal close button color
		if ( ! empty( $quick_view_modal_close_color ) && '#333333' != $quick_view_modal_close_color ) {
			$css .= '.owp-qv-content-inner .owp-qv-close{color:'. $quick_view_modal_close_color .';}';
		}

		// Add off canvas background
		if ( ! empty( $off_canvas_sidebar_bg ) && '#ffffff' != $off_canvas_sidebar_bg ) {
			$css .= '#oceanwp-off-canvas-sidebar-wrap .oceanwp-off-canvas-sidebar{background-color:'. $off_canvas_sidebar_bg .';}';
		}

		// Add off canvas border color
		if ( ! empty( $off_canvas_sidebar_widgets_border ) && 'rgba(84,84,84,0.15)' != $off_canvas_sidebar_widgets_border ) {
			$css .= '#oceanwp-off-canvas-sidebar-wrap .sidebar-box{border-color:'. $off_canvas_sidebar_widgets_border .';}';
		}

		// Add single product title color
		if ( ! empty( $single_product_title_color ) && '#333333' != $single_product_title_color ) {
			$css .= '.woocommerce div.product .product_title{color:'. $single_product_title_color .';}';
		}

		// Add single product price color
		if ( ! empty( $single_product_price_color ) && '#57bf6d' != $single_product_price_color ) {
			$css .= '.price,.amount{color:'. $single_product_price_color .';}';
		}

		// Add single product del price color
		if ( ! empty( $single_product_del_price_color ) && '#555555' != $single_product_del_price_color ) {
			$css .= '.price del,del .amount{color:'. $single_product_del_price_color .';}';
		}

		// Add single product description color
		if ( ! empty( $single_product_description_color ) && '#aaaaaa' != $single_product_description_color ) {
			$css .= '.woocommerce div.product div[itemprop="description"], .woocommerce div.product .woocommerce-product-details__short-description{color:'. $single_product_description_color .';}';
		}

		// Add single product meta title color
		if ( ! empty( $single_product_meta_title_color ) && '#333333' != $single_product_meta_title_color ) {
			$css .= '.product_meta .posted_in,.product_meta .tagged_as,.product_meta .sku_wrapper{color:'. $single_product_meta_title_color .';}';
		}

		// Add single product meta link color
		if ( ! empty( $single_product_meta_link_color ) && '#aaaaaa' != $single_product_meta_link_color ) {
			$css .= '.product_meta .posted_in a,.product_meta .tagged_as a{color:'. $single_product_meta_link_color .';}';
		}

		// Add single product meta link color hover
		if ( ! empty( $single_product_meta_link_color_hover ) && '#13aff0' != $single_product_meta_link_color_hover ) {
			$css .= '.product_meta .posted_in a:hover,.product_meta .tagged_as a:hover{color:'. $single_product_meta_link_color_hover .';}';
		}

		// Add single product notice color.
		if ( ! empty( $single_product_cond_notice_color ) && '#333333' != $single_product_cond_notice_color ) {
			$css .= '.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{color:'. $single_product_cond_notice_color .';}';
		}

		// Add single product notice hover color.
		if ( ! empty( $single_product_cond_notice_color_hover ) && '#52a7fe' != $single_product_cond_notice_color_hover ) {
			$css .= '.woocommerce div.owp-woo-single-cond-notice a:hover{color:'. $single_product_cond_notice_color_hover .';}';
		}

		// Add single product navigation border radius
		if ( isset( $single_product_navigation_border_radius ) && '30' != $single_product_navigation_border_radius && '' != $single_product_navigation_border_radius ) {
			$css .= '.owp-product-nav li a.owp-nav-link{-webkit-border-radius: '. $single_product_navigation_border_radius .'px; -moz-border-radius: '. $single_product_navigation_border_radius .'px; -ms-border-radius: '. $single_product_navigation_border_radius .'px; border-radius: '. $single_product_navigation_border_radius .'px;}';
		}

		// Add single product navigation background color
		if ( ! empty( $single_product_navigation_bg ) ) {
			$css .= '.owp-product-nav li a.owp-nav-link{background-color:'. $single_product_navigation_bg .';}';
		}

		// Add single product navigation background color
		if ( ! empty( $single_product_navigation_hover_bg ) && '#13aff0' != $single_product_navigation_hover_bg ) {
			$css .= '.owp-product-nav li a.owp-nav-link:hover{background-color:'. $single_product_navigation_hover_bg .';}';
		}

		// Add single product navigation color
		if ( ! empty( $single_product_navigation_color ) && '#333333' != $single_product_navigation_color ) {
			$css .= '.owp-product-nav li a.owp-nav-link{color:'. $single_product_navigation_color .';}';
			$css .= '.owp-product-nav li a.owp-nav-link .owp-icon use{stroke:'. $single_product_navigation_color .';}';
		}

		// Add single product navigation color
		if ( ! empty( $single_product_navigation_hover_color ) && '#ffffff' != $single_product_navigation_hover_color ) {
			$css .= '.owp-product-nav li a.owp-nav-link:hover{color:'. $single_product_navigation_hover_color .';}';
			$css .= '.owp-product-nav li a.owp-nav-link:hover .owp-icon use{stroke:'. $single_product_navigation_hover_color .';}';
		}

		// Add single product navigation border color
		if ( ! empty( $single_product_navigation_border_color ) && '#e9e9e9' != $single_product_navigation_border_color ) {
			$css .= '.owp-product-nav li a.owp-nav-link{border-color:'. $single_product_navigation_border_color .';}';
		}

		// Add single product navigation border color
		if ( ! empty( $single_product_navigation_hover_border_color ) && '#13aff0' != $single_product_navigation_hover_border_color ) {
			$css .= '.owp-product-nav li a.owp-nav-link:hover{border-color:'. $single_product_navigation_hover_border_color .';}';
		}

		// Add product entry add to cart background color
		if ( ! empty( $single_product_addtocart_bg_color ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button{background-color:'. $single_product_addtocart_bg_color .';}';
		}

		// Add product entry add to cart background color hover
		if ( ! empty( $single_product_addtocart_bg_color_hover ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button:hover{background-color:'. $single_product_addtocart_bg_color_hover .';}';
		}

		// Add product entry add to cart color
		if ( ! empty( $single_product_addtocart_color ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button{color:'. $single_product_addtocart_color .';}';
		}

		// Add product entry add to cart color hover
		if ( ! empty( $single_product_addtocart_color_hover ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button:hover{color:'. $single_product_addtocart_color_hover .';}';
		}

		// Add product entry add to cart border color
		if ( ! empty( $single_product_addtocart_border_color ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button{border-color:'. $single_product_addtocart_border_color .';}';
		}

		// Add product entry add to cart border color hover
		if ( ! empty( $single_product_addtocart_border_color_hover ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button:hover{border-color:'. $single_product_addtocart_border_color_hover .';}';
		}

		// Add product entry add to cart border style
		if ( ! empty( $single_product_addtocart_border_style ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button{border-style:'. $single_product_addtocart_border_style .';}';
		}

		// Add product entry add to cart border size
		if ( ! empty( $single_product_addtocart_border_size ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button{border-width:'. $single_product_addtocart_border_size . $single_product_addtocart_border_size_unit . ';}';
		}

		// Add product entry add to cart border radius
		if ( ! empty( $single_product_addtocart_border_radius ) ) {
			$css .= '.woocommerce div.product div.summary button.single_add_to_cart_button{border-radius:'. $single_product_addtocart_border_radius . $single_product_addtocart_border_radius_unit . ';}';
		}

		// Add single product tabs borders color
		if ( ! empty( $single_product_tabs_borders_color ) && '#e9e9e9' != $single_product_tabs_borders_color ) {
			$css .= '.woocommerce div.product .woocommerce-tabs ul.tabs{border-color:'. $single_product_tabs_borders_color .';}';
		}

		// Add single product tabs text color
		if ( ! empty( $single_product_tabs_text_color ) && '#999999' != $single_product_tabs_text_color ) {
			$css .= '.woocommerce div.product .woocommerce-tabs ul.tabs li a{color:'. $single_product_tabs_text_color .';}';
		}

		// Add single product tabs text color hover
		if ( ! empty( $single_product_tabs_text_color_hover ) && '#13aff0' != $single_product_tabs_text_color_hover ) {
			$css .= '.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover{color:'. $single_product_tabs_text_color_hover .';}';
		}

		// Add single product tabs active text color
		if ( ! empty( $single_product_tabs_active_text_color ) && '#13aff0' != $single_product_tabs_active_text_color ) {
			$css .= '.woocommerce div.product .woocommerce-tabs ul.tabs li.active a{color:'. $single_product_tabs_active_text_color .';}';
		}

		// Add single product tabs active text borders color
		if ( ! empty( $single_product_tabs_active_text_borders_color ) && '#13aff0' != $single_product_tabs_active_text_borders_color ) {
			$css .= '.woocommerce div.product .woocommerce-tabs ul.tabs li.active a{border-color:'. $single_product_tabs_active_text_borders_color .';}';
		}

		// Add single product tabs product description title color
		if ( ! empty( $single_product_tabs_product_desc_title_color ) && '#333333' != $single_product_tabs_product_desc_title_color ) {
			$css .= '.woocommerce div.product .woocommerce-tabs .panel h2{color:'. $single_product_tabs_product_desc_title_color .';}';
		}

		// Add single product tabs product description color
		if ( ! empty( $single_product_tabs_product_desc_color ) && '#929292' != $single_product_tabs_product_desc_color ) {
			$css .= '.woocommerce div.product .woocommerce-tabs .panel p{color:'. $single_product_tabs_product_desc_color .';}';
		}

		// Add account Login/Register color
		if ( ! empty( $account_login_register_color ) && '#333333' != $account_login_register_color ) {
			$css .= '.woocommerce .owp-account-links li .owp-account-link, .woocommerce .owp-account-links li.orDisplay Related Items{color:'. $account_login_register_color .';}';
		}

		// Add account navigation borders color
		if ( ! empty( $account_nav_borders_color ) && '#e9e9e9' != $account_nav_borders_color ) {
			$css .= '.woocommerce-MyAccount-navigation ul,.woocommerce-MyAccount-navigation ul li{border-color:'. $account_nav_borders_color .';}';
		}

		// Add account navigation icons color
		if ( ! empty( $account_nav_icons_color ) && '#13aff0' != $account_nav_icons_color ) {
			$css .= '.woocommerce-MyAccount-navigation ul li a:before{color:'. $account_nav_icons_color .';}';
		}

		// Add account navigation links color
		if ( ! empty( $account_nav_links_color ) && '#333333' != $account_nav_links_color ) {
			$css .= '.woocommerce-MyAccount-navigation ul li a{color:'. $account_nav_links_color .';}';
		}

		// Add account navigation links color hover
		if ( ! empty( $account_nav_links_color_hover ) && '#13aff0' != $account_nav_links_color_hover ) {
			$css .= '.woocommerce-MyAccount-navigation ul li a:hover{color:'. $account_nav_links_color_hover .';}';
		}

		// Add account addresses background color
		if ( ! empty( $account_addresses_bg ) && '#f6f6f6' != $account_addresses_bg ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address .title, .woocommerce-MyAccount-content .addresses .woocommerce-Address address{background-color:'. $account_addresses_bg .';}';
		}

		// Add account addresses title color
		if ( ! empty( $account_addresses_title_color ) && '#333333' != $account_addresses_title_color ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address .title h3{color:'. $account_addresses_title_color .';}';
		}

		// Add account addresses title border color
		if ( ! empty( $account_addresses_title_border_color ) && '#ffffff' != $account_addresses_title_border_color ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address .title{border-color:'. $account_addresses_title_border_color .';}';
		}

		// Add account addresses content color
		if ( ! empty( $account_addresses_content_color ) && '#898989' != $account_addresses_content_color ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address address{color:'. $account_addresses_content_color .';}';
		}

		// Add account addresses button background color
		if ( ! empty( $account_addresses_button_bg ) && '#ffffff' != $account_addresses_button_bg ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a{background-color:'. $account_addresses_button_bg .';}';
		}

		// Add account addresses button background color hover
		if ( ! empty( $account_addresses_button_bg_hover ) && '#f8f8f8' != $account_addresses_button_bg_hover ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a:hover{background-color:'. $account_addresses_button_bg_hover .';}';
		}

		// Add account addresses button color
		if ( ! empty( $account_addresses_button_color ) && '#898989' != $account_addresses_button_color ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a{color:'. $account_addresses_button_color .';}';
		}

		// Add account addresses button color hover
		if ( ! empty( $account_addresses_button_color_hover ) && '#555555' != $account_addresses_button_color_hover ) {
			$css .= '.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a:hover{color:'. $account_addresses_button_color_hover .';}';
		}

		// Add cart borders color
		if ( ! empty( $cart_borders_color ) && '#e9e9e9' != $cart_borders_color ) {
			$css .= '.woocommerce-cart table.shop_table,.woocommerce-cart table.shop_table th,.woocommerce-cart table.shop_table td,.woocommerce-cart .cart-collaterals .cross-sells,.woocommerce-page .cart-collaterals .cross-sells,.woocommerce-cart .cart-collaterals h2,.woocommerce-cart .cart-collaterals .cart_totals,.woocommerce-page .cart-collaterals .cart_totals,.woocommerce-cart .cart-collaterals .cart_totals table th,.woocommerce-cart .cart-collaterals .cart_totals .order-total th,.woocommerce-cart table.shop_table td,.woocommerce-cart .cart-collaterals .cart_totals tr td,.woocommerce-cart .cart-collaterals .cart_totals .order-total td{border-color:'. $cart_borders_color .';}';
		}

		// Add cart head background
		if ( ! empty( $cart_head_bg ) && '#f7f7f7' != $cart_head_bg ) {
			$css .= '.woocommerce-cart table.shop_table thead,.woocommerce-cart .cart-collaterals h2{background-color:'. $cart_head_bg .';}';
		}

		// Add cart head titles color
		if ( ! empty( $cart_head_titles_color ) && '#444444' != $cart_head_titles_color ) {
			$css .= '.woocommerce-cart table.shop_table thead th,.woocommerce-cart .cart-collaterals h2{color:'. $cart_head_titles_color .';}';
		}

		// Add cart totals table titles color
		if ( ! empty( $cart_totals_table_titles_color ) && '#444444' != $cart_totals_table_titles_color ) {
			$css .= '.woocommerce-cart .cart-collaterals .cart_totals table th{color:'. $cart_totals_table_titles_color .';}';
		}

		// Add cart remove button color
		if ( ! empty( $cart_remove_button_color ) && '#bbbbbb' != $cart_remove_button_color ) {
			$css .= '.woocommerce table.shop_table a.remove{color:'. $cart_remove_button_color .';}';
		}

		// Add cart remove button color hover
		if ( ! empty( $cart_remove_button_color_hover ) && '#333333' != $cart_remove_button_color_hover ) {
			$css .= '.woocommerce table.shop_table a.remove:hover{color:'. $cart_remove_button_color_hover .';}';
		}

		// Add checkout notices borders color
		if ( ! empty( $checkout_notices_borders_color ) && '#e9e9e9' != $checkout_notices_borders_color ) {
			$css .= '.woocommerce-checkout .woocommerce-info{border-color:'. $checkout_notices_borders_color .';}';
		}

		// Add checkout notices icon color
		if ( ! empty( $checkout_notices_icon_color ) && '#dddddd' != $checkout_notices_icon_color ) {
			$css .= '.woocommerce-checkout .woocommerce-info:before{color:'. $checkout_notices_icon_color .';}';
		}

		// Add checkout notices color
		if ( ! empty( $checkout_notices_color ) && '#777777' != $checkout_notices_color ) {
			$css .= '.woocommerce-checkout .woocommerce-info{color:'. $checkout_notices_color .';}';
		}

		// Add checkout notices link color
		if ( ! empty( $checkout_notices_link_color ) && '#13aff0' != $checkout_notices_link_color ) {
			$css .= '.woocommerce-checkout .woocommerce-info a{color:'. $checkout_notices_link_color .';}';
		}

		// Add checkout notices link color hover
		if ( ! empty( $checkout_notices_link_color_hover ) && '#333333' != $checkout_notices_link_color_hover ) {
			$css .= '.woocommerce-checkout .woocommerce-info a:hover{color:'. $checkout_notices_link_color_hover .';}';
		}

		// Add checkout notices form border color
		if ( ! empty( $checkout_notices_form_border_color ) && '#e9e9e9' != $checkout_notices_form_border_color ) {
			$css .= '.woocommerce-checkout form.login,.woocommerce-checkout form.checkout_coupon{border-color:'. $checkout_notices_form_border_color .';}';
		}

		// Add checkout titles color
		if ( ! empty( $checkout_titles_color ) && '#333333' != $checkout_titles_color ) {
			$css .= '.woocommerce .woocommerce-checkout #customer_details h3,.woocommerce .woocommerce-checkout h3#order_review_heading{color:'. $checkout_titles_color .';}';
		}

		// Add checkout notices titles border bottom color
		if ( ! empty( $checkout_titles_border_bottom_color ) && '#e9e9e9' != $checkout_titles_border_bottom_color ) {
			$css .= '.woocommerce .woocommerce-checkout #customer_details h3,.woocommerce .woocommerce-checkout h3#order_review_heading{border-color:'. $checkout_titles_border_bottom_color .';}';
		}

		// Add checkout table main background
		if ( ! empty( $checkout_table_main_bg ) && '#f7f7f7' != $checkout_table_main_bg ) {
			$css .= '.woocommerce table.shop_table thead,.woocommerce-checkout-review-order-table tfoot th{background-color:'. $checkout_table_main_bg .';}';
		}

		// Add checkout table titles color
		if ( ! empty( $checkout_table_titles_color ) && '#444444' != $checkout_table_titles_color ) {
			$css .= '.woocommerce-checkout table.shop_table thead th,.woocommerce #order_review table.shop_table tfoot th{color:'. $checkout_table_titles_color .';}';
		}

		// Add checkout table borders color
		if ( ! empty( $checkout_table_borders_color ) && '#e9e9e9' != $checkout_table_borders_color ) {
			$css .= '.woocommerce-checkout table.shop_table,.woocommerce-checkout table.shop_table th,.woocommerce-checkout table.shop_table td,.woocommerce-checkout table.shop_table tfoot th,.woocommerce-checkout table.shop_table tfoot td{border-color:'. $checkout_table_borders_color .';}';
		}

		// Add checkout payment methods background
		if ( ! empty( $checkout_payment_methods_bg ) && '#f8f8f8' != $checkout_payment_methods_bg ) {
			$css .= '.woocommerce-checkout #payment{background-color:'. $checkout_payment_methods_bg .';}';
		}

		// Add checkout payment methods borders color
		if ( ! empty( $checkout_payment_methods_borders_color ) && '#e9e9e9' != $checkout_payment_methods_borders_color ) {
			$css .= '.woocommerce-checkout #payment,.woocommerce-checkout #payment ul.payment_methods{border-color:'. $checkout_payment_methods_borders_color .';}';
		}

		// Add checkout payment box background
		if ( ! empty( $checkout_payment_box_bg ) && '#ffffff' != $checkout_payment_box_bg ) {
			$css .= '.woocommerce-checkout #payment div.payment_box{background-color:'. $checkout_payment_box_bg .';}';
		}

		// Add checkout payment box color
		if ( ! empty( $checkout_payment_box_color ) && '#515151' != $checkout_payment_box_color ) {
			$css .= '.woocommerce-checkout #payment div.payment_box{color:'. $checkout_payment_box_color .';}';
		}

		// If shop page Both Sidebars layout
		if ( 'both-sidebars' == $archives_layout ) {

			// Both Sidebars layout shop page content width
			if ( ! empty( $bs_archives_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.woocommerce.archive.content-both-sidebars .content-area {width: '. $bs_archives_content_width . $bs_archives_content_width_unit . ';}
						body.woocommerce.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.woocommerce.archive.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_archives_content_width . $bs_archives_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout shop page sidebars width
			if ( ! empty( $bs_archives_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.woocommerce.archive.content-both-sidebars .widget-area{width:'. $bs_archives_sidebars_width . $bs_archives_sidebars_width_unit . ';}
						body.woocommerce.archive.content-both-sidebars.scs-style .content-area{left:'. $bs_archives_sidebars_width . $bs_archives_sidebars_width_unit . ';}
						body.woocommerce.archive.content-both-sidebars.ssc-style .content-area{left:'. $bs_archives_sidebars_width * 2 . $bs_archives_sidebars_width_unit . ';}
					}';
			}

		}

		// If single product Both Sidebars layout
		if ( 'both-sidebars' == $single_layout ) {

			// Both Sidebars layout single product content width
			if ( ! empty( $bs_single_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-product.content-both-sidebars .content-area {width: '. $bs_single_content_width . $bs_single_content_width_unit . ';}
						body.single-product.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-product.content-both-sidebars.ssc-style .widget-area {left: -'. $bs_single_content_width . $bs_single_content_width_unit . ';}
					}';
			}

			// Both Sidebars layout single product sidebars width
			if ( ! empty( $bs_single_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-product.content-both-sidebars .widget-area{width:'. $bs_single_sidebars_width . $bs_single_sidebars_width_unit . ';}
						body.single-product.content-both-sidebars.scs-style .content-area{left:'. $bs_single_sidebars_width . $bs_single_sidebars_width_unit . ';}
						body.single-product.content-both-sidebars.ssc-style .content-area{left:'. $bs_single_sidebars_width * 2 . $bs_single_sidebars_width_unit . ';}
					}';
			}

		}

		// Return CSS
		if ( ! empty( $css ) ) {
			$output .= '/* WooCommerce */'. $css;
		}

		// Return output css
		return $output;
	}
}

return new OceanWP_Customize_WooCommerce_CSS();
