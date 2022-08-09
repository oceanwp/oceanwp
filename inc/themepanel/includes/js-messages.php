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
		'plugin_is_successfully_installed' => __( 'Plugin is installed successfully.', 'oceanwp' ),
		'plugin_is_successfully_updated'   => __( 'Plugin is updated successfully.', 'oceanwp' ),
		'installed'                        => __( 'Installed', 'oceanwp' ),
		'updated'                          => __( 'Updated', 'oceanwp' ),
		'child_theme_installed'            => __( 'Child theme installed successfully', 'oceanwp' ),
		'installing_plugin'                => __( 'Installing Plugin...', 'oceanwp' ),
		'updating_plugin'				   => __( 'Updating Plugin...', 'oceanwp' ),
		'installing_child_theme'           => __( 'Installing Child Theme...', 'oceanwp' ),
		'saving_settings'                  => __( 'Saving...', 'oceanwp' ),
		'reseting'                         => __( 'Reseting...', 'oceanwp' ),
		'exporting'                        => __( 'Exporting...', 'oceanwp' ),
		'importing'                        => __( 'Importing...', 'oceanwp' ),
		'copied_system_info'			   => __( 'Information has been copied.', 'oceanwp' ),
		'fonts_clearing'			       => __( 'Clearing data...', 'oceanwp' ),
	);
}
