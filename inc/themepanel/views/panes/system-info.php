<?php
$extra_mode_actived          = oceanwp_theme_panel()->extra_installed();
$please_install_oe_text_link = oceanwp_theme_panel()->please_install_oe_text_link();
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-system-info">

	<?php require_once oceanwp_theme_panel()->panel_top_header(); ?>

	<div class="oceanwp-tp-wide-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/system-info.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'System Info', 'oceanwp' ); ?></h2>
		</div>
		<?php if ( $extra_mode_actived ) : ?>

			<h3 class="oceanwp-tp-block-description"><?php esc_html_e( 'Display and export your WordPress installation info. Important in case of a need of assistance or troubleshooting.', 'oceanwp' ); ?></h3>

		<?php else : ?>

			<h3 class="oceanwp-tp-block-description">
				<?php esc_html_e( 'Display and export your WordPress installation info. Important in case of a need of assistance or troubleshooting.', 'oceanwp' ); ?>
			<?php echo $please_install_oe_text_link; ?>
			</h3>

		<?php endif; ?>
		
	</div>

	<?php if ( $extra_mode_actived ) : ?>
		<?php oceanwp_theme_panel()->print_pane( 'system-info-details' ); ?>
	<?php endif; ?>

</div>
