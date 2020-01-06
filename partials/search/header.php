<?php
/**
 * Search result page entry header
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
exit;
} ?>

<header class="search-entry-header clr">
	<h2 class="search-entry-title entry-title">
		<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2>
</header>