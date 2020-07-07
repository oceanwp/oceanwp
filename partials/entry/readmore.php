<?php
/**
 * Displays post entry read more
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<?php do_action( 'ocean_before_blog_entry_readmore' ); ?>

<div class="blog-entry-readmore clr">
	<a href="<?php the_permalink(); ?>" title="<?php oceanwp_theme_strings( 'owp-string-post-continue-reading', 'oceanwp' ); ?>"><?php oceanwp_theme_strings( 'owp-string-post-continue-reading', 'oceanwp' ); ?><i class="fa fa-angle-right" aria-hidden="true"></i></a>
	<span class="screen-reader-text"><?php the_title(); ?></span>
</div><!-- .blog-entry-readmore -->

<?php do_action( 'ocean_after_blog_entry_readmore' ); ?>
