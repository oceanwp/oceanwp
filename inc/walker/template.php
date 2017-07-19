<?php
/**
 * Template content
 */

namespace Elementor;

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get ID
$get_id = $item->template;

// Get the template
$template = $item->mega_template;
if ( ! empty( $template ) ) {
    $get_id = $template;
}

// Check if page is Elementor page
$elementor  = get_post_meta( $get_id, '_elementor_edit_mode', true );

// Get template content
if ( ! empty( $get_id ) ) {

	$template_id = get_post( $get_id );

	if ( $template_id && ! is_wp_error( $template_id ) ) {
		$content = $template_id->post_content;
	}

}
	
// If Elementor
if ( class_exists( 'Elementor\Plugin' ) && $elementor ) {

    echo Plugin::instance()->frontend->get_builder_content_for_display( $get_id );

}

// If Beaver Builder
else if ( class_exists( 'FLBuilder' ) && ! empty( $get_id ) ) {

    echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

}

// Else
else {

    // Display template content
    echo do_shortcode( $content );

}