<?php
/**
 * Blog entry video format media
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Return if Ocean Extra is not active.
if ( ! OCEAN_EXTRA_ACTIVE ) {
	return;
}

// Get post video.
$video = oceanwp_get_post_video_html();

?>

<?php
// Display video if one exists and it's not a password protected post.
if ( $video && ! post_password_required() ) :
	?>

	<div class="blog-entry-media thumbnail clr">

		<div class="blog-entry-video">

			<?php echo $video; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>

		</div><!-- .blog-entry-video -->

	</div><!-- .blog-entry-media -->

	<?php
	// Else display post thumbnail.
else :
	?>

	<?php get_template_part( 'partials/entry/media/blog-entry' ); ?>

	<?php
endif;
?>
