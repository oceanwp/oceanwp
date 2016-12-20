<?php
/**
 * Footer widgets
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get footer widgets columns
$columns    = get_theme_mod( 'ocean_footer_widgets_columns', '4' );
$grid_class = oceanwp_grid_class( $columns );

// Get page ID
$page_id 	= oceanwp_footer_page_id();

// Classes
$wrap_classes = array( 'clr' );
if ( '1' == $columns ) {
	$wrap_classes[] = 'single-col-footer';
}
$wrap_classes = implode( ' ', $wrap_classes ); ?>

<div id="footer-widgets" class="oceanwp-row <?php echo $wrap_classes; ?>">

	<div class="container">

        <?php
        // Check if there is page ID for the footer
        if ( $page_id ) : ?>

            <?php
            // Display page content
            echo do_shortcode( $page_id ); ?>

        <?php
		// Display widgets
		else : ?>

			<?php
			// Footer box 1 ?>
			<div class="footer-box <?php echo $grid_class; ?> col col-1">
				<?php dynamic_sidebar( 'footer-one' ); ?>
			</div><!-- .footer-one-box -->

			<?php
			// Footer box 2
			if ( $columns > '1' ) : ?>
				<div class="footer-box <?php echo $grid_class; ?> col col-2">
					<?php dynamic_sidebar( 'footer-two' ); ?>
				</div><!-- .footer-one-box -->
			<?php endif; ?>
			
			<?php
			// Footer box 3
			if ( $columns > '2' ) : ?>
				<div class="footer-box <?php echo $grid_class; ?> col col-3 ">
					<?php dynamic_sidebar( 'footer-three' ); ?>
				</div><!-- .footer-one-box -->
			<?php endif; ?>

			<?php
			// Footer box 4
			if ( $columns > '3' ) : ?>
				<div class="footer-box <?php echo $grid_class; ?> col col-4">
					<?php dynamic_sidebar( 'footer-four' ); ?>
				</div><!-- .footer-box -->
			<?php endif; ?>

		<?php endif; ?>

	</div><!-- .container -->

</div><!-- #footer-widgets -->