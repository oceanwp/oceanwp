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
 * Multicheck sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_multicheck( $values ) {
	$multi_values = ! is_array( $values ) ? explode( ',', $values ) : $values;
    return ! empty( $multi_values ) ? array_map( 'sanitize_text_field', $multi_values ) : array();
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
 * Color sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_color( $color ) {
    if ( empty( $color ) || is_array( $color ) ) {
        return '';
    }

    // If string does not start with 'rgba', then treat as hex.
	// sanitize the hex color and finally convert hex to rgba
    if ( false === strpos( $color, 'rgba' ) ) {
        return sanitize_hex_color( $color );
    }

    // By now we know the string is formatted as an rgba color so we need to further sanitize it.
    $color = str_replace( ' ', '', $color );
    sscanf( $color, 'rgba(%d,%d,%d,%f)', $red, $green, $blue, $alpha );

    return 'rgba('.$red.','.$green.','.$blue.','.$alpha.')';
}

/**
 * Select choices sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_multi_choices( $input, $setting ) {
	// Get list of choices from the control associated with the setting.
	$choices = $setting->manager->get_control( $setting->id )->choices;
	$input_keys = $input;

	foreach ( $input_keys as $key => $value ) {
		if ( ! array_key_exists( $value, $choices ) ) {
			unset( $input[ $key ] );
		}
	}

	// If the input is a valid key, return it;
	// otherwise, return the default.
	return ( is_array( $input ) ? $input : $setting->default );
}

function oceanwp_sanitize_multiple_select( $values, $setting ) {
    // Ensure input is an array.
    if (!is_array($values)) {
        $values = explode(',', $values);
    }

    // Get list of choices from the control associated with the setting.
    $choices = $setting->manager->get_control($setting->id)->choices;

    // Check if the value exists in the choices; if not, unset it.
    foreach ($values as $key => $value) {
        if (!array_key_exists($value, $choices)) {
            unset($values[$key]);
        }
    }

    // Return the sanitized array.
    return $values;
}


/**
 * Image sanitization callback
 *
 * @since 1.2.1
 */
function oceanwp_sanitize_image( $image, $setting ) {
	/*
	 * Array of valid image file types.
	 *
	 * The array includes image mime types that are included in wp_get_mime_types()
	 */
    $mimes = array(
        'jpg|jpeg|jpe' => 'image/jpeg',
        'gif'          => 'image/gif',
        'png'          => 'image/png',
        'bmp'          => 'image/bmp',
        'tif|tiff'     => 'image/tiff',
        'ico'          => 'image/x-icon',
		'svg'          => 'image/svg+xml'
    );
	// Return an array with file extension and mime_type.
    $file = wp_check_filetype( $image, $mimes );
	// If $image has a valid mime_type, return it; otherwise, return the default.
    return ( $file['ext'] ? $image : $setting->default );
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
