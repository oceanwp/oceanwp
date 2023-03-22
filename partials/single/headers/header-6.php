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
$heading = apply_filters( 'single_ocean_header_6_h_tag', $heading );

// Display meta filter.
$display_sph_meta = true;
$display_sph_meta = apply_filters( 'display_single_ocean_header_6_meta', $display_sph_meta );

$class = '';
if ( has_post_thumbnail() ) {
	$class = 'header-has-post-thumbnail';
}

?>

<div class="ocean-single-post-header single-header-ocean-6 <?php echo esc_attr( $class ); ?>">
	<?php oceanwp_paint_post_thumbnail( 'full', array( 'name' => 'ocean-sh-6' ) ); ?>
	<div class="sh-container head-row">
		<div class="col-xs-12">

			<?php do_action( 'ocean_before_page_header' ); ?>

			<header class="blog-post-title">

				<?php the_title( '<' . esc_attr( $heading ) . ' class="single-post-title">', '</' . esc_attr( $heading ) . '>' ); ?>

				<div class="blog-post-author">

					<?php
					wp_kses_post(
						ocean_get_post_author_avatar(
							array(
								'before' => '<div class="post-author-avatar">',
								'after'  => '</div>',
								'size'   => 80,
							)
						)
					);
					?>

					<div class="blog-post-author-content">
						<?php
						wp_kses_post(
							ocean_get_post_author(
								array(
									'prefix' => esc_html( oceanwp_theme_strings( 'owp-string-written-by', false ) ),
									'before' => '<div class="post-author-name">',
									'after'  => '</div>',
								)
							)
						);
						?>
						<?php
						wp_kses_post(
							ocean_get_post_author_bio(
								array(
									'before' => '<div class="post-author-description">',
									'after'  => '</div>',
								)
							)
						);
						?>
					</div>

				</div><!-- .blog-post-author -->

				<?php if ( true === $display_sph_meta ) { ?>

					<?php do_action( 'ocean_single_post_header_meta' ); ?>

				<?php } ?>

			</header><!-- .blog-post-title -->

			<?php do_action( 'ocean_after_page_header' ); ?>

		</div>
	</div>
</div>
