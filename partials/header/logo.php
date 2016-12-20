<?php
/**
 * Header Logo
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Vars
$home_url   		= home_url( '/' );
$blog_name  		= get_bloginfo( 'name' );
$transparent_logo 	= oceanwp_header_transparent_logo();
$full_screen_logo 	= oceanwp_header_full_screen_logo(); ?>

<div id="site-logo" class="<?php echo oceanwp_header_logo_classes(); ?>" itemscope itemtype="http://schema.org/Brand">

	<div id="site-logo-inner" class="clr">

		<?php
		// Custom site-wide image logo
		if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {

			the_custom_logo();

			// Custom transparent header logo
			if ( $transparent_logo ) { ?>

				<a href="<?php echo esc_url( $home_url ); ?>" class="transparent-logo-link" rel="home">

					<img src="<?php echo esc_url( $transparent_logo ); ?>" class="transparent-logo" alt="<?php echo esc_attr( $blog_name ); ?>" width="<?php echo esc_attr( get_theme_mod( 'ocean_transparent_logo_width' ) ); ?>" height="<?php echo esc_attr( get_theme_mod( 'ocean_transparent_logo_height' ) ) ; ?>" data-no-retina />

				</a>

			<?php }

			// Custom full screen header logo
			if ( $full_screen_logo ) { ?>

				<a href="<?php echo esc_url( $home_url ); ?>" class="full-screen-logo-link" rel="home">

					<img src="<?php echo esc_url( $full_screen_logo ); ?>" class="full-screen-logo" alt="<?php echo esc_attr( $blog_name ); ?>" width="<?php echo esc_attr( get_theme_mod( 'ocean_full_screen_logo_width' ) ); ?>" height="<?php echo esc_attr( get_theme_mod( 'ocean_full_screen_logo_height' ) ) ; ?>" data-no-retina />

				</a>

			<?php }

		} elseif ( function_exists( 'jetpack_has_site_logo' ) && jetpack_has_site_logo() ) {

			jetpack_the_site_logo();

		} else { ?>

			<a href="<?php echo esc_url( $home_url ); ?>" rel="home" class="site-title site-logo-text"><?php echo esc_html( $blog_name ); ?></a>

		<?php } ?>

	</div><!-- #site-logo-inner -->

	<?php
	// Site description
	if ( 'top' == get_theme_mod( 'ocean_header_style', 'minimal' )
		&& '' != get_bloginfo( 'description' ) ) { ?>
		<div id="site-description"><h2><?php echo bloginfo( 'description' ); ?></h2></div><!-- #site-logo-inner -->
	<?php } ?>

</div><!-- #site-logo -->