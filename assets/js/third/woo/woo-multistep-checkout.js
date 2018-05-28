var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
    // Woo multi-step checkout
    oceanwpWooMultiStepCheckout();
} );

/* ==============================================
WOOCOMMERCE MULTI-STEP CHECKOUT
============================================== */
function oceanwpWooMultiStepCheckout() {
	"use strict"

	var body 				= $j( 'body' ),
        login 				= $j( '#checkout_login' ),
        billing 			= $j( '#customer_billing_details' ),
        shipping 			= $j( '#customer_shipping_details' ),
        order 				= $j( '#order_review' ),
        payment 			= $j( '#order_checkout_payment' ),
        form_actions 		= $j( '#form_actions' ),
        coupon 				= $j( '#checkout_coupon' ),
        steps 				= new Array( login, billing, shipping, order, payment ),
        payment_method 		= function () {

            $j( '#place_order' ).on( 'click', function () {
                var $this 				= $j( '#order_checkout_payment' ).find( 'input[name=payment_method]:checked' ),
                    current_gateway 	= $this.val(),
                    order_button_text 	= $this.data( 'order_button_text' );

                order.find( 'input[name="payment_method"]' ).val( current_gateway ).data( 'order_button_text', order_button_text ).attr( 'checked', 'checked' );
            } );

        };

    body.on( 'updated_checkout', function( e ) {

        steps[4] = $j( '#order_checkout_payment' );
        if ( e.type == 'updated_checkout' ) {
            steps[4] = $j( '#order_checkout_payment' );
        }

        payment_method();

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
        var $this 			= $j( this ),
            timeline 		= $j( '#owp-checkout-timeline' ),
            action 			= $this.data( 'action' ),
            current_step 	= form_actions.data( 'step' ),
            next_step 		= current_step + 1,
            prev_step 		= current_step - 1,
            prev 			= form_actions.find( '.button.prev' ),
            next 			= form_actions.find( '.button.next' ),
            checkout_form 	= $j( 'form.woocommerce-checkout' ),
            is_logged_in    = oceanwpLocalize.is_logged_in,
            button_title;

        timeline.find( '.active' ).removeClass( 'active' );

        if ( action == 'next' ) {
            form_actions.data( 'step', next_step );
            steps[current_step].fadeOut( 120, function() {
                steps[next_step].fadeIn( 120 );
            } );

            $j( '#timeline-' + next_step ).toggleClass( 'active' );
        } else if ( action == 'prev' ) {
            form_actions.data( 'step', prev_step );
            steps[current_step].fadeOut( 120, function() {
                steps[prev_step].fadeIn( 120 );
            } );

            $j( '#timeline-' + prev_step ).toggleClass( 'active' );
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

    } );

















    /*form_actions.find( '.button.next' ).on( 'click', function() {
        return owpValidateCheckoutForm();
    } );

    $j( 'form.checkout .validate-required :input' ).attr( 'required', 'required' );

    body.on( 'change', '#billing_country', function() {
        if ( $j( '#billing_country' ).is( ':visible' ) ) {
            owpCheckPostCode( 'billing' );
        }
    } );

    body.on( 'blur', '#billing_postcode', function() {
        if ( $j( '#billing_postcode' ).is( ':visible' ) ) {
            owpCheckPostCode( 'billing' );
        }
    } );


    body.on( 'change', '#shipping_country', function() {
        if ( $j( '#shipping_country' ).is( ':visible' ) ) {
            owpCheckPostCode( 'shipping' );
        }
    } );

    body.on( 'blur', '#shipping_postcode', function() {
        if ( $j( '#shipping_postcode' ).is( ':visible' ) ) {
            owpCheckPostCode( 'shipping' );
        }
    } );

    /**
     * Check post code class.
     */
    /*var owpCheckPostCode = function( type ) {

        var result = $j( '.form-row#' + type + '_postcode_field' ).length > 0 && $j( '#' + type + '_postcode' ).val() != false
                && $j( '#' + type + '_country' ).length > 0 && $j( '#' + type + '_country' ).val() != false;

        if ( result ) {

            var data = {
                action: 'oceanwp_valid_postcode',
                country: $j( '#' + type + '_country' ).val(),
                postCode: $j( '#' + type + '_postcode' ).val()
            };

            $j.post( oceanwpLocalize.ajax_url, data, function( response ) {
                if ( response == false ) {
                    $j( '#' + type + '_postcode' ).parent().removeClass( 'woocommerce-validated' ).addClass( 'woocommerce-invalid woocommerce-invalid-required-field' );
                    return false;
                } else {
                    return true;
                }
            } );

        }

    };*/

    /**
     * Validate checkout form.
     */
    /*var owpValidateCheckoutForm = function() {

        // True by default
        //var form_valid = true;
        var form_valid;

        if ( $j( '#billing_state_field' ).is( ':visible' ) ) {

            if ( $j( '#billing_state' ).is( ['required'] ) ) {

                if ( $j.trim( $j( '#billing_state' ).val() ) == '' ) {

                    $j( '#s2id_billing_state' ).addClass( 'invalid-state' );

                    if ( ! $j( '#billing_state_field' ).has( '.error-class' ).length ) {

                        if ( ! $j( '#billing_state_field' ).has( 'label.error' ).length
                            && ! $j( '#billing_state_field label.error' ).is( ':visible' ) ) {
                            $j( '#billing_state_field' ).append( '<label class="error-class">' + oceanwpLocalize.error_msg + '</label>' );
                        }

                    }

                    form_valid = false;

                } else {

                    $j( '#billing_state_field' ).find( 'label.error-class' ).remove();
                    $j( '#s2id_billing_state' ).removeClass( 'invalid-state' );

                }
            }

        }

        if ( $j( '#billing_state_field' ).is( ':visible' ) ) {

            if ( $j( '#billing_state' ).is( ['required'] ) ) {

                if ( ! $j( '#billing_state_field' ).hasClass( 'woocommerce-validated' ) ) {

                    if ( ! $j( '#billing_state_field' ).has( 'label.error-class' ).length ) {

                        $j( '#s2id_billing_state' ).addClass( 'invalid-state' );
                        $j( '#billing_state_field' ).append( '<label class="error-class">' + oceanwpLocalize.error_msg + '</label>' );
                    }

                    form_valid = false;

                } else {

                    $j( '#billing_state_field' ).find( 'label.error-class' ).remove();
                    $j( '#s2id_billing_state' ).removeClass( 'invalid-state' );

                }

            }

        }

        if ( $j( '#shipping_state_field' ).is( ':visible' ) ) {

            if ( $j( '#shipping_state' ).is( ['required'] ) ) {

                if ( ! $j( '#shipping_state_field' ).hasClass( 'woocommerce-validated' ) ) {

                    if ( ! $j( '#shipping_state_field' ).has( 'label.error-class' ).length ) {

                        $j( '#s2id_shipping_state' ).addClass( 'invalid-state' );
                        $j( '#shipping_state_field' ).append( '<label class="error-class">' + oceanwpLocalize.error_msg + '</label>' );

                    }

                    form_valid = false;

                } else {

                    $j( '#shipping_state_field' ).find( 'label.error-class' ).remove();
                    $j( '#s2id_shipping_state' ).removeClass( 'invalid-state' );

                }

            }

        }

        if ( $j( '#shipping_state_field' ).is( ':visible' ) ) {

            if ( $j( '#shipping_state' ).is( ['required'] ) ) {

                if ( $j.trim( $j( '#shipping_state' ).val() ) == '' ) {

                    $j( '#s2id_shipping_state' ).addClass( 'invalid-state' );

                    if ( ! $j( '#shipping_state_field' ).has( 'label.error' ).length
                        && ! $j( '#shipping_state_field label.error' ).is( ':visible' ) ) {
                        $j( '#shipping_state_field' ).append( '<label class="error-class">' + oceanwpLocalize.error_msg + '</label>' );
                    }

                    form_valid = false;

                }

            } else {

                $j( '#shipping_state_field' ).find( 'label.error-class' ).remove();
                $j( '#s2id_shipping_state' ).removeClass( 'invalid-state' );

            }

        }

        if ( $j( '#billing_postcode' ).closest( '#billing_postcode_field' ).hasClass( 'woocommerce-invalid' ) ) {
            form_valid = false;
        }

        // Validate billing phone
        if ( $j( '#billing_phone' ).length ) {
            var phone = $j( '#billing_phone' ).val();
                phone = phone.replace( /[\s\#0-9_\-\+\(\)]/g, '' );
                phone = $j.trim( phone );

            if ( phone.length > 0 ) {
                form_valid = false;

                $j( '#billing_phone_field' ).removeClass( 'woocommerce-validated' ).addClass( 'woocommerce-invalid woocommerce-invalid-required-field' );

                if ( ! $j( '#billing_phone_field' ).has( 'label.error-class' ).length ) {
                    $j( '#billing_phone_field' ).append( '<label class="error-class">invalid phone number</label>' );
                }
            }
        }

        if ( $j( '#ship-to-different-address-checkbox' ).is( ':checked' )
            && $j( '#ship-to-different-address-checkbox' ).is( ':visible' ) ) {

            if ( ! $j( '#shipping_postcode' ).closest( '#shipping_postcode_field' ).hasClass( 'woocommerce-validated' ) ) {
                form_valid = false;
            }

        }

        // Validate terms and conditions
        if ( ! owpValidateTerms() ) {
            form_valid = false;
        }
        
        return form_valid;

    };*/

    /**
     * Validate terms & conditions.
     */
    /*var owpValidateTerms = function() {

        // True by default
        var validate_form = true;

        if ( $j( 'input[name="legal"]' ).length
            && $j( 'input[name="legal"]' ).is( ':visible' ) ) {

            if ( $j( 'input[name="legal"]' ).is( ':checked' ) ) {

                $j( 'input[name="legal"]' ).parent().removeAttr( 'style' );
                $j( '.terms-error' ).remove();

                validate_form = true;

            } else {

                $j( 'input[name="legal"]' ).attr( 'required', 'required' );
                $j( '.terms' ).css( 'border', '1px solid #8a1f11' );

                if ( ! $j( '.terms-error' ).length ) {
                    $j( '<p class="terms-error">' + oceanwpLocalize.terms_error + '</p>' ).insertAfter( '.wc-terms-and-conditions' );
                }

                validate_form = false;
            }

        }

        if ( $j( 'input[name="terms"]' ).length
            && $j( 'input[name="terms"]' ).is( ':visible' ) ) {

            if ( $j( 'input[name="terms"]' ).is( ':checked' ) ) {

                $j( 'input[name="terms"]' ).parent().removeAttr( 'style' );
                $j( '.terms-error' ).remove();

                validate_form = true;

            } else {

                $j( 'input[name="terms"]' ).attr( 'required', 'required' );
                $j( 'input[name="terms"]' ).parent().css( 'border', '1px solid #8a1f11' );

                if ( ! $j( '.terms-error' ).length ) {
                    $j( '<p class="terms-error">' + oceanwpLocalize.terms_error + '</p>' ).insertAfter( '.wc-terms-and-conditions' );
                }

                validate_form = false;

            }

        }

        return validate_form;

    };*/

}