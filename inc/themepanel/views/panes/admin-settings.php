<?php
$need_to_upgrade = oceanwp_theme_panel()->need_to_upgrade();
$extra_mode_actived = oceanwp_theme_panel()->extra_installed();
$banner_upgrade_link = oceanwp_theme_panel()->banner_upgrade_link();
$oe_notification_active_status = get_option( 'oe_notification_active_status', 'no' );
$oe_disable_edit_post_active_status = get_option( 'oe_disable_edit_post_active_status', 'no' );
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-admin-settings">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner admin-settings">
		<h1 class="banner-header"><?php esc_html_e( 'Turbocharge your OceanWP theme with premium features', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Because you and your website deserve the best.', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>
	</div>
	<?php endif; ?>

	<!-- Admin Settings -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/admin-settings.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title main-heading"><?php esc_html_e( 'Admin Settings', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Disable or enable specific OceanWP and Ocean Extra site features.', 'oceanwp' ); ?></h3>
	</div>

	<!-- Disable Edit Links on Blog Archive Pages -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/disable-blog-edit-links.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Disable Edit Links on Blog Archive Pages', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>
		<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Disable the option for the edit links to be displayed on your blog archives (visible to website admins only). Edit links allow you to quickly access the WordPress editor for any blog post directly from the archive pages.', 'oceanwp' ); ?></h3>
		<div id="ocean-edit-post-disable" class="oceanwp-tp-switcher column-wrap">
			<label for="oceanwp-switch-edit-post-disable" class="column-name">
				<input type="checkbox" role="checkbox" name="edit-post-disable" value="true" id="oceanwp-switch-edit-post-disable" <?php checked( $oe_disable_edit_post_active_status == 'yes' ); ?> />
				<span class="slider round"></span>
			</label>
		</div>
		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php echo sprintf(
					esc_html__( '%1$sInstall free Ocean Extra recommended plugin%2$s to unlock more features.', 'oceanwp' ),
					'<a href="https://youtu.be/kqHNgUPWMTY" target="_blank">',
					'</a>'
				);
				?>
			</h3>
		<?php endif; ?>
	</div>

	<!-- Regenerate Local Google CSS files -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/regenerate-google-cache.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Regenerate Local Google CSS files', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'OceanWP Google fonts not rendering on frontend of your website when using the theme option to load Google fonts locally? If you have recently made any SSL or website URL changes, use the "Clear Data" button to regenerate local CSS files and fix the font rendering issue.', 'oceanwp' ); ?></h3>
			<div id="ocean-fonts-clear" class="column-wrap clr">
				<button class="btn button"><?php esc_html_e( 'Clear Data', 'oceanwp' ); ?></button>
			</div>
		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php echo sprintf(
					esc_html__( '%1$sInstall free Ocean Extra recommended plugin%2$s to unlock more features.', 'oceanwp' ),
					'<a href="https://youtu.be/kqHNgUPWMTY" target="_blank">',
					'</a>'
				);
				?>
			</h3>
		<?php endif; ?>
	</div>

	<!-- Disable Ocean Notifications -->
	<?php if ( $extra_mode_actived ) : ?>
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/disable-notifications.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Disable Ocean Notifications', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'We highly recommend you keep this feature enabled and always be up to speed with OceanWP news regarding features, webinars, updates and more. We will announce only the most important news. If you ever wish to disable this feature, you can do it any time.', 'oceanwp' ); ?></h3>
		<div id="ocean-notification-disable" class="oceanwp-tp-switcher column-wrap">
			<label for="oceanwp-switch-notification-disable" class="column-name">
				<input type="checkbox" role="checkbox" name="notification-disable" value="true" id="oceanwp-switch-notification-disable" <?php checked( $oe_notification_active_status == 'yes' ); ?> />
				<span class="slider round"></span>
			</label>
		</div>
	</div>
	<?php endif; ?>

</div>



