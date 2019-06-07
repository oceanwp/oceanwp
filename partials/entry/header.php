<?php
/**
 * Displays the post entry header
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Heading tag
$heading = get_theme_mod( 'ocean_blog_entries_heading_tag', 'h2' );
$heading = $heading ? $heading : 'h2';
$heading = apply_filters( 'ocean_blog_entries_heading', $heading ); ?>

<?php do_action( 'ocean_before_blog_entry_title' ); ?>

<header class="blog-entry-header clr">
	<<?php echo esc_attr( $heading ); ?> class="blog-entry-title entry-title">
		<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark"><?php the_title(); ?></a>
	</<?php echo esc_attr( $heading ); ?>><!-- .blog-entry-title -->
</header><!-- .blog-entry-header -->

<?php do_action( 'ocean_after_blog_entry_title' ); ?>