<?php
$need_to_upgrade = oceanwp_theme_panel()->need_to_upgrade();
$extra_mode_actived = oceanwp_theme_panel()->extra_installed();
$ocean_white_label_activated = oceanwp_theme_panel()->ocean_white_label_activated();
$banner_upgrade_link = oceanwp_theme_panel()->banner_upgrade_link();
$white_label_need_hide = get_option( 'oceanwp_hide_box', false );
?>

<?php
if( $white_label_need_hide ) {
	return;
}
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-white-label">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner white-label">
		<h1 class="banner-header"><?php esc_html_e( 'Claim OceanWP as your own. It\'s your turn to impress friends, clients, coworkers and the rest of the world', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'With OceanWP you don\'t have to imagine. Go ahead and build it', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>
	</div>
	<?php endif; ?>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/white-label.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'White Label', 'oceanwp' ); ?></h2>
		</div>

		<?php oceanwp_theme_panel()->panel_plugin_upgrade_message( 'ocean-white-label' ); ?>

		<?php if ( $extra_mode_actived && $ocean_white_label_activated ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'No coding skills, no problem. Claim OceanWP in the backend as your own. Give it a new name, a new image, sign your name, make it yours. Your great website-building skills need a cherry on top.', 'oceanwp' ); ?></h3>

			<?php oceanwp_theme_panel()->print_pane( 'ocean-white-label-settings' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'No coding skills, no problem. Claim OceanWP in the backend as your own. Give it a new name, a new image, sign your name, make it yours. Your great website-building skills need a cherry on top.', 'oceanwp' ); ?>
				<?php echo sprintf(
						esc_html__( '%1$sInstall Ocean White Label%2$s to use these options.', 'oceanwp' ),
						'<a href="https://users.freemius.com" target="_blank">',
						'</a>'
					); ?>
				</h3>
		<?php endif; ?>


	</div>
</div>
