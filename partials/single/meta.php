<?php
/**
 * Post single meta
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get meta sections.
$sections = oceanwp_blog_single_meta();

// Return if sections are empty.
if ( empty( $sections )
	|| 'post' !== get_post_type() ) {
	return;
}

// Return if quote format.
if ( 'quote' === get_post_format() ) {
	return;
} ?>

<?php do_action( 'ocean_before_single_post_meta' ); ?>

<ul class="meta clr">

	<?php
	// Loop through meta sections.
	foreach ( $sections as $section ) {
		?>

		<?php if ( 'author' === $section ) { ?>
			<li class="meta-author"<?php oceanwp_schema_markup( 'author_name' ); ?>><span class="screen-reader-text"><?php esc_html_e( 'Post author:', 'oceanwp' ); ?></span><i class="icon-user" aria-hidden="true"></i><?php echo esc_html( the_author_posts_link() ); ?></li>
		<?php } ?>

		<?php if ( 'date' === $section ) { ?>
			<li class="meta-date"<?php oceanwp_schema_markup( 'publish_date' ); ?>><span class="screen-reader-text"><?php esc_html_e( 'Post published:', 'oceanwp' ); ?></span><i class="icon-clock" aria-hidden="true"></i><?php echo get_the_date(); ?></li>
		<?php } ?>

		<?php if ( 'mod-date' === $section ) { ?>
			<li class="meta-mod-date"<?php oceanwp_schema_markup( 'modified_date' ); ?>><span class="screen-reader-text"><?php esc_html_e( 'Post last modified:', 'oceanwp' ); ?></span><i class="icon-note" aria-hidden="true"></i><?php echo esc_html( get_the_modified_date() ); ?></li>
		<?php } ?>

		<?php if ( 'categories' === $section ) { ?>
			<li class="meta-cat"><span class="screen-reader-text"><?php esc_html_e( 'Post category:', 'oceanwp' ); ?></span><i class="icon-folder" aria-hidden="true"></i><?php the_category( ' <span class="owp-sep">/</span> ', get_the_ID() ); ?></li>
		<?php } ?>

		<?php if ( 'reading-time' === $section ) { ?>
			<li class="meta-cat"><span class="screen-reader-text"><?php esc_html_e( 'Reading time:', 'oceanwp' ); ?></span><i class="icon-cup" aria-hidden="true"></i><?php echo esc_attr( ocean_reading_time() ); ?></li>
		<?php } ?>

		<?php if ( 'comments' === $section && comments_open() && ! post_password_required() ) { ?>
			<li class="meta-comments"><span class="screen-reader-text"><?php esc_html_e( 'Post comments:', 'oceanwp' ); ?></span><i class="icon-bubble" aria-hidden="true"></i><?php comments_popup_link( esc_html__( '0 Comments', 'oceanwp' ), esc_html__( '1 Comment', 'oceanwp' ), esc_html__( '% Comments', 'oceanwp' ), 'comments-link' ); ?></li>
		<?php } ?>

	<?php } ?>

</ul>

<?php do_action( 'ocean_after_single_post_meta' ); ?>
