<?php
/**
 * Topbar layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// If no top bar
if ( true != get_theme_mod( 'ocean_top_bar', true ) ) {
	return;
} ?>

<div id="top-bar-wrap" class="<?php echo oceanwp_topbar_classes(); ?>">

	<div id="top-bar" class="clr container">

		<?php
		// Get content
		get_template_part( 'partials/topbar/content' );

		// Get social
		if ( true == get_theme_mod( 'ocean_top_bar_social', true ) )  {
			get_template_part( 'partials/topbar/social' );
		} ?>

	</div><!-- #top-bar -->

</div><!-- #top-bar-wrap -->