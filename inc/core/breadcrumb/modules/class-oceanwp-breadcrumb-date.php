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

	class OceanWP_Breadcrumb_Date {

		/**
		 * Map of month numbers to translated month names.
		 *
		 * @var array
		 */
		protected $months = [];

		/**
		 * Constructor: Populate translated months.
		 */
		public function __construct() {
			$this->months = [
				1  => __( 'January', 'oceanwp' ),
				2  => __( 'February', 'oceanwp' ),
				3  => __( 'March', 'oceanwp' ),
				4  => __( 'April', 'oceanwp' ),
				5  => __( 'May', 'oceanwp' ),
				6  => __( 'June', 'oceanwp' ),
				7  => __( 'July', 'oceanwp' ),
				8  => __( 'August', 'oceanwp' ),
				9  => __( 'September', 'oceanwp' ),
				10 => __( 'October', 'oceanwp' ),
				11 => __( 'November', 'oceanwp' ),
				12 => __( 'December', 'oceanwp' ),
			];
		}

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
				$items[] = [
					'label'      => $this->get_month_name( $month ),
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
					/* translators: %d: comment page number in breadcrumb trail */
					'label'      => sprintf( esc_html_x( 'Page %d', 'Breadcrumb: paged items trail', 'oceanwp' ), get_query_var( 'paged' ) ),
					'url'        => '',
					'is_current' => true,
					'is_hidden'  => false,
				];
			}

			return $items;
		}

		/**
		 * Get translated month name.
		 */
		protected function get_month_name( int $month_num ): string {
			return esc_html( $this->months[ $month_num ] ) ?? '';
		}

		/**
		 * Determine if this is a terminal breadcrumb context.
		 *
		 * @return bool
		 */
		public function is_terminal(): bool {
			return is_date();
		}
	}
}
