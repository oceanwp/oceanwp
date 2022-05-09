<?php
/**
 * The next/previous links to go to another post.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Only display for standard posts.
if ( 'post' !== get_post_type() ) {
	return;
}

// Term.
$term_tax = get_theme_mod( 'ocean_single_post_next_prev_taxonomy', 'post_tag' );
$term_tax = $term_tax ? $term_tax : 'post_tag';

// Navigation icons.
$prev_arrow = is_rtl() ? 'long_arrow_alt_right' : 'long_arrow_alt_left';
$next_arrow = is_rtl() ? 'long_arrow_alt_left' : 'long_arrow_alt_right';

// Vars.
$prev_text = '<span class="title">' . oceanwp_icon( $prev_arrow, false ) . ' ' . oceanwp_theme_strings( 'owp-string-single-prev-post', false, 'oceanwp' ) . '</span><span class="post-title">%title</span>';
$next_text = '<span class="title">' . oceanwp_icon( $next_arrow, false ) . ' ' . oceanwp_theme_strings( 'owp-string-single-next-post', false, 'oceanwp' ) . '</span><span class="post-title">%title</span>';
$screen_rt = oceanwp_theme_strings( 'owp-string-single-screen-reader-rm', false, 'oceanwp' );

// Args.
if ( 'pub-date' === $term_tax ) {
	$args = array(
		'prev_text'          => $prev_text,
		'next_text'          => $next_text,
		'in_same_term'       => false,
		'screen_reader_text' => $screen_rt,
	);
} else {
	$args = array(
		'prev_text'          => $prev_text,
		'next_text'          => $next_text,
		'in_same_term'       => true,
		'taxonomy'           => $term_tax,
		'screen_reader_text' => $screen_rt,
	);
}

// Display Next/Prev navigation.
$args = apply_filters( 'ocean_single_post_next_prev_args', $args ); ?>

<?php do_action( 'ocean_before_single_post_next_prev' ); ?>

<?php the_post_navigation( $args ); ?>

<?php

do_action( 'ocean_after_single_post_next_prev' );
