var $j = jQuery.noConflict();

$j(document).ready(function(){
    "use strict";
    // Woo multi-step checkout
    oceanwpWooMultiStepCheckout();
} );

/* ==============================================
WOOCOMMERCE MULTI-STEP CHECKOUT
============================================== */
function oceanwpWooMultiStepCheckout() {
    "use strict"

    var body                = $j( 'body' ),
        login               = $j( '#checkout_login' ),
        billing             = $j( '#customer_billing_details' ),
        shipping            = $j( '#customer_shipping_details' ),
        order               = $j( '#order_review' ),
        payment             = $j( '#order_checkout_payment' ),
        form_actions        = $j( '#form_actions' ),
        coupon              = $j( '#checkout_coupon' ),
        steps               = new Array( login, billing, shipping, order, payment );

    body.on( 'updated_checkout', function( e ) {

        steps[4] = $j( '#order_checkout_payment' );
        if ( e.type == 'updated_checkout' ) {
            steps[4] = $j( '#order_checkout_payment' );
        }

        $j( '#order_checkout_payment' ).find( 'input[name=payment_method]' ).on( 'click', function() {

            if ( $j( '.payment_methods input.input-radio' ).length > 1 ) {
                var target_payment_box = $j( 'div.payment_box.' + $j( this ).attr( 'ID' ) );

                if ( $j( this ).is( ':checked' ) && ! target_payment_box.is( ':visible' ) ) {
                    $j( 'div.payment_box' ).filter( ':visible' ).slideUp( 250 );

                    if ( $j( this ).is( ':checked' ) ) {
                        $j( 'div.payment_box.' + $j( this ).attr( 'ID' )).slideDown( 250 );
                    }
                }
            } else {
                $j( 'div.payment_box' ).show();
            }

            if ( $j( this ).data( 'order_button_text' )) {
                $j( '#place_order' ).val( $j( this ).data( 'order_button_text' ) );
            } else {
                $j( '#place_order' ).val( $j( '#place_order' ).data( 'value' ) );
            }
        } );

    } );

    form_actions.find( '.button.prev' ).add( '.button.next' ).on( 'click', function( e ) {
        var $this           = $j( this ),
            timeline        = $j( '#owp-checkout-timeline' ),
            action          = $this.data( 'action' ),
            current_step    = form_actions.data( 'step' ),
            next_step       = current_step + 1,
            prev_step       = current_step - 1,
            prev            = form_actions.find( '.button.prev' ),
            next            = form_actions.find( '.button.next' ),
            checkout_form   = $j( 'form.woocommerce-checkout' ),
            is_logged_in    = oceanwpLocalize.is_logged_in,
            button_title;

        timeline.find( '.active' ).removeClass( 'active' );

            if ( action == 'next' ) {

                var inputField   = $j( '#customer_billing_details p.validate-required input, #customer_billing_details p.validate-required select' );

                inputField.filter(function() {

                    if ( '' == $j( this ).val() ) {
                        $j( this ).css(
                            'border-color', '#ff0000'
                        );
                    } else {
                        $j( this ).css(
                            'border-color', ''
                        );
                    }
                });

                if ( 0 === inputField.filter(function() {
                        return ! this.value;
                    }).length ) {

                    form_actions.data( 'step', next_step );

                    steps[current_step].fadeOut( 120, function() {
                        steps[next_step].fadeIn( 120 );
                    } );

                    $j( '#timeline-' + next_step ).toggleClass( 'active' );

                    $j( checkout_form ).find( '.ocean-multistep-error-notice' ).remove();

                } else if ( current_step == 0 && is_logged_in == false ) {

                    form_actions.data( 'step', next_step );

                    steps[current_step].fadeOut( 120, function() {
                        steps[next_step].fadeIn( 120 );
                    } );

                    $j( '#timeline-' + next_step ).toggleClass( 'active' );

                    $j( checkout_form ).find( '.ocean-multistep-error-notice' ).remove();

                } else {

                    $j(window).scrollTop( $j( '#content-wrap' ).offset().top );


                    if ( 0 === $j( checkout_form ).find( '.ocean-multistep-error-notice' ).length ) {
                        $j( checkout_form ).prepend( '<div class="ocean-multistep-error-notice"><ul class="woocommerce-error" role="alert"></ul></div>' );
                        $j( '.ocean-multistep-error-notice' ).html( '<ul class="woocommerce-error" role="alert">' );
                        $j( '.woocommerce-error' ).prepend( '<li >' + oceanwpLocalize.multistep_checkout_error + '</li>' );
                    }

                    $j( '#timeline-' + current_step ).addClass( 'active' );
                }

            } else if ( action == 'prev' ) {
                form_actions.data( 'step', prev_step );
                steps[current_step].fadeOut( 120, function() {
                    steps[prev_step].fadeIn( 120 );
                } );

                $j( '#timeline-' + prev_step ).toggleClass( 'active' );

                $j( checkout_form ).find( '.ocean-multistep-error-notice' ).remove();
            }

            current_step = form_actions.data( 'step' );

            if ( ( current_step == 1
                    && is_logged_in == true ) ||
                ( is_logged_in == false
                    && ( ( current_step == 0
                        && oceanwpLocalize.login_reminder_enabled == 1 )
                    ||  ( current_step == 1
                        && oceanwpLocalize.login_reminder_enabled == 0 ) ) ) ) {
                prev.fadeOut( 120 );
            } else {
                prev.fadeIn( 120 );
            }

            // Next title
            if ( is_logged_in == false
                && ( ( current_step == 0
                        && oceanwpLocalize.login_reminder_enabled == 1 )
                    ||  ( current_step == 1
                        && oceanwpLocalize.login_reminder_enabled == 0 ) )  ) {
                next.val( oceanwpLocalize.no_account_btn );
            } else {
                next.val( oceanwpLocalize.next );
            }

            // Last step
            if ( current_step == 3 ) {
                checkout_form.removeClass( 'processing' );
                coupon.fadeIn( 80 );
                next.fadeOut( 120 );
            } else {
                checkout_form.addClass( 'processing' );
                coupon.fadeOut( 80 );
                next.fadeIn( 120 );
            }

    });

}