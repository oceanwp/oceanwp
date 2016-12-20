<?php
/**
 * WooCommerce Default template
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr">

		<div id="primary" class="content-area clr">

			<div id="content" class="clr site-content">

				<article class="entry-content entry clr">

					<?php woocommerce_content(); // WooCommerce content is added here ?>
					
				</article><!-- #post -->

			</div><!-- #content -->

		</div><!-- #primary -->

		<?php get_sidebar(); ?>

	</div><!-- #content-wrap -->

<?php get_footer(); ?>