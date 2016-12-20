<?php

// uncomment this line for testing
//set_site_transient( 'update_plugins', null );

/**
 * Allows plugins to use their own update API.
 * 
 */
class OceanWP_Plugin_Updater {
	
    private $api_data		= array();
    private $name			= '';
    private $slug			= '';
    private $file			= '';
    
    private $item_name		= '';
	private $item_id		= '';
	private $item_shortname	= '';
	private $license_key	= '';
	private $api_url		= 'https://oceanwp.org/';
    
	/**
	 * Class constructor.
	 * 
	 * @uses plugin_basename()
	 * @uses hook()
	 *
	 * @param string  $_api_url     The URL pointing to the custom API endpoint.
	 * @param string  $_plugin_file Path to the plugin file.
	 * @param array   $_api_data    Optional data to send with API calls.
	 * @return void
	 */
	function __construct( $_file, $_item, $_version, $_author, $_optname = null, $_api_url = null ) {
		
		global $oceanwp_options;

		if( is_numeric( $_item ) ) {
			$this->item_id    = absint( $_item );
		}
		
		$this->file				= $_file;
		$this->api_url  		= empty( $_api_url ) ? $this->api_url : trailingslashit( $_api_url );
		$this->slug				= basename( $this->file, '.php' );
		$this->name				= plugin_basename( $this->file );
		$this->item_name		= $_item;
		$this->item_shortname	= 'oceanwp_' . preg_replace( '/[^a-zA-Z0-9_\s]/', '', str_replace( ' ', '_', strtolower( $this->item_name ) ) );
		$this->version 			= $_version;
		$this->author			= $_author;
	
		//Get license options
		$oceanwp_options	= get_option( 'oceanwp_options' );

		// Get Licence ke
		$this->license_key  = isset($oceanwp_options['licenses'][$this->item_shortname.'_license_key']) ? $oceanwp_options['licenses'][$this->item_shortname.'_license_key'] : '';
		
		// Set up hooks.
		$this->init();
	}

    /**
     * Set up WordPress filters to hook into WP's update process.
     *
     * @uses add_filter()
     *
     * @return void
     */
	public function init() {

		// Add filter to enable license tab
		add_filter( 'oceanwp_licence_tab_enable', '__return_true' );

		// Display help text at the top of the Licenses tab
		add_action( 'oceanwp_licenses_tab_top', array( $this, 'oceanwp_license_help_text' ) );

		// Register settings
		add_action( 'oceanwp_licenses_tab_fields', array( $this, 'oceanwp_add_settings_fields' ) );

		// Activate license key on settings save
		add_action( 'admin_init', array( $this, 'oceanwp_activate_license' ) );

		// Deactivate license key
		add_action( 'admin_init', array( $this, 'oceanwp_deactivate_license' ) );

		// Updater
		add_action( 'admin_init', array( $this, 'oceanwp_auto_updater' ), 0 );

		// admin notices
		//add_action( 'admin_notices', array( $this, 'oceanwp_notices' ) );

		// Show changelog
		add_action( 'admin_init', array( $this, 'oceanwp_show_changelog' ) );
	}


	/**
	 * Display help text at the top of the Licenses tag
	 *
	 * @access  public
	 * @param   string   $curr_tab
	 * @return  void
	 */
	public function oceanwp_license_help_text() {

		static $has_ran;

		if( ! empty( $has_ran ) ) {
			return;
		}

		echo '<p>' . sprintf(
			__( 'Enter your extension license keys here to receive updates for purchased extensions. If your license key has expired, please <a href="%s" target="_blank" title="License renewal FAQ">renew your license</a>.', 'oceanwp' ),
			'http://docs.oceanwp.org/article/26-license-renewal'
		) . '</p>';

		$has_ran = true;

	}
	
	/**
	 * Add license field to settings
	 *
	 * @access  public
	 * @param array   $settings
	 * @return  array
	 */
	public function oceanwp_add_settings_fields() {
		
		//Get license details
		$license_details	= get_option( 'edd_license_details' );
		$current_date		= date_i18n( 'Y-m-d H:i:s', current_time('timestamp') );?>
		<tr>
			<th>
				<label for="<?php echo $this->item_shortname; ?>_license_key">
					<?php echo sprintf( __( '%s License Key', 'oceanwp' ), $this->item_name ); ?>
				</label>
			</th>
			<td>
				<input type="text" id="<?php echo $this->item_shortname; ?>_license_key" name="oceanwp_options[licenses][<?php echo $this->item_shortname; ?>_license_key]" class="regular-text" value="<?php echo $this->license_key; ?>" />
				<?php if ( 'valid' == get_option( $this->item_shortname . '_license_active' ) ) { ?>
				<input type="submit" class="button-secondary" name="oceanwp_<?php echo $this->item_shortname; ?>_license_key_deactivate" value="Deactivate License">
				<?php }

				//Get needed details
				$expire_date	= isset( $license_details[$this->item_shortname]->expires ) && trim( $license_details[$this->item_shortname]->expires ) != '' ? $license_details[$this->item_shortname]->expires : '';
				$diff_days		= ceil( (strtotime($expire_date) - strtotime($current_date)) / 86400 );

				//Message for notice expiry
				if( $expire_date != 'lifetime' && $expire_date != '' ) {
					echo '<div class="oceanwp_msg">'. sprintf( 'Your license key expires on %s.', date_i18n( 'F j, Y', strtotime($expire_date) ), 'oceanwp' ) .'</div>';
				}

				//Message for errors
				if ( !empty( $license_details[ $this->item_shortname ]->error ) ) {

					//Get error message and dispay
					$err_msg	= $this->oceanwp_error_messages( $license_details[$this->item_shortname] );
					if( !empty( $err_msg ) ) {
						echo '<div class="oceanwp_error">'. $err_msg .'</div>';						
					}

				} elseif ( $diff_days <= 2 && $diff_days > 0 ) {//Check license expire in two days
					echo '<div class="oceanwp_error">'. sprintf( __( 'Your license will expire after %s days.', 'oceanwp' ), $diff_days ) .'</div>';
				}
				?>
				<style type="text/css">
					.oceanwp_msg {
					  color: #585e5e;
					  font-size: 14px;
					  font-weight: bold;
					  padding: 10px 0 0;
					}
					div.oceanwp_error {
					  background: #f9e8e3 none repeat scroll 0 0;
					  border-left: 4px solid #dc3232;
					  color: #544d4d;
					  font-size: 13px;
					  font-weight: normal;
					  margin: 5px 0 2px 1px;
					  padding: 6px 12px;
					}
				</style>
			</td>
		</tr><?php
    }
    
    /**
	 * Activate the license key
	 *
	 * @access  public
	 * @return  void
	 */
    public function oceanwp_activate_license() {
    	
    	if ( !isset( $_POST['oceanwp_options'] ) || !isset( $_POST['oceanwp_licensekey_activateall'] ) ) {
			return;
		}
		
		if ( !isset( $_POST['oceanwp_options']['licenses'][ $this->item_shortname . '_license_key'] ) ) {
			return;
		}
		
		/*foreach( $_POST as $key => $value ) {
			if( false !== strpos( $key, 'license_key_deactivate' ) ) {
				// Don't activate a key when deactivating a different key
				return;
			}
		}*/
		
		/*if( ! wp_verify_nonce( $_REQUEST[ $this->item_shortname . '_license_key-nonce'], $this->item_shortname . '_license_key-nonce' ) ) {
			wp_die( __( 'Nonce verification failed', 'oceanwp' ), __( 'Error', 'oceanwp' ), array( 'response' => 403 ) );
		}*/
		
		/*if ( 'valid' === get_option( $this->item_shortname . '_license_active' ) ) {
			return;
		}*/
		
		$license = sanitize_text_field( $_POST['oceanwp_options']['licenses'][ $this->item_shortname . '_license_key'] );

		if( trim( $license ) == '' ) {

			//Remove license data and update it
			$this->oceanwp_delete_response( $this->item_shortname );
			return;
		}
		
		// Data to send to the API
		$api_params = array(
			'edd_action' => 'activate_license',
			'license'    => $license,
            'item_name'  => isset( $this->item_name ) ? $this->item_name : false,
			'url'        => home_url()
		);
		
		// Call the API
		$response = wp_remote_post(
			$this->api_url,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params
			)
		);

		// Make sure there are no errors
		if ( is_wp_error( $response ) ) {
			return;
		}

		// Tell WordPress to look for updates
		set_site_transient( 'update_plugins', null );
		
		// Decode license data
		$license_data = json_decode( wp_remote_retrieve_body( $response ) );

		update_option( $this->item_shortname . '_license_active', $license_data->license );

		//Check license response data exists and update
		if( !empty( $license_data ) ) {
			$this->oceanwp_update_response( $this->item_shortname, $license_data );
		}

		if( !(bool) $license_data->success ) {
			set_transient( 'edd_license_error', $license_data, 1000 );
		} else {
			delete_transient( 'edd_license_error' );
		}
    }
    
    /**
	 * Deactivate the license key
	 *
	 * @access  public
	 * @return  void
	 */
    public function oceanwp_deactivate_license() {
    	
    	if ( !isset( $_POST['oceanwp_options'] ) ) {
			return;
		}
		
		if ( !isset( $_POST['oceanwp_options']['licenses'][ $this->item_shortname . '_license_key'] ) ) {
			return;
		}
		
		/*if( ! wp_verify_nonce( $_REQUEST[ $this->item_shortname . '_license_key-nonce'], $this->item_shortname . '_license_key-nonce' ) ) {
			wp_die( __( 'Nonce verification failed', 'oceanwp' ), __( 'Error', 'oceanwp' ), array( 'response' => 403 ) );
		}*/
		
		// Run on deactivate button press
		if ( isset( $_POST[ 'oceanwp_'.$this->item_shortname.'_license_key_deactivate'] ) ) {
			
			// Data to send to the API
			$api_params = array(
				'edd_action' => 'deactivate_license',
				'license'    => $this->license_key,
				'item_name'  => urlencode( $this->item_name ),
				'url'        => home_url()
			);

			// Call the API
			$response = wp_remote_post(
				$this->api_url,
				array(
					'timeout'   => 15,
					'sslverify' => false,
					'body'      => $api_params
				)
			);

			// Make sure there are no errors
			if ( is_wp_error( $response ) ) {
				return;
			}

			// Decode the license data
			$license_data = json_decode( wp_remote_retrieve_body( $response ) );

			delete_option( $this->item_shortname . '_license_active' );

			if( ! (bool) $license_data->success ) {
				set_transient( 'edd_license_error', $license_data, 1000 );
			} else {
				delete_transient( 'edd_license_error' );

				//Remove license data and update it
				$this->oceanwp_delete_response( $this->item_shortname );
			}
		}
    }
    
    /**
	 * Auto updater
	 *
	 * @access  private
	 * @return  void
	 */
    public function oceanwp_auto_updater() {
    	
    	if ( 'valid' !== get_option( $this->item_shortname . '_license_active' ) ) {
			return;
    	}
    	
		$args = array(
			'version'   => $this->version,
			'license'   => $this->license_key,
			'author'    => $this->author
		);

		if( ! empty( $this->item_id ) ) {
			$args['item_id']   = $this->item_id;
		} else {
			$args['item_name'] = $this->item_name;
		}
		
		// require filter applies
		add_filter( 'pre_set_site_transient_update_plugins', array( $this, 'oceanwp_check_update' ) );
		add_filter( 'plugins_api', array( $this, 'oceanwp_plugins_api_filter' ), 10, 3 );
		add_action( 'after_plugin_row_' . $this->name, array( $this, 'oceanwp_show_update_notification' ), 10, 2 );
    }
    
    /**
     * Check for Updates at the defined API endpoint and modify the update array.
     *
     * This function dives into the update API just when WordPress creates its update array,
     * then adds a custom API call and injects the custom plugin data retrieved from the API.
     * It is reassembled from parts of the native WordPress plugin update code.
     * See wp-includes/update.php line 121 for the original wp_update_plugins() function.
     *
     * @uses api_request()
     *
     * @param array   $_transient_data Update array build by WordPress.
     * @return array Modified update array with custom plugin data.
     */
    public function oceanwp_check_update( $_transient_data ) {
    	
    	global $pagenow;
    	
        if( !is_object( $_transient_data ) ) {
            $_transient_data = new stdClass;
        }

        if( 'plugins.php' == $pagenow && is_multisite() ) {
            return $_transient_data;
        }

        if ( empty( $_transient_data->response ) || empty( $_transient_data->response[ $this->name ] ) ) {

            $version_info = $this->api_request( 'plugin_latest_version', array( 'slug' => $this->slug ) );

            if ( false !== $version_info && is_object( $version_info ) && isset( $version_info->new_version ) ) {
            	
                if( version_compare( $this->version, $version_info->new_version, '<' ) ) {
                	
					if ( empty( $version_info->plugin ) ) {
						$version_info->plugin = $this->name;
					}
                    $_transient_data->response[ $this->name ] = $version_info;
                }
                $_transient_data->last_checked = time();
                $_transient_data->checked[ $this->name ] = $this->version;
            }
        }
        return $_transient_data;
    }
    
    /**
     * Updates information on the "View version x.x details" page with custom data.
     *
     * @uses api_request()
     *
     * @param mixed   $_data
     * @param string  $_action
     * @param object  $_args
     * @return object $_data
     */
    public function oceanwp_plugins_api_filter( $_data, $_action = '', $_args = null ) {
    	
		if ( $_action != 'plugin_information' ) {
			return $_data;
		}

		if ( !isset( $_args->slug ) || ( $_args->slug != $this->slug ) ) {
			return $_data;
		}

        $to_send = array(
            'slug'   => $this->slug,
            'is_ssl' => is_ssl(),
            'fields' => array(
                'banners' => false, // These will be supported soon hopefully
                'reviews' => false
            )
        );

        $api_response = $this->api_request( 'plugin_information', $to_send );

        if ( false !== $api_response ) {
            $_data = $api_response;
        }

        return $_data;
    }
    
    /**
     * show update nofication row -- needed for multisite subsites, because WP won't tell you otherwise!
     *
     * @param string  $file
     * @param array   $plugin
     */
    public function oceanwp_show_update_notification() {
    	
    	if( ! current_user_can( 'update_plugins' ) ) {
            return;
        }

        if( ! is_multisite() ) {
            return;
        }

        /*if ( $this->name != $this->file ) {
            return;
        }*/

        // Remove our filter on the site transient
        remove_filter( 'pre_set_site_transient_update_plugins', array( $this, 'oceanwp_check_update' ), 10 );

        $update_cache = get_site_transient( 'update_plugins' );

        if ( ! is_object( $update_cache ) || empty( $update_cache->response ) || empty( $update_cache->response[ $this->name ] ) ) {

            $cache_key    = md5( 'edd_plugin_' .sanitize_key( $this->name ) . '_version_info' );
            $version_info = get_transient( $cache_key );

            if( false === $version_info ) {
                $version_info = $this->api_request( 'plugin_latest_version', array( 'slug' => $this->slug ) );
                set_transient( $cache_key, $version_info, 3600 );
            }

            if( !is_object( $version_info ) ) {
                return;
            }

            if( version_compare( $this->version, $version_info->new_version, '<' ) ) {
                $update_cache->response[ $this->name ] = $version_info;
            }

            $update_cache->last_checked = time();
            $update_cache->checked[ $this->name ] = $this->version;

            set_site_transient( 'update_plugins', $update_cache );

        } else {

            $version_info = $update_cache->response[ $this->name ];
        }

        // Restore our filter
        add_filter( 'pre_set_site_transient_update_plugins', array( $this, 'oceanwp_check_update' ) );

        if ( ! empty( $update_cache->response[ $this->name ] ) && version_compare( $this->version, $version_info->new_version, '<' ) ) {

            // build a plugin list row, with update notification
            $wp_list_table = _get_list_table( 'WP_Plugins_List_Table' );
            echo '<tr class="plugin-update-tr"><td colspan="' . $wp_list_table->get_column_count() . '" class="plugin-update colspanchange"><div class="update-message">';

            $changelog_link = self_admin_url( 'index.php?edd_sl_action=view_plugin_changelog&plugin=' . $this->name . '&slug=' . $this->slug . '&TB_iframe=true&width=772&height=911' );

            if ( empty( $version_info->download_link ) ) {
                printf(
                    __( 'There is a new version of %1$s available. <a target="_blank" class="thickbox" href="%2$s">View version %3$s details</a>.', 'oceanwp' ),
                    esc_html( $version_info->name ),
                    esc_url( $changelog_link ),
                    esc_html( $version_info->new_version )
                );
            } else {
                printf(
                    __( 'There is a new version of %1$s available. <a target="_blank" class="thickbox" href="%2$s">View version %3$s details</a> or <a href="%4$s">update now</a>.', 'oceanwp' ),
                    esc_html( $version_info->name ),
                    esc_url( $changelog_link ),
                    esc_html( $version_info->new_version ),
                    esc_url( wp_nonce_url( self_admin_url( 'update.php?action=upgrade-plugin&plugin=' ) . $this->name, 'upgrade-plugin_' . $this->name ) )
                );
            }

            echo '</div></td></tr>';
        }
    }
    
    /**
     * Calls the API and, if successfull, returns the object delivered by the API.
     *
     * @uses get_bloginfo()
     * @uses wp_remote_post()
     * @uses is_wp_error()
     *
     * @param string  $_action The requested action.
     * @param array   $_data   Parameters for the API action.
     * @return false|object
     */
    private function api_request( $_action, $_data ) {

        global $wp_version;

        $data = array_merge( $this->api_data, $_data );
        
        if ( $data['slug'] != $this->slug )
            return;

        if ( empty( $this->license_key ) )
            return;

        if( $this->api_url == home_url() ) {
            return false; // Don't allow a plugin to ping itself
        }

        $api_params = array(
            'edd_action' => 'get_version',
            'license'    => $this->license_key,
            'item_name'  => isset( $this->item_name ) ? $this->item_name : false,
            'item_id'    => isset( $this->item_id ) ? $this->item_id : false,
            'slug'       => $data['slug'],
            'author'     => $this->author,
            'url'        => home_url()
        );

        $request = wp_remote_post( $this->api_url, array( 'timeout' => 15, 'sslverify' => false, 'body' => $api_params ) );
        
        if ( ! is_wp_error( $request ) ) {
            $request = json_decode( wp_remote_retrieve_body( $request ) );
        }

        if ( $request && isset( $request->sections ) ) {
            $request->sections = maybe_unserialize( $request->sections );
        } else {
            $request = false;
        }
        
        return $request;
    }
    
	/**
	 * Show for changelog
	 *
	 * @access  private
	 * @return  void
	 */
	public function oceanwp_show_changelog() {
    	
		if( empty( $_REQUEST['edd_sl_action'] ) || 'view_plugin_changelog' != $_REQUEST['edd_sl_action'] ) {
			return;
		}
		
		if( empty( $_REQUEST['plugin'] ) ) {
			return;
		}
		
		if( empty( $_REQUEST['slug'] ) ) {
			return;
		}
		
		if( ! current_user_can( 'update_plugins' ) ) {
			wp_die( __( 'You do not have permission to install plugin updates', 'oceanwp' ), __( 'Error', 'oceanwp' ), array( 'response' => 403 ) );
		}
		
		$response = $this->api_request( 'plugin_latest_version', array( 'slug' => $_REQUEST['slug'] ) );
		
		if( $response && isset( $response->sections['changelog'] ) ) {
			echo '<div style="background:#fff;padding:10px;">' . $response->sections['changelog'] . '</div>';
		}
		exit;
    }

    /**
	 * Update response
	 *
	 * @access  public
	 * @return  void
	 */
    public function oceanwp_update_response( $item_shortname, $license_data ) {

		//Build license data and update it
		$license_details	= get_option( 'edd_license_details' );
		$license_details	= !empty( $license_details ) ? $license_details : array();
		$license_details[$item_shortname]	= $license_data;
		update_option( 'edd_license_details', $license_details );
    }

    /**
	 * Delete response
	 *
	 * @access  public
	 * @return  void
	 */
    public function oceanwp_delete_response( $item_shortname ) {

		//Remove license data and update it
		$license_details	= get_option( 'edd_license_details' );
		$license_details	= !empty( $license_details ) ? $license_details : array();
		if( !empty( $license_details[$item_shortname] ) ) {
			unset( $license_details[$item_shortname] );
			update_option( 'edd_license_details', $license_details );
		}
    }

    /**
	 * Get message of errors
	 *
	 * @access  public
	 * @return  void
	 */
    public function oceanwp_error_messages( $license_error ) {

    	$message	= '';
		if( ! empty( $license_error->error ) ) {
			switch( $license_error->error ) {

				case 'item_name_mismatch' :
					$message = __( 'This license does not belong to the product you have entered it for.', 'oceanwp' );
					break;

				case 'no_activations_left' :
					$message = __( 'This license does not have any activations left', 'oceanwp' );
					break;

				case 'expired' :
					$message = __( 'Your license key is expired. Please renew it.', 'oceanwp' );
					break;

				default :
					$message = sprintf( __( 'There was a problem activating your license key, please try again or contact support. Error code: %s', 'oceanwp' ), $license_error->error );
					break;
			}
		}

		return $message;
    }

    /**
	 * Admin notices for errors
	 *
	 * @access  public
	 * @return  void
	 */
    public function oceanwp_notices() {

    	if( ! isset( $_GET['page'] ) || 'oceanwp-panel' !== $_GET['page'] ) {
			return;
		}

		$license_error = get_transient( 'edd_license_error' );

		if( false === $license_error ) {
			return;
		}
		
		if( ! empty( $license_error->error ) ) {
			switch( $license_error->error ) {
				
				case 'item_name_mismatch' :
					$message = __( 'This license does not belong to the product you have entered it for.', 'oceanwp' );
					break;
					
				case 'no_activations_left' :
					$message = __( 'This license does not have any activations left', 'oceanwp' );
					break;
					
				case 'expired' :
					$message = __( 'This license key is expired. Please renew it.', 'oceanwp' );
					break;
					
				default :
					$message = sprintf( __( 'There was a problem activating your license key, please try again or contact support. Error code: %s', 'oceanwp' ), $license_error->error );
					break;
			}
		}
		
		if( ! empty( $message ) ) {
			echo '<div class="error">';
				echo '<p>' . $message . '</p>';
			echo '</div>';
		}
		
		delete_transient( 'edd_license_error' );
    }
}