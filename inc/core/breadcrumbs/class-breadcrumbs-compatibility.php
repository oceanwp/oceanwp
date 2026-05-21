<?php
/**
 * OceanWP Breadcrumbs Compatibility Class
 *
 * Handles integration with 3rd party SEO and E-commerce plugins.
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class OceanWP_Breadcrumbs_Compatibility {

	/**
	 * Instance.
	 *
	 * @var OceanWP_Breadcrumbs_Compatibility
	 */
	private static $instance;

	/**
	 * Get instance.
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Get breadcrumbs from external sources (SEO plugins).
	 *
	 * @return string|null
	 */
	public function get_external_breadcrumbs() {
		$breadcrumb_source = get_theme_mod( 'ocean_breadcrumbs_source' );

		$is_enable  = is_callable( 'WPSEO_Options::get' ) ? WPSEO_Options::get( 'breadcrumbs-enable' ) : false;
		$wpseo_data = get_option( 'wpseo_internallinks' ) ? get_option( 'wpseo_internallinks' ) : $is_enable;
		if ( ! is_array( $wpseo_data ) ) {
			$wpseo_data = array(
				'breadcrumbs-enable' => $is_enable,
			);
		}

		// Yoast breadcrumbs.
		if ( function_exists( 'yoast_breadcrumb' ) && true === $wpseo_data['breadcrumbs-enable'] && $breadcrumb_source && 'yoast-seo' === $breadcrumb_source ) {
			$classes = 'site-breadcrumbs clr';
			if ( $breadcrumbs_position = get_theme_mod( 'ocean_breadcrumbs_position' ) ) {
				$classes .= ' position-' . $breadcrumbs_position;
			}
			return yoast_breadcrumb( '<nav class="' . $classes . '">', '</nav>', false );
		}

		// SEOPress breadcrumbs.
		if ( function_exists( 'seopress_display_breadcrumbs' ) && $breadcrumb_source && 'seopress' === $breadcrumb_source ) {
			return seopress_display_breadcrumbs();
		}

		// Rank Math breadcrumbs.
		if ( function_exists( 'rank_math_the_breadcrumbs' ) && class_exists( 'RankMath\Helper' ) && RankMath\Helper::get_settings( 'general.breadcrumbs' ) && $breadcrumb_source && 'rank-math' === $breadcrumb_source ) {
			return rank_math_the_breadcrumbs();
		}

		return null;
	}

	/**
	 * Get breadcrumb sources list for Customizer.
	 *
	 * @param array $options Sources.
	 * @return array
	 */
	public function get_sources( $options ) {
		$is_enable  = is_callable( 'WPSEO_Options::get' ) ? WPSEO_Options::get( 'breadcrumbs-enable' ) : false;
		$wpseo_data = get_option( 'wpseo_internallinks' ) ? get_option( 'wpseo_internallinks' ) : $is_enable;
		if ( ! is_array( $wpseo_data ) ) {
			$wpseo_data = array(
				'breadcrumbs-enable' => $is_enable,
			);
		}

		if ( function_exists( 'yoast_breadcrumb' ) && true === $wpseo_data['breadcrumbs-enable'] ) {
			$options['yoast-seo'] = 'Yoast SEO Breadcrumbs';
		}

		if ( function_exists( 'seopress_display_breadcrumbs' ) ) {
			$options['seopress'] = 'SEOPress';
		}

		if ( function_exists( 'rank_math_the_breadcrumbs' ) && class_exists( 'RankMath\Helper' ) && RankMath\Helper::get_settings( 'general.breadcrumbs' ) ) {
			$options['rank-math'] = 'Rank Math';
		}

		return $options;
	}

	/**
	 * SEOPress before HTML.
	 */
	public function sp_before() {
		$classes = 'site-breadcrumbs clr';
		if ( $breadcrumbs_position = get_theme_mod( 'ocean_breadcrumbs_position' ) ) {
			$classes .= ' position-' . $breadcrumbs_position;
		}

		echo '<div class="' . esc_attr( $classes ) . '">';
	}

	/**
	 * SEOPress after HTML.
	 */
	public function sp_after() {
		echo '</div>';
	}

	/**
	 * Rank Math breadcrumb args.
	 *
	 * @param array $args Args.
	 * @return array
	 */
	public function rm_args( $args ) {
		$classes = 'site-breadcrumbs clr';
		if ( $breadcrumbs_position = get_theme_mod( 'ocean_breadcrumbs_position' ) ) {
			$classes .= ' position-' . $breadcrumbs_position;
		}
		$args['wrap_before'] = '<div class="' . $classes . '">';
		$args['wrap_after']  = '</div>';
		return $args;
	}

	/**
	 * WooCommerce breadcrumb defaults.
	 *
	 * @param array $args Args.
	 * @return array
	 */
	public function woo_defaults( $args ) {
		$classes = 'site-breadcrumbs woocommerce-breadcrumbs clr';
		if ( $breadcrumbs_position = get_theme_mod( 'ocean_breadcrumbs_position' ) ) {
			$classes .= ' position-' . $breadcrumbs_position;
		}

		$separator = apply_filters( 'oceanwp_breadcrumb_separator', get_theme_mod( 'ocean_breadcrumb_separator', '>' ) );
		$separator = '<span class="breadcrumb-sep">' . $separator . '</span>';

		$args['wrap_before'] = '<div class="' . $classes . '">';
		$args['wrap_after']  = '</div>';
		$args['delimiter']   = $separator;

		return $args;
	}
}
