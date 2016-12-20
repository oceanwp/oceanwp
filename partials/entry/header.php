<?php
/**
 * Displays the post entry header
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} ?>

<header class="blog-entry-header clr">
	<h2 class="blog-entry-title entry-title">
		<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2><!-- .blog-entry-title -->
</header><!-- .blog-entry-header -->