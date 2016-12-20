<?php
/**
 * The template for displaying 404 pages.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr">

		<div id="primary" class="content-area clr">

			<main id="content" class="clr site-content" role="main">

				<article class="entry clr">

					<div class="error404-content clr">

						<h1 class="error-title"><?php esc_html_e( 'This page could not be found!', 'oceanwp' ) ?></h1>
						<p class="error-text"><?php esc_html_e( 'We are sorry. But the page you are looking for is not available.', 'oceanwp' ); ?><br /><?php esc_html_e( 'Perhaps you can try a new searching.', 'oceanwp' ); ?></p>
						<?php get_search_form(); ?>
						<a class="error-btn button" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Back To Homepage', 'oceanwp' ) ?></a>

					</div><!-- .error404-content -->

				</article><!-- .entry -->

			</main><!-- #content -->

		</div><!-- #primary -->

	</div><!-- .container -->
	
<?php get_footer(); ?>
