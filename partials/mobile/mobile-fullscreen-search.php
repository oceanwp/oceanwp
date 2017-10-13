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
}

// Post type
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' ); ?>

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
		<?php if ( 'any' != $post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
		<?php } ?>
	</form>
</div>