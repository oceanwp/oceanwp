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

// Get ID
$get_id = get_theme_mod( 'ocean_top_bar_social_alt_template' );

// Check if page is Elementor page
$elementor = get_post_meta( $get_id, '_elementor_edit_mode', true );

// Get content
$get_content = oceanwp_top_bar_social_alt_content();

// Display Social alternative
if ( $get_id ) : ?>

	<div id="top-bar-social-alt" class="clr <?php echo esc_attr( $classes ); ?>">
		<?php
	    // If Elementor
	    if ( OCEANWP_ELEMENTOR_ACTIVE && $elementor ) {

	        OceanWP_Elementor::get_topbar_social_alt_content();

	    }

	    // If Beaver Builder
	    else if ( OCEANWP_BEAVER_BUILDER_ACTIVE && ! empty( $get_id ) ) {

	        echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

	    }

	    // Else
	    else {

	        // Display template content
	        echo do_shortcode( $get_content );

	    } ?>
	</div><!-- #top-bar-social-alt -->

<?php return; endif; ?>

<?php
// Return if there aren't any profiles defined and define var
if ( ! $profiles = get_theme_mod( 'ocean_top_bar_social_profiles' ) ) {
	return;
}

// Get theme mods
$link_target = get_theme_mod( 'ocean_top_bar_social_target', 'blank' );
$link_target = $link_target ? $link_target : 'blank';

$link_rel='';
if ( $link_target == 'blank' ) {
	$link_rel = 'rel="noopener noreferrer"';
}
?>

<div id="top-bar-social" class="clr <?php echo esc_attr( $classes ); ?>">

	<ul class="clr" aria-label="<?php echo esc_attr__( 'Social links', 'oceanwp' ); ?>">

		<?php
		// Loop through social options
		foreach ( $social_options as $key => $val ) {

			// Get URL from the theme mods
			$url = isset( $profiles[$key] ) ? $profiles[$key] : '';

			$esc_url = esc_url( $url );

			// Get correct label
			$label = ! empty( $val['label'] ) ? esc_attr( $val['label'] ) : '';
			if ( $link_target == 'blank' ) {
				$aria_label = 'aria-label="' . $label . ' '. esc_attr__( '(opens in a new tab)', 'oceanwp' ) .'"';
			}
			else {
				$aria_label = 'aria-label="' . $label . '"';
			}

			// Display if there is a value defined
			if ( $url ) {

				// Display link
				echo '<li class="oceanwp-'. esc_attr( $key ) .'">';

					if ( in_array( $key, array( 'skype' ) ) ) {
						echo '<a href="skype:'. $esc_url .'?call" aria-label="'. esc_attr__( 'Skype (opens in your application)', 'oceanwp' ) .'" target="_self">';
					} else if ( in_array( $key, array( 'email' ) ) ) {
						echo '<a href="mailto:'. antispambot( $esc_url ) .'" aria-label="'. esc_attr__( 'Send email (opens in your application)', 'oceanwp' ) .'" target="_self">';
					} else {
						echo '<a href="'. $esc_url .'" '. $aria_label .' target="_'. esc_attr( $link_target ) .'" '. $link_rel .'>';
					}

					echo '<span class="'. esc_attr( $val['icon_class'] ) .'" aria-hidden="true"></span>';

					echo '</a>';

				echo '</li>';

			} // End url check

		} // End loop ?>

	</ul>

</div><!-- #top-bar-social -->