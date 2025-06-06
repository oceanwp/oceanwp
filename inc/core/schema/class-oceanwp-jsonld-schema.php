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
				self::$instance = new self();
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
				'site_name'        => get_bloginfo( 'name' ),
				'site_url'         => home_url(),
				'organization'     => get_bloginfo( 'name' ), // Left to extend in the future with user input.
				'organization_url' => home_url(), // Left to extend in the future with user input.
				'description'      => get_bloginfo( 'description' ),
				'language'         => get_bloginfo( 'language' ),
            ];
		}

		/**
		 * Get logo schema markup.
		 *
		 * @return array|null
		 */
		protected function get_logo_schema() {
			$logo_schema = null;
			$logo_id     = get_theme_mod( 'custom_logo' );

			if ( $logo_id ) {
				$logo_url  = wp_get_attachment_url( $logo_id );
				$logo_meta = wp_get_attachment_metadata( $logo_id );

				$logo_width  = isset( $logo_meta['width'] ) ? $logo_meta['width'] : 164;
				$logo_height = isset( $logo_meta['height'] ) ? $logo_meta['height'] : 45;

				if ( $logo_url ) {
					$logo_schema = [
						'@type'  => 'ImageObject',
						'url'    => $logo_url,
						'width'  => $logo_width,
						'height' => $logo_height,
					];
				}
			}

			return $logo_schema;
		}

		/**
		 * Output the JSON-LD schema.
		 *
		 * @return void
		 */
		public function output_json_schema() {
			$schema_markup = $this->generate_schema();

			if ( ! empty( $schema_markup ) ) {
				echo '<script type="application/ld+json">' . wp_json_encode( $schema_markup, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>';
			}
		}

		/**
		 * Generate schema markup for the current page.
		 *
		 * @return array
		 */
		protected function generate_schema() {
			$schema = [];

			if ( is_front_page() ) {
				$schema[] = $this->get_homepage_schema();
			} elseif ( is_singular( 'post' ) ) {
				$schema[] = $this->get_blog_post_schema();
			} elseif ( is_page() || is_singular() ) {
				$schema[] = $this->get_webpage_schema();
			} elseif ( is_search() ) {
				$schema[] = $this->get_search_schema();
			} elseif ( is_category() || is_tag() ) {
				$schema[] = $this->get_taxonomy_archive_schema();
			} elseif ( is_archive() ) {
				$schema[] = $this->get_generic_archive_schema();
			} elseif ( is_404() ) {
				$schema[] = $this->get_404_schema();
			} elseif ( is_author() ) {
				$schema[] = $this->get_author_schema();
			}

			$breadcrumb = $this->get_breadcrumb_schema();
			if ( ! empty( $breadcrumb ) ) {
				$schema[] = $breadcrumb;
			}

			return $schema;
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
		 * Get schema for blog posts.
		 *
		 * @return array
		 */
		protected function get_blog_post_schema() {
			$post_id   = get_the_ID();
			$author_id = get_post_field( 'post_author', $post_id );
			$image_url = get_the_post_thumbnail_url( $post_id, 'full' );

			$schema = [
				'@context'         => 'https://schema.org',
				'@type'            => [ 'Article', 'BlogPosting' ],
				'mainEntityOfPage' => [
					'@type' => 'WebPage',
					'@id'   => get_permalink(),
				],
				'headline'        => get_the_title(),
				'description'     => get_the_excerpt(),
				'author'          => [
					'@type' => 'Person',
					'name'  => get_the_author_meta( 'display_name', $author_id ),
				],
				'publisher'       => [
					'@type' => 'Organization',
					'name'  => $this->settings['organization'],
					'logo'  => $this->get_logo_schema(),
				],
				'datePublished'   => get_the_date( DATE_W3C ),
				'dateModified'    => get_the_modified_date( DATE_W3C ),
			];

			if ( $image_url ) {
				$thumbnail_id   = get_post_thumbnail_id( $post_id );
				$image_meta     = wp_get_attachment_metadata( $thumbnail_id );

				$width  = isset( $image_meta['width'] ) ? $image_meta['width'] : 1200;
				$height = isset( $image_meta['height'] ) ? $image_meta['height'] : 630;

				$schema['image'] = [
					'@type'  => 'ImageObject',
					'url'    => $image_url,
					'width'  => $width,
					'height' => $height,
				];
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
				'name'        => $name,
				'description' => wp_strip_all_tags( $desc ),
				'url'         => $term_url,
			];
		}

		/**
		 * Get schema for generic archives.
		 *
		 * @return array
		 */
		protected function get_generic_archive_schema() {
			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'CollectionPage',
				'name'        => get_the_archive_title(),
				'description' => get_the_archive_description() ?: $this->settings['description'],
				'url'         => get_permalink(),
			];
		}

		/**
		 * Get schema for pages.
		 *
		 * @return array
		 */
		protected function get_webpage_schema() {
			return [
				'@context'    => 'https://schema.org',
				'@type'       => 'WebPage',
				'name'        => get_the_title(),
				'url'         => get_permalink(),
				'description' => get_the_excerpt(),
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
				'description' => esc_html_x( 'The requested page could not be found on this server.', 'JSON Schema: Description for 404 error page', 'oceanwp' ),
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

			return [
				'@context'   => 'https://schema.org',
				'@type'      => 'ProfilePage',
				'name'       => get_the_author_meta( 'display_name', $author_id ),
				'description'=> get_the_author_meta( 'description', $author_id ) ?: sprintf(
					/* translators: %s: Author display name */
					esc_html_x( 'Articles by %s', 'JSON Schema: fallback author description', 'oceanwp' ),
					get_the_author_meta( 'display_name', $author_id )
				),
				'url'        => get_author_posts_url( $author_id ),
				'mainEntity' => [
					'@type' => 'Person',
					'name'  => get_the_author_meta( 'display_name', $author_id ),
					'url'   => get_author_posts_url( $author_id ),
					'image' => get_avatar_url( $author_id ),
					'description' => get_the_author_meta( 'description', $author_id ),
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
			if ( ! $this->schema_breadcrumbs || is_front_page() ) {
				return null;
			}

			$items = [];
			$position = 1;

			$items[] = [
				'@type'    => 'ListItem',
				'position' => $position++,
				'name'     => 'Home',
				'item'     => home_url( '/' ),
			];

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

			return [
				'@context'        => 'https://schema.org',
				'@type'           => 'BreadcrumbList',
				'itemListElement' => $items,
			];
		}

	}

}
