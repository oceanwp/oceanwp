<?php
/**
 * General Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_General_Customizer' ) ) :

	/**
	 * Settings for general options
	 */
	class OceanWP_General_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {

			add_action( 'customize_register', array( $this, 'customizer_options' ) );
			add_filter( 'ocean_head_css', array( $this, 'head_css' ) );

		}

		/**
		 * Customizer options
		 *
		 * @param WP_Customize_Manager $wp_customize Reference to WP_Customize_Manager.
		 * @since 1.0.0
		 */
		public function customizer_options( $wp_customize ) {

			/**
			 * Panel
			 */
			$panel = 'ocean_general_panel';
			$wp_customize->add_panel(
				$panel,
				array(
					'title'    => esc_html__( 'General Options', 'oceanwp' ),
					'priority' => 210,
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_styling',
				array(
					'title'    => esc_html__( 'General Styling', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Styling
			 */
			$wp_customize->add_setting(
				'ocean_customzer_styling',
				array(
					'transport'         => 'postMessage',
					'default'           => 'head',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				'ocean_customzer_styling',
				array(
					'label'       => esc_html__( 'Styling Options Location', 'oceanwp' ),
					'description' => esc_html__( 'Both settings apply only to the custom CSS added in the Custom CSS field in the Customizer. If you choose the Custom File location, a dedicated CSS file will be created in your uploads folder of your WordPress installation.', 'oceanwp' ),
					'type'        => 'radio',
					'section'     => 'ocean_general_styling',
					'settings'    => 'ocean_customzer_styling',
					'priority'    => 10,
					'choices'     => array(
						'head' => esc_html__( 'WP Head', 'oceanwp' ),
						'file' => esc_html__( 'Custom File', 'oceanwp' ),
					),
				)
			);

			/**
			 * Primary Color
			 */
			$wp_customize->add_setting(
				'ocean_primary_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#13aff0',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_primary_color',
					array(
						'label'    => esc_html__( 'Primary Color', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'settings' => 'ocean_primary_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Hover Primary Color
			 */
			$wp_customize->add_setting(
				'ocean_hover_primary_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#0b7cac',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_hover_primary_color',
					array(
						'label'    => esc_html__( 'Hover Primary Color', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'settings' => 'ocean_hover_primary_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Main Border Color
			 */
			$wp_customize->add_setting(
				'ocean_main_border_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#e9e9e9',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_main_border_color',
					array(
						'label'    => esc_html__( 'Main Border Color', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'settings' => 'ocean_main_border_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Heading Site Background
			 */
			$wp_customize->add_setting(
				'ocean_site_background_heading',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Heading_Control(
					$wp_customize,
					'ocean_site_background_heading',
					array(
						'label'    => esc_html__( 'Site Background', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'priority' => 10,
					)
				)
			);

			/**
			 * Site Background
			 */
			$wp_customize->add_setting(
				'ocean_background_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#ffffff',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_background_color',
					array(
						'label'           => esc_html__( 'Background Color', 'oceanwp' ),
						'section'         => 'ocean_general_styling',
						'settings'        => 'ocean_background_color',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_hasnt_boxed_layout',
					)
				)
			);

			/**
			 * Site Background Image
			 */
			$wp_customize->add_setting(
				'ocean_background_image',
				array(
					'sanitize_callback' => 'oceanwp_sanitize_image',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Image_Control(
					$wp_customize,
					'ocean_background_image',
					array(
						'label'    => esc_html__( 'Background Image', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'settings' => 'ocean_background_image',
						'priority' => 10,
					)
				)
			);

			/**
			 * Site Background Image Position
			 */
			$wp_customize->add_setting(
				'ocean_background_image_position',
				array(
					'transport'         => 'postMessage',
					'default'           => 'initial',
					'sanitize_callback' => 'sanitize_text_field',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_background_image_position',
					array(
						'label'           => esc_html__( 'Position', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_styling',
						'settings'        => 'ocean_background_image_position',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_background_image',
						'choices'         => array(
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
						),
					)
				)
			);

			/**
			 * Site Background Image Attachment
			 */
			$wp_customize->add_setting(
				'ocean_background_image_attachment',
				array(
					'transport'         => 'postMessage',
					'default'           => 'initial',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_background_image_attachment',
					array(
						'label'           => esc_html__( 'Attachment', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_styling',
						'settings'        => 'ocean_background_image_attachment',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_background_image',
						'choices'         => array(
							'initial' => esc_html__( 'Default', 'oceanwp' ),
							'scroll'  => esc_html__( 'Scroll', 'oceanwp' ),
							'fixed'   => esc_html__( 'Fixed', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Site Background Image Repeat
			 */
			$wp_customize->add_setting(
				'ocean_background_image_repeat',
				array(
					'transport'         => 'postMessage',
					'default'           => 'initial',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_background_image_repeat',
					array(
						'label'           => esc_html__( 'Repeat', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_styling',
						'settings'        => 'ocean_background_image_repeat',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_background_image',
						'choices'         => array(
							'initial'   => esc_html__( 'Default', 'oceanwp' ),
							'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
							'repeat'    => esc_html__( 'Repeat', 'oceanwp' ),
							'repeat-x'  => esc_html__( 'Repeat-x', 'oceanwp' ),
							'repeat-y'  => esc_html__( 'Repeat-y', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Site Background Image Size
			 */
			$wp_customize->add_setting(
				'ocean_background_image_size',
				array(
					'transport'         => 'postMessage',
					'default'           => 'initial',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_background_image_size',
					array(
						'label'           => esc_html__( 'Size', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_styling',
						'settings'        => 'ocean_background_image_size',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_background_image',
						'choices'         => array(
							'initial' => esc_html__( 'Default', 'oceanwp' ),
							'auto'    => esc_html__( 'Auto', 'oceanwp' ),
							'cover'   => esc_html__( 'Cover', 'oceanwp' ),
							'contain' => esc_html__( 'Contain', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Heading Links Color
			 */
			$wp_customize->add_setting(
				'ocean_links_color_heading',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Heading_Control(
					$wp_customize,
					'ocean_links_color_heading',
					array(
						'label'    => esc_html__( 'Links Color', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'priority' => 10,
					)
				)
			);

			/**
			 * Links Color
			 */
			$wp_customize->add_setting(
				'ocean_links_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#333333',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_links_color',
					array(
						'label'    => esc_html__( 'Color', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'settings' => 'ocean_links_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Links Color Hover
			 */
			$wp_customize->add_setting(
				'ocean_links_color_hover',
				array(
					'transport'         => 'postMessage',
					'default'           => '#13aff0',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_links_color_hover',
					array(
						'label'    => esc_html__( 'Color: Hover', 'oceanwp' ),
						'section'  => 'ocean_general_styling',
						'settings' => 'ocean_links_color_hover',
						'priority' => 10,
					)
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_settings',
				array(
					'title'    => esc_html__( 'General Settings', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Main Layout Style
			 */
			$wp_customize->add_setting(
				'ocean_main_layout_style',
				array(
					'default'           => 'wide',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_main_layout_style',
					array(
						'label'    => esc_html__( 'Layout Style', 'oceanwp' ),
						'section'  => 'ocean_general_settings',
						'settings' => 'ocean_main_layout_style',
						'priority' => 10,
						'choices'  => array(
							'wide'     => esc_html__( 'Wide', 'oceanwp' ),
							'boxed'    => esc_html__( 'Boxed', 'oceanwp' ),
							'separate' => esc_html__( 'Separate', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Boxed Layout Drop-Shadow
			 */
			$wp_customize->add_setting(
				'ocean_boxed_dropdshadow',
				array(
					'transport'         => 'postMessage',
					'default'           => true,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_boxed_dropdshadow',
					array(
						'label'           => esc_html__( 'Boxed Layout Drop-Shadow', 'oceanwp' ),
						'type'            => 'checkbox',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_boxed_dropdshadow',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_boxed_layout',
					)
				)
			);

			/**
			 * Boxed Width
			 */
			$wp_customize->add_setting(
				'ocean_boxed_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '1280',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_boxed_width',
					array(
						'label'           => esc_html__( 'Boxed Width (px)', 'oceanwp' ),
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_boxed_width',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_boxed_layout',
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 4000,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Boxed Outside Background
			 */
			$wp_customize->add_setting(
				'ocean_boxed_outside_bg',
				array(
					'transport'         => 'postMessage',
					'default'           => '#e9e9e9',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_boxed_outside_bg',
					array(
						'label'           => esc_html__( 'Outside Background', 'oceanwp' ),
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_boxed_outside_bg',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_boxed_layout',
					)
				)
			);

			/**
			 * Separate Outside Background
			 */
			$wp_customize->add_setting(
				'ocean_separate_outside_bg',
				array(
					'transport'         => 'postMessage',
					'default'           => '#f1f1f1',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_separate_outside_bg',
					array(
						'label'           => esc_html__( 'Outside Background', 'oceanwp' ),
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_separate_outside_bg',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_separate_layout',
					)
				)
			);

			/**
			 * Boxed Inner Background
			 */
			$wp_customize->add_setting(
				'ocean_boxed_inner_bg',
				array(
					'transport'         => 'postMessage',
					'default'           => '#ffffff',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_boxed_inner_bg',
					array(
						'label'           => esc_html__( 'Inner Background', 'oceanwp' ),
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_boxed_inner_bg',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_boxed_or_separate_layout',
					)
				)
			);

			/**
			 * Separate Content Padding
			 */
			$wp_customize->add_setting(
				'ocean_separate_content_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '30px',
					'sanitize_callback' => 'wp_kses_post',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_separate_content_padding',
					array(
						'label'           => esc_html__( 'Content Padding', 'oceanwp' ),
						'description'     => esc_html__( 'Add a custom content padding. px - em - %.', 'oceanwp' ),
						'type'            => 'text',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_separate_content_padding',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_separate_layout',
					)
				)
			);

			/**
			 * Separate Widgets Padding
			 */
			$wp_customize->add_setting(
				'ocean_separate_widgets_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '30px',
					'sanitize_callback' => 'wp_kses_post',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_separate_widgets_padding',
					array(
						'label'           => esc_html__( 'Widgets Padding', 'oceanwp' ),
						'description'     => esc_html__( 'Add a custom widgets padding. px - em - %.', 'oceanwp' ),
						'type'            => 'text',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_separate_widgets_padding',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_separate_layout',
					)
				)
			);

			/**
			 * Main Container Width
			 */
			$wp_customize->add_setting(
				'ocean_main_container_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '1200',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_main_container_width',
					array(
						'label'           => esc_html__( 'Main Container Width (px)', 'oceanwp' ),
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_main_container_width',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_hasnt_boxed_layout',
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 4096,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Content Width
			 */
			$wp_customize->add_setting(
				'ocean_left_container_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '72',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_left_container_width',
					array(
						'label'       => esc_html__( 'Content Width (%)', 'oceanwp' ),
						'section'     => 'ocean_general_settings',
						'settings'    => 'ocean_left_container_width',
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Sidebar Width
			 */
			$wp_customize->add_setting(
				'ocean_sidebar_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '28',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_sidebar_width',
					array(
						'label'       => esc_html__( 'Sidebar Width (%)', 'oceanwp' ),
						'section'     => 'ocean_general_settings',
						'settings'    => 'ocean_sidebar_width',
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Heading Pages
			 */
			$wp_customize->add_setting(
				'ocean_pages_heading',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Heading_Control(
					$wp_customize,
					'ocean_pages_heading',
					array(
						'label'    => esc_html__( 'Pages', 'oceanwp' ),
						'section'  => 'ocean_general_settings',
						'priority' => 10,
					)
				)
			);

			/**
			 * Pages
			 */
			$wp_customize->add_setting(
				'ocean_page_single_layout',
				array(
					'default'           => 'right-sidebar',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Radio_Image_Control(
					$wp_customize,
					'ocean_page_single_layout',
					array(
						'label'    => esc_html__( 'Layout', 'oceanwp' ),
						'section'  => 'ocean_general_settings',
						'settings' => 'ocean_page_single_layout',
						'priority' => 10,
						'choices'  => oceanwp_customizer_layout(),
					)
				)
			);

			/**
			 * Both Sidebars Style
			 */
			$wp_customize->add_setting(
				'ocean_page_single_both_sidebars_style',
				array(
					'default'           => 'scs-style',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_single_both_sidebars_style',
					array(
						'label'           => esc_html__( 'Both Sidebars: Style', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_page_single_both_sidebars_style',
						'priority'        => 10,
						'choices'         => array(
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						),
						'active_callback' => 'oceanwp_cac_has_page_single_bs_layout',
					)
				)
			);

			/**
			 * Both Sidebars Content Width
			 */
			$wp_customize->add_setting(
				'ocean_page_single_both_sidebars_content_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_single_both_sidebars_content_width',
					array(
						'label'           => esc_html__( 'Both Sidebars: Content Width (%)', 'oceanwp' ),
						'type'            => 'number',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_page_single_both_sidebars_content_width',
						'priority'        => 10,
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
						'active_callback' => 'oceanwp_cac_has_page_single_bs_layout',
					)
				)
			);

			/**
			 * Both Sidebars Sidebars Width
			 */
			$wp_customize->add_setting(
				'ocean_page_single_both_sidebars_sidebars_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_single_both_sidebars_sidebars_width',
					array(
						'label'           => esc_html__( 'Both Sidebars: Sidebars Width (%)', 'oceanwp' ),
						'type'            => 'number',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_page_single_both_sidebars_sidebars_width',
						'priority'        => 10,
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
						'active_callback' => 'oceanwp_cac_has_page_single_bs_layout',
					)
				)
			);

			/**
			 * Mobile Sidebar Order
			 */
			$wp_customize->add_setting(
				'ocean_page_single_sidebar_order',
				array(
					'default'           => 'content-sidebar',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_single_sidebar_order',
					array(
						'label'           => esc_html__( 'Mobile Sidebar Order', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_page_single_sidebar_order',
						'priority'        => 10,
						'choices'         => array(
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						),
						'active_callback' => 'oceanwp_cac_has_page_single_rl_layout',
					)
				)
			);

			/**
			 * Content Padding
			 */
			$wp_customize->add_setting(
				'ocean_page_content_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_page_content_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_setting(
				'ocean_page_content_tablet_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_page_content_tablet_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_setting(
				'ocean_page_content_mobile_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_page_content_mobile_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Dimensions_Control(
					$wp_customize,
					'ocean_page_content_padding',
					array(
						'label'       => esc_html__( 'Content Padding (px)', 'oceanwp' ),
						'section'     => 'ocean_general_settings',
						'settings'    => array(
							'desktop_top'    => 'ocean_page_content_top_padding',
							'desktop_bottom' => 'ocean_page_content_bottom_padding',
							'tablet_top'     => 'ocean_page_content_tablet_top_padding',
							'tablet_bottom'  => 'ocean_page_content_tablet_bottom_padding',
							'mobile_top'     => 'ocean_page_content_mobile_top_padding',
							'mobile_bottom'  => 'ocean_page_content_mobile_bottom_padding',
						),
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 300,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Heading Search Result Page
			 */
			$wp_customize->add_setting(
				'ocean_search_result_heading',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Heading_Control(
					$wp_customize,
					'ocean_search_result_heading',
					array(
						'label'    => esc_html__( 'Search Result Page', 'oceanwp' ),
						'section'  => 'ocean_general_settings',
						'priority' => 10,
					)
				)
			);

			/**
			 * Search Source
			 */
			$wp_customize->add_setting(
				'ocean_menu_search_source',
				array(
					'default'           => 'any',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_menu_search_source',
					array(
						'label'    => esc_html__( 'Source', 'oceanwp' ),
						'type'     => 'select',
						'section'  => 'ocean_general_settings',
						'settings' => 'ocean_menu_search_source',
						'priority' => 10,
						'choices'  => $this->get_post_types(),
					)
				)
			);

			/**
			 * Search Posts Per Page
			 */
			$wp_customize->add_setting(
				'ocean_search_post_per_page',
				array(
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_search_post_per_page',
					array(
						'label'       => esc_html__( 'Search Posts Per Page', 'oceanwp' ),
						'type'        => 'number',
						'section'     => 'ocean_general_settings',
						'settings'    => 'ocean_search_post_per_page',
						'priority'    => 10,
						'input_attrs' => array(
							'min' => 0,
						),
					)
				)
			);

			/**
			 * Search Page
			 */
			$wp_customize->add_setting(
				'ocean_search_custom_sidebar',
				array(
					'default'           => true,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_search_custom_sidebar',
					array(
						'label'    => esc_html__( 'Custom Sidebar', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_settings',
						'settings' => 'ocean_search_custom_sidebar',
						'priority' => 10,
					)
				)
			);

			/**
			 * Search Page Layout
			 */
			$wp_customize->add_setting(
				'ocean_search_layout',
				array(
					'default'           => 'right-sidebar',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Radio_Image_Control(
					$wp_customize,
					'ocean_search_layout',
					array(
						'label'    => esc_html__( 'Layout', 'oceanwp' ),
						'section'  => 'ocean_general_settings',
						'settings' => 'ocean_search_layout',
						'priority' => 10,
						'choices'  => oceanwp_customizer_layout(),
					)
				)
			);

			/**
			 * Page Search Logo
			 */
			$wp_customize->add_setting(
				'ocean_search_logo',
				array(
					'default'           => '',
					'sanitize_callback' => 'oceanwp_sanitize_image',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Image_Control(
					$wp_customize,
					'ocean_search_logo',
					array(
						'label'       => esc_html__( 'Search Logo', 'oceanwp' ),
						'description' => esc_html__( 'Select a search page logo.', 'oceanwp' ),
						'section'     => 'ocean_general_settings',
						'settings'    => 'ocean_search_logo',
						'priority'    => 10,
					)
				)
			);

			/**
			 * Both Sidebars Style
			 */
			$wp_customize->add_setting(
				'ocean_search_both_sidebars_style',
				array(
					'default'           => 'scs-style',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_search_both_sidebars_style',
					array(
						'label'           => esc_html__( 'Both Sidebars: Style', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_search_both_sidebars_style',
						'priority'        => 10,
						'choices'         => array(
							'ssc-style' => esc_html__( 'Sidebar / Sidebar / Content', 'oceanwp' ),
							'scs-style' => esc_html__( 'Sidebar / Content / Sidebar', 'oceanwp' ),
							'css-style' => esc_html__( 'Content / Sidebar / Sidebar', 'oceanwp' ),
						),
						'active_callback' => 'oceanwp_cac_has_search_bs_layout',
					)
				)
			);

			/**
			 * Both Sidebars Content Width
			 */
			$wp_customize->add_setting(
				'ocean_search_both_sidebars_content_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_search_both_sidebars_content_width',
					array(
						'label'           => esc_html__( 'Both Sidebars: Content Width (%)', 'oceanwp' ),
						'type'            => 'number',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_search_both_sidebars_content_width',
						'priority'        => 10,
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
						'active_callback' => 'oceanwp_cac_has_search_bs_layout',
					)
				)
			);

			/**
			 * Both Sidebars Sidebars Width
			 */
			$wp_customize->add_setting(
				'ocean_search_both_sidebars_sidebars_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_search_both_sidebars_sidebars_width',
					array(
						'label'           => esc_html__( 'Both Sidebars: Sidebars Width (%)', 'oceanwp' ),
						'type'            => 'number',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_search_both_sidebars_sidebars_width',
						'priority'        => 10,
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
						'active_callback' => 'oceanwp_cac_has_search_bs_layout',
					)
				)
			);

			/**
			 * Mobile Sidebar Order
			 */
			$wp_customize->add_setting(
				'ocean_search_sidebar_order',
				array(
					'default'           => 'content-sidebar',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_search_sidebar_order',
					array(
						'label'           => esc_html__( 'Mobile Sidebar Order', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_settings',
						'settings'        => 'ocean_search_sidebar_order',
						'priority'        => 10,
						'choices'         => array(
							'content-sidebar' => esc_html__( 'Content / Sidebar', 'oceanwp' ),
							'sidebar-content' => esc_html__( 'Sidebar / Content', 'oceanwp' ),
						),
						'active_callback' => 'oceanwp_cac_has_search_rl_layout',
					)
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_page_header',
				array(
					'title'    => esc_html__( 'Page Title', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Page Title Visibility
			 */
			$wp_customize->add_setting(
				'ocean_page_header_visibility',
				array(
					'default'           => 'all-devices',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_header_visibility',
					array(
						'label'    => esc_html__( 'Visibility', 'oceanwp' ),
						'type'     => 'select',
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_page_header_visibility',
						'priority' => 10,
						'choices'  => array(
							'all-devices'        => esc_html__( 'Show On All Devices', 'oceanwp' ),
							'hide-tablet'        => esc_html__( 'Hide On Tablet', 'oceanwp' ),
							'hide-mobile'        => esc_html__( 'Hide On Mobile', 'oceanwp' ),
							'hide-tablet-mobile' => esc_html__( 'Hide On Tablet & Mobile', 'oceanwp' ),
							'hide-all-devices'   => esc_html__( 'Hide On All Devices', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Page Title Heading Tag
			 */
			$wp_customize->add_setting(
				'ocean_page_header_heading_tag',
				array(
					'default'           => 'h1',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_header_heading_tag',
					array(
						'label'    => esc_html__( 'Heading Tag', 'oceanwp' ),
						'type'     => 'select',
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_page_header_heading_tag',
						'priority' => 10,
						'choices'  => array(
							'h1'   => esc_html__( 'H1', 'oceanwp' ),
							'h2'   => esc_html__( 'H2', 'oceanwp' ),
							'h3'   => esc_html__( 'H3', 'oceanwp' ),
							'h4'   => esc_html__( 'H4', 'oceanwp' ),
							'h5'   => esc_html__( 'H5', 'oceanwp' ),
							'h6'   => esc_html__( 'H6', 'oceanwp' ),
							'div'  => esc_html__( 'div', 'oceanwp' ),
							'span' => esc_html__( 'span', 'oceanwp' ),
							'p'    => esc_html__( 'p', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Page Title Style
			 */
			$wp_customize->add_setting(
				'ocean_page_header_style',
				array(
					'default'           => '',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_header_style',
					array(
						'label'    => esc_html__( 'Style', 'oceanwp' ),
						'type'     => 'select',
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_page_header_style',
						'priority' => 10,
						'choices'  => array(
							''                 => esc_html__( 'Default', 'oceanwp' ),
							'centered'         => esc_html__( 'Centered', 'oceanwp' ),
							'centered-minimal' => esc_html__( 'Centered Minimal', 'oceanwp' ),
							'background-image' => esc_html__( 'Background Image', 'oceanwp' ),
							'hidden'           => esc_html__( 'Hidden', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Page Title Background Image
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image',
				array(
					'sanitize_callback' => 'oceanwp_sanitize_image',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Image_Control(
					$wp_customize,
					'ocean_page_header_bg_image',
					array(
						'label'           => esc_html__( 'Image', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
					)
				)
			);

			/**
			 * Page Title Background Image Title/Breadcrumb Position
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_title_breadcrumb_position',
				array(
					'transport'         => 'postMessage',
					'default'           => 'center',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_page_header_bg_title_breadcrumb_position',
					array(
						'label'           => esc_html__( 'Title/Breadcrumb Position', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_title_breadcrumb_position',
						'priority'        => 10,
						'choices'         => array(
							'left'   => esc_html__( 'Left', 'oceanwp' ),
							'center' => esc_html__( 'Center', 'oceanwp' ),
							'right'  => esc_html__( 'Right', 'oceanwp' ),
						),
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
					)
				)
			);

			/**
			 * Page Title Background Image Position
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image_position',
				array(
					'transport'         => 'postMessage',
					'default'           => 'top center',
					'sanitize_callback' => 'sanitize_text_field',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_header_bg_image_position',
					array(
						'label'           => esc_html__( 'Position', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image_position',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
						'choices'         => array(
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
						),
					)
				)
			);

			/**
			 * Page Title Background Image Attachment
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image_attachment',
				array(
					'transport'         => 'postMessage',
					'default'           => 'initial',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_header_bg_image_attachment',
					array(
						'label'           => esc_html__( 'Attachment', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image_attachment',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
						'choices'         => array(
							'initial' => esc_html__( 'Default', 'oceanwp' ),
							'scroll'  => esc_html__( 'Scroll', 'oceanwp' ),
							'fixed'   => esc_html__( 'Fixed', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Page Title Background Image Repeat
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image_repeat',
				array(
					'transport'         => 'postMessage',
					'default'           => 'no-repeat',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_header_bg_image_repeat',
					array(
						'label'           => esc_html__( 'Repeat', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image_repeat',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
						'choices'         => array(
							'initial'   => esc_html__( 'Default', 'oceanwp' ),
							'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
							'repeat'    => esc_html__( 'Repeat', 'oceanwp' ),
							'repeat-x'  => esc_html__( 'Repeat-x', 'oceanwp' ),
							'repeat-y'  => esc_html__( 'Repeat-y', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Page Title Background Image Size
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image_size',
				array(
					'transport'         => 'postMessage',
					'default'           => 'cover',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_page_header_bg_image_size',
					array(
						'label'           => esc_html__( 'Size', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image_size',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
						'choices'         => array(
							'initial' => esc_html__( 'Default', 'oceanwp' ),
							'auto'    => esc_html__( 'Auto', 'oceanwp' ),
							'cover'   => esc_html__( 'Cover', 'oceanwp' ),
							'contain' => esc_html__( 'Contain', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Page Title Background Image Height
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image_height',
				array(
					'transport'         => 'postMessage',
					'default'           => '400',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_page_header_bg_image_height',
					array(
						'label'           => esc_html__( 'Height (px)', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image_height',
						'priority'        => 10,
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 800,
							'step' => 1,
						),
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
					)
				)
			);

			/**
			 * Page Title Background Image Overlay Opacity
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image_overlay_opacity',
				array(
					'transport'         => 'postMessage',
					'default'           => '0.5',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_page_header_bg_image_overlay_opacity',
					array(
						'label'           => esc_html__( 'Overlay Opacity', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image_overlay_opacity',
						'priority'        => 10,
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 1,
							'step' => 0.1,
						),
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
					)
				)
			);

			/**
			 * Page Title Background Image Overlay Color
			 */
			$wp_customize->add_setting(
				'ocean_page_header_bg_image_overlay_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#000000',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_page_header_bg_image_overlay_color',
					array(
						'label'           => esc_html__( 'Overlay Color', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_bg_image_overlay_color',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_bg_image_page_header',
					)
				)
			);

			/**
			 * Page Title Padding
			 */
			$wp_customize->add_setting(
				'ocean_page_header_top_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '34',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_page_header_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '34',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_setting(
				'ocean_page_header_tablet_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_page_header_tablet_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_setting(
				'ocean_page_header_mobile_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_page_header_mobile_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Dimensions_Control(
					$wp_customize,
					'ocean_page_header_padding',
					array(
						'label'       => esc_html__( 'Padding (px)', 'oceanwp' ),
						'section'     => 'ocean_general_page_header',
						'settings'    => array(
							'desktop_top'    => 'ocean_page_header_top_padding',
							'desktop_bottom' => 'ocean_page_header_bottom_padding',
							'tablet_top'     => 'ocean_page_header_tablet_top_padding',
							'tablet_bottom'  => 'ocean_page_header_tablet_bottom_padding',
							'mobile_top'     => 'ocean_page_header_mobile_top_padding',
							'mobile_bottom'  => 'ocean_page_header_mobile_bottom_padding',
						),
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 200,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Page Title Background Color
			 */
			$wp_customize->add_setting(
				'ocean_page_header_background',
				array(
					'transport'         => 'postMessage',
					'default'           => '#f5f5f5',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_page_header_background',
					array(
						'label'           => esc_html__( 'Background Color', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_page_header_background',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_hasnt_bg_image_page_header',
					)
				)
			);

			/**
			 * Page Title Color
			 */
			$wp_customize->add_setting(
				'ocean_page_header_title_color',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_page_header_title_color',
					array(
						'label'    => esc_html__( 'Text Color', 'oceanwp' ),
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_page_header_title_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Breadcrumbs Heading
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumbs_heading',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Heading_Control(
					$wp_customize,
					'ocean_breadcrumbs_heading',
					array(
						'label'    => esc_html__( 'Breadcrumbs', 'oceanwp' ),
						'section'  => 'ocean_general_page_header',
						'priority' => 10,
					)
				)
			);

			/**
			 * Breadcrumbs
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumbs',
				array(
					'default'           => true,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumbs',
					array(
						'label'    => esc_html__( 'Enable Breadcrumbs', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumbs',
						'priority' => 10,
					)
				)
			);

			/**
			 * Breadcrumbs Item Title
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_show_title',
				array(
					'default'           => true,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumb_show_title',
					array(
						'label'    => esc_html__( 'Show Item Title', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_show_title',
						'priority' => 10,
					)
				)
			);

			/**
			 * Breadcrumbs Position
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumbs_position',
				array(
					'default'           => '',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumbs_position',
					array(
						'label'           => esc_html__( 'Position', 'oceanwp' ),
						'type'            => 'select',
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_breadcrumbs_position',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_breadcrumbs',
						'choices'         => array(
							''            => esc_html__( 'Absolute Right', 'oceanwp' ),
							'under-title' => esc_html__( 'Under Title', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Breadcrumb Separator
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_separator',
				array(
					'transport'         => 'postMessage',
					'default'           => '>',
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumb_separator',
					array(
						'label'    => esc_html__( 'Breadcrumb Separator', 'oceanwp' ),
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_separator',
						'type'     => 'text',
						'priority' => 10,
					)
				)
			);

			/**
			 * Home Item
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_home_item',
				array(
					'transport'         => 'postMessage',
					'default'           => 'icon',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_breadcrumb_home_item',
					array(
						'label'    => esc_html__( 'Home Item', 'oceanwp' ),
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_home_item',
						'priority' => 10,
						'choices'  => array(
							'icon' => esc_html__( 'Icon', 'oceanwp' ),
							'text' => esc_html__( 'Text', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Translation for Homepage
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_translation_home',
				array(
					'transport'         => 'postMessage',
					'default'           => esc_html__( 'Home', 'oceanwp' ),
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumb_translation_home',
					array(
						'label'    => esc_html__( 'Translation for Homepage', 'oceanwp' ),
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_translation_home',
						'type'     => 'text',
						'priority' => 10,
					)
				)
			);

			/**
			 * Translation for "404 Not Found"
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_translation_error',
				array(
					'transport'         => 'postMessage',
					'default'           => esc_html__( '404 Not Found', 'oceanwp' ),
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumb_translation_error',
					array(
						'label'    => esc_html__( 'Translation for "404 Not Found"', 'oceanwp' ),
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_translation_error',
						'type'     => 'text',
						'priority' => 10,
					)
				)
			);

			/**
			 * Translation for "Search results for"
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_translation_search',
				array(
					'transport'         => 'postMessage',
					'default'           => esc_html__( 'Search results for', 'oceanwp' ),
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumb_translation_search',
					array(
						'label'    => esc_html__( 'Translation for "Search results for"', 'oceanwp' ),
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_translation_search',
						'type'     => 'text',
						'priority' => 10,
					)
				)
			);

			/**
			 * Posts Taxonomy
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_posts_taxonomy',
				array(
					'default'           => 'category',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumb_posts_taxonomy',
					array(
						'label'    => esc_html__( 'Posts Taxonomy', 'oceanwp' ),
						'type'     => 'select',
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_posts_taxonomy',
						'priority' => 10,
						'choices'  => array(
							'none'     => esc_html__( 'None', 'oceanwp' ),
							'category' => esc_html__( 'Category', 'oceanwp' ),
							'post_tag' => esc_html__( 'Tag', 'oceanwp' ),
							'blog'     => esc_html__( 'Blog Page', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Products Taxonomy
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumb_products_taxonomy',
				array(
					'default'           => 'shop',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_breadcrumb_products_taxonomy',
					array(
						'label'    => esc_html__( 'Products Taxonomy', 'oceanwp' ),
						'type'     => 'select',
						'section'  => 'ocean_general_page_header',
						'settings' => 'ocean_breadcrumb_products_taxonomy',
						'priority' => 10,
						'choices'  => array(
							'none'        => esc_html__( 'None', 'oceanwp' ),
							'product_cat' => esc_html__( 'Category', 'oceanwp' ),
							'product_tag' => esc_html__( 'Tag', 'oceanwp' ),
							'shop'        => esc_html__( 'Shop Page', 'oceanwp' ),
						),
					)
				)
			);

			// If Ocean Portfolio plugin is activated.
			if ( class_exists( 'Ocean_Portfolio' ) ) {

				/**
				 * Portfolio Taxonomy
				 */
				$wp_customize->add_setting(
					'ocean_breadcrumb_portfolio_taxonomy',
					array(
						'default'           => 'ocean_portfolio_category',
						'sanitize_callback' => 'oceanwp_sanitize_select',
					)
				);

				$wp_customize->add_control(
					new WP_Customize_Control(
						$wp_customize,
						'ocean_breadcrumb_portfolio_taxonomy',
						array(
							'label'    => esc_html__( 'Portfolio Taxonomy', 'oceanwp' ),
							'type'     => 'select',
							'section'  => 'ocean_general_page_header',
							'settings' => 'ocean_breadcrumb_portfolio_taxonomy',
							'priority' => 10,
							'choices'  => array(
								'none'                     => esc_html__( 'None', 'oceanwp' ),
								'ocean_portfolio_category' => esc_html__( 'Category', 'oceanwp' ),
								'ocean_portfolio_tag'      => esc_html__( 'Tag', 'oceanwp' ),
								'portfolio'                => esc_html__( 'Portfolio Page', 'oceanwp' ),
							),
						)
					)
				);

			}

			/**
			 * Breadcrumbs Text Color
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumbs_text_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#c6c6c6',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_breadcrumbs_text_color',
					array(
						'label'           => esc_html__( 'Text Color', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_breadcrumbs_text_color',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_breadcrumbs',
					)
				)
			);

			/**
			 * Breadcrumbs Separator Color
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumbs_seperator_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#c6c6c6',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_breadcrumbs_seperator_color',
					array(
						'label'           => esc_html__( 'Separator Color', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_breadcrumbs_seperator_color',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_breadcrumbs',
					)
				)
			);

			/**
			 * Breadcrumbs Link Color
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumbs_link_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#333333',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_breadcrumbs_link_color',
					array(
						'label'           => esc_html__( 'Link Color', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_breadcrumbs_link_color',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_breadcrumbs',
					)
				)
			);

			/**
			 * Breadcrumbs Link Color
			 */
			$wp_customize->add_setting(
				'ocean_breadcrumbs_link_color_hover',
				array(
					'transport'         => 'postMessage',
					'default'           => '#13aff0',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_breadcrumbs_link_color_hover',
					array(
						'label'           => esc_html__( 'Link Color: Hover', 'oceanwp' ),
						'section'         => 'ocean_general_page_header',
						'settings'        => 'ocean_breadcrumbs_link_color_hover',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_breadcrumbs',
					)
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_scroll_top',
				array(
					'title'    => esc_html__( 'Scroll To Top', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Scroll To Top
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top',
				array(
					'default'           => true,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_scroll_top',
					array(
						'label'    => esc_html__( 'Scroll Up Button', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_scroll_top',
						'settings' => 'ocean_scroll_top',
						'priority' => 10,
					)
				)
			);

			/**
			 * Scroll Top Arrow
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_arrow',
				array(
					'default'           => 'angle_up',
					'sanitize_callback' => 'sanitize_text_field',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Icon_Select_Multi_Control(
					$wp_customize,
					'ocean_scroll_top_arrow',
					array(
						'label'           => esc_html__( 'Arrow Icon', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'type'            => 'select',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
						'choices'         => oceanwp_get_scrolltotop_icons( 'up_arrows' ),
					)
				)
			);

			/**
			 * Scroll Top Position
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_position',
				array(
					'transport'         => 'postMessage',
					'default'           => 'right',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_scroll_top_position',
					array(
						'label'           => esc_html__( 'Position', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_position',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
						'choices'         => array(
							'left'  => esc_html__( 'Left', 'oceanwp' ),
							'right' => esc_html__( 'Right', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Scroll Top Bottom Position
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_bottom_position',
				array(
					'transport'         => 'postMessage',
					'default'           => '20',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_scroll_top_bottom_position',
					array(
						'label'           => esc_html__( 'Bottom Position (px)', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_bottom_position',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 200,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Scroll Top Size
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_size',
				array(
					'transport'         => 'postMessage',
					'default'           => '40',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_scroll_top_size',
					array(
						'label'           => esc_html__( 'Button Size (px)', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_size',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 60,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Scroll Top Icon Size
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_icon_size',
				array(
					'transport'         => 'postMessage',
					'default'           => '18',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_scroll_top_icon_size',
					array(
						'label'           => esc_html__( 'Icon Size (px)', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_icon_size',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 60,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Scroll Top Border Radius
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_border_radius',
				array(
					'transport'         => 'postMessage',
					'default'           => '2',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_scroll_top_border_radius',
					array(
						'label'           => esc_html__( 'Border Radius (px)', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_border_radius',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Scroll Top Background Color
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_bg',
				array(
					'transport'         => 'postMessage',
					'default'           => 'rgba(0,0,0,0.4)',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_scroll_top_bg',
					array(
						'label'           => esc_html__( 'Background Color', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_bg',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
					)
				)
			);

			/**
			 * Scroll Top Background Hover Color
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_bg_hover',
				array(
					'transport'         => 'postMessage',
					'default'           => 'rgba(0,0,0,0.8)',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_scroll_top_bg_hover',
					array(
						'label'           => esc_html__( 'Background Color: Hover', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_bg_hover',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
					)
				)
			);

			/**
			 * Scroll Top Color
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#ffffff',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_scroll_top_color',
					array(
						'label'           => esc_html__( 'Color', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_color',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
					)
				)
			);

			/**
			 * Scroll Top Hover Color
			 */
			$wp_customize->add_setting(
				'ocean_scroll_top_color_hover',
				array(
					'transport'         => 'postMessage',
					'default'           => '#ffffff',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_scroll_top_color_hover',
					array(
						'label'           => esc_html__( 'Color: Hover', 'oceanwp' ),
						'section'         => 'ocean_general_scroll_top',
						'settings'        => 'ocean_scroll_top_color_hover',
						'priority'        => 10,
						'active_callback' => 'oceanwp_cac_has_scrolltop',
					)
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_pagination',
				array(
					'title'    => esc_html__( 'Pagination', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Pagination Align
			 */
			$wp_customize->add_setting(
				'ocean_pagination_align',
				array(
					'transport'         => 'postMessage',
					'default'           => 'right',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_pagination_align',
					array(
						'label'    => esc_html__( 'Align', 'oceanwp' ),
						'type'     => 'select',
						'section'  => 'ocean_general_pagination',
						'settings' => 'ocean_pagination_align',
						'priority' => 10,
						'choices'  => array(
							'right'  => esc_html__( 'Right', 'oceanwp' ),
							'center' => esc_html__( 'Center', 'oceanwp' ),
							'left'   => esc_html__( 'Left', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Pagination Font Size
			 */
			$wp_customize->add_setting(
				'ocean_pagination_font_size',
				array(
					'transport'         => 'postMessage',
					'default'           => '18',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_pagination_font_size',
					array(
						'label'       => esc_html__( 'Font Size (px)', 'oceanwp' ),
						'section'     => 'ocean_general_pagination',
						'settings'    => 'ocean_pagination_font_size',
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Pagination Border Width
			 */
			$wp_customize->add_setting(
				'ocean_pagination_border_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '1',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_pagination_border_width',
					array(
						'label'       => esc_html__( 'Border Width (px)', 'oceanwp' ),
						'section'     => 'ocean_general_pagination',
						'settings'    => 'ocean_pagination_border_width',
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 20,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Pagination Background Color
			 */
			$wp_customize->add_setting(
				'ocean_pagination_bg',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_pagination_bg',
					array(
						'label'    => esc_html__( 'Background Color', 'oceanwp' ),
						'section'  => 'ocean_general_pagination',
						'settings' => 'ocean_pagination_bg',
						'priority' => 10,
					)
				)
			);

			/**
			 * Pagination Background Color Hover
			 */
			$wp_customize->add_setting(
				'ocean_pagination_hover_bg',
				array(
					'transport'         => 'postMessage',
					'default'           => '#f8f8f8',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_pagination_hover_bg',
					array(
						'label'    => esc_html__( 'Background Color: Hover', 'oceanwp' ),
						'section'  => 'ocean_general_pagination',
						'settings' => 'ocean_pagination_hover_bg',
						'priority' => 10,
					)
				)
			);

			/**
			 * Pagination Color
			 */
			$wp_customize->add_setting(
				'ocean_pagination_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#555555',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_pagination_color',
					array(
						'label'    => esc_html__( 'Color', 'oceanwp' ),
						'section'  => 'ocean_general_pagination',
						'settings' => 'ocean_pagination_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Pagination Color Hover
			 */
			$wp_customize->add_setting(
				'ocean_pagination_hover_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#333333',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_pagination_hover_color',
					array(
						'label'    => esc_html__( 'Color: Hover', 'oceanwp' ),
						'section'  => 'ocean_general_pagination',
						'settings' => 'ocean_pagination_hover_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Pagination Border Color
			 */
			$wp_customize->add_setting(
				'ocean_pagination_border_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#e9e9e9',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_pagination_border_color',
					array(
						'label'    => esc_html__( 'Border Color', 'oceanwp' ),
						'section'  => 'ocean_general_pagination',
						'settings' => 'ocean_pagination_border_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Pagination Border Color Hover
			 */
			$wp_customize->add_setting(
				'ocean_pagination_border_hover_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#e9e9e9',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_pagination_border_hover_color',
					array(
						'label'    => esc_html__( 'Border Color: Hover', 'oceanwp' ),
						'section'  => 'ocean_general_pagination',
						'settings' => 'ocean_pagination_border_hover_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_forms',
				array(
					'title'    => esc_html__( 'Forms (Input - Textarea)', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Forms Label Color
			 */
			$wp_customize->add_setting(
				'ocean_label_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#929292',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_label_color',
					array(
						'label'    => esc_html__( 'Label Color', 'oceanwp' ),
						'section'  => 'ocean_general_forms',
						'settings' => 'ocean_label_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Forms Padding
			 */
			$wp_customize->add_setting(
				'ocean_input_top_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '6',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_right_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '12',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '6',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_left_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '12',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_setting(
				'ocean_input_tablet_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_tablet_right_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_tablet_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_tablet_left_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_setting(
				'ocean_input_mobile_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_mobile_right_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_mobile_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_mobile_left_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Dimensions_Control(
					$wp_customize,
					'ocean_input_padding_dimensions',
					array(
						'label'       => esc_html__( 'Padding (px)', 'oceanwp' ),
						'section'     => 'ocean_general_forms',
						'settings'    => array(
							'desktop_top'    => 'ocean_input_top_padding',
							'desktop_right'  => 'ocean_input_right_padding',
							'desktop_bottom' => 'ocean_input_bottom_padding',
							'desktop_left'   => 'ocean_input_left_padding',
							'tablet_top'     => 'ocean_input_tablet_top_padding',
							'tablet_right'   => 'ocean_input_tablet_right_padding',
							'tablet_bottom'  => 'ocean_input_tablet_bottom_padding',
							'tablet_left'    => 'ocean_input_tablet_left_padding',
							'mobile_top'     => 'ocean_input_mobile_top_padding',
							'mobile_right'   => 'ocean_input_mobile_right_padding',
							'mobile_bottom'  => 'ocean_input_mobile_bottom_padding',
							'mobile_left'    => 'ocean_input_mobile_left_padding',
						),
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Forms Font Size
			 */
			$wp_customize->add_setting(
				'ocean_input_font_size',
				array(
					'transport'         => 'postMessage',
					'default'           => '14',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_input_font_size',
					array(
						'label'       => esc_html__( 'Font Size (px)', 'oceanwp' ),
						'section'     => 'ocean_general_forms',
						'settings'    => 'ocean_input_font_size',
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Forms Border Width
			 */
			$wp_customize->add_setting(
				'ocean_input_top_border_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '1',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_right_border_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '1',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_bottom_border_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '1',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_left_border_width',
				array(
					'transport'         => 'postMessage',
					'default'           => '1',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_setting(
				'ocean_input_tablet_top_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_tablet_right_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_tablet_bottom_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_tablet_left_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_setting(
				'ocean_input_mobile_top_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_mobile_right_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_mobile_bottom_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_input_mobile_left_border_width',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Dimensions_Control(
					$wp_customize,
					'ocean_input_border_width_dimensions',
					array(
						'label'       => esc_html__( 'Border Width (px)', 'oceanwp' ),
						'section'     => 'ocean_general_forms',
						'settings'    => array(
							'desktop_top'    => 'ocean_input_top_border_width',
							'desktop_right'  => 'ocean_input_right_border_width',
							'desktop_bottom' => 'ocean_input_bottom_border_width',
							'desktop_left'   => 'ocean_input_left_border_width',
							'tablet_top'     => 'ocean_input_tablet_top_border_width',
							'tablet_right'   => 'ocean_input_tablet_right_border_width',
							'tablet_bottom'  => 'ocean_input_tablet_bottom_border_width',
							'tablet_left'    => 'ocean_input_tablet_left_border_width',
							'mobile_top'     => 'ocean_input_mobile_top_border_width',
							'mobile_right'   => 'ocean_input_mobile_right_border_width',
							'mobile_bottom'  => 'ocean_input_mobile_bottom_border_width',
							'mobile_left'    => 'ocean_input_mobile_left_border_width',
						),
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Forms Border Radius
			 */
			$wp_customize->add_setting(
				'ocean_input_border_radius',
				array(
					'transport'         => 'postMessage',
					'default'           => '3',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_input_border_radius',
					array(
						'label'       => esc_html__( 'Border Radius (px)', 'oceanwp' ),
						'section'     => 'ocean_general_forms',
						'settings'    => 'ocean_input_border_radius',
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Forms Border Color
			 */
			$wp_customize->add_setting(
				'ocean_input_border_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#dddddd',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_input_border_color',
					array(
						'label'    => esc_html__( 'Border Color', 'oceanwp' ),
						'section'  => 'ocean_general_forms',
						'settings' => 'ocean_input_border_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Forms Border Color Focus
			 */
			$wp_customize->add_setting(
				'ocean_input_border_color_focus',
				array(
					'transport'         => 'postMessage',
					'default'           => '#bbbbbb',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_input_border_color_focus',
					array(
						'label'    => esc_html__( 'Border Color: Focus', 'oceanwp' ),
						'section'  => 'ocean_general_forms',
						'settings' => 'ocean_input_border_color_focus',
						'priority' => 10,
					)
				)
			);

			/**
			 * Forms Background Color
			 */
			$wp_customize->add_setting(
				'ocean_input_background',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_input_background',
					array(
						'label'    => esc_html__( 'Background Color', 'oceanwp' ),
						'section'  => 'ocean_general_forms',
						'settings' => 'ocean_input_background',
						'priority' => 10,
					)
				)
			);

			/**
			 * Forms Color
			 */
			$wp_customize->add_setting(
				'ocean_input_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#333333',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_input_color',
					array(
						'label'    => esc_html__( 'Color', 'oceanwp' ),
						'section'  => 'ocean_general_forms',
						'settings' => 'ocean_input_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_theme_button',
				array(
					'title'    => esc_html__( 'Theme Buttons', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Theme Buttons Padding
			 */
			$wp_customize->add_setting(
				'ocean_theme_button_top_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '14',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_right_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '20',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '14',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_left_padding',
				array(
					'transport'         => 'postMessage',
					'default'           => '20',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_setting(
				'ocean_theme_button_tablet_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_tablet_right_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_tablet_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_tablet_left_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_setting(
				'ocean_theme_button_mobile_top_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_mobile_right_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_mobile_bottom_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);
			$wp_customize->add_setting(
				'ocean_theme_button_mobile_left_padding',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Dimensions_Control(
					$wp_customize,
					'ocean_theme_button_padding_dimensions',
					array(
						'label'       => esc_html__( 'Padding (px)', 'oceanwp' ),
						'section'     => 'ocean_general_theme_button',
						'settings'    => array(
							'desktop_top'    => 'ocean_theme_button_top_padding',
							'desktop_right'  => 'ocean_theme_button_right_padding',
							'desktop_bottom' => 'ocean_theme_button_bottom_padding',
							'desktop_left'   => 'ocean_theme_button_left_padding',
							'tablet_top'     => 'ocean_theme_button_tablet_top_padding',
							'tablet_right'   => 'ocean_theme_button_tablet_right_padding',
							'tablet_bottom'  => 'ocean_theme_button_tablet_bottom_padding',
							'tablet_left'    => 'ocean_theme_button_tablet_left_padding',
							'mobile_top'     => 'ocean_theme_button_mobile_top_padding',
							'mobile_right'   => 'ocean_theme_button_mobile_right_padding',
							'mobile_bottom'  => 'ocean_theme_button_mobile_bottom_padding',
							'mobile_left'    => 'ocean_theme_button_mobile_left_padding',
						),
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Theme Buttons Border Radius
			 */
			$wp_customize->add_setting(
				'ocean_theme_button_border_radius',
				array(
					'transport'         => 'postMessage',
					'default'           => '0',
					'sanitize_callback' => 'oceanwp_sanitize_number',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_theme_button_border_radius',
					array(
						'label'       => esc_html__( 'Border Radius (px)', 'oceanwp' ),
						'section'     => 'ocean_general_theme_button',
						'settings'    => 'ocean_theme_button_border_radius',
						'priority'    => 10,
						'input_attrs' => array(
							'min'  => 0,
							'max'  => 100,
							'step' => 1,
						),
					)
				)
			);

			/**
			 * Theme Buttons Background Color
			 */
			$wp_customize->add_setting(
				'ocean_theme_button_bg',
				array(
					'transport'         => 'postMessage',
					'default'           => '#13aff0',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_theme_button_bg',
					array(
						'label'    => esc_html__( 'Background Color', 'oceanwp' ),
						'section'  => 'ocean_general_theme_button',
						'settings' => 'ocean_theme_button_bg',
						'priority' => 10,
					)
				)
			);

			/**
			 * Theme Buttons Background Color Hover
			 */
			$wp_customize->add_setting(
				'ocean_theme_button_hover_bg',
				array(
					'transport'         => 'postMessage',
					'default'           => '#0b7cac',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_theme_button_hover_bg',
					array(
						'label'    => esc_html__( 'Background Color: Hover', 'oceanwp' ),
						'section'  => 'ocean_general_theme_button',
						'settings' => 'ocean_theme_button_hover_bg',
						'priority' => 10,
					)
				)
			);

			/**
			 * Theme Buttons Color
			 */
			$wp_customize->add_setting(
				'ocean_theme_button_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#ffffff',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_theme_button_color',
					array(
						'label'    => esc_html__( 'Color', 'oceanwp' ),
						'section'  => 'ocean_general_theme_button',
						'settings' => 'ocean_theme_button_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Theme Buttons Color Hover
			 */
			$wp_customize->add_setting(
				'ocean_theme_button_hover_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#ffffff',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_theme_button_hover_color',
					array(
						'label'    => esc_html__( 'Color: Hover', 'oceanwp' ),
						'section'  => 'ocean_general_theme_button',
						'settings' => 'ocean_theme_button_hover_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_error_page',
				array(
					'title'    => esc_html__( '404 Error Page', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Blank Page
			 */
			$wp_customize->add_setting(
				'ocean_error_page_blank',
				array(
					'default'           => 'off',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_error_page_blank',
					array(
						'label'       => esc_html__( 'Blank Page', 'oceanwp' ),
						'description' => esc_html__( 'Enable this option to remove all the elements and have full control of the 404 error page.', 'oceanwp' ),
						'section'     => 'ocean_general_error_page',
						'settings'    => 'ocean_error_page_blank',
						'priority'    => 10,
						'choices'     => array(
							'on'  => esc_html__( 'On', 'oceanwp' ),
							'off' => esc_html__( 'Off', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Page 404 Logo
			 */
			$wp_customize->add_setting(
				'ocean_404_logo',
				array(
					'default'           => '',
					'sanitize_callback' => 'oceanwp_sanitize_image',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Image_Control(
					$wp_customize,
					'ocean_404_logo',
					array(
						'label'       => esc_html__( '404 Logo', 'oceanwp' ),
						'description' => esc_html__( 'Select a 404 logo.', 'oceanwp' ),
						'section'     => 'ocean_general_error_page',
						'settings'    => 'ocean_404_logo',
						'priority'    => 10,
					)
				)
			);

			/**
			 * Layout
			 */
			$wp_customize->add_setting(
				'ocean_error_page_layout',
				array(
					'default'           => 'full-width',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Radio_Image_Control(
					$wp_customize,
					'ocean_error_page_layout',
					array(
						'label'    => esc_html__( 'Layout', 'oceanwp' ),
						'section'  => 'ocean_general_error_page',
						'settings' => 'ocean_error_page_layout',
						'priority' => 10,
						'choices'  => array(
							'full-width'  => OCEANWP_INC_DIR_URI . 'customizer/assets/img/fw.png',
							'full-screen' => OCEANWP_INC_DIR_URI . 'customizer/assets/img/fs.png',
						),
					)
				)
			);

			/**
			 * Template
			 */
			$wp_customize->add_setting(
				'ocean_error_page_template',
				array(
					'default'           => '0',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_error_page_template',
					array(
						'label'       => esc_html__( 'Select Template', 'oceanwp' ),
						'description' => esc_html__( 'Choose a template created in Theme Panel > My Library.', 'oceanwp' ),
						'type'        => 'select',
						'section'     => 'ocean_general_error_page',
						'settings'    => 'ocean_error_page_template',
						'priority'    => 10,
						'choices'     => oceanwp_customizer_helpers( 'library' ),
					)
				)
			);

			/**
			 * Section Theme Icons
			 *
			 * @since 2.0
			 */
			$wp_customize->add_section(
				'ocean_general_theme_icons',
				array(
					'title'    => esc_html__( 'Theme Icons', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Choose Default Theme Icons
			 */
			$wp_customize->add_setting(
				'ocean_theme_default_icons',
				array(
					'default'           => 'sili',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_theme_default_icons',
					array(
						'label'       => esc_html__( 'Select Icons', 'oceanwp' ),
						'description' => esc_html__( 'Choose icons you would like to use in the theme.', 'oceanwp' ),
						'type'        => 'select',
						'section'     => 'ocean_general_theme_icons',
						'settings'    => 'ocean_theme_default_icons',
						'priority'    => 10,
						'choices'     => array(
							'svg'  => esc_html__( 'Ocean SVG Icons', 'oceanwp' ),
							'sili' => esc_html__( 'Simple Line Icons', 'oceanwp' ),
							'fai'  => esc_html__( 'Font Awesome Icons', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Blog Entries Meta Icons Color
			 */
			$wp_customize->add_setting(
				'ocean_theme_blog_posts_icons_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#333333',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_theme_blog_posts_icons_color',
					array(
						'label'    => esc_html__( 'Blog Entries Icons: Color', 'oceanwp' ),
						'section'  => 'ocean_general_theme_icons',
						'settings' => 'ocean_theme_blog_posts_icons_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Single Blog Post Meta Icons Color
			 */
			$wp_customize->add_setting(
				'ocean_theme_single_post_icons_color',
				array(
					'transport'         => 'postMessage',
					'default'           => '#333333',
					'sanitize_callback' => 'oceanwp_sanitize_color',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Color_Control(
					$wp_customize,
					'ocean_theme_single_post_icons_color',
					array(
						'label'    => esc_html__( 'Single Post Icons: Color', 'oceanwp' ),
						'section'  => 'ocean_general_theme_icons',
						'settings' => 'ocean_theme_single_post_icons_color',
						'priority' => 10,
					)
				)
			);

			/**
			 * Section SEO
			 *
			 * @since 3.0.0
			 */
			$wp_customize->add_section(
				'ocean_general_seo_settings',
				array(
					'title'    => esc_html__( 'SEO Settings', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Schema Markup
			 */
			$wp_customize->add_setting(
				'ocean_schema_markup',
				array(
					'default'           => true,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_schema_markup',
					array(
						'label'    => esc_html__( 'Enable Schema Markup', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_seo_settings',
						'settings' => 'ocean_schema_markup',
						'priority' => 10,
					)
				)
			);

			/**
			 * Enable image alt text on blog entry featured images
			 */
			$wp_customize->add_setting(
				'ocean_enable_be_fimage_alt',
				array(
					'default'           => false,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_enable_be_fimage_alt',
					array(
						'label'    => esc_html__( 'Use featured image ALT text on blog entries', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_seo_settings',
						'priority' => 10,
					)
				)
			);

			/**
			 * Enable image alt text on single post featured images
			 */
			$wp_customize->add_setting(
				'ocean_enable_sp_fimage_alt',
				array(
					'default'           => false,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_enable_sp_fimage_alt',
					array(
						'label'    => esc_html__( 'Use featured image ALT text on single posts', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_seo_settings',
						'priority' => 10,
					)
				)
			);

			/**
			 * Enable image alt text on single post featured images
			 */
			$wp_customize->add_setting(
				'ocean_enable_srp_fimage_alt',
				array(
					'default'           => false,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_enable_srp_fimage_alt',
					array(
						'label'    => esc_html__( 'Use featured image ALT text on single post related items', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_seo_settings',
						'priority' => 10,
					)
				)
			);

			/**
			 * Site breadcrumb info
			 */
			$wp_customize->add_setting(
				'ocean_configure_breadcrumb_link',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Info_Control(
					$wp_customize,
					'ocean_configure_breadcrumb_link',
					array(
						'label'       => esc_html__( 'Configure Breadcrumb', 'oceanwp' ),
						'description' => sprintf( esc_html__( 'Go to the %1$s Breadcrumbs settings page %2$s', 'oceanwp' ), '<a href="' . admin_url( 'customize.php?autofocus%5Bcontrol%5D=ocean_page_header_visibility' ) . '">', '</a>' ),
						'section'     => 'ocean_general_seo_settings',
						'priority'    => 10,
					)
				)
			);

			/**
			 * Heading Sitewide Identity
			 */
			$wp_customize->add_setting(
				'ocean_opengraph_heading',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Heading_Control(
					$wp_customize,
					'ocean_opengraph_heading',
					array(
						'label'       => esc_html__( 'OpenGraph', 'oceanwp' ),
						'description' => esc_html__( 'This is information taken by social media when a link is shared', 'oceanwp' ),
						'section'     => 'ocean_general_seo_settings',
						'priority'    => 10,
					)
				)
			);

			/**
			 * Enable OpenGraph
			 */
			$wp_customize->add_setting(
				'ocean_open_graph',
				array(
					'default'           => false,
					'sanitize_callback' => 'oceanwp_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_open_graph',
					array(
						'label'    => esc_html__( 'Enable OpenGraph', 'oceanwp' ),
						'type'     => 'checkbox',
						'section'  => 'ocean_general_seo_settings',
						'settings' => 'ocean_open_graph',
						'priority' => 10,
					)
				)
			);

			/**
			 * Twitter Handle
			 */
			$wp_customize->add_setting(
				'ocean_twitter_handle',
				array(
					'default'           => '',
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_twitter_handle',
					array(
						'label'    => esc_html__( 'Twitter Username', 'oceanwp' ),
						'section'  => 'ocean_general_seo_settings',
						'settings' => 'ocean_twitter_handle',
						'type'     => 'text',
						'priority' => 10,
					)
				)
			);

			/**
			 * Facebook Page URL
			 */
			$wp_customize->add_setting(
				'ocean_facebook_page_url',
				array(
					'default'           => '',
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_facebook_page_url',
					array(
						'label'    => esc_html__( 'Facebook Page URL', 'oceanwp' ),
						'section'  => 'ocean_general_seo_settings',
						'settings' => 'ocean_facebook_page_url',
						'type'     => 'text',
						'priority' => 10,
					)
				)
			);

			/**
			 * Facebook App ID
			 */
			$wp_customize->add_setting(
				'ocean_facebook_appid',
				array(
					'default'           => '',
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_facebook_appid',
					array(
						'label'    => esc_html__( 'Facebook App ID', 'oceanwp' ),
						'section'  => 'ocean_general_seo_settings',
						'settings' => 'ocean_facebook_appid',
						'type'     => 'text',
						'priority' => 10,
					)
				)
			);

			/**
			 * Call Performance Section
			 *
			 * @since 3.0.3
			 * @return void
			 */
			$this->performance_section( $wp_customize, $panel );
		}

		/**
		 * Performance Section
		 *
		 * @return void
		 *
		 * @since 3.0.3
		 */
		private function performance_section( $wp_customize, $panel ) {
			/**
			 * Section
			 */
			$wp_customize->add_section(
				'ocean_general_performance_section',
				array(
					'title'    => esc_html__( 'Performance', 'oceanwp' ),
					'priority' => 10,
					'panel'    => $panel,
				)
			);

			/**
			 * Emoji
			 */
			$wp_customize->add_setting(
				'ocean_performance_emoji',
				array(
					'transport'         => 'postMessage',
					'default'           => 'enable',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_performance_emoji',
					array(
						'label'       => esc_html__( 'Emoji', 'oceanwp' ),
						'description' => esc_html__( 'This style is all the css for the WP emoji.', 'oceanwp' ),
						'section'     => 'ocean_general_performance_section',
						'settings'    => 'ocean_performance_emoji',
						'priority'    => 10,
						'choices'     => array(
							'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
							'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Font Awesome Icons
			 */
			$wp_customize->add_setting(
				'ocean_performance_fontawesome',
				array(
					'transport'         => 'postMessage',
					'default'           => 'enabled',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_performance_fontawesome',
					array(
						'label'       => esc_html__( 'Font Awesome Icons', 'oceanwp' ),
						'description' => esc_html__( 'This style is all the css for the font awesome icons.', 'oceanwp' ),
						'section'     => 'ocean_general_performance_section',
						'settings'    => 'ocean_performance_fontawesome',
						'priority'    => 10,
						'choices'     => array(
							'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
							'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Disable OceanWP SVG Icons
			 */
			$wp_customize->add_setting(
				'ocean_disable_svg_icons',
				array(
					'transport'         => 'postMessage',
					'default'           => 'enabled',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_disable_svg_icons',
					array(
						'label'       => esc_html__( 'Ocean SVG Icons', 'oceanwp' ),
						'description' => esc_html__( 'This file is for all the Ocean SVG icons.', 'oceanwp' ),
						'section'     => 'ocean_general_performance_section',
						'priority'    => 10,
						'choices'     => array(
							'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
							'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Simple Line Icons
			 */
			$wp_customize->add_setting(
				'ocean_performance_simple_line_icons',
				array(
					'transport'         => 'postMessage',
					'default'           => 'enabled',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_performance_simple_line_icons',
					array(
						'label'       => esc_html__( 'Simple Line Icons', 'oceanwp' ),
						'description' => esc_html__( 'This style is all the css for the simple line icons.', 'oceanwp' ),
						'section'     => 'ocean_general_performance_section',
						'settings'    => 'ocean_performance_simple_line_icons',
						'priority'    => 10,
						'choices'     => array(
							'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
							'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Lightbox
			 */
			$wp_customize->add_setting(
				'ocean_performance_lightbox',
				array(
					'transport'         => 'postMessage',
					'default'           => 'enabled',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_performance_lightbox',
					array(
						'label'       => esc_html__( 'Lightbox', 'oceanwp' ),
						'description' => esc_html__( 'This script enables you to overlay your images on the current page, used for the gallerie, single product and content images.', 'oceanwp' ),
						'section'     => 'ocean_general_performance_section',
						'settings'    => 'ocean_performance_lightbox',
						'priority'    => 10,
						'choices'     => array(
							'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
							'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Custom Select
			 */
			$wp_customize->add_setting(
				'ocean_performance_custom_select',
				array(
					'transport'         => 'postMessage',
					'default'           => 'enabled',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_performance_custom_select',
					array(
						'label'       => esc_html__( 'Custom Select', 'oceanwp' ),
						'description' => esc_html__( 'This script uses the native select box and add overlays a stylable <span> element in order to acheive the desired look.', 'oceanwp' ),
						'section'     => 'ocean_general_performance_section',
						'settings'    => 'ocean_performance_custom_select',
						'priority'    => 10,
						'choices'     => array(
							'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
							'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
						),
					)
				)
			);

			if ( class_exists( 'Ocean_Extra' ) ) {

				/**
				 * Disable widgets.css
				 */
				$wp_customize->add_setting(
					'ocean_load_widgets_stylesheet',
					array(
						'transport'         => 'postMessage',
						'default'           => 'enabled',
						'sanitize_callback' => 'oceanwp_sanitize_select',
					)
				);

				$wp_customize->add_control(
					new OceanWP_Customizer_Buttonset_Control(
						$wp_customize,
						'ocean_load_widgets_stylesheet',
						array(
							'label'    => esc_html__( 'Widgets Stylesheet Load', 'oceanwp' ),
							'description' => esc_html__( 'You can disable loading widgets.css stylesheet on your site.', 'oceanwp' ),
							'section'  => 'ocean_general_performance_section',
							'settings' => 'ocean_load_widgets_stylesheet',
							'priority'    => 11,
							'choices'     => array(
								'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
								'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
							),
						)
					)
				);
			}

			/**
			 * Scroll Effect
			 */
			$wp_customize->add_setting(
				'ocean_performance_scroll_effect',
				array(
					'transport'         => 'postMessage',
					'default'           => 'enabled',
					'sanitize_callback' => 'oceanwp_sanitize_select',
				)
			);

			$wp_customize->add_control(
				new OceanWP_Customizer_Buttonset_Control(
					$wp_customize,
					'ocean_performance_scroll_effect',
					array(
						'label'       => esc_html__( 'Scroll Effect', 'oceanwp' ),
						'description' => esc_html__( 'This script is responsible for the scroll effect in theme.', 'oceanwp' ),
						'section'     => 'ocean_general_performance_section',
						'settings'    => 'ocean_performance_scroll_effect',
						'priority'    => 10,
						'choices'     => array(
							'disabled' => esc_html__( 'Disabled', 'oceanwp' ),
							'enabled'  => esc_html__( 'Enabled', 'oceanwp' ),
						),
					)
				)
			);

			/**
			 * Scroll offset
			 */
			$wp_customize->add_setting(
				'ocean_scroll_effect_offset_value',
				array(
					'transport'         => 'postMessage',
					'sanitize_callback' => 'oceanwp_sanitize_number_blank',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					'ocean_scroll_effect_offset_value',
					array(
						'label'           => esc_html__( 'Scroll Effect - Custom Offset', 'oceanwp' ),
						'type'            => 'number',
						'section'         => 'ocean_general_performance_section',
						'priority'        => 10,
						'input_attrs'     => array(
							'min'  => 0,
							'max'  => 600,
							'step' => 1,
						),
					)
				)
			);

		}

		/**
		 * Helpers
		 *
		 * @since 1.0.0
		 * @param object $return    return template.
		 */
		public static function helpers( $return = null ) {

			// Return elementor templates array.
			if ( 'elementor' === $return ) {
				$templates     = array( esc_html__( 'Default', 'oceanwp' ) );
				$get_templates = get_posts(
					array(
						'post_type'   => 'elementor_library',
						'numberposts' => -1,
						'post_status' => 'publish',
					)
				);

				if ( ! empty( $get_templates ) ) {
					foreach ( $get_templates as $template ) {
						$templates[ $template->ID ] = $template->post_title;
					}
				}

				return $templates;
			}

		}

		/**
		 * Get post types
		 *
		 * @since 1.3.7
		 * @param object $args    post type.
		 */
		private static function get_post_types( $args = array() ) {
			$post_type_args = array(
				'show_in_nav_menus' => true,
			);

			if ( ! empty( $args['post_type'] ) ) {
				$post_type_args['name'] = $args['post_type'];
			}

			$_post_types = get_post_types( $post_type_args, 'objects' );

			$post_types        = array();
			$post_types['any'] = esc_html__( 'All Post Types', 'oceanwp' );

			foreach ( $_post_types as $post_type => $object ) {
				$post_types[ $post_type ] = $object->label;
			}

			return $post_types;
		}

		/**
		 * Generates arrays of elements to target
		 *
		 * @since 1.0.0
		 * @param object $return    return value.
		 */
		private static function primary_color_arrays( $return ) {

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
					'.post-quote-content',
					'.omw-modal .omw-close-modal',
					'body .contact-info-widget.big-icons li:hover i',
					'body div.wpforms-container-full .wpforms-form input[type=submit]',
					'body div.wpforms-container-full .wpforms-form button[type=submit]',
					'body div.wpforms-container-full .wpforms-form .wpforms-page-button',
				)
			);

			// Borders.
			$borders = apply_filters(
				'ocean_primary_borders',
				array(
					'.widget-title',
					'blockquote',
					'#searchform-dropdown',
					'.dropdown-menu .sub-menu',
					'.blog-entry.large-entry .blog-entry-readmore a:hover',
					'.oceanwp-newsletter-form-wrap input[type="email"]:focus',
					'.social-widget li.oceanwp-email a:hover',
					'#respond #cancel-comment-reply-link:hover',
					'body .contact-info-widget.big-icons li:hover i',
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
		private static function hover_primary_color_array( $return ) {

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
		private static function main_border_array() {

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

					'body .posts-thumbnails-widget li',

					'body .tagcloud a',

				)
			);

		}

		/**
		 * Get CSS
		 *
		 * @param obj $output    css output.
		 * @since 1.0.0
		 */
		public function head_css( $output ) {

			// Global vars.
			$primary_color                 = get_theme_mod( 'ocean_primary_color', '#13aff0' );
			$hover_primary_color           = get_theme_mod( 'ocean_hover_primary_color', '#0b7cac' );
			$main_border_color             = get_theme_mod( 'ocean_main_border_color', '#e9e9e9' );
			$background_color              = get_theme_mod( 'ocean_background_color', '#ffffff' );
			$background_image              = get_theme_mod( 'ocean_background_image' );
			$background_image_position     = get_theme_mod( 'ocean_background_image_position' );
			$background_image_attachment   = get_theme_mod( 'ocean_background_image_attachment' );
			$background_image_repeat       = get_theme_mod( 'ocean_background_image_repeat' );
			$background_image_size         = get_theme_mod( 'ocean_background_image_size' );
			$links_color                   = get_theme_mod( 'ocean_links_color', '#333333' );
			$links_color_hover             = get_theme_mod( 'ocean_links_color_hover', '#13aff0' );
			$boxed_width                   = get_theme_mod( 'ocean_boxed_width', '1280' );
			$boxed_outside_bg              = get_theme_mod( 'ocean_boxed_outside_bg', '#e9e9e9' );
			$separate_outside_bg           = get_theme_mod( 'ocean_separate_outside_bg', '#f1f1f1' );
			$boxed_inner_bg                = get_theme_mod( 'ocean_boxed_inner_bg', '#ffffff' );
			$separate_content_padding      = get_theme_mod( 'ocean_separate_content_padding', '30px' );
			$separate_widgets_padding      = get_theme_mod( 'ocean_separate_widgets_padding', '30px' );
			$main_container_width          = get_theme_mod( 'ocean_main_container_width', '1200' );
			$left_container_width          = get_theme_mod( 'ocean_left_container_width', '72' );
			$sidebar_width                 = get_theme_mod( 'ocean_sidebar_width', '28' );
			$content_top_padding           = get_theme_mod( 'ocean_page_content_top_padding' );
			$content_bottom_padding        = get_theme_mod( 'ocean_page_content_bottom_padding' );
			$tablet_content_top_padding    = get_theme_mod( 'ocean_page_content_tablet_top_padding' );
			$tablet_content_bottom_padding = get_theme_mod( 'ocean_page_content_tablet_bottom_padding' );
			$mobile_content_top_padding    = get_theme_mod( 'ocean_page_content_mobile_top_padding' );
			$mobile_content_bottom_padding = get_theme_mod( 'ocean_page_content_mobile_bottom_padding' );
			$title_breadcrumb_position     = get_theme_mod( 'ocean_page_header_bg_title_breadcrumb_position', 'center' );
			$page_header_top_padding       = get_theme_mod( 'ocean_page_header_top_padding', '34' );
			$page_header_bottom_padding    = get_theme_mod( 'ocean_page_header_bottom_padding', '34' );
			$tablet_ph_top_padding         = get_theme_mod( 'ocean_page_header_tablet_top_padding' );
			$tablet_ph_bottom_padding      = get_theme_mod( 'ocean_page_header_tablet_bottom_padding' );
			$mobile_ph_top_padding         = get_theme_mod( 'ocean_page_header_mobile_top_padding' );
			$mobile_ph_bottom_padding      = get_theme_mod( 'ocean_page_header_mobile_bottom_padding' );
			$page_header_title_color       = get_theme_mod( 'ocean_page_header_title_color' );
			$breadcrumbs_text_color        = get_theme_mod( 'ocean_breadcrumbs_text_color', '#c6c6c6' );
			$breadcrumbs_seperator_color   = get_theme_mod( 'ocean_breadcrumbs_seperator_color', '#c6c6c6' );
			$breadcrumbs_link_color        = get_theme_mod( 'ocean_breadcrumbs_link_color', '#333333' );
			$breadcrumbs_link_color_hover  = get_theme_mod( 'ocean_breadcrumbs_link_color_hover', '#13aff0' );
			$scroll_top_bottom_position    = get_theme_mod( 'ocean_scroll_top_bottom_position', '20' );
			$scroll_top_size               = get_theme_mod( 'ocean_scroll_top_size', '40' );
			$scroll_top_icon_size          = get_theme_mod( 'ocean_scroll_top_icon_size', '18' );
			$scroll_top_border_radius      = get_theme_mod( 'ocean_scroll_top_border_radius', '2' );
			$scroll_top_bg                 = get_theme_mod( 'ocean_scroll_top_bg', 'rgba(0,0,0,0.4)' );
			$scroll_top_bg_hover           = get_theme_mod( 'ocean_scroll_top_bg_hover', 'rgba(0,0,0,0.8)' );
			$scroll_top_color              = get_theme_mod( 'ocean_scroll_top_color', '#ffffff' );
			$scroll_top_color_hover        = get_theme_mod( 'ocean_scroll_top_color_hover', '#ffffff' );
			$pagination_font_size          = get_theme_mod( 'ocean_pagination_font_size', '18' );
			$pagination_border_width       = get_theme_mod( 'ocean_pagination_border_width', '1' );
			$pagination_bg                 = get_theme_mod( 'ocean_pagination_bg' );
			$pagination_hover_bg           = get_theme_mod( 'ocean_pagination_hover_bg', '#f8f8f8' );
			$pagination_color              = get_theme_mod( 'ocean_pagination_color', '#555555' );
			$pagination_hover_color        = get_theme_mod( 'ocean_pagination_hover_color', '#333333' );
			$pagination_border_color       = get_theme_mod( 'ocean_pagination_border_color', '#e9e9e9' );
			$pagination_border_hover_color = get_theme_mod( 'ocean_pagination_border_hover_color', '#e9e9e9' );
			$label_color                   = get_theme_mod( 'ocean_label_color', '#929292' );
			$input_top_padding             = get_theme_mod( 'ocean_input_top_padding', '6' );
			$input_right_padding           = get_theme_mod( 'ocean_input_right_padding', '12' );
			$input_bottom_padding          = get_theme_mod( 'ocean_input_bottom_padding', '6' );
			$input_left_padding            = get_theme_mod( 'ocean_input_left_padding', '12' );
			$tablet_input_top_padding      = get_theme_mod( 'ocean_input_tablet_top_padding' );
			$tablet_input_right_padding    = get_theme_mod( 'ocean_input_tablet_right_padding' );
			$tablet_input_bottom_padding   = get_theme_mod( 'ocean_input_tablet_bottom_padding' );
			$tablet_input_left_padding     = get_theme_mod( 'ocean_input_tablet_left_padding' );
			$mobile_input_top_padding      = get_theme_mod( 'ocean_input_mobile_top_padding' );
			$mobile_input_right_padding    = get_theme_mod( 'ocean_input_mobile_right_padding' );
			$mobile_input_bottom_padding   = get_theme_mod( 'ocean_input_mobile_bottom_padding' );
			$mobile_input_left_padding     = get_theme_mod( 'ocean_input_mobile_left_padding' );
			$input_font_size               = get_theme_mod( 'ocean_input_font_size', '14' );
			$input_top_border_width        = get_theme_mod( 'ocean_input_top_border_width', '1' );
			$input_right_border_width      = get_theme_mod( 'ocean_input_right_border_width', '1' );
			$input_bottom_border_width     = get_theme_mod( 'ocean_input_bottom_border_width', '1' );
			$input_left_border_width       = get_theme_mod( 'ocean_input_left_border_width', '1' );
			$tablet_input_top_bw           = get_theme_mod( 'ocean_input_tablet_top_border_width' );
			$tablet_input_right_bw         = get_theme_mod( 'ocean_input_tablet_right_border_width' );
			$tablet_input_bottom_bw        = get_theme_mod( 'ocean_input_tablet_bottom_border_width' );
			$tablet_input_left_bw          = get_theme_mod( 'ocean_input_tablet_left_border_width' );
			$mobile_input_top_bw           = get_theme_mod( 'ocean_input_mobile_top_border_width' );
			$mobile_input_right_bw         = get_theme_mod( 'ocean_input_mobile_right_border_width' );
			$mobile_input_bottom_bw        = get_theme_mod( 'ocean_input_mobile_bottom_border_width' );
			$mobile_input_left_bw          = get_theme_mod( 'ocean_input_mobile_left_border_width' );
			$input_border_radius           = get_theme_mod( 'ocean_input_border_radius', '3' );
			$input_border_color            = get_theme_mod( 'ocean_input_border_color', '#dddddd' );
			$input_border_color_focus      = get_theme_mod( 'ocean_input_border_color_focus', '#bbbbbb' );
			$input_background              = get_theme_mod( 'ocean_input_background' );
			$input_color                   = get_theme_mod( 'ocean_input_color', '#333333' );
			$theme_button_top_padding      = get_theme_mod( 'ocean_theme_button_top_padding', '14' );
			$theme_button_right_padding    = get_theme_mod( 'ocean_theme_button_right_padding', '20' );
			$theme_button_bottom_padding   = get_theme_mod( 'ocean_theme_button_bottom_padding', '14' );
			$theme_button_left_padding     = get_theme_mod( 'ocean_theme_button_left_padding', '20' );
			$tablet_tb_top_padding         = get_theme_mod( 'ocean_theme_button_tablet_top_padding' );
			$tablet_tb_right_padding       = get_theme_mod( 'ocean_theme_button_tablet_right_padding' );
			$tablet_tb_bottom_padding      = get_theme_mod( 'ocean_theme_button_tablet_bottom_padding' );
			$tablet_tb_left_padding        = get_theme_mod( 'ocean_theme_button_tablet_left_padding' );
			$mobile_tb_top_padding         = get_theme_mod( 'ocean_theme_button_mobile_top_padding' );
			$mobile_tb_right_padding       = get_theme_mod( 'ocean_theme_button_mobile_right_padding' );
			$mobile_tb_bottom_padding      = get_theme_mod( 'ocean_theme_button_mobile_bottom_padding' );
			$mobile_tb_left_padding        = get_theme_mod( 'ocean_theme_button_mobile_left_padding' );
			$theme_button_border_radius    = get_theme_mod( 'ocean_theme_button_border_radius', '0' );
			$theme_button_bg               = get_theme_mod( 'ocean_theme_button_bg', '#13aff0' );
			$theme_button_hover_bg         = get_theme_mod( 'ocean_theme_button_hover_bg', '#0b7cac' );
			$theme_button_color            = get_theme_mod( 'ocean_theme_button_color', '#ffffff' );
			$theme_button_hover_color      = get_theme_mod( 'ocean_theme_button_hover_color', '#ffffff' );
			$theme_blog_icons_color        = get_theme_mod( 'ocean_theme_blog_posts_icons_color', '#333333' );
			$theme_post_icons_color        = get_theme_mod( 'ocean_theme_single_post_icons_color', '#333333' );

			// Both sidebars page layout.
			$page_layout            = get_theme_mod( 'ocean_page_single_layout', 'right-sidebar' );
			$bs_page_content_width  = get_theme_mod( 'ocean_page_single_both_sidebars_content_width' );
			$bs_page_sidebars_width = get_theme_mod( 'ocean_page_single_both_sidebars_sidebars_width' );

			// Both sidebars search layout.
			$search_layout            = get_theme_mod( 'ocean_search_layout', 'right-sidebar' );
			$bs_search_content_width  = get_theme_mod( 'ocean_search_both_sidebars_content_width' );
			$bs_search_sidebars_width = get_theme_mod( 'ocean_search_both_sidebars_sidebars_width' );

			// Meta.
			$meta_breadcrumbs_text_color       = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_color', true );
			$meta_breadcrumbs_seperator_color  = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_separator_color', true );
			$meta_breadcrumbs_link_color       = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_links_color', true );
			$meta_breadcrumbs_link_color_hover = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_links_hover_color', true );
			$meta_breadcrumbs_link_color_hover = get_post_meta( oceanwp_post_id(), 'ocean_breadcrumbs_links_hover_color', true );

			// Define css var.
			$css                        = '';
			$content_padding_css        = '';
			$tablet_content_padding_css = '';
			$mobile_content_padding_css = '';

			// Get primary color arrays.
			$texts       = self::primary_color_arrays( 'texts' );
			$svg_icons   = self::primary_color_arrays( 'svg_icons' );
			$backgrounds = self::primary_color_arrays( 'backgrounds' );
			$borders     = self::primary_color_arrays( 'borders' );

			// Get hover primary color arrays.
			$hover_primary = self::hover_primary_color_array( 'hover' );

			// Get hover primary color arrays.
			$main_border = self::main_border_array();

			// Texts.
			if ( ! empty( $texts ) && '#13aff0' != $primary_color ) {
				$css .= implode( ',', $texts ) . '{color:' . $primary_color . ';}';
				$css .= implode( ',', $svg_icons ) . '{stroke:' . $primary_color . ';}';
			}

			// Backgrounds.
			if ( ! empty( $backgrounds ) && '#13aff0' != $primary_color ) {
				$css .= implode( ',', $backgrounds ) . '{background-color:' . $primary_color . ';}';
				$css .= '.thumbnail:hover .link-post-svg-icon{background-color:' . $primary_color . ';}';
				$css .= 'body .contact-info-widget.big-icons li:hover .owp-icon{background-color:' . $primary_color . ';}';
			}

			// Borders.
			if ( ! empty( $borders ) && '#13aff0' != $primary_color ) {
				foreach ( $borders as $key => $val ) {
					if ( is_array( $val ) ) {
						$css .= $key . '{';
						foreach ( $val as $key => $val ) {
							$css .= 'border-' . $val . '-color:' . $primary_color . ';';
						}
						$css .= '}';
					} else {
						$css .= $val . '{border-color:' . $primary_color . ';}';
					}
				}
			}

			// Blockquotes color.
			if ( ! empty( $primary_color ) && '#13aff0' != $primary_color ) {
				$css .= 'blockquote, .wp-block-quote{border-left-color:' . $primary_color . ';}';
				$css .= 'body .contact-info-widget.big-icons li:hover .owp-icon{border-color:' . $primary_color . ';}';
			}

			// Hover primary color.
			if ( ! empty( $hover_primary ) && '#0b7cac' != $hover_primary_color ) {
				$css .= implode( ',', $hover_primary ) . '{background-color:' . $hover_primary_color . ';}';
			}

			// Main border color.
			if ( ! empty( $main_border ) && '#e9e9e9' != $main_border_color ) {
				$css .= implode( ',', $main_border ) . '{border-color:' . $main_border_color . ';}';
				$css .= 'body .contact-info-widget.big-icons .owp-icon, body .contact-info-widget.default .owp-icon{border-color:' . $main_border_color . ';}';
			}

			// Get site background color.
			if ( ! empty( $background_color ) && '#ffffff' != $background_color ) {
				$css .= 'body, .has-parallax-footer:not(.separate-layout) #main{background-color:' . $background_color . ';}';
			}

			// Get site background image.
			if ( ! empty( $background_image ) ) {
				$css .= 'body{background-image:url(' . $background_image . ');}';
			}

			// Get site background position.
			if ( ! empty( $background_image_position ) && 'initial' != $background_image_position ) {
				$css .= 'body{background-position:' . $background_image_position . ';}';
			}

			// Get site background attachment.
			if ( ! empty( $background_image_attachment ) && 'initial' != $background_image_attachment ) {
				$css .= 'body{background-attachment:' . $background_image_attachment . ';}';
			}

			// Get site background repeat.
			if ( ! empty( $background_image_repeat ) && 'initial' != $background_image_repeat ) {
				$css .= 'body{background-repeat:' . $background_image_repeat . ';}';
			}

			// Get site background size.
			if ( ! empty( $background_image_size ) && 'initial' != $background_image_size ) {
				$css .= 'body{background-size:' . $background_image_size . ';}';
			}

			// Links color.
			if ( ! empty( $links_color ) && '#333333' != $links_color ) {
				$css .= 'a{color:' . $links_color . ';}';
				$css .= 'a .owp-icon use {stroke:' . $links_color . ';}';
			}

			// Links color hover.
			if ( ! empty( $links_color_hover ) && '#13aff0' != $links_color_hover ) {
				$css .= 'a:hover{color:' . $links_color_hover . ';}';
				$css .= 'a:hover .owp-icon use {stroke:' . $links_color_hover . ';}';
			}

			// Boxed width.
			if ( ! empty( $boxed_width ) && '1280' != $boxed_width ) {
				$css .= '.boxed-layout #wrap, .boxed-layout .parallax-footer, .boxed-layout .owp-floating-bar{width:' . $boxed_width . 'px;}';
			}

			// Boxed outside background.
			if ( ! empty( $boxed_outside_bg ) && '#e9e9e9' != $boxed_outside_bg ) {
				$css .= '.boxed-layout{background-color:' . $boxed_outside_bg . ';}';
			}

			// Separate outside background.
			if ( ! empty( $separate_outside_bg ) && '#f1f1f1' != $separate_outside_bg ) {
				$css .= '.separate-layout, .has-parallax-footer.separate-layout #main{background-color:' . $separate_outside_bg . ';}';
			}

			// Boxed inner background.
			if ( ! empty( $boxed_inner_bg ) && '#ffffff' != $boxed_inner_bg ) {
				$css .= '.boxed-layout #wrap, .separate-layout .content-area, .separate-layout .widget-area .sidebar-box, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner, .has-parallax-footer:not(.separate-layout) #main{background-color:' . $boxed_inner_bg . ';}';
			}

			// Separate content padding.
			if ( ! empty( $separate_content_padding ) && '30px' != $separate_content_padding ) {
				$css .= '.separate-layout .content-area, .separate-layout.content-left-sidebar .content-area, .content-both-sidebars.scs-style .content-area, .separate-layout.content-both-sidebars.ssc-style .content-area, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner{padding:' . $separate_content_padding . ';}.separate-layout.content-full-width .content-area{padding:' . $separate_content_padding . ' !important;}';
			}

			// Separate widgets padding.
			if ( ! empty( $separate_widgets_padding ) && '30px' != $separate_widgets_padding ) {
				$css .= '.separate-layout .widget-area .sidebar-box{padding:' . $separate_widgets_padding . ';}';
			}

			// Content top padding.
			if ( ! empty( $main_container_width ) && '1200' != $main_container_width ) {
				$css .= '.container{width:' . $main_container_width . 'px;}';
			}

			// Content top padding.
			if ( ! empty( $left_container_width ) && '72' != $left_container_width ) {
				$css .= '@media only screen and (min-width: 960px){ .content-area, .content-left-sidebar .content-area{width:' . $left_container_width . '%;} }';
			}

			// Content top padding.
			if ( ! empty( $sidebar_width ) && '28' != $sidebar_width ) {
				$css .= '@media only screen and (min-width: 960px){ .widget-area, .content-left-sidebar .widget-area{width:' . $sidebar_width . '%;} }';
			}

			// Content top padding.
			if ( isset( $content_top_padding ) && '' != $content_top_padding ) {
				$content_padding_css .= 'padding-top:' . $content_top_padding . 'px;';
			}

			// Content bottom padding.
			if ( isset( $content_bottom_padding ) && '' != $content_bottom_padding ) {
				$content_padding_css .= 'padding-bottom:' . $content_bottom_padding . 'px;';
			}

			// Content padding css.
			if ( isset( $content_top_padding ) && '' != $content_top_padding
				|| isset( $content_bottom_padding ) && '' != $content_bottom_padding ) {
				$css .= '#main #content-wrap, .separate-layout #main #content-wrap{' . $content_padding_css . '}';
			}

			// Tablet content top padding.
			if ( isset( $tablet_content_top_padding ) && '' != $tablet_content_top_padding ) {
				$tablet_content_padding_css .= 'padding-top:' . $tablet_content_top_padding . 'px;';
			}

			// Tablet content bottom padding.
			if ( isset( $tablet_content_bottom_padding ) && '' != $tablet_content_bottom_padding ) {
				$tablet_content_padding_css .= 'padding-bottom:' . $tablet_content_bottom_padding . 'px;';
			}

			// Tablet content padding css.
			if ( isset( $tablet_content_top_padding ) && '' != $tablet_content_top_padding
				|| isset( $tablet_content_bottom_padding ) && '' != $tablet_content_bottom_padding ) {
				$css .= '@media (max-width: 768px){#main #content-wrap, .separate-layout #main #content-wrap{' . $tablet_content_padding_css . '}}';
			}

			// Mobile content top padding.
			if ( isset( $mobile_content_top_padding ) && '' != $mobile_content_top_padding ) {
				$mobile_content_padding_css .= 'padding-top:' . $mobile_content_top_padding . 'px;';
			}

			// Mobile content bottom padding.
			if ( isset( $mobile_content_bottom_padding ) && '' != $mobile_content_bottom_padding ) {
				$mobile_content_padding_css .= 'padding-bottom:' . $mobile_content_bottom_padding . 'px;';
			}

			// Mobile content padding css.
			if ( isset( $mobile_content_top_padding ) && '' != $mobile_content_top_padding
				|| isset( $mobile_content_bottom_padding ) && '' != $mobile_content_bottom_padding ) {
				$css .= '@media (max-width: 480px){#main #content-wrap, .separate-layout #main #content-wrap{' . $mobile_content_padding_css . '}}';
			}

			// Title/breadcrumb position.
			if ( ! empty( $title_breadcrumb_position ) && 'center' != $title_breadcrumb_position ) {
				$css .= '.background-image-page-header .page-header-inner, .background-image-page-header .site-breadcrumbs{text-align: ' . $title_breadcrumb_position . '}';
			}

			// Page header padding.
			if ( isset( $page_header_top_padding ) && '34' != $page_header_top_padding && '' != $page_header_top_padding
				|| isset( $page_header_bottom_padding ) && '34' != $page_header_bottom_padding && '' != $page_header_bottom_padding ) {
				$css .= '.page-header, .has-transparent-header .page-header{padding:' . oceanwp_spacing_css( $page_header_top_padding, '', $page_header_bottom_padding, '' ) . '}';
			}

			// Tablet page header padding.
			if ( isset( $tablet_ph_top_padding ) && '' != $tablet_ph_top_padding
				|| isset( $tablet_ph_bottom_padding ) && '' != $tablet_ph_bottom_padding ) {
				$css .= '@media (max-width: 768px){.page-header, .has-transparent-header .page-header{padding:' . oceanwp_spacing_css( $tablet_ph_top_padding, '', $tablet_ph_bottom_padding, '' ) . '}}';
			}

			// Mobile page header padding.
			if ( isset( $mobile_ph_top_padding ) && '' != $mobile_ph_top_padding
				|| isset( $mobile_ph_bottom_padding ) && '' != $mobile_ph_bottom_padding ) {
				$css .= '@media (max-width: 480px){.page-header, .has-transparent-header .page-header{padding:' . oceanwp_spacing_css( $mobile_ph_top_padding, '', $mobile_ph_bottom_padding, '' ) . '}}';
			}

			// Page header color.
			if ( ! empty( $page_header_title_color ) ) {
				$css .= '.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{color:' . $page_header_title_color . ';}';
			}

			// Breadcrumbs text color.
			if ( ! empty( $breadcrumbs_text_color ) && '#c6c6c6' != $breadcrumbs_text_color ) {
				$css .= '.site-breadcrumbs, .background-image-page-header .site-breadcrumbs{color:' . $breadcrumbs_text_color . ';}';
			}

			// Breadcrumbs seperator color.
			if ( ! empty( $breadcrumbs_seperator_color ) && '#c6c6c6' != $breadcrumbs_seperator_color ) {
				$css .= '.site-breadcrumbs ul li .breadcrumb-sep, .site-breadcrumbs ol li .breadcrumb-sep{color:' . $breadcrumbs_seperator_color . ';}';
			}

			// Breadcrumbs link color.
			if ( ! empty( $breadcrumbs_link_color ) && '#333333' != $breadcrumbs_link_color ) {
				$css .= '.site-breadcrumbs a, .background-image-page-header .site-breadcrumbs a{color:' . $breadcrumbs_link_color . ';}';
				$css .= '.site-breadcrumbs a .owp-icon use, .background-image-page-header .site-breadcrumbs a .owp-icon use{stroke:' . $breadcrumbs_link_color . ';}';
			}

			// Breadcrumbs link hover color.
			if ( ! empty( $breadcrumbs_link_color_hover ) && '#13aff0' != $breadcrumbs_link_color_hover ) {
				$css .= '.site-breadcrumbs a:hover, .background-image-page-header .site-breadcrumbs a:hover{color:' . $breadcrumbs_link_color_hover . ';}';
				$css .= '.site-breadcrumbs a:hover .owp-icon use, .background-image-page-header .site-breadcrumbs a:hover .owp-icon use{stroke:' . $breadcrumbs_link_color_hover . ';}';
			}

			// Meta breadcrumbs text color.
			if ( ! empty( $meta_breadcrumbs_text_color ) ) {
				$css .= '.site-breadcrumbs, .background-image-page-header .site-breadcrumbs{color:' . $meta_breadcrumbs_text_color . ';}';
			}

			// Meta breadcrumbs seperator color.
			if ( ! empty( $meta_breadcrumbs_seperator_color ) ) {
				$css .= '.site-breadcrumbs ul li .breadcrumb-sep{color:' . $meta_breadcrumbs_seperator_color . ';}';
			}

			// Meta breadcrumbs link color.
			if ( ! empty( $meta_breadcrumbs_link_color ) ) {
				$css .= '.site-breadcrumbs a, .background-image-page-header .site-breadcrumbs a{color:' . $meta_breadcrumbs_link_color . ';}';
			}

			// Meta breadcrumbs link hover color.
			if ( ! empty( $meta_breadcrumbs_link_color_hover ) ) {
				$css .= '.site-breadcrumbs a:hover, .background-image-page-header .site-breadcrumbs a:hover{color:' . $meta_breadcrumbs_link_color_hover . ';}';
			}

			// Scroll top button bottom position.
			if ( ! empty( $scroll_top_bottom_position ) && '20' != $scroll_top_bottom_position ) {
				$css .= '#scroll-top{bottom:' . $scroll_top_bottom_position . 'px;}';
			}

			// Scroll top button size.
			if ( ! empty( $scroll_top_size ) && '40' != $scroll_top_size ) {
				$css .= '#scroll-top{width:' . $scroll_top_size . 'px;height:' . $scroll_top_size . 'px;line-height:' . $scroll_top_size . 'px;}';
			}

			// Scroll top button icon size.
			if ( ! empty( $scroll_top_icon_size ) && '18' != $scroll_top_icon_size ) {
				$css .= '#scroll-top{font-size:' . $scroll_top_icon_size . 'px;}';
				$css .= '#scroll-top .owp-icon{width:' . $scroll_top_icon_size . 'px; height:' . $scroll_top_icon_size . 'px;}';
			}

			// Scroll top button border radius.
			if ( ! empty( $scroll_top_border_radius ) && '2' != $scroll_top_border_radius ) {
				$css .= '#scroll-top{border-radius:' . $scroll_top_border_radius . 'px;}';
			}

			// Scroll top button background color.
			if ( ! empty( $scroll_top_bg ) && 'rgba(0,0,0,0.4)' != $scroll_top_bg ) {
				$css .= '#scroll-top{background-color:' . $scroll_top_bg . ';}';
			}

			// Scroll top button background hover color.
			if ( ! empty( $scroll_top_bg_hover ) && 'rgba(0,0,0,0.8)' != $scroll_top_bg_hover ) {
				$css .= '#scroll-top:hover{background-color:' . $scroll_top_bg_hover . ';}';
			}

			// Scroll top button background color.
			if ( ! empty( $scroll_top_color ) && '#ffffff' != $scroll_top_color ) {
				$css .= '#scroll-top{color:' . $scroll_top_color . ';}';
				$css .= '#scroll-top .owp-icon use{stroke:' . $scroll_top_color . ';}';
			}

			// Scroll top button background hover color.
			if ( ! empty( $scroll_top_color_hover ) && '#ffffff' != $scroll_top_color_hover ) {
				$css .= '#scroll-top:hover{color:' . $scroll_top_color_hover . ';}';
				$css .= '#scroll-top:hover .owp-icon use{stroke:' . $scroll_top_color . ';}';
			}

			// Pagination font size.
			if ( ! empty( $pagination_font_size ) && '18' != $pagination_font_size ) {
				$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{font-size:' . $pagination_font_size . 'px;}';
			}

			// Pagination border width.
			if ( ! empty( $pagination_border_width ) && '1' != $pagination_border_width ) {
				$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-width:' . $pagination_border_width . 'px;}';
			}

			// Pagination background color.
			if ( ! empty( $pagination_bg ) ) {
				$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{background-color:' . $pagination_bg . ';}';
			}

			// Pagination background color hover.
			if ( ! empty( $pagination_hover_bg ) && '#f8f8f8' != $pagination_hover_bg ) {
				$css .= '.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover{background-color:' . $pagination_hover_bg . ';}';
			}

			// Pagination color.
			if ( ! empty( $pagination_color ) && '#555555' != $pagination_color ) {
				$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{color:' . $pagination_color . ';}';
				$css .= '.page-numbers a .owp-icon use{stroke:' . $pagination_color . ';}';
			}

			// Pagination color hover.
			if ( ! empty( $pagination_hover_color ) && '#333333' != $pagination_hover_color ) {
				$css .= '.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover{color:' . $pagination_hover_color . ';}';
				$css .= '.page-numbers a:hover .owp-icon use{stroke:' . $pagination_hover_color . ';}';
			}

			// Pagination border color.
			if ( ! empty( $pagination_border_color ) && '#e9e9e9' != $pagination_border_color ) {
				$css .= '.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span{border-color:' . $pagination_border_color . ';}';
			}

			// Pagination border color hover.
			if ( ! empty( $pagination_border_hover_color ) && '#e9e9e9' != $pagination_border_hover_color ) {
				$css .= '.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover{border-color:' . $pagination_border_hover_color . ';}';
			}

			// Label color.
			if ( ! empty( $label_color ) && '#929292' != $label_color ) {
				$css .= 'label, body div.wpforms-container-full .wpforms-form .wpforms-field-label{color:' . $label_color . ';}';
			}

			// Input padding.
			if ( isset( $input_top_padding ) && '6' != $input_top_padding && '' != $input_top_padding
				|| isset( $input_right_padding ) && '12' != $input_right_padding && '' != $input_right_padding
				|| isset( $input_bottom_padding ) && '6' != $input_bottom_padding && '' != $input_bottom_padding
				|| isset( $input_left_padding ) && '12' != $input_left_padding && '' != $input_left_padding ) {
				$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{padding:' . oceanwp_spacing_css( $input_top_padding, $input_right_padding, $input_bottom_padding, $input_left_padding ) . '}';
				$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{padding:' . oceanwp_spacing_css( $input_top_padding, $input_right_padding, $input_bottom_padding, $input_left_padding ) . '; height: auto;}';
			}

			// Tablet input padding.
			if ( isset( $tablet_input_top_padding ) && '' != $tablet_input_top_padding
				|| isset( $tablet_input_right_padding ) && '' != $tablet_input_right_padding
				|| isset( $tablet_input_bottom_padding ) && '' != $tablet_input_bottom_padding
				|| isset( $tablet_input_left_padding ) && '' != $tablet_input_left_padding ) {
				$css .= '@media (max-width: 768px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{padding:' . oceanwp_spacing_css( $tablet_input_top_padding, $tablet_input_right_padding, $tablet_input_bottom_padding, $tablet_input_left_padding ) . '}}';
				$css .= '@media (max-width: 768px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{padding:' . oceanwp_spacing_css( $tablet_input_top_padding, $tablet_input_right_padding, $tablet_input_bottom_padding, $tablet_input_left_padding ) . '}}';
			}

			// Mobile input padding.
			if ( isset( $mobile_input_top_padding ) && '' != $mobile_input_top_padding
				|| isset( $mobile_input_right_padding ) && '' != $mobile_input_right_padding
				|| isset( $mobile_input_bottom_padding ) && '' != $mobile_input_bottom_padding
				|| isset( $mobile_input_left_padding ) && '' != $mobile_input_left_padding ) {
				$css .= '@media (max-width: 480px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{padding:' . oceanwp_spacing_css( $mobile_input_top_padding, $mobile_input_right_padding, $mobile_input_bottom_padding, $mobile_input_left_padding ) . '}}';
				$css .= '@media (max-width: 480px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{padding:' . oceanwp_spacing_css( $mobile_input_top_padding, $mobile_input_right_padding, $mobile_input_bottom_padding, $mobile_input_left_padding ) . '}}';
			}

			// Input font size.
			if ( ! empty( $input_font_size ) && '14' != $input_font_size ) {
				$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{font-size:' . $input_font_size . 'px;}';
				$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{font-size:' . $input_font_size . 'px;}';
			}

			// Input border width border width.
			if ( isset( $input_top_border_width ) && '1' != $input_top_border_width && '' != $input_top_border_width
				|| isset( $input_right_border_width ) && '1' != $input_right_border_width && '' != $input_right_border_width
				|| isset( $input_bottom_border_width ) && '1' != $input_bottom_border_width && '' != $input_bottom_border_width
				|| isset( $input_left_border_width ) && '1' != $input_left_border_width && '' != $input_left_border_width ) {
				$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-width:' . oceanwp_spacing_css( $input_top_border_width, $input_right_border_width, $input_bottom_border_width, $input_left_border_width ) . '}';
				$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-width:' . oceanwp_spacing_css( $input_top_border_width, $input_right_border_width, $input_bottom_border_width, $input_left_border_width ) . '}';
			}

			// Tablet input border width border width.
			if ( isset( $tablet_input_top_bw ) && '' != $tablet_input_top_bw
				|| isset( $tablet_input_right_bw ) && '' != $tablet_input_right_bw
				|| isset( $tablet_input_bottom_bw ) && '' != $tablet_input_bottom_bw
				|| isset( $tablet_input_left_bw ) && '' != $tablet_input_left_bw ) {
				$css .= '@media (max-width: 768px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-width:' . oceanwp_spacing_css( $tablet_input_top_bw, $tablet_input_right_bw, $tablet_input_bottom_bw, $tablet_input_left_bw ) . '}}';
				$css .= '@media (max-width: 768px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-width:' . oceanwp_spacing_css( $tablet_input_top_bw, $tablet_input_right_bw, $tablet_input_bottom_bw, $tablet_input_left_bw ) . '}}';
			}

			// Mobile input border width border width.
			if ( isset( $mobile_input_top_bw ) && '' != $mobile_input_top_bw
				|| isset( $mobile_input_right_bw ) && '' != $mobile_input_right_bw
				|| isset( $mobile_input_bottom_bw ) && '' != $mobile_input_bottom_bw
				|| isset( $mobile_input_left_bw ) && '' != $mobile_input_left_bw ) {
				$css .= '@media (max-width: 480px){form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{border-width:' . oceanwp_spacing_css( $mobile_input_top_bw, $mobile_input_right_bw, $mobile_input_bottom_bw, $mobile_input_left_bw ) . '}}';
				$css .= '@media (max-width: 480px){body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-width:' . oceanwp_spacing_css( $mobile_input_top_bw, $mobile_input_right_bw, $mobile_input_bottom_bw, $mobile_input_left_bw ) . '}}';
			}

			// Input border radius.
			if ( ! empty( $input_border_radius ) && '3' != $input_border_radius ) {
				$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single{border-radius:' . $input_border_radius . 'px;}';
				$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-radius:' . $input_border_radius . 'px;}';
			}

			// Input border color.
			if ( ! empty( $input_border_color ) && '#dddddd' != $input_border_color ) {
				$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea,.select2-container .select2-choice, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single{border-color:' . $input_border_color . ';}';
				$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{border-color:' . $input_border_color . ';}';
			}

			// Input border color focus.
			if ( ! empty( $input_border_color_focus ) && '#bbbbbb' != $input_border_color_focus ) {
				$css .= 'form input[type="text"]:focus,form input[type="password"]:focus,form input[type="email"]:focus,form input[type="tel"]:focus,form input[type="url"]:focus,form input[type="search"]:focus,form textarea:focus,.select2-drop-active,.select2-dropdown-open.select2-drop-above .select2-choice,.select2-dropdown-open.select2-drop-above .select2-choices,.select2-drop.select2-drop-above.select2-drop-active,.select2-container-active .select2-choice,.select2-container-active .select2-choices{border-color:' . $input_border_color_focus . ';}';
				$css .= 'body div.wpforms-container-full .wpforms-form input:focus, body div.wpforms-container-full .wpforms-form textarea:focus, body div.wpforms-container-full .wpforms-form select:focus{border-color:' . $input_border_color_focus . ';}';
			}

			// Input border background.
			if ( ! empty( $input_background ) ) {
				$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea, .woocommerce .woocommerce-checkout .select2-container--default .select2-selection--single{background-color:' . $input_background . ';}';
				$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{background-color:' . $input_background . ';}';
			}

			// Input border color.
			if ( ! empty( $input_color ) && '#333333' != $input_color ) {
				$css .= 'form input[type="text"], form input[type="password"], form input[type="email"], form input[type="url"], form input[type="date"], form input[type="month"], form input[type="time"], form input[type="datetime"], form input[type="datetime-local"], form input[type="week"], form input[type="number"], form input[type="search"], form input[type="tel"], form input[type="color"], form select, form textarea{color:' . $input_color . ';}';
				$css .= 'body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea{color:' . $input_color . ';}';
			}

			// Theme buttons padding.
			if ( isset( $theme_button_top_padding ) && '14' != $theme_button_top_padding && '' != $theme_button_top_padding
				|| isset( $theme_button_right_padding ) && '20' != $theme_button_right_padding && '' != $theme_button_right_padding
				|| isset( $theme_button_bottom_padding ) && '14' != $theme_button_bottom_padding && '' != $theme_button_bottom_padding
				|| isset( $theme_button_left_padding ) && '20' != $theme_button_left_padding && '' != $theme_button_left_padding ) {
				$css .= '.theme-button,input[type="submit"],button[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{padding:' . oceanwp_spacing_css( $theme_button_top_padding, $theme_button_right_padding, $theme_button_bottom_padding, $theme_button_left_padding ) . '}';
			}

			// Tablet theme buttons padding.
			if ( isset( $tablet_tb_top_padding ) && '' != $tablet_tb_top_padding
				|| isset( $tablet_tb_right_padding ) && '' != $tablet_tb_right_padding
				|| isset( $tablet_tb_bottom_padding ) && '' != $tablet_tb_bottom_padding
				|| isset( $tablet_tb_left_padding ) && '' != $tablet_tb_left_padding ) {
				$css .= '@media (max-width: 768px){.theme-button,input[type="submit"],button[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{padding:' . oceanwp_spacing_css( $tablet_tb_top_padding, $tablet_tb_right_padding, $tablet_tb_bottom_padding, $tablet_tb_left_padding ) . '}}';
			}

			// Mobile theme buttons padding.
			if ( isset( $mobile_tb_top_padding ) && '' != $mobile_tb_top_padding
				|| isset( $mobile_tb_right_padding ) && '' != $mobile_tb_right_padding
				|| isset( $mobile_tb_bottom_padding ) && '' != $mobile_tb_bottom_padding
				|| isset( $mobile_tb_left_padding ) && '' != $mobile_tb_left_padding ) {
				$css .= '@media (max-width: 480px){.theme-button,input[type="submit"],button[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{padding:' . oceanwp_spacing_css( $mobile_tb_top_padding, $mobile_tb_right_padding, $mobile_tb_bottom_padding, $mobile_tb_left_padding ) . '}}';
			}

			// Theme buttons border radius.
			if ( ! empty( $theme_button_border_radius ) && '0' != $theme_button_border_radius ) {
				$css .= '.theme-button,input[type="submit"],button[type="submit"],button,.button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{border-radius:' . $theme_button_border_radius . 'px;}';
			}

			// Theme buttons background color.
			if ( ! empty( $theme_button_bg ) && '#13aff0' != $theme_button_bg ) {
				$css .= 'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{background-color:' . $theme_button_bg . ';}';
			}

			// Theme buttons background color.
			if ( ! empty( $theme_button_hover_bg ) && '#0b7cac' != $theme_button_hover_bg ) {
				$css .= 'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active{background-color:' . $theme_button_hover_bg . ';}';
			}

			// Theme buttons background color.
			if ( ! empty( $theme_button_color ) && '#ffffff' != $theme_button_color ) {
				$css .= 'body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button{color:' . $theme_button_color . ';}';
			}

			// Theme buttons hover color.
			if ( ! empty( $theme_button_hover_color ) && '#ffffff' != $theme_button_hover_color ) {
				$css .= 'body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active{color:' . $theme_button_hover_color . ';}';
			}

			// Blog entries meta icons color.
			if ( ! empty( $theme_blog_icons_color ) && '#333333' != $theme_blog_icons_color ) {
				$css .= '#blog-entries ul.meta li i{color:' . $theme_blog_icons_color . ';}';
				$css .= '#blog-entries ul.meta li .owp-icon use{stroke:' . $theme_blog_icons_color . ';}';
			}

			// Single post meta icons color.
			if ( ! empty( $theme_post_icons_color ) && '#333333' != $theme_post_icons_color ) {
				$css .= '.single-post ul.meta li i{color:' . $theme_post_icons_color . ';}';
				$css .= '.single-post ul.meta li .owp-icon use{stroke:' . $theme_post_icons_color . ';}';
			}

			// If page Both Sidebars layout.
			if ( 'both-sidebars' == $page_layout ) {

				// Both Sidebars layout page content width.
				if ( ! empty( $bs_page_content_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.page.content-both-sidebars .content-area {width: ' . $bs_page_content_width . '%;}
							body.page.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
							body.page.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_page_content_width . '%;}
						}';
				}

				// Both Sidebars layout page sidebars width.
				if ( ! empty( $bs_page_sidebars_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.page.content-both-sidebars .widget-area{width:' . $bs_page_sidebars_width . '%;}
							body.page.content-both-sidebars.scs-style .content-area{left:' . $bs_page_sidebars_width . '%;}
							body.page.content-both-sidebars.ssc-style .content-area{left:' . $bs_page_sidebars_width * 2 . '%;}
						}';
				}
			}

			// If search Both Sidebars layout.
			if ( 'both-sidebars' == $search_layout ) {

				// Both Sidebars layout search content width.
				if ( ! empty( $bs_search_content_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.search-results.content-both-sidebars .content-area {width: ' . $bs_search_content_width . '%;}
							body.search-results.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
							body.search-results.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_search_content_width . '%;}
						}';
				}

				// Both Sidebars layout search sidebars width.
				if ( ! empty( $bs_search_sidebars_width ) ) {
					$css .=
						'@media only screen and (min-width: 960px){
							body.search-results.content-both-sidebars .widget-area{width:' . $bs_search_sidebars_width . '%;}
							body.search-results.content-both-sidebars.scs-style .content-area{left:' . $bs_search_sidebars_width . '%;}
							body.search-results.content-both-sidebars.ssc-style .content-area{left:' . $bs_search_sidebars_width * 2 . '%;}
						}';
				}
			}

			// Return CSS.
			if ( ! empty( $css ) ) {
				$output .= '/* General CSS */' . $css;
			}

			// Return output css.
			return $output;

		}

	}

endif;

return new OceanWP_General_Customizer();
