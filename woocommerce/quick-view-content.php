<?php
/**
 * Quick view template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

while ( have_posts() ) : the_post(); ?>

	<div id="product-<?php the_ID(); ?>" <?php post_class( 'product' ); ?>>
		<?php do_action( 'ocean_woo_quick_view_product_image' ); ?>
		<div class="summary entry-summary">
			<div class="summary-content">
				<?php do_action( 'ocean_woo_quick_view_product_content' ); ?>
			</div>
		</div>
	</div>

<?php
endwhile;