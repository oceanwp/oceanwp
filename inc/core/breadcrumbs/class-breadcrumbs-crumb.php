<?php
/**
 * OceanWP Breadcrumbs Crumb Object
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class OceanWP_Breadcrumbs_Crumb {

	/**
	 * Crumb label.
	 *
	 * @var string
	 */
	public $label;

	/**
	 * Crumb URL.
	 *
	 * @var string
	 */
	public $url;

	/**
	 * Is this the last crumb?
	 *
	 * @var bool
	 */
	public $is_last;

	/**
	 * Constructor.
	 *
	 * @param string $label   Label.
	 * @param string $url     URL.
	 * @param bool   $is_last Is last.
	 */
	public function __construct( $label, $url = '', $is_last = false ) {
		$this->label   = $label;
		$this->url     = $url;
		$this->is_last = $is_last;
	}
}
