<?php
/**
 * The default template for displaying the footer copyright
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get copyright text
$copy = get_theme_mod( 'ocean_footer_copyright_text', 'Copyright - OceanWP Theme by Nick Powered by <a href="https://wordpress.org/" title="WordPress" target="_blank">WordPress</a>' );

// Get footer menu location and apply filters for child theming
$menu_location = 'footer_menu';
$menu_location = apply_filters( 'ocean_footer_menu_location', $menu_location);

// Inner classes
$wrap_classes = array( 'clr' );
if ( ! has_nav_menu( $menu_location ) ) {
	$wrap_classes[] = 'no-footer-nav';
}
$wrap_classes = implode( ' ', $wrap_classes ); ?>

<div id="footer-bottom" class="<?php echo $wrap_classes; ?>">

	<div id="footer-bottom-inner" class="container clr">

		<?php
		// Display footer bottom menu if location is defined
		if ( has_nav_menu( $menu_location ) ) : ?>

			<div id="footer-bottom-menu" class="clr">
				<?php
				// Display footer menu
				wp_nav_menu( array(
					'theme_location' => $menu_location,
					'sort_column'    => 'menu_order',
					'fallback_cb'    => false,
				) ); ?>

			</div><!-- #footer-bottom-menu -->

		<?php endif; ?>

		<?php
		// Display copyright info
		if ( $copy ) : ?>

			<div id="copyright" class="clr" role="contentinfo">
				<?php echo wp_kses_post( do_shortcode( $copy ) ); ?>
			</div><!-- #copyright -->

		<?php endif; ?>

	</div><!-- #footer-bottom-inner -->

</div><!-- #footer-bottom -->