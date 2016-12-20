<?php
/**
 * The Header for our theme.
 *
 * @package OceanWP WordPress theme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> itemscope="itemscope" itemtype="http://schema.org/WebPage">

	<div id="outer-wrap" class="site clr">

		<div id="wrap" class="clr">

			<?php get_template_part( 'partials/topbar/layout' ); ?>

			<?php get_template_part( 'partials/header/layout' ); ?>
			
			<main id="main" class="site-main clr" <?php echo oceanwp_main_schema_markup(); ?>>

				<?php
				// Display shortcode if there is one
				if ( $shortcode = oceanwp_has_shortcode() ) :
					echo do_shortcode( $shortcode );
				endif; ?>

				<?php get_template_part( 'partials/page-header' ); ?>