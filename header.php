<?php
/**
 * The Header for our theme.
 *
 * @package OceanWP WordPress theme
 */ ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<?php
// Main schema markup
if ( is_singular( 'post' ) ) {
	$itemtype = 'http://schema.org/Blog';
	$itemprop = '';
} else {
	$itemtype = 'http://schema.org/WebPageElement';
	$itemprop = 'mainContentOfPage';
} ?>

<body <?php body_class(); ?> itemscope="itemscope" itemtype="http://schema.org/WebPage">

	<?php do_action( 'ocean_before_outer_wrap' ); ?>

	<div id="outer-wrap" class="site clr">

		<?php do_action( 'ocean_before_wrap' ); ?>

		<div id="wrap" class="clr">

			<?php
			// Check if the top bar is enabled
			if ( oceanwp_display_topbar() ) {
				get_template_part( 'partials/topbar/layout' );
			}

			// Check if the header is enabled
			if ( oceanwp_display_header() ) {
				get_template_part( 'partials/header/layout' );
			} ?>

			<?php do_action( 'ocean_before_main' ); ?>
			
			<main id="main" class="site-main clr" itemprop="<?php echo $itemprop; ?>" itemscope="itemscope" itemtype="<?php echo $itemtype; ?>">

				<?php
				// Display shortcode if there is one
				if ( $shortcode = oceanwp_has_shortcode() ) :
					echo do_shortcode( $shortcode );
				endif; ?>

				<?php get_template_part( 'partials/page-header' ); ?>