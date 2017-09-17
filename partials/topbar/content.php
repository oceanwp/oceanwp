<?php
/**
 * Topbar content
 *
 * @package OceanWP WordPress theme
 */

namespace Elementor;

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get the template
$template = get_theme_mod( 'ocean_top_bar_template' );

// Check if page is Elementor page
$elementor = get_post_meta( $template, '_elementor_edit_mode', true );

// Get content
$get_content = oceanwp_topbar_template_content();

// Get topbar content
$content = get_theme_mod( 'ocean_top_bar_content' );
$content = oceanwp_tm_translation( 'ocean_top_bar_content', $content );

// Display topbar content
if ( ! empty( $template )
    || $content
    || has_nav_menu( 'topbar_menu' )
    || is_customize_preview() ) : ?>

    <div id="top-bar-content" class="<?php echo esc_attr( oceanwp_topbar_content_classes() ); ?>">

        <?php
        // Get topbar menu
        if ( has_nav_menu( 'topbar_menu' ) )  {
            get_template_part( 'partials/topbar/nav' );
        } ?>

        <?php
        // If template
        if ( ! empty( $template ) ) { ?>

            <div id="topbar-template">

               <?php
               // If Elementor
                if ( class_exists( 'Elementor\Plugin' ) && $elementor ) {

                    echo Plugin::instance()->frontend->get_builder_content_for_display( $template );

                }

                // If Beaver Builder
                else if ( class_exists( 'FLBuilder' ) && ! empty( $template ) ) {

                    echo do_shortcode( '[fl_builder_insert_layout id="' . $template . '"]' );

                }

                // Else
                else {

                    // Display template content
                    echo do_shortcode( $get_content );

                } ?>

            </div>

        <?php
        } else { ?>

            <?php
            // Check if there is content for the topbar
            if ( $content
                || is_customize_preview() ) : ?>

                <span class="topbar-content">

                    <?php
                    // Display top bar content
                    echo do_shortcode( $content ); ?>

                </span>

            <?php endif;

        } ?>

    </div><!-- #top-bar-content -->

<?php endif; ?>