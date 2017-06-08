<?php
/**
 * Site header search overlay
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} ?>

<div id="searchform-overlay" class="header-searchform-wrap clr">
	<div class="container clr">
		<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
			<a href="#" class="search-overlay-close"><span></span></a>
			<input type="search" name="s" autocomplete="off" value="" />
			<label><?php echo esc_html_e( 'Type your text and hit enter to search', 'oceanwp' ); ?><span><i></i><i></i><i></i></span></label>
		</form>
	</div>
</div><!-- #searchform-overlay -->