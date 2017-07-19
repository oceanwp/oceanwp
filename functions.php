<?php
/**
 * Theme functions and definitions.
 *
 * Sets up the theme and provides some helper functions
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development
 * and http://codex.wordpress.org/Child_Themes), you can override certain
 * functions (those wrapped in a function_exists() call) by defining them first
 * in your child theme's functions.php file. The child theme's functions.php
 * file is included before the parent theme's file, so the child theme
 * functions would be used.
 *
 *
 * For more information on hooks, actions, and filters,
 * see http://codex.wordpress.org/Plugin_API
 *
 * @package OceanWP WordPress theme
 */

// Core Constants
define( 'OCEANWP_THEME_DIR', get_template_directory() );
define( 'OCEANWP_THEME_URI', get_template_directory_uri() );

class OCEANWP_Theme_Class {

	/**
	 * Main Theme Class Constructor
	 *
	 * @since   1.0.0
	 */
	public function __construct() {

		// Define constants
		add_action( 'after_setup_theme', array( 'OCEANWP_Theme_Class', 'constants' ), 0 );

		// Load all core theme function files
		add_action( 'after_setup_theme', array( 'OCEANWP_Theme_Class', 'include_functions' ), 1 );

		// Load configuration classes
		add_action( 'after_setup_theme', array( 'OCEANWP_Theme_Class', 'configs' ), 3 );

		// Load framework classes
		add_action( 'after_setup_theme', array( 'OCEANWP_Theme_Class', 'classes' ), 4 );

		// Setup theme => add_theme_support, register_nav_menus, load_theme_textdomain, etc
		add_action( 'after_setup_theme', array( 'OCEANWP_Theme_Class', 'theme_setup' ), 10 );

		// register sidebar widget areas
		add_action( 'widgets_init', array( 'OCEANWP_Theme_Class', 'register_sidebars' ) );

		// Registers theme_mod strings into Polylang
		if ( class_exists( 'Polylang' ) ) {
			add_action( 'after_setup_theme', array( 'OCEANWP_Theme_Class', 'polylang_register_string' ) );
		}

		/** Admin only actions **/
		if ( is_admin() ) {

			// Load scripts in the WP admin
			add_action( 'admin_enqueue_scripts', array( 'OCEANWP_Theme_Class', 'admin_scripts' ) );

			// Outputs custom CSS for the admin
			add_action( 'admin_head', array( 'OCEANWP_Theme_Class', 'admin_inline_css' ) );

		/** Non Admin actions **/
		} else {

			// Load theme CSS
			add_action( 'wp_enqueue_scripts', array( 'OCEANWP_Theme_Class', 'theme_css' ) );

			// Load theme js
			add_action( 'wp_enqueue_scripts', array( 'OCEANWP_Theme_Class', 'theme_js' ) );

			// Add a pingback url auto-discovery header for singularly identifiable articles
			add_action( 'wp_head', array( 'OCEANWP_Theme_Class', 'pingback_header' ), 1 );

			// Add meta viewport tag to header
			add_action( 'wp_head', array( 'OCEANWP_Theme_Class', 'meta_viewport' ), 1 );

			// Add an X-UA-Compatible header
			add_filter( 'wp_headers', array( 'OCEANWP_Theme_Class', 'x_ua_compatible_headers' ) );

			// Loads html5 shiv script
			add_action( 'wp_head', array( 'OCEANWP_Theme_Class', 'html5_shiv' ) );

			// Outputs custom CSS to the head
			add_action( 'wp_head', array( 'OCEANWP_Theme_Class', 'custom_css' ), 9999 );

			// Minify the WP custom CSS because WordPress doesn't do it by default
			add_filter( 'wp_get_custom_css', array( 'OCEANWP_Theme_Class', 'minify_custom_css' ) );

			// Outputs custom JS to the footer
			add_action( 'wp_footer', array( 'OCEANWP_Theme_Class', 'custom_js' ), 9999 );

			// Alter tagcloud widget to display all tags with 1em font size
			add_filter( 'widget_tag_cloud_args', array( 'OCEANWP_Theme_Class', 'widget_tag_cloud_args' ) );

			// Alter WP categories widget to display count inside a span
			add_filter( 'wp_list_categories', array( 'OCEANWP_Theme_Class', 'wp_list_categories_args' ) );

			// Add a responsive wrapper to the WordPress oembed output
			add_filter( 'embed_oembed_html', array( 'OCEANWP_Theme_Class', 'add_responsive_wrap_to_oembeds' ), 99, 4 );

			// Adds classes the post class
			add_filter( 'post_class', array( 'OCEANWP_Theme_Class', 'post_class' ) );

			// Add schema markup to the authors post link
			add_filter( 'the_author_posts_link', array( 'OCEANWP_Theme_Class', 'the_author_posts_link' ) );

			// Remove the default lightbox script for the beaver builder plugin
			add_filter( 'fl_builder_override_lightbox', array( 'OCEANWP_Theme_Class', 'remove_bb_lightbox' ) );

		}

	}

	/**
	 * Define Constants
	 *
	 * @since   1.0.0
	 */
	public static function constants() {

		$version = self::theme_version();

		// Theme version
		define( 'OCEANWP_THEME_VERSION', $version );

		// Javascript and CSS Paths
		define( 'OCEANWP_JS_DIR_URI', OCEANWP_THEME_URI .'/assets/js/' );
		define( 'OCEANWP_CSS_DIR_URI', OCEANWP_THEME_URI .'/assets/css/' );

		// Include Paths
		define( 'OCEANWP_INC_DIR', OCEANWP_THEME_DIR .'/inc/' );
		define( 'OCEANWP_INC_DIR_URI', OCEANWP_THEME_URI .'/inc/' );

		// Check if plugins are active
		define( 'OCEAN_EXTRA_ACTIVE', class_exists( 'Ocean_Extra' ) );
		define( 'OCEANWP_WOOCOMMERCE_ACTIVE', class_exists( 'WooCommerce' ) );

	}

	/**
	 * Load all core theme function files
	 *
	 * @since 1.0.0
	 */
	public static function include_functions() {
		$dir = OCEANWP_INC_DIR;
		require_once ( $dir .'helpers.php' );
		require_once ( $dir .'deprecated.php' );
		require_once ( $dir .'excerpt.php' );
		require_once ( $dir .'customizer/controls/typography/webfonts.php' );
		require_once ( $dir .'walker/init.php' );
		require_once ( $dir .'walker/menu-walker.php' );
		require_once ( $dir .'third/class-beaver-themer.php' );
		require_once ( $dir .'third/class-lifter-lms.php' );
	}

	/**
	 * Configs for 3rd party plugins.
	 *
	 * @since 1.0.0
	 */
	public static function configs() {

		$dir = OCEANWP_INC_DIR;

		// WooCommerce
		if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {
			require_once ( $dir .'woocommerce/woocommerce-config.php' );
		}

	}

	/**
	 * Returns current theme version
	 *
	 * @since   1.0.0
	 */
	public static function theme_version() {

		// Get theme data
		$theme = wp_get_theme();

		// Return theme version
		return $theme->get( 'Version' );

	}

	/**
	 * Load theme classes
	 *
	 * @since   1.0.0
	 */
	public static function classes() {

		// Admin only classes
		if ( is_admin() ) {

			// Recommend plugins
			require_once( OCEANWP_INC_DIR .'plugins/class-tgm-plugin-activation.php' );
			require_once( OCEANWP_INC_DIR .'plugins/tgm-plugin-activation.php' );

		}

		// Front-end classes
		else {

			// Breadcrumbs class
			require_once( OCEANWP_INC_DIR .'breadcrumbs.php' );

		}

		// Customizer class
		require_once( OCEANWP_INC_DIR .'customizer/customizer.php' );

	}

	/**
	 * Theme Setup
	 *
	 * @since   1.0.0
	 */
	public static function theme_setup() {

		// Load text domain
		load_theme_textdomain( 'oceanwp', OCEANWP_THEME_DIR .'/languages' );

		// Get globals
		global $content_width;

		// Set content width based on theme's default design
		if ( ! isset( $content_width ) ) {
			$content_width = 1200;
		}

		// Register navigation menus
		register_nav_menus( array(
			'topbar_menu'     => esc_html__( 'Top Bar', 'oceanwp' ),
			'main_menu'       => esc_html__( 'Main', 'oceanwp' ),
			'footer_menu'     => esc_html__( 'Footer', 'oceanwp' ),
			'mobile_menu'     => esc_html__( 'Mobile (optional)', 'oceanwp' )
		) );

		// Enable support for Post Formats
		add_theme_support( 'post-formats', array( 'video', 'gallery', 'audio', 'quote', 'link' ) );

		// Enable support for <title> tag
		add_theme_support( 'title-tag' );

		// Add default posts and comments RSS feed links to head
		add_theme_support( 'automatic-feed-links' );

		// Enable support for Post Thumbnails on posts and pages
		add_theme_support( 'post-thumbnails' );

		/**
		 * Enable support for header image
		 */
		add_theme_support( 'custom-header', apply_filters( 'ocean_custom_header_args', array(
			'width'              => 2000,
			'height'             => 1200,
			'flex-height'        => true,
			'video'              => true,
		) ) );

		/**
		 * Enable support for site logo
		 */
		add_theme_support( 'custom-logo', apply_filters( 'ocean_custom_logo_args', array(
			'height'      => 45,
			'width'       => 164,
			'flex-height' => true,
			'flex-width'  => true,
		) ) );

		/*
		 * Switch default core markup for search form, comment form, comments, galleries, captions and widgets
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'widgets',
		) );

		// Declare WooCommerce support.
		add_theme_support( 'woocommerce' );
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );

		// Add editor style
		add_editor_style( 'assets/css/editor-style.min.css' );

		// Declare support for selective refreshing of widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

	}

	/**
	 * Adds the meta tag to the site header
	 *
	 * @since 1.1.0
	 */
	public static function pingback_header() {

		if ( is_singular() && pings_open() ) {
			printf( '<link rel="pingback" href="%s">' . "\n", esc_url( get_bloginfo( 'pingback_url' ) ) );
		}

	}

	/**
	 * Adds the meta tag to the site header
	 *
	 * @since 1.0.0
	 */
	public static function meta_viewport() {

		// Meta viewport
		$viewport = '<meta name="viewport" content="width=device-width, initial-scale=1">';

		// Apply filters for child theme tweaking
		echo apply_filters( 'ocean_meta_viewport', $viewport );

	}

	/**
	 * Load scripts in the WP admin
	 *
	 * @since 1.0.0
	 */
	public static function admin_scripts() {
		global $pagenow;
		if ( 'nav-menus.php' == $pagenow ) {
			wp_enqueue_style( 'oceanwp-menus', OCEANWP_INC_DIR_URI .'walker/assets/menus.css' );
		}
	}

	/**
	 * Load front-end scripts
	 *
	 * @since   1.0.0
	 */
	public static function theme_css() {

		// Define dir
		$dir = OCEANWP_CSS_DIR_URI;
		$theme_version = OCEANWP_THEME_VERSION;

		// Remove font awesome style from plugins
		wp_deregister_style( 'font-awesome' );
		wp_deregister_style( 'fontawesome' );

		// Load font awesome style
		wp_enqueue_style( 'font-awesome', $dir .'devs/font-awesome.min.css', false, '4.7.0' );

		// Register simple line icons style
		wp_enqueue_style( 'simple-line-icons', $dir .'devs/simple-line-icons.min.css', false, '2.4.0' );

		// Main Style.css File
		wp_enqueue_style( 'oceanwp-style', $dir .'style.min.css', false, $theme_version );

	}

	/**
	 * Returns all js needed for the front-end
	 *
	 * @since 1.0.0
	 */
	public static function theme_js() {

		// Get js directory uri
		$dir = OCEANWP_JS_DIR_URI;

		// Get current theme version
		$theme_version = OCEANWP_THEME_VERSION;

		// Get localized array
		$localize_array = self::localize_array();

		// Comment reply
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		// Add images loaded
		wp_enqueue_script( 'imagesloaded' );

		// Register nicescroll script to use it in some extensions
		wp_register_script( 'nicescroll', $dir .'dynamic/nicescroll.min.js', array( 'jquery' ), $theme_version, true );

		// WooCommerce scripts
		if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {
			wp_enqueue_script( 'oceanwp-woocommerce', $dir .'dynamic/woo/woo-scripts.min.js', array( 'jquery' ), $theme_version, true );
		}

		// Load minified js
		wp_enqueue_script( 'oceanwp-main', $dir .'main.min.js', array( 'jquery' ), $theme_version, true );

		// Localize array
		wp_localize_script( 'oceanwp-main', 'oceanwpLocalize', $localize_array );

	}

	/**
	 * Functions.js localize array
	 *
	 * @since 1.0.0
	 */
	public static function localize_array() {

		// Create array
		$sidr_side 		= get_theme_mod( 'ocean_mobile_menu_sidr_direction', 'left' );
		$sidr_side 		= $sidr_side ? $sidr_side : 'left';
		$sidr_target 	= get_theme_mod( 'ocean_mobile_menu_sidr_dropdown_target', 'icon' );
		$sidr_target 	= $sidr_target ? $sidr_target : 'icon';
		$array = array(
			'isRTL'                 => is_rtl(),
			'menuSearchStyle'       => oceanwp_menu_search_style(),
			'sidrSource'       		=> oceanwp_sidr_menu_source(),
			'sidrDisplace'       	=> get_theme_mod( 'ocean_mobile_menu_sidr_displace', true ) ?  true : false,
			'sidrSide'       		=> $sidr_side,
			'sidrDropdownTarget'    => $sidr_target,
			'customSelects'         => '.woocommerce-ordering .orderby, .cart-collaterals .cart_totals table select, #dropdown_product_cat, .widget_categories select, .widget_archive select, .single-product .variations_form .variations select',
		);

		// WooCart
		if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {
			$array['wooCartStyle'] 	= oceanwp_menu_cart_style();
		}

		// Apply filters and return array
		return apply_filters( 'ocean_localize_array', $array );
	}

	/**
	 * Add headers for IE to override IE's Compatibility View Settings
	 *
	 * @since 1.0.0
	 */
	public static function x_ua_compatible_headers( $headers ) {
		$headers['X-UA-Compatible'] = 'IE=edge';
		return $headers;
	}

	/**
	 * Load HTML5 dependencies for IE8
	 *
	 * @since 1.0.0
	 */
	public static function html5_shiv() {
		wp_register_script( 'html5shiv', OCEANWP_JS_DIR_URI . '/dynamic/html5.min.js', array(), OCEANWP_THEME_VERSION, false );
		wp_enqueue_script( 'html5shiv' );
		wp_script_add_data( 'html5shiv', 'conditional', 'lt IE 9' );
	}

	/**
	 * Registers sidebars
	 *
	 * @since   1.0.0
	 */
	public static function register_sidebars() {

		// Sidebar
		register_sidebar( array(
			'name'			=> esc_html__( 'Sidebar', 'oceanwp' ),
			'id'			=> 'sidebar',
			'description'	=> esc_html__( 'Widgets in this area are used in the sidebar region.', 'oceanwp' ),
			'before_widget'	=> '<div class="sidebar-box %2$s clr">',
			'after_widget'	=> '</div>',
			'before_title'	=> '<h4 class="widget-title">',
			'after_title'	=> '</h4>',
		) );

		// Search Results Sidebar
		if ( get_theme_mod( 'ocean_search_custom_sidebar', true ) ) {
			register_sidebar( array(
				'name'			=> esc_html__( 'Search Results Sidebar', 'oceanwp' ),
				'id'			=> 'search_sidebar',
				'description'	=> esc_html__( 'Widgets in this area are used in the search result page.', 'oceanwp' ),
				'before_widget'	=> '<div class="sidebar-box %2$s clr">',
				'after_widget'	=> '</div>',
				'before_title'	=> '<h4 class="widget-title">',
				'after_title'	=> '</h4>',
			) );
		}

		// Footer 1
		register_sidebar( array(
			'name'			=> esc_html__( 'Footer 1', 'oceanwp' ),
			'id'			=> 'footer-one',
			'description'	=> esc_html__( 'Widgets in this area are used in the first footer region.', 'oceanwp' ),
			'before_widget'	=> '<div class="footer-widget %2$s clr">',
			'after_widget'	=> '</div>',
			'before_title'	=> '<h4 class="widget-title">',
			'after_title'	=> '</h4>',
		) );

		// Footer 2
		register_sidebar( array(
			'name'			=> esc_html__( 'Footer 2', 'oceanwp' ),
			'id'			=> 'footer-two',
			'description'	=> esc_html__( 'Widgets in this area are used in the second footer region.', 'oceanwp' ),
			'before_widget'	=> '<div class="footer-widget %2$s clr">',
			'after_widget'	=> '</div>',
			'before_title'	=> '<h4 class="widget-title">',
			'after_title'	=> '</h4>',
		) );

		// Footer 3
		register_sidebar( array(
			'name'			=> esc_html__( 'Footer 3', 'oceanwp' ),
			'id'			=> 'footer-three',
			'description'	=> esc_html__( 'Widgets in this area are used in the third footer region.', 'oceanwp' ),
			'before_widget'	=> '<div class="footer-widget %2$s clr">',
			'after_widget'	=> '</div>',
			'before_title'	=> '<h4 class="widget-title">',
			'after_title'	=> '</h4>',
		) );

		// Footer 4
		register_sidebar( array(
			'name'			=> esc_html__( 'Footer 4', 'oceanwp' ),
			'id'			=> 'footer-four',
			'description'	=> esc_html__( 'Widgets in this area are used in the fourth footer region.', 'oceanwp' ),
			'before_widget'	=> '<div class="footer-widget %2$s clr">',
			'after_widget'	=> '</div>',
			'before_title'	=> '<h4 class="widget-title">',
			'after_title'	=> '</h4>',
		) );

	}

	/**
	 * Registers theme_mod strings into Polylang.
	 *
	 * @since 1.1.4
	 */
	public static function polylang_register_string() {

		if ( function_exists( 'pll_register_string' ) && $strings = oceanwp_register_tm_strings() ) {
			foreach( $strings as $string => $default ) {
				pll_register_string( $string, get_theme_mod( $string, $default ), 'Theme Mod', true );
			}
		}

	}

	/**
	 * All theme functions hook into the oceanwp_head_css filter for this function.
	 *
	 * @since 1.0.0
	 */
	public static function custom_css( $output = NULL ) {

		// Add filter for adding custom css via other functions
		$output = apply_filters( 'ocean_head_css', $output );

		// Minify and output CSS in the wp_head
		if ( ! empty( $output ) ) {
			echo "<!-- OceanWP CSS -->\n<style type=\"text/css\">\n" . wp_strip_all_tags( oceanwp_minify_css( $output ) ) . "\n</style>";
		}

	}

	/**
	 * Minify the WP custom CSS because WordPress doesn't do it by default.
	 *
	 * @since 1.1.9
	 */
	public static function minify_custom_css( $css ) {

		return oceanwp_minify_css( $css );

	}

	/**
	 * All theme functions hook into the oceanwp_footer_js filter for this function.
	 *
	 * @since 1.1.0
	 */
	public static function custom_js( $output = NULL ) {

		// Add filter for adding custom js via other functions
		$output = apply_filters( 'ocean_footer_js', $output );

		// Minify and output JS in the wp_footer
		if ( ! empty( $output ) ) { ?>

			<script type="text/javascript">

				/* OceanWP JS */
				<?php echo oceanwp_minify_js( $output ); ?>

			</script>

		<?php
		}

	}

	/**
	 * Adds inline CSS for the admin
	 *
	 * @since 1.0.0
	 */
	public static function admin_inline_css() {
		echo '<style>div#setting-error-tgmpa{display:block;}</style>';
	}

	/**
	 * Alters the default WordPress tag cloud widget arguments.
	 * Makes sure all font sizes for the cloud widget are set to 1em.
	 *
	 * @since 1.0.0 
	 */
	public static function widget_tag_cloud_args( $args ) {
		$args['largest']  = '0.923em';
		$args['smallest'] = '0.923em';
		$args['unit']     = 'em';
		return $args;
	}

	/**
	 * Alter wp list categories arguments.
	 * Adds a span around the counter for easier styling.
	 *
	 * @since 1.0.0
	 */
	public static function wp_list_categories_args( $links ) {
		$links = str_replace( '</a> (', '</a> <span class="cat-count-span">(', $links );
		$links = str_replace( ' )', ' )</span>', $links );
		return $links;
	}

	/**
	 * Alters the default oembed output.
	 * Adds special classes for responsive oembeds via CSS.
	 *
	 * @since 1.0.0
	 */
	public static function add_responsive_wrap_to_oembeds( $cache, $url, $attr, $post_ID ) {

		// Supported video embeds
		$hosts = apply_filters( 'ocean_oembed_responsive_hosts', array(
			'vimeo.com',
			'youtube.com',
			'blip.tv',
			'money.cnn.com',
			'dailymotion.com',
			'flickr.com',
			'hulu.com',
			'kickstarter.com',
			'vine.co',
			'soundcloud.com',
			'#http://((m|www)\.)?youtube\.com/watch.*#i',
	        '#https://((m|www)\.)?youtube\.com/watch.*#i',
	        '#http://((m|www)\.)?youtube\.com/playlist.*#i',
	        '#https://((m|www)\.)?youtube\.com/playlist.*#i',
	        '#http://youtu\.be/.*#i',
	        '#https://youtu\.be/.*#i',
	        '#https?://(.+\.)?vimeo\.com/.*#i',
	        '#https?://(www\.)?dailymotion\.com/.*#i',
	        '#https?://dai.ly/*#i',
	        '#https?://(www\.)?hulu\.com/watch/.*#i',
	        '#https?://wordpress.tv/.*#i',
	        '#https?://(www\.)?funnyordie\.com/videos/.*#i',
	        '#https?://vine.co/v/.*#i',
	        '#https?://(www\.)?collegehumor\.com/video/.*#i',
	        '#https?://(www\.|embed\.)?ted\.com/talks/.*#i'
		) );

		// Supports responsive
		$supports_responsive = false;

		// Check if responsive wrap should be added
		foreach( $hosts as $host ) {
			if ( strpos( $url, $host ) !== false ) {
				$supports_responsive = true;
				break; // no need to loop further
			}
		}

		// Output code
		if ( $supports_responsive ) {
			return '<p class="responsive-video-wrap clr">' . $cache . '</p>';
		} else {
			return '<div class="oceanwp-oembed-wrap clr">' . $cache . '</div>';
		}

	}

	/**
	 * Adds extra classes to the post_class() output
	 *
	 * @since 1.0.0
	 */
	public static function post_class( $classes ) {

		// Get post
		global $post;

		// Add entry class
		$classes[] = 'entry';

		// Add has media class
		if ( has_post_thumbnail()
			|| get_post_meta( $post->ID, 'ocean_post_oembed', true )
			|| get_post_meta( $post->ID, 'ocean_post_self_hosted_media', true )
			|| get_post_meta( $post->ID, 'ocean_post_video_embed', true )
		) {
			$classes[] = 'has-media';
		}

		// Return classes
		return $classes;

	}

	/**
	 * Add schema markup to the authors post link
	 *
	 * @since 1.0.0
	 */
	public static function the_author_posts_link( $link ) {

		// Add schema markup
		$schema = oceanwp_get_schema_markup( 'author_link' );
		if ( $schema ) {
			$link = str_replace( 'rel="author"', 'rel="author" '. $schema, $link );
		}

		// Return link
		return $link;

	}

	/**
	 * Add schema markup to the authors post link
	 *
	 * @since 1.1.5
	 */
	public static function remove_bb_lightbox() {

		return true;

	}

}
$oceanwp_theme_class = new OCEANWP_Theme_Class;