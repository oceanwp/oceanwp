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

the_post_navigation( array(
    'prev_text'             => '<span class="title"><i class="fa fa-long-arrow-left"></i>'. esc_html__( 'Previous Post', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
    'next_text'             => '<span class="title"><i class="fa fa-long-arrow-right"></i>'. esc_html__( 'Next Post', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
    'in_same_term'          => true,
    'taxonomy'              => esc_html__( 'post_tag', 'oceanwp' ),
    'screen_reader_text'    => esc_html__( 'Continue Reading', 'oceanwp' ),
) ); ?>