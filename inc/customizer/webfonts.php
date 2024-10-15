<?php
/**
 * Fonts functions
 *
 * @package OceanWP WordPress theme
 */

/**
 * List of standard fonts
 *
 * @since 1.0.0
 */
function oceanwp_standard_fonts() {
	return apply_filters(
		'ocean_standard_fonts_array',
		array(
			'Arial, Helvetica, sans-serif',
			'Arial Black, Gadget, sans-serif',
			'Bookman Old Style, serif',
			'Comic Sans MS, cursive',
			'Courier, monospace',
			'Georgia, serif',
			'Garamond, serif',
			'Impact, Charcoal, sans-serif',
			'Lucida Console, Monaco, monospace',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'MS Sans Serif, Geneva, sans-serif',
			'MS Serif, New York, sans-serif',
			'Palatino Linotype, Book Antiqua, Palatino, serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif',
			'Paratina Linotype',
			'Trebuchet MS',
		)
	);
}

/**
 * List of All Google fonts
 *
 * @since 3.5.1
 */
function oceanwp_google_fonts_array() {

	$json = OCEANWP_INC_DIR_URI . 'customizer/assets/google-fonts.json';

	$response = wp_remote_get( $json );

	if (is_wp_error($response)) {
		return false;
	}

	$fonts = json_decode($response['body'], true);

	$fonts = apply_filters( 'ocean_google_fonts_array', $fonts );

	return $fonts;
}

/**
 * Enqueues a Google Font
 *
 * @since 1.0.0
 */
function oceanwp_enqueue_google_font( $font, $subset_value = '', $variant_value = '' ) {

	// Return if disabled
	if ( false === get_theme_mod( 'ocean_disable_google_font', false ) ) {
		return;
	}

	// Get list of all Google Fonts
	$google_fonts = oceanwp_google_fonts_array();

	// Make sure font is in our list of fonts
	if ( ! $google_fonts || ! in_array( $font, $google_fonts ) ) {
		return;
	}

	// Sanitize handle
	$handle = trim( $font );
	$handle = strtolower( $handle );
	$handle = str_replace( ' ', '-', $handle );

	// Sanitize font name
	$font = trim( $font );
	$font = str_replace( ' ', '+', $font );

	// Subset
	$get_subsets = get_theme_mod( 'ocean_google_font_subsets', array('latin') );

	if (is_string($get_subsets)) {
		$get_subsets = json_decode($get_subsets, true);
	}

	$subsets     = '';
	if ( isset( $subset_value ) && '' !== $subset_value ) {
		$subsets = $subset_value;
	} else if ( ! empty( $get_subsets ) ) {
		$font_subsets = array();
		foreach ( $get_subsets as $get_subset ) {
			$font_subsets[] = $get_subset;
		}
		$subsets .= implode( ',', $font_subsets );
	} else {
		$subsets = 'latin';
	}
	$subset = '&amp;subset=' . $subsets;

	// Weights
	$weights = array( '100', '200', '300', '400', '500', '600', '700', '800', '900' );
	$weights = apply_filters( 'ocean_google_font_enqueue_weights', $weights, $font );
	$italics = apply_filters( 'ocean_google_font_enqueue_italics', true );

	// Main URL
	$url = '//fonts.googleapis.com/css?family=' . str_replace( ' ', '%20', $font ) . ':';

	if ( isset( $variant_value ) && '' !== $variant_value ) {
		$variant = $variant_value;
		$url .= $variant;
	} else if ( ! empty( $weights ) ) {
		$url .= implode( ',', $weights ) . ',';
		$italic_weights = array();
		if ( $italics ) {
			foreach ( $weights as $weight ) {
				$italic_weights[] = $weight . 'i';
			}
			$url .= implode( ',', $italic_weights );
		}
	}

	// Add subset to URL
	$url .= $subset;
	$url  = $url . '&display=swap';

	$url = apply_filters( 'oceanwp_enqueue_google_font_url', $url, $handle );

	// Enqueue style
	wp_enqueue_style( 'oceanwp-google-font-' . $handle, $url, false, false, 'all' );

}
