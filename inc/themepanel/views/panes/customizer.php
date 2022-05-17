<?php
$extra_mode_actived          = oceanwp_theme_panel()->extra_installed();
$please_install_oe_text_link = oceanwp_theme_panel()->please_install_oe_text_link();
?>
<div class="oceanwp-tp-pane-box" id="oceanwp-tp-customizer">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<!-- Customizer Search -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/customizer-search.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Customizer Search', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'customizer-search' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Find all Customizer settings with ease.', 'oceanwp' ); ?>
				<?php echo $please_install_oe_text_link; ?>
			</h3>
		<?php endif; ?>
	</div>

	<!-- Customizer Controls -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/customizer-controls.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Customizer Controls', 'oceanwp' ); ?></h2>
		</div>

		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'customizer-controls' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Disable Customizer OceanWP Control panels for faster Customizer load or faster management by displaying fewer options.', 'oceanwp' ); ?>
				<?php echo $please_install_oe_text_link; ?>
		</h3>
		<?php endif; ?>
	</div>

	<!-- Customizer Styling Import & Export -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/customizer-import-export.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Customizer Styling Import & Export', 'oceanwp' ); ?></h2>
		</div>

		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'customizer-import-export' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Export Customizer settings of the current theme and import on a Child Theme or use to create your own default styling for the next website.', 'oceanwp' ); ?>
				<?php echo $please_install_oe_text_link; ?>
		</h3>
		<?php endif; ?>
	</div>

	<!-- Customizer Reset -->
	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/customizer-reset.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Customizer Reset', 'oceanwp' ); ?></h2>
		</div>

		<?php if ( $extra_mode_actived ) : ?>

			<?php oceanwp_theme_panel()->print_pane( 'customizer-reset' ); ?>

		<?php else : ?>
			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Delete your settings and reset all Customizer options to default theme values.', 'oceanwp' ); ?>
			<?php echo $please_install_oe_text_link; ?>
			</h3>
		<?php endif; ?>
	</div>

</div>
