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

<?php do_action( 'ocean_before_blog_entry_content' ); ?>

<div class="blog-entry-summary clr"<?php oceanwp_schema_markup( 'entry_content' ); ?>>

    <?php
    // Display excerpt
    if ( '500' != get_theme_mod( 'ocean_blog_entry_excerpt_length', '30' ) ) : ?>

        <p>
            <?php
            // Display custom excerpt
            echo oceanwp_excerpt( get_theme_mod( 'ocean_blog_entry_excerpt_length', '30' ) ); ?>
        </p>

    <?php
    // If excerpts are disabled, display full content
    else :

        the_content( '', '&hellip;' );

    endif; ?>

</div><!-- .blog-entry-summary -->

<?php do_action( 'ocean_after_blog_entry_content' ); ?>