<?php
/**
 * Hamburger button for The Vertical Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$vertical_header_attrs = apply_filters( 'oceanwp_attrs_vertical_header_style', '' );

// SEO link txt.
$anchorlink_text = esc_html( oceanwp_theme_strings( 'owp-string-vertical-header-anchor', false ) );

// New accessibility and customizer settings.
$a11y_mode_tags = oceanwp_is_semantic_desktop_header_enabled();
$toggle_text    = oceanwp_theme_strings( 'owp-string-vertical-header-toggle', false );

// Core state attributes targeting the master header panel.
$aria_attrs = 'aria-expanded="false" aria-controls="site-header"';

$trigger_tag = 'a';
$trigger_attrs = sprintf(
	'href="%s" class="vertical-toggle" %s',
	esc_url( ocean_get_site_name_anchors( $anchorlink_text ) ),
	$aria_attrs
);

if ( $a11y_mode_tags ) {
	$trigger_tag   = 'button';
	$trigger_attrs = 'type="button" class="vertical-toggle" ' . $aria_attrs;
}

?>

<<?php echo $trigger_tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped. ?> <?php echo $trigger_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<span class="screen-reader-text"><?php echo esc_html( $toggle_text ); ?></span>
	<div class="hamburger hamburger--spin" aria-hidden="true" focusable="false" <?php echo $vertical_header_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<div class="hamburger-box">
			<div class="hamburger-inner"></div>
		</div>
	</div>
</<?php echo $trigger_tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output already escaped. ?>>
