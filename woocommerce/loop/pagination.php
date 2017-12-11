<?php
/**
 * Pagination - Show numbered pagination for catalog pages
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/pagination.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.2.2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $wp_query;

if ( $wp_query->max_num_pages <= 1 ) {
	return;
}

// If infinite scroll
if ( 'infinite_scroll' == get_theme_mod( 'ocean_woo_pagination_style', 'standard' ) ) {

	// Load infinite scroll script
	wp_enqueue_script( 'infinitescroll' );

	// Last text
	$last = get_theme_mod( 'ocean_woo_infinite_scroll_last_text' );
	$last = oceanwp_tm_translation( 'ocean_woo_infinite_scroll_last_text', $last );
	$last = $last ? $last: esc_html__( 'End of content', 'oceanwp' );

	// Error text
	$error = get_theme_mod( 'ocean_woo_infinite_scroll_error_text' );
	$error = oceanwp_tm_translation( 'ocean_woo_infinite_scroll_error_text', $error );
	$error = $error ? $error: esc_html__( 'No more pages to load', 'oceanwp' );
	
	// Output pagination HTML ?>
	<div class="scroller-status">
		<div class="loader-ellips infinite-scroll-request">
			<span class="loader-ellips__dot"></span>
			<span class="loader-ellips__dot"></span>
			<span class="loader-ellips__dot"></span>
			<span class="loader-ellips__dot"></span>
		</div>
		<p class="scroller-status__message infinite-scroll-last"><?php echo esc_attr( $last ); ?></p>
		<p class="scroller-status__message infinite-scroll-error"><?php echo esc_attr( $error ); ?></p>
	</div>
	<div class="infinite-scroll-nav clr">
		<div class="alignleft newer-posts"><?php echo get_previous_posts_link('&larr; '. esc_html__( 'Newer Posts', 'oceanwp' ) ); ?></div>
		<div class="alignright older-posts"><?php echo get_next_posts_link( esc_html__( 'Older Posts', 'oceanwp' ) .' &rarr;', $wp_query->max_num_pages ); ?></div>
	</div>

<?php
} else { ?>

	<nav class="woocommerce-pagination">
		<?php
			echo paginate_links( apply_filters( 'woocommerce_pagination_args', array(
				'base'         => esc_url_raw( str_replace( 999999999, '%#%', remove_query_arg( 'add-to-cart', get_pagenum_link( 999999999, false ) ) ) ),
				'format'       => '',
				'add_args'     => false,
				'current'      => max( 1, get_query_var( 'paged' ) ),
				'total'        => $wp_query->max_num_pages,
				'prev_text'    => '&larr;',
				'next_text'    => '&rarr;',
				'type'         => 'list',
				'end_size'     => 3,
				'mid_size'     => 3,
			) ) );
		?>
	</nav>

<?php
} ?>