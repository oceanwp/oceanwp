<?php
if ( ! class_exists( 'OceanWP_Theme_Panel_Helpers' ) ) {
	class OceanWP_Theme_Panel_Helpers {

		/**
		 * Check if the request is done through a localhost.
		 */
		public static function is_localhost() {
			return ('127.0.0.1' === $_SERVER['REMOTE_ADDR'] || 'localhost' === $_SERVER['REMOTE_ADDR'] || '::1' === $_SERVER['REMOTE_ADDR']) ? 1 : 0;
		}

		/**
		 * Convert alphabetical bit size to numericals
		 */
		public static function let_to_num( $size ) {
			$l   = substr( $size, -1 );
			$ret = substr( $size, 0, -1 );

			switch ( strtoupper( $l ) ) {
				case 'P':
					$ret *= 1024;
				case 'T':
					$ret *= 1024;
				case 'G':
					$ret *= 1024;
				case 'M':
					$ret *= 1024;
				case 'K':
					$ret *= 1024;
			}

			return $ret;
		}

		/**
		 * Convert boolean value to a string value (e.g. from true to 'true')
		 */
		public static function make_bool_string( $var ) {
			if ( false === $var || 'false' === $var || 0 === $var || '0' === $var || '' === $var || empty( $var ) ) {
				return 'false';
			}
			return 'true';
		}

		/**
		 * Convert Bytes to MegaBytes.
		 */
		public static function bytes_to_mb( $bytes ) {
			return round( $bytes / ( 1024 * 1024 ), 2 );
		}
	}
}
