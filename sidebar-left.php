<?php
/**
 * The left sidebar containing the widget area.
 *
 * @package OceanWP WordPress theme
 */

?>

<?php do_action( 'ocean_before_sidebar' ); ?>

<aside id="left-sidebar" class="sidebar-container widget-area sidebar-secondary"<?php oceanwp_schema_markup( 'sidebar' ); ?> role="complementary" aria-label="<?php esc_html_e( 'Secondary Sidebar', 'oceanwp' ); ?>">

	<?php do_action( 'ocean_before_sidebar_inner' ); ?>

	<div id="left-sidebar-inner" class="clr">

		<?php
		$second_sidebar_id = oceanwp_get_second_sidebar();
		if ( $sidebar === $second_sidebar_id ) {
			dynamic_sidebar( $sidebar );
		}
		?>

	</div><!-- #sidebar-inner -->

	<?php do_action( 'ocean_after_sidebar_inner' ); ?>

</aside><!-- #sidebar -->

<?php do_action( 'ocean_after_sidebar' ); ?>
