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
			$url = get_permalink( edd_get_option( 'purchase_page' ) );
		}
		
		// Cart total
		$display = get_theme_mod( 'ocean_edd_menu_icon_display', 'icon_count' );
		if ( 'icon_total' == $display ) {
			$cart_extra = EDD()->cart->total( false );
			$cart_extra = str_replace( 'amount', 'eddmenucart-details', $cart_extra );
		} elseif ( 'icon_count' == $display ) {
			$cart_extra = '<span class="edd-cart-quantity count">'. EDD()->cart->get_quantity() .'</span>';
		} elseif ( 'icon_count_total' == $display ) {
			$cart_extra = '<span class="edd-cart-quantity count">'. EDD()->cart->get_quantity() .'</span>';
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
					<span class="eddmenucart-count"><?php echo EDD()->cart->get_quantity(); ?></span>
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