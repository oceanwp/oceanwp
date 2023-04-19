<?php
/**
 * Search result page entry read more
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div class="search-entry-readmore clr">
	<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-search-continue-reading', false ) ); ?>"><?php echo esc_html( oceanwp_theme_strings( 'owp-string-search-continue-reading', false ) ); ?></a>
	<span class="screen-reader-text"><?php the_title(); ?></span>
</div><!-- .search-entry-readmore -->
