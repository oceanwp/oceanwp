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

			<?php do_action( 'ocean_top_bar' ); ?>

			<?php do_action( 'ocean_header' ); ?>

			<?php do_action( 'ocean_before_main' ); ?>
			
			<main id="main" class="site-main clr" itemprop="<?php echo $itemprop; ?>" itemscope="itemscope" itemtype="<?php echo $itemtype; ?>">

				<?php do_action( 'ocean_page_header' ); ?>