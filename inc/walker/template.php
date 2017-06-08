<?php
/**
 * Template content
 */

namespace Elementor;

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get template ID
$get_id 	= $item->template;

// Check if the template is created with Elementor
$elementor 	= get_post_meta( $get_id, '_elementor_edit_mode', true );
	
// If Elementor
if ( class_exists( 'Elementor\Plugin' ) && $elementor ) {
	echo Plugin::instance()->frontend->get_builder_content_for_display( $get_id );
}