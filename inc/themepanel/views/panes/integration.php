<?php
$extra_mode_actived                                  = oceanwp_theme_panel()->extra_installed();
$ocean_elementor_widgets_actived                     = oceanwp_theme_panel()->ocean_elementor_widgets_activated();
$ocean_popup_login_activated                         = oceanwp_theme_panel()->ocean_popup_login_activated();
$upgrade_core_extensions_bundle_text_link            = oceanwp_theme_panel()->upgrade_core_extensions_bundle_text_link();
$please_install_oe_text_link                         = oceanwp_theme_panel()->please_install_oe_text_link();
$install_oe_upgrade_core_extensions_bundle_text_link = oceanwp_theme_panel()->install_oe_upgrade_core_extensions_bundle_text_link();
$opl_log_version                                     = defined( 'OPL_PLUGIN_VERSION' ) ? OPL_PLUGIN_VERSION : '';
$oew_log_version                                     = defined( 'OWP_ELEMENTOR_VERSION' ) ? OWP_ELEMENTOR_VERSION : '';
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-integration">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<!-- SVG Support -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/svg-support.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'SVG Support', 'oceanwp' ); ?></h2>
		</div>

		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'integration-svg' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Enable SVG file support for your WordPress Media Library. This option allows you to safely upload any SVG file to the Media Library as all files are sanitized upon upload.', 'oceanwp' ); ?>
				<?php echo $please_install_oe_text_link; ?>
			</h3>
		<?php endif; ?>
	</div>

	<!-- Google Maps -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/google-maps.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Google Maps', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived && $ocean_elementor_widgets_actived ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Display the Google map on your website and help visitors locate your business.', 'oceanwp' ); ?></h3>

			<?php oceanwp_theme_panel()->print_pane( 'integration-google-maps' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Display the Google map on your website and help visitors locate your business.', 'oceanwp' ); ?>
				<?php echo $upgrade_core_extensions_bundle_text_link; ?>
			</h3>
		<?php endif; ?>

	</div>


	<!-- Google reCAPTCHA -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/google-recaptcha.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Google reCAPTCHA', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived && $ocean_elementor_widgets_actived || $extra_mode_actived && $ocean_popup_login_activated) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Adds Google reCAPTCHA.', 'oceanwp' ); ?></h3>

			<?php oceanwp_theme_panel()->print_pane( 'integration-google-recaptcha' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Adds Google reCAPTCHA.', 'oceanwp' ); ?>
				<?php echo $upgrade_core_extensions_bundle_text_link; ?>
			</h3>
		<?php endif; ?>
	</div>

	<?php if ( $extra_mode_actived && $ocean_popup_login_activated && version_compare( $opl_log_version, '2.2.1', '>=' )
		|| $extra_mode_actived && $ocean_elementor_widgets_actived && version_compare( $oew_log_version, '2.4.7', '>=' ) ) : ?>
	<!-- Cloudflare Turnstile -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/google-recaptcha.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Cloudflare Turnstile', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Adds Cloudflare Turnstile.', 'oceanwp' ); ?></h3>

		<?php oceanwp_theme_panel()->print_pane( 'integration-cloudflare-turnstile' ); ?>
	</div>
	<?php endif; ?>

	<!-- MailChimp -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/mailchimp.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'MailChimp', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'integration-mailchimp' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Add newsletter subscription to your website and grow your contact list.', 'oceanwp' ); ?>
				<?php echo $install_oe_upgrade_core_extensions_bundle_text_link; ?>
				<?php esc_html_e( 'to unlock this feature.', 'oceanwp' ); ?>
				</h3>
		<?php endif; ?>
	</div>

	<!-- Adobe Fonts Settings -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/typefonts.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Adobe Fonts (TypeKit)', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>
			<?php oceanwp_theme_panel()->print_pane( 'extra-settings-adobe-fonts' ); ?>
		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Get your creativity flowing and dive into thousands of wonderful fonts from the world\'s leading type foundries.', 'oceanwp' ); ?>
				<?php echo $please_install_oe_text_link; ?>
			</h3>
		<?php endif; ?>
	</div>
</div>
