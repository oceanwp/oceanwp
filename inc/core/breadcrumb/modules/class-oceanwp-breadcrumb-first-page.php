<?php
/**
 * OceanWP Breadcrumb First Page Class
 * 
 * Module for website's first page (homepage).
 * 
 * @package OceanWP WordPress Theme
 * @link https://oceanwp.org/
 * @author OceanWP
 * @since 4.2.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Breadcrumb_First_Page' ) ) {

	/**
	 * Handles breadcrumb items for the website's first page:
	 * - Static front page
	 * - Blog index (when set as homepage or separate page)
	 */
	class OceanWP_Breadcrumb_First_Page {

		/**
		 * Returns breadcrumb items for the homepage or blog index.
		 *
		 * @return array
		 */
		public function get_items(): array {

			// Only handle default front page or static posts page on homepage.
			if ( ( is_front_page() && is_home() ) || ( is_home() && ! is_singular() ) ) {

				$posts_page_id = get_option( 'page_for_posts' );

				if ( is_home() && $posts_page_id ) {
					return [
						[
							'label'      => get_the_title( $posts_page_id ),
							'url'        => '',
							'is_current' => true,
						],
					];
				}

				// Static front page with no separate posts page
				return [];
			}

			return [];
		}

		/**
		 * This is a terminal condition — no further breadcrumb modules should run.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return ( is_front_page() && is_home() ) || ( is_home() && ! is_singular() );
		}
	}
}
