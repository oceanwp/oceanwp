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

	'ocean_typograhpy_top_quick_links' => [
		'type' => 'ocean-links',
		'label' => 'Quick Menu',
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'class' => 'top-quick-links',
		'linkIcon' => 'select',
		'titleIcon' => 'meatball-menu',
		'active_callback' => 'ocean_is_oe_active',
		'links' => [
			'google_font' => [
				'label' => esc_html__('Google Font Settings', 'oceanwp'),
				'url' => '#'
			],
			'google_font_local' => [
				'label' => esc_html__('Local Google Font Settings', 'oceanwp'),
				'url' => '#'
			]
		]
	],

	'ocean_title_for_global_typography' => [
		'type' => 'ocean-title',
		'label' => 'Global Typography Settings',
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
	],

	'ocean_body_typography' => [
		'id' => 'ocean_body_typography',
		'type' => 'ocean-typography',
		'label' => esc_html__('Body', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'body',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'body_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'body_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'body_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'body_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'body_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'body_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '14'
				],
			],
			'fontSizeTablet' => [
				'id' => 'body_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'body_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'body_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'body_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'body_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'body_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'body_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'body_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.8'
				],
			],
			'lineHeightTablet' => [
				'id' => 'body_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'body_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'body_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'body_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'body_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'body_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textColor' => [
				'id' => 'body_typography[color]',
				'label' => 'Color',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textColorHover' => [
				'id' => 'body_typography[color-hover]',
				'label' => 'Color',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
		]
	],

	'ocean_headings_typography' => [
		'id' => 'ocean_headings_typography',
		'type' => 'ocean-typography',
		'label' => esc_html__('All Headings', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'headings_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'headings_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'headings_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'headings_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'headings_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'headings_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeTablet' => [
				'id' => 'headings_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'headings_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'headings_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'headings_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'headings_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'headings_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'headings_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'headings_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.4'
				],
			],
			'lineHeightTablet' => [
				'id' => 'headings_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'headings_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'headings_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'headings_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'headings_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'headings_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_heading_h1_typography' => [
		'id' => 'ocean_heading_h1_typography',
		'type' => 'ocean-typography',
		'class' => 'h1-h6',
		'label' => esc_html__('Heading 1 (H1)', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'h1',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'heading_h1_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'heading_h1_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'heading_h1_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'heading_h1_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'heading_h1_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'heading_h1_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '23'
				],
			],
			'fontSizeTablet' => [
				'id' => 'heading_h1_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'heading_h1_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'heading_h1_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'heading_h1_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'heading_h1_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'heading_h1_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'heading_h1_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'heading_h1_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.4'
				],
			],
			'lineHeightTablet' => [
				'id' => 'heading_h1_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'heading_h1_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'heading_h1_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'heading_h1_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'heading_h1_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'heading_h1_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_heading_h2_typography' => [
		'id' => 'ocean_heading_h2_typography',
		'type' => 'ocean-typography',
		'class' => 'h1-h6',
		'label' => esc_html__('Heading 2 (H2)', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'h2',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'heading_h2_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'heading_h2_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'heading_h2_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'heading_h2_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'heading_h2_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'heading_h2_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '20'
				],
			],
			'fontSizeTablet' => [
				'id' => 'heading_h2_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'heading_h2_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'heading_h2_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'heading_h2_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'heading_h2_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'heading_h2_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'heading_h2_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'heading_h2_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.4'
				],
			],
			'lineHeightTablet' => [
				'id' => 'heading_h2_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'heading_h2_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'heading_h2_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'heading_h2_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'heading_h2_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'heading_h2_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_heading_h3_typography' => [
		'id' => 'ocean_heading_h3_typography',
		'type' => 'ocean-typography',
		'class' => 'h1-h6',
		'label' => esc_html__('Heading 3 (H3)', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'h3',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'heading_h3_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'heading_h3_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'heading_h3_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'heading_h3_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'heading_h3_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'heading_h3_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '18'
				],
			],
			'fontSizeTablet' => [
				'id' => 'heading_h3_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'heading_h3_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'heading_h3_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'heading_h3_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'heading_h3_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'heading_h3_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'heading_h3_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'heading_h3_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.4'
				],
			],
			'lineHeightTablet' => [
				'id' => 'heading_h3_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'heading_h3_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'heading_h3_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'heading_h3_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'heading_h3_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'heading_h3_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_heading_h4_typography' => [
		'id' => 'ocean_heading_h4_typography',
		'type' => 'ocean-typography',
		'class' => 'h1-h6',
		'label' => esc_html__('Heading 4 (H4)', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'h4',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'heading_h4_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'heading_h4_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'heading_h4_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'heading_h4_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'heading_h4_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'heading_h4_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '17'
				],
			],
			'fontSizeTablet' => [
				'id' => 'heading_h4_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'heading_h4_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'heading_h4_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'heading_h4_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'heading_h4_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'heading_h4_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'heading_h4_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'heading_h4_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.4'
				],
			],
			'lineHeightTablet' => [
				'id' => 'heading_h4_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'heading_h4_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'heading_h4_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'heading_h4_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'heading_h4_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'heading_h4_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_heading_h5_typography' => [
		'id' => 'ocean_heading_h5_typography',
		'type' => 'ocean-typography',
		'class' => 'h1-h6',
		'label' => esc_html__('Heading 5 (H5)', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'h5',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'heading_h5_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'heading_h5_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'heading_h5_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'heading_h5_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'heading_h5_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'heading_h5_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '14'
				],
			],
			'fontSizeTablet' => [
				'id' => 'heading_h5_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'heading_h5_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'heading_h5_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'heading_h5_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'heading_h5_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'heading_h5_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'heading_h5_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'heading_h5_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.4'
				],
			],
			'lineHeightTablet' => [
				'id' => 'heading_h5_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'heading_h5_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'heading_h5_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'heading_h5_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'heading_h5_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'heading_h5_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_heading_h6_typography' => [
		'id' => 'ocean_heading_h6_typography',
		'type' => 'ocean-typography',
		'class' => 'h1-h6',
		'label' => esc_html__('Heading 6 (H6)', 'oceanwp'),
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel' => false,
		'selector' => 'h6',
		'setting_args' => [
			'fontFamily' => [
				'id' => 'heading_h6_typography[font-family]',
				'label' => 'Font Family',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeight' => [
				'id' => 'heading_h6_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightTablet' => [
				'id' => 'heading_h6_tablet_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontWeightMobile' => [
				'id' => 'heading_h6_mobile_typography[font-weight]',
				'label' => 'Font Weight',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSubset' => [
				'id' => 'heading_h6_typography[font-subset]',
				'label' => 'Font Subset',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSize' => [
				'id' => 'heading_h6_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '15'
				],
			],
			'fontSizeTablet' => [
				'id' => 'heading_h6_tablet_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeMobile' => [
				'id' => 'heading_h6_mobile_typography[font-size]',
				'label' => 'Font Size',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'fontSizeUnit' => [
				'id' => 'heading_h6_typography[font-size-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'letterSpacing' => [
				'id' => 'heading_h6_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingTablet' => [
				'id' => 'heading_h6_tablet_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingMobile' => [
				'id' => 'heading_h6_mobile_typography[letter-spacing]',
				'label' => 'Letter Spacing',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'letterSpacingUnit' => [
				'id' => 'heading_h6_typography[letter-spacing-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => 'px'
				],
			],
			'lineHeight' => [
				'id' => 'heading_h6_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
					'default'   => '1.4'
				],
			],
			'lineHeightTablet' => [
				'id' => 'heading_h6_tablet_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightMobile' => [
				'id' => 'heading_h6_mobile_typography[line-height]',
				'label' => 'Line Height',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'lineHeightUnit' => [
				'id' => 'heading_h6_typography[line-height-unit]',
				'label' => 'Unit',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransform' => [
				'id' => 'heading_h6_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformTablet' => [
				'id' => 'heading_h6_tablet_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'textTransformMobile' => [
				'id' => 'heading_h6_mobile_typography[text-transform]',
				'label' => 'Text Transform',
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_divider_after_global_typography' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
	],

	'ocean_google_font_section' => [
		'type' => 'section',
		'title' => esc_html__('Google Font Settings', 'oceanwp'),
		'section' => 'ocean_typography',
		'after' => 'ocean_divider_after_global_typography',
		'class' => 'section-google-font',
		'priority' => 10,
		'options' => [
			'ocean_typograhpy_google_font_quick_links' => [
				'type' => 'ocean-links',
				'label' => 'Quick Menu',
				'section' => 'ocean_google_font_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'class' => 'top-quick-links',
				'linkIcon' => 'select',
				'titleIcon' => 'meatball-menu',
				'active_callback' => 'ocean_is_oe_active',
				'links' => [
					'google_font' => [
						'label' => esc_html__('Apply Global Font Options', 'oceanwp'),
						'url' => '#'
					],
					'google_font_local' => [
						'label' => esc_html__('Apply Global Color Settings', 'oceanwp'),
						'url' => '#'
					]
				]
			],

			'ocean_divider_after_google_font_quick_links_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_google_font_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'bottom' => 1,
				'active_callback' => 'ocean_is_oe_active',
			],

			'ocean_disable_google_font' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Enable Google Fonts', 'oceanwp'),
				'section' => 'ocean_google_font_section',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
			],

			'ocean_divider_after_disable_google_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_google_font_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'active_callback' => 'ocean_is_google_font_settings',
			],

			'ocean_title_for_local_google_fonts' => [
				'type' => 'ocean-title',
				'label' => esc_html__('Load Google Fonts Locally', 'oceanwp'),
				'desc' => esc_html__('This feature enables you to load all the Google fonts you\'re using directly from your website.', 'oceanwp'),
				'section' => 'ocean_google_font_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'active_callback' => 'ocean_is_google_font_settings',
			],

			'ocean_local_google_font' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Enable Local Google Fonts', 'oceanwp'),
				'section' => 'ocean_google_font_section',
				'default'  => false,
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'active_callback' => 'ocean_is_google_font_settings',
			],

			'ocean_local_elementor_google_font' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Apply on Elementor', 'oceanwp'),
				'section' => 'ocean_google_font_section',
				'default'  => false,
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'active_callback' => 'ocean_is_elementor_google_font',
			],

			'ocean_preload_local_google_font' => [
				'type' => 'ocean-switch',
				'label' => esc_html__('Preload Local Google Fonts', 'oceanwp'),
				'section' => 'ocean_google_font_section',
				'default'  => false,
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'active_callback' => 'ocean_is_local_google_font',
			],

			'ocean_local_google_font_format' => [
				'type' => 'ocean-buttons',
				'label' => esc_html__('Font Format', 'oceanwp'),
				'desc' => esc_html__( 'Choose the font Format for the Google fonts loaded locally.', 'oceanwp' ),
				'section' => 'ocean_google_font_section',
				'default'  => 'ttf',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'wrap'    => false,
				'active_callback' => 'ocean_is_local_google_font',
				'choices' => [
					'ttf' => [
						'id'     => 'ttf',
						'label'   => 'ttf',
						'content' => 'ttf'
					],
					'woff'  => [
						'id'     => 'woff',
						'label'   => 'woff',
						'content' => 'woff'
					],
					'woff2'    => [
						'id'     => 'woff2',
						'label'   => 'woff2',
						'content' => 'woff2'
					]
				]
			],

			'ocean_divider_after_local_font_format' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_google_font_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'active_callback' => 'ocean_is_google_font_settings',
				'top' => 10,
				'bottom' => 10
			],

			'ocean_google_font_subsets' => [
				'type' => 'ocean-multiselect',
				'label' => esc_html__('Font Subsets', 'oceanwp'),
				'section' => 'ocean_google_font_section',
				'default'  => [ 'latin' ],
				'transport' => 'refresh',
				'priority' => 10,
				'hideLabel' => false,
				'active_callback' => 'ocean_is_google_font_settings',
				'choices'  => [
					'latin'        => 'latin',
					'latin-ext'    => 'latin-ext',
					'cyrillic'     => 'cyrillic',
					'cyrillic-ext' => 'cyrillic-ext',
					'greek'        => 'greek',
					'greek-ext'    => 'greek-ext',
					'vietnamese'   => 'vietnamese',
				],
			],

			'ocean_divider_google_font_subset' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_google_font_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_typography_google_font_need_help' => [
				'type' => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
				'class' => 'need-help',
				'section' => 'ocean_google_font_section',
				'transport' => 'postMessage',
				'priority' => 10,
			],
		]
	],

	'ocean_divider_after_google_font_section' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
	],

	'ocean_typograhpy_whatnext_links' => [
		'type' => 'ocean-links',
		'label' => 'What to do next?',
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'class' => 'whatnext',
		'linkIcon' => 'foreign',
		'titleIcon' => 'right-arrow',
		'active_callback' => 'ocean_is_oe_active',
		'links' => [
			'google_font' => [
				'label' => esc_html__('Apply Global Color Settings', 'oceanwp'),
				'url' => '#'
			],
			'google_font_local' => [
				'label' => esc_html__('Apply Global Site Settings', 'oceanwp'),
				'url' => '#'
			]
		]
	],

	'ocean_typograhpy_did_you_know_links' => [
		'type' => 'ocean-links',
		'label' => 'Did you know?',
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
		'class' => 'whatnext',
		'linkIcon' => 'links',
		'titleIcon' => 'idea',
		'active_callback' => 'ocean_is_oe_active',
		'links' => [
			'google_font' => [
				'label' => esc_html__('With OceanWP you can integrate Adobe Fonts for free.', 'oceanwp'),
				'url' => esc_url( 'https://docs.oceanwp.org/article/849-how-to-add-adobe-fonts-typekit' ),
			]
		]
	],

	'ocean_typography_need_help' => [
		'type' => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="http://docs.oceanwp.org/category/369-shortcodes" target="_blank">', '</a>' ),
		'class' => 'need-help',
		'section' => 'ocean_typography',
		'transport' => 'postMessage',
		'priority' => 10,
	],

];
