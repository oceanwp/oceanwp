<?php
/**
 * The template for displaying search forms.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// Generate unique form ID. Based on the codes from the Twenty Twenty theme
$ocean_sf_id = oceanwp_unique_id( 'ocean-search-form-' );
$osf_id = esc_attr( $ocean_sf_id );

?>

<form role="search" method="get" class="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label for="<?php echo $osf_id; ?>">
		<span class="screen-reader-text"><?php _e( 'Search for:', 'oceanwp' ); ?></span>
		<input type="search" id="<?php echo $osf_id; ?>" class="field" autocomplete="off" placeholder="<?php echo esc_attr_x( 'Search', 'search placeholder', 'oceanwp' ); ?>" name="s">
		<?php if ( 'any' != $post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
		<?php } ?>
	</label>
	<?php do_action( 'wpml_add_language_form_field' ); ?>
</form>