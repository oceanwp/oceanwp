<?php
/**
 * Dropdown Mobile Menu close
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Retunr if disabled.
if ( ! oceanwp_display_navigation() ) {
	return;
}

// Menu Location.
$menu_location = apply_filters( 'ocean_main_menu_location', 'main_menu' );

// Multisite global menu.
$ms_global_menu = apply_filters( 'ocean_ms_global_menu', false );

// Menu data attributes.
$toggle_menu_attrs = apply_filters( 'oceanwp_menu_toggle_data_attrs', '' );

// Display if menu is defined.
if ( has_nav_menu( $menu_location ) || $ms_global_menu ) :

	// Get menu icon.
	$icon = get_theme_mod( 'ocean_mobile_menu_open_icon', 'fa fa-bars' );
	$icon = apply_filters( 'ocean_mobile_menu_navbar_open_icon', $icon );

	// Custom hamburger button.
	$btn = get_theme_mod( 'ocean_mobile_menu_open_hamburger', 'default' );

	// Get close menu text.
	$close_text = get_theme_mod( 'ocean_mobile_menu_close_text' );
	$close_text = oceanwp_tm_translation( 'ocean_mobile_menu_close_text', $close_text );
	$close_text = $close_text ? $close_text : esc_html__( 'Close', 'oceanwp' );

endif;

?>


<a href="javascript:void(0)" class="mobile-menu-close" <?php echo $toggle_menu_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> aria-label="<?php esc_attr_e( 'Mobile Menu Close', 'oceanwp' ); ?>">
	<?php
	if ( 'default' !== $btn ) {
		?>
		<div class="hamburger hamburger--<?php echo esc_attr( $btn ); ?>" aria-expanded="false">
			<div class="hamburger-box">
				<div class="hamburger-inner"></div>
			</div>
		</div>
		<?php
	} else {
		?>
		<i class="<?php echo esc_attr( $icon ); ?>" aria-hidden="true"></i>
		<?php
	}

	// Mobile menu text.
	if ( get_theme_mod( 'ocean_mobile_menu_display_opening_text', true ) ) {

		// Display close text if drop down mobile style.
		if ( 'dropdown' === get_theme_mod( 'ocean_mobile_menu_style', 'dropdown' ) ) {
			?>
			<span class="oceanwp-close-text"><?php echo do_shortcode( $close_text ); ?></span>
			<?php
		}
	}
	?>
</a>
