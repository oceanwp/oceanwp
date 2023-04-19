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
$search_post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// Search attributes.
$item_search_overlay_attrs = apply_filters( 'oceanwp_attrs_overlay_search_bar', '' );

// SEO link txt.
$anchorlink_text = esc_html( oceanwp_theme_strings( 'owp-string-hs-overlay-close-anchor', false ) );

?>

<div id="searchform-overlay" class="header-searchform-wrap clr" <?php echo $item_search_overlay_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="container clr">
	<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
			<a href="<?php echo esc_url( ocean_get_site_name_anchors( $anchorlink_text ) ); ?>" class="search-overlay-close" aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-close-search-form', false ) ); ?>"><span></span></a>
			<span class="screen-reader-text"><?php echo esc_html( oceanwp_theme_strings( 'owp-string-search-form-label', false ) ); ?></span>
			<input aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-search-field', false ) ); ?>" class="searchform-overlay-input" type="search" name="s" autocomplete="off" value="" />
			<span class="search-text"><?php echo esc_html( oceanwp_theme_strings( 'owp-string-search-overlay-search-text', false ) ); ?><span aria-hidden="true"><i></i><i></i><i></i></span></span>
			<?php if ( 'any' !== $search_post_type ) { ?>
				<input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
			<?php } ?>
			<?php do_action( 'wpml_add_language_form_field' ); ?>
		</form>
	</div>
</div><!-- #searchform-overlay -->
