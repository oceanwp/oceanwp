<?php
/**
 * Mobile search template.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type.
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

$ocean_msf_id = oceanwp_unique_id( 'ocean-mobile-search' );
$mosf_id      = esc_attr( $ocean_msf_id );

?>

<div id="mobile-menu-search" class="clr">
	<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="mobile-searchform" role="search" aria-label="<?php esc_attr_e( 'Search for:', 'oceanwp' ); ?>">
		<label for="<?php echo esc_attr( $mosf_id ); ?>">
			<input type="search" name="s" autocomplete="off" placeholder="<?php oceanwp_theme_strings( 'owp-string-mobile-search-text', 'oceanwp' ); ?>" />
			<button type="submit" class="searchform-submit" aria-label="<?php esc_attr_e( 'Submit Search', 'oceanwp' ); ?>">
				<i class="icon icon-magnifier" aria-hidden="true"></i>
			</button>
			<?php if ( 'any' !== $post_type ) { ?>
				<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
			<?php } ?>
		</label>
		<?php do_action( 'wpml_add_language_form_field' ); ?>
	</form>
</div><!-- .mobile-menu-search -->
