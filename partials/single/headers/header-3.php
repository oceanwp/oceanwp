<?php
/**
 * OceanWP Single Post Header template
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) or exit;

// Only display for standard posts.
if ( 'post' !== get_post_type() ) {
	return;
}

// Heading tag.
$heading = 'h1';
$heading = apply_filters( 'single_ocean_header_3_h_tag', $heading );

// Display meta filter.
$display_sph_meta = true;
$display_sph_meta = apply_filters( 'display_single_ocean_header_3_meta', $display_sph_meta );

// Display author bio description filter.
$display_author_bio = true;
$display_author_bio = apply_filters( 'display_single_ocean_header_3_author_bio', $display_author_bio );

?>

<div class="ocean-single-post-header single-post-header-wrap single-header-ocean-3">
	<div class="header-overlay-thumbnail" <?php ocean_paint_post_background( 'full' ); ?>></div>

	<?php if ( has_post_thumbnail() ) { ?>
		<span class="header-color-overlay"></span>
	<?php } ?>

	<div class="sh-container head-row row-center">
		<div class="col-xs-12 col-l-8 col-ml-9">

			<?php do_action( 'ocean_before_page_header' ); ?>

			<header class="blog-post-title">

				<div class="blog-post-author">

					<?php ocean_get_post_author_avatar( array( 'before' => '<div class="post-author-avatar">', 'after' => '</div>' ) ); ?>

					<div class="blog-post-author-content">

						<?php ocean_get_post_author( array( 'prefix' => '', 'before' => '<span class="post-author-name">', 'after' => '</span>' ) ); ?>

						<?php if ( $display_author_bio === true ) { ?>

							<?php ocean_get_post_author_bio( array( 'before' => '<div class="post-author-description">', 'after' => '</div>' ) ); ?>

						<?php } ?>

					</div>

				</div><!-- .blog-post-author -->
			
				<?php the_title( '<'. $heading .' class="single-post-title">', '</'. $heading .'>' ); ?>

			</header><!-- .blog-post-title -->

			<?php do_action( 'ocean_after_page_header' ); ?>

			<?php if ( $display_sph_meta === true ) { ?>

				<div class="single-post-header-bottom">
					<?php do_action( 'ocean_single_post_header_meta' ); ?>
				</div>

			<?php } ?>

		</div>
	</div>
</div>
