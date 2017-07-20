<?php
/**
 * Displays the post header
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Return if quote format
if ( 'quote' == get_post_format() ) {
	return;
}

// Heading
$heading = apply_filters( 'ocean_single_post_heading', 'h2' ); ?>

<header class="entry-header clr">
	<<?php echo esc_attr( $heading ); ?> class="single-post-title entry-title"<?php oceanwp_schema_markup( 'headline' ); ?>><?php the_title(); ?></<?php echo esc_attr( $heading ); ?>><!-- .single-post-title -->
</header><!-- .entry-header -->