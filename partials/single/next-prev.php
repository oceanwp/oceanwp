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

// Get the current post type.
$post_type = get_post_type();

// Allow post types for the single post header template.
$allowed_post_types = apply_filters( 'oceanwp_single_post_header_allowed_post_types', array( 'post' ) );

// Only display for allowed post types.
if ( ! in_array( $post_type, $allowed_post_types, true ) ) {
	return;
}

// Term.
$term_tax = get_theme_mod( 'ocean_single_post_next_prev_taxonomy', 'post_tag' );
$term_tax = $term_tax ? $term_tax : 'post_tag';

// Navigation icons.
$prev_arrow = is_rtl() ? 'long_arrow_alt_right' : 'long_arrow_alt_left';
$next_arrow = is_rtl() ? 'long_arrow_alt_left' : 'long_arrow_alt_right';

// Vars.
$prev_text = '<span class="title">' . oceanwp_icon( $prev_arrow, false ) . ' ' . esc_html( oceanwp_theme_strings( 'owp-string-single-prev-post', false ) ) . '</span><span class="post-title">%title</span>';
$next_text = '<span class="title">' . oceanwp_icon( $next_arrow, false ) . ' ' . esc_html( oceanwp_theme_strings( 'owp-string-single-next-post', false ) ) . '</span><span class="post-title">%title</span>';
$screen_rt = esc_html( oceanwp_theme_strings( 'owp-string-single-screen-reader-rm', false ) );

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
