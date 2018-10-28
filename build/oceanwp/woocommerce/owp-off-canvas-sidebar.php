<?php
/**
 * Off Canvas sidebar template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
} ?>

<div id="oceanwp-off-canvas-sidebar-wrap">
	<div class="oceanwp-off-canvas-sidebar">
		<?php dynamic_sidebar( 'owp_off_canvas_sidebar' ); ?>
	</div>
	<div class="oceanwp-off-canvas-overlay"></div>
</div>