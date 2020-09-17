<?php
/**
 * Typography Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Typography_Customizer' ) ) :

	class OceanWP_Typography_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {

			add_action( 'customize_register', 		array( $this, 'customizer_options' ) );
			add_action( 'wp_enqueue_scripts', 		array( $this, 'load_fonts' ) );
		
			// CSS output
			if ( is_customize_preview() ) {
				add_action( 'customize_preview_init', array( $this, 'customize_preview_init' ) );
				add_action( 'wp_head', array( $this, 'live_preview_styles' ), 999 );
			} else {
				add_filter( 'ocean_head_css', 		array( $this, 'head_css' ), 99 );
			}

		}

		/**
		 * Array of Typography settings to add to the customizer
		 *
		 * @since 1.0.0
		 */
		public function elements() {

			// Return settings
			return apply_filters( 'ocean_typography_settings', array(
				'body' 						=> array(
					'label' 				=> esc_html__( 'Body', 'oceanwp' ),
					'target' 				=> 'body',
					'defaults' 				=> array(
						'font-size' 		=> '14px',
						'color' 			=> '#929292',
						'line-height' 		=> '1.8',
					),
				),
				'headings' 					=> array(
					'label' 				=> esc_html__( 'All Headings', 'oceanwp' ),
					'target' 				=> 'h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title',
					'exclude' 				=> array( 'font-size' ),
					'defaults' 				=> array(
						'color' 			=> '#333333',
						'line-height' 		=> '1.4',
					),
				),
				'heading_h1' 				=> array(
					'label' 				=> esc_html__( 'Heading 1 (H1)', 'oceanwp' ),
					'target' 				=> 'h1',
					'defaults' 				=> array(
						'font-size' 		=> '23px',
						'color' 			=> '#333333',
						'line-height' 		=> '1.4',
					),
				),
				'heading_h2' 				=> array(
					'label' 				=> esc_html__( 'Heading 2 (H2)', 'oceanwp' ),
					'target' 				=> 'h2',
					'defaults' 				=> array(
						'font-size' 		=> '20px',
						'color' 			=> '#333333',
						'line-height' 		=> '1.4',
					),
				),
				'heading_h3' 				=> array(
					'label' 				=> esc_html__( 'Heading 3 (H3)', 'oceanwp' ),
					'target' 				=> 'h3',
					'defaults' 				=> array(
						'font-size' 		=> '18px',
						'color' 			=> '#333333',
						'line-height' 		=> '1.4',
					),
				),
				'heading_h4' 				=> array(
					'label' 				=> esc_html__( 'Heading 4 (H4)', 'oceanwp' ),
					'target' 				=> 'h4',
					'defaults' 				=> array(
						'font-size' 		=> '17px',
						'color' 			=> '#333333',
						'line-height' 		=> '1.4',
					),
				),
				'logo' 						=> array(
					'label' 				=> esc_html__( 'Logo', 'oceanwp' ),
					'target' 				=> '#site-logo a.site-logo-text',
					'exclude' 				=> array( 'font-color' ),
					'defaults' 				=> array(
						'font-size' 		=> '24px',
						'line-height'	 	=> '1.8',
					),
				),
				'top_menu' 					=> array(
					'label' 				=> esc_html__( 'Top Bar', 'oceanwp' ),
					'target' 				=> '#top-bar-content,#top-bar-social-alt',
					'exclude' 				=> array( 'font-color' ),
					'defaults' 				=> array(
						'font-size' 		=> '12px',
						'line-height' 		=> '1.8',
					),
					'active_callback' 		=> 'oceanwp_cac_has_topbar',
				),
				'menu' 						=> array(
					'label' 				=> esc_html__( 'Main Menu', 'oceanwp' ),
					'target' 				=> '#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a',
					'exclude' 				=> array( 'font-color', 'line-height' ),
					'defaults' 				=> array(
						'font-size' 		=> '13px',
						'letter-spacing' 	=> '0.6',
					),
				),
				'menu_dropdown' 			=> array(
					'label' 				=> esc_html__( 'Main Menu: Dropdowns', 'oceanwp' ),
					'target' 				=> '.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a',
					'exclude' 				=> array( 'font-color' ),
					'defaults' 				=> array(
						'font-size' 		=> '12px',
						'line-height' 		=> '1.2',
						'letter-spacing' 	=> '0.6',
					),
				),
				'mobile_menu_dropdown' 		=> array(
					'label' 				=> esc_html__( 'Mobile Menu', 'oceanwp' ),
					'target' 				=> '.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a',
					'exclude' 				=> array( 'font-color' ),
					'defaults' 				=> array(
						'font-size' 		=> '15px',
						'line-height' 		=> '1.8',
					),
				),
				'page_title' 				=> array(
					'label' 				=> esc_html__( 'Page Title', 'oceanwp' ),
					'target' 				=> '.page-header .page-header-title, .page-header.background-image-page-header .page-header-title',
					'exclude' 				=> array( 'font-color' ),
					'defaults' 				=> array(
						'font-size' 		=> '32px',
						'line-height' 		=> '1.4',
					),
					'active_callback' 		=> 'oceanwp_cac_has_page_header',
				),
				'page_subheading' 			=> array(
					'label' 				=> esc_html__( 'Page Title Subheading', 'oceanwp' ),
					'target' 				=> '.page-header .page-subheading',
					'defaults' 				=> array(
						'font-size' 		=> '15px',
						'color' 			=> '#929292',
						'line-height' 		=> '1.8',
					),
					'active_callback' 		=> 'oceanwp_cac_has_page_header',
				),
				'breadcrumbs' 				=> array(
					'label' 				=> esc_html__( 'Breadcrumbs', 'oceanwp' ),
					'target' 				=> '.site-breadcrumbs',
					'exclude' 				=> array( 'font-color', 'line-height' ),
					'defaults' 				=> array(
						'font-size' 		=> '13px',
					),
					'active_callback' 		=> 'oceanwp_cac_has_breadcrumbs',
				),
				'blog_entry_title' 			=> array(
					'label' 				=> esc_html__( 'Blog Entry Title', 'oceanwp' ),
					'target' 				=> '.blog-entry.post .blog-entry-header .entry-title a',
					'defaults' 				=> array(
						'font-size' 		=> '24px',
						'color' 			=> '#333333',
						'line-height' 		=> '1.4',
					),
				),
				'blog_post_title' 			=> array(
					'label' 				=> esc_html__( 'Blog Post Title', 'oceanwp' ),
					'target' 				=> '.single-post .entry-title',
					'defaults' 				=> array(
						'font-size' 		=> '34px',
						'color' 			=> '#333333',
						'line-height' 		=> '1.4',
						'letter-spacing' 	=> '0.6',
					),
				),
				'sidebar_widget_title' 		=> array(
					'label' 				=> esc_html__( 'Sidebar Widget Heading', 'oceanwp' ),
					'target' 				=> '.sidebar-box .widget-title',
					'defaults' 				=> array(
						'font-size' 		=> '13px',
						'color' 			=> '#333333',
						'line-height' 		=> '1',
						'letter-spacing' 	=> '1',
					),
				),
				'widgets' 		=> array(
					'label' 				=> esc_html__( 'Widgets', 'oceanwp' ),
					'target' 				=> '.sidebar-box, .footer-box',
				),
				'footer_widget_title' 		=> array(
					'label' 				=> esc_html__( 'Footer Widget Heading', 'oceanwp' ),
					'target' 				=> '#footer-widgets .footer-box .widget-title',
					'defaults' 				=> array(
						'font-size' 		=> '13px',
						'color' 			=> '#ffffff',
						'line-height' 		=> '1',
						'letter-spacing' 	=> '1',
					),
					'active_callback' 		=> 'oceanwp_cac_has_footer_widgets',
				),
				'copyright' 				=> array(
					'label' 				=> esc_html__( 'Footer Copyright', 'oceanwp' ),
					'target' 				=> '#footer-bottom #copyright',
					'exclude' 				=> array( 'font-color' ),
					'defaults' 				=> array(
						'font-size' 		=> '12px',
						'line-height' 		=> '1',
					),
					'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
				),
				'footer_menu' 				=> array(
					'label' 				=> esc_html__( 'Footer Menu', 'oceanwp' ),
					'target' 				=> '#footer-bottom #footer-bottom-menu',
					'exclude' 				=> array( 'font-color' ),
					'defaults' 				=> array(
						'font-size' 		=> '12px',
						'line-height'		=> '1',
					),
					'active_callback' 		=> 'oceanwp_cac_has_footer_bottom',
				),
			) );

		}

		/**
		 * Customizer options
		 *
		 * @since 1.0.0
		 */
		public function customizer_options( $wp_customize ) {

			// Get elements
			$elements = self::elements();

			// Return if elements are empty
			if ( empty( $elements ) ) {
				return;
			}

			// Panel
			$wp_customize->add_panel( 'ocean_typography_panel' , array(
				'title' 			=> esc_html__( 'Typography', 'oceanwp' ),
				'priority' 			=> 210,
			) );

			/**
			 * Section
			 */
			$wp_customize->add_section( 'ocean_typography_general' , array(
				'title' 			=> esc_html__( 'General', 'oceanwp' ),
				'priority' 			=> 1,
				'panel' 			=> 'ocean_typography_panel',
			) );

			/**
			 * Disable Google Fonts
			 */
			$wp_customize->add_setting( 'ocean_disable_google_font', array(
				'transport' 			=> 'postMessage',
				'default'           	=> false,
				'sanitize_callback' 	=> 'oceanwp_sanitize_checkbox',
			) );

			$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ocean_disable_google_font', array(
				'label'	   				=> esc_html__( 'Disable Google Fonts', 'oceanwp' ),
				'type' 					=> 'checkbox',
				'section'  				=> 'ocean_typography_general',
				'settings' 				=> 'ocean_disable_google_font',
				'priority' 				=> 10,
			) ) );

			/**
			 * Font Subsets
			 */
			$wp_customize->add_setting( 'ocean_google_font_subsets' , array(
				'default' 			=> array( 'latin' ),
				'sanitize_callback' => 'oceanwp_sanitize_multicheck',
			) );

			$wp_customize->add_control( new OceanWP_Customize_Multicheck_Control( $wp_customize, 'ocean_google_font_subsets', array(
				'label' 			=> esc_html__( 'Font Subsets', 'oceanwp' ),
				'section' 			=> 'ocean_typography_general',
				'settings' 			=> 'ocean_google_font_subsets',
				'priority' 			=> 10,
				'choices' 			=> array(
					'latin' 		=> 'latin',
					'latin-ext' 	=> 'latin-ext',
					'cyrillic' 		=> 'cyrillic',
					'cyrillic-ext' 	=> 'cyrillic-ext',
					'greek' 		=> 'greek',
					'greek-ext'	 	=> 'greek-ext',
					'vietnamese' 	=> 'vietnamese',
				),
			) ) );

			// Lopp through elements
			$count = '1';
			foreach( $elements as $element => $array ) {
				$count++;

				// Get label
				$label              	= ! empty( $array['label'] ) ? $array['label'] : null;
				$exclude_attributes 	= ! empty( $array['exclude'] ) ? $array['exclude'] : false;
				$active_callback    	= isset( $array['active_callback'] ) ? $array['active_callback'] : null;
				$transport          	= 'postMessage';

				// Get attributes
				if ( ! empty ( $array['attributes'] ) ) {
					$attributes = $array['attributes'];
				} else {
					$attributes = array(
						'font-family',
						'font-weight',
						'font-style',
						'text-transform',
						'font-size',
						'line-height',
						'letter-spacing',
						'font-color',
					);
				}

				// Set keys equal to vals
				$attributes = array_combine( $attributes, $attributes );

				// Exclude attributes for specific options
				if ( $exclude_attributes ) {
					foreach ( $exclude_attributes as $key => $val ) {
						unset( $attributes[ $val ] );
					}
				}

				// Register new setting if label isn't empty
				if ( $label ) {

					/**
					 * Section
					 */
					$wp_customize->add_section( 'ocean_typography_'. $element , array(
						'title' 	=> $label,
						'priority' 	=> $count,
						'panel' 	=> 'ocean_typography_panel',
					) );

					/**
					 * Font Family
					 */
					if ( in_array( 'font-family', $attributes ) ) {

						$wp_customize->add_setting( $element .'_typography[font-family]', array(
							'type' 				=> 'theme_mod',
							'transport' 		=> $transport,
							'sanitize_callback' => 'sanitize_text_field',
						) );

						$wp_customize->add_control( new OceanWP_Customizer_Typography_Control( $wp_customize, $element .'_typography[font-family]', array(
								'label' 			=> esc_html__( 'Font Family', 'oceanwp' ),
								'section' 			=> 'ocean_typography_'. $element,
								'settings' 			=> $element .'_typography[font-family]',
								'priority' 			=> 10,
								'type' 				=> 'select',
								'active_callback' 	=> $active_callback,
						) ) );

					}

					/**
					 * Font Weight
					 */
					if ( in_array( 'font-weight', $attributes ) ) {

						$wp_customize->add_setting( $element .'_typography[font-weight]', array(
							'type' 				=> 'theme_mod',
							'sanitize_callback' => 'oceanwp_sanitize_select',
							'transport' 		=> $transport,
						) );

						$wp_customize->add_control( $element .'_typography[font-weight]', array(
							'label' 			=> esc_html__( 'Font Weight', 'oceanwp' ),
							'description' 		=> esc_html__( 'Important: Not all fonts support every font-weight.', 'oceanwp' ),
							'section' 			=> 'ocean_typography_'. $element,
							'settings' 			=> $element .'_typography[font-weight]',
							'priority' 			=> 10,
							'type' 				=> 'select',
							'active_callback' 	=> $active_callback,
							'choices' 			=> array(
								'' => esc_html__( 'Default', 'oceanwp' ),
								'100' => esc_html__( 'Thin: 100', 'oceanwp' ),
								'200' => esc_html__( 'Light: 200', 'oceanwp' ),
								'300' => esc_html__( 'Book: 300', 'oceanwp' ),
								'400' => esc_html__( 'Normal: 400', 'oceanwp' ),
								'500' => esc_html__( 'Medium: 500', 'oceanwp' ),
								'600' => esc_html__( 'Semibold: 600', 'oceanwp' ),
								'700' => esc_html__( 'Bold: 700', 'oceanwp' ),
								'800' => esc_html__( 'Extra Bold: 800', 'oceanwp' ),
								'900' => esc_html__( 'Black: 900', 'oceanwp' ),
							),
						) );
					}

					/**
					 * Font Style
					 */
					if ( in_array( 'font-style', $attributes ) ) {

						$wp_customize->add_setting( $element .'_typography[font-style]', array(
							'type' 				=> 'theme_mod',
							'sanitize_callback' => 'oceanwp_sanitize_select',
							'transport' 		=> $transport,
						) );

						$wp_customize->add_control( $element .'_typography[font-style]', array(
							'label' 			=> esc_html__( 'Font Style', 'oceanwp' ),
							'section' 			=> 'ocean_typography_'. $element,
							'settings' 			=> $element .'_typography[font-style]',
							'priority' 			=> 10,
							'type' 				=> 'select',
							'active_callback' 	=> $active_callback,
							'choices' 			=> array(
								'' => esc_html__( 'Default', 'oceanwp' ),
								'normal' => esc_html__( 'Normal', 'oceanwp' ),
								'italic' => esc_html__( 'Italic', 'oceanwp' ),
							),
						) );

					}

					/**
					 * Text Transform
					 */
					if ( in_array( 'text-transform', $attributes ) ) {

						$wp_customize->add_setting( $element .'_typography[text-transform]', array(
							'type' 				=> 'theme_mod',
							'sanitize_callback' => 'oceanwp_sanitize_select',
							'transport' 		=> $transport,
						) );

						$wp_customize->add_control( $element .'_typography[text-transform]', array(
							'label' 			=> esc_html__( 'Text Transform', 'oceanwp' ),
							'section' 			=> 'ocean_typography_'. $element,
							'settings' 			=> $element .'_typography[text-transform]',
							'priority' 			=> 10,
							'type' 				=> 'select',
							'active_callback' 	=> $active_callback,
							'choices' 			=> array(
								'' 			 => esc_html__( 'Default', 'oceanwp' ),
								'capitalize' => esc_html__( 'Capitalize', 'oceanwp' ),
								'lowercase'  => esc_html__( 'Lowercase', 'oceanwp' ),
								'uppercase'  => esc_html__( 'Uppercase', 'oceanwp' ),
								'none'  	 => esc_html__( 'None', 'oceanwp' ),
							),
						) );

					}

					/**
					 * Font Size
					 */
					if ( in_array( 'font-size', $attributes ) ) {

						// Get default
						$default = ! empty( $array['defaults']['font-size'] ) ? $array['defaults']['font-size'] : NULL;

						$wp_customize->add_setting( $element .'_typography[font-size]', array(
							'type' 				=> 'theme_mod',
							'sanitize_callback' => 'sanitize_text_field',
							'transport' 		=> $transport,
							'default' 			=> $default,
						) );

						$wp_customize->add_setting( $element .'_tablet_typography[font-size]', array(
							'transport' 			=> $transport,
							'sanitize_callback' 	=> 'sanitize_text_field',
						) );

						$wp_customize->add_setting( $element .'_mobile_typography[font-size]', array(
							'transport' 			=> $transport,
							'sanitize_callback' 	=> 'sanitize_text_field',
						) );

						$wp_customize->add_control( new OceanWP_Customizer_Text_Control( $wp_customize, $element .'_typography[font-size]', array(
							'label' 			=> esc_html__( 'Font Size', 'oceanwp' ),
							'description' 		=> esc_html__( 'You can add: px-em-%', 'oceanwp' ),
							'section' 			=> 'ocean_typography_'. $element,
							'settings' 			=> array(
					            'desktop' 	=> $element .'_typography[font-size]',
					            'tablet' 	=> $element .'_tablet_typography[font-size]',
					            'mobile' 	=> $element .'_mobile_typography[font-size]',
						    ),
							'priority' 			=> 10,
							'active_callback' 	=> $active_callback,
						) ) );

					}

					/**
					 * Line Height
					 */
					if ( in_array( 'line-height', $attributes ) ) {

						// Get default
						$default = ! empty( $array['defaults']['line-height'] ) ? $array['defaults']['line-height'] : NULL;
						
						$wp_customize->add_setting( $element .'_typography[line-height]', array(
							'type' 				=> 'theme_mod',
							'sanitize_callback' => 'oceanwp_sanitize_number',
							'transport' 		=> $transport,
							'default' 			=> $default,
						) );

						$wp_customize->add_setting( $element .'_tablet_typography[line-height]', array(
							'transport' 			=> $transport,
							'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
						) );

						$wp_customize->add_setting( $element .'_mobile_typography[line-height]', array(
							'transport' 			=> $transport,
							'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
						) );

						$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, $element .'_typography[line-height]', array(
							'label' 			=> esc_html__( 'Line Height', 'oceanwp' ),
							'section' 			=> 'ocean_typography_'. $element,
							'settings' 			=> array(
					            'desktop' 	=> $element .'_typography[line-height]',
					            'tablet' 	=> $element .'_tablet_typography[line-height]',
					            'mobile' 	=> $element .'_mobile_typography[line-height]',
						    ),
							'priority' 			=> 10,
							'active_callback' 	=> $active_callback,
						    'input_attrs' 		=> array(
						        'min'   => 0,
						        'max'   => 4,
						        'step'  => 0.1,
						    ),
						) ) );

					}

					/**
					 * Letter Spacing
					 */
					if ( in_array( 'letter-spacing', $attributes ) ) {

						// Get default
						$default = ! empty( $array['defaults']['letter-spacing'] ) ? $array['defaults']['letter-spacing'] : NULL;
						
						$wp_customize->add_setting( $element .'_typography[letter-spacing]', array(
							'type' 				=> 'theme_mod',
							'sanitize_callback' => 'oceanwp_sanitize_number',
							'transport' 		=> $transport,
							'default' 			=> $default,
						) );

						$wp_customize->add_setting( $element .'_tablet_typography[letter-spacing]', array(
							'transport' 			=> $transport,
							'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
						) );

						$wp_customize->add_setting( $element .'_mobile_typography[letter-spacing]', array(
							'transport' 			=> $transport,
							'sanitize_callback' 	=> 'oceanwp_sanitize_number_blank',
						) );

						$wp_customize->add_control( new OceanWP_Customizer_Slider_Control( $wp_customize, $element .'_typography[letter-spacing]', array(
							'label' 			=> esc_html__( 'Letter Spacing (px)', 'oceanwp' ),
							'section' 			=> 'ocean_typography_'. $element,
							'settings' 			=> array(
					            'desktop' 	=> $element .'_typography[letter-spacing]',
					            'tablet' 	=> $element .'_tablet_typography[letter-spacing]',
					            'mobile' 	=> $element .'_mobile_typography[letter-spacing]',
						    ),
							'priority' 			=> 10,
							'active_callback' 	=> $active_callback,
						    'input_attrs' 		=> array(
						        'min'   => 0,
						        'max'   => 10,
						        'step'  => 0.1,
						    ),
						) ) );

					}

					/**
					 * Font Color
					 */
					if ( in_array( 'font-color', $attributes ) ) {

						// Get default
						$default = ! empty( $array['defaults']['color'] ) ? $array['defaults']['color'] : NULL;
						
						$wp_customize->add_setting( $element .'_typography[color]', array(
							'type' 				=> 'theme_mod',
							'default' 			=> '',
							'sanitize_callback' => 'oceanwp_sanitize_color',
							'transport' 		=> $transport,
							'default' 			=> $default,
						) );
						$wp_customize->add_control( new OceanWP_Customizer_Color_Control( $wp_customize, $element .'_typography[color]', array(
							'label' 			=> esc_html__( 'Font Color', 'oceanwp' ),
							'section' 			=> 'ocean_typography_'. $element,
							'settings' 			=> $element .'_typography[color]',
							'priority' 			=> 10,
							'active_callback' 	=> $active_callback,
						) ) );

					}

				}
			}
		}

		/**
		 * Loads js file for customizer preview
		 *
		 * @since 1.0.0
		 */
		public function customize_preview_init() {
			wp_enqueue_script( 'oceanwp-typography-customize-preview', OCEANWP_INC_DIR_URI . 'customizer/assets/js/typography-customize-preview.min.js', array( 'customize-preview' ), OCEANWP_THEME_VERSION, true );
			wp_localize_script( 'oceanwp-typography-customize-preview', 'oceanwp', array(
				'googleFontsUrl' 	=> '//fonts.googleapis.com',
				'googleFontsWeight' => '100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
			) );

			if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {
				wp_enqueue_script( 'oceanwp-woo-typography-customize-preview', OCEANWP_INC_DIR_URI . 'customizer/assets/js/woo-typography-customize-preview.min.js', array( 'customize-preview' ), OCEANWP_THEME_VERSION, true );
				wp_localize_script( 'oceanwp-woo-typography-customize-preview', 'oceanwp', array(
					'googleFontsUrl' 	=> '//fonts.googleapis.com',
					'googleFontsWeight' => '100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
				) );
			}

		}

		/**
		 * Loop through settings
		 *
		 * @since 1.0.0
		 */
		public function loop( $return = 'css' ) {

			// Define Vars
			$css            = '';
			$fonts          = array();
			$elements       = self::elements();
			$preview_styles = array();

			// Loop through each elements that need typography styling applied to them
			foreach( $elements as $element => $array ) {

				// Add empty css var
				$add_css 	= '';
				$tablet_css = '';
				$mobile_css = '';

				// Get target and current mod
				$target  		= isset( $array['target'] ) ? $array['target'] : '';
				$get_mod 		= get_theme_mod( $element .'_typography' );
				$tablet_get_mod = get_theme_mod( $element .'_tablet_typography' );
				$mobile_get_mod = get_theme_mod( $element .'_mobile_typography' );

				// Attributes to loop through
				if ( ! empty( $array['attributes'] ) ) {
					$attributes = $array['attributes'];
				} else {
					$attributes = array(
						'font-family',
						'font-weight',
						'font-style',
						'font-size',
						'color',
						'line-height',
						'letter-spacing',
						'text-transform',
					);
				}

				// Loop through attributes
				foreach ( $attributes as $attribute ) {

					// Define val
					$default 		= isset( $array['defaults'][$attribute] ) ? $array['defaults'][$attribute] : NULL;
					$val     		= isset( $get_mod[$attribute] ) ? $get_mod[$attribute] : $default;
					$tablet_val     = isset( $tablet_get_mod[$attribute] ) ? $tablet_get_mod[$attribute] : '';
					$mobile_val     = isset( $mobile_get_mod[$attribute] ) ? $mobile_get_mod[$attribute] : '';

					// If there is a value lets do something
					if ( $val && $default != $val ) {

						// Sanitize
						$val = str_replace( '"', '', $val );

						// Add px if font size or letter spacing
						$px = '';
						if ( ( 'font-size' == $attribute
								&& is_numeric( $val ) )
							|| 'letter-spacing' == $attribute ) {
							$px = 'px';
						}

						// Add quotes around font-family && font family to scripts array
						if ( 'font-family' == $attribute ) {
							$fonts[] = $val;

							// No brackets can be added as it cause issue with sans serif fonts
							$val = $val;
						}

						// Add to inline CSS
						if ( 'css' == $return ) {
							$add_css .= $attribute .':'. $val . $px .';';
						}

						// Customizer styles need to be added for each attribute
						elseif ( 'preview_styles' == $return ) {
							$preview_styles['customizer-typography-'. $element .'-'. $attribute] = $target .'{'. $attribute .':'. $val . $px .';}';
						}

					}

					// If there is a value lets do something
					if ( $tablet_val
						&& ( 'font-size' == $attribute
							|| 'line-height' == $attribute
							|| 'letter-spacing' == $attribute ) ) {

						// Sanitize
						$tablet_val = str_replace( '"', '', $tablet_val );

						// Add px if font size or letter spacing
						$px = '';
						if ( ( 'font-size' == $attribute
								&& is_numeric( $tablet_val ) )
							|| 'letter-spacing' == $attribute ) {
							$px = 'px';
						}

						// Add to inline CSS
						if ( 'css' == $return ) {
							$tablet_css .= $attribute .':'. $tablet_val . $px .';';
						}

						// Customizer styles need to be added for each attribute
						elseif ( 'preview_styles' == $return ) {
							$preview_styles['customizer-typography-'. $element .'-tablet-'. $attribute] = '@media (max-width: 768px){'. $target .'{'. $attribute .':'. $tablet_val . $px .';}}';
						}

					}

					// If there is a value lets do something
					if ( $mobile_val
						&& ( 'font-size' == $attribute
							|| 'line-height' == $attribute
							|| 'letter-spacing' == $attribute ) ) {

						// Sanitize
						$mobile_val = str_replace( '"', '', $mobile_val );

						// Add px if font size or letter spacing
						$px = '';
						if ( ( 'font-size' == $attribute
								&& is_numeric( $mobile_val ) )
							|| 'letter-spacing' == $attribute ) {
							$px = 'px';
						}

						// Add to inline CSS
						if ( 'css' == $return ) {
							$mobile_css .= $attribute .':'. $mobile_val . $px .';';
						}

						// Customizer styles need to be added for each attribute
						elseif ( 'preview_styles' == $return ) {
							$preview_styles['customizer-typography-'. $element .'-mobile-'. $attribute] = '@media (max-width: 480px){'. $target .'{'. $attribute .':'. $mobile_val . $px .';}}';
						}

					}

				}

				// Front-end inline CSS
				if ( $add_css && 'css' == $return ) {
					$css .= $target .'{'. $add_css .'}';
				}

				// Front-end inline tablet CSS
				if ( $tablet_css && 'css' == $return ) {
					$css .= '@media (max-width: 768px){'. $target .'{'. $tablet_css .'}}';
				}

				// Front-end inline mobile CSS
				if ( $mobile_css && 'css' == $return ) {
					$css .= '@media (max-width: 480px){'. $target .'{'. $mobile_css .'}}';
				}

			}

			// Return CSS
			if ( 'css' == $return && ! empty( $css ) ) {
				$css = '/* Typography CSS */'. $css;
				return $css;
			}

			// Return styles
			if ( 'preview_styles' == $return && ! empty( $preview_styles ) ) {
				return $preview_styles;
			}

			// Return Fonts Array
			if ( 'fonts' == $return && ! empty( $fonts ) ) {
				return array_unique( $fonts );
			}

		}

		/**
		 * Get CSS
		 *
		 * @since 1.0.0
		 */
		public function head_css( $output ) {

			// Get CSS
			$typography_css = self::loop( 'css' );

			// Loop css
			if ( $typography_css ) {
				$output .= $typography_css;
			}

			// Return output css
			return $output;

		}

		/**
		 * Returns correct CSS to output to wp_head
		 *
		 * @since 1.0.0
		 */
		public function live_preview_styles() {

			$live_preview_styles = self::loop( 'preview_styles' );

			if ( $live_preview_styles ) {
				foreach ( $live_preview_styles as $key => $val ) {
					if ( ! empty( $val ) ) {
						echo '<style class="'. $key .'"> '. $val .'</style>';
					}
				}
			}

		}

		/**
		 * Loads Google fonts
		 *
		 * @since 1.0.0
		 */
		public function load_fonts() {

			// Get fonts
			$fonts = self::loop( 'fonts' );

			// Loop through and enqueue fonts
			if ( ! empty( $fonts ) && is_array( $fonts ) ) {
				foreach ( $fonts as $font ) {
					oceanwp_enqueue_google_font( $font );
				}
			}

		}

	}

endif;

return new OceanWP_Typography_Customizer();