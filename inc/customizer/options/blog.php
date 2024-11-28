<?php
/**
 * OceanWP Customizer Settings: Blog
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options = [

	'ocean_spacer_for_blog_archive_section' => [
		'type'      => 'ocean-spacer',
		'section'   => 'ocean_blog',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_blog_archive_section' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Blog Archives', 'oceanwp' ),
		'section'  => 'ocean_blog',
		'after'    => 'ocean_spacer_for_blog_archive_section',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_blog_archives_layout' => [
				'label'             => esc_html__( 'Archives Layout', 'oceanwp' ),
				'type'              => 'ocean-radio-image',
				'section'           => 'ocean_blog_archive_section',
				'transport'         => 'refresh',
				'default'           => 'right-sidebar',
				'priority'          => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'right-sidebar' => [
						'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
						'icon'  => 'right-sidebar',
					],
					'left-sidebar'  => [
						'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
						'icon'  => 'left-sidebar',
					],
					'full-width'    => [
						'label' => esc_html__( 'Full Width', 'oceanwp' ),
						'icon'  => 'full_width-no_sidebar',
					],
					'full-screen'   => [
						'label' => esc_html__( '100% Full Width', 'oceanwp' ),
						'icon'  => 'fullscreen_width',
					],
					'both-sidebars' => [
						'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
						'icon'  => 'both_sidebar_layout',
					]
				]
			],

			'ocean_divider_after_blog_archive_layout_setting' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
			],

			'ocean_blog_archive_additional_layout_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Layout Settings', 'oceanwp' ),
				'section'  => 'ocean_blog_archive_section',
				'after'    => 'ocean_divider_after_blog_archive_layout_setting',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_blog_archive_additional_layout_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'Additional layout settings are currently available for the Both Sidebars layout style.', 'oceanwp' ),
						'section'   => 'ocean_blog_archive_additional_layout_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_blog_archives_both_sidebars_style' => [
						'type' => 'ocean-select',
						'label' => esc_html__( 'Both Sidebars: Content Order Style', 'oceanwp' ),
						'section' => 'ocean_blog_archive_additional_layout_section',
						'transport' => 'refresh',
						'default' => 'scs-style',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'active_callback' => 'ocean_cac_blog_archive_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_blog_archives_both_sidebars_content_width' => [
						'label'             => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_archive_additional_layout_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 100,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_blog_archive_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_archives_both_sidebars_content_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id'    => 'ocean_blog_archives_both_sidebars_content_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => '%',
								],
							],
						]
					],

					'ocean_blog_archives_both_sidebars_sidebars_width' => [
						'label'             => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_archive_additional_layout_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 100,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_blog_archive_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_archives_both_sidebars_sidebars_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id'    => 'ocean_blog_archives_both_sidebars_sidebars_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => '%',
								],
							],
						]
					],

					'ocean_blog_archive_additional_layout_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Layout-Settings-0jPsd/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_archive_additional_layout_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_spacer_for_blog_archive_responsive_settings_section' => [
				'type'      => 'ocean-spacer',
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 1,
				'bottom'    => 10,
			],

			'ocean_blog_archive_responsive_settings_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Responsive Settings', 'oceanwp' ),
				'section'  => 'ocean_blog_archive_section',
				'after'    => 'ocean_spacer_for_blog_archive_responsive_settings_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_blog_archive_responsive_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'Additional responsive settings are currently available for any of the single Sidebar layout styles.', 'oceanwp' ),
						'section'   => 'ocean_blog_archive_responsive_settings_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_blog_archives_sidebar_order' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Sidebar Position for Mobile', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_responsive_settings_section',
						'default'           => 'content-sidebar',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_archive_sidebar_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'content-sidebar' => [
								'id'      => 'content-sidebar',
								'label'   => esc_html__( 'After Content', 'oceanwp' ),
								'content' => esc_html__( 'After Content', 'oceanwp' ),
							],
							'sidebar-content'  => [
								'id'      => 'sidebar-content',
								'label'   => esc_html__( 'Before Content', 'oceanwp' ),
								'content' => esc_html__( 'Before Content', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_archive_responsive_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Responsive-Settings-4h84t/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_archive_responsive_settings_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_title_for_blog_style_settings' => [
				'type'      => 'ocean-title',
				'label'     => esc_html__( 'Blog Style', 'oceanwp' ),
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 20,
			],

			'ocean_blog_style' => [
				'type'              => 'ocean-radio-image',
				'label'             => esc_html__( 'Blog Style', 'oceanwp' ),
				'section'           => 'ocean_blog_archive_section',
				'default'           => 'large-entry',
				'transport'         => 'refresh',
				'priority'          => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'large-entry' => [
						'label' => esc_html__( 'Large Entry', 'oceanwp' ),
						'icon'  => 'large_style_layout',
					],
					'grid-entry'  => [
						'label' => esc_html__( 'Grid', 'oceanwp' ),
						'icon'  => 'grid_style_layout',
					],
					'thumbnail-entry'  => [
						'label' => esc_html__( 'Thumbnail', 'oceanwp' ),
						'icon'  => 'thumbnails_style_layout',
					]
				]
			],

			'ocean_divider_for_blog_archive_additional_blog_style_settings_section' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
			],

			'ocean_blog_archive_additional_blog_style_settings_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Blog Style Settings', 'oceanwp' ),
				'section'  => 'ocean_blog_archive_section',
				'after'    => 'ocean_divider_for_blog_archive_additional_blog_style_settings_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_blog_archive_additional_blog_style_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'Additional styling settings are currenlty available for Grid and Thumbnail blog styles.', 'oceanwp' ),
						'section'   => 'ocean_blog_archive_additional_blog_style_settings_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_blog_grid_images_size' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Image Size', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_additional_blog_style_settings_section',
						'transport'         => 'refresh',
						'default'           => 'medium',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'ocean_cac_blog_archive_grid_style',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => apply_filters(
							'ocean_blog_grid_images_size', [
								'thumbnail'    => esc_html__( 'Thumbnail', 'oceanwp' ),
								'medium'       => esc_html__( 'Medium', 'oceanwp' ),
								'medium_large' => esc_html__( 'Medium Large', 'oceanwp' ),
								'large'        => esc_html__( 'Large', 'oceanwp' ),
							]
						)
					],

					'ocean_blog_grid_columns' => [
						'id'                => 'ocean_blog_grid_columns',
						'label'             => esc_html__( 'Grid Columns', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_archive_additional_blog_style_settings_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => true,
						'min'               => 1,
						'max'               => 6,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_blog_archive_grid_style',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_grid_columns',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'refresh',
									'default'   => 2,
								],
							],
							'tablet' => [
								'id'    => 'ocean_blog_grid_columns_tablet',
								'label' => esc_html__( 'Tablet', 'oceanwp' ),
								'attr'  => [
									'transport' => 'refresh',
									'default'   => 2,
								],
							],
							'mobile' => [
								'id'    => 'ocean_blog_grid_columns_mobile',
								'label' => esc_html__( 'Mobile', 'oceanwp' ),
								'attr'  => [
									'transport' => 'refresh',
									'default'   => 1,
								],
							]
						]
					],

					'ocean_blog_grid_style' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Grid Style', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_additional_blog_style_settings_section',
						'default'           => 'fit-rows',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_archive_grid_style',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'fit-rows' => [
								'id'      => 'fit-rows',
								'label'   => esc_html__( 'Fit Rows', 'oceanwp' ),
								'content' => esc_html__( 'Fit Rows', 'oceanwp' ),
							],
							'masonry'  => [
								'id'      => 'masonry',
								'label'   => esc_html__( 'Masonry', 'oceanwp' ),
								'content' => esc_html__( 'Masonry', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_thumbnail_image_position' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Image Position', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_additional_blog_style_settings_section',
						'default'           => 'left',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_archive_thumbnail_style',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'left' => [
								'id'      => 'left',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'right'  => [
								'id'      => 'right',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_thumbnail_vertical_position' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Vertical Position', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_additional_blog_style_settings_section',
						'default'           => 'center',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_archive_thumbnail_style',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'top' => [
								'id'      => 'top',
								'label'   => esc_html__( 'Top', 'oceanwp' ),
								'content' => esc_html__( 'Top', 'oceanwp' ),
							],
							'center'  => [
								'id'      => 'center',
								'label'   => esc_html__( 'Center', 'oceanwp' ),
								'content' => esc_html__( 'Center', 'oceanwp' ),
							],
							'bottom'  => [
								'id'      => 'bottom',
								'label'   => esc_html__( 'Bottom', 'oceanwp' ),
								'content' => esc_html__( 'Bottom', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_archive_additional_blog_style_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Blog-Style-Settings-cfR1L/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_archive_additional_blog_style_settings_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_title_for_blog_archive_content_settings' => [
				'type'      => 'ocean-title',
				'label'     => esc_html__( 'Blog Archives Content', 'oceanwp' ),
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 20,
			],

			'ocean_blog_entries_heading_tag' => [
				'type' => 'ocean-select',
				'label' => esc_html__( 'Heading Tag', 'oceanwp' ),
				'section' => 'ocean_blog_archive_section',
				'transport' => 'refresh',
				'default' => 'h2',
				'priority' => 10,
				'hideLabel' => false,
				'multiple' => false,
				'sanitize_callback' => 'sanitize_key',
				'choices' => [
					'h1'   => esc_html__( 'H1', 'oceanwp' ),
					'h2'   => esc_html__( 'H2', 'oceanwp' ),
					'h3'   => esc_html__( 'H3', 'oceanwp' ),
					'h4'   => esc_html__( 'H4', 'oceanwp' ),
					'h5'   => esc_html__( 'H5', 'oceanwp' ),
					'h6'   => esc_html__( 'H6', 'oceanwp' ),
					'div'  => esc_html__( 'div', 'oceanwp' ),
					'span' => esc_html__( 'span', 'oceanwp' ),
					'p'    => esc_html__( 'p', 'oceanwp' ),
				],
			],

			'ocean_divider_after_blog_entries_heading_tag_settings' => [
				'type' => 'ocean-divider',
				'section' => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 10,
			],

			'ocean_blog_archive_content_builder_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Content Builder', 'oceanwp' ),
				'section'  => 'ocean_blog_archive_section',
				'after'    => 'ocean_divider_after_blog_entries_heading_tag_settings',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_blog_archive_content_builder_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'You can organize your blog archive content by using the drag & drop method. The Content Builder option is available for Large Image and Grid blog styles.', 'oceanwp' ),
						'section'   => 'ocean_blog_archive_content_builder_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_blog_entry_elements_positioning' => [
						'label'           => esc_html__( 'Main Content Elements', 'oceanwp' ),
						'type'            => 'ocean-sortable',
						'section'         => 'ocean_blog_archive_content_builder_section',
						'transport'       => 'refresh',
						'priority'        => 10,
						'default'         => apply_filters( 'ocean_blog_blog_entry_default', [ 'featured_image', 'title', 'meta', 'content', 'read_more' ] ),
						'active_callback' => 'oceanwp_cac_not_blog_archive_thumbnail_style',
						'hideLabel'       => false,
						'initialStatus'   => true,
						'choices'         => oceanwp_blog_entry_elements(),
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
					],

					'ocean_divider_after_blog_entry_elements_positioning_setting' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_archive_content_builder_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 10,
						'active_callback' => 'oceanwp_cac_not_blog_archive_thumbnail_style'
					],

					'ocean_blog_entry_meta' => [
						'label'           => esc_html__( 'Meta Section Elements', 'oceanwp' ),
						'type'            => 'ocean-sortable',
						'section'         => 'ocean_blog_archive_content_builder_section',
						'transport'       => 'refresh',
						'priority'        => 10,
						'default'         => apply_filters( 'ocean_blog_meta_default', [ 'author', 'date', 'categories', 'comments' ] ),
						'active_callback' => 'oceanwp_cac_not_blog_archive_thumbnail_style',
						'hideLabel'       => false,
						'initialStatus'   => true,
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
						'choices'         => apply_filters(
							'ocean_blog_meta_choices',
							[
								'author'       => esc_html__( 'Author', 'oceanwp' ),
								'date'         => esc_html__( 'Date', 'oceanwp' ),
								'categories'   => esc_html__( 'Categories', 'oceanwp' ),
								'comments'     => esc_html__( 'Comments', 'oceanwp' ),
								'mod-date'     => esc_html__( 'Modified Date', 'oceanwp' ),
								'reading-time' => esc_html__( 'Reading Time', 'oceanwp' ),
							]
						),
					],

					'ocean_divider_after_blog_entry_meta_setting' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_blog_archive_content_builder_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 10,
						'bottom' => 10,
					],

					'ocean_blog_meta_separator' => [
						'type' => 'ocean-buttons',
						'label' => esc_html__( 'Meta Separator', 'oceanwp' ),
						'section' => 'ocean_blog_archive_content_builder_section',
						'default'  => 'default',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel' => false,
						'wrap'    => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'default' => [
								'id'     => 'default',
								'label'   => esc_html__( 'Default', 'oceanwp' ),
								'content' => esc_html__( 'Default', 'oceanwp' ),
							],
							'modern'  => [
								'id'     => 'modern',
								'label'   => esc_html__( 'Modern', 'oceanwp' ),
								'content' => esc_html__( 'Modern', 'oceanwp' ),
							],
							'stylish'  => [
								'id'     => 'stylish',
								'label'   => esc_html__( 'Stylish', 'oceanwp' ),
								'content' => esc_html__( 'Stylish', 'oceanwp' ),
							],
							'none'  => [
								'id'     => 'none',
								'label'   => esc_html__( 'None', 'oceanwp' ),
								'content' => esc_html__( 'None', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_archive_content_builder_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Content-Builder-WueOi/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_archive_content_builder_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]

				]
			],

			'ocean_title_for_blog_options_section' => [
				'type'      => 'ocean-title',
				'label'     => esc_html__( 'Additional Blog Options', 'oceanwp' ),
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 20,
			],

			'ocean_blog_archive_excerpt_and_pagination_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Excerpt & Pagination', 'oceanwp' ),
				'section'  => 'ocean_blog_archive_section',
				'after'    => 'ocean_title_for_blog_options_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_blog_entry_excerpt_length' => [
						'label'             => esc_html__( 'Excerpt Length', 'oceanwp' ),
						'desc'              => esc_html__( 'Add a value of 500 to display full content instead of excerpt.', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_archive_excerpt_and_pagination_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 500,
						'step'              => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_entry_excerpt_length',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 30,
								],
							]
						]
					],

					'ocean_divider_blog_archive_excerpt_length' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_archive_excerpt_and_pagination_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 10,
					],

					'ocean_blog_pagination_style' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Blog Archives Pagination Style', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_excerpt_and_pagination_section',
						'default'           => 'standard',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'standard' => [
								'id'      => 'standard',
								'label'   => esc_html__( 'Standard', 'oceanwp' ),
								'content' => esc_html__( 'Standard', 'oceanwp' ),
							],
							'infinite_scroll'  => [
								'id'      => 'infinite_scroll',
								'label'   => esc_html__( 'Infinite Scroll', 'oceanwp' ),
								'content' => esc_html__( 'Infinite Scroll', 'oceanwp' ),
							],
							'next_prev'  => [
								'id'      => 'next_prev',
								'label'   => esc_html__( 'Next/Prev', 'oceanwp' ),
								'content' => esc_html__( 'Next/Prev', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_archive_infinite_scroll_section' => [
						'type'     => 'section',
						'title'    => esc_html__( 'Infinite Scroll Settings', 'oceanwp' ),
						'section'  => 'ocean_blog_archive_excerpt_and_pagination_section',
						'after'    => 'ocean_blog_pagination_style',
						'class'    => 'section-site-layout',
						'priority' => 10,
						'options'  => [
							'ocean_desc_for_blog_archive_infinite_scroll_settings' => [
								'type'            => 'ocean-content',
								'isContent'       => esc_html__( 'If you select the Infinite Scroll as the Archives Pagination Style, these settings will be applied.', 'oceanwp' ),
								'section'         => 'ocean_blog_archive_infinite_scroll_section',
								'class'           => 'description',
								'transport'       => 'postMessage',
								'priority'        => 10,
								'active_callback' => 'oceanwp_cac_blog_archive_pagination_infinite_scroll',
							],

							'ocean_blog_infinite_scroll_spinners_color' => [
								'type'              => 'ocean-color',
								'label'             => esc_html__( 'Spinners Color', 'oceanwp' ),
								'section'           => 'ocean_blog_archive_infinite_scroll_section',
								'transport'         => 'postMessage',
								'priority'          => 10,
								'hideLabel'         => false,
								'showAlpha'         => true,
								'showPalette'       => true,
								'active_callback'   => 'oceanwp_cac_blog_archive_pagination_infinite_scroll',
								'sanitize_callback' => 'wp_kses_post',
								'setting_args'      => [
									'normal' => [
										'id'       => 'ocean_blog_infinite_scroll_spinners_color',
										'key'      => 'normal',
										'label'    => esc_html__( 'Select Color', 'oceanwp' ),
										'selector' => [
											'.loader-ellips__dot' => 'background-color'
										],
										'attr' => [
											'transport' => 'postMessage',
											'default'   => '#333333',
										],
									],
								]
							],

							'ocean_divider_blog_archive_infinite_scroll_spinners_color' => [
								'type'            => 'ocean-divider',
								'section'         => 'ocean_blog_archive_infinite_scroll_section',
								'transport'       => 'postMessage',
								'priority'        => 10,
								'top'             => 10,
								'active_callback' => 'oceanwp_cac_blog_archive_pagination_infinite_scroll'
							],

							'ocean_blog_infinite_scroll_last_text' => [
								'label'             => esc_html__( 'Infinite Scroll: Last Text', 'oceanwp' ),
								'type'              => 'ocean-text',
								'section'           => 'ocean_blog_archive_infinite_scroll_section',
								'transport'         => 'postMessage',
								'default'           => esc_html__( 'End of content', 'oceanwp' ),
								'priority'          => 10,
								'hideLabel'         => false,
								'sanitize_callback' => 'wp_kses_post',
								'active_callback'   => 'oceanwp_cac_blog_archive_pagination_infinite_scroll'
							],

							'ocean_blog_infinite_scroll_error_text' => [
								'label'             => esc_html__( 'Infinite Scroll: Error Text', 'oceanwp' ),
								'type'              => 'ocean-text',
								'section'           => 'ocean_blog_archive_infinite_scroll_section',
								'transport'         => 'postMessage',
								'default'           => esc_html__( 'No more pages to load', 'oceanwp' ),
								'priority'          => 10,
								'hideLabel'         => false,
								'sanitize_callback' => 'wp_kses_post',
								'active_callback'   => 'oceanwp_cac_blog_archive_pagination_infinite_scroll'
							],

							'ocean_blog_archive_infinite_scroll_section_need_help' => [
								'type'      => 'ocean-content',
								'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Infinite-Scroll-Settings-t1c3L/" target="_blank">', '</a>' ),
								'class'     => 'need-help',
								'section'   => 'ocean_blog_archive_infinite_scroll_section',
								'transport' => 'postMessage',
								'priority'  => 10,
							]
						]
					],

					'ocean_blog_archive_excerpt_and_pagination_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Excerpt--Pagination-GaYC2/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_archive_excerpt_and_pagination_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_spacer_for_blog_archive_additional_image_section' => [
				'type'      => 'ocean-spacer',
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 1,
				'bottom'    => 10,
			],

			'ocean_blog_archive_additional_image_settings_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Blog Image Settings', 'oceanwp' ),
				'section'  => 'ocean_blog_archive_section',
				'after'    => 'ocean_spacer_for_blog_archive_additional_image_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_blog_image_overlay' => [
						'type'              => 'ocean-switch',
						'label'             => esc_html__( 'Enable Overlay on Image Hover', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_additional_image_settings_section',
						'default'           => true,
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_blog_image_overlay_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Overlay Color', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_additional_image_settings_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_image_overlay_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.blog-entry.post .thumbnail .overlay' => 'background-color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => 'rgba(0,0,0,.2)',
								],
							],
						]
					],

					'ocean_divider_after_blog_archive_image_overlay_color' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_archive_additional_image_settings_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_blog_entry_image_width' => [
						'label'             => esc_html__( 'Custom Image Width', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_archive_additional_image_settings_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 2000,
						'step'              => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_entry_image_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'refresh',
								],
							]
						]
					],

					'ocean_blog_entry_image_height' => [
						'label'             => esc_html__( 'Custom Image Height', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_archive_additional_image_settings_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 2000,
						'step'              => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_entry_image_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'refresh',
								],
							]
						]
					],

					'ocean_blog_archive_additional_image_settings_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Blog-Image-Settings-q_Nu-/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_archive_additional_image_settings_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_title_for_blog_typography_and_colors_section' => [
				'type'      => 'ocean-title',
				'label'     => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 20,
			],

			'ocean_blog_archive_typography_and_colors_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section'  => 'ocean_blog_archive_section',
				'after'    => 'ocean_title_for_blog_typography_and_colors_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_blog_entry_title_typography' => [
						'id'           => 'ocean_blog_entry_title_typography',
						'type'         => 'ocean-typography',
						'label'        => esc_html__( 'Blog Archives Title', 'oceanwp' ),
						'section'      => 'ocean_blog_archive_typography_and_colors_section',
						'transport'    => 'postMessage',
						'priority'     => 10,
						'hideLabel'    => false,
						'selector'     => '.blog-entry.post .blog-entry-header .entry-title a',
						'setting_args' => [
							'fontFamily' => [
								'id'    => 'blog_entry_title_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'blog_entry_title_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'blog_entry_title_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'blog_entry_title_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'blog_entry_title_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'blog_entry_title_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 24,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'blog_entry_title_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'blog_entry_title_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'blog_entry_title_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'letterSpacing' => [
								'id'    => 'blog_entry_title_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'blog_entry_title_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'blog_entry_title_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'blog_entry_title_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'lineHeight' => [
								'id'    => 'blog_entry_title_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.4,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'blog_entry_title_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'blog_entry_title_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'blog_entry_title_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'blog_entry_title_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'blog_entry_title_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'blog_entry_title_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'blog_entry_title_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_entry_meta_typography' => [
						'id'           => 'ocean_blog_entry_meta_typography',
						'type'         => 'ocean-typography',
						'label'        => esc_html__( 'Meta', 'oceanwp' ),
						'section'      => 'ocean_blog_archive_typography_and_colors_section',
						'transport'    => 'postMessage',
						'priority'     => 10,
						'hideLabel'    => false,
						'selector'     => '.blog-entry.post ul.meta li',
						'setting_args' => [
							'fontFamily' => [
								'id'    => 'blog_entry_meta_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'blog_entry_meta_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'blog_entry_meta_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'blog_entry_meta_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'blog_entry_meta_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'blog_entry_meta_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeTablet' => [
								'id'    => 'blog_entry_meta_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'blog_entry_meta_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'blog_entry_meta_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacing' => [
								'id'    => 'blog_entry_meta_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'blog_entry_meta_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'blog_entry_meta_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'blog_entry_meta_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'lineHeight' => [
								'id'    => 'blog_entry_meta_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightTablet' => [
								'id'    => 'blog_entry_meta_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'blog_entry_meta_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'blog_entry_meta_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'blog_entry_meta_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'blog_entry_meta_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'blog_entry_meta_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'blog_entry_meta_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_entry_content_typography' => [
						'id'           => 'ocean_blog_entry_content_typography',
						'type'         => 'ocean-typography',
						'label'        => esc_html__( 'Content', 'oceanwp' ),
						'section'      => 'ocean_blog_archive_typography_and_colors_section',
						'transport'    => 'postMessage',
						'priority'     => 10,
						'hideLabel'    => false,
						'selector'     => '.blog-entry.post .blog-entry-summary',
						'setting_args' => [
							'fontFamily' => [
								'id'    => 'blog_entry_content_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'blog_entry_content_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'blog_entry_content_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'blog_entry_content_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'blog_entry_content_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'blog_entry_content_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeTablet' => [
								'id'    => 'blog_entry_content_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'blog_entry_content_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'blog_entry_content_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacing' => [
								'id'    => 'blog_entry_content_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'blog_entry_content_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'blog_entry_content_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'blog_entry_content_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'lineHeight' => [
								'id'    => 'blog_entry_content_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightTablet' => [
								'id'    => 'blog_entry_content_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'blog_entry_content_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'blog_entry_content_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'blog_entry_content_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'blog_entry_content_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'blog_entry_content_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'blog_entry_content_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_entry_readmore_typography' => [
						'id'           => 'ocean_blog_entry_readmore_typography',
						'type'         => 'ocean-typography',
						'label'        => esc_html__( 'Read More', 'oceanwp' ),
						'section'      => 'ocean_blog_archive_typography_and_colors_section',
						'transport'    => 'postMessage',
						'priority'     => 10,
						'hideLabel'    => false,
						'selector'     => '.blog-entry.post .blog-entry-readmore a',
						'setting_args' => [
							'fontFamily' => [
								'id'    => 'blog_entry_readmore_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'blog_entry_readmore_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'blog_entry_readmore_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'blog_entry_readmore_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'blog_entry_readmore_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'blog_entry_readmore_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeTablet' => [
								'id'    => 'blog_entry_readmore_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'blog_entry_readmore_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'blog_entry_readmore_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacing' => [
								'id'    => 'blog_entry_readmore_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'blog_entry_readmore_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'blog_entry_readmore_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'blog_entry_readmore_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'lineHeight' => [
								'id'    => 'blog_entry_readmore_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightTablet' => [
								'id'    => 'blog_entry_readmore_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'blog_entry_readmore_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'blog_entry_readmore_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'blog_entry_readmore_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'blog_entry_readmore_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'blog_entry_readmore_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'blog_entry_readmore_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_blog_archive_typography_settings' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_archive_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 1,
						'bottom'    => 10,
					],

					'ocean_blog_archive_title_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Archives Title', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'blog_entry_title_typography[color]',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.blog-entry.post .blog-entry-header .entry-title a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id'       => 'ocean_blog_archive_title_color_hover',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.blog-entry.post .blog-entry-header .entry-title a:hover' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_archive_meta_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Meta', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_archive_meta_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.blog-entry ul.meta li, .blog-entry ul.meta li a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id'       => 'ocean_blog_archive_meta_hover_color',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.blog-entry ul.meta li a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_theme_blog_posts_icons_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Meta Icons', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_theme_blog_posts_icons_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.blog-entry ul.meta li .owp-icon use' => 'stroke',
									'.blog-entry ul.meta li i' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_archive_content_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Content', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_archive_content_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.blog-entry.post .blog-entry-summary' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_blog_archive_readmore_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Read More', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_archive_readmore_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.blog-entry.post .blog-entry-readmore a' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id'       => 'ocean_blog_archive_readmore_hover_color',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.blog-entry.post .blog-entry-readmore a:hover' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_thumbnail_category_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Category', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_blog_archive_thumbnail_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_thumbnail_category_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.blog-entry.thumbnail-entry .blog-entry-category a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
							'hover' => [
								'id'       => 'ocean_blog_thumbnail_category_hover_color',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.blog-entry.thumbnail-entry .blog-entry-category a:hover' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
						]
					],

					'ocean_blog_thumbnail_comments_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Comment', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_blog_archive_thumbnail_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_thumbnail_comments_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.blog-entry.thumbnail-entry .blog-entry-comments, .blog-entry.thumbnail-entry .blog-entry-comments a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ababab',
								],
							],
							'hover' => [
								'id'       => 'ocean_blog_thumbnail_comments_hover_color',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.blog-entry.thumbnail-entry .blog-entry-comments a:hover' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#13aff0',
								],
							],
						]
					],

					'ocean_blog_thumbnail_date_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Date', 'oceanwp' ),
						'section'           => 'ocean_blog_archive_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_blog_archive_thumbnail_style',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_thumbnail_date_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.blog-entry.thumbnail-entry .blog-entry-date' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#ababab',
								],
							]
						]
					],

					'ocean_blog_archive_typography_and_colors_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Typography-and-Colors-oYnqw/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_archive_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_blog_archive_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Blog-Archives-eie5C/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_blog_archive_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			]
		]
	],

	'ocean_divider_for_single_post_section' => [
		'type'      => 'ocean-divider',
		'section'   => 'ocean_blog',
		'transport' => 'postMessage',
		'priority'  => 10,
	],

	'ocean_blog_single_section' => [
		'type'     => 'section',
		'title'    => esc_html__( 'Single Post', 'oceanwp' ),
		'section'  => 'ocean_blog',
		'after'    => 'ocean_divider_for_single_post_section',
		'class'    => 'section-site-layout',
		'priority' => 10,
		'options'  => [
			'ocean_blog_single_layout' => [
				'label'             => esc_html__( 'Single Layout', 'oceanwp' ),
				'type'              => 'ocean-radio-image',
				'section'           => 'ocean_blog_single_section',
				'transport'         => 'refresh',
				'default'           => 'right-sidebar',
				'priority'          => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'right-sidebar' => [
						'label' => esc_html__( 'Right Sidebar', 'oceanwp' ),
						'icon'  => 'right-sidebar',
					],
					'left-sidebar'  => [
						'label' => esc_html__( 'Left Sidebar', 'oceanwp' ),
						'icon'  => 'left-sidebar',
					],
					'full-width'    => [
						'label' => esc_html__( 'Full Width', 'oceanwp' ),
						'icon'  => 'full_width-no_sidebar',
					],
					'full-screen'   => [
						'label' => esc_html__( '100% Full Width', 'oceanwp' ),
						'icon'  => 'fullscreen_width',
					],
					'both-sidebars' => [
						'label' => esc_html__( 'Both Sidebar', 'oceanwp' ),
						'icon'  => 'both_sidebar_layout',
					]
				]
			],

			'ocean_divider_for_single_additional_layout_section' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
			],

			'ocean_single_additional_layout_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Layout Settings', 'oceanwp' ),
				'section'  => 'ocean_blog_single_section',
				'after'    => 'ocean_divider_for_single_additional_layout_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_blog_single_additional_layout_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'Additional layout settings are currently available for the Full Width and Both Sidebars single blog post layouts.', 'oceanwp' ),
						'section'   => 'ocean_single_additional_layout_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_blog_single_content_width' => [
						'label'             => esc_html__( 'Full Width Content (px)', 'oceanwp' ),
						'desc'              => esc_html__( 'Adjust the maximum width of the content area. Add 0 to disable the maximum width.', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_single_additional_layout_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 0,
						'max'               => 2000,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_blog_single_fw_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_single_content_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 700,
								],
							]
						]
					],

					'ocean_blog_single_both_sidebars_style' => [
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Both Sidebars: Content Order Style', 'oceanwp' ),
						'section'           => 'ocean_single_additional_layout_section',
						'transport'         => 'refresh',
						'default'           => 'scs-style',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'ocean_cac_blog_single_bs_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						],
					],

					'ocean_blog_single_both_sidebars_content_width' => [
						'label'             => esc_html__( 'Both Sidebars: Content Width', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_single_additional_layout_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 100,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_blog_single_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_single_both_sidebars_content_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id'    => 'ocean_blog_single_both_sidebars_content_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => '%',
								],
							],
						]
					],

					'ocean_blog_single_both_sidebars_sidebars_width' => [
						'label'             => esc_html__( 'Both Sidebars: Each Sidebar Width', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_single_additional_layout_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => true,
						'isResponsive'      => false,
						'min'               => 1,
						'max'               => 100,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_blog_single_bs_layout',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_single_both_sidebars_sidebars_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'unit' => [
								'id'    => 'ocean_blog_single_both_sidebars_sidebars_width_unit',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => '%',
								],
							],
						]
					],

					'ocean_blog_single_layout_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Layout-Settings-P3ilU/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_single_additional_layout_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_spacer_for_blog_single_responsive_settings_section' => [
				'type'      => 'ocean-spacer',
				'section'   => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 1,
				'bottom'    => 10,
			],

			'ocean_blog_single_responsive_settings_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Responsive Settings', 'oceanwp' ),
				'section'  => 'ocean_blog_single_section',
				'after'    => 'ocean_spacer_for_blog_single_responsive_settings_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_desc_for_blog_single_responsive_settings' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'Additional responsive settings are currently available for any of the Single Sidebar single blog post layouts.', 'oceanwp' ),
						'section'   => 'ocean_blog_single_responsive_settings_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_single_post_sidebar_order' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Sidebar Position for Mobile', 'oceanwp' ),
						'section'           => 'ocean_blog_single_responsive_settings_section',
						'default'           => 'content-sidebar',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_single_sidebar_layout',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'content-sidebar' => [
								'id'      => 'content-sidebar',
								'label'   => esc_html__( 'After Content', 'oceanwp' ),
								'content' => esc_html__( 'After Content', 'oceanwp' ),
							],
							'sidebar-content'  => [
								'id'      => 'sidebar-content',
								'label'   => esc_html__( 'Before Content', 'oceanwp' ),
								'content' => esc_html__( 'Before Content', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_single_responsive_settings_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Responsive-Settings-OVrtH/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_single_responsive_settings_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]
				]
			],

			'ocean_title_for_single_post_page_title' => [
				'type'      => 'ocean-title',
				'label'     => esc_html__( 'Single Post Title', 'oceanwp' ),
				'section'   => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 20,
			],

			'oceanwp_single_post_header_style' => [
				'type'              => 'ocean-radio-image',
				'label'             => esc_html__( 'Single Post Title Style', 'oceanwp' ),
				'desc'              => esc_html__( 'For optimal results, choose a Single Blog Post Title style that is compatible with your selected Header type. Or, apply a different Header type for each of your blog posts using OceanWP Metabox Settings.', 'oceanwp' ),
				'section'           => 'ocean_blog_single_section',
				'transport'         => 'refresh',
				'default'           => 'default',
				'priority'          => 10,
				'sanitize_callback' => 'sanitize_key',
				'choices'           => [
					'default' => [
						'label' => esc_html__( 'Default', 'oceanwp' ),
						'icon'  => 'blog_post_title_default_style',
					],
					'sph_style_2' => [
						'label' => esc_html__( 'Intro', 'oceanwp' ),
						'icon'  => 'blog_post_title_intro_title_style',
					],
					'sph_style_3' => [
						'label' => esc_html__( 'Cover', 'oceanwp' ),
						'icon'  => 'blog_post_title_cover_title_style',
					],
					'sph_style_4' => [
						'label' => esc_html__( 'Card', 'oceanwp' ),
						'icon'  => 'blog_post_title_card_title_style',
					],
					'sph_style_5' => [
						'label' => esc_html__( 'Card Invert', 'oceanwp' ),
						'icon'  => 'blog_post_title_card_invert_style',
					],
					'sph_style_6' => [
						'label' => esc_html__( 'Screen', 'oceanwp' ),
						'icon'  => 'blog_post_title_screen_style',
					],
					'sph_style_7' => [
						'label' => esc_html__( 'Screen Invert', 'oceanwp' ),
						'icon'  => 'blog_post_title_screen_invert_style',
					],
				],
			],

			'ocean_divider_for_blog_single_title_options_section' => [
				'type'      => 'ocean-divider',
				'section'   => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 10,
			],

			'ocean_blog_single_title_options_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Single Post Title Options', 'oceanwp' ),
				'section'  => 'ocean_blog_single_section',
				'after'    => 'ocean_divider_for_blog_single_title_options_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_blog_single_page_header_title' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Single Post Title', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'default'           => 'blog',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_single_post_title_default',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'blog' => [
								'id'      => 'blog',
								'label'   => esc_html__( 'Blog', 'oceanwp' ),
								'content' => esc_html__( 'Blog', 'oceanwp' ),
							],
							'post-title'  => [
								'id'      => 'post-title',
								'label'   => esc_html__( 'Post Title', 'oceanwp' ),
								'content' => esc_html__( 'Post Title', 'oceanwp' ),
							]
						]
					],

					'ocean_divider_before_blog_single_featured_image_title_setting' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_title_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'bottom'          => 1,
						'active_callback' => 'ocean_cac_blog_single_post_title_default',
					],

					'ocean_blog_single_featured_image_title' => [
						'type'              => 'ocean-switch',
						'label'             => esc_html__( 'Featured Image in Post Title', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'default'           => false,
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'active_callback'   => 'ocean_cac_blog_single_post_title_default',
						'sanitize_callback' => 'oceanwp_sanitize_checkbox',
					],

					'ocean_divider_after_blog_single_page_header_title_setting' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_title_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
					],

					'ocean_blog_single_title_breadcrumb_position' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Title and Breadcrumbs Position', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'default'           => 'center',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_single_post_title_has_featured_image',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'left' => [
								'id'      => 'left',
								'label'   => esc_html__( 'Left', 'oceanwp' ),
								'content' => esc_html__( 'Left', 'oceanwp' ),
							],
							'center'  => [
								'id'      => 'center',
								'label'   => esc_html__( 'Center', 'oceanwp' ),
								'content' => esc_html__( 'Center', 'oceanwp' ),
							],
							'right'  => [
								'id'      => 'right',
								'label'   => esc_html__( 'Right', 'oceanwp' ),
								'content' => esc_html__( 'Right', 'oceanwp' ),
							]
						]
					],

					'ocean_divider_after_blog_single_title_breadcrumb_position' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_title_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
					],

					'ocean_blog_single_title_bg_image_height' => [
						'id'                => 'ocean_blog_single_title_bg_image_height',
						'label'             => esc_html__( 'Post Title Height (px)', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_single_title_options_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 0,
						'max'               => 800,
						'step'              => 1,
						'active_callback'   => 'ocean_cac_blog_single_post_title_has_featured_image',
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_single_title_bg_image_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 400,
								],
							]
						],
						'preview'            => 'queryWithType',
						'css'                => [
							'.single-post .page-header' => ['height']
						]
					],

					'ocean_divider_after_blog_single_title_height' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_title_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
					],

					'ocean_blog_single_title_bg_image_position' => [
						'id'                => 'ocean_blog_single_title_bg_image_position',
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Position', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'transport'         => 'postMessage',
						'default'           => 'top center',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'ocean_cac_blog_single_post_title_has_featured_image',
						'sanitize_callback' => 'sanitize_key',
						'bottom'            => 30,
						'choices'           => [
							'initial'       => esc_html__( 'Default', 'oceanwp' ),
							'top left'      => esc_html__( 'Top Left', 'oceanwp' ),
							'top center'    => esc_html__( 'Top Center', 'oceanwp' ),
							'top right'     => esc_html__( 'Top Right', 'oceanwp' ),
							'center left'   => esc_html__( 'Center Left', 'oceanwp' ),
							'center center' => esc_html__( 'Center Center', 'oceanwp' ),
							'center right'  => esc_html__( 'Center Right', 'oceanwp' ),
							'bottom left'   => esc_html__( 'Bottom Left', 'oceanwp' ),
							'bottom center' => esc_html__( 'Bottom Center', 'oceanwp' ),
							'bottom right'  => esc_html__( 'Bottom Right', 'oceanwp' ),
						],
						'preview' => 'queryWithAttr',
						'css'     => [
							'selector' => '.single-post .page-header',
							'property' => 'background-position'
						]
					],

					'ocean_blog_single_title_bg_image_repeat' => [
						'id'                => 'ocean_blog_single_title_bg_image_repeat',
						'type'              => 'ocean-select',
						'label'             => esc_html__( 'Repeat', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'transport'         => 'postMessage',
						'default'           => 'no-repeat',
						'priority'          => 10,
						'hideLabel'         => false,
						'multiple'          => false,
						'active_callback'   => 'ocean_cac_blog_single_post_title_has_featured_image',
						'sanitize_callback' => 'sanitize_key',
						'bottom'            => 30,
						'choices'           => [
							'initial'   => esc_html__( 'Default', 'oceanwp' ),
							'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
							'repeat'    => esc_html__( 'Repeat', 'oceanwp' ),
							'repeat-x'  => esc_html__( 'Repeat-x', 'oceanwp' ),
							'repeat-y'  => esc_html__( 'Repeat-y', 'oceanwp' ),
						],
						'preview' => 'queryWithAttr',
						'css'     => [
							'selector' => '.single-post .page-header',
							'property' => 'background-repeat'
						]
					],

					'ocean_blog_single_title_bg_image_attachment' => [
						'id'                => 'ocean_blog_single_title_bg_image_attachment',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Attachment', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'default'           => 'initial',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_single_post_title_has_featured_image',
						'sanitize_callback' => 'sanitize_key',
						'bottom'            => 30,
						'choices'           => [
							'initial' => [
								'id'      => 'initial',
								'label'   => esc_html__( 'Default', 'oceanwp' ),
								'content' => esc_html__( 'Default', 'oceanwp' ),
							],
							'scroll'  => [
								'id'      => 'scroll',
								'label'   => esc_html__( 'Scroll', 'oceanwp' ),
								'content' => esc_html__( 'Scroll', 'oceanwp' ),
							],
							'fixed'  => [
								'id'      => 'fixed',
								'label'   => esc_html__( 'Fixed', 'oceanwp' ),
								'content' => esc_html__( 'Fixed', 'oceanwp' ),
							]
						],
						'preview' => 'queryWithAttr',
						'css'     => [
							'selector' => '.single-post .page-header',
							'property' => 'background-attachment'
						]
					],

					'ocean_blog_single_title_bg_image_size' => [
						'id'                => 'ocean_blog_single_title_bg_image_size',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Size', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'default'           => 'cover',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_blog_single_post_title_has_featured_image',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'initial' => [
								'id'      => 'initial',
								'label'   => esc_html__( 'Default', 'oceanwp' ),
								'content' => esc_html__( 'Default', 'oceanwp' ),
							],
							'auto'  => [
								'id'      => 'auto',
								'label'   => esc_html__( 'Auto', 'oceanwp' ),
								'content' => esc_html__( 'Auto', 'oceanwp' ),
							],
							'cover'  => [
								'id'      => 'cover',
								'label'   => esc_html__( 'Cover', 'oceanwp' ),
								'content' => esc_html__( 'Cover', 'oceanwp' ),
							],
							'contain'  => [
								'id'      => 'contain',
								'label'   => esc_html__( 'Contain', 'oceanwp' ),
								'content' => esc_html__( 'Contain', 'oceanwp' ),
							]
						],
						'preview' => 'queryWithAttr',
						'css'     => [
							'selector' => '.single-post .page-header',
							'property' => 'background-size',
						]
					],

					'ocean_divider_after_blog_single_title_bg_image_size' => [
						'type' => 'ocean-divider',
						'section' => 'ocean_blog_single_title_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'top' => 1,
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
					],

					'ocean_blog_single_title_bg_image_overlay_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Overlay Color', 'oceanwp' ),
						'section' => 'ocean_blog_single_title_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_blog_single_title_bg_image_overlay_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-post .background-image-page-header-overlay' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#000000',
								],
							]
						]
					],

					'ocean_blog_single_title_bg_image_overlay_opacity' => [
						'id' => 'ocean_blog_single_title_bg_image_overlay_opacity',
						'label'    => esc_html__( 'Overlay Opacity', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_blog_single_title_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 0,
						'max'          => 1,
						'step'         => 0.1,
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_blog_single_title_bg_image_overlay_opacity',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 0.5,
								],
							]
						],
						'preview' => 'queryWithType',
						'css' => [
							'.single-post .background-image-page-header-overlay' => ['opacity']
						]
					],

					'oceanwp_single_post_header_background' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Post Title Background', 'oceanwp' ),
						'section' => 'ocean_blog_single_title_options_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'active_callback' => 'oceanwp_cac_not_single_post_title_cover_default',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args' => [
							'normal' => [
								'id' => 'oceanwp_single_post_header_background',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-post-header-wrap, .single-header-ocean-6 .blog-post-title, .single-header-ocean-7 .blog-post-title' => 'background-color'
								],
								'attr' => [
									'transport' => 'postMessage',
									'default'   => '#e5e5e5',
								],
							]
						]
					],

					'oceanwp_single_post_header_background_cover' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Post Title Overlay', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'oceanwp_cac_single_post_title_cover',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'oceanwp_single_post_header_background_cover',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-post-header-wrap .header-color-overlay' => 'background-color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#000000b3',
								],
							]
						]
					],

					'oceanwp_single_post_meta_icon_clr' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Meta Icon Color', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'oceanwp_cac_not_single_post_meta_stylish',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'oceanwp_single_post_meta_icon_clr',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.ocean-single-post-header ul.meta-item li .owp-icon use' => 'stroke',
									'.ocean-single-post-header ul.meta-item li i ' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#000',
								],
							]
						]
					],

					'ocean_divider_after_blog_single_post_header_background_cover' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_title_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'active_callback' => 'ocean_cac_not_blog_single_post_title_default',
					],

					'oceanwp_single_post_header_meta_style' => [
						'id'                => 'oceanwp_single_post_header_meta_style',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Post Title Meta Style', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'default'           => 'spm_style_2',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_not_blog_single_post_title_default',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'spm_style_2' => [
								'id'      => 'spm_style_2',
								'label'   => esc_html__( 'Minimal', 'oceanwp' ),
								'content' => esc_html__( 'Minimal', 'oceanwp' ),
							],
							'spm_style_3'  => [
								'id'      => 'spm_style_3',
								'label'   => esc_html__( 'Stylish', 'oceanwp' ),
								'content' => esc_html__( 'Stylish', 'oceanwp' ),
							]
						]
					],

					'oceanwp_single_post_header_meta_separator' => [
						'id'                => 'oceanwp_single_post_header_meta_separator',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Post Title Meta Separator', 'oceanwp' ),
						'section'           => 'ocean_blog_single_title_options_section',
						'default'           => 'stylish',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'active_callback'   => 'ocean_cac_not_blog_single_post_title_default',
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'none' => [
								'id'      => 'none',
								'label'   => esc_html__( 'None', 'oceanwp' ),
								'content' => esc_html__( 'None', 'oceanwp' ),
							],
							'classic'  => [
								'id'      => 'classic',
								'label'   => esc_html__( 'Classic', 'oceanwp' ),
								'content' => esc_html__( 'Classic', 'oceanwp' ),
							],
							'stylish'  => [
								'id'      => 'stylish',
								'label'   => esc_html__( 'Stylish', 'oceanwp' ),
								'content' => esc_html__( 'Stylish', 'oceanwp' ),
							],
							'modern'  => [
								'id'      => 'modern',
								'label'   => esc_html__( 'Modern', 'oceanwp' ),
								'content' => esc_html__( 'Modern', 'oceanwp' ),
							]
						]
					],

					'ocean_divider_after_blog_single_title_meta_separator' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_title_options_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'active_callback' => 'ocean_cac_not_blog_single_post_title_default',
					],

					'oceanwp_blog_single_header_meta' => [
						'label'           => esc_html__( 'Single Post Title Elements', 'oceanwp' ),
						'type'            => 'ocean-sortable',
						'section'         => 'ocean_blog_single_title_options_section',
						'transport'       => 'refresh',
						'priority'        => 10,
						'hideLabel'       => false,
						'default'         => [ 'author', 'date', 'categories', 'comments', 'mod-date', 'reading-time', 'tags' ],
						'active_callback' => 'ocean_cac_not_blog_single_post_title_default',
						'hideLabel'       => false,
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
						'choices'         => apply_filters(
							'ocean_blog_header_meta_choices',
							[
								'author'        => esc_html__( 'Author', 'oceanwp' ),
								'date'          => esc_html__( 'Date', 'oceanwp' ),
								'categories'    => esc_html__( 'Categories', 'oceanwp' ),
								'comments'      => esc_html__( 'Comments', 'oceanwp' ),
								'mod-date'      => esc_html__( 'Modified Date', 'oceanwp' ),
								'reading-time'  => esc_html__( 'Reading Time', 'oceanwp' ),
								'tags'          => esc_html__( 'Tags', 'oceanwp' ),
							]
						),
					],

					'ocean_blog_single_title__options_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Single-Post-Title-Options-f6Ho1/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_single_title_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]

				]
			],

			'ocean_title_for_blog_single_post_title_section' => [
				'type' => 'ocean-title',
				'label' => esc_html__( 'Single Post Content', 'oceanwp' ),
				'section' => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority' => 10,
				'top' => 20,
				'bottom' => 20
			],

			'ocean_blog_single_content_builder_section' => [
				'type' => 'section',
				'title' => esc_html__( 'Content Builder', 'oceanwp' ),
				'section' => 'ocean_blog_single_section',
				'after' => 'ocean_title_for_blog_single_post_title_section',
				'class' => 'section-site-layout',
				'priority' => 10,
				'options' => [
					'ocean_single_post_heading_tag' => [
						'type' => 'ocean-select',
						'label' => esc_html__( 'Title Tag', 'oceanwp' ),
						'section' => 'ocean_blog_single_content_builder_section',
						'transport' => 'refresh',
						'default' => 'h2',
						'priority' => 10,
						'hideLabel' => false,
						'multiple' => false,
						'sanitize_callback' => 'sanitize_key',
						'choices' => [
							'h1'   => esc_html__( 'H1', 'oceanwp' ),
							'h2'   => esc_html__( 'H2', 'oceanwp' ),
							'h3'   => esc_html__( 'H3', 'oceanwp' ),
							'h4'   => esc_html__( 'H4', 'oceanwp' ),
							'h5'   => esc_html__( 'H5', 'oceanwp' ),
							'h6'   => esc_html__( 'H6', 'oceanwp' ),
							'div'  => esc_html__( 'div', 'oceanwp' ),
							'span' => esc_html__( 'span', 'oceanwp' ),
							'p'    => esc_html__( 'p', 'oceanwp' ),
						],
					],

					'ocean_divider_after_blog_single_post_heading_tag' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_single_content_builder_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 10,
						'bottom'    => 10,
					],

					'ocean_desc_for_blog_single_content_position' => [
						'type'      => 'ocean-content',
						'isContent' => esc_html__( 'You can organize your single blog post content by using the drag & drop method.', 'oceanwp' ),
						'section'   => 'ocean_blog_single_content_builder_section',
						'class'     => 'description',
						'transport' => 'postMessage',
						'priority'  => 10,
					],

					'ocean_blog_single_elements_positioning' => [
						'label'         => esc_html__( 'Main Content Elements', 'oceanwp' ),
						'type'          => 'ocean-sortable',
						'section'       => 'ocean_blog_single_content_builder_section',
						'transport'     => 'refresh',
						'priority'      => 10,
						'default'       => [ 'featured_image', 'title', 'meta', 'content', 'tags', 'social_share', 'next_prev', 'author_box', 'related_posts', 'single_comments' ],
						'hideLabel'     => false,
						'initialStatus' => true,
						'choices'       => oceanwp_blog_single_elements(),
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
					],

					'ocean_divider_after_blog_single_elements_positioning' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_single_content_builder_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 10,
					],

					'ocean_blog_single_meta' => [
						'label'         => esc_html__( 'Meta Section Elements', 'oceanwp' ),
						'type'          => 'ocean-sortable',
						'section'       => 'ocean_blog_single_content_builder_section',
						'transport'     => 'refresh',
						'priority'      => 10,
						'default'       => [ 'author', 'date', 'categories', 'comments' ],
						'hideLabel'     => false,
						'initialStatus' => true,
						'sanitize_callback' => 'ocean_sanitize_sortable_control',
						'choices'       => apply_filters(
							'ocean_blog_meta_choices',
							[
								'author'       => esc_html__( 'Author', 'oceanwp' ),
								'date'         => esc_html__( 'Date', 'oceanwp' ),
								'categories'   => esc_html__( 'Categories', 'oceanwp' ),
								'comments'     => esc_html__( 'Comments', 'oceanwp' ),
								'mod-date'     => esc_html__( 'Modified Date', 'oceanwp' ),
								'reading-time' => esc_html__( 'Reading Time', 'oceanwp' ),
							]
						),
					],

					'ocean_divider_after_blog_single_meta' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_single_content_builder_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 10,
					],

					'ocean_blog_single_meta_separator' => [
						'id'                => 'ocean_blog_single_meta_separator',
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Meta Separator', 'oceanwp' ),
						'section'           => 'ocean_blog_single_content_builder_section',
						'default'           => 'default',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'default'  => [
								'id'      => 'default',
								'label'   => esc_html__( 'Default', 'oceanwp' ),
								'content' => esc_html__( 'Default', 'oceanwp' ),
							],
							'modern'  => [
								'id'      => 'modern',
								'label'   => esc_html__( 'Modern', 'oceanwp' ),
								'content' => esc_html__( 'Modern', 'oceanwp' ),
							],
							'stylish'  => [
								'id'      => 'stylish',
								'label'   => esc_html__( 'Stylish', 'oceanwp' ),
								'content' => esc_html__( 'Stylish', 'oceanwp' ),
							],
							'none' => [
								'id'      => 'none',
								'label'   => esc_html__( 'None', 'oceanwp' ),
								'content' => esc_html__( 'None', 'oceanwp' ),
							],
						]
					],

					'ocean_blog_single_content_builder_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Content-Builder-fMepE/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_single_content_builder_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]

				]
			],

			'ocean_spacer_for_blog_single_additional_single_post_options_section' => [
				'type' => 'ocean-spacer',
				'section'   => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 1,
				'bottom'    => 10,
			],

			'ocean_blog_single_additional_single_post_options_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Single Post Options', 'oceanwp' ),
				'section'  => 'ocean_blog_single_section',
				'after'    => 'ocean_spacer_for_blog_single_additional_single_post_options_section',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_comment_form_position' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Comment Form Position', 'oceanwp' ),
						'section'           => 'ocean_blog_single_additional_single_post_options_section',
						'default'           => 'after',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'before'  => [
								'id'      => 'before',
								'label'   => esc_html__( 'Before', 'oceanwp' ),
								'content' => esc_html__( 'Before', 'oceanwp' ),
							],
							'after'  => [
								'id'      => 'after',
								'label'   => esc_html__( 'After', 'oceanwp' ),
								'content' => esc_html__( 'After', 'oceanwp' ),
							]
						]
					],

					'ocean_divider_after_blog_single_comment_form_position' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_single_additional_single_post_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 1,
						'bottom'    => 10,
					],

					'ocean_single_post_next_prev_taxonomy' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Next/Prev Post Taxonomy', 'oceanwp' ),
						'section'           => 'ocean_blog_single_additional_single_post_options_section',
						'default'           => 'post_tag',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'category'  => [
								'id'      => 'category',
								'label'   => esc_html__( 'Category', 'oceanwp' ),
								'content' => esc_html__( 'Category', 'oceanwp' ),
							],
							'post_tag'  => [
								'id'      => 'post_tag',
								'label'   => esc_html__( 'Tag', 'oceanwp' ),
								'content' => esc_html__( 'Tag', 'oceanwp' ),
							],
							'pub-date'  => [
								'id'      => 'pub-date',
								'label'   => esc_html__( 'Date', 'oceanwp' ),
								'content' => esc_html__( 'Date', 'oceanwp' ),
							]
						]
					],

					'ocean_divider_after_blog_single_next_prev_taxonomy' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_single_additional_single_post_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 1,
						'bottom'    => 10,
					],

					'ocean_blog_related_taxonomy' => [
						'type'              => 'ocean-buttons',
						'label'             => esc_html__( 'Related Posts Taxonomy', 'oceanwp' ),
						'section'           => 'ocean_blog_single_additional_single_post_options_section',
						'default'           => 'category',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'wrap'              => false,
						'sanitize_callback' => 'sanitize_key',
						'choices'           => [
							'category'  => [
								'id'      => 'category',
								'label'   => esc_html__( 'Category', 'oceanwp' ),
								'content' => esc_html__( 'Category', 'oceanwp' ),
							],
							'post_tag'  => [
								'id'      => 'post_tag',
								'label'   => esc_html__( 'Tag', 'oceanwp' ),
								'content' => esc_html__( 'Tag', 'oceanwp' ),
							]
						]
					],

					'ocean_blog_related_count' => [
						'label'             => esc_html__( 'Related Posts Count', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_single_additional_single_post_options_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => false,
						'min'               => 2,
						'max'               => 50,
						'step'              => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'bottom'            => 30,
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_related_count',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'refresh',
									'default'   => 3,
								],
							]
						]
					],

					'ocean_blog_related_columns' => [
						'label'             => esc_html__( 'Related Post Columns', 'oceanwp' ),
						'type'              => 'ocean-range-slider',
						'section'           => 'ocean_blog_single_additional_single_post_options_section',
						'transport'         => 'refresh',
						'priority'          => 10,
						'hideLabel'         => false,
						'isUnit'            => false,
						'isResponsive'      => true,
						'min'               => 1,
						'max'               => 6,
						'step'              => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'bottom'            => 30,
						'setting_args'      => [
							'desktop' => [
								'id'    => 'ocean_blog_related_columns',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default' => 3,
								],
							],
							'tablet' => [
								'id' => 'ocean_blog_related_columns_tablet',
								'label' => esc_html__( 'Tablet', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 2,
								],
							],
							'mobile' => [
								'id' => 'ocean_blog_related_columns_mobile',
								'label' => esc_html__( 'Mobile', 'oceanwp' ),
								'attr' => [
									'transport' => 'postMessage',
									'default' => 1,
								],
							]
						]
					],

					'ocean_blog_related_img_width' => [
						'label'    => esc_html__( 'Related Posts Image Width (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_blog_single_additional_single_post_options_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 800,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_blog_related_img_width',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
								],
							]
						]
					],

					'ocean_blog_related_img_height' => [
						'label'    => esc_html__( 'Related Posts Image Height (px)', 'oceanwp' ),
						'type'     => 'ocean-range-slider',
						'section'  => 'ocean_blog_single_additional_single_post_options_section',
						'transport' => 'refresh',
						'priority' => 10,
						'hideLabel'    => false,
						'isUnit'       => false,
						'isResponsive' => false,
						'min'          => 1,
						'max'          => 800,
						'step'         => 1,
						'sanitize_callback' => 'oceanwp_sanitize_number_blank',
						'setting_args' => [
							'desktop' => [
								'id' => 'ocean_blog_related_img_height',
								'label' => esc_html__( 'Desktop', 'oceanwp' ),
								'attr' => [
									'transport' => 'refresh',
								],
							]
						]
					],

					'ocean_blog_single_post_options_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Single-Post-Options-ufJKc/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_single_additional_single_post_options_section',
						'transport' => 'postMessage',
						'priority'  => 10,
					]

				]
			],

			'ocean_title_for_blog_single_post_typography_and_color' => [
				'type'      => 'ocean-title',
				'label'     => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section'   => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority'  => 10,
				'top'       => 20,
				'bottom'    => 20,
			],

			'ocean_blog_single_typography_and_colors_section' => [
				'type'     => 'section',
				'title'    => esc_html__( 'Typography and Colors', 'oceanwp' ),
				'section'  => 'ocean_blog_single_section',
				'after'    => 'ocean_title_for_blog_single_post_typography_and_color',
				'class'    => 'section-site-layout',
				'priority' => 10,
				'options'  => [
					'ocean_blog_single_title_bg_image_typography' => [
						'id' => 'ocean_blog_single_title_bg_image_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Page Title', 'oceanwp'),
						'section' => 'ocean_blog_single_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.single .page-header.background-image-page-header .page-header-title',
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'blog_single_title_bg_image_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'blog_single_title_bg_image_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'heading_h5_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'heading_h5_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'blog_single_title_bg_image_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'blog_single_title_bg_image_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeTablet' => [
								'id' => 'heading_h5_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'heading_h5_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'blog_single_title_bg_image_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'blog_single_title_bg_image_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id' => 'heading_h5_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'heading_h5_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'blog_single_title_bg_image_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'blog_single_title_bg_image_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightTablet' => [
								'id' => 'heading_h5_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'heading_h5_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'blog_single_title_bg_image_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'blog_single_title_bg_image_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'heading_h5_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'heading_h5_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'blog_single_title_bg_image_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_single_title_bg_image_breadcrumb_typography' => [
						'id' => 'ocean_blog_single_title_bg_image_breadcrumb_typography',
						'type' => 'ocean-typography',
						'label' => esc_html__('Page Title Breadcrumbs', 'oceanwp'),
						'section' => 'ocean_blog_single_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'selector' => '.single .background-image-page-header .site-breadcrumbs, .single .background-image-page-header .site-breadcrumbs a',
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
						'setting_args' => [
							'fontFamily' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[font-family]',
								'label' => esc_html__('Font Family', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id' => 'heading_h5_tablet_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id' => 'heading_h5_mobile_typography[font-weight]',
								'label' => esc_html__('Font Weight', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[font-subset]',
								'label' => esc_html__('Font Subset', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeTablet' => [
								'id' => 'heading_h5_tablet_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id' => 'heading_h5_mobile_typography[font-size]',
								'label' => esc_html__('Font Size', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[font-size-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'letterSpacing' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingTablet' => [
								'id' => 'heading_h5_tablet_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id' => 'heading_h5_mobile_typography[letter-spacing]',
								'label' => esc_html__('Letter Spacing', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[letter-spacing-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
									'default'   => 'px'
								],
							],
							'lineHeight' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightTablet' => [
								'id' => 'heading_h5_tablet_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id' => 'heading_h5_mobile_typography[line-height]',
								'label' => esc_html__('Line Height', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[line-height-unit]',
								'label' => esc_html__('Unit', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id' => 'heading_h5_tablet_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id' => 'heading_h5_mobile_typography[text-transform]',
								'label' => esc_html__('Text Transform', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id' => 'blog_single_title_bg_image_breadcrumb_typography[text-decoration]',
								'label' => esc_html__('Text Decoration', 'oceanwp'),
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_single_post_title_typography' => [
						'id'              => 'ocean_single_post_title_typography',
						'type'            => 'ocean-typography',
						'label'           => esc_html__( 'Blog Post Page Title Heading', 'oceanwp' ),
						'section'         => 'ocean_blog_single_typography_and_colors_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'hideLabel'       => false,
						'selector'        => '.ocean-single-post-header .single-post-title',
						'active_callback' => 'ocean_cac_not_blog_single_post_title_default',
						'setting_args'    => [
							'fontFamily' => [
								'id'    => 'single_post_title_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'single_post_title_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'single_post_title_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'single_post_title_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'single_post_title_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'single_post_title_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 34,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'single_post_title_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'single_post_title_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'single_post_title_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'letterSpacing' => [
								'id'    => 'single_post_title_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 0.6,
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'single_post_title_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'single_post_title_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'single_post_title_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeight' => [
								'id'    => 'single_post_title_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.4,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'single_post_title_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'single_post_title_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'single_post_title_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'single_post_title_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'single_post_title_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'single_post_title_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'single_post_title_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_single_post_meta_typography' => [
						'id'              => 'ocean_single_post_meta_typography',
						'type'            => 'ocean-typography',
						'label'           => esc_html__( 'Blog Post Page Title Meta', 'oceanwp' ),
						'section'         => 'ocean_blog_single_typography_and_colors_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'hideLabel'       => false,
						'selector'        => '.ocean-single-post-header ul.meta-item li, .ocean-single-post-header ul.meta-item li a',
						'active_callback' => 'ocean_cac_not_blog_single_post_title_default',
						'setting_args'    => [
							'fontFamily' => [
								'id'    => 'single_post_meta_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'single_post_meta_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'single_post_meta_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'single_post_meta_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'single_post_meta_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'single_post_meta_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 13,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'single_post_meta_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'single_post_meta_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'single_post_meta_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'letterSpacing' => [
								'id'    => 'single_post_meta_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 0.6,
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'single_post_meta_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'single_post_meta_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'single_post_meta_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeight' => [
								'id'    => 'single_post_meta_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.4,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'single_post_meta_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'single_post_meta_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'single_post_meta_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'single_post_meta_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'single_post_meta_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'single_post_meta_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'single_post_meta_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_single_post_title_author_typography' => [
						'id'              => 'ocean_single_post_title_author_typography',
						'type'            => 'ocean-typography',
						'label'           => esc_html__( 'Blog Post Page Title Author ', 'oceanwp' ),
						'section'         => 'ocean_blog_single_typography_and_colors_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'hideLabel'       => false,
						'selector'        => '.ocean-single-post-header .post-author-name, .ocean-single-post-header .post-author-name a',
						'active_callback' => 'ocean_cac_not_blog_single_post_title_default',
						'setting_args'    => [
							'fontFamily' => [
								'id'    => 'single_post_title_author_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'single_post_title_author_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'single_post_title_author_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'single_post_title_author_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'single_post_title_author_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'single_post_title_author_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 14,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'single_post_title_author_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'single_post_title_author_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'single_post_title_author_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'letterSpacing' => [
								'id'    => 'single_post_title_author_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 0.6,
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'single_post_title_author_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'single_post_title_author_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'single_post_title_author_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeight' => [
								'id'    => 'single_post_title_author_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.4,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'single_post_title_author_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'single_post_title_author_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'single_post_title_author_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'single_post_title_author_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'single_post_title_author_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'single_post_title_author_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'single_post_title_author_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_single_post_title_author_bio_typography' => [
						'id'              => 'ocean_single_post_title_author_bio_typography',
						'type'            => 'ocean-typography',
						'label'           => esc_html__( 'Blog Post Author Bio', 'oceanwp' ),
						'section'         => 'ocean_blog_single_typography_and_colors_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'hideLabel'       => false,
						'selector'        => '.ocean-single-post-header .post-author-description',
						'active_callback' => 'ocean_cac_not_blog_single_post_title_default',
						'setting_args'    => [
							'fontFamily' => [
								'id'    => 'single_post_title_author_bio_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'single_post_title_author_bio_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'single_post_title_author_bio_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'single_post_title_author_bio_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'single_post_title_author_bio_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'single_post_title_author_bio_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 12,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'single_post_title_author_bio_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'single_post_title_author_bio_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'single_post_title_author_bio_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'letterSpacing' => [
								'id'    => 'single_post_title_author_bio_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 0.6,
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'single_post_title_author_bio_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'single_post_title_author_bio_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'single_post_title_author_bio_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeight' => [
								'id'    => 'single_post_title_author_bio_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.4,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'single_post_title_author_bio_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'single_post_title_author_bio_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'single_post_title_author_bio_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'single_post_title_author_bio_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'single_post_title_author_bio_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'single_post_title_author_bio_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'single_post_title_author_bio_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_before_blog_post_content_title_typo' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_typography_and_colors_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'bottom'          => 10,
						'active_callback' => function( $true ) {
							return (
								ocean_cac_blog_single_post_title_has_featured_image( $true )
								|| ocean_cac_not_blog_single_post_title_default( $true )
							);
						},
					],

					'ocean_blog_post_title_typography' => [
						'id'           => 'ocean_blog_post_title_typography',
						'type'         => 'ocean-typography',
						'label'        => esc_html__( 'Blog Post Content Title', 'oceanwp' ),
						'section'      => 'ocean_blog_single_typography_and_colors_section',
						'transport'    => 'postMessage',
						'priority'     => 10,
						'hideLabel'    => false,
						'selector'     => '.single-post .entry-title',
						'setting_args' => [
							'fontFamily' => [
								'id'    => 'blog_post_title_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'blog_post_title_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'blog_post_title_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'blog_post_title_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'blog_post_title_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'blog_post_title_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr ' => [
									'transport' => 'postMessage',
									'default'   => 34,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'blog_post_title_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'blog_post_title_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'blog_post_title_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'letterSpacing' => [
								'id'    => 'blog_post_title_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 0.6,
								],
							],
							'letterSpacingTablet' => [
								'id'    => 'blog_post_title_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'blog_post_title_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'blog_post_title_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeight' => [
								'id'    => 'blog_post_title_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.4,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'blog_post_title_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'blog_post_title_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'blog_post_title_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'blog_post_title_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'blog_post_title_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'blog_post_title_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'blog_post_title_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_post_meta_typography' => [
						'id'           => 'ocean_blog_post_meta_typography',
						'type'         => 'ocean-typography',
						'label'        => esc_html__( 'Blog Post Content Meta', 'oceanwp' ),
						'section'      => 'ocean_blog_single_typography_and_colors_section',
						'transport'    => 'postMessage',
						'priority'     => 10,
						'hideLabel'    => false,
						'selector'     => '.single-post ul.meta li, .single-post ul.meta li a',
						'setting_args' => [
							'fontFamily' => [
								'id'    => 'blog_post_meta_typography[font-family]',
								'label' => esc_html__( 'Font Family', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeight' => [
								'id'    => 'blog_post_meta_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightTablet' => [
								'id'    => 'blog_post_meta_tablet_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontWeightMobile' => [
								'id'    => 'blog_post_meta_mobile_typography[font-weight]',
								'label' => esc_html__( 'Font Weight', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSubset' => [
								'id'    => 'blog_post_meta_typography[font-subset]',
								'label' => esc_html__( 'Font Subset', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSize' => [
								'id'    => 'blog_post_meta_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 14,
								],
							],
							'fontSizeTablet' => [
								'id'    => 'blog_post_meta_tablet_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeMobile' => [
								'id'    => 'blog_post_meta_mobile_typography[font-size]',
								'label' => esc_html__( 'Font Size', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'fontSizeUnit' => [
								'id'    => 'blog_post_meta_typography[font-size-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 'px',
								],
							],
							'letterSpacing' => [
								'id'    => 'blog_post_meta_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 0.6,
								],
							],
							'letterSpacingTablet' => [
								'id' => 'blog_post_meta_tablet_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingMobile' => [
								'id'    => 'blog_post_meta_mobile_typography[letter-spacing]',
								'label' => esc_html__( 'Letter Spacing', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'letterSpacingUnit' => [
								'id'    => 'blog_post_meta_typography[letter-spacing-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeight' => [
								'id'    => 'blog_post_meta_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
									'default'   => 1.4,
								],
							],
							'lineHeightTablet' => [
								'id'    => 'blog_post_meta_tablet_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightMobile' => [
								'id'    => 'blog_post_meta_mobile_typography[line-height]',
								'label' => esc_html__( 'Line Height', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'lineHeightUnit' => [
								'id'    => 'blog_post_meta_typography[line-height-unit]',
								'label' => esc_html__( 'Unit', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransform' => [
								'id'    => 'blog_post_meta_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformTablet' => [
								'id'    => 'blog_post_meta_tablet_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textTransformMobile' => [
								'id'    => 'blog_post_meta_mobile_typography[text-transform]',
								'label' => esc_html__( 'Text Transform', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
							'textDecoration' => [
								'id'    => 'blog_post_meta_typography[text-decoration]',
								'label' => esc_html__( 'Text Decoration', 'oceanwp' ),
								'attr'  => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_divider_after_blog_single_typography_settings' => [
						'type'      => 'ocean-divider',
						'section'   => 'ocean_blog_single_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority'  => 10,
						'top'       => 1,
						'bottom'    => 10
					],

					'ocean_blog_single_title_bg_image_title_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Page Title Color', 'oceanwp' ),
						'section' => 'ocean_blog_single_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_blog_single_title_bg_image_title_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single .page-header.background-image-page-header .page-header-title' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_single_title_bg_image_breadcrumb_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Page Title Breadcrumbs', 'oceanwp' ),
						'section' => 'ocean_blog_single_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_blog_single_title_bg_image_breadcrumb_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single .background-image-page-header .site-breadcrumbs, .single .background-image-page-header .site-breadcrumbs a' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_single_title_bg_image_separator_color' => [
						'type' => 'ocean-color',
						'label' => esc_html__( 'Page Title Separator', 'oceanwp' ),
						'section' => 'ocean_blog_single_typography_and_colors_section',
						'transport' => 'postMessage',
						'priority' => 10,
						'hideLabel' => false,
						'showAlpha' => true,
						'showPalette' => true,
						'sanitize_callback' => 'wp_kses_post',
						'active_callback' => 'ocean_cac_blog_single_post_title_has_featured_image',
						'setting_args' => [
							'normal' => [
								'id' => 'ocean_blog_single_title_bg_image_separator_color',
								'key' => 'normal',
								'label' => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single .site-breadcrumbs ul li .breadcrumb-sep, .single .site-breadcrumbs ol li .breadcrumb-sep' => 'color'
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							],
						]
					],

					'ocean_blog_single_post_title_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Page Title Heading', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_not_blog_single_post_title_default',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'single_post_title_typography[color]',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.ocean-single-post-header .single-post-title' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_blog_single_post_meta_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Page Title Meta', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_not_blog_single_post_title_default',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'single_post_meta_typography[color]',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.ocean-single-post-header ul.meta-item li, .ocean-single-post-header ul.meta-item li a' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id'       => 'single_post_meta_typography_color_hover',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.ocean-single-post-header ul.meta-item li a:hover' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_blog_single_post_title_author_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Page Title Author', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_not_blog_single_post_title_default',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'single_post_title_author_typography[color]',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.ocean-single-post-header .post-author-name, .ocean-single-post-header .post-author-name a' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_blog_single_post_title_author_bio_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Author Bio', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'active_callback'   => 'ocean_cac_not_blog_single_post_title_default',
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'single_post_title_author_bio_typography[color]',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.ocean-single-post-header .post-author-description' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_divider_before_blog_post_content_title_color' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_typography_and_colors_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'bottom'          => 10,
						'active_callback' => function( $true ) {
							return (
								ocean_cac_blog_single_post_title_has_featured_image( $true )
								|| ocean_cac_not_blog_single_post_title_default( $true )
							);
						},
					],

					'ocean_blog_post_title_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Content Title', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'blog_post_title_typography[color]',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-post .entry-title' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_blog_post_meta_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Content Meta', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'blog_post_meta_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.single-post ul.meta li, .single-post ul.meta li a' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							],
							'hover' => [
								'id'       => 'blog_post_meta_color_hover',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.single-post ul.meta li a:hover' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage'
								],
							]
						]
					],

					'ocean_theme_single_post_icons_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Content Meta Icons', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_theme_single_post_icons_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-post ul.meta li i' => 'color',
									'.single-post ul.meta li .owp-icon use' => 'stroke',
								],
								'attr'     => [
									'transport' => 'postMessage',
									'default'   => '#333333',
								],
							]
						]
					],

					'ocean_blog_single_content_link_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Blog Post Content Links', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_single_content_link_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.single-post .entry-content a' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id'       => 'ocean_blog_single_content_link_color_hover',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.single-post .entry-content a:hover' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage'
								],
							]
						]
					],

					'ocean_divider_before_blog_related_posts_color' => [
						'type'            => 'ocean-divider',
						'section'         => 'ocean_blog_single_typography_and_colors_section',
						'transport'       => 'postMessage',
						'priority'        => 10,
						'top'             => 1,
						'bottom'          => 10,
					],

					'ocean_blog_single_related_post_title_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Related Posts Title', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_single_related_post_title_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Normal', 'oceanwp' ),
								'selector' => [
									'.single-post .related-post-title a' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage',
								],
							],
							'hover' => [
								'id'       => 'ocean_blog_single_related_post_title_color_hover',
								'key'      => 'hover',
								'label'    => esc_html__( 'Hover', 'oceanwp' ),
								'selector' => [
									'.single-post .related-post-title a:hover' => 'color'
								],
								'attr'     => [
									'transport' => 'postMessage'
								],
							]
						]
					],

					'ocean_blog_single_related_post_date_color' => [
						'type'              => 'ocean-color',
						'label'             => esc_html__( 'Related Posts Date', 'oceanwp' ),
						'section'           => 'ocean_blog_single_typography_and_colors_section',
						'transport'         => 'postMessage',
						'priority'          => 10,
						'hideLabel'         => false,
						'showAlpha'         => true,
						'showPalette'       => true,
						'sanitize_callback' => 'wp_kses_post',
						'setting_args'      => [
							'normal' => [
								'id'       => 'ocean_blog_single_related_post_date_color',
								'key'      => 'normal',
								'label'    => esc_html__( 'Select Color', 'oceanwp' ),
								'selector' => [
									'.single-post #related-posts time.published' => 'color',
									'.single-post #related-posts time.published .owp-icon use' => 'stroke',
								],
								'attr' => [
									'transport' => 'postMessage',
								],
							]
						]
					],

					'ocean_blog_single_typography_and_colors_section_need_help' => [
						'type'      => 'ocean-content',
						'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Typography-and-Colors-WVR_Q/" target="_blank">', '</a>' ),
						'class'     => 'need-help',
						'section'   => 'ocean_blog_single_typography_and_colors_section',
						'transport' => 'postMessage',
					]
				]
			],

			'ocean_blog_single_need_help' => [
				'type'      => 'ocean-content',
				'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog#Single-Post-ugA8C/" target="_blank">', '</a>' ),
				'class'     => 'need-help',
				'section'   => 'ocean_blog_single_section',
				'transport' => 'postMessage',
				'priority'  => 10,
			]
		]
	],

	'ocean_divider_after_blog_section_section' => [
		'type'            => 'ocean-divider',
		'section'         => 'ocean_blog',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'top'             => 20,
		'bottom'          => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_blog_upsell_notice' => [
		'type'            => 'ocean-content',
		'isContent'       => owp_render_blog_upsell_notice(),
		'section'         => 'ocean_blog',
		'class'           => 'description',
		'transport'       => 'postMessage',
		'priority'        => 10,
		'active_callback' => 'ocean_upsell_notice_callback',
	],

	'ocean_blog_need_help' => [
		'type'      => 'ocean-content',
		'isContent' => sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/article/902-customizer-blog/" target="_blank">', '</a>' ),
		'class'     => 'need-help',
		'section'   => 'ocean_blog',
		'transport' => 'postMessage',
		'priority'  => 10,
	]
];
