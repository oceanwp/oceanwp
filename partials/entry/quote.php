<?php
/**
 * Blog entry quote format
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Return if Ocean Extra is not active.
if ( ! OCEAN_EXTRA_ACTIVE ) {
	return;
}

// Get theme icons.
$theme_icons = oceanwp_theme_icons();
$icon_t = oceanwp_theme_icon_class();

// Quote link.
$link = get_post_meta( get_the_ID(), 'ocean_quote_format_link', true );

// Add post classes.
$classes = oceanwp_post_entry_classes(); ?>

<article id="post-<?php the_ID(); ?>" <?php post_class( $classes ); ?>>
	<div class="post-quote-wrap">
		<?php if ( 'post' === $link ) { ?>
			<a href="<?php the_permalink(); ?>" class="thumbnail-link">
		<?php } ?>
				<div class="post-quote-content">
					<?php echo wp_kses_post( get_post_meta( get_the_ID(), 'ocean_quote_format', true ) ); ?>
					<span class="post-quote-icon <?php echo $theme_icons[ 'quote' ][ $icon_t ]; ?>"></span>
				</div>
				<div class="post-quote-author"><?php the_title(); ?></div>
		<?php if ( 'post' === $link ) { ?>
			</a>
		<?php } ?>
	</div>
</article>
