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
	<a href="<?php the_permalink(); ?>" title="<?php oceanwp_theme_strings( 'owp-string-search-continue-reading', 'oceanwp' ); ?>"><?php oceanwp_theme_strings( 'owp-string-search-continue-reading', 'oceanwp' ); ?></a>
	<span class="screen-reader-text"><?php the_title(); ?></span>
</div><!-- .search-entry-readmore -->
