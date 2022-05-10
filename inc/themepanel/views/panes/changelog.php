<?php

function get_latest_changelog() {
	$changelog   = null;
	$access_type = get_filesystem_method();

	if ( $access_type === 'direct' ) {
		$creds = request_filesystem_credentials(
			site_url() . '/wp-admin/',
			'',
			false,
			false,
			array()
		);

		if ( WP_Filesystem( $creds ) ) {
			global $wp_filesystem;

			$changelog = $wp_filesystem->get_contents(
				get_template_directory() . '/changelog.md'
			);
		}
	}
	return $changelog;
}
?>

<script>
	document.getElementById('content').innerHTML =
		marked.parse(<?php echo json_encode( get_latest_changelog() ); ?>);
</script>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-changelog">
	
	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<div class="oceanwp-tp-message">
		<div id="content"></div>
	</div>
</div>
