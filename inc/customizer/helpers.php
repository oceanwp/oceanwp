<?php
/**
 * OceanWP Customizer Class
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function ocean_customize_options($path, $relative = true, $plugin_option_path = '', $pass_inside = []) {
	if ($relative) {
		$path = get_template_directory() . '/inc/customizer/options/' . $path . '.php';
	} else {
		$path = $plugin_option_path . $path . '.php';
	}


	if (! file_exists($path)) {
		return null;
	}

	return apply_filters('ocean_options_register', ocean_find_key_recursive(
		'options',
		ocean_extract_data_from_file(
			$path,
			['options' => []],
			$pass_inside
		)
	), $path, $pass_inside);
}

/**
 * Get Customizer settings data.
 *
 * @param bool $resolve_dynamic_choices Whether to resolve choices callbacks.
 * @return array
 */
function ocean_get_customize_settings_data( $resolve_dynamic_choices = false ) {
	static $options          = null;
	static $resolved_options = null;

	if ( null === $options ) {
		$options = ocean_customize_options( 'options' );
		$options = apply_filters( 'ocean_customize_options_data', $options );
	}

	if ( ! $resolve_dynamic_choices ) {
		return $options;
	}

	if ( null === $resolved_options ) {
		$resolved_options = ocean_resolve_customize_dynamic_choices( $options );
	}

	return $resolved_options;
}

/**
 * Get the minimal settings data required by the Customizer preview.
 *
 * @return array
 *
 * @since 4.2.3
 */
function ocean_get_customize_preview_data() {
	static $preview_data = null;

	if ( null === $preview_data ) {
		$preview_data = ocean_collect_customize_preview_data(
			ocean_get_customize_settings_data()
		);
	}

	return $preview_data;
}

/**
 * Get the complete Customizer SVG icon catalog.
 *
 * @return array
 * @since 4.2.3
 */
function ocean_get_customize_icon_catalog() {
	static $catalog = null;

	if ( null !== $catalog ) {
		return $catalog;
	}

	$icon_file = OCEANWP_INC_DIR . 'customizer/assets/svg.json';
	$catalog   = array();

	if ( is_readable( $icon_file ) ) {
		$decoded = json_decode( file_get_contents( $icon_file ), true );
		$catalog = is_array( $decoded ) ? $decoded : array();
	}

	return $catalog;
}

/**
 * Get only the SVG icons referenced by the active Customizer settings tree.
 *
 * @return array
 *
 * @since 4.2.3
 */
function ocean_get_customize_control_icons() {
	static $control_icons = null;

	if ( null !== $control_icons ) {
		return $control_icons;
	}

	$icon_keys = array( 'help-1' );
	ocean_collect_customize_control_icon_keys(
		ocean_get_customize_settings_data(),
		$icon_keys
	);

	$catalog = ocean_get_customize_icon_catalog();

	$control_icons = array();

	foreach ( array_unique( $icon_keys ) as $icon_key ) {
		if ( isset( $catalog[ $icon_key ] ) ) {
			$control_icons[ $icon_key ] = $catalog[ $icon_key ];
		}
	}

	return apply_filters( 'ocean_customize_control_icons', $control_icons );
}

/**
 * Build an equality rule for a client-side active callback.
 *
 * @param string $setting Customizer setting ID.
 * @param mixed  $value   Expected setting value.
 * @return array
 * @since 4.2.3
 */
function ocean_customize_active_rule_equals( $setting, $value ) {
	return array(
		'setting'  => $setting,
		'operator' => 'equals',
		'value'    => $value,
	);
}

/**
 * Build an inclusion rule for a client-side active callback.
 *
 * @param string $setting Customizer setting ID.
 * @param array  $values  Accepted setting values.
 * @return array
 * @since 4.2.3
 */
function ocean_customize_active_rule_in( $setting, $values ) {
	return array(
		'setting'  => $setting,
		'operator' => 'in',
		'value'    => $values,
	);
}

/**
 * Return client-side equivalents for active callbacks that depend only on
 *
 * @return array
 * @since 4.2.3
 */
require_once OCEANWP_INC_DIR . 'customizer/active-callback-rules/active-callback-rules.php';

/**
 * Collect icon keys recursively from control arguments and radio choices.
 *
 * @param array $items Settings data to inspect.
 * @param array $icon_keys Collected icon keys.
 * @return void
 */
function ocean_collect_customize_control_icon_keys( $items, &$icon_keys ) {
	if ( ! is_array( $items ) ) {
		return;
	}

	foreach ( $items as $key => $item ) {
		if ( is_string( $item ) ) {
			if ( in_array( $key, array( 'linkIcon', 'titleIcon' ), true ) ) {
				$icon_keys[] = $item;
			} elseif ( 'icon' === $key ) {
				$icon_keys[] = $item;
				$icon_keys[] = $item . '-active';
				$icon_keys[] = $item . '-default';
			}
		}

		if ( is_array( $item ) ) {
			ocean_collect_customize_control_icon_keys( $item, $icon_keys );
		}
	}
}

/**
 * Collect controls used by the live preview from the settings.
 *
 * @param array $items Settings.
 * @return array
 *
 * @since 4.2.3
 */
function ocean_collect_customize_preview_data( $items ) {
	$preview_data  = array();
	$preview_types = array(
		'ocean-typography',
		'ocean-color',
	);
	$preview_keys  = array(
		'selector',
		'css',
		'preview',
		'isUnit',
	);

	if ( ! is_array( $items ) ) {
		return $preview_data;
	}

	foreach ( $items as $option_id => $item ) {
		if ( ! is_array( $item ) ) {
			continue;
		}

		$type              = isset( $item['type'] ) ? $item['type'] : '';
		$preview_mode      = isset( $item['preview'] ) ? $item['preview'] : '';
		$uses_type_preview = 'queryWithType' === $preview_mode
			&& in_array( $type, array( 'ocean-range-slider', 'ocean-spacing' ), true );

		if (
			in_array( $type, $preview_types, true )
			|| 'queryWithAttr' === $preview_mode
			|| $uses_type_preview
		) {
			$preview_item = array(
				'id'   => isset( $item['id'] ) ? $item['id'] : $option_id,
				'type' => $type,
			);

			if ( isset( $item['setting_args'] ) && is_array( $item['setting_args'] ) ) {
				$preview_item['setting_args'] = ocean_collect_customize_preview_setting_args(
					$item['setting_args']
				);
			}

			foreach ( $preview_keys as $preview_key ) {
				if ( array_key_exists( $preview_key, $item ) ) {
					$preview_item[ $preview_key ] = $item[ $preview_key ];
				}
			}

			$preview_data[] = $preview_item;
		}

		$children = ocean_collect_customize_preview_data( $item );

		if ( ! empty( $children ) ) {
			$preview_data = array_merge( $preview_data, $children );
		}
	}

	return $preview_data;
}

/**
 * Keep only setting data consumed by the live preview.
 *
 * @param array $setting_args Control setting arguments.
 * @return array
 *
 * @since 4.2.3
 */
function ocean_collect_customize_preview_setting_args( $setting_args ) {
	$preview_setting_args = array();

	foreach ( $setting_args as $setting_key => $setting_data ) {
		if ( ! is_array( $setting_data ) || ! isset( $setting_data['id'] ) ) {
			continue;
		}

		$preview_setting_args[ $setting_key ] = array(
			'id' => $setting_data['id'],
		);

		if ( array_key_exists( 'selector', $setting_data ) ) {
			$preview_setting_args[ $setting_key ]['selector'] = $setting_data['selector'];
		}
	}

	return $preview_setting_args;
}

/**
 * Determine whether a settings tree contains a control type.
 *
 * @param array  $items Settings tree.
 * @param string $control_type Control type to find.
 * @return bool
 *
 * @since 4.2.3
 */
function ocean_customize_tree_has_control_type( $items, $control_type ) {
	if ( ! is_array( $items ) ) {
		return false;
	}

	foreach ( $items as $item ) {
		if ( ! is_array( $item ) ) {
			continue;
		}

		if ( isset( $item['type'] ) && $control_type === $item['type'] ) {
			return true;
		}

		if ( ocean_customize_tree_has_control_type( $item, $control_type ) ) {
			return true;
		}
	}

	return false;
}

/**
 * Resolve dynamic Customizer choice callbacks recursively.
 *
 * @param array $items Customizer settings tree.
 * @return array
 * 
 * @since 4.2.3
 */
function ocean_resolve_customize_dynamic_choices( $items ) {
	if ( ! is_array( $items ) ) {
		return array();
	}

	foreach ( $items as &$item ) {
		if ( ! is_array( $item ) ) {
			continue;
		}

		if ( isset( $item['choices_callback'] ) ) {
			$callback = $item['choices_callback'];

			if ( is_callable( $callback ) ) {
				$choices = call_user_func( $callback );

				$item['choices'] = is_array( $choices )
					? $choices
					: array();
			} else {
				$item['choices'] = array();
			}

			unset( $item['choices_callback'] );
		}

		if ( isset( $item['default_callback'] ) ) {
			$callback = $item['default_callback'];

			$item['default'] = is_callable( $callback )
				? call_user_func( $callback )
				: '';

			unset( $item['default_callback'] );
		}

		$item = ocean_resolve_customize_dynamic_choices( $item );
	}
	unset( $item );

	return $items;
}

/**
 * Extract data from a file.
 *
 * @param string $file_path path to file.
 * @param array  $_extract_variables variables to return.
 * @param array  $_set_variables variables to pass into the file.
 */
if (! function_exists('ocean_extract_data_from_file')) {
	function ocean_extract_data_from_file(
		$file_path,
		array $_extract_variables,
		array $_set_variables = array()
	) {
		// phpcs:ignore WordPress.PHP.DontExtract.extract_extract
		extract($_set_variables, EXTR_REFS);
		unset($_set_variables);

		if (is_file($file_path)) {
			require $file_path;
		}

		foreach ($_extract_variables as $variable_name => $default_value) {
			if (isset($$variable_name) ) {
				$_extract_variables[$variable_name] = $$variable_name;
			}
		}

		return $_extract_variables;
	}
}

/**
 * Recursively find a key's value in array
 *
 * @param string       $keys multilevel path.
 * @param array|object $array_or_object array to extract from.
 * @param null|mixed   $default_value defualt value.
 *
 * @return null|mixed
 */
if ( ! function_exists( 'ocean_find_key_recursive' ) ) {
	function ocean_find_key_recursive( $keys, $array_or_object, $default_value = null ) {
		if (! is_array($keys)) {
			$keys = explode('/', (string) $keys);
		}

		$array_or_object = $array_or_object;
		$key_or_property = array_shift($keys);

		if (is_null($key_or_property)) {
			return $default_value;
		}

		$is_object = is_object($array_or_object);

		if ($is_object) {
			if (! property_exists($array_or_object, $key_or_property)) {
				return $default_value;
			}
		} else {
			if (! is_array($array_or_object) || ! array_key_exists($key_or_property, $array_or_object)) {
				return $default_value;
			}
		}

		if (isset($keys[0])) {
			if ($is_object) {
				return ocean_find_key_recursive($keys, $array_or_object->{$key_or_property}, $default_value);
			} else {
				return ocean_find_key_recursive($keys, $array_or_object[$key_or_property], $default_value);
			}
		} else {
			if ($is_object) {
				return $array_or_object->{$key_or_property};
			} else {
				return $array_or_object[ $key_or_property ];
			}
		}
	}
}

/**
 * Get Icons for Scroll top
 */
if ( ! function_exists( 'oceanwp_get_scroll_top_icons' ) ) {

	function oceanwp_get_scroll_top_icons() {

		$icons = [
			'chevron_up' => [
				'id'     => 'chevron_up',
				'label'   => 'chevron up',
				'content' => oceanwp_icon( 'chevron_up', false ),
			],
			'caret_up'  => [
				'id'     => 'caret_up',
				'label'   => 'caret up',
				'content' => oceanwp_icon( 'caret_up', false ),
			],
			'angle_up'  => [
				'id'     => 'angle_up',
				'label'   => 'angle up',
				'content' => oceanwp_icon( 'angle_up', false ),
			],
			'double_arrows_up'  => [
				'id'     => 'double_arrows_up',
				'label'   => 'double arrows up',
				'content' => oceanwp_icon( 'double_arrows_up', false ),
			],
			'long_arrow_alt_up'  => [
				'id'     => 'long_arrow_alt_up',
				'label'   => esc_html__( 'Left', 'oceanwp' ),
				'content' => oceanwp_icon( 'double_arrows_up', false ),
			],
			'arrow_alt_circle_up'  => [
				'id'     => 'arrow_alt_circle_up',
				'label'   => 'arrow alt circle up',
				'content' => oceanwp_icon( 'arrow_alt_circle_up', false ),
			],
			'arrow_up'  => [
				'id'     => 'arrow_up',
				'label'   => 'arrow up',
				'content' => oceanwp_icon( 'arrow_up', false ),
			],
			'level_up_alt'  => [
				'id'     => 'level_up_alt',
				'label'   => 'level up alt',
				'content' => oceanwp_icon( 'level_up_alt', false ),
			],
			'caret_square_up'  => [
				'id'     => 'caret_square_up',
				'label'   => 'caret square up',
				'content' => oceanwp_icon( 'caret_square_up', false ),
			],
		];

		return apply_filters( 'oceanwp_get_scroll_top_icons', $icons );

	}
}

/**
 * Breadcrumb source choice
 */
function oceanwp_breadcrumbs_source_choices() {

	$source_list = array( 'default' => esc_html__( 'Default', 'oceanwp' ) );

	return apply_filters( 'oceanwp_breadcrumbs_source_list', $source_list );
}

/**
 * Get all library templates.
 *
 * @return array
 */
function oceanwp_library_template_choices() {
	static $templates = null;

	if ( null !== $templates ) {
		return $templates;
	}

	$templates = array(
		'0' => esc_html__( 'Select', 'oceanwp' ),
	);

	$get_templates = get_posts(
		array(
			'post_type'   => 'oceanwp_library',
			'numberposts' => -1,
			'post_status' => 'publish',
		)
	);

	if ( ! empty( $get_templates ) ) {
		foreach ( $get_templates as $template ) {
			$templates[ $template->ID ] = $template->post_title;
		}
	}

	$templates = apply_filters(
		'oceanwp_library_template_choices',
		$templates
	);

	return $templates;
}

/**
 * Get all menus.
 */
if ( ! function_exists( 'oceanwp_get_menu_choices' ) ) {
	function oceanwp_get_menu_choices() {
		static $choices = null;

		if ( null !== $choices ) {
			return $choices;
		}

		$choices = array(
			esc_html__( 'Select Your Menu', 'oceanwp' ),
		);

		$get_menus = get_terms(
			'nav_menu',
			array(
				'hide_empty' => true,
			)
		);

		if ( ! is_wp_error( $get_menus ) ) {
			foreach ( $get_menus as $menu ) {
				$choices[ $menu->term_id ] = $menu->name;
			}
		}

		return $choices;
	}
}

if ( ! function_exists( 'oceanwp_customizer_print_svg' ) ) {

	function oceanwp_customizer_print_svg( $svg ) {

		$json = OCEANWP_INC_DIR_URI . 'customizer/assets/svg.json';

		$response = wp_remote_get( $json );

		if ( is_wp_error( $response ) ) {
			return false;
		}

		$body = wp_remote_retrieve_body( $response );
		$svg_icons = json_decode( $body, true );

		if ( ! is_array( $svg_icons ) || ! isset( $svg_icons[ $svg ] ) ) {
			return false;
		}

		return $svg_icons[$svg];
	}
}

/**
 * Get post types
 *
 * @param object $args    post type.
 */
if ( ! function_exists( 'ocean_customizer_get_post_types' ) ) {

	function ocean_customizer_get_post_types( $args = array() ) {
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
}

/**
 * Get Cart Icons
 */
if ( ! function_exists( 'oceanwp_cart_icons_list' ) ) {

	function oceanwp_cart_icons_list() {

		$icons = [
			'icon_basket' => [
				'id'     => 'icon_basket',
				'label'   => esc_html__('icon basket', 'oceanwp'),
				'content' => oceanwp_icon( 'icon_basket', false ),
			],
			'icon_handbag'  => [
				'id'     => 'icon_handbag',
				'label'   => esc_html__('icon handbag', 'oceanwp'),
				'content' => oceanwp_icon( 'icon_handbag', false ),
			],
			'shopping_basket'  => [
				'id'     => 'shopping_basket',
				'label'   => esc_html__('shopping basket', 'oceanwp'),
				'content' => oceanwp_icon( 'shopping_basket', false ),
			],
			'shopping_bag'  => [
				'id'     => 'shopping_bag',
				'label'   => esc_html__('shopping bag', 'oceanwp'),
				'content' => oceanwp_icon( 'shopping_bag', false ),
			],
			'shopping_cart'  => [
				'id'     => 'shopping_cart',
				'label'   => esc_html__('shopping cart', 'oceanwp'),
				'content' => oceanwp_icon( 'shopping_cart', false ),
			]
		];

		return apply_filters( 'oceanwp_cart_icons_list', $icons );

	}
}

if ( ! function_exists( 'ocean_get_page_choices' ) ) {

	function ocean_get_page_choices( $name = '', $selected = '', $show_option_none = false, $option_none_value = '' ) {

		$name = '_customize-dropdown-pages-';
		$selected = get_theme_mod( 'op_portfolio_page', '' );

		// If no custom string is provided, handle the translatable default string here.
		if ( false === $show_option_none ) {
			$show_option_none = __( '&mdash; Select &mdash;', 'oceanwp' );
		}

		$dropdown = wp_dropdown_pages(
			array(
				'name'              => esc_attr( $name ),
				'echo'              => 0,
				'show_option_none'  => esc_html( $show_option_none ),
				'option_none_value' => esc_attr( $option_none_value ),
				'selected'          => esc_attr( $selected ),
			)
		);

		return $dropdown;
	}
}

/**
 * Customizer Upsell Notices
 * 
 * @since 4.0.0
 */
if ( ! function_exists( 'owp_render_header_upsell_notice' ) ) {

	function owp_render_header_upsell_notice() {
		$check_icon = '<svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>';
		ob_start();
		?>
		<div class="ocean-upsell-container">
			<h3 class="upsell-heading"><?php echo esc_html__( 'Supercharge Your Site with OceanWP Pro Bundle!', 'oceanwp' ); ?></h3>
			<p><?php echo esc_html__( 'Why Upgrade to Pro?', 'oceanwp' ); ?></p>
			<ul class="upsell-content">
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Header', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Top Bar', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Mobile Menu', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Effects', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Custom Header', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Full Site Templates', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Exceptional Support', 'oceanwp' ); ?></li>
			</ul>

			<a href="<?php echo esc_url( 'https://see.oceanwp.org/tcheader-bundle-upgrade' ) ?>" target="_blank" class="button button-secondary">Upgrade to OceanWP Pro</a>
		</div>
		<?php
		return ob_get_clean();
	}
}

if ( ! function_exists( 'owp_render_topbar_upsell_notice' ) ) {

	function owp_render_topbar_upsell_notice() {
		$check_icon = '<svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>';
		ob_start();
		?>
		<div class="ocean-upsell-container">
			<h3 class="upsell-heading"><?php echo esc_html__( 'Elevate Your Site with OceanWP Pro Bundle!', 'oceanwp' ); ?></h3>
			<p><?php echo esc_html__( 'Why Upgrade to Pro?', 'oceanwp' ); ?></p>
			<ul class="upsell-content">
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Header', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Top Bar', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Popup Login', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Advanced Hooks', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Full Site Templates', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Dedicated Support', 'oceanwp' ); ?></li>
			</ul>

			<a href="<?php echo esc_url( 'https://see.oceanwp.org/tctopbar-bundle-upgrade' ) ?>" target="_blank" class="button button-secondary">Upgrade to OceanWP Pro</a>
		</div>
		<?php
		return ob_get_clean();
	}
}

if ( ! function_exists( 'owp_render_blog_upsell_notice' ) ) {

	function owp_render_blog_upsell_notice() {
		$check_icon = '<svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>';
		ob_start();
		?>
		<div class="ocean-upsell-container">
			<h3 class="upsell-heading"><?php echo esc_html__( 'Power Up Your Content with OceanWP Pro Bundle!', 'oceanwp' ); ?></h3>
			<p><?php echo esc_html__( 'Why Upgrade to Pro?', 'oceanwp' ); ?></p>
			<ul class="upsell-content">
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Custom Post Types', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Popup Builder', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Pixel Tracker', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Advanced Hooks', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Elementor Sections', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Full Site Templates', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Dedicated Support', 'oceanwp' ); ?></li>
			</ul>

			<a href="<?php echo esc_url( 'https://see.oceanwp.org/tcblog-bundle-upgrade' ) ?>" target="_blank" class="button button-secondary">Upgrade to OceanWP Pro</a>
		</div>
		<?php
		return ob_get_clean();
	}
}

if ( ! function_exists( 'owp_render_footer_upsell_notice' ) ) {

	function owp_render_footer_upsell_notice() {
		$check_icon = '<svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>';
		ob_start();
		?>
		<div class="ocean-upsell-container">
			<h3 class="upsell-heading"><?php echo esc_html__( 'Make Your Site Stand Out with OceanWP Pro Bundle!', 'oceanwp' ); ?></h3>
			<p><?php echo esc_html__( 'Why Upgrade to Pro?', 'oceanwp' ); ?></p>
			<ul class="upsell-content">
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Footer CTA', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Footer', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Custom Footer', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Cookie Notice', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Elementor Sections', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Full Site Templates', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Dedicated Support', 'oceanwp' ); ?></li>
			</ul>

			<a href="<?php echo esc_url( 'https://see.oceanwp.org/tcfwidgets-bundle-upgrade' ) ?>" target="_blank" class="button button-secondary">Upgrade to OceanWP Pro</a>
		</div>
		<?php
		return ob_get_clean();
	}
}

if ( ! function_exists( 'owp_render_footer_copyright_upsell_notice' ) ) {

	function owp_render_footer_copyright_upsell_notice() {
		$check_icon = '<svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>';
		ob_start();
		?>
		<div class="ocean-upsell-container">
			<h3 class="upsell-heading"><?php echo esc_html__( 'Make Your Site Stand Out with OceanWP Pro Bundle!', 'oceanwp' ); ?></h3>
			<p><?php echo esc_html__( 'Why Upgrade to Pro?', 'oceanwp' ); ?></p>
			<ul class="upsell-content">
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Footer CTA', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Footer', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Sticky Custom Footer', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Cookie Notice', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Elementor Sections', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Full Site Templates', 'oceanwp' ); ?></li>
				<li><?php echo $check_icon; ?> <?php echo esc_html__( 'Dedicated Support', 'oceanwp' ); ?></li>
			</ul>

			<a href="<?php echo esc_url( 'https://see.oceanwp.org/tccopyright-bundle-upgrade' ) ?>" target="_blank" class="button button-secondary">Upgrade to OceanWP Pro</a>
		</div>
		<?php
		return ob_get_clean();
	}
}

/**
 * Customizer Universal Help Link
 * 
 * @since 4.0.0
 */
if ( ! function_exists( 'ocean_render_content_need_help' ) ) {

	function ocean_render_content_need_help() {
		$html = sprintf( esc_html__( '%1$s Need Help? %2$s', 'oceanwp' ), '<a href="https://docs.oceanwp.org/" target="_blank">', '</a>' );
		return $html;
	}
}

/**
 * Customizer Inherit Legacy Google Font Settings
 *
 * @return bool
 * @since 4.0.1
 */
if ( ! function_exists( 'ocean_inherit_legacy_google_settings') ) {
	function ocean_inherit_legacy_google_settings() {
		$legacy_settings = get_theme_mod( 'ocean_disable_google_font', false );
		if ( false === $legacy_settings ) {
			// Google fonts enabled per old settings.
			return true;
		} else if ( true === $legacy_settings ) {
			// Google fonts disabled per old settings.
			return false;
			// Return Google fonts as disabled if no value.
		} else {
			return false;
		}
	}
}
