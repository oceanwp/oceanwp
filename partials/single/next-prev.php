<?php
/**
 * The next/previous links to go to another post.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Only display for standard posts
if ( 'post' != get_post_type() ) {
	return;
}

// Term
$term_tax = get_theme_mod( 'ocean_single_post_next_prev_taxonomy', 'post_tag' );
$term_tax = $term_tax ? $term_tax : 'post_tag';

// Args
$args = array(
	'prev_text'             => '<span class="title"><i class="fa fa-long-arrow-left"></i>'. esc_html__( 'Previous Post', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
    'next_text'             => '<span class="title"><i class="fa fa-long-arrow-right"></i>'. esc_html__( 'Next Post', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
    'in_same_term'          => true,
    'taxonomy'              => $term_tax,
    'screen_reader_text'    => esc_html__( 'Continue Reading', 'oceanwp' ),
);

// Args
$args = apply_filters( 'ocean_single_post_next_prev_args', $args ); ?>

<?php do_action( 'ocean_before_single_post_next_prev' ); ?>

<?php the_post_navigation( $args ); ?>

<?php do_action( 'ocean_after_single_post_next_prev' ); ?>