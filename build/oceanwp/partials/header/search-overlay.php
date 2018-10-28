<?php
/**
 * Site header search overlay
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' ); ?>

<div id="searchform-overlay" class="header-searchform-wrap clr">
	<div class="container clr">
		<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
			<a href="#" class="search-overlay-close"><span></span></a>
			<input class="searchform-overlay-input" type="search" name="s" autocomplete="off" value="" />
			<label><?php echo esc_html_e( 'Type your text and hit enter to search', 'oceanwp' ); ?><span><i></i><i></i><i></i></span></label>
			<?php if ( 'any' != $post_type ) { ?>
				<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
			<?php } ?>
		</form>
	</div>
</div><!-- #searchform-overlay -->