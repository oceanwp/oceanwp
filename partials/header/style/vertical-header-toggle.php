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

?>

<a href="javascript:void(0)" class="vertical-toggle">
	<div class="hamburger hamburger--spin" <?php echo $vertical_header_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<div class="hamburger-box">
			<div class="hamburger-inner"></div>
		</div>
	</div>
</a>
