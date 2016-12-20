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
$home_url   = home_url( '/' );
$blog_name  = get_bloginfo( 'name' ); ?>

<li class="middle-site-logo clr">

	<?php
	// Custom site-wide image logo
	if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {

		the_custom_logo();

	} elseif ( function_exists( 'jetpack_has_site_logo' ) && jetpack_has_site_logo() ) {

		jetpack_the_site_logo();

	} else { ?>

		<a href="<?php echo esc_url( $home_url ); ?>" rel="home" class="site-title site-logo-text"><?php echo esc_html( $blog_name ); ?></a>

	<?php } ?>

</li>