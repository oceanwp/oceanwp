<?php
/**
 * Category for the thumbnail style.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( 'post' === get_post_type() ) {
	?>

	<div class="blog-entry-category clr">
		<?php the_category( ' / ', get_the_ID() ); ?>
	</div>

	<?php
}
?>
