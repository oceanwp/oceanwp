<?php
/**
 * Displays post entry content
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} ?>

<div class="blog-entry-summary clr">

    <?php
    // Display excerpt if auto excerpts are enabled in the admin
    if ( get_theme_mod( 'ocean_blog_excerpt', true ) ) :

        // Display custom excerpt
        oceanwp_excerpt( absint( get_theme_mod( 'ocean_blog_entry_excerpt_length', '30' ) ) );

    // If excerpts are disabled, display full content
    else :

        the_content( '', '&hellip;' );

    endif; ?>

</div><!-- .blog-entry-summary -->