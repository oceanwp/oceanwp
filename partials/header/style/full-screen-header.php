<?php
/**
 * Full Screen Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
} ?>

<div id="site-header-inner" class="container clr">

	<?php get_template_part( 'partials/header/logo' ); ?>

	<div id="site-navigation-wrap" class="clr">
		
		<div class="menu-bar-wrap clr">
			<div class="menu-bar-inner clr">
				<a href="#" class="menu-bar"><span class="ham"></span></a>
			</div>
		</div>

		<div id="full-screen-menu" class="clr">
			<div id="full-screen-menu-inner" class="clr">
				<?php get_template_part( 'partials/header/nav' ); ?>
			</div>
		</div>

	</div><!-- #site-header-wrap -->

	<?php get_template_part( 'partials/header/mobile-icon' ); ?>

</div><!-- #site-header-inner -->