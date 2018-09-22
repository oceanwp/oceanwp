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

// Get ID
$get_id = oceanwp_custom_footer_template();

// Check if page is Elementor page
$elementor  = get_post_meta( $get_id, '_elementor_edit_mode', true );

// Get content
$get_content = oceanwp_footer_template_content();

// Get footer widgets columns
$columns    = apply_filters( 'ocean_footer_widgets_columns', get_theme_mod( 'ocean_footer_widgets_columns', '4' ) );
$grid_class = oceanwp_grid_class( $columns );

// Responsive columns
$tablet_columns    = get_theme_mod( 'ocean_footer_widgets_tablet_columns' );
$mobile_columns    = get_theme_mod( 'ocean_footer_widgets_mobile_columns' );

// Visibility
$visibility = get_theme_mod( 'ocean_footer_widgets_visibility', 'all-devices' );

// Classes
$wrap_classes = array( 'oceanwp-row', 'clr' );
if ( ! empty( $tablet_columns ) ) {
	$wrap_classes[] = 'tablet-' . $tablet_columns . '-col';
}
if ( ! empty( $mobile_columns ) ) {
	$wrap_classes[] = 'mobile-' . $mobile_columns . '-col';
}
if ( 'all-devices' != $visibility ) {
	$wrap_classes[] = $visibility;
}
$wrap_classes = implode( ' ', $wrap_classes );

// Get inner classes
$inner_classes = array( 'footer-widgets-inner' );

// Add container class
if ( true == get_theme_mod( 'ocean_add_footer_container', true ) ) {
    $inner_classes[] = 'container';
}

// Turn inner classes into space seperated string
$inner_classes = implode( ' ', $inner_classes ); ?>

<?php do_action( 'ocean_before_footer_widgets' ); ?>

<div id="footer-widgets" class="<?php echo esc_attr( $wrap_classes ); ?>">

	<?php do_action( 'ocean_before_footer_widgets_inner' ); ?>

	<div class="<?php echo esc_attr( $inner_classes ); ?>">

        <?php
        // Check if there is a template for the footer
        if ( ! empty( $get_id ) ) {

			// If Elementor
		    if ( OCEANWP_ELEMENTOR_ACTIVE && $elementor ) {

		        OceanWP_Elementor::get_footer_content();

		    }

		    // If Beaver Builder
		    else if ( OCEANWP_BEAVER_BUILDER_ACTIVE && ! empty( $get_id ) ) {

		        echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

		    }

		    // Else
		    else {

		        // Display template content
		        echo do_shortcode( $get_content );

		    }

		// Display widgets
		} else {

			// Footer box 1 ?>
			<div class="footer-box <?php echo esc_attr( $grid_class ); ?> col owp-col-1">
				<?php dynamic_sidebar( 'footer-one' ); ?>
			</div><!-- .footer-one-box -->

			<?php
			// Footer box 2
			if ( $columns > '1' ) : ?>
				<div class="footer-box <?php echo esc_attr( $grid_class ); ?> col owp-col-2">
					<?php dynamic_sidebar( 'footer-two' ); ?>
				</div><!-- .footer-one-box -->
			<?php endif; ?>
			
			<?php
			// Footer box 3
			if ( $columns > '2' ) : ?>
				<div class="footer-box <?php echo esc_attr( $grid_class ); ?> col owp-col-3 ">
					<?php dynamic_sidebar( 'footer-three' ); ?>
				</div><!-- .footer-one-box -->
			<?php endif; ?>

			<?php
			// Footer box 4
			if ( $columns > '3' ) : ?>
				<div class="footer-box <?php echo esc_attr( $grid_class ); ?> col owp-col-4">
					<?php dynamic_sidebar( 'footer-four' ); ?>
				</div><!-- .footer-box -->
			<?php endif; ?>

		<?php
		} ?>

	</div><!-- .container -->

	<?php do_action( 'ocean_after_footer_widgets_inner' ); ?>

</div><!-- #footer-widgets -->

<?php do_action( 'ocean_after_footer_widgets' ); ?>