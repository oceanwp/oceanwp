<?php
/**
 * OceanWP Customizer Settings: Accessibility - A11Y
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_accessibility_mode' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable Accessibility Mode', 'oceanwp' ),
		'desc'              => esc_html__( 'Accessibility Mode controls all accessibility improvements. All other settings in this panel depend on it. When Accessibility Mode is disabled, those settings may not function as expected. Disable only if you do not want to use any options in this panel.', 'oceanwp' ),
		'section'           => 'ocean_accessibility',
		'default'           => ocean_accessibility_get_default_value(),
		'transport'         => 'refresh',
		'priority'          => 10,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_accessibility_mode_switch' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

	'ocean_accessibility_main_header_tags' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable Main Header Tags', 'oceanwp' ),
		'desc'              => esc_html__( 'Uses improved HTML for the main desktop header and navigation.', 'oceanwp' ),
		'section'           => 'ocean_accessibility',
		'default'           => ocean_accessibility_get_default_value(),
		'transport'         => 'refresh',
		'priority'          => 10,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_main_header_tags' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

	'ocean_accessibility_mobile_header_tags' => [
		'type'              => 'ocean-switch',
		'label'             => esc_html__( 'Enable Mobile Header Tags', 'oceanwp' ),
		'desc'              => esc_html__( 'Uses improved HTML for the Full Screen and Dropdown mobile header types and navigation.', 'oceanwp' ),
		'section'           => 'ocean_accessibility',
		'default'           => ocean_accessibility_get_default_value(),
		'transport'         => 'refresh',
		'priority'          => 10,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_mobile_header_tags' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10,
	],

    'ocean_spacer_for_a11y_search_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	// Search Section
	'ocean_accessibility_search_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Search Forms', 'oceanwp' ),
		'section' => 'ocean_accessibility',
		'after' => 'ocean_spacer_for_a11y_search_section',
		'class' => 'section-a11y',
		'priority' => 10,
		'options' => [
			 'ocean_accessibility_header_search_tags' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Enable Semantic Header Search', 'oceanwp' ),
				'desc'              => esc_html__( 'Uses improved HTML for all theme search forms, including desktop and mobile search.', 'oceanwp' ),
				'section'           => 'ocean_accessibility_search_section',
				'default'           => ocean_accessibility_get_default_value(),
				'transport'         => 'refresh',
				'priority'          => 10,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_display_header_search_form_label' => [
                'type'              => 'ocean-switch',
                'label'             => esc_html__( 'Display Header Search Label', 'oceanwp' ),
                'section'           => 'ocean_accessibility_search_section',
                'default'           => ocean_accessibility_get_default_value(),
                'transport'         => 'refresh',
                'priority'          => 10,
                'hideLabel'         => false,
                'sanitize_callback' => 'oceanwp_sanitize_checkbox'
            ],

			'ocean_custom_header_search_form_label' => [
				'label'             => esc_html__( 'Header Search Form Label', 'oceanwp' ),
				'type'              => 'ocean-text',
				'section'           => 'ocean_accessibility_search_section',
				'transport'         => 'postMessage',
				'default'           => esc_html__( 'Search this website', 'oceanwp' ),
				'priority'          => 10,
				'hideLabel'         => false,
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'active_callback'   => 'ocean_cac_display_search_form_label'
			],

			'ocean_custom_header_search_form_label_size' => [
				'label'     => esc_html__( 'Label Size', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_accessibility_search_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 10,
				'max'          => 30,
				'step'         => 1,
				'active_callback'   => 'ocean_cac_display_search_form_label',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_custom_header_search_form_label_size',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'tablet' => [
						'id' => 'ocean_custom_header_search_form_label_size_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_custom_header_search_form_label_size_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_custom_header_search_form_label_size_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'.header-search-visible-label,.medium-header-search-visible-label,.vertical-header-search-visible-label,.mobile-dropdown-search-visible-label,.mobile-fs-search-visible-label,.oceanwp-mobile-menu-search-visible-label' => ['font-size']
				]
			],

			'ocean_custom_header_search_form_label_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Label Color', 'oceanwp' ),
				'section' => 'ocean_accessibility_search_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'active_callback'    => 'ocean_cac_display_search_form_label',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_custom_header_search_form_label_color',
						'key' => 'normal',
						'label' =>  esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.header-search-visible-label,.medium-header-search-visible-label,.vertical-header-search-visible-label,.mobile-dropdown-search-visible-label,.mobile-fs-search-visible-label,.oceanwp-mobile-menu-search-visible-label' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						]
					],
				]
			],


        ]
    ],

	'ocean_spacer_for_a11y_comment_form_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	// Comment form Section
	'ocean_accessibility_comment_form_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Comment Form', 'oceanwp' ),
		'section' => 'ocean_accessibility',
		'after' => 'ocean_spacer_for_a11y_comment_form_section',
		'class' => 'section-a11y',
		'priority' => 10,
		'options' => [
			'ocean_display_comment_form_label' => [
                'type'              => 'ocean-switch',
                'label'             => esc_html__( 'Display Comment Form Label', 'oceanwp' ),
				'desc'              => esc_html__( 'Replaces the placeholder text in all comment form fields with visible labels above each field.', 'oceanwp' ),
                'section'           => 'ocean_accessibility_comment_form_section',
                'default'           => ocean_accessibility_get_default_value(),
                'transport'         => 'refresh',
                'priority'          => 10,
                'hideLabel'         => false,
                'sanitize_callback' => 'oceanwp_sanitize_checkbox'
            ],

			'ocean_comment_form_label_size' => [
				'label'     => esc_html__( 'Label Size', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_accessibility_comment_form_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 10,
				'max'          => 30,
				'step'         => 1,
				'active_callback'   => 'ocean_cac_display_comment_form_label',
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_comment_form_label_size',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'tablet' => [
						'id' => 'ocean_comment_form_label_size_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_comment_form_label_size_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_comment_form_label_size_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'.comment-form-visible-label' => ['font-size']
				]
			],

			'ocean_comment_form_label_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Label Color', 'oceanwp' ),
				'section' => 'ocean_accessibility_comment_form_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'active_callback'    => 'ocean_cac_display_comment_form_label',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_comment_form_label_color',
						'key' => 'normal',
						'label' =>  esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.comment-form-visible-label' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						]
					],
				]
			],

			'ocean_comment_form_label_required_mark_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Label Required Mark Color', 'oceanwp' ),
				'section' => 'ocean_accessibility_comment_form_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'active_callback'    => 'ocean_cac_display_comment_form_label',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_comment_form_label_required_mark_color',
						'key' => 'normal',
						'label' =>  esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.comment-form-visible-label span' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						]
					],
				]
			],


        ]
    ],

	'ocean_spacer_for_a11y_header_media_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	// Header media Section
	'ocean_a11y_header_media_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Header Media', 'oceanwp' ),
		'section' => 'ocean_accessibility',
		'after' => 'ocean_spacer_for_a11y_header_media_section',
		'class' => 'section-a11y-header-media',
		'priority' => 10,
		'options' => [
			'ocean_accessible_header_video_layout' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Enable Accessible Header Video Layout', 'oceanwp' ),
				'desc'              => esc_html__( 'Displays the uploaded header video in a dedicated media container instead of using it as a header background. This enables visible video controls and improves accessibility. Using a header image as fallback for tablet and mobile is recommended. This option does not apply to the Full Screen header style.', 'oceanwp' ),
				'section'           => 'ocean_a11y_header_media_section',
				'default'           => ocean_accessibility_get_header_media_default_value(),
				'transport'         => 'refresh',
				'priority'          => 10,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_accessible_header_video_position' => [
				'type' => 'ocean-select',
				'label' => esc_html__( 'Header Video Position', 'oceanwp' ),
				'section' => 'ocean_a11y_header_media_section',
				'transport' => 'refresh',
				'default' => 'above_top_bar',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'active_callback' => 'oceanwp_cac_has_topbar',
				'choices' => [
					'above_top_bar' => esc_html__( 'Above Top Bar', 'oceanwp' ),
					'above_header'  => esc_html__( 'Above Header', 'oceanwp' )
				]
			],

			'ocean_accessible_header_video_visibility' => [
				'type' => 'ocean-select',
				'label' => esc_html__( 'Display Header Video On', 'oceanwp' ),
				'section' => 'ocean_a11y_header_media_section',
				'transport' => 'refresh',
				'default' => 'homepage',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'homepage' => esc_html__( 'Homepage Only', 'oceanwp' ),
					'sitewide'  => esc_html__( 'Entire Website', 'oceanwp' )
				]
			],

			'ocean_accessible_header_video_fallback_mobile' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Use Header Image on Tablet/Mobile', 'oceanwp' ),
				'section'           => 'ocean_a11y_header_media_section',
				'default'           => ocean_accessibility_get_header_media_default_value(),
				'transport'         => 'refresh',
				'priority'          => 10,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_accessible_header_media_height' => [
				'label'     => esc_html__( 'Media Height', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_a11y_header_media_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => true,
				'isResponsive' => true,
				'min'          => 10,
				'max'          => 1000,
				'step'         => 1,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_accessible_header_media_height',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 600
						],
					],
					'tablet' => [
						'id' => 'ocean_accessible_header_media_height_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_accessible_header_media_height_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'unit' => [
						'id' => 'ocean_accessible_header_media_height_unit',
						'label' => esc_html__( 'Unit', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default' => 'px',
						],
					],
				],
				'preview' => 'queryWithType',
				'css' => [
					'.custom-header-media.ocean-accessible-header-media' => ['height']
				]
			],

			'ocean_header_video_button_background_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Button Background Color', 'oceanwp' ),
				'section' => 'ocean_a11y_header_media_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'active_callback' => 'oceanwp_cac_header_video_controls',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_header_video_button_background_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
					'hover' => [
						'id' => 'ocean_header_video_button_background_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button:hover' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
					'focus' => [
						'id' => 'ocean_header_video_button_background_color_focus',
						'key' => 'focus',
						'label' => esc_html__( 'Focus', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button:focus' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
				]

			],

			'ocean_header_video_button_icon_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Button Icon Color', 'oceanwp' ),
				'section' => 'ocean_a11y_header_media_section',
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'active_callback' => 'oceanwp_cac_header_video_controls',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_header_video_button_icon_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
					'hover' => [
						'id' => 'ocean_header_video_button_icon_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button:hover' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
					'focus' => [
						'id' => 'ocean_header_video_button_icon_color_focus',
						'key' => 'focus',
						'label' => esc_html__( 'Focus', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button:focus' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
				]

			],

			'ocean_header_video_button_border_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Button Border Color', 'oceanwp' ),
				'section' => 'ocean_a11y_header_media_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'active_callback' => 'oceanwp_cac_header_video_controls',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_header_video_button_border_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button' => 'border-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
					'hover' => [
						'id' => 'ocean_header_video_button_border_color_hover',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button:hover' => 'border-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
					'focus' => [
						'id' => 'ocean_header_video_button_border_color_focus',
						'key' => 'focus',
						'label' => esc_html__( 'Focus', 'oceanwp' ),
						'selector' => [
							'#site-header .custom-header-media.has-video-controls .wp-custom-header-video-button:focus' => 'border-color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '',
						],
					],
				]

			],
		]
	],

	'ocean_spacer_for_main_header_social_menu_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	'ocean_main_header_social_menu_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Main Header Social Menu', 'oceanwp' ),
		'section' => 'ocean_accessibility',
		'after' => 'ocean_spacer_for_main_header_social_menu_section',
		'class' => 'section-a11y-header-social-menu',
		'priority' => 10,
		'options' => [
			'ocean_display_social_external_icon' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Display Social External Link Icon', 'oceanwp' ),
				'desc'              => esc_html__( 'Displays a small visual icon on social menu links that open in a new tab. This option is optional and only affects the icon appearance.', 'oceanwp' ),
				'section'           => 'ocean_main_header_social_menu_section',
				'default'           => false,
				'transport'         => 'refresh',
				'priority'          => 10,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_header_social_external_icon_size' => [
				'label'     => esc_html__( 'Responsive Icon Size (em)', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_main_header_social_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => true,
				'min'          => 0.5,
				'max'          => 1,
				'step'         => 0.05,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_header_social_external_icon_size',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0.72
						],
					],
					'tablet' => [
						'id' => 'ocean_header_social_external_icon_size_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_header_social_external_icon_size_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				],
				'preview' => 'queryWithType',
				'css' => [
					'.header-social-menu-external-mark' => [ 'width', 'height' ],
				]
			],

			'ocean_header_social_external_icon_x_offset' => [
				'label'     => esc_html__( 'Horizontal offset (em)', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_main_header_social_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => -0.6,
				'max'          => 0.6,
				'step'         => 0.05,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_header_social_external_icon_x_offset',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => -0.15
						],
					]
				],
				'preview' => 'queryWithType',
				'css' => [
					'.header-social-menu-external-mark' => [ 'inset-inline-end' ],
				]
			],

			'ocean_header_social_external_icon_y_offset' => [
				'label'     => esc_html__( 'Vertical offset (em)', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_main_header_social_menu_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => -0.6,
				'max'          => 0.6,
				'step'         => 0.05,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_header_social_external_icon_y_offset',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => -0.25
						],
					]
				],
				'preview' => 'queryWithType',
				'css' => [
					'.header-social-menu-external-mark' => [ 'inset-block-start' ],
				]
			],

			'ocean_header_social_external_icon_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Icon Color', 'oceanwp' ),
				'section' => 'ocean_main_header_social_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_header_social_external_icon_color',
						'key' => 'normal',
						'label' =>  esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.header-social-menu-external-mark' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						]
					],
				]
			],

			'ocean_header_social_external_icon_background_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background Color', 'oceanwp' ),
				'section' => 'ocean_main_header_social_menu_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_header_social_external_icon_background_color',
						'key' => 'normal',
						'label' =>  esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.header-social-menu-external-mark' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#000000',
						]
					],
				]
			],

		]
	],

	'ocean_spacer_for_top_bar_social_menu_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_accessibility',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 1,
	],

	'ocean_top_bar_social_menu_external_icon_section' => [
		'type' => 'section',
		'title' => esc_html__( 'Top Bar Social Menu', 'oceanwp' ),
		'section' => 'ocean_accessibility',
		'after' => 'ocean_spacer_for_top_bar_social_menu_section',
		'class' => 'section-a11y-top-bar-social-menu',
		'priority' => 10,
		'options' => [
			'ocean_display_top_bar_social_external_icon' => [
				'type'              => 'ocean-switch',
				'label'             => esc_html__( 'Display Top Bar Social External Link Icon', 'oceanwp' ),
				'desc'              => esc_html__(' Displays a small visual icon on social menu links that open in a new tab. This option is optional and only affects the icon appearance.', 'oceanwp' ),
				'section'           => 'ocean_top_bar_social_menu_external_icon_section',
				'default'           => false,
				'transport'         => 'refresh',
				'priority'          => 10,
				'sanitize_callback' => 'oceanwp_sanitize_checkbox',
			],

			'ocean_top_bar_social_external_icon_size' => [
				'label'     => esc_html__( 'Responsive Icon Size (em)', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_top_bar_social_menu_external_icon_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => true,
				'min'          => 0.5,
				'max'          => 1,
				'step'         => 0.05,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_top_bar_social_external_icon_size',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => 0.72
						],
					],
					'tablet' => [
						'id' => 'ocean_top_bar_social_external_icon_size_tablet',
						'label' => esc_html__( 'Tablet', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					],
					'mobile' => [
						'id' => 'ocean_top_bar_social_external_icon_size_mobile',
						'label' => esc_html__( 'Mobile', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				],
				'preview' => 'queryWithType',
				'css' => [
					'.top-bar-social-menu-external-mark' => [ 'width', 'height' ],
				]
			],

			'ocean_top_bar_social_external_icon_x_offset' => [
				'label'     => esc_html__( 'Horizontal offset (em)', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_top_bar_social_menu_external_icon_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => -0.6,
				'max'          => 0.6,
				'step'         => 0.05,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_top_bar_social_external_icon_x_offset',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => -0.15
						],
					]
				],
				'preview' => 'queryWithType',
				'css' => [
					'.top-bar-social-menu-external-mark' => [ 'inset-inline-end' ],
				]
			],

			'ocean_top_bar_social_external_icon_y_offset' => [
				'label'     => esc_html__( 'Vertical offset (em)', 'oceanwp' ),
				'type'      => 'ocean-range-slider',
				'section'   => 'ocean_top_bar_social_menu_external_icon_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'hideLabel'    => false,
				'isUnit'       => false,
				'isResponsive' => false,
				'min'          => -0.6,
				'max'          => 0.6,
				'step'         => 0.05,
				'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				'setting_args' => [
					'desktop' => [
						'id' => 'ocean_top_bar_social_external_icon_y_offset',
						'label' => esc_html__( 'Desktop', 'oceanwp' ),
						'attr' => [
							'transport' => 'postMessage',
							'default'   => -0.25
						],
					]
				],
				'preview' => 'queryWithType',
				'css' => [
					'.top-bar-social-menu-external-mark' => [ 'inset-block-start' ],
				]
			],

			'ocean_top_bar_social_external_icon_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Icon Color', 'oceanwp' ),
				'section' => 'ocean_top_bar_social_menu_external_icon_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_top_bar_social_external_icon_color',
						'key' => 'normal',
						'label' =>  esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.top-bar-social-menu-external-mark' => 'color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#ffffff',
						]
					],
				]
			],

			'ocean_top_bar_social_external_icon_background_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Background Color', 'oceanwp' ),
				'section' => 'ocean_top_bar_social_menu_external_icon_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_top_bar_social_external_icon_background_color',
						'key' => 'normal',
						'label' =>  esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.top-bar-social-menu-external-mark' => 'background-color',
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#000000',
						]
					],
				]
			],

		]
	]

];
