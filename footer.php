<?php
/**
 * The template for displaying the footer.
 *
 * @package OceanWP WordPress theme
 */ ?>

        </main><!-- #main -->

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

</div><!-- #outer-wrap -->

<?php do_action( 'ocean_after_outer_wrap' ); ?>

<?php
// If is not sticky footer
if ( ! class_exists( 'Ocean_Sticky_Footer' ) ) {
    get_template_part( 'partials/scroll-top' );
} ?>

<?php
// Search overlay style
if ( 'overlay' == oceanwp_menu_search_style() ) {
    get_template_part( 'partials/header/search-overlay' );
} ?>

<?php
// Mobile panel close button
if ( get_theme_mod( 'ocean_mobile_menu_close_btn', true ) ) {
    get_template_part( 'partials/mobile/mobile-sidr-close' );
} ?>

<?php
// Mobile Menu (if defined)
get_template_part( 'partials/mobile/mobile-nav' ); ?>

<?php
// Mobile search form
if ( get_theme_mod( 'ocean_mobile_menu_close_btn', true ) ) {
    get_template_part( 'partials/mobile/mobile-search' );
} ?>

<?php wp_footer(); ?>
</body>
</html>