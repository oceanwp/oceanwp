<?php
/**
 * Custom walker nav edit.
 *
 * @package OceanWP WordPress theme
 */

/**
 * Create HTML list of nav menu input items.
 *
 * @since     1.0.0
 */
class Walker_Nav_Menu_Edit_Custom extends Walker_Nav_Menu_Edit {

	/**
	 * Start the element output.
	 *
	 * @since  1.0.0
	 */
	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		$item_output = '';

		parent::start_el( $item_output, $item, $depth, $args, $id );

		$position = '<fieldset class="field-move';

		$extra = $this->get_fields( $item, $depth, $args, $id );

		$output .= str_replace( $position, $extra . $position, $item_output );
	}

	/**
	 * Add custom hook to add new field.
	 * 
     * @since  1.0.0
	 */
	protected function get_fields( $item, $depth, $args = array(), $id = 0 ) {
		ob_start();

		$item_id = intval( $item->ID );

		// conform to https://core.trac.wordpress.org/attachment/ticket/14414/nav_menu_custom_fields.patch
		do_action( 'wp_nav_menu_item_custom_fields', $item_id, $item, $depth, $args );

		return ob_get_clean();
	}

} // Walker_Nav_Menu_Edit_Custom