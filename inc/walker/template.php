<?php
/**
 * Template content
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get ID
$get_id = $item->mega_template;

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
if ( OCEANWP_ELEMENTOR_ACTIVE && $elementor ) {

    echo Elementor\Plugin::instance()->frontend->get_builder_content_for_display( $get_id );

}

// If Beaver Builder
else if ( OCEANWP_BEAVER_BUILDER_ACTIVE && ! empty( $get_id ) ) {

    echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

}

else if ( class_exists( 'SiteOrigin_Panels' ) && get_post_meta( $get_id, 'panels_data', true ) ) {

	echo SiteOrigin_Panels::renderer()->render( $get_id );

}

// Else
else {

	// If Gutenberg.
	if ( ocean_is_block_template( $get_id ) ) {
		$content = apply_filters( 'ocean_mega_menu_template_content', do_blocks( $content ) );
	}

	// Display template content.
	echo do_shortcode( $content );

}