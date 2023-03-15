<?php
/**
 * OceanWP Single Post Header template
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Only display for standard posts.
if ( 'post' !== get_post_type() ) {
	return;
}

// Heading tag.
$heading = 'h1';
$heading = apply_filters( 'single_ocean_header_4_h_tag', $heading );

// Display meta filter.
$display_sph_meta = true;
$display_sph_meta = apply_filters( 'display_single_ocean_header_4_meta', $display_sph_meta );

?>

<div class="ocean-single-post-header single-post-header-wrap single-header-ocean-4">
	<div class="sh-container head-row row-center">
		<div class="col-xs-12 col-l-8">

			<?php do_action( 'ocean_before_page_header' ); ?>

			<header class="blog-post-title">

				<div class="blog-post-author">

					<?php
					wp_kses_post(
						ocean_get_post_author_avatar(
							array(
								'before' => '<div class="post-author-avatar">',
								'after'  => '</div>',
							)
						)
					);
					?>

					<div class="blog-post-author-content">
						<?php
						wp_kses_post(
							ocean_get_post_author(
								array(
									'prefix' => '',
									'before' => '<span class="post-author-name">',
									'after'  => '</span>',
								)
							)
						);
						?>
					</div>

				</div><!-- .blog-post-author -->

				<?php the_title( '<' . esc_attr( $heading ) . ' class="single-post-title">', '</' . esc_attr( $heading ) . '>' ); ?>

				<?php if ( true === $display_sph_meta ) { ?>

					<?php do_action( 'ocean_single_post_header_meta' ); ?>

				<?php } ?>

			</header><!-- .blog-post-title -->

			<?php do_action( 'ocean_after_page_header' ); ?>

		</div>
	</div>
</div>
