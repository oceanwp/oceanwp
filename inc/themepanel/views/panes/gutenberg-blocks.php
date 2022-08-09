<?php
$need_to_upgrade                          = oceanwp_theme_panel()->need_to_upgrade();
$extra_mode_actived                       = oceanwp_theme_panel()->extra_installed();
$ocean_gutenberg_blocks_actived           = oceanwp_theme_panel()->ocean_gutenberg_blocks_activated();
$banner_upgrade_link                      = oceanwp_theme_panel()->banner_upgrade_link();
?>
<div class="oceanwp-tp-pane-box" id="oceanwp-tp-gutenberg-blocks">

	<?php require_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner gunetberg-blocks">
		<h1 class="banner-header"><?php esc_html_e( 'Enrich blog posts or pages with Ocean Gutenberg Blocks.', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Take the lead. Experience website building with no limits', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>
	</div>
	<?php endif; ?>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/gunetberg-blocks.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Gutenberg Blocks', 'oceanwp' ); ?></h2>
		</div>

		<?php oceanwp_theme_panel()->panel_plugin_upgrade_message( 'ocean-gutenberg-blocks' ); ?>

		<?php if ( $extra_mode_actived && $ocean_gutenberg_blocks_actived ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Enrich content with Ocean Gutenberg Blocks. Functions perfectly with the default WordPress editor. Counter, skill bar, Instagram feed, navigation, posts grid and slider, testimonials and more.', 'oceanwp' ); ?></h3>

			<?php oceanwp_theme_panel()->print_pane( 'gutenberg-blocks-settings' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Enrich content with Ocean Gutenberg Blocks. Functions perfectly with the default WordPress editor. Counter, skill bar, Instagram feed, navigation, posts grid and slider, testimonials and more.', 'oceanwp' ); ?>
			<?php echo sprintf(
					esc_html__( '%1$sInstall Ocean Gutenberg Blocks%2$s to use these options.', 'oceanwp' ),
					'<a href="https://users.freemius.com" target="_blank">',
					'</a>'
				); ?>
			</h3>
		<?php endif; ?>


	</div>
</div>
