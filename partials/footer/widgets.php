<?php
/**
 * Footer widgets
 *
 * @package OceanWP WordPress theme
 */

namespace Elementor;

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get page
$get_page 	= oceanwp_footer_page_id();

// Get page ID
$get_id 	= get_theme_mod( 'ocean_footer_widgets_page_id' );

// Check if page is Elementor page
$elementor 	= get_post_meta( $get_id, '_elementor_edit_mode', true );

// Get footer widgets columns
$columns    = get_theme_mod( 'ocean_footer_widgets_columns', '4' );
$grid_class = oceanwp_grid_class( $columns );

// Classes
$wrap_classes = array( 'clr' );
if ( '1' == $columns ) {
	$wrap_classes[] = 'single-col-footer';
}
$wrap_classes = implode( ' ', $wrap_classes ); ?>

<div id="footer-widgets" class="oceanwp-row <?php echo $wrap_classes; ?>">

	<div class="container">

        <?php
        // Check if there is page for the footer
        if ( $get_page ) :

		    // If Elementor
		    if ( class_exists( 'Elementor\Plugin' ) && $elementor ) {

				echo Plugin::instance()->frontend->get_builder_content_for_display( $get_id );

	    	}

	    	// If Beaver Builder
		    else if ( class_exists( 'FLBuilder' ) ) {

				echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

	    	}

	    	// Else
	    	else {

	        	// Display page content
	        	echo do_shortcode( $get_page );

	        }

		// Display widgets
		else :

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
			<?php endif;
			
			// Footer box 3
			if ( $columns > '2' ) : ?>
				<div class="footer-box <?php echo $grid_class; ?> col col-3 ">
					<?php dynamic_sidebar( 'footer-three' ); ?>
				</div><!-- .footer-one-box -->
			<?php endif;

			// Footer box 4
			if ( $columns > '3' ) : ?>
				<div class="footer-box <?php echo $grid_class; ?> col col-4">
					<?php dynamic_sidebar( 'footer-four' ); ?>
				</div><!-- .footer-box -->
			<?php endif;

		endif; ?>

	</div><!-- .container -->

</div><!-- #footer-widgets -->