<div id="wrap" class="wrap">
	<h1></h1>
	<div class="oceanwp-tp-wrap oceanwp-wrap oceanwp">
		<?php require_once OCEANWP_THEME_PANEL_DIR . '/views/layout/header.php'; ?>
		<div class="oceanwp-tp-container">
			<?php require_once OCEANWP_THEME_PANEL_DIR . '/views/layout/sidebar.php'; ?>
			<div class="oceanwp-tp-panes">
				<div class="oceanwp-tp-preloader"><div class="oceanwp-tp-loader"></div></div>
				<?php oceanwp_theme_panel()->print_pane(); ?>
			</div>
		</div>
	</div>
</div>
