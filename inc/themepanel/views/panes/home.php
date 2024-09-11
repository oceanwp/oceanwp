<?php
$extra_mode_actived          = oceanwp_theme_panel()->extra_installed();
$need_to_upgrade             = oceanwp_theme_panel()->need_to_upgrade();
$banner_upgrade_link         = oceanwp_theme_panel()->banner_upgrade_link();

if ( $extra_mode_actived && class_exists('Ocean_Extra_New_Theme_Panel' ) ) {
	$theme_panels = Ocean_Extra_New_Theme_Panel::get_panels();
}
/**
 * Get Custiomizer Options.
 *
 * @return void
 */

function owp_get_customizer_options() {

	$options = array(
		'custom_logo'            => array(
			'label' => esc_html__( 'Logo', 'oceanwp' ),
			'desc'  => esc_html__( 'Upload website logo and retina logo for large screens.', 'oceanwp' ),
			'icon'  => 'logo.png',
		),
		'site_icon'              => array(
			'label' => esc_html__( 'Favicon', 'oceanwp' ),
			'desc'  => esc_html__( 'Upload the browser tab and app icon for your website.', 'oceanwp' ),
			'icon'  => 'favicon.png',
			'customizer_autofocus' => 'blogname',
		),
		'ocean_colors'    => array(
			'label' => esc_html__( 'Primary Colors', 'oceanwp' ),
			'desc'  => esc_html__( 'Set primary color and hover color for main styling.', 'oceanwp' ),
			'icon'  => 'primary-colors.png',
			'section' => true,
		),
		'ocean_typography' => array(
			'label' => esc_html__( 'Typography', 'oceanwp' ),
			'desc'  => esc_html__( 'Pick typography settings for any part of the website.', 'oceanwp' ),
			'icon'  => 'typography.png',
			'section' => true,
		),
		'ocean_topbar'          => array(
			'label' => esc_html__( 'Top Bar', 'oceanwp' ),
			'desc'  => esc_html__( 'Enable or disable, add social media, menu and more.', 'oceanwp' ),
			'icon'  => 'top-bar.png',
			'section' => true,
		),
		'ocean_header'     => array(
			'label' => esc_html__( 'Header', 'oceanwp' ),
			'desc'  => esc_html__( 'Choose main website header style, adjust colors, padding...', 'oceanwp' ),
			'icon'  => 'header.png',
			'section' => true,
		),
		'ocean_footer_widgets'   => array(
			'label' => esc_html__( 'Footer Widgets', 'oceanwp' ),
			'desc'  => esc_html__( 'Select footer widgets or a custom template for website footer.', 'oceanwp' ),
			'icon'  => 'footer-widgets.png',
			'section' => true,
		),
		'ocean_footer_bottom'    => array(
			'label' => esc_html__( 'Footer Copyright', 'oceanwp' ),
			'desc'  => esc_html__( 'Disable or adjust the footer copyright area of your website.', 'oceanwp' ),
			'icon'  => 'footer-bottom.png',
			'section' => true,
		),
	);

	// Apply filters and return.
	return apply_filters( 'oe_customizer_options', $options );
}

?>
<div class="oceanwp-tp-pane-box" id="oceanwp-tp-home">

	<?php
	$current_oe_version  = oceanwp_theme_panel()->get_current_plugin_version( 'ocean-extra/ocean-extra.php' );
	$required_oe_version = '2.0.0';
	if ( ! empty( $current_oe_version ) && ! empty( $required_oe_version ) && version_compare( $current_oe_version, $required_oe_version , '<' ) ) : ?>
		<h3 class="oceanwp-tp-block-description alert"><?php esc_html_e( 'We made changes to our Theme Panel. To complete the installation and enjoy both old and new features, please make sure the OceanWP theme and all Ocean plugins are up to date.', 'oceanwp' ); ?></h3>
	<?php endif; ?>

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>
	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner home">
		<h1 class="banner-header"><?php esc_html_e( 'Upgrade features with the Ocean Core Extensions Bundle', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Take the lead. Experience website building with no limits', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>

		<div class="oceanwp-tp-pane-features row">
			<div class="col">
				<ul class="oceanwp-tp-pane-features-list">
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Sticky header', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Sticky footer', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Instagram feed', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Custom hooks', 'oceanwp' ); ?></span>
					</li>
				</ul>
			</div>
			<div class="col">
				<ul class="oceanwp-tp-pane-features-list">
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Elementor Widgets', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Gutenberg Blocks', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Portfolio', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Footer callout', 'oceanwp' ); ?></span>
					</li>
				</ul>
			</div>
			<div class="col">
				<ul class="oceanwp-tp-pane-features-list">
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( '220+ website templates', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Customer ticket support', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( 'Images and icons library', 'oceanwp' ); ?></span>
					</li>
					<li>
						<div class="oceanwp-icon-check-solid"></div>
						<span><?php esc_html_e( '+ many more options...', 'oceanwp' ); ?></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<?php endif; ?>

	<!-- Theme Status -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/theme-status.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Theme Status', 'oceanwp' ); ?></h2>
		</div>
		<?php
		$theme_update_available_message = get_theme_update_available( wp_get_theme() );
		if ( empty( $theme_update_available_message ) ) :
			?>
				<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Your OceanWP theme is up to date.', 'oceanwp' ); ?></h3>
			<?php else : ?>
				<?php
					$white_label_active = get_option( 'oceanwp_whitelabel_oceanwp_panel', false );
					$white_label_val = get_option( 'oceanwp_theme_name' );
					if( $white_label_active && $white_label_val && strpos($theme_update_available_message, 'OceanWP') !== false ) {
						$theme_update_available_message = str_replace( 'OceanWP', $white_label_val, $theme_update_available_message );
					}
					?>
				<?php echo $theme_update_available_message; ?>
		<?php endif ?>
		<h3 class="oceanwp-tp-block-description"><?php
		echo sprintf(
			esc_html__( 'Check %1$sSupport Notes and User Feedback on the latest version%2$s before upgrading.', 'oceanwp' ),
			'<a href="https://docs.oceanwp.org/article/776-known-bugs-issues#oceanwp" target="_blank">',
			'</a>'
		);
		?>
		</h3>
	</div>

	<!-- Quick Settings -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/quick-settings.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Quick Settings', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'quick-settings' ); ?>

		<?php else : ?>

			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Access specific Customizer control settings quickly.', 'oceanwp' ); ?>
				<?php echo sprintf(
					esc_html__( '%1$sInstall free Ocean Extra recommended plugin%2$s to unlock more features.', 'oceanwp' ),
					'<a href="https://youtu.be/kqHNgUPWMTY" target="_blank">',
					'</a>'
				);
				?>
			</h3>
		<?php endif; ?>

	</div>
	<?php if( ! get_option( 'oceanwp_hide_download_section', false ) ) : ?>
		<div class="oceanwp-tp-wide-block">
			<div class="oceanwp-tp-block-outer">
				<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/download.png' ); ?>" />
				<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Download', 'oceanwp' ); ?></h2>
			</div>
		</div>

		<!-- Install Plugins and Child Theme Block -->
		<div class="oceanwp-tp-wide-block">
			<div class="row oceanwp-tp-help-section">
				<div class="col">
					<!-- Ocean Extra -->
					<div class="oceanwp-tp-large-block">
							<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/plugin-download.png' ); ?>" />
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Ocean Extra', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Unlock the power of OceanWP. Install demos, create custom templates, customize each page or post, add WordPress widgets and more.', 'oceanwp' ); ?></p>

						<?php
							$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( 'ocean-extra' );
							$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );
						?>
						<?php if ( ! $is_installed ) : ?>
							<div class="oceanwp-tp-block-button-wrapper">
								<a href="https://wordpress.org/plugins/ocean-extra/" target="_blank" class="button blue oceanwp_install_plugin" data-plugin-slug="ocean-extra" role="button">
									<?php esc_html_e( 'Install Ocean Extra', 'oceanwp' ); ?>
								</a>
							</div>
						<?php else : ?>
							<div class="oceanwp-tp-block-button-wrapper">
								<a href="#" class="button blue" role="button">
									<?php esc_html_e( 'Installed', 'oceanwp' ); ?>
								</a>
							</div>
						<?php endif; ?>
					</div>
				</div>

				<div class="col">
					<!-- OceanWP Child Theme -->
					<div class="oceanwp-tp-large-block">
							<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/plugin-download.png' ); ?>" />
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'OceanWP Child Theme', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Install the official OceanWP Child Theme to add custom codes, modify theme or plugin templates, customize independetly and more.', 'oceanwp' ); ?></p>

						<?php if ( ! file_exists( get_theme_root() . '/oceanwp-child-theme-master' ) ) : ?>
							<div class="oceanwp-tp-block-button-wrapper">

							<?php if ( $extra_mode_actived ) : ?>
								<a href="https://downloads.oceanwp.org/oceanwp/oceanwp-child-theme.zip" target="_blank" class="button blue oceanwp_install_child_theme" role="button" >
									<?php esc_html_e( 'Download', 'oceanwp' ); ?>
								</a>
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
						<?php elseif ( file_exists( get_theme_root() . '/oceanwp-child-theme-master' ) && ! is_child_theme() ) : ?>
							<div class="oceanwp-tp-block-button-wrapper">
								<a href="<?php echo admin_url( 'themes.php' ); ?>" class="button blue" role="button">
									<?php esc_html_e( 'Activate', 'oceanwp' ); ?>
								</a>
							</div>
						<?php else : ?>
							<div class="oceanwp-tp-block-button-wrapper">
								<a href="#" class="button blue" role="button">
									<?php esc_html_e( 'Installed and Activated', 'oceanwp' ); ?>
								</a>
							</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<!-- The Love Corner -->
	<?php if( ! get_option( 'oceanwp_hide_love_corner_section', false ) ) : ?>
		<div class="oceanwp-tp-wide-block">
			<div class="oceanwp-tp-message-heading-block">
				<img class="ocean-tp-heading-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/love-corner.png' ); ?>" />
				<h2 class="oceanwp-tp-message-heading"><?php esc_html_e( 'The Love Corner', 'oceanwp' ); ?></h2>
				</img>
			</div>
		</div>

		<div class="oceanwp-tp-wide-block">
			<div class="row oceanwp-tp-love-corner-section">
				<div class="col">
					<!-- Share the Love -->
					<div class="oceanwp-tp-large-block">
						<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/share-the-love.png' ); ?>" />
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Share the Love', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'If you enjoy all the features the Ocean Universe has to offer, spread the word and share the love by giving us a 5-star rating. By sharing your support, you\'re directly contributing to the future development of amazing new features and products.', 'oceanwp' ); ?></p>
						<div class="oceanwp-tp-block-button-wrapper">
							<a href="<?php echo esc_url( 'https://wordpress.org/support/theme/oceanwp/reviews/#new-post' ); ?>" target="_blank" class="button blue" role="button">
								<?php esc_html_e( 'Share Rating Now', 'oceanwp' ); ?>
							</a>
						</div>
					</div>
				</div>

				<div class="col">
					<!-- Get Some Love -->
					<div class="oceanwp-tp-large-block">
						<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/get-some-love.png' ); ?>" />
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Get Some Love', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'We\'re excited to have you as a part of the amazing OceanWP family. Get yourself comfortable in the Ocean Universe. Subscribe to our newsletter to receive the latest news, discounts and all other sweets and goodies. No spam, that\'s a guarantee.', 'oceanwp' ); ?></p>
						<div class="oceanwp-tp-block-button-wrapper">
							<a href="<?php echo esc_url( 'https://oceanwp.org/newsletter-subscription/' ); ?>" target="_blank" class="button blue" role="button">
								<?php esc_html_e( 'Subscribe Now', 'oceanwp' ); ?>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="oceanwp-tp-wide-block">
			<div class="row oceanwp-tp-love-corner-section">
				<div class="col">
					<!-- Showcase Website -->
					<div class="oceanwp-tp-large-block">
						<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/showcase-website.png' ); ?>" />
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Showcase Website', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Your OceanWP website is worth admiring. Apply for our website showcase for a chance for your website to get featured in our blog posts.', 'oceanwp' ); ?></p>
						<div class="oceanwp-tp-block-button-wrapper">
							<a href="<?php echo esc_url( 'https://oceanwp.org/website-showcase/' ); ?>" target="_blank"" class="button blue" role="button">
								<?php esc_html_e( 'Apply Now', 'oceanwp' ); ?>
							</a>
						</div>
					</div>
				</div>

				<div class="col">
					<!-- Feature Requests -->
					<div class="oceanwp-tp-large-block">
						<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/feature-requests.png' ); ?>" />
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Feature Requests', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Is there a feature, WordPress template, documentation or video tutorial we should consider? Let us know by requesting a feature.', 'oceanwp' ); ?></p>
						<div class="oceanwp-tp-block-button-wrapper">
							<a href="<?php echo esc_url( 'https://oceanwp.org/feature-requests/' ); ?>" target="_blank"" class="button blue" role="button">
								<?php esc_html_e( 'Request Now', 'oceanwp' ); ?>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>
</div>