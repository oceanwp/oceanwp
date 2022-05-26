<?php
$diamond_link = "https://oceanwp.org/core-extensions-bundle/";
$star_link = "https://wordpress.org/support/theme/oceanwp/reviews/#new-post";
$help_link = "#help";
?>

<?php if( ! get_option( 'oceanwp_hide_small_nav_menu', false ) ) : ?>
	<!-- Top Panel -->
	<div class="oceanwp-tp-top-panel">
		<div class="oceanwp-tp-top-panel-inner">
		<a href="<?php echo esc_url( $diamond_link ); ?>" target="_blank" class="top-bar-links">
			<img class="oceanwp-top-panel-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/diamond.png' ); ?>" />
		</a>
		<a href="<?php echo esc_url( $star_link ); ?>" target="_blank" class="top-bar-links">
			<img class="oceanwp-top-panel-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/star.png' ); ?>" />
		</a>		
			<a href="<?php echo esc_url( $help_link ); ?>" class="top-bar-links oceanwp-tp-topbar-link">
			<img class="oceanwp-top-panel-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/life-saver.png' ); ?>" />
		</a>
		</div>
	</div>
<?php endif; ?>