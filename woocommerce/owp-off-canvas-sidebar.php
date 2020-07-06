<?php
/**
 * Off Canvas sidebar template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
} ?>

<div id="oceanwp-off-canvas-sidebar-wrap">
	<div class="oceanwp-off-canvas-sidebar">
		<?php dynamic_sidebar( 'owp_off_canvas_sidebar' ); ?>
		<?php
		if ( true === get_theme_mod( 'ocean_woo_off_canvas_close_button', false ) ) {
			?>
			<button type="button" class="oceanwp-off-canvas-close" aria-label="<?php echo esc_attr__( 'Close off canvas panel', 'oceanwp' ); ?>">
				<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" role="img" aria-hidden="true" focusable="false">
					<path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249
						C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306
						C514.019,27.23,514.019,14.135,505.943,6.058z"/>
					<path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636
						c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/>
				</svg>
			</button>
			<?php
		}
		?>
	</div>
	<div class="oceanwp-off-canvas-overlay"></div>
</div>
