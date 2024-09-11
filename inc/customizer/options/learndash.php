<?php
/**
 * OceanWP Customizer Settings: LearnDash
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [
	'ocean_desc_for_ld_general_notice' => [
		'type' => 'ocean-content',
		'isContent' => esc_html__('For some options, you must save and refresh your live site to preview changes.', 'oceanwp'),
		'section' => 'ocean_learndash_settings',
		'class' => 'description',
		'transport' => 'postMessage',
		'priority' => 10,
	],

	'ocean_ld_distraction_free_learning' => [
		'type' => 'ocean-switch',
		'label' => esc_html__('Distraction Free Learning', 'oceanwp'),
		'section' => 'ocean_learndash_settings',
		'default'  => false,
		'transport' => 'refresh',
		'priority' => 10,
		'hideLabel' => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_ld_distraction_free_learning_setting' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_learndash_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
	],

	'ocean_divider_after_ld_distraction_free_learning_setting' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_learndash_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10
	],

	'ocean_ld_layout' => [
		'type' => 'section',
		'title' => esc_html__('Layout', 'oceanwp'),
		'section' => 'ocean_learndash_settings',
		'after' => 'ocean_divider_after_ld_distraction_free_learning_setting',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_spacer_for_ocean_ld_layout_global_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_ld_layout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_ld_layout_global_section' => [
				'type' => 'section',
				'title' => esc_html__('Global', 'oceanwp'),
				'section' => 'ocean_ld_layout',
				'after' => 'ocean_spacer_for_ocean_ld_layout_global_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_ld_global_layout' => [
						'label' => esc_html__( 'Layout', 'oceanwp' ),
						'type' => 'ocean-radio-image',
						'section' => 'ocean_ld_layout_global_section',
						'transport' => 'refresh',
						'default' => 'full-width',
						'priority' => 10,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'right-sidebar' => [
								'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
								'icon' => 'right-sidebar',
							],
							'left-sidebar'  => [
								'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
								'icon' => 'left-sidebar',
							],
							'full-width'    => [
								'label' => esc_html__( 'Full Width', 'oceanwp' ),
								'icon' => 'full_width-no_sidebar',
							],
							'full-screen'   => [
								'label' => esc_html__( '100% Full Width', 'oceanwp' ),
								'icon' => 'fullscreen_width',
							],
							'both-sidebars' => [
								'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
								'icon' => 'both_sidebar_layout',
							]
						]
					],

					'ocean_divider_after_ld_global_layout_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_ld_layout_global_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_ld_global_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
						'section' => 'ocean_ld_layout_global_section',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_ld_global_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_ld_global_both_sidebars_content_width' => [
						'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_ld_layout_global_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_ld_global_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_ld_global_both_sidebars_content_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_ld_global_both_sidebars_content_width_unit',
								'label' =>esc_html__( 'Unit'. 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_ld_global_both_sidebars_sidebars_width' => [
						'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_ld_layout_global_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_ld_global_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_ld_global_both_sidebars_sidebars_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_ld_global_both_sidebars_sidebars_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_ld_global_sidebar_order' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
						'section' => 'ocean_ld_layout_global_section',
						'transport' => 'refresh',
						'default' => 'content-sidebar',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_ld_global_rl_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						],
					],
				]
			],

			'ocean_spacer_for_ocean_ld_layout_course_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_ld_layout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_ld_layout_course_section' => [
				'type' => 'section',
				'title' => esc_html__('Course', 'oceanwp'),
				'section' => 'ocean_ld_layout',
				'after' => 'ocean_spacer_for_ocean_ld_layout_course_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_ld_course_layout' => [
						'label' => esc_html__( 'Layout', 'oceanwp' ),
						'type' => 'ocean-radio-image',
						'section' => 'ocean_ld_layout_course_section',
						'transport' => 'refresh',
						'default' => 'left-sidebar',
						'priority' => 10,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'right-sidebar' => [
								'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
								'icon' => 'right-sidebar',
							],
							'left-sidebar'  => [
								'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
								'icon' => 'left-sidebar',
							],
							'full-width'    => [
								'label' => esc_html__( 'Full Width', 'oceanwp' ),
								'icon' => 'full_width-no_sidebar',
							],
							'full-screen'   => [
								'label' => esc_html__( '100% Full Width', 'oceanwp' ),
								'icon' => 'fullscreen_width',
							],
							'both-sidebars' => [
								'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
								'icon' => 'both_sidebar_layout',
							]
						]
					],

					'ocean_divider_after_ld_course_layout_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_ld_layout_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_ld_course_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
						'section' => 'ocean_ld_layout_course_section',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_ld_course_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_ld_course_both_sidebars_content_width' => [
						'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_ld_layout_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_ld_course_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_ld_course_both_sidebars_content_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_ld_course_both_sidebars_content_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_ld_course_both_sidebars_sidebars_width' => [
						'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_ld_layout_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_ld_course_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_ld_course_both_sidebars_sidebars_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_ld_course_both_sidebars_sidebars_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_ld_course_sidebar_order' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
						'section' => 'ocean_ld_layout_course_section',
						'transport' => 'refresh',
						'default' => 'content-sidebar',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_ld_course_rl_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						],
					],
				]
			],

			'ocean_spacer_for_ocean_ld_layout_lesson_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_ld_layout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_ld_layout_lesson_section' => [
				'type' => 'section',
				'title' => esc_html__('Lesson/Topic', 'oceanwp'),
				'section' => 'ocean_ld_layout',
				'after' => 'ocean_spacer_for_ocean_ld_layout_lesson_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_ld_lesson_layout' => [
						'label' => esc_html__( 'Layout', 'oceanwp' ),
						'type' => 'ocean-radio-image',
						'section' => 'ocean_ld_layout_lesson_section',
						'transport' => 'refresh',
						'default' => 'left-sidebar',
						'priority' => 10,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'right-sidebar' => [
								'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
								'icon' => 'right-sidebar',
							],
							'left-sidebar'  => [
								'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
								'icon' => 'left-sidebar',
							],
							'full-width'    => [
								'label' => esc_html__( 'Full Width', 'oceanwp' ),
								'icon' => 'full_width-no_sidebar',
							],
							'full-screen'   => [
								'label' => esc_html__( '100% Full Width', 'oceanwp' ),
								'icon' => 'fullscreen_width',
							],
							'both-sidebars' => [
								'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
								'icon' => 'both_sidebar_layout',
							]
						]
					],

					'ocean_divider_after_ld_lesson_layout_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_ld_layout_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_ld_lesson_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
						'section' => 'ocean_ld_layout_lesson_section',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_ld_lesson_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_ld_lesson_both_sidebars_content_width' => [
						'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_ld_layout_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_ld_lesson_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_ld_lesson_both_sidebars_content_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_ld_lesson_both_sidebars_content_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_ld_lesson_both_sidebars_sidebars_width' => [
						'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_ld_layout_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_ld_lesson_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_ld_lesson_both_sidebars_sidebars_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_ld_lesson_both_sidebars_sidebars_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_ld_lesson_sidebar_order' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
						'section' => 'ocean_ld_layout_lesson_section',
						'transport' => 'refresh',
						'default' => 'content-sidebar',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_ld_lesson_rl_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						],
					],
				]
			]
		]
	],

	'ocean_spacer_for_ocean_ld_styling_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_learndash_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_ld_styling' => [
		'type' => 'section',
		'title' => esc_html__('Advanced Styling', 'oceanwp'),
		'section' => 'ocean_learndash_settings',
		'after' => 'ocean_spacer_for_ocean_ld_styling_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_title_for_ld_tablet_styling_settings' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Table', 'oceanwp' ),
				'section' => 'ocean_ld_styling',
				'transport' => 'postMessage',
				'priority' => 10,
			],

			'ocean_ld_heading_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Heading Color', 'oceanwp' ),
				'section' => 'ocean_ld_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_ld_heading_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#learndash_lessons #lesson_heading, #learndash_profile .learndash_profile_heading, #learndash_quizzes #quiz_heading, #learndash_lesson_topics_list div > strong' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_ld_heading_bg_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Heading Background Color', 'oceanwp' ),
				'section' => 'ocean_ld_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_ld_heading_bg_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'#learndash_lessons #lesson_heading, #learndash_profile .learndash_profile_heading, #learndash_quizzes #quiz_heading, #learndash_lesson_topics_list div > strong' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_ld_item_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Item Color', 'oceanwp' ),
				'section' => 'ocean_ld_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_ld_item_color',
						'key' => 'normal',
						'label' => esc_html__( 'Normal', 'oceanwp' ),
						'selector' => [
							'#lessons_list > div h4 a, #course_list > div h4 a, #quiz_list > div h4 a, .learndash_topic_dots a, .learndash_topic_dots a > span, #learndash_lesson_topics_list span a' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333',
						],
					],
					'hover' => [
						'id' => 'ocean_ld_item_hover_color',
						'key' => 'hover',
						'label' => esc_html__( 'Hover', 'oceanwp' ),
						'selector' => [
							'#lessons_list > div h4 a:hover, #lessons_list > div h4 a:hover > span, #course_list > div h4 a:hover, #course_list > div h4 a:hover > span, #quiz_list > div h4 a:hover, #quiz_list > div h4 a:hover > span, .learndash_topic_dots a:hover, .learndash_topic_dots a:hover span, #learndash_lesson_topics_list span a:hover' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
							'default'   => '#333',
						],
					]
				]
			],

			'ocean_ld_complete_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Complete Color', 'oceanwp' ),
				'section' => 'ocean_ld_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_ld_complete_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.learndash_navigation_lesson_topics_list .topic-completed span:before, .learndash_navigation_lesson_topics_list ul .topic-completed span:before, .learndash_topic_dots .topic-completed span:before, .learndash_topic_dots ul .topic-completed span:before, .learndash .completed:before, #learndash_profile .completed:before' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_ld_incomplete_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Incomplete Color', 'oceanwp' ),
				'section' => 'ocean_ld_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_ld_incomplete_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'.learndash_navigation_lesson_topics_list .topic-notcompleted span:before, .learndash_navigation_lesson_topics_list ul .topic-notcompleted span:before, .learndash_topic_dots .topic-notcompleted span:before, .learndash_topic_dots ul .topic-notcompleted span:before, .learndash .notcompleted:before, #learndash_profile .notcompleted:before' => 'color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

			'ocean_ld_progressbar_color' => [
				'type' => 'ocean-color',
				'label' => esc_html__( 'Progress Bar Color', 'oceanwp' ),
				'section' => 'ocean_ld_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'hideLabel' => false,
				'showAlpha' => true,
				'showPalette' => true,
				'sanitize_callback' => 'wp_kses_post',
				'setting_args' => [
					'normal' => [
						'id' => 'ocean_ld_progressbar_color',
						'key' => 'normal',
						'label' => esc_html__( 'Select Color', 'oceanwp' ),
						'selector' => [
							'dd.course_progress div.course_progress_blue' => 'background-color'
						],
						'attr' => [
							'transport' => 'postMessage',
						],
					]
				]
			],

		]
	]
];
