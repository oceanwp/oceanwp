<?php
/**
 * The template for displaying search forms.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type.
$search_post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// Generate unique form ID.
$ocean_sf_id = oceanwp_unique_id( 'ocean-search-form-' );

$display_label     = oceanwp_is_accessibility_feature_enabled( 'ocean_display_header_search_form_label' );
$custom_label_text = get_theme_mod( 'ocean_custom_header_search_form_label', __( 'Search this website', 'oceanwp' ) );

$form_aria_label  = oceanwp_theme_strings('owp-string-search-form-label', false);
$input_aria_label = oceanwp_theme_strings('owp-string-search-field', false);
$form_placeholder = oceanwp_theme_strings( 'owp-string-search-text', false );
$form_close_scrd  = oceanwp_theme_strings( 'owp-string-esc-close-notice', false );

$label_text = ! empty( $custom_label_text )
	? $custom_label_text
	: $form_aria_label;

$form_aria_label_attr       = '';
$form_input_aria_label_attr = '';

if ( ! $display_label ) {

	$form_aria_label_attr = sprintf(
		'aria-label="%s"',
		esc_attr( $label_text )
	);

	$form_input_aria_label_attr = sprintf(
		'aria-label="%s"',
		esc_attr( $input_aria_label )
	);
}

// Setup the ESC description ID.
$desc_id = $ocean_sf_id . '-desc';

?>

<form <?php echo $form_aria_label_attr; ?> role="search" method="get" class="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">

	<?php if ( $display_label ) : ?>
        <label for="<?php echo esc_attr( $ocean_sf_id ); ?>" class="header-search-visible-label">
            <?php echo esc_html( $label_text ); ?>
        </label>
    <?php endif; ?>

	<input type="search" id="<?php echo esc_attr( $ocean_sf_id ); ?>" class="field" autocomplete="off" placeholder="<?php echo esc_attr( $form_placeholder ); ?>" name="s" <?php echo $form_input_aria_label_attr; ?> aria-describedby="<?php echo esc_attr( $desc_id ); ?>">

	<?php if ( 'any' !== $search_post_type ) : ?>
        <input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
    <?php endif; ?>
    <?php do_action( 'wpml_add_language_form_field' ); ?>

	<span id="<?php echo esc_attr( $desc_id ); ?>" class="screen-reader-text">
        <?php echo esc_html( $form_close_scrd ); ?>
    </span>

</form>
