<?php
/**
 * OceanWP Notice API
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'wp_ajax_oceanwp_dismissed_notice',
	function () {

		check_ajax_referer('oceanwp_notice_nonce');

		$action_type = isset($_POST['action_type']) ? sanitize_text_field($_POST['action_type']) : '';

		$first_dismissed     = get_option('oceanwp_plugin_notice_first_dismissed');
		$permanent_dismissed = get_option('oceanwp_plugin_notice_permanently_dismissed');

		if ($action_type) {
			if (in_array($action_type, ['activate', 'install_activate'], true) && ! $first_dismissed) {
				update_option('oceanwp_plugin_notice_first_dismissed', time());
			} elseif (in_array($action_type, ['activate', 'install_activate', 'skip_only'], true) && ! $permanent_dismissed) {
				update_option('oceanwp_plugin_notice_permanently_dismissed', true);
			}
		}
		else {
			if ( ! $first_dismissed ) {
				update_option('oceanwp_plugin_notice_first_dismissed', time());
			} elseif ( ! $permanent_dismissed ) {
				update_option('oceanwp_plugin_notice_permanently_dismissed', true);
			}
		}

		wp_die();
	}
);

add_action(
	'wp_ajax_oceanwp_check_notice_actions',
	function () {

		check_ajax_referer('oceanwp_notice_nonce');

		$manager            = new Oceanwp_Plugin_Manager();
		$status             = $manager->get_ocean_extra_status();
		$theme_install      = get_option('oceanwp_theme_installed_version');
		$oe_install         = get_option( 'ocean-extra-installed-version' );

		$current_oe_version = '';

		if ( file_exists( WP_PLUGIN_DIR . '/ocean-extra/ocean-extra.php' ) ) {
			if ( current_user_can( 'install_plugins' ) && function_exists('oceanwp_theme_panel') ) {
				$current_oe_version = oceanwp_theme_panel()->get_current_plugin_version( 'ocean-extra/ocean-extra.php' );
			}
		}

		$actions_html     = '';

		$first_dismissed  = get_option('oceanwp_plugin_notice_first_dismissed');
		$permanent_dismiss = get_option('oceanwp_plugin_notice_permanently_dismissed');

		$parent_theme  = wp_get_theme()->parent();
		$current_theme = wp_get_theme();
		$theme_version = '';

		if ( ! empty( $parent_theme) ) {
			$theme_version = $parent_theme->get('Version');
		} else {
			$theme_version = $current_theme->get('Version');
		}

		if ( ! $first_dismissed ) {
			if ( $status['status'] == 'installed' ) {

				$actions_html = '<div class="notice-actions">';

				if (
					(empty($theme_install) || version_compare($theme_install, $theme_version, '==')) &&
					(empty($oe_install) || version_compare($oe_install, $current_oe_version, '=='))
				) {
					$actions_html .= '
					<button type="button" class="button button-primary" data-action="activate_setup_wizard">' . esc_html__( 'Launch the Setup Wizard', 'oceanwp' ) . '</button>';
				}

				$actions_html .= '
					<button type="button" class="button button-secondary type-link" data-action="activate">' . esc_html__( 'Install free power options with Ocean Extra only', 'oceanwp' ) . '</button>
				</div>';

			} elseif ( $status['status'] == 'uninstalled' ) {

				$actions_html = '<div class="notice-actions">';

				if (empty($theme_install) || version_compare($theme_install, $theme_version, '==')) {
					$actions_html .= '
					<button type="button" class="button button-primary" data-action="install_activate_setup_wizard">' . esc_html__( 'Launch the Setup Wizard', 'oceanwp' ) . '</button>';
				}

				$actions_html .= '
					<button type="button" class="button button-secondary type-link" data-action="install_activate">' . esc_html__( 'Install free power options with Ocean Extra only', 'oceanwp' ) . '</button>
				</div>';

			} elseif ( $status['status'] == 'active' ) {

				$actions_html = '<div class="notice-actions">';

				if (
					(empty($theme_install) || version_compare($theme_install, $theme_version, '==')) &&
					(empty($oe_install) || version_compare($oe_install, $current_oe_version, '=='))
				) {
					$actions_html .= '
					<a href="#" class="btn button-primary launch-onboarding-wizard">' . esc_html__( 'Launch the Setup Wizard', 'oceanwp' ) . '</a>';
				}

				$actions_html .= '
					<button type="button" class="button button-secondary type-link" data-action="skip_only">' . esc_html__( 'No thanks, I\'m building from scratch', 'oceanwp' ) . '</button>
				</div>';
			}
		} else if ( $first_dismissed && ! $permanent_dismiss ) {

			$actions_html = '<div class="notice-actions">';

			if ( $status['status'] == 'installed' ) {
				if (
					(empty($theme_install) || version_compare($theme_install, $theme_version, '==')) &&
					(empty($oe_install) || version_compare($oe_install, $current_oe_version, '=='))
				) {
					$actions_html .= '
					<button type="button" class="button button-primary" data-action="activate_setup_wizard">' . esc_html__( 'Launch the Setup Wizard', 'oceanwp' ) . '</button>';
				}

				$actions_html .= '
					<button type="button" class="button button-secondary type-link" data-action="activate">' . esc_html__( 'Activate Ocean Extra to unlock OceanWP power options', 'oceanwp' ) . '</button>';

			} elseif ( $status['status'] == 'uninstalled' ) {
				if (empty($theme_install) || version_compare($theme_install, $theme_version, '==')) {
					$actions_html .= '
					<button type="button" class="button button-primary" data-action="install_activate_setup_wizard">' . esc_html__( 'Launch the Setup Wizard', 'oceanwp' ) . '</button>';
				}

				$actions_html .= '
					<button type="button" class="button button-secondary type-link" data-action="install_activate">' . esc_html__( 'Highly recommended: Unlock free power options with Ocean Extra', 'oceanwp' ) . '</button>';

			} elseif ( $status['status'] == 'active' ) {
				if (
					(empty($theme_install) || version_compare($theme_install, $theme_version, '==')) &&
					(empty($oe_install) || version_compare($oe_install, $current_oe_version, '=='))
				) {
					$actions_html .= '
					<a href="#" class="button button-primary launch-onboarding-wizard">' . esc_html__( 'Launch the Setup Wizard', 'oceanwp' ) . '</a>';
				}

				$actions_html .= '
					<button type="button" class="button button-secondary type-link" data-action="skip_only">' . esc_html__( 'No thanks, I\'m building from scratch', 'oceanwp' ) . '</button>';
			}

			$actions_html .= '</div>';
		}

		wp_send_json_success(
			$actions_html
		);
	}
);


add_action(
	'wp_ajax_oceanwp_notice_button_click',
	function () {

		check_ajax_referer('oceanwp_notice_nonce');

		if ( ! current_user_can( 'activate_plugins' ) ) {
			return;
		}

		$manager = new Oceanwp_Plugin_Manager();
		$status  = $manager->get_ocean_extra_status();

		if ( $status['status'] === 'active' ) {
			wp_send_json_success(
				array(
					'status'    => 'active',
					'pluginUrl' => admin_url( 'admin.php?page=oceanwp' ),
				)
			);
		}

		if ( $status['status'] === 'uninstalled' ) {
			$manager->download_and_install( $status['slug'] );
			$manager->plugin_activation( $status['slug'] );

			wp_send_json_success(
				array(
					'status'    => 'active',
					'pluginUrl' => admin_url( 'admin.php?page=oceanwp' ),
				)
			);
		}

		if ( $status['status'] === 'installed' ) {
			$manager->plugin_activation( $status['slug'] );

			wp_send_json_success(
				array(
					'status'    => 'active',
					'pluginUrl' => admin_url( 'admin.php?page=oceanwp' ),
				)
			);
		}

		wp_die();
	}
);

add_action(
	'wp_ajax_oceanwp_dismissed_panel_notice',
	function () {
		check_ajax_referer('oceanwp_panel_notice_nonce');
		update_option( 'dismissed-oceanwp_plugin_notice', true );
		wp_die();
	}
);


add_action(
	'wp_ajax_oceanwp_check_panel_notice_actions',
	function () {

		check_ajax_referer('oceanwp_panel_notice_nonce');

		$manager      = new Oceanwp_Plugin_Manager();
		$status       = $manager->get_ocean_extra_status();
		$actions_html = '';
		if ( $status['status'] == 'installed' ) {
			$actions_html = '<div class="notice-actions">
        <button type="button" class="button button-primary" data-action="activate">' . __( 'Activate Ocean Extra', 'oceanwp' ) . '</button>
        </div>';
		} elseif ( $status['status'] == 'uninstalled' ) {
			$actions_html = '<div class="notice-actions">
        <button type="button" class="button button-primary" data-action="install_activate">' . __( 'Install & Activate Ocean Extra', 'oceanwp' ) . '</button>
        </div>';
		}
		wp_send_json_success(
			$actions_html
		);
	}
);


add_action(
	'wp_ajax_oceanwp_panel_notice_button_click',
	function () {

		check_ajax_referer('oceanwp_panel_notice_nonce');

		if ( ! current_user_can( 'activate_plugins' ) ) {
			return;
		}

		$manager = new Oceanwp_Plugin_Manager();
		$status  = $manager->get_ocean_extra_status();

		if ( $status['status'] === 'active' ) {
			wp_send_json_success(
				array(
					'status'    => 'active',
					'pluginUrl' => admin_url( 'admin.php?page=oceanwp' ),
				)
			);
		}

		if ( $status['status'] === 'uninstalled' ) {
			$manager->download_and_install( $status['slug'] );
			$manager->plugin_activation( $status['slug'] );

			wp_send_json_success(
				array(
					'status'    => 'active',
					'pluginUrl' => admin_url( 'admin.php?page=oceanwp' ),
				)
			);
		}

		if ( $status['status'] === 'installed' ) {
			$manager->plugin_activation( $status['slug'] );

			wp_send_json_success(
				array(
					'status'    => 'active',
					'pluginUrl' => admin_url( 'admin.php?page=oceanwp' ),
				)
			);
		}

		wp_die();
	}
);