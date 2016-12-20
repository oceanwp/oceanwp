<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr">

		<div id="primary" class="content-area clr">

			<div id="content" class="site-content clr">

				<?php get_template_part( 'partials/archive', 'header' ); ?>

				<?php if ( have_posts() ) : ?>

						<?php while ( have_posts() ) : the_post(); ?>

							<?php get_template_part( 'partials/entry/layout' ); ?>

						<?php endwhile; ?>

					<?php oceanwp_pagination(); ?>

				<?php else : ?>

					<?php
					// Display no post found notice
					get_template_part( 'partials/none' ); ?>

				<?php endif; ?>

			</div><!-- #content -->

		</div><!-- #primary -->

		<?php get_sidebar(); ?>

	</div><!-- .container -->

<?php get_footer(); ?>