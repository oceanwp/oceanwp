<?php
/**
 * Provides support for Auto Load Next Post for this theme
 *
 * @package OceanWP WordPress theme
 */

// If Auto Load Next Post plugin doesn't exist then return.
if ( ! OCEANWP_ALNP_ACTIVE ) {
	return;
}

if ( ! class_exists( 'OceanWP_ALNP' ) ) {

	class OceanWP_ALNP {

		/**
		 * OceanWP_ALNP Constructor.
		 *
		 * @access public
		 * @since  1.0.0
		 * @return OceanWP_ALNP
		 */
		public function __construct() {
			// Add theme support and preset the theme selectors.
			add_action( 'after_setup_theme', array( $this, 'add_theme_support' ) );

			// Filters the location of the repeater template.
			add_filter( 'alnp_template_redirect', array( $this, 'template_redirect' ) );

			// Filters the repeater template location.
			add_filter( 'alnp_template_location', array( $this, 'alnp_template_location' ) );

			// Remove Auto Load Next Post compatible post navigation.
			remove_action( 'alnp_load_after_content', 'auto_load_next_post_navigation', 1, 10 );
		} // END init_hooks()

		/***
		 * Add theme support for Auto Load Next Post by setting the 
		 * theme selectors. These settings will be applied once the 
		 * plugin is activated. 
		 *
		 * @access public
		 */
		public function add_theme_support() {
			add_theme_support( 'auto-load-next-post', array(
				'content_container'    => 'div.site-content',
				'title_selector'       => 'h1.entry-title',
				'navigation_container' => 'nav.post-navigation',
				'comments_container'   => 'div#comments',
			) );
		} // END add_theme_support()

		/**
		 * Filters the location of the repeater template to override the default repeater template.
		 *
		 * @access public
		 * @return string
		 */
		public function template_redirect() {
			return OCEANWP_INC_DIR. 'inc/content-alnp.php';
		} // END template_redirect()

		/**
		 * Filters the template location for get_template_part().
		 *
		 * @access public
		 * @return string
		 */
		public function alnp_template_location() {
			return 'partials/single/';
		} // END alnp_template_location()

	} // END class

} // END if class exists

new OceanWP_ALNP();