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
$content = get_theme_mod( 'ocean_top_bar_content' );
$content = oceanwp_tm_translation( 'ocean_top_bar_content', $content );

// Display topbar content
if ( $content
    || has_nav_menu( 'topbar_menu' )
    || is_customize_preview() ) : ?>

    <div id="top-bar-content" class="<?php echo esc_attr( oceanwp_topbar_content_classes() ); ?>">

        <?php
        // Get topbar menu
        if ( has_nav_menu( 'topbar_menu' ) )  {
            get_template_part( 'partials/topbar/nav' );
        } ?>

        <?php
        // Check if there is content for the topbar
        if ( $content
            || is_customize_preview() ) : ?>

            <span class="topbar-content">

                <?php
                // Display top bar content
                echo do_shortcode( $content ); ?>

            </span>

        <?php endif; ?>

    </div><!-- #top-bar-content -->

<?php endif; ?>