<?php
/**
 * Sanitization Callbacks
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Checkbox sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_checkbox( $checked ) {
	// Boolean check.
	return ( ( isset( $checked ) && true == $checked ) ? true : false );
}

/**
 * Drop-down Pages sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_dropdown_pages( $page_id, $setting ) {
	// Ensure $input is an absolute integer.
	$page_id = absint( $page_id );

	// If $page_id is an ID of a published page, return it; otherwise, return the default.
	return ( 'publish' == get_post_status( $page_id ) ? $page_id : $setting->default );
}

/**
 * Number sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_number( $val ) {
	return is_numeric( $val ) ? $val : 0;
}

/**
 * Number with blank value sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_number_blank( $val ) {
	return is_numeric( $val ) ? $val : '';
}

/**
 * Select sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_select( $input, $setting ) {
	// Ensure input is a slug.
	$input = sanitize_key( $input );

	// Get list of choices from the control associated with the setting.
	$choices = $setting->manager->get_control( $setting->id )->choices;

	// If the input is a valid key, return it; otherwise, return the default.
	return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
}

/**
 * Sanitize function for sortable controls in the customizer.
 *
 * @param array  $input   The input data to sanitize.
 * @param object $setting The setting object, which includes valid choices.
 * @return array The sanitized array of sortable elements.
 */
function ocean_sanitize_sortable_control( $input, $setting ) {
	return $input;
}

/**
 * Sanitize function for image controls.
 *
 * @param mixed  $input   The input data to sanitize (either URL or ID).
 * @param object $setting The setting object, which includes the 'savetype' attribute.
 * @return mixed The sanitized URL or ID.
 */
function ocean_sanitize_image_control( $input, $setting ) {

	$savetype = isset( $setting->manager->get_control( $setting->id )->savetype ) ? $setting->manager->get_control( $setting->id )->savetype : 'url';

	if ( 'id' === $savetype ) {
		return absint( $input );
	} elseif ( 'url' === $savetype ) {
		return esc_url_raw( $input );
	}

	return $input;
}

/**
 * Default sanitization callback for Customizer settings.
 *
 * @param mixed $input The input data.
 * @return mixed The sanitized data (which in this case is untouched).
 */
function oceanwp_default_sanitize( $input, $setting ) {
	return $input;
}