<?php
/**
 * OceanWP Breadcrumb Archive Class.
 * 
 * Module for archive pages.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Archive' ) ) {

	class OceanWP_Breadcrumb_Archive {

		/**
		 * Get breadcrumb items for archive pages.
		 *
		 * @return array
		 */
		public function get_items() {
			if ( ! is_post_type_archive() || is_front_page() ) {
				return [];
			}

			$post_type = get_query_var( 'post_type' );
			$post_type_object = get_post_type_object( $post_type );

			if ( $post_type_object ) {
				return [
					[
						'label' => post_type_archive_title( '', false ),
						'url'   => '',
					],
				];
			}

			return [];
		}
	}

}
