<?php

function oceancp_output_ocean_extra_notice_enqueue_scripts( $hook ) {
	if ( ! apply_filters(
		'oceanwp:admin:display-ocean-extra-plugin-notice',
		true
	) ) {
		return;
	}

	if ( ! current_user_can( 'activate_plugins' ) ) {
		return;
	}
	if ( get_option( 'dismissed-oceanwp_plugin_notice', false ) ) {
		return;
	}

	$manager = new Oceanwp_Plugin_Manager();
	$status  = $manager->get_ocean_extra_status()['status'];

	if ( $status === 'active' ) {
		return;
	}

	wp_enqueue_script( 'ocean-extra-plugin-notice-js', OCEANWP_INC_DIR_URI . 'activation-notice/assets/js/notice.min.js', array( 'jquery' ), OCEANWP_THEME_VERSION, true );
	wp_localize_script(
		'ocean-extra-plugin-notice-js',
		'owp_notification_i18n',
		array(
			'activating'            => __( 'Activating...', 'oceanwp' ),
			'installing_activating' => __( 'Installing & activating...', 'oceanwp' ),
		)
	);
	wp_register_style( 'ocean-extra-plugin-notice-css', OCEANWP_INC_DIR_URI . 'activation-notice/assets/css/notice.min.css', array(), OCEANWP_THEME_VERSION );
	wp_enqueue_style( 'ocean-extra-plugin-notice-css' );
}
add_action( 'admin_enqueue_scripts', 'oceancp_output_ocean_extra_notice_enqueue_scripts' );

add_action(
	'admin_notices',
	function () {
		oceancp_output_ocean_extra_notice();
	}
);

function oceancp_output_ocean_extra_notice() {
	if ( ! apply_filters(
		'oceanwp:admin:display-ocean-extra-plugin-notice',
		true
	) ) {
		return;
	}

	if ( ! current_user_can( 'activate_plugins' ) ) {
		return;
	}
	if ( get_option( 'dismissed-oceanwp_plugin_notice', false ) ) {
		return;
	}

	$manager = new Oceanwp_Plugin_Manager();
	$status  = $manager->get_ocean_extra_status()['status'];

	if ( $status === 'active' ) {
		return;
	}

	echo '<div class="notice notice-ocean-extra-plugin">';
	echo '<div class="notice-ocean-extra-plugin-root">';

	?>

	<div class="owp-ocean-extra-plugin-inner">
		<button type="button" class="notice-dismiss">
			<span class="screen-reader-text">
				<?php _e( 'Dismiss this notice.', 'oceanwp' ); ?>
			</span>
		</button>

		<span class="owp-notification-icon">
			<img src="<?php echo esc_url( OCEANWP_INC_DIR_URI . '/activation-notice/assets/img/oceanwp-blue-icon.png' ); ?>" />
		</span>

		<div class="owp-notification-content">
			<h2><?php esc_html_e( 'Awesome Possum - You\'re Amazing!', 'oceanwp' ); ?></h2>
			<h3 class="notice-subheading"><?php esc_html_e( 'Thank you for installing the OceanWP theme.', 'oceanwp' ); ?></h3>
			<p>
				<?php esc_html_e( 'We highly recommend you to install and activate the', 'oceanwp' ); ?>
				<b><?php esc_html_e( 'Ocean Extra', 'oceanwp' ); ?></b> plugin.
				<br>
				<?php esc_html_e( 'This plugin will unlock new power tools to help you build an amazing website. Get access to:', 'oceanwp' ); ?></p>
				<ul>
					<li> <?php echo esc_html__( 'freemium website template demos,', 'oceanwp' ); ?> </li>
					<li> <?php echo esc_html__( 'WordPress widgets,', 'oceanwp' ); ?> </li>
					<li> <?php echo esc_html__( 'Metabox settings to control pages and posts individually,', 'oceanwp' ); ?> </li>
					<li> <?php echo esc_html__( 'ability to create and use custom templates,', 'oceanwp' ); ?> </li>
					<li> <?php echo esc_html__( 'and much, much more.', 'oceanwp' ); ?> </li>
				</ul>
			</p>
		</div>
	</div>
	<?php

	echo '</div>';
	echo '</div>';
}
