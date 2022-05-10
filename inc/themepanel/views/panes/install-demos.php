<?php
	$extra_mode_actived                                  = oceanwp_theme_panel()->extra_installed();
	$oe_install_demos_active                             = get_option( 'oe_install_demos_active', 'yes' );
	$need_to_upgrade                                     = oceanwp_theme_panel()->need_to_upgrade();
	$banner_upgrade_link                                 = oceanwp_theme_panel()->banner_upgrade_link();
	$install_oe_upgrade_core_extensions_bundle_text_link = oceanwp_theme_panel()->install_oe_upgrade_core_extensions_bundle_text_link();
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-install-demos">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner install-demos">
		<h1 class="banner-header"><?php esc_html_e( 'Access hundreds of WordPress templates with the Ocean Core Extensions Bundle', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Take the lead. Experience website building with no limits', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>

		<div class="oceanwp-tp-pane-features">
			<ul class="oceanwp-tp-pane-features-list">
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( '220+ professional-looking pre-made full website WordPress templates', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Premium features', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Personalized customer support', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'and so much more....', 'oceanwp' ); ?></span>
				</li>
			</ul>
		</div>
	</div>
	<?php endif; ?>

	<!-- Install Demos -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/install-demos.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Install Demos', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( ! $extra_mode_actived ) : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Access freemium OceanWP full website WordPress templates and start building immediately.', 'oceanwp' ); ?>
				<?php echo $install_oe_upgrade_core_extensions_bundle_text_link; ?>
				<?php esc_html_e( 'to access premium templates and additional options.', 'oceanwp' ); ?>
			</h3>
			<p class="oceanwp-tp-block-description">
				<?php
				echo sprintf(
					esc_html__( 'If this is your first time working with templates or you wish to switch to a different template, make sure to check out %1$sthis document%2$s first.', 'oceanwp' ),
					'<a href="https://docs.oceanwp.org/article/728-how-to-switch-different-demo" target="_blank">',
					'</a>'
				);
				?>
			</p>
			<p class="oceanwp-tp-block-description">
				<?php
				echo sprintf(
					esc_html__( 'Check out %1$sour documentation and full video guide%2$s on how easy it is to import website template demos, both free and pro.', 'oceanwp' ),
					'<a href="https://docs.oceanwp.org/article/463-how-to-import-a-pro-demo" target="_blank">',
					'</a>'
				);
				?>
			</p>
		<?php else : ?>

			<?php oceanwp_theme_panel()->print_pane( 'install-demos-switcher' ); ?>

		<?php endif; ?>

	</div>
</div>

<?php
if ( $extra_mode_actived && class_exists( 'OceanWP_Demos' ) ) :
	oceanwp_theme_panel()->print_pane( 'install-demos-catalog' );
endif;
?>
