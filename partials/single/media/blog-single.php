<?php
/**
 * Displays the post single thumbmnail
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

// LLMS Integration.
if ( OCEANWP_LIFTERLMS_ACTIVE ) {
	$details = get_theme_mod( 'ocean_llms_course_details', array( 'image', 'description', 'meta', 'author', 'progress', 'syllabus' ) );

	if ( is_course() && ! in_array( 'image', $details, true ) ) {
		return;
	}

	if ( is_membership() && ! ( get_theme_mod( 'ocean_llms_membership_image', false ) ) ) {
		return;
	}
}

// Define image alt text usage status.
$sp_seo_set = get_theme_mod( 'ocean_enable_sp_fimage_alt', false );
$sp_seo_set = $sp_seo_set ? $sp_seo_set : false;

// Retreive image alt text or use OceanWP default text if image alt text not set.
$spfe_img_alt = get_post_meta( get_post_thumbnail_id( get_the_ID() ), '_wp_attachment_image_alt', true);

$sp_fimage_alt = ( false === $sp_seo_set || ( true === $sp_seo_set && ! $spfe_img_alt ) ) ? oceanwp_theme_strings( 'owp-string-current-read', false ) . ' ' . get_the_title() : $spfe_img_alt;

// Image args.
$img_args = array(
	'alt' => $sp_fimage_alt,
);

if ( oceanwp_get_schema_markup( 'image' ) ) {
	$img_args['itemprop'] = 'image';
}

// Caption.
$caption = get_the_post_thumbnail_caption();

?>

<div class="thumbnail">

	<?php
	// Display post thumbnail.
	the_post_thumbnail( 'full', $img_args );

	// Caption.
	if ( $caption ) {
		?>
		<div class="thumbnail-caption">
			<?php echo wp_kses_post( $caption ); ?>
		</div>
		<?php
	}
	?>

</div><!-- .thumbnail -->
