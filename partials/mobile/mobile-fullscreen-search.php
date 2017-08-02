<?php
/**
 * Search for the full screen mobile style.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( 'fullscreen' != oceanwp_mobile_menu_style() ) {
	return;
} ?>

<div id="mobile-search" class="clr">
	<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
		<input type="search" name="s" value="" autocomplete="off" />
		<?php
		// If the headerSearchForm script is not disable
		if ( OCEAN_EXTRA_ACTIVE
			&& class_exists( 'Ocean_Extra_Scripts_Panel' )
			&& Ocean_Extra_Scripts_Panel::get_setting( 'oe_headerSearchForm_script' ) ) { ?>
			<label><?php esc_html_e( 'Type your search', 'oceanwp' ); ?><span><i></i><i></i><i></i></span></label>
		<?php
		} ?>
	</form>
</div>