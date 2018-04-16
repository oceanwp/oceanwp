<?php
/**
 * Displays the post single thumbmnail
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Return if there isn't a thumbnail defined
if ( ! has_post_thumbnail() ) {
	return;
}

// Image args
$img_args = array(
    'alt' => get_the_title(),
);
if ( oceanwp_get_schema_markup( 'image' ) ) {
	$img_args['itemprop'] = 'image';
}

// Caption
$caption = get_the_post_thumbnail_caption(); ?>

<div class="thumbnail">

	<?php
	// Display post thumbnail
	the_post_thumbnail( 'full', $img_args );

	// Caption
	if ( $caption ) { ?>
		<div class="thumbnail-caption">
			<?php echo esc_attr( $caption ); ?>
		</div>
	<?php
	} ?>

</div><!-- .thumbnail -->