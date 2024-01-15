<?php
/**
 * OceanWP Customizer Settings: Footer Widget
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

    'ocean_footer_bottom' => [
        'type' => 'ocean-switch',
        'label' => esc_html__('Enable Footer Widgets', 'oceanwp'),
        'section' => 'ocean_footer_copyright_settings',
        'default'  => true,
        'transport' => 'refresh',
        'priority' => 10,
        'hideLabel' => false
    ],

    'ocean_bottom_footer_visibility' => [
        'type' => 'ocean-select',
        'label' => esc_html__('Visibility', 'oceanwp' ),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'default' => 'all-devices',
        'priority' => 10,
        'hideLabel' => false,
        'multiple' => false,
        'active_callback' => 'ocean_cac_footer_copyright',
        'choices' => [
            'all-devices' 			=> esc_html__( 'Show On All Devices', 'oceanwp' ),
            'hide-tablet' 			=> esc_html__( 'Hide On Tablet', 'oceanwp' ),
            'hide-mobile' 			=> esc_html__( 'Hide On Mobile', 'oceanwp' ),
            'hide-tablet-mobile' 	=> esc_html__( 'Hide On Tablet & Mobile', 'oceanwp' ),
        ]
    ],

    'ocean_divider_after_footer_bottom_visibility_setting' => [
        'type' => 'ocean-divider',
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'top' => 10,
        'active_callback' => 'ocean_cac_footer_copyright',
    ],

    'ocean_bottom_footer_padding_dimensions' => [
        'id' => 'ocean_bottom_footer_padding_dimensions',
        'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
        'type'     => 'ocean-spacing',
        'section'  => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'hideLabel'    => false,
        'isType'       => 'padding',
        'active_callback' => 'ocean_cac_footer_copyright',
        'setting_args' => [
            'spacingTop' => [
                'id' => 'ocean_bottom_footer_top_padding',
                'label' => esc_html__( 'Top', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 15,
                ],
            ],
            'spacingRight' => [
                'id' => 'ocean_bottom_footer_right_padding',
                'label' => esc_html__( 'Right', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 0,
                ],
            ],
            'spacingBottom' => [
                'id' => 'ocean_bottom_footer_bottom_padding',
                'label' => esc_html__( 'Bottom', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 15,
                ],
            ],
            'spacingLeft' => [
                'id' => 'ocean_bottom_footer_left_padding',
                'label' => esc_html__( 'Left', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 0,
                ],
            ],
            'spacingTopTablet' => [
                'id' => 'ocean_bottom_footer_tablet_top_padding',
                'label' => esc_html__( 'Top', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'spacingRightTablet' => [
                'id' => 'ocean_bottom_footer_tablet_right_padding',
                'label' => esc_html__( 'Right', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'spacingBottomTablet' => [
                'id' => 'ocean_bottom_footer_tablet_bottom_padding',
                'label' => esc_html__( 'Bottom', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'spacingLeftTablet' => [
                'id' => 'ocean_bottom_footer_tablet_left_padding',
                'label' => esc_html__( 'Left', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'spacingTopMobile' => [
                'id' => 'ocean_bottom_footer_mobile_top_padding',
                'label' => esc_html__( 'Top', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'spacingRightMobile' => [
                'id' => 'ocean_bottom_footer_mobile_right_padding',
                'label' => esc_html__( 'Right', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'spacingBottomMobile' => [
                'id' => 'ocean_bottom_footer_mobile_bottom_padding',
                'label' => esc_html__( 'Bottom', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'spacingLeftMobile' => [
                'id' => 'ocean_bottom_footer_mobile_left_padding',
                'label' => esc_html__( 'Left', 'oceanwp' ),
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
        ],
        'preview' => 'queryWithType',
        'css' => [
            'selector' => '#footer-bottom',
            'property' => 'padding'
        ],
    ],

    'ocean_title_for_footer_copyright_content_settings' => [
        'type' => 'ocean-title',
        'label' => esc_html__('Content', 'oceanwp'),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'active_callback' => 'ocean_cac_footer_copyright',
    ],

    'ocean_footer_copyright_text' => [
        'type'     => 'ocean-rich-text',
        'label'    => esc_html__( 'Copyright Text', 'oceanwp' ),
        'section'  => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'default' => 'Copyright [oceanwp_date] - OceanWP Theme by OceanWP',
        'priority' => 10,
        'hideLabel'    => false,
        'mediaButtons' => false,
        'tinymce' => [
            'toolbar1' => 'bold,italic,link,undo,redo',
        ],
        'active_callback' => 'ocean_cac_footer_copyright',
    ],

    'ocean_title_for_footer_copyright_typography_colors_settings' => [
        'type' => 'ocean-title',
        'label' => esc_html__('Typography And Colors', 'oceanwp'),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'active_callback' => 'ocean_cac_footer_copyright',
    ],

    'footer_copyright_text_settings' => [
        'id' => 'copyright',
        'type' => 'ocean-typography',
        'label' => esc_html__('Copyright Text', 'oceanwp'),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'hideLabel' => false,
        'selector' => '#footer-bottom #copyright',
        'active_callback' => 'ocean_cac_footer_copyright',
        'setting_args' => [
            'fontFamily' => [
                'id' => 'copyright_typography[font-family]',
                'label' => 'Font Family',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontWeight' => [
                'id' => 'copyright_typography[font-weight]',
                'label' => 'Font Weight',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontWeightTablet' => [
                'id' => 'copyright_tablet_typography[font-weight]',
                'label' => 'Font Weight',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontWeightMobile' => [
                'id' => 'copyright_mobile_typography[font-weight]',
                'label' => 'Font Weight',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSubset' => [
                'id' => 'copyright_typography[font-subset]',
                'label' => 'Font Subset',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSize' => [
                'id' => 'copyright_typography[font-size]',
                'label' => 'Font Size',
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 12,
                ],
            ],
            'fontSizeTablet' => [
                'id' => 'copyright_tablet_typography[font-size]',
                'label' => 'Font Size',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSizeMobile' => [
                'id' => 'copyright_mobile_typography[font-size]',
                'label' => 'Font Size',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSizeUnit' => [
                'id' => 'copyright_typography[font-size-unit]',
                'label' => 'Unit',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacing' => [
                'id' => 'copyright_typography[letter-spacing]',
                'label' => 'Letter Spacing',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacingTablet' => [
                'id' => 'copyright_tablet_typography[letter-spacing]',
                'label' => 'Letter Spacing',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacingMobile' => [
                'id' => 'copyright_mobile_typography[letter-spacing]',
                'label' => 'Letter Spacing',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacingUnit' => [
                'id' => 'copyright_typography[letter-spacing-unit]',
                'label' => 'Unit',
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 'px'
                ],
            ],
            'lineHeight' => [
                'id' => 'copyright_typography[line-height]',
                'label' => 'Line Height',
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 1,
                ],
            ],
            'lineHeightTablet' => [
                'id' => 'copyright_tablet_typography[line-height]',
                'label' => 'Line Height',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'lineHeightMobile' => [
                'id' => 'copyright_mobile_typography[line-height]',
                'label' => 'Line Height',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'lineHeightUnit' => [
                'id' => 'copyright_typography[line-height-unit]',
                'label' => 'Unit',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textTransform' => [
                'id' => 'copyright_typography[text-transform]',
                'label' => 'Text Transform',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textTransformTablet' => [
                'id' => 'copyright_tablet_typography[text-transform]',
                'label' => 'Text Transform',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textTransformMobile' => [
                'id' => 'copyright_mobile_typography[text-transform]',
                'label' => 'Text Transform',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textDecoration' => [
                'id' => 'copyright_typography[text-decoration]',
                'label' => 'Text Decoration',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
        ]
    ],

    'footer_footer_menu_settings' => [
        'id' => 'footer_menu',
        'type' => 'ocean-typography',
        'label' => esc_html__('Footer Menu', 'oceanwp'),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'hideLabel' => false,
        'selector' => '#footer-bottom #footer_menu',
        'active_callback' => 'ocean_cac_footer_copyright',
        'setting_args' => [
            'fontFamily' => [
                'id' => 'footer_menu_typography[font-family]',
                'label' => 'Font Family',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontWeight' => [
                'id' => 'footer_menu_typography[font-weight]',
                'label' => 'Font Weight',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontWeightTablet' => [
                'id' => 'footer_menu_tablet_typography[font-weight]',
                'label' => 'Font Weight',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontWeightMobile' => [
                'id' => 'footer_menu_mobile_typography[font-weight]',
                'label' => 'Font Weight',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSubset' => [
                'id' => 'footer_menu_typography[font-subset]',
                'label' => 'Font Subset',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSize' => [
                'id' => 'footer_menu_typography[font-size]',
                'label' => 'Font Size',
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 12,
                ],
            ],
            'fontSizeTablet' => [
                'id' => 'footer_menu_tablet_typography[font-size]',
                'label' => 'Font Size',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSizeMobile' => [
                'id' => 'footer_menu_mobile_typography[font-size]',
                'label' => 'Font Size',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'fontSizeUnit' => [
                'id' => 'footer_menu_typography[font-size-unit]',
                'label' => 'Unit',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacing' => [
                'id' => 'footer_menu_typography[letter-spacing]',
                'label' => 'Letter Spacing',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacingTablet' => [
                'id' => 'footer_menu_tablet_typography[letter-spacing]',
                'label' => 'Letter Spacing',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacingMobile' => [
                'id' => 'footer_menu_mobile_typography[letter-spacing]',
                'label' => 'Letter Spacing',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'letterSpacingUnit' => [
                'id' => 'footer_menu_typography[letter-spacing-unit]',
                'label' => 'Unit',
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 'px'
                ],
            ],
            'lineHeight' => [
                'id' => 'footer_menu_typography[line-height]',
                'label' => 'Line Height',
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => 1,
                ],
            ],
            'lineHeightTablet' => [
                'id' => 'footer_menu_tablet_typography[line-height]',
                'label' => 'Line Height',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'lineHeightMobile' => [
                'id' => 'footer_menu_mobile_typography[line-height]',
                'label' => 'Line Height',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'lineHeightUnit' => [
                'id' => 'footer_menu_typography[line-height-unit]',
                'label' => 'Unit',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textTransform' => [
                'id' => 'footer_menu_typography[text-transform]',
                'label' => 'Text Transform',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textTransformTablet' => [
                'id' => 'footer_menu_tablet_typography[text-transform]',
                'label' => 'Text Transform',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textTransformMobile' => [
                'id' => 'footer_menu_mobile_typography[text-transform]',
                'label' => 'Text Transform',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
            'textDecoration' => [
                'id' => 'footer_menu_typography[text-decoration]',
                'label' => 'Text Decoration',
                'attr' => [
                    'transport' => 'postMessage',
                ],
            ],
        ]
    ],

    'ocean_divider_after_footer_copyright_typo_setting' => [
        'type' => 'ocean-divider',
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'top' => 1,
        'bottom' => 10,
        'active_callback' => 'ocean_cac_footer_copyright',
    ],

    'ocean_bottom_footer_background' => [
        'type' => 'ocean-color',
        'label' => esc_html__( 'Background', 'oceanwp' ),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'active_callback' => 'ocean_cac_footer_copyright',
        'setting_args' => [
            'normal' => [
                'id' => 'ocean_bottom_footer_background',
                'key' => 'normal',
                'label' => 'Select Color',
                'selector' => [
                    '#footer-bottom' => 'background-color'
                ],
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => '#1b1b1b',
                ],
            ],
        ]
    ],

    'ocean_bottom_footer_color' => [
        'type' => 'ocean-color',
        'label' => esc_html__( 'Text', 'oceanwp' ),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'active_callback' => 'ocean_cac_footer_copyright',
        'setting_args' => [
            'normal' => [
                'id' => 'ocean_bottom_footer_color',
                'key' => 'normal',
                'label' => 'Select Color',
                'selector' => [
                    '#footer-bottom,#footer-bottom p' => 'color'
                ],
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => '#ffffff',
                ],
            ],
        ]
    ],

    'ocean_footer_link_color' => [
        'type' => 'ocean-color',
        'label' => esc_html__( 'Links', 'oceanwp' ),
        'section' => 'ocean_footer_copyright_settings',
        'transport' => 'postMessage',
        'priority' => 10,
        'hideLabel' => false,
        'showAlpha' => true,
        'showPalette' => true,
        'active_callback' => 'ocean_cac_footer_copyright',
        'setting_args' => [
            'normal' => [
                'id' => 'ocean_footer_link_color',
                'key' => 'normal',
                'label' => 'Normal',
                'selector' => [
                    '#footer-bottom a,#footer-bottom #footer-bottom-menu a' => 'color'
                ],
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => '#ffffff',
                ],
            ],
            'hover' => [
                'id' => 'ocean_footer_link_color_hover',
                'key' => 'hover',
                'label' => 'Hover',
                'selector' => [
                    '#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover' => 'color'
                ],
                'attr' => [
                    'transport' => 'postMessage',
                    'default'   => '#13aff0',
                ],
            ],
        ]
    ],


];
