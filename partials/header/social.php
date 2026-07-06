<?php
/**
 * Header social menu template part.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get social options array.
$social_options = oceanwp_social_options();

// Return if array is empty.
if ( empty( $social_options ) ) {
	return;
}

// Get template ID.
$get_id = get_theme_mod( 'ocean_menu_social_template' );

// Check if page is Elementor page.
$elementor  = get_post_meta( $get_id, '_elementor_edit_mode', true );

// Get content.
$get_content = oceanwp_social_menu_content();

// Style.
$style = get_theme_mod( 'ocean_menu_social_style', 'simple' );
$style = $style ? $style : 'simple';

// Classes.
$classes = array( 'oceanwp-social-menu', 'clr' );

// Add class if social menu has class.
if ( 'simple' != $style ) {
	$classes[] = 'social-with-style';
} else {
	$classes[] = 'simple-social';
}

// Turn classes into space separated string.
$classes = implode( ' ', $classes );

// Inner classes.
$inner_classes = array( 'social-menu-inner', 'clr' );
if ( 'simple' != $style ) {
	$inner_classes[] = $style;
}

// Turn classes into space separated string.
$inner_classes = implode( ' ', $inner_classes );

// Return if there aren't any profiles defined and define var.
$profiles = get_theme_mod( 'ocean_menu_social_profiles' );
if ( ! $profiles && empty( $get_content ) ) {
	return;
}

// Get theme mods.
$link_target           = get_theme_mod( 'ocean_menu_social_target', 'blank' );
$display_external_mark = get_theme_mod( 'ocean_display_social_external_icon', false );

$link_rel = '';
if ( 'blank' === $link_target ) {
	$link_rel = 'rel="noopener noreferrer"';
}

// Construct visual external link mark component.
$external_icon_markup = '';
if ( $display_external_mark && 'blank' === $link_target ) {
	// Outputs a visual indicator icon hidden safely from assistive text narrators.
	$external_icon_markup = '<svg class="header-social-menu-external-mark" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="1em" height="1em">
		<path d="M5 3h8v8h-2V6.41l-6.29 6.3-1.42-1.42L9.59 5H5V3z" fill="currentColor"></path>
	</svg>';
}

?>

<div class="<?php echo esc_attr( $classes ); ?>">

	<div class="<?php echo esc_attr( $inner_classes ); ?>">

		<?php
		// Check if there is a template for the footer.
		if ( ! empty( $get_id ) ) {

			// If Elementor.
			if ( OCEANWP_ELEMENTOR_ACTIVE && $elementor ) {

				OceanWP_Elementor::get_social_menu_content();

			}

			// If Beaver Builder.
			else if ( OCEANWP_BEAVER_BUILDER_ACTIVE && ! empty( $get_id ) ) {

				echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

			} else if ( class_exists( 'SiteOrigin_Panels' ) && get_post_meta( $get_id, 'panels_data', true ) ) {

				echo SiteOrigin_Panels::renderer()->render( $get_id );

			}

			// Else.
			else {

				// If Gutenberg.
				if ( ocean_is_block_template( $get_id ) ) {
					$get_content = apply_filters( 'oceanwp_social_menu_content', do_blocks( $get_content ) );
				}

				// Display template content.
				echo do_shortcode( $get_content );

			}

		// Display social.
		} else { ?>

			<ul aria-label="<?php echo esc_attr__( 'Social links', 'oceanwp' ); ?>">

				<?php
				// Loop through social options.
				foreach ( $social_options as $key => $val ) {

					// Get URL from the theme mods.
					$url = isset( $profiles[$key] ) ? $profiles[$key] : '';

					$esc_url = esc_url( $url );

					// Get correct label.
					$label = ! empty( $val['label'] ) ? esc_attr( $val['label'] ) : '';
					if ( 'blank' == $link_target ) {
						$aria_label = 'aria-label="' . $label . ' ' . esc_attr__( '(opens in a new tab)', 'oceanwp' ) . '"';
					} else {
						$aria_label = 'aria-label="' . $label . '"';
					}

					// Display if there is a value defined.
					if ( $url ) {

						echo '<li class="oceanwp-' . esc_attr( $key ) . '">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped.

							if ( in_array( $key, array( 'skype' ), true ) ) {
								echo '<a href="skype:' . esc_attr( $url ) . '?call" aria-label="' . esc_attr__( 'Skype (opens in your application)', 'oceanwp' ) . '" target="_self">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped.
							} else if ( in_array( $key, array( 'email' ), true ) ) {
								echo '<a href="mailto:' . antispambot( esc_attr( $url ) ) . '" aria-label="' . esc_attr__( 'Send email (opens in your application)', 'oceanwp' ) . '" target="_self">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped.
							} else {
								echo '<a href="' . $esc_url . '" ' . $aria_label . ' target="_' . esc_attr( $link_target ) . '" ' . $link_rel . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped.
							}

							echo $val['icon_class']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped during generation blocks.
							
							// Add visual arrow icon for external links if conditions match.
							if ( ! empty( $external_icon_markup ) && ! in_array( $key, array( 'skype', 'email' ), true ) ) {
								echo $external_icon_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Safe SVG markup.
							}

							echo '</a>';

						echo '</li>';

					} // End url check.

				} // End loop. ?>

			</ul>

		<?php } ?>

	</div>

</div>
