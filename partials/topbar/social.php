<?php
/**
 * Topbar social profiles
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

// Add classes based on topbar style
$classes = '';
$topbar_style = get_theme_mod( 'ocean_top_bar_style', 'one' );
if ( 'one' == $topbar_style ) {
	$classes = 'top-bar-right';
} elseif ( 'two' == $topbar_style ) {
	$classes = 'top-bar-left';
} elseif ( 'three' == $topbar_style ) {
	$classes = 'top-bar-centered';
}

// Display Social alternative
if ( $social_alt = oceanwp_top_bar_social_alt() ) : ?>

	<div id="top-bar-social-alt" class="clr <?php echo esc_attr( $classes ); ?>">
		<?php echo do_shortcode( $social_alt ); ?>
	</div><!-- #top-bar-social-alt -->

<?php return; endif; ?>

<?php
// Return if there aren't any profiles defined and define var
if ( ! $profiles = get_theme_mod( 'ocean_top_bar_social_profiles' ) ) {
	return;
}

// Get theme mods
$link_target = get_theme_mod( 'ocean_top_bar_social_target', 'blank' );
$link_target = $link_target ? $link_target : 'blank'; ?>

<div id="top-bar-social" class="clr <?php echo esc_attr( $classes ); ?>">

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

					if ( in_array( $key, array( 'skype', 'email' ) ) ) {
						echo '<a href="'. esc_attr( $url ) .'" title="'. esc_attr( $val['label'] ) .'" target="_'. esc_attr( $link_target ) .'">';
					} else {
						echo '<a href="'. esc_url( $url ) .'" title="'. esc_attr( $val['label'] ) .'" target="_'. esc_attr( $link_target ) .'">';
					}

						echo '<span class="'. esc_attr( $val['icon_class'] ) .'"></span>';

					echo '</a>';

				echo '</li>';

			} // End url check

		} // End loop ?>

	</ul>

</div><!-- #top-bar-social -->