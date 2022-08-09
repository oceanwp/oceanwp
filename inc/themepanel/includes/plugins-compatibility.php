<?php

function oceanwp_plugins_compatibility() {
	return apply_filters(
		'oceanwp_plugins_compatibility_list',
		array(
			// Free plugins
			'ocean-modal-window'      => '2.0.5',
			'ocean-custom-sidebar'    => '1.0.9',
			'ocean-posts-slider'      => '',
			'ocean-stick-anything'    => '2.0.4',
			'ocean-social-sharing'    => '2.0.2',
			'ocean-product-sharing'   => '2.0.3',
			'ocean-extra'             => '2.0.0',

			// PRO Plugins
			'ocean-cookie-notice'     => '2.0.4',
			'ocean-elementor-widgets' => '2.2.1',
			'ocean-footer-callout'    => '2.0.2',
			'ocean-full-screen'       => '',
			'ocean-gutenberg-blocks'  => '1.1.1',
			'ocean-hooks'             => '',
			'ocean-instagram'         => '',
			'ocean-popup-login'       => '2.1.1',
			'ocean-portfolio'         => '2.0.7',
			'ocean-pro-demos'         => '1.3.1',
			'ocean-side-panel'        => '2.0.4',
			'ocean-sticky-footer'     => '2.0.3',
			'ocean-sticky-header'     => '2.0.4',
			'ocean-white-label'       => '2.0.0',
			'ocean-woo-popup'         => '2.0.2',

			// 3rd-party Plugins
			'elementor'               => '',
			'wpforms-lite'            => '',
			'leadin'                  => '',
		)
	);
}


function oceanwp_plugins_new_features() {
	return apply_filters(
		'oceanwp_plugins_new_features_list',
		array(
			// Free plugins
			'ocean-modal-window'      => esc_html__( '+ many, many more options and benefits.', 'oceanwp' ),
			'ocean-custom-sidebar'    => '',
			'ocean-posts-slider'      => '',
			'ocean-stick-anything'    => '',
			'ocean-product-sharing'   => '',
			'ocean-social-sharing'    => '',
			'ocean-extra'             => '',

			// PRO Plugins
			'ocean-cookie-notice'     => '',
			'ocean-elementor-widgets' => '',
			'ocean-footer-callout'    => '',
			'ocean-full-screen'       => '',
			'ocean-gutenberg-blocks'  => '',
			'ocean-hooks'             => '',
			'ocean-instagram'         => '',
			'ocean-popup-login'       => '',
			'ocean-portfolio'         => '',
			'ocean-pro-demos'         => '',
			'ocean-side-panel'        => '',
			'ocean-sticky-footer'     => '',
			'ocean-sticky-header'     => '',
			'ocean-white-label'       => '',
			'ocean-woo-popup'         => '',

			// 3rd-party Plugins
			'elementor'               => '',
			'wpforms-lite'            => '',
			'leadin'                  => '',
		)
	);
}


function oceanwp_usefull_plugins() {
	return apply_filters(
		'oceanwp_usefull_plugins_list',
		array(
			'ocean-extra'  => array(
				'name'              => esc_html__( 'Ocean Extra', 'oceanwp' ),
				'short_description' => esc_html__( 'Unlock the power of OceanWP. Install demos, create custom templates, customize each page or post, add WordPress widgets and more.', 'oceanwp' ),
			),
			'elementor'    => array(
				'name'              => esc_html__( 'Elementor', 'oceanwp' ),
				'short_description' => esc_html__( 'Advanced drag & drop page builder for pixel perfect editing and mobile responsiveness design. Best friend with Ocean WordPress templates.', 'oceanwp' ),
			),
			'wpforms-lite' => array(
				'name'              => esc_html__( 'WPForms Contact Form', 'oceanwp' ),
				'short_description' => esc_html__( 'Lite drag & drop contact form builder. Makes easy for your visitors to get in touch with you directly through your website.', 'oceanwp' ),
			),
			'leadin'       => array(
				'name'              => esc_html__( 'HubSpot CRM', 'oceanwp' ),
				'short_description' => esc_html__( 'Organize, capture, engage and grow your contact list with forms, live website chat with auto-replies and more.', 'oceanwp' ),
			),
			'weglot'       => array(
				'name'              => esc_html__( 'Weglot', 'oceanwp' ),
				'short_description' => esc_html__( 'Weglot is a translation plugin that helps online business grow by turning their websites multilingual in a matter of minutes.', 'oceanwp' ),
				'image_url'         => esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/plugin-icons/weglot.svg' ),
			),
		)
	);
}

function oceanwp_pro_plugins() {
	return apply_filters(
		'oceanwp_pro_plugins_list',
		array(
			'ocean-cookie-notice'     => array(
				'name' => esc_html__( 'Ocean Cookie Notice', 'oceanwp' ),
			),
			'ocean-elementor-widgets' => array(
				'name' => esc_html__( 'Ocean Elementor Widgets', 'oceanwp' ),
			),
			'ocean-footer-callout'    => array(
				'name' => esc_html__( 'Ocean Footer Callout', 'oceanwp' ),
			),
			'ocean-gutenberg-blocks'  => array(
				'name' => esc_html__( 'Ocean Gutenberg Blocks', 'oceanwp' ),
			),
			'ocean-hooks'             => array(
				'name' => esc_html__( 'Ocean Hooks', 'oceanwp' ),
			),
			'ocean-instagram'         => array(
				'name' => esc_html__( 'Ocean Instagram', 'oceanwp' ),
			),
			'ocean-popup-login'       => array(
				'name' => esc_html__( 'Ocean Popup Login', 'oceanwp' ),
			),
			'ocean-portfolio'         => array(
				'name' => esc_html__( 'Ocean Portfolio', 'oceanwp' ),
			),
			'ocean-pro-demos'         => array(
				'name' => esc_html__( 'Ocean Pro Demos', 'oceanwp' ),
			),
			'ocean-side-panel'        => array(
				'name' => esc_html__( 'Ocean Side Panel', 'oceanwp' ),
			),
			'ocean-sticky-footer'     => array(
				'name' => esc_html__( 'Ocean Sticky Footer', 'oceanwp' ),
			),
			'ocean-sticky-header'     => array(
				'name' => esc_html__( 'Ocean Sticky Header', 'oceanwp' ),
			),
			'ocean-white-label'       => array(
				'name' => esc_html__( 'Ocean White Label', 'oceanwp' ),
			),
			'ocean-woo-popup'         => array(
				'name' => esc_html__( 'Ocean Woo Popup', 'oceanwp' ),
			),
		)
	);
}

function oceanwp_sidebar_plugins() {
	return apply_filters(
		'oceanwp_sidebar_plugins_list',
		array(
			'ocean-elementor-widgets',
			'ocean-gutenberg-blocks',
			'ocean-white-label',
		)
	);
}

function oceanwp_recommended_plugins() {
	return apply_filters(
		'oceanwp_recommended_plugins_list',
		array(
			'ocean-extra'           => array(
				'name'              => esc_html__( 'Ocean Extra', 'oceanwp' ),
				'short_description' => esc_html__( 'Unlock the power of OceanWP. Install demos, create custom templates, customize each page or post, add WordPress widgets and more.', 'oceanwp' ),
			),
			'ocean-modal-window'    => array(
				'name'              => esc_html__( 'Modal Window', 'oceanwp' ),
				'short_description' => esc_html__( 'Display any content, like contact or subscription forms, in a modal window - popup on button-click.', 'oceanwp' ),
			),
			'ocean-custom-sidebar'  => array(
				'name'              => esc_html__( 'Custom Sidebar', 'oceanwp' ),
				'short_description' => esc_html__( 'Create endless number of WordPress sidebars with a unique widget combination for each.', 'oceanwp' ),
			),
			'ocean-posts-slider'    => array(
				'name'              => esc_html__( 'Posts Slider', 'oceanwp' ),
				'short_description' => esc_html__( 'Simple slider to display your blog posts wherever you want on your website.', 'oceanwp' ),
			),
			'ocean-stick-anything'  => array(
				'name'              => esc_html__( 'Stick Anything', 'oceanwp' ),
				'short_description' => esc_html__( 'Stick widget areas, widgets, boxes, menu or any other content on your website.', 'oceanwp' ),
			),
			'ocean-social-sharing'  => array(
				'name'              => esc_html__( 'Social Sharing', 'oceanwp' ),
				'short_description' => esc_html__( 'Display social media sharing options on your blog posts. Choose options, choose styling and write.', 'oceanwp' ),
			),
			'ocean-product-sharing' => array(
				'name'              => esc_html__( 'Product Sharing', 'oceanwp' ),
				'short_description' => esc_html__( 'Let customers express the love for your products. Add social media sharing options for products.', 'oceanwp' ),
				// 'hide_desc' => false,
			),
		)
	);
}
