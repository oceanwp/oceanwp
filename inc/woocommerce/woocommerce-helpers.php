<?php
/**
 * WooCommerce helper functions
 * This functions only load if WooCommerce is enabled because
 * they should be used within Woo loops only.
 *
 * @package OceanWP WordPress theme
 */

/**
 * Creates the WooCommerce link for the navbar
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'oceanwp_wcmenucart_menu_item' ) ) {

	function oceanwp_wcmenucart_menu_item() {
		
		// Vars
		global $woocommerce;
		$icon_style   = get_theme_mod( 'ocean_woo_menu_icon_style', 'drop_down' );
		$custom_link  = get_theme_mod( 'ocean_woo_menu_icon_custom_link' );

		// URL
		if ( 'custom_link' == $icon_style && $custom_link ) {
			$url = esc_url( $custom_link );
		} else {
			$cart_id = wc_get_page_id( 'cart' );
			if ( function_exists( 'icl_object_id' ) ) {
				$cart_id = icl_object_id( $cart_id, 'page' );
			}
			$url = get_permalink( $cart_id );
		}
		
		// Cart total
		$display = get_theme_mod( 'ocean_woo_menu_icon_display', 'icon_count' );
		if ( 'icon_total' == $display ) {
			$cart_extra = WC()->cart->get_cart_total();
			$cart_extra = str_replace( 'amount', 'wcmenucart-details', $cart_extra );
		} elseif ( 'icon_count' == $display ) {
			$cart_extra = '<span class="wcmenucart-details count">'. WC()->cart->cart_contents_count .'</span>';
		} else {
			$cart_extra = '';
		}

		// Cart Icon
		if ( 'center' == oceanwp_header_style() ) {
			$cart_icon = esc_html__( 'Cart', 'oceanwp' );
		} else {
			$cart_icon = '<i class="icon-handbag"></i>';
		}
		$cart_icon = apply_filters( 'ocean_menu_cart_icon_html', $cart_icon );

		ob_start(); ?>

			<a href="<?php echo esc_url( $url ); ?>" class="wcmenucart">
				<span class="wcmenucart-count"><?php echo wp_kses_post( $cart_icon ); ?><?php echo wp_kses_post( $cart_extra ); ?></span>
			</a>
			
		<?php
		return ob_get_clean();
	}

}

/**
 * Outputs placeholder image
 *
 * @since 1.0.0
 */
function oceanwp_woo_placeholder_img() {
	if ( function_exists( 'wc_placeholder_img_src' ) && wc_placeholder_img_src() ) {
		$placeholder = '<img src="'. wc_placeholder_img_src() .'" alt="'. esc_attr__( 'Placeholder Image', 'oceanwp' ) .'" class="woo-entry-image-main" />';
		$placeholder = apply_filters( 'ocean_woo_placeholder_img_html', $placeholder );
		if ( $placeholder ) {
			echo wp_kses_post( $placeholder );
		}
	}
}

/**
 * Check if product is in stock
 *
 * @since 1.0.0
 */
function oceanwp_woo_product_instock( $post_id = '' ) {
	global $post;
	$post_id      = $post_id ? $post_id : $post->ID;
	$stock_status = get_post_meta( $post_id, '_stock_status', true );
	if ( 'instock' == $stock_status ) {
		return true;
	} else {
		return false;
	}
}