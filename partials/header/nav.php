<?php
/**
 * Header menu template part.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Header style
$header_style = oceanwp_header_style();

// Menu Location
$menu_location = apply_filters( 'ocean_main_menu_location', 'main_menu' );

// Multisite global menu
$ms_global_menu = apply_filters( 'ocean_ms_global_menu', false );

// Display menu if defined
if ( has_nav_menu( $menu_location ) || $ms_global_menu ) : 

	// Get classes for the header menu
	$wrap_classes  = oceanwp_header_menu_classes( 'wrapper' );
	$inner_classes = oceanwp_header_menu_classes( 'inner' );

	// Get menu classes
	$menu_classes = array( 'main-menu' );

	// If full screen header style
	if ( 'full_screen' == $header_style ) {
		$menu_classes[] = 'fs-dropdown-menu';
	} else {
		$menu_classes[] = 'dropdown-menu sf-menu';
	}

	// Turn menu classes into space seperated string
	$menu_classes = implode( ' ', $menu_classes );

	// Menu arguments
	$menu_args = array(
		'theme_location' => $menu_location,
		'menu_class'     => $menu_classes,
		'container'      => false,
		'fallback_cb'    => false,
		'link_before'    => '<span class="text-wrap">',
		'link_after'     => '</span>',
		'walker'         => new OceanWP_Custom_Nav_Walker(),
	);

	// Check if custom menu
	if ( $menu = oceanwp_header_custom_menu() ) {
		$menu_args['menu']  = $menu;
	}

	do_action( 'ocean_before_nav' );

	// If is not full screen header style
	if ( 'full_screen' != $header_style ) { ?>
		<div id="site-navigation-wrap" class="<?php echo esc_attr( $wrap_classes ); ?>">
	<?php } ?>

		<?php do_action( 'ocean_before_nav_inner' ); ?>

		<?php
		// Add container if is medium header style
		if ( 'medium' == $header_style ) { ?>
			<div class="container clr">
		<?php } ?>

		<nav id="site-navigation" class="<?php echo esc_attr( $inner_classes ); ?>"<?php oceanwp_schema_markup( 'site_navigation' ); ?>>

			<?php
			// Display global multisite menu
			if ( is_multisite() && $ms_global_menu ) :
				
				switch_to_blog( 1 );  
				wp_nav_menu( $menu_args );
				restore_current_blog();

			// Display this site's menu
			else :

				wp_nav_menu( $menu_args );

			endif;

			// If is not top menu header style
			if ( 'top' != $header_style
				&& 'full_screen' != $header_style
				&& 'medium' != $header_style ) {

				// Header search
				if ( 'drop_down' == oceanwp_menu_search_style() ) {
					get_template_part( 'partials/header/search-dropdown' );
				} else if ( 'header_replace' == oceanwp_menu_search_style() ) {
					get_template_part( 'partials/header/search-replace' );
				}

			}

			// WooCommerce cart
			if ( 'drop_down' == oceanwp_menu_cart_style()
				&& 'full_screen' != $header_style ) {
				get_template_part( 'partials/cart/cart-dropdown' );
			}

			// Social links if full screen header style
			if ( 'full_screen' == $header_style
				&& true == get_theme_mod( 'ocean_menu_social', false ) ) {
				get_template_part( 'partials/header/social' );
			} ?>

		</nav><!-- #site-navigation -->

		<?php
		// Add container if is medium header style
		if ( 'medium' == $header_style ) { ?>
			</div>
		<?php } ?>

		<?php do_action( 'ocean_after_nav_inner' ); ?>

	<?php
	// If is not full screen header style
	if ( 'full_screen' != $header_style ) { ?>
		</div><!-- #site-navigation-wrap -->
	<?php } ?>

	<?php do_action( 'ocean_after_nav' ); ?>

<?php endif; ?>