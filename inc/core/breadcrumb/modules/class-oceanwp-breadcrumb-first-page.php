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
	 * Handles breadcrumb items for the website's homepage or blog index
	 * when used as the static front page or posts page.
	 */
	class OceanWP_Breadcrumb_First_Page {

		/**
		 * Returns breadcrumb items for front page or blog-as-homepage (paged).
		 *
		 * @return array
		 */
		public function get_items(): array {

			$page_id = null;

			// Static front page (actual page selected in Settings > Reading)
			if ( is_front_page() && ! is_home() ) {
				$page_id = get_option( 'page_on_front' );
			}

			// Posts page used as homepage and we're on a paginated view
			if ( is_home() && is_front_page() && is_paged() ) {
				$page_id = get_option( 'page_for_posts' );
			}

			if ( $page_id ) {
				$items = [
					[
						'label'      => get_the_title( $page_id ),
						'url'        => get_permalink( $page_id ),
						'is_current' => ! is_paged(),
					],
				];

				if ( is_paged() ) {
					$items[] = [
						/* translators: %d: page number in breadcrumb trail */
						'label'      => sprintf( esc_html_x( 'Page %d', 'Breadcrumb: paged items trail', 'oceanwp' ), get_query_var( 'paged' ) ),
						'url'        => '',
						'is_current' => true,
						'is_hidden'  => false,
					];
				}

				return $items;
			}

			return [];
		}

		/**
		 * This is a terminal condition — only for true homepage or paginated blog-as-homepage.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			// True homepage (static or default), or paginated home-as-blog
			return is_front_page();
		}
	}
}
