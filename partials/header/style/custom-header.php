<?php
/**
 * Custom Header Style
 *
 * @package OceanWP WordPress theme
 */

namespace Elementor;

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// If is not PHP version 5.2+
if ( ! version_compare( PHP_VERSION, '5.2', '>=' ) ) {
    return;
}

// Get page
$get_page 	= oceanwp_header_page_id();

// Get page ID
$get_id 	= get_theme_mod( 'ocean_header_page_id' );

// Check if page is Elementor page
$elementor 	= get_post_meta( $get_id, '_elementor_edit_mode', true );

// Add container class if the header is not full width
$class = '';
if ( true == get_theme_mod( 'ocean_add_custom_header_container', true ) )  {
    $class = ' container';
}

// Check if there is page for the header
if ( $get_page ) : ?>

    <?php do_action( 'ocean_before_header_inner' ); ?>

	<div id="site-header-inner" class="clr<?php echo esc_attr( $class ); ?>">

	    <?php
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

        } ?>

    </div>

    <?php do_action( 'ocean_after_header_inner' ); ?>

<?php
endif;