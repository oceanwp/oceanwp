<?php
/**
 * OceanWP Customizer Settings: LifterLMS
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [
	'ocean_desc_for_llms_general_notice' => [
		'type' => 'ocean-content',
		'isContent' => esc_html__('For some options, you must save and refresh your live site to preview changes.', 'oceanwp'),
		'section' => 'ocean_lifterlms_settings',
		'class' => 'description',
		'transport' => 'postMessage',
		'priority' => 10,
	],

	'ocean_llms_distraction_free_checkout' => [
		'type' => 'ocean-switch',
		'label' => esc_html__('Distraction Free Checkout', 'oceanwp'),
		'section' => 'ocean_lifterlms_settings',
		'default'  => false,
		'transport' => 'refresh',
		'priority' => 10,
		'hideLabel' => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_llms_distraction_free_learning' => [
		'type' => 'ocean-switch',
		'label' => esc_html__('Distraction Free Learning', 'oceanwp'),
		'section' => 'ocean_lifterlms_settings',
		'default'  => false,
		'transport' => 'refresh',
		'priority' => 10,
		'hideLabel' => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_llms_distraction_free_learning_setting' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_lifterlms_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
	],

	'ocean_llms_courses_columns' => [
		'id'      => 'ocean_llms_courses_columns',
		'label'    => esc_html__( 'Courses Columns', 'oceanwp' ),
		'type'     => 'ocean-range-slider',
		'section'  => 'ocean_lifterlms_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel'    => false,
		'isUnit'       => false,
		'isResponsive' => true,
		'min'          => 1,
		'max'          => 6,
		'step'         => 1,
		'sanitize_callback' => 'oceanwp_sanitize_number_blank',
		'setting_args' => [
			'desktop' => [
				'id' => 'ocean_llms_courses_columns',
				'label' => esc_html__( 'Desktop', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
					'default' => 3,
				],
			],
			'tablet' => [
				'id' => 'ocean_llms_tablet_courses_columns',
				'label' => esc_html__( 'Tablet', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'mobile' => [
				'id' => 'ocean_llms_mobile_courses_columns',
				'label' => esc_html__( 'Mobile', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_llms_membership_columns' => [
		'id'      => 'ocean_llms_membership_columns',
		'label'    => esc_html__( 'Membership Columns', 'oceanwp' ),
		'type'     => 'ocean-range-slider',
		'section'  => 'ocean_lifterlms_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'hideLabel'    => false,
		'isUnit'       => false,
		'isResponsive' => true,
		'min'          => 1,
		'max'          => 6,
		'step'         => 1,
		'sanitize_callback' => 'oceanwp_sanitize_number_blank',
		'setting_args' => [
			'desktop' => [
				'id' => 'ocean_llms_membership_columns',
				'label' => esc_html__( 'Desktop', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
					'default' => 3,
				],
			],
			'tablet' => [
				'id' => 'ocean_llms_tablet_membership_columns',
				'label' => esc_html__( 'Tablet', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			],
			'mobile' => [
				'id' => 'ocean_llms_mobile_membership_columns',
				'label' => esc_html__( 'Mobile', 'oceanwp' ),
				'attr' => [
					'transport' => 'postMessage',
				],
			]
		]
	],

	'ocean_divider_after_llms_membership_columns_setting' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_lifterlms_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10
	],

	'ocean_llms_course_details' => [
		'type' => 'ocean-multiselect',
		'label' => esc_html__('Course Details', 'oceanwp'),
		'section' => 'ocean_lifterlms_settings',
		'default'  => [ 'image', 'description', 'meta', 'author', 'progress', 'syllabus' ],
		'transport' => 'refresh',
		'priority' => 10,
		'hideLabel' => false,
		'choices'  => [
			'image'		 		=> esc_html__( 'Featured Image', 'oceanwp' ),
			'description'		=> esc_html__( 'Description', 'oceanwp' ),
			'meta' 				=> esc_html__( 'Meta', 'oceanwp' ),
			'author' 			=> esc_html__( 'Author', 'oceanwp' ),
			'progress' 			=> esc_html__( 'Progress', 'oceanwp' ),
			'syllabus' 			=> esc_html__( 'Syllabus', 'oceanwp' ),
		],
	],

	'ocean_divider_after_llms_course_details_setting' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_lifterlms_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10,
		'bottom' => 10
	],

	'ocean_llms_membership_image' => [
		'type' => 'ocean-switch',
		'label' => esc_html__('Membership Featured Image', 'oceanwp'),
		'section' => 'ocean_lifterlms_settings',
		'default'  => false,
		'transport' => 'refresh',
		'priority' => 10,
		'hideLabel' => false,
		'sanitize_callback' => 'oceanwp_sanitize_checkbox',
	],

	'ocean_divider_after_llms_membership_image_setting' => [
		'type' => 'ocean-divider',
		'section' => 'ocean_lifterlms_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 10
	],

	'ocean_llms_layout' => [
		'type' => 'section',
		'title' => esc_html__('Layout', 'oceanwp'),
		'section' => 'ocean_lifterlms_settings',
		'after' => 'ocean_divider_after_llms_membership_image_setting',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_spacer_for_ocean_llms_layout_global_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_llms_layout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_llms_layout_global_section' => [
				'type' => 'section',
				'title' => esc_html__('Global', 'oceanwp'),
				'section' => 'ocean_llms_layout',
				'after' => 'ocean_spacer_for_ocean_llms_layout_global_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_llms_global_layout' => [
						'label' => esc_html__( 'Layout', 'oceanwp' ),
						'type' => 'ocean-radio-image',
						'section' => 'ocean_llms_layout_global_section',
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

					'ocean_divider_after_llms_global_layout_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_llms_layout_global_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_llms_global_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
						'section' => 'ocean_llms_layout_global_section',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_llms_global_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_llms_global_both_sidebars_content_width' => [
						'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_llms_layout_global_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_llms_global_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_llms_global_both_sidebars_content_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_llms_global_both_sidebars_content_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_llms_global_both_sidebars_sidebars_width' => [
						'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_llms_layout_global_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_llms_global_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_llms_global_both_sidebars_sidebars_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_llms_global_both_sidebars_sidebars_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_llms_global_sidebar_order' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
						'section' => 'ocean_llms_layout_global_section',
						'transport' => 'refresh',
						'default' => 'content-sidebar',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_llms_global_rl_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						],
					],
				]
			],

			'ocean_spacer_for_ocean_llms_layout_course_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_llms_layout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_llms_layout_course_section' => [
				'type' => 'section',
				'title' => esc_html__('Course', 'oceanwp'),
				'section' => 'ocean_llms_layout',
				'after' => 'ocean_spacer_for_ocean_llms_layout_course_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_llms_course_layout' => [
						'label' => esc_html__( 'Layout', 'oceanwp' ),
						'type' => 'ocean-radio-image',
						'section' => 'ocean_llms_layout_course_section',
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

					'ocean_divider_after_llms_course_layout_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_llms_layout_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_llms_course_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
						'section' => 'ocean_llms_layout_course_section',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_llms_course_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_llms_course_both_sidebars_content_width' => [
						'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_llms_layout_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_llms_course_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_llms_course_both_sidebars_content_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_llms_course_both_sidebars_content_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_llms_course_both_sidebars_sidebars_width' => [
						'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_llms_layout_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_llms_course_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_llms_course_both_sidebars_sidebars_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_llms_course_both_sidebars_sidebars_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_llms_course_sidebar_order' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
						'section' => 'ocean_llms_layout_course_section',
						'transport' => 'refresh',
						'default' => 'content-sidebar',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_llms_course_rl_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						],
					],
				]
			],

			'ocean_spacer_for_ocean_llms_layout_lesson_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_llms_layout',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_llms_layout_lesson_section' => [
				'type' => 'section',
				'title' => esc_html__('Lesson', 'oceanwp'),
				'section' => 'ocean_llms_layout',
				'after' => 'ocean_spacer_for_ocean_llms_layout_lesson_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_llms_lesson_layout' => [
						'label' => esc_html__( 'Layout', 'oceanwp' ),
						'type' => 'ocean-radio-image',
						'section' => 'ocean_llms_layout_lesson_section',
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

					'ocean_divider_after_llms_lesson_layout_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_llms_layout_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10
					],

					'ocean_llms_lesson_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Both Sidebars: Style', 'oceanwp' ),
						'section' => 'ocean_llms_layout_lesson_section',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_llms_lesson_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_llms_lesson_both_sidebars_content_width' => [
						'label'       => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_llms_layout_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_llms_lesson_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_llms_lesson_both_sidebars_content_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_llms_lesson_both_sidebars_content_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_llms_lesson_both_sidebars_sidebars_width' => [
						'label'       => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_llms_layout_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => true,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 100,
						'step'         => 1,
						'active_callback' => 'oceanwp_cac_is_llms_lesson_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_llms_lesson_both_sidebars_sidebars_width',
								'label' =>esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id' => 'ocean_llms_lesson_both_sidebars_sidebars_width_unit',
								'label' =>esc_html__( 'Unit', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => '%'
								],
							],
						],
					],

					'ocean_llms_lesson_sidebar_order' => [
						'type' => 'ocean-select',
						'label' => esc_html__('Responsive Setting: Content Order Layout', 'oceanwp' ),
						'section' => 'ocean_llms_layout_lesson_section',
						'transport' => 'refresh',
						'default' => 'content-sidebar',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'oceanwp_cac_is_llms_lesson_rl_layout',
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

	'ocean_spacer_for_ocean_llms_styling_section' => [
		'type' => 'ocean-spacer',
		'section' => 'ocean_lifterlms_settings',
		'transport' => 'postMessage',
		'priority' => 10,
		'top' => 1,
		'bottom' => 10,
	],

	'ocean_llms_styling' => [
		'type' => 'section',
		'title' => esc_html__('Advanced Styling', 'oceanwp'),
		'section' => 'ocean_lifterlms_settings',
		'after' => 'ocean_spacer_for_ocean_llms_styling_section',
		'class' => 'section-site-layout',
		'priority' => 10,
		'options' => [
			'ocean_spacer_for_ocean_llms_styling_archive_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_llms_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_llms_styling_archive_section' => [
				'type' => 'section',
				'title' => esc_html__('Courses/Memberships', 'oceanwp'),
				'section' => 'ocean_llms_styling',
				'after' => 'ocean_spacer_for_ocean_llms_styling_archive_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_llms_padding' => [
						'id' => 'ocean_llms_padding',
						'label'    => esc_html__( 'Padding (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'padding',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_llms_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_llms_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_llms_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_llms_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_llms_tablet_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_llms_tablet_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_llms_tablet_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_llms_tablet_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_llms_mobile_top_padding',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_llms_mobile_right_padding',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_llms_mobile_bottom_padding',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_llms_mobile_left_padding',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.llms-loop-item .llms-loop-item-content',
							'property' => 'padding'
						]
					],

					'ocean_llms_image_margin' => [
						'id' => 'ocean_llms_image_margin',
						'label'    => esc_html__( 'Image Margin (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'margin',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_llms_image_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_llms_image_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_llms_image_bottom_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_llms_image_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_llms_image_tablet_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_llms_image_tablet_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_llms_image_tablet_bottom_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_llms_image_tablet_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_llms_image_mobile_top_margin',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_llms_image_mobile_right_margin',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_llms_image_mobile_right_margin',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_llms_image_mobile_left_margin',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.llms-loop-item .llms-loop-item-content .llms-featured-image',
							'property' => 'margin'
						],
					],

					'ocean_llms_border_width' => [
						'id' => 'ocean_llms_border_width',
						'label'    => esc_html__( 'Border Width (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'border-width',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_llms_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_llms_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_llms_bottom_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_llms_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_llms_tablet_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_llms_tablet_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_llms_tablet_bottom_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_llms_tablet_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_llms_mobile_top_border_width',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_llms_mobile_right_border_width',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_llms_mobile_right_border_width',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_llms_mobile_left_border_width',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.llms-loop-item .llms-loop-item-content',
							'property' => 'border-width'
						],
					],

					'ocean_llms_border_radius' => [
						'id' => 'ocean_llms_border_radius',
						'label'    => esc_html__( 'Border Radius (px)', 'oceanwp' ),
						'type'     => 'ocean-spacing',
						'section'  => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isType'       => 'border-radius',
						'setting_args' => [
							'spacingTop' => [
								'id' => 'ocean_llms_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRight' => [
								'id' => 'ocean_llms_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottom' => [
								'id' => 'ocean_llms_bottom_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeft' => [
								'id' => 'ocean_llms_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopTablet' => [
								'id' => 'ocean_llms_tablet_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightTablet' => [
								'id' => 'ocean_llms_tablet_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomTablet' => [
								'id' => 'ocean_llms_tablet_bottom_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftTablet' => [
								'id' => 'ocean_llms_tablet_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingTopMobile' => [
								'id' => 'ocean_llms_mobile_top_border_radius',
								'label' => esc_html__( 'Top', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingRightMobile' => [
								'id' => 'ocean_llms_mobile_right_border_radius',
								'label' => esc_html__( 'Right', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingBottomMobile' => [
								'id' => 'ocean_llms_mobile_right_border_radius',
								'label' => esc_html__( 'Bottom', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'spacingLeftMobile' => [
								'id' => 'ocean_llms_mobile_left_border_radius',
								'label' => esc_html__( 'Left', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						],
						'preview' => 'queryWithType',
						'css' => [
							'selector' => '.llms-loop-item .llms-loop-item-content',
							'property' => 'border-radius'
						],
					],

					'ocean_divider_after_llms_archives_border_radius_settings' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
					],

					'ocean_llms_background_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Background Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_background_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-loop-item .llms-loop-item-content' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#f1f1f1'
								],
							],
						]
					],

					'ocean_llms_border_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Border Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_border_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-loop-item .llms-loop-item-content' => 'border-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_llms_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.llms-loop-item-content .llms-loop-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id' => 'ocean_llms_title_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.llms-loop-item-content .llms-loop-title:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_llms_author_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Author Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_author_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-loop-item-content .llms-author' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#444'
								],
							],
						]
					],

					'ocean_llms_meta_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Meta Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_archive_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_meta_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-loop-item-content .llms-meta' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#444'
								],
							],
						]
					],
				]
			],

			'ocean_spacer_for_ocean_llms_styling_course_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_llms_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_llms_styling_course_section' => [
				'type' => 'section',
				'title' => esc_html__('Course', 'oceanwp'),
				'section' => 'ocean_llms_styling',
				'after' => 'ocean_spacer_for_ocean_llms_styling_course_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_llms_course_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-course .entry-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_llms_course_subtitle_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Sub Title Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_subtitle_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-course .llms-meta-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_llms_course_meta_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Meta Title Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_meta_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-meta-info .llms-meta p' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_llms_course_meta_link_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Meta Link Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_meta_link_color',
								'key' => 'normal',
								'label' => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.llms-meta-info .llms-meta span, .llms-meta-info .llms-meta a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'	=> '#929292',
								],
							],
							'hover' => [
								'id' => 'ocean_llms_course_meta_link_color_hover',
								'key' => 'hover',
								'label' => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.llms-meta-info .llms-meta a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_llms_course_author_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Author Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_author_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-instructor-info .llms-instructors .llms-author' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_llms_course_progress_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Progress Bar Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_progress_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-progress .progress-bar-complete' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_llms_course_section_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Section Title Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_section_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-syllabus-wrapper .llms-section-title, .llms-access-plan-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#fff',
								],
							]
						]
					],

					'ocean_llms_course_section_title_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Section Title Background', 'oceanwp' ),
						'section' => 'ocean_llms_styling_course_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_course_section_title_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.llms-syllabus-wrapper .llms-section-title, .llms-access-plan-title' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],
				]
			],

			'ocean_spacer_for_ocean_llms_styling_lession_section' => [
				'type' => 'ocean-spacer',
				'section' => 'ocean_llms_styling',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 1,
				'bottom' => 10,
			],

			'ocean_llms_styling_lesson_section' => [
				'type' => 'section',
				'title' => esc_html__('Lesson', 'oceanwp'),
				'section' => 'ocean_llms_styling',
				'after' => 'ocean_spacer_for_ocean_llms_styling_lession_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_llms_lesson_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Title Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_lesson_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-lesson .entry-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_llms_lesson_description_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Description Color', 'oceanwp' ),
						'section' => 'ocean_llms_styling_lesson_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_llms_lesson_description_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-lesson .entry-content' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],
				]
			],
		]
	],

];
