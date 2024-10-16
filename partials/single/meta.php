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

// Get the current post type.
$post_type = get_post_type();

// Allow post types for the single post header template.
$allowed_post_types = apply_filters( 'oceanwp_single_post_header_allowed_post_types', array( 'post' ) );

// Only display for allowed post types and if sections are not empty.
if ( empty( $sections ) || ! in_array( $post_type, $allowed_post_types, true ) ) {
	return;
}

// Return if quote format.
if ( 'quote' === get_post_format() ) {
	return;
}

// Get meta separator class.
$sp_meta_sep_class = oceanwp_theme_single_post_separator();

// Don't display modified date if the same as the published date.
$ocean_date_onoff = false;
$ocean_date_onoff = apply_filters( 'ocean_single_modified_date_state', $ocean_date_onoff );
$display_mod_date = ( false === $ocean_date_onoff || ( true === $ocean_date_onoff && ( get_the_date() != get_the_modified_date() ) ) ) ? true : false;

do_action( 'ocean_before_single_post_meta' );
?>

<ul class="meta ospm-<?php echo $sp_meta_sep_class; ?> clr">

	<?php
	// Loop through meta sections.
	foreach ( $sections as $section ) {
		?>

		<?php if ( 'author' === $section ) { ?>
			<li class="meta-author"<?php oceanwp_schema_markup( 'author_name' ); ?>><span class="screen-reader-text"><?php esc_html_e( 'Post author:', 'oceanwp' ); ?></span><?php oceanwp_icon( 'user' ); ?><?php echo esc_html( the_author_posts_link() ); ?></li>
		<?php } ?>

		<?php if ( 'date' === $section ) { ?>
			<li class="meta-date"<?php oceanwp_schema_markup( 'publish_date' ); ?>><span class="screen-reader-text"><?php esc_html_e( 'Post published:', 'oceanwp' ); ?></span><?php oceanwp_icon( 'date' ); ?><?php echo get_the_date(); ?></li>
		<?php } ?>

		<?php if ( 'mod-date' === $section && true === $display_mod_date ) { ?>
			<li class="meta-mod-date"<?php oceanwp_schema_markup( 'modified_date' ); ?>><span class="screen-reader-text"><?php esc_html_e( 'Post last modified:', 'oceanwp' ); ?></span><?php oceanwp_icon( 'm_date' ); ?><?php echo esc_html( get_the_modified_date() ); ?></li>
		<?php } ?>

		<?php if ( 'categories' === $section && has_category() ) { ?>
			<li class="meta-cat"><span class="screen-reader-text"><?php esc_html_e( 'Post category:', 'oceanwp' ); ?></span><?php oceanwp_icon( 'category' ); ?><?php the_category( ' <span class="owp-sep">/</span> ', get_the_ID() ); ?></li>
		<?php } ?>

		<?php if ( 'reading-time' === $section ) { ?>
			<li class="meta-rt"><span class="screen-reader-text"><?php esc_html_e( 'Reading time:', 'oceanwp' ); ?></span><?php oceanwp_icon( 'r_time' ); ?><?php echo esc_html( ocean_reading_time() ); ?></li>
		<?php } ?>

		<?php if ( 'comments' === $section && comments_open() && ! post_password_required() ) { ?>
			<li class="meta-comments"><span class="screen-reader-text"><?php esc_html_e( 'Post comments:', 'oceanwp' ); ?></span><?php oceanwp_icon( 'comment' ); ?><?php comments_popup_link( esc_html__( '0 Comments', 'oceanwp' ), esc_html__( '1 Comment', 'oceanwp' ), esc_html__( '% Comments', 'oceanwp' ), 'comments-link' ); ?></li>
		<?php } ?>

	<?php } ?>

</ul>

<?php do_action( 'ocean_after_single_post_meta' ); ?>
