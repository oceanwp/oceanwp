<?php
/**
 * Outputs correct library layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
} ?>

<article class="single-library-article clr">

	<div class="entry clr" itemprop="text">
		<?php the_content(); ?>
	</div>

</article>