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
} ?>

<header class="entry-header clr">
	<h1 class="single-post-title entry-title" itemprop="headline"><?php the_title(); ?></h1><!-- .single-post-title -->
</header><!-- .entry-header -->