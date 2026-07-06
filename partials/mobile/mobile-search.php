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
$search_post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// Assign mobile search form unique ID.
$ocean_msf_id = oceanwp_unique_id( 'ocean-mobile-search-' );

// New accessibility settings.
$display_label     = oceanwp_is_accessibility_feature_enabled( 'ocean_display_header_search_form_label' );
$custom_label_text = get_theme_mod( 'ocean_custom_header_search_form_label', __( 'Search this website', 'oceanwp' ) );

// Aria labels, screen reader & placeholder text strings.
$form_aria_label   = oceanwp_theme_strings( 'owp-string-search-form-label', false );
$form_placeholder  = oceanwp_theme_strings( 'owp-string-mobile-search-text', false );
$submit_aria_label = oceanwp_theme_strings( 'owp-string-mobile-submit-search', false );
$form_input        = oceanwp_theme_strings( 'owp-string-search-field', false );

// Fallback to default theme string if custom text is empty.
$label_text = ! empty( $custom_label_text ) ? $custom_label_text : $form_aria_label;

// Search form conditional aria attributes construction.
$form_aria_label_attr       = sprintf( 'aria-label="%s"', esc_attr( $label_text ) );
$form_input_aria_label_attr = sprintf( 'aria-label="%s"', esc_attr( $form_input ) );

// Label class.
$label_class = '';

if ( $display_label ) {
	$label_class = 'oceanwp-mobile-menu-search-visible-label';
} else {
	$label_class = 'screen-reader-text';
}
?>

<div id="mobile-menu-search" class="clr">
	<form <?php echo $form_aria_label_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="mobile-searchform" role="search">
		
		<span class="<?php echo esc_attr( $label_class ); ?>">
			<?php echo esc_html( $label_text ); ?>
		</span>

		<input type="search" id="<?php echo esc_attr( $ocean_msf_id ); ?>" class="field" name="s" autocomplete="off" value="" placeholder="<?php echo esc_attr( $form_placeholder ); ?>" <?php echo $form_input_aria_label_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> />
		
		<button aria-label="<?php echo esc_attr( $submit_aria_label ); ?>" type="submit" class="searchform-submit">
			<?php oceanwp_icon( 'search' ); ?>
		</button>

		<?php if ( 'any' !== $search_post_type ) : ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
		<?php endif; ?>
		<?php do_action( 'wpml_add_language_form_field' ); ?>

	</form>
</div>
