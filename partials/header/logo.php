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
$retina_logo 		= oceanwp_header_retina_logo_setting();
$full_screen_logo 	= get_theme_mod( 'ocean_full_screen_header_logo' );
$responsive_logo 	= get_theme_mod( 'ocean_responsive_logo' );
$header_text_color	= null;

if ( display_header_text() && ! OCEAN_EXTRA_ACTIVE && ! class_exists( 'Ocean_Extra_Theme_Panel' ) ) {
	$header_text_color = ' style="color:#' . get_header_textcolor() . ';"';
}

?>

<?php do_action( 'ocean_before_logo' ); ?>

<div id="site-logo" class="<?php echo esc_attr( oceanwp_header_logo_classes() ); ?>"<?php oceanwp_schema_markup( 'logo' ); ?>>

	<?php do_action( 'ocean_before_logo_inner' ); ?>

	<div id="site-logo-inner" class="clr">

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

			// Full screen logo
			if ( $full_screen_logo ) {
				oceanwp_custom_full_screen_logo();
			}

			// Responsive logo
			if ( $responsive_logo ) {
				oceanwp_custom_responsive_logo();
			}

			do_action( 'ocean_after_logo_img' );

		} else {
			if (display_header_text()==true){ ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title site-logo-text" <?php echo $header_text_color; ?>><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a>
				<?php
				do_action( 'ocean_after_site_title' );
			 }

		} ?>

	</div><!-- #site-logo-inner -->

	<?php do_action( 'ocean_after_logo_inner' ); ?>

	<?php
	// Site description
	if ( display_header_text()==true ){
		if ( 'top' == oceanwp_header_style()
			&& '' != get_bloginfo( 'description' ) ) { ?>
			<div id="site-description"><h2 <?php echo $header_text_color; ?>><?php echo bloginfo( 'description' ); ?></h2></div>
	<?php }} ?>

</div><!-- #site-logo -->

<?php do_action( 'ocean_after_logo' ); ?>