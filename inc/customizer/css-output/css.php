<?php
/**
 * OceanWP Customizer CSS Output
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require OCEANWP_INC_DIR . 'customizer/css-output/selectors.php';
require OCEANWP_INC_DIR . 'customizer/css-output/typography.php';
require OCEANWP_INC_DIR . 'customizer/css-output/colors.php';
require OCEANWP_INC_DIR . 'customizer/css-output/style-settings.php';
require OCEANWP_INC_DIR . 'customizer/css-output/header.php';
require OCEANWP_INC_DIR . 'customizer/css-output/topbar.php';
require OCEANWP_INC_DIR . 'customizer/css-output/blog.php';
require OCEANWP_INC_DIR . 'customizer/css-output/sidebar.php';
require OCEANWP_INC_DIR . 'customizer/css-output/footer-widget.php';
require OCEANWP_INC_DIR . 'customizer/css-output/footer-copyright.php';

// If WooCommerce is activated.
if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {
	require OCEANWP_INC_DIR . 'customizer/css-output/woocommerce.php';
}

// Easy Digital Downloads Settings.
if ( OCEANWP_EDD_ACTIVE ) {
	require OCEANWP_INC_DIR . 'customizer/css-output/edd.php';
}

// If LifterLMS is activated.
if ( OCEANWP_LIFTERLMS_ACTIVE ) {
	require OCEANWP_INC_DIR . 'customizer/css-output/lifterlms.php';
}

// If LearnDash is activated.
if ( OCEANWP_LEARNDASH_ACTIVE ) {
	require OCEANWP_INC_DIR . 'customizer/css-output/learndash.php';
}
