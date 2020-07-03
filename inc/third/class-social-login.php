<?php
/**
 * WordPress Social Login class
 *
 * @package OceanWP WordPress theme
 */

// Return if the plugins doesn't exist or if logged in.
if ( ! function_exists( 'wsl_install' )
	|| is_user_logged_in() ) {
	return;
}

if ( ! class_exists( 'OceanWP_Social_Login' ) ) :

	class OceanWP_Social_Login {

		/**
		 * Setup class.
		 *
		 * @since 1.4.0
		 */
		public function __construct() {
			add_filter( 'wsl_render_auth_widget_alter_provider_icon_markup', array( $this, 'social_login_markup' ), 10, 3 );
			add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_css' ) );
			add_action( 'login_enqueue_scripts', array( $this, 'add_custom_css' ) );
		}

		/**
		 * Social login markup.
		 *
		 * @since 1.0.0
		 */
		public function social_login_markup( $provider_id, $provider_name, $authenticate_url ) {

			// Icons
			$provider_icon = strtolower( $provider_id );

			// Custom icons
			if ( 'facebook' == strtolower( $provider_id ) ) {
				$provider_icon = 'facebook-f';
			} else if ( 'vkontakte' == strtolower( $provider_id ) ) {
				$provider_icon = 'vk';
			} else if ( 'stackoverflow' == strtolower( $provider_id ) ) {
				$provider_icon = 'stack-overflow';
			} else if ( 'twitchTV' == strtolower( $provider_id ) ) {
				$provider_icon = 'twitch';
			} else if ( 'mailru' == strtolower( $provider_id ) ) {
				$provider_icon = 'envelope';
			} ?>

			<a href="<?php echo esc_url( $authenticate_url ); ?>" data-provider="<?php echo esc_attr( $provider_id ); ?>" class="opl-<?php echo esc_attr( strtolower( $provider_id ) ); ?>" rel="nofollow">
		       <i class="fa fa-<?php echo esc_attr( $provider_icon ); ?>"></i>
		       <span><?php echo esc_html( $provider_name ); ?></span>
		    </a>

		<?php
		}

		/**
		 * Load custom CSS file
		 *
		 * @since 1.4.0
		 */
		public static function add_custom_css() {
			wp_enqueue_style( 'oceanwp-wsl', OCEANWP_CSS_DIR_URI .'third/social-login.min.css' );
		}

	}

endif;

return new OceanWP_Social_Login();