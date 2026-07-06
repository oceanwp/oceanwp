<?php
/**
 * OceanWP Customizer CSS Output for Accessibility
 *
 * @package OceanWP WordPress theme
 */

// if ( ! defined( 'ABSPATH' ) ) {
// 	exit;
// }

// /**
//  * The OceanWP Customizer class
//  */
// class OceanWP_Customize_A11Y_CSS {

// 	/**
// 	 * Constructor
// 	 */
// 	public function __construct() {
// 		add_action( 'wp_enqueue_scripts', array( $this, 'add_inline_css' ), 999 );
// 	}

// 	public function add_inline_css() {

// 		if ( true !== oceanwp_is_accessibility_feature_enabled( 'ocean_accessibility_mode' ) ) {
// 			return;
// 		}

// 		wp_add_inline_style(
// 			'oceanwp-a11y-style',
// 			$this->generate_css()
// 		);
// 	}

// 	public function generate_css() {

//         $search_form_label_size					 = get_theme_mod( 'ocean_custom_header_search_form_label_size', '' );
// 		$search_form_label_size_tablet		     = get_theme_mod( 'ocean_custom_header_search_form_label_size_tablet', '' );
// 		$search_form_label_size_mobile			 = get_theme_mod( 'ocean_custom_header_search_form_label_size_mobile', '' );
// 		$search_form_label_size_unit			 = get_theme_mod( 'ocean_custom_header_search_form_label_size_unit', 'px' );
// 		$search_form_label_color                 = get_theme_mod( 'ocean_custom_header_search_form_label_color', '' );

//         $comment_form_label_size			     = get_theme_mod( 'ocean_comment_form_label_size', '' );
// 		$comment_form_label_size_tablet		     = get_theme_mod( 'ocean_comment_form_label_size_tablet', '' );
// 		$comment_form_label_size_mobile			 = get_theme_mod( 'ocean_comment_form_label_size_mobile', '' );
// 		$comment_form_label_size_unit			 = get_theme_mod( 'ocean_comment_form_label_size_unit', 'px' );
// 		$comment_form_label_color                = get_theme_mod( 'ocean_comment_form_label_color', '' );
//         $comment_form_label_ie_color             = get_theme_mod( 'ocean_comment_form_label_ie_color', '' );

// 		$header_social_external_icon_size		 = get_theme_mod( 'ocean_header_social_external_icon_size', 0.72 );
// 		$header_social_external_icon_size_tablet = get_theme_mod( 'ocean_header_social_external_icon_size_tablet', '' );
// 		$header_social_external_icon_size_mobile = get_theme_mod( 'ocean_header_social_external_icon_size_mobile', '' );
// 		$header_social_external_icon_x_offset    = get_theme_mod( 'ocean_header_social_external_icon_x_offset', -0.15 );
// 		$header_social_external_icon_y_offset    = get_theme_mod( 'ocean_header_social_external_icon_y_offset', -0.25 );
// 		$header_social_external_icon_color       = get_theme_mod( 'ocean_header_social_external_icon_color', '#ffffff' );
//         $header_social_external_icon_color_hover = get_theme_mod( 'ocean_header_social_external_icon_background_color', '#000000' );

// 		$media_button_background                 = get_theme_mod( 'ocean_header_video_button_background_color' );
// 		$media_button_background_hover           = get_theme_mod( 'ocean_header_video_button_background_color_hover' );
// 		$media_button_background_focus           = get_theme_mod( 'ocean_header_video_button_background_color_focus' );
// 		$media_button_icon_color                 = get_theme_mod( 'ocean_header_video_button_icon_color' );
// 		$media_button_icon_color_hover           = get_theme_mod( 'ocean_header_video_button_icon_color_hover' );
// 		$media_button_icon_color_focus           = get_theme_mod( 'ocean_header_video_button_icon_color_focus' );
// 		$media_button_border                     = get_theme_mod( 'ocean_header_video_button_border_color' );
// 		$media_button_border_hover               = get_theme_mod( 'ocean_header_video_button_border_color_hover' );
// 		$media_button_border_focus               = get_theme_mod( 'ocean_header_video_button_border_color_focus' );

// 		$header_media_height			         = get_theme_mod( 'ocean_accessible_header_media_height', 600 );
// 		$header_media_height_tablet		         = get_theme_mod( 'ocean_accessible_header_media_height_tablet', '' );
// 		$header_media_height_mobile			     = get_theme_mod( 'ocean_accessible_header_media_height_mobile', '' );
// 		$header_media_height_unit			     = get_theme_mod( 'ocean_accessible_header_media_height_unit', 'px' );

// 		$header_image_overlay_color 			 = get_theme_mod( 'ocean_header_image_overlay_color', 'rgba(0,0,0,0.5)' );
// 		$header_image_position 		             = get_theme_mod( 'ocean_header_image_position' );
// 		$header_image_size 			             = get_theme_mod( 'ocean_header_image_size' );
			
// 		$css = '';

// 		if ( ! empty( $search_form_label_size ) ) {
// 			$css .= '.header-search-visible-label,.medium-header-search-visible-label,.vertical-header-search-visible-label,.mobile-fs-search-visible-label,.oceanwp-mobile-menu-search-visible-label{font-size:'. $search_form_label_size . $search_form_label_size_unit . ';}';
// 		}

// 		if ( ! empty( $search_form_label_size_tablet ) ) {
// 			$css .= '@media (max-width: 768px){.header-search-visible-label,.medium-header-search-visible-label,.vertical-header-search-visible-label,.mobile-fs-search-visible-label,.oceanwp-mobile-menu-search-visible-label{font-size:'. $search_form_label_size_tablet . $search_form_label_size_unit . ';}}';
// 		}

// 		if ( ! empty( $search_form_label_size_mobile ) ) {
// 			$css .= '@media (max-width: 480px){.header-search-visible-label,.medium-header-search-visible-label,.vertical-header-search-visible-label,.mobile-fs-search-visible-label,.oceanwp-mobile-menu-search-visible-label{font-size:'. $search_form_label_size_mobile . $search_form_label_size_unit . ';}}';
// 		}

// 		if ( ! empty( $search_form_label_color ) ) {
// 			$css .= '.header-search-visible-label,.medium-header-search-visible-label,.vertical-header-search-visible-label,.mobile-dropdown-search-visible-label,.mobile-fs-search-visible-label,.oceanwp-mobile-menu-search-visible-label{color:' . $search_form_label_color . ';}';
// 		}

//         if ( ! empty( $comment_form_label_size ) ) {
// 			$css .= '.comment-form-visible-label{font-size:'. $comment_form_label_size . $comment_form_label_size_unit . ';}';
// 		}

// 		if ( ! empty( $comment_form_label_size_tablet ) ) {
// 			$css .= '@media (max-width: 768px){.comment-form-visible-label{font-size:'. $comment_form_label_size_tablet . $comment_form_label_size_unit . ';}}';
// 		}

// 		if ( ! empty( $comment_form_label_size_mobile ) ) {
// 			$css .= '@media (max-width: 480px){.comment-form-visible-label{font-size:'. $comment_form_label_size_mobile . $comment_form_label_size_unit . ';}}';
// 		}

// 		if ( ! empty( $comment_form_label_color ) ) {
// 			$css .= '.comment-form-visible-label{color:' . $comment_form_label_color . ';}';
// 		}

//         if ( ! empty( $comment_form_label_ie_color ) ) {
// 			$css .= '.comment-form-visible-label span{color:' . $comment_form_label_ie_color . ';}';
// 		}

// 		if ( ! empty( $header_social_external_icon_size ) ) {
// 			$css .= '.header-social-menu-external-mark{--ocean-social-external-mark-size:'. $header_social_external_icon_size . 'em;}';
// 			$css .= '.header-social-menu-external-mark{--ocean-social-external-mark-size:'. $header_social_external_icon_size . 'em;}';
// 		}

// 		if ( ! empty( $header_social_external_icon_size_tablet ) ) {
// 			$css .= '@media (max-width: 768px){
// 				.header-social-menu-external-mark{--ocean-social-external-mark-size:'. $header_social_external_icon_size_tablet . 'em;}
// 				.header-social-menu-external-mark{--ocean-social-external-mark-size:'. $header_social_external_icon_size_tablet . 'em;}
// 			}';
// 		}

// 		if ( ! empty( $header_social_external_icon_size_mobile ) ) {
// 			$css .= '@media (max-width: 480px){
// 				.header-social-menu-external-mark{--ocean-social-external-mark-size:'. $header_social_external_icon_size_mobile . 'em;}
// 				.header-social-menu-external-mark{--ocean-social-external-mark-size:'. $header_social_external_icon_size_mobile . 'em;}
// 			}';
// 		}

// 		if ( ! empty( $header_social_external_icon_x_offset ) ) {
// 			$css .= '.header-social-menu-external-mark{--ocean-social-external-mark-offset-x:'. $header_social_external_icon_x_offset . 'em;}';
// 		}

// 		if ( ! empty( $header_social_external_icon_y_offset ) ) {
// 			$css .= '.header-social-menu-external-mark{--ocean-social-external-mark-offset-y:'. $header_social_external_icon_y_offset . 'em;}';
// 		}

// 		if ( ! empty( $header_social_external_icon_color ) ) {
// 			$css .= '.header-social-menu-external-mark{--ocean-social-external-mark-color:' . $header_social_external_icon_color . ';}';
// 		}

// 		if ( ! empty( $header_social_external_icon_color_hover ) ) {
// 			$css .= '.header-social-menu-external-mark{--ocean-social-external-mark-bg:' . $header_social_external_icon_color_hover . ';}';
// 		}
		
// 		if ( ! empty( $media_button_background ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button{background-color:' . $media_button_background . ';}';
// 		}

// 		if ( ! empty( $media_button_background_hover ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:hover{background-color:' . $media_button_background_hover . ';}';
// 		}

// 		if ( ! empty( $media_button_background_focus ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:focus, .custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:focus-visible{background-color:' . $media_button_background_focus . ';}';
// 		}

// 		if ( ! empty( $media_button_icon_color ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button{color:' . $media_button_icon_color . ';}';
// 		}

// 		if ( ! empty( $media_button_icon_color_hover ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:hover{color:' . $media_button_icon_color_hover . ';}';
// 		}

// 		if ( ! empty( $media_button_icon_color_focus ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:focus, .custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:focus-visible{color:' . $media_button_icon_color_focus . ';}';
// 		}

// 		if ( ! empty( $media_button_border ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button{border-color:' . $media_button_border . ';}';
// 		}

// 		if ( ! empty( $media_button_border_hover ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:hover{border-color:' . $media_button_border_hover . ';}';
// 		}

// 		if ( ! empty( $media_button_border_focus ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:focus, .custom-header-media.ocean-accessible-header-media .wp-custom-header-video-button:focus-visible{border-color:' . $media_button_border_focus . ';}';
// 		}

// 		if ( ! empty( $header_media_height ) ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media, .custom-header-media.ocean-accessible-image{height:'. $header_media_height . $header_media_height_unit . ';}';
// 		}

// 		if ( ! empty( $header_media_height_tablet ) ) {
// 			$css .= '@media (max-width: 768px){.custom-header-media.ocean-accessible-header-media, .custom-header-media.ocean-accessible-image{height:'. $header_media_height_tablet . $header_media_height_unit . ';}}';
// 		}

// 		if ( ! empty( $header_media_height_mobile ) ) {
// 			$css .= '@media (max-width: 480px){.custom-header-media.ocean-accessible-header-media, .custom-header-media.ocean-accessible-image{height:'. $header_media_height_mobile . $header_media_height_unit . ';}}';
// 		}

// 		if ( ! empty( $header_image_overlay_color ) && 'rgba(0,0,0,0.3)' != $header_image_overlay_color ) {
// 			$css .= '.custom-header-media.ocean-accessible-header-media::before{background-color:'. $header_image_overlay_color .';}';
// 		}

// 		if ( ! empty( $header_image_position ) && 'initial' !== $header_image_position ) {
// 			$css .= '.custom-header-media.ocean-accessible-image img{object-position:' . esc_attr( $header_image_position ) . ';}';
// 		}

// 		if ( ! empty( $header_image_size ) && 'initial' !== $header_image_size ) {

// 			switch ( $header_image_size ) {

// 				case 'cover':
// 				case 'contain':
// 					$css .= '.custom-header-media.ocean-accessible-header-media img{object-fit:' . esc_attr( $header_image_size ) . ';}';
// 					break;

// 				default:
// 					$css .= '.custom-header-media.ocean-accessible-header-media img{object-fit:fill;}';
// 					break;
// 			}
// 		}

// 		$output = '';

// 		// Return CSS.
// 		if ( ! empty( $css ) ) {
// 			$output .= '/* A11Y CSS */' . $css;
// 		}

// 		// Return output css.
// 		return $output;
// 	}
// }

// return new OceanWP_Customize_A11Y_CSS();
