<?php
/**
 * Date for the thumbnail style.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( 'post' == get_post_type() ) { ?>

	<div class="blog-entry-date clr">
		<?php echo get_the_date(); ?>
	</div>
	
<?php } ?>