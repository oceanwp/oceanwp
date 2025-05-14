<?php
$custom_logo_url = '';

if ( class_exists( 'Ocean_White_Label' ) ) {
    $settings = Ocean_White_Label::get_white_label_settings();
    $custom_logo_url = $settings['panel_logo'];
} elseif ( get_option( 'oceanwp_theme_panel_logo' ) ) {
    $custom_logo_url = wp_get_attachment_url( get_option( 'oceanwp_theme_panel_logo' ) );
}
?>

<div class="oceanwp-notify"><span id="oceanwp-notifyType" class=""></span></div>
<div class="oceanwp-tp-header">
	<div class="oceanwp-tp-branding">
		<?php if( ! empty( $custom_logo_url ) ) : ?>
			<span class="oceanwp-tp-oceanwp-logo"
				<?php if (  ! empty( $custom_logo_url ) && get_option( 'oceanwp_theme_panel_logo' ) ) :	?>
					style="background: url(<?php echo esc_url( $custom_logo_url ); ?>) no-repeat center center;"
				<?php endif; ?>>
			</span>
		<?php elseif( empty( $custom_logo_url ) && ! get_option( 'oceanwp_whitelabel_oceanwp_panel', false ) ) : ?>
			<span class="oceanwp-tp-oceanwp-logo"></span>
		<?php endif; ?>
		<strong>
			<span>
				<?php esc_html_e( 'OceanWP Panel', 'oceanwp' ); ?>
			</span>
		</strong>
	</div>
	<div class="oceanwp-tp-theme-version">
		<?php echo esc_html( 'v' ); ?><?php echo esc_html( OCEANWP_THEME_VERSION ); ?>
	</div>
	<div class="clear"></div>
</div>


