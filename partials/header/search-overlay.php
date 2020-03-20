<?php
/**
 * Site header search overlay
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' ); ?>

<div id="searchform-overlay" class="header-searchform-wrap clr">
	<div class="container clr">
	<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
			<a href="#" class="search-overlay-close" aria-label="<?php echo esc_attr__( 'Close Search', 'oceanwp' ); ?>"><span></span></a>
			<span class="screen-reader-text"><?php _e( 'Search for:', 'oceanwp' ); ?></span>
			<input class="searchform-overlay-input" type="search" name="s" autocomplete="off" value="" aria-placeholder="<?php echo esc_attr__( 'Type your text and hit enter to search', 'oceanwp' ); ?>" />
			<label><?php echo esc_attr__( 'Type text and hit enter to search', 'oceanwp' ); ?><span><i></i><i></i><i></i></span></label>
			<?php if ( 'any' != $post_type ) { ?>
				<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
			<?php } ?>
			<?php do_action( 'wpml_add_language_form_field' ); ?>
		</form>
	</div>
</div><!-- #searchform-overlay -->