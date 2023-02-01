<?php
/**
 * Displays post entry read more
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define read more icon.
$icon = '';
$icon = is_rtl() ? oceanwp_icon( 'angle_left', false ) : oceanwp_icon( 'angle_right', false );

$post_link   = ocean_link_post_url( get_the_ID() );
$link_target = ocean_link_post_url_target( get_the_ID() );

$blog_continue_reading_content = '';
ob_start();
?>
<a href="<?php echo esc_url( $post_link ); ?>" <?php if ( $link_target ) { ?> target="<?php echo esc_attr( $link_target ); ?>" <?php } ?>><?php oceanwp_theme_strings( 'owp-string-post-continue-reading' ); ?><span class="screen-reader-text"><?php the_title(); ?></span><?php echo $icon; ?></a>
<?php
$blog_continue_reading_content .= ob_get_clean();
?>

<?php do_action( 'ocean_before_blog_entry_readmore' ); ?>

<div class="blog-entry-readmore clr">
	<?php echo $blog_continue_reading_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div><!-- .blog-entry-readmore -->

<?php do_action( 'ocean_after_blog_entry_readmore' ); ?>
