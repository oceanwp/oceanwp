<?php
/**
 * OceanWP Customizer Active Rules.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/general.php';
require_once __DIR__ . '/header.php';
require_once __DIR__ . '/blog.php';
require_once __DIR__ . '/woocommerce.php';
require_once __DIR__ . '/integrations.php';
require_once __DIR__ . '/compatibility.php';

/**
 * Return client-side equivalents for registered active callbacks.
 *
 * @return array
 * @since 4.2.3
 */
function ocean_get_customize_active_callback_rules() {
	$rules = array_merge(
		ocean_get_customize_general_active_callback_rules(),
		ocean_get_customize_header_active_callback_rules(),
		ocean_get_customize_blog_active_callback_rules(),
		ocean_get_customize_woocommerce_active_callback_rules(),
		ocean_get_customize_integrations_active_callback_rules(),
		ocean_get_customize_compatibility_active_callback_rules()
	);

	return apply_filters( 'ocean_customize_active_callback_rules', $rules );
}
