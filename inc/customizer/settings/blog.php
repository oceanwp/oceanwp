<?php
/**
 * Blog Customizer Options
 *
 * @package Ocean WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Blog_Customizer' ) ) :

	class OceanWP_Blog_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {

			add_action( 'customize_register', 	array( $this, 'customizer_options' ) );

		}

		/**
		 * Customizer options
		 *
		 * @since 1.0.0
		 */
		public function customizer_options( $wp_customize ) {

			/**
			 * Panel
			 */
			$panel = 'ocean_blog';
			$wp_customize->add_panel( $panel , array(
				'title' 			=> esc_html__( 'Blog', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_blog_entries', array(
				'title' 			=> esc_html__( 'Blog Entries', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Archives & Entries Layout
			 */
			$wp_customize->add_setting( 'ocean_blog_archives_layout', array(
				'default'           	=> 'right-sidebar',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Radio_Image_Control( $wp_customize, 'ocean_blog_archives_layout', array(
				'label'	   				=> esc_html__( 'Archives & Entries Layout', 'oceanwp' ),
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_archives_layout',
				'priority' 				=> 10,
				'choices' 				=> array(
					'right-sidebar'  	=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/rs.png',
					'left-sidebar' 		=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/ls.png',
					'full-width'  		=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/fw.png',
					'full-screen'  		=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/fs.png',
				),
			) ) );

			/**
			 * Blog Image Overlay
			 */
			$wp_customize->add_setting( 'ocean_blog_image_overlay', array(
				'transport' 			=> 'postMessage',
				'default'           	=> true,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_image_overlay', array(
				'label'	   				=> esc_html__( 'Add Overlay On image Hover', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_image_overlay',
				'priority' 				=> 10,
			) ) );

			/**
			 * Blog Style
			 */
			$wp_customize->add_setting( 'ocean_blog_style', array(
				'default'           	=> 'large-entry',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_style', array(
				'label'	   				=> esc_html__( 'Blog Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'large-entry'  		=> esc_html__( 'Large Image', 'oceanwp' ),
					'grid-entry' 		=> esc_html__( 'Grid', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Grid Images Size
			 */
			$wp_customize->add_setting( 'ocean_blog_grid_images_size', array(
				'default'           	=> 'medium',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_grid_images_size', array(
				'label'	   				=> esc_html__( 'Images Size', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_grid_images_size',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_grid_blog_style',
				'choices' 				=> array(
					'thumbnail' 		=> esc_html__( 'Thumbnail', 'oceanwp' ),
					'medium' 			=> esc_html__( 'Medium', 'oceanwp' ),
					'medium_large' 		=> esc_html__( 'Medium Large', 'oceanwp' ),
					'large' 			=> esc_html__( 'Large', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Grid Columns
			 */
			$wp_customize->add_setting( 'ocean_blog_grid_columns', array(
				'default'           	=> '2',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_grid_columns', array(
				'label'	   				=> esc_html__( 'Grid Columns', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_grid_columns',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_grid_blog_style',
				'choices' 				=> array(
					'2' => '2',
					'3' => '3',
					'4' => '4',
					'5' => '5',
					'6' => '6',
				),
			) ) );

			/**
			 * Blog Grid Style
			 */
			$wp_customize->add_setting( 'ocean_blog_grid_style', array(
				'default'           	=> 'fit-rows',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_grid_style', array(
				'label'	   				=> esc_html__( 'Grid Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_grid_style',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_grid_blog_style',
				'choices' 				=> array(
					'fit-rows' 			=> esc_html__( 'Fit Rows', 'oceanwp' ),
					'masonry' 			=> esc_html__( 'Masonry', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Grid Equal Heights
			 */
			$wp_customize->add_setting( 'ocean_blog_grid_equal_heights', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_grid_equal_heights', array(
				'label'	   				=> esc_html__( 'Equal Heights', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_grid_equal_heights',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_blog_supports_equal_heights',
			) ) );

			/**
			 * Blog Excerpt Length
			 */
			$wp_customize->add_setting( 'ocean_blog_entry_excerpt_length', array(
				'default'           	=> '30',
				'sanitize_callback' 	=> false,
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_blog_entry_excerpt_length', array(
				'label'	   				=> esc_html__( 'Excerpt Length', 'oceanwp' ),
				'description'	   		=> esc_html__( 'Add 500 to display full content', 'oceanwp' ),
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_entry_excerpt_length',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 500,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Blog Pagination Style
			 */
			$wp_customize->add_setting( 'ocean_blog_pagination_style', array(
				'default'           	=> 'standard',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_pagination_style', array(
				'label'	   				=> esc_html__( 'Blog Pagination Style', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_pagination_style',
				'priority' 				=> 10,
				'choices' 				=> array(
					'standard' 			=> esc_html__( 'Standard', 'oceanwp' ),
					'infinite_scroll' 	=> esc_html__( 'Infinite Scroll', 'oceanwp' ),
					'next_prev' 		=> esc_html__( 'Next/Prev', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Entries Elements Positioning
			 */
			$wp_customize->add_setting( 'ocean_blog_entry_elements_positioning', array(
				'default'           	=> array( 'featured_image', 'title', 'meta', 'content', 'read_more' ),
				'sanitize_callback' 	=> 'oceanwp_sanitize_multi_choices',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Sortable_Control( $wp_customize, 'ocean_blog_entry_elements_positioning', array(
				'label'	   				=> esc_html__( 'Elements Positioning', 'oceanwp' ),
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_entry_elements_positioning',
				'priority' 				=> 10,
				'choices' 				=> oceanwp_blog_entry_elements(),
			) ) );

			/**
			 * Blog Entries Meta
			 */
			$wp_customize->add_setting( 'ocean_blog_entry_meta', array(
				'default'           	=> apply_filters( 'ocean_blog_meta_default', array( 'author', 'date', 'categories', 'comments' ) ),
				'sanitize_callback' 	=> 'oceanwp_sanitize_multi_choices',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Sortable_Control( $wp_customize, 'ocean_blog_entry_meta', array(
				'label'	   				=> esc_html__( 'Meta', 'oceanwp' ),
				'section'  				=> 'ocean_blog_entries',
				'settings' 				=> 'ocean_blog_entry_meta',
				'priority' 				=> 10,
				'choices' 				=> apply_filters( 'ocean_blog_meta_choices', array(
					'author'     		=> esc_html__( 'Author', 'oceanwp' ),
					'date'       		=> esc_html__( 'Date', 'oceanwp' ),
					'categories' 		=> esc_html__( 'Categories', 'oceanwp' ),
					'comments'   		=> esc_html__( 'Comments', 'oceanwp' ),
				) ),
			) ) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_single_post', array(
				'title' 			=> esc_html__( 'Single Post', 'oceanwp' ),
				'priority' 			=> 10,
				'panel' 			=> $panel,
			) );

			/**
			 * Single Layout
			 */
			$wp_customize->add_setting( 'ocean_blog_single_layout', array(
				'default'           	=> 'right-sidebar',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Radio_Image_Control( $wp_customize, 'ocean_blog_single_layout', array(
				'label'	   				=> esc_html__( 'Layout', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_layout',
				'priority' 				=> 10,
				'choices' 				=> array(
					'right-sidebar'  	=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/rs.png',
					'left-sidebar' 		=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/ls.png',
					'full-width'  		=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/fw.png',
					'full-screen'  		=> OCEANWP_INC_DIR_URI . 'customizer/assets/img/fs.png',
				),
			) ) );

			/**
			 * Page Header Title
			 */
			$wp_customize->add_setting( 'ocean_blog_single_page_header_title', array(
				'default'           	=> 'blog',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_single_page_header_title', array(
				'label'	   				=> esc_html__( 'Page Header Title', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_page_header_title',
				'priority' 				=> 10,
				'choices' 				=> array(
					'blog' 				=> esc_html__( 'Blog','oceanwp' ),
					'post-title' 		=> esc_html__( 'Post Title', 'oceanwp' ),
				),
			) ) );

			/**
			 * Add Container Featured Image In Page Header
			 */
			$wp_customize->add_setting( 'ocean_blog_single_featured_image_title', array(
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_single_featured_image_title', array(
				'label'	   				=> esc_html__( 'Featured Image In Page Header', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_featured_image_title',
				'priority' 				=> 10,
			) ) );

			/**
			 * Blog Single Page Header Background Image Position
			 */
			$wp_customize->add_setting( 'ocean_blog_single_title_bg_image_position', array(
				'transport' 			=> 'postMessage',
				'default' 				=> 'top center',
				'sanitize_callback' 	=> 'sanitize_text_field',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_single_title_bg_image_position', array(
				'label'	   				=> esc_html__( 'Position', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_title_bg_image_position',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_blog_single_title_bg_image',
				'choices' 				=> array(
					'initial' 			=> esc_html__( 'Default', 'oceanwp' ),
					'top left' 			=> esc_html__( 'Top Left', 'oceanwp' ),
					'top center' 		=> esc_html__( 'Top Center', 'oceanwp' ),
					'top right'  		=> esc_html__( 'Top Right', 'oceanwp' ),
					'center left' 		=> esc_html__( 'Center Left', 'oceanwp' ),
					'center center' 	=> esc_html__( 'Center Center', 'oceanwp' ),
					'center right' 		=> esc_html__( 'Center Right', 'oceanwp' ),
					'bottom left' 		=> esc_html__( 'Bottom Left', 'oceanwp' ),
					'bottom center' 	=> esc_html__( 'Bottom Center', 'oceanwp' ),
					'bottom right' 		=> esc_html__( 'Bottom Right', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Single Page Header Background Image Attachment
			 */
			$wp_customize->add_setting( 'ocean_blog_single_title_bg_image_attachment', array(
				'transport' 			=> 'postMessage',
				'default' 				=> 'initial',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_single_title_bg_image_attachment', array(
				'label'	   				=> esc_html__( 'Attachment', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_title_bg_image_attachment',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_blog_single_title_bg_image',
				'choices' 				=> array(
					'initial' 	=> esc_html__( 'Default', 'oceanwp' ),
					'scroll' 	=> esc_html__( 'Scroll', 'oceanwp' ),
					'fixed' 	=> esc_html__( 'Fixed', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Single Page Header Background Image Repeat
			 */
			$wp_customize->add_setting( 'ocean_blog_single_title_bg_image_repeat', array(
				'transport' 			=> 'postMessage',
				'default' 				=> 'no-repeat',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_single_title_bg_image_repeat', array(
				'label'	   				=> esc_html__( 'Repeat', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_title_bg_image_repeat',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_blog_single_title_bg_image',
				'choices' 				=> array(
					'initial' 	=> esc_html__( 'Default', 'oceanwp' ),
					'no-repeat' => esc_html__( 'No-repeat', 'oceanwp' ),
					'repeat' 	=> esc_html__( 'Repeat', 'oceanwp' ),
					'repeat-x' 	=> esc_html__( 'Repeat-x', 'oceanwp' ),
					'repeat-y' 	=> esc_html__( 'Repeat-y', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Single Page Header Background Image Size
			 */
			$wp_customize->add_setting( 'ocean_blog_single_title_bg_image_size', array(
				'transport' 			=> 'postMessage',
				'default' 				=> 'cover',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_single_title_bg_image_size', array(
				'label'	   				=> esc_html__( 'Size', 'oceanwp' ),
				'type' 					=> 'select',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_title_bg_image_size',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_blog_single_title_bg_image',
				'choices' 				=> array(
					'initial' 	=> esc_html__( 'Default', 'oceanwp' ),
					'auto' 		=> esc_html__( 'Auto', 'oceanwp' ),
					'cover' 	=> esc_html__( 'Cover', 'oceanwp' ),
					'contain' 	=> esc_html__( 'Contain', 'oceanwp' ),
				),
			) ) );

			/**
			 * Blog Single Page Header Background Image Height
			 */
			$wp_customize->add_setting( 'ocean_blog_single_title_bg_image_height', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '400',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_blog_single_title_bg_image_height', array(
				'label'	   				=> esc_html__( 'Page Header Height (px)', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_title_bg_image_height',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 800,
			        'step'  => 1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_blog_single_title_bg_image',
			) ) );

			/**
			 * Blog Single Page Header Background Image Overlay Opacity
			 */
			$wp_customize->add_setting( 'ocean_blog_single_title_bg_image_overlay_opacity', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '0.5',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_blog_single_title_bg_image_overlay_opacity', array(
				'label'	   				=> esc_html__( 'Overlay Opacity', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_title_bg_image_overlay_opacity',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 1,
			        'step'  => 0.1,
			    ),
				'active_callback' 		=> 'oceanwp_cac_has_blog_single_title_bg_image',
			) ) );

			/**
			 * Blog Single Page Header Background Image Overlay Color
			 */
			$wp_customize->add_setting( 'ocean_blog_single_title_bg_image_overlay_color', array(
				'transport' 			=> 'postMessage',
				'default'           	=> '#000000',
				'sanitize_callback' 	=> 'oceanwp_sanitize_color',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, 'ocean_blog_single_title_bg_image_overlay_color', array(
				'label'	   				=> esc_html__( 'Overlay Color', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_title_bg_image_overlay_color',
				'priority' 				=> 10,
				'active_callback' 		=> 'oceanwp_cac_has_blog_single_title_bg_image',
			) ) );

			/**
			 * Blog Single Elements Positioning
			 */
			$wp_customize->add_setting( 'ocean_blog_single_elements_positioning', array(
				'default' 				=> array( 'featured_image', 'title', 'meta', 'content', 'tags', 'social_share', 'next_prev', 'author_box', 'related_posts', 'single_comments' ),
				'sanitize_callback' 	=> 'oceanwp_sanitize_multi_choices',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Sortable_Control( $wp_customize, 'ocean_blog_single_elements_positioning', array(
				'label'	   				=> esc_html__( 'Elements Positioning', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_elements_positioning',
				'priority' 				=> 10,
				'choices' 				=> oceanwp_blog_single_elements(),
			) ) );

			/**
			 * Blog Single Meta
			 */
			$wp_customize->add_setting( 'ocean_blog_single_meta', array(
				'default'           	=> array( 'author', 'date', 'categories', 'comments' ),
				'sanitize_callback' 	=> 'oceanwp_sanitize_multi_choices',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Sortable_Control( $wp_customize, 'ocean_blog_single_meta', array(
				'label'	   				=> esc_html__( 'Meta', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_single_meta',
				'priority' 				=> 10,
				'choices' 				=> apply_filters( 'ocean_blog_meta_choices', array(
					'author'     		=> esc_html__( 'Author', 'oceanwp' ),
					'date'       		=> esc_html__( 'Date', 'oceanwp' ),
					'categories' 		=> esc_html__( 'Categories', 'oceanwp' ),
					'comments'   		=> esc_html__( 'Comments', 'oceanwp' ),
				) ),
			) ) );

			/**
			 * Next/Prev Taxonomy
			 */
			$wp_customize->add_setting( 'ocean_single_post_next_prev_taxonomy', array(
				'default' 				=> 'post_tag',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Buttonset_Control( $wp_customize, 'ocean_single_post_next_prev_taxonomy', array(
				'label'	   				=> esc_html__( 'Next/Prev Taxonomy', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_single_post_next_prev_taxonomy',
				'priority' 				=> 10,
				'choices' 				=> array(
					'category' 	=> esc_html__( 'Category', 'oceanwp' ),
					'post_tag' 	=> esc_html__( 'Tag', 'oceanwp' ),
				),
			) ) );

			/**
			 * Related Posts Count
			 */
			$wp_customize->add_setting( 'ocean_blog_related_count', array(
				'default' 				=> '3',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_blog_related_count', array(
				'label'	   				=> esc_html__( 'Related Posts Count', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_related_count',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 2,
			        'max'   => 12,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Related Posts Columns
			 */
			$wp_customize->add_setting( 'ocean_blog_related_columns', array(
				'default' 				=> '3',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Range_Control( $wp_customize, 'ocean_blog_related_columns', array(
				'label'	   				=> esc_html__( 'Related Posts Columns', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_related_columns',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 1,
			        'max'   => 6,
			        'step'  => 1,
			    ),
			) ) );

			/**
			 * Related Posts Taxonomy
			 */
			$wp_customize->add_setting( 'ocean_blog_related_taxonomy', array(
				'default' 				=> 'category',
				'sanitize_callback' 	=> 'oceanwp_sanitize_select',
			) );

			$wp_customize->add_control( new OceanWP_Customizer_Buttonset_Control( $wp_customize, 'ocean_blog_related_taxonomy', array(
				'label'	   				=> esc_html__( 'Related Posts Taxonomy', 'oceanwp' ),
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_related_taxonomy',
				'priority' 				=> 10,
				'choices' 				=> array(
					'category' 	=> esc_html__( 'Category', 'oceanwp' ),
					'post_tag' 	=> esc_html__( 'Tag', 'oceanwp' ),
				),
			) ) );

			/**
			 * Related Posts Image Width
			 */
			$wp_customize->add_setting( 'ocean_blog_related_img_width', array(
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_related_img_width', array(
				'label'	   				=> esc_html__( 'Related Posts Image Width (px)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_related_img_width',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 800,
			    ),
			) ) );

			/**
			 * Related Posts Image Height
			 */
			$wp_customize->add_setting( 'ocean_blog_related_img_height', array(
				'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_blog_related_img_height', array(
				'label'	   				=> esc_html__( 'Related Posts Image Height (px)', 'oceanwp' ),
				'type' 					=> 'number',
				'section'  				=> 'ocean_single_post',
				'settings' 				=> 'ocean_blog_related_img_height',
				'priority' 				=> 10,
			    'input_attrs' 			=> array(
			        'min'   => 0,
			        'max'   => 800,
			    ),
			) ) );

		}

	}

endif;

return new OceanWP_Blog_Customizer();