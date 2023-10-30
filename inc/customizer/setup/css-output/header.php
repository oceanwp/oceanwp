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

        $css = '';

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
                $css .= '#site-header.full_screen-header .menu-bar .ham:before{top: -'. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_width_unit . ';}';
                $css .= '#site-header.full_screen-header .menu-bar .ham:after{top: '. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_gap . ';}';
                $css .= '#site-header.full_screen-header .menu-bar.exit .ham:before{transform: translateY('. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_gap . ') rotateZ(-45deg);}';
                $css .= '#site-header.full_screen-header .menu-bar.exit .ham:after{transform: translateY(-'. $full_screen_header_menu_hamburger_icon_gap . $full_screen_header_menu_hamburger_icon_gap . ') rotateZ(45deg);}';
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
                if ( isset( $vertical_header_inner_top_padding ) && '30' != $vertical_header_inner_top_padding && '' != $vertical_header_inner_top_padding
                || isset( $vertical_header_inner_bottom_padding ) && '30' != $vertical_header_inner_bottom_padding && '' != $vertical_header_inner_bottom_padding ) {
                $css .= '#site-header.vertical-header #site-header-inner{padding:'. oceanwp_spacing_css( $vertical_header_inner_top_padding, '', $vertical_header_inner_bottom_padding, '' ) .'}';
            }

            // Vertical header left/right padding
            if ( isset( $vertical_header_inner_right_padding ) && '30' != $vertical_header_inner_right_padding && '' != $vertical_header_inner_right_padding
                || isset( $vertical_header_inner_left_padding ) && '30' != $vertical_header_inner_left_padding && '' != $vertical_header_inner_left_padding ) {
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

        }

        // Header background color
        if ( 'medium' != $header_style && ! empty( $header_background ) && '#ffffff' != $header_background ) {
            $css .= '#site-header,.has-transparent-header .is-sticky #site-header,.has-vh-transparent .is-sticky #site-header.vertical-header,#searchform-header-replace{background-color:'. $header_background .';}';
        }

        // Header border color
        if ( ! empty( $header_border_bottom ) && '#f1f1f1' != $header_border_bottom ) {
            $css .= '#site-header{border-color:'. $header_border_bottom .';}';
        }


        // Return CSS.
        if ( ! empty( $css ) ) {
            $output .= '/* Header */' . $css;
        }

        // Return output css.
        return $output;

    }
}

return new OceanWP_Customize_Header_CSS();
