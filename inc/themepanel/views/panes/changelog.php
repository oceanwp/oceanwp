<?php

function get_latest_changelog() {
	$changelog   = null;
	$access_type = get_filesystem_method();

	if ( $access_type === 'direct' ) {

		$changelog_file = get_template_directory() . '/changelog.md';
		if( file_exists( $changelog_file ) ) {
			$changelog = file_get_contents( $changelog_file );
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
