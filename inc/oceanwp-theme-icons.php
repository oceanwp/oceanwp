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
	 *
	 */
	function oceanwp_theme_icons() {

		$oceanwp_theme_icons = array(
			'home' => array(
				'sili' => 'icon-home',
				'fai'  => 'fas fa-home',
			),
			'search' => array(
				'sili'   => 'icon-magnifier',
				'fai'    => 'fas fa-search'
			),
			'user' => array(
				'sili'   => 'icon-user',
				'fai'    => 'fas fa-user-circle',
			),
			'date' => array(
				'sili'   => 'icon-clock',
				'fai'    => 'far fa-calendar-alt'
			),
			'm_date' => array(
				'sili'   => 'icon-note',
				'fai'    => 'far fa-calendar-check'
			),
			'category' => array(
				'sili'   => 'icon-folder',
				'fai'    => 'far fa-folder-open'
			),
			'r_time' => array(
				'sili'   => 'icon-cup',
				'fai'    => 'fas fa-mug-hot'
			),
			'comment' => array(
				'sili'   => 'icon-bubble',
				'fai'    => 'far fa-comments'
			),
			'quote'  => array(
				'sili'   => 'icon-speech',
				'fai'    => 'far fa-comment-dots'
			),
			's_quote' => array(
				'sili'   => 'icon-speech',
				'fai'    => 'fas fa-quote-right'
			),
			'link'   => array(
				'sili'   => 'icon-link',
				'fai'    => 'fas fa-link'
			),
			'close'  => array(
				'sili'   => 'icon-close',
				'fai'    => 'fas fa-times-circle'
			),
			'eye'    => array(
				'sili'   => 'icon-eye',
				'fai'    => 'far fa-eye'
			),
			'menu'   => array(
				'sili'   => 'icon-menu',
				'fai'    => 'fas fa-bars'
			),
			'grid'   => array(
				'sili'   => 'icon-grid',
				'fai'    => 'fas fa-th'
			),
			'list'   => array(
				'sili'  => 'icon-list',
				'fai'   => 'fas fa-list'
			)
		);

		return $oceanwp_theme_icons;
	}

}

if ( ! function_exists( 'oceanwp_theme_icon_class' ) ) {

	function oceanwp_theme_icon_class() {
		$i_class = get_theme_mod( 'ocean_theme_default_icons', 'sili' );

		if ( $i_class === 'sili' ) {
			$ti_class = 'sili';
		} else {
			$ti_class = 'fai';
		}

		return $ti_class;
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

		return $meta_style;
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

		return $sep_style;
	}
}
