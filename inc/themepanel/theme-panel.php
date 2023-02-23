<?php
/**
 * This class handles init of Theme Panel.
 *
 * @since 1.0.0
 *
 * @package OceanWP\Framework\Admin\Theme_Panel
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Init class.
 *
 * @since 1.0.0
 *
 * @package OceanWP\Framework\Admin\Theme_Panel
 */
final class OceanWP_Theme_Panel {

	/**
	 * The single instance of the class.
	 *
	 * @since 1.0.0
	 *
	 * @var OceanWP_Theme_Panel
	 */
	protected static $instance = null;

	/**
	 * Returns OceanWP_Theme_Panel instance.
	 *
	 * @since 1.0.0
	 *
	 * @return OceanWP_Theme_Panel
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->define_constants();

		$this->init_general_part();

		if ( $this->is_theme_panel() || wp_doing_ajax() ) {
			$this->init();
		}

		add_action( 'wp_ajax_oceanwp_cp_fonts_clear', array( $this, 'clear_fonts' ) );
		add_filter( 'oceanwp_theme_panel_panel_top_header', array( $this, 'panel_top_header' ) );
		add_filter( 'oceanwp_tp_sidebar_warnings', array( $this, 'maybe_has_plugin_updates_warning' ) );
		add_filter( 'oceanwp_theme_panel_sections', array( $this, 'control_theme_panel_sections' ), 9 );
	}

	/**
	 * Define constants.
	 *
	 * @since 1.0.0
	 */
	public function define_constants() {
		if ( ! defined( 'OCEANWP_THEME_PANEL_DIR' ) ) {
			define( 'OCEANWP_THEME_PANEL_DIR', OCEANWP_THEME_DIR . '/inc/themepanel' );
		}

		if ( ! defined( 'OCEANWP_THEME_PANEL_URI' ) ) {
			define( 'OCEANWP_THEME_PANEL_URI', OCEANWP_THEME_URI . '/inc/themepanel' );
		}
	}

	/**
	 * Safely define a constant.
	 *
	 * @since 1.0.4
	 *
	 * @param string $name Constant name.
	 * @param mixed  $value Define value.
	 */
	public function define( $name, $value ) {
		if ( ! defined( $name ) ) {
			define( $name, $value );
		}
	}

	/**
	 * Init control panel.
	 *
	 * Only init the control panel when the visiting page is control panel or currently doing ajax.
	 *
	 * @since 1.0.0
	 */
	public function init() {

		require_once OCEANWP_THEME_PANEL_DIR . '/includes/js-messages.php';
		require_once OCEANWP_THEME_PANEL_DIR . '/includes/plugins-compatibility.php';
		require_once OCEANWP_THEME_PANEL_DIR . '/includes/classes/class-helpers.php';

		/**
		 * Hook for control panel init.
		 *
		 * @since 1.3.0
		 */
		do_action( 'oceanwp_theme_panel_init' );

		add_action( 'wp_ajax_oceanwp_cp_load_pane_action', array( $this, 'load_theme_panel_pane' ) );
		add_action( 'wp_ajax_oceanwp_cp_load_sidebar_warnings_action', array( $this, 'load_sidebar_warnings' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );
	}

	/**
	 * Init code on full dashboard part
	 */
	function init_general_part() {
		add_action( 'wp_ajax_oceanwp_cp_load_awaiting_mods_action', array( $this, 'load_awaiting_mods' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_assets' ) );
	}

	/**
	 * Check if its control panel is currently viewing page.
	 *
	 * @since 1.0.0
	 *
	 * @return boolean Test currently viewing page.
	 */
	public function is_theme_panel() {
		return (bool) isset( $_GET['page'] ) && $_GET['page'] === 'oceanwp';
	}

	/**
	 * Load control panel styles and scripts.
	 */
	public function enqueue_assets() {

		// Google Fonts.
		wp_enqueue_style( 'oceanwp-tp-googlefonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap', array(), null );
		// Enqueue styles.
		wp_enqueue_style( 'oceanwp-new-theme-panel', OCEANWP_THEME_PANEL_URI . '/assets/css/theme-panel.min.css', array(), OCEANWP_THEME_VERSION );

		// Enqueue scripts.
		wp_enqueue_script( 'oceanwp-changelog-markdown', OCEANWP_THEME_PANEL_URI . '/assets/js/marked.min.js', array(), OCEANWP_THEME_VERSION, true );
		wp_enqueue_script( 'oceanwp-new-theme-panel', OCEANWP_THEME_PANEL_URI . '/assets/js/theme-panel.min.js', array( 'jquery', 'wp-util', 'updates' ), OCEANWP_THEME_VERSION, true );

		// Localize scripts.
		$sections = $this->get_sections();

		// Get initial section.
		$initial_section = reset( $sections );

		if ( $initial_section ) {
			$initial_section = $initial_section['href'];
		}

		wp_localize_script( 'oceanwp-new-theme-panel', 'oceanwp_cp_textdomain', oceanwp_adminpanel_textdomain() );
		wp_localize_script(
			'oceanwp-new-theme-panel',
			'oceanwpThemePanel',
			array(
				'initialSection' => $initial_section,
				'nonce'          => wp_create_nonce( 'oceanwp_theme_panel' ),
			)
		);
	}

	function enqueue_admin_assets() {
		wp_enqueue_script( 'oceanwp-admin-theme-panel', OCEANWP_THEME_PANEL_URI . '/assets/js/admin.js', array( 'jquery', 'wp-util' ), OCEANWP_THEME_VERSION, true );
	}

	/**
	 * Load the pane by the slug name.
	 *
	 * This function is called via admin-ajax.php.
	 */
	public function load_theme_panel_pane() {
		$slug = esc_attr( $_POST['slug'] );
		ob_start();
		$this->print_pane( $slug );
		$pane_html = ob_get_clean();
		$pane_html = '<div class="oceanwp-tp-preloader"><div class="oceanwp-tp-loader"></div></div>' . $pane_html;
		wp_send_json_success( $pane_html );
		wp_die();
	}

	/**
	 * Load Sidebar Warnings.
	 *
	 * @return void
	 */
	public function load_sidebar_warnings() {
		$warnings = array();

		if( ! empty( get_theme_update_available( wp_get_theme() ) ) ) {
			$warnings['home'] = __( 'New theme version is available', 'oceanwp' );
		}

		$warnings = apply_filters( 'oceanwp_tp_sidebar_warnings', $warnings );

		if ( empty( $warnings ) ) {
			wp_send_json_error();
		} else {
			$warning_icon_text = esc_attr__( 'Warning icon', 'oceanwp' );
			$warnings          = array_map(
				function( $message ) use ( $warning_icon_text ) {
					return '<img class="oceanwp-tp-warning-badge" src="' . esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/warning-badge.svg' ) . '" title="' . $message . '" alt="' . $warning_icon_text . '" width="10" height="10"/>';
				},
				$warnings
			);
			wp_send_json_success( $warnings );
		}
	}

	/**
	 * Load Awaiting Modifications.
	 *
	 * @return void
	 */
	public function load_awaiting_mods() {
		$warnings = array();

		if( ! empty( get_theme_update_available( wp_get_theme() ) ) ) {
			$warnings['home'] = __( 'New theme version is available', 'oceanwp' );
		}

		$warnings = apply_filters( 'oceanwp_tp_sidebar_warnings', $warnings );

		if ( empty( $warnings ) ) {
			wp_send_json_error();
		} else {
			wp_send_json_success( [
				'count' => count( $warnings )
			] );
		}
	}

	/**
	 * Maybe has plugin updates warning.
	 *
	 * @param  mixed $warnings
	 * @return void
	 */
	public function maybe_has_plugin_updates_warning( $warnings ) {
		$has_updates = false;

		$recommended_plugins            = oceanwp_recommended_plugins();
		$pro_plugins                    = oceanwp_pro_plugins();
		$sidebar_plugins                = oceanwp_sidebar_plugins();
		$plugins_compatibility_versions = oceanwp_plugins_compatibility();

		foreach ( $recommended_plugins as $recommended_plugin_slug => $recommended_plugin_data ) {
			$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( $recommended_plugin_slug );
			$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );
			if ( $is_installed ) {
				$current_plugin_version = oceanwp_theme_panel()->get_current_plugin_version( $real_plugin_path );
				if ( ! empty( $current_plugin_version ) && ! empty( $plugins_compatibility_versions[ $recommended_plugin_slug ] ) && version_compare( $current_plugin_version, $plugins_compatibility_versions[ $recommended_plugin_slug ], '<' ) ) {
					$has_updates = true;
				}
			}
		}

		foreach ( $pro_plugins as $pro_plugin_slug => $pro_plugin_data ) {
			$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( $pro_plugin_slug );
			$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );
			if ( $is_installed ) {
				$current_plugin_version = oceanwp_theme_panel()->get_current_plugin_version( $real_plugin_path );
				if ( ! empty( $current_plugin_version ) && ! empty( $plugins_compatibility_versions[ $pro_plugin_slug ] ) && version_compare( $current_plugin_version, $plugins_compatibility_versions[ $pro_plugin_slug ], '<' ) ) {
					$has_updates = true;
				}
			}
		}

		foreach ( $sidebar_plugins as $sidebar_plugin_slug ) {
			$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( $sidebar_plugin_slug );
			$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );

			if ( $sidebar_plugin_slug == 'ocean-elementor-widgets' || $sidebar_plugin_slug == 'ocean-gutenberg-blocks' || $sidebar_plugin_slug == 'ocean-white-label' ) {
				$is_activated = false;
				$method_name = str_replace('-','_', $sidebar_plugin_slug) . '_activated';
				if( $is_installed && method_exists( 'OceanWP_Theme_Panel', $method_name ) ) {
					$is_activated = $this->$method_name();
				}

				if ( ! $is_installed || ! $is_activated || ! $this->extra_installed() ) {
					continue;
				}
			}

			if ( $is_installed ) {
				$current_plugin_version = oceanwp_theme_panel()->get_current_plugin_version( $real_plugin_path );
				if ( ! empty( $current_plugin_version ) && ! empty( $plugins_compatibility_versions[ $sidebar_plugin_slug ] ) && version_compare( $current_plugin_version, $plugins_compatibility_versions[ $sidebar_plugin_slug ], '<' ) ) {
					if ( $sidebar_plugin_slug == 'ocean-elementor-widgets' ) {
						$warnings['elementor-widgets'] = __( 'You should update plugin Ocean Elementor Widgets to use new features', 'oceanwp' );
					}
					if ( $sidebar_plugin_slug == 'ocean-gutenberg-blocks' ) {
						$warnings['gutenberg-blocks'] = __( 'You should update plugin Ocean Gutenberg Blocks to use new features', 'oceanwp' );
					}
					if ( $sidebar_plugin_slug == 'ocean-white-label' ) {
						$warnings['white-label'] = __( 'You should update plugin Ocean White Label to use new features', 'oceanwp' );
					}
				}
			}
		}

		if ( $has_updates ) {
			$warnings['useful-plugins'] = __( 'Available new versions some plugins', 'oceanwp' );
		}

		return $warnings;
	}

	/**
	 * Print pane HTML by slug.
	 *
	 * @param string $slug Pane ID.
	 */
	public function print_pane( $slug = '' ) {
		$sections = $this->get_sections();

		$default = reset( $sections );

		if ( empty( $slug ) ) {
			$slug = $default['href'];
		}

		$slug = basename( $slug );

		$file = OCEANWP_THEME_PANEL_DIR . "/views/panes/{$slug}.php";

		// String pattern replace.
		$slug = str_replace( '-', '_', $slug );

		// Get file location.
		$file = apply_filters( "oceanwp_theme_panel_pane_{$slug}", $file );

		if ( file_exists( $file ) ) {
			include_once $file;
			return;
		}
	}

	/**
	 * Panel Plugin Upgrade Message.
	 *
	 * @param  mixed $plugin_slug
	 * @return void
	 */
	public function panel_plugin_upgrade_message( $plugin_slug ) {
		$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( $plugin_slug );
		$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );

		$is_activated = false;
		$method_name = str_replace('-','_', $plugin_slug) . '_activated';
		if( $is_installed && method_exists( 'OceanWP_Theme_Panel', $method_name ) ) {
			$is_activated = $this->$method_name();
		}

		$plugins_compatibility_versions = oceanwp_plugins_compatibility();

		if ( $is_installed && $is_activated && $this->extra_installed() ) {
			$current_plugin_version = oceanwp_theme_panel()->get_current_plugin_version( $real_plugin_path );
			if ( ! empty( $current_plugin_version ) && ! empty( $plugins_compatibility_versions[ $plugin_slug ] ) && version_compare( $current_plugin_version, $plugins_compatibility_versions[ $plugin_slug ], '<' ) ) {

				$file = OCEANWP_THEME_PANEL_DIR . '/views/panes/plugin-upgrade-info.php';
				if ( file_exists( $file ) ) {
					$panel_args = array(
						'plugin_name' => $this->get_current_plugin_name( $real_plugin_path ),
					);
					include_once $file;
					return;
				}
			}
		}
	}

	/**
	 * Get registered sections.
	 *
	 * @return array Registered sections.
	 */
	public function get_sections() {
		$sections = array(
			'home'              => array(
				'title' => __( 'Home', 'oceanwp' ),
				'href'  => 'home',
				'order' => 10,
			),
			'customizer'        => array(
				'title' => __( 'Customizer', 'oceanwp' ),
				'href'  => 'customizer',
				'order' => 20,
			),
			'install-demos'     => array(
				'title' => __( 'Install Demos', 'oceanwp' ),
				'href'  => 'install-demos',
				'order' => 30,
			),
			'ocean-images'      => array(
				'title' => __( 'Ocean Images', 'oceanwp' ),
				'href'  => 'ocean-images',
				'order' => 40,
			),
			'integration'       => array(
				'title' => __( 'Integration', 'oceanwp' ),
				'href'  => 'integration',
				'order' => 50,
			),
			'useful-plugins'    => array(
				'title' => __( 'Useful Plugins', 'oceanwp' ),
				'href'  => 'useful-plugins',
				'order' => 60,
			),
			'changelog'         => array(
				'title' => __( 'Changelog', 'oceanwp' ),
				'href'  => 'changelog',
				'order' => 70,
			),
			'free_vs_pro'       => array(
				'title' => __( 'Free vs Pro', 'oceanwp' ),
				'href'  => 'free-vs-pro',
				'order' => 80,
			),
			'elementor-widgets' => array(
				'title' => __( 'Elementor Widgets', 'oceanwp' ),
				'href'  => 'elementor-widgets',
				'order' => 90,
			),
			'elementor-library' => array(
				'title' => __( 'Elementor Library', 'oceanwp' ),
				'href'  => 'elementor-library',
				'order' => 91,
			),
			'gutenberg-blocks'  => array(
				'title' => __( 'Gutenberg Blocks', 'oceanwp' ),
				'href'  => 'gutenberg-blocks',
				'order' => 100,
			),
			'extra-settings'    => array(
				'title' => __( 'Extra Settings', 'oceanwp' ),
				'href'  => 'extra-settings',
				'order' => 110,
			),
			'admin-settings'              => array(
				'title' => __( 'Admin Settings', 'oceanwp' ),
				'href'  => 'admin-settings',
				'order' => 111,
			),
			'white-label' => array(
				'title' => __( 'White Label', 'oceanwp' ),
				'href'  => 'white-label',
				'order' => 115,
			),
			'system-info'       => array(
				'title' => __( 'System Info', 'oceanwp' ),
				'href'  => 'system-info',
				'order' => 120,
			),
			'help'              => array(
				'title' => __( 'Help', 'oceanwp' ),
				'href'  => 'help',
				'order' => 130,
			),
		);

		$sections = apply_filters( 'oceanwp_theme_panel_sections', $sections );

		// Sort based on orders.
		uasort(
			$sections,
			function( $first, $second ) {
				return $first['order'] <=> $second['order'];
			}
		);

		return $sections;
	}

	/**
	 * Theme Panel Sections
	 *
	 * @param  mixed $sections
	 * @return void
	 */
	public function control_theme_panel_sections( $sections ) {
		$white_label_need_hide = get_option( 'oceanwp_hide_box', false );
		if( $white_label_need_hide && isset( $sections['white-label'] ) ) {
			unset( $sections['white-label'] );
		}

		$changelog_need_hide = get_option( 'oceanwp_hide_changelog', false );
		if( $changelog_need_hide && isset( $sections['changelog'] ) ) {
			unset( $sections['changelog'] );
		}

		$help_section_need_hide = get_option( 'oceanwp_hide_help_section', false );
		if( $help_section_need_hide && isset( $sections['help'] ) ) {
			unset( $sections['help'] );
		}

		$need_to_upgrade = $this->need_to_upgrade();
		if( ! $need_to_upgrade && isset( $sections['free_vs_pro'] ) ) {
			unset( $sections['free_vs_pro'] );
		}

		return $sections;
	}

	/**
	 * Include Panel Top Header
	 *
	 * @return $string
	 */
	public function panel_top_header() {
		return OCEANWP_THEME_DIR . '/inc/themepanel/views/layout/top-bar.php';
	}

	/**
	 * Banner upgrade link
	 *
	 * @return $string
	 */
	public function banner_upgrade_link() {
		return 'https://oceanwp.org/core-extensions-bundle/';
	}

	/**
	 * Install Ocean Extra Proposal
	 *
	 * @return $string
	 */
	public function please_install_oe_text_link() {
		return sprintf(
			esc_html__( '%1$sInstall free Ocean Extra recommended plugin%2$s to unlock this feature.', 'oceanwp' ),
			'<a href="https://youtu.be/kqHNgUPWMTY" target="_blank">',
			'</a>'
		);
	}

	/**
	 * Upgrade to plans Proposal
	 *
	 * @return $string
	 */
	public function upgrade_bundle_plan_text_link() {
		return sprintf(
			esc_html__( '%1$sUpgrade to the Business or Agency Ocean Core Extensions Bundle plans%2$s to unlock this feature.', 'oceanwp' ),
			'<a href="https://oceanwp.org/core-extensions-bundle/" target="_blank">',
			'</a>'
		);
	}

	/**
	 * Upgrade to Ocean Core Extensions Bundle
	 *
	 * @return $string
	 */
	public function upgrade_core_extensions_bundle_text_link() {
		return sprintf(
			esc_html__( '%1$sUpgrade to the Ocean Core Extensions Bundle%2$s to unlock this feature.', 'oceanwp' ),
			'<a href="https://oceanwp.org/core-extensions-bundle/" target="_blank">',
			'</a>'
		);
	}
	/**
	 * Install Ocean Extra and Upgrade to Ocean Core Extensions Bundle
	 *
	 * @return $string
	 */
	public function install_oe_upgrade_core_extensions_bundle_text_link() {
		return sprintf(
			esc_html__( '%1$s or %2$s', 'oceanwp' ),
			sprintf(
				'<a href="%s" target="_blank">%s</a>',
				'https://youtu.be/kqHNgUPWMTY',
				esc_html__( 'Install free Ocean Extra recommended plugin', 'oceanwp' )
				),
			sprintf(
				'<a href="%s" target="_blank">%s</a>',
				'https://oceanwp.org/core-extensions-bundle/',
				esc_html__( 'upgrade to the Ocean Core Extensions Bundle', 'oceanwp' )
				)
		);
	}

	/**
	 * Check if Ocean Extra plugin is active.
	 *
	 * @return bool
	 */

	public function extra_installed() {
		$retval = class_exists( 'Ocean_Extra' );
		return $retval;
	}

	public function ocean_elementor_widgets_activated() {
		$retval = class_exists( 'Ocean_Elementor_Widgets' );
		return $retval;
	}

	public function ocean_gutenberg_blocks_activated() {
		$retval = class_exists( 'Ocean_Gutenberg_Blocks' );
		return $retval;
	}

	public function ocean_pro_demos_activated() {
		$retval = class_exists( 'Ocean_Pro_Demos' );
		return $retval;
	}

	public function ocean_white_label_activated() {
		$retval = class_exists( 'Ocean_White_Label' );
		return $retval;
	}

	/**
	 * Check AJAX Access.
	 *
	 * @param  mixed $nonce_value
	 * @param  mixed $nonce_action
	 * @param  mixed $response_type
	 * @return void
	 */
	public static function check_ajax_access( $nonce_value, $nonce_action, $response_type = 'json' ) {
		$response_message = '';
		if ( empty( $nonce_value ) || ! wp_verify_nonce( $nonce_value, $nonce_action ) ) {
			$response_message = esc_html__( 'Something went wrong', 'oceanwp' );
		}
		if ( ! current_user_can( 'administrator' ) ) {
			$response_message = esc_html__( 'You do not have sufficient privileges for this action.', 'oceanwp' );
		}

		if ( ! empty( $response_message ) ) {
			if ( $response_type == 'json' ) {
				wp_send_json_error( array( 'message' => $response_message ) );
			} else {
				http_response_code( 404 );
				echo $response_message;
				die;
			}
		}
	}

	/**
	 * Check if user need to upgrade.
	 *
	 * @return bool
	 */

	public function need_to_upgrade() {
		global $owp_fs;
		if ( ! empty( $owp_fs ) ) {
			$retval = $owp_fs->is_pricing_page_visible();
		} else {
			$retval = false;
		}
		if ( ! $this->extra_installed() ) {
			$retval = true;
		}
		return $retval;
	}

	/**
	 * Get WP plugins information from WP.org API.
	 *
	 * @param string $slugs Plugin slugs.
	 */
	public function get_wp_plugins_info( $slugs = array() ) {
		if ( empty( $slugs ) ) {
			return array();
		}

		$wp_api = add_query_arg(
			array(
				'action'  => 'plugin_information',
				'request' => array(
					'slugs'  => $slugs,
					'fields' => array(
						'icons',
						'short_description',
					),
				),
			),
			'https://api.wordpress.org/plugins/info/1.2'
		);

		$plugins_info = json_decode( wp_remote_retrieve_body( wp_remote_get( $wp_api ) ), true );

		if ( isset( $plugins_info['error'] ) || empty( $plugins_info ) ) {
			return array();
		}

		return $plugins_info;
	}

	/**
	 * Get plugin basename by plugin slug.
	 * Works only for installed plugins.
	 *
	 * @param string $plugin_slug
	 */
	public function find_plugin_path( $plugin_slug = '' ) {

		$plugins = get_plugins();
		foreach ( $plugins as $plugin_address => $plugin_data ) {

			// Extract slug from address
			if ( strlen( $plugin_address ) == basename( $plugin_address ) ) {
				$slug = strtolower( str_replace( '.php', '', $plugin_address ) );
			} else {
				$slug = strtolower( str_replace( '/' . basename( $plugin_address ), '', $plugin_address ) );
			}
			// Check if slug exists
			if ( strtolower( $plugin_slug ) == $slug ) {
				return $plugin_address;
			}
		}

		return false;
	}

	/**
	 * Check if Plugin is installed.
	 *
	 * @param  mixed $plugin_slug
	 * @return void
	 */
	function check_plugin_installed( $plugin_slug ) {
		$installed_plugins = get_plugins();

		if ( ! empty( $plugin_slug ) ) {
			$retval = array_key_exists( $plugin_slug, $installed_plugins ) || in_array( $plugin_slug, $installed_plugins, true );
		} else {
			$retval = false;
		}

		return $retval;
	}

	/**
	 * Get plugin version
	 */
	function get_current_plugin_version( $plugin_slug ) {
		$plugin_data         = get_plugin_data( WP_PLUGIN_DIR . '/' . $plugin_slug );
		$plugin_data_version = ! empty( $plugin_data['Version'] ) ? $plugin_data['Version'] : false;
		return $plugin_data_version;
	}

	/**
	 * Get plugin name
	 */
	function get_current_plugin_name( $plugin_slug ) {
		$plugin_data      = get_plugin_data( WP_PLUGIN_DIR . '/' . $plugin_slug );
		$plugin_data_name = ! empty( $plugin_data['Name'] ) ? $plugin_data['Name'] : false;
		return $plugin_data_name;
	}

	public function clear_fonts () {
		self::check_ajax_access( $_POST['nonce'], 'oceanwp_theme_panel' );

		$upload      = wp_upload_dir();
		$uploads_fonts_dir = 'oceanwp-webfonts';
		$uploads_css_dir = 'oceanwp-webfonts-css';

		if ( ! file_exists( trailingslashit( $upload['basedir'] ) . $uploads_fonts_dir ) ) {
			wp_send_json_error( array( 'message' => esc_html__( 'Fonts folder does not exist', 'oceanwp' ) ) );
		}

		if ( ! file_exists( trailingslashit( $upload['basedir'] ) . $uploads_css_dir ) ) {
			wp_send_json_error( array( 'message' => esc_html__( 'CSS folder does not exist', 'oceanwp' ) ) );
		}

		try {
			$files_fonts = glob(trailingslashit( $upload['basedir'] ) . $uploads_fonts_dir."/*");
			if (count($files_fonts) > 0) {
				foreach ($files_fonts as $file) {
					if (file_exists($file)) {
						unlink($file);
					}
				}
			}

			$files_css = glob(trailingslashit( $upload['basedir'] ) . $uploads_css_dir."/*");
			if (count($files_css) > 0) {
				foreach ($files_css as $file) {
					if (file_exists($file)) {
						unlink($file);
					}
				}
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'message' => esc_html__( 'Something went wrong', 'oceanwp' ) ) );
		}
		wp_send_json_success( array( 'message' => esc_html__( 'Data was cleared', 'oceanwp' ) ) );
	}
}

/**
 * Create single instance and globalize.
 *
 * @return OceanWP_Theme_Panel
 */
function oceanwp_theme_panel() {
	return OceanWP_Theme_Panel::get_instance();
}

// Initialize control panel.
oceanwp_theme_panel();
