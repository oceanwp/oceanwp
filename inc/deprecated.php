<?php
/**
 * Deprecated functions
 *
 * @package OceanWP WordPress theme
 */

// No direct access, please
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Returns transparent header logo
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_header_transparent_logo' ) ) {

	function oceanwp_header_transparent_logo() {

		// Return false if disabled
		if ( 'transparent' != oceanwp_header_style() ) {
			return false;
		}

		$html = '';

		// Get logo
		$logo_url 		= get_theme_mod( 'ocean_transparent_header_logo' );
		$retina_url 	= get_theme_mod( 'ocean_transparent_header_logo_retina' );

		// Logo data
		$logo_data = array(
			'url'    	=> '',
			'width'  	=> '',
			'height' 	=> '',
			'alt' 		=> '',
		);

		// Retina logo data
		$retina_data = array(
			'url'    	=> '',
			'width'  	=> '',
			'height' 	=> '',
			'alt' 		=> '',
		);

		if ( $logo_url ) {

			// Logo url
			$logo_data['url'] 			= $logo_url;
			$retina_data['url'] 		= $retina_url;

			// Logo data
			$logo_attachment_data 		= oceanwp_get_attachment_data_from_url( $logo_url );
			$retina_attachment_data 	= oceanwp_get_attachment_data_from_url( $retina_url );

			// Get logo data
			if ( $logo_attachment_data ) {
				$logo_data['width']  	= $logo_attachment_data['width'];
				$logo_data['height'] 	= $logo_attachment_data['height'];
				$logo_data['alt'] 		= $logo_attachment_data['alt'];
			}

			// Get retina logo height
			if ( $retina_attachment_data ) {
				$retina_data['height'] 	= $retina_attachment_data['height'];
				$retina_data['width']  	= $retina_attachment_data['width'];
				$retina_data['height'] 	= $retina_attachment_data['height'];
			}

			// Output image
			$html = sprintf( '<a href="%1$s" class="transparent-logo-link" rel="home"'. oceanwp_get_schema_markup( 'url' ) .'><img src="%2$s" class="transparent-logo" width="%3$s" height="%4$s" alt="%5$s" /></a>',
				esc_url( home_url( '/' ) ),
				esc_url( $logo_data['url'] ),
				esc_attr( $logo_data['width'] ),
				esc_attr( $logo_data['height'] ),
				esc_attr( $logo_data['alt'] )
			);

			// Output retina image
			if ( $retina_url ) {
				$html .= sprintf( '<a href="%1$s" class="transparent-retina-logo-link" rel="home"'. oceanwp_get_schema_markup( 'url' ) .'><img src="%2$s" class="transparent-retina-logo" width="%3$s" height="%4$s" alt="%5$s" style="max-height: %6$spx" /></a>',
					esc_url( home_url( '/' ) ),
					esc_url( $retina_data['url'] ),
					esc_attr( $retina_data['width'] ),
					esc_attr( $retina_data['height'] ),
					esc_attr( $retina_data['alt'] ),
					esc_attr( $logo_data['height'] )
				);
			}

		}

		// Return logo
		return apply_filters( 'ocean_transparent_header_logo', $html );

	}

}

/**
 * Echo transparent header logo
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_custom_transparent_logo' ) ) {

	function oceanwp_custom_transparent_logo() {
		echo wp_kses_post( oceanwp_header_transparent_logo() );
	}

}

/**
 * Echo retina header logo
 *
 * @since 1.1.1
 */
if ( ! function_exists( 'oceanwp_custom_retina_logo' ) ) {

	function oceanwp_custom_retina_logo() {
		echo wp_kses_post( oceanwp_header_retina_logo() );
	}

}

/**
 * Custom excerpts based on wp_trim_words
 *
 * @since	1.0.0
 * @link	http://codex.wordpress.org/Function_Reference/wp_trim_words
 */
if ( ! function_exists( 'oceanwp_excerpt' ) ) {

	function oceanwp_excerpt( $length = 30 ) {

		// Get global post
		global $post;

		// Get post data
		$id			= $post->ID;
		$excerpt	= $post->post_excerpt;
		$content 	= $post->post_content;

		// Display custom excerpt
		if ( $excerpt ) {
			$output = $excerpt;
		}

		// Check for more tag
		elseif ( strpos( $content, '<!--more-->' ) ) {
			$output = get_the_content( $excerpt );
		}

		// Generate auto excerpt
		else {
			$output = wp_trim_words( strip_shortcodes( get_the_content( $id ) ), $length );
		}

		// Echo output
		echo wp_kses_post( $output );

	}

}

/**
 * Main schema markup
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_main_schema_markup' ) ) {

	function oceanwp_main_schema_markup() {

		$itemtype = 'http://schema.org/WebPageElement';
		$itemprop = 'mainContentOfPage';

		if ( is_singular( 'post' ) ) {
			$itemprop = '';
			$itemtype = 'http://schema.org/Blog';
		}

		$schema = 'itemprop="'. $itemprop .'" itemscope="itemscope" itemtype="'. $itemtype .'"';

		return $schema;

	}

}

/**
 * Returns shortcode
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_has_shortcode' ) ) {

	function oceanwp_has_shortcode() {

		// Shortcode is NULL by default
		$shortcode = NULL;

		// Posts & Pages
		if ( $meta = get_post_meta( oceanwp_post_id(), 'ocean_has_shortcode', true ) ) {
			$shortcode = $meta;
		}

		// Apply filters and return
		return apply_filters( 'ocean_has_shortcode', $shortcode );

	}

}

/**
 * Returns page content from ID for the 404 page
 *
 * @since 1.2.0
 */
if ( ! function_exists( 'oceanwp_error_page_content' ) ) {

	function oceanwp_error_page_content() {

		// Get page ID from Customizer
		$page_id = get_theme_mod( 'ocean_error_page_id' );

		// Get page content
		if ( ! empty( $page_id ) ) {

			$page = get_post( $page_id );

			if ( $page && ! is_wp_error( $page ) ) {
				$page_id = $page->post_content;
			}

		}

		// Apply filters and return content
		return apply_filters( 'ocean_error_page_id', $page_id );

	}

}

/**
 * Minify JS
 *
 * @since 1.1.0
 */
if ( ! function_exists( 'oceanwp_minify_js' ) ) {

	function oceanwp_minify_js( $js = '' ) {

		// Return if no JS
		if ( ! $js ) return;

		if ( OCEAN_EXTRA_ACTIVE
			&& class_exists( 'Ocean_Extra_JSMin' ) ) {

			$script = Ocean_Extra_JSMin::minify( $js );

		} else {

			$replace = array(
				'#\'([^\n\']*?)/\*([^\n\']*)\'#' 	=> "'\1/'+\'\'+'*\2'", 	// remove comments from ' strings
				'#\"([^\n\"]*?)/\*([^\n\"]*)\"#' 	=> '"\1/"+\'\'+"*\2"', 	// remove comments from " strings
				'#/\*.*?\*/#s'            			=> "",      			// strip C style comments
				'#[\r\n]+#'               			=> "\n",    			// remove blank lines and \r's
				'#\n([ \t]*//.*?\n)*#s'   			=> "\n",    			// strip line comments (whole line only)
				'#([^\\])//([^\'"\n]*)\n#s' 		=> "\\1\n", 			// strip line comments
				'#\n\s+#'                 			=> "\n",    			// strip excess whitespace
				'#\s+\n#'                 			=> "\n",    			// strip excess whitespace
				'#(//[^\n]*\n)#s'         			=> "\\1\n", 			// extra line feed after any comments left
				'#/([\'"])\+\'\'\+([\'"])\*#' 		=> "/*" 				// restore comments in strings
			);

			$search = array_keys( $replace );
			$script = preg_replace( $search, $replace, $js );

			$replace = array(
				"&&\n" => "&&",
				"||\n" => "||",
				"(\n"  => "(",
				")\n"  => ")",
				"[\n"  => "[",
				"]\n"  => "]",
				"+\n"  => "+",
				",\n"  => ",",
				"?\n"  => "?",
				":\n"  => ":",
				";\n"  => ";",
				"{\n"  => "{",
				"\n]"  => "]",
				"\n)"  => ")",
				"\n}"  => "}",
				"\n\n" => "\n"
			);

			$search = array_keys( $replace );
			$script = str_replace( $search, $replace, $script );

		}

		// Return minified JS
		return trim( $script );

	}

}