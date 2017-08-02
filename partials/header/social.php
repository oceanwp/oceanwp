<?php
/**
 * Header social menu template part.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get social options array
$social_options = oceanwp_social_options();

// Return if $social_options array is empty
if ( empty( $social_options ) ) {
	return;
}

// Style
$style = get_theme_mod( 'ocean_menu_social_style', 'simple' );
$style = $style ? $style : 'simple';

// Classes
$classes = 'social-menu-inner clr';
if ( 'simple' != $style ) {
	$classes .= ' '. $style;
}

// Add class if social menu has class
$has_social = '';
if ( 'simple' != $style ) {
	$has_social .= 'social-with-style';
} else {
	$has_social .= 'simple-social';
}

// Return if there aren't any profiles defined and define var
if ( ! $profiles = get_theme_mod( 'ocean_menu_social_profiles' ) ) {
	return;
}

// Get theme mods
$link_target = get_theme_mod( 'ocean_menu_social_target', 'blank' );

// Only used on main menu
if ( has_nav_menu( 'main_menu' ) ) { ?>

	<div id="oceanwp-social-menu" class="<?php echo esc_attr( $has_social ); ?> clr">

		<div class="<?php echo esc_attr( $classes ); ?>">

			<ul>

				<?php
				// Loop through social options
				foreach ( $social_options as $key => $val ) {

					// Get URL from the theme mods
					$url = isset( $profiles[$key] ) ? $profiles[$key] : '';

					// Display if there is a value defined
					if ( $url ) {

						// Display link
						echo '<li class="oceanwp-'. esc_attr( $key ) .'">';

							if ( in_array( $key, array( 'skype' ) ) ) {
								echo '<a href="skype:'. esc_attr( $url ) .'?call" target="_self">';
							} else if ( in_array( $key, array( 'email' ) ) ) {
								echo '<a href="mailto:'. esc_attr( $url ) .'" target="_self">';
							} else {
								echo '<a href="'. esc_url( $url ) .'" target="_'. esc_attr( $link_target ) .'">';
							}

								echo '<span class="'. esc_attr( $val['icon_class'] ) .'"></span>';

							echo '</a>';

						echo '</li>';

					} // End url check

				} // End loop ?>

			</ul>

		</div>

	</div>

<?php
}