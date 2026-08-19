<?php
/**
 * OceanWP Customizer Class
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The OceanWP Customizer class
 */
class OceanWP_Customizer_Init {

	/**
	 * Whether the composite Customizer renderer is enabled.
	 *
	 * @var bool|null
	 */
	private $use_composite_customizer = null;

	/**
	 * Whether at least one section requires legacy nested navigation.
	 *
	 * @var bool
	 */
	private $has_legacy_customizer_sections = false;

	/**
	 * Sections waiting for the final composite compatibility pass.
	 *
	 * @var array
	 */
	private $composite_customizer_sections = array();

	/**
	 * Setup class.
	 *
	 * @since 1.0
	 */
	public function __construct() {

		$this->include_settings();

		add_action( 'customize_controls_enqueue_scripts',   array( $this, 'custom_customize_enqueue' ), 15 );
		add_action( 'customize_register', array( $this, 'register_settings' ) );
		add_action( 'customize_register', array( $this, 'finalize_composite_customizer' ), PHP_INT_MAX );
		add_action( 'customize_preview_init', array( $this, 'customize_preview_init' ) );
		add_filter( 'ocean_customize_options_data', array( $this, 'register_customize_options') );
		add_action( 'customize_controls_print_footer_scripts', array( $this, 'customize_panel_init' ) );
		add_action( 'wp_ajax_ocean_update_search_box_light_mode', array( $this, 'update_search_box_light_Mode' ) );
	}

	public function include_settings() {
		require OCEANWP_INC_DIR . 'customizer/helpers.php';
		require OCEANWP_INC_DIR . 'customizer/customizer-defaults.php';
		require OCEANWP_INC_DIR . 'customizer/callback.php';
		require OCEANWP_INC_DIR . 'customizer/sanitize.php';
		require OCEANWP_INC_DIR . 'customizer/css-output/css.php';
	}

	public function register_settings( $wp_customize) {

		require OCEANWP_INC_DIR . 'customizer/controls-deprecated.php';
		require OCEANWP_INC_DIR . 'customizer/controls/class-composite-control.php';
		require OCEANWP_INC_DIR . 'customizer/extend-section/class-panel.php';
		require OCEANWP_INC_DIR . 'customizer/extend-section/class-section.php';

		// Tweak default controls
		$wp_customize->get_setting( 'custom_logo' )->transport = 'refresh';
		$wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

		// Move custom logo setting
		$wp_customize->get_control( 'custom_logo' )->section = 'ocean_header_logo_section';

		//$options = ocean_customize_options('options');
		$options = ocean_get_customize_settings_data(true);

		if ( ocean_customize_tree_has_control_type( $options, 'ocean-rich-text' ) ) {
			add_action( 'customize_controls_print_footer_scripts', array( '_WP_Editors', 'force_uncompressed_tinymce' ), 1 );
			add_action( 'customize_controls_print_footer_scripts', array( '_WP_Editors', 'print_default_editor_scripts' ), 45 );
		}

		foreach ( $options as $section_key => $section_options ) {

			// Execute and check condition
			if ( isset( $section_options['condition'] ) ) {
				$condition = $section_options['condition'];
				if ( is_callable( $condition ) && ! call_user_func( $condition ) ) {
					continue;
				} elseif ( ! is_callable( $condition ) && ! $condition ) {
					continue;
				}
			}

			$section_args = [];

			if ( isset( $section_options['title'] ) && $section_options['title'] ) {
				$section_args['title'] = $section_options['title'];
			}

			if ( isset( $section_options['priority'] ) && $section_options['priority'] ) {
				$section_args['priority'] = $section_options['priority'];
			}

			$wp_customize->add_section(
				$section_key,
				$section_args
			);

			if ( null !== $section_options['options'] && is_array($section_options['options'] ) ) {
				self::register_options_recursive( $wp_customize, $section_key, $section_options['options'] );

				if (
					$this->is_composite_customizer_enabled() &&
					self::supports_composite_options( $section_options['options'] )
				) {
					$this->composite_customizer_sections[ $section_key ] = array(
						'title'   => isset( $section_options['title'] ) ? $section_options['title'] : '',
						'options' => $section_options['options'],
					);
				} else {
					$this->has_legacy_customizer_sections = true;
				}
			}
		}
	}

	/**
	 * Convert compatible sections after WordPress and plugins finish registering.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer manager.
	 */
	public function finalize_composite_customizer( $wp_customize ) {

		foreach ( $this->composite_customizer_sections as $section_key => $section_data ) {
			if ( ! self::can_finalize_composite_section( $wp_customize, $section_key, $section_data ) ) {
				$this->has_legacy_customizer_sections = true;
				continue;
			}

			self::register_composite_options(
				$wp_customize,
				$section_key,
				$section_data['title'],
				$section_data['options']
			);
		}
	}

	/**
	 * Determine whether the composite Customizer renderer is enabled.
	 *
	 * @return bool
	 */
	private function is_composite_customizer_enabled() {

		if ( null === $this->use_composite_customizer ) {
			$this->use_composite_customizer = (bool) apply_filters( 'oceanwp_use_composite_customizer', true );
		}

		return $this->use_composite_customizer;
	}

	/**
	 * Check whether every option type in a section has a composite component.
	 *
	 * @param array $options Section options.
	 * @return bool
	 */
	private static function supports_composite_options( $options ) {
		foreach ( $options as $option_data ) {
			if ( ! isset( $option_data['type'] ) ) {
				return false;
			}

			if (
				isset( $option_data['options'] ) &&
				is_array( $option_data['options'] ) &&
				! self::supports_composite_options( $option_data['options'] )
			) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Return control types rendered directly by the composite interface.
	 * Other registered types remain supported through native control slots.
	 *
	 * @return array
	 */
	private static function get_composite_control_types() {
		return array(
			'ocean-buttons',
			'ocean-color',
			'ocean-content',
			'ocean-divider',
			'ocean-dropdown-pages',
			'ocean-image',
			'ocean-links',
			'ocean-multiselect',
			'ocean-radio-image',
			'ocean-range-slider',
			'ocean-select',
			'ocean-social-links',
			'ocean-sortable',
			'ocean-spacer',
			'ocean-spacing',
			'ocean-switch',
			'ocean-text',
			'ocean-textarea',
			'ocean-title',
			'ocean-typography',
			'ocean-upsell',
		);
	}

	public static function register_options_recursive( $wp_customize, $section_key, $options ) {

		foreach ( $options as $option_key => $option_data) {

			if ( 'section' ===  $option_data['type'] ) {

				$child_section_args = [];

				if ( isset( $option_data['title'] ) && $option_data['title'] ) {
					if (!is_array($option_data['title'])) {
						$child_section_args['title'] = $option_data['title'];
					}
				}

				if ( isset( $option_data['priority'] ) && $option_data['priority'] ) {
					if (!is_array($option_data['priority'])) {
						$child_section_args['priority'] = $option_data['priority'];
					}
				}

				if ( isset( $option_data['panel'] ) && $option_data['panel'] ) {
					if (!is_array($option_data['panel'])) {
						$child_section_args['panel'] = $option_data['panel'];
					}
				}

				if ( isset( $option_data['section'] ) && $option_data['section'] ) {
					if (!is_array($option_data['section'])) {
						$child_section_args['section'] = $option_data['section'];
					}
				}

				if ( isset( $option_data['after'] ) && $option_data['after'] ) {
					if (!is_array($option_data['after'])) {
						$child_section_args['after'] = $option_data['after'];
					}
				}

				if ( isset( $option_data['class'] ) && $option_data['class'] ) {
					if (!is_array($option_data['class'])) {
						$child_section_args['section_class'] = $option_data['class'];
					}
				}

				$child_section = new OWP_Customize_Section(
					$wp_customize,
					$option_key,
					$child_section_args
				);

				$wp_customize->add_section( $child_section );

				if ( isset( $option_data['options'] ) ) {
					self::register_options_recursive( $wp_customize, $option_key, $option_data['options'] );
				}

			} else {

				$setting_args = [
					'transport' => isset($option_data['transport']) ? $option_data['transport'] : 'postMessage',
				];

				if (isset($option_data['default'])) {
					if (is_array($option_data['default'])) {
						$setting_args['default'] = json_encode($option_data['default']);
					} else {
						$setting_args['default'] = $option_data['default'];
					}
				}

				$wp_customize->add_setting(
					$option_key,
					array_merge(
						$setting_args,
						[
							'sanitize_callback' => isset($option_data['sanitize_callback']) && $option_data['sanitize_callback'] ? $option_data['sanitize_callback'] : ''
						]
					)
				);

				unset( $setting_args );

				$control_args = [
					'label'       => isset($option_data['label']) ? $option_data['label'] : '',
					'description' => isset($option_data['desc']) ? $option_data['desc'] : '',
					'type'        => $option_data['type'],
					'section'     => isset($option_data['section']) ? $option_data['section'] : '',
					'priority'    => isset($option_data['priority']) ? $option_data['priority'] : 10,
				];

				if ( isset( $option_data['active_callback'] ) && $option_data['active_callback'] ) {
					$control_args['active_callback'] = $option_data['active_callback'];
				}
				if ( isset( $option_data['active_rule'] ) && is_array( $option_data['active_rule'] ) ) {
					$control_args['json']['oceanActiveRule'] = $option_data['active_rule'];
				}

				if ( isset( $option_data['setting_args'] ) && $option_data['setting_args'] ) {
					foreach ( $option_data['setting_args'] as $setting_arg_key => $setting_arg_data ) {

						$setting_args = isset( $setting_arg_data['attr'] ) ? $setting_arg_data['attr'] : [];

						$wp_customize->add_setting(
							$setting_arg_data['id'],
							array_merge(
								$setting_args,
								[
									'sanitize_callback' => isset($setting_args['sanitize_callback']) && $setting_args['sanitize_callback'] ? $option_data['sanitize_callback'] : ''
								]
							)
						);

						$control_args['settings'][$setting_arg_key] = $setting_arg_data['id'];

						if ( 'ocean-color' ===  $option_data['type'] ) {
							$control_args['json']['settingGroup'][$setting_arg_key] = [
								'id' => $setting_arg_key,
								'key' => isset($setting_arg_data['key']) ? $setting_arg_data['key'] : '',
								'label' => $setting_arg_data['label'],
								'attr' => $setting_arg_data['attr']
							];
						}

						if ( 'ocean-range-slider' ===  $option_data['type'] ) {
							if ( 'unit' !== $setting_arg_key ) {
								$control_args['json']['settingGroup'][$setting_arg_key] = [
									'id' => $setting_arg_key,
									'label' => $setting_arg_data['label']
								];
							}
						}
					}
				}

				if ( 'ocean-social-links' ===  $option_data['type'] && isset( $option_data['social_profiles'] ) && $option_data['social_profiles'] ) {
					foreach ( $option_data['social_profiles'] as $social_profile_key => $social_profile_value ) {

						$setting_name = $option_data['social_setting_id'] . '[' . $social_profile_key . ']';

						$wp_customize->add_setting(
							$setting_name,
							array(
								'transport' => 'refresh',
								'sanitize_callback' => isset( $option_data['sanitize_callback'] ) ? $option_data['sanitize_callback'] : 'oceanwp_default_sanitize',
							)
						);

						$control_args['settings'][$social_profile_key] = $setting_name;

						$control_args['json']['settingGroup'][$social_profile_key] = [
							'id' => $social_profile_key,
							'label' => $social_profile_value['label']
						];
					}
				}

				if ( isset( $option_data['wrapper'] ) && $option_data['wrapper'] ) {
					$control_args['json']['wrapper'] = $option_data['wrapper'];
				}
				if ( isset( $option_data['class'] ) && $option_data['class'] ) {
					$control_args['json']['settingClass'] = $option_data['class'];
				}
				if ( isset( $option_data['links'] ) && $option_data['links'] ) {
					$control_args['json']['links'] = $option_data['links'];
				}
				if ( isset( $option_data['linkIcon'] ) && $option_data['linkIcon'] ) {
					$control_args['json']['linkIcon'] = $option_data['linkIcon'];
				}
				if ( isset( $option_data['titleIcon'] ) && $option_data['titleIcon'] ) {
					$control_args['json']['titleIcon'] = $option_data['titleIcon'];
				}
				if ( isset( $option_data['isContent'] ) && $option_data['isContent'] ) {
					$control_args['json']['isContent'] = $option_data['isContent'];
				}
				if ( isset( $option_data['top'] ) && $option_data['top'] ) {
					$control_args['json']['top'] = $option_data['top'];
				}
				if ( isset( $option_data['bottom'] ) && $option_data['bottom'] ) {
					$control_args['json']['bottom'] = $option_data['bottom'];
				}
				if ( isset( $option_data['choices'] ) && $option_data['choices'] ) {
					$choices = $option_data['choices'];

					if ( 'ocean-radio-image' === $option_data['type'] ) {
						$icon_catalog = ocean_get_customize_icon_catalog();

						foreach ( $choices as &$choice ) {
							if ( ! is_array( $choice ) || empty( $choice['icon'] ) ) {
								continue;
							}

							$active_icon  = $choice['icon'] . '-active';
							$default_icon = $choice['icon'] . '-default';
							$choice['active']  = $choice['active'] ?? ( $icon_catalog[ $active_icon ] ?? '' );
							$choice['default'] = $choice['default'] ?? ( $icon_catalog[ $default_icon ] ?? '' );
						}
						unset( $choice );
					}

					$control_args['json']['choices'] = $choices;
				}
				if ( isset( $option_data['hideLabel'] ) && $option_data['hideLabel'] ) {
					$control_args['json']['hideLabel'] = $option_data['hideLabel'];
				}
				if ( isset( $option_data['showAlpha'] ) && $option_data['showAlpha'] ) {
					$control_args['json']['showAlpha'] = $option_data['showAlpha'];
				}
				if ( isset( $option_data['showPalette'] ) && $option_data['showPalette'] ) {
					$control_args['json']['showPalette'] = $option_data['showPalette'];
				}
				if ( isset( $option_data['subType'] ) && $option_data['subType'] ) {
					$control_args['json']['subType'] = $option_data['subType'];
				}
				if ( isset( $option_data['wrap'] ) && $option_data['wrap'] ) {
					$control_args['json']['wrap'] = $option_data['wrap'];
				}
				if ( isset( $option_data['selector'] ) && $option_data['selector'] ) {
					$control_args['json']['selector'] = $option_data['selector'];
				}

				if ( 'ocean-range-slider' ===  $option_data['type'] ) {
					if ( isset( $option_data['min'] ) && $option_data['min'] ) {
						$control_args['json']['min'] = $option_data['min'];
					}
					if ( isset( $option_data['max'] ) && $option_data['max'] ) {
						$control_args['json']['max'] = $option_data['max'];
					}
					if ( isset( $option_data['step'] ) && $option_data['step'] ) {
						$control_args['json']['step'] = $option_data['step'];
					}
					if ( isset( $option_data['isUnit'] ) && $option_data['isUnit'] ) {
						$control_args['json']['isUnit'] = $option_data['isUnit'];
					}
					if ( isset( $option_data['isResponsive'] ) && $option_data['isResponsive'] ) {
						$control_args['json']['isResponsive'] = $option_data['isResponsive'];
					}
				}

				if ( 'ocean-spacing' ===  $option_data['type'] ) {
					if ( isset( $option_data['isTop'] ) ) {
						$control_args['json']['isTop'] = $option_data['isTop'];
					}
					if ( isset( $option_data['isRight'] ) ) {
						$control_args['json']['isRight'] = $option_data['isRight'];
					}
					if ( isset( $option_data['isBottom'] ) ) {
						$control_args['json']['isBottom'] = $option_data['isBottom'];
					}
					if ( isset( $option_data['isLeft'] ) ) {
						$control_args['json']['isLeft'] = $option_data['isLeft'];
					}
				}

				if ( 'ocean-rich-text' ===  $option_data['type'] ) {
					if ( isset( $option_data['mediaButtons'] ) ) {
						$control_args['json']['mediaButtons'] = $option_data['mediaButtons'];
					}
					if ( isset( $option_data['tinymce'] ) ) {
						$control_args['json']['tinymce'] = $option_data['tinymce'];
					}
				}

				if ( 'ocean-sortable' ===  $option_data['type'] ) {
					if ( isset( $option_data['initialStatus'] ) ) {
						$control_args['json']['initialStatus'] = $option_data['initialStatus'];
					}
				}

				if ( 'ocean-image' ===  $option_data['type'] ) {
					if ( isset( $option_data['savetype'] ) ) {
						$control_args['json']['savetype'] = $option_data['savetype'];
					}
				}

				$control_args['json']['optionType'] = 'owp-option';

				$wp_customize->add_control(
					$option_key,
					$control_args
				);

				unset( $control_args );

				if ( isset( $option_data['options'] ) ) {
					self::register_options_recursive( $wp_customize, $option_key, $option_data['options'] );
				}

			}
		}
	}

	/**
	 * Register an OceanWP section using one composite UI control.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer manager.
	 * @param string               $section_key   Top-level section ID.
	 * @param string               $section_title Top-level section title.
	 * @param array                $options       Section options.
	 */
	private static function register_composite_options( $wp_customize, $section_key, $section_title, $options ) {

		$routes            = array();
		$control_locations = array();
		$route_ids         = array();

		self::collect_composite_routes(
			$section_key,
			$section_title,
			$options,
			'',
			array(),
			$routes,
			$control_locations,
			$route_ids
		);

		$active_rules = ocean_get_customize_active_callback_rules();

		foreach ( $control_locations as $control_id => $location ) {
			$control = $wp_customize->get_control( $control_id );

			if ( ! $control ) {
				continue;
			}

			$control->json['oceanRoute']       = $location['route'];
			$control->json['oceanRoutePath']   = $location['path'];
			$control->json['oceanTopSection']  = $section_key;

			if ( is_string( $control->active_callback ) ) {
				if ( isset( $active_rules[ $control->active_callback ] ) ) {
					$control->json['oceanActiveRule'] = $active_rules[ $control->active_callback ];
				}
			}

			if ( in_array( $control->type, self::get_composite_control_types(), true ) ) {
				$control->json['oceanControlType'] = $control->type;
				$control->json['optionType']       = 'owp-composite-option';
				$control->type                     = 'ocean-headless';
			} else {
				$control->json['oceanNativeComposite'] = true;
			}

			$control->section = $section_key;
		}

		foreach ( $wp_customize->controls() as $control_id => $control ) {
			if (
				isset( $control_locations[ $control_id ] ) ||
				! isset( $routes[ $control->section ] ) ||
				$section_key === $control->section
			) {
				continue;
			}

			$location = array(
				'route' => $control->section,
				'path'  => $routes[ $control->section ]['path'],
			);

			$control->json['oceanNativeComposite'] = true;
			$control->json['oceanRoute']           = $location['route'];
			$control->json['oceanRoutePath']       = $location['path'];
			$control->json['oceanTopSection']      = $section_key;

			if ( is_string( $control->active_callback ) && isset( $active_rules[ $control->active_callback ] ) ) {
				$control->json['oceanActiveRule'] = $active_rules[ $control->active_callback ];
			}

			$control->section = $section_key;

			$routes[ $location['route'] ]['items'][] = array(
				'type'     => 'native-control',
				'id'       => $control_id,
				'priority' => $control->priority,
			);
		}

		foreach ( $route_ids as $route_id ) {
			if ( isset( $routes[ $route_id ]['items'] ) ) {
				foreach ( $routes[ $route_id ]['items'] as $item_order => &$route_item ) {
					$route_item['_oceanOrder'] = $item_order;
				}
				unset( $route_item );

				usort(
					$routes[ $route_id ]['items'],
					static function ( $first, $second ) {
						$priority_order = ( $first['priority'] ?? 10 ) <=> ( $second['priority'] ?? 10 );

						return 0 !== $priority_order
							? $priority_order
							: $first['_oceanOrder'] <=> $second['_oceanOrder'];
					}
				);

				foreach ( $routes[ $route_id ]['items'] as &$route_item ) {
					unset( $route_item['_oceanOrder'] );
				}
				unset( $route_item );
			}

			if ( $section_key !== $route_id ) {
				$wp_customize->remove_section( $route_id );
			}
		}

		$composite_control               = new OWP_Customize_Composite_Control(
			$wp_customize,
			'ocean_composite_' . $section_key,
			array(
				'section'  => $section_key,
				'settings' => array(),
				'priority' => -1000,
			)
		);
		$composite_control->routes       = $routes;
		$composite_control->root_section = $section_key;

		$wp_customize->add_control( $composite_control );
	}

	/**
	 * Check for extension sections that cannot safely become internal routes.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer manager.
	 * @param string               $section_key   Top-level section ID.
	 * @param array                $section_data  Candidate section data.
	 * @return bool
	 */
	private static function can_finalize_composite_section( $wp_customize, $section_key, $section_data ) {

		$routes            = array();
		$control_locations = array();
		$route_ids         = array();

		self::collect_composite_routes(
			$section_key,
			$section_data['title'],
			$section_data['options'],
			'',
			array(),
			$routes,
			$control_locations,
			$route_ids
		);

		foreach ( $wp_customize->sections() as $customize_section ) {
			if (
				! isset( $customize_section->section ) ||
				! in_array( $customize_section->section, $route_ids, true )
			) {
				continue;
			}

			if ( ! in_array( $customize_section->id, $route_ids, true ) ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Build route metadata without changing the existing option schema.
	 *
	 * @param string $route_id          Current route ID.
	 * @param string $route_title       Current route title.
	 * @param array  $options           Route options.
	 * @param string $parent_route      Parent route ID.
	 * @param array  $parent_path       Parent title path.
	 * @param array  $routes            Collected routes.
	 * @param array  $control_locations Control-to-route lookup.
	 * @param array  $route_ids         Collected nested section IDs.
	 */
	private static function collect_composite_routes( $route_id, $route_title, $options, $parent_route, $parent_path, &$routes, &$control_locations, &$route_ids ) {

		$current_path = $parent_path;

		if ( '' !== $route_title ) {
			$current_path[] = $route_title;
		}

		$routes[ $route_id ] = array(
			'id'     => $route_id,
			'title'  => $route_title,
			'parent' => $parent_route,
			'path'   => $current_path,
			'items'  => array(),
		);

		$route_ids[] = $route_id;

		foreach ( $options as $option_key => $option_data ) {
			if ( ! isset( $option_data['type'] ) ) {
				continue;
			}

			if ( 'section' === $option_data['type'] ) {
				$child_title = isset( $option_data['title'] ) && ! is_array( $option_data['title'] )
					? $option_data['title']
					: '';

				$routes[ $route_id ]['items'][] = array(
					'type'     => 'route',
					'id'       => $option_key,
					'class'    => isset( $option_data['class'] ) ? $option_data['class'] : '',
					'priority' => isset( $option_data['priority'] ) ? $option_data['priority'] : 10,
				);

				self::collect_composite_routes(
					$option_key,
					$child_title,
					isset( $option_data['options'] ) && is_array( $option_data['options'] ) ? $option_data['options'] : array(),
					$route_id,
					$current_path,
					$routes,
					$control_locations,
					$route_ids
				);

				continue;
			}

			$routes[ $route_id ]['items'][] = array(
				'type'     => 'control',
				'id'       => $option_key,
				'priority' => isset( $option_data['priority'] ) ? $option_data['priority'] : 10,
			);

			$control_locations[ $option_key ] = array(
				'route' => $route_id,
				'path'  => $current_path,
			);
		}
	}

	/**
	 * Adds customizer options
	 */
	public function register_customize_options($options) {

		$settings = array(
			'typography',
			'colors',
			'styles-and-settings',
			'site-page-settings',
			'seo-settings',
			'site-performance',
			'blog',
			'header',
			'topbar',
			'footer-widgets',
			'footer-bottom',
			'sidebar'
		);

		if ( ! empty( $settings ) ) {
			foreach ( $settings as $setting ) {

				$key = str_replace('-', '_', $setting);
				$option_key = 'ocean_' . $key;

				// If Ocean Extra is activated
				if ( OCEAN_EXTRA_ACTIVE
					&& class_exists( 'Ocean_Extra_Theme_Panel' ) ) {

					if ( false === Ocean_Extra_Theme_Panel::get_setting( 'oe_'. $key .'_panel' ) ) {
						unset($options[$option_key]);
					}
				}
			}
		}

		return $options;
	}

	/**
	 * Load scripts for customizer
	 *
	 * @since 1.0.0
	 */
	public function custom_customize_enqueue() {

		$uri   = OCEANWP_INC_DIR_URI . 'customizer/assets/dist/';
		$asset = require OCEANWP_INC_DIR . 'customizer/assets/dist/index.asset.php';
		$deps  = $asset['dependencies'];

		array_push( $deps, 'customize-controls' );

		if (
			! $this->is_composite_customizer_enabled() ||
			$this->has_legacy_customizer_sections
		) {
			wp_enqueue_script(
				'extend-section',
				OCEANWP_INC_DIR_URI . 'customizer/extend-section/script.js',
				array(),
				filemtime( OCEANWP_INC_DIR . 'customizer/extend-section/script.js' ),
				true
			);
		}

		wp_register_script(
			'owp-react-customizer',
			$uri . 'index.js',
			$deps,
			filemtime( OCEANWP_INC_DIR . 'customizer/assets/dist/index.js' ),
			true
		);

		wp_enqueue_style(
			'owp-react-customizer',
			$uri . 'style-index.css',
			array(),
			filemtime( OCEANWP_INC_DIR . 'customizer/assets/dist/style-index.css' )
		);

		wp_enqueue_script( 'owp-react-customizer' );

		if (is_customize_preview()) {
			add_filter('gutenberg_use_widgets_block_editor', '__return_true');
			add_filter('use_widgets_block_editor', '__return_true');
		}

		wp_enqueue_style( 'font-awesome', OCEANWP_THEME_URI .'/assets/fonts/fontawesome/css/all.min.css', false, '6.7.2'  );
		wp_enqueue_style( 'simple-line-icons', OCEANWP_INC_DIR_URI .'customizer/assets/css/customizer-simple-line-icons.min.css', false, '2.4.0' );

		$customize_loc = $this->localize_customize_script();
		if ( is_array( $customize_loc ) ) {
			wp_localize_script(
				'owp-react-customizer',
				'oceanCustomize',
				$customize_loc
			);

			$section_customize = array(
				'isOE' => isset( $customize_loc['isOE'] ) ? $customize_loc['isOE'] : false,
			);

			if ( wp_script_is( 'oe-customize-script', 'enqueued' ) ) {
				wp_localize_script(
					'oe-customize-script',
					'oceanSectionCustomize',
					$section_customize
				);
			} elseif (
				! $this->is_composite_customizer_enabled() ||
				$this->has_legacy_customizer_sections
			) {
				wp_localize_script(
					'extend-section',
					'oceanSectionCustomize',
					$section_customize
				);
			}
		}

		global $wp_version;

		if (version_compare($wp_version, '6.7', '<')) {
			wp_add_inline_style('owp-react-customizer', '
				#customize-theme-controls .ocean-customizer-section-icon {
					display: block;
					height: 18px;
					margin-left: -10px;
					margin-right: 15px;
					position: relative;
					width: 18px;
				}
				#customize-theme-controls .customize-pane-child .ocean-customizer-section-icon {
					margin-right: 10px;
					margin-left: -5px;
				}
			');
		}
	}

	/**
	 * Localize Script.
	 *
	 * @return mixed|void
	 */
	public function localize_customize_script() {

		return apply_filters(
			'ocean_customize_localize',
			array(
				// 'options' => ocean_customize_options('options'),
				// 'isPremium' => ocean_check_pro_license(),
				'isOE' => ocean_is_oe_active(),
				//'sectionIcons' => ocean_customizer_section_icons(),
				'pageChoices' => ocean_get_page_choices(),
				'googleFonts' => oceanwp_google_fonts_array(),
				'customFonts' => function_exists( 'ocean_add_custom_fonts' ) ? ocean_add_custom_fonts() : array(),
				'customizerFonts' => $this->get_customizer_fonts(),
				'colorPalettes' => oceanwp_default_color_palettes(),
				'icons' => ocean_get_customize_control_icons(),
			)
		);
	}

	/**
	 * Fetch customizer fonts
	 */
	private function get_customizer_fonts() {
		ob_start();
		do_action('ocean_customizer_fonts');
		$fonts_content = ob_get_clean();

		return $fonts_content;
	}

	public function customize_preview_init() {

		$uri   = OCEANWP_INC_DIR_URI . 'customizer/assets/dist/';
		$asset = require OCEANWP_INC_DIR . 'customizer/assets/dist/live-preview.asset.php';
		$deps  = $asset['dependencies'];

		array_push( $deps, 'customize-preview' );

		wp_enqueue_script(
			'ocean-customize-preview',
			$uri . 'live-preview.js',
			$deps,
			filemtime( OCEANWP_INC_DIR . 'customizer/assets/dist/live-preview.js' ),
			true
		);

		wp_localize_script(
			'ocean-customize-preview',
			'oceanCustomizePreview',
			array(
				'options'            => ocean_get_customize_preview_data(),
				'standardFonts'      => oceanwp_standard_fonts(),
				'customFonts'        => function_exists( 'ocean_add_custom_fonts' ) ? ocean_add_custom_fonts() : array(),
				'googleFontsEnabled' => (bool) get_theme_mod( 'ocean_enable_google_fonts', ocean_inherit_legacy_google_settings() ),
				'integrations'       => array(
					'woocommerce' => OCEANWP_WOOCOMMERCE_ACTIVE,
					'edd'         => OCEANWP_EDD_ACTIVE,
					'learndash'   => OCEANWP_LEARNDASH_ACTIVE,
					'lifterlms'   => OCEANWP_LIFTERLMS_ACTIVE,
				),
			)
		);
	}

	/**
	 * Updating the search box light Mode via Ajax request
	 *
	 * @since 1.0.0
	 */
	public function update_search_box_light_Mode() {

		check_ajax_referer('ocean_update_search_box');

		$darkMode = esc_attr( $_REQUEST['darkMode'] );
		update_option( 'oceanCustomizerSearchdarkMode', $darkMode );
		wp_send_json_success();
	}

	/**
	 * Loads Css files for customizer Panel
	 */
	public function customize_panel_init() {

		$settings = wp_parse_args( get_option( 'oe_panels_settings', [] ) );

		if ( isset( $settings['customizer-search'] ) && (bool) $settings['customizer-search'] === true ) {

			$uri   = OCEANWP_INC_DIR_URI . 'customizer/assets/dist/';
			$asset = require OCEANWP_INC_DIR . 'customizer/assets/dist/search.asset.php';
			$deps  = $asset['dependencies'];
			array_push( $deps, 'customize-controls' );

			wp_register_script(
				'oceanwp-customize-search-js',
				$uri . 'search.js',
				$deps,
				filemtime( OCEANWP_INC_DIR . 'customizer/assets/dist/search.js' ),
				true
			);

			wp_enqueue_script( 'oceanwp-customize-search-js' );

			wp_enqueue_style(
				'oceanwp-customize-search',
				$uri . 'style-search.css',
				array(),
				filemtime( OCEANWP_INC_DIR . 'customizer/assets/dist/style-search.css' )
			);

			wp_localize_script( 'oceanwp-customize-search-js', 'oceanCustomizerSearchOptions', [
				'darkMode' => get_option( 'oceanCustomizerSearchdarkMode', false ),
				'nonce'    => wp_create_nonce('ocean_update_search_box'),
			] );

		}
	}

}

return new OceanWP_Customizer_Init();
