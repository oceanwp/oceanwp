<?php
/**
 * Footer layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
} ?>

<footer id="footer" class="<?php echo esc_attr( oceanwp_footer_classes() ); ?>" itemscope="itemscope" itemtype="http://schema.org/WPFooter">

    <?php do_action( 'ocean_before_footer_inner' ); ?>

    <div id="footer-inner" class="clr">

        <?php
        // Display the footer widgets if enabled
        if ( oceanwp_display_footer_widgets() ) {
        	get_template_part( 'partials/footer/widgets' );
        }

        // Display the footer bottom if enabled
        if ( oceanwp_display_footer_bottom() ) {
        	get_template_part( 'partials/footer/copyright' );
        } ?>
        
    </div><!-- #footer-widgets -->

    <?php do_action( 'ocean_after_footer_inner' ); ?>

</footer><!-- #footer -->