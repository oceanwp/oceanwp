<?php
/**
 * Top Menu Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Menu position
$position 	= get_theme_mod( 'ocean_top_header_menu_position', 'before' );

// Get classes
$classes = array( 'clr' );

// Add container class
if ( true != get_theme_mod( 'ocean_header_full_width', false ) ) {
    $classes[] = 'container';
}

if ( 'sidebar' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
	$classes[] = 'mobile-sidebar-menu-style';
}

// Turn classes into space seperated string
$classes = implode( ' ', $classes );

// Search style
$search = oceanwp_menu_search_style(); ?>

<?php
if ( 'after' == $position ) { ?>
	<div class="header-bottom clr">
		<div class="container">
			<?php get_template_part( 'partials/header/logo' ); ?>
		</div>
	</div>
<?php
} ?>

<div class="<?php echo esc_attr( oceanwp_top_header_classes() ); ?>">

	<?php do_action( 'ocean_before_header_inner' ); ?>

	<div id="site-header-inner" class="<?php echo esc_attr( $classes ); ?>">

		<?php
		// Search header replace
		if ( 'header_replace' == $search ) {
			get_template_part( 'partials/header/search-replace' );
		} ?>

		<div class="left clr">

			<div class="inner">

				<?php get_template_part( 'partials/header/nav' ); ?>

				<?php get_template_part( 'partials/mobile/mobile-icon' ); ?>

			</div>

		</div>

		<div class="right clr">

			<div class="inner">

				<?php if ( true == get_theme_mod( 'ocean_menu_social', false ) ) {
					get_template_part( 'partials/header/social' );
				}

				oceanwp_top_header_search();

				// Search style
				if ( 'drop_down' == $search ) {
					get_template_part( 'partials/header/search-dropdown' );
				} else if ( 'overlay' == $search ) {
					get_template_part( 'partials/header/search-overlay' );
				} ?>

			</div>

		</div>

	</div><!-- #site-header-inner -->

	<?php get_template_part( 'partials/mobile/mobile-dropdown' ); ?>

	<?php do_action( 'ocean_after_header_inner' ); ?>

</div><!-- .header-top -->

<?php
if ( 'before' == $position ) { ?>
	<div class="header-bottom clr">
		<div class="container">
			<?php get_template_part( 'partials/header/logo' ); ?>
		</div>
	</div>
<?php
} ?>