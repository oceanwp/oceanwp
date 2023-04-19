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

?>

<a href="<?php echo esc_url( ocean_get_site_name_anchors( $anchorlink_text ) ); ?>" class="vertical-toggle"><span class="screen-reader-text"><?php echo esc_html( oceanwp_theme_strings( 'owp-string-vertical-header-toggle', false ) ); ?></span>
	<div class="hamburger hamburger--spin" <?php echo $vertical_header_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<div class="hamburger-box">
			<div class="hamburger-inner"></div>
		</div>
	</div>
</a>
