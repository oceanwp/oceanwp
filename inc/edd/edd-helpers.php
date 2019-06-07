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
			$cart_extra = '<span class="eddmenucart-details total">' . edd_currency_filter( edd_format_amount( edd_get_cart_total() ) ) . '</span>';
		} elseif ( 'icon_count' == $display ) {
			$cart_extra = '<span class="eddmenucart-details edd-cart-quantity count">'. edd_get_cart_quantity() .'</span>';
		} elseif ( 'icon_count_total' == $display ) {
			$cart_extra = '<span class="eddmenucart-details edd-cart-quantity count">'. edd_get_cart_quantity() .'</span>';
			$cart_extra .= '<span class="eddmenucart-details total">' . edd_currency_filter( edd_format_amount( edd_get_cart_total() ) ) . '</span>';
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

			<a href="<?php echo esc_url( $url ); ?>" class="bag-style eddmenucart">
				<span class="eddmenucart-cart-icon">
					<span class="eddmenucart-container edd-cart-quantity count"><?php echo edd_get_cart_quantity(); ?></span>
				</span>
				<?php
				if ( true == get_theme_mod( 'ocean_edd_menu_bag_style_total', false ) ) { ?>
					<span class="eddmenucart-total eddmenucart-details total"><?php echo edd_currency_filter( edd_format_amount( edd_get_cart_total() ) ); ?></span>
				<?php } ?>
			</a>

		<?php } else { ?>

			<a href="<?php echo esc_url( $url ); ?>" class="simple-style eddmenucart">
				<span class="eddmenucart-container"><?php echo wp_kses_post( $cart_icon ); ?><?php echo wp_kses_post( $cart_extra ); ?></span>
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

/**
 * Returns Add to Cart/View Details based on variable pricing
 *
 */
if( ! function_exists( 'oceanwp_edd_add_to_cart_link') ) {
	
	function oceanwp_edd_add_to_cart_link(){
		if( edd_has_variable_prices( get_the_ID() ) && 'button' == get_theme_mod( 'ocean_edd_archive_variable_button', 'button' ) ) {
			$output  = '<div class="edd-variable-download-button-wrapper">';
			$output .= '<a class="button" href="'. esc_url( get_permalink() ) .'">'. esc_html__( 'View Details', 'oceanwp' ) .'</a>';
			$output .= '</div>';
		} else {
			$output = edd_get_purchase_link( array('price' => false, 'text' => esc_html__( 'Add to Cart', 'oceanwp') ) );
		}

		return $output;
	}	
}

/**
 * Return div for start of loop
 *
 */
if( ! function_exists( 'oceanwp_edd_loop_classes') ) {

	function oceanwp_edd_loop_classes(){

		$wrap_classes = array();

		$wrap_classes[]    = 'edd_downloads_list';
		$wrap_classes[]    = 'oceanwp-row';
		// Columns
		$desktop_columns   = get_theme_mod( 'ocean_edd_archive_columns', 3 );
		$wrap_classes[]    = 'desktop-col';
		$wrap_classes[]    = 'desktop-' . $desktop_columns .'-col';

		$tablet_columns    = get_theme_mod( 'ocean_edd_tablet_archive_columns' );
		$mobile_columns    = get_theme_mod( 'ocean_edd_mobile_archive_columns' );

		if ( ! empty( $tablet_columns ) ) {
			$wrap_classes[] = 'tablet-col';
			$wrap_classes[] = 'tablet-' . $tablet_columns . '-col';
		}
		if ( ! empty( $mobile_columns ) ) {
			$wrap_classes[] = 'mobile-col';
			$wrap_classes[] = 'mobile-' . $mobile_columns . '-col';
		}

		$wrap_classes = implode( ' ', $wrap_classes );

		return $wrap_classes;
	}
}

/**
 * Remove the purchase button on single download pages
 *
 */
function oceanwp_remove_edd_purchase_button() {
	if( false == get_theme_mod( 'ocean_edd_display_add_to_cart', true )  ) {
		if ( is_singular( 'download' ) ) {
			remove_action( 'edd_after_download_content', 'edd_append_purchase_link' );
		}
	}
}

add_action( 'template_redirect', 'oceanwp_remove_edd_purchase_button' );

/**
 * Returns correct columns for the EDD archive entries
 * Used to clear floats
 *
 * @since 1.0.4
 */
if ( ! function_exists( 'oceanwp_edd_entry_columns' ) ) {

	function oceanwp_edd_entry_columns() {

		// Get columns from customizer setting
		$columns = get_theme_mod( 'ocean_edd_archive_columns', '3' );

		// Sanitize
		$columns = $columns ? $columns : '3';

		// Apply filters for child theming
		$columns = apply_filters( 'oceanwp_edd_entry_columns', $columns );

		// Return columns
		return $columns;

	}

}

// Disable EDD Styles
add_filter( 'edd_get_option_disable_styles', '__return_true' );

/**
 * Change EDD Templates Folder
 *
 * @since 1.0.4
 */
function oceanwp_edd_template_dir(){
	return 'partials/edd';
}

add_filter( 'edd_templates_dir', 'oceanwp_edd_template_dir' );

/**
 * Remove Price from purchase button in widget
 *
 * @since 1.5.15
 */
function oceanwp_edd_product_details_purchase_button(){
	return edd_get_purchase_link( array( 'download_id' => get_the_ID(), 'price' => false ) );
}

add_filter( 'edd_product_details_widget_purchase_button', 'oceanwp_edd_product_details_purchase_button', 10, 1 );

/**
 * Add Price in widget
 *
 * @since 1.5.15
 */

function oceanwp_edd_product_details_price(){
	$output = '<div itemprop="price" class="edd_price">';
	if ( ! edd_has_variable_prices( get_the_ID() ) ) :
	$output .= edd_price( get_the_ID() );
	else:
	$output .= edd_price_range( get_the_ID() );
	endif;
	$output .= '</div>';

	return $output;
}

add_action( 'edd_product_details_widget_before_purchase_button', 'oceanwp_edd_product_details_price' );