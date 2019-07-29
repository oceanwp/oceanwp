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
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' ); ?>

<form method="get" class="searchform" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<input type="text" class="field" name="s" id="s" placeholder="<?php esc_html_e( 'Search', 'oceanwp' ); ?>">
	<?php if ( 'any' != $post_type ) { ?>
		<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
	<?php } ?>
	<?php do_action( 'wpml_add_language_form_field' ); ?>
</form>