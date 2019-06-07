 <?php
/**
 * The template for displaying Comments.
 *
 * The area of the page that contains both current comments and the comment
 * form. The actual display of comments is handled by a callback to
 * oceanwp_comment() which is located at functions/comments-callback.php
 *
 * @package OceanWP WordPress theme
 */

// Return if password is required
if ( post_password_required() ) {
	return;
}

// Add classes to the comments main wrapper
$classes = 'comments-area clr';

if ( get_comments_number() != 0 ) {
	$classes .= ' has-comments';
}

if ( ! comments_open() && get_comments_number() < 1 ) {
	$classes .= ' empty-closed-comments';
	return;
}

if ( 'full-screen' == oceanwp_post_layout() ) {
	$classes .= ' container';
} ?>

<section id="comments" class="<?php echo esc_attr( $classes ); ?>">

	<?php // You can start editing here -- including this comment! ?>

	<?php if ( have_comments() ) :

		// Get comments title
		$comments_number = number_format_i18n( get_comments_number() );
		if ( '1' == $comments_number ) {
			$comments_title = esc_html__( 'This Post Has One Comment', 'oceanwp' );
		} else {
			$comments_title = sprintf( esc_html__( 'This Post Has %s Comments', 'oceanwp' ), $comments_number );
		}
		$comments_title = apply_filters( 'ocean_comments_title', $comments_title ); ?>

		<h3 class="theme-heading comments-title">
			<span class="text"><?php echo esc_html( $comments_title ); ?></span>
		</h3>

		<ol class="comment-list">
			<?php
			// List comments
			wp_list_comments( array(
				'callback' 	=> 'oceanwp_comment',
				'style'     => 'ol',
				'format'    => 'html5',
			) ); ?>
		</ol><!-- .comment-list -->

		<?php
		// Display comment navigation - WP 4.4.0
		if ( function_exists( 'the_comments_navigation' ) ) :

			the_comments_navigation( array(
				'prev_text' => '<i class="fa fa-angle-left"></i>'. esc_html__( 'Previous', 'oceanwp' ),
				'next_text' => esc_html__( 'Next', 'oceanwp' ) .'<i class="fa fa-angle-right"></i>',
			) );

		elseif ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>

			<div class="comment-navigation clr">
				<?php paginate_comments_links( array(
					'prev_text' => '<i class="fa fa-angle-left"></i>'. esc_html__( 'Previous', 'oceanwp' ),
					'next_text' => esc_html__( 'Next', 'oceanwp' ) .'<i class="fa fa-angle-right"></i>',
				) ); ?>
			</div>

		<?php endif; ?>

		<?php
		// Display comments closed message
		if ( ! comments_open() && get_comments_number() ) : ?>
			<p class="no-comments"><?php esc_html_e( 'Comments are closed.' , 'oceanwp' ); ?></p>
		<?php endif; ?>

	<?php endif; // have_comments() ?>

	<?php
	comment_form(
		array(
			'must_log_in'			=> '<p class="must-log-in">'.  sprintf( esc_html__( 'You must be %1$slogged in%2$s to post a comment.', 'oceanwp' ), '<a href="'. wp_login_url( apply_filters( 'the_permalink', get_permalink() ) ) .'">', '</a>' ) .'</p>',
			'logged_in_as'			=> '<p class="logged-in-as">'. esc_html__( 'Logged in as', 'oceanwp' ) .' <a href="'. admin_url( 'profile.php' ) .'">'. $user_identity .'</a>. <a href="' . wp_logout_url( get_permalink() ) .'" title="'. esc_html__( 'Log out of this account', 'oceanwp' ) .'">'. esc_html__( 'Log out &raquo;', 'oceanwp' ) .'</a></p>',
			'comment_notes_before'	=> false,
			'comment_notes_after'	=> false,
			'comment_field'			=> '<div class="comment-textarea"><textarea name="comment" id="comment" cols="39" rows="4" tabindex="100" class="textarea-comment" placeholder="'. esc_html__( 'Your Comment Here...', 'oceanwp' ) .'"></textarea></div>',
			'id_submit'				=> 'comment-submit',
			'label_submit'			=> esc_html__( 'Post Comment', 'oceanwp' ),
		)
	); ?>

</section><!-- #comments -->