<?php
$extra_mode_actived                                  = oceanwp_theme_panel()->extra_installed();
$need_to_upgrade                                     = oceanwp_theme_panel()->need_to_upgrade();
$banner_upgrade_link                                 = oceanwp_theme_panel()->banner_upgrade_link();
$ocean_pro_demos_activated                           = oceanwp_theme_panel()->ocean_pro_demos_activated();
$install_oe_upgrade_core_extensions_bundle_text_link = oceanwp_theme_panel()->install_oe_upgrade_core_extensions_bundle_text_link();
$ocean_elementor_library_is_disabled                 = get_option( 'disable_ocean_elementor_library', 'no' ) == 'yes';

$tags = apply_filters( 'opd_elementor_library_panel_tags', [] );

$available_tags = get_option( 'opd_elementor_library_tags', null );
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-ocean-elementor-library">

	<?php require_once oceanwp_theme_panel()->panel_top_header(); ?>

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner elementor-library">
		<h1 class="banner-header"><?php echo esc_html__( 'Easily construct Elementor pages section by section with the Ocean Pro Demos and the Ocean Core Extensions Bundle', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php echo esc_html__( 'Do even need to mention royalty-free images and icons come included with the design?', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php echo esc_html__( 'Upgrade now', 'oceanwp' ); ?></span></a>
	</div>
	<?php endif; ?>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/elementor-library.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title main-heading"><?php echo esc_html__( 'Elementor Library', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php echo esc_html__( 'Build your own pages in Elementor - when you want and how you want - using Ocean prebuilt section templates.', 'oceanwp' ); ?></h3>
	</div>

	<?php if ( $extra_mode_actived && $ocean_pro_demos_activated ) : ?>
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/disable-elementor-library.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php echo esc_html__( 'Disable Ocean Elementor Library', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php echo esc_html__( 'Do not have the need to use the Ocean Library for Elementor, currently or at all? Disable or enable this feature on a needs basis.', 'oceanwp' ); ?></h3>
		<div id="ocean-elementor-library-disabler" class="column-wrap clr">
			<label for="disable-ocean-elementor-library" class="oceanwp-tp-switcher column-name clr">
				<input type="checkbox" role="checkbox" name="disable_ocean_elementor_library" class="oceanwp-switch-single-option" value="true" id="disable-ocean-elementor-library" <?php checked( (bool) $ocean_elementor_library_is_disabled ); ?>>
				<span class="slider round"></span>
			</label>
		</div>
	</div>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/customizer-controls.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php echo esc_html__( 'Control Elementor Library Tags', 'oceanwp' ); ?></h2>
		</div>
		<h3 class="oceanwp-tp-block-description"><?php echo esc_html__( 'Expand or shorten the list of available Ocean Library templates for Elementor by enabling or disabling sections by tags.', 'oceanwp' ); ?></h3>
		<div id="ocean-elementor-library-tags-control" class="column-wrap clr">

			<form class="save_panel_settings">
				<input type="hidden" name="option_name" value="opd_elementor_library_tags" />

				<div id="ocean-elementor-library-tags-bulk" class="oceanwp-tp-switcher column-wrap clr">
					<label for="elementor-library-tags-bulk" class="column-name clr">
						<input type="checkbox" role="checkbox" name="elementor-library-tags-bulk" value="true" id="elementor-library-tags-bulk" class="oe-switcher-bulk" />
						<span class="slider round"></span>
					</label>
				</div>
				<div id="ocean-elementor-library-tags-items" class="column-wrap clr multi-checkbox-wrapper">

					<?php
					foreach ( $tags as $key => $val ) :
						$checked = $available_tags === null ? true : ! empty( $available_tags[ $key ] );
						?>

						<div id="<?php echo esc_attr( $key ); ?>" class="oceanwp-tp-small-block column-wrap clr">
							<h3 class="title"><?php echo esc_html( $val ); ?></h3>
							<label for="oceanwp-switch-[<?php echo esc_attr( $key ); ?>]" class="oceanwp-tp-switcher column-name clr">
								<input type="checkbox" role="checkbox" name="opd_elementor_library_tags[<?php echo esc_attr( $key ); ?>]" value="true" id="oceanwp-switch-[<?php echo esc_attr( $key ); ?>]" <?php checked( $checked ); ?>>
								<span class="slider round"></span>
							</label>
						</div>

					<?php endforeach; ?>

				</div>
				<?php submit_button(); ?>
			</form>

		</div>

	</div>
	<?php else : ?>

	<h3 class="oceanwp-tp-block-description">
			<?php echo esc_html__( 'Easily construct Elementor pages section by section with the Ocean Pro Demos and the Ocean Core Extensions Bundle.', 'oceanwp' ); ?>
			<?php echo $install_oe_upgrade_core_extensions_bundle_text_link; ?>
			<?php echo esc_html__( 'to access premium templates and additional options.', 'oceanwp' ); ?>
		</h3>
		<p class="oceanwp-tp-block-description">
		<?php echo sprintf(
					esc_html__( '%1$sInstall Ocean Pro Demos%2$s to use these options.', 'oceanwp' ),
					'<a href="https://users.freemius.com" target="_blank">',
					'</a>'
				); ?>
		</p>

	<?php endif; ?>
</div>
