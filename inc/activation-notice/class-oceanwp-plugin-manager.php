<?php
/**
 * OceanWP Plugin Manager
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Oceanwp_Plugin_Manager' ) ) {

	class Oceanwp_Plugin_Manager {


		public function __construct() {         }

		public function get_ocean_extra_status() {
			$free_status = $this->get_plugin_status( 'ocean-extra' );

			return array(
				'slug'   => 'ocean-extra',
				'status' => $free_status,
			);
		}

		public function get_plugin_status( $slug ) {
			$full_name = $this->is_plugin_installed( $slug );

			if ( ! $full_name ) {
				return 'uninstalled';
			}

			if ( ! $this->is_plugin_active( $full_name ) ) {
				return 'installed';
			}

			return 'active';
		}

		public function is_plugin_installed( $slug ) {
			$installed_plugins = $this->get_installed_plugins();

			foreach ( $installed_plugins as $plugin => $data ) {
				$parts             = explode( '/', $plugin );
				$plugin_first_part = $parts[0];

				if ( strtolower( $slug ) === strtolower( $plugin_first_part ) ) {
					return $plugin;
				}
			}

			return false;
		}


		public function is_plugin_active( $plugin ) {
			if ( ! function_exists( 'activate_plugin' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			return is_plugin_active( $plugin );
		}

		public function get_installed_plugins( $plugin_folder = '' ) {
			// https://github.com/WordPress/WordPress/blob/ba92ed7615dec870a363bc99d6668faedfa77415/wp-admin/includes/plugin.php#L2254
			wp_cache_delete( 'plugins', 'plugins' );

			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			return get_plugins( $plugin_folder );
		}

		protected function require_wp_headers() {
			require_once ABSPATH . 'wp-admin/includes/file.php';

			if ( ! class_exists( 'Plugin_Upgrader', false ) ) {
				require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			}

			if ( ! class_exists( 'Oceanwp_Upgrader_Skin', false ) ) {
				require_once dirname( __FILE__ ) . '/class-oceanwp-upgrader-skin.php';
			}
		}

		public function get_plugins_api( $slug ) {
			static $api = array(); // Cache received responses.

			if ( ! isset( $api[ $slug ] ) ) {
				if ( ! function_exists( 'plugins_api' ) ) {
					require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
				}

				require_once dirname( __FILE__ ) . '/class-oceanwp-upgrader-skin.php';

				$response = plugins_api(
					'plugin_information',
					array(
						'slug'   => $slug,
						'fields' => array(
							'sections' => false,
						),
					)
				);

				$api[ $slug ] = false;

				if ( is_wp_error( $response ) ) {
				} else {
					$api[ $slug ] = $response;
				}
			}

			return $api[ $slug ];
		}

		public function download_and_install( $slug ) {
			$this->require_wp_headers();

			if ( $this->is_plugin_installed( $slug ) ) {
				return true;
			}

			$api = $this->get_plugins_api( $slug );

			if ( ! isset( $api->download_link ) ) {
				return true;
			}

			// Prep variables for Plugin_Installer_Skin class.
			$source = $api->download_link;

			if ( ! $source ) {
				return false;
			}

			$skin = new Oceanwp_Upgrader_Skin();

			// Create a new instance of Plugin_Upgrader.
			$upgrader = new Plugin_Upgrader( $skin );

			$res = $upgrader->fs_connect( array( WP_CONTENT_DIR, WP_PLUGIN_DIR ) );

			if ( ! $res ) {
				return false;
			}

			$upgrader->install( $source );
		}

		public function plugin_activation( $plugin ) {
			$full_name = $this->is_plugin_installed( $plugin );

			if ( $full_name ) {
				if ( ! $this->is_plugin_active( $full_name ) ) {
					return activate_plugin( $full_name, '', false, true );
				}
			}

			return new WP_Error();
		}
	}
}
