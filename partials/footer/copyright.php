<?php
/**
 * The default template for displaying the footer copyright
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get copyright text.
$copy = get_theme_mod( 'ocean_footer_copyright_text', 'Copyright - WordPress Theme by OceanWP' );
$copy = oceanwp_tm_translation( 'ocean_footer_copyright_text', $copy );

// Get footer menu location and apply filters for child theming.
$menu_location = 'footer_menu';
$menu_location = apply_filters( 'ocean_footer_menu_location', $menu_location );

// Visibility.
$visibility = get_theme_mod( 'ocean_bottom_footer_visibility', 'all-devices' );

// Inner classes.
$wrap_classes = array( 'clr' );
if ( ! has_nav_menu( $menu_location ) ) {
	$wrap_classes[] = 'no-footer-nav';
}
if ( 'all-devices' !== $visibility ) {
	$wrap_classes[] = $visibility;
}
$wrap_classes = implode( ' ', $wrap_classes ); ?>

<?php do_action( 'ocean_before_footer_bottom' ); ?>

<div id="footer-bottom" class="<?php echo esc_attr( $wrap_classes ); ?>">

	<?php do_action( 'ocean_before_footer_bottom_inner' ); ?>

	<div id="footer-bottom-inner" class="container clr">

		<?php
		// Display footer bottom menu if location is defined.
		if ( has_nav_menu( $menu_location ) ) :
			?>

			<div id="footer-bottom-menu" class="navigation clr">

				<?php
				// Display footer menu.
				wp_nav_menu(
					array(
						'theme_location' => $menu_location,
						'sort_column'    => 'menu_order',
						'fallback_cb'    => false,
					)
				);
				?>

			</div><!-- #footer-bottom-menu -->

			<?php
		endif;
		?>

		<?php
		// Display copyright info.
		if ( ! empty($copy) ) :
			?>

			<div id="copyright" class="clr" role="contentinfo">
				<?php
				if ( ! empty($copy) ) {
					echo wp_kses_post( do_shortcode( $copy ) );
				}
				?>
			</div><!-- #copyright -->

			<?php
		endif;
		?>

	</div><!-- #footer-bottom-inner -->

	<?php do_action( 'ocean_after_footer_bottom_inner' ); ?>

</div><!-- #footer-bottom -->

<?php do_action( 'ocean_after_footer_bottom' ); ?>
