<?php
$extra_mode_actived          = oceanwp_theme_panel()->extra_installed();
?>
<div class="oceanwp-tp-pane-box" id="oceanwp-tp-extra-settings">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<!-- Extra Settings -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/extra-settings.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title main-heading"><?php esc_html_e( 'Extra Settings', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Enable or disable some of the features included in the Ocean Extra plugin.', 'oceanwp' ); ?></h3>
		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Enable or disable some of the features included in the Ocean Extra plugin.', 'oceanwp' ); ?>
				<?php echo
				sprintf(
					esc_html__( '%1$sInstall free Ocean Extra recommended plugin%2$s to unlock these features below.', 'oceanwp' ),
					'<a href="https://youtu.be/kqHNgUPWMTY" target="_blank">',
					'</a>'
				); ?>
			</h3>
		<?php endif; ?>
	</div>

	<!-- Meta-box Settings -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/metabox-settings.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Meta-box Settings', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Meta-box option allows you individual control of any page, post or custom template. Change header style, disable or enable many features such as the Page Title, Top Bar and more.', 'oceanwp' ); ?></h3>

			<?php oceanwp_theme_panel()->print_pane( 'extra-settings-metaboxes' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Meta-box option allows you individual control of any page, post or custom template. Change header style, disable or enable many features such as the Page Title, Top Bar and more.', 'oceanwp' ); ?></h3>
		<?php endif; ?>

	</div>

	<!-- My Library -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/my-library.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'My Library', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Create custom templates to use within the OceanWP theme. Build custom headers, footers, templates for the Ocean Footer Callout or Ocean Hooks plugins, templates to use with shortcodes and more.', 'oceanwp' ); ?></h3>
		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'extra-settings-my-library' ); ?>

		<?php endif; ?>
	</div>

	<!-- WordPress Widgets -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/wordpress-widgets.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'WordPress Widgets', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Ocean WordPress widgets add additional options for you to use across default WordPress widget areas, such as sidebars and footer. Add widgets via Appearance > Widgets.', 'oceanwp' ); ?></h3>
		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'extra-settings-widgets' ); ?>

		<?php endif; ?>
	</div>
</div>
