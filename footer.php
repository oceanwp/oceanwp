<?php
/**
 * The template for displaying the footer.
 *
 * @package OceanWP WordPress theme
 */ ?>

        </main><!-- #main-content -->

        <?php do_action( 'ocean_footer_before' ); ?>

        <?php get_template_part( 'partials/footer/layout' ); ?>
                
    </div><!-- #wrap -->

</div><!-- .outer-wrap -->

<?php get_template_part( 'partials/mobile-search' ); ?>

<?php get_template_part( 'partials/scroll-top' ); ?>

<?php get_template_part( 'partials/header/mobile-sidr-close' ); ?>

<?php wp_footer(); ?>
</body>
</html>