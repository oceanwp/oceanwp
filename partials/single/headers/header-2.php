<?php
/**
 * OceanWP Single Post Header template
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Get the current post type.
$post_type = get_post_type();

// Allow post types for the single post header template.
$allowed_post_types = apply_filters( 'oceanwp_single_post_header_allowed_post_types', array( 'post' ) );

// Only display for allowed post types.
if ( ! in_array( $post_type, $allowed_post_types, true ) ) {
	return;
}

// Display meta filter.
$display_sph_meta = true;
$display_sph_meta = apply_filters( 'display_single_ocean_header_2_meta', $display_sph_meta );

// Display breadcrumbs filter.
$display_breadcrumbs = true;
$display_breadcrumbs = apply_filters( 'display_single_ocean_header_2_breadcrumbs', $display_breadcrumbs );

// Heading tag.
$heading = 'h1';
$heading = apply_filters( 'single_ocean_header_2_h_tag', $heading );

?>

<div class="ocean-single-post-header single-post-header-wrap single-header-ocean-2 sh-container">
	<div class="head-row row-center">
		<div class="col-xs-12 col-l-8 col-ml-9">

			<?php do_action( 'ocean_before_page_header' ); ?>

			<header class="blog-post-title">

				<?php the_title( '<' . esc_attr( $heading ) . ' class="single-post-title">', '</' . esc_attr( $heading ) . '>' ); ?>

				<?php if ( true === $display_sph_meta ) { ?>

					<div class="blog-post-meta">
						<?php do_action( 'ocean_single_post_header_meta' ); ?>
					</div><!-- .blog-post-meta -->

				<?php } ?>

				<?php if ( true === $display_breadcrumbs ) { ?>
					<?php if ( function_exists( 'oceanwp_breadcrumb_trail' ) ) { ?>
						<div class="blog-post-breadcrumbs">
							<?php do_action( 'ocean_breadcrumbs_main' ); ?>
						</div>
					<?php } ?>
				<?php } ?>

			</header><!-- .blog-post-title -->

			<?php do_action( 'ocean_after_page_header' ); ?>

		</div>
	</div>
</div>

<?php oceanwp_paint_post_thumbnail( 'full', array( 'name' => 'ocean-sh-2' ) ); ?>
