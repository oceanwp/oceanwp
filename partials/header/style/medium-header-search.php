<?php
/**
 * Search Form for The Medium Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type.
$search_post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

$display_label     = oceanwp_is_accessibility_feature_enabled( 'ocean_display_header_search_form_label' );
$custom_label_text = get_theme_mod( 'ocean_custom_header_search_form_label', __( 'Search this website', 'oceanwp' ) );

// Fallback to layout default theme string if custom input text is empty.
$default_label_text = oceanwp_theme_strings( 'owp-string-mobile-search', false );
$label_text         = ! empty( $custom_label_text ) ? $custom_label_text : $default_label_text;

// Aria labels.
$form_aria_text  = oceanwp_theme_strings( 'owp-string-website-search-form', false );
$input_aria_text = oceanwp_theme_strings( 'owp-string-search-field', false );
$form_placehoder = oceanwp_theme_strings( 'owp-string-medium-header-search-text', false );

// Setup conditional label class.
$label_class = $display_label ? 'medium-header-search-visible-label' : 'screen-reader-text';

// Search form conditional input aria attribute.
$form_input_aria_label_attr = '';
if ( ! $display_label ) {
	$form_input_aria_label_attr = sprintf( 'aria-label="%s"', esc_attr( $input_aria_text ) );
}
?>

<div id="medium-searchform" class="header-searchform-wrap clr">
	<form id="medh-search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform" role="search" aria-label="<?php echo esc_attr( $form_aria_text ); ?>">
		
		<label for="medh-input" class="<?php echo esc_attr( $label_class ); ?>">
			<?php echo esc_html( $label_text ); ?>
		</label>

		<input id="medh-input" type="search" name="s" autocomplete="off" value="" placeholder="<?php echo esc_attr( $form_placehoder ); ?>" <?php echo $form_input_aria_label_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped. ?>/>

		<button type="submit" class="search-submit"><?php oceanwp_icon( 'search' ); ?>
			<span class="screen-reader-text">
				<?php echo esc_html( oceanwp_theme_strings( 'owp-string-mobile-submit-search', false ) ); ?>
			</span>
		</button>
		
		<div class="search-bg"></div>

		<?php if ( 'any' !== $search_post_type ) : ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
		<?php endif; ?>
		<?php do_action( 'wpml_add_language_form_field' ); ?>

	</form>
</div><!-- #medium-searchform -->
