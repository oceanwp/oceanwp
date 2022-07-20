<?php
$need_to_upgrade = oceanwp_theme_panel()->need_to_upgrade();
if( ! $need_to_upgrade ) {
	return;
}
?>
<?php
$extra_mode_actived = oceanwp_theme_panel()->extra_installed();
?>
<?php

/**
 * Upgrade Now Button.
 *
 * @return mixed
 *
 */
function upgrade_now_button () {
	return '<a href=" ' . esc_url( 'https://oceanwp.org/core-extensions-bundle/' )  . ' " target="_blank" class="button upgrade-button" role="button">' . esc_html__( 'Upgrade Now', 'oceanwp' )  . ' </a>';
}
?>


<div class="oceanwp-tp-pane-box" id="oceanwp-tp-comparison">

	<?php include_once oceanwp_theme_panel()->panel_top_header(); ?>

	<div class="oceanwp-tp-wide-block">

		<!-- Upgrade Button -->
		<?php if ( ! $extra_mode_actived ) : ?>
			<div class="oceanwp-tp-upgrade-button-wrap">
				<?php echo upgrade_now_button(); ?>
			</div>
		<?php endif; ?>

		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/free-pro.png' ); ?>" />
			<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Take the Lead. Own the Ocean Universe', 'oceanwp' ); ?></h2>
		</div>
	</div>

	<div class="oceanwp-ct-legend">
		<div class="oceanwp-ct-legend-heading"><?php esc_html_e( 'Legend', 'oceanwp' ); ?></div>
		<div class="legend-cell">
			<span class="oceanwp-tick-icon"></span>
			<h3 class="elementor-image-box-title"><?php esc_html_e( 'Included', 'oceanwp' ); ?></h3>
		</div>
		<div class="legend-cell">
			<span class="oceanwp-cancel-icon"></span>
			<h3 class="elementor-image-box-title"><?php esc_html_e( 'Not included', 'oceanwp' ); ?></h3>
		</div>
		<div class="legend-cell">
			<span class="oceanwp-limited-icon"></span>
			<h3 class="elementor-image-box-title"><?php esc_html_e( 'Limited', 'oceanwp' ); ?></h3>
		</div>
	</div>

	<section class="oceanwp-comparison-table">
		<ul>
			<li class="ct-table-heading"><span><?php esc_html_e( 'Features', 'oceanwp' ); ?></span><span><?php esc_html_e( 'Free', 'oceanwp' ); ?></span><span><?php esc_html_e( 'Pro', 'oceanwp' ); ?></span></li>
			<li><span><?php esc_html_e( 'Forum & Community Support', 'oceanwp' ); ?></span><span class="oceanwp-tick-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Personalized Customer Support', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Priority Customer Support*', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Special Coupon Deals*', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Professional Webinars*', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Newsletter Featuring*', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Pre-made Website Library', 'oceanwp' ); ?></span><span class="oceanwp-limited-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Pre-made Sections Library*', 'oceanwp' ); ?></span><span class="oceanwp-limited-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Royalty-free Images with Templates', 'oceanwp' ); ?></span><span class="oceanwp-limited-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Image Library*', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Icons Library*', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Access to PRO Updates', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Sticky Header', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Sticky Footer', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Elementor Widgets', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Instagram', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Footer Callout', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Side Panel', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Portfolio', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Conditional Hooks for Codes & Templates', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Login Popup', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Full Screen', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Cookie Notice', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'Woo Popup', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
			<li><span><?php esc_html_e( 'White Label', 'oceanwp' ); ?></span><span class="oceanwp-cancel-icon"></span><span class="oceanwp-tick-icon"></span></li>
		</ul>
	</section>

	<div class="oceanwp-ct-remark">
		<h2><?php esc_html_e( '* Some PRO features are included or optional depending on the Business and/or Agency Bundle plan.', 'oceanwp' ); ?></h2>
	</div>

	<div class="oceanwp-tp-small-block">
		<div class="oceanwp-tp-block-outer">
			<img class="oceanwp-tp-small-block-image" src="<?php echo esc_url( OCEANWP_THEME_PANEL_URI . '/assets/images/icons/chat.png' ); ?>" />
			<div class="oceanwp-tp-block-inner">
				<h2 class="oceanwp-tp-small-block-title"><?php esc_html_e( 'Have any questions about going PRO or upgrading your plan?', 'oceanwp' ); ?></h2>
				<div class="oceanwp-tp-block-description"><a href="<?php echo esc_url( 'https://oceanwp.org/pre-purchase-question/' ); ?>" target="_blank"><?php esc_html_e( 'Let us know how we can help you make the best decision for your website.', 'oceanwp' ); ?></a></div>
			</div>
		</div>
	</div>

	<!-- Upgrade Button -->
	<?php if ( ! $extra_mode_actived ) : ?>
		<div class="oceanwp-tp-upgrade-button-wrap last">
			<?php echo upgrade_now_button(); ?>
		</div>
	<?php endif; ?>

</div>
