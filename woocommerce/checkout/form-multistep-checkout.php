<?php
/**
 * Checkout Form, for multi-step checkout
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @author      WooThemes
 * @package     WooCommerce/Templates
 * @version     2.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$enable_login_reminder = 'yes' === get_option( 'woocommerce_enable_checkout_login_reminder', 'yes' );
$is_logged_in          = is_user_logged_in();
$show_login_step       = ! $is_logged_in && $enable_login_reminder;
$login_message         = apply_filters( 'ocean_form_checkout_login_message', __( 'If you have already registered, please, enter your details in the boxes below. If you are a new customer, please, go to the Billing &amp; Shipping section.', 'oceanwp' ) );

// Back cart icon.
if ( is_RTL() ) {
	$icon = 'fa-angle-right';
} else {
	$icon = 'fa-angle-left';
}

wc_print_notices();

do_action( 'woocommerce_before_checkout_form', $checkout ); ?>

<div id="checkout-wrapper">
	<div id="checkout_coupon" class="woocommerce_checkout_coupon">
		<?php do_action( 'ocean_woocommerce_checkout_coupon', $checkout ); ?>
	</div>

	<?php if ( $enable_login_reminder ) { ?>
		<div id="checkout_login" class="woocommerce_checkout_login">
			<?php do_action( 'ocean_checkout_login_form', $login_message ); ?>
		</div>
	<?php } ?>

	<?php
	// If checkout registration is disabled and not logged in, the user cannot checkout
	if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
		echo apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in before proceeding to checkout.', 'oceanwp' ) );
		return;
	} ?>

	<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">

		<?php if ( sizeof( $checkout->checkout_fields ) > 0 ) { ?>

			<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

			<div class="checkout_billing <?php echo $is_logged_in ? 'logged-in' : 'not-logged-in'; echo $enable_login_reminder ? ' show-login-reminder' : ' hide-login-reminder'; ?>" id="customer_billing_details">
				<?php do_action( 'woocommerce_checkout_billing' ); ?>
			</div>

			<div class="checkout_shipping" id="customer_shipping_details">
				<?php do_action( 'woocommerce_checkout_shipping' ); ?>
			</div>

			<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

		<?php } ?>

		<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

		<div id="order_review" class="woocommerce-checkout-review-order">
			<div id="order_info" class="woocommerce-checkout-review-order">
				<?php do_action( 'woocommerce_checkout_order_review' ); ?>
				<?php do_action( 'ocean_woocommerce_checkout_order_review' ); ?>
			</div>

			<div id="order_checkout_payment" class="owp-woocommerce-checkout-payment">
				<?php do_action( 'ocean_woocommerce_checkout_payment' ); ?>
			</div>
		</div>

		<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>

	</form>

	<div id="form_actions" data-step="<?php echo $show_login_step ? 0 : 1; ?>">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>"><i class="fa <?php echo esc_attr( $icon ); ?>"></i><?php esc_html_e( 'Back to cart', 'oceanwp' ); ?></a>

		<div class="buttons">
			<input type="button" class="button prev" name="checkout_prev_step" value="<?php esc_attr_e( 'Prev', 'oceanwp' ); ?>" data-action="prev">
			<input type="button" class="button next" name="checkout_next_step" value="<?php echo $enable_login_reminder && ! is_user_logged_in() ? esc_html_e( 'I don&rsquo;t have an account', 'oceanwp' ) : esc_html_e( 'Next', 'oceanwp' ); ?>" data-action="next">
		</div>
	</div>
</div>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
