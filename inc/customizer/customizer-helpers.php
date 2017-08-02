<?php
/**
 * Active callback functions for the customizer
 *
 * @package OceanWP WordPress theme
 */

/*-------------------------------------------------------------------------------*/
/* [ Table of contents ]
/*-------------------------------------------------------------------------------*

	# Core
	# Background
	# Topbar
	# Header
	# Logo
	# Menu
	# Mobile
	# Page Header
	# Blog
	# WooCommerce
	# Footer

/*-------------------------------------------------------------------------------*/
/* [ Core ]
/*-------------------------------------------------------------------------------*/
function oceanwp_customizer_helpers( $return = NULL ) {
	// Return library templates array
	if ( 'library' == $return ) {
		$templates 		= array( '&mdash; '. esc_html__( 'Select', 'oceanwp' ) .' &mdash;' );
		$get_templates 	= get_posts( array( 'post_type' => 'oceanwp_library', 'numberposts' => -1, 'post_status' => 'publish' ) );

	    if ( ! empty ( $get_templates ) ) {
	    	foreach ( $get_templates as $template ) {
				$templates[ $template->ID ] = $template->post_title;
		    }
		}

		return $templates;
	}
}

function oceanwp_cac_has_boxed_layout() {
	if ( 'boxed' == get_theme_mod( 'ocean_main_layout_style', 'wide' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_hasnt_boxed_layout() {
	if ( 'wide' == get_theme_mod( 'ocean_main_layout_style', 'wide' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_page_header() {
	if ( 'hidden' != get_theme_mod( 'ocean_page_header_style' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_breadcrumbs() {
	if ( function_exists( 'yoast_breadcrumb' ) ) {
		return true;
	} else {
		return get_theme_mod( 'ocean_breadcrumbs', true );
	}
}


function oceanwp_cac_enabled_not_yoast() {
	if ( function_exists( 'yoast_breadcrumb' ) ) {
		return false;
	} else {
		return oceanwp_cac_has_breadcrumbs();
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Background ]
/*-------------------------------------------------------------------------------*/

function oceanwp_cac_has_background_image() {
	if ( '' != get_theme_mod( 'ocean_background_image' ) ) {
		return true;
	} else {
		return false;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Topbar ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_has_topbar() {
	return get_theme_mod( 'ocean_top_bar', true );
}

function oceanwp_cac_has_topbar_social() {
	if ( oceanwp_cac_has_topbar()
		&& get_theme_mod( 'ocean_top_bar_social' ) ) {
		return true;
	} else {
		return false;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Header ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_has_transparent_header_style() {
	if ( 'transparent' == oceanwp_header_style() ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_top_header_style() {
	if ( 'top' == oceanwp_header_style() ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_full_screen_header_style() {
	if ( 'full_screen' == oceanwp_header_style() ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_medium_header_style() {
	if ( 'medium' == oceanwp_header_style() ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_hasnt_medium_header_style() {
	if ( 'medium' == oceanwp_header_style() ) {
		return false;
	} else {
		return true;
	}
}

function oceanwp_cac_has_menu_social() {
	if ( true == get_theme_mod( 'ocean_menu_social', false ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_custom_header() {
	if ( 'custom' == oceanwp_header_style() ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_hasnt_header_styles() {
	if ( 'top' == oceanwp_header_style()
		|| 'medium' == oceanwp_header_style() ) {
		return false;
	} else {
		return true;
	}
}

function oceanwp_cac_hasnt_medium_custom_header_styles() {
	if ( 'medium' == oceanwp_header_style()
		|| 'custom' == oceanwp_header_style() ) {
		return false;
	} else {
		return true;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Logo ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_has_custom_logo() {
	if ( has_custom_logo() ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_hasnt_custom_logo() {
	if ( has_custom_logo() ) {
		return false;
	} else {
		return true;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Menu ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_has_menu_search_dropdown() {
	if ( 'drop_down' == get_theme_mod( 'ocean_menu_search_style', 'drop_down' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_menu_search_overlay() {
	if ( 'overlay' == get_theme_mod( 'ocean_menu_search_style', 'drop_down' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_menu_dropdown_top_border() {
	return get_theme_mod( 'ocean_menu_dropdown_top_border', false );
}

/*-------------------------------------------------------------------------------*/
/* [ Mobile ]
/*-------------------------------------------------------------------------------*/
function ocean_mobile_menu_cac_has_custom_breakpoint() {
	if ( 'custom' == get_theme_mod( 'ocean_mobile_menu_breakpoints', '959' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_sidebar_mobile_menu() {
	if ( 'sidebar' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_dropdown_mobile_menu() {
	if ( 'dropdown' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_fullscreen_mobile_menu() {
	if ( 'fullscreen' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_hasnt_fullscreen_mobile_menu() {
	if ( 'fullscreen' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return false;
	} else {
		return true;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Page Header ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_has_bg_image_page_header() {
	if ( 'background-image' == get_theme_mod( 'ocean_page_header_style' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_hasnt_bg_image_page_header() {
	if ( 'background-image' == get_theme_mod( 'ocean_page_header_style' ) ) {
		return false;
	} else {
		return true;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Blog ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_grid_blog_style() {
	if ( 'grid-entry' == get_theme_mod( 'ocean_blog_style', 'large-entry' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_blog_supports_equal_heights() {
	if ( oceanwp_cac_grid_blog_style()
		&& 'masonry' != get_theme_mod( 'ocean_blog_grid_style', 'fit-rows' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_blog_single_title_bg_image() {
	if ( true == get_theme_mod( 'ocean_blog_single_featured_image_title', false ) ) {
		return true;
	} else {
		return false;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ WooCommerce ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_has_menu_cart() {
	if ( 'disabled' != get_theme_mod( 'ocean_woo_menu_icon_display', 'icon_count' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_grid_list_buttons() {
	if ( true == get_theme_mod( 'ocean_woo_grid_list', true ) ) {
		return true;
	} else {
		return false;
	}
}

/*-------------------------------------------------------------------------------*/
/* [ Footer ]
/*-------------------------------------------------------------------------------*/
function oceanwp_cac_has_scrolltop() {
	return get_theme_mod( 'ocean_scroll_top', true );
}

function oceanwp_cac_has_footer_widgets() {
	return get_theme_mod( 'ocean_footer_widgets', true );
}

function oceanwp_cac_has_footer_widgets_and_no_page_id() {
	if ( true == get_theme_mod( 'ocean_footer_widgets', true )
		&& '' == get_theme_mod( 'ocean_footer_widgets_page_id' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_has_footer_bottom() {
	return get_theme_mod( 'ocean_footer_bottom', true );
}