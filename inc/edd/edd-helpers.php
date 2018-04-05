<?php
/**
 * Easy Digital Downloads helper functions
 *
 * @package OceanWP WordPress theme
 */

/**
 * Checks if a page is using EDD
 *
 * @since 1.0.0
 */

if ( ! function_exists( 'oceanwp_is_edd_page' ) ) {
	function oceanwp_is_edd_page() {
		if (
			is_singular( 'download' ) ||
			is_post_type_archive( 'download' ) ||
			is_tax( 'download_category' ) ||
			is_tax( 'download_tag' ) ||
			edd_is_checkout() ||
			edd_is_success_page() ||
			edd_is_failed_transaction_page() ||
			edd_is_purchase_history_page()
		) {
			return true;
		}
		return false;
	}
}

if ( ! function_exists( 'oceanwp_edd_menu_cart_style' ) ) {

	function oceanwp_edd_menu_cart_style() {

		// Return if EDD isn't enabled or icon is disabled
		if ( ! OCEANWP_EDD_ACTIVE
			|| 'disabled' == get_theme_mod( 'ocean_edd_menu_icon_visibility', 'default' )
			|| 'disabled_desktop' == get_theme_mod( 'ocean_edd_menu_icon_visibility', 'default' )
			|| 'disabled' == get_theme_mod( 'ocean_edd_menu_icon_display', 'icon_count' ) ) {
			return;
		}

		// Get Menu Icon Style
		$style = get_theme_mod( 'ocean_edd_menu_icon_style', 'drop_down' );

		// Apply filters for advanced edits
		$style = apply_filters( 'ocean_menu_cart_style', $style );

		// Sanitize output so it's not empty
		if ( 'drop_down' == $style
			|| ! $style ) {
			$style = 'drop_down';
		}

		// Return style
		return $style;

	}

}


/**
 * Creates the WooCommerce link for the navbar
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_eddmenucart_menu_item' ) ) {

	function oceanwp_eddmenucart_menu_item() {

		// Return items if "hide if empty cart" is checked (for mobile)
		if ( true == get_theme_mod( 'ocean_edd_menu_icon_hide_if_empty', false )
			&& ! EDD()->cart->total( false ) > 0 ) {
			return;
		}

		// Return if is in the Elementor edit mode, to avoid error
		if ( OCEANWP_ELEMENTOR_ACTIVE
			&& \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
			return;
		}
		
		// Vars
		$icon_style   = get_theme_mod( 'ocean_edd_menu_icon_style', 'drop_down' );
		$custom_link  = get_theme_mod( 'ocean_edd_menu_icon_custom_link' );

		// URL
		if ( 'custom_link' == $icon_style && $custom_link ) {
			$url = esc_url( $custom_link );
		} else {
			$url = edd_get_checkout_uri();
		}
		
		// Cart total
		$display = get_theme_mod( 'ocean_edd_menu_icon_display', 'icon_count' );
		if ( 'icon_total' == $display ) {
			$cart_extra = EDD()->cart->total( false );
			$cart_extra = str_replace( 'amount', 'eddmenucart-details', $cart_extra );
		} elseif ( 'icon_count' == $display ) {
			$cart_extra = '<span class="edd-cart-quantity count">'. edd_get_cart_quantity() .'</span>';
		} elseif ( 'icon_count_total' == $display ) {
			$cart_extra = '<span class="edd-cart-quantity count">'. edd_get_cart_quantity() .'</span>';
			$cart_total = '<span class="cart-total">' . EDD()->cart->total( false ) . '</span>';
			$cart_extra .= str_replace( 'amount', 'eddmenucart-details', $cart_total );
		} else {
			$cart_extra = '';
		}

		// Get cart icon
		$icon = get_theme_mod( 'ocean_edd_menu_icon', 'icon-handbag' );
		$icon = $icon ? $icon : 'icon-handbag';

		// If has custom cart icon
		$custom_icon = get_theme_mod( 'ocean_edd_menu_custom_icon' );
		if ( '' != $custom_icon ) {
			$icon = $custom_icon;
		}

		// Cart Icon
		$cart_icon = '<i class="'. esc_attr( $icon ) .'"></i>';
		$cart_icon = apply_filters( 'ocean_menu_cart_icon_html', $cart_icon );

		// If bag style
		if ( 'yes' == get_theme_mod( 'ocean_edd_menu_bag_style', 'no' ) ) { ?>

			<a href="<?php echo esc_url( $url ); ?>" class="eddmenucart">
				<?php
				if ( true == get_theme_mod( 'ocean_edd_menu_bag_style_total', false ) ) { ?>
					<span class="eddmenucart-total"><?php echo EDD()->cart->total( false ); ?></span>
				<?php } ?>
				<span class="eddmenucart-cart-icon">
					<span class="eddmenucart-count"><?php echo edd_get_cart_quantity(); ?></span>
				</span>
			</a>

		<?php } else { ?>

			<a href="<?php echo esc_url( $url ); ?>" class="eddmenucart">
				<span class="eddmenucart-count"><?php echo wp_kses_post( $cart_icon ); ?><?php echo wp_kses_post( $cart_extra ); ?></span>
			</a>

		<?php
		}

	}

}

/**
 * Returns catalog elements positioning
 *
 * @since 1.1.9
 */
if ( ! function_exists( 'oceanwp_edd_archive_elements_positioning' ) ) {

	function oceanwp_edd_archive_elements_positioning() {

		// Default sections
		$sections = array( 'image', 'category', 'title', 'price', 'description' , 'button' );

		// Get sections from Customizer
		$sections = get_theme_mod( 'oceanwp_edd_archive_elements_positioning', $sections );

		// Turn into array if string
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification
		$sections = apply_filters( 'oceanwp_edd_archive_elements_positioning', $sections );

		// Return sections
		return $sections;

	}

}

/**
 * Returns single product summary elements positioning
 *
 * @since 1.1.9
 */
if ( ! function_exists( 'oceanwp_woo_summary_elements_positioning' ) ) {

	function oceanwp_woo_summary_elements_positioning() {

		// Default sections
		$sections = array( 'title', 'rating', 'price', 'excerpt', 'quantity-button', 'meta' );

		// Get sections from Customizer
		$sections = get_theme_mod( 'oceanwp_woo_summary_elements_positioning', $sections );

		// Turn into array if string
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification
		$sections = apply_filters( 'ocean_woo_summary_elements_positioning', $sections );

		// Return sections
		return $sections;

	}

}

/**
 * Returns list of Easy Digital Downloads Terms
 *
 * @since 1.1.9
 */
if ( ! function_exists( 'oceanwp_edd_terms_list' ) ) {
	
	function oceanwp_edd_terms_list( $taxonomy_name ) { 
		$terms = get_terms( $taxonomy_name );
	?>
	<?php foreach ( $terms as $term ) : ?>
		<a href="<?php echo esc_attr( get_term_link( $term, $taxonomy_name ) ); ?>" title="<?php echo $term->name; ?>"><?php echo $term->name; ?></a>
	<?php endforeach; ?>
	<?php }

}