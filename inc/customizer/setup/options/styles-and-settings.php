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

    'ocean_styles_settings_top_quick_links' => [
		'type' => 'ocean-links',
		'label' => 'Quick Menu',
		'section' => 'ocean_styles_and_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'class' => 'top-quick-links',
		'linkIcon' => 'select',
		'titleIcon' => 'meatball-menu',
		'active_callback' => 'ocean_is_oe_active',
		'links' => [
			'website_layout' => [
				'label' => esc_html__('Website Layout', 'oceanwp'),
				'url' => '#'
			],
			'scroll_top' => [
				'label' => esc_html__('Scroll To Top', 'oceanwp'),
				'url' => '#'
            ],
            'pagination' => [
				'label' => esc_html__('Pagination', 'oceanwp'),
				'url' => '#'
			]
		]
	],

    'ocean_divider_after_styles_settings_top_quick_links' => [
        'type' => 'ocean-divider',
        'section' => 'ocean_styles_and_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'top' => 10,
        'bottom' => 10
    ],

    'ocean_site_layout_section' => [
		'type' => 'section',
		'title' => esc_html__('Site Layout', 'oceanwp'),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_divider_after_styles_settings_top_quick_links',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
            'ocean_main_layout_style' => [
                'type' => 'ocean-select',
                'label' => esc_html__('site layout', 'oceanwp' ),
                'section' => 'ocean_site_layout_section',
                'transport' => 'refresh',
                'default' => 'wide',
                'priority' => 10,
                'hideLabel' => false,
                'wrapper' => 'ocean_main_layout_style',
                'multiple' => false,
                'choices' => [
                    'wide' => esc_html__( 'Wide', 'oceanwp' ),
                    'boxed' => esc_html__( 'Boxed', 'oceanwp' ),
                    'separate' => esc_html__( 'Separate', 'oceanwp' ),
                ],
            ],

            'ocean_title_for_content_settings' => [
                'type' => 'ocean-title',
                'label' => esc_html__( 'Content Settings', 'oceanwp' ),
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
            ],

            'ocean_main_container_width' => [
                'label'    => esc_html__( 'Main Container Width', 'oceanwp' ),
                'type'     => 'ocean-range-slider',
                'section'  => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel'    => false,
                'wrapper'      => 'ocean_main_container_width',
                'isUnit'       => true,
                'isResponsive' => false,
                'min'          => 1,
                'max'          => 4096,
                'step'         => 1,
                'setting_args' => [
                    'desktop' => [
                        'id' => 'ocean_main_container_width',
                        'label' => 'Desktop',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'unit' => [
                        'id' => 'ocean_main_container_width_unit',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_main_container_width' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_layout_content_settings' => [
                'type' => 'section',
                'title' => esc_html__('Additional Content Settings', 'oceanwp'),
                'section' => 'ocean_site_layout_section',
                'after' => 'ocean_divider_after_main_container_width',
                'class' => 'section-site-layout',
                'priority' => 10,
                'options' => [
                    'ocean_desc_for_layout_content_settings' => [
                        'type' => 'ocean-content',
                        'isContent' => esc_html__('If any, additional content settings will appear here based on your Site Layout selection. For now, additional content settings are available for the Separate Site Layout style.', 'oceanwp'),
                        'section' => 'ocean_site_layout_content_settings',
                        'class' => 'description',
                        'transport' => 'postMessage',
                        'priority' => 10,
                    ],

                    'ocean_separate_content_padding' => [
                        'label'       => esc_html__( 'Content Padding', 'oceanwp' ),
						'description' => esc_html__( 'Add a custom content padding. px - em - %.', 'oceanwp' ),
                        'type'     => 'ocean-range-slider',
                        'section'  => 'ocean_site_layout_content_settings',
                        'transport' => 'postMessage',
                        'priority' => 10,
                        'hideLabel'    => false,
                        'wrapper'      => 'ocean_separate_content_padding',
                        'isUnit'       => true,
                        'isResponsive' => false,
                        'min'          => 1,
                        'max'          => 1000,
                        'step'         => 1,
                        'setting_args' => [
                            'desktop' => [
                                'id' => 'ocean_separate_content_padding',
                                'label' => 'Desktop',
                                'attr' => [
                                    'transport' => 'postMessage',
                                    'default' => 30
                                ],
                            ],
                            'unit' => [
                                'id' => 'ocean_separate_content_padding_unit',
                                'label' => 'Unit',
                                'attr' => [
                                    'transport' => 'postMessage',
                                    'default' => 'px'
                                ],
                            ],
                        ],
                    ],

                    'ocean_separate_widgets_padding' => [
                        'label'       => esc_html__( 'Content Padding', 'oceanwp' ),
                        'description' => esc_html__( 'Add a custom content padding. px - em - %.', 'oceanwp' ),
                        'type'     => 'ocean-range-slider',
                        'section'  => 'ocean_site_layout_content_settings',
                        'transport' => 'postMessage',
                        'priority' => 10,
                        'hideLabel'    => false,
                        'wrapper'      => 'ocean_separate_widgets_padding',
                        'isUnit'       => true,
                        'isResponsive' => false,
                        'min'          => 1,
                        'max'          => 1000,
                        'step'         => 1,
                        'setting_args' => [
                            'desktop' => [
                                'id' => 'ocean_separate_widgets_padding',
                                'label' => 'Desktop',
                                'attr' => [
                                    'transport' => 'postMessage',
                                    'default' => 30
                                ],
                            ],
                            'unit' => [
                                'id' => 'ocean_separate_widgets_padding_unit',
                                'label' => 'Unit',
                                'attr' => [
                                    'transport' => 'postMessage',
                                    'default' => 'px'
                                ],
                            ],
                        ]
                    ],
                ]
            ],

            'ocean_title_for_site_background' => [
                'type' => 'ocean-title',
                'label' => esc_html__( 'Site Background', 'oceanwp' ),
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
            ],

            'ocean_site_bg_color' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Color', 'oceanwp' ),
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_site_bg_color',
                'setting_args' => [
                    'normal' => [
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
                    ],
                ]
            ],

            'ocean_background_image' => [
                'label' => esc_html__( 'Image', 'oceanwp' ),
                'type' => 'ocean-image',
                'section'  => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'wrapper' => 'ocean_background_image',
                'mediaType' => 'image'
            ],

            'ocean_divider_after_site_bg' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_background_settings' => [
                'type' => 'section',
                'title' => esc_html__('Site Background Options', 'oceanwp'),
                'section' => 'ocean_site_layout_section',
                'after' => 'ocean_divider_after_site_bg',
                'class' => 'section-site-layout',
                'priority' => 10,
                'options' => [
                    'ocean_desc_for_site_background_settings' => [
                        'type' => 'ocean-content',
                        'isContent' => esc_html__('If any, additional site background style options will appear based on your Site Layout selection. For now, additional site background options are available for the Boxed and Separate Site Layout styles.', 'oceanwp'),
                        'section' => 'ocean_site_background_settings',
                        'class' => 'description',
                        'transport' => 'postMessage',
                        'priority' => 10,
                    ],

                    'ocean_boxed_dropdshadow' => [
                        'type' => 'ocean-switch',
                        'label' => esc_html__('Boxed layout shadow drop', 'oceanwp'),
                        'section' => 'ocean_site_background_settings',
                        'default'  => true,
                        'transport' => 'postMessage',
                        'priority' => 10,
                        'hideLabel' => false,
                        'active_callback' => 'ocean_is_boxed_layout',
                    ],

                    'ocean_boxed_outside_bg_color' => [
                        'type' => 'ocean-color',
                        'label' => esc_html__( 'Outside Background', 'oceanwp' ),
                        'section' => 'ocean_site_background_settings',
                        'transport' => 'postMessage',
                        'priority' => 10,
                        'hideLabel' => false,
                        'showAlpha' => true,
                        'showPalette' => true,
                        'wrapper' => 'ocean_boxed_outside_bg_color',
                        'active_callback' => 'ocean_is_layout_boxed_separate',
                        'setting_args' => [
                            'normal' => [
                                'id' => 'ocean_boxed_outside_bg',
                                'key' => 'normal',
                                'label' => 'Select Color',
                                'selector' => [
                                    '.boxed-layout' => 'background-color'
                                ],
                                'attr' => [
                                    'transport' => 'postMessage',
                                    'default'   => '#e9e9e9',
                                ],
                            ],
                        ]
                    ],

                    'ocean_boxed_inner_bg_color' => [
                        'type' => 'ocean-color',
                        'label' => esc_html__( 'Outside Background', 'oceanwp' ),
                        'section' => 'ocean_site_background_settings',
                        'transport' => 'postMessage',
                        'priority' => 10,
                        'hideLabel' => false,
                        'showAlpha' => true,
                        'showPalette' => true,
                        'wrapper' => 'ocean_boxed_inner_bg_color',
                        'active_callback' => 'ocean_is_layout_boxed_separate',
                        'setting_args' => [
                            'normal' => [
                                'id' => 'ocean_boxed_inner_bg',
                                'key' => 'normal',
                                'label' => 'Select Color',
                                'selector' => [
                                    '.boxed-layout #wrap, .separate-layout .content-area, .separate-layout .widget-area .sidebar-box, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner, .has-parallax-footer:not(.separate-layout) #main' => 'background-color'
                                ],
                                'attr' => [
                                    'transport' => 'postMessage',
                                    'default'   => '#e9e9e9',
                                ],
                            ],
                        ]
                    ],
                ]
            ],

            'ocean_divider_after_site_background_settings' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_bg_whatnext_links' => [
                'type' => 'ocean-links',
                'label' => 'What to do next?',
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'class' => 'whatnext',
                'linkIcon' => 'foreign',
                'titleIcon' => 'right-arrow',
                'active_callback' => 'ocean_is_oe_active',
                'links' => [
                    'style_page_layout' => [
                        'label' => esc_html__('Style pages layout.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_site_buttons' => [
                        'label' => esc_html__('Style site buttons.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_site_forms' => [
                        'label' => esc_html__('Style site forms.', 'oceanwp'),
                        'url' => '#'
                    ]
                ]
            ],

            'ocean_site_bg_need_help' => [
                'type' => 'ocean-content',
                'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
                'class' => 'need-help',
                'section' => 'ocean_site_layout_section',
                'transport' => 'postMessage',
                'priority' => 10,
            ],
        ]
    ],

    'ocean_spacer_after_site_layout_section' => [
        'type' => 'ocean-spacer',
        'section' => 'ocean_styles_and_settings',
        'transport' => 'postMessage',
        'priority' => 10,
    ],

    'ocean_site_icon_section' => [
		'type' => 'section',
		'title' => esc_html__('Site Icons', 'oceanwp'),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_spacer_after_site_layout_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
            'ocean_theme_default_icons' => [
                'type' => 'ocean-select',
                'label' => esc_html__('Site Icons', 'oceanwp' ),
                'desc' => esc_html__('Choose icons you would like to use in the theme.', 'oceanwp' ),
                'section' => 'ocean_site_icon_section',
                'transport' => 'refresh',
                'default' => 'sili',
                'priority' => 10,
                'hideLabel' => false,
                'wrapper' => 'ocean_theme_default_icons',
                'multiple' => false,
                'choices'     => [
                    'svg'  => esc_html__( 'Ocean SVG Icons', 'oceanwp' ),
                    'sili' => esc_html__( 'Simple Line Icons', 'oceanwp' ),
                    'fai'  => esc_html__( 'Font Awesome Icons', 'oceanwp' ),
                ],
            ],

            'ocean_divider_after_default_icons' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_icon_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 5,
                'bottom' => 1
            ],

            'ocean_site_disable_unused_icon_links' => [
                'type' => 'ocean-links',
                'label' => esc_html__('Disable Unused Icons', 'oceanwp' ),
                'section' => 'ocean_site_icon_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'class' => 'common',
                'linkIcon' => 'links',
                'titleIcon' => 'right-arrow',
                'hideLabel' => false,
                'links' => [
                    'disable_icons' => [
                        'label' => esc_html__('Disable unused icon from loading.', 'oceanwp'),
                        'url' => esc_url( '#' ),
                    ]
                ]
            ],

            'ocean_divider_after_disable_unused_icon_links' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_icon_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_icons_whatnext_links' => [
                'type' => 'ocean-links',
                'label' => esc_html__('What to do next?', 'oceanwp' ),
                'section' => 'ocean_site_icon_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'class' => 'whatnext',
                'linkIcon' => 'foreign',
                'titleIcon' => 'right-arrow',
                'active_callback' => 'ocean_is_oe_active',
                'links' => [
                    'style_site_buttons' => [
                        'label' => esc_html__('Style site buttons.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_site_froms' => [
                        'label' => esc_html__('Style site forms.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_scroll_top' => [
                        'label' => esc_html__('Style the Scroll To Top button.', 'oceanwp'),
                        'url' => '#'
                    ]
                ]
            ],

            'ocean_site_icons_need_help' => [
                'type' => 'ocean-content',
                'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
                'class' => 'need-help',
                'section' => 'ocean_site_icon_section',
                'transport' => 'postMessage',
                'priority' => 10,
            ],
        ]
    ],

    'ocean_spacer_after_site_icons_section' => [
        'type' => 'ocean-spacer',
        'section' => 'ocean_styles_and_settings',
        'transport' => 'postMessage',
        'priority' => 10,
    ],

    'ocean_site_button_section' => [
		'type' => 'section',
		'title' => esc_html__('Site Buttons', 'oceanwp'),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_spacer_after_site_icons_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
            'ocean_theme_button_padding_dimensions' => [
                'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
                'type'     => 'ocean-spacing',
                'section'  => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel'    => false,
                'isType'       => 'padding',
                'wrapper'      => 'ocean_theme_button_padding_dimensions',
                'setting_args' => [
                    'spacingTop' => [
                        'id' => 'ocean_theme_button_top_padding',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 14,
                        ],
                    ],
                    'spacingRight' => [
                        'id' => 'ocean_theme_button_right_padding',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 20,
                        ],
                    ],
                    'spacingBottom' => [
                        'id' => 'ocean_theme_button_bottom_padding',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 14,
                        ],
                    ],
                    'spacingLeft' => [
                        'id' => 'ocean_theme_button_left_padding',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 20,
                        ],
                    ],
                    'spacingTopTablet' => [
                        'id' => 'ocean_theme_button_tablet_top_padding',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightTablet' => [
                        'id' => 'ocean_theme_button_tablet_right_padding',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomTablet' => [
                        'id' => 'ocean_theme_button_tablet_bottom_padding',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftTablet' => [
                        'id' => 'ocean_theme_button_tablet_left_padding',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingTopMobile' => [
                        'id' => 'ocean_theme_button_mobile_top_padding',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightMobile' => [
                        'id' => 'ocean_theme_button_mobile_right_padding',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomMobile' => [
                        'id' => 'ocean_theme_button_mobile_bottom_padding',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftMobile' => [
                        'id' => 'ocean_theme_button_mobile_left_padding',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_button_padding' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_theme_button_border_radius_settings' => [
                'label'    => esc_html__( 'Radius (px)', 'oceanwp' ),
                'type'     => 'ocean-spacing',
                'section'  => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel'    => false,
                'isType'       => 'radius',
                'wrapper'      => 'ocean_theme_button_border_radius_settings',
                'setting_args' => [
                    'spacingTop' => [
                        'id' => 'ocean_theme_button_top_radius',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 0,
                        ],
                    ],
                    'spacingRight' => [
                        'id' => 'ocean_theme_button_right_radius',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 0,
                        ],
                    ],
                    'spacingBottom' => [
                        'id' => 'ocean_theme_button_bottom_radius',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 0,
                        ],
                    ],
                    'spacingLeft' => [
                        'id' => 'ocean_theme_button_left_radius',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 0,
                        ],
                    ],
                    'spacingTopTablet' => [
                        'id' => 'ocean_theme_button_tablet_top_radius',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightTablet' => [
                        'id' => 'ocean_theme_button_tablet_right_radius',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomTablet' => [
                        'id' => 'ocean_theme_button_tablet_bottom_radius',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftTablet' => [
                        'id' => 'ocean_theme_button_tablet_left_radius',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingTopMobile' => [
                        'id' => 'ocean_theme_button_mobile_top_radius',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightMobile' => [
                        'id' => 'ocean_theme_button_mobile_right_radius',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomMobile' => [
                        'id' => 'ocean_theme_button_mobile_bottom_radius',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftMobile' => [
                        'id' => 'ocean_theme_button_mobile_left_radius',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_button_radius' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_theme_button_border_type' => [
                'type' => 'ocean-select',
                'label' => esc_html__('Border Type', 'oceanwp' ),
                'section' => 'ocean_site_button_section',
                'default' => 'solid',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'wrapper' => 'ocean_theme_button_border_type',
                'multiple' => false,
                'choices' => [
                    'dotted' => esc_html__( 'Dotted', 'oceanwp' ),
                    'dashed' => esc_html__( 'Dashed', 'oceanwp' ),
                    'solid' => esc_html__( 'Solid', 'oceanwp' ),
                    'double' => esc_html__( 'Double', 'oceanwp' ),
                    'groove' => esc_html__( 'Groove', 'oceanwp' ),
                    'ridge' => esc_html__( 'Ridge', 'oceanwp' ),
                    'inset' => esc_html__( 'Inset', 'oceanwp' ),
                    'outset' => esc_html__( 'Outset', 'oceanwp' ),
                    'none' => esc_html__( 'None', 'oceanwp' ),
                    'hidden' => esc_html__( 'Hidden', 'oceanwp' )
                ],
            ],

            'ocean_theme_button_border_width_setting' => [
                'label'    => esc_html__( 'Border Width', 'oceanwp' ),
                'type'     => 'ocean-range-slider',
                'section'  => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel'    => false,
                'wrapper'      => 'ocean_theme_button_border_width_setting',
                'isUnit'       => true,
                'isResponsive' => true,
                'min'          => 1,
                'max'          => 20,
                'step'         => 1,
                'setting_args' => [
                    'desktop' => [
                        'id' => 'ocean_theme_button_border_width',
                        'label' => esc_html__( 'Desktop', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default' => 1,
                        ],
                    ],
                    'tablet' => [
                        'id' => 'ocean_theme_button_border_width_tablet',
                        'label' => esc_html__( 'Tablet', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'mobile' => [
                        'id' => 'ocean_theme_button_border_width_mobile',
                        'label' => esc_html__( 'Mobile', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'unit' => [
                        'id' => 'ocean_theme_button_border_width_unit',
                        'label' => esc_html__( 'Unit', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default' => 'px',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_button_border_width' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_theme_button_typography' => [
                'id' => 'ocean_theme_button_typography',
                'type' => 'ocean-typography',
                'label' => esc_html__('Typography', 'oceanwp'),
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'selector' => 'input[type="button"], input[type="reset"], input[type="submit"], button[type="submit"], .button, #site-navigation-wrap .dropdown-menu >li.btn >a >span, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button',
                'setting_args' => [
                    'fontFamily' => [
                        'id' => 'button_typography[font-family]',
                        'label' => 'Font Family',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeight' => [
                        'id' => 'button_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightTablet' => [
                        'id' => 'button_tablet_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightMobile' => [
                        'id' => 'button_mobile_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSubset' => [
                        'id' => 'button_typography[font-subset]',
                        'label' => 'Font Subset',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSize' => [
                        'id' => 'button_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeTablet' => [
                        'id' => 'button_tablet_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeMobile' => [
                        'id' => 'button_mobile_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeUnit' => [
                        'id' => 'button_typography[font-size-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacing' => [
                        'id' => 'button_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingTablet' => [
                        'id' => 'button_tablet_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingMobile' => [
                        'id' => 'button_mobile_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingUnit' => [
                        'id' => 'button_typography[letter-spacing-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 'px'
                        ],
                    ],
                    'lineHeight' => [
                        'id' => 'button_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightTablet' => [
                        'id' => 'button_tablet_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightMobile' => [
                        'id' => 'button_mobile_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightUnit' => [
                        'id' => 'button_typography[line-height-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransform' => [
                        'id' => 'button_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformTablet' => [
                        'id' => 'button_tablet_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformMobile' => [
                        'id' => 'button_mobile_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textDecoration' => [
                        'id' => 'button_typography[text-decoration]',
                        'label' => 'Text Decoration',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_site_button_typography' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 1,
                'bottom' => 10
            ],

            'ocean_theme_button_bg_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Background', 'oceanwp' ),
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_theme_button_bg_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_theme_button_bg',
                        'key' => 'normal',
                        'label' => 'Normal',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => '#13aff0'
                        ],
                    ],
                    'hover' => [
                        'id' => 'ocean_theme_button_hover_bg',
                        'key' => 'hover',
                        'label' => esc_html__( 'Hover', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => '#0b7cac'
                        ],
                    ],
                ]
            ],

            'ocean_theme_button_text_color_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Text', 'oceanwp' ),
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_theme_button_text_color_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_theme_button_color',
                        'key' => 'normal',
                        'label' => esc_html__( 'Normal', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => '#ffffff'
                        ],
                    ],
                    'hover' => [
                        'id' => 'ocean_theme_button_hover_color',
                        'key' => 'hover',
                        'label' => esc_html__( 'Hover', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => '#ffffff'
                        ],
                    ],
                ]
            ],

            'ocean_theme_button_border_color_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Border', 'oceanwp' ),
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_theme_button_border_color_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_theme_button_border_color',
                        'key' => 'normal',
                        'label' => esc_html__( 'Normal', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'hover' => [
                        'id' => 'ocean_theme_button_border_hover_color',
                        'key' => 'hover',
                        'label' => esc_html__( 'Hover', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_button_colors' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_button_whatnext_links' => [
                'type' => 'ocean-links',
                'label' => esc_html__('What to do next?', 'oceanwp' ),
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'class' => 'whatnext',
                'linkIcon' => 'foreign',
                'titleIcon' => 'right-arrow',
                'active_callback' => 'ocean_is_oe_active',
                'links' => [
                    'style_scroll_top' => [
                        'label' => esc_html__('Style the Scroll to Top button.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_site_froms' => [
                        'label' => esc_html__('Style site forms.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_pagination' => [
                        'label' => esc_html__('Style Site Pagination.', 'oceanwp'),
                        'url' => '#'
                    ]
                ]
            ],

            'ocean_site_button_need_help' => [
                'type' => 'ocean-content',
                'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
                'class' => 'need-help',
                'section' => 'ocean_site_button_section',
                'transport' => 'postMessage',
                'priority' => 10,
            ],
        ]
    ],

    'ocean_spacer_after_site_button_section' => [
        'type' => 'ocean-spacer',
        'section' => 'ocean_styles_and_settings',
        'transport' => 'postMessage',
        'priority' => 10,
    ],

    'ocean_site_forms_section' => [
		'type' => 'section',
		'title' => esc_html__('Site Forms', 'oceanwp'),
		'section' => 'ocean_styles_and_settings',
		'after' => 'ocean_spacer_after_site_button_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
            'ocean_input_padding_dimensions' => [
                'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
                'type'     => 'ocean-spacing',
                'section'  => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel'    => false,
                'isType'       => 'padding',
                'wrapper'      => 'ocean_input_padding_dimensions',
                'setting_args' => [
                    'spacingTop' => [
                        'id' => 'ocean_input_top_padding',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 6,
                        ],
                    ],
                    'spacingRight' => [
                        'id' => 'ocean_input_right_padding',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 12,
                        ],
                    ],
                    'spacingBottom' => [
                        'id' => 'ocean_input_bottom_padding',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 6,
                        ],
                    ],
                    'spacingLeft' => [
                        'id' => 'ocean_input_left_padding',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 12,
                        ],
                    ],
                    'spacingTopTablet' => [
                        'id' => 'ocean_input_tablet_top_padding',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightTablet' => [
                        'id' => 'ocean_input_tablet_right_padding',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomTablet' => [
                        'id' => 'ocean_input_tablet_bottom_padding',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftTablet' => [
                        'id' => 'ocean_input_tablet_left_padding',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingTopMobile' => [
                        'id' => 'ocean_input_mobile_top_padding',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightMobile' => [
                        'id' => 'ocean_input_mobile_right_padding',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomMobile' => [
                        'id' => 'ocean_input_mobile_bottom_padding',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftMobile' => [
                        'id' => 'ocean_input_mobile_left_padding',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_site_forms_padding' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_input_border_radius_wrap' => [
                'label'    => esc_html__( 'Radius (px)', 'oceanwp' ),
                'type'     => 'ocean-spacing',
                'section'  => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel'    => false,
                'isType'       => 'radius',
                'wrapper'      => 'ocean_input_border_radius_wrap',
                'setting_args' => [
                    'spacingTop' => [
                        'id' => 'ocean_input_border_top_radius',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingRight' => [
                        'id' => 'ocean_input_border_right_radius',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingBottom' => [
                        'id' => 'ocean_input_border_bottom_radius',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingLeft' => [
                        'id' => 'ocean_input_border_left_radius',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingTopTablet' => [
                        'id' => 'ocean_input_border_tablet_top_radius',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightTablet' => [
                        'id' => 'ocean_input_border_tablet_right_radius',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomTablet' => [
                        'id' => 'ocean_input_border_tablet_bottom_radius',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftTablet' => [
                        'id' => 'ocean_input_border_tablet_left_radius',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingTopMobile' => [
                        'id' => 'ocean_input_border_mobile_top_radius',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightMobile' => [
                        'id' => 'ocean_input_border_mobile_right_radius',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomMobile' => [
                        'id' => 'ocean_input_border_mobile_bottom_radius',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftMobile' => [
                        'id' => 'ocean_input_border_mobile_left_radius',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_forms_radius' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_forms_border_type' => [
                'type' => 'ocean-select',
                'label' => esc_html__('Border Type', 'oceanwp' ),
                'section' => 'ocean_site_forms_section',
                'default' => 'solid',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'wrapper' => 'ocean_site_forms_border_type',
                'multiple' => false,
                'choices' => [
                    'dotted' => esc_html__( 'Dotted', 'oceanwp' ),
                    'dashed' => esc_html__( 'Dashed', 'oceanwp' ),
                    'solid' => esc_html__( 'Solid', 'oceanwp' ),
                    'double' => esc_html__( 'Double', 'oceanwp' ),
                    'groove' => esc_html__( 'Groove', 'oceanwp' ),
                    'ridge' => esc_html__( 'Ridge', 'oceanwp' ),
                    'inset' => esc_html__( 'Inset', 'oceanwp' ),
                    'outset' => esc_html__( 'Outset', 'oceanwp' ),
                    'none' => esc_html__( 'None', 'oceanwp' ),
                    'hidden' => esc_html__( 'Hidden', 'oceanwp' )
                ],
            ],

            'ocean_input_border_width_dimensions' => [
                'label'    => esc_html__( 'Border Width (px)', 'oceanwp' ),
                'type'     => 'ocean-spacing',
                'section'  => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel'    => false,
                'isType'       => 'radius',
                'wrapper'      => 'ocean_input_border_width_dimensions',
                'setting_args' => [
                    'spacingTop' => [
                        'id' => 'ocean_input_top_border_width',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingRight' => [
                        'id' => 'ocean_input_right_border_width',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingBottom' => [
                        'id' => 'ocean_input_bottom_border_width',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingLeft' => [
                        'id' => 'ocean_input_left_border_width',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 3,
                        ],
                    ],
                    'spacingTopTablet' => [
                        'id' => 'ocean_input_tablet_top_border_width',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightTablet' => [
                        'id' => 'ocean_input_tablet_right_border_width',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomTablet' => [
                        'id' => 'ocean_input_tablet_bottom_border_width',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftTablet' => [
                        'id' => 'ocean_input_tablet_left_border_width',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingTopMobile' => [
                        'id' => 'ocean_input_mobile_top_border_width',
                        'label' => esc_html__( 'Top', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingRightMobile' => [
                        'id' => 'ocean_input_mobile_right_border_width',
                        'label' => esc_html__( 'Right', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingBottomMobile' => [
                        'id' => 'ocean_input_mobile_bottom_border_width',
                        'label' => esc_html__( 'Bottom', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'spacingLeftMobile' => [
                        'id' => 'ocean_input_mobile_left_border_width',
                        'label' => esc_html__( 'Left', 'oceanwp' ),
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_site_forms_border_width' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_form_label_typography' => [
                'id' => 'ocean_site_form_label_typography',
                'type' => 'ocean-typography',
                'label' => esc_html__('Label', 'oceanwp'),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'selector' => 'form input[type=text], form input[type=password], form input[type=email], form input[type=url], form input[type=date], form input[type=month], form input[type=time], form input[type=datetime], form input[type=datetime-local], form input[type=week], form input[type=number], form input[type=search], form input[type=tel], form input[type=color], form select, form textarea',
                'setting_args' => [
                    'fontFamily' => [
                        'id' => 'form_label_typography[font-family]',
                        'label' => 'Font Family',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeight' => [
                        'id' => 'form_label_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightTablet' => [
                        'id' => 'form_label_tablet_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightMobile' => [
                        'id' => 'form_label_mobile_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSubset' => [
                        'id' => 'form_label_typography[font-subset]',
                        'label' => 'Font Subset',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSize' => [
                        'id' => 'form_label_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeTablet' => [
                        'id' => 'form_label_tablet_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeMobile' => [
                        'id' => 'form_label_mobile_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeUnit' => [
                        'id' => 'form_label_typography[font-size-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacing' => [
                        'id' => 'form_label_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingTablet' => [
                        'id' => 'form_label_tablet_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingMobile' => [
                        'id' => 'form_label_mobile_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingUnit' => [
                        'id' => 'form_label_typography[letter-spacing-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 'px'
                        ],
                    ],
                    'lineHeight' => [
                        'id' => 'form_label_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightTablet' => [
                        'id' => 'form_label_tablet_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightMobile' => [
                        'id' => 'form_label_mobile_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightUnit' => [
                        'id' => 'form_label_typography[line-height-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransform' => [
                        'id' => 'form_label_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformTablet' => [
                        'id' => 'form_label_tablet_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformMobile' => [
                        'id' => 'form_label_mobile_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textDecoration' => [
                        'id' => 'form_label_typography[text-decoration]',
                        'label' => 'Text Decoration',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_site_form_placeholder_typography' => [
                'id' => 'ocean_site_form_placeholder_typography',
                'type' => 'ocean-typography',
                'label' => esc_html__('Placeholder', 'oceanwp'),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'selector' => 'form input[type=text], form input[type=password], form input[type=email], form input[type=url], form input[type=date], form input[type=month], form input[type=time], form input[type=datetime], form input[type=datetime-local], form input[type=week], form input[type=number], form input[type=search], form input[type=tel], form input[type=color], form select, form textarea',
                'setting_args' => [
                    'fontFamily' => [
                        'id' => 'form_placeholder_typography[font-family]',
                        'label' => 'Font Family',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeight' => [
                        'id' => 'form_placeholder_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightTablet' => [
                        'id' => 'form_placeholder_tablet_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightMobile' => [
                        'id' => 'form_placeholder_mobile_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSubset' => [
                        'id' => 'form_placeholder_typography[font-subset]',
                        'label' => 'Font Subset',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSize' => [
                        'id' => 'form_placeholder_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeTablet' => [
                        'id' => 'form_placeholder_tablet_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeMobile' => [
                        'id' => 'form_placeholder_mobile_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeUnit' => [
                        'id' => 'form_placeholder_typography[font-size-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacing' => [
                        'id' => 'form_placeholder_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingTablet' => [
                        'id' => 'form_placeholder_tablet_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingMobile' => [
                        'id' => 'form_placeholder_mobile_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingUnit' => [
                        'id' => 'form_placeholder_typography[letter-spacing-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 'px'
                        ],
                    ],
                    'lineHeight' => [
                        'id' => 'form_placeholder_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightTablet' => [
                        'id' => 'form_placeholder_tablet_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightMobile' => [
                        'id' => 'form_placeholder_mobile_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightUnit' => [
                        'id' => 'form_placeholder_typography[line-height-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransform' => [
                        'id' => 'form_placeholder_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformTablet' => [
                        'id' => 'form_placeholder_tablet_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformMobile' => [
                        'id' => 'form_placeholder_mobile_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textDecoration' => [
                        'id' => 'form_placeholder_typography[text-decoration]',
                        'label' => 'Text Decoration',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_site_form_text_typography' => [
                'id' => 'ocean_site_form_text_typography',
                'type' => 'ocean-typography',
                'label' => esc_html__('Text', 'oceanwp'),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'selector' => 'form input[type=text], form input[type=password], form input[type=email], form input[type=url], form input[type=date], form input[type=month], form input[type=time], form input[type=datetime], form input[type=datetime-local], form input[type=week], form input[type=number], form input[type=search], form input[type=tel], form input[type=color], form select, form textarea',
                'setting_args' => [
                    'fontFamily' => [
                        'id' => 'form_text_typography[font-family]',
                        'label' => 'Font Family',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeight' => [
                        'id' => 'form_text_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightTablet' => [
                        'id' => 'form_text_tablet_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontWeightMobile' => [
                        'id' => 'form_text_mobile_typography[font-weight]',
                        'label' => 'Font Weight',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSubset' => [
                        'id' => 'form_text_typography[font-subset]',
                        'label' => 'Font Subset',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSize' => [
                        'id' => 'form_text_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeTablet' => [
                        'id' => 'form_text_tablet_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeMobile' => [
                        'id' => 'form_text_mobile_typography[font-size]',
                        'label' => 'Font Size',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'fontSizeUnit' => [
                        'id' => 'form_text_typography[font-size-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacing' => [
                        'id' => 'form_text_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingTablet' => [
                        'id' => 'form_text_tablet_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingMobile' => [
                        'id' => 'form_text_mobile_typography[letter-spacing]',
                        'label' => 'Letter Spacing',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'letterSpacingUnit' => [
                        'id' => 'form_text_typography[letter-spacing-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default'   => 'px'
                        ],
                    ],
                    'lineHeight' => [
                        'id' => 'form_text_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightTablet' => [
                        'id' => 'form_text_tablet_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightMobile' => [
                        'id' => 'form_text_mobile_typography[line-height]',
                        'label' => 'Line Height',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'lineHeightUnit' => [
                        'id' => 'form_text_typography[line-height-unit]',
                        'label' => 'Unit',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransform' => [
                        'id' => 'form_text_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformTablet' => [
                        'id' => 'form_text_tablet_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textTransformMobile' => [
                        'id' => 'form_text_mobile_typography[text-transform]',
                        'label' => 'Text Transform',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                    'textDecoration' => [
                        'id' => 'form_text_typography[text-decoration]',
                        'label' => 'Text Decoration',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ],
                ]
            ],

            'ocean_divider_after_forms_typography' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_input_background_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Background', 'oceanwp' ),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_input_background_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_input_background',
                        'key' => 'normal',
                        'label' => 'Normal',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ]
                ]
            ],

            'ocean_input_label_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Label', 'oceanwp' ),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_input_label_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_input_label',
                        'key' => 'normal',
                        'label' => 'Normal',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ]
                ]
            ],

            'ocean_input_placeholder_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Placeholder', 'oceanwp' ),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_input_placeholder_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_input_placeholder',
                        'key' => 'normal',
                        'label' => 'Normal',
                        'attr' => [
                            'transport' => 'postMessage',
                        ],
                    ]
                ]
            ],

            'ocean_input_color_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Text', 'oceanwp' ),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_input_color_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_input_color',
                        'key' => 'normal',
                        'label' => 'Normal',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default' => '#333333',
                        ],
                    ]
                ]
            ],

            'ocean_input_border_color_wrap' => [
                'type' => 'ocean-color',
                'label' => esc_html__( 'Border', 'oceanwp' ),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'hideLabel' => false,
                'showAlpha' => true,
                'showPalette' => true,
                'wrapper' => 'ocean_input_border_color_wrap',
                'setting_args' => [
                    'normal' => [
                        'id' => 'ocean_input_border_color',
                        'key' => 'normal',
                        'label' => 'Normal',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default' => '#dddddd',
                        ],
                    ],
                    'focus' => [
                        'id' => 'ocean_input_border_color_focus',
                        'key' => 'focus',
                        'label' => 'Focus',
                        'attr' => [
                            'transport' => 'postMessage',
                            'default' => '#bbbbbb',
                        ],
                    ]
                ]
            ],

            'ocean_divider_after_site_form_colors' => [
                'type' => 'ocean-divider',
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'top' => 10,
                'bottom' => 10
            ],

            'ocean_site_forms_whatnext_links' => [
                'type' => 'ocean-links',
                'label' => esc_html__('What to do next?', 'oceanwp' ),
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
                'class' => 'whatnext',
                'linkIcon' => 'foreign',
                'titleIcon' => 'right-arrow',
                'active_callback' => 'ocean_is_oe_active',
                'links' => [
                    'style_scroll_top' => [
                        'label' => esc_html__('Style the Scroll to Top button.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_pagination' => [
                        'label' => esc_html__('Style Site Pagination.', 'oceanwp'),
                        'url' => '#'
                    ],
                    'style_page_layout' => [
                        'label' => esc_html__('Style Pages Layout.', 'oceanwp'),
                        'url' => '#'
                    ]
                ]
            ],

            'ocean_site_icons_need_help' => [
                'type' => 'ocean-content',
                'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
                'class' => 'need-help',
                'section' => 'ocean_site_forms_section',
                'transport' => 'postMessage',
                'priority' => 10,
            ],
        ]
    ]

];
