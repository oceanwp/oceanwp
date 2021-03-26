<?php
/**
 * OceanWP theme icons
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'oceanwp_theme_icons' ) ) {

	/**
	 * OceanWP Theme Icons
	 *
	 * @since 2.0
	 */
	function oceanwp_theme_icons() {

		$oceanwp_theme_icons = array(
			'home'     => array(
				'sili' => 'icon-home',
				'fai'  => 'fas fa-home',
				'svg'  => 'homepage',
			),
			'search'   => array(
				'sili' => 'icon-magnifier',
				'fai'  => 'fas fa-search',
				'svg'  => 'search',
			),
			'user'     => array(
				'sili' => 'icon-user',
				'fai'  => 'fas fa-user-circle',
				'svg'  => 'author',
			),
			'date'     => array(
				'sili' => 'icon-clock',
				'fai'  => 'far fa-calendar-alt',
				'svg'  => 'date-published',
			),
			'm_date'   => array(
				'sili' => 'icon-note',
				'fai'  => 'far fa-calendar-check',
				'svg'  => 'date-modified',
			),
			'category' => array(
				'sili' => 'icon-folder',
				'fai'  => 'far fa-folder-open',
				'svg'  => 'categories',
			),
			'r_time'   => array(
				'sili' => 'icon-cup',
				'fai'  => 'fas fa-mug-hot',
				'svg'  => 'reading-time-hourglass',
			),
			'comment'  => array(
				'sili' => 'icon-bubble',
				'fai'  => 'far fa-comments',
				'svg'  => 'comments',
			),
			'quote'    => array(
				'sili' => 'icon-speech',
				'fai'  => 'far fa-comment-dots',
				'svg'  => 'quotes',
			),
			's_quote'  => array(
				'sili' => 'icon-speech',
				'fai'  => 'fas fa-quote-right',
				'svg'  => 'quotes',
			),
			'link'     => array(
				'sili' => 'icon-link',
				'fai'  => 'fas fa-link',
				'svg'  => 'link',
			),
			'close'    => array(
				'sili' => 'icon-close',
				'fai'  => 'fas fa-times-circle',
				'svg'  => 'close',
			),
			'eye'      => array(
				'sili' => 'icon-eye',
				'fai'  => 'far fa-eye',
				'svg'  => 'eye',
			),
			'menu'       => array(
				'sili' => 'icon-menu',
				'fai'  => 'fas fa-bars',
				'svg'  => 'mobile-menu',
			),
			'grid'       => array(
				'sili' => 'icon-grid',
				'fai'  => 'fas fa-th',
				'svg'  => 'grid-view',
			),
			'list'       => array(
				'sili' => 'icon-list',
				'fai'  => 'fas fa-list',
				'svg'  => 'list-view',
			),
			'angle_down' => array(
				'sili' => 'fa fa-angle-down',
				'fai'  => 'fa fa-angle-down',
				'svg'  => 'small-arrow-down',
			),
			'angle_left' => array(
				'sili' => 'arrow-left',
				'fai'  => 'fa fa-angle-left',
				'svg'  => 'small-arrow-left',
			),
			'angle_right' => array(
				'sili' => 'fa fa-angle-right',
				'fai'  => 'fa fa-angle-right',
				'svg'  => 'small-arrow-right',
			),
		);

		return apply_filters( 'oceanwp_theme_icons', $oceanwp_theme_icons );
	}
}

/**
 * Get correct icon class
 *
 * @since 2.0
 */
if ( ! function_exists( 'oceanwp_theme_icon_class' ) ) {

	function oceanwp_theme_icon_class() {

		$i_class = get_theme_mod( 'ocean_theme_default_icons', 'svg' );

		if ( 'sili' === $i_class  ) {
			$ti_class = 'sili';
		} elseif ( 'fai' === $i_class ) {
			$ti_class = 'fai';
		} elseif ( 'svg' === $i_class ) {
			$ti_class = 'svg';
		} else {
			return __( 'Please select an icon type.', 'oceanwp' );
		}

		return apply_filters( 'oceanwp_theme_icon_class', $ti_class );
	}
}

/**
 * Blog Entries Meta Separator Style
 *
 * @since 2.0
 */
if ( ! function_exists( 'oceanwp_theme_blog_meta_separator' ) ) {

	function oceanwp_theme_blog_meta_separator() {

		$meta_style = get_theme_mod( 'ocean_blog_meta_separator', 'default' );

		$meta_style = $meta_style ? $meta_style : 'default';

		return apply_filters( 'oceanwp_theme_blog_meta_separator', $meta_style );
	}
}

/**
 * Single Blog Post Meta Separator
 *
 * @since 2.0
 */
if ( ! function_exists( 'oceanwp_theme_single_post_separator' ) ) {

	function oceanwp_theme_single_post_separator() {

		$sep_style = get_theme_mod( 'ocean_blog_single_meta_separator', 'default' );

		$sep_style = $sep_style ? $sep_style : 'default';

		return apply_filters( 'oceanwp_theme_single_post_separator', $sep_style );
	}
}

function get_ocean_icon( $args = array() ) {

	// Make sure $args are an array.
	if ( empty( $args ) ) {
		return __( 'Please define default parameters in the form of an array.', 'oceanwp' );
	}

	// Define an icon.
	if ( false === array_key_exists( 'icon', $args ) ) {
		return __( 'Please define an icon class.', 'oceanwp' );
	}

	// Set defaults.
	$defaults = array(
		'icon'        => '',
		'class'       => '',
		'aria_hidden' => true,
	);

	// Get icon class.
	$theme_icons = oceanwp_theme_icons();
	$icon_class  = oceanwp_theme_icon_class();

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Set aria hidden.
	$aria_hidden = '';

	if ( true === $args['aria_hidden'] ) {
		$aria_hidden = ' aria-hidden="true"';
	}

	$class = '';
	if ( ! empty( $args['class'] ) ) {
		$class = $args['class'];
	}

	// Add SVG markup.
	$icon_html = '<i class="' . $class . ' ' . $theme_icons[ $args['icon'] ][ $icon_class ] . '"' . $aria_hidden . ' role="img"></i>';

	return $icon_html;
}

/**
 * Display the icons
 */
if ( ! function_exists( 'oceanwp_print_icon' ) ) {

	function oceanwp_print_icon( $args = array(), $echo = true ) {

		if ( empty( $args ) ) {
			return __( 'Please define default parameters in the form of an array.', 'oceanwp' );
		}

		$icon      = '';
		$icon_type = get_theme_mod( 'ocean_theme_default_icons', 'svg' );

		if ( isset( $icon_type ) && ! empty( $icon_type ) ) {

			if ( 'sili' === $icon_type || 'fai' === $icon_type ) {
				$icon = get_ocean_icon( $args, false );
			} elseif( 'svg' === $icon_type ) {
				$icon = wp_kses( ocean_svg_icon( $args, false ), ocean_svg_icon_allowed_html() );
			} else {
				return __( 'Please define an icon type.', 'oceanwp' );
			}
		}

		$icon = apply_filters( "oceanwp_print_icon_{$icon}", $icon );

		/**
		 * Print or return icon
		 */
		if ( $echo ) {
			echo $icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $icon;
		}
	}
}

/**
 * OceanWP icon tag
 *
 * @param string  $icon        Icon class.
 * @param bool    $echo        Print string.
 * @param string  $class       Icon class.
 * @param string  $title       Optional SVG title.
 * @param string  $desc        Optional SVG description.
 * @param string  $aria_hidden Optional SVG description.
 * @param boolean $fallback    Fallback icon.
 *
 * @return string OceanWP Icon.
 */
if ( ! function_exists( 'oceanwp_icon' ) ) {

	function oceanwp_icon( $icon, $echo = true, $class = '', $title = '', $desc = '', $aria_hidden = true, $fallback = false ) {

		$icon = oceanwp_print_icon(
				array(
					'icon'        => $icon,
					'class'       => $class,
					'title'       => $title,
					'desc'        => $desc,
					'area_hidden' => $aria_hidden,
					'fallback'    => $fallback,
				), false
			);

		$icon = apply_filters( "oceanwp_icon_{$icon}", $icon );

		/**
		 * Print or return icon
		 */
		if ( $echo ) {
			echo $icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $icon;
		}
	}
}