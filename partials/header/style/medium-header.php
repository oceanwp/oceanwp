<?php
/**
 * Medium Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get elements
$elements = oceanwp_medium_header_elements();

// Define counter
$count = ''; ?>

<?php do_action( 'ocean_before_header_inner' ); ?>

<div id="site-header-inner" class="clr">

	<?php
	// If elements
	if ( ! empty( $elements ) ) { ?>

		<div class="top-header-wrap clr">
			<div class="container clr">
				<div class="top-header-inner clr">

					<?php
					// Loop through elements
					foreach ( $elements as $element ) :

						// Counter
						$count++; ?>

						<?php
						// Search form
						if ( 'searchfrom' == $element ) { ?>

							<div class="top-col col-<?php echo esc_attr( $count ); ?> clr">
								<?php if ( 'disabled' != get_theme_mod( 'ocean_menu_search_style', 'drop_down' ) ) {
									get_template_part( 'partials/header/style/medium-header-search' );
								} ?>
							</div>

						<?php }

						// Logo
						else if ( 'logo' == $element ) { ?>

							<div class="top-col logo-col col-<?php echo esc_attr( $count ); ?> clr">
								<?php get_template_part( 'partials/header/logo' ); ?>
							</div>

						<?php }
						
						// Social buttons
						else if ( 'social' == $element ) { ?>

							<div class="top-col col-<?php echo esc_attr( $count ); ?> clr">
								<?php if ( true == get_theme_mod( 'ocean_menu_social', false ) ) {
									get_template_part( 'partials/header/social' );
								} ?>
							</div>

						<?php }

					endforeach; ?>

				</div>
			</div>
		</div>

	<?php
	} ?>

	<?php get_template_part( 'partials/header/nav' ); ?>

	<?php get_template_part( 'partials/mobile/mobile-icon' ); ?>

</div><!-- #site-header-inner -->

<?php get_template_part( 'partials/mobile/mobile-dropdown' ); ?>

<?php do_action( 'ocean_after_header_inner' ); ?>