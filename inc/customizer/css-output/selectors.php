<?php
/**
 * OceanWP Customizer CSS Output
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Generates arrays of elements to target
 *
 * @since 1.0.0
 * @param object $return    return value.
 */
function ocean_primary_color_selector( $return ) {

	// Texts.
	$texts = apply_filters(
		'ocean_primary_texts',
		array(
			'a:hover',
			'a.light:hover',
			'.theme-heading .text::before',
			'.theme-heading .text::after',
			'#top-bar-content > a:hover',
			'#top-bar-social li.oceanwp-email a:hover',
			'#site-navigation-wrap .dropdown-menu > li > a:hover',
			'#site-header.medium-header #medium-searchform button:hover',
			'.oceanwp-mobile-menu-icon a:hover',
			'.blog-entry.post .blog-entry-header .entry-title a:hover',
			'.blog-entry.post .blog-entry-readmore a:hover',
			'.blog-entry.thumbnail-entry .blog-entry-category a',
			'ul.meta li a:hover',
			'.dropcap',
			'.single nav.post-navigation .nav-links .title',
			'body .related-post-title a:hover',
			'body #wp-calendar caption',
			'body .contact-info-widget.default i',
			'body .contact-info-widget.big-icons i',
			'body .custom-links-widget .oceanwp-custom-links li a:hover',
			'body .custom-links-widget .oceanwp-custom-links li a:hover:before',
			'body .posts-thumbnails-widget li a:hover',
			'body .social-widget li.oceanwp-email a:hover',
			'.comment-author .comment-meta .comment-reply-link',
			'#respond #cancel-comment-reply-link:hover',
			'#footer-widgets .footer-box a:hover',
			'#footer-bottom a:hover',
			'#footer-bottom #footer-bottom-menu a:hover',
			'.sidr a:hover',
			'.sidr-class-dropdown-toggle:hover',
			'.sidr-class-menu-item-has-children.active > a',
			'.sidr-class-menu-item-has-children.active > a > .sidr-class-dropdown-toggle',
			'input[type=checkbox]:checked:before',
		)
	);

	// SVG Icon color.
	$svg_icons = apply_filters(
		'ocean_primary_svg_icons',
		array(
			'.single nav.post-navigation .nav-links .title .owp-icon use',
			'.blog-entry.post .blog-entry-readmore a:hover .owp-icon use',
			'body .contact-info-widget.default .owp-icon use',
			'body .contact-info-widget.big-icons .owp-icon use',
		)
	);

	// Backgrounds.
	$backgrounds = apply_filters(
		'ocean_primary_backgrounds',
		array(
			'input[type="button"]',
			'input[type="reset"]',
			'input[type="submit"]',
			'button[type="submit"]',
			'.button',
			'#site-navigation-wrap .dropdown-menu > li.btn > a > span',
			'.thumbnail:hover i',
			'.thumbnail:hover .link-post-svg-icon',
			'.post-quote-content',
			'.omw-modal .omw-close-modal',
			'body .contact-info-widget.big-icons li:hover i',
			'body .contact-info-widget.big-icons li:hover .owp-icon',
			'body div.wpforms-container-full .wpforms-form input[type=submit]',
			'body div.wpforms-container-full .wpforms-form button[type=submit]',
			'body div.wpforms-container-full .wpforms-form .wpforms-page-button',
			'.woocommerce-cart .wp-element-button',
			'.woocommerce-checkout .wp-element-button',
			'.wp-block-button__link',
		)
	);

	// Borders.
	$borders = apply_filters(
		'ocean_primary_borders',
		array(
			// '.widget-title',
			// 'blockquote' => 'left',
			// '.wp-block-quote' => 'left',
			// '#searchform-dropdown' => '',
			// '.dropdown-menu .sub-menu' => '',
			// '.blog-entry.large-entry .blog-entry-readmore a:hover' => '',
			// '.oceanwp-newsletter-form-wrap input[type="email"]:focus' => '',
			// '.social-widget li.oceanwp-email a:hover' => '',
			// '#respond #cancel-comment-reply-link:hover' => '',
			// 'body .contact-info-widget.big-icons li:hover i' => '',
			// 'body .contact-info-widget.big-icons li:hover .owp-icon' => '',
			// '#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"]:focus' => '',

			'.widget-title',
			'blockquote',
			'.wp-block-quote',
			'#searchform-dropdown',
			'.dropdown-menu .sub-menu',
			'.blog-entry.large-entry .blog-entry-readmore a:hover',
			'.oceanwp-newsletter-form-wrap input[type="email"]:focus',
			'.social-widget li.oceanwp-email a:hover',
			'#respond #cancel-comment-reply-link:hover',
			'body .contact-info-widget.big-icons li:hover i',
			'body .contact-info-widget.big-icons li:hover .owp-icon',
			'#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"]:focus',
		)
	);

	// Return array.
	if ( 'texts' === $return ) {
		return $texts;
	} elseif ( 'svg_icons' === $return ) {
		return $svg_icons;
	} elseif ( 'backgrounds' === $return ) {
		return $backgrounds;
	} elseif ( 'borders' === $return ) {
		return $borders;
	}

}

/**
 * Generates array of elements to target
 *
 * @since 1.0.0
 * @param object $return    return value.
 */
function ocean_primary_color_hover_selector( $return ) {

	// Hover backgrounds.
	$hover = apply_filters(
		'ocean_hover_primary_backgrounds',
		array(
			'input[type="button"]:hover',
			'input[type="reset"]:hover',
			'input[type="submit"]:hover',
			'button[type="submit"]:hover',
			'input[type="button"]:focus',
			'input[type="reset"]:focus',
			'input[type="submit"]:focus',
			'button[type="submit"]:focus',
			'.button:hover',
			'.button:focus',
			'#site-navigation-wrap .dropdown-menu > li.btn > a:hover > span',
			'.post-quote-author',
			'.omw-modal .omw-close-modal:hover',
			'body div.wpforms-container-full .wpforms-form input[type=submit]:hover',
			'body div.wpforms-container-full .wpforms-form button[type=submit]:hover',
			'body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover',
			'.woocommerce-cart .wp-element-button:hover',
			'.woocommerce-checkout .wp-element-button:hover',
			'.wp-block-button__link:hover',
		)
	);

	// Return array.
	if ( 'hover' === $return ) {
		return $hover;
	}

}

/**
 * Returns array of elements and border style to apply
 *
 * @since 1.0.0
 */
function ocean_main_border_selector() {

	return apply_filters(
		'ocean_border_color_elements',
		array(

			// General.
			'table th',
			'table td',
			'hr',
			'.content-area',
			'body.content-left-sidebar #content-wrap .content-area,
			.content-left-sidebar .content-area',

			// Top bar.
			'#top-bar-wrap',

			// Header.
			'#site-header',

			// Search top header.
			'#site-header.top-header #search-toggle',

			// Dropdown.
			'.dropdown-menu ul li',

			// Page header.
			'.centered-minimal-page-header',

			// Blog.
			'.blog-entry.post',

			'.blog-entry.grid-entry .blog-entry-inner',

			'.blog-entry.thumbnail-entry .blog-entry-bottom',

			'.single-post .entry-title',

			'.single .entry-share-wrap .entry-share',
			'.single .entry-share',
			'.single .entry-share ul li a',

			'.single nav.post-navigation',
			'.single nav.post-navigation .nav-links .nav-previous',

			'#author-bio',
			'#author-bio .author-bio-avatar',
			'#author-bio .author-bio-social li a',

			'#related-posts',

			'#comments',
			'.comment-body',
			'#respond #cancel-comment-reply-link',

			'#blog-entries .type-page',

			// Pagination.
			'.page-numbers a,
			.page-numbers span:not(.elementor-screen-only),
			.page-links span',

			// Widgets.
			'body #wp-calendar caption,
			body #wp-calendar th,
			body #wp-calendar tbody',

			'body .contact-info-widget.default i,
			body .contact-info-widget.big-icons i',
			'body .contact-info-widget.big-icons .owp-icon',
			'body .contact-info-widget.default .owp-icon',

			'body .posts-thumbnails-widget li',

			'body .tagcloud a',
		)
	);
}
