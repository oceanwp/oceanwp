<?php
/**
 * Full Screen Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Add container class if the header is not full width
$class = '';
if ( true != get_theme_mod( 'ocean_header_full_width', false ) )  {
	$class = ' container';
} ?>

<?php do_action( 'ocean_before_header_inner' ); ?>

<div id="site-header-inner" class="clr<?php echo esc_attr( $class ); ?>">

	<?php get_template_part( 'partials/header/logo' ); ?>

	<div id="site-navigation-wrap" class="clr">
		
		<div class="menu-bar-wrap clr">
			<div class="menu-bar-inner clr">
				<a href="#" class="menu-bar"><span class="ham"></span></a>
			</div>
		</div>

		<div id="full-screen-menu" class="clr">
			<div id="full-screen-menu-inner" class="clr">
				<?php get_template_part( 'partials/header/nav' ); ?>
			</div>
		</div>

	</div><!-- #site-header-wrap -->

	<?php get_template_part( 'partials/mobile/mobile-icon' ); ?>

</div><!-- #site-header-inner -->

<?php get_template_part( 'partials/mobile/mobile-dropdown' ); ?>

<?php do_action( 'ocean_after_header_inner' ); ?>