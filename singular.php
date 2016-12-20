 <?php
/**
 * The template for displaying all pages, single posts and attachments
 *
 * This is a new template file that WordPress introduced in
 * version 4.3.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr">

		<div id="primary" class="content-area clr">

			<div id="content" class="site-content clr">

				<?php
				// Start loop
				while ( have_posts() ) : the_post();

					// Single Page
					if ( is_singular( 'page' ) ) {

						get_template_part( 'partials/page/layout' );

					}

					// All other post types.
					else {

    					get_template_part( 'partials/single/layout' );

  					}

				endwhile; ?>

			</div><!-- #content -->

		</div><!-- #primary -->

		<?php get_sidebar(); ?>

	</div><!-- .container -->

<?php get_footer(); ?>
