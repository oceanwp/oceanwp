<?php
/**
 * Site header search overlay
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type.
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// Aria labels.
$oaria_close = __( 'Close search form', 'oceanwp' );

// Search attributes.
$item_search_overlay_attrs = apply_filters( 'oceanwp_attrs_overlay_search_bar', '' );


?>

<div id="searchform-overlay" class="header-searchform-wrap clr" <?php echo $item_search_overlay_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="container clr">
	<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
			<a href="javascript:void(0)" class="search-overlay-close" aria-label="<?php echo esc_attr( $oaria_close ); ?>"><span></span></a>
			<span class="screen-reader-text"><?php esc_html_e( 'Search for:', 'oceanwp' ); ?></span>
			<input class="searchform-overlay-input" type="search" name="s" autocomplete="off" value="" aria-placeholder="<?php oceanwp_theme_strings( 'owp-string-search-overlay-search-text', 'oceanwp' ); ?>" />
			<label><?php oceanwp_theme_strings( 'owp-string-search-overlay-search-text', 'oceanwp' ); ?><span aria-hidden="true"><i></i><i></i><i></i></span></label>
			<?php if ( 'any' !== $post_type ) { ?>
				<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
			<?php } ?>
			<?php do_action( 'wpml_add_language_form_field' ); ?>
		</form>
	</div>
</div><!-- #searchform-overlay -->
