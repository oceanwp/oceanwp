<?php

/**
 * List of all texts in theme panel for translation
 *
 * @package Theme Panel
 */

/**
 * This function will be hooked into wp_localize_script in admin/general/enqueue-assets.php
 *
 * @SuppressWarnings(PHPMD.ExcessiveMethodLength)
 */
function oceanwp_adminpanel_textdomain() {
	return array(
		'plugin_is_successfully_installed' => esc_html__( 'Plugin is installed successfully.', 'oceanwp' ),
		'plugin_is_successfully_updated'   => esc_html__( 'Plugin is updated successfully.', 'oceanwp' ),
		'installed'                        => esc_html__( 'Installed', 'oceanwp' ),
		'updated'                          => esc_html__( 'Updated', 'oceanwp' ),
		'child_theme_installed'            => esc_html__( 'Child theme installed successfully', 'oceanwp' ),
		'installing_plugin'                => esc_html__( 'Installing Plugin...', 'oceanwp' ),
		'updating_plugin'				   => esc_html__( 'Updating Plugin...', 'oceanwp' ),
		'installing_child_theme'           => esc_html__( 'Installing Child Theme...', 'oceanwp' ),
		'saving_settings'                  => esc_html__( 'Saving...', 'oceanwp' ),
		'reseting'                         => esc_html__( 'Reseting...', 'oceanwp' ),
		'exporting'                        => esc_html__( 'Exporting...', 'oceanwp' ),
		'importing'                        => esc_html__( 'Importing...', 'oceanwp' ),
		'copied_system_info'			   => esc_html__( 'Information has been copied.', 'oceanwp' ),
		'fonts_clearing'			       => esc_html__( 'Clearing data...', 'oceanwp' ),
	);
}
