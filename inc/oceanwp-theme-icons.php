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
	 * @since 1.8.8
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
