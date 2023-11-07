<?php
/**
 * Blog single tags
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Display tags.

if ( ! has_tag() ) {
	return;
}

?>

<div class="post-tags clr">
	<?php the_tags( '<span class="owp-tag-text">' . esc_attr__( 'Tags: ', 'oceanwp' ) . '</span>', '<span class="owp-sep">,</span> ', '' ); ?>
</div>
