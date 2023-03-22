<?php
/**
 * Site header search header replace
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Search attributes.
$item_search_attrs = apply_filters( 'oceanwp_attrs_search_bar', '' );

// Post type.
$search_post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

?>

<div id="searchform-header-replace" class="header-searchform-wrap clr" <?php echo $item_search_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
		<span class="screen-reader-text"><?php echo esc_html( oceanwp_theme_strings( 'owp-string-search-form-label', false ) ); ?></span>
		<input aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-mobile-submit-search', false ) ); ?>" type="search" name="s" autocomplete="off" value="" placeholder="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-header-replace-search-text', false ) ); ?>" />
		<?php if ( 'any' !== $search_post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
		<?php } ?>
		<?php do_action( 'wpml_add_language_form_field' ); ?>
	</form>
	<span id="searchform-header-replace-close" aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-close-search-form', false ) ); ?>"><?php oceanwp_icon( 'close' ); ?></span>
</div><!-- #searchform-header-replace -->
