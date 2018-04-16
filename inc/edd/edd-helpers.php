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
			&& ! edd_get_cart_quantity() > 0 ) {
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
				<?php
				if ( true == get_theme_mod( 'ocean_edd_menu_bag_style_total', false ) ) { ?>
					<span class="eddmenucart-total"><?php echo edd_currency_filter( edd_format_amount( edd_get_cart_total() ) ); ?></span>
				<?php } ?>
				<span class="eddmenucart-cart-icon">
					<span class="eddmenucart-container"><?php echo edd_get_cart_quantity(); ?></span>
				</span>
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
 * Returns single downloads elements positioning
 *
 * @since 1.1.9
 */
if ( ! function_exists( 'oceanwp_edd_single_elements_positioning' ) ) {

	function oceanwp_edd_single_elements_positioning() {

		// Default sections
		$sections = array( 'title', 'price', 'button', 'meta' );

		// Get sections from Customizer
		$sections = get_theme_mod( 'oceanwp_edd_single_elements_positioning', $sections );

		// Turn into array if string
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification
		$sections = apply_filters( 'oceanwp_edd_single_elements_positioning', $sections );

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
		if( edd_has_variable_prices( get_the_ID() ) ) {
			$output = '<a class="button" href="'. get_permalink().'">'. esc_html__( 'View Details', 'oceanwp' ) .'</a>';
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
  * Return product navigation for single downloads
  */

 if( ! function_exists( 'oceanwp_edd_download_navigation') ) {

 	function oceanwp_edd_download_navigation() {

 		if ( true != get_theme_mod( 'ocean_edd_display_navigation', true ) ) {
 			return;
 		}
 		
		global $post;

		$next_post = get_next_post( true, '', 'download_category' );
		$prev_post = get_previous_post( true, '', 'download_category' ); ?>

		<div class="owp-product-nav-wrap">
			<ul class="owp-product-nav">
		        <?php
		        if ( is_a( $next_post , 'WP_Post' ) ) { ?>
					<li>
						<a href="<?php echo get_the_permalink( $next_post->ID ); ?>" class="owp-nav-link next" rel="next"><i class="fa fa-angle-left"></i></a>
						<div class="owp-nav-thumb">
							<a title="<?php echo get_the_title( $next_post->ID ); ?>" href="<?php echo get_the_permalink( $next_post->ID ); ?>"><?php echo get_the_post_thumbnail( $next_post->ID, apply_filters( 'single_product_small_thumbnail_size', 'thumbnail' ) ); ?></a>
						</div>
					</li>
				<?php
				}

				if ( is_a( $prev_post , 'WP_Post' ) ) { ?>
					<li>
						<a href="<?php echo get_the_permalink( $prev_post->ID ); ?>" class="owp-nav-link prev" rel="next"><i class="fa fa-angle-right"></i></a>
						<div class="owp-nav-thumb">
							<a title="<?php echo get_the_title( $prev_post->ID ); ?>" href="<?php echo get_the_permalink( $prev_post->ID ); ?>"><?php echo get_the_post_thumbnail( $prev_post->ID, apply_filters( 'single_product_small_thumbnail_size', 'thumbnail' ) ); ?></a>
						</div>
					</li>
				<?php
				} ?>
	        </ul>
	    </div>

	<?php
	}
}

/**
 * Remove the purchase button on single download pages
 *
 */
function oceanwp_remove_edd_purchase_button() {
	if ( is_singular( 'download' ) ) {
		remove_action( 'edd_after_download_content', 'edd_append_purchase_link' );
	}
}
add_action( 'template_redirect', 'oceanwp_remove_edd_purchase_button' );