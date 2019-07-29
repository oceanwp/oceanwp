<?php
/**
 * Site header search header replace
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' ); ?>

<div id="searchform-header-replace" class="header-searchform-wrap clr">
	<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
		<input type="search" name="s" autocomplete="off" value="" placeholder="<?php echo esc_html_e( 'Type then hit enter to search...', 'oceanwp' ); ?>" />
		<?php if ( 'any' != $post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
		<?php } ?>
		<?php do_action( 'wpml_add_language_form_field' ); ?>
	</form>
	<span id="searchform-header-replace-close" class="icon-close"></span>
</div><!-- #searchform-header-replace -->