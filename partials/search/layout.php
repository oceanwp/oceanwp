<?php
/**
 * Search result page entry layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="search-entry-inner clr">

		<?php
		// Featured Image.
		get_template_part( 'partials/search/thumbnail' );
		?>

		<div class="search-entry-content clr">

			<?php
			// Title.
			get_template_part( 'partials/search/header' );

			// Content.
			get_template_part( 'partials/search/content' );

			// Read more button.
			get_template_part( 'partials/search/readmore' );

			?>

		</div><!-- .search-entry-content -->

	</div><!-- .search-entry-inner -->

</article><!-- #post-## -->
