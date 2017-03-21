<?php
/**
 * Author bio template
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Only display for standard posts
if ( 'post' != get_post_type() ) {
	return;
}

// Get author data
$author				= get_the_author();
$author_description	= get_the_author_meta( 'description' );
$author_url			= esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) );
$author_avatar		= get_avatar( get_the_author_meta( 'user_email' ), apply_filters( 'ocean_author_bio_avatar_size', 100 ) );

// Only display if author has a description
if ( ! $author_description ) {
	return;
} ?>

<section id="author-bio" class="clr">

	<?php if ( $author_avatar ) : ?>

		<div class="author-bio-avatar">

			<a href="<?php echo esc_url( $author_url ); ?>" title="<?php esc_attr_e( 'Visit Author Page', 'oceanwp' ); ?>" rel="author" >
				<?php
				// Display author avatar
				echo wp_kses_post( $author_avatar ); ?>
			</a>

		</div><!-- .author-bio-avatar -->
		
	<?php endif; ?>

	<div class="author-bio-content clr">

		<h4 class="author-bio-title">
			<a href="<?php echo esc_url( $author_url ); ?>" title="<?php esc_attr_e( 'Visit Author Page', 'oceanwp' ); ?>">
				<?php echo esc_html( strip_tags( $author ) ); ?>
			</a>
		</h4><!-- .author-bio-title -->

		<?php
		// Outputs the author description if one exists
		if ( $author_description ) : ?>

			<div class="author-bio-description clr">
				<?php echo wp_kses_post( $author_description ); ?>
			</div><!-- author-bio-description -->

		<?php endif; ?>

	</div>

</section><!-- #author-bio -->