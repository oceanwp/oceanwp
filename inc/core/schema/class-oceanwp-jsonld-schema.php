<?php
/**
 * JSON-LD Schema Class
 * 
 * @package OceanWP WordPress Theme
 * @link https://oceanwp.org/
 * @author OceanWP
 * @since 4.2.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_JsonLD_Schema' ) ) {

	/**
	 * JSON-LD Schema handler class.
	 */
	class OceanWP_JsonLD_Schema {

		protected static $instance = null;

		protected $settings;
		protected $schema_enabled;
		protected $schema_output_location;
		protected $use_schema_manager;
		protected $schema_type;
		protected $data = [];

		/**
		 * Constructor.
		 */
		private function __construct() {
			$this->schema_enabled      = get_theme_mod( 'ocean_schema_markup', true );
			$this->use_schema_manager  = get_theme_mod( 'ocean_schema_manager', false );

			// Stop executing if schema or schema manager disabled.
			if ( ! $this->schema_enabled || ! $this->use_schema_manager ) {
				return;
			}

			$this->settings               = $this->get_schema_info();
			$this->schema_type            = get_theme_mod( 'ocean_schema_type', 'jsonld' );
			$this->schema_breadcrumbs     = get_theme_mod( 'ocean_schema_breadcrumbs', false );
			$this->schema_output_location = get_theme_mod( 'ocean_schema_output_location', 'wp_head' );

			$this->init_output_hook();
		}

		/**
		 * Returns the singleton instance of the class.
		 *
		 * @return OceanWP_JsonLD_Schema
		 */
		public static function instance() {
			if ( null === self::$instance ) {
				$temp = new self();
				// If schema system is disabled, do NOT store a broken instance.
				if ( ! $temp->schema_enabled || ! $temp->use_schema_manager ) {
					return null;
				}
				self::$instance = $temp;
			}
			return self::$instance;
		}

		/**
		 * Hook output to the desired location.
		 *
		 * @return void
		 */
		protected function init_output_hook() {
			if ( 'wp_footer' === $this->schema_output_location ) {
				add_action( 'wp_footer', [ $this, 'output_json_schema' ] );
			} else {
				add_action( 'wp_head', [ $this, 'output_json_schema' ] );
			}
		}

		/**
		 * Get basic site schema info.
		 *
		 * @return array
		 */
		protected function get_schema_info() {
			return [
				'site_name'        => esc_html( get_bloginfo( 'name' ) ),
				'site_url'         => esc_url( home_url() ),
				'organization'     => esc_html( get_bloginfo( 'name' ) ), // Left to extend in the future with user input.
				'organization_url' => esc_url( home_url() ), // Left to extend in the future with user input.
				'description'      => esc_html( wp_strip_all_tags( get_bloginfo( 'description' ) ) ),
				'language'         => get_bloginfo( 'language' ),
            ];
		}

		/**
		 * Get the logo schema markup, falling back to site icon if needed.
		 *
		 * @return array|null
		 */
		protected function get_logo_schema() {
			$logo_id = get_theme_mod( 'custom_logo' );

			if ( $logo_id ) {
				$logo_url  = wp_get_attachment_url( $logo_id );
				$logo_meta = wp_get_attachment_metadata( $logo_id );

				$logo_width  = isset( $logo_meta['width'] ) ? (int) $logo_meta['width'] : 164;
				$logo_height = isset( $logo_meta['height'] ) ? (int) $logo_meta['height'] : 45;

				if ( $logo_url ) {
					return [
						'@type'  => 'ImageObject',
						'url'    => esc_url( $logo_url ),
						'width'  => $logo_width,
						'height' => $logo_height,
					];
				}
			}

			// Fallback: Use site icon if available
			if ( has_site_icon() ) {
				$site_icon_url = get_site_icon_url();
				if ( $site_icon_url ) {
					return [
						'@type'  => 'ImageObject',
						'url'    => esc_url( $site_icon_url ),
						'width'  => 512,
						'height' => 512,
					];
				}
			}

			return null;
		}

		/**
		 * Get the featured image schema with fallback to logo or site icon.
		 *
		 * @param int|null $post_id Optional. Post ID.
		 * @return array|null ImageObject schema or null.
		 */
		protected function get_the_featured_image_schema( $post_id = null ) {
			$post_id = $post_id ?: get_the_ID();

			// Try featured image.
			$image_id = get_post_thumbnail_id( $post_id );

			if ( $image_id ) {
				$image_url  = wp_get_attachment_url( $image_id );
				$image_meta = wp_get_attachment_metadata( $image_id );

				$image_width  = isset( $image_meta['width'] ) ? (int) $image_meta['width'] : 1200;
				$image_height = isset( $image_meta['height'] ) ? (int) $image_meta['height'] : 630;

				if ( $image_url ) {
					return [
						'@type'  => 'ImageObject',
						'url'    => esc_url( $image_url ),
						'width'  => $image_width,
						'height' => $image_height,
					];
				}
			}

			// Fallback: Use logo schema if available.
			$logo_schema = $this->get_logo_schema();
			if ( $logo_schema ) {
				return $logo_schema;
			}

			// Final fallback: null.
			return null;
		}

		/**
		 * Get a sanitized schema-ready description (excerpt or trimmed content).
		 *
		 * @param int|null $post_id Optional. Post ID. Defaults to current post.
		 * @param int      $char_limit Optional. Character limit for fallback content.
		 * @return string
		 */
		protected function get_schema_description( $post_id = null, $char_limit = 160 ) {
			$post_id = $post_id ?: get_the_ID();

			// Try to use the post excerpt
			$excerpt = get_the_excerpt( $post_id );
			if ( ! empty( $excerpt ) ) {
				return wp_strip_all_tags( $excerpt );
			}

			// Fallback to content, stripped of tags and shortcodes.
			$content = get_post_field( 'post_content', $post_id );
			$content = wp_strip_all_tags( strip_shortcodes( $content ) );
			$content = trim( preg_replace( '/\s+/', ' ', $content ) );

			if ( mb_strlen( $content ) > $char_limit ) {
				$content = mb_substr( $content, 0, $char_limit );
				// Ensure it ends cleanly at a word boundary:
				$content = preg_replace( '/\s+\S*$/u', '', $content );
			}

			return $content;
		}

		/**
		 * Output the JSON-LD schema.
		 *
		 * @return void
		 */
		public function output_json_schema() {

			if ( ! oceanwp_should_output_jsonld() ) {
				return;
			}

			if ( is_preview() || is_customize_preview() || is_admin() || wp_doing_ajax() ) {
				return;
			}

			if ( oceanwp_should_use_schema_cache() ) {
				do_action( 'oceanwp_schema_output_json_cached' );
				return;
			}

			$schema_markup = $this->generate_schema();

			if ( is_array( $schema_markup ) && ! empty( $schema_markup ) ) {
				$json = wp_json_encode( $schema_markup, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
				if ( $json ) {
					echo "\n<script type=\"application/ld+json\">\n$json\n</script>\n";
					do_action( 'oceanwp_json_schema_output_complete', $schema_markup );
				}
			}
		}

		/**
		 * Generate schema markup for the current page.
		 *
		 * @return array
		 */
		public function generate_schema() {
			$schema = [];

			// WooCommerce Schema integration.
			if ( OCEANWP_WOOCOMMERCE_ACTIVE && class_exists( 'OceanWP_WooCommerce_Schema' ) ) {
				if ( get_theme_mod( 'ocean_schema_woocommerce_enable', false ) ) {
					$woo_schema = null;

					if ( is_product() ) {
						$woo_schema = OceanWP_WooCommerce_Schema::get_single_product_schema();
					} elseif ( is_shop() ) {
						$woo_schema = OceanWP_WooCommerce_Schema::get_shop_page_schema();
					} elseif ( is_product_category() || is_product_tag() ) {
						$woo_schema = OceanWP_WooCommerce_Schema::get_product_taxonomy_schema();
					}

					if ( ! empty( $woo_schema ) ) {
						$schema[] = $woo_schema;
					}
				}
			}

			// Ocean Portfolio plugin Schema integration.
			if ( class_exists( 'Ocean_Portfolio_Schema_Helper' ) ) {
				if ( get_theme_mod( 'ocean_portfolio_schema_enable', false ) ) {
					$portfolio_schema = null;

					if ( is_singular( 'ocean_portfolio' ) ) {
						$portfolio_schema = Ocean_Portfolio_Schema_Helper::get_single_schema();
					} elseif ( is_tax( [ 'ocean_portfolio_category', 'ocean_portfolio_tag' ] ) || ( function_exists( 'op_portfolio_page_id' ) && is_page( op_portfolio_page_id() ) ) ) {
						$portfolio_schema = Ocean_Portfolio_Schema_Helper::get_archive_schema();
					} elseif ( function_exists( 'oceanwp_is_main_portfolio_page' ) && oceanwp_is_main_portfolio_page() ) {
						$portfolio_schema[] = Ocean_Portfolio_Schema_Helper::get_portfolio_collection_schema();
					}

					if ( ! empty( $portfolio_schema ) ) {
						$schema[] = $portfolio_schema;
					}
				}
			}

			// Theme-integrated schema filters.
			if ( apply_filters( 'oceanwp_enable_schema_home', true ) && is_front_page() ) {
				$schema[] = $this->get_homepage_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_blog_page', true ) && is_home() ) {
				$schema[] = $this->get_blog_archive_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_single_post', true ) && is_singular( 'post' ) ) {
				$schema[] = $this->get_blog_post_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_page', true ) && is_page() ) {
				$schema[] = $this->get_webpage_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_cpt', true ) && is_singular() && ! is_singular( 'post' ) && ! is_page() && ! is_singular( 'ocean_portfolio' ) && ! is_product() ) {
				$schema[] = $this->get_webpage_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_search', true ) && is_search() ) {
				$schema[] = $this->get_search_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_taxonomy', true ) && ( is_category() || is_tag() || is_tax() ) ) {
				$schema[] = $this->get_taxonomy_archive_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_archive', true ) && is_archive() ) {
				if ( $this->should_skip_general_schema() ) {
					$schema[] = [];
				} else {
					$schema[] = $this->get_generic_archive_schema();
				}

			} elseif ( apply_filters( 'oceanwp_enable_schema_404', true ) && is_404() ) {
				$schema[] = $this->get_404_schema();

			} elseif ( apply_filters( 'oceanwp_enable_schema_author', true ) && is_author() ) {
				$schema[] = $this->get_author_schema();
			}

			// Breadcrumb always has its own toggle.
			$breadcrumb = $this->get_breadcrumb_schema();
			if ( ! empty( $breadcrumb ) && ! is_front_page() ) {
				$schema[] = $breadcrumb;
			}

			/**
			 * Final filter to alter the schema array.
			 */
			return apply_filters( 'oceanwp_jsonld_schema_output', $schema );
		}

		/**
		 * Determine if general schema should be skipped due to specific schema.
		 *
		 * @return bool
		 */
		protected function should_skip_general_schema(): bool {
			if ( OCEANWP_WOOCOMMERCE_ACTIVE && get_theme_mod( 'ocean_schema_woocommerce_enable', false ) ) {
				if ( is_shop() || is_product() || is_product_category() || is_product_tag() ) {
					return true;
				}
			}
			return false;
		}

		/**
		 * Get schema for homepage.
		 *
		 * @return array
		 */
		protected function get_homepage_schema() {
			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'WebSite',
				'name'        => $this->settings['site_name'],
				'url'         => $this->settings['site_url'],
				'description' => $this->settings['description'],
				'inLanguage'  => $this->settings['language'],
				'publisher'   => [
					'@type' => 'Organization',
					'name'  => $this->settings['organization'],
					'url'   => $this->settings['organization_url'],
					'logo'  => $this->get_logo_schema(),
				],
			];
		}

		/**
		 * Get schema for the main blog page (posts index).
		 *
		 * @return array
		 */
		protected function get_blog_archive_schema() {
			$page_id = get_option( 'page_for_posts' );

			$name = $page_id ? get_the_title( $page_id ) : esc_html_x( 'Blog', 'JSON Schema: Fallback name for the main posts page', 'oceanwp' );
			$desc = $page_id ? get_the_excerpt( $page_id ) : $this->settings['description'];
			$url  = $page_id ? get_permalink( $page_id ) : get_home_url();

			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'CollectionPage',
				'name'        => esc_html( wp_strip_all_tags( $name ) ),
				'description' => esc_html( wp_strip_all_tags( $desc ) ),
				'url'         => esc_url( $url ),
			];
		}

		/**
		 * Get schema for blog posts.
		 *
		 * @return array
		 */
		protected function get_blog_post_schema() {
			$post_id   = get_the_ID();
			$title     = esc_html( get_the_title( $post_id ) );
			$author_id = get_post_field( 'post_author', $post_id );
			$url       = esc_url( get_permalink( $post_id ) );

			$author_name = esc_html( get_the_author_meta( 'display_name', $author_id ) );
			$author_url  = get_author_posts_url( $author_id );
			$author_url  = $author_url ? esc_url( $author_url ) : '';

			$categories = get_the_category( $post_id );
			$category   = ! empty( $categories ) ? esc_html( $categories[0]->name ) : '';

			$word_count = oceanwp_get_post_word_count( $post_id );

			$image_schema = $this->get_the_featured_image_schema( $post_id );
			$excerpt      = $this->get_schema_description( $post_id, 160 );
			$logo         = $this->get_logo_schema();
			$publisher    = $this->settings['organization'];
			$publish_url  = $this->settings['organization_url'];

			$schema = [
				'@context'         => 'https://schema.org',
				'@type'            => [ 'Article', 'BlogPosting' ],
				'mainEntityOfPage' => [
					'@type' => 'WebPage',
					'@id'   => $url,
				],
				'headline'        => $title,
				'description'     => $excerpt,
				'datePublished'   => get_the_date( DATE_W3C, $post_id ),
				'dateModified'    => get_the_modified_date( DATE_W3C, $post_id ),
				'url'             => $url,
				'wordCount'       => $word_count,
				'articleSection'  => $category,
				'author'          => [
					'@type' => 'Person',
					'name'  => $author_name,
					'url'   => $author_url,
				],
				'publisher'       => [
					'@type' => 'Organization',
					'name'  => $publisher,
					'url'   => $publish_url,
					'logo'  => $logo,
				],
			];

			if ( $image_schema ) {
				$schema['image'] = $image_schema;
			}

			return $schema;
		}

		/**
		 * Get schema for taxonomy archives.
		 *
		 * @return array
		 */
		protected function get_taxonomy_archive_schema() {
			$term     = get_queried_object();
			$name     = $term->name ?? single_term_title( '', false );
			$desc     = term_description( $term ) ?: $this->settings['description'];
			$term_url = get_term_link( $term );

			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'CollectionPage',
				'name'        => esc_html( wp_strip_all_tags( $name ) ),
				'description' => wp_strip_all_tags( $desc ),
				'url'         => esc_url( $term_url ),
			];
		}

		/**
		 * Get schema for generic archives.
		 *
		 * @return array
		 */
		protected function get_generic_archive_schema() {
			$name = get_the_archive_title();
			$desc = get_the_archive_description() ?: $this->settings['description'];
			$url  = get_permalink();

			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'CollectionPage',
				'name'        => esc_html( wp_strip_all_tags( $name ) ),
				'description' => wp_strip_all_tags( $desc ),
				'url'         => esc_url ( $url ),
			];
		}

		/**
		 * Get schema for pages.
		 *
		 * @return array
		 */
		protected function get_webpage_schema() {
			$name = get_the_title();
			$desc = get_the_excerpt() ?: $this->settings['description'];
			$url  = get_permalink();

			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'WebPage',
				'name'        => esc_html( wp_strip_all_tags( $name ) ),
				'url'         => esc_url ( $url ),
				'description' => wp_strip_all_tags( $desc ),
				'inLanguage'  => $this->settings['language'],
			];
		}

		/**
		 * Get schema for 404 pages.
		 *
		 * @return array
		 */
		protected function get_404_schema() {
			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'WebPage',
				'name'        => esc_html_x( '404 Not Found', 'JSON Schema: WebPage name for 404 error', 'oceanwp' ),
				'description' => esc_html_x( 'The requested page could not be found on this server.', 'JSON Schema: 404 error page description', 'oceanwp' ),
				'url'         => esc_url( home_url( wp_unslash( $_SERVER['REQUEST_URI'] ) ) ),
				'isPartOf'    => [
					'@type' => 'WebSite',
					'name'  => $this->settings['site_name'],
					'url'   => $this->settings['site_url'],
				],
			];
		}

		/**
		 * Get schema for author archives.
		 *
		 * @return array
		 */
		protected function get_author_schema() {
			$author_id = get_queried_object_id();

			$name = get_the_author_meta( 'display_name', $author_id );
			$desc = get_the_author_meta( 'description', $author_id ) ?: sprintf(
					/* translators: %s: Author display name */
					esc_html_x( 'Articles by %s', 'JSON Schema: fallback author description', 'oceanwp' ),
					get_the_author_meta( 'display_name', $author_id )
			);
			$url  = get_author_posts_url( $author_id );
			$img  = get_avatar_url( $author_id );

			return [
				'@context'   => 'https://schema.org',
				'@type'      => 'ProfilePage',
				'name'       => esc_html( $name ),
				'description'=> esc_html( wp_strip_all_tags( $desc ) ),
				'url'        => esc_url( $url ),
				'mainEntity' => [
					'@type' => 'Person',
					'name'  => esc_html( $name ),
					'url'   => esc_url( $url ),
					'image' => esc_url( $img ),
					'description' => esc_html( wp_strip_all_tags( $desc ) ),
					'sameAs' => '',
				],
			];
		}

		/**
		 * Get breadcrumb schema.
		 *
		 * @return array|null
		 */
		protected function get_breadcrumb_schema() {
			if ( ! get_theme_mod( 'ocean_schema_breadcrumbs', false ) ) {
				return null;
			}

			$items = [];
			$position = 1;

			$items[] = [
				'@type'    => 'ListItem',
				'position' => $position++,
				'name'     => esc_html__( 'Home', 'oceanwp' ),
				'item'     => home_url( '/' ),
			];

			if ( is_home() ) {
				$items[] = [
					'@type'    => 'ListItem',
					'position' => $position++,
					'name'     => get_the_title( get_option( 'page_for_posts' ) ),
					'item'     => get_permalink( get_option( 'page_for_posts' ) ),
				];
			}

			if ( is_singular( 'post' ) ) {
				$cats = get_the_category();
				if ( ! empty( $cats ) ) {
					$items[] = [
						'@type'    => 'ListItem',
						'position' => $position++,
						'name'     => $cats[0]->name,
						'item'     => get_category_link( $cats[0]->term_id ),
					];
				}
			}

			if ( is_singular() ) {
				$items[] = [
					'@type'    => 'ListItem',
					'position' => $position++,
					'name'     => get_the_title(),
					'item'     => get_permalink(),
				];
			}

			if ( count( $items ) < 2 ) {
				return null;
			}

			return apply_filters( 'oceanwp_jsonld_breadcrumb_schema', [
				'@context'        => 'https://schema.org',
				'@type'           => 'BreadcrumbList',
				'itemListElement' => $items,
			] );
		}

	}

}
