<?php
/**
 * The default template for displaying post meta.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get theme icons.
$theme_icons = oceanwp_theme_icons();
$icon_t = oceanwp_theme_icon_class();

if ( 'post' === get_post_type() ) {
	?>

	<div class="blog-entry-comments clr">
		<i class="<?php echo $theme_icons[ 'comment' ][ $icon_t ]; ?>"></i><?php comments_popup_link( esc_html__( '0 Comments', 'oceanwp' ), esc_html__( '1 Comment', 'oceanwp' ), esc_html__( '% Comments', 'oceanwp' ), 'comments-link' ); ?>
	</div>

	<?php
}
?>
