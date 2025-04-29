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

	$onboaridng_completed = get_option('owp_onboarding_completed');

	if ( $onboaridng_completed ) {
		return;
	}

	$first_dismissed  = get_option('oceanwp_plugin_notice_first_dismissed');
	$permanent_dismiss = get_option('oceanwp_plugin_notice_permanently_dismissed');

	if ( $permanent_dismiss ) {
		return;
	}

	$theme_install      = get_option( 'oceanwp_theme_installed_version' );
	$oe_installed_ver   = get_option( 'ocean-extra-installed-version' );

	$current_oe_version = '';

	if ( file_exists( WP_PLUGIN_DIR . '/ocean-extra/ocean-extra.php' ) ) {
		if ( current_user_can( 'install_plugins' ) && function_exists('oceanwp_theme_panel') ) {
			$current_oe_version = oceanwp_theme_panel()->get_current_plugin_version( 'ocean-extra/ocean-extra.php' );
		}
	}

	$parent_theme  = wp_get_theme()->parent();
	$current_theme = wp_get_theme();
	$theme_version = '';

	if ( ! empty( $parent_theme) ) {
		$theme_version = $parent_theme->get('Version');
	} else {
		$theme_version = $current_theme->get('Version');
	}

	if (
		$theme_install &&
		$oe_installed_ver &&
		version_compare( $theme_install, $theme_version, '<' ) &&
		version_compare( $oe_installed_ver, $current_oe_version, '<' )
	) {
		return;
	}

	$manager = new Oceanwp_Plugin_Manager();
	$status  = $manager->get_ocean_extra_status()['status'];

	// if ( $status === 'active' ) {
	// 	return;
	// }

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
	// if ( get_option( 'dismissed-oceanwp_plugin_notice', false ) ) {
	// 	return;
	// }

	$onboaridng_completed = get_option('owp_onboarding_completed');

	if ( $onboaridng_completed ) {
		return;
	}

	$first_dismissed  = get_option('oceanwp_plugin_notice_first_dismissed');
	$permanent_dismiss = get_option('oceanwp_plugin_notice_permanently_dismissed');

	if ( $permanent_dismiss ) {
		return;
	}

	$is_second_notice = false;
	if ( $first_dismissed ) {
		if ( time() - (int) $first_dismissed > DAY_IN_SECONDS ) {
			$is_second_notice = true;
		} else {
			return;
		}
	}

	$theme_install      = get_option( 'oceanwp_theme_installed_version' );
	$oe_installed_ver   = get_option( 'ocean-extra-installed-version' );

	$current_oe_version = '';

	if ( file_exists( WP_PLUGIN_DIR . '/ocean-extra/ocean-extra.php' ) ) {
		if ( current_user_can( 'install_plugins' ) && function_exists('oceanwp_theme_panel') ) {
			$current_oe_version = oceanwp_theme_panel()->get_current_plugin_version( 'ocean-extra/ocean-extra.php' );
		}
	}

	$parent_theme  = wp_get_theme()->parent();
	$current_theme = wp_get_theme();
	$theme_version = '';

	if ( ! empty( $parent_theme) ) {
		$theme_version = $parent_theme->get('Version');
	} else {
		$theme_version = $current_theme->get('Version');
	}

	if (
		$theme_install &&
		$oe_installed_ver &&
		version_compare( $theme_install, $theme_version, '<' ) &&
		version_compare( $oe_installed_ver, $current_oe_version, '<' )
	) {
		return;
	}

	$manager = new Oceanwp_Plugin_Manager();
	$status  = $manager->get_ocean_extra_status()['status'];

	// if ( $status === 'active' ) {
	// 	return;
	// }

	echo '<div class="notice notice-ocean-extra-plugin notice-ocean-onboarding">';
	echo '<div class="notice-ocean-extra-plugin-root">';

	?>

	<div class="owp-ocean-extra-plugin-inner">
		<button type="button" class="notice-dismiss">
			<span class="screen-reader-text">
				<?php _e( 'Dismiss this notice.', 'oceanwp' ); ?>
			</span>
		</button>

		<div class="owp-notification-content">
			<div class="owp-notification-content-wrap">
				<?php
				if ( ! $is_second_notice ) :
					ocean_first_notice_content();
				else :
					ocean_second_notice_content();
				endif;
				?>
			</div>
			<div class="owp-notification-content-image">
				<img src="<?php echo esc_url( OCEANWP_INC_DIR_URI . '/activation-notice/assets/img/launch-wizard.png' ); ?>" />
			</div>
		</div>
	</div>
	<?php

	echo '</div>';
	echo '</div>';
}

function ocean_first_notice_content() {
	?>

	<span class="notice-subheading"><?php esc_html_e( 'Thanks for choosing OceanWP. Excellent choice! 🌟', 'oceanwp' ); ?></span>
	<h2><?php esc_html_e( 'It\'s like Magic! Start Your Website in Minutes ✨', 'oceanwp' ); ?></h2>
	<p>
		<?php esc_html_e( 'Save time and don\'t worry about design.', 'oceanwp' ); ?><br>
		<?php esc_html_e( 'Launch the Setup Wizard, choose one of our full site templates and get started in a matter of minutes.', 'oceanwp' ); ?><br>
		<?php esc_html_e( 'All parts are customizable and adjustable for you to make them your very own.', 'oceanwp' ); ?><br>
	</p>

	<?php
}

function ocean_second_notice_content() {
	?>

	<span class="notice-subheading"><?php esc_html_e( 'Hi, there! 👋 We\'re here to help', 'oceanwp' ); ?></span>
	<h2><?php esc_html_e( 'Launch the Setup Wizard 🧙', 'oceanwp' ); ?></h2>
	<p>
		<?php esc_html_e( 'The Setup Wizard is here to help you start a website in minutes.', 'oceanwp' ); ?><br>
		<?php esc_html_e( 'Check out our library of full site templates, and choose one to get started fast.', 'oceanwp' ); ?><br>
		<?php esc_html_e( 'Then simply adjust anything and everything, or start adding content.', 'oceanwp' ); ?><br>
	</p>

	<?php
}
