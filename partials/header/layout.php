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
$header_style = get_theme_mod( 'ocean_header_style', 'minimal' );

// If transparent header style
if ( 'transparent' == $header_style ) { ?>
	<div id="transparent-header-wrap" class="clr">
<?php
} ?>

<header id="site-header" class="<?php echo oceanwp_header_classes(); ?>" itemscope="itemscope" itemtype="http://schema.org/WPHeader">

	<?php
	// If top header style
	if ( 'top' == $header_style ) {
		get_template_part( 'partials/header/style/top-header' );
	}

	// If full screen header style
	else if ( 'full_screen' == $header_style ) {
		get_template_part( 'partials/header/style/full-screen-header' );
	}

	// If custom header style
	else if ( 'custom' == $header_style ) {
		get_template_part( 'partials/header/style/custom-header' );
	}

	// Default header style
	else { ?>

		<div id="site-header-inner" class="container clr">

			<?php get_template_part( 'partials/header/logo' ); ?>

			<?php if ( true == get_theme_mod( 'ocean_menu_social', false ) ) {
				get_template_part( 'partials/header/social' );
			} ?>

			<?php get_template_part( 'partials/header/nav' ); ?>

			<?php get_template_part( 'partials/header/mobile-icon' ); ?>

		</div><!-- #site-header-inner -->

	<?php
	} ?>

</header><!-- #header -->

<?php
// If transparent header style
if ( 'transparent' == $header_style ) { ?>
	</div>
<?php
} ?>