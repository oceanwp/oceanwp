<?php
/**
 * Number of products on shop page
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( is_single() || ! have_posts() ) {
	return;
}

$products_per_page = get_theme_mod( 'ocean_woo_shop_posts_per_page', 12 );
$max_cap           = oceanwp_get_shop_result_max_cap();

$num_prod = 0;
$requested_view = '';

if ( isset( $_GET['products-per-page'] ) ) {

	$requested_view = sanitize_text_field( wp_unslash( $_GET['products-per-page'] ) );

	if ( $requested_view === 'all' ) {
		$num_prod = $max_cap;
	} else {
		$num_prod = min( absint( $requested_view ), $max_cap );
	}

} else {
	$requested_view = (string) $products_per_page;
	$num_prod       = min( $products_per_page, $max_cap );
}

$num_prod_x1 = $products_per_page;
$num_prod_x2 = $products_per_page * 2;

$obj  = get_queried_object();
$link = '';

if ( isset( $obj->term_id ) ) {

	$link = get_term_link( $obj->term_id, 'product_cat' );

	if ( is_wp_error( $link ) ) {
		$link = get_term_link( $obj->term_id, 'product_tag' );
	}

	if ( is_wp_error( $link ) ) {
		$link = get_term_link( $obj->term_id, get_term_tax_attr() );
	}

} else {

	if ( get_option( 'permalink_structure' ) == '' ) {
		$link = get_post_type_archive_link( 'product' );
	} else {
		$link = get_permalink( wc_get_page_id( 'shop' ) );
	}
}

/**
 * Filter query link for products number
 *
 * @since 1.0.8
 * @param string $link The old query url
 */
$link = apply_filters( 'ocean_num_products_link', $link );

if ( ! empty( $_GET ) ) {
	foreach ( $_GET as $key => $value ){
		$link = add_query_arg( $key, $value, $link );
	}
} ?>

<ul class="result-count">
	<li class="view-title"><?php esc_html_e( 'View:', 'oceanwp' ); ?></li>
	<li><a class="view-first<?php if ( $requested_view === $num_prod_x1 ) echo ' active'; ?>" href="<?php echo esc_url( add_query_arg( 'products-per-page', $num_prod_x1, $link ) ); ?>" rel="nofollow"><?php echo esc_html( $num_prod_x1 ); ?></a></li>
	<li><a class="view-second<?php if ( (int)$requested_view === $num_prod_x2 ) echo ' active'; ?>" href="<?php echo esc_url( add_query_arg( 'products-per-page', $num_prod_x2, $link ) ); ?>" rel="nofollow"><?php echo esc_html( $num_prod_x2 ); ?></a></li>
	<li><a class="view-all<?php if ( $requested_view === 'all' ) echo ' active'; ?>" href="<?php echo esc_url( add_query_arg( 'products-per-page', 'all', $link ) ); ?>" rel="nofollow"><?php esc_html_e( 'All', 'oceanwp' ); ?></a></li>
</ul>
