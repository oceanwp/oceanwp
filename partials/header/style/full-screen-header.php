<?php
/**
 * Full Screen Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get classes.
$classes = array( 'clr' );

// Add container class.
if ( true !== get_theme_mod( 'ocean_header_full_width', false ) ) {
	$classes[] = 'container';
}

// Turn classes into space separated string.
$classes = implode( ' ', $classes );

// SEO link txt.
$anchorlink_text = esc_html( oceanwp_theme_strings( 'owp-string-fullscreen-header-anchor', false ) );

// New accessibility and customizer settings.
$a11y_mode_tags  = oceanwp_is_semantic_desktop_header_enabled();
$menu_label_text = esc_html__( 'Main Menu', 'oceanwp' );

// Construct accessible operational attributes for disclosure control components
$aria_attrs = 'aria-expanded="false" aria-controls="full-screen-menu"';

$trigger_tag   = 'a';
$trigger_attrs = sprintf( 'href="%s" class="menu-bar" %s', esc_url( ocean_get_site_name_anchors( $anchorlink_text ) ), $aria_attrs );

if ( $a11y_mode_tags ) {
	$trigger_tag   = 'button';
	$trigger_attrs = 'type="button" class="menu-bar" ' . $aria_attrs;
}

?>

<?php do_action( 'ocean_before_header_inner' ); ?>

<div id="site-header-inner" class="<?php echo esc_attr( $classes ); ?>">

	<?php do_action( 'ocean_header_inner_left_content' ); ?>

	<?php get_template_part( 'partials/header/logo' ); ?>

	<div id="site-navigation-wrap" class="clr">

		<div class="menu-bar-wrap clr">
			<div class="menu-bar-inner clr">
				
				<<?php echo $trigger_tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped. ?> <?php echo $trigger_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped. ?>>
					<span class="ham" aria-hidden="true" focusable="false"></span>
					<span class="screen-reader-text"><?php echo esc_html( $menu_label_text ); ?></span>
				</<?php echo $trigger_tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped ?>>

			</div>
		</div>

		<div id="full-screen-menu" class="clr">
			<div id="full-screen-menu-inner" class="clr">
				<?php get_template_part( 'partials/header/nav' ); ?>

				<span class="screen-reader-text">
					<?php echo esc_html__( 'Press Escape to close the Main Menu panel', 'oceanwp') ?>
				</span>

			</div>
		</div>

	</div><!-- #site-header-wrap -->

	<?php do_action( 'ocean_header_inner_right_content' ); ?>

</div><!-- #site-header-inner -->

<?php get_template_part( 'partials/mobile/mobile-dropdown' ); ?>

<?php do_action( 'ocean_after_header_inner' ); ?>
