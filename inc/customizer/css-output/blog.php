<?php
/**
 * OceanWP Customizer CSS Output
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The OceanWP Customizer class
 */
class OceanWP_Customize_Blog_CSS {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter('ocean_head_css', array($this, 'generate_css'));
	}

	public function generate_Css($output) {

		// Layout.
		$entries_layout = get_theme_mod( 'ocean_blog_archives_layout', 'right-sidebar' );
		$single_layout  = get_theme_mod( 'ocean_blog_single_layout', 'right-sidebar' );

		// Global vars.
		$bs_archives_content_width      = get_theme_mod( 'ocean_blog_archives_both_sidebars_content_width' );
		$bs_archives_content_width_unit = get_theme_mod( 'ocean_blog_archives_both_sidebars_content_width_unit', '%' );
		$bs_archives_sidebars_width     = get_theme_mod( 'ocean_blog_archives_both_sidebars_sidebars_width' );
		$bs_archives_sidebars_width_unit = get_theme_mod( 'ocean_blog_archives_both_sidebars_sidebars_width_unit', '%'  );
		$bs_single_content_width         = get_theme_mod( 'ocean_blog_single_both_sidebars_content_width' );
		$bs_single_content_width_unit   = get_theme_mod( 'ocean_blog_single_both_sidebars_content_width_unit', '%'  );
		$bs_single_sidebars_width       = get_theme_mod( 'ocean_blog_single_both_sidebars_sidebars_width' );
		$bs_single_sidebars_width_unit  = get_theme_mod( 'ocean_blog_single_both_sidebars_sidebars_width_unit', '%'  );
		$thumbnail_category_color       = get_theme_mod( 'ocean_blog_thumbnail_category_color', '#13aff0' );
		$thumbnail_category_hover_color = get_theme_mod( 'ocean_blog_thumbnail_category_hover_color', '#333333' );
		$thumbnail_comments_color       = get_theme_mod( 'ocean_blog_thumbnail_comments_color', '#ababab' );
		$thumbnail_comments_hover_color = get_theme_mod( 'ocean_blog_thumbnail_comments_hover_color', '#13aff0' );
		$thumbnail_date_color           = get_theme_mod( 'ocean_blog_thumbnail_date_color', '#ababab' );
		$infinite_scroll_spinners_color = get_theme_mod( 'ocean_blog_infinite_scroll_spinners_color', '#333333' );
		$title_breadcrumb_position      = get_theme_mod( 'ocean_blog_single_title_breadcrumb_position', 'center' );
		$single_content_width           = get_theme_mod( 'ocean_blog_single_content_width', 700 );
		$single_post_header_bg_color    = get_theme_mod( 'oceanwp_single_post_header_background', '#e5e5e5' );
		$single_post_cover_overlay_clr  = get_theme_mod( 'oceanwp_single_post_header_background_cover', '#000000b3' );
		$single_post_meta_icon_color    = get_theme_mod( 'oceanwp_single_post_meta_icon_clr', '#000' );
		$blog_image_overlay_clr         = get_theme_mod( 'ocean_blog_image_overlay_color', 'rgba(0,0,0,.2)' );
		$blog_archive_meta_color        = get_theme_mod( 'ocean_blog_archive_meta_color' );
		$blog_archive_meta_hover_color  = get_theme_mod( 'ocean_blog_archive_meta_hover_color' );
		$blog_archive_meta_icon_color   = get_theme_mod( 'ocean_theme_blog_posts_icons_color' );
		$theme_post_icons_color        = get_theme_mod( 'ocean_theme_single_post_icons_color', '#333333' );
		$blog_archive_content_color     = get_theme_mod( 'ocean_blog_archive_content_color' );

		$blog_archive_readmore_color         = get_theme_mod( 'ocean_blog_archive_readmore_color' );
		$blog_archive_readmore_hover_color   = get_theme_mod( 'ocean_blog_archive_readmore_hover_color' );

		$blog_title_color_setting        = get_theme_mod('blog_entry_title_typography');
		$blog_title_color                = isset($blog_title_color_setting['color']) ? $blog_title_color_setting['color'] : '#333333';
		$blog_title_color_hover         = get_theme_mod( 'ocean_blog_archive_title_color_hover', '' );

		$single_title_bg_image_title      = get_theme_mod( 'ocean_blog_single_title_bg_image_title_color' );
		$single_title_bg_image_breadcrumb = get_theme_mod( 'ocean_blog_single_title_bg_image_breadcrumb_color' );
		$single_title_bg_image_sep        = get_theme_mod( 'ocean_blog_single_title_bg_image_separator_color' );

		$blog_post_title_color_setting              = get_theme_mod('blog_post_title_typography');
		$blog_post_title_color                      = isset($blog_post_title_color_setting['color']) ? $blog_post_title_color_setting['color'] : '#333333';
		$blog_post_meta_color                       = get_theme_mod( 'blog_post_meta_color', '#333333' );
		$blog_post_meta_color_hover                 = get_theme_mod( 'blog_post_meta_color_hover', '' );
		$blog_single_content_link_color             = get_theme_mod( 'ocean_blog_single_content_link_color', '' );
		$blog_single_content_link_color_hover       = get_theme_mod( 'ocean_blog_single_content_link_color_hover', '' );
		$blog_single_related_post_title_color       = get_theme_mod( 'ocean_blog_single_related_post_title_color', '' );
		$blog_single_related_post_title_color_hover = get_theme_mod( 'ocean_blog_single_related_post_title_color_hover', '' );
		$blog_single_related_post_date_color        = get_theme_mod( 'ocean_blog_single_related_post_date_color', '' );

		$blog_single_post_title_color_setting        = get_theme_mod('single_post_title_typography');
		$blog_single_post_title_color                = isset($blog_single_post_title_color_setting['color']) ? $blog_single_post_title_color_setting['color'] : '#333333';
		$blog_single_post_title_meta_color_setting   = get_theme_mod('single_post_meta_typography');
		$blog_single_post_title_meta_color           = isset($blog_single_post_title_meta_color_setting['color']) ? $blog_single_post_title_meta_color_setting['color'] : '#333333';
		$blog_single_post_title_meta_color_hvr       = get_theme_mod( 'single_post_meta_typography_color_hover', '#333333' );
		$blog_single_post_title_author_color_setting = get_theme_mod('single_post_title_author_typography');
		$blog_single_post_title_author_color         = isset($blog_single_post_title_author_color_setting['color']) ? $blog_single_post_title_author_color_setting['color'] : '#333333';
		$blog_single_post_title_bio_color_setting    = get_theme_mod('single_post_title_author_bio_typography');
		$blog_single_post_title_bio_color            = isset($blog_single_post_title_bio_color_setting['color']) ? $blog_single_post_title_bio_color_setting['color'] : '#333333';

		// Define css var.
		$css = '';

		// If blog archives Both Sidebars layout.
		if ( 'both-sidebars' === $entries_layout ) {

			// Both Sidebars layout blog archives content width.
			if ( ! empty( $bs_archives_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.blog.content-both-sidebars .content-area,
						body.archive.content-both-sidebars .content-area {width: ' . $bs_archives_content_width . $bs_archives_content_width_unit . ';}
						body.blog.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.blog.content-both-sidebars.ssc-style .widget-area,
						body.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.archive.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_archives_content_width . $bs_archives_content_width_unit .';}
					}';
			}

			// Both Sidebars layout blog archives sidebars width.
			if ( ! empty( $bs_archives_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.blog.content-both-sidebars .widget-area,
						body.archive.content-both-sidebars .widget-area{width:' . $bs_archives_sidebars_width . $bs_archives_sidebars_width_unit . ';}
						body.blog.content-both-sidebars.scs-style .content-area,
						body.archive.content-both-sidebars.scs-style .content-area{left:' . $bs_archives_sidebars_width . $bs_archives_sidebars_width_unit . ';}
						body.blog.content-both-sidebars.ssc-style .content-area,
						body.archive.content-both-sidebars.ssc-style .content-area{left:' . $bs_archives_sidebars_width * 2 . $bs_archives_sidebars_width_unit .';}
					}';
			}
		}

		// If single post Both Sidebars layout.
		if ( 'both-sidebars' === $single_layout ) {

			// Both Sidebars layout single post content width.
			if ( ! empty( $bs_single_content_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-post.content-both-sidebars .content-area {width: ' . $bs_single_content_width . $bs_single_content_width_unit . ';}
						body.single-post.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
						body.single-post.content-both-sidebars.ssc-style .widget-area {left: -' . $bs_single_content_width . $bs_single_content_width_unit .';}
					}';
			}

			// Both Sidebars layout blog archives sidebars width.
			if ( ! empty( $bs_single_sidebars_width ) ) {
				$css .=
					'@media only screen and (min-width: 960px){
						body.single-post.content-both-sidebars .widget-area{width:' . $bs_single_sidebars_width . $bs_single_sidebars_width_unit . ';}
						body.single-post.content-both-sidebars.scs-style .content-area{left:' . $bs_single_sidebars_width . $bs_single_sidebars_width_unit . ';}
						body.single-post.content-both-sidebars.ssc-style .content-area{left:' . $bs_single_sidebars_width * 2 . $bs_single_sidebars_width_unit . ';}
					}';
			}
		}

		// Single post header background color.
		if ( ! empty( $single_post_header_bg_color ) && '#e5e5e5' != $single_post_header_bg_color ) {
			$css .= '.single-post-header-wrap, .single-header-ocean-6 .blog-post-title, .single-header-ocean-7 .blog-post-title {background-color:' . $single_post_header_bg_color . ';}';
		}

		// Single post header cover style overlay color.
		if ( ! empty( $single_post_cover_overlay_clr ) && '#000000b3' != $single_post_cover_overlay_clr ) {
			$css .= '.single-post-header-wrap .header-color-overlay {background-color:' . $single_post_cover_overlay_clr . ';}';
		}

		// Single post header meta icon color.
		if ( ! empty( $single_post_meta_icon_color ) && '#000' != $single_post_meta_icon_color ) {
			$css .= '.ocean-single-post-header ul.meta-item li i  {color:' . $single_post_meta_icon_color . ';}';
			$css .= '.ocean-single-post-header ul.meta-item li .owp-icon use  {stroke:' . $single_post_meta_icon_color . ';}';
		}

		// Blog thumbnail category color.
		if ( ! empty( $thumbnail_category_color ) && '#13aff0' != $thumbnail_category_color ) {
			$css .= '.blog-entry.thumbnail-entry .blog-entry-category a{color:' . $thumbnail_category_color . ';}';
		}

		// Blog thumbnail category hover color.
		if ( ! empty( $thumbnail_category_hover_color ) && '#333333' != $thumbnail_category_hover_color ) {
			$css .= '.blog-entry.thumbnail-entry .blog-entry-category a:hover{color:' . $thumbnail_category_hover_color . ';}';
		}

		// Blog thumbnail comments color.
		if ( ! empty( $thumbnail_comments_color ) && '#ababab' != $thumbnail_comments_color ) {
			$css .= '.blog-entry.thumbnail-entry .blog-entry-comments, .blog-entry.thumbnail-entry .blog-entry-comments a{color:' . $thumbnail_comments_color . ';}';
		}

		// Blog thumbnail comments hover color.
		if ( ! empty( $thumbnail_comments_hover_color ) && '#13aff0' != $thumbnail_comments_hover_color ) {
			$css .= '.blog-entry.thumbnail-entry .blog-entry-comments a:hover{color:' . $thumbnail_comments_hover_color . ';}';
		}

		// Blog thumbnail date color.
		if ( ! empty( $thumbnail_date_color ) && '#ababab' != $thumbnail_date_color ) {
			$css .= '.blog-entry.thumbnail-entry .blog-entry-date{color:' . $thumbnail_date_color . ';}';
		}

		// Blog infinite scroll spinners color.
		if ( ! empty( $infinite_scroll_spinners_color ) && '#333333' != $infinite_scroll_spinners_color ) {
			$css .= '.loader-ellips__dot{background-color:' . $infinite_scroll_spinners_color . ';}';
		}

		// Title/breadcrumb position.
		if ( ! empty( $title_breadcrumb_position ) && 'center' != $title_breadcrumb_position ) {
			$css .= '.single-post .background-image-page-header .page-header-inner, .single-post .background-image-page-header .site-breadcrumbs{text-align:' . $title_breadcrumb_position . ';}';
		}

		if ( ! empty( $blog_image_overlay_clr ) && 'rgba(0,0,0,.2)' != $blog_image_overlay_clr ) {
			$css .= '.blog-entry.post .thumbnail .overlay{background-color:' . $blog_image_overlay_clr . ';}';
		}

		if ( ! empty( $blog_title_color ) && '#333333' != $blog_title_color ) {
			$css .= '.blog-entry.post .blog-entry-header .entry-title a{color:' . $blog_title_color . ';}';
		}

		if ( ! empty( $blog_title_color_hover ) && '' != $blog_title_color_hover ) {
			$css .= '.blog-entry.post .blog-entry-header .entry-title a:hover{color:' . $blog_title_color_hover . ';}';
		}

		if ( ! empty( $blog_archive_meta_color ) && '' != $blog_archive_meta_color ) {
			$css .= '.blog-entry ul.meta li, .blog-entry ul.meta li a{color:' . $blog_archive_meta_color . ';}';
		}
		if ( ! empty( $blog_archive_meta_hover_color ) && '' != $blog_archive_meta_hover_color ) {
			$css .= '.blog-entry ul.meta li a:hover{color:' . $blog_archive_meta_hover_color . ';}';
		}

		if ( ! empty( $blog_archive_meta_icon_color ) && '' != $blog_archive_meta_icon_color ) {
			$css .= '.blog-entry ul.meta li i{color:' . $blog_archive_meta_icon_color . ';}';
			$css .= '.blog-entry ul.meta li .owp-icon use{stroke:' . $blog_archive_meta_icon_color . ';}';
		}

		if ( ! empty( $blog_archive_content_color ) && '' != $blog_archive_content_color ) {
			$css .= '.blog-entry.post .blog-entry-summary{color:' . $blog_archive_content_color . ';}';
		}

		if ( ! empty( $blog_archive_readmore_color ) && '' != $blog_archive_readmore_color ) {
			$css .= '.blog-entry.post .blog-entry-readmore a{color:' . $blog_archive_readmore_color . ';}';
		}
		if ( ! empty( $blog_archive_readmore_hover_color ) && '' != $blog_archive_readmore_hover_color ) {
			$css .= '.blog-entry.post .blog-entry-readmore a:hover{color:' . $blog_archive_readmore_hover_color . ';}';
		}

		// Single post meta icons color.
		if ( ! empty( $theme_post_icons_color ) && '#333333' != $theme_post_icons_color ) {
			$css .= '.single-post ul.meta li i{color:' . $theme_post_icons_color . ';}';
			$css .= '.single-post ul.meta li .owp-icon use{stroke:' . $theme_post_icons_color . ';}';
		}

		if ( ! empty( $blog_post_title_color ) && '#333333' != $blog_post_title_color ) {
			$css .= '.single-post .entry-title{color:' . $blog_post_title_color . ';}';
		}

		if ( ! empty( $blog_post_meta_color ) && '#333333' != $blog_post_meta_color ) {
			$css .= '.single-post ul.meta li, .single-post ul.meta li a{color:' . $blog_post_meta_color . ';}';
		}

		if ( ! empty( $blog_post_meta_color_hover ) && '' != $blog_post_meta_color_hover ) {
			$css .= '.single-post ul.meta li a:hover{color:' . $blog_post_meta_color_hover . ';}';
		}

		if ( ! empty( $blog_single_content_link_color ) && '' != $blog_single_content_link_color ) {
			$css .= '.single-post .entry-content a{color:' . $blog_single_content_link_color . ';}';
		}

		if ( ! empty( $blog_single_content_link_color_hover ) && '' != $blog_single_content_link_color_hover ) {
			$css .= '.single-post .entry-content a:hover{color:' . $blog_single_content_link_color_hover . ';}';
		}

		if ( ! empty( $blog_single_related_post_title_color ) && '' != $blog_single_related_post_title_color ) {
			$css .= '.single-post .related-post-title a{color:' . $blog_single_related_post_title_color . ';}';
		}

		if ( ! empty( $blog_single_related_post_title_color_hover ) && '' != $blog_single_related_post_title_color_hover ) {
			$css .= '.single-post .related-post-title a:hover{color:' . $blog_single_related_post_title_color_hover . ';}';
		}

		if ( ! empty( $blog_single_related_post_date_color ) && '' != $blog_single_related_post_date_color ) {
			$css .= '.single-post #related-posts time.published{color:' . $blog_single_related_post_date_color . ';}';
			$css .= '.single-post #related-posts time.published .owp-icon use{stroke:' . $blog_single_related_post_date_color . ';}';
		}

		// Single content width.
		if ( ! empty( $single_content_width ) && '700' != $single_content_width ) {
			$css .= '
				.single-post.content-max-width #wrap .thumbnail,
				.single-post.content-max-width #wrap .wp-block-buttons,
				.single-post.content-max-width #wrap .wp-block-verse,
				.single-post.content-max-width #wrap .entry-header,
				.single-post.content-max-width #wrap ul.meta,
				.single-post.content-max-width #wrap .entry-content p,
				.single-post.content-max-width #wrap .entry-content h1,
				.single-post.content-max-width #wrap .entry-content h2,
				.single-post.content-max-width #wrap .entry-content h3,
				.single-post.content-max-width #wrap .entry-content h4,
				.single-post.content-max-width #wrap .entry-content h5,
				.single-post.content-max-width #wrap .entry-content h6,
				.single-post.content-max-width #wrap .wp-block-image,
				.single-post.content-max-width #wrap .wp-block-gallery,
				.single-post.content-max-width #wrap .wp-block-video,
				.single-post.content-max-width #wrap .wp-block-quote,
				.single-post.content-max-width #wrap .wp-block-text-columns,
				.single-post.content-max-width #wrap .wp-block-code,
				.single-post.content-max-width #wrap .entry-content ul,
				.single-post.content-max-width #wrap .entry-content ol,
				.single-post.content-max-width #wrap .wp-block-cover-text,
				.single-post.content-max-width #wrap .wp-block-cover,
				.single-post.content-max-width #wrap .wp-block-columns,
				.single-post.content-max-width #wrap .post-tags,
				.single-post.content-max-width #wrap .comments-area,
				.single-post.content-max-width #wrap .wp-block-embed,
				#wrap .wp-block-separator.is-style-wide:not(.size-full){max-width:' . $single_content_width . 'px;}
				.single-post.content-max-width #wrap .wp-block-image.alignleft,
				.single-post.content-max-width #wrap .wp-block-image.alignright{max-width:' . $single_content_width / 2 . 'px;}
				.single-post.content-max-width #wrap .wp-block-image.alignleft{margin-left: calc( 50% - ' . $single_content_width / 2 . 'px);}
				.single-post.content-max-width #wrap .wp-block-image.alignright{margin-right: calc( 50% - ' . $single_content_width / 2 . 'px);}
				.single-post.content-max-width #wrap .wp-block-embed,
				.single-post.content-max-width #wrap .wp-block-verse {margin-left: auto; margin-right: auto;}
			';
		}

		if ( ! empty( $single_title_bg_image_title ) && '' != $single_title_bg_image_title ) {
			$css .= '.single .page-header.background-image-page-header .page-header-title{color:' . $single_title_bg_image_title . ';}';
		}
		if ( ! empty( $single_title_bg_image_breadcrumb ) && '' != $single_title_bg_image_breadcrumb ) {
			$css .= '.single .background-image-page-header .site-breadcrumbs, .single .background-image-page-header .site-breadcrumbs a{color:' . $single_title_bg_image_breadcrumb . ';}';
		}
		if ( ! empty( $single_title_bg_image_sep ) && '' != $single_title_bg_image_sep ) {
			$css .= '.single .site-breadcrumbs ul li .breadcrumb-sep, .single .site-breadcrumbs ol li .breadcrumb-sep{color:' . $single_title_bg_image_sep . ';}';
		}

		if ( ! empty( $blog_single_post_title_color ) && '#333333' != $blog_single_post_title_color ) {
			$css .= '.ocean-single-post-header .single-post-title{color:' . $blog_single_post_title_color . ';}';
		}

		if ( ! empty( $blog_single_post_title_meta_color ) && '#333333' != $blog_single_post_title_meta_color ) {
			$css .= '.ocean-single-post-header ul.meta-item li, .ocean-single-post-header ul.meta-item li a{color:' . $blog_single_post_title_meta_color . ';}';
		}

		if ( ! empty( $blog_single_post_title_meta_color_hvr ) && '' != $blog_single_post_title_meta_color_hvr ) {
			$css .= '.ocean-single-post-header ul.meta-item li a:hover{color:' . $blog_single_post_title_meta_color_hvr . ';}';
		}

		if ( ! empty( $blog_single_post_title_author_color ) && '#333333' != $blog_single_post_title_author_color ) {
			$css .= '.ocean-single-post-header .post-author-name, .ocean-single-post-header .post-author-name a{color:' . $blog_single_post_title_author_color . ';}';
		}

		if ( ! empty( $blog_single_post_title_bio_color ) && '#333333' != $blog_single_post_title_bio_color ) {
			$css .= '.ocean-single-post-header .post-author-description{color:' . $blog_single_post_title_bio_color . ';}';
		}




		// Return CSS.
		if ( ! empty( $css ) ) {
			$output .= '/* Blog CSS */' . $css;
		}

		// Return output css.
		return $output;

	}
}

return new OceanWP_Customize_Blog_CSS();
