<?php
/**
 * Topbar content
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get topbar content
$content = get_theme_mod( 'ocean_top_bar_content', '<i class="icon-phone"></i> 1-555-645-324 <i class="icon-user"></i> <a href="#">Sign in</a>' );

// Display topbar content
if ( $content || has_nav_menu( 'topbar_menu' ) ) : ?>

    <div id="top-bar-content" class="<?php echo oceanwp_topbar_content_classes(); ?>">

        <?php
        // Get topbar menu
        get_template_part( 'partials/topbar/nav' ); ?>

        <?php
        // Check if there is content for the topbar
        if ( $content ) : ?>

            <?php
            // Display top bar content
            echo do_shortcode( $content ); ?>

        <?php endif; ?>

    </div><!-- #top-bar-content -->

<?php endif; ?>