<?php
$need_to_upgrade = oceanwp_theme_panel()->need_to_upgrade();
$extra_mode_actived = oceanwp_theme_panel()->extra_installed();
$banner_upgrade_link = oceanwp_theme_panel()->banner_upgrade_link();
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-admin-settings">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner admin-settings">
		<h1 class="banner-header"><?php esc_html_e( 'Claim OceanWP as your own. It\'s your turn to impress friends, clients, coworkers and the rest of the world', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'With OceanWP you don\'t have to imagine. Go ahead and build it', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>
	</div>
	<?php endif; ?>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/white-label.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Admin Settings', 'oceanwp' ); ?></h2>
		</div>

        <h3 class="oceanwp-tp-block-description">
            <?php esc_html_e( 'Clear your local Google CSS and fonts files.', 'oceanwp' ); ?>
        </h3>
        <div id="ocean-fonts-clear" class="column-wrap clr">
            <button class="btn button"><?php esc_html_e( 'Clear Data', 'oceanwp' ); ?></button>
        </div>


	</div>
</div>
