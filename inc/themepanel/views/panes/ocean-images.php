<?php
$need_to_upgrade               = oceanwp_theme_panel()->need_to_upgrade();
$extra_mode_actived            = oceanwp_theme_panel()->extra_installed();
$ocean_pro_demos_actived       = oceanwp_theme_panel()->ocean_pro_demos_activated();
$banner_upgrade_link           = oceanwp_theme_panel()->banner_upgrade_link();
$upgrade_bundle_plan_text_link = oceanwp_theme_panel()->upgrade_bundle_plan_text_link();
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-ocean-images">

	<?php require_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner ocean-images">
		<h1 class="banner-header"><?php esc_html_e( 'Access thousands and thousands of image and icon files with the Core Bundle', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Take the lead. Experience website building with no limits', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>

		<div class="oceanwp-tp-pane-features">
			<ul class="oceanwp-tp-pane-features-list">
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Import images and icons directly to your media library', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Choose image import size', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'No attribution required', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Available with the Business and Agency plans', 'oceanwp' ); ?></span>
				</li>
			</ul>
		</div>
	</div>
	<?php endif; ?>

	<!-- Ocean Images & Icons -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/ocean-images.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Ocean Images & Icons', 'oceanwp' ); ?></h2>
			<div class="oceanwp-tp-block-inner">

			</div>
		</div>

		<?php if ( $extra_mode_actived && $ocean_pro_demos_actived ) : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Speed up the website building process. Search for professional looking images and icons directly through your WordPress dashboard. Import images and icon files to your media library and use across your website with no attribution.', 'oceanwp' ); ?></h3>


			<p class="oceanwp-tp-block-description">
				<?php
				echo sprintf(
					esc_html__( 'Check out our %1$sguide%2$s on how to benefit from royalty-free images and how to import them to your website.', 'oceanwp' ),
					'<a href="https://oceanwp.org/royalty-free-images-and-icons-with-oceanwp/" target="_blank">',
					'</a>'
				);
				?>
			</p>
			<?php oceanwp_theme_panel()->print_pane( 'ocean-images-settings' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Speed up the website building process. Search for professional looking images and icons directly through your WordPress dashboard. Import images and icon files to your media library and use across your website with no attribution.', 'oceanwp' ); ?>
				<?php echo $upgrade_bundle_plan_text_link; ?>
			</h3>
		<?php endif; ?>
	</div>
</div>
