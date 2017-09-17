<?php
/**
 * Search result page entry content
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $post;

// Excerpt length
$length = apply_filters( 'ocean_search_results_excerpt_length', '30' ); ?>

<div class="search-entry-summary clr"<?php oceanwp_schema_markup( 'entry_content' ); ?>>
    <p>
	    <?php
	    // Display custom excerpt
	    echo wp_trim_words( strip_shortcodes( $post->post_content ), $length ); ?>
    </p>
</div><!-- .search-entry-summary -->