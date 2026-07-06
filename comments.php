<?php
/**
 * The template for displaying Comments.
 *
 * The area of the page that contains both current comments
 * and the comment form.
 *
 * For additional options check:
 * oceanwp_comments() and oceanwp_modify_comment_form_fields( $fields )
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Return if password is required.
if ( post_password_required() ) {
	return;
}

// Add classes to the comments main wrapper.
$classes = 'comments-area clr';

if ( get_comments_number() !== 0 ) {
	$classes .= ' has-comments';
}

if ( ! comments_open() && get_comments_number() < 1 ) {
	$classes .= ' empty-closed-comments';
	return;
}

if ( 'full-screen' === oceanwp_post_layout() ) {
	$classes .= ' container';
}

// Get comment form position.
$comment_position = apply_filters( 'ocean_comment_form_position', get_theme_mod( 'ocean_comment_form_position' ) );
$comment_position = $comment_position ? $comment_position : 'after';

// New accessibility and customizer settings.
$display_comment_label = oceanwp_is_accessibility_feature_enabled( 'ocean_display_comment_form_label' );

// Setup conditional Textarea formatting parameters.
$textarea_label_class = $display_comment_label ? 'comment-form-visible-label' : 'screen-reader-text';
$textarea_label_text  = esc_html__( 'Comment', 'oceanwp' );

if ( $display_comment_label ) {
	$textarea_label_text .= ' <span class="required">*</span>';
	$textarea_placeholder = ''; // Completely strip placeholder text when visible labels are enabled.
} else {
	$textarea_placeholder = esc_attr( oceanwp_theme_strings( 'owp-string-comment-placeholder', false ) );
}

// Construct clean textarea markup block.
$comment_field_html  = '<div class="comment-textarea">';
$comment_field_html .= '<label for="comment" class="' . esc_attr( $textarea_label_class ) . '">' . $textarea_label_text . '</label>';
$comment_field_html .= '<textarea name="comment" id="comment" cols="39" rows="4" tabindex="0" class="textarea-comment" required aria-required="true"';
if ( ! empty( $textarea_placeholder ) ) {
	$comment_field_html .= ' placeholder="' . $textarea_placeholder . '"';
}
$comment_field_html .= '></textarea></div>';

// Comment form args.
$args = array(
	/* translators: 1: logged in to comment */
	'must_log_in'          => '<p class="must-log-in">' . sprintf( esc_html__( 'You must be %1$slogged in%2$s to post a comment.', 'oceanwp' ), '<a href="' . wp_login_url( apply_filters( 'the_permalink', get_permalink() ) ) . '">', '</a>' ) . '</p>',
	'logged_in_as'         => '<p class="logged-in-as">' . esc_html__( 'Logged in as', 'oceanwp' ) . ' <a href="' . admin_url( 'profile.php' ) . '">' . $user_identity . '</a>.<span class="screen-reader-text">' . esc_html( oceanwp_theme_strings( 'owp-string-comment-profile-edit', false ) ) . '</span> <a href="' . wp_logout_url( get_permalink() ) . '" aria-label="' . esc_attr( oceanwp_theme_strings( 'owp-string-comment-logout-text', false ) ) . '">' . esc_html__( 'Log out &raquo;', 'oceanwp' ) . '</a></p>',
	'comment_notes_before' => false,
	'comment_notes_after'  => false,
	'comment_field'        => $comment_field_html, // Include fixed accessible element upstream.
	'id_submit'            => 'comment-submit',
	'label_submit'         => esc_html( oceanwp_theme_strings( 'owp-string-comment-post-button', false ) ),
);

?>

<section id="comments" class="<?php echo esc_attr( $classes ); ?>" aria-label="<?php echo esc_attr_x( 'Comments', 'Aria label for the comments section', 'oceanwp' ); ?>">

	<?php
	// Display comment form if position set to before the comment list.
	if ( 'before' === $comment_position ) {
		comment_form( $args );
	}
	?>

	<?php if ( have_comments() ) : ?>

		<?php
		$comments_number = number_format_i18n( get_comments_number() );
		if ( '1' === $comments_number ) {
			$comments_title = esc_html__( 'This Post Has One Comment', 'oceanwp' );
		} else {
			/* translators: %s: Comments number */
			$comments_title = sprintf( esc_html__( 'This Post Has %s Comments', 'oceanwp' ), $comments_number );
		}
		$comments_title = apply_filters( 'ocean_comments_title', $comments_title );
		?>

		<h3 class="theme-heading comments-title">
			<span class="text"><?php echo esc_html( $comments_title ); ?></span>
		</h3>

		<ol class="comment-list">
			<?php
			wp_list_comments(
				array(
					'callback' => 'oceanwp_comment',
					'style'    => 'ol',
					'format'   => 'html5',
				)
			);
			?>
		</ol><!-- .comment-list -->

		<?php
		// Display comment navigation.
		if ( function_exists( 'the_comments_navigation' ) ) :

			$prev_comm_txt = is_rtl() ? oceanwp_icon( 'angle_right', false ) : oceanwp_icon( 'angle_left', false );
			$next_comm_txt = is_rtl() ? oceanwp_icon( 'angle_left', false ) : oceanwp_icon( 'angle_right', false );

			the_comments_navigation(
				array(
					'prev_text' => $prev_comm_txt . '<span class="screen-reader-text">' . esc_html__( 'Previous comment', 'oceanwp' ) . '</span>' . esc_html__( 'Previous', 'oceanwp' ),
					'next_text' => esc_html__( 'Next', 'oceanwp' ) . $next_comm_txt . '</i><span class="screen-reader-text">' . esc_html__( 'Next comment', 'oceanwp' ) . '</span>',
				)
			);

		elseif ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
			?>

			<div class="comment-navigation clr">
				<?php
				paginate_comments_links(
					array(
						'prev_text' => $prev_comm_txt . '</i><span class="screen-reader-text">' . esc_html__( 'Previous comment', 'oceanwp' ) . '</span>' . esc_html__( 'Previous', 'oceanwp' ),
						'next_text' => esc_html__( 'Next', 'oceanwp' ) . $next_comm_txt . '<span class="screen-reader-text">' . esc_html__( 'Next comment', 'oceanwp' ) . '</span>',
					)
				);
				?>
			</div>

		<?php endif; ?>

		<?php if ( ! comments_open() && get_comments_number() ) : ?>
			<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'oceanwp' ); ?></p>
		<?php endif; ?>

	<?php endif; // have_comments function. ?>

	<?php
	// Display comment form if position set to after the comment list (default setting).
	if ( 'after' === $comment_position ) {
		comment_form( $args );
	}
	?>

</section><!-- #comments -->
