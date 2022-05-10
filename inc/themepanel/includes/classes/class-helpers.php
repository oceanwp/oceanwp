<?php
if ( ! class_exists( 'OceanWP_Theme_Panel_Helpers' ) ) {
	/**
	 * Helper functions class.
	 *
	 * @since 1.7.0
	 */
	class OceanWP_Theme_Panel_Helpers {

		/**
		 * You can create a directory using this helper , it will check the dest directory for if its writable or not then
		 * try to create new one
		 *
		 * @since       1.0.0
		 * @author Artbees <info@artbees.net>
		 *
		 * @param str $path path of directory that need to be created.
		 * @param int $perm permission of new directory , default is : 0775.
		 *
		 *     @return bool will return boolean status of action , all message is setted to $this->message()
		 */
		// public static function check_perm_and_create( $path, $perm = 0775 ) {

		// 	$oceanwp_filesystem = new OceanWP_Filesystem(
		// 		array(
		// 			'context' => $path,
		// 		)
		// 	);

		// 	if ( $oceanwp_filesystem->get_error_code() ) {
		// 		throw new Exception( $oceanwp_filesystem->get_error_message() );
		// 		return false;
		// 	}

		// 	if ( $oceanwp_filesystem->exists( $path ) ) {
		// 		if ( ! $oceanwp_filesystem->is_writable( $path ) ) {
		// 			throw new Exception( sprintf( __( '%s directory is not writable', 'jupiterx-core' ), $path ) );
		// 			return false;
		// 		}
		// 		return true;
		// 	} else {
		// 		if ( ! $oceanwp_filesystem->mkdir( $path, $perm ) ) {
		// 			throw new Exception( sprintf( __( 'Can\'t create directory %s', 'jupiterx-core' ), $path ) );
		// 			return false;
		// 		}
		// 		return true;
		// 	}
		// }
		/**
		 * This method is resposible to download file from url and save it on server.
		 * it will check if curl is available or not and then decide to use curl or file_get_content
		 *
		 * @since       1.0.0
		 * @author Artbees <info@artbees.net>
		 *
		 * @param string $url url of file (http://yahoo.com/test-plugin.zip).
		 * @param string $file_name name of the fire that should be create at destination directory.
		 * @param string $dest_directory absolute path of directory that file save on it.
		 *
		 * @return bool will return action status
		 */
		// public static function upload_from_url( $url, $file_name, $dest_directory, $remote_args = [] ) {
		// 	set_time_limit( 0 );

		// 	try {
		// 		self::check_perm_and_create( $dest_directory );
		// 	} catch ( Exception $e ) {
		// 		throw new Exception( sprintf( __( 'Destination directory is not ready for upload . {%s}', 'jupiterx-core' ), $dest_directory ) );
		// 		return false;
		// 	}


		// 	$response = wp_remote_get( $url, array_merge( [ 'timeout' => 120 ], $remote_args ) );

		// 	if ( is_wp_error( $response ) ) {
		// 		throw new Exception( $response->get_error_message() );
		// 		return false;
		// 	}

		// 	$response_body = wp_remote_retrieve_body( $response );

		// 	if ( is_wp_error( $response_body ) ) {
		// 		throw new Exception( $response_body->get_error_message() );
		// 		return false;
		// 	}

		// 	$oceanwp_filesystem = new OceanWP_Filesystem(
		// 		array(
		// 			'context' => $dest_directory,
		// 		)
		// 	);

		// 	if ( $oceanwp_filesystem->get_error_code() ) {
		// 		throw new Exception( $oceanwp_filesystem->get_error_message() );
		// 		return false;
		// 	}

		// 	if ( ! $oceanwp_filesystem->put_contents( $dest_directory . $file_name, $response_body ) ) {
		// 		throw new Exception( sprintf( __( "Can't write file to {%s}", 'jupiterx-core' ), $dest_directory . $file_name ) );
		// 		return false;
		// 	}

		// 	return $dest_directory . $file_name;
		// }

		/**
		 * This method is resposible to delete a directory or file.
		 * if the path is pointing to a directory it will remove all the includes file recursivly and then remove directory at last step
		 * if the path is pointing to a file it will remove it
		 *
		 * @since       1.0.0
		 * @author Artbees <info@artbees.net>
		 *
		 * @param str $dir for example (/var/www/jupiter/wp-content/plugins).
		 *
		 * @return bool true or false
		 */
		// public static function delete_file_and_dir( $dir ) {

		// 	if ( empty( $dir ) == true || strlen( $dir ) < 2 ) {
		// 		return false;
		// 	}

		// 	$dir = realpath( $dir );

		// 	$oceanwp_filesystem = new OceanWP_Filesystem(
		// 		array(
		// 			'context' => $dir,
		// 		)
		// 	);

		// 	if ( $oceanwp_filesystem->get_error_code() ) {
		// 		return false;
		// 	}

		// 	if ( ! $oceanwp_filesystem->exists( $dir ) ) {
		// 		return true;
		// 	}

		// 	if ( $oceanwp_filesystem->is_dir( $dir ) ) {
		// 		return $oceanwp_filesystem->rmdir( $dir, true );
		// 	} else {
		// 		return $oceanwp_filesystem->delete( $dir );
		// 	}

		// }


		/**
		 * Prevents cache.
		 * Deletes cache files and transients.
		 *
		 * @since       1.0.0
		 */

		// public static function prevent_cache_plugins() {
		// 	if ( function_exists( 'w3tc_pgcache_flush' ) ) {
		// 		w3tc_pgcache_flush();
		// 		// W3 Total Cache: Page cache flushed.
		// 	} elseif ( function_exists( 'wp_cache_clear_cache' ) ) {
		// 		wp_cache_clear_cache();
		// 		// WP Super Cache: Page cache cleared.
		// 	} elseif ( function_exists( 'rocket_clean_domain' ) ) {
		// 		rocket_clean_domain();
		// 		// WP Rocket: Domain cache purged.
		// 	}

		// 	if ( ! defined( 'DONOTCACHEPAGE' ) ) {
		// 		define( 'DONOTCACHEPAGE', true );
		// 	}

		// 	if ( ! defined( 'DONOTCACHCEOBJECT' ) ) {
		// 		define( 'DONOTCACHCEOBJECT', true );
		// 	}

		// 	if ( ! defined( 'DONOTMINIFY' ) ) {
		// 		define( 'DONOTMINIFY', true );
		// 	}

		// 	if ( ! defined( 'DONOTCACHEDB' ) ) {
		// 		define( 'DONOTCACHEDB', true );
		// 	}

		// 	if ( ! defined( 'DONOTCDN' ) ) {
		// 		define( 'DONOTCDN', true );
		// 	}
		// }

		/**
		 * Safely and securely get file from server.
		 * It attempts to read file using WordPress native file read functions
		 * If it fails, we use wp_remote_get. if the site is ssl enabled, we try to convert it http as some servers may fail to get file
		 *
		 * @author Artbees <info@artbees.net>
		 *
		 * @param $file_url         string    its directory URL.
		 * @param $file_dir         string    its directory Path.
		 *
		 * @return $wp_file_body    string
		 */
		// public static function getFileBody( $file_uri, $file_dir ) {

		// 	$wp_remote_get_file_body = '';
		// 	$file_dir                = realpath( $file_dir );

		// 	$oceanwp_filesystem = new OceanWP_Filesystem(
		// 		array(
		// 			'context' => $file_dir,
		// 		)
		// 	);

		// 	if ( $oceanwp_filesystem->get_error_code() ) {
		// 		throw new Exception( $oceanwp_filesystem->get_error_message() );
		// 		return false;
		// 	}

		// 	$wp_get_file_body = $oceanwp_filesystem->get_contents( $file_dir );
		// 	if ( false == $wp_get_file_body ) {
		// 		$wp_remote_get_file = wp_remote_get( $file_uri );

		// 		if ( is_array( $wp_remote_get_file ) && array_key_exists( 'body', $wp_remote_get_file ) ) {
		// 			$wp_remote_get_file_body = $wp_remote_get_file['body'];

		// 		} elseif ( is_numeric( strpos( $file_uri, 'https://' ) ) ) {

		// 			$file_uri           = str_replace( 'https://', 'http://', $file_uri );
		// 			$wp_remote_get_file = wp_remote_get( $file_uri );

		// 			if ( ! is_array( $wp_remote_get_file ) || ! array_key_exists( 'body', $wp_remote_get_file ) ) {
		// 				throw new Exception( __( 'SSL connection error. Code: template-assets-get', 'jupiterx-core' ) );
		// 				return false;
		// 			}

		// 			$wp_remote_get_file_body = $wp_remote_get_file['body'];
		// 		}

		// 		$wp_file_body = $wp_remote_get_file_body;

		// 	} else {
		// 		$wp_file_body = $wp_get_file_body;
		// 	}
		// 	return $wp_file_body;
		// }

		/**
		 * Check if the request is done through a localhost.
		 *
		 * @author Artbees <info@artbees.net>
		 *
		 * @return boolean
		 */
		public static function is_localhost() {
			return ('127.0.0.1' == $_SERVER['REMOTE_ADDR'] || 'localhost' == $_SERVER['REMOTE_ADDR'] || '::1' == $_SERVER['REMOTE_ADDR']) ? 1 : 0;
		}

		/**
		 * Convert alphabetical bit size to numericals
		 *
		 * @author Artbees <info@artbees.net>
		 *
		 * @return number
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
		 *
		 * @author Artbees <info@artbees.net>
		 *
		 * @return String
		 */
		public static function make_bool_string( $var ) {
			if ( false == $var || 'false' == $var || 0 == $var || '0' == $var || '' == $var || empty( $var ) ) {
				return 'false';
			}
			return 'true';
		}

		/**
		 * It will create a compress file from list of files
		 *
		 * @author Artbees <info@artbees.net>
		 *
		 * @param array   $files for example : array('preload-images/5.jpg','kwicks/ringo.gif','rod.jpg','reddit.gif');.
		 * @param string  $destination name of the file or full address of destination for example : my-archive.zip.
		 * @param boolean $overwrite if destionation exist , should it overwrite the compress file ?.
		 *
		 * @return boolean true if completed and false if something goes wrong
		 */
		// public static function zip( $files = array(), $destination = '', $overwrite = false ) {

		// 	$oceanwp_filesystem = new OceanWP_Filesystem(
		// 		array(
		// 			'context' => $destination,
		// 		)
		// 	);

		// 	if ( $oceanwp_filesystem->get_error_code() ) {
		// 		return false;
		// 	}

		// 	// if the zip file already exists and overwrite is false, return false.
		// 	if ( $oceanwp_filesystem->exists( $destination ) && ! $overwrite ) {
		// 		return false;
		// 	}

		// 	$valid_files = array();

		// 	// if files were passed in...
		// 	if ( is_array( $files ) ) {
		// 		// cycle through each file.
		// 		foreach ( $files as $file_name => $file_path ) {
		// 			// make sure the file exists.
		// 			if ( $oceanwp_filesystem->exists( $file_path ) ) {
		// 				$valid_files[ $file_name ] = $file_path;
		// 			}
		// 		}
		// 	}
		// 	// if we have good files...
		// 	if ( count( $valid_files ) ) {

		// 		$temp_file = tempnam( sys_get_temp_dir(), 'zip' );

		// 		if ( class_exists( 'ZipArchive', false ) ) {
		// 			$zip = new ZipArchive();

		// 			// Try open the temp file.
		// 			$zip->open( $temp_file );

		// 			// add the files to archive.
		// 			foreach ( $valid_files as $file_name => $file_path ) {
		// 				$zip->addFile( $file_path, $file_name );
		// 			}

		// 			// close the zip -- done!
		// 			$zip->close();

		// 		} else {

		// 			mbstring_binary_safe_encoding();

		// 			require_once ABSPATH . 'wp-admin/includes/class-pclzip.php';

		// 			$zip = new PclZip( $temp_file );

		// 			foreach ( $valid_files as $file_name => $file_path ) {
		// 				$zip->create( $file_path, $file_name );
		// 			}

		// 			reset_mbstring_encoding();
		// 		}

		// 		// add the files to archive.
		// 		foreach ( $valid_files as $file_name => $file_path ) {
		// 			$zip->addFile( $file_path, $file_name );
		// 		}

		// 		// debug
		// 		// echo 'The zip archive contains ',$zip->numFiles,' files with a status of ',$zip->status;
		// 		// close the zip -- done!
		// 		$zip->close();

		// 		// Copy the temp file to destination.
		// 		$oceanwp_filesystem->copy( $temp_file, $destination, true, 0644 );

		// 		// Try delete the temp file.
		// 		$oceanwp_filesystem->delete( $temp_file );

		// 		// check to make sure the file exists.
		// 		return $oceanwp_filesystem->exists( $destination );

		// 	}
		// 	return false;
		// }

		// public static function search_multdim( $array, $key, $value ) {
		// 	return (array_search( $value, array_column( $array, $key ) ));
		// }
		/**
		 * It will check wether wordpress-importer plugin is exist in plugin directory or not.
		 * if exist it will return the WordPress importer file
		 * if not it will use jupiter version
		 *
		 * @author      Artbees <info@artbees.net>
		 * @copyright   Artbees LTD (c)
		 * @link        https://artbees.net
		 * @since       Version 5.5
		 */
		// public static function include_wordpress_importer() {

		// 	if ( ! class_exists( 'WP_Importer' ) ) {
		// 		defined( 'WP_LOAD_IMPORTERS' ) || define( 'WP_LOAD_IMPORTERS', true );
		// 		include ABSPATH . '/wp-admin/includes/class-wp-importer.php';
		// 	}

		// 	if ( ! class_exists( 'OceanWP_WXR_Importer' ) ) {
		// 		oceanwp_core()->load_files( [
		// 			'control-panel/includes/importer/class-logger',
		// 			'control-panel/includes/importer/class-logger-serversentevents',
		// 			'control-panel/includes/importer/class-wxr-import-info',
		// 			'control-panel/includes/importer/class-wxr-importer',
		// 		] );
		// 	}

		// 	if ( ! class_exists( 'OceanWP_Importer' ) ) {
		// 		oceanwp_core()->load_files( [
		// 			'control-panel/includes/importer/class-jupiterx-importer',
		// 		] );
		// 	}

		// 	return true;
		// }
		/**
		 * It will return permission of directory
		 *
		 * @author Artbees <info@artbees.net>
		 *
		 * @param string $path Full path of directory.
		 *
		 * @return int
		 */
		// public static function get_perm( $path ) {
		// 	return substr( sprintf( '%o', fileperms( ABSPATH . $path ) ), -4 );
		// }

		/**
		 * Convert Bytes to MegaBytes.
		 *
		 * @access public
		 * @static
		 * @since 1.10.0
		 *
		 * @param [type] $bytes
		 * @return void
		 */
		public static function bytes_to_mb( $bytes ) {
			return round( $bytes / ( 1024 * 1024 ), 2 );
		}
	}
}
