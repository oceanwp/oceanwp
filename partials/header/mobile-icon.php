<?php
/**
 * Mobile Menu icon
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Global woo
global $woocommerce;

// Menu Location
$menu_location = apply_filters( 'ocean_main_menu_location', 'main_menu' );

// Multisite global menu
$ms_global_menu = apply_filters( 'ocean_ms_global_menu', false );

// Display if menu is defined
if ( has_nav_menu( $menu_location ) || $ms_global_menu ) :

	// Get menu icon
	$icon = apply_filters( 'ocean_mobile_menu_navbar_open_icon', '<i class="fa fa-bars"></i>' );

	// Get menu text
	$text = esc_html__( 'Menu', 'oceanwp' );
	$text = apply_filters( 'ocean_mobile_menu_text', $text );

	if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {

		// Cart icon
		$cart_icon = '<i class="icon-handbag"></i>';
		$cart_icon = apply_filters( 'ocean_menu_cart_icon_html', $cart_icon );

	} ?>

	<div id="oceanwp-mobile-menu-icon" class="clr">

		<?php do_action( 'ocean_before_mobile_icon' ); ?>

		<?php
		// If big header style
		if ( 'big' == oceanwp_header_style() ) { ?>
			<div class="container clr">
		<?php } ?>

		<?php
		// Cart icon
		if ( OCEANWP_WOOCOMMERCE_ACTIVE
			&& 'disabled' != get_theme_mod( 'ocean_woo_menu_icon_display', 'icon_count' ) ) { ?>
			<a href="<?php echo esc_url( WC()->cart->get_cart_url() ); ?>" class="mobile-wcmenucart"><?php echo wp_kses_post( $cart_icon ); ?></a>
		<?php } ?>

		<a href="#" class="mobile-menu"><?php echo wp_kses_post( $icon ); ?><span class="oceanwp-text"><?php echo esc_html( $text ); ?></span></a>

		<?php
		// If big header style
		if ( 'big' == oceanwp_header_style() ) { ?>
			</div>
		<?php } ?>

		<?php do_action( 'ocean_after_mobile_icon' ); ?>

	</div><!-- #oceanwp-mobile-menu-navbar -->

<?php endif; ?>