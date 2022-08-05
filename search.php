<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<?php do_action( 'ocean_before_content_wrap' ); ?>

	<div id="content-wrap" class="container clr">

		<?php do_action( 'ocean_before_primary' ); ?>

		<div id="primary" class="content-area clr">

			<?php do_action( 'ocean_before_content' ); ?>

			<div id="content" class="site-content clr">

				<?php
				$logo_search = get_theme_mod( 'ocean_search_logo' );
				if ( ! empty( $logo_search ) ) {
					?>
					<img class="logo-search" src="<?php echo esc_url( $logo_search ); ?>" alt="<?php esc_attr_e( 'Search Logo', 'oceanwp' ); ?>" title="<?php esc_attr_e( 'Search Logo', 'oceanwp' ); ?>" />
				<?php } ?>
			
				<?php do_action( 'ocean_before_content_inner' ); ?>

				<?php if ( have_posts() ) : ?>

						<?php
						while ( have_posts() ) :
							the_post();
							?>

							<?php get_template_part( 'partials/search/layout' ); ?>

						<?php endwhile; ?>

					<?php oceanwp_pagination(); ?>

				<?php else : ?>

					<?php
					// Display no post found notice.
					get_template_part( 'partials/none' );
					?>

				<?php endif; ?>

				<?php do_action( 'ocean_after_content_inner' ); ?>

			</div><!-- #content -->

			<?php do_action( 'ocean_after_content' ); ?>

		</div><!-- #primary -->

		<?php do_action( 'ocean_after_primary' ); ?>

	</div><!-- #content-wrap -->

	<?php do_action( 'ocean_after_content_wrap' ); ?>

<?php get_footer(); ?>
