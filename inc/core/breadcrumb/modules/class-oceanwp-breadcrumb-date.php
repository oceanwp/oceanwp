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
	 * Handles breadcrumb items for date-based archives.
	 */
	class OceanWP_Breadcrumb_Date {

		/**
		 * Map of month numbers to translated month names.
		 *
		 * @var array
		 */
		protected $months = [
			1  => 'January',
			2  => 'February',
			3  => 'March',
			4  => 'April',
			5  => 'May',
			6  => 'June',
			7  => 'July',
			8  => 'August',
			9  => 'September',
			10 => 'October',
			11 => 'November',
			12 => 'December',
		];

		/**
		 * Get breadcrumb items for date archives (year, month, day), with pagination support.
		 *
		 * @return array
		 */
		public function get_items(): array {
			if ( ! is_date() ) {
				return [];
			}

			$items = [];

			$year  = (int) get_query_var( 'year' );
			$month = (int) get_query_var( 'monthnum' );
			$day   = (int) get_query_var( 'day' );

			if ( $year ) {
				$items[] = [
					'label'      => $year,
					'url'        => ( $month || $day || is_paged() ) ? get_year_link( $year ) : '',
					'is_current' => ! $month && ! $day && ! is_paged(),
					'is_hidden'  => false,
				];
			}

			if ( $month ) {
				$month_name = $this->get_month_name( $month );
				$items[] = [
					'label'      => $month_name,
					'url'        => ( $day || is_paged() ) ? get_month_link( $year, $month ) : '',
					'is_current' => ! $day && ! is_paged(),
					'is_hidden'  => false,
				];
			}

			if ( $day ) {
				$items[] = [
					'label'      => sprintf( '%02d', $day ),
					'url'        => '',
					'is_current' => ! is_paged(),
					'is_hidden'  => false,
				];
			}

			if ( is_paged() ) {
				$items[] = [
					'label'      => sprintf( esc_html__( 'Page %d', 'oceanwp' ), get_query_var( 'paged' ) ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			}

			return $items;
		}

		/**
		 * Get translated month name from number.
		 *
		 * @param int $month_num
		 * @return string
		 */
		protected function get_month_name( int $month_num ): string {
			if ( isset( $this->months[ $month_num ] ) ) {
				return esc_html__( $this->months[ $month_num ], 'oceanwp' );
			}
			return '';
		}

		/**
		 * Whether this is a terminal breadcrumb module.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_date();
		}
	}
}
