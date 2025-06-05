<?php
/**
 * Centralized functions for the OceanWP Breadcrumb functionality.
 * 
 * @package OceanWP WordPress Theme
 * @link https://oceanwp.org/
 * @author OceanWP
 * @since 4.2.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Get an array of CSS classes for the breadcrumb container.
 *
 * Adds default classes and conditionally appends position-based class.
 * 
 * @since 4.2.0
 *
 * @return array Array of CSS class names.
 */
if ( ! function_exists( 'get_breadcrumb_css_classes' ) ) {
	function get_breadcrumb_css_classes(): array {
		$crumb_position = get_theme_mod( 'ocean_breadcrumbs_position', '' );

		$css_classes = [ 'site-breadcrumbs', 'clr' ];

		if ( 'under-title' === $crumb_position ) {
			$css_classes[] = 'position-under-title';
		}

		return $css_classes;
	}
}

/**
 * Get the breadcrumb CSS classes as a space-separated string.
 *
 * Useful for outputting directly into an HTML class attribute.
 * 
 * @since 4.2.0
 *
 * @return string Space-separated CSS class string.
 */
if ( ! function_exists( 'get_breadcrumb_css_class_string' ) ) {
	function get_breadcrumb_css_class_string(): string {
		$css_classes = get_breadcrumb_css_classes();
		return implode( ' ', $css_classes );
	}
}

/**
 * Get the breadcrumb separator HTML.
 *
 * Retrieves the breadcrumb separator character
 * and wraps it in a span element with a CSS class for styling.
 *
 * @since 4.2.0
 *
 * @return string HTML string containing the breadcrumb separator.
 */
if ( ! function_exists( 'oceanwp_get_breadcrumb_separator' ) ) {

	function oceanwp_get_breadcrumb_separator(): string {

		$separator = apply_filters(
			'oceanwp_breadcrumb_separator',
			get_theme_mod( 'ocean_breadcrumb_separator', '>' )
		);

		return '<span class="breadcrumb-sep" aria-hidden="true">' . esc_html( $separator ) . '</span>';
	}
}

/**
 * Returns OceanWP breadcrumb HTML
 * 
 * @since 4.2.0
 *
 * @return string
 */
if ( ! function_exists( 'oceanwp_get_breadcrumb_html' ) ) {

	/**
	 * Outputs the breadcrumb HTML.
	 *
	 * @return string
	 */
	function oceanwp_get_breadcrumb_html() {
		// Don't display breadcrumbs on the homepage or main blog index unless paged.
		if (
			( is_front_page() && is_home() ) || // Default homepage
			( is_front_page() && ! is_paged() ) // Static front page
		) {
			return '';
		}

		// Check early if page is a WooCommerce page, and what breadcrumbs to apply on Woo pages.
		$woo_source  = get_theme_mod( 'ocean_breadcrumb_woocommerce', 'no' ) === 'yes';
		$is_woo_page = function_exists( 'is_woocommerce' ) && is_woocommerce();

		if ( $woo_source && $is_woo_page ) {
			ob_start();
			woocommerce_breadcrumb();
			return ob_get_clean();
		}

		// Start generating OceanWP breadcrumb.
		$generator = new OceanWP_Breadcrumb_Generator();
		$items     = $generator->get_items();

		if ( empty( $items ) ) {
			return '';
		}

		// Settings and conditions necessary for correct breadcrumb output.
		$show_title    = get_theme_mod( 'ocean_breadcrumb_show_title', true );
		$use_microdata = oceanwp_should_output_legacy_schema();
		$separator     = oceanwp_get_breadcrumb_separator();
		$position      = 1;

		// Remove last item of the trail if the title of the viewed item is not to be output.
		/* if ( ! $show_title && is_singular( 'post' ) ) {
			$last_item = end( $items );
			if ( isset( $last_item['is_title'] ) && $last_item['is_title'] ) {
				array_pop( $items );
			}
		} */
		if ( ! $show_title ) {
			$last_item = end( $items );
			if ( isset( $last_item['is_title'] ) && $last_item['is_title'] ) {
				array_pop( $items );
			}
		}

		// Determine last item of the trail.
		$last_index  = count( $items ) - 1;

		// Get correct CSS classes for the main breadcrumb <nav> element.
		$css_classes = get_breadcrumb_css_class_string();

		$nav_attrs = [
			'role="navigation"',
			'aria-label="' . esc_attr__( 'Breadcrumb', 'oceanwp' ) . '"',
			'class="' . esc_attr( $css_classes ) . '"',
		];

		if ( $use_microdata ) {
			$nav_attrs[] = 'itemscope itemtype="https://schema.org/BreadcrumbList"';
		}

		ob_start();

		echo '<nav ' . implode( ' ', $nav_attrs ) . '><ol class="trail-items">';

		foreach ( $items as $index => $item ) {

			// Get correct settings and conditions for every breadcrumb <li> element.
			$is_current = isset( $item['is_current'] ) && $item['is_current'];
			$is_link    = ! $is_current && ! empty( $item['url'] );
			$label      = ! empty( $item['raw'] ) ? $item['label'] : esc_html( $item['label'] );

			$classes = [ 'trail-item' ];
			if ( 0 === $index ) {
				$classes[] = 'trail-begin';
			}
			if ( $index === $last_index ) {
				$classes[] = 'trail-end';
			}

			$class_attr = 'class="' . esc_attr( implode( ' ', $classes ) ) . '"';

			$li_attrs = $use_microdata
				? $class_attr . ' itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"'
				: $class_attr;

			echo '<li ' . $li_attrs . '>';

			if ( $is_link ) {
				$extra_attrs = '';
				if ( 0 === $index ) {
					$extra_attrs .= ' rel="home" aria-label="' . esc_attr__( 'First page', 'oceanwp' ) . '"';
				}

				echo '<a href="' . esc_url( $item['url'] ) . '" ' . ( $use_microdata ? 'itemprop="item"' : '' ) . $extra_attrs . '>';
				echo '<span ' . ( $use_microdata ? 'itemprop="name"' : '' ) . '>' . $label . '</span>';
				echo '</a>';
			} else {
				echo '<span ' . ( $use_microdata ? 'itemprop="name"' : '' ) . '>' . $label . '</span>';
			}

			if ( $use_microdata ) {
				echo '<meta itemprop="position" content="' . esc_attr( $position ) . '">';
			}

			echo '</li>';

			// Append breadcrumb separator if not last trail item.
			if ( $index !== $last_index ) {
				echo $separator;
			}

			$position++;
		}

		echo '</ol></nav>';

		return ob_get_clean();
	}

}

/**
 * Outputs breadcrumb HTML.
 * 
 * @since 4.2.0
 */
if ( ! function_exists( 'oceanwp_display_breadcrumb' ) ) {

	/**
	 * Displays the breadcrumb HTML.
	 */
	function oceanwp_display_breadcrumb() {
		echo oceanwp_get_breadcrumb_html();
	}

}

/**
 * Global helper to check if breadcrumbs are enabled
 * in the Customizer.
 *
 * @since 1.1.2
 * @updated 4.2.0
 */
if ( ! function_exists( 'oceanwp_has_breadcrumbs' ) ) {

	function oceanwp_has_breadcrumbs() {
		$enabled = get_theme_mod( 'ocean_breadcrumbs', true );
		return apply_filters( 'ocean_display_breadcrumbs', ( true === $enabled ) );
	}
}

/**
 * Outputs the breadcrumb HTML based on the selected source in the Customizer.
 * 
 * @since 4.2.0
 *
 * @return void
 */
if ( ! function_exists( 'oceanwp_output_breadcrumbs' ) ) {

	function oceanwp_output_breadcrumbs() {

		if ( ! oceanwp_has_breadcrumbs() || is_front_page() ) {
			return;
		}

		// Retrieve available breadcrumb sources from the Customizer.
		$source = get_theme_mod( 'ocean_breadcrumbs_source', 'default' );

		// Ensure previously selected breadcrumb source falls back to default if plugin deactivated.
		$supported_sources = array_keys( oceanwp_breadcrumbs_source_choices() );
		if ( ! in_array( $source, $supported_sources, true ) ) {
			$source = 'default';
		}

		// SEO plugin sources.
		switch ( $source ) {
			case 'yoast-seo':
				if ( oceanwp_is_yoast_breadcrumbs_enabled() ) {
					$classes = get_breadcrumb_css_class_string();
					echo yoast_breadcrumb( '<nav class="' . esc_attr( $classes ) . '">', '</nav>' );
					return;
				}
				break;

			case 'seopress':
				if ( oceanwp_is_seopress_breadcrumbs_enabled() ) {
					do_action( 'seopress_breadcrumbs_before_html' );
					seopress_display_breadcrumbs();
					do_action( 'seopress_breadcrumbs_after_html' );
					return;
				}
				break;

			case 'rank-math':
				if ( oceanwp_is_rankmath_breadcrumbs_enabled() ) {
					rank_math_the_breadcrumbs();
					return;
				}
				break;
		}

		/**
		 * Filter: Allow overriding the entire breadcrumb output.
		 *
		 * Return true from the filter to prevent default breadcrumbs from rendering.
		 * Use this to output custom breadcrumb HTML directly.
		 */
		if ( apply_filters( 'oceanwp_override_breadcrumbs', false ) ) {
			return;
		}

		// Default OceanWP breadcrumbs.
		oceanwp_display_breadcrumb();
	}

	add_action( 'ocean_breadcrumbs_main', 'oceanwp_output_breadcrumbs' );
}

/**
 * Wrap WooCommerce default breadcrumbs in a container.
 *
 * @since  3.4.5
 * @updated 4.2.0
 */
function owp_woo_breadcrumbs( $args ) {

	$crumb_position = get_theme_mod( 'ocean_breadcrumbs_position', '' );

	$css_classes = [ 'site-breadcrumbs', 'woocommerce-breadcrumbs', 'clr' ];
	if ( 'under-title' === $crumb_position ) {
		$css_classes[] = 'position-under-title';
	}

	$separator = oceanwp_get_breadcrumb_separator();

	$args['wrap_before'] = '<div class="' . esc_attr( implode( ' ', $css_classes ) ) . '">';
	$args['wrap_after']  = '</div>';
	$args['delimiter']   = $separator;

	return $args;
}
add_filter( 'woocommerce_breadcrumb_defaults', 'owp_woo_breadcrumbs' );

/**
 * Wrap SEOPRess breadcrumbs in a container.
 *
 * @since  1.5.21
 * @updated 4.2.0
 */
function sp_breadcrumbs_before() {

	$classes = get_breadcrumb_css_class_string();

	echo '<div class="' . esc_attr( $classes ) . '">';
}
add_action( 'seopress_breadcrumbs_before_html', 'sp_breadcrumbs_before' );

/**
 * Close the SEOPress breadcrumbs container.
 * 
 * @sunce 1.5.21
 * @updated 4.2.0
 */
function sp_breadcrumbs_after() {

	echo '</div>';
}
add_action( 'seopress_breadcrumbs_after_html', 'sp_breadcrumbs_after' );

/**
 * Wrap RankMath breadcrumbs in a container.
 *
 * @since  1.6.5
 * @updated 4.2.0
 */
function rm_breadcrumbs( $args ) {

	$classes = get_breadcrumb_css_class_string();

	$args['wrap_before'] = '<div class="' . $classes . '">';
	$args['wrap_after']  = '</div>';

	return $args;
}
add_action( 'rank_math/frontend/breadcrumb/args', 'rm_breadcrumbs' );

/**
 * Display available breadcrumb source choices in the Customizer.
 * Default option (OceanWP breadcrumbs) always available. 
 * Other options depend on installed and supported plugins.
 * 
 * @since 1.6.5
 * @updated 4.2.0
 * 
 * @return array List of breadcrumb source choices
 */
if ( ! function_exists( 'oceanwp_breadcrumbs_source_choices' ) ) {

	function oceanwp_breadcrumbs_source_choices(): array {
		$sources = [
			'default' => esc_html__( 'Default', 'oceanwp' ),
		];

		if ( oceanwp_is_yoast_breadcrumbs_enabled() ) {
			$sources['yoast-seo'] = esc_html__( 'Yoast SEO Breadcrumbs', 'oceanwp' );
		}

		if ( oceanwp_is_seopress_breadcrumbs_enabled() ) {
			$sources['seopress'] = esc_html__( 'SEOPress', 'oceanwp' );
		}

		if ( oceanwp_is_rankmath_breadcrumbs_enabled() ) {
			$sources['rank-math'] = esc_html__( 'Rank Math', 'oceanwp' );
		}

		/**
		 * Filter the list of available breadcrumb sources for the Customizer.
		 *
		 * @param array $sources Array of breadcrumb sources.
		 */
		return apply_filters( 'oceanwp_breadcrumbs_source_list', $sources );
	}
}

/**
 * Determines if Yoast SEO breadcrumbs are available and enabled.
 * 
 * @since 4.2.0
 *
 * @return bool True if Yoast breadcrumbs should be used, false otherwise.
 */
if ( ! function_exists( 'oceanwp_is_yoast_breadcrumbs_enabled' ) ) {
	
	function oceanwp_is_yoast_breadcrumbs_enabled(): bool {
		if ( ! function_exists( 'yoast_breadcrumb' ) ) {
			return false;
		}

		$is_enabled = is_callable( 'WPSEO_Options::get' ) ? WPSEO_Options::get( 'breadcrumbs-enable' ) : false;
		$wpseo_data = get_option( 'wpseo_internallinks' ) ?: $is_enabled;

		if ( ! is_array( $wpseo_data ) ) {
			$wpseo_data = [ 'breadcrumbs-enable' => $is_enabled ];
		}

		return ! empty( $wpseo_data['breadcrumbs-enable'] );
	}
}

/**
 * Determines if SEOPress breadcrumbs are available.
 * 
 * @since 4.2.0
 *
 * @return bool True if SEOPress breadcrumbs are enabled, false otherwise.
 */
if ( ! function_exists( 'oceanwp_is_seopress_breadcrumbs_enabled' ) ) {

	function oceanwp_is_seopress_breadcrumbs_enabled(): bool {
		return function_exists( 'seopress_display_breadcrumbs' );
	}
}

/**
 * Determines if Rank Math breadcrumbs are available and enabled in settings.
 * 
 * @since 4.2.0
 *
 * @return bool True if Rank Math breadcrumbs should be used, false otherwise.
 */
if ( ! function_exists( 'oceanwp_is_rankmath_breadcrumbs_enabled' ) ) {
	
	function oceanwp_is_rankmath_breadcrumbs_enabled(): bool {
		return function_exists( 'rank_math_the_breadcrumbs' )
			&& class_exists( '\RankMath\Helper' )
			&& \RankMath\Helper::get_settings( 'general.breadcrumbs' );
	}
}
