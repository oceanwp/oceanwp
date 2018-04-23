<?php
/**
 * Displays the post entry thumbmnail
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

// Add images size if blog grid
if ( 'grid-entry' == oceanwp_blog_entry_style() ) {
	$size = oceanwp_blog_entry_images_size();
} else {
	$size = 'full';
}

// Overlay class
if ( is_customize_preview()
	&& false == get_theme_mod( 'ocean_blog_image_overlay', true ) ) {
	$class = 'no-overlay';
} else {
	$class = 'overlay';
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

	<a href="<?php the_permalink(); ?>" class="thumbnail-link">

		<?php
		// Image width
		$img_width  = apply_filters( 'ocean_blog_entry_image_width', absint( get_theme_mod( 'ocean_blog_entry_image_width' ) ) );
		$img_height = apply_filters( 'ocean_blog_entry_image_height', absint( get_theme_mod( 'ocean_blog_entry_image_height' ) ) );

    	// Images attr
		$img_id 	= get_post_thumbnail_id( get_the_ID(), 'full' );
		$img_url 	= wp_get_attachment_image_src( $img_id, 'full', true );

		if ( OCEAN_EXTRA_ACTIVE
			&& function_exists( 'ocean_extra_image_attributes' ) ) {
			$img_atts = ocean_extra_image_attributes( $img_url[1], $img_url[2], $img_width, $img_height );
		}

		// If Ocean Extra is active and has a custom size
		if ( OCEAN_EXTRA_ACTIVE
			&& function_exists( 'ocean_extra_resize' )
			&& ! empty( $img_atts ) ) { ?>

			<img src="<?php echo ocean_extra_resize( $img_url[0], $img_atts[ 'width' ], $img_atts[ 'height' ], $img_atts[ 'crop' ], true, $img_atts[ 'upscale' ] ); ?>" alt="<?php the_title_attribute(); ?>" width="<?php echo esc_attr( $img_width ); ?>" height="<?php echo esc_attr( $img_height ); ?>"<?php oceanwp_schema_markup( 'image' ); ?> />

		<?php
		} else {

			// Display post thumbnail
			the_post_thumbnail( $size, $img_args );

		}

		// If overlay
		if ( is_customize_preview()
			|| true == get_theme_mod( 'ocean_blog_image_overlay', true ) ) { ?>
			<span class="<?php echo esc_attr( $class ); ?>"></span>
		<?php } ?>
		
	</a>

	<?php
	// Caption
	if ( $caption ) { ?>
		<div class="thumbnail-caption">
			<?php echo esc_attr( $caption ); ?>
		</div>
	<?php
	} ?>

</div><!-- .thumbnail -->