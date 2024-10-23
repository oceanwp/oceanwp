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
class OceanWP_Customize_Header_CSS {

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
		add_filter( 'ocean_head_css', array( $this, 'header_image_css' ) );
	}

	public function generate_Css($output) {

		$header_style = oceanwp_header_style();
		$mobile_style = oceanwp_mobile_menu_style();

		// Global vars
		$header_height                 = get_theme_mod( 'ocean_header_height', 74 );
		$header_height_unit            = get_theme_mod( 'ocean_header_height_unit', 'px' );

		$header_top_padding											= get_theme_mod( 'ocean_header_top_padding', 0 );
		$header_right_padding										= get_theme_mod( 'ocean_header_right_padding', 0 );
		$header_bottom_padding										= get_theme_mod( 'ocean_header_bottom_padding', 0 );
		$header_left_padding										= get_theme_mod( 'ocean_header_left_padding', 0 );
		$tablet_header_top_padding 									= get_theme_mod( 'ocean_header_tablet_top_padding' );
		$tablet_header_right_padding 								= get_theme_mod( 'ocean_header_tablet_right_padding' );
		$tablet_header_bottom_padding 								= get_theme_mod( 'ocean_header_tablet_bottom_padding' );
		$tablet_header_left_padding 								= get_theme_mod( 'ocean_header_tablet_left_padding' );
		$mobile_header_top_padding 									= get_theme_mod( 'ocean_header_mobile_top_padding' );
		$mobile_header_right_padding 								= get_theme_mod( 'ocean_header_mobile_right_padding' );
		$mobile_header_bottom_padding 								= get_theme_mod( 'ocean_header_mobile_bottom_padding' );
		$mobile_header_left_padding 								= get_theme_mod( 'ocean_header_mobile_left_padding' );

		$full_screen_header_menu_hamburger_icon_width 			    = get_theme_mod( 'ocean_full_screen_header_hamburger_icon_width', 23 );
		$full_screen_header_menu_hamburger_icon_width_unit 			= get_theme_mod( 'ocean_full_screen_header_hamburger_icon_width_unit', 'px' );
		$full_screen_header_menu_hamburger_icon_height 				= get_theme_mod( 'ocean_full_screen_header_hamburger_icon_height', 2 );
		$full_screen_header_menu_hamburger_icon_height_unit 		= get_theme_mod( 'ocean_full_screen_header_hamburger_icon_height_unit', 'px' );
		$full_screen_header_menu_hamburger_icon_gap                 = get_theme_mod( 'ocean_full_screen_header_hamburger_icon_gap', 8 );
		$full_screen_header_menu_hamburger_icon_gap_unit            = get_theme_mod( 'ocean_full_screen_header_hamburger_icon_gap_unit', 'px' );

		$medium_header_top_header_top_padding 						= get_theme_mod( 'ocean_medium_header_top_header_top_padding', 30 );
		$medium_header_top_header_right_padding 					= get_theme_mod( 'ocean_medium_header_top_header_right_padding' );
		$medium_header_top_header_bottom_padding 					= get_theme_mod( 'ocean_medium_header_top_header_bottom_padding', 30 );
		$medium_header_top_header_left_padding 						= get_theme_mod( 'ocean_medium_header_top_header_left_padding' );
		$medium_header_top_header_tablet_top_padding 				= get_theme_mod( 'ocean_medium_header_top_header_tablet_top_padding' );
		$medium_header_top_header_tablet_right_padding 				= get_theme_mod( 'ocean_medium_header_top_header_tablet_right_padding' );
		$medium_header_top_header_tablet_bottom_padding 			= get_theme_mod( 'ocean_medium_header_top_header_tablet_bottom_padding' );
		$medium_header_top_header_tablet_left_padding 				= get_theme_mod( 'ocean_medium_header_top_header_tablet_left_padding' );
		$medium_header_top_header_mobile_top_padding 				= get_theme_mod( 'ocean_medium_header_top_header_mobile_top_padding' );
		$medium_header_top_header_mobile_right_padding 				= get_theme_mod( 'ocean_medium_header_top_header_mobile_right_padding' );
		$medium_header_top_header_mobile_bottom_padding 			= get_theme_mod( 'ocean_medium_header_top_header_mobile_bottom_padding' );
		$medium_header_top_header_mobile_left_padding 				= get_theme_mod( 'ocean_medium_header_top_header_mobile_left_padding' );

		$medium_header_menu_height 									= get_theme_mod( 'ocean_medium_header_menu_height', 60 );
		$medium_header_menu_height_unit 						    = get_theme_mod( 'ocean_medium_header_menu_height_unit', 'px' );

		$medium_header_menu_items_right_padding 					= get_theme_mod( 'ocean_medium_header_menu_items_right_padding', 22 );
		$medium_header_menu_items_left_padding 						= get_theme_mod( 'ocean_medium_header_menu_items_left_padding', 22 );
		$medium_header_menu_items_tablet_right_padding 				= get_theme_mod( 'ocean_medium_header_menu_items_tablet_right_padding' );
		$medium_header_menu_items_tablet_left_padding 				= get_theme_mod( 'ocean_medium_header_menu_items_tablet_left_padding' );
		$medium_header_menu_items_mobile_right_padding 				= get_theme_mod( 'ocean_medium_header_menu_items_mobile_right_padding' );
		$medium_header_menu_items_mobile_left_padding 				= get_theme_mod( 'ocean_medium_header_menu_items_mobile_left_padding' );

		$vertical_header_collapse_width 							= get_theme_mod( 'ocean_vertical_header_collapse_width', 1280 );
		$vertical_header_width 										= get_theme_mod( 'ocean_vertical_header_width', 300 );
		$vertical_header_inner_top_padding							= get_theme_mod( 'ocean_vertical_header_inner_top_padding', 30 );
		$vertical_header_inner_right_padding						= get_theme_mod( 'ocean_vertical_header_inner_right_padding', 30 );
		$vertical_header_inner_bottom_padding						= get_theme_mod( 'ocean_vertical_header_inner_bottom_padding', 30 );
		$vertical_header_inner_left_padding							= get_theme_mod( 'ocean_vertical_header_inner_left_padding', 30 );
		$tablet_vertical_header_inner_top_padding 					= get_theme_mod( 'ocean_vertical_header_inner_tablet_top_padding' );
		$tablet_vertical_header_inner_right_padding 				= get_theme_mod( 'ocean_vertical_header_inner_tablet_right_padding' );
		$tablet_vertical_header_inner_bottom_padding 				= get_theme_mod( 'ocean_vertical_header_inner_tablet_bottom_padding' );
		$tablet_vertical_header_inner_left_padding 					= get_theme_mod( 'ocean_vertical_header_inner_tablet_left_padding' );
		$mobile_vertical_header_inner_top_padding 					= get_theme_mod( 'ocean_vertical_header_inner_mobile_top_padding' );
		$mobile_vertical_header_inner_right_padding 				= get_theme_mod( 'ocean_vertical_header_inner_mobile_right_padding' );
		$mobile_vertical_header_inner_bottom_padding 				= get_theme_mod( 'ocean_vertical_header_inner_mobile_bottom_padding' );
		$mobile_vertical_header_inner_left_padding 					= get_theme_mod( 'ocean_vertical_header_inner_mobile_left_padding' );

		$vertical_header_menu_items_padding 						= get_theme_mod( 'ocean_vertical_header_menu_items_padding', 17 );
		$vertical_header_search_border_width						= get_theme_mod( 'ocean_vertical_header_search_border_width' );
		$vertical_header_search_border_width_unit					= get_theme_mod( 'ocean_vertical_header_search_border_width_unit', 'px' );
		$vertical_header_search_border_radius 						= get_theme_mod( 'ocean_vertical_header_search_border_radius' );
		$vertical_header_search_border_radius_unit 					= get_theme_mod( 'ocean_vertical_header_search_border_radius_unit', 'px' );

		$header_background 											= get_theme_mod( 'ocean_header_background', '#ffffff' );
		$header_border_bottom 									    = get_theme_mod( 'ocean_header_border_bottom', '#f1f1f1' );
		$transparent_header_bg										= get_theme_mod( 'ocean_transparent_header_bg' );

		$top_header_menu_background 								= get_theme_mod( 'ocean_top_header_menu_background', '#ffffff' );
		$top_header_search_button_border_color 						= get_theme_mod( 'ocean_top_header_search_button_border_color', '#f1f1f1' );
		$top_header_search_button_color 							= get_theme_mod( 'ocean_top_header_search_button_color', '#333333' );
		$top_header_search_button_hover_color 						= get_theme_mod( 'ocean_top_header_search_button_hover_color', '#13aff0' );

		$medium_header_top_header_bg 								= get_theme_mod( 'ocean_medium_header_top_header_bg', '#ffffff' );
		$medium_header_menu_bg 										= get_theme_mod( 'ocean_medium_header_menu_bg', '#f9f9f9' );
		$medium_header_search_bg 									= get_theme_mod( 'ocean_medium_header_search_bg', '#f5f5f5' );
		$medium_header_search_color 								= get_theme_mod( 'ocean_medium_header_search_color', '#333333' );
		$medium_header_search_placeholder_color 					= get_theme_mod( 'ocean_medium_header_search_placeholder_color', '#333333' );
		$medium_header_search_button_color 							= get_theme_mod( 'ocean_medium_header_search_button_color', '#333333' );
		$medium_header_search_button_hover_color 					= get_theme_mod( 'ocean_medium_header_search_button_hover_color', '#13aff0' );

		$full_screen_header_menu_bar_color 							= get_theme_mod( 'ocean_full_screen_header_menu_bar_color', '#333333' );
		$full_screen_header_menu_bar_close_color 					= get_theme_mod( 'ocean_full_screen_header_menu_bar_close_color', '#ffffff' );
		$full_screen_header_bg 										= get_theme_mod( 'ocean_full_screen_header_bg', 'rgba(0,0,0,0.9)' );
		$full_screen_header_links_bg_color 							= get_theme_mod( 'ocean_full_screen_header_links_bg_color' );
		$full_screen_header_links_hover_bg_color 					= get_theme_mod( 'ocean_full_screen_header_links_hover_bg_color' );
		$full_screen_header_links_color 							= get_theme_mod( 'ocean_full_screen_header_links_color', '#ffffff' );
		$full_screen_header_links_hover_color 						= get_theme_mod( 'ocean_full_screen_header_links_hover_color', '#929292' );
		$full_screen_header_search_color 							= get_theme_mod( 'ocean_full_screen_header_search_color', '#ffffff' );
		$full_screen_header_search_dashed_bg 						= get_theme_mod( 'ocean_full_screen_header_search_dashed_bg', '#ffffff' );
		$full_screen_header_search_border_color 					= get_theme_mod( 'ocean_full_screen_header_search_border_color', '#666666' );
		$full_screen_header_search_hover_border_color 				= get_theme_mod( 'ocean_full_screen_header_search_hover_border_color', '#ffffff' );
		$full_screen_header_search_focus_border_color 				= get_theme_mod( 'ocean_full_screen_header_search_focus_border_color', '#ffffff' );

		$vertical_header_menu_items_border_color 					= get_theme_mod( 'ocean_vertical_header_menu_items_border_color', 'rgba(0,0,0,0.05)' );
		$vertical_header_sub_menu_bg 								= get_theme_mod( 'ocean_vertical_header_sub_menu_bg', 'rgba(0,0,0,0.03)' );
		$vertical_header_sub_menu_sub_menu_links_color 				= get_theme_mod( 'ocean_vertical_header_sub_menu_links_color', '#333333' );
		$vertical_header_sub_menu_links_hover_color 				= get_theme_mod( 'ocean_vertical_header_sub_menu_links_hover_color', '#555555' );
		$vertical_header_sub_menu_links_bg 							= get_theme_mod( 'ocean_vertical_header_sub_menu_links_bg' );
		$vertical_header_sub_menu_links_hover_bg 					= get_theme_mod( 'ocean_vertical_header_sub_menu_links_hover_bg', '#f8f8f8' );
		$vertical_header_search_border_width						= get_theme_mod( 'ocean_vertical_header_search_border_width' );
		$vertical_header_search_border_radius 						= get_theme_mod( 'ocean_vertical_header_search_border_radius' );
		$vertical_header_search_bg 									= get_theme_mod( 'ocean_vertical_header_search_bg', 'rgba(0,0,0,0.03)' );
		$vertical_header_search_color 								= get_theme_mod( 'ocean_vertical_header_search_color', '#333333' );
		$vertical_header_search_btn_color 							= get_theme_mod( 'ocean_vertical_header_search_btn_color', '#777777' );
		$vertical_header_search_border_color 						= get_theme_mod( 'ocean_vertical_header_search_border_color', 'rgba(0,0,0,0.04)' );
		$vertical_header_search_hover_border_color 					= get_theme_mod( 'ocean_vertical_header_search_hover_border_color' );
		$vertical_header_search_focus_border_color 					= get_theme_mod( 'ocean_vertical_header_search_focus_border_color' );
		$vertical_header_search_btn_hover_color 					= get_theme_mod( 'ocean_vertical_header_search_btn_hover_color', '#333333' );
		$vertical_header_hamburger_color 							= get_theme_mod( 'ocean_vertical_header_hamburger_color', '#000000' );

		$header_image_overlay_color 								= get_theme_mod( 'ocean_header_image_overlay_color', 'rgba(0,0,0,0.5)' );

		$logo_max_width												= get_theme_mod( 'ocean_logo_max_width' );
		$logo_max_width_tablet										= get_theme_mod( 'ocean_logo_max_width_tablet' );
		$logo_max_width_mobile										= get_theme_mod( 'ocean_logo_max_width_mobile' );
		$logo_max_width_unit									    = get_theme_mod( 'ocean_logo_max_width_unit', 'px' );
		$logo_max_height											= get_theme_mod( 'ocean_logo_max_height' );
		$logo_max_height_tablet										= get_theme_mod( 'ocean_logo_max_height_tablet' );
		$logo_max_height_mobile										= get_theme_mod( 'ocean_logo_max_height_mobile' );
		$logo_max_height_unit										= get_theme_mod( 'ocean_logo_max_height_unit', 'px' );
		$logo_color 												= get_theme_mod( 'ocean_logo_color', '#333333' );
		$logo_hover_color 											= get_theme_mod( 'ocean_logo_hover_color', '#13aff0' );

		$links_effect_blue_color 									= get_theme_mod( 'ocean_menu_links_effect_blue_color', '#13aff0' );
		$links_effect_dark_color 									= get_theme_mod( 'ocean_menu_links_effect_dark_color', 'rgba(0,0,0,0.1)' );

		$menu_items_padding 										= get_theme_mod( 'ocean_menu_items_padding', 15 );
		$menu_items_padding_unit 								    = get_theme_mod( 'ocean_menu_items_padding_unit', 'px' );

		$menu_link_color 											= get_theme_mod( 'ocean_menu_link_color', '#555555' );
		$menu_link_color_hover 										= get_theme_mod( 'ocean_menu_link_color_hover', '#13aff0' );
		$menu_link_color_active 									= get_theme_mod( 'ocean_menu_link_color_active', '#555555' );
		$menu_link_background 										= get_theme_mod( 'ocean_menu_link_background' );
		$menu_link_hover_background 								= get_theme_mod( 'ocean_menu_link_hover_background' );
		$menu_link_active_background 								= get_theme_mod( 'ocean_menu_link_active_background' );

		$dropdown_width 											= get_theme_mod( 'ocean_dropdown_width', 180 );
		$dropdown_width_unit 										= get_theme_mod( 'ocean_dropdown_width_unit', 'px' );

		$dropdown_category_title_bg 								= get_theme_mod( 'ocean_dropdown_category_title_bg', '#f8f8f8' );
		$dropdown_category_title_color 								= get_theme_mod( 'ocean_dropdown_category_title_color', '#222222' );
		$dropdown_category_links_color 								= get_theme_mod( 'ocean_dropdown_category_links_color', '#555555' );
		$dropdown_category_links_hover_color 						= get_theme_mod( 'ocean_dropdown_category_links_hover_color', '#333333' );
		$dropdown_category_date_color 								= get_theme_mod( 'ocean_dropdown_category_date_color', '#bbbbbb' );
		$dropdown_menu_background 									= get_theme_mod( 'ocean_dropdown_menu_background', '#ffffff' );
		$dropdown_menu_top_border 									= get_theme_mod( 'ocean_dropdown_menu_top_border', '#13aff0' );
		$dropdown_menu_borders 										= get_theme_mod( 'ocean_dropdown_menu_borders', '#f1f1f1' );
		$dropdown_menu_link_color 									= get_theme_mod( 'ocean_dropdown_menu_link_color', '#333333' );
		$dropdown_menu_link_color_hover 							= get_theme_mod( 'ocean_dropdown_menu_link_color_hover', '#555555' );
		$dropdown_menu_link_hover_bg 								= get_theme_mod( 'ocean_dropdown_menu_link_hover_bg', '#f8f8f8' );
		$dropdown_menu_link_color_active 							= get_theme_mod( 'ocean_dropdown_menu_link_color_active' );
		$dropdown_menu_link_bg_active 								= get_theme_mod( 'ocean_dropdown_menu_link_bg_active' );

		$search_dropdown_input_bg 									= get_theme_mod( 'ocean_search_dropdown_input_background' );
		$search_dropdown_input_color 								= get_theme_mod( 'ocean_search_dropdown_input_color', '#333333' );
		$search_dropdown_input_border 								= get_theme_mod( 'ocean_search_dropdown_input_border', '#dddddd' );
		$search_dropdown_input_border_focus 						= get_theme_mod( 'ocean_search_dropdown_input_border_focus', '#bbbbbb' );
		$search_overlay_bg 											= get_theme_mod( 'ocean_search_overlay_bg', 'rgba(0,0,0,0.9)' );
		$search_overlay_input_color 								= get_theme_mod( 'ocean_search_overlay_input_color', '#ffffff' );
		$search_overlay_placeholder_color 							= get_theme_mod( 'ocean_search_overlay_placeholder_color', '#ffffff' );
		$search_overlay_input_dashed_bg 							= get_theme_mod( 'ocean_search_overlay_input_dashed_bg', '#ffffff' );
		$search_overlay_input_border 								= get_theme_mod( 'ocean_search_overlay_input_border_color', '#444444' );
		$search_overlay_input_border_hover 							= get_theme_mod( 'ocean_search_overlay_input_hover_border_color', '#777777' );
		$search_overlay_input_border_focus 							= get_theme_mod( 'ocean_search_overlay_input_focus_border_color', '#ffffff' );
		$search_overlay_close_button_color 							= get_theme_mod( 'ocean_search_overlay_close_button_color', '#ffffff' );

		$menu_social_font_size 										= get_theme_mod( 'ocean_menu_social_font_size' );
		$menu_social_tablet_font_size 								= get_theme_mod( 'ocean_menu_social_tablet_font_size' );
		$menu_social_mobile_font_size 								= get_theme_mod( 'ocean_menu_social_mobile_font_size' );
		$menu_social_font_size_unit 								= get_theme_mod( 'ocean_menu_social_font_size_unit', 'px' );
		$menu_social_border_radius 									= get_theme_mod( 'ocean_menu_social_border_radius' );

		$menu_social_right_margin 									= get_theme_mod( 'ocean_menu_social_right_margin' );
		$menu_social_left_margin 									= get_theme_mod( 'ocean_menu_social_left_margin' );
		$menu_social_tablet_right_margin 							= get_theme_mod( 'ocean_menu_social_tablet_right_margin' );
		$menu_social_tablet_left_margin 							= get_theme_mod( 'ocean_menu_social_tablet_left_margin' );
		$menu_social_mobile_right_margin 							= get_theme_mod( 'ocean_menu_social_mobile_right_margin' );
		$menu_social_mobile_left_margin 							= get_theme_mod( 'ocean_menu_social_mobile_left_margin' );

		$menu_social_top_padding 									= get_theme_mod( 'ocean_menu_social_top_padding' );
		$menu_social_right_padding 									= get_theme_mod( 'ocean_menu_social_right_padding' );
		$menu_social_bottom_padding 								= get_theme_mod( 'ocean_menu_social_bottom_padding' );
		$menu_social_left_padding 									= get_theme_mod( 'ocean_menu_social_left_padding' );
		$menu_social_tablet_top_padding 							= get_theme_mod( 'ocean_menu_social_tablet_top_padding' );
		$menu_social_tablet_right_padding 							= get_theme_mod( 'ocean_menu_social_tablet_right_padding' );
		$menu_social_tablet_bottom_padding 							= get_theme_mod( 'ocean_menu_social_tablet_bottom_padding' );
		$menu_social_tablet_left_padding 							= get_theme_mod( 'ocean_menu_social_tablet_left_padding' );
		$menu_social_mobile_top_padding 							= get_theme_mod( 'ocean_menu_social_mobile_top_padding' );
		$menu_social_mobile_right_padding 							= get_theme_mod( 'ocean_menu_social_mobile_right_padding' );
		$menu_social_mobile_bottom_padding 							= get_theme_mod( 'ocean_menu_social_mobile_bottom_padding' );
		$menu_social_mobile_left_padding 							= get_theme_mod( 'ocean_menu_social_mobile_left_padding' );

		$menu_social_links_bg 										= get_theme_mod( 'ocean_menu_social_links_bg' );
		$menu_social_hover_links_bg 								= get_theme_mod( 'ocean_menu_social_hover_links_bg' );
		$menu_social_links_color 									= get_theme_mod( 'ocean_menu_social_links_color' );
		$menu_social_hover_links_color 								= get_theme_mod( 'ocean_menu_social_hover_links_color' );


		$mobile_menu_breakpoint 									= get_theme_mod( 'ocean_mobile_menu_breakpoints', '959' );
		$mobile_menu_custom_breakpoint 								= get_theme_mod( 'ocean_mobile_menu_custom_breakpoint' );
		$mobile_header_height 										= get_theme_mod( 'ocean_mobile_header_height' );
		$responsive_logo_height 									= get_theme_mod( 'ocean_responsive_logo_height' );
		$dropdown_mobile_menu_max_height 							= get_theme_mod( 'ocean_dropdown_mobile_menu_max_height', 400 );
		$mobile_menu_open_hamburger_color 							= get_theme_mod( 'ocean_mobile_menu_open_hamburger_color', '#000000' );
		$mobile_menu_sidr_close_button_bg 							= get_theme_mod( 'ocean_mobile_menu_sidr_close_button_background', '#f8f8f8' );
		$mobile_menu_sidr_background 								= get_theme_mod( 'ocean_mobile_menu_sidr_background', '#ffffff' );
		$full_screen_mobile_menu_bg 								= get_theme_mod( 'ocean_full_screen_mobile_menu_bg', 'rgba(0,0,0,0.9)' );
		$full_screen_mobile_menu_links_bg 							= get_theme_mod( 'ocean_full_screen_mobile_menu_links_bg' );
		$full_screen_mobile_menu_links_hover_bg 					= get_theme_mod( 'ocean_full_screen_mobile_menu_links_hover_bg' );
		$mobile_menu_sidr_borders 									= get_theme_mod( 'ocean_mobile_menu_sidr_borders', 'rgba(0,0,0,0.035)' );
		$mobile_menu_links 											= get_theme_mod( 'ocean_mobile_menu_links', '#555555' );
		$mobile_menu_links_hover 									= get_theme_mod( 'ocean_mobile_menu_links_hover', '#13aff0' );
		$mobile_menu_sidr_dropdowns_bg 								= get_theme_mod( 'ocean_mobile_menu_sidr_dropdowns_background', 'rgba(0,0,0,0.02)' );
		$mobile_menu_sidr_search_bg 								= get_theme_mod( 'ocean_mobile_menu_sidr_search_bg' );
		$mobile_menu_sidr_search_color 								= get_theme_mod( 'ocean_mobile_menu_sidr_search_color', '#333333' );
		$mobile_menu_sidr_search_border_color 						= get_theme_mod( 'ocean_mobile_menu_sidr_search_border_color', '#dddddd' );
		$mobile_menu_sidr_search_border_color_focus 				= get_theme_mod( 'ocean_mobile_menu_sidr_search_border_color_focus', '#bbbbbb' );
		$full_screen_mobile_menu_search_border_color_hover 			= get_theme_mod( 'ocean_full_screen_mobile_menu_search_border_color_hover', '#ffffff' );
		$mobile_menu_sidr_search_button_color 						= get_theme_mod( 'ocean_mobile_menu_sidr_search_button_color', '#555555' );
		$mobile_menu_sidr_search_button_hover_color 				= get_theme_mod( 'ocean_mobile_menu_sidr_search_button_hover_color', '#222222' );

		// Filters to altering settings via the metabox.
		$logo_max_width 											= apply_filters( 'ocean_logo_max_width', $logo_max_width );
		$logo_max_width_tablet 										= apply_filters( 'ocean_logo_max_width_tablet', $logo_max_width_tablet );
		$logo_max_width_mobile 										= apply_filters( 'ocean_logo_max_width_mobile', $logo_max_width_mobile );
		$logo_max_height 											= apply_filters( 'ocean_logo_max_height', $logo_max_height );
		$logo_max_height_tablet 									= apply_filters( 'ocean_logo_max_height_tablet', $logo_max_height_tablet );
		$logo_max_height_mobile 									= apply_filters( 'ocean_logo_max_height_mobile', $logo_max_height_mobile );
		$menu_link_color 											= apply_filters( 'ocean_menu_link_color', $menu_link_color );
		$menu_link_color_hover 										= apply_filters( 'ocean_menu_link_color_hover', $menu_link_color_hover );
		$menu_link_color_active 									= apply_filters( 'ocean_menu_link_color_active', $menu_link_color_active );
		$menu_link_background 										= apply_filters( 'ocean_menu_link_background', $menu_link_background );
		$menu_link_hover_background 								= apply_filters( 'ocean_menu_link_hover_background', $menu_link_hover_background );
		$menu_link_active_background 								= apply_filters( 'ocean_menu_link_active_background', $menu_link_active_background );
		$menu_social_links_bg 										= apply_filters( 'ocean_menu_social_links_bg', $menu_social_links_bg );
		$menu_social_hover_links_bg 								= apply_filters( 'ocean_menu_social_hover_links_bg', $menu_social_hover_links_bg );
		$menu_social_links_color 									= apply_filters( 'ocean_menu_social_links_color', $menu_social_links_color );
		$menu_social_hover_links_color 								= apply_filters( 'ocean_menu_social_hover_links_color', $menu_social_hover_links_color );

		$css = '';

		// Add mobile header height
		if ( ( 'top' != $header_style && 'medium' != $header_style ) && ! empty( $mobile_header_height ) ) {
			if ( 'custom' != $header_style ) {
				$css .= '@media only screen and (max-width: 959px) {body.default-breakpoint #site-logo #site-logo-inner{height:'. $mobile_header_height .'px;}}';
			}
			$css .= '@media only screen and (max-width: 959px) {body.default-breakpoint .oceanwp-mobile-menu-icon a,.mobile-menu-close{line-height:'. $mobile_header_height .'px;}}';
		}

		// Header height.
		if ( ( 'top' !== $header_style && 'medium' !== $header_style ) && ! empty( $header_height ) && 74 !== $header_height ) {
			if ( 'custom' !== $header_style ) {
				$css .= '#site-logo #site-logo-inner,.oceanwp-social-menu .social-menu-inner,#site-header.full_screen-header .menu-bar-inner,.after-header-content .after-header-content-inner{height:'. $header_height . $header_height_unit . ';}';
			}
			$css .= '#site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a,.mobile-menu-close,.after-header-content-inner > a{line-height:'. $header_height . $header_height_unit . ';}';
		}

		if ( false === ( 'medium' === $header_style || 'vertical' === $header_style ) ) {

			// Header padding
			if ( isset( $header_top_padding ) && 0 != $header_top_padding && '' != $header_top_padding
				|| isset( $header_right_padding ) && 0 != $header_right_padding && '' != $header_right_padding
				|| isset( $header_bottom_padding ) && 0 != $header_bottom_padding && '' != $header_bottom_padding
				|| isset( $header_left_padding ) && 0 != $header_left_padding && '' != $header_left_padding ) {
				$css .= '#site-header-inner{padding:'. oceanwp_spacing_css( $header_top_padding, $header_right_padding, $header_bottom_padding, $header_left_padding ) .'}';
			}

			// Tablet header padding
			if ( isset( $tablet_header_top_padding ) && '' != $tablet_header_top_padding
				|| isset( $tablet_header_right_padding ) && '' != $tablet_header_right_padding
				|| isset( $tablet_header_bottom_padding ) && '' != $tablet_header_bottom_padding
				|| isset( $tablet_header_left_padding ) && '' != $tablet_header_left_padding ) {
				$css .= '@media (max-width: 768px){#site-header-inner{padding:'. oceanwp_spacing_css( $tablet_header_top_padding, $tablet_header_right_padding, $tablet_header_bottom_padding, $tablet_header_left_padding ) .'}}';
			}

			// Mobile header padding
			if ( isset( $mobile_header_top_padding ) && '' != $mobile_header_top_padding
				|| isset( $mobile_header_right_padding ) && '' != $mobile_header_right_padding
				|| isset( $mobile_header_bottom_padding ) && '' != $mobile_header_bottom_padding
				|| isset( $mobile_header_left_padding ) && '' != $mobile_header_left_padding ) {
				$css .= '@media (max-width: 480px){#site-header-inner{padding:'. oceanwp_spacing_css( $mobile_header_top_padding, $mobile_header_right_padding, $mobile_header_bottom_padding, $mobile_header_left_padding ) .'}}';
			}

		}

		// Full Screen header style
		if ( 'full_screen' == $header_style ) {

			if ( ! empty( $full_screen_header_menu_hamburger_icon_width ) && '23' != $full_screen_header_menu_hamburger_icon_width ) {
				$css .= '#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after{width:'. $full_screen_header_menu_hamburger_icon_width .'px;}';
			}
			if ( ! empty( $full_screen_header_menu_hamburger_icon_height ) && '2' != $full_screen_header_menu_hamburger_icon_height ) {
				$css .= '#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after{height:'. $full_screen_header_menu_hamburger_icon_height .'px;}';
			}

			if ( ! empty( $full_screen_header_menu_hamburger_icon_gap ) && '8' != $full_screen_header_menu_hamburger_icon_gap ) {
				$css .= '#site-header.full_screen-header .menu-bar .ham:before{top: -'. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_gap_unit . ';}';
				$css .= '#site-header.full_screen-header .menu-bar .ham:after{top: '. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_gap_unit . ';}';
				$css .= '#site-header.full_screen-header .menu-bar.exit .ham:before{transform: translateY('. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_gap_unit . ') rotateZ(-45deg);}';
				$css .= '#site-header.full_screen-header .menu-bar.exit .ham:after{transform: translateY(-'. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_gap_unit . ') rotateZ(45deg);}';
			}

			// Menu bar color
			if ( ! empty( $full_screen_header_menu_bar_color ) && '#333333' != $full_screen_header_menu_bar_color ) {
				$css .= '#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after{background-color:'. $full_screen_header_menu_bar_color .';}';
			}

			// Menu bar close color
			if ( ! empty( $full_screen_header_menu_bar_close_color ) && '#ffffff' != $full_screen_header_menu_bar_close_color ) {
				$css .= '#site-header.full_screen-header .menu-bar.exit .ham:before,#site-header.full_screen-header .menu-bar.exit .ham:after{background-color:'. $full_screen_header_menu_bar_close_color .';}';
			}

			// Background color
			if ( ! empty( $full_screen_header_bg ) && 'rgba(0,0,0,0.9)' != $full_screen_header_bg ) {
				$css .= '#site-header.full_screen-header #full-screen-menu{background-color:'. $full_screen_header_bg .';}';
			}

			//Links background color
			if ( ! empty( $full_screen_header_links_bg_color ) ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu li a{background-color:'. $full_screen_header_links_bg_color .';}';
			}

			// Links hover background color
			if ( ! empty( $full_screen_header_links_hover_bg_color ) ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu li a:hover{background-color:'. $full_screen_header_links_hover_bg_color .';}';
			}

			// Links color
			if ( ! empty( $full_screen_header_links_color ) && '#ffffff' != $full_screen_header_links_color ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu li a{color:'. $full_screen_header_links_color .';}';
			}

			// Links hover color
			if ( ! empty( $full_screen_header_links_hover_color ) && '#929292' != $full_screen_header_links_hover_color ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu li a:hover{color:'. $full_screen_header_links_hover_color .';}';
			}

			// Search color
			if ( ! empty( $full_screen_header_search_color ) && '#ffffff' != $full_screen_header_search_color ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input,#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li .search-text{color:'. $full_screen_header_search_color .';}';
			}

			// Search dashed background color
			if ( ! empty( $full_screen_header_search_dashed_bg ) && '#ffffff' != $full_screen_header_search_dashed_bg ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li .search-text i{background-color:'. $full_screen_header_search_dashed_bg .';}';
			}

			// Search border color
			if ( ! empty( $full_screen_header_search_border_color ) && '#666666' != $full_screen_header_search_border_color ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input{border-color:'. $full_screen_header_search_border_color .';}';
			}

			// Search hover border color
			if ( ! empty( $full_screen_header_search_hover_border_color ) && '#ffffff' != $full_screen_header_search_hover_border_color ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input:hover{border-color:'. $full_screen_header_search_hover_border_color .';}';
			}

			// Search focus border color
			if ( ! empty( $full_screen_header_search_focus_border_color ) && '#ffffff' != $full_screen_header_search_focus_border_color ) {
				$css .= '#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input:focus{border-color:'. $full_screen_header_search_focus_border_color .';}';
			}
		}

		// Medium header style
		if ( 'medium' == $header_style ) {

			// Top header padding
			if ( isset( $medium_header_top_header_top_padding ) && 30 != $medium_header_top_header_top_padding && '' != $medium_header_top_header_top_padding
				|| isset( $medium_header_top_header_bottom_padding ) && 30 != $medium_header_top_header_bottom_padding &&  '' != $medium_header_top_header_bottom_padding
				|| isset( $medium_header_top_header_right_padding ) && '' != $medium_header_top_header_right_padding
				|| isset( $medium_header_top_header_left_padding ) && '' != $medium_header_top_header_left_padding ) {
				$css .= '#site-header.medium-header .top-header-wrap{padding:'. oceanwp_spacing_css( $medium_header_top_header_top_padding, $medium_header_top_header_right_padding, $medium_header_top_header_bottom_padding, $medium_header_top_header_left_padding ) .'}';
			}

			if ( isset( $medium_header_top_header_tablet_top_padding ) && '' != $medium_header_top_header_tablet_top_padding
				|| isset( $medium_header_top_header_tablet_bottom_padding ) && '' != $medium_header_top_header_tablet_bottom_padding
				|| isset( $medium_header_top_header_tablet_right_padding ) && '' != $medium_header_top_header_tablet_right_padding
				|| isset( $medium_header_top_header_tablet_left_padding ) && '' != $medium_header_top_header_tablet_left_padding ) {
				$css .= '@media (max-width: 768px){#site-header.medium-header .top-header-wrap{padding:'. oceanwp_spacing_css( $medium_header_top_header_tablet_top_padding, $medium_header_top_header_tablet_right_padding, $medium_header_top_header_tablet_bottom_padding, $medium_header_top_header_tablet_left_padding ) .'}}';
			}

			if ( isset( $medium_header_top_header_mobile_top_padding ) && '' != $medium_header_top_header_mobile_top_padding
				|| isset( $medium_header_top_header_mobile_bottom_padding ) && '' != $medium_header_top_header_mobile_bottom_padding
				|| isset( $medium_header_top_header_mobile_right_padding ) && '' != $medium_header_top_header_mobile_right_padding
				|| isset( $medium_header_top_header_mobile_left_padding ) && '' != $medium_header_top_header_mobile_left_padding ) {
				$css .= '@media (max-width: 480px){#site-header.medium-header .top-header-wrap{padding:'. oceanwp_spacing_css( $medium_header_top_header_mobile_top_padding, $medium_header_top_header_mobile_right_padding, $medium_header_top_header_mobile_bottom_padding, $medium_header_top_header_mobile_left_padding ) .'}}';
			}

			// Add height menu for medium header style
			if ( ! empty( $medium_header_menu_height ) && 60 != $medium_header_menu_height ) {
				$css .= '#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header .oceanwp-mobile-menu-icon a{line-height:'. $medium_header_menu_height . $medium_header_menu_height_unit . ';}';
			}

			// Header padding
			if ( isset( $medium_header_menu_items_right_padding ) && 22 != $medium_header_menu_items_right_padding && '' != $medium_header_menu_items_right_padding
				|| isset( $medium_header_menu_items_left_padding ) && 22 != $medium_header_menu_items_left_padding && '' != $medium_header_menu_items_left_padding ) {
				$css .= '#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a{padding:'. oceanwp_spacing_css( '', $medium_header_menu_items_right_padding, '', $medium_header_menu_items_left_padding ) .'}';
			}

			// Tablet header padding
			if ( isset( $medium_header_menu_items_tablet_right_padding ) && '' != $medium_header_menu_items_tablet_right_padding
				|| isset( $medium_header_menu_items_tablet_left_padding ) && '' != $medium_header_menu_items_tablet_left_padding ) {
				$css .= '@media (max-width: 768px){#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header .oceanwp-mobile-menu-icon a{padding:'. oceanwp_spacing_css( '', $medium_header_menu_items_tablet_right_padding, '', $medium_header_menu_items_tablet_left_padding ) .'}}';
			}

			// Mobile header padding
			if ( isset( $medium_header_menu_items_mobile_right_padding ) && '' != $medium_header_menu_items_mobile_right_padding
				|| isset( $medium_header_menu_items_mobile_left_padding ) && '' != $medium_header_menu_items_mobile_left_padding ) {
				$css .= '@media (max-width: 480px){#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header .oceanwp-mobile-menu-icon a{padding:'. oceanwp_spacing_css( '', $medium_header_menu_items_mobile_right_padding, '', $medium_header_menu_items_mobile_left_padding ) .'}}';
			}

			// Add top header background for medium header style
			if ( ! empty( $medium_header_top_header_bg ) && '#ffffff' != $medium_header_top_header_bg ) {
				$css .= '#site-header.medium-header .top-header-wrap,.is-sticky #site-header.medium-header.is-transparent .top-header-wrap,#searchform-header-replace{background-color:'. $medium_header_top_header_bg .';}';
			}

			// Add menu background for medium header style
			if ( ! empty( $medium_header_menu_bg ) && '#f9f9f9' != $medium_header_menu_bg ) {
				$css .= '#site-header.medium-header #site-navigation-wrap,#site-header.medium-header .oceanwp-mobile-menu-icon,.is-sticky #site-header.medium-header.is-transparent #site-navigation-wrap,.is-sticky #site-header.medium-header.is-transparent .oceanwp-mobile-menu-icon,#site-header.medium-header.is-transparent .is-sticky #site-navigation-wrap,#site-header.medium-header.is-transparent .is-sticky .oceanwp-mobile-menu-icon{background-color:'. $medium_header_menu_bg .';}';
			}

			// Add search background for medium header style
			if ( ! empty( $medium_header_search_bg ) && '#f5f5f5' != $medium_header_search_bg ) {
				$css .= '#site-header.medium-header #medium-searchform .search-bg{background-color:'. $medium_header_search_bg .';}';
			}

			// Add search color for medium header style
			if ( ! empty( $medium_header_search_color ) && '#333333' != $medium_header_search_color ) {
				$css .= '#site-header.medium-header #medium-searchform input{color:'. $medium_header_search_color .';}';
			}

			// Add search label color for medium header style
			if ( ! empty( $medium_header_search_placeholder_color ) && '#333333' != $medium_header_search_placeholder_color ) {
				$css .= '#site-header.medium-header #medium-searchform label{color:'. $medium_header_search_placeholder_color .';}';
			}

			// Add search button color for medium header style
			if ( ! empty( $medium_header_search_button_color ) && '#333333' != $medium_header_search_button_color ) {
				$css .= '#site-header.medium-header #medium-searchform button{color:'. $medium_header_search_button_color .';}';
			}

			// Add search button hover color for medium header style
			if ( ! empty( $medium_header_search_button_hover_color ) && '#13aff0' != $medium_header_search_button_hover_color ) {
				$css .= '#site-header.medium-header #medium-searchform button:hover{color:'. $medium_header_search_button_hover_color .';}';
			}

		}

		if ( 'vertical' == $header_style ) {

			// Collapse width
			if ( ! empty( $vertical_header_collapse_width ) && 1280 != $vertical_header_collapse_width ) {
				$css .= '@media only screen and (max-width: '. $vertical_header_collapse_width .'px) {
					body.vertical-header-style.left-header #site-header.vertical-header {left: -266px;}
					body.vertical-header-style.left-header #outer-wrap {margin-left: 34px;}
					body.vertical-header-style.right-header #site-header.vertical-header {right: -266px;}
					body.vertical-header-style.right-header #outer-wrap {margin-right: 34px;}
					body.vertical-header-style.vh-opened.left-header #site-header.vertical-header {left: 0;}
					body.vertical-header-style.vh-opened.right-header #site-header.vertical-header {right: 0;}
					body.vertical-header-style.vh-opened #site-header.vertical-header #site-navigation-wrap {padding-right: 0;}
					#site-header.vertical-header .vertical-toggle { display: block; }
					#site-header.vertical-header #site-navigation-wrap { padding-right: 34px; }
				}';
			}

			// Width
			if ( ! empty( $vertical_header_width ) && 300 != $vertical_header_width ) {
				$css .= '#site-header.vertical-header{width:'. $vertical_header_width .'px;}';

				// Wrap margin if left header
				if ( ! empty( $vertical_header_width ) && '300' != $vertical_header_width && 'left-header' == get_theme_mod( 'ocean_vertical_header_position', 'left-header' ) ) {
					$css .= 'body.vertical-header-style.left-header #outer-wrap {margin-left:'. $vertical_header_width .'px;}';
				}

				// Wrap margin if right header
				if ( ! empty( $vertical_header_width ) && '300' != $vertical_header_width && 'right-header' == get_theme_mod( 'ocean_vertical_header_position', 'left-header' ) ) {
					$css .= 'body.vertical-header-style.right-header #outer-wrap {margin-right:'. $vertical_header_width .'px;}';
				}

				// If closed header
				$css .= '
					body.vertical-header-style.vh-closed.left-header #site-header.vertical-header {left: -'. $vertical_header_width .'px;}
					body.vertical-header-style.vh-closed.left-header #outer-wrap {margin-left: 34px;}
					body.vertical-header-style.vh-closed.right-header #site-header.vertical-header {right: -'. $vertical_header_width .'px;}
					body.vertical-header-style.vh-closed.right-header #outer-wrap {margin-right: 34px;}';

				// For small screens
				$vh_width_minus = $vertical_header_width - 34;
				$media_width = 1280;
				if ( ! empty( $vertical_header_collapse_width ) ) {
					$media_width = $vertical_header_collapse_width;
				}
				$css .= '@media only screen and (max-width: '. $media_width .'px) {
					body.vertical-header-style.left-header #site-header.vertical-header {left: -'. $vh_width_minus .'px;}
					body.vertical-header-style.left-header #outer-wrap {margin-left: 34px;}
					body.vertical-header-style.right-header #site-header.vertical-header {right: -'. $vh_width_minus .'px;}
					body.vertical-header-style.right-header #outer-wrap {margin-right: 34px;}
				}';
			}

			// Vertical header top/bottom padding
			if ( isset( $vertical_header_inner_top_padding ) && 30 != $vertical_header_inner_top_padding && '' != $vertical_header_inner_top_padding
				|| isset( $vertical_header_inner_bottom_padding ) && 30 != $vertical_header_inner_bottom_padding && '' != $vertical_header_inner_bottom_padding ) {
				$css .= '#site-header.vertical-header #site-header-inner{padding:'. oceanwp_spacing_css( $vertical_header_inner_top_padding, '', $vertical_header_inner_bottom_padding, '' ) .'}';
			}

			// Vertical header left/right padding
			if ( isset( $vertical_header_inner_right_padding ) && 30 != $vertical_header_inner_right_padding && '' != $vertical_header_inner_right_padding
				|| isset( $vertical_header_inner_left_padding ) && 30 != $vertical_header_inner_left_padding && '' != $vertical_header_inner_left_padding ) {
				$css .= '#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a{padding:'. oceanwp_spacing_css( '', $vertical_header_inner_right_padding, '', $vertical_header_inner_left_padding ) .'}';
			}

			// Tablet vertical header padding
			if ( isset( $tablet_vertical_header_inner_top_padding ) && '' != $tablet_vertical_header_inner_top_padding
				|| isset( $tablet_vertical_header_inner_right_padding ) && '' != $tablet_vertical_header_inner_right_padding
				|| isset( $tablet_vertical_header_inner_bottom_padding ) && '' != $tablet_vertical_header_inner_bottom_padding
				|| isset( $tablet_vertical_header_inner_left_padding ) && '' != $tablet_vertical_header_inner_left_padding ) {
				$css .= '@media (max-width: 768px){#site-header-inner{padding:'. oceanwp_spacing_css( $tablet_vertical_header_inner_top_padding, $tablet_vertical_header_inner_right_padding, $tablet_vertical_header_inner_bottom_padding, $tablet_vertical_header_inner_left_padding ) .'}}';
			}

			// Mobile vertical header padding
			if ( isset( $mobile_vertical_header_inner_top_padding ) && '' != $mobile_vertical_header_inner_top_padding
				|| isset( $mobile_vertical_header_inner_right_padding ) && '' != $mobile_vertical_header_inner_right_padding
				|| isset( $mobile_vertical_header_inner_bottom_padding ) && '' != $mobile_vertical_header_inner_bottom_padding
				|| isset( $mobile_vertical_header_inner_left_padding ) && '' != $mobile_vertical_header_inner_left_padding ) {
				$css .= '@media (max-width: 480px){#site-header-inner{padding:'. oceanwp_spacing_css( $mobile_vertical_header_inner_top_padding, $mobile_vertical_header_inner_right_padding, $mobile_vertical_header_inner_bottom_padding, $mobile_vertical_header_inner_left_padding ) .'}}';
			}

			// Menu items padding
			if ( ! empty( $vertical_header_menu_items_padding ) && 17 != $vertical_header_menu_items_padding ) {
				$css .= '#site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a{padding-top:'. $vertical_header_menu_items_padding .'px; padding-bottom:'. $vertical_header_menu_items_padding .'px;}';
			}

			// Search top border width
			if ( ! empty( $vertical_header_search_border_width ) ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input{border-width:'. $vertical_header_search_border_width . $vertical_header_search_border_width_unit . ';}';
			}

			// Search border radius
			if ( ! empty( $vertical_header_search_border_radius ) ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input, #site-header.vertical-header #vertical-searchform form .search-bg{border-radius:'. $vertical_header_search_border_radius . $vertical_header_search_border_radius_unit . ';}';
			}

			// Menu items border color
			if ( ! empty( $vertical_header_menu_items_border_color ) && 'rgba(0,0,0,0.05)' != $vertical_header_menu_items_border_color ) {
				$css .= '#site-header.vertical-header #site-navigation-wrap .dropdown-menu li, #site-header.vertical-header #site-navigation-wrap .dropdown-menu .sub-menu{border-color:'. $vertical_header_menu_items_border_color .';}';
			}

			// Sub menu background color
			if ( ! empty( $vertical_header_sub_menu_bg ) && 'rgba(0,0,0,0.03)' != $vertical_header_sub_menu_bg ) {
				$css .= '#site-header.vertical-header #site-navigation-wrap .dropdown-menu .sub-menu{background-color:'. $vertical_header_sub_menu_bg .';}';
			}

			// Sub menu links color
			if ( ! empty( $vertical_header_sub_menu_sub_menu_links_color ) && '#333333' != $vertical_header_sub_menu_sub_menu_links_color ) {
				$css .= '#site-header.vertical-header .dropdown-menu ul li a.menu-link{color:'. $vertical_header_sub_menu_sub_menu_links_color .';}';
			}

			// Sub menu links hover color
			if ( ! empty( $vertical_header_sub_menu_links_hover_color ) && '#555555' != $vertical_header_sub_menu_links_hover_color ) {
				$css .= '#site-header.vertical-header .dropdown-menu ul li a.menu-link:hover{color:'. $vertical_header_sub_menu_links_hover_color .';}';
			}

			// Sub menu links background color
			if ( ! empty( $vertical_header_sub_menu_links_bg ) ) {
				$css .= '#site-header.vertical-header .dropdown-menu ul li a.menu-link{background-color:'. $vertical_header_sub_menu_links_bg .';}';
			}

			// Sub menu links hover background color
			if ( ! empty( $vertical_header_sub_menu_links_hover_bg ) && '#f8f8f8' != $vertical_header_sub_menu_links_hover_bg ) {
				$css .= '#site-header.vertical-header .dropdown-menu ul li a.menu-link:hover{background-color:'. $vertical_header_sub_menu_links_hover_bg .';}';
			}

			// Search top border width
			if ( ! empty( $vertical_header_search_border_width ) ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input{border-width:'. $vertical_header_search_border_width .';}';
			}

			// Search border radius
			if ( ! empty( $vertical_header_search_border_radius ) ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input, #site-header.vertical-header #vertical-searchform form .search-bg{border-radius:'. $vertical_header_search_border_radius .';}';
			}

			// Search Background Color
			if ( ! empty( $vertical_header_search_bg ) && 'rgba(0,0,0,0.03)' != $vertical_header_search_bg ) {
				$css .= '#site-header.vertical-header #vertical-searchform form .search-bg{background-color:'. $vertical_header_search_bg .';}';
			}

			// Search Color
			if ( ! empty( $vertical_header_search_color ) && '#333333' != $vertical_header_search_color ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input, #site-header.vertical-header #vertical-searchform form label{color:'. $vertical_header_search_color .';}';
			}

			// Search border Color
			if ( ! empty( $vertical_header_search_border_color ) && 'rgba(0,0,0,0.04)' != $vertical_header_search_border_color ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input{border-color:'. $vertical_header_search_border_color .';}';
			}

			// Search hover border Color
			if ( ! empty( $vertical_header_search_hover_border_color ) ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input:hover{border-color:'. $vertical_header_search_hover_border_color .';}';
			}

			// Search focus border Color
			if ( ! empty( $vertical_header_search_focus_border_color ) ) {
				$css .= '#site-header.vertical-header #vertical-searchform form input:focus{border-color:'. $vertical_header_search_focus_border_color .';}';
			}

			// Search Button Color
			if ( ! empty( $vertical_header_search_btn_color ) && '#777777' != $vertical_header_search_btn_color ) {
				$css .= '#site-header.vertical-header #vertical-searchform form button{color:'. $vertical_header_search_btn_color .';}';
			}

			// Search Button Hover Color
			if ( ! empty( $vertical_header_search_btn_hover_color ) && '#333333' != $vertical_header_search_btn_hover_color ) {
				$css .= '#site-header.vertical-header #vertical-searchform form button:hover{color:'. $vertical_header_search_btn_hover_color .';}';
			}

			// Custom hamburger button color
			if ( ! empty( $vertical_header_hamburger_color ) && '#000000' != $vertical_header_hamburger_color ) {
				$css .= '.vertical-toggle .hamburger-inner, .vertical-toggle .hamburger-inner::before, .vertical-toggle .hamburger-inner::after{background-color:'. $vertical_header_hamburger_color .';}';
			}

		}

		// Top menu header style
		if ( 'top' == $header_style ) {

			// Menu background color
			if ( ! empty( $top_header_menu_background ) && '#ffffff' != $top_header_menu_background ) {
				$css .= '#site-header.top-header .header-top,#site-header.top-header #searchform-header-replace{background-color:'. $top_header_menu_background .';}';
			}

			// Search button border color
			if ( ! empty( $top_header_search_button_border_color ) && '#f1f1f1' != $top_header_search_button_border_color ) {
				$css .= '#site-header.top-header #search-toggle{border-color:'. $top_header_search_button_border_color .';}';
			}

			// Search button color
			if ( ! empty( $top_header_search_button_color ) && '#333333' != $top_header_search_button_color ) {
				$css .= '#site-header.top-header #search-toggle a{color:'. $top_header_search_button_color .';}';
			}

			// Search button hover color
			if ( ! empty( $top_header_search_button_hover_color ) && '#13aff0' != $top_header_search_button_hover_color ) {
				$css .= '#site-header.top-header #search-toggle a:hover{color:'. $top_header_search_button_hover_color .';}';
			}

		}

		// Header background color
		if ( 'medium' != $header_style && ! empty( $header_background ) && '#ffffff' != $header_background ) {
			$css .= '#site-header,.has-transparent-header .is-sticky #site-header,.has-vh-transparent .is-sticky #site-header.vertical-header,#searchform-header-replace{background-color:'. $header_background .';}';
		}

		// Header media overlay color
		if ( ! empty( $header_image_overlay_color ) && 'rgba(0,0,0,0.3)' != $header_image_overlay_color ) {
			$css .= '#site-header.has-header-media .overlay-header-media{background-color:'. $header_image_overlay_color .';}';
		}

		// Header border color
		if ( ! empty( $header_border_bottom ) && '#f1f1f1' != $header_border_bottom ) {
			$css .= '#site-header{border-color:'. $header_border_bottom .';}';
		}

		// Transparent header background color
		if ( 'transparent' == $header_style && ! empty( $transparent_header_bg ) ) {
			$css .= '#site-header.transparent-header{background-color:'. $transparent_header_bg .';}';
		}

		// Header logo max width
		if ( ! empty( $logo_max_width ) ) {
			$css .= '#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img{max-width:'. $logo_max_width . $logo_max_width_unit . ';}';
		}

		// Header logo max width tablet
		if ( ! empty( $logo_max_width_tablet ) ) {
			$css .= '@media (max-width: 768px){#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img{max-width:'. $logo_max_width_tablet . $logo_max_width_unit . ';}}';
		}

		// Header logo max width mobile
		if ( ! empty( $logo_max_width_mobile ) ) {
			$css .= '@media (max-width: 480px){#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img{max-width:'. $logo_max_width_mobile . $logo_max_width_unit . ';}}';
		}

		// Header logo max height
		if ( ! empty( $logo_max_height ) ) {
			$css .= '#site-header #site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img{max-height:'. $logo_max_height . $logo_max_height_unit . ';}';
		}

		// Header logo max height tablet
		if ( ! empty( $logo_max_height_tablet ) ) {
			$css .= '@media (max-width: 768px){#site-header #site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img{max-height:'. $logo_max_height_tablet . $logo_max_height_unit . ';}}';
		}

		// Header logo max height mobile
		if ( ! empty( $logo_max_height_mobile ) ) {
			$css .= '@media (max-width: 480px){#site-header #site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img{max-height:'. $logo_max_height_mobile . $logo_max_height_unit . ';}}';
		}

		// Header logo color
		if ( ! empty( $logo_color ) && '#333333' != $logo_color ) {
			$css .= '#site-logo a.site-logo-text{color:'. $logo_color .';}';
		}

		// Header logo hover color
		if ( ! empty( $logo_hover_color ) && '#13aff0' != $logo_hover_color ) {
			$css .= '#site-logo a.site-logo-text:hover{color:'. $logo_hover_color .';}';
		}

		// Links effect blue color
		if ( ! empty( $links_effect_blue_color ) && '#13aff0' != $links_effect_blue_color ) {
			$css .= '.effect-one #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-three #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-five #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-five #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-nine #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-nine #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after{background-color: '. $links_effect_blue_color .';}';
			$css .= '.effect-four #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-four #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span:after{color: '. $links_effect_blue_color .';}';
			$css .= '.effect-seven #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span:after{text-shadow: 10px 0 '. $links_effect_blue_color .', -10px 0 '. $links_effect_blue_color .';}';
		}

		// Links effect dark color
		if ( ! empty( $links_effect_dark_color ) && 'rgba(0,0,0,0.1)' != $links_effect_dark_color ) {
			$css .= '.effect-two #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-eight #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-eight #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after{background-color: '. $links_effect_dark_color .';}';
			$css .= '.effect-six #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-six #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after{border-color: '. $links_effect_dark_color .';}';
			$css .= '.effect-ten #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span, .effect-ten #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span{-webkit-box-shadow: 0 0 10px 4px '. $links_effect_dark_color .'; -moz-box-shadow: 0 0 10px 4px '. $links_effect_dark_color .'; box-shadow: 0 0 10px 4px '. $links_effect_dark_color .';}';
		}

		// Menu items padding
		if ( ! empty( $menu_items_padding ) && '15' != $menu_items_padding ) {
			$css .= '#site-navigation-wrap .dropdown-menu > li > a{padding: 0 '. $menu_items_padding .'px;}';
		}

		// Menu link color
		if ( ! empty( $menu_link_color ) && '#555555' != $menu_link_color ) {
			$css .= '#site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a,#searchform-header-replace-close{color:'. $menu_link_color .';}';
			$css .= '#site-navigation-wrap .dropdown-menu > li > a .owp-icon use,.oceanwp-mobile-menu-icon a .owp-icon use,#searchform-header-replace-close .owp-icon use{stroke:'. $menu_link_color .';}';
		}

		// Menu link color hover
		if ( ! empty( $menu_link_color_hover ) && '#13aff0' != $menu_link_color_hover ) {
			$css .= '#site-navigation-wrap .dropdown-menu > li > a:hover,.oceanwp-mobile-menu-icon a:hover,#searchform-header-replace-close:hover{color:'. $menu_link_color_hover .';}';
			$css .= '#site-navigation-wrap .dropdown-menu > li > a:hover .owp-icon use,.oceanwp-mobile-menu-icon a:hover .owp-icon use,#searchform-header-replace-close:hover .owp-icon use{stroke:'. $menu_link_color_hover .';}';
		}

		// Menu link active color
		if ( ! empty( $menu_link_color_active ) && '#555555' != $menu_link_color_active ) {
			$css .= '#site-navigation-wrap .dropdown-menu > .current-menu-item > a,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a,#site-navigation-wrap .dropdown-menu > .current-menu-item > a:hover,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a:hover{color:'. $menu_link_color_active .';}';
		}

		// Menu link background color
		if ( ! empty( $menu_link_background ) ) {
			$css .= '#site-navigation-wrap .dropdown-menu > li > a{background-color:'. $menu_link_background .';}';
		}

		// Menu link hover background color
		if ( ! empty( $menu_link_hover_background ) ) {
			$css .= '#site-navigation-wrap .dropdown-menu > li > a:hover,#site-navigation-wrap .dropdown-menu > li.sfHover > a{background-color:'. $menu_link_hover_background .';}';
		}

		// Menu link active background color
		if ( ! empty( $menu_link_active_background ) ) {
			$css .= '#site-navigation-wrap .dropdown-menu > .current-menu-item > a,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a,#site-navigation-wrap .dropdown-menu > .current-menu-item > a:hover,#site-navigation-wrap .dropdown-menu > .current-menu-ancestor > a:hover{background-color:'. $menu_link_active_background .';}';
		}

		// Dropdown menu width
		if ( ! empty( $dropdown_width ) && 180 != $dropdown_width ) {
			$css .= '.dropdown-menu .sub-menu{min-width:'. $dropdown_width . $dropdown_width_unit . ';}';
		}

		// Dropdown menu background color
		if ( ! empty( $dropdown_menu_background ) && '#ffffff' != $dropdown_menu_background ) {
			$css .= '.dropdown-menu .sub-menu,#searchform-dropdown,.current-shop-items-dropdown{background-color:'. $dropdown_menu_background .';}';
		}

		// Dropdown menu top border color
		if ( ! empty( $dropdown_menu_top_border ) && '#13aff0' != $dropdown_menu_top_border ) {
			$css .= '.dropdown-menu .sub-menu,#searchform-dropdown,.current-shop-items-dropdown{border-color:'. $dropdown_menu_top_border .';}';
		}

		// Dropdown menu borders color
		if ( ! empty( $dropdown_menu_borders ) && '#f1f1f1' != $dropdown_menu_borders ) {
			$css .= '.dropdown-menu ul li.menu-item,.navigation > ul > li > ul.megamenu.sub-menu > li,.navigation .megamenu li ul.sub-menu{border-color:'. $dropdown_menu_borders .';}';
		}

		// Dropdown menu link color
		if ( ! empty( $dropdown_menu_link_color ) && '#333333' != $dropdown_menu_link_color ) {
			$css .= '.dropdown-menu ul li a.menu-link{color:'. $dropdown_menu_link_color .';}';
			$css .= '.dropdown-menu ul li a.menu-link .owp-icon use{stroke:'. $dropdown_menu_link_color .';}';
		}

		// Dropdown menu link hover color
		if ( ! empty( $dropdown_menu_link_color_hover ) && '#555555' != $dropdown_menu_link_color_hover ) {
			$css .= '.dropdown-menu ul li a.menu-link:hover{color:'. $dropdown_menu_link_color_hover .';}';
			$css .= '.dropdown-menu ul li a.menu-link:hover .owp-icon use{stroke:'. $dropdown_menu_link_color_hover .';}';
		}

		// Dropdown menu link hover background color
		if ( ! empty( $dropdown_menu_link_hover_bg ) && '#f8f8f8' != $dropdown_menu_link_hover_bg ) {
			$css .= '.dropdown-menu ul li a.menu-link:hover{background-color:'. $dropdown_menu_link_hover_bg .';}';
		}

		// Dropdown menu link active color
		if ( ! empty( $dropdown_menu_link_color_active ) ) {
			$css .= '.dropdown-menu ul > .current-menu-item > a.menu-link{color:'. $dropdown_menu_link_color_active .';}';
		}

		// Dropdown menu link active background color
		if ( ! empty( $dropdown_menu_link_bg_active ) ) {
			$css .= '.dropdown-menu ul > .current-menu-item > a.menu-link{background-color:'. $dropdown_menu_link_bg_active .';}';
		}

		// Dropdown menu link active background color
		if ( ! empty( $dropdown_category_title_bg ) && '#f8f8f8' != $dropdown_category_title_bg ) {
			$css .= '.navigation li.mega-cat .mega-cat-title{background-color:'. $dropdown_category_title_bg .';}';
		}

		// Dropdown menu link active background color
		if ( ! empty( $dropdown_category_title_color ) && '#222222' != $dropdown_category_title_color ) {
			$css .= '.navigation li.mega-cat .mega-cat-title{color:'. $dropdown_category_title_color .';}';
		}

		// Dropdown menu link active background color
		if ( ! empty( $dropdown_category_links_color ) && '#555555' != $dropdown_category_links_color ) {
			$css .= '.navigation li.mega-cat ul li .mega-post-title a{color:'. $dropdown_category_links_color .';}';
		}

		// Dropdown menu link active background color
		if ( ! empty( $dropdown_category_links_hover_color ) && '#333333' != $dropdown_category_links_hover_color ) {
			$css .= '.navigation li.mega-cat ul li .mega-post-title a:hover{color:'. $dropdown_category_links_hover_color .';}';
		}

		// Dropdown menu link active background color
		if ( ! empty( $dropdown_category_date_color ) && '#bbbbbb' != $dropdown_category_date_color ) {
			$css .= '.navigation li.mega-cat ul li .mega-post-date{color:'. $dropdown_category_date_color .';}';
			$css .= '.navigation li.mega-cat ul li .mega-post-date .owp-icon use{stroke:'. $dropdown_category_date_color .';}';
		}

		// Search dropdown input background
		if ( ! empty( $search_dropdown_input_bg ) ) {
			$css .= '#searchform-dropdown input{background-color:'. $search_dropdown_input_bg .';}';
		}

		// Search dropdown input color
		if ( ! empty( $search_dropdown_input_color ) && '#333333' != $search_dropdown_input_color ) {
			$css .= '#searchform-dropdown input{color:'. $search_dropdown_input_color .';}';
		}

		// Search dropdown input border color
		if ( ! empty( $search_dropdown_input_border ) && '#dddddd' != $search_dropdown_input_border ) {
			$css .= '#searchform-dropdown input{border-color:'. $search_dropdown_input_border .';}';
		}

		// Search dropdown input border color focus
		if ( ! empty( $search_dropdown_input_border_focus ) && '#bbbbbb' != $search_dropdown_input_border_focus ) {
			$css .= '#searchform-dropdown input:focus{border-color:'. $search_dropdown_input_border_focus .';}';
		}

		// Search overlay background color
		if ( ! empty( $search_overlay_bg ) && 'rgba(0,0,0,0.9)' != $search_overlay_bg ) {
			$css .= '#searchform-overlay{background-color:'. $search_overlay_bg .';}';
		}

		// Search overlay input color
		if ( ! empty( $search_overlay_input_color ) && '#ffffff' != $search_overlay_input_color ) {
			$css .= '#searchform-overlay form input, #searchform-overlay form .search-text{color:'. $search_overlay_input_color .';}';
		}

		// Search overlay input placeholder color
		if ( ! empty( $search_overlay_placeholder_color ) && '#ffffff' != $search_overlay_placeholder_color ) {
			$css .= '#searchform-overlay form label{color:'. $search_overlay_placeholder_color .';}';
		}

		// Search overlay input dashed background
		if ( ! empty( $search_overlay_input_dashed_bg ) && '#ffffff' != $search_overlay_input_dashed_bg ) {
			$css .= '#searchform-overlay form label i{background-color:'. $search_overlay_input_dashed_bg .';}';
		}

		// Search overlay input border color
		if ( ! empty( $search_overlay_input_border ) && '#444444' != $search_overlay_input_border ) {
			$css .= '#searchform-overlay form input{border-color:'. $search_overlay_input_border .';}';
		}

		// Search overlay input border color hover
		if ( ! empty( $search_overlay_input_border_hover ) && '#777777' != $search_overlay_input_border_hover ) {
			$css .= '#searchform-overlay form input:hover{border-color:'. $search_overlay_input_border_hover .';}';
		}

		// Search overlay input border color focus
		if ( ! empty( $search_overlay_input_border_focus ) && '#ffffff' != $search_overlay_input_border_focus ) {
			$css .= '#searchform-overlay form input:focus{border-color:'. $search_overlay_input_border_focus .';}';
		}

		// Search overlay close button color
		if ( ! empty( $search_overlay_close_button_color ) && '#ffffff' != $search_overlay_close_button_color ) {
			$css .= '#searchform-overlay a.search-overlay-close span::before, #searchform-overlay a.search-overlay-close span::after{background-color:'. $search_overlay_close_button_color .';}';
		}

		// Add social menu font size
		if ( ! empty( $menu_social_font_size ) ) {
			$css .= '.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a{font-size:'. $menu_social_font_size . $menu_social_font_size_unit . ';}';
			$css .= '.oceanwp-social-menu ul li a .owp-icon,.oceanwp-social-menu .colored ul li a .owp-icon,.oceanwp-social-menu .minimal ul li a .owp-icon,.oceanwp-social-menu .dark ul li a .owp-icon{width:'. $menu_social_font_size . $menu_social_font_size_unit .'; height:'. $menu_social_font_size . $menu_social_font_size_unit .';}';
		}

		// Add social menu tablet font size
		if ( ! empty( $menu_social_tablet_font_size ) ) {
			$css .= '@media (max-width: 768px){.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a,.sidr-class-social-menu-inner ul li a{font-size:'. $menu_social_tablet_font_size . $menu_social_font_size_unit .';}}';
			$css .= '@media (max-width: 768px){.oceanwp-social-menu ul li a .owp-icon,.oceanwp-social-menu .colored ul li a .owp-icon,.oceanwp-social-menu .minimal ul li a .owp-icon,.oceanwp-social-menu .dark ul li a .owp-icon{width:'. $menu_social_tablet_font_size . $menu_social_font_size_unit .'; height:'. $menu_social_tablet_font_size . $menu_social_font_size_unit .';}}';
		}

		// Add social menu mobile font size
		if ( ! empty( $menu_social_mobile_font_size ) ) {
			$css .= '@media (max-width: 480px){.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a,.sidr-class-social-menu-inner ul li a{font-size:'. $menu_social_mobile_font_size . $menu_social_font_size_unit .';}}';
			$css .= '@media (max-width: 480px){.oceanwp-social-menu ul li a .owp-icon,.oceanwp-social-menu .colored ul li a .owp-icon,.oceanwp-social-menu .minimal ul li a .owp-icon,.oceanwp-social-menu .dark ul li a .owp-icon{width:'. $menu_social_mobile_font_size . $menu_social_font_size_unit .'; height:'. $menu_social_mobile_font_size . $menu_social_font_size_unit .';}}';
		}

		// Social menu links border radius
		if ( ! empty( $menu_social_border_radius ) ) {
			$css .= '.oceanwp-social-menu ul li a{border-radius:'. $menu_social_border_radius .';}';
		}

		// Social menu padding
		if ( isset( $menu_social_top_padding ) && '' != $menu_social_top_padding
			|| isset( $menu_social_right_padding ) && '' != $menu_social_right_padding
			|| isset( $menu_social_bottom_padding ) && '' != $menu_social_bottom_padding
			|| isset( $menu_social_left_padding ) && '' != $menu_social_left_padding ) {
			$css .= '.oceanwp-social-menu ul li a{padding:'. oceanwp_spacing_css( $menu_social_top_padding, $menu_social_right_padding, $menu_social_bottom_padding, $menu_social_left_padding ) .'}';
		}

		// Tablet social menu padding
		if ( isset( $menu_social_tablet_top_padding ) && '' != $menu_social_tablet_top_padding
			|| isset( $menu_social_tablet_right_padding ) && '' != $menu_social_tablet_right_padding
			|| isset( $menu_social_tablet_bottom_padding ) && '' != $menu_social_tablet_bottom_padding
			|| isset( $menu_social_tablet_left_padding ) && '' != $menu_social_tablet_left_padding ) {
			$css .= '@media (max-width: 768px){.oceanwp-social-menu ul li a{padding:'. oceanwp_spacing_css( $menu_social_tablet_top_padding, $menu_social_tablet_right_padding, $menu_social_tablet_bottom_padding, $menu_social_tablet_left_padding ) .'}}';
		}

		// Mobile social menu padding
		if ( isset( $menu_social_mobile_top_padding ) && '' != $menu_social_mobile_top_padding
			|| isset( $menu_social_mobile_right_padding ) && '' != $menu_social_mobile_right_padding
			|| isset( $menu_social_mobile_bottom_padding ) && '' != $menu_social_mobile_bottom_padding
			|| isset( $menu_social_mobile_left_padding ) && '' != $menu_social_mobile_left_padding ) {
			$css .= '@media (max-width: 480px){.oceanwp-social-menu ul li a{padding:'. oceanwp_spacing_css( $menu_social_mobile_top_padding, $menu_social_mobile_right_padding, $menu_social_mobile_bottom_padding, $menu_social_mobile_left_padding ) .'}}';
		}

		// Social menu padding
		if ( isset( $menu_social_right_margin ) && '' != $menu_social_right_margin
			|| isset( $menu_social_left_margin ) && '' != $menu_social_left_margin ) {
			$css .= '.oceanwp-social-menu ul li a{margin:'. oceanwp_spacing_css( '', $menu_social_right_margin, '', $menu_social_left_margin ) .'}';
		}

		// Tablet social menu padding
		if ( isset( $menu_social_tablet_right_margin ) && '' != $menu_social_tablet_right_margin
			|| isset( $menu_social_tablet_left_margin ) && '' != $menu_social_tablet_left_margin ) {
			$css .= '@media (max-width: 768px){.oceanwp-social-menu ul li a{margin:'. oceanwp_spacing_css( '', $menu_social_tablet_right_margin, '', $menu_social_tablet_left_margin ) .'}}';
		}

		// Mobile social menu padding
		if ( isset( $menu_social_mobile_right_margin ) && '' != $menu_social_mobile_right_margin
			|| isset( $menu_social_mobile_left_margin ) && '' != $menu_social_mobile_left_margin ) {
			$css .= '@media (max-width: 480px){.oceanwp-social-menu ul li a{margin:'. oceanwp_spacing_css( '', $menu_social_mobile_right_margin, '', $menu_social_mobile_left_margin ) .'}}';
		}

		// Social menu links background color
		if ( ! empty( $menu_social_links_bg ) ) {
			$css .= '.oceanwp-social-menu.simple-social ul li a{background-color:'. $menu_social_links_bg .';}';
		}

		// Social menu links background color
		if ( ! empty( $menu_social_hover_links_bg ) ) {
			$css .= '.oceanwp-social-menu.simple-social ul li a:hover{background-color:'. $menu_social_hover_links_bg .';}';
		}

		// Social menu links color
		if ( ! empty( $menu_social_links_color ) ) {
			$css .= '.oceanwp-social-menu.simple-social ul li a{color:'. $menu_social_links_color .';}';
			$css .= '.oceanwp-social-menu.simple-social ul li a .owp-icon use{stroke:'. $menu_social_links_color .';}';
		}

		// social menu links hover color
		if ( ! empty( $menu_social_hover_links_color ) ) {
			$css .= '.oceanwp-social-menu.simple-social ul li a:hover{color:'. $menu_social_hover_links_color .'!important;}';
			$css .= '.oceanwp-social-menu.simple-social ul li a:hover .owp-icon use{stroke:'. $menu_social_hover_links_color .'!important;}';
		}

		// Mobile menu breakpoint
		if ( ! empty( $mobile_menu_breakpoint ) && '959' != $mobile_menu_breakpoint ) {

			if ( 'custom' == $mobile_menu_breakpoint && ! empty( $mobile_menu_custom_breakpoint ) && '959' != $mobile_menu_custom_breakpoint ) {
				$mobile_menu_breakpoint = $mobile_menu_custom_breakpoint;
			}

			$css .= '@media (max-width: '. $mobile_menu_breakpoint .'px) {
				#top-bar-nav, #site-navigation-wrap, .oceanwp-social-menu, .after-header-content {display: none;}
				.center-logo #site-logo { float: none; position: absolute; left: 50%; padding: 0; -webkit-transform: translateX(-50%); transform: translateX(-50%); }
				#site-header.center-header #site-logo, .oceanwp-mobile-menu-icon, #oceanwp-cart-sidebar-wrap {display: block;}
				body.vertical-header-style #outer-wrap {margin: 0 !important;}
				#site-header.vertical-header { position: relative; width: 100%; left: 0 !important; right: 0 !important; }
				#site-header.vertical-header .has-template > #site-logo { display: block; }
				#site-header.vertical-header #site-header-inner { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-items: center;
				align-items: center; padding: 0; max-width: 90%; }
				#site-header.vertical-header #site-header-inner > *:not(.oceanwp-mobile-menu-icon) { display: none; }
				#site-header.vertical-header #site-header-inner > * { padding: 0 !important; }
				#site-header.vertical-header #site-header-inner #site-logo { display: block; margin: 0; width: 50%; text-align: left; }
				body.rtl #site-header.vertical-header #site-header-inner #site-logo { text-align: right; }
				#site-header.vertical-header #site-header-inner .oceanwp-mobile-menu-icon { width: 50%; text-align: right; }
				body.rtl #site-header.vertical-header #site-header-inner .oceanwp-mobile-menu-icon { text-align: left; }
				#site-header.vertical-header .vertical-toggle, body.vertical-header-style.vh-closed #site-header.vertical-header .vertical-toggle { display: none; }
				#site-logo.has-responsive-logo .custom-logo-link { display: none; }
				#site-logo.has-responsive-logo .responsive-logo-link { display: block; }
				.is-sticky #site-logo.has-sticky-logo .responsive-logo-link { display: none; }
				.is-sticky #site-logo.has-responsive-logo .sticky-logo-link { display: block; }
				#top-bar.has-no-content #top-bar-social.top-bar-left, #top-bar.has-no-content #top-bar-social.top-bar-right {position: inherit; left: auto; right: auto; float: none; height: auto; line-height: 1.5em; margin-top: 0; text-align: center;}
				#top-bar.has-no-content #top-bar-social li {float: none; display: inline-block;}
				.owp-cart-overlay, #side-panel-wrap a.side-panel-btn { display: none !important; }
			}';

			// Add mobile header height
			if ( ( 'top' != $header_style && 'medium' != $header_style ) && ! empty( $mobile_header_height ) ) {
				if ( 'custom' != $header_style ) {
					$css .= '@media (max-width: '. $mobile_menu_breakpoint .'px) {#site-logo #site-logo-inner{height:'. $mobile_header_height .'px;}}';
				}
				$css .= '@media (max-width: '. $mobile_menu_breakpoint .'px) {.oceanwp-mobile-menu-icon a{line-height:'. $mobile_header_height .'px;}}';
			}
		}

		// Responsive logo max height
		if ( ! empty( $responsive_logo_height ) ) {
			$css .= '#site-logo.has-responsive-logo .responsive-logo-link img{max-height:'. $responsive_logo_height .'px;}';
		}

		// Drop down mobile menu max height
		if ( 'dropdown' == $mobile_style && ! empty( $dropdown_mobile_menu_max_height ) && '400' != $dropdown_mobile_menu_max_height ) {
			$css .= '#mobile-dropdown{max-height:'. $dropdown_mobile_menu_max_height .'px;}';
		}

		// Custom hamburger mobile menu button color
		if ( 'default' != get_theme_mod( 'ocean_mobile_menu_open_hamburger', 'default' ) && ! empty( $mobile_menu_open_hamburger_color ) ) {
			$css .= '.mobile-menu .hamburger-inner, .mobile-menu .hamburger-inner::before, .mobile-menu .hamburger-inner::after{background-color:'. $mobile_menu_open_hamburger_color .';}';
		}

		// Mobile menu sidr close button background
		if ( ! empty( $mobile_menu_sidr_close_button_bg ) && '#f8f8f8' != $mobile_menu_sidr_close_button_bg ) {
			$css .= 'a.sidr-class-toggle-sidr-close{background-color:'. $mobile_menu_sidr_close_button_bg .';}';
		}

		// Mobile menu background
		if ( ! empty( $mobile_menu_sidr_background ) && '#ffffff' != $mobile_menu_sidr_background ) {
			$css .= '#sidr, #mobile-dropdown{background-color:'. $mobile_menu_sidr_background .';}';
		}

		// Mobile menu borders color
		if ( ! empty( $mobile_menu_sidr_borders ) && 'rgba(0,0,0,0.035)' != $mobile_menu_sidr_borders ) {
			$css .= '#sidr li, #sidr ul, #mobile-dropdown ul li, #mobile-dropdown ul li ul{border-color:'. $mobile_menu_sidr_borders .';}';
		}

		// Mobile menu links color
		if ( ! empty( $mobile_menu_links ) && '#555555' != $mobile_menu_links ) {
			$css .= 'body .sidr a, body .sidr-class-dropdown-toggle, #mobile-dropdown ul li a, #mobile-dropdown ul li a .dropdown-toggle, #mobile-fullscreen ul li a, #mobile-fullscreen .oceanwp-social-menu.simple-social ul li a{color:'. $mobile_menu_links .';}';
			$css .= '#mobile-fullscreen a.close .close-icon-inner, #mobile-fullscreen a.close .close-icon-inner::after{background-color:'. $mobile_menu_links .';}';
		}

		// Mobile menu links hover color
		if ( ! empty( $mobile_menu_links_hover ) && '#13aff0' != $mobile_menu_links_hover ) {
			$css .= 'body .sidr a:hover, body .sidr-class-dropdown-toggle:hover, body .sidr-class-dropdown-toggle .fa, body .sidr-class-menu-item-has-children.active > a, body .sidr-class-menu-item-has-children.active > a > .sidr-class-dropdown-toggle, #mobile-dropdown ul li a:hover, #mobile-dropdown ul li a .dropdown-toggle:hover, #mobile-dropdown .menu-item-has-children.active > a, #mobile-dropdown .menu-item-has-children.active > a > .dropdown-toggle, #mobile-fullscreen ul li a:hover, #mobile-fullscreen .oceanwp-social-menu.simple-social ul li a:hover{color:'. $mobile_menu_links_hover .';}';
			$css .= '#mobile-fullscreen a.close:hover .close-icon-inner, #mobile-fullscreen a.close:hover .close-icon-inner::after{background-color:'. $mobile_menu_links_hover .';}';
		}

		// Mobile menu dropdowns background color
		if ( ! empty( $mobile_menu_sidr_dropdowns_bg ) && 'rgba(0,0,0,0.02)' != $mobile_menu_sidr_dropdowns_bg ) {
			$css .= '.sidr-class-dropdown-menu ul, #mobile-dropdown ul li ul, #mobile-fullscreen ul ul.sub-menu{background-color:'. $mobile_menu_sidr_dropdowns_bg .';}';
		}

		// Mobile menu search background color
		if ( ! empty( $mobile_menu_sidr_search_bg ) ) {
			$css .= 'body .sidr-class-mobile-searchform input, #mobile-dropdown #mobile-menu-search form input{background-color:'. $mobile_menu_sidr_search_bg .';}';
		}

		// Mobile menu search background color
		if ( ! empty( $mobile_menu_sidr_search_color ) && '#333333' != $mobile_menu_sidr_search_color ) {
			$css .= 'body .sidr-class-mobile-searchform input,body .sidr-class-mobile-searchform input:focus, #mobile-dropdown #mobile-menu-search form input, #mobile-fullscreen #mobile-search input, #mobile-fullscreen #mobile-search .search-text{color:'. $mobile_menu_sidr_search_color .';}';
		}

		// Mobile menu search border color
		if ( ! empty( $mobile_menu_sidr_search_border_color ) && '#dddddd' != $mobile_menu_sidr_search_border_color ) {
			$css .= 'body .sidr-class-mobile-searchform input, #mobile-dropdown #mobile-menu-search form input, #mobile-fullscreen #mobile-search input{border-color:'. $mobile_menu_sidr_search_border_color .';}';
		}

		// Mobile menu search focus border color
		if ( ! empty( $mobile_menu_sidr_search_border_color_focus ) && '#bbbbbb' != $mobile_menu_sidr_search_border_color_focus ) {
			$css .= 'body .sidr-class-mobile-searchform input:focus, #mobile-dropdown #mobile-menu-search form input:focus, #mobile-fullscreen #mobile-search input:focus{border-color:'. $mobile_menu_sidr_search_border_color_focus .';}';
		}

		// Full screen mobile menu search hover border color
		if ( 'fullscreen' == $mobile_style && ! empty( $full_screen_mobile_menu_search_border_color_hover ) && '#ffffff' != $full_screen_mobile_menu_search_border_color_hover ) {
			$css .= '#mobile-fullscreen #mobile-search input:hover{border-color:'. $full_screen_mobile_menu_search_border_color_hover .';}';
		}

		// Mobile menu search border color
		if ( ! empty( $mobile_menu_sidr_search_button_color ) && '#555555' != $mobile_menu_sidr_search_button_color ) {
			$css .= '.sidr-class-mobile-searchform button, #mobile-dropdown #mobile-menu-search form button{color:'. $mobile_menu_sidr_search_button_color .';}';
			$css .= '.sidr-class-mobile-searchform button .owp-icon use, #mobile-dropdown #mobile-menu-search form button .owp-icon use{stroke:'. $mobile_menu_sidr_search_button_color .';}';
		}

		// Mobile menu search border color
		if ( ! empty( $mobile_menu_sidr_search_button_hover_color ) && '#222222' != $mobile_menu_sidr_search_button_hover_color ) {
			$css .= '.sidr-class-mobile-searchform button:hover, #mobile-dropdown #mobile-menu-search form button:hover{color:'. $mobile_menu_sidr_search_button_hover_color .';}';
			$css .= '.sidr-class-mobile-searchform button:hover .owp-icon use, #mobile-dropdown #mobile-menu-search form button:hover .owp-icon use{stroke:'. $mobile_menu_sidr_search_button_hover_color .';}';
		}

		// Full screen mobile menu background
		if ( 'fullscreen' == $mobile_style && ! empty( $full_screen_mobile_menu_bg ) && 'rgba(0,0,0,0.9)' != $full_screen_mobile_menu_bg ) {
			$css .= '#mobile-fullscreen{background-color:'. $full_screen_mobile_menu_bg .';}';
		}

		// Mobile menu links background color
		if ( 'fullscreen' == $mobile_style && ! empty( $full_screen_mobile_menu_links_bg ) ) {
			$css .= '#mobile-fullscreen ul > li > a{background-color:'. $full_screen_mobile_menu_links_bg .';}';
		}

		// Mobile menu links hover background color
		if ( 'fullscreen' == $mobile_style && ! empty( $full_screen_mobile_menu_links_hover_bg ) ) {
			$css .= '#mobile-fullscreen ul > li > a:hover{background-color:'. $full_screen_mobile_menu_links_hover_bg .';}';
		}

		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* Header */' . $css;
		}

		// Return output css.
		return $output;

	}

	/**
	* Get header image CSS
	*/
	public function header_image_css( $output ) {

		// Global vars
		$header_image 				= get_header_image();
		$header_image_position 		= get_theme_mod( 'ocean_header_image_position' );
		$header_image_attachment 	= get_theme_mod( 'ocean_header_image_attachment' );
		$header_image_repeat 		= get_theme_mod( 'ocean_header_image_repeat' );
		$header_image_size 			= get_theme_mod( 'ocean_header_image_size' );

		// Define css var
		$css = '';

		// Get site background image
		if ( ! empty( $header_image ) ) {
			$css .= 'background-image:url('. $header_image .');';
		}

		// Get site background position
		if ( ! empty( $header_image_position ) && 'initial' != $header_image_position ) {
			$css .= 'background-position:'. $header_image_position .';';
		}

		// Get site background attachment
		if ( ! empty( $header_image_attachment ) && 'initial' != $header_image_attachment ) {
			$css .= 'background-attachment:'. $header_image_attachment .';';
		}

		// Get site background repeat
		if ( ! empty( $header_image_repeat ) && 'initial' != $header_image_repeat ) {
			$css .= 'background-repeat:'. $header_image_repeat .';';
		}

		// Get site background size
		if ( ! empty( $header_image_size ) && 'initial' != $header_image_size ) {
			$css .= 'background-size:'. $header_image_size .';';
		}

		// Return CSS
		if ( has_header_image() && ! empty( $css ) ) {
			$output .= '/* Header Image CSS */#site-header{'. $css .'}';
		}

		// Return output css
		return $output;

	}
}

return new OceanWP_Customize_Header_CSS();
