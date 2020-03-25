<?php
/**
 * Displays post entry read more
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Text
$text = esc_html__( 'Continue Reading', 'oceanwp' );

// Apply filters for child theming
$text = apply_filters( 'ocean_post_readmore_link_text', $text ); ?>

<?php do_action( 'ocean_before_blog_entry_readmore' ); ?>

<div class="blog-entry-readmore clr">
    <a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( $text ); ?>"><?php echo wp_kses_post( $text ); ?><i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <span class="screen-reader-text"><?php the_title(); ?></span>
</div><!-- .blog-entry-readmore -->

<?php do_action( 'ocean_after_blog_entry_readmore' ); ?>