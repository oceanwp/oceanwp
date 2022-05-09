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
$heading = apply_filters( 'single_ocean_header_5_h_tag', $heading );

// Display meta filter.
$display_sph_meta = true;
$display_sph_meta = apply_filters( 'display_single_ocean_header_5_meta', $display_sph_meta );

?>

<div class="ocean-single-post-header single-post-header-wrap single-header-ocean-5">
	<div class="sh-container head-row row-center">
		<div class="col-xs-12 col-l-8">

			<?php do_action( 'ocean_before_page_header' ); ?>

			<header class="blog-post-title">

				<?php the_title( '<'. $heading .' class="single-post-title">', '</'. $heading .'>' ); ?>

				<?php if ( $display_sph_meta === true ) { ?>

					<?php do_action( 'ocean_single_post_header_meta' ); ?>

				<?php } ?>

				<div class="blog-post-author">

					<div class="blog-post-author-content">
						<?php ocean_get_post_author( array( 'prefix' => '', 'before' => '<span class="post-author-name">', 'after' => '</span>' ) ); ?>
					</div>

					<?php ocean_get_post_author_avatar( array( 'before' => '<div class="post-author-avatar">', 'after' => '</div>' ) ); ?>

				</div><!-- .blog-post-author -->

			</header><!-- .blog-post-title -->

			<?php do_action( 'ocean_after_page_header' ); ?>
			
		</div>
	</div>
</div>
