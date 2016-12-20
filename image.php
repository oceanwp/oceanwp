<?php
/**
 * The template for displaying image attachments.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr">

		<div id="primary" class="content-area clr">

			<div id="content" class="site-content">

				<?php while ( have_posts() ) : the_post(); ?>
					
					<article <?php post_class( 'image-attachment' ); ?>>
						<p><?php echo wp_get_attachment_image( get_the_ID(), 'full' ); ?></p>
						<div class="entry clr">
							<?php the_content(); ?>
							<?php
								// If comments are open or we have at least one comment, load up the comment template
								if ( comments_open() || '0' != get_comments_number() ) :
									comments_template();
								endif;
							?>
						</div><!-- .entry -->
					</article><!-- #post -->

				<?php endwhile; ?>

			</div><!-- #content -->

		</div><!-- #primary -->

	</div><!-- .container -->

<?php get_footer(); ?>