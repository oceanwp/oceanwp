<?php
/**
 * OceanWP Customizer Settings: General
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

    'ocean_background_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Site Background', 'oceanwp' ),
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_background_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'ocean_background_color',
                'key' => 'normal',
                'label' => 'Select Color',
                'selector' => [
                    'body, .has-parallax-footer:not(.separate-layout) #main' => 'background-color'
                ],
                'attr' => [
					'transport' => 'postMessage',
                    'default'   => '#ffffff',
				],
            ),
        )
	],

	'ocean_primary_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Primary Color', 'oceanwp' ),
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_primary_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'ocean_primary_color',
                'key' => 'normal',
                'label' => 'Normal',
                'selector' => [
                    'a:hover,a.light:hover,.theme-heading .text::before,#top-bar-content > a:hover,#top-bar-social li.oceanwp-email a:hover,#site-navigation-wrap .dropdown-menu > li > a:hover,.oceanwp-mobile-menu-icon a:hover,.blog-entry.post .blog-entry-header .entry-title a:hover,.blog-entry.post .blog-entry-readmore a:hover,ul.meta li a:hover,.dropcap,.single-post nav.post-navigation .nav-links .title,body .related-post-title a:hover,body #wp-calendar caption,body .contact-info-widget.default i,body .contact-info-widget.big-icons i,body .custom-links-widget .oceanwp-custom-links li a:hover,body .custom-links-widget .oceanwp-custom-links li a:hover:before,body .posts-thumbnails-widget li a:hover,body .social-widget li.oceanwp-email a:hover,.comment-author .comment-meta .comment-reply-link,#respond #cancel-comment-reply-link:hover,#footer-widgets .footer-box a:hover,#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover,.sidr a:hover,.sidr-class-dropdown-toggle:hover,.sidr-class-menu-item-has-children.active > a,.sidr-class-menu-item-has-children.active > a > .sidr-class-dropdown-toggle,#oceanwp-post-list.one .oceanwp-post-category:hover,#oceanwp-post-list.one .oceanwp-post-category:hover a,#oceanwp-post-list.two .slick-arrow:hover,#oceanwp-post-list.two article:hover .oceanwp-post-category,#oceanwp-post-list.two article:hover .oceanwp-post-category a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover,input[type=checkbox]:checked:before,.woocommerce-MyAccount-navigation ul li a:before,.woocommerce-checkout .woocommerce-info a,.woocommerce-checkout #payment ul.payment_methods .wc_payment_method>input[type=radio]:first-child:checked+label:before,.woocommerce-checkout #payment .payment_method_paypal .about_paypal,.woocommerce ul.products li.product li.category a:hover,.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover,.product_meta .posted_in a:hover,.product_meta .tagged_as a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover' => 'color',
                    'input[type="button"],input[type="reset"],input[type="submit"],button[type="submit"],.button,#site-navigation-wrap .dropdown-menu >li.btn >a >span,.thumbnail:hover i,.thumbnail:hover .link-post-svg-icon,.post-quote-content,.omw-modal .omw-close-modal,body .contact-info-widget.big-icons li:hover i,body .contact-info-widget.big-icons li:hover .owp-icon,body div.wpforms-container-full .wpforms-form input[type=submit],body div.wpforms-container-full .wpforms-form button[type=submit],body div.wpforms-container-full .wpforms-form .wpforms-page-button' => 'background-color',
                    '.widget-title,blockquote,#searchform-dropdown,#icon-searchform-dropdown,.dropdown-menu .sub-menu,.blog-entry.large-entry .blog-entry-readmore a:hover,.oceanwp-newsletter-form-wrap input[type="email"]:focus,.social-widget li.oceanwp-email a:hover,#respond #cancel-comment-reply-link:hover,body .contact-info-widget.big-icons li:hover i,#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"]:focus,#oceanwp-post-list.one .readmore:hover,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover,.current-shop-items-dropdown,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.wcmenucart-details.count:before,.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover' => 'border-color',
                ],
                'attr' => [
					'transport' => 'postMessage',
                    'default'   => '#13aff0',
				],
            ),
            'hover' => array(
                'id' => 'ocean_hover_primary_color',
                'key' => 'hover',
                'label' => 'Hover',
                'selector' => [
                    'input[type="button"]:hover,input[type="reset"]:hover,input[type="submit"]:hover,button[type="submit"]:hover,input[type="button"]:focus,input[type="reset"]:focus,input[type="submit"]:focus,button[type="submit"]:focus,.button:hover,.button:focus,#site-navigation-wrap .dropdown-menu >li.btn >a:hover >span,.post-quote-author,.omw-modal .omw-close-modal:hover,body div.wpforms-container-full .wpforms-form input[type=submit]:hover,body div.wpforms-container-full .wpforms-form button[type=submit]:hover,body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover' => 'background-color'
                ],
                'attr' => [
					'transport' => 'postMessage',
                    'default'   => '#0b7cac',
				],
            )
        )

	],

    'ocean_border_color' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Border Color', 'oceanwp' ),
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_border_color',
        'setting_args' => array(
            'normal' => array(
                'id' => 'ocean_main_border_color',
                'key' => 'normal',
                'label' => 'Select Color',
                'selector' => [
                    'table th,table td,hr,.content-area,body.content-left-sidebar #content-wrap .content-area,.content-left-sidebar .content-area,#top-bar-wrap,#site-header,#site-header.top-header #search-toggle,.dropdown-menu ul li,.centered-minimal-page-header,.blog-entry.post,.blog-entry.grid-entry .blog-entry-inner,.single-post .entry-title,.single-post .entry-share,.single-post .entry-share ul li a,.single-post nav.post-navigation,.single-post nav.post-navigation .nav-links .nav-previous,#author-bio,#author-bio .author-bio-avatar,#author-bio .author-bio-social li a,#related-posts,#comments,.comment-body,#respond #cancel-comment-reply-link,#blog-entries .type-page,.page-numbers a,.page-numbers span:not(.elementor-screen-only),.page-links span,#wp-calendar caption,#wp-calendar th,#wp-calendar tbody,.contact-info-widget i,.posts-thumbnails-widget li,.tagcloud a' => 'border-color',
                    'blockquote, .wp-block-quote' => 'border-left-color',
                ],
                'attr' => [
					'transport' => 'postMessage',
                    'default'   => '#e9e9e9',
				],
            ),
        )
	],

    'ocean_divider_after_border_color' => [
        'type' => 'ocean-divider',
        'section' => 'ocean_colors',
        'transport' => 'postMessage',
        'priority' => 10,
        'top' => 10,
        'bottom' => 10
    ],

    'ocean_body_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Body Color', 'oceanwp' ),
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_body_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'body_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_headings_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'All Headings', 'oceanwp' ),
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_headings_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'headings_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_headings_h1_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Heading 1 (H1)', 'oceanwp' ),
        'class' => 'h1-h6',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_headings_h1_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'headings_h1_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_headings_h2_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Heading 2 (H2)', 'oceanwp' ),
        'class' => 'h1-h6',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_headings_h2_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'headings_h2_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_headings_h3_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Heading 3 (H3)', 'oceanwp' ),
        'class' => 'h1-h6',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_headings_h3_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'headings_h3_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_headings_h4_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Heading 4 (H4)', 'oceanwp' ),
        'class' => 'h1-h6',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_headings_h4_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'headings_h4_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_headings_h5_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Heading 5 (H5)', 'oceanwp' ),
        'class' => 'h1-h6',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_headings_h5_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'headings_h5_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_headings_h6_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Heading 6 (H6)', 'oceanwp' ),
        'class' => 'h1-h6',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_headings_h6_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'headings_h6_typography[color]',
                'key' => 'normal',
                'label' => 'Select Color',
                'attr' => [
					'transport' => 'postMessage',
				],
            ),
        )
	],

    'ocean_divider_after_headings_color' => [
        'type' => 'ocean-divider',
        'section' => 'ocean_colors',
        'transport' => 'postMessage',
        'priority' => 10,
        'top' => 10,
        'bottom' => 10
    ],

    'ocean_links_colors' => [
		'type' => 'ocean-color',
		'label' => esc_html__( 'Link', 'oceanwp' ),
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'wrapper' => 'ocean_links_colors',
        'setting_args' => array(
            'normal' => array(
                'id' => 'ocean_links_color',
                'key' => 'normal',
                'label' => 'Normal',
                'selector' => [
                    'a' => 'color',
                    'a .owp-icon use' => 'stroke'
                ],
                'attr' => [
					'transport' => 'postMessage',
                    'default'   => '#333333',
				],
            ),
            'hover' => array(
                'id' => 'ocean_links_color_hover',
                'key' => 'hover',
                'label' => 'Hover',
                'selector' => [
                    'a:hover' => 'color',
                    'a:hover .owp-icon use' => 'stroke'
                ],
                'attr' => [
					'transport' => 'postMessage',
                    'default'   => '#13aff0',
				],
            )
        )
	],

    'ocean_divider_after_link_color' => [
        'type' => 'ocean-divider',
        'section' => 'ocean_colors',
        'transport' => 'postMessage',
        'priority' => 10,
        'top' => 10,
        'bottom' => 10
    ],

    'ocean_colors_whatnext_links' => [
		'type' => 'ocean-links',
		'label' => 'What to do next?',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
		'class' => 'whatnext',
		'linkIcon' => 'foreign',
		'titleIcon' => 'right-arrow',
		'active_callback' => 'ocean_is_oe_active',
		'links' => [
			'site_background' => [
				'label' => esc_html__('Set site background color or image.', 'oceanwp'),
				'url' => '#'
			],
			'site_Style_settings' => [
				'label' => esc_html__('Customize site style and settings.', 'oceanwp'),
				'url' => '#'
            ],
            'customize_header' => [
				'label' => esc_html__('Customize the header.', 'oceanwp'),
				'url' => '#'
			]
		]
	],

    'ocean_colors_need_help' => [
		'type' => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
		'class' => 'need-help',
		'section' => 'ocean_colors',
		'transport' => 'postMessage',
		'priority' => 10,
	],
];
