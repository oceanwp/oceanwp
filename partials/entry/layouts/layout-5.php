<?php
/**
 * OceanWP Blog Entries layout template
 * 
 * Stylish Wide template
 * 
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) or exit;

// Heading tag.
$heading = 'h2';
$heading = apply_filters( 'ocean_entry_layout_5_h_tag', $heading );

// Display top meta.
$top_meta = ( true === get_theme_mod( 'ocean_enable_top_meta', true ) ) ? true : false;

// Display bottom meta.
$bottom_meta = ( true === get_theme_mod( 'ocean_enable_bottom_meta', true ) ) ? true : false;

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-entry layout-5' ); ?>>

	<?php
		if ( has_post_thumbnail() ) {
			?>
			<div class="layout-5__thumbnail" <?php ocean_paint_post_background( 'ocean-thumb-l' ); ?>></div>
			<?php
		}
	?>

	<?php ocean_get_post_author_avatar( array( 'size' => 90, 'before' => '<div class="post-author-avatar">', 'after' => '</div>' ) ); ?>

	<div class="post-entry__inners">

		<?php if ( true === $top_meta ) { ?>

			<div class="entry-meta-top">
				<?php do_action( 'ocean_layout_top_meta' ); ?>
			</div><!-- .entry-meta-top -->

		<?php } ?>

		<header class="post-entry-header">

			<<?php echo esc_attr( $heading ); ?> class="post-entry-title">
				<?php the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' ); ?>
			</<?php echo esc_attr( $heading ); ?>><!-- .post-entry-title -->

		</header><!-- .post-entry-header -->

		<?php ocean_get_post_excerpt( array( 'count' => '35' ) ); ?>

		<?php if ( true === $bottom_meta ) { ?>

			<div class="entry-meta-bottom">
				<?php do_action( 'ocean_layout_bottom_meta' ); ?>
			</div><!-- .entry-meta-bottom -->

		<?php } ?>
		
		<?php ocean_edit_post(); ?>
		
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
