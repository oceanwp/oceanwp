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
