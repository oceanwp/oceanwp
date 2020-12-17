<?php
/**
 * Single related posts
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Only display for standard posts.
if ( 'post' !== get_post_type() ) {
	return;
}

// Get theme icons.
$theme_icons = oceanwp_theme_icons();
$icon_t = oceanwp_theme_icon_class();

// Number of columns for entries.
$oceanwp_columns = apply_filters( 'ocean_related_blog_posts_columns', absint( get_theme_mod( 'ocean_blog_related_columns', '3' ) ) );

// Term.
$term_tax = get_theme_mod( 'ocean_blog_related_taxonomy', 'category' );
$term_tax = $term_tax ? $term_tax : 'category';

// Create an array of current term ID's.
$terms     = wp_get_post_terms( get_the_ID(), $term_tax );
$terms_ids = array();
foreach ( $terms as $termkey ) {
	$terms_ids[] = $termkey->term_id;
}

// Query args.
$args = array(
	'posts_per_page' => apply_filters( 'ocean_related_blog_posts_count', absint( get_theme_mod( 'ocean_blog_related_count', '3' ) ) ),
	'orderby'        => 'rand',
	'post__not_in'   => array( get_the_ID() ),
	'no_found_rows'  => true,
	'tax_query'      => array(
		'relation' => 'AND',
		array(
			'taxonomy' => 'post_format',
			'field'    => 'slug',
			'terms'    => array( 'post-format-quote', 'post-format-link' ),
			'operator' => 'NOT IN',
		),
	),
);

// If category.
if ( 'category' === $term_tax ) {
	$args['category__in'] = $terms_ids;
}

// If tags.
if ( 'post_tag' === $term_tax ) {
	$args['tag__in'] = $terms_ids;
}

// Args.
$args = apply_filters( 'ocean_blog_post_related_query_args', $args );

do_action( 'ocean_before_single_post_related_posts' );

// Related query arguments.
$oceanwp_related_query = new WP_Query( $args );

// If the custom query returns post display related posts section.
if ( $oceanwp_related_query->have_posts() ) :

	// Wrapper classes.
	$classes = 'clr';
	if ( 'full-screen' === oceanwp_post_layout() ) {
		$classes .= ' container';
	} ?>

	<section id="related-posts" class="<?php echo esc_attr( $classes ); ?>">

		<h3 class="theme-heading related-posts-title">
			<span class="text"><?php oceanwp_theme_strings( 'owp-string-single-related-posts', 'oceanwp' ); ?></span>
		</h3>

		<div class="oceanwp-row clr">

			<?php $oceanwp_count = 0; ?>

			<?php
			foreach ( $oceanwp_related_query->posts as $post ) :
				setup_postdata( $post );
				?>

				<?php
				$oceanwp_count++;

				// Disable embeds.
				$show_embeds = apply_filters( 'ocean_related_blog_posts_embeds', false );

				// Get post format.
				$format = get_post_format();

				// Add classes.
				$classes   = array( 'related-post', 'clr', 'col' );
				$classes[] = oceanwp_grid_class( $oceanwp_columns );
				$classes[] = 'col-' . $oceanwp_count;
				?>

				<article <?php post_class( $classes ); ?>>

					<?php
					// Display post video.
					if ( $show_embeds && 'video' === $format && oceanwp_get_post_video_html() === $video ) :
						?>

						<div class="related-post-video">
							<?php echo $video; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</div><!-- .related-post-video -->

						<?php
						// Display post audio.
					elseif ( $show_embeds && 'audio' === $format && oceanwp_get_post_audio_html() === $audio ) :
						?>

						<div class="related-post-video">
							<?php echo $audio; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</div><!-- .related-post-audio -->

						<?php
						// Display post thumbnail.
					elseif ( has_post_thumbnail() ) :
						?>

						<figure class="related-post-media clr">

							<a href="<?php the_permalink(); ?>" class="related-thumb">

								<?php
								// Image width.
								$img_width  = apply_filters( 'ocean_related_blog_posts_img_width', absint( get_theme_mod( 'ocean_blog_related_img_width' ) ) );
								$img_height = apply_filters( 'ocean_related_blog_posts_img_height', absint( get_theme_mod( 'ocean_blog_related_img_height' ) ) );

								// Images attr.
								$img_id  = get_post_thumbnail_id( get_the_ID(), 'full' );
								$img_url = wp_get_attachment_image_src( $img_id, 'full', true );
								if ( OCEAN_EXTRA_ACTIVE
									&& function_exists( 'ocean_extra_image_attributes' ) ) {
									$img_atts = ocean_extra_image_attributes( $img_url[1], $img_url[2], $img_width, $img_height );
								}

								// If Ocean Extra is active and has a custom size.
								if ( OCEAN_EXTRA_ACTIVE
									&& function_exists( 'ocean_extra_resize' )
									&& ! empty( $img_atts ) ) {
									?>

									<img src="<?php echo ocean_extra_resize( $img_url[0], $img_atts['width'], $img_atts['height'], $img_atts['crop'], true, $img_atts['upscale'] ); ?>" alt="<?php the_title_attribute(); ?>" width="<?php echo esc_attr( $img_width ); ?>" height="<?php echo esc_attr( $img_height ); ?>"<?php oceanwp_schema_markup( 'image' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> />

									<?php
								} else {

									// Images size.
									if ( 'full-width' === oceanwp_post_layout()
										|| 'full-screen' === oceanwp_post_layout() ) {
										$size = 'medium_large';
									} else {
										$size = 'medium';
									}

									// Image args.
									$img_args = array(
										'alt' => get_the_title(),
									);
									if ( oceanwp_get_schema_markup( 'image' ) ) {
										$img_args['itemprop'] = 'image';
									}

									// Display post thumbnail.
									the_post_thumbnail( $size, $img_args );

								}
								?>
							</a>

						</figure>

					<?php endif; ?>

					<h3 class="related-post-title">
						<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark"><?php the_title(); ?></a>
					</h3><!-- .related-post-title -->

					<time class="published" datetime="<?php echo esc_html( get_the_date( 'c' ) ); ?>"><i class="<?php echo $theme_icons[ 'date' ][ $icon_t ]; ?>" aria-hidden="true"></i><?php echo esc_html( get_the_date() ); ?></time>

				</article><!-- .related-post -->

				<?php
				if ( $oceanwp_columns === $oceanwp_count ) {
					$oceanwp_count = 0;
				}
				?>

			<?php endforeach; ?>

		</div><!-- .oceanwp-row -->

	</section><!-- .related-posts -->

<?php endif; ?>

<?php wp_reset_postdata(); ?>

<?php do_action( 'ocean_after_single_post_related_posts' ); ?>
