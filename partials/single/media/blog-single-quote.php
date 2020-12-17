<?php
/**
 * Blog single quote format
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
?>

<div class="post-quote-wrap">

	<div class="post-quote-content">

		<?php echo wp_kses_post( get_post_meta( get_the_ID(), 'ocean_quote_format', true ) ); ?>

		<span class="post-quote-icon <?php echo $theme_icons[ 's_quote' ][ $icon_t ]; ?>" aria-hidden="true"></span>

	</div>

	<div class="post-quote-author"><?php the_title(); ?></div>

</div>
