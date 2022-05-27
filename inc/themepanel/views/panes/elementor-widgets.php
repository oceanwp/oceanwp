<?php
$need_to_upgrade                           = oceanwp_theme_panel()->need_to_upgrade();
$extra_mode_actived                        = oceanwp_theme_panel()->extra_installed();
$ocean_elementor_widgets_actived           = oceanwp_theme_panel()->ocean_elementor_widgets_activated();
$banner_upgrade_link                       = oceanwp_theme_panel()->banner_upgrade_link();
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-elementor-widgets">

	<?php require_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner elementor-widgets">
		<h1 class="banner-header"><?php esc_html_e( 'Build astonishing content with Elementor Widgets and the Ocean Core Extensions Bundle.', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Take the lead. Experience website building with no limits', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>
	</div>
	<?php endif; ?>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/elementor-widgets.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Elementor Widgets', 'oceanwp' ); ?></h2>
		</div>

		<?php oceanwp_theme_panel()->panel_plugin_upgrade_message( 'ocean-elementor-widgets' ); ?>

		<?php if ( $extra_mode_actived && $ocean_elementor_widgets_actived ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Build astonishing pages with the help of Elementor Widgets. Functions perfectly with both free and pro Elementor. Counter, skill bar, Instagram feed, navigation, posts grid and slider, testimonials and more.', 'oceanwp' ); ?></h3>

			<?php oceanwp_theme_panel()->print_pane( 'elementor-widgets-settings' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Build astonishing pages with the help of Elementor Widgets. Functions perfectly with both free and pro Elementor. Counter, skill bar, Instagram feed, navigation, posts grid and slider, testimonials and more.', 'oceanwp' ); ?>
				<?php echo sprintf(
					esc_html__( '%1$sInstall Ocean Elementor Widgets%2$s to use these options.', 'oceanwp' ),
					'<a href="https://users.freemius.com" target="_blank">',
					'</a>'
				); ?>
			</h3>
		<?php endif; ?>


	</div>
</div>
