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