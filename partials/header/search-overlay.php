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
$anchorlink_text = oceanwp_theme_strings( 'owp-string-hs-overlay-close-anchor', false );

// Unique form id.
$ocean_sf_id = oceanwp_unique_id( 'ocean-search-overlay-' );

// New accessibility settings.
$a11y_mode_tags    = oceanwp_is_accessibility_feature_enabled( 'ocean_accessibility_header_search_tags' );
$display_label     = oceanwp_is_accessibility_feature_enabled( 'ocean_display_header_search_form_label' );
$custom_label_text = get_theme_mod( 'ocean_custom_header_search_form_label', __( 'Search this website', 'oceanwp' ) );

// Aria labels, screen reader & placeholder text.
$form_aria_label  = oceanwp_theme_strings( 'owp-string-search-form-label', false );
$input_aria_label = oceanwp_theme_strings( 'owp-string-search-field', false );
$form_close_scrd  = oceanwp_theme_strings( 'owp-string-esc-close-notice', false );
$close_form_label = oceanwp_theme_strings( 'owp-string-close-search-form', false );
$form_placeholder = oceanwp_theme_strings( 'owp-string-search-overlay-search-text', false );

// Fallback to default theme string if custom text is empty.
$label_text = ! empty( $custom_label_text ) ? $custom_label_text : $form_aria_label;

// Search form aria attributes.
$form_aria_label_attr       = '';
$form_input_aria_label_attr = '';

if ( ! $display_label ) {
    $form_aria_label_attr       = sprintf( 'aria-label="%s"', esc_attr( $label_text ) );
    $form_input_aria_label_attr = sprintf( 'aria-label="%s"', esc_attr( $input_aria_label ) );
}

// Setup the ESC description ID.
$desc_id = $ocean_sf_id . '-desc';

// HTML element for the close button.
if ( $a11y_mode_tags ) {
    $close_tag   = 'button';
    $close_attrs = 'type="button" class="button-close search-overlay-close"';
} else {
    $close_tag   = 'a';
    $close_attrs = sprintf( 'href="%s" class="search-overlay-close"', esc_url( ocean_get_site_name_anchors( $anchorlink_text ) ) );
}

?>

<div id="searchform-overlay" class="header-searchform-wrap clr" <?php echo $item_search_overlay_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <div class="container clr">
        <form <?php echo $form_aria_label_attr; ?> role="search" method="get" class="header-searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">

        <?php if ( ! $display_label ) : ?>
            <<?php echo $close_tag; ?> <?php echo $close_attrs; ?> aria-label="<?php echo esc_attr( $close_form_label ); ?>">
                <span></span>
            </<?php echo $close_tag; ?>>
        <?php endif; ?>

        <?php if ( $display_label ) : ?>
            <label for="<?php echo esc_attr( $ocean_sf_id ); ?>" class="header-overlay header-search-visible-label">
                <?php echo esc_html( $label_text ); ?>
            </label>
        <?php else : ?>
            <span class="screen-reader-text">
                <?php echo esc_html( $label_text ); ?>
            </span>
        <?php endif; ?>

        <input type="search" id="<?php echo esc_attr( $ocean_sf_id ); ?>" class="searchform-overlay-input" name="s" autocomplete="off" value="" <?php echo $form_input_aria_label_attr; ?> aria-describedby="<?php echo esc_attr( $desc_id ); ?>" />

        <span class="search-text">
            <?php echo esc_html( $form_placeholder ); ?>
            <span aria-hidden="true" focusable="false"><i></i><i></i><i></i></span>
        </span>

        <?php if ( 'any' !== $search_post_type ) : ?>
            <input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
        <?php endif; ?>
        <?php do_action( 'wpml_add_language_form_field' ); ?>

        <?php if ( $display_label ) : ?>
            <<?php echo $close_tag; ?> <?php echo $close_attrs; ?> aria-label="<?php echo esc_attr( $close_form_label ); ?>">
                <span></span>
            </<?php echo $close_tag; ?>>
        <?php endif; ?>

        <span id="<?php echo esc_attr( $desc_id ); ?>" class="screen-reader-text">
            <?php echo esc_html( $form_close_scrd ); ?>
        </span>

        </form>
    </div>
</div><!-- #searchform-overlay -->
