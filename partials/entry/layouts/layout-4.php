<?php
/**
 * OceanWP Blog Entries layout template
 * 
 * Minimal Stylish template
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) or exit;

// Heading tag.
$heading = 'h2';
$heading = apply_filters( 'ocean_entry_layout_4_h_tag', $heading );

// Display top meta.
$top_meta = ( true === get_theme_mod( 'ocean_enable_top_meta', true ) ) ? true : false;

// Display bottom meta.
$bottom_meta = ( true === get_theme_mod( 'ocean_enable_bottom_meta', true ) ) ? true : false;

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-entry layout-4' ); ?>>

	<?php oceanwp_paint_post_thumbnail( 'ocean-thumb-ml', array( 'name' => 'ocean-pel-4' ) ); ?>

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

		<?php ocean_get_post_excerpt(); ?>

		<?php if ( true === $bottom_meta ) { ?>

			<div class="entry-meta-bottom">
				<?php do_action( 'ocean_layout_bottom_meta' ); ?>
			</div><!-- .entry-meta-bottom -->

		<?php } ?>

		<?php ocean_edit_post(); ?>
		<?php echo ocean_combine_svg_path( 'small-arrow-down' ); ?>
		
		<svg>
          <use xlink:href="http://localhost/oceanwp/wp-content/themes/oceanwp/assets/fonts/webfonts/fa-brands.svg#github"></use>
        </svg>
		
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
