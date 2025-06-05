<?php
/**
 * OceanWP Breadcrumb Date Class
 * 
 * Module for any date-related archive.
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

if ( ! class_exists( 'OceanWP_Breadcrumb_Date' ) ) {

	/**
	 * Get breadcrumb items for date-based archives.
	 *
	 * @return array
	 */
	class OceanWP_Breadcrumb_Date {

		/**
		 * Get breadcrumb items for date-based archives.
		 *
		 * @return array
		 */
		public function get_items() {
			if ( ! is_date() ) {
				return [];
			}

			global $wp_query;

			$items = [];

			if ( is_day() ) {
				$items[] = [
					'label' => get_the_time( 'Y' ),
					'url'   => get_year_link( get_the_time( 'Y' ) ),
				];
				$items[] = [
					'label' => get_the_time( 'F' ),
					'url'   => get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ),
				];
				$items[] = [
					'label' => get_the_time( 'd' ),
					'url'   => '',
				];
			} elseif ( is_month() ) {
				$items[] = [
					'label' => get_the_time( 'Y' ),
					'url'   => get_year_link( get_the_time( 'Y' ) ),
				];
				$items[] = [
					'label' => get_the_time( 'F' ),
					'url'   => '',
				];
			} elseif ( is_year() ) {
				$items[] = [
					'label' => get_the_time( 'Y' ),
					'url'   => '',
				];
			}

			return $items;
		}

		/**
		 * Whether this is a terminal breadcrumb (no more modules after it).
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_date();
		}
	}

}
