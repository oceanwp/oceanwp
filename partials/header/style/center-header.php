<?php
/**
 * Center Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get classes
$classes = array( 'clr' );

// Add container class
if ( true != get_theme_mod( 'ocean_header_full_width', false ) )  {
	$classes[] = 'container';
}

// Add menus position class
$position = get_theme_mod( 'ocean_center_header_menu_position', 'centered' );
$position = $position ? $position : 'centered';
$classes[] = $position;

// Turn classes into space seperated string
$classes = implode( ' ', $classes );

// Left menu
$left_menu = get_theme_mod( 'ocean_center_header_left_menu' );
$left_menu = '0' != $left_menu ? $left_menu : '';
$left_menu = apply_filters( 'ocean_center_header_left_menu', $left_menu );

// Right menu
$right_menu = apply_filters( 'ocean_main_menu_location', 'main_menu' );
$right_custom_menu = apply_filters( 'ocean_custom_menu', $right_menu );

// Retina logo
$retina_logo = oceanwp_header_retina_logo_setting(); ?>

<?php do_action( 'ocean_before_header_inner' ); ?>

<div id="site-header-inner" class="<?php echo esc_attr( $classes ); ?>">

	<?php do_action( 'ocean_header_inner_left_content' ); ?>

	<?php
	// If social
	if ( true == get_theme_mod( 'ocean_menu_social', false ) ) {
		get_template_part( 'partials/header/social' );
	} ?>

	<?php
	// Get classes for the header menu
	$wrap_classes  = oceanwp_header_menu_classes( 'wrapper' );
	$inner_classes = oceanwp_header_menu_classes( 'inner' );

	// Get menu classes
	$menu_classes = array( 'main-menu', 'dropdown-menu', 'sf-menu', 'clr' );

	// Turn menu classes into space seperated string
	$menu_classes = implode( ' ', $menu_classes );

	// Left menu arguments
	$left_menu_args = array(
		'menu' 			 => $left_menu,
		'container'      => false,
		'fallback_cb'    => false,
		'items_wrap' 	 => '%3$s',
		'link_before'    => '<span class="text-wrap">',
		'link_after'     => '</span>',
		'walker'         => new OceanWP_Custom_Nav_Walker(),
	);

	// Menu arguments
	$right_menu_args = array(
		'theme_location' => $right_menu,
		'container'      => false,
		'fallback_cb'    => false,
		'items_wrap' 	 => '%3$s',
		'link_before'    => '<span class="text-wrap">',
		'link_after'     => '</span>',
		'walker'         => new OceanWP_Custom_Nav_Walker(),
	);

	// Check if right custom menu
	if ( '' != $right_custom_menu ) {
		$right_menu_args['menu'] = $right_custom_menu;
	}

	do_action( 'ocean_before_nav' ); ?>

	<div id="site-navigation-wrap" class="<?php echo esc_attr( $wrap_classes ); ?>">

		<?php do_action( 'ocean_before_nav_inner' ); ?>

		<nav id="site-navigation" class="<?php echo esc_attr( $inner_classes ); ?>"<?php oceanwp_schema_markup( 'site_navigation' ); ?>>

			<ul class="left-menu <?php echo esc_attr( $menu_classes ); ?>">
				<?php
				// Display menu if defined
				if ( $left_menu ) {
					wp_nav_menu( $left_menu_args );
				} ?>
			</ul>

			<?php do_action( 'ocean_before_logo' ); ?>

			<div class="middle-site-logo <?php echo esc_attr( oceanwp_header_logo_classes() ); ?>">

				<?php do_action( 'ocean_before_logo_inner' ); ?>

				<?php
				// Custom site-wide image logo
				if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {

					do_action( 'ocean_before_logo_img' );

					// Add srcset attr
					if ( $retina_logo ) {
						add_filter( 'wp_get_attachment_image_attributes', 'oceanwp_header_retina_logo', 10, 3 );
					}

					// Default logo
					the_custom_logo();

					// Remove filter to only add the srcset attr to the logo
					if ( $retina_logo ) {
						remove_filter( 'wp_get_attachment_image_attributes', 'oceanwp_header_retina_logo', 10 );
					}

					do_action( 'ocean_after_logo_img' );

				} else { ?>

					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title site-logo-text"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a>

				<?php } ?>

				<?php do_action( 'ocean_after_logo_inner' ); ?>

			</div>

			<?php do_action( 'ocean_after_logo' ); ?>

			<ul class="right-menu <?php echo esc_attr( $menu_classes ); ?>">

				<?php
				// Display menu if defined
				if ( has_nav_menu( $right_menu ) ) {

						wp_nav_menu( $right_menu_args );

						// Drop down search
						if ( 'drop_down' == oceanwp_menu_search_style() ) {
							get_template_part( 'partials/header/search-dropdown' );
						}

						// WooCommerce cart
						if ( 'drop_down' == oceanwp_menu_cart_style() ) {
							get_template_part( 'partials/cart/cart-dropdown' );
						}

				} ?>

			</ul>

			<?php
			// Search header replace
			if ( 'header_replace' == oceanwp_menu_search_style() ) {
				get_template_part( 'partials/header/search-replace' );
			} ?>

		</nav><!-- #site-navigation -->

		<?php do_action( 'ocean_after_nav_inner' ); ?>

	</div><!-- #site-navigation-wrap -->

	<?php do_action( 'ocean_header_inner_right_content' ); ?>

</div><!-- #site-header-inner -->

<?php get_template_part( 'partials/mobile/mobile-dropdown' ); ?>

<?php do_action( 'ocean_after_header_inner' ); ?>