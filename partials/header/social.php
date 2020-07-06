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
if (  'simple' != $style ) {
	$classes[] = 'social-with-style';
} else {
	$classes[] = 'simple-social';
}

// Turn classes into space seperated string.
$classes = implode( ' ', $classes );

// Inner classes.
$inner_classes = array( 'social-menu-inner', 'clr' );
if ( 'simple' != $style ) {
	$inner_classes[] = $style;
}

// Turn classes into space seperated string.
$inner_classes = implode( ' ', $inner_classes );

// Return if there aren't any profiles defined and define var.
if ( ( ! $profiles = get_theme_mod( 'ocean_menu_social_profiles' ) )
	&& empty( $get_content ) ) {
	return;
}

// Get theme mods.
$link_target = get_theme_mod( 'ocean_menu_social_target', 'blank' );

$link_rel = '';
if ( $link_target == 'blank' ) {
	$link_rel = 'rel="noopener noreferrer"';
}

?>



<div class="<?php echo esc_attr( $classes ); ?>">

	<div class="<?php echo esc_attr( $inner_classes ); ?>">

		<?php
        // Check if there is a template for the footer
        if ( ! empty( $get_id ) ) {

			// If Elementor
		    if ( OCEANWP_ELEMENTOR_ACTIVE && $elementor ) {

		        OceanWP_Elementor::get_social_menu_content();

		    }

		    // If Beaver Builder
		    else if ( OCEANWP_BEAVER_BUILDER_ACTIVE && ! empty( $get_id ) ) {

		        echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

		    }

		    // Else
		    else {

		        // Display template content
		        echo do_shortcode( $get_content );

		    }

		// Display social
		} else { ?>

			<ul aria-label="<?php echo esc_attr__( 'Social links', 'oceanwp' ); ?>">

				<?php
				// Loop through social options
				foreach ( $social_options as $key => $val ) {

					// Get URL from the theme mods
					$url = isset( $profiles[$key] ) ? $profiles[$key] : '';

					$esc_url = esc_url( $url );

					// Get correct label
					$label = ! empty( $val['label'] ) ? esc_attr( $val['label'] ) : '';
					if ( $link_target == 'blank' ) {
						$aria_label = 'aria-label="' . $label . ' '. esc_attr__( '(opens in a new tab)', 'oceanwp' ).'"';
					}
					else {
						$aria_label = 'aria-label="' . $label . '"';
					}

					// Display if there is a value defined
					if ( $url ) {

						// Display link
						echo '<li class="oceanwp-'. esc_attr( $key ) .'">';

							if ( in_array( $key, array( 'skype' ) ) ) {
								echo '<a href="skype:'. esc_attr( $url ) .'?call" aria-label="'. esc_attr__( 'Skype (opens in your application)', 'oceanwp' ) .'" target="_self">';
							} else if ( in_array( $key, array( 'email' ) ) ) {
								echo '<a href="mailto:'. antispambot( esc_attr( $url ) ) .'" aria-label="'. esc_attr__( 'Send email (opens in your application)', 'oceanwp' ) .'" target="_self">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							} else {
								echo '<a href="'. $esc_url .'" '. $aria_label .' target="_'. esc_attr( $link_target ) .'" '. $link_rel .'>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							}

							echo '<span class="'. esc_attr( $val['icon_class'] ) .'" aria-hidden="true"></span>';

							echo '</a>';

						echo '</li>';

					} // End url check

				} // End loop ?>

			</ul>

		<?php } ?>

	</div>

</div>
