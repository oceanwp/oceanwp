<?php
/**
 * OceanWP Customizer Class
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function ocean_customize_options($path, $pass_inside = [], $relative = true) {
	if ($relative) {
		$path = get_template_directory() . '/inc/customizer/setup/options/' . $path . '.php';
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
if (! function_exists('ocean_find_key_recursive')) {
	function ocean_find_key_recursive($keys, $array_or_object, $default_value = null) {
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

		// Add none to top of array
		// $icons_array = array(
		// 	'none' => '',
		// );

		// // Define return icons
		// $return_icons = array();

		// // Returns up arrows only
		// if ( 'up_arrows' == $return ) {
		// 	$return_icons = array( 'chevron_up', 'caret_up', 'angle_up', 'double_arrows_up', 'long_arrow_alt_up', 'arrow_alt_circle_up', 'arrow_up', 'level_up_alt', 'caret_square_up' );
		// 	$return_icons = array_combine( $return_icons, $return_icons );
		// }

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
				'label'   => esc_html__('Left', 'oceanwp'),
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
 * Get all library template.
 */
function oceanwp_library_template_choices() {

	// Return library templates array.
	$templates = array( '0' => esc_html__( 'Select', 'oceanwp' ) );
	$get_templates 	= get_posts( array( 'post_type' => 'oceanwp_library', 'numberposts' => -1, 'post_status' => 'publish' ) );

	if ( ! empty ( $get_templates ) ) {
		foreach ( $get_templates as $template ) {
			$templates[ $template->ID ] = $template->post_title;
		}
	}

	return apply_filters( 'oceanwp_library_template_choices', $templates );
}

/**
 * Get all menus.
 */
function oceanwp_get_menu_choices() {

	$menus = array( esc_html__( 'Select Your Menu', 'oceanwp' ) );

	$get_menus 	= get_terms( 'nav_menu', array( 'hide_empty' => true ) );

	foreach ( $get_menus as $menu) {
		$menus[$menu->term_id] = $menu->name;
	}

	return $menus;
}