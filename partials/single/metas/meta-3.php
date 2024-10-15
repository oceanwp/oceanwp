<?php
/**
 * Post single header meta style 2
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) or exit;

// Get meta sections.
$sections = ocean_blog_single_header_meta();

// Get the current post type.
$post_type = get_post_type();

// Allow post types for the single post header template.
$allowed_post_types = apply_filters( 'oceanwp_single_post_header_allowed_post_types', array( 'post' ) );

// Return if sections are empty, the post type is not allowed, or it's a quote post format.
if ( empty( $sections ) || ! in_array( $post_type, $allowed_post_types, true ) || 'quote' === get_post_format() ) {
    return;
}

// Don't display modified date if the same as the published date.
$ocean_date_onoff = false;
$ocean_date_onoff = apply_filters( 'ocean_single_header_modified_date_state', $ocean_date_onoff );
$display_mod_date = ( false === $ocean_date_onoff || ( true === $ocean_date_onoff && ( get_the_date() != get_the_modified_date() ) ) ) ? true : false;

do_action( 'ocean_before_single_post_header_meta' );
?>

<ul class="meta-item meta-style-3 <?php echo ocean_blog_single_header_meta_separator_class(); ?>">

	<?php
	// Loop through meta sections.
	foreach ( $sections as $section ) {
		?>

		<?php if ( 'author' === $section ) { ?>
			<li class="meta-author" aria-label="<?php esc_attr( oceanwp_theme_strings( 'owp-string-written-by' ) ); ?>"><?php oceanwp_icon( 'user' ); ?><?php ocean_get_post_author( array( 'prefix' => '', 'aria_prefix' => '' ) ); ?></li>
		<?php } ?>

		<?php if ( 'date' === $section ) { ?>
			<li class="meta-date" aria-label="<?php esc_attr( oceanwp_theme_strings( 'owp-string-wai-published-on' ) ); ?>"><?php oceanwp_icon( 'date' ); ?><?php ocean_get_post_date( array( 'prefix' => '' ) ); ?></li>
		<?php } ?>

		<?php if ( 'mod-date' === $section && true === $display_mod_date ) { ?>
			<li class="meta-mod-date" aria-label="<?php esc_attr( oceanwp_theme_strings( 'owp-string-wai-updated-on' ) ); ?>"><?php oceanwp_icon( 'm_date' ); ?><?php ocean_get_post_modified_date( array( 'prefix' => '' ) ); ?></li>
		<?php } ?>

		<?php if ( 'categories' === $section && has_category() ) { ?>
			<li class="meta-cat" aria-label="<?php esc_attr( oceanwp_theme_strings( 'owp-string-posted-in' ) ); ?>"><?php oceanwp_icon( 'category' ); ?><?php ocean_get_post_categories( array( 'prefix' => '' ) ); ?></li>
		<?php } ?>

		<?php if ( 'tags' === $section && ! empty( ocean_get_post_tags( '', false ) ) ) { ?>
			<li class="meta-tag" aria-label="<?php esc_attr( oceanwp_theme_strings( 'owp-string-tagged-as' ) ); ?>"><?php oceanwp_icon( 'hashtag' ); ?><?php ocean_get_post_tags( array( 'prefix' => '' ) ); ?></li>
		<?php } ?>

		<?php if ( 'reading-time' === $section ) { ?>
			<li class="meta-rt" aria-label="<?php esc_attr( oceanwp_theme_strings( 'owp-string-wai-reading-time' ) ); ?>"><?php oceanwp_icon( 'r_time' ); ?><?php ocean_get_post_reading_time(); ?></li>
		<?php } ?>

		<?php if ( 'comments' === $section && comments_open() && ! post_password_required() ) { ?>
			<li class="meta-comments" aria-label="<?php echo esc_attr( oceanwp_theme_strings( 'owp-string-wai-comments' ) ); ?>"><?php oceanwp_icon( 'comment' ); ?><?php comments_popup_link( esc_html__( '0 Comments', 'oceanwp' ), esc_html__( '1 Comment', 'oceanwp' ), esc_html__( '% Comments', 'oceanwp' ), 'comments-link' ); ?></li>
		<?php } ?>

	<?php } ?>

</ul>

<?php do_action( 'ocean_after_single_post_header_meta' ); ?>
