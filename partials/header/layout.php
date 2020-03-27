<?php
/**
 * Main Header Layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Header style
$header_style = oceanwp_header_style();

// Header height, used for local scrolling
$header_height = get_theme_mod( 'ocean_header_height', '74' );

if ( class_exists( 'Ocean_Sticky_Header' ) ) {

	if ( 'shrink' == get_theme_mod( 'osh_sticky_header_style', 'shrink' ) ) {
		$header_height = get_theme_mod( 'osh_shrink_header_height', '54' );
	}

}

// If vertical header style
if ( 'vertical' == $header_style ) {
	$header_height = 0;
}

// Add container class if the header is not full width
$class = array();
if ( true != get_theme_mod( 'ocean_header_full_width', false ) )  {
	$class[] = ' container';
}
if ( 'sidebar' == get_theme_mod( 'ocean_mobile_menu_style', 'sidebar' ) ) {
	$class[] = 'mobile-sidebar-menu-style';
}

$class = implode( ' ', $class );

do_action( 'ocean_before_header' );

// If transparent header style
if ( 'transparent' == $header_style
	|| ( 'full_screen' == $header_style && true == get_theme_mod( 'ocean_full_screen_header_transparent', false ) )
		|| ( 'center' == $header_style && true == get_theme_mod( 'ocean_center_header_transparent', false ) )
		|| ( 'medium' == $header_style && true == get_theme_mod( 'ocean_medium_header_transparent', false ) ) ) { ?>
	<div id="transparent-header-wrap" class="clr">
<?php
} ?>

<header id="site-header" class="<?php echo esc_attr( oceanwp_header_classes() ); ?>" data-height="<?php echo esc_attr( $header_height ); ?>"<?php oceanwp_schema_markup( 'header' ); ?> role="banner">

	<?php
	// Elementor `header` location
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'header' ) ) { ?>

		<?php
		// If header video
		if ( function_exists( 'has_header_video' ) && has_header_video() ) { ?>
			<div class="custom-header-media">
				<?php the_custom_header_markup(); ?>
			</div>
		<?php
		}

		// If top header style
		if ( 'top' == $header_style ) {
			get_template_part( 'partials/header/style/top-header' );
		}

		// If full screen header style
		else if ( 'full_screen' == $header_style ) {
			get_template_part( 'partials/header/style/full-screen-header' );
		}

		// If center header style
		else if ( 'center' == $header_style ) {
			get_template_part( 'partials/header/style/center-header' );
		}

		// If medium header style
		else if ( 'medium' == $header_style ) {
			get_template_part( 'partials/header/style/medium-header' );
		}

		// If vertical header style
		else if ( 'vertical' == $header_style ) {
			get_template_part( 'partials/header/style/vertical-header' );
		}

		// If custom header style
		else if ( 'custom' == $header_style ) {
			get_template_part( 'partials/header/style/custom-header' );
		}

		// Default header style
		else { ?>

			<?php do_action( 'ocean_before_header_inner' ); ?>

			<div id="site-header-inner" class="clr <?php echo esc_attr( $class ); ?>">

				<?php do_action( 'ocean_header_inner_left_content' ); ?>

				<?php do_action( 'ocean_header_inner_middle_content' ); ?>

				<?php do_action( 'ocean_header_inner_right_content' ); ?>

			</div><!-- #site-header-inner -->

			<?php get_template_part( 'partials/mobile/mobile-dropdown' ); ?>

			<?php do_action( 'ocean_after_header_inner' ); ?>

		<?php
		} ?>

		<?php
		// If header media
		if ( has_header_image() ) { ?>
			<div class="overlay-header-media"></div>
		<?php
		} ?>
		
	<?php
	} ?>

</header><!-- #site-header -->

<?php
// If transparent header style
if ( 'transparent' == $header_style
	|| ( 'full_screen' == $header_style && true == get_theme_mod( 'ocean_full_screen_header_transparent', false ) )
		|| ( 'center' == $header_style && true == get_theme_mod( 'ocean_center_header_transparent', false ) )
		|| ( 'medium' == $header_style && true == get_theme_mod( 'ocean_medium_header_transparent', false ) ) ) { ?>
	</div>
<?php
}

do_action( 'ocean_after_header' ); ?>