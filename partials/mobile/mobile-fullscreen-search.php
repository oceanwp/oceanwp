<?php
/**
 * Search for the full screen mobile style.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( 'fullscreen' !== oceanwp_mobile_menu_style() ) {
	return;
}

// Post type.
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' ); ?>

<div id="mobile-search" class="clr">
	<form id="mfs-search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform" aria-label="<?php esc_attr( oceanwp_theme_strings( 'owp-string-search-form-label' ) ); ?>">
		<label for="mfs-input"><?php esc_html( oceanwp_theme_strings( 'owp-string-mobile-fs-search-text' ) ); ?><span><i></i><i></i><i></i></span></label>
		<input id="mfs-input" aria-labelledby="mfs-search mfs-input" type="search" name="s" value="" autocomplete="off" />
		<?php if ( 'any' !== $post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
		<?php } ?>
	</form>
</div>
