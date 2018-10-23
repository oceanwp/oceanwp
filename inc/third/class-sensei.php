<?php
/**
 * Sensei class
 *
 * @package OceanWP WordPress theme
 */

// If Sensei plugins doesn't exist then return.
if ( ! class_exists( 'Sensei_Main' ) ) {
	return;
}

if ( ! class_exists( 'OceanWP_Sensei' ) ) :

	class OceanWP_Sensei {

		/**
		 * Setup class.
		 *
		 * @since 1.4.0
		 */
		public function __construct() {
			global $woothemes_sensei;

			add_action( 'after_setup_theme', array( $this, 'declare_sensei_support' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_css' ) );
			remove_action( 'sensei_before_main_content', array( $woothemes_sensei->frontend, 'sensei_output_content_wrapper' ), 10 );
			remove_action( 'sensei_after_main_content', array( $woothemes_sensei->frontend, 'sensei_output_content_wrapper_end' ), 10 );
			add_action( 'sensei_before_main_content', array( $this, 'wrapper_start' ), 10 );
			add_action( 'sensei_after_main_content', array( $this, 'wrapper_end' ), 10 );
			add_action( 'ocean_main_metaboxes_post_types', array( $this, 'add_metabox' ), 20 );
			add_filter( 'ocean_primary_backgrounds', array( $this, 'primary_backgrounds' ) );
			add_filter( 'ocean_hover_primary_backgrounds', array( $this, 'hover_primary_backgrounds' ) );
		}

		/**
		 * Declare Sensei support
		 *
		 * @since 1.4.0
		 */
		public static function declare_sensei_support() {
			add_theme_support( 'sensei' );
		}

		/**
		 * Load custom CSS file
		 *
		 * @since 1.4.0
		 */
		public static function add_custom_css() {
			if ( is_sensei() || is_tax( 'module' ) ) {
				wp_enqueue_style( 'oceanwp-sensei', OCEANWP_CSS_DIR_URI .'third/sensei.min.css' );
			}
		}

		/**
		 * Add wrappers start
		 *
		 * @since 1.4.0
		 */
		public static function wrapper_start() {
			ob_start(); ?>

			<?php do_action( 'ocean_before_content_wrap' ); ?>

			<div id="content-wrap" class="container oceanwp-sensei clr">

				<?php do_action( 'ocean_before_primary' ); ?>

				<div id="primary" class="content-area clr">

					<?php do_action( 'ocean_before_content' ); ?>

					<div id="content" class="site-content clr">

						<?php do_action( 'ocean_before_content_inner' ); ?>
			
			<?php
			echo ob_get_clean();
		}

		/**
		 * Add wrappers end
		 *
		 * @since 1.4.0
		 */
		public static function wrapper_end() {
			ob_start(); ?>

						<?php do_action( 'ocean_after_content_inner' ); ?>

					</div><!-- #content -->

					<?php do_action( 'ocean_after_content' ); ?>

				</div><!-- #primary -->

				<?php do_action( 'ocean_after_primary' ); ?>

				<?php do_action( 'ocean_display_sidebar' ); ?>

			</div><!-- #content-wrap -->

			<?php do_action( 'ocean_after_content_wrap' ); ?>
			
			<?php
			echo ob_get_clean();
		}

		/**
		 * Add the OceanWP Settings metabox into the custom post types
		 *
		 * @since 1.4.0
		 */
		public static function add_metabox( $types ) {
			$types[] = 'course';
			$types[] = 'lesson';
			$types[] = 'question';
			return $types;
		}

		/**
		 * Primary background colors classes
		 *
		 * @since 1.4.0
		 */
		public static function primary_backgrounds( $backgrounds ) {
			return array_merge( array(
				'.course-container a.button',
				'.course-container a.button:visited',
				'.course-container a.comment-reply-link',
				'.course-container #commentform #submit',
				'.course-container .submit',
				'.course-container input[type=submit]',
				'.course-container input.button',
				'.course-container button.button',
				'.course a.button',
				'.course a.button:visited',
				'.course a.comment-reply-link',
				'.course #commentform #submit',
				'.course .submit',
				'.course input[type=submit]',
				'.course input.button',
				'.course button.button',
				'.lesson a.button',
				'.lesson a.button:visited',
				'.lesson a.comment-reply-link',
				'.lesson #commentform #submit',
				'.lesson .submit',
				'.lesson input[type=submit]',
				'.lesson input.button',
				'.lesson button.button',
				'.quiz a.button',
				'.quiz a.button:visited',
				'.quiz a.comment-reply-link',
				'.quiz #commentform #submit',
				'.quiz .submit',
				'.quiz input[type=submit]',
				'.quiz input.button',
				'.quiz button.button',
			), $backgrounds );
		}

		/**
		 * Hover Primary background colors classes
		 *
		 * @since 1.4.0
		 */
		public static function hover_primary_backgrounds( $hover ) {
			return array_merge( array(
				'.course-container a.button:hover',
				'.course-container a.button:visited:hover',
				'.course-container a.comment-reply-link:hover',
				'.course-container #commentform #submit:hover',
				'.course-container .submit:hover',
				'.course-container input[type=submit]:hover',
				'.course-container input.button:hover',
				'.course-container button.button:hover',
				'.course a.button:hover',
				'.course a.button:visited:hover',
				'.course a.comment-reply-link:hover',
				'.course #commentform #submit:hover',
				'.course .submit:hover',
				'.course input[type=submit]:hover',
				'.course input.button:hover',
				'.course button.button:hover',
				'.lesson a.button:hover',
				'.lesson a.button:visited:hover',
				'.lesson a.comment-reply-link:hover',
				'.lesson #commentform #submit:hover',
				'.lesson .submit:hover',
				'.lesson input[type=submit]:hover',
				'.lesson input.button:hover',
				'.lesson button.button:hover',
				'.quiz a.button:hover',
				'.quiz a.button:visited:hover',
				'.quiz a.comment-reply-link:hover',
				'.quiz #commentform #submit:hover',
				'.quiz .submit:hover',
				'.quiz input[type=submit]:hover',
				'.quiz input.button:hover',
				'.quiz button.button:hover',
			), $hover );
		}

	}

endif;

return new OceanWP_Sensei();