<?php
/**
 * The left sidebar containing the widget area.
 *
 * @package OceanWP WordPress theme
 */ ?>

<?php do_action( 'ocean_before_sidebar' ); ?>

<aside id="left-sidebar" class="sidebar-container widget-area sidebar-secondary"<?php oceanwp_schema_markup( 'sidebar' ); ?> role="complementary" aria-label="<?php _e( 'Secondary Sidebar', 'oceanwp' ); ?>">

	<?php do_action( 'ocean_before_sidebar_inner' ); ?>

	<div id="left-sidebar-inner" class="clr">

		<?php
		if ( $sidebar = oceanwp_get_second_sidebar() ) {
			dynamic_sidebar( $sidebar );
		} ?>

	</div><!-- #sidebar-inner -->

	<?php do_action( 'ocean_after_sidebar_inner' ); ?>

</aside><!-- #sidebar -->

<?php do_action( 'ocean_after_sidebar' ); ?>