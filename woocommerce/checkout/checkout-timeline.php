<?php
/**
 * Multi-step checkout timeline template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Check if a custom Elementor checkout template is active.
$custom_checkout_template = get_option( 'oec_checkout_template', '0' );
if ( '0' !== $custom_checkout_template && ! empty( $custom_checkout_template ) ) {
	return; // Exit early if a custom Elementor template is applied.
}

// Vars.
$i = 0;

$enable_login_reminder = 'yes' === get_option( 'woocommerce_enable_checkout_login_reminder', 'yes' ) ? true : false;
$is_logged_in          = is_user_logged_in();
$show_login_step       = ! $is_logged_in && $enable_login_reminder;

// Style.
$style = get_theme_mod( 'ocean_woo_multi_step_checkout_timeline_style', 'arrow' );
$style = $style ? $style : 'arrow';

// Define classes.
$classes = array( 'owp-woo-checkout-timeline', 'clr' );

// Style.
$classes[] = $style;

// If login.
if ( $show_login_step ) {
	$classes[] = 'step-4';
}

// Turn classes into string.
$classes = implode( ' ', $classes ); ?>

<ul id="owp-checkout-timeline" class="<?php echo esc_attr( $classes ); ?>">

	<?php if ( $show_login_step ) { ?>
		<li id="timeline-0" data-step="0" class="timeline login <?php echo ! $is_logged_in ? 'active' : ''; ?>">
			<div class="timeline-wrapper">
				<span class="timeline-step"><?php echo $i = $i + 1 ?>.</span>
				<span class="timeline-label"><?php esc_html_e( 'Login', 'oceanwp' ); ?></span>
			</div>
		</li>
	<?php } ?>

	<li id="timeline-1" data-step="1" class="timeline billing <?php echo ! $show_login_step ? 'active' : ''; ?>">
		<div class="timeline-wrapper">
			<span class="timeline-step"><?php echo $i = $i + 1 ?>.</span>
			<span class="timeline-label"><?php esc_html_e( 'Billing', 'oceanwp' ); ?></span>
		</div>
	</li>

	<li id="timeline-2" data-step="2" class="timeline shipping" >
		<div class="timeline-wrapper">
			<span class="timeline-step"><?php echo $i = $i + 1 ?>.</span>
			<span class="timeline-label"><?php esc_html_e( 'Shipping', 'oceanwp' ); ?></span>
		</div>
	</li>

	<li id="timeline-3" data-step="3" class="timeline payment">
		<div class="timeline-wrapper">
			<span class="timeline-step"><?php echo $i = $i + 1 ?>.</span>
			<span class="timeline-label"><?php esc_html_e( 'Payment Info', 'oceanwp' ); ?></span>
		</div>
	</li>

</ul>
