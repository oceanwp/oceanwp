<?php
$need_to_upgrade = oceanwp_theme_panel()->need_to_upgrade();
$banner_upgrade_link = oceanwp_theme_panel()->banner_upgrade_link();
?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-help">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<div class="oceanwp-tp-message-heading-block">
		<img class="ocean-tp-heading-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/help-center.png' ); ?>" />
		<h2 class="oceanwp-tp-message-heading"><?php esc_html_e( 'The Help Corner', 'oceanwp' ); ?></h2>
		</img>
	</div>

	<div class="oceanwp-tp-wide-block">
		<div class="row oceanwp-tp-help-section">
			<div class="col">
				<div class="oceanwp-tp-large-block">
					<div class="oceanwp-tp-block-outer">
						<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/document.png' ); ?>" />
						<div class="oceanwp-tp-block-inner">
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Documentation', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Unlock the power of OceanWP. Install demos, create custom templates, customize each page or post, add WordPress widgets and more.', 'oceanwp' ); ?></p>
						</div>
					</div>
					<div class="oceanwp-tp-block-button-wrapper">
						<a href="<?php echo esc_url( 'https://docs.oceanwp.org/' ); ?>" target="_blank" class="button blue" role="button">
							<?php esc_html_e( 'Check Documentation', 'oceanwp' ); ?>
						</a>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="oceanwp-tp-large-block">
					<div class="oceanwp-tp-block-outer">
						<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/media-player.png' ); ?>" />
						<div class="oceanwp-tp-block-inner">
							<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Video Tutorials', 'oceanwp' ); ?></h2>
							<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Advanced drag & drop page builder for pixel perfect editing and mobile responsiveness design. Best friend with Ocean WordPress templates.', 'oceanwp' ); ?></p>
						</div>
					</div>
					<div class="oceanwp-tp-block-button-wrapper">
						<a href="<?php echo esc_url( 'https://www.youtube.com/channel/UC9oXVn5OlPjr2-BllEVLgkg' ); ?>" target="_blank" class="button blue" role="button">
							<?php esc_html_e( 'Watch Videos', 'oceanwp' ); ?>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 4 videos block -->
	<div class="row oceanwp-tp-help-section">
		<div class="col">
			<div class="oceanwp-tp-small-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-small-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/monitor.png' ); ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-small-block-title"><?php esc_html_e( 'Meet OceanWP - Theme Overview', 'oceanwp' ); ?></h2>
						<div class="oceanwp-tp-block-description"><a href="<?php echo esc_url( 'https://youtu.be/t6elMWAe3dQ' ); ?>" target="_blank"><?php esc_html_e( 'Watch video', 'oceanwp' ); ?></a></div>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="oceanwp-tp-small-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-small-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/monitor.png' ); ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-small-block-title"><?php esc_html_e( 'Install WordPress in 10 minutes', 'oceanwp' ); ?></h2>
						<div class="oceanwp-tp-block-description"><a href="<?php echo esc_url( 'https://youtu.be/rvW_HOYutT0' ); ?>" target="_blank"><?php esc_html_e( 'Watch video', 'oceanwp' ); ?></a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row oceanwp-tp-help-section">
		<div class="col">
			<div class="oceanwp-tp-small-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-small-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/monitor.png' ); ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-small-block-title"><?php esc_html_e( 'How to Install Ocean Demos', 'oceanwp' ); ?></h2>
						<div class="oceanwp-tp-block-description"><a href="<?php echo esc_url( 'https://youtu.be/8beTQrXkknQ' ); ?>" target="_blank"><?php esc_html_e( 'Watch video', 'oceanwp' ); ?></a></div>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="oceanwp-tp-small-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-small-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/monitor.png' ); ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-small-block-title"><?php esc_html_e( 'How to Create a Custom Header', 'oceanwp' ); ?></h2>
						<div class="oceanwp-tp-block-description"><a href="<?php echo esc_url( 'https://youtu.be/4ryxEl5cOes' ); ?>" target="_blank"><?php esc_html_e( 'Watch video', 'oceanwp' ); ?></a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 4 videos block END-->

	<?php if ( $need_to_upgrade ) : ?>
	<!-- Banner -->
	<div class="oceanwp-tp-banner help">
		<h1 class="banner-header"><?php esc_html_e( 'Unlock additional support options with the Ocean Core Extensions Bundle', 'oceanwp' ); ?></h1>
		<h2 class="banner-subheader"><?php esc_html_e( 'Take the lead. Experience website building with no limits', 'oceanwp' ); ?></h2>
		<a href="<?php echo esc_url( $banner_upgrade_link ); ?>" target="_blank" class="banner-button" role="button"><span><?php esc_html_e( 'Upgrade now', 'oceanwp' ); ?></span></a>
	</div>
	<?php endif; ?>

	<!-- Forum Support-->
	<div class="oceanwp-tp-message-heading-block">
		<img class="ocean-tp-heading-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/help-center.png' ); ?>" />
		<h2 class="oceanwp-tp-message-heading"><?php esc_html_e( 'Forum and Community Support', 'oceanwp' ); ?></h2>
		</img>
	</div>

	<div class="row oceanwp-tp-help-section">
		<div class="col">
			<div class="oceanwp-tp-large-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/team-work.png' ); ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'WordPress Forum', 'oceanwp' ); ?></h2>
						<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Search topics or start a thread on the official WordPress forum. Support for pro services and features is not allowed per WordPress forum rules.', 'oceanwp' ); ?></p>
					</div>
				</div>
				<div class="oceanwp-tp-block-button-wrapper">
					<a href="<?php echo esc_url( 'https://wordpress.org/support/theme/oceanwp/' ); ?>" target="_blank" class="button blue" role="button">
						<?php esc_html_e( 'Visit Forum', 'oceanwp' ); ?>
					</a>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="oceanwp-tp-large-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/discussion.png' ); ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Facebook Community', 'oceanwp' ); ?></h2>
						<p class="oceanwp-tp-block-description"><?php esc_html_e( 'Meet OceanWP family members, developers, tech support agents, managers... Get support, stay in the loop, share happy moments.', 'oceanwp' ); ?></p>
					</div>
				</div>
				<div class="oceanwp-tp-block-button-wrapper">
					<a href="<?php echo esc_url( 'https://www.facebook.com/groups/oceanwptheme/' ); ?>" target="_blank" class="button blue" role="button">
						<?php esc_html_e( 'Visit Community', 'oceanwp' ); ?>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="row oceanwp-tp-help-section">
		<div class="col">
			<div class="oceanwp-tp-large-block">
				<div class="oceanwp-tp-block-outer">
					<img class="oceanwp-tp-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/help-center.png' ); ?>" />
					<div class="oceanwp-tp-block-inner">
						<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Customer Support', 'oceanwp' ); ?></h2>
						<p class="oceanwp-tp-block-description"><?php esc_html_e( 'If you have purchased any of our Pro products, individually or in a form of the Bundle, and have an active license, you\'re entitled to our customer support services. Customer support services are performed through the ticketing/email system. To open a ticket with us, please click the button below.', 'oceanwp' ); ?></p>
					</div>
				</div>
				<div class="oceanwp-tp-block-button-wrapper">
					<a href="<?php echo esc_url( 'https://oceanwp.org/support/' ); ?>" target="_blank" class="button blue" role="button">
						<?php esc_html_e( 'Open a Ticket', 'oceanwp' ); ?>
					</a>
				</div>
			</div>
		</div>
		<div class="col"></div>
	</div>

	<div class="oceanwp-ct-remark footer">
		<h2><a href="<?php echo esc_url( 'https://docs.oceanwp.org/article/685-support-policy' ); ?>" target="_blank"><?php esc_html_e( 'Support Policy', 'oceanwp' ); ?></a></h2>
	</div>
</div>
