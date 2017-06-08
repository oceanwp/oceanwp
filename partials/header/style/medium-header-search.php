<?php
/**
 * Search Form for The Medium Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} ?>

<div id="medium-searchform" class="header-searchform-wrap clr">
	<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
		<input type="search" name="s" autocomplete="off" value="" />
		<?php
		// If the headerSearchForm script is not disable
		if ( OCEAN_EXTRA_ACTIVE
			&& class_exists( 'Ocean_Extra_Scripts_Panel' )
			&& Ocean_Extra_Scripts_Panel::get_setting( 'oe_headerSearchForm_script' ) ) { ?>
			<label><?php echo esc_html_e( 'Search...', 'oceanwp' ); ?></label>
		<?php } ?>
		<button class="search-submit"><i class="icon-magnifier"></i></button>
		<div class="search-bg"></div>
	</form>
</div><!-- #medium-searchform -->