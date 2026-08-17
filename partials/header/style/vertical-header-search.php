<?php
/**
 * Search Form for The Vertical Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type.
$search_post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// New accessibility and customizer settings.
$display_label     = oceanwp_is_accessibility_feature_enabled( 'ocean_display_header_search_form_label' );
$custom_label_text = oceanwp_get_header_search_form_label();

// Fallback to layout default theme string if custom input text is empty.
$default_label_text = oceanwp_theme_strings( 'owp-string-mobile-search', false );
$label_text         = ! empty( $custom_label_text ) ? $custom_label_text : $default_label_text;

// Aria labels.
$form_aria_text   = oceanwp_theme_strings( 'owp-string-website-search-form', false );
$input_aria_text  = oceanwp_theme_strings( 'owp-string-search-field', false );
$form_placeholder = oceanwp_theme_strings( 'owp-string-vertical-header-search-text', false );

// Setup conditional label class.
$label_class = $display_label ? 'vertical-header-search-visible-label' : 'screen-reader-text';

// Search form conditional input aria attribute.
$form_input_aria_label_attr = '';
$form_placeholder_attr      = '';
if ( ! $display_label ) {
	$form_input_aria_label_attr = sprintf( 'aria-label="%s"', esc_attr( $input_aria_text ) );
	$form_placeholder_attr      = sprintf( 'placeholder="%s"', esc_attr( $form_placeholder ) );
}
?>

<div id="vertical-searchform" class="header-searchform-wrap clr">
	<form id="verh-search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform" role="search" aria-label="<?php echo esc_attr( $form_aria_text ); ?>">
		
		<label for="verh-input" class="<?php echo esc_attr( $label_class ); ?>">
			<?php echo esc_html( $label_text ); ?>
		</label>

		<input id="verh-input" type="search" name="s" autocomplete="off" value="" <?php echo $form_placeholder_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> <?php echo $form_input_aria_label_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>/>

		<button type="submit" class="search-submit" aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-mobile-submit-search', false ) ); ?>">
			<?php oceanwp_icon( 'search' ); ?>
		</button>

		<div class="search-bg"></div>

		<?php if ( 'any' !== $search_post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
		<?php } ?>
		<?php do_action( 'wpml_add_language_form_field' ); ?>

	</form>
</div><!-- #vertical-searchform -->
