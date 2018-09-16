<?php
/**
 * Post single meta
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get meta sections
$sections = oceanwp_blog_single_meta();

// Return if sections are empty
if ( empty( $sections )
	|| 'post' != get_post_type() ) {
	return;
}

// Return if quote format
if ( 'quote' == get_post_format() ) {
	return;
} ?>

<?php do_action( 'ocean_before_single_post_meta' ); ?>

<ul class="meta clr">

	<?php
	// Loop through meta sections
	foreach ( $sections as $section ) { ?>

		<?php if ( 'author' == $section ) { ?>
			<li class="meta-author"<?php oceanwp_schema_markup( 'author_name' ); ?>><i class="icon-user"></i><?php echo the_author_posts_link(); ?></li>
		<?php } ?>

		<?php if ( 'date' == $section ) { ?>
			<li class="meta-date"<?php oceanwp_schema_markup( 'publish_date' ); ?>><i class="icon-clock"></i><?php echo get_the_date(); ?></li>
		<?php } ?>

		<?php if ( 'categories' == $section ) { ?>
			<li class="meta-cat"><i class="icon-folder"></i><?php the_category( ' / ', get_the_ID() ); ?></li>
		<?php } ?>

		<?php if ( 'comments' == $section && comments_open() && ! post_password_required() ) { ?>
			<li class="meta-comments"><i class="icon-bubble"></i><?php comments_popup_link( esc_html__( '0 Comments', 'oceanwp' ), esc_html__( '1 Comment',  'oceanwp' ), esc_html__( '% Comments', 'oceanwp' ), 'comments-link local' ); ?></li>
		<?php } ?>

	<?php } ?>
	
</ul>

<?php do_action( 'ocean_after_single_post_meta' ); ?>