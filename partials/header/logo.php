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
$retina_logo 		= get_theme_mod( 'ocean_retina_logo' );
$transparent_logo 	= get_theme_mod( 'ocean_transparent_header_logo' );
$full_screen_logo 	= get_theme_mod( 'ocean_full_screen_header_logo' ); ?>

<?php do_action( 'ocean_before_logo' ); ?>

<div id="site-logo" class="<?php echo esc_attr( oceanwp_header_logo_classes() ); ?>" itemscope itemtype="http://schema.org/Brand">

	<?php do_action( 'ocean_before_logo_inner' ); ?>

	<div id="site-logo-inner" class="clr">

		<?php
		// Custom site-wide image logo
		if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {

			// Default logo
			the_custom_logo();

			// Retina logo
			if ( $retina_logo ) {
				the_custom_retina_logo();
			}

			// Transparent logo
			if ( $transparent_logo ) {
				the_custom_transparent_logo();
			}

			// Full screen logo
			if ( $full_screen_logo ) {
				the_custom_full_screen_logo();
			}

		} else { ?>

			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title site-logo-text"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a>

		<?php } ?>

	</div><!-- #site-logo-inner -->

	<?php do_action( 'ocean_after_logo_inner' ); ?>

	<?php
	// Site description
	if ( 'top' == get_theme_mod( 'ocean_header_style', 'minimal' )
		&& '' != get_bloginfo( 'description' ) ) { ?>
		<div id="site-description"><h2><?php echo bloginfo( 'description' ); ?></h2></div><!-- #site-logo-inner -->
	<?php } ?>

</div><!-- #site-logo -->

<?php do_action( 'ocean_after_logo' ); ?>