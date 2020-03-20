<?php
/**
 * The default template for displaying post meta.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get meta sections
$sections = oceanwp_blog_entry_meta();

// Return if sections are empty
if ( empty( $sections ) ) {
	return;
} ?>

<?php do_action( 'ocean_before_blog_entry_meta' ); ?>

<ul class="meta clr" aria-label="<?php _e( 'Post details:', 'oceanwp' ); ?>">

	<?php
	// Loop through meta sections
	foreach ( $sections as $section ) { ?>

		<?php if ( 'author' == $section ) { ?>
			<li class="meta-author"<?php oceanwp_schema_markup( 'author_name' ); ?>><span class="screen-reader-text"><?php _e( 'Post Author:', 'oceanwp' ); ?></span><i class="icon-user" aria-hidden="true"></i><?php echo the_author_posts_link(); ?></li>
		<?php } ?>

		<?php if ( 'date' == $section ) { ?>
			<li class="meta-date"<?php oceanwp_schema_markup( 'publish_date' ); ?>><span class="screen-reader-text"><?php _e( 'Post published:', 'oceanwp' ); ?></span><i class="icon-clock" aria-hidden="true"></i><?php echo get_the_date(); ?></li>
		<?php } ?>

		<?php if ( 'mod-date' == $section ) { ?>
			<li class="meta-mod-date"<?php oceanwp_schema_markup( 'modified_date' ); ?>><span class="screen-reader-text"><?php _e( 'Post last modified:', 'oceanwp' ); ?></span><i class="icon-note" aria-hidden="true"></i><?php echo get_the_modified_date(); ?></li>
		<?php } ?>

		<?php if ( 'categories' == $section ) { ?>
			<li class="meta-cat"><span class="screen-reader-text"><?php _e( 'Post Category:', 'oceanwp' ); ?></span><i class="icon-folder" aria-hidden="true"></i><?php the_category( ' <span class="owp-sep">/</span> ', get_the_ID() ); ?></li>
		<?php } ?>

		<?php if ( 'comments' == $section && comments_open() && ! post_password_required() ) { ?>
			<li class="meta-comments"><span class="screen-reader-text"><?php _e( 'Post Comments:', 'oceanwp' ); ?></span><i class="icon-bubble" aria-hidden="true"></i><?php comments_popup_link( esc_html__( '0 Comments', 'oceanwp' ), esc_html__( '1 Comment',  'oceanwp' ), esc_html__( '% Comments', 'oceanwp' ), 'comments-link' ); ?></li>
		<?php } ?>

	<?php } ?>

</ul>

<?php do_action( 'ocean_after_blog_entry_meta' ); ?>