<?php
$plugin_download_icon_url = esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/plugin-download.png' );

$usefull_plugins = oceanwp_usefull_plugins();

$repos_plugins = oceanwp_theme_panel()->get_wp_plugins_info( array_keys( $usefull_plugins ) );

$recommended_plugins = oceanwp_recommended_plugins();

$repos_recommended_plugins = oceanwp_theme_panel()->get_wp_plugins_info( array_keys( $recommended_plugins ) );

$pro_plugins = oceanwp_pro_plugins();

$need_to_upgrade = oceanwp_theme_panel()->need_to_upgrade();
$banner_upgrade_link = oceanwp_theme_panel()->banner_upgrade_link();

$plugins_compatibility_versions = oceanwp_plugins_compatibility();
$plugins_new_features = oceanwp_plugins_new_features();
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-useful-plugins">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php
		$pro_plugins_recommend_upgrade = [];
		if( ! empty( $pro_plugins ) ) {
			foreach ( $pro_plugins as $pro_plugin_slug => $pro_plugin_data ) {
				$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( $pro_plugin_slug );
				$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );

				if ( $is_installed ) {
					$current_plugin_version = oceanwp_theme_panel()->get_current_plugin_version( $real_plugin_path );
					if( ! empty( $current_plugin_version ) && ! empty( $plugins_compatibility_versions[ $pro_plugin_slug ] ) && version_compare( $current_plugin_version, $plugins_compatibility_versions[ $pro_plugin_slug ], '<' ) ) {
						$pro_plugins_recommend_upgrade[] = $pro_plugin_data;
					}
				}
			}
		}
	?>

	<?php if ( oceanwp_theme_panel()->extra_installed() && ! empty( $pro_plugins_recommend_upgrade ) ) : ?>
		<div class="pro-plugins-update-notice notice notice-info">
			<h3><?php esc_html_e( 'The following Ocean Pro Extensions need to be updated to complete the new functionality:', 'oceanwp' ); ?></h3>
			<ol>
				<?php foreach( $pro_plugins_recommend_upgrade as $pro_plugins_recommend_upgrade_data ) : ?>
					<li><?php echo $pro_plugins_recommend_upgrade_data['name']; ?></li>
				<?php endforeach; ?>
			</ol>
		</div>
	<?php endif; ?>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/plugins.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Recommended Plugins', 'oceanwp' ); ?></h2>
		</div>
	</div>

	<!-- Install Plugins -->
	<div class="oceanwp-tp-useful-plugins-section">

		<?php foreach ( $usefull_plugins as $usefull_plugin_slug => $usefull_plugin_data ) : ?>

			<?php
				$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( $usefull_plugin_slug );
				$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );

			if ( ! empty( $usefull_plugin_data['short_description'] ) ) {
				$short_description = $usefull_plugin_data['short_description'];
			} elseif ( ! empty( $repos_plugins[ $usefull_plugin_slug ]['short_description'] ) ) {
				$short_description = $repos_plugins[ $usefull_plugin_slug ]['short_description'];
			} else {
				$short_description = '';
			}
			?>

				<div class="oceanwp-tp-large-block">
					<div class="oceanwp-tp-block-outer">
						<img class="oceanwp-tp-block-image" src="<?php echo ! empty( $usefull_plugin_data['image_url'] ) ? $usefull_plugin_data['image_url'] : $plugin_download_icon_url; ?>" />
						<div class="oceanwp-tp-block-inner">
							<h2 class="oceanwp-tp-block-title"><?php echo ! empty( $repos_plugins[ $usefull_plugin_slug ]['name'] ) ? $repos_plugins[ $usefull_plugin_slug ]['name'] : $usefull_plugin_data['name']; ?></h2>
							<?php if ( empty( $usefull_plugin_data['hide_desc'] ) ) : ?>
								<p class="oceanwp-tp-block-description"><?php echo $short_description; ?></p>
							<?php endif; ?>
						</div>
					</div>

					<?php if ( ! $is_installed ) : ?>
						<div class="oceanwp-tp-block-button-wrapper">
							<a href="<?php echo $repos_plugins[ $usefull_plugin_slug ]['download_link']; ?>" target="_blank" class="button blue oceanwp_install_plugin" role="button" data-plugin-slug="<?php echo $usefull_plugin_slug; ?>">
								<?php esc_html_e( 'Install', 'oceanwp' ); ?>
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

		<?php endforeach; ?>

	</div>


	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner useful-plugins">
		<h1 class="banner-header"><?php	esc_html_e( 'Enjoy even more powerful features with the Ocean Core Extensions Bundle', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Take the lead. Experience website building with no limits', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>

		<div class="oceanwp-tp-pane-features">
			<ul class="oceanwp-tp-pane-features-list">
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Sticky header and footer', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Footer Callout - multipurpose CTA feature', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( 'Instagram feed, Elementor widgets and Gutenberg blocks', 'oceanwp' ); ?></span>
				</li>
				<li>
					<div class="oceanwp-icon-check-solid"></div>
					<span><?php esc_html_e( '+ many, many more options and benefits.', 'oceanwp' ); ?></span>
				</li>
			</ul>
		</div>
	</div>
	<?php endif; ?>

	<!-- Recommended Ocean Plugins -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/plugins.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Recommended Ocean Plugins', 'oceanwp' ); ?></h2>
		</div>
	</div>

	<div class="oceanwp-tp-recommended-plugins-section">

		<?php foreach ( $recommended_plugins as $recommended_plugin_slug => $recommended_plugin_data ) : ?>

			<?php
				$real_plugin_path = oceanwp_theme_panel()->find_plugin_path( $recommended_plugin_slug );
				$is_installed     = oceanwp_theme_panel()->check_plugin_installed( $real_plugin_path );

			if ( ! empty( $recommended_plugin_data['short_description'] ) ) {
				$short_description = $recommended_plugin_data['short_description'];
			} elseif ( ! empty( $repos_recommended_plugins[ $recommended_plugin_slug ]['short_description'] ) ) {
				$short_description = $repos_recommended_plugins[ $recommended_plugin_slug ]['short_description'];
			} else {
				$short_description = '';
			}
			?>

			<div class="oceanwp-tp-large-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-block-image" src="<?php echo ! empty( $recommended_plugin_data['image_url'] ) ? $recommended_plugin_data['image_url'] : $plugin_download_icon_url; ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-block-title"><?php echo ! empty( $repos_recommended_plugins[ $recommended_plugin_slug ]['name'] ) ? $repos_recommended_plugins[ $recommended_plugin_slug ]['name'] : $recommended_plugin_data['name']; ?></h2>
						<?php if ( empty( $recommended_plugin_data['hide_desc'] ) ) : ?>
							<p class="oceanwp-tp-block-description"><?php echo $short_description; ?></p>
						<?php endif; ?>
					</div>
				</div>

				<?php if ( ! $is_installed ) : ?>
					<div class="oceanwp-tp-block-button-wrapper">
						<a href="<?php echo $repos_recommended_plugins[ $recommended_plugin_slug ]['download_link']; ?>" target="_blank" class="button blue oceanwp_install_plugin" role="button" data-plugin-slug="<?php echo $recommended_plugin_slug; ?>">
							<?php esc_html_e( 'Install', 'oceanwp' ); ?>
						</a>
					</div>
				<?php else : ?>
					<div class="oceanwp-tp-block-button-wrapper">
						<a href="#" class="button blue" role="button">
							<?php esc_html_e( 'Installed', 'oceanwp' ); ?>
						</a>

						<?php
							$current_plugin_version = oceanwp_theme_panel()->get_current_plugin_version( $real_plugin_path );
						?>
						<?php if( ! empty( $current_plugin_version ) && ! empty( $plugins_compatibility_versions[ $recommended_plugin_slug ] ) && version_compare( $current_plugin_version, $plugins_compatibility_versions[ $recommended_plugin_slug ], '<' ) ) : ?>
							<a href="#" class="button yellow oceanwp_update_plugin" role="button" data-plugin="<?php echo $real_plugin_path; ?>" data-slug="<?php echo $recommended_plugin_slug; ?>">
								<?php esc_html_e( 'Plugin update available', 'oceanwp' ); ?>
								<?php if( ! empty( $plugins_new_features[ $recommended_plugin_slug ] ) ) : ?>
									<div class="oceanwp-tp-tooltip" title="<?php echo $plugins_new_features[ $recommended_plugin_slug ]; ?>"><img class="oceanwp-top-panel-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/question-mark.svg' ); ?>" /></div>
								<?php endif; ?>
							</a>
						<?php endif; ?>

					</div>
				<?php endif; ?>
			</div>

		<?php endforeach; ?>

	</div>

</div>
