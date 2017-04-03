<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * OCEANWP_Welcome Class
 *
 * A general class for About and Credits page.
 *
 * @since 1.0.0
 */
class OCEANWP_Welcome {
	private $theme_name;
	private $dir;

	/**
	 * Get things started
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		// Vars
		$info = oceanwp_get_theme_info();
		$this->theme_name      = $info['name'];
		$this->dir             = $info['dir'];

		// Actions
		add_action( 'admin_menu', 				array( $this, 'admin_menus' ) );
		add_action( 'load-themes.php',			array( $this, 'activation_admin_notice' ) );
		add_action( 'admin_enqueue_scripts', 	array( $this, 'welcome_style' ) );

	}

	/**
	 * Adds an admin notice upon successful activation.
	 *
	 * @since 1.0.4
	 */
	public function activation_admin_notice() {
		global $pagenow;

		if ( is_admin() && 'themes.php' == $pagenow && isset( $_GET['activated'] ) ) {
			add_action( 'admin_notices', array( $this, 'welcome_admin_notice' ), 99 );
		}
	}

	/**
	 * Display an admin notice linking to the welcome screen
	 *
	 * @since 1.0.4
	 */
	public function welcome_admin_notice() {
		?>
			<div class="updated notice is-dismissible">
				<p><?php echo sprintf( esc_html__( 'Thanks for choosing OceanWP! You can read hints and tips on how get the most out of your new theme on the %1$swelcome screen%2$s.', 'oceanwp' ), '<a href="' . esc_url( admin_url( 'themes.php?page=oceanwp-welcome' ) ) . '">', '</a>' ); ?></p>
				<p><a href="<?php echo esc_url( admin_url( 'themes.php?page=oceanwp-welcome' ) ); ?>" class="button" style="text-decoration: none;"><?php esc_attr_e( 'Get started with OCeanWP', 'oceanwp' ); ?></a></p>
			</div>
		<?php
	}

	/**
	 * Register the Dashboard Pages which are later hidden but these pages
	 * are used to render the Welcome and Credits pages.
	 *
	 * @access public
	 * @since 1.0.0
	 * @return void
	 */
	public function admin_menus() {
		
		add_theme_page(
			$this->theme_name .' '. esc_html__( 'Theme', 'oceanwp' ),
			$this->theme_name .' '. esc_html__( 'Theme', 'oceanwp' ),
			'activate_plugins',
			'oceanwp-welcome', 
			array( $this, 'welcome_screen' )
		);

	}

	/**
	 * Render Welcome Screen
	 *
	 * @access public
	 * @since 1.0.0
	 * @return void
	 */
	public function welcome_screen() { ?>

		<div class="wrap about-wrap">

			<?php
			// Get theme version #
			$theme_data    = wp_get_theme();
			$theme_version = $theme_data->get( 'Version' );

			// Affiliate link
			$ref_url = '';
			$aff_ref = apply_filters( 'ocean_affiliate_ref', $ref_url ); ?>

			<div class="title-wrap clr">

				<h1 class="oceanwp-title"><?php echo esc_html( $this->theme_name ); ?><sup class="version"><?php echo esc_html( $theme_version ); ?></sup></h1>

				<ul class="social-wrap clr">
					<li><a href="https://twitter.com/OceanWordPress" class="twitter" title="<?php esc_html_e( 'Join us on Twitter', 'oceanwp' ); ?>" target="_blank"><i class="dashicons dashicons-twitter"></i></a></li>
					<li><a href="https://www.facebook.com/OceanWordPress" class="facebook" title="<?php esc_html_e( 'Join us on Facebook', 'oceanwp' ); ?>" target="_blank"><i class="dashicons dashicons-facebook-alt"></i></a></li>
					<li><a href="https://github.com/oceanwp" class="github" title="<?php esc_html_e( 'Find us on GitHub', 'oceanwp' ); ?>" target="_blank"><i class="dashicons dashicons-admin-plugins"></i></a></li>
				</ul>

			</div>

			<div class="oceanwp-content">

				<div class="oceanwp-bloc">

					<h2 class="bloc-title"><?php esc_html_e( 'Thank you for using OceanWP', 'oceanwp' ); ?></h2>

					<p><?php esc_html_e( 'OceanWP is the perfect theme for your project. Lightweight and highly extendible, it will enable you to create almost any type of site with a beautiful & professional design. There are several options to personalise your website, multiple widget regions, a responsive design and much more. Developers will love his extensible codebase making it a joy to customise and extend.', 'oceanwp' ); ?></p>

					<p><strong><?php esc_html_e( 'The perfect theme to use with your favorite page builder!', 'oceanwp' ); ?></strong></p>

				</div>

				<div class="oceanwp-bloc blue">

					<h2 class="bloc-title"><?php esc_html_e( 'Extend his functionalities with our extensions', 'oceanwp' ); ?></h2>

					<p><?php esc_html_e( 'Check our free and premium extensions that extend OceanWP&rsquo;s functionality and make it more powerful.', 'oceanwp' ); ?></p>

					<ul class="oceanwp-list clr">
						<li>
							<a href="https://oceanwp.org/extension/ocean-extra/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Ocean Extra', 'oceanwp' ); ?> - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
							<p><?php esc_html_e( 'Add extra features like metaboxes, import/export and a panel to activate the extensions.', 'oceanwp' ); ?></p>
						</li>
						<li>
							<a href="https://oceanwp.org/extension/ocean-elementor-widgets/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Elementor Widgets', 'oceanwp' ); ?> - <span class="price">$39</span></a>
							<p><?php esc_html_e( 'Add some awesome new widgets to the popular free page builder Elementor.', 'oceanwp' ); ?></p>
						</li>
						<li>
							<a href="https://oceanwp.org/extension/ocean-custom-sidebar/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Custom Sidebar', 'oceanwp' ); ?> - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
							<p><?php esc_html_e( 'Generates an unlimited number of sidebars and place them on any page or post.', 'oceanwp' ); ?></p>
						</li>
						<li>
							<a href="https://oceanwp.org/extension/ocean-sticky-header/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Sticky Header', 'oceanwp' ); ?> - <span class="price">$29</span></a>
							<p><?php esc_html_e( 'A simple extension to attach the header at the top of your screen with an animation.', 'oceanwp' ); ?></p>
						</li>
						<li>
							<a href="https://oceanwp.org/extension/ocean-footer-callout/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Footer Callout', 'oceanwp' ); ?> - <span class="price">$29</span></a>
							<p><?php esc_html_e( 'Add some relevant/important information about your company or product in your footer.', 'oceanwp' ); ?></p>
						</li>
						<li>
							<a href="https://oceanwp.org/extension/ocean-side-panel/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Side Panel', 'oceanwp' ); ?> - <span class="price">$29</span></a>
							<p><?php esc_html_e( 'Display a panel on the right or left with your favorite widgets by clicking on an icon in the menu.', 'oceanwp' ); ?></p>
						</li>
						<li>
							<a href="https://oceanwp.org/extension/ocean-demo-import/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Demo Import', 'oceanwp' ); ?> - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
							<p><?php esc_html_e( 'Import the OceanWP demo content, widgets and customizer settings with one click.', 'oceanwp' ); ?></p>
						</li>
						<li>
							<a href="https://oceanwp.org/extension/ocean-social-sharing/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'Social Sharing', 'oceanwp' ); ?> - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
							<p><?php esc_html_e( 'A simple extension to add your prefered social sharing buttons to your single posts.', 'oceanwp' ); ?></p>
						</li>
					</ul>

					<div class="oceanwp-btn">
						<a href="https://oceanwp.org/extensions/<?php echo esc_attr( $aff_ref ); ?>" class="oceanwp-button" target="_blank"><?php esc_html_e( 'View all OceanWP extensions', 'oceanwp' ); ?> &rarr;</a>
					</div>

				</div>

				<div class="oceanwp-bloc">

					<h2 class="bloc-title"><?php esc_html_e( 'Create your WordPress site quickly with Themecloud', 'oceanwp' ); ?></h2>

					<p><strong><?php esc_html_e( 'What is Themecloud?', 'oceanwp' ); ?></strong> <?php esc_html_e( 'It&rsquo;s a better way to build WordPress websites, instant setup, no coding required. They are removed all of the technical hurdles standing between you and your ideal site. Don’t worry about installations, configurations, migrations and maintenance. Focus on creating stellar content – and watch your business skyrocket! Not convinced yet?', 'oceanwp' ); ?> <a href="https://www.wpkube.com/create-wordpress-sites-quickly-themecloud/" target="_blank"><?php esc_html_e( 'Look at this great review from WPKube', 'oceanwp' ); ?></a></p>

					<p class="themecloud-price"><?php esc_html_e( 'From $9.90/mo', 'oceanwp' ); ?> <span class="small-text"><?php esc_html_e( '( 15-day free trial, no credit card required )', 'oceanwp' ); ?></span></p>

					<div class="oceanwp-btn">
						<a href="http://www.themecloud.io/#_l_4a" class="oceanwp-button" target="_blank"><?php esc_html_e( 'Learn more about Themecloud', 'oceanwp' ); ?> &rarr;</a>
					</div>

				</div>

				<?php if ( current_user_can( 'customize' ) ) { ?>

					<div class="oceanwp-bloc customize">

						<h2 class="bloc-title"><?php esc_html_e( 'Getting started with OceanWP', 'oceanwp' ); ?></h2>

						<p><?php esc_html_e( 'Take a look in the options of the Customizer and see yourself how easy and quick to customize the theme as you wish.', 'oceanwp' ); ?></p>

						<ul class="oceanwp-list clr">
							<li>
								<span class="option-title"><?php esc_html_e( 'Upload your logo', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'Add your own logo and retina logo used for the mobile design.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=custom_logo' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
							<li>
								<span class="option-title"><?php esc_html_e( 'Add your favicon', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'The favicon is used as a browser and app icon for your website.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=site_icon' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
							<li>
								<span class="option-title"><?php esc_html_e( 'Choose your primary color', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'Replace the default primary and hover color by your own colors.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=ocean_primary_color' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
							<li>
								<span class="option-title"><?php esc_html_e( 'Change the links color', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'Choose the color and hover color of your links for the entire site.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=ocean_links_color' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
							<li>
								<span class="option-title"><?php esc_html_e( 'Choose your typography', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'Choose your own typography for any parts of your website.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[panel]=ocean_typography_panel' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
							<li>
								<span class="option-title"><?php esc_html_e( 'Top bar options', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'Enable/Disable the top bar, add your own paddings and colors.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=ocean_top_bar' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
							<li>
								<span class="option-title"><?php esc_html_e( 'Header options', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'Choose the style, the height and the colors for your site header.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=ocean_header_style' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
							<li>
								<span class="option-title"><?php esc_html_e( 'Footer bottom options', 'oceanwp' ); ?></span>
								<p><?php esc_html_e( 'Add your copyright, paddings and colors for the footer bottom.', 'oceanwp' ); ?></p>
								<a class="option-link" href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=ocean_footer_bottom' ) ); ?>" target="_blank"><?php esc_html_e( 'Go to the option', 'oceanwp' ); ?></a>
							</li>
						</ul>

						<?php
						// Customizer url
						if ( isset( $_SERVER['REQUEST_URI'] ) ) {
							$customize_url = add_query_arg(
								array(
									'return' => urlencode( esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) ),
								),
								'customize.php'
							);
						} ?>
						<div class="oceanwp-btn">
							<a href="<?php echo esc_url( $customize_url ); ?>" class="oceanwp-button load-customize hide-if-no-customize"><?php esc_html_e( 'Customize Your Site', 'oceanwp' ); ?> &rarr;</a>
						</div>

					</div>

				<?php } ?>

				<div class="oceanwp-bloc col-2">

					<h2 class="bloc-title"><?php esc_html_e( 'Contribute to OceanWP', 'oceanwp' ); ?></h2>

					<p><?php esc_html_e( 'You&rsquo;ve found a bug? Want to contribute a patch, create a new feature or extension?', 'oceanwp' ); ?>
					<a class="github-link" href="https://github.com/oceanwp/oceanwp/" target="_blank"><?php esc_html_e( 'GitHub is the place to go!', 'oceanwp' ); ?></a></p>

				</div>

				<div class="oceanwp-bloc col-2 second">

					<h2 class="bloc-title"><?php esc_html_e( 'Get support', 'oceanwp' ); ?></h2>

					<p><?php esc_html_e( 'You can find a wide range of information on how to use and customise OceanWP in our', 'oceanwp' ); ?> <a href="http://docs.oceanwp.org/" target="_blank"><?php esc_html_e( 'documentation', 'oceanwp' ); ?></a>. <?php esc_html_e( 'If you need help?', 'oceanwp' ); ?> <a href="https://oceanwp.org/support/<?php echo esc_attr( $aff_ref ); ?>" target="_blank"><?php esc_html_e( 'open a support ticket', 'oceanwp' ); ?></a>.</p>

				</div>

				<div class="oceanwp-bloc">

					<h2 class="bloc-title"><?php esc_html_e( 'Recommended plugins', 'oceanwp' ); ?></h2>

					<p><?php esc_html_e( 'Below you will find links to plugins I personally like and recommend. None of these plugins are required for your theme to work, they simply add additional functionality.', 'oceanwp' ); ?></p>

					<ul class="oceanwp-list clr">
						<li><a href="http://wordpress.org/plugins/contact-form-7/" target="_blank">Contact Form 7 - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
						<p><?php esc_html_e( 'Manage multiple contact forms and customize the form and the mail contents with markups.', 'oceanwp' ); ?></p></li>
						<li><a href="http://www.gravityforms.com/" target="_blank">Gravity Forms - <span class="price">$39</span></a>
						<p><?php esc_html_e( 'Gravity Forms is the easiest tool to create advanced forms for your WordPress powered website.', 'oceanwp' ); ?></p></li>
						<li><a href="https://wordpress.org/plugins/elementor/" target="_blank">Elementor - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
						<p><?php esc_html_e( 'The most advanced frontend drag & drop page builder. Create high-end, pixel perfect websites.', 'oceanwp' ); ?></p></li>
						<li><a href="https://wordpress.org/plugins/beaver-builder-lite-version/" target="_blank">Beaver Builder - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
						<p><?php esc_html_e( 'A drag and drop WordPress Page Builder. Create with ease beautiful & professional pages.', 'oceanwp' ); ?></p></li>
						<li><a href="https://codecanyon.net/item/visual-composer-page-builder-for-wordpress/242431?ref=OceanWP" target="_blank">Visual Composer - <span class="price">$34</span></a>
						<p><?php esc_html_e( 'Visual Composer is the ultimate plugin for building every WordPress site without coding.', 'oceanwp' ); ?></p></li>
						<li><a href="https://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380?ref=OceanWP" target="_blank">Slider Revolution - <span class="price">$19</span></a>
						<p><?php esc_html_e( 'It&rsquo;s not just a slider, build modern & mobile friendly presentations for your website in no time.', 'oceanwp' ); ?></p></li>
						<li><a href="https://wordpress.org/plugins/ultimate-member/" target="_blank">Ultimate Member - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
						<p><?php esc_html_e( 'A powerful and flexible plugin that makes it a breeze for users to sign-up and become members.', 'oceanwp' ); ?></p></li>
						<li><a href="https://wordpress.org/plugins/woocommerce/" target="_blank">WooCommerce - <span class="price"><?php esc_html_e( 'free', 'oceanwp' ); ?></span></a>
						<p><?php esc_html_e( 'WooCommerce is a free eCommerce plugin that allows you to sell anything, beautifully.', 'oceanwp' ); ?></p></li>
					</ul>

					<div class="oceanwp-btn">
						<a href="https://oceanwp.org/recommended-plugins/<?php echo esc_attr( $aff_ref ); ?>" class="oceanwp-button" target="_blank"><?php esc_html_e( 'More Recommended Plugins', 'oceanwp' ); ?> &rarr;</a>
					</div>

				</div>

			</div>

		</div><!-- .wrap about-wrap -->


		<?php
	}

	/**
	 * Load welcome css
	 *
	 * @access public
	 * @since 1.0.0
	 * @return void
	 */
	public function welcome_style( $hook_suffix ) {

		if ( 'appearance_page_oceanwp-welcome' == $hook_suffix ) {
			wp_enqueue_style( 'oceanwp-welcome-screen', OCEANWP_INC_DIR_URI . 'welcome/css/welcome.min.css', OCEANWP_THEME_VERSION );
			if ( is_rtl() ) {
				wp_enqueue_style( 'oceanwp-welcome-screen-rtl', OCEANWP_INC_DIR_URI . 'welcome/css/rtl.css', OCEANWP_THEME_VERSION );
			}
		}

	}
	
}
new OCEANWP_Welcome();