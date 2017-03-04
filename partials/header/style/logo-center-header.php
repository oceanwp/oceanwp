<?php
/**
 * Logo Center Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Vars
$retina_logo = get_theme_mod( 'ocean_retina_logo' );

$classes = '';

// If retina logo
if ( '' != $retina_logo ) {
	$classes = ' has-retina-logo';
} ?>

<?php do_action( 'ocean_before_logo' ); ?>

<li class="middle-site-logo clr<?php echo esc_attr( $classes ); ?>">

	<?php do_action( 'ocean_before_logo_inner' ); ?>

	<?php
	// Custom site-wide image logo
	if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {

		// Default logo
		the_custom_logo();

		// Retina logo
		if ( $retina_logo ) {
			the_custom_retina_logo();
		}

	} else { ?>

		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title site-logo-text"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a>

	<?php } ?>

	<?php do_action( 'ocean_after_logo_inner' ); ?>

</li>

<?php do_action( 'ocean_after_logo' ); ?>