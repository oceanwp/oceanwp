<?php
/**
 * The template for displaying search forms.
 *
 * @package OceanWP WordPress theme
 */
?>

<form method="get" class="searchform" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<input type="text" class="field" name="s" id="s" placeholder="<?php esc_html_e( 'Search', 'oceanwp' ); ?>">
</form>