<?php
/**
 * Template Name: Landing Page
 *
 * @package OceanWP WordPress theme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<!-- Begin Body -->
<body <?php body_class(); ?> itemscope="itemscope" itemtype="http://schema.org/WebPage">

<div id="outer-wrap" class="site clr">

	<div id="wrap" class="clr">

		<main id="main" class="site-main clr" <?php echo oceanwp_main_schema_markup(); ?>>

			<div id="content-wrap" class="container clr">

				<section id="primary" class="content-area clr">

					<div id="content" class="site-content clr" role="main">

						<?php while ( have_posts() ) : the_post(); ?>

							<div class="entry-content entry clr">
								<?php the_content(); ?>
							</div><!-- .entry-content -->

						<?php endwhile; ?>

					</div><!-- #content -->

				</section><!-- #primary -->

			</div><!-- #content-wrap -->

        </main><!-- #main-content -->
                
    </div><!-- #wrap -->

</div><!-- .outer-wrap -->

<?php wp_footer(); ?>

</body>
</html>