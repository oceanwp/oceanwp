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

<footer id="footer" class="<?php echo oceanwp_footer_classes(); ?>" itemscope="itemscope" itemtype="http://schema.org/WPFooter">

    <div id="footer-inner" class="clr">

        <?php
        if ( true == get_theme_mod( 'ocean_footer_widgets', true ) )  {
        	get_template_part( 'partials/footer/widgets' );
        } ?>

        <?php
        if ( true == get_theme_mod( 'ocean_footer_bottom', true ) )  {
        	get_template_part( 'partials/footer/copyright' );
        } ?>
        
    </div><!-- #footer-widgets -->

</footer><!-- #footer -->