<?php
/**
 * Outputs page article
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
} ?>

<div class="entry clr"<?php oceanwp_schema_markup( 'entry_content' ); ?>>
	<?php do_action( 'ocean_before_page_entry' ); ?>
	<?php the_content();

	wp_link_pages( array(
		'before' => '<div class="page-links">' . __( 'Pages:', 'oceanwp' ),
		'after'  => '</div>',
	) ); ?>
	<?php do_action( 'ocean_after_page_entry' ); ?>
</div>