<?php
/**
 * Outputs correct page layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<article class="single-page-article clr">

	<?php

	// Get page entry.
	get_template_part( 'partials/page/article' );

	// Display comments.
	comments_template();

	?>

</article>
