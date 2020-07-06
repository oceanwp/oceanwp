<?php
/**
 * Displays the post entry thumbmnail
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Return if there isn't a thumbnail defined.
if ( ! has_post_thumbnail() ) {
	return;
}

// Image args.
$img_args = array(
	'alt' => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$img_args['itemprop'] = 'image';
} ?>

<div class="thumbnail">

	<a href="<?php the_permalink(); ?>" class="thumbnail-link">

		<?php
		// Display post thumbnail.
		the_post_thumbnail( 'thumbnail', $img_args );
		?>

	</a>

</div><!-- .thumbnail -->
