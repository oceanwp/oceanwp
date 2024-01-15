<?php

function ocean_is_google_font_settings() {
	if ( true === get_theme_mod( 'ocean_disable_google_font', false ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_is_local_google_font() {
	if ( true === get_theme_mod( 'ocean_disable_google_font', false )
        && true === get_theme_mod( 'ocean_local_google_font', false ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_is_elementor_google_font() {
    if ( true === get_theme_mod( 'ocean_disable_google_font', false )
        && true === get_theme_mod( 'ocean_local_google_font', false )
        && did_action( 'elementor/loaded' ) ) {
        return true;
    } else {
        return false;
    }
}

function ocean_is_oe_active() {
    if ( class_exists( 'Ocean_Extra' )) {
        return true;
    } else {
        return false;
    }
}

function ocean_is_boxed_layout() {
	if ( 'boxed' == get_theme_mod( 'ocean_main_layout_style', 'wide' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_is_layout_boxed_separate() {
	if ( 'boxed' === get_theme_mod( 'ocean_main_layout_style', 'wide' )
        || 'separate' === get_theme_mod( 'ocean_main_layout_style', 'wide' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_separate_layout() {
	if ( 'separate' === get_theme_mod( 'ocean_main_layout_style', 'wide' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_is_scroll_top() {
	if ( true == get_theme_mod( 'ocean_scroll_top', true ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_is_page_single_bs_layout() {
	if ( 'both-sidebars' == get_theme_mod( 'ocean_page_single_layout', 'right-sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_is_page_single_rl_layout() {
	$layout = get_theme_mod( 'ocean_page_single_layout', 'right-sidebar' );
	if ( 'right-sidebar' == $layout
		|| 'left-sidebar' == $layout ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_is_page_title_display() {
	if ( true == get_theme_mod( 'ocean_page_title_display', true ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_is_bg_image_page_header() {
	if ( true == get_theme_mod( 'ocean_page_title_display', true ) &&
		'background-image' == get_theme_mod( 'ocean_page_header_style' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_is_not_bg_image_page_header() {
	if ( true == get_theme_mod( 'ocean_page_title_display', true ) &&
		'background-image' !== get_theme_mod( 'ocean_page_header_style' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_is_active_breadcrumb_callback() {
	if ( true == get_theme_mod( 'ocean_breadcrumbs', true ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_is_active_breadcrumb_portfolio_callback() {
    if ( true == get_theme_mod( 'ocean_breadcrumbs', true )
		&& class_exists( 'Ocean_Portfolio' ) ) {
        return true;
    } else {
        return false;
    }
}

function oceanwp_cac_background_image() {
	if ( '' != get_theme_mod( 'ocean_background_image' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_custom() {
	if ( 'custom' === get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_not_custom_and_vertical() {
	if ( 'custom' !== get_theme_mod( 'ocean_header_style', 'minimal' )
		|| 'vertical' !== get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_not_vertical() {
	if ( 'vertical' !== get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_not_medium_and_vertical() {
	if ( 'medium' !== get_theme_mod( 'ocean_header_style', 'minimal' )
		|| 'vertical' !== get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_top_menu() {
	if ( 'top' === get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_full_screen() {
	if ( 'full_screen' === get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_center_style() {
	if ( 'center' === get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_medium_style() {
	if ( 'medium' === get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_vertical_style() {
	if ( 'vertical' === get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_transparent_style() {
	if ( 'transparent' === get_theme_mod( 'ocean_header_style', 'minimal' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_search_dropdown() {
	if ( 'drop_down' === get_theme_mod( 'ocean_menu_search_style', 'drop_down' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_search_overlay() {
	if ( 'overlay' === get_theme_mod( 'ocean_menu_search_style', 'drop_down' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_social_menu() {
	if ( true === get_theme_mod( 'ocean_menu_social', false ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_header_social_menu_simple() {
	if ( true === get_theme_mod( 'ocean_menu_social', false )
		&& 'simple' === get_theme_mod( 'ocean_menu_social_style', 'simple' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_mobile_menu_has_custom_breakpoints() {
	if ( 'custom' === get_theme_mod( 'ocean_mobile_menu_breakpoints', '959' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_mobile_header_not_medium_vetical_custom() {
	if ( 'medium' == oceanwp_header_style()
		|| 'vertical' == oceanwp_header_style()
		|| 'custom' == oceanwp_header_style() ) {
		return false;
	} else {
		return true;
	}
}

function ocean_cac_has_mobile_menu_sidebar() {
	if ( 'sidebar' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_has_mobile_menu_dropdown() {
	if ( 'dropdown' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_has_mobile_menu_fullscreen() {
	if ( 'fullscreen' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_has_mobile_menu_dropdown_sidebar() {
	if ( 'dropdown' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' )
		|| 'sidebar' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_has_mobile_menu_display_menu_text() {
	if ( true == get_theme_mod( 'ocean_mobile_menu_display_opening_text', true ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_has_mobile_menu_display_close_menu_text() {
	if ( true == get_theme_mod( 'ocean_mobile_menu_display_opening_text', true ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_topbar() {
	if ( true === get_theme_mod( 'ocean_top_bar', true ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_topbar_social_menu() {
	if ( true === get_theme_mod( 'ocean_top_bar', true )
		&& true === get_theme_mod( 'ocean_top_bar_social', true ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_custom_logo() {
	if ( has_custom_logo() ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_not_custom_logo() {
	if ( has_custom_logo() ) {
		return false;
	} else {
		return true;
	}
}

function oceanwp_cac_menu_links_effect_blue() {
	if ( 'one' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'three' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'four' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'five' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'seven' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'nine' == get_theme_mod( 'ocean_menu_links_effect', 'no' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_menu_links_effect_dark() {
	if ( 'two' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'six' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'eight' == get_theme_mod( 'ocean_menu_links_effect', 'no' )
		|| 'ten' == get_theme_mod( 'ocean_menu_links_effect', 'no' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_main_page_styling() {
	if ( true === get_theme_mod( 'ocean_blog_main_page_styling', false ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_archive_bs_layout() {
	if ( 'both-sidebars' === get_theme_mod( 'ocean_blog_archives_layout', 'right-sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_archive_sidebar_layout() {
	$layout = get_theme_mod( 'ocean_blog_archives_layout', 'right-sidebar' );
	if ( 'right-sidebar' === $layout
		|| 'left-sidebar' === $layout ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_archive_grid_style() {
	if ( 'grid-entry' === get_theme_mod( 'ocean_blog_style', 'large-entry' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_archive_thumbnail_style() {
	if ( 'thumbnail-entry' === get_theme_mod( 'ocean_blog_style', 'large-entry' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_not_blog_archive_thumbnail_style() {
	if ( 'thumbnail-entry' === get_theme_mod( 'ocean_blog_style', 'large-entry' ) ) {
		return false;
	} else {
		return true;
	}
}

function oceanwp_cac_blog_archive_pagination_infinite_scroll() {
	if ( 'infinite_scroll' == get_theme_mod( 'ocean_blog_pagination_style', 'standard' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_single_bs_layout() {
	if ( 'both-sidebars' === get_theme_mod( 'ocean_blog_single_layout', 'right-sidebar' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_single_sidebar_layout() {
	$layout = get_theme_mod( 'ocean_blog_single_layout', 'right-sidebar' );
	if ( 'right-sidebar' == $layout
		|| 'left-sidebar' == $layout ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_single_post_title_default() {
	if ( 'default' === get_theme_mod( 'oceanwp_single_post_header_style', 'default' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_blog_single_post_title_has_featured_image() {
	if ( true === get_theme_mod( 'ocean_blog_single_featured_image_title', false )
		&& 'default' === get_theme_mod( 'oceanwp_single_post_header_style', 'default' ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_not_blog_single_post_title_default() {
	if ( 'default' !== get_theme_mod( 'oceanwp_single_post_header_style', 'default' ) ) {
		return true;
	} else {
		return false;
	}
}

function oceanwp_cac_single_post_title_cover() {
	$return = ( 'sph_style_3' === get_theme_mod( 'oceanwp_single_post_header_style', 'default' ) ) ? true : false;
	return $return;
}

function oceanwp_cac_not_single_post_title_cover_default() {
	$return = ( 'sph_style_3' !== get_theme_mod( 'oceanwp_single_post_header_style', 'default' ) && 'default' !== get_theme_mod( 'oceanwp_single_post_header_style', 'default' ) ) ? true : false;
	return $return;
}

function ocean_cac_search_result_layout() {
	$layout = get_theme_mod( 'ocean_search_layout', 'right-sidebar' );
	if ( 'right-sidebar' === $layout
		|| 'left-sidebar' === $layout
		|| 'both-sidebars' === $layout ) {
		return true;
	} else {
		return false;
	}
}

function oceanw_cac_is_search_rs_layout() {
	$layout = get_theme_mod( 'ocean_search_layout', 'right-sidebar' );
	if ( 'right-sidebar' === $layout ) {
		return true;
	} else {
		return false;
	}
}

function oceanw_cac_is_search_bs_layout() {
	$layout = get_theme_mod( 'ocean_search_layout', 'right-sidebar' );
	if ( 'both-sidebars' === $layout ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_footer_widget() {
	if ( true === get_theme_mod( 'ocean_footer_widgets', true ) ) {
		return true;
	} else {
		return false;
	}
}

function ocean_cac_footer_copyright() {
	if ( true === get_theme_mod( 'ocean_footer_bottom', true ) ) {
		return true;
	} else {
		return false;
	}
}