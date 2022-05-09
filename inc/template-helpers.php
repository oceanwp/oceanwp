<?php
/**
 * OceanWP Template Helpers
 *
 * @package OceanWP WordPress theme
 */
// Exit if accessed directly.
defined( 'ABSPATH' ) or exit;

/*-------------------------------------------------------------------------------*/
/* [ Table of contents ]
/*-------------------------------------------------------------------------------*

	# General
	# Single Blog Post
	# Blog Post Entries

/*-------------------------------------------------------------------------------*/
/* [ General ]
/*-------------------------------------------------------------------------------*/

/**
 * Edit post link.
 * 
 * Enables direct post access on the front end.
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_edit_post' ) ) {

	function ocean_edit_post() {

		$edit_link = sprintf(
			/* translators: %s: Name of current post for screen readers */
			wp_kses(
				__( 'Edit <span class="screen-reader-text">%s</span>', 'oceanwp' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		);

		edit_post_link( $edit_link, '<span class="edit-link">', '</span>');
	}
}

/**
 * Return post author
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_author' ) ) {

	function ocean_get_post_author( $args = array(), $echo = true ) {

		global $post;
		$author_id = $post->post_author;

		$default_args = array(
			'prefix'      => oceanwp_theme_strings( 'owp-string-posted-by', false ),
			'aria_prefix' => oceanwp_theme_strings( 'owp-string-all-posts-by', false ),
			'before'      => '',
			'after'       => ''
		);

		$args = wp_parse_args( $args, $default_args );

		$aria_label = sprintf(
			/* translators: %s: author name for link aria label. */
			esc_html( $args['aria_prefix'] . ' ' . __( '%s', 'oceanwp' ) ),
			esc_html( get_the_author() )
		);

		$author = sprintf(
			/* translators: %s: author name for link meta. */
			esc_html( $args['prefix'] . ' ' . __( '%s', 'oceanwp' ) ),
			'<a href="' . esc_url( get_author_posts_url( get_the_author_meta( $author_id ) ) ) . '" rel="author" aria-label="' . esc_attr( $aria_label ) . '">' . esc_html( get_the_author_meta( 'display_name', $author_id ) )  . '</a>'
		);

		$author_meta = $args['before'] . $author . $args['after'];
		$author_meta = apply_filters( 'ocean_meta_author', $author_meta );

		if ( $echo ) {
			echo $author_meta; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $author_meta;
		}

	}
}

/**
 * Return post author bio description
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_author_bio' ) ) {

	function ocean_get_post_author_bio( $args = array(), $echo = true ) {

		global $post;
		$author_id = $post->post_author;

		$default_args = array(
			'before'  => '',
			'after'   => ''
		);

		$args = wp_parse_args( $args, $default_args );

		$author_bio = get_the_author_meta( 'description', $author_id );

		$author_bio_meta = $args['before'] . $author_bio . $args['after'];
		$author_bio_meta = apply_filters( 'ocean_meta_author_bio', $author_bio_meta );

		if ( $echo ) {
			echo $author_bio_meta; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $author_bio_meta;
		}
	}
}

/**
 * Return post pubslished date
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_date' ) ) {

	function ocean_get_post_date( $args = array(), $echo = true ) {

		$default_args = array(
			'prefix'      => oceanwp_theme_strings( 'owp-string-posted-on', false ),
			'date_format' => 'F j, Y',
			'before'      => '',
			'after'       => ''
		);

		$args = wp_parse_args( $args, $default_args );

		$date_format = $args['date_format'];

		$time_string = '<time class="meta-date published" datetime-local="%1$s">%2$s</time>';

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date( $date_format ) )
		);

		$date_meta = $args['before'] . $args['prefix'] . ' ' . $time_string . $args['after'];
		$date_meta = apply_filters( 'ocean_meta_date', $date_meta );

		if ( $echo ) {
			echo $date_meta; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $date_meta;
		}
	}
}

/**
 * Return post modified date
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_modified_date' ) ) {

	function ocean_get_post_modified_date( $args = array(), $echo = true ) {

		$default_args = array(
			'prefix'      => oceanwp_theme_strings( 'owp-string-updated-on', false ),
			'date_format' => 'F j, Y'
		);

		$args = wp_parse_args( $args, $default_args );

		$date_format = $args['date_format'];

		$time_string = '<time class="meta-mod-date updated" datetime-local="%1$s">%2$s</time>';

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date( $date_format ) )
		);

		$date_mod_meta = esc_html( $args['prefix'] ) . ' ' . $time_string;
		$date_mod_meta = apply_filters( 'ocean_meta_modified_date', $date_mod_meta );

		if ( $echo ) {
			echo $date_mod_meta; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $date_mod_meta;
		}
	}
}

/**
 * Return post reading time
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_reading_time' ) ) {

	function ocean_get_post_reading_time( $echo = true ) {

		global $post;

		$content      = get_post_field( 'post_content', $post->ID );
		$word_count   = str_word_count( strip_tags( $content ) );
		$word_count   = apply_filters( 'ocean_post_reading_word_count', $word_count );
		$reading_time = ceil( $word_count / 200 );

		$reading_time = apply_filters( 'oceanwp_post_reading_time', $reading_time );

		$reading_time_txt = $reading_time > 1 ? oceanwp_theme_strings( 'owp-string-reading-more', false ) : oceanwp_theme_strings( 'owp-string-reading-one', false );

		$owp_reading_time = sprintf(
			/* translators: %s: post reading time. */
			esc_html( __( '%s', 'oceanwp' ) . ' ' . $reading_time_txt ),
			esc_html( $reading_time )
		);

		$owp_reading_time = apply_filters( 'ocean_meta_reading_time', $owp_reading_time );

		if ( $echo ) {
			echo $owp_reading_time; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $owp_reading_time;
		}
	}
}

/**
 * Return list of post categories
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_categories' ) ) {

	function ocean_get_post_categories( $args = array(), $echo = true ) {

		$default_args = array(
			'prefix'    => oceanwp_theme_strings( 'owp-string-posted-in', false ),
			'separator' => ' / ',
			'before'    => '',
			'after'     => ''
		);

		$args = wp_parse_args( $args, $default_args );

		$category_list = get_the_category_list( esc_html_x( $args['separator'], 'Category list separator', 'oceanwp' ) );

		if ( $category_list ) {
			$category = sprintf(
				/* translators: %s: list of post categories. */
				esc_html( $args['prefix'] . ' ' . __( '%s', 'oceanwp' ) ),
				$category_list
			);
		}

		$category_meta = $args['before'] . $category . $args['after'];
		$category_meta = apply_filters( 'ocean_meta_category_list', $category_meta );

		if ( $echo ) {
			echo $category_meta; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $category_meta;
		}
	}
}

/**
 * Return list of post tags
 * 
 * @param array|bool
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_tags' ) ) {

	function ocean_get_post_tags( $args = array(), $echo = true ) {

		$default_args = array(
			'prefix'    => oceanwp_theme_strings( 'owp-string-tagged-as', false ),
			'separator' => ', ',
			'before'    => '',
			'after'     => ''
		);

		$args = wp_parse_args( $args, $default_args );

		$tag_list = get_the_tag_list( '', esc_html_x( $args['separator'], 'Tag list separator', 'oceanwp' ) );

		$tags = '';

		if ( $tag_list ) {
			$tags = sprintf(
				/* translators: %s: list of post tags. */
				esc_html( $args['prefix'] . ' ' . __( '%s', 'oceanwp' ) ),
				$tag_list
			);
		}

		$tag_meta = $args['before'] . $tags . $args['after'];
		$tag_meta = apply_filters( 'ocean_meta_tags_list', $tag_meta );

		if ( $echo ) {
			echo $tag_meta; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $tag_meta;
		}
	}
}

/**
 * Return post author avatar
 * 
 * @param array|bool
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_author_avatar' ) ) {

	function ocean_get_post_author_avatar( $args = array(), $echo = true ) {

		global $post;
		$author_id = $post->post_author;

		$default_args = array(
			'size'        => 150,
			'alt'         => oceanwp_theme_strings( 'owp-string-author-img', false ),
			'aria_hidden' => true,
			'before'      => '',
			'after'       => ''
		);

		$args = wp_parse_args( $args, $default_args );

		$avatar_url = '<a href="' . esc_url( get_author_posts_url( get_the_author_meta( $author_id ) ) ) . '" rel="author"' . ( $args['aria_hidden'] ? ' aria-hidden="true"' : '' ) . '>';
		$avatar_url .= get_avatar(
			$author_id,
			apply_filters( 'ocean_author_bio_avatar_size', $args['size'] ),
			'',
			esc_attr( $args['alt'] )
		);
		$avatar_url .= '</a>';

		$author_avatar = $args['before'] . $avatar_url . $args['after'];
		$author_avatar = apply_filters( 'ocean_post_author_avatar', $author_avatar );

		if ( $echo ) {
			echo $author_avatar; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $author_avatar;
		}

	}
}

/**
 * Display post featured image
 * 
 * @param string|array|bool
 * @since 3.1.0
 */
if ( ! function_exists( 'oceanwp_paint_post_thumbnail' ) ) {

	function oceanwp_paint_post_thumbnail( $img_size = 'full', $img_args = array(), $echo = true ) {

		// Don't execute if the post has no featured image, is attachment or is password protected.
		if ( ! has_post_thumbnail() || is_attachment() || post_password_required() ) {
			return;
		}

		// Define default image args.
		$def_img_args = array(
			'class' => 'post-thumbnail',
			'name' 	=> 'ocean-post-thumb-xl'
		);

		$img_args = wp_parse_args( $img_args, $def_img_args );

		$img_size = apply_filters( 'ocean_single_post_thumbnail_img_size', $img_size );

		$img_html = '';
		
		$img_html = '<figure class="'. $img_args['class'] . ' ' . $img_args['name'] .'">';
			$img_html .= get_the_post_thumbnail( null, $img_size );
		$img_html .= '</figure>';

		$img_html =  apply_filters( 'ocean_single_post_thumbnail_img_html', $img_html );

		// Paint the picture.
		if ( $echo ) {
			echo $img_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $img_html;
		}

	}
}

/**
 * Display post featured image as background image
 * 
 * @param string|int
 * @return string
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_paint_post_background' ) ) {

	function ocean_paint_post_background( $img_size = 'full', $postID = null ) {

		// Don't execute if the post has no featured image, is attachment or password protected.
		if ( ! has_post_thumbnail() || is_attachment() || post_password_required() ) {
			return;
		}

		// Get single post featured image URL.
		$img_thumb_url = apply_filters( 'ocean_single_header_background_img', get_the_post_thumbnail_url( $postID, $img_size ) );
	
		if ( $img_thumb_url ) {
			$img_thumb_url_output = 'style="background-image: url(' . $img_thumb_url . ')"';
			$img_thumb_url_output = apply_filters( 'ocean_single_header_background_img_output', $img_thumb_url_output );
			echo $img_thumb_url_output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}
}

/**
 * Display post excerpt
 * 
 * @param array|bool
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_get_post_excerpt' ) ) {

	function ocean_get_post_excerpt( $args = array(), $echo = true ) {

		$default_args = array(
			'before' => '<div class="post-entry-content">',
			'after'  => '</div><!-- .post-entry-content -->',
			'text_before' => '<p>',
			'text_after'  => '</p>',
			'count'       => '50'
		);

		$args = wp_parse_args( $args, $default_args );

		$excerpt_count = $args['count'];

		if ( has_excerpt() ) {
			$excerpt = wp_trim_words( get_the_excerpt(), $excerpt_count, '...' );
		} else {
			$excerpt = get_the_content();
			$excerpt = strip_shortcodes( $excerpt );
			$excerpt = str_replace( ']]>', ']]&gt;', $excerpt );
			$excerpt = wp_trim_words( $excerpt, $excerpt_count, '...' );

			if ( ! $excerpt ) {
				return;
			}
		}

		$post_excerpt = $args['before'] . $args['text_before'] . $excerpt . $args['text_after'] . $args['after'];
		$post_excerpt = apply_filters( 'oceanwp_post_excerpt', $post_excerpt );

		if ( $echo ) {
			echo $post_excerpt; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $post_excerpt;
		}
	}
}

/**
 * Register new theme image sizes
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_register_image_size' ) ) {

	function ocean_register_image_size() {

		// Registers a new image sizes.
		add_image_size( 'ocean-thumb-m', 600, 600, true );
		add_image_size( 'ocean-thumb-ml', 800, 450, true );
		add_image_size( 'ocean-thumb-l', 1200, 700, true );
	}
}
add_action( 'after_setup_theme', 'ocean_register_image_size', 5 );

/*-------------------------------------------------------------------------------*/
/* [ Single Blog Post ]
/*-------------------------------------------------------------------------------*/

/**
 * Return single post header style from theme Customizer settings
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_single_post_header_style' ) ) {

	function ocean_single_post_header_style() {

		$style = get_theme_mod( 'oceanwp_single_post_header_style' );

		$style = $style ? $style : 'default';

		return apply_filters( 'oceanwp_single_post_header_style', $style );
	}
}

/**
 * Return single post header style template
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_single_post_header_template' ) ) {

	function ocean_single_post_header_template() {

		$template_style = ocean_single_post_header_style();
		$template_path = '';

		if ( 'default' === $template_style ) {
			$template_path = 'partials/page-header';
		} elseif ( 'sph_style_2' === $template_style ) {
			$template_path = 'partials/single/headers/header-2';
		} elseif ( 'sph_style_3' === $template_style ) {
			$template_path = 'partials/single/headers/header-3';
		} elseif ( 'sph_style_4' === $template_style ) {
			$template_path = 'partials/single/headers/header-4';
		} elseif ( 'sph_style_5' === $template_style ) {
			$template_path = 'partials/single/headers/header-5';
		} elseif ( 'sph_style_6' === $template_style ) {
			$template_path = 'partials/single/headers/header-6';
		} elseif ( 'sph_style_7' === $template_style ) {
			$template_path = 'partials/single/headers/header-7';
		}

		return apply_filters( 'oceanwp_single_post_header_template', $template_path );
	}
}

/**
 * Return single post header meta style from theme Customizer settings
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_single_post_header_meta_style' ) ) {

	function ocean_single_post_header_meta_style() {

		$style = get_theme_mod( 'oceanwp_single_post_header_meta_style' );

		$style = $style ? $style : 'spm_style_2';

		return apply_filters( 'oceanwp_single_post_header_meta_style', $style );
	}
}

/**
 * Return single post header meta style template
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_single_post_header_meta_template' ) ) {

	function ocean_single_post_header_meta_template() {

		$template_style = ocean_single_post_header_meta_style();
		$template_path = '';

		if ( 'spm_style_2' === $template_style ) {
			$template_path = 'partials/single/metas/meta-2';
		} elseif ( 'spm_style_3' === $template_style ) {
			$template_path = 'partials/single/metas/meta-3';
		}

		return apply_filters( 'oceanwp_single_post_header_meta_template', $template_path );
	}
}

/**
 * Return single post header meta style template part
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_single_post_header_meta_template_part' ) ) {

	function ocean_single_post_header_meta_template_part() {

		$template_part = ocean_single_post_header_meta_template();

		get_template_part( $template_part );
	}

	add_action( 'ocean_single_post_header_meta', 'ocean_single_post_header_meta_template_part' );
}

/**
 * Returns single post header meta
 *
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_blog_single_header_meta' ) ) {

	function ocean_blog_single_header_meta() {

		// Default sections.
		$sections = array( 'author', 'date', 'categories', 'comments', 'mod-date', 'reading-time', 'tags' );

		// Get sections from Customizer.
		$sections = get_theme_mod( 'oceanwp_blog_single_header_meta', $sections );

		// Turn into array if string.
		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		// Apply filters for easy modification.
		$sections = apply_filters( 'oceanwp_blog_single_header_meta', $sections );

		// Return sections.
		return $sections;
	}
}

/**
 * Return single post header meta separator
 * 
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_blog_single_header_meta_separator_style' ) ) {

	function ocean_blog_single_header_meta_separator_style() {

		$separator = get_theme_mod( 'oceanwp_single_post_header_meta_separator', 'stylish' );

		$separator = $separator ? $separator : 'stylish';

		return apply_filters( 'oceanwp_blog_single_header_meta_separator_style', $separator );

	}
}

/**
 * Return single post header meta separator class
 * 
 * @return string
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_blog_single_header_meta_separator_class' ) ) {

	function ocean_blog_single_header_meta_separator_class() {

		$separator = ocean_blog_single_header_meta_separator_style();

		if ( 'none' === $separator ) {
			return;
		}

		$class = 'hms-style-';

		if ( 'classic' === $separator ) {
			$class_style = $class . 'classic';
		} elseif ( 'modern' === $separator ) {
			$class_style = $class . 'modern';
		} elseif ( 'stylish' === $separator ) {
			$class_style = $class . 'stylish';
		}

		return apply_filters( 'oceanwp_blog_single_header_meta_separator_class', $class_style );
	}
}

/**
 * Display option to delete post comment on front-end.
 * 
 * Available to users with permission to moderate comments
 * 
 * @param array|bool
 * @since 3.1.0
 */
if ( ! function_exists( 'ocean_delete_comment_link' ) ) {

	function ocean_delete_comment_link( $args = array(), $echo = true ) {

		$comment = get_comment();
		$comment_ID = $comment->comment_ID;

		if ( ! current_user_can( 'moderate_comments', $comment_ID ) ) {
			return;
		}

		$comment_postID = $comment->comment_post_ID;

		$default_args = array(
			'text'   => __( 'Delete', 'oceanwp' ),
			'before' => '<span class="edit-link delete-link">',
			'after'  => '</span>',
			'aria'   => __( 'Delete this comment', 'oceanwp' )
		);
		
		$args = wp_parse_args( $args, $default_args );

		$aria_label = esc_attr( $args['aria'] );
		$text = esc_html( $args['text'] );

		$del_nonce = '_wpnonce=' . wp_create_nonce( 'delete-comment_' . $comment_ID );
		$del_nonce = esc_html( $del_nonce );
		$trash_url = 'comment.php?action=trashcomment&p=' . $comment_postID . '&c=' . $comment_ID . '&' . $del_nonce;
		$trash_url = esc_url( $trash_url );
		$trash_url = admin_url( $trash_url );

		$delete_link = sprintf(
			'<a class="comment-edit-link comment-delete-link" href="%s" aria-label="%s">%s</a>',
			$trash_url,
			$aria_label,
			$text
		);

		$delete_link = $args['before'] . $delete_link . $args['after'];
		$delete_link = apply_filters( 'oceanwp_delete_comment_link', $delete_link );

		if ( $echo ) {
			echo $delete_link; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $delete_link;
		}
	}
}

/**
 * Single Blog Post Meta Separator
 *
 * @since 2.0
 */
if ( ! function_exists( 'oceanwp_theme_single_post_separator' ) ) {

	function oceanwp_theme_single_post_separator() {

		$sep_style = get_theme_mod( 'ocean_blog_single_meta_separator', 'default' );

		$sep_style = $sep_style ? $sep_style : 'default';

		if ( 'none' === $sep_style ) {
			return;
		}

		$class = '';

		if ( 'default' === $sep_style ) {
			$class = 'ospm-default';
		} elseif ( 'modern' === $sep_style ) {
			$class = 'ospm-modern';
		} elseif ( 'stylish' === $sep_style ) {
			$class = 'ospm-stylish';
		}

		return apply_filters( 'oceanwp_single_post_separator', $class );
	}
}
