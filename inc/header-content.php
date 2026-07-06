<?php
/**
 * Header content.
 *
 * @package OceanWP WordPress theme
 */

// Vars.
$header_style        = oceanwp_header_style();
$position            = get_theme_mod( 'ocean_mobile_elements_positioning', 'one' );
$woo_icon_visibility = get_theme_mod( 'ocean_woo_menu_icon_visibility', 'default' );

if ( OCEANWP_WOOCOMMERCE_ACTIVE
	&& 'disabled' !== $woo_icon_visibility
	&& 'two' === $position ) {
	add_action( 'ocean_header_inner_left_content', 'oceanwp_mobile_cart_icon', 1 );
}

if ( 'three' === $position ) {
	add_action( 'ocean_header_inner_left_content', 'oceanwp_mobile_icon', 1 );
}

add_action( 'ocean_header_inner_middle_content', 'oceanwp_header_logo', 10 );

if ( true === get_theme_mod( 'ocean_menu_social', false ) ) {
	add_action( 'ocean_header_inner_middle_content', 'oceanwp_header_social', 11 );
}

add_action( 'ocean_header_inner_middle_content', 'oceanwp_header_navigation', 12 );

if ( 'three' !== $position ) {
	add_action( 'ocean_header_inner_right_content', 'oceanwp_mobile_icon', 99 );
}

if ( OCEANWP_WOOCOMMERCE_ACTIVE
	&& 'disabled' !== $woo_icon_visibility
	&& 'three' === $position ) {
	add_action( 'ocean_header_inner_right_content', 'oceanwp_mobile_cart_icon', 99 );
}

if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {
	add_action( 'ocean_before_mobile_icon_inner', 'oceanwp_mobile_cart_icon_medium_header', 10 );
}

if ( OCEANWP_WOOCOMMERCE_ACTIVE
	&& 'disabled' !== get_theme_mod( 'ocean_woo_menu_icon_visibility', 'default' )
	&& 'one' === get_theme_mod( 'ocean_mobile_elements_positioning', 'one' ) ) {
	add_action( 'ocean_before_mobile_icon_inner', 'oceanwp_mobile_cart_icon_not_medium_header', 10 );
}

if ( oceanwp_is_accessible_header_video_enabled() ) {
	add_action( 'wp', 'oceanwp_accessible_header_video_boot', 20 );
}

if ( ! function_exists( 'oceanwp_mobile_cart_icon' ) ) {

	/**
	 * Mobile cart icon
	 *
	 * @since 1.5.6
	 */
	function oceanwp_mobile_cart_icon() {

		// If bag style.
		$bag = get_theme_mod( 'ocean_woo_menu_bag_style', 'no' );

		// Classes.
		$classes = array( 'oceanwp-mobile-menu-icon', 'clr', 'woo-menu-icon' );

		// Position.
		$position = get_theme_mod( 'ocean_mobile_elements_positioning', 'one' );
		if ( 'two' === $position ) {
			$classes[] = 'mobile-left';
		} elseif ( 'three' === $position ) {
			$classes[] = 'mobile-right';
		}

		// Turn classes into space seperated string.
		$classes = implode( ' ', $classes );

		echo '<div class="' . esc_attr( $classes ) . '">';
		if ( 'yes' === $bag ) {
			echo '<div class="bag-style">';
		}
		echo oceanwp_wcmenucart_menu_item(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		if ( 'yes' === $bag ) {
			echo '</div>';
		}
		echo '</div>';

	}
}

if ( ! function_exists( 'oceanwp_header_logo' ) ) {

	/**
	 * Header logo
	 *
	 * @since 1.5.6
	 */
	function oceanwp_header_logo() {

		get_template_part( 'partials/header/logo' );

	}
}

if ( ! function_exists( 'oceanwp_header_social' ) ) {

	/**
	 * Header social
	 *
	 * @since 1.5.6
	 */
	function oceanwp_header_social() {

		get_template_part( 'partials/header/social' );

	}
}

if ( ! function_exists( 'oceanwp_header_navigation' ) ) {

	/**
	 * Header navigation
	 *
	 * @since 1.5.6
	 */
	function oceanwp_header_navigation() {

		get_template_part( 'partials/header/nav' );

	}
}

if ( ! function_exists( 'oceanwp_mobile_icon' ) ) {

	/**
	 * Header navigation
	 *
	 * @since 1.5.6
	 */
	function oceanwp_mobile_icon() {

		get_template_part( 'partials/mobile/mobile-icon' );

	}
}

if ( ! function_exists( 'oceanwp_mobile_cart_icon_medium_header' ) ) {

	/**
	 * Mobile cart icon for the Medium header style
	 *
	 * @since 1.5.6
	 */
	function oceanwp_mobile_cart_icon_medium_header() {
		$header_style = oceanwp_header_style();

		// Return if it is not medium or vertical header styles.
		if ( 'medium' !== $header_style
			&& 'vertical' !== $header_style ) {
			return;
		}

		echo oceanwp_wcmenucart_menu_item(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
}

if ( ! function_exists( 'oceanwp_mobile_cart_icon_not_medium_header' ) ) {

	/**
	 * Mobile cart icon if it is not the Medium header style
	 *
	 * @since 1.5.6
	 */
	function oceanwp_mobile_cart_icon_not_medium_header() {
		$header_style = oceanwp_header_style();

		// Return if medium or vertical header styles.
		if ( 'medium' === $header_style
			|| 'vertical' === $header_style ) {
			return;
		}

		echo oceanwp_wcmenucart_menu_item(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
}

/**
 * Header video render
 *
 * @since 4.2.0
 */
function oceanwp_accessible_header_media_render() {

	$video_enabled = function_exists( 'has_header_video' ) && has_header_video();
	$image_enabled = function_exists( 'has_header_image' ) && has_header_image();

	$mobile_fallback = oceanwp_is_accessibility_feature_enabled( 'ocean_accessible_header_video_fallback_mobile', ocean_accessibility_get_header_media_default_value() );

	$media_classes = [];

	if ( $mobile_fallback ) {
		$media_classes[] = 'has-mobile-fallback';
	}

	if ( $video_enabled ) {

		if ( $mobile_fallback && $image_enabled ) {
			echo '<div class="custom-header-media ocean-accessible-header-media ocean-accessible-image">';
				the_custom_header_markup();
			echo '</div>';
			return;
		}

		echo '<div class="custom-header-media ocean-accessible-header-media ocean-accessible-video ' . esc_attr( implode( ' ', $media_classes ) ) . '">';
			the_custom_header_markup();
		echo '</div>';

		return;
	}

	if ( $image_enabled ) {
		echo '<div class="custom-header-media ocean-accessible-header-media ocean-accessible-image">';
			the_custom_header_markup();
		echo '</div>';
	}
}

/**
 * Header video
 *
 * @since 4.2.0
 */
function oceanwp_accessible_header_video_boot() {

	$video_enabled = function_exists( 'has_header_video' ) && has_header_video();
	$image_enabled = function_exists( 'has_header_image' ) && has_header_image();

	if ( ! $video_enabled && ! $image_enabled ) {
		return;
	}

	if ( ! oceanwp_is_header_style_supported( [ 'minimal', 'top', 'center', 'medium' ] ) ) {
		return;
	}

	$position   = get_theme_mod( 'ocean_accessible_header_video_position', 'above_top_bar' );
	$visibility = get_theme_mod( 'ocean_accessible_header_video_visibility', 'homepage' );

	$is_homepage = is_front_page() || is_home();

	// visibility check
	if ( $visibility === 'homepage' && ! $is_homepage ) {
		return;
	}

	$topbar_enabled = get_theme_mod( 'ocean_top_bar', true );

	// If topbar is disabled, force fallback to header
	if ( ! $topbar_enabled ) {
		$position = 'above_header';
	}

	// inject above top bar
	if ( $position === 'above_top_bar' ) {
		add_action( 'ocean_before_top_bar', 'oceanwp_accessible_header_media_render', 5 );
	}

	// inject above header
	if ( $position === 'above_header' ) {
		add_action( 'ocean_before_header', 'oceanwp_accessible_header_media_render', 5 );
	}
}
