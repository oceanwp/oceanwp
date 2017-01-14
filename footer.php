<?php
/**
 * The template for displaying the footer.
 *
 * @package OceanWP WordPress theme
 */ ?>

        </main><!-- #main-content -->

        <?php do_action( 'ocean_after_main' ); ?>

        <?php do_action( 'ocean_before_footer' ); ?>

        <?php
        // Display the footer if the footer widgets and bottom are enabled
        if ( oceanwp_display_footer_widgets()
        	|| oceanwp_display_footer_bottom() ) {
        	get_template_part( 'partials/footer/layout' );
        } ?>

        <?php do_action( 'ocean_after_footer' ); ?>
                
    </div><!-- #wrap -->

    <?php do_action( 'ocean_after_wrap' ); ?>

</div><!-- .outer-wrap -->

<?php do_action( 'ocean_after_outer_wrap' ); ?>

<?php get_template_part( 'partials/mobile-search' ); ?>

<?php
// If is not sticky footer
if ( ! class_exists( 'Ocean_Sticky_Footer' ) ) {
    get_template_part( 'partials/scroll-top' );
} ?>

<?php get_template_part( 'partials/header/mobile-sidr-close' ); ?>

<?php wp_footer(); ?>
</body>
</html>