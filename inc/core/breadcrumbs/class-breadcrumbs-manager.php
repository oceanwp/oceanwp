<?php
/**
 * OceanWP Breadcrumbs Manager
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class OceanWP_Breadcrumbs_Manager {

	/**
	 * Instance.
	 *
	 * @var OceanWP_Breadcrumbs_Manager
	 */
	private static $instance;

	/**
	 * Cached crumbs.
	 *
	 * @var array
	 */
	private $cached_crumbs = null;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->includes();
	}

	/**
	 * Get instance.
	 *
	 * @return OceanWP_Breadcrumbs_Manager
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Include required files.
	 */
	private function includes() {
		$dir = OCEANWP_THEME_DIR . '/inc/core/breadcrumbs/';
		
		require_once $dir . 'class-breadcrumbs-crumb.php';
		require_once $dir . 'class-breadcrumbs-renderer.php';
		require_once $dir . 'class-breadcrumbs-compatibility.php';
		require_once $dir . 'abstract-breadcrumbs-provider.php';
		
		// Providers
		require_once $dir . 'providers/class-breadcrumbs-singular.php';
		require_once $dir . 'providers/class-breadcrumbs-simple.php';
		require_once $dir . 'providers/class-breadcrumbs-woo.php';
	}

	/**
	 * Display the breadcrumbs.
	 *
	 * @param array $args Arguments.
	 * @return string
	 */
	public function get_breadcrumbs( $args = array() ) {
		// Return if breadcrumbs are disabled or on front page (unless show_on_front is true)
		if ( function_exists( 'oceanwp_has_breadcrumbs' ) && ! oceanwp_has_breadcrumbs() ) {
			return '';
		}

		if ( is_front_page() && empty( $args['show_on_front'] ) ) {
			return '';
		}

		$external = OceanWP_Breadcrumbs_Compatibility::instance()->get_external_breadcrumbs();
		if ( ! is_null( $external ) ) {
			return $external;
		}

		$defaults = array(
			'container'     => 'nav',
			'before'        => '',
			'after'         => '',
			'show_on_front' => false,
			'network'       => false,
			'show_title'    => get_theme_mod( 'ocean_breadcrumb_show_title', true ),
			'labels'        => array(),
			'post_taxonomy' => array(),
			'echo'          => true,
			'schema'        => get_theme_mod( 'ocean_breadcrumb_schema', true ),
		);

		$args = apply_filters( 'oceanwp_breadcrumb_trail_args', wp_parse_args( $args, $defaults ) );
		
		// Use cache if available
		if ( ! is_null( $this->cached_crumbs ) ) {
			$crumbs = $this->cached_crumbs;
		} else {
			// Set labels
			$args['labels'] = $this->get_labels( $args['labels'] );

			// Determine Provider
			$provider = $this->determine_provider( $args );
			if ( ! $provider ) {
				return '';
			}

			$crumbs = $provider->get_items();

			// Add home crumbs as prefix
			$home_crumbs = $this->get_home_crumbs( $args );
			$crumbs = array_merge( $home_crumbs, $crumbs );

			// Final filter for items
			$crumbs = apply_filters( 'oceanwp_breadcrumb_trail_items', $crumbs, $args );
			
			// Fill cache
			$this->cached_crumbs = $crumbs;
		}

		$renderer = new OceanWP_Breadcrumbs_Renderer( $crumbs, $args );
		return $renderer->render();
	}

	/**
	 * Determine which provider to use.
	 */
	private function determine_provider( $args ) {
		$provider_class = '';

		if ( function_exists( 'is_woocommerce' ) && is_woocommerce() ) {
			$provider_class = 'OceanWP_Breadcrumbs_WooCommerce_Provider';
		} elseif ( is_singular() ) {
			$provider_class = 'OceanWP_Breadcrumbs_Singular_Provider';
		} elseif ( is_search() ) {
			$provider_class = 'OceanWP_Breadcrumbs_Search_Provider';
		} elseif ( is_404() ) {
			$provider_class = 'OceanWP_Breadcrumbs_404_Provider';
		} elseif ( is_archive() ) {
			$provider_class = 'OceanWP_Breadcrumbs_Archive_Provider';
		}

		$provider_class = apply_filters( 'oceanwp_breadcrumbs_provider_class', $provider_class, $args );

		if ( ! empty( $provider_class ) && class_exists( $provider_class ) ) {
			return new $provider_class( $args );
		}

		return null;
	}

	/**
	 * Get labels.
	 */
	private function get_labels( $custom_labels ) {
		$defaults = array(
			'aria_label'     => esc_attr_x( 'Breadcrumbs', 'breadcrumbs aria label', 'oceanwp' ),
			'home'           => get_theme_mod( 'ocean_breadcrumb_translation_home', esc_html__( 'Home', 'oceanwp' ) ),
			'error_404'      => get_theme_mod( 'ocean_breadcrumb_translation_error', esc_html__( '404 Not Found', 'oceanwp' ) ),
			'archives'       => esc_html__( 'Archives', 'oceanwp' ),
			'search'         => get_theme_mod( 'ocean_breadcrumb_translation_search', esc_html__( 'Search results for', 'oceanwp' ) ),
			'paged'          => esc_html__( 'Page %s', 'oceanwp' ),
		);

		return apply_filters( 'breadcrumb_trail_labels', wp_parse_args( $custom_labels, $defaults ) );
	}

	/**
	 * Get home crumbs.
	 */
	private function get_home_crumbs( $args ) {
		$home_crumbs = array();
		
		$setting = get_theme_mod( 'ocean_breadcrumb_home_item', 'icon' );
		$label   = $args['labels']['home'];
		$icon    = '';

		if ( 'icon' === $setting || is_customize_preview() ) {
			$icon = function_exists( 'oceanwp_icon' ) ? oceanwp_icon( 'home', false ) : '';
		}

		if ( 'icon' === $setting && ! is_customize_preview() ) {
			$label = $icon;
		} elseif ( is_customize_preview() ) {
			$text_class = ( 'icon' === $setting ) ? ' has-icon' : '';
			$label = $icon . '<span class="breadcrumb-home' . $text_class . '">' . $label . '</span>';
		}

		// Network home
		if ( is_multisite() && ! is_main_site() && ! empty( $args['network'] ) ) {
			$home_crumbs[] = new OceanWP_Breadcrumbs_Crumb( $label, network_home_url() );
		}

		// Site home
		$home_crumbs[] = new OceanWP_Breadcrumbs_Crumb( $label, home_url() );

		return $home_crumbs;
	}
}
