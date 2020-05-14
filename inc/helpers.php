<?php
/**
 * This file includes helper functions used throughout the theme.
 *
 * @package OceanWP WordPress theme
 */

/*-------------------------------------------------------------------------------*/
/* [ Table of contents ]
/*-------------------------------------------------------------------------------*

	# General
	# Top Bar
	# Header
	# Page Header
	# Blog
	# Footer
	# WooCommerce
	# Other

/*-------------------------------------------------------------------------------*/
/* [ General ]
/*-------------------------------------------------------------------------------*/

/**
 * Adds classes to the html tag
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_html_classes' ) ) {

	function oceanwp_html_classes() {

		// Setup classes array
		$classes = array();

		// Main class
		$classes[] = 'html';

		// Set keys equal to vals
		$classes = array_combine( $classes, $classes );
		
		// Apply filters for child theming
		$classes = apply_filters( 'ocean_html_classes', $classes );

		// Turn classes into space seperated string
		$classes = implode( ' ', $classes );

		// Return classes
		return $classes;

	}

}

/**
 * Adds classes to the body tag
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_body_classes' ) ) {

	function oceanwp_body_classes( $classes ) {

		// Vars
		$post_layout  = oceanwp_post_layout();
		$layout_style = get_theme_mod( 'ocean_main_layout_style', 'wide' );
		$post_id      = oceanwp_post_id();
		$mobile_style = oceanwp_mobile_menu_style();

		// RTL
		if ( is_rtl() ) {
			$classes[] = 'rtl';
		}
		
		// Main class
		$classes[] = 'oceanwp-theme';

		// Mobile menu style
		$classes[] = $mobile_style . '-mobile';

		// If video header
		if ( function_exists( 'has_header_video' )
			&& has_header_video() ) {
			$classes[] = 'has-header-video';
		}

		// Boxed layout
		if ( 'boxed' == $layout_style ) {
			$classes[] = 'boxed-layout';

			if ( get_theme_mod( 'ocean_boxed_dropdshadow', true ) ) {
				$classes[] = 'wrap-boxshadow';
			}
		}

		// Separate layout
		if ( 'separate' == $layout_style ) {
			$classes[] = 'separate-layout';
		}

		// If separate style nad blog page
		if ( 'separate' == $layout_style
			&& ( is_home()
				|| is_category()
				|| is_tag()
				|| is_date()
				|| is_author() ) ) {
			$classes[] = 'separate-blog';
		}

		// If is not custom header created with Elementor Pro 2.0
		if ( ! function_exists( 'elementor_location_exits' ) || ! elementor_location_exits( 'header', true ) ) {

			// Top menu header style to control the responsive
			if ( 'top' == oceanwp_header_style() ) {
				$classes[] = 'top-header-style';
			}

			// Medium header style to control the responsive
			if ( 'medium' == oceanwp_header_style() ) {
				$classes[] = 'medium-header-style';
			}

			// Vertical header style
			if ( 'vertical' == oceanwp_header_style() ) {

				// Vertical header style to control the wrap margin left
				$classes[] = 'vertical-header-style';

				// Header position
				$position  = get_theme_mod( 'ocean_vertical_header_position', 'left-header' );
				$position  = $position ? $position : 'left-header';
				$classes[] = $position;

				// If default collapse
				$vh_collapse_width = get_theme_mod( 'ocean_vertical_header_collapse_width', '1280' );
				if ( empty( $vh_collapse_width )
					|| '1280' == $vh_collapse_width ) {
					$classes[] = 'default-collapse';
				}

			}

			// Add transparent class for header styles
			if ( 'transparent' == oceanwp_header_style()
				|| ( 'full_screen' == oceanwp_header_style() && true == get_theme_mod( 'ocean_full_screen_header_transparent', false ) )
				|| ( 'center' == oceanwp_header_style() && true == get_theme_mod( 'ocean_center_header_transparent', false ) )
				|| ( 'medium' == oceanwp_header_style() && true == get_theme_mod( 'ocean_medium_header_transparent', false ) ) ) {
				$classes[] = 'has-transparent-header';
			}

			// Add transparent class for the vertical header style
			if ( 'vertical' == oceanwp_header_style()
				&& true == get_theme_mod( 'ocean_vertical_header_transparent', false ) ) {
				$classes[] = 'has-vh-transparent';
			}

			// If vertical header closed
			if ( 'vertical' == oceanwp_header_style()
				&& true == get_theme_mod( 'ocean_vertical_header_closed', false ) ) {
				$classes[] = 'vh-closed';
			}

		}

		// If no header border bottom
		if ( true != get_theme_mod( 'ocean_has_header_border_bottom', true ) ) {
			$classes[] = 'no-header-border';
		}

		// If no custom mobile breakpoint
		if ( '959' == get_theme_mod( 'ocean_mobile_menu_breakpoints', '959' ) ) {
			$classes[] = 'default-breakpoint';
		}

		// Sidebar enabled
		if ( 'left-sidebar' == $post_layout
			|| 'right-sidebar' == $post_layout
			|| 'both-sidebars' == $post_layout ) {
			$classes[] = 'has-sidebar';
		}

		// Mobile sidebar order
		if ( 'sidebar-content' == oceanwp_sidebar_order() ) {
			$classes[] = 'sidebar-content';
		}

		// Content layout
		if ( $post_layout ) {
			$classes[] = 'content-'. $post_layout;
		}

		// If full width and has content width
		if ( 'full-width' == $post_layout
			&& '0' != get_theme_mod( 'ocean_blog_single_content_width', '700' ) ) {
			$classes[] = 'content-max-width';
		}

		// Both sidebars layout style
		if ( 'both-sidebars' == $post_layout ) {
			$classes[] = oceanwp_both_sidebars_style();
		}

		// Single Post cagegories
		if ( is_singular( 'post' ) ) {
			$cats = get_the_category( $post_id );
			foreach ( $cats as $cat ) {
				$classes[] = 'post-in-category-'. $cat->category_nicename;
			}
		}

		// If landing page template
		if ( is_page_template( 'templates/landing.php' ) ) {
			$classes[] = 'landing-page';
		}

		// Topbar
		if ( oceanwp_display_topbar() ) {
			$classes[] = 'has-topbar';
		}

		// Title with Background Image
		if ( 'background-image' == oceanwp_page_header_style() ) {
			$classes[] = 'page-with-background-title';
		}

		// Disabled header
		if ( ! oceanwp_has_page_header() ) {
			$classes[] = 'page-header-disabled';
		}

		// Breadcrumbs
		if ( oceanwp_has_breadcrumbs() ) {
			$classes[] = 'has-breadcrumbs';
		}

		// If blog grid style
		if ( 'grid-entry' == get_theme_mod( 'ocean_blog_style', 'large-entry' ) ) {
			$classes[] = 'has-blog-grid';
		}

		// Fixed footer
		if ( 'on' == get_theme_mod( 'ocean_fixed_footer', 'off' ) ) {
			$classes[] = 'has-fixed-footer';
		}

		// Parallax footer
		if ( 'on' == get_theme_mod( 'ocean_parallax_footer', 'off' ) ) {
			$classes[] = 'has-parallax-footer';
		}

		// Pagination
		$pagination_align = get_theme_mod( 'ocean_pagination_align', 'right' );
		if ( 'right' != $pagination_align ) {
			$classes[] = 'pagination-'. $pagination_align;
		}

		// If WooCommerce is active
		if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {

			// If grid/list buttons
			if ( get_theme_mod( 'ocean_woo_grid_list', true ) ) {
				$classes[] = 'has-grid-list';
			}

			// Tabs position
			$woo_tabs = get_theme_mod( 'ocean_woo_product_meta_tabs_position', 'center' );
			if ( oceanwp_is_woo_single()
				&& 'center' != $woo_tabs ) {
				$classes[] = 'woo-'. $woo_tabs .'-tabs';
			}

		}

		// Return classes
		return $classes;

	}

	add_filter( 'body_class', 'oceanwp_body_classes' );

}

/**
 * Backward compatibility
 *
 * @since 1.8.3
 */
if ( ! function_exists( 'wp_body_open' ) ) {

	/**
	 * Shim for wp_body_open, ensuring backward compatibility with versions of WordPress older than 5.2.
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}

/**
 * Store current post ID
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_post_id' ) ) {

	function oceanwp_post_id() {

		// Default value
		$id = '';

		// If singular get_the_ID
		if ( is_singular() ) {
			$id = get_the_ID();
		}

		// Get ID of WooCommerce product archive
		elseif ( OCEANWP_WOOCOMMERCE_ACTIVE && is_shop() ) {
			$shop_id = wc_get_page_id( 'shop' );
			if ( isset( $shop_id ) ) {
				$id = $shop_id;
			}
		}

		// Posts page
		elseif ( is_home() && $page_for_posts = get_option( 'page_for_posts' ) ) {
			$id = $page_for_posts;
		}

		// Apply filters
		$id = apply_filters( 'ocean_post_id', $id );

		// Sanitize
		$id = $id ? $id : '';

		// Return ID
		return $id;

	}

}

/**
 * Get unique ID
 *
 * Based on the TwentyTwenty theme unique ID method: inc\template-tags.php
 *
 * @since 1.7.9
 */
if ( ! function_exists( 'oceanwp_unique_id' ) ) {
	function oceanwp_unique_id( $prefix = '' ) {
		static $id_counter = 0;
		if ( function_exists( 'wp_unique_id' ) ) {
			return wp_unique_id( $prefix );
		}
		return $prefix . (string) ++$id_counter;
	}
}

/**
 * Returns correct post layout
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_post_layout' ) ) {

	function oceanwp_post_layout() {

		// Define variables
		$class  = 'right-sidebar';
		$meta   = get_post_meta( oceanwp_post_id(), 'ocean_post_layout', true );

		// Check meta first to override and return (prevents filters from overriding meta)
		if ( $meta ) {
			return $meta;
		}

		// Singular Page
		if ( is_page() ) {

			// Landing template
			if ( is_page_template( 'templates/landing.php' ) ) {
				$class = 'full-width';
			}

			// Attachment
			elseif ( is_attachment() ) {
				$class = 'full-width';
			}

			// All other pages
			else {
				$class = get_theme_mod( 'ocean_page_single_layout', 'right-sidebar' );
			}

		}

		// Home
		elseif ( is_home()
			|| is_category()
			|| is_tag()
			|| is_date()
			|| is_author() ) {
			$class = get_theme_mod( 'ocean_blog_archives_layout', 'right-sidebar' );
		}

		// Singular Post
		elseif ( is_singular( 'post' ) ) {
			$class = get_theme_mod( 'ocean_blog_single_layout', 'right-sidebar' );
		}

		// Library and Elementor template
		elseif ( is_singular( 'oceanwp_library' )
    			|| is_singular( 'elementor_library' ) ) {
			$class = 'full-width';
		}

		// Search
		elseif ( is_search() ) {
			$class = get_theme_mod( 'ocean_search_layout', 'right-sidebar' );
		}
		
		// 404 page
		elseif ( is_404() ) {
			$class = get_theme_mod( 'ocean_error_page_layout', 'full-width' );
		}

		// All else
		else {
			$class = 'right-sidebar';
		}

		// Class should never be empty
		if ( empty( $class ) ) {
			$class = 'right-sidebar';
		}

		// Apply filters and return
		return apply_filters( 'ocean_post_layout_class', $class );

	}

}

/**
 * Returns correct both sidebars style layout
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_both_sidebars_style' ) ) {

	function oceanwp_both_sidebars_style() {

		// Meta
		$meta = get_post_meta( oceanwp_post_id(), 'ocean_both_sidebars_style', true );

		// Check meta first to override and return (prevents filters from overriding meta)
		if ( $meta ) {
			return $meta;
		}

		// Singular Page
		if ( is_page() ) {
			$class = get_theme_mod( 'ocean_page_single_both_sidebars_style', 'scs-style' );
		}

		// Home
		elseif ( is_home()
			|| is_category()
			|| is_tag()
			|| is_date()
			|| is_author() ) {
			$class = get_theme_mod( 'ocean_blog_archives_both_sidebars_style', 'scs-style' );
		}

		// Singular Post
		elseif ( is_singular( 'post' ) ) {
			$class = get_theme_mod( 'ocean_blog_single_both_sidebars_style', 'scs-style' );
		}

		// Search
		elseif ( is_search() ) {
			$class = get_theme_mod( 'ocean_search_both_sidebars_style', 'scs-style' );
		}

		// All else
		else {
			$class = 'scs-style';
		}

		// Class should never be empty
		if ( empty( $class ) ) {
			$class = 'scs-style';
		}

		// Apply filters and return
		return apply_filters( 'ocean_both_sidebars_style', $class );

	}

}

/**
 * Mobile sidebar order
 *
 * @since 1.6
 */
if ( ! function_exists( 'oceanwp_sidebar_order' ) ) {

	function oceanwp_sidebar_order() {

		// Define variables
		$order  = 'content-sidebar';
		/*$meta   = get_post_meta( oceanwp_post_id(), 'ocean_post_layout', true );

		// Check meta first to override and return (prevents filters from overriding meta)
		if ( $meta ) {
			return $meta;
		}*/

		// Singular Page
		if ( is_page() ) {
			$order = get_theme_mod( 'ocean_page_single_sidebar_order', 'content-sidebar' );
		}

		// Home
		elseif ( is_home()
			|| is_category()
			|| is_tag()
			|| is_date()
			|| is_author() ) {
			$order = get_theme_mod( 'ocean_blog_archives_sidebar_order', 'content-sidebar' );
		}

		// Singular Post
		elseif ( is_singular( 'post' ) ) {
			$order = get_theme_mod( 'ocean_single_post_sidebar_order', 'content-sidebar' );
		}

		// Search
		elseif ( is_search() ) {
			$order = get_theme_mod( 'ocean_search_sidebar_order', 'content-sidebar' );
		}

		// All else
		else {
			$order = 'content-sidebar';
		}

		// The order should never be empty
		if ( empty( $order ) ) {
			$order = 'content-sidebar';
		}

		// Apply filters and return
		return apply_filters( 'ocean_sidebar_order', $order );

	}

}

/**
 * Get the sidebar
 *
 * @since  1.4.0
 */
if ( ! function_exists( 'oceanwp_display_sidebar' ) ) {

	function oceanwp_display_sidebar() {

		// Retunr if full width or full screen
		if ( in_array( oceanwp_post_layout(), array( 'full-screen', 'full-width' ) ) ) {
			return;
		}
		
		// Add the second sidebar
		if ( 'both-sidebars' == oceanwp_post_layout() ) {
			get_sidebar( 'left' );
		}
		
		// Add the default sidebar
		get_sidebar();
		
	}

}

/**
 * Returns the sidebar
 *
 * @since  1.6
 */
if ( ! function_exists( 'oceanwp_sidebar_action' ) ) {

	function oceanwp_sidebar_action() {

		if ( 'sidebar-content' == oceanwp_sidebar_order()
			&& 'both-sidebars' != oceanwp_post_layout() ) {
			$action = 'ocean_before_primary';
		} else {
			$action = 'ocean_after_primary';
		}

		add_action( $action, 'oceanwp_display_sidebar' );
		
	}

	add_action( 'wp', 'oceanwp_sidebar_action', 20 );

}

/**
 * Returns the correct sidebar ID
 *
 * @since  1.0.0
 */
if ( ! function_exists( 'oceanwp_get_sidebar' ) ) {

	function oceanwp_get_sidebar( $sidebar = 'sidebar' ) {

		// Search
		if ( is_search()
			&& true == get_theme_mod( 'ocean_search_custom_sidebar', true ) ) {
			$sidebar = 'search_sidebar';
		}
		
		// Add filter for tweaking the sidebar display via child theme's
		$sidebar = apply_filters( 'ocean_get_sidebar', $sidebar );

		// Never show empty sidebar
		if ( ! is_active_sidebar( $sidebar ) ) {
			$sidebar = 'sidebar';
		} 

		// Return the correct sidebar
		return $sidebar;
		
	}

}

/**
 * Returns the correct second sidebar ID
 *
 * @since  1.4.0
 */
if ( ! function_exists( 'oceanwp_get_second_sidebar' ) ) {

	function oceanwp_get_second_sidebar( $sidebar = 'sidebar-2' ) {
		
		// Add filter for tweaking the left sidebar display via child theme's
		$sidebar = apply_filters( 'ocean_get_second_sidebar', $sidebar );

		// Never show empty sidebar
		if ( ! is_active_sidebar( $sidebar ) ) {
			$sidebar = 'sidebar-2';
		} 

		// Return the correct sidebar
		return $sidebar;
		
	}

}

/**
 * Returns the correct classname for any specific column grid
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_grid_class' ) ) {

	function oceanwp_grid_class( $col = '4' ) {
		return esc_attr( apply_filters( 'ocean_grid_class', 'span_1_of_'. $col ) );
	}

}

/**
 * Removes the scheme of the passed URL to fit the current page.
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_correct_url_scheme' ) ) {

	function oceanwp_correct_url_scheme( $url ) {

		$url = str_replace( 'http://', '//', str_replace( 'https://', '//', $url ) );

		return $url;
	}

}

/**
 * Gets the attachment ID from the url
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_get_attachment_id_from_url' ) ) {

	function oceanwp_get_attachment_id_from_url( $attachment_url = '' ) {

		global $wpdb;
		$attachment_id = false;

		if ( '' == $attachment_url || ! is_string( $attachment_url ) ) {
			return '';
		}

		$upload_dir_paths = wp_upload_dir();
		$upload_dir_paths_baseurl = $upload_dir_paths['baseurl'];

		if ( substr( $attachment_url, 0, 2 ) == '//' ) {
			$upload_dir_paths_baseurl = oceanwp_correct_url_scheme( $upload_dir_paths_baseurl );
		}

		// Make sure the upload path base directory exists in the attachment URL, to verify that we're working with a media library image.
		if ( false !== strpos( $attachment_url, $upload_dir_paths_baseurl ) ) {

			// If this is the URL of an auto-generated thumbnail, get the URL of the original image.
			$attachment_url = preg_replace( '/-\d+x\d+(?=\.(jpg|jpeg|png|gif|tiff|svg)$)/i', '', $attachment_url );

			// Remove the upload path base directory from the attachment URL.
			$attachment_url = str_replace( $upload_dir_paths_baseurl . '/', '', $attachment_url );

			// Run a custom database query to get the attachment ID from the modified attachment URL.
			$attachment_id = $wpdb->get_var( $wpdb->prepare( "SELECT wposts.ID FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta WHERE wposts.ID = wpostmeta.post_id AND wpostmeta.meta_key = '_wp_attached_file' AND wpostmeta.meta_value = '%s' AND wposts.post_type = 'attachment'", $attachment_url ) );
			$attachment_id = apply_filters( 'wpml_object_id', $attachment_id, 'attachment' );
		}

		return $attachment_id;

	}

}

/**
 * Gets the most important attachment data from the url
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_get_attachment_data_from_url' ) ) {

	function oceanwp_get_attachment_data_from_url( $attachment_url = '' ) {

		if ( '' == $attachment_url ) {
			return false;
		}

		$attachment_data['url'] = preg_replace( '/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $attachment_url );
		$attachment_data['id'] = oceanwp_get_attachment_id_from_url( $attachment_data['url'] );

		if ( ! $attachment_data['id'] ) {
			return false;
		}

		preg_match( '/\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', $attachment_url, $matches );
		if ( count( $matches ) > 0 ) {
			$dimensions 				= explode( 'x', $matches[0] );
			$attachment_data['width'] 	= $dimensions[0];
			$attachment_data['height'] 	= $dimensions[1];
		} else {
			$attachment_src 			= wp_get_attachment_image_src( $attachment_data['id'], 'full' );
			$attachment_data['width'] 	= $attachment_src[1];
			$attachment_data['height'] 	= $attachment_src[2];
		}

		$attachment_data['alt'] 	= get_post_field( '_wp_attachment_image_alt', $attachment_data['id'] );
		$attachment_data['caption'] = get_post_field( 'post_excerpt', $attachment_data['id'] );
		$attachment_data['title'] 	= get_post_field( 'post_title', $attachment_data['id'] );

		return $attachment_data;
	}

}

/*-------------------------------------------------------------------------------*/
/* [ Top Bar ]
/*-------------------------------------------------------------------------------*/

/**
 * Display top bar
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_display_topbar' ) ) {

	function oceanwp_display_topbar() {

		// Return true by default
		$return = true;

		// Return false if disabled via Customizer
		if ( true != get_theme_mod( 'ocean_top_bar', true ) ) {
			$return = false;
		}

		// Apply filters and return
		return apply_filters( 'ocean_display_top_bar', $return );

	}

}

/**
 * Top bar template
 * I make a function to be able to remove it for the Beaver Themer plugin
 *
 * @since 1.2.5
 */
if ( ! function_exists( 'oceanwp_top_bar_template' ) ) {

	function oceanwp_top_bar_template() {

		// Return if no top bar
		if ( ! oceanwp_display_topbar() ) {
			return;
		}

		get_template_part( 'partials/topbar/layout' );

	}

	add_action( 'ocean_top_bar', 'oceanwp_top_bar_template' );

}

/**
 * Add classes to the top bar wrap
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_topbar_classes' ) ) {

	function oceanwp_topbar_classes() {

		// Setup classes array
		$classes = array();

		// Clearfix class
		$classes[] = 'clr';

		// Visibility
		$visibility = get_theme_mod( 'ocean_top_bar_visibility', 'all-devices' );
		if ( 'all-devices' != $visibility ) {
			$classes[] = $visibility;
		}

		// Set keys equal to vals
		$classes = array_combine( $classes, $classes );
		
		// Apply filters for child theming
		$classes = apply_filters( 'ocean_topbar_classes', $classes );

		// Turn classes into space seperated string
		$classes = implode( ' ', $classes );

		// return classes
		return $classes;

	}

}

/**
 * Topbar style
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_top_bar_style' ) ) {

	function oceanwp_top_bar_style() {
		$style = get_theme_mod( 'ocean_top_bar_style' );
		$style = $style ? $style : 'one';
		return apply_filters( 'ocean_top_bar_style', $style );
	}


}
/**
 * Topbar Content classes
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_topbar_content_classes' ) ) {

	function oceanwp_topbar_content_classes() {

		// Define classes
		$classes = array( 'clr' );

		// Check for content
		if ( get_theme_mod( 'ocean_top_bar_content' ) ) {
			$classes[] = 'has-content';
		}

		// Get topbar style
		$style = oceanwp_top_bar_style();

		// Top bar style
		if ( 'one' == $style ) {
			$classes[] = 'top-bar-left';
		} elseif ( 'two' == $style ) {
			$classes[] = 'top-bar-right';
		} elseif ( 'three' == $style ) {
			$classes[] = 'top-bar-centered';
		}

		// Apply filters for child theming
		$classes = apply_filters( 'ocean_top_bar_classes', $classes );

		// Turn classes array into space seperated string
		$classes = implode( ' ', $classes );

		// Return classes
		return esc_attr( $classes );

	}

}

/*-------------------------------------------------------------------------------*/
/* [ Header ]
/*-------------------------------------------------------------------------------*/

/**
 * Display header
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_display_header' ) ) {

	function oceanwp_display_header() {

		// Return true by default
		$return = true;

		// Apply filters and return
		return apply_filters( 'ocean_display_header', $return );

	}

}

/**
 * Header template
 * I make a function to be able to remove it for the Beaver Themer plugin
 *
 * @since 1.2.5
 */
if ( ! function_exists( 'oceanwp_header_template' ) ) {

	function oceanwp_header_template() {

		// Return if no header
		if ( ! oceanwp_display_header() ) {
			return;
		}

		get_template_part( 'partials/header/layout' );

	}

	add_action( 'ocean_header', 'oceanwp_header_template' );

}

/**
 * Header style
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_header_style' ) ) {

	function oceanwp_header_style() {

		// Get style from customizer setting
		$style = get_theme_mod( 'ocean_header_style', 'minimal' );

		// Sanitize style to make sure it isn't empty
		$style = $style ? $style : 'minimal';

		// Apply filters and return
		return apply_filters( 'ocean_header_style', $style );

	}

}

/**
 * Custom header style template
 *
 * @since 1.4.0
 */
if ( ! function_exists( 'oceanwp_custom_header_template' ) ) {

	function oceanwp_custom_header_template() {

		// Get template from customizer setting
		$template = get_theme_mod( 'ocean_header_template' );

		// Apply filters and return
		return apply_filters( 'ocean_custom_header_template', $template );

	}

}

/**
 * Add classes to the header wrap
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_header_classes' ) ) {

	function oceanwp_header_classes() {

		// Header style
		$header_style = oceanwp_header_style();

		// Setup classes array
		$classes = array();

		// If is not custom header created with Elementor Pro 2.0
		if ( ! function_exists( 'elementor_location_exits' ) || ! elementor_location_exits( 'header', true ) ) {

			// Add header style class
			$classes[] = $header_style . '-header';

			// Add transparent class for header styles
			if ( ( 'full_screen' == $header_style && true == get_theme_mod( 'ocean_full_screen_header_transparent', false ) )
				|| ( 'center' == $header_style && true == get_theme_mod( 'ocean_center_header_transparent', false ) )
				|| ( 'medium' == $header_style && true == get_theme_mod( 'ocean_medium_header_transparent', false ) )
				|| ( 'vertical' == $header_style && true == get_theme_mod( 'ocean_vertical_header_transparent', false ) ) ) {
				$classes[] = 'is-transparent';
			}

			// Search overlay
			if ( 'overlay' == oceanwp_menu_search_style() ) {
				$classes[] = 'search-overlay';
			}

			// Add class if social menu is enabled to remove the negative right on the navigation
			if ( true == get_theme_mod( 'ocean_menu_social', false ) ) {
				$classes[] = 'has-social';
			}

			// Menu position
			if ( 'minimal' == $header_style || 'transparent' == $header_style ) {
				if ( 'left-menu' == get_theme_mod( 'ocean_menu_position', 'right-menu' ) ) {
					$classes[] = 'left-menu';
				} elseif ( 'center-menu' == get_theme_mod( 'ocean_menu_position', 'right-menu' ) ) {
					$classes[] = 'center-menu';
				}
			}

			// Medium header style menu hidden
			if ( 'medium' == $header_style
				&& true == get_theme_mod( 'ocean_medium_header_hidden_menu', true )
				&& true != get_theme_mod( 'ocean_medium_header_stick_menu', false ) ) {

				// Add hidden menu class
				$classes[] = 'hidden-menu';

			}

			// Vertical header style
			if ( 'vertical' == $header_style ) {

				// Header shadow
				if ( true == get_theme_mod( 'ocean_vertical_header_shadow', true ) ) {
					$classes[] = 'has-shadow';
				}

				// Logo position
				$logo_position  = get_theme_mod( 'ocean_vertical_header_logo_position', 'center-logo' );
				$logo_position  = $logo_position ? $logo_position : 'vh-center-logo';
				$classes[] 		= 'vh-'. $logo_position;

			}

			// If the search header replace
			if ( 'header_replace' == oceanwp_menu_search_style() ) {
				$classes[] = 'header-replace';
			}

			// If has header media
			if ( has_header_image() ) {
				$classes[] = 'has-header-media';
			}

			// Mobile elements positionning
			if ( ( 'medium' != $header_style
					&& 'vertical' != $header_style
					&& 'top' != $header_style )
				&& 'one' != get_theme_mod( 'ocean_mobile_elements_positioning', 'one' ) ) {
				$classes[] = 'center-logo';
			}

		}

		// If menu links effect
		$link_effect = get_theme_mod( 'ocean_menu_links_effect', 'no' );
		if ( 'no' != $link_effect ) {
			$classes[] = 'effect-' . $link_effect;
		}

		// Clearfix class
		$classes[] = 'clr';

		// Set keys equal to vals
		$classes = array_combine( $classes, $classes );
		
		// Apply filters for child theming
		$classes = apply_filters( 'ocean_header_classes', $classes );

		// Turn classes into space seperated string
		$classes = implode( ' ', $classes );

		// return classes
		return $classes;

	}

}

/**
 * Add classes to the top header style wrap
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_top_header_classes' ) ) {

	function oceanwp_top_header_classes() {

		// Header style
		$header_style = oceanwp_header_style();

		// Return if is not the top header style
		if ( 'top' != $header_style ) {
			return;
		}

		// Setup classes array
		$classes = array();

		// Add classes
		$classes[] = 'header-top';

		// Clearfix class
		$classes[] = 'clr';

		// Set keys equal to vals
		$classes = array_combine( $classes, $classes );
		
		// Apply filters for child theming
		$classes = apply_filters( 'ocean_top_header_classes', $classes );

		// Turn classes into space seperated string
		$classes = implode( ' ', $classes );

		// return classes
		return $classes;

	}

}

/**
 * Returns custom logo setting
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_header_logo_setting' ) ) {

	function oceanwp_header_logo_setting() {

		// Get setting
		$setting = get_theme_mod( 'custom_logo' );

		// Return setting
		return apply_filters( 'ocean_custom_logo', $setting );

	}

}

/**
 * Returns retina logo setting
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_header_retina_logo_setting' ) ) {

	function oceanwp_header_retina_logo_setting() {

		// Get setting
		$setting = get_theme_mod( 'ocean_retina_logo' );

		// Return setting
		return apply_filters( 'ocean_retina_logo', $setting );

	}

}

/**
 * Add srcset for retina header logo
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_header_retina_logo' ) ) {

	function oceanwp_header_retina_logo( $attr, $attachment, $size ) {

		$attr['srcset'] = '';

		// Get logo
		$custom_logo 	= oceanwp_header_logo_setting();

		// Get retina logo
		$retina_logo 	= oceanwp_header_retina_logo_setting();

		if ( $custom_logo && $retina_logo ) {

			$cutom_logo_src = wp_get_attachment_image_src( $custom_logo , 'full' );
			$cutom_logo_url = $cutom_logo_src[0];

			$attr['srcset'] = $cutom_logo_url . ' 1x, ' . $retina_logo . ' 2x';

			// Remove the size attr
			unset( $attr['sizes'] );

		}

		// Return attr
		return $attr;

	}

}

/**
 * Returns full screen header logo
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_header_full_screen_logo' ) ) {

	function oceanwp_header_full_screen_logo() {

		// Return false if disabled
		if ( 'full_screen' != oceanwp_header_style() ) {
			return false;
		}

		$html = '';

		// Get logo
		$logo_url 		= get_theme_mod( 'ocean_full_screen_header_logo' );
		$retina_url 	= get_theme_mod( 'ocean_full_screen_header_retina_logo' );
		$srcset 		= '';

		// Logo data
		$logo_data = array(
			'url'    	=> '',
			'width'  	=> '',
			'height' 	=> '',
			'alt' 		=> '',
		);

		if ( $logo_url ) {

			// Logo url
			$logo_data['url'] 			= $logo_url;

			// Logo data
			$logo_attachment_data 		= oceanwp_get_attachment_data_from_url( $logo_url );

			// Get logo data
			if ( $logo_attachment_data ) {
				$logo_data['width']  	= $logo_attachment_data['width'];
				$logo_data['height'] 	= $logo_attachment_data['height'];
				$logo_data['alt'] 		= $logo_attachment_data['alt'];
			}

			// Add srcset attr
			if ( $retina_url ) {
				$srcset = $logo_url . ' 1x, ' . $retina_url . ' 2x';
				$srcset = 'srcset="'. $srcset .'"';
			}

			// Output image
			$html = sprintf( '<a href="%1$s" class="full-screen-logo-link" rel="home"'. oceanwp_get_schema_markup( 'url' ) .'><img src="%2$s" class="full-screen-logo" width="%3$s" height="%4$s" alt="%5$s" %6$s /></a>',
				esc_url( home_url( '/' ) ),
				esc_url( $logo_data['url'] ),
				esc_attr( $logo_data['width'] ),
				esc_attr( $logo_data['height'] ),
				esc_attr( $logo_data['alt'] ),
				$srcset
			);

		}

		// Return logo
		return apply_filters( 'ocean_full_screen_header_logo', $html );

	}

}

/**
 * Echo full_screen header logo
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_custom_full_screen_logo' ) ) {

	function oceanwp_custom_full_screen_logo() {
		echo oceanwp_header_full_screen_logo();
	}

}

/**
 * Returns responsive header logo
 *
 * @since 1.4.0
 */
if ( ! function_exists( 'oceanwp_header_responsive_logo' ) ) {

	function oceanwp_header_responsive_logo() {

		$html = '';

		// Get logo
		$logo_url = get_theme_mod( 'ocean_responsive_logo' );

		// Logo data
		$logo_data = array(
			'url'    	=> '',
			'width'  	=> '',
			'height' 	=> '',
			'alt' 		=> '',
		);

		if ( $logo_url ) {

			// Logo url
			$logo_data['url'] 			= $logo_url;

			// Logo data
			$logo_attachment_data 		= oceanwp_get_attachment_data_from_url( $logo_url );

			// Get logo data
			if ( $logo_attachment_data ) {
				$logo_data['width']  	= $logo_attachment_data['width'];
				$logo_data['height'] 	= $logo_attachment_data['height'];
				$logo_data['alt'] 		= $logo_attachment_data['alt'];
			}

			// Output image
			$html = sprintf( '<a href="%1$s" class="responsive-logo-link" rel="home"'. oceanwp_get_schema_markup( 'url' ) .'><img src="%2$s" class="responsive-logo" width="%3$s" height="%4$s" alt="%5$s" /></a>',
				esc_url( home_url( '/' ) ),
				esc_url( $logo_data['url'] ),
				esc_attr( $logo_data['width'] ),
				esc_attr( $logo_data['height'] ),
				esc_attr( $logo_data['alt'] )
			);

		}

		// Return logo
		return apply_filters( 'ocean_responsive_logo', $html );

	}

}

/**
 * Echo responsive header logo
 *
 * @since 1.4.0
 */
if ( ! function_exists( 'oceanwp_custom_responsive_logo' ) ) {

	function oceanwp_custom_responsive_logo() {
		echo wp_kses_post( oceanwp_header_responsive_logo() );
	}

}

/**
 * Returns social sharing template part
 */
if ( ! function_exists( 'oceanwp_medium_header_elements' ) ) {

	function oceanwp_medium_header_elements() {

		// Default array
		$array = array( 'searchfrom', 'logo', 'social' );

		// Get array from Customizer
		$array = get_theme_mod( 'ocean_medium_header_top_header_elements', $array );

		// Turn into array if string
		if ( $array && ! is_array( $array ) ) {
			$array = explode( ',', $array );
		}

		// Apply filters for easy modification
		$array = apply_filters( 'ocean_medium_header_elements_filter', $array );

		// Return array
		return $array;

	}

}

/**
 * Display content after header
 *
 * @since 1.5.0
 */
if ( ! function_exists( 'oceanwp_display_after_header_content' ) ) {

	function oceanwp_display_after_header_content() {

		// Header style
		$style = oceanwp_header_style();

		// Return false by default
		$return = false;

		// Get after header content
		$content = get_theme_mod( 'ocean_after_header_content' );
		$content = oceanwp_tm_translation( 'ocean_after_header_content', $content );

		// Display header content
		if ( ( 'minimal' == $style
				|| 'transparent' == $style )
			&& $content
		    || ( 'minimal' == $style
				|| 'transparent' == $style )
		    && is_customize_preview() ) {
		    $return = true; ?>
		    <div class="after-header-content">
			    <div class="after-header-content-inner">
			    	<?php
	                // Display top bar content
	                echo do_shortcode( $content ); ?>
			    </div>
		    </div>
		<?php
		}

		// Apply filters and return
		return apply_filters( 'ocean_display_after_header_content', $return );

	}

	add_action( 'ocean_before_nav', 'oceanwp_display_after_header_content', 999 );

}

/**
 * Display navigation
 *
 * @since 1.5.0
 */
if ( ! function_exists( 'oceanwp_display_navigation' ) ) {

	function oceanwp_display_navigation() {

		// Return true by default
		$return = true;

		// Apply filters and return
		return apply_filters( 'ocean_display_navigation', $return );

	}

}

/**
 * Custom nav template
 *
 * @since 1.4.7
 */
if ( ! function_exists( 'oceanwp_custom_nav_template' ) ) {

	function oceanwp_custom_nav_template() {

		// Get template from customizer setting
		$template = get_theme_mod( 'ocean_custom_nav_template' );

		// Apply filters and return
		return apply_filters( 'ocean_custom_nav_template', $template );

	}

}

/**
 * Returns header template content
 *
 * @since 1.4.7
 */
if ( ! function_exists( 'oceanwp_nav_template_content' ) ) {

	function oceanwp_nav_template_content() {

		// Get the template ID
		$content = oceanwp_custom_nav_template();

		// Get template content
		if ( ! empty( $content ) ) {

			$template = get_post( $content );

			if ( $template && ! is_wp_error( $template ) ) {
				$content = $template->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'oceanwp_nav_template_content', $content );

	}

}

/**
 * Returns correct menu classes
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_header_menu_classes' ) ) {

	function oceanwp_header_menu_classes( $return ) {

		// Header style
		$header_style = oceanwp_header_style();

		// Medium header style menu position
		$menu_position = get_theme_mod( 'ocean_medium_header_menu_position', 'center-menu' );

		// Define classes array
		$classes = array();

		// Return wrapper classes
		if ( 'wrapper' == $return ) {

			// Add special class if the dropdown top border option in the admin is disabled
			if ( true != get_theme_mod( 'ocean_menu_dropdown_top_border', true ) ) {
				$classes[] = 'no-top-border';
			}

			// Add clearfix
			$classes[] = 'clr';

			// If medium header style and menu position
			if ( 'medium' == $header_style
				&& $menu_position ) {
				$classes[] = $menu_position;
			}

			// Set keys equal to vals
			$classes = array_combine( $classes, $classes );

			// Apply filters
			$classes = apply_filters( 'ocean_header_menu_wrap_classes', $classes );

		}

		// Inner Classes
		elseif ( 'inner' == $return ) {

			// Core
			$classes[] = 'navigation';
			$classes[] = 'main-navigation';
			$classes[] = 'clr';

			// Set keys equal to vals
			$classes = array_combine( $classes, $classes );

			// Apply filters
			$classes = apply_filters( 'ocean_header_menu_classes', $classes );

		}

		// Return
		if ( is_array( $classes ) ) {
			return implode( ' ', $classes );
		} else {
			return $return;
		}

	}

}

/**
 * Returns custom menu
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_header_custom_menu' ) ) {

	function oceanwp_header_custom_menu() {

		$menu = '';
		return apply_filters( 'ocean_custom_menu', $menu );

	}

}

/**
 * Header logo classes
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_header_logo_classes' ) ) {

	function oceanwp_header_logo_classes() {

		// Define classes array
		$classes = array( 'clr' );

		// If responsive logo
		if ( '' != get_theme_mod( 'ocean_responsive_logo' ) ) {
			$classes[] = 'has-responsive-logo';
		}

		// Get custom full screen logo
		if ( 'full_screen' == oceanwp_header_style()
			&& oceanwp_header_full_screen_logo() ) {
			$classes[] = 'has-full-screen-logo';
		}

		// Apply filters for child theming
		$classes = apply_filters( 'ocean_header_logo_classes', $classes );

		// Turn classes into space seperated string
		$classes = implode( ' ', $classes );

		// Return classes
		return $classes;

	}

}

/**
 * Returns menu search style
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_menu_search_style' ) ) {

	function oceanwp_menu_search_style() {

		// Get search style from Customizer
		$style = get_theme_mod( 'ocean_menu_search_style', 'drop_down' );

		// Apply filters for advanced edits
		$style = apply_filters( 'ocean_menu_search_style', $style );

		// Sanitize output so it's not empty and return
		$style = $style ? $style : 'drop_down';

		// Return style
		return $style;

	}

}

/**
 * Adds the search icon to the menu items
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_add_search_to_menu' ) ) {

	function oceanwp_add_search_to_menu( $items, $args ) {

		// Only used on main menu
		if ( 'main_menu' != $args->theme_location ) {
			return $items;
		}

		// Get search style
		$search_style = oceanwp_menu_search_style();
		$header_style = oceanwp_header_style();

		// Return if disabled
		if ( ! $search_style
			|| 'disabled' == $search_style
			|| 'top' == $header_style
			|| 'vertical' == $header_style ) {
			return $items;
		}
		
		// Get correct search icon class
		if ( 'drop_down' == $search_style ) {
			$class = ' search-dropdown-toggle';
		} elseif ( 'header_replace' == $search_style ) {
			$class = ' search-header-replace-toggle';
		} elseif ( 'overlay' == $search_style ) {
			$class = ' search-overlay-toggle';
		} else {
			$class = '';
		}

		// Add search item to menu
		$items .= '<li class="search-toggle-li">';
			if ( 'full_screen' == $header_style ) {
				$items .= '<form method="get" action="'. esc_url( home_url( '/' ) ) .'" class="header-searchform">';
					$items .= '<input type="search" name="s" value="" autocomplete="off" />';
					// If the headerSearchForm script is not disable
					if ( OCEAN_EXTRA_ACTIVE
						&& class_exists( 'Ocean_Extra_Scripts_Panel' )
						&& Ocean_Extra_Scripts_Panel::get_setting( 'oe_headerSearchForm_script' ) ) {
						$items .= '<label>'. esc_html__( 'Type your search', 'oceanwp' ) .'<span><i></i><i></i><i></i></span></label>';
					}
					if( !function_exists('is_plugin_active') ) {
						include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
					}
					if ( is_plugin_active( 'sitepress-multilingual-cms/sitepress.php' ) ){
						$my_current_lang = apply_filters( 'wpml_current_language', NULL );
						if( ! empty($my_current_lang) ){
							$items .= '<input type="hidden" name="lang" value="'. $my_current_lang .'"/>';
						}
					}
				$items .= '</form>';
			} else {
				$items .= '<a href="#" class="site-search-toggle'. $class .'" aria-label="'. esc_attr( 'Search website', 'oceanwp' ) .'">';
					$items .= '<span class="icon-magnifier" aria-hidden="true"></span>';
				$items .= '</a>';
			}
		$items .= '</li>';

		// Return nav $items
		return $items;

	}

	add_filter( 'wp_nav_menu_items', 'oceanwp_add_search_to_menu', 11, 2 );

}

/**
 * Outputs the search for the top header style
 *
 * @since 1.0.2
 */
if ( ! function_exists( 'oceanwp_top_header_search' ) ) {

	function oceanwp_top_header_search() {

		// Get header & search style
		$search_style = oceanwp_menu_search_style();

		// Return if disabled
		if ( 'top' != oceanwp_header_style()
			|| ! $search_style
			|| 'disabled' == $search_style ) {
			return;
		}

		// Get correct search icon class
		if ( 'drop_down' == $search_style ) {
			$class = ' search-dropdown-toggle';
		} elseif ( 'header_replace' == $search_style ) {
			$class = ' search-header-replace-toggle';
		} elseif ( 'overlay' == $search_style ) {
			$class = ' search-overlay-toggle';
		} else {
			$class = '';
		}

		// Add search item to menu
		echo '<div id="search-toggle">';
			echo '<a href="#" class="site-search-toggle'. esc_attr( $class ) .'" aria-label="'. esc_attr__( 'Search website', 'oceanwp' ) .'">';
				echo '<span class="icon-magnifier" aria-hidden="true"></span>';
			echo '</a>';
		echo '</div>';

	}

}

/**
 * Returns header search style
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_menu_cart_style' ) ) {

	function oceanwp_menu_cart_style() {

		// Return if WooCommerce isn't enabled or icon is disabled
		if ( ! OCEANWP_WOOCOMMERCE_ACTIVE
			|| 'disabled' == get_theme_mod( 'ocean_woo_menu_icon_visibility', 'default' )
			|| 'disabled_desktop' == get_theme_mod( 'ocean_woo_menu_icon_visibility', 'default' )
			|| 'disabled' == get_theme_mod( 'ocean_woo_menu_icon_display', 'icon_count' ) ) {
			return;
		}

		// Get Menu Icon Style
		$style = get_theme_mod( 'ocean_woo_menu_icon_style', 'drop_down' );

		// Return click style for these pages
		if ( is_cart()
			|| is_checkout() ) {
			$style = 'custom_link';
		}

		// Apply filters for advanced edits
		$style = apply_filters( 'ocean_menu_cart_style', $style );

		// Sanitize output so it's not empty
		if ( 'drop_down' == $style
			|| ! $style ) {
			$style = 'drop_down';
		}

		// Return style
		return $style;

	}

}

/**
 * Mobile menu style
 *
 * @since 1.3.0
 */
if ( ! function_exists( 'oceanwp_mobile_menu_style' ) ) {

	function oceanwp_mobile_menu_style() {

		// Get style from customizer setting
		$style = get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' );

		// Sanitize style to make sure it isn't empty
		$style = $style ? $style : 'sidebar';

		// Apply filters and return
		return apply_filters( 'ocean_mobile_menu_style', $style );

	}

}

/*-------------------------------------------------------------------------------*/
/* [ Page Header ]
/*-------------------------------------------------------------------------------*/

/**
 * Page header template
 * I make a function to be able to remove it for the Beaver Themer plugin
 *
 * @since 1.2.5
 */
if ( ! function_exists( 'oceanwp_page_header_template' ) ) {

	function oceanwp_page_header_template() {

		get_template_part( 'partials/page-header' );

	}

	add_action( 'ocean_page_header', 'oceanwp_page_header_template' );

}

/**
 * Checks if the page header is enabled
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_has_page_header' ) ) {

	function oceanwp_has_page_header() {
		
		// Define vars
		$return = true;
		$style  = oceanwp_page_header_style();

		// Check if page header style is set to hidden
		if ( 'hidden' == $style || is_page_template( 'templates/landing.php' ) ) {
			$return = false;
		}

		// Apply filters and return
		return apply_filters( 'ocean_display_page_header', $return );

	}

}

/**
 * Checks if the page header heading is enabled
 *
 * @since 1.4.0
 */
if ( ! function_exists( 'oceanwp_has_page_header_heading' ) ) {

	function oceanwp_has_page_header_heading() {

		// Define vars
		$return = true;

		// Apply filters and return
		return apply_filters( 'ocean_display_page_header_heading', $return );

	}

}

/**
 * Returns page header style
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_page_header_style' ) ) {

	function oceanwp_page_header_style() {

		// Get default page header style defined in Customizer
		$style = get_theme_mod( 'ocean_page_header_style' );

		// If featured image in page header
		if ( true == get_theme_mod( 'ocean_blog_single_featured_image_title', false )
			&& is_singular( 'post' )
			&& has_post_thumbnail() ) {
			$style = 'background-image';
		}

		// Sanitize data
		$style = ( 'default' == $style ) ? '' : $style;
		
		// Apply filters and return
		return apply_filters( 'ocean_page_header_style', $style );

	}

}

/**
 * Return the title
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_title' ) ) {

	function oceanwp_title() {

		// Default title is null
		$title = NULL;

		// Get post ID
		$post_id = oceanwp_post_id();

		// Homepage - display blog description if not a static page
		if ( is_front_page() && ! is_singular( 'page' ) ) {

			if ( get_bloginfo( 'description' ) ) {
				$title = get_bloginfo( 'description' );
			} else {
				$title = esc_html__( 'Recent Posts', 'oceanwp' );
			}

		// Homepage posts page
		} elseif ( is_home() && ! is_singular( 'page' ) ) {

			$title = get_the_title( get_option( 'page_for_posts', true ) );

		}

		// Search needs to go before archives
		elseif ( is_search() ) {
			global $wp_query;
			$title = '<span id="search-results-count">'. $wp_query->found_posts .'</span> '. esc_html__( 'Search Results Found', 'oceanwp' );
		}

		// Archives
		elseif ( is_archive() ) {

			// Author
			if ( is_author() ) {
				$title = get_the_archive_title();
			}

			// Post Type archive title
			elseif ( is_post_type_archive() ) {
				$title = post_type_archive_title( '', false );
			}

			// Daily archive title
			elseif ( is_day() ) {
				$title = sprintf( esc_html__( 'Daily Archives: %s', 'oceanwp' ), get_the_date() );
			}

			// Monthly archive title
			elseif ( is_month() ) {
				$title = sprintf( esc_html__( 'Monthly Archives: %s', 'oceanwp' ), get_the_date( esc_html_x( 'F Y', 'Page title monthly archives date format', 'oceanwp' ) ) );
			}

			// Yearly archive title
			elseif ( is_year() ) {
				$title = sprintf( esc_html__( 'Yearly Archives: %s', 'oceanwp' ), get_the_date( esc_html_x( 'Y', 'Page title yearly archives date format', 'oceanwp' ) ) );
			}

			// Categories/Tags/Other
			else {

				// Get term title
				$title = single_term_title( '', false );

				// Fix for plugins that are archives but use pages
				if ( ! $title ) {
					global $post;
					$title = get_the_title( $post_id );
				}

			}

		} // End is archive check

		// 404 Page
		elseif ( is_404() ) {

			$title = esc_html__( '404: Page Not Found', 'oceanwp' );

		}

		// Fix for WooCommerce My Accounts pages
		elseif( function_exists('is_wc_endpoint_url') && is_wc_endpoint_url() ) {
			$endpoint       = WC()->query->get_current_endpoint();
			$endpoint_title = WC()->query->get_endpoint_title( $endpoint );
			$title          = $endpoint_title ? $endpoint_title : $title;
		}
		
		// Anything else with a post_id defined
		elseif ( $post_id ) {

			// Single Pages
			if ( is_singular( 'page' ) || is_singular( 'attachment' ) ) {
				$title = get_the_title( $post_id );
			}

			// Single blog posts
			elseif ( is_singular( 'post' ) ) {

				if ( 'post-title' == get_theme_mod( 'ocean_blog_single_page_header_title', 'blog' ) ) {
					$title = get_the_title();
				} else {
					$title = esc_html__( 'Blog', 'oceanwp' );
				}

			}

			// Other posts
			else {

				$title = get_the_title( $post_id );
				
			}

		}

		// Last check if title is empty
		$title = $title ? $title : get_the_title();

		// Apply filters and return title
		return apply_filters( 'ocean_title', $title );
		
	}

}

/**
 * Returns page subheading
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_page_subheading' ) ) {

	function oceanwp_get_page_subheading() {

		// Subheading is NULL by default
		$subheading = NULL;

		// Search
		if ( is_search() ) {
			$subheading = esc_html__( 'You searched for:', 'oceanwp' ) .' &quot;'. esc_html( get_search_query( false ) ) .'&quot;';
		}

		// Author
		elseif ( is_author() ) {
			$subheading = esc_html__( 'This author has written', 'oceanwp' ) .' '. get_the_author_posts() .' '. esc_html__( 'articles', 'oceanwp' );
		}

		// Archives
		elseif ( is_post_type_archive() ) {
			$subheading = get_the_archive_description();
		}

		// Apply filters and return
		return apply_filters( 'ocean_post_subheading', $subheading );

	}

}

/**
 * Get taxonomy description
 *
 * @since 1.5.27
 */
if ( ! function_exists( 'oceanwp_get_tax_description' ) ) {

	function oceanwp_get_tax_description() {

		// Subheading is NULL by default
		$desc = NULL;

		// All other Taxonomies
		if ( is_category() || is_tag() ) {
			$desc = term_description();
		}

		// Apply filters and return
		return apply_filters( 'ocean_tax_description', $desc );

	}

}

/**
 * Add taxonomy description
 *
 * @since 1.5.27
 */
if ( ! function_exists( 'oceanwp_tax_description' ) ) {

	function oceanwp_tax_description() {

		if ( $desc = oceanwp_get_tax_description() ) : ?>

			<div class="clr tax-desc">
				<?php echo do_shortcode( $desc ); ?>
			</div>

		<?php endif;

	}

	add_action( 'ocean_before_content_inner', 'oceanwp_tax_description' );

}

/**
 * Display breadcrumbs
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_has_breadcrumbs' ) ) {

	function oceanwp_has_breadcrumbs() {

		// Return true by default
		$return = true;

		// Return false if disabled via Customizer
		if ( true != get_theme_mod( 'ocean_breadcrumbs', true ) ) {
			$return = false;
		}

		// Apply filters and return
		return apply_filters( 'ocean_display_breadcrumbs', $return );

	}

}

/**
 * Outputs Custom CSS for the page title
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_page_header_overlay' ) ) {

	function oceanwp_page_header_overlay() {

		// Define return
		$return = '';

		// Only needed for the background-image style so return otherwise
		if ( 'background-image' != oceanwp_page_header_style() ) {
			return;
		}

		// Return overlay element
		$return = '<span class="background-image-page-header-overlay"></span>';

		// Apply filters for child theming
		$return = apply_filters( 'ocean_page_header_overlay', $return );

		// Return
		echo wp_kses_post( $return );
	}

}

/**
 * Outputs Custom CSS for the page title overlay
 * Place this function before the page header css so the solid color setting works
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_page_header_overlay_css' ) ) {

	function oceanwp_page_header_overlay_css( $output ) {

		// Only needed for the background-image style so return otherwise
		if ( 'background-image' != oceanwp_page_header_style() ) {
			return;
		}

		// Global vars
		$opacity 			= get_theme_mod( 'ocean_page_header_bg_image_overlay_opacity', '0.5' );
		$overlay_color 		= get_theme_mod( 'ocean_page_header_bg_image_overlay_color', '#000000' );

		if ( true == get_theme_mod( 'ocean_blog_single_featured_image_title', false )
			&& is_singular( 'post' ) ) {
			$opacity 		= get_theme_mod( 'ocean_blog_single_title_bg_image_overlay_opacity', '0.5' );
			$overlay_color 	= get_theme_mod( 'ocean_blog_single_title_bg_image_overlay_color', '#000000' );
		}

		$opacity 		= $opacity ? $opacity : '0.5';
		$opacity 		= apply_filters( 'ocean_post_title_bg_overlay', $opacity );
		$overlay_color 	= $overlay_color ? $overlay_color : '#000000';
		$overlay_color 	= apply_filters( 'ocean_post_title_bg_overlay_color', $overlay_color );

		// Define css var
		$css = '';

		// Get page header overlayopacity
		if ( ! empty( $opacity ) && '0.5' != $opacity ) {
			$css .= 'opacity:'. $opacity .';';
		}

		// Get page header overlay color
		if ( ! empty( $overlay_color ) && '#000000' != $overlay_color ) {
			$css .= 'background-color:'. $overlay_color .';';
		}

		// Return CSS
		if ( ! empty( $css ) ) {
			$output .= '.background-image-page-header-overlay{'. $css .'}';
		}

		// Return output css
		return $output;

	}

	add_filter( 'ocean_head_css', 'oceanwp_page_header_overlay_css' );

}

/**
 * Outputs Custom CSS for the page title
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_page_header_css' ) ) {

	function oceanwp_page_header_css( $output ) {

		// Return output if page header is disabled
		if ( ! oceanwp_has_page_header() ) {
			return $output;
		}

		// Define var
		$css = '';

		// Customize background color
		$bg_color 	= get_theme_mod( 'ocean_page_header_background', '#f5f5f5' );

		$bg_color 	= $bg_color ? $bg_color : '#f5f5f5';
		$bg_color 	= apply_filters( 'ocean_post_title_background_color', $bg_color );

		if ( ! empty( $bg_color ) && '#f5f5f5' != $bg_color ) {
			$css .='background-color: '. $bg_color .';';
		}

		// Background image Style
		if ( oceanwp_page_header_style() == 'background-image' ) {

			// Add background image
			$bg_img = get_theme_mod( 'ocean_page_header_bg_image' );

			if ( true == get_theme_mod( 'ocean_blog_single_featured_image_title', false )
				&& is_singular( 'post' )
				&& has_post_thumbnail() ) {
				$bg_img = get_the_post_thumbnail_url();
			}

			// Put the filter before generating the image url
			$bg_img = apply_filters( 'ocean_page_header_background_image', $bg_img );

			// Generate image URL if using ID
			if ( is_numeric( $bg_img ) ) {
				$bg_img = wp_get_attachment_image_src( $bg_img, 'full' );
				$bg_img = $bg_img[0];
			}
			
			$bg_img = $bg_img ? $bg_img : null;
			$bg_img = $bg_img;

			// Immage attrs
			$bg_img_position 		= get_theme_mod( 'ocean_page_header_bg_image_position', 'top center' );
			$bg_img_attachment 		= get_theme_mod( 'ocean_page_header_bg_image_attachment', 'initial' );
			$bg_img_repeat 			= get_theme_mod( 'ocean_page_header_bg_image_repeat', 'no-repeat' );
			$bg_img_size 			= get_theme_mod( 'ocean_page_header_bg_image_size', 'cover' );

			// If image attrs from single post section
			if ( true == get_theme_mod( 'ocean_blog_single_featured_image_title', false )
				&& is_singular( 'post' ) ) {
				$bg_img_position 	= get_theme_mod( 'ocean_blog_single_title_bg_image_position', 'top center' );
				$bg_img_attachment 	= get_theme_mod( 'ocean_blog_single_title_bg_image_attachment', 'initial' );
				$bg_img_repeat 		= get_theme_mod( 'ocean_blog_single_title_bg_image_repeat', 'no-repeat' );
				$bg_img_size 		= get_theme_mod( 'ocean_blog_single_title_bg_image_size', 'cover' );
			}

			$bg_img_position 	= $bg_img_position ? $bg_img_position : 'top center';
			$bg_img_position 	= apply_filters( 'ocean_post_title_bg_image_position', $bg_img_position );
			$bg_img_attachment 	= $bg_img_attachment ? $bg_img_attachment : 'initial';
			$bg_img_attachment 	= apply_filters( 'ocean_post_title_bg_image_attachment', $bg_img_attachment );
			$bg_img_repeat 		= $bg_img_repeat ? $bg_img_repeat : 'no-repeat';
			$bg_img_repeat 		= apply_filters( 'ocean_post_title_bg_image_repeat', $bg_img_repeat );
			$bg_img_size 		= $bg_img_size ? $bg_img_size : 'cover';
			$bg_img_size 		= apply_filters( 'ocean_post_title_bg_image_size', $bg_img_size );


			if ( $bg_img ) {

				// Add css for background image
				$css .= 'background-image: url( '. $bg_img .' ) !important;';

				// Background position
				if ( ! empty( $bg_img_position ) && 'top center' != $bg_img_position && 'initial' != $bg_img_position ) {
					$css .= 'background-position:'. $bg_img_position .';';
				}

				// Background attachment
				if ( ! empty( $bg_img_attachment ) && 'initial' != $bg_img_attachment ) {
					$css .= 'background-attachment:'. $bg_img_attachment .';';
				}

				// Background repeat
				if ( ! empty( $bg_img_repeat ) && 'no-repeat' != $bg_img_repeat && 'initial' != $bg_img_repeat ) {
					$css .= 'background-repeat:'. $bg_img_repeat .';';
				}

				// Background size
				if ( ! empty( $bg_img_size ) && 'cover' != $bg_img_size && 'initial' != $bg_img_size ) {
					$css .= 'background-size:'. $bg_img_size .';';
				}

			}

			// Custom height
			$title_height = get_theme_mod( 'ocean_page_header_bg_image_height', '400' );

			if ( true == get_theme_mod( 'ocean_blog_single_featured_image_title', false )
				&& is_singular( 'post' ) ) {
				$title_height 	= get_theme_mod( 'ocean_blog_single_title_bg_image_height', '400' );
			}

			$title_height 		= $title_height ? $title_height : '400';
			$title_height 		= apply_filters( 'ocean_post_title_height', $title_height );

			if ( ! empty( $title_height ) && '400' != $title_height ) {
				$css .= 'height:'. $title_height .'px;';
			}

		}

		// Apply all css to the page-header class
		if ( ! empty( $css ) ) {
			$css = '.page-header { '. $css .' }';
		}

		// If css var isn't empty add to custom css output
		if ( ! empty( $css ) ) {
			$output .= $css;
		}

		// Return output
		return $output;

	}

	add_filter( 'ocean_head_css', 'oceanwp_page_header_css' );

}

/*-------------------------------------------------------------------------------*/
/* [ Blog ]
/*-------------------------------------------------------------------------------*/

/**
 * Adds post classes
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_blog_wrap_classes' ) ) {

	function oceanwp_blog_wrap_classes( $classes = NULL ) {
		
		// Return custom class if set
		if ( $classes ) {
			return $classes;
		}
		
		// Admin defaults
		$style   = oceanwp_blog_entry_style();
		$classes = array( 'entries', 'clr' );
			
		// Isotope classes
		if ( $style == 'grid-entry' ) {
			$classes[] = 'oceanwp-row';
			if ( 'masonry' == oceanwp_blog_grid_style() ) {
				$classes[] = 'blog-masonry-grid';
			} else {
				if ( 'infinite_scroll' == oceanwp_blog_pagination_style() ) {
					$classes[] = 'blog-masonry-grid';
				} else {
					$classes[] = 'blog-grid';
				}
			}
		}
		
		// Equal heights
		if ( oceanwp_blog_entry_equal_heights() ) {
			$classes[] = 'blog-equal-heights';
		}
		
		// Infinite scroll class
		if ( 'infinite_scroll' == oceanwp_blog_pagination_style() ) {
			$classes[] = 'infinite-scroll-wrap';
		}
		
		// Add filter for child theming
		$classes = apply_filters( 'ocean_blog_wrap_classes', $classes );

		// Turn classes into space seperated string
		if ( is_array( $classes ) ) {
			$classes = implode( ' ', $classes );
		}

		// Echo classes
		echo esc_attr( $classes );
		
	}

}

/**
 * Adds entry classes
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_post_entry_classes' ) ) {

	function oceanwp_post_entry_classes() {

		// Define classes array
		$classes = array();

		// Entry Style
		$entry_style = oceanwp_blog_entry_style();

		// Core classes
		$classes[] = 'blog-entry';
		$classes[] = 'clr';

		// Masonry classes
		if ( 'masonry' == oceanwp_blog_grid_style() ) {
			$classes[] = 'isotope-entry';
		}

		// Add columns for grid style entries
		if ( $entry_style == 'grid-entry' ) {
			$classes[] = 'col';
				$classes[] = oceanwp_grid_class( oceanwp_blog_entry_columns() );

			// Counter
			global $oceanwp_count;
			if ( $oceanwp_count ) {
				$classes[] = 'col-'. $oceanwp_count;
			}
		}

		// No Featured Image Class, don't add if oembed or self hosted meta are defined
		if ( ! has_post_thumbnail()
			&& '' == get_post_meta( get_the_ID(), 'ocean_post_self_hosted_shortcode', true )
			&& '' == get_post_meta( get_the_ID(), 'ocean_post_oembed', true ) ) {
			$classes[] = 'no-featured-image';
		}
		
		// Infinite scroll class
		if ( 'infinite_scroll' == oceanwp_blog_pagination_style() ) {
			$classes[] = 'item-entry';
		}

		// Blog entry style
		$classes[] = $entry_style;

		// Apply filters to entry post class for child theming
		$classes = apply_filters( 'ocean_blog_entry_classes', $classes );

		// Rturn classes array
		return $classes;
		
	}

}

/**
 * Returns correct style for the blog entry based on the customizer
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_blog_entry_style' ) ) {

	function oceanwp_blog_entry_style() {

		// Get default style from Customizer
		$style = get_theme_mod( 'ocean_blog_style', 'large-entry' );

		// Sanitize
		$style = $style ? $style : 'large-entry';

		// Apply filters for child theming
		$style = apply_filters( 'ocean_blog_entry_style', $style );

		// Return style
		return $style;

	}

}

/**
 * Returns correct images size
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_blog_entry_images_size' ) ) {

	function oceanwp_blog_entry_images_size() {

		// Get default size from Customizer
		$size = get_theme_mod( 'ocean_blog_grid_images_size', 'medium' );

		// Sanitize
		$size = $size ? $size : 'medium';

		// Apply filters for child theming
		$size = apply_filters( 'ocean_blog_entry_images_size', $size );

		// Return size
		return $size;

	}

}

/**
 * Returns the grid style
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_blog_grid_style' ) ) {

	function oceanwp_blog_grid_style() {

		// Get default style from Customizer
		$style = get_theme_mod( 'ocean_blog_grid_style', 'fit-rows' );

		// Sanitize
		$style = $style ? $style : 'fit-rows';

		// Apply filters for child theming
		$style = apply_filters( 'ocean_blog_grid_style', $style );

		// Return style
		return $style;

	}

}

/**
 * Checks if it's a fit-rows style grid
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_blog_fit_rows' ) ) {

	function oceanwp_blog_fit_rows() {

		// Return false by default
		$return = false;

		// Get current blog style
		if ( 'grid-entry' == oceanwp_blog_entry_style() ) {
			$return = true;
		} else {
			$return = false;
		}

		// Apply filters for child theming
		$return = apply_filters( 'ocean_blog_fit_rows', $return );

		// Return bool
		return $return;

	}

}

/**
 * Checks if the blog entries should have equal heights
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_blog_entry_equal_heights' ) ) {

	function oceanwp_blog_entry_equal_heights() {
		if ( ! get_theme_mod( 'ocean_blog_grid_equal_heights', false ) ) {
			return false;
		}
		$entry_style = oceanwp_blog_entry_style();
		if ( 'grid-entry' == $entry_style
			&& 'masonry' != oceanwp_blog_grid_style() ) {
			return true;
		}
	}


}

/**
 * Returns correct columns for the blog entries
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_blog_entry_columns' ) ) {

	function oceanwp_blog_entry_columns() {

		// Get columns from customizer setting
		$columns = get_theme_mod( 'ocean_blog_grid_columns', '2' );

		// Sanitize
		$columns = $columns ? $columns : '2';

		// Apply filters for child theming
		$columns = apply_filters( 'ocean_blog_entry_columns', $columns );

		// Return columns
		return $columns;

	}

}

/**
 * Check if the post has a gallery
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_post_has_gallery' ) ) {

	function oceanwp_post_has_gallery( $post_id = '' ) {

		$post_id = $post_id ? $post_id : get_the_ID();

		if ( get_post_meta( $post_id, 'ocean_gallery_id', true ) ) {
			return true;
		}

	}

}

/**
 * Retrieve attachment IDs
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_gallery_ids' ) ) {

	function oceanwp_get_gallery_ids( $post_id = '' ) {

		$post_id = $post_id ? $post_id : get_the_ID();
		$attachment_ids = get_post_meta( $post_id, 'ocean_gallery_id', true );

		if ( $attachment_ids ) {
			return $attachment_ids;
		}

	}

}

/**
 * Retrieve attachment data
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_attachment' ) ) {

	function oceanwp_get_attachment( $id ) {

		$attachment = get_post( $id );

		return array(
			'alt'         => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
			'caption'     => $attachment->post_excerpt,
			'description' => $attachment->post_content,
			'href'        => get_permalink( $attachment->ID ),
			'src'         => $attachment->guid,
			'title'       => $attachment->post_title,
		);

	}

}

/**
 * Return gallery count
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_gallery_count' ) ) {

	function oceanwp_gallery_count() {

		$ids = oceanwp_get_gallery_ids();
		return count( $ids );

	}

}

/**
 * Check if lightbox is enabled
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_gallery_is_lightbox_enabled' ) ) {

	function oceanwp_gallery_is_lightbox_enabled() {

		if ( 'on' == get_post_meta( get_the_ID(), 'ocean_gallery_link_images', true ) ) {
			return true;
		}

	}

}

/**
 * Returns post media
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_post_media' ) ) {

	function oceanwp_get_post_media( $post_id = '' ) {

		// Define video variable
		$video = '';

		// Get correct ID
		$post_id = $post_id ? $post_id : get_the_ID();

		// Embed
		if ( $meta = get_post_meta( $post_id, 'ocean_post_video_embed', true ) ) {
			$video = $meta;
		}

		// Check for self-hosted first
		elseif ( $meta = get_post_meta( $post_id, 'ocean_post_self_hosted_media', true ) ) {
			$video = $meta;
		}

		// Check for post oembed
		elseif ( $meta = get_post_meta( $post_id, 'ocean_post_oembed', true ) ) {
			$video = $meta;
		}

		// Apply filters for child theming
		$video = apply_filters( 'ocean_get_post_video', $video );

		// Return data
		return $video;

	}

}

/**
 * Returns post video HTML
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_post_video_html' ) ) {

	function oceanwp_get_post_video_html( $video = '' ) {

		// Get video
		$video = $video ? $video : oceanwp_get_post_media();

		// Return if video is empty
		if ( empty( $video ) ) {
			return;
		}

		// Check post format for standard post type
		if ( 'post' == get_post_type() && 'video' != get_post_format() ) {
			return;
		}

		// Get oembed code and return
		if ( ! is_wp_error( $oembed = wp_oembed_get( $video ) ) && $oembed ) {
			return '<div class="responsive-video-wrap">'. $oembed .'</div>';
		}

		// Display using apply_filters if it's self-hosted
		else {

			$video = apply_filters( 'the_content', $video );

			// Add responsive video wrap for youtube/vimeo embeds
			if ( strpos( $video, 'youtube' ) || strpos( $video, 'vimeo' ) ) {
				return '<div class="responsive-video-wrap">'. $video .'</div>';
			}

			// Else return without responsive wrap
			else {
				return $video;
			}

		}

	}

}

/**
 * Returns post audio
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_post_audio_html' ) ) {

	function oceanwp_get_post_audio_html( $audio = '' ) {

		// Get audio
		$audio = $audio ? $audio : oceanwp_get_post_media();

		// Return if audio is empty
		if ( empty( $audio ) ) {
			return;
		}

		// Check post format for standard post type
		if ( 'post' == get_post_type() && 'audio' != get_post_format() ) {
			return;
		}

		// Get oembed code and return
		if ( ! is_wp_error( $oembed = wp_oembed_get( $audio ) ) && $oembed ) {
			return '<div class="responsive-video-wrap">'. $oembed .'</div>';
		}

		// Display using apply_filters if it's self-hosted
		else {

			$audio = apply_filters( 'the_content', $audio );

			// Add responsive audio wrap for youtube/vimeo embeds
			if ( strpos( $audio, 'youtube' ) || strpos( $audio, 'vimeo' ) ) {
				return '<div class="responsive-video-wrap">'. $audio .'</div>';
			}

			// Else return without responsive wrap
			else {
				return $audio;
			}

		}

	}

}

/**
 * Returns blog entry elements for the customizer
 *
 * @since 1.1.0
 */
if ( ! function_exists( 'oceanwp_blog_entry_elements' ) ) {

	function oceanwp_blog_entry_elements() {

		// Default elements
		$elements = apply_filters( 'ocean_blog_entry_elements', array(
			'featured_image'    => esc_html__( 'Featured Image', 'oceanwp' ),
			'title'       		=> esc_html__( 'Title', 'oceanwp' ),
			'meta' 				=> esc_html__( 'Meta', 'oceanwp' ),
			'content' 			=> esc_html__( 'Content', 'oceanwp' ),
			'read_more'   		=> esc_html__( 'Read More', 'oceanwp' ),
		) );

		// Return elements
		return $elements;

	}

}

/**
 * Returns blog entry elements positioning
 *
 * @since 1.1.0
 */
if ( ! function_exists( 'oceanwp_blog_entry_elements_positioning' ) ) {

	function oceanwp_blog_entry_elements_positioning() {

		// Default sections
		$sections = array( 'featured_image', 'title', 'meta', 'content', 'read_more' );

		// Get sections from Customizer
		$sections = get_theme_mod( 'ocean_blog_entry_elements_positioning', $sections );

		// Turn into array if string
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification
		$sections = apply_filters( 'ocean_blog_entry_elements_positioning', $sections );

		// Return sections
		return $sections;

	}

}

/**
 * Returns blog entry meta
 *
 * @since 1.0.5.1
 */
if ( ! function_exists( 'oceanwp_blog_entry_meta' ) ) {

	function oceanwp_blog_entry_meta() {

		// Default sections
		$sections = array( 'author', 'date', 'categories', 'comments' );

		// Get sections from Customizer
		$sections = get_theme_mod( 'ocean_blog_entry_meta', $sections );

		// Turn into array if string
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification
		$sections = apply_filters( 'ocean_blog_entry_meta', $sections );

		// Return sections
		return $sections;

	}

}

/**
 * Returns blog single elements for the customizer
 *
 * @since 1.1.0
 */
if ( ! function_exists( 'oceanwp_blog_single_elements' ) ) {

	function oceanwp_blog_single_elements() {

		// Default elements
		$elements = apply_filters( 'ocean_blog_single_elements', array(
			'featured_image'    => esc_html__( 'Featured Image', 'oceanwp' ),
			'title'       		=> esc_html__( 'Title', 'oceanwp' ),
			'meta' 				=> esc_html__( 'Meta', 'oceanwp' ),
			'content' 			=> esc_html__( 'Content', 'oceanwp' ),
			'tags' 				=> esc_html__( 'Tags', 'oceanwp' ),
			'social_share'   	=> esc_html__( 'Social Share', 'oceanwp' ),
			'next_prev'     	=> esc_html__( 'Next/Prev Links', 'oceanwp' ),
			'author_box'       	=> esc_html__( 'Author Box', 'oceanwp' ),
			'related_posts' 	=> esc_html__( 'Related Posts', 'oceanwp' ),
			'single_comments'   => esc_html__( 'Comments', 'oceanwp' ),
		) );

		// Return elements
		return $elements;

	}

}

/**
 * Returns blog single elements positioning
 *
 * @since 1.1.0
 */
if ( ! function_exists( 'oceanwp_blog_single_elements_positioning' ) ) {

	function oceanwp_blog_single_elements_positioning() {

		// Default sections
		$sections = array( 'featured_image', 'title', 'meta', 'content', 'tags', 'social_share', 'next_prev', 'author_box', 'related_posts', 'single_comments' );

		// Get sections from Customizer
		$sections = get_theme_mod( 'ocean_blog_single_elements_positioning', $sections );

		// Turn into array if string
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification
		$sections = apply_filters( 'ocean_blog_single_elements_positioning', $sections );

		// Return sections
		return $sections;

	}

}

/**
 * Returns blog single meta
 *
 * @since 1.0.5.1
 */
if ( ! function_exists( 'oceanwp_blog_single_meta' ) ) {

	function oceanwp_blog_single_meta() {

		// Default sections
		$sections = array( 'author', 'date', 'categories', 'comments' );

		// Get sections from Customizer
		$sections = get_theme_mod( 'ocean_blog_single_meta', $sections );

		// Turn into array if string
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification
		$sections = apply_filters( 'ocean_blog_single_meta', $sections );

		// Return sections
		return $sections;

	}

}

/**
 * Comments and pingbacks
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_comment' ) ) {

	function oceanwp_comment( $comment, $args, $depth ) {

		switch ( $comment->comment_type ) :
			case 'pingback' :
			case 'trackback' :
			// Display trackbacks differently than normal comments.
		?>

		<li <?php comment_class(); ?> id="comment-<?php comment_ID(); ?>">

			<article id="comment-<?php comment_ID(); ?>" class="comment-container">
				<p><?php esc_html_e( 'Pingback:', 'oceanwp' ); ?> <span><?php oceanwp_schema_markup( 'author_name' ); ?>><?php comment_author_link(); ?></span> <?php edit_comment_link( esc_html__( '(Edit)', 'oceanwp' ), '<span class="edit-link">', '</span>' ); ?></p>
			</article>

			<?php
			break;
				default :
				// Proceed with normal comments.
				global $post;
			?>

			<li id="comment-<?php comment_ID(); ?>" class="comment-container">

				<article <?php comment_class( 'comment-body' ); ?>>

					<?php echo get_avatar( $comment, apply_filters( 'ocean_comment_avatar_size', 150 ) ); ?>

		            <div class="comment-content">
		                <div class="comment-author">
		                    <span class="comment-link"><?php printf( esc_html__( '%s ', 'oceanwp' ), sprintf( '%s', get_comment_author_link() ) ); ?></span>

		                    <span class="comment-meta commentmetadata">
		                    	<?php if ( ! is_rtl() ) { ?>
		                        	<span class="comment-date"><?php comment_date('j M Y'); ?></span>
		                        <?php } ?>

		                        <?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>

		                        <?php edit_comment_link(__( 'edit', 'oceanwp' )); ?>

		                    	<?php if ( is_rtl() ) { ?>
		                        	<span class="comment-date"><?php comment_date('j M Y'); ?></span>
		                        <?php } ?>
		                    </span>
		                </div>

		                <div class="clr"></div>

		                <div class="comment-entry">
		                    <?php if ( '0' == $comment->comment_approved ) : ?>
		                        <p class="comment-awaiting-moderation"><?php esc_html_e( 'Your comment is awaiting moderation.', 'oceanwp' ); ?></p>
		                    <?php endif; ?>

		                    <div class="comment-content">
		                        <?php comment_text(); ?>
		                    </div>
		                </div>
		            </div>

				</article><!-- #comment-## -->

			<?php
			break;
		endswitch; // end comment_type check
	}

}

/**
 * Comment fields
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_modify_comment_form_fields' ) ) {

	function oceanwp_modify_comment_form_fields( $fields ) {

		$commenter = wp_get_current_commenter();
		$req       = get_option( 'require_name_email' );

		$fields['author'] 	= '<div class="comment-form-author"><label for="author" class="screen-reader-text">'. esc_html( 'Enter your name or username', 'screen reader text for comment author', 'oceanwp' ) . '</label><input type="text" name="author" id="author" value="'. esc_attr( $commenter['comment_author'] ) .'" placeholder="'. esc_attr__( 'Name (required)', 'oceanwp' ) .'" size="22" tabindex="0"'. ( $req ? ' aria-required="true"' : '' ) .' class="input-name" /></div>';

		$fields['email'] 	= '<div class="comment-form-email"><label for="email" class="screen-reader-text">'. esc_html( 'Enter your email', 'screen reader text for comment author email', 'oceanwp' ) . '</label><input type="text" name="email" id="email" value="'. esc_attr( $commenter['comment_author_email'] ) .'" placeholder="'. esc_attr__( 'Email (required)', 'oceanwp' ) .'" size="22" tabindex="0"'. ( $req ? ' aria-required="true"' : '' ) .' class="input-email" /></div>';

		$fields['url'] 		= '<div class="comment-form-url"><label for="url" class="screen-reader-text">'. esc_html( 'Enter your website URL (optional)', 'screen reader text for comment author website url', 'oceanwp' ) . '</label><input type="text" name="url" id="url" value="'. esc_attr( $commenter['comment_author_url'] ) .'" placeholder="'. esc_attr__( 'Website', 'oceanwp' ) .'" size="22" tabindex="0" class="input-website" /></div>';

		return $fields;

	}

	add_filter( 'comment_form_default_fields', 'oceanwp_modify_comment_form_fields' );

}

/**
 * Numbered Pagination
 *
 * @since	1.0.0
 * @link	https://codex.wordpress.org/Function_Reference/paginate_links
 */
if ( ! function_exists( 'oceanwp_pagination') ) {

	function oceanwp_pagination( $query = '', $echo = true ) {
		
		// Arrows with RTL support
		$prev_arrow = is_rtl() ? 'fa fa-angle-right' : 'fa fa-angle-left';
		$next_arrow = is_rtl() ? 'fa fa-angle-left' : 'fa fa-angle-right';
		
		// Get global $query
		if ( ! $query ) {
			global $wp_query;
			$query = $wp_query;
		}

		// Set vars
		$total  = $query->max_num_pages;
		$big    = 999999999;

		// Display pagination if total var is greater then 1 ( current query is paginated )
		if ( $total > 1 ) {

			// Get current page
			if ( $current_page = get_query_var( 'paged' ) ) {
				$current_page = $current_page;
			} elseif ( $current_page = get_query_var( 'page' ) ) {
				$current_page = $current_page;
			} else {
				$current_page = 1;
			}

			// Get permalink structure
			if ( get_option( 'permalink_structure' ) ) {
				if ( is_page() ) {
					$format = 'page/%#%/';
				} else {
					$format = '/%#%/';
				}
			} else {
				$format = '&paged=%#%';
			}

			$args = apply_filters( 'ocean_pagination_args', array(
				'base'      => str_replace( $big, '%#%', html_entity_decode( get_pagenum_link( $big ) ) ),
				'format'    => $format,
				'current'   => max( 1, $current_page ),
				'total'     => $total,
				'mid_size'  => 3,
				'type'      => 'list',
				'prev_text' => '<span class="screen-reader-text">'. esc_attr__( 'Go to the previous page','oceanwp' ) .'</span><i class="'. $prev_arrow .'" aria-hidden="true"></i>',
				'next_text' => '<span class="screen-reader-text">'. esc_attr__( 'Go to the next page','oceanwp' ) .'</span><i class="'. $next_arrow .'" aria-hidden="true"></i>',
			) );

			// Output pagination
			if ( $echo ) {
				echo '<div class="oceanwp-pagination clr">'. wp_kses_post( paginate_links( $args ) ) .'</div>';
			} else {
				return '<div class="oceanwp-pagination clr">'. wp_kses_post( paginate_links( $args ) ) .'</div>';
			}
		}
	}

}

/**
 * Next and previous pagination
 *
 * @since	1.0.0
 */
if ( ! function_exists( 'oceanwp_pagejump' ) ) {

	function oceanwp_pagejump( $pages = '', $range = 4, $echo = true ) {

		// Vars
		global $wp_query;
		$output = '';

		// Display next/previous pagination
		if ( $wp_query->max_num_pages > 1 ) {

			$output .= '<div class="page-jump clr">';
				$output .= '<div class="alignleft newer-posts">';
					$output .= get_previous_posts_link( '<span aria-hidden="true">&larr;</span> '. esc_attr__( 'Newer Posts', 'oceanwp' ) );
				$output .= '</div>';
				$output .= '<div class="alignright older-posts">';
					$output .= get_next_posts_link( esc_attr__( 'Older Posts', 'oceanwp' ) .' <span aria-hidden="true">&rarr;</span>' );
				$output .= '</div>';
			$output .= '</div>';

			if ( $echo ) {
				echo wp_kses_post( $output );
			} else {
				return $output;
			}

		}
		
	}

}

/**
 * Infinite Scroll Pagination
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_infinite_scroll' ) ) {

	function oceanwp_infinite_scroll( $type = 'standard' ) {

		// Load infinite scroll script
		wp_enqueue_script( 'infinitescroll' );

		// Last text
		$last = get_theme_mod( 'ocean_blog_infinite_scroll_last_text' );
		$last = oceanwp_tm_translation( 'ocean_blog_infinite_scroll_last_text', $last );
		$last = $last ? $last: esc_html__( 'End of content', 'oceanwp' );

		// Error text
		$error = get_theme_mod( 'ocean_blog_infinite_scroll_error_text' );
		$error = oceanwp_tm_translation( 'ocean_blog_infinite_scroll_error_text', $error );
		$error = $error ? $error: esc_html__( 'No more pages to load', 'oceanwp' );
		
		// Output pagination HTML
		$output = '';
		$output .= '<div class="scroller-status">';
			$output .= '<div class="loader-ellips infinite-scroll-request">';
				$output .= '<span class="loader-ellips__dot"></span>';
				$output .= '<span class="loader-ellips__dot"></span>';
				$output .= '<span class="loader-ellips__dot"></span>';
				$output .= '<span class="loader-ellips__dot"></span>';
			$output .= '</div>';
			$output .= '<p class="scroller-status__message infinite-scroll-last">'. $last .'</p>';
			$output .= '<p class="scroller-status__message infinite-scroll-error">'. $error .'</p>';
		$output .= '</div>';
		$output .= '<div class="infinite-scroll-nav clr">';
			$output .= '<div class="alignleft newer-posts">'. get_previous_posts_link( '<span aria-hidden="true">&larr;</span> '. esc_attr__( 'Newer Posts', 'oceanwp' ) ) .'</div>';
			$output .= '<div class="alignright older-posts">'. get_next_posts_link( esc_attr__( 'Older Posts', 'oceanwp' ) .' <span aria-hidden="true">&rarr;</span>' ) .'</div>';
		$output .= '</div>';

		echo wp_kses_post( $output );

	}

}

/**
 * Blog Pagination
 * Used to load the correct pagination function for blog archives
 * Execute the correct pagination function based on the theme settings
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_blog_pagination' ) ) {

	function oceanwp_blog_pagination() {
		
		// Admin Options
		$blog_style       = get_theme_mod( 'ocean_blog_style', 'large-entry' );
		$pagination_style = get_theme_mod( 'ocean_blog_pagination_style', 'standard' );
		
		// Category based settings
		if ( is_category() ) {
			
			// Get taxonomy meta
			$term       = get_query_var( 'cat' );
			$term_data  = get_option( 'category_'. $term );
			$term_style = $term_pagination = '';
			
			if ( isset( $term_data['oceanwp_term_style'] ) ) {
				$term_style = '' != $term_data['oceanwp_term_style'] ? $term_data['oceanwp_term_style'] .'' : $term_style;
			}
			
			if ( isset( $term_data['oceanwp_term_pagination'] ) ) {
				$term_pagination = '' != $term_data['oceanwp_term_pagination'] ? $term_data['oceanwp_term_pagination'] .'' : '';
			}
			
			if ( $term_pagination ) {
				$pagination_style = $term_pagination;
			}
			
		}
		
		// Set default $type for infnite scroll
		if ( 'grid-entry' == $blog_style ) {
			$infinite_type = 'standard-grid';
		} else {
			$infinite_type = 'standard';
		}
		
		// Execute the correct pagination function
		if ( 'infinite_scroll' == $pagination_style ) {
			oceanwp_infinite_scroll( $infinite_type );
		} else if ( $pagination_style == 'next_prev' ) {
			oceanwp_pagejump();
		} else {
			oceanwp_pagination();
		}

	}

}

/**
 * Returns the correct pagination style
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_blog_pagination_style' ) ) {

	function oceanwp_blog_pagination_style() {

		// Get default style from Customizer
		$style = get_theme_mod( 'ocean_blog_pagination_style', 'standard' );

		// Apply filters for child theming
		$style = apply_filters( 'ocean_blog_pagination_style', $style );

		// Return style
		return $style;
	}

}

/**
 * Get excerpt
 *
 * @since 1.5.6
 */
if ( ! function_exists( 'oceanwp_excerpt' ) ) {

	function oceanwp_excerpt( $length = 30 ) {
		global $post;
		$output = '';

		// Check for custom excerpt
		if ( isset( $post->ID ) && has_excerpt( $post->ID ) ) {
			$output = $post->post_excerpt;
		}

		// No custom excerpt
		elseif ( isset( $post->post_content ) ) {

			// Check for more tag and return content if it exists
			if ( strpos( $post->post_content, '<!--more-->' ) ) {
				$output = apply_filters( 'the_content', get_the_content() );
			}

			// No more tag defined
			else {
				$output = wp_trim_words( strip_shortcodes( $post->post_content ), $length );
			}

		}

		$output = apply_filters('oceanwp_excerpt', $output);

		return $output;

	}

}

/*-------------------------------------------------------------------------------*/
/* [ Footer ]
/*-------------------------------------------------------------------------------*/

/**
 * Display footer widgets
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_display_footer_widgets' ) ) {

	function oceanwp_display_footer_widgets() {

		// Return true by default
		$return = true;

		// Return false if disabled via Customizer
		if ( true != get_theme_mod( 'ocean_footer_widgets', true ) ) {
			$return = false;
		}

		// Apply filters and return
		return apply_filters( 'ocean_display_footer_widgets', $return );

	}

}

/**
 * Display footer bottom
 *
 * @since 1.1.2
 */
if ( ! function_exists( 'oceanwp_display_footer_bottom' ) ) {

	function oceanwp_display_footer_bottom() {

		// Return true by default
		$return = true;

		// Return false if disabled via Customizer
		if ( true != get_theme_mod( 'ocean_footer_bottom', true ) ) {
			$return = false;
		}

		// Apply filters and return
		return apply_filters( 'ocean_display_footer_bottom', $return );

	}

}

/**
 * Display scrool up button
 *
 * @since 1.5.0
 */
if ( ! function_exists( 'oceanwp_display_scroll_up_button' ) ) {

	function oceanwp_display_scroll_up_button() {

		// Return true by default
		$return = true;

		// Return false if disabled via Customizer
		if ( true != get_theme_mod( 'ocean_scroll_top', true ) ) {
			$return = false;
		}

		// Apply filters and return
		return apply_filters( 'ocean_display_scroll_up_button', $return );

	}

}

/**
 * Footer template
 * I make a function to be able to remove it for the Beaver Themer plugin
 *
 * @since 1.2.5
 */
if ( ! function_exists( 'oceanwp_footer_template' ) ) {

	function oceanwp_footer_template() {

		if ( oceanwp_display_footer_widgets()
        	|| oceanwp_display_footer_bottom() ) {
        	get_template_part( 'partials/footer/layout' );
        }

	}

	add_action( 'ocean_footer', 'oceanwp_footer_template' );

}

/**
 * Add classes to the footer wrap
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_footer_classes' ) ) {

	function oceanwp_footer_classes() {

		// Setup classes array
		$classes = array();

		// Default class
		$classes[] = 'site-footer';

		// Parallax footer
		if ( 'on' == get_theme_mod( 'ocean_parallax_footer', 'off' ) ) {
			$classes[] = 'parallax-footer';
		}

		// Set keys equal to vals
		$classes = array_combine( $classes, $classes );
		
		// Apply filters for child theming
		$classes = apply_filters( 'ocean_footer_classes', $classes );

		// Turn classes into space seperated string
		$classes = implode( ' ', $classes );

		// return classes
		return $classes;

	}

}

/*-------------------------------------------------------------------------------*/
/* [ WooCommerce ]
/*-------------------------------------------------------------------------------*/

/**
 * Checks if on the WooCommerce shop page.
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_is_woo_shop' ) ) {

	function oceanwp_is_woo_shop() {
		if ( ! OCEANWP_WOOCOMMERCE_ACTIVE ) {
			return false;
		} elseif ( function_exists( 'is_shop' ) && is_shop() ) {
			return true;
		}
	}

}

/**
 * Checks if on a WooCommerce tax.
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_is_woo_tax' ) ) {

	function oceanwp_is_woo_tax() {
		if ( ! OCEANWP_WOOCOMMERCE_ACTIVE ) {
			return false;
		} elseif ( ! is_tax() ) {
			return false;
		} elseif ( function_exists( 'is_product_taxonomy' ) ) {
			if ( is_product_taxonomy() ) {
				return true;
			}
		}
	}

}

/**
 * Checks if on singular WooCommerce product post.
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_is_woo_single' ) ) {

	function oceanwp_is_woo_single() {
		if ( ! OCEANWP_WOOCOMMERCE_ACTIVE ) {
			return false;
		} elseif ( is_woocommerce() && is_singular( 'product' ) ) {
			return true;
		}
	}

}

/*-------------------------------------------------------------------------------*/
/* [ Other ]
/*-------------------------------------------------------------------------------*/

/**
 * Theme Branding
 *
 * @since 1.4.0
 */
if ( ! function_exists( 'oceanwp_theme_branding' ) ) {

	function oceanwp_theme_branding() {

		$return = esc_html__( 'OceanWP', 'oceanwp' );

		// Return and apply filters for child theming
		return apply_filters( 'ocean_theme_branding', $return );
	}

}

/**
 * Return padding/margin values for customizer
 *
 * @since 1.4.9
 */
if ( ! function_exists( 'oceanwp_spacing_css' ) ) {

	function oceanwp_spacing_css( $top, $right, $bottom, $left ) {

		// Add px and 0 if no value
		$s_top 		= ( isset( $top ) && '' !== $top ) ? intval( $top ) . 'px ' : '0px ';
		$s_right	= ( isset( $right ) && '' !== $right ) ? intval( $right ) . 'px ' : '0px ';
		$s_bottom 	= ( isset( $bottom ) && '' !== $bottom ) ? intval( $bottom ) . 'px ' : '0px ';
		$s_left 	= ( isset( $left ) && '' !== $left ) ? intval( $left ) . 'px' : '0px';
		
		// Return one value if it is the same on every inputs
		if ( ( intval( $s_top ) === intval( $s_right ) )
			&& ( intval( $s_right ) === intval( $s_bottom ) )
			&& ( intval( $s_bottom ) === intval( $s_left ) ) ) {
			return $s_left;
		}
		
		// Return
		return $s_top . $s_right . $s_bottom . $s_left;
	}

}

/**
 * Translation support
 *
 * @since 1.3.7
 */
if ( ! function_exists( 'oceanwp_hamburgers_styles' ) ) {

	function oceanwp_hamburgers_styles() {

		// Styles
		$style = array(
			'default'	   	=> esc_html__( 'Default Icon', 'oceanwp' ),
			'3dx'	   		=> esc_html__( '3D X', 'oceanwp' ),
			'3dx-r'	   		=> esc_html__( '3D X Reverse', 'oceanwp' ),
			'3dy'	   		=> esc_html__( '3D Y', 'oceanwp' ),
			'3dy-r'	   		=> esc_html__( '3D Y Reverse', 'oceanwp' ),
			'3dxy'	   		=> esc_html__( '3D XY', 'oceanwp' ),
			'3dxy-r'	   	=> esc_html__( '3D XY Reverse', 'oceanwp' ),
			'arrow'	   		=> esc_html__( 'Arrow', 'oceanwp' ),
			'arrow-r'	   	=> esc_html__( 'Arrow Reverse', 'oceanwp' ),
			'arrowalt'	   	=> esc_html__( 'Arrowalt', 'oceanwp' ),
			'arrowalt-r'	=> esc_html__( 'Arrowalt Reverse', 'oceanwp' ),
			'arrowturn'	   	=> esc_html__( 'Arrowturn', 'oceanwp' ),
			'arrowturn-r'	=> esc_html__( 'Arrowturn Reverse', 'oceanwp' ),
			'boring'	   	=> esc_html__( 'Boring', 'oceanwp' ),
			'collapse'	   	=> esc_html__( 'Collapse', 'oceanwp' ),
			'collapse-r'	=> esc_html__( 'Collapse Reverse', 'oceanwp' ),
			'elastic'	   	=> esc_html__( 'Elastic', 'oceanwp' ),
			'elastic-r'	   	=> esc_html__( 'Elastic Reverse', 'oceanwp' ),
			'minus'	   		=> esc_html__( 'Minus', 'oceanwp' ),
			'slider'	   	=> esc_html__( 'Slider', 'oceanwp' ),
			'slider-r'	   	=> esc_html__( 'Slider Reverse', 'oceanwp' ),
			'spin'	   		=> esc_html__( 'Spin', 'oceanwp' ),
			'spin-r'	   	=> esc_html__( 'Spin Reverse', 'oceanwp' ),
			'spring'	   	=> esc_html__( 'Spring', 'oceanwp' ),
			'spring-r'	   	=> esc_html__( 'Spring Reverse', 'oceanwp' ),
			'stand'	   		=> esc_html__( 'Stand', 'oceanwp' ),
			'stand-r'	   	=> esc_html__( 'Stand Reverse', 'oceanwp' ),
			'squeeze'	   	=> esc_html__( 'Squeeze', 'oceanwp' ),
			'vortex'	   	=> esc_html__( 'Vortex', 'oceanwp' ),
			'vortex-r'	   	=> esc_html__( 'Vortex Reverse', 'oceanwp' ),
		);
		
		// Apply filters for child theming
		$style = apply_filters( 'ocean_hamburgers_styles', $style );

		// Return
		return $style;

	}

}

/**
 * Translation support
 *
 * @since 1.1.4
 */
if ( ! function_exists( 'oceanwp_tm_translation' ) ) {

	function oceanwp_tm_translation( $id, $val = '' ) {

		// Translate theme mod val
		if ( $val ) {

			// Polylang Translation
			if ( function_exists( 'pll__' ) && $id ) {
				$val = pll__( $val );
			}

			// Return the value
			return $val;

		}

	}

}

/**
 * Register translation strings
 *
 * @since 1.1.4
 */
if ( ! function_exists( 'oceanwp_register_tm_strings' ) ) {

	function oceanwp_register_tm_strings() {

		return apply_filters( 'ocean_register_tm_strings', array(
			'ocean_top_bar_content' 				=> '',
			'ocean_after_header_content' 			=> '',
			'ocean_mobile_menu_text' 				=> esc_html__( 'Menu', 'oceanwp' ),
			'ocean_mobile_menu_close_text' 			=> esc_html__( 'Close', 'oceanwp' ),
			'ocean_mobile_menu_close_btn_text' 		=> esc_html__( 'Close Menu', 'oceanwp' ),
			'ocean_footer_copyright_text' 			=> esc_html__( 'Copyright [oceanwp_date] - OceanWP Theme by Nick', 'oceanwp' ),
			'ocean_woo_menu_icon_custom_link' 		=> '',
			'ocean_blog_infinite_scroll_last_text' 	=> '',
			'ocean_blog_infinite_scroll_error_text' => '',
			'ocean_woo_off_canvas_filter_text' 		=> esc_html__( 'Filter', 'oceanwp' ),
			'ocean_woo_infinite_scroll_last_text' 	=> '',
			'ocean_woo_infinite_scroll_error_text' 	=> '',
		) );

	}

}

/**
 * Returns array of Social Options
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_social_options' ) ) {

	function oceanwp_social_options() {
		return apply_filters( 'ocean_social_options', array(
			'twitter' => array(
				'label' => esc_html__( 'Twitter', 'oceanwp' ),
				'icon_class' => 'fab fa-twitter',
			),
			'facebook' => array(
				'label' => esc_html__( 'Facebook', 'oceanwp' ),
				'icon_class' => 'fab fa-facebook',
			),
			'googleplus' => array(
				'label' => esc_html__( 'Google Plus', 'oceanwp' ),
				'icon_class' => 'fab fa-google-plus',
			),
			'pinterest'  => array(
				'label' => esc_html__( 'Pinterest', 'oceanwp' ),
				'icon_class' => 'fab fa-pinterest-p',
			),
			'dribbble' => array(
				'label' => esc_html__( 'Dribbble', 'oceanwp' ),
				'icon_class' => 'fab fa-dribbble',
			),
			'vk' => array(
				'label' => esc_html__( 'VK', 'oceanwp' ),
				'icon_class' => 'fab fa-vk',
			),
			'instagram'  => array(
				'label' => esc_html__( 'Instagram', 'oceanwp' ),
				'icon_class' => 'fab fa-instagram',
			),
			'linkedin' => array(
				'label' => esc_html__( 'LinkedIn', 'oceanwp' ),
				'icon_class' => 'fab fa-linkedin',
			),
			'tumblr'  => array(
				'label' => esc_html__( 'Tumblr', 'oceanwp' ),
				'icon_class' => 'fab fa-tumblr',
			),
			'github'  => array(
				'label' => esc_html__( 'Github', 'oceanwp' ),
				'icon_class' => 'fab fa-github-alt',
			),
			'flickr'  => array(
				'label' => esc_html__( 'Flickr', 'oceanwp' ),
				'icon_class' => 'fab fa-flickr',
			),
			'skype' => array(
				'label' => esc_html__( 'Skype', 'oceanwp' ),
				'icon_class' => 'fab fa-skype',
			),
			'youtube' => array(
				'label' => esc_html__( 'Youtube', 'oceanwp' ),
				'icon_class' => 'fab fa-youtube',
			),
			'vimeo' => array(
				'label' => esc_html__( 'Vimeo', 'oceanwp' ),
				'icon_class' => 'fab fa-vimeo-square',
			),
			'vine' => array(
				'label' => esc_html__( 'Vine', 'oceanwp' ),
				'icon_class' => 'fab fa-vine',
			),
			'xing' => array(
				'label' => esc_html__( 'Xing', 'oceanwp' ),
				'icon_class' => 'fab fa-xing',
			),
			'yelp' => array(
				'label' => esc_html__( 'Yelp', 'oceanwp' ),
				'icon_class' => 'fab fa-yelp',
			),
			'tripadvisor' => array(
				'label' => esc_html__( 'Tripadvisor', 'oceanwp' ),
				'icon_class' => 'fab fa-tripadvisor',
			),
			'rss'  => array(
				'label' => esc_html__( 'RSS', 'oceanwp' ),
				'icon_class' => 'fa fa-rss',
			),
			'email' => array(
				'label' => esc_html__( 'Email', 'oceanwp' ),
				'icon_class' => 'fa fa-envelope',
			),
		) );
	}

}

/**
 * Grid Columns
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_grid_columns' ) ) {

	function oceanwp_grid_columns() {
		return apply_filters( 'ocean_grid_columns', array(
			'1' => '1',
			'2' => '2',
			'3' => '3',
			'4' => '4',
			'5' => '5',
			'6' => '6',
			'7' => '7',
		) );
	}

}

/**
 * Minify CSS
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_minify_css' ) ) {

	function oceanwp_minify_css( $css = '' ) {

		// Return if no CSS
		if ( ! $css ) return;

		// Normalize whitespace
		$css = preg_replace( '/\s+/', ' ', $css );

		// Remove ; before }
		$css = preg_replace( '/;(?=\s*})/', '', $css );

		// Remove space after , : ; { } */ >
		$css = preg_replace( '/(,|:|;|\{|}|\*\/|>) /', '$1', $css );

		// Remove space before , ; { }
		$css = preg_replace( '/ (,|;|\{|})/', '$1', $css );

		// Strips leading 0 on decimal values (converts 0.5px into .5px)
		$css = preg_replace( '/(:| )0\.([0-9]+)(%|em|ex|px|in|cm|mm|pt|pc)/i', '${1}.${2}${3}', $css );

		// Strips units if value is 0 (converts 0px to 0)
		$css = preg_replace( '/(:| )(\.?)0(%|em|ex|px|in|cm|mm|pt|pc)/i', '${1}0', $css );

		// Trim
		$css = trim( $css );

		// Return minified CSS
		return $css;
		
	}

}

/**
 * Array of Font Awesome Icons for the scroll up button
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_awesome_icons' ) ) {

	function oceanwp_get_awesome_icons( $return = 'up_arrows', $default = 'none' ) {

		// Add none to top of array
		$icons_array = array(
			'none' =>''
		);

		// Define return icons
		$return_icons = array();

		// Returns up arrows only
		if ( 'up_arrows' == $return ) {
			$return_icons = array('fa fa-chevron-up','fa fa-caret-up','fa fa-angle-up','fa fa-angle-double-up','fa fa-long-arrow-alt-up','fa fa-arrow-alt-circle-up','fa fa-arrow-up','fa fa-level-up-alt','fa fa-caret-square-up');
			$return_icons = array_combine($return_icons, $return_icons);
		}

		return apply_filters( 'ocean_get_awesome_icons', array_merge( $icons_array, $return_icons ) );

	}

}

/**
 * Array of Icons for the WooCommerce cart
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_get_cart_icons' ) ) {

	function oceanwp_get_cart_icons( $default = 'icon-handbag' ) {

		// Returns icons
		$return_icons = array('icon-basket','icon-handbag','fa fa-shopping-basket','fa fa-shopping-bag','fa fa-shopping-cart');
		$return_icons = array_combine($return_icons, $return_icons);
		
		return apply_filters( 'ocean_get_cart_icons', array_merge( $return_icons ) );
		
	}

}

/**
 * Returns sidr menu source
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_sidr_menu_source' ) ) {
	
	function oceanwp_sidr_menu_source() {

		// Return if is not sidebar mobile style
		if ( 'sidebar' != oceanwp_mobile_menu_style() ) {
			return;
		}

		// Define array of items
		$items = array();

		// Add close button
		if ( get_theme_mod( 'ocean_mobile_menu_close_btn', true ) ) {
			$items['sidrclose'] = '#sidr-close';
		}

		// If has mobile menu
		if ( has_nav_menu( 'mobile_menu' ) ) {
			$items['mobile-nav'] = '#mobile-nav';
		}

		// Add main navigation
		else {

			// Navigation
			$items['nav'] = '#site-navigation';

			// Add top bar menu
			if ( has_nav_menu( 'topbar_menu' ) ) {
				$items['top-nav'] = '#top-bar-nav';
			}

		}

		if ( 'full_screen' != oceanwp_header_style() ) {

			// Add social menu
			if ( true == get_theme_mod( 'ocean_menu_social', false )
				&& get_theme_mod( 'ocean_menu_social_profiles' ) ) {
				$items['social'] = '#site-header .oceanwp-social-menu';
			}

		}

		// Add search form
		if ( get_theme_mod( 'ocean_mobile_menu_search', true ) ) {
			$items['search'] = '#mobile-menu-search';
		}

		// Apply filters for child theming
		$items = apply_filters( 'ocean_mobile_menu_source', $items );

		// Turn items into comma seperated list
		$items = implode( ', ', $items );

		// Return
		return $items;

	}

}

/**
 * Query Autoptimize activation - check required if using a page builder
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_is_autoptimize_activated' ) ) {

	function oceanwp_is_autoptimize_activated() {

		return class_exists( 'autoptimizeBase' ) ? true : false;

	}

}

/**
 * Returns header template content
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_header_template_content' ) ) {

	function oceanwp_header_template_content() {

		// Return false if custom header is not selected
		if ( 'custom' != oceanwp_header_style() ) {
			return false;
		}

		// Get the template ID
		$content = oceanwp_custom_header_template();

		// Get template content
		if ( ! empty( $content ) ) {

			$template = get_post( $content );

			if ( $template && ! is_wp_error( $template ) ) {
				$content = $template->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'ocean_header_template_content', $content );

	}

}

/**
 * Returns social menu content
 *
 * @since 1.4.0
 */
if ( ! function_exists( 'oceanwp_social_menu_content' ) ) {

	function oceanwp_social_menu_content() {

		// Get template ID from Customizer
		$content = get_theme_mod( 'ocean_menu_social_template' );

		// Get Polylang Translation of template
		if ( function_exists( 'pll_get_post' ) ) {
			$content = pll_get_post( $content, pll_current_language() );
		}

		// Get template content
		if ( ! empty( $content ) ) {

			$template = get_post( $content );

			if ( $template && ! is_wp_error( $template ) ) {
				$content = $template->post_content;
			}

		}

		// Return content
		return apply_filters( 'oceanwp_social_menu_content', $content );

	}

}

/**
 * Custom footer style template
 *
 * @since 1.5.22
 */
if ( ! function_exists( 'oceanwp_custom_footer_template' ) ) {

	function oceanwp_custom_footer_template() {

		// Get template from customizer setting
		$template = get_theme_mod( 'ocean_footer_widgets_template' );

		// Apply filters and return
		return apply_filters( 'ocean_custom_footer_template', $template );

	}

}

/**
 * Returns footer template content
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_footer_template_content' ) ) {

	function oceanwp_footer_template_content() {

		// Return false if disabled via Customizer
		if ( true != get_theme_mod( 'ocean_footer_widgets', true ) ) {
			return null;
		}

		// Get template ID from Customizer
		$content = oceanwp_custom_footer_template();

		// Get Polylang Translation of template
		if ( function_exists( 'pll_get_post' ) ) {
			$content = pll_get_post( $content, pll_current_language() );
		}

		// Get template content
		if ( ! empty( $content ) ) {

			$template = get_post( $content );

			if ( $template && ! is_wp_error( $template ) ) {
				$content = $template->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'ocean_footer_template_content', $content );

	}

}

/**
 * Returns topbar template content
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_topbar_template_content' ) ) {

	function oceanwp_topbar_template_content() {

		// Get the template ID
		$content = get_theme_mod( 'ocean_top_bar_template' );

		// Get Polylang Translation of template
		if ( function_exists( 'pll_get_post' ) ) {
			$content = pll_get_post( $content, pll_current_language() );
		}

		// Get template content
		if ( ! empty( $content ) ) {

			$template = get_post( $content );

			if ( $template && ! is_wp_error( $template ) ) {
				$content = $template->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'oceanwp_topbar_template_content', $content );

	}

}

/**
 * Returns topbar social alt content
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_top_bar_social_alt_content' ) ) {

	function oceanwp_top_bar_social_alt_content() {

		// Get page ID from Customizer
		$content = get_theme_mod( 'ocean_top_bar_social_alt' );

		// Get the template ID
		$template = get_theme_mod( 'ocean_top_bar_social_alt_template' );
		if ( ! empty( $template ) ) {
		    $content = $template;
		}

		// Get Polylang Translation of template
		if ( function_exists( 'pll_get_post' ) ) {
			$content = pll_get_post( $content, pll_current_language() );
		}

		// Get page content
		if ( ! empty( $content ) ) {

			$template = get_post( $content );

			if ( $template && ! is_wp_error( $template ) ) {
				$content = $template->post_content;
			}

		}

		// Return content
		return apply_filters( 'oceanwp_top_bar_social_alt_content', $content );

	}

}

/**
 * Return correct schema markup
 *
 * @since 1.2.10
 */
if ( ! function_exists( 'oceanwp_get_schema_markup' ) ) {

	function oceanwp_get_schema_markup( $location ) {

		// Return if disable
		if ( ! get_theme_mod( 'ocean_schema_markup', true ) ) {
			return null;
		}

		// Default
		$schema = $itemprop = $itemtype = '';

		// HTML
		if ( 'html' == $location ) {
			if ( is_home() || is_front_page() ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/WebPage"';
			}
			elseif ( is_category() || is_tag() ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/Blog"';
			}
			elseif ( is_singular( 'post') ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/Article"';
			}
			elseif ( is_page() ) {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/WebPage"';
			}
			else {
				$schema = 'itemscope="itemscope" itemtype="https://schema.org/WebPage"';
			}
		}

		// Header
		elseif ( 'header' == $location ) {
			$schema = 'itemscope="itemscope" itemtype="https://schema.org/WPHeader"';
		}

		// Logo
		elseif ( 'logo' == $location ) {
			$schema = 'itemscope itemtype="https://schema.org/Brand"';
		}

		// Navigation
		elseif ( 'site_navigation' == $location ) {
			$schema = 'itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement"';
		}

		// Main
		elseif ( 'main' == $location ) {
			$itemtype = 'https://schema.org/WebPageElement';
			$itemprop = 'mainContentOfPage';
		}

		// Sidebar
		elseif ( 'sidebar' == $location ) {
			$schema = 'itemscope="itemscope" itemtype="https://schema.org/WPSideBar"';
		}

		// Footer widgets
		elseif ( 'footer' == $location ) {
			$schema = 'itemscope="itemscope" itemtype="https://schema.org/WPFooter"';
		}

		// Headings
		elseif ( 'headline' == $location ) {
			$schema = 'itemprop="headline"';
		}

		// Posts
		elseif ( 'entry_content' == $location ) {
			$schema = 'itemprop="text"';
		}

		// Publish date
		elseif ( 'publish_date' == $location ) {
			$schema = 'itemprop="datePublished"';
		}

		// Modified date
		elseif ( 'modified_date' == $location ) {
			$schema = 'itemprop="dateModified"';
		}

		// Author name
		elseif ( 'author_name' == $location ) {
			$schema = 'itemprop="name"';
		}

		// Author link
		elseif ( 'author_link' == $location ) {
			$schema = 'itemprop="author" itemscope="itemscope" itemtype="https://schema.org/Person"';
		}

		// Item
		elseif ( 'item' == $location ) {
			$schema = 'itemprop="item"';
		}

		// Url
		elseif ( 'url' == $location ) {
			$schema = 'itemprop="url"';
		}

		// Position
		elseif ( 'position' == $location ) {
			$schema = 'itemprop="position"';
		}

		// Image
		elseif ( 'image' == $location ) {
			$schema = 'itemprop="image"';
		}

		return ' ' . apply_filters( 'ocean_schema_markup', $schema );

	}

}

/**
 * Outputs correct schema markup
 *
 * @since 1.2.10
 */
if ( ! function_exists( 'oceanwp_schema_markup' ) ) {

	function oceanwp_schema_markup( $location ) {

		echo oceanwp_get_schema_markup( $location );

	}

}

/**
 * Returns error page template content
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_error_page_template_content' ) ) {

	function oceanwp_error_page_template_content() {

		// Get template ID from Customizer
		$content = get_theme_mod( 'ocean_error_page_template' );

		// Get Polylang Translation of template
		if ( function_exists( 'pll_get_post' ) ) {
			$content = pll_get_post( $content, pll_current_language() );
		}

		// Get template content
		if ( ! empty( $content ) ) {

			$template = get_post( $content );

			if ( $template && ! is_wp_error( $template ) ) {
				$content = $template->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'ocean_error_page_template_content', $content );

	}

}

/**
 * Default color picker palettes
 *
 * @since 1.4.9
 */
if ( ! function_exists( 'oceanwp_default_color_palettes' ) ) {

	function oceanwp_default_color_palettes() {

		$palettes = array(
			'#000000',
			'#ffffff',
			'#dd3333',
			'#dd9933',
			'#eeee22',
			'#81d742',
			'#1e73be',
			'#8224e3',
		);

		// Apply filters and return
		return apply_filters( 'ocean_default_color_palettes', $palettes );

	}

}