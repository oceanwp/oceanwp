<?php
/**
 * Search for the full screen mobile style.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( 'fullscreen' !== oceanwp_mobile_menu_style() ) {
	return;
}

// Post type.
$search_post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// Assign mobile full-screen search input a unique ID.
$ocean_fs_id = oceanwp_unique_id( 'ocean-mobile-fs-search-' );

// New accessibility and customizer settings.
$display_label     = oceanwp_is_accessibility_feature_enabled( 'ocean_display_header_search_form_label' );
$custom_label_text = get_theme_mod( 'ocean_custom_header_search_form_label', __( 'Search this website', 'oceanwp' ) );

// Aria labels, screen reader & text strings.
$form_aria_label  = oceanwp_theme_strings( 'owp-string-search-form-label', false );
$input_aria_label = oceanwp_theme_strings( 'owp-string-search-field', false );

// Fallback to default theme string if custom text is empty.
$label_text = ! empty( $custom_label_text ) ? $custom_label_text : $form_aria_label;

// Search form conditional aria attributes construction.
$form_aria_label_attr       = '';
$form_input_aria_label_attr = '';

if ( ! $display_label ) {
	$form_aria_label_attr       = sprintf( 'aria-label="%s"', esc_attr( $label_text ) );
	$form_input_aria_label_attr = sprintf( 'aria-label="%s"', esc_attr( $input_aria_label ) );
}
?>

<div id="mobile-search" class="clr">
	<form id="mfs-search" <?php echo $form_aria_label_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped ?> method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform" role="search">
		
		<?php if ( $display_label ) : ?>
			<label for="<?php echo esc_attr( $ocean_fs_id ); ?>" class="mobile-fs-search-visible-label">
				<?php echo esc_html( $label_text ); ?>
			</label>
		<?php else : ?>
			<span class="screen-reader-text">
				<?php echo esc_html( $label_text ); ?>
			</span>
		<?php endif; ?>

		<span class="search-text"><?php echo esc_html( oceanwp_theme_strings( 'owp-string-mobile-fs-search-text', false ) ); ?><span aria-hidden="true" focusable="false"><i></i><i></i><i></i></span></span>
		
		<input 
			id="<?php echo esc_attr( $ocean_fs_id ); ?>" 
			type="search" 
			name="s" 
			value="" 
			autocomplete="off" 
			<?php echo $form_input_aria_label_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already eascaped ?> 
		/>

		<?php if ( 'any' !== $search_post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $search_post_type ); ?>">
		<?php } ?>
		<?php do_action( 'wpml_add_language_form_field' ); ?>

	</form>
</div>
