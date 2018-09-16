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
            button_title,
            valid           = false,
            current_step_item = steps[current_step],
            selector        = current_step_item.selector,
            posted_data     = {},
            type            = '',
            $offset         = 30,
            $adminBar       = $j( '#wpadminbar' ),
            $stickyTopBar   = $j( '#top-bar-wrap' ),
            $stickyHeader   = $j( '#site-header' );

        // Offset adminbar
        if ( $adminBar.length
            && $j( window ).width() > 600 ) {
            $offset = $offset + $adminBar.outerHeight();
        }

        // Offset sticky topbar
        if ( true == oceanwpLocalize.hasStickyTopBar ) {
            $offset = $offset + $stickyTopBar.outerHeight();
        }

        // Offset sticky header
        if ( $j( '#site-header' ).hasClass( 'fixed-scroll' )
            && ! $j( '#site-header' ).hasClass( 'vertical-header' ) ) {
            $offset = $offset + $stickyHeader.outerHeight();
        }

        $j( 'form.woocommerce-checkout .woocommerce-NoticeGroup.woocommerce-NoticeGroup-checkout' ).remove();

        type = (selector.indexOf( 'billing' ) >= 0) ? 'billing' : type;
        type = (selector.indexOf( 'shipping' ) >= 0) ? 'shipping' : type;

        if ( type == 'billing' || type == 'shipping' ) {

            $j( selector ).find( '.validate-required input' ).each( function() {
                posted_data[ $j( this ).attr( 'name' ) ] = $j( this ).val();
            } );

            $j( selector ).find( '.validate-required select' ).each( function() {
                posted_data[ $j( this ).attr( 'name' ) ] = $j( this ).val();
            } );

            $j( selector ).find( '.input-checkbox' ).each( function() {
                if ( $j( this ).is( ':checked' ) ) {
                    posted_data[ $j( this ).attr( 'name' ) ] = $j( this ).val();
                }
            } );

            var data = {
                action: 'oceanwp_validate_checkout',
                type: type,
                posted_data: posted_data
            };

            $j.ajax( {
                type: 'POST',
                url: oceanwpLocalize.ajax_url,
                data: data,
                async: false,
                success: function( response ) {
                    valid = response.valid;

                    if ( ! response.valid ) {
                        $j( 'form.woocommerce-checkout' ).prepend( response.html );
                        $j( 'html, body' ).animate( {
                            scrollTop: $j( 'form.woocommerce-checkout' ).offset().top - $offset },
                        'slow' );
                    }
                },
                complete: function() {}
            } );

        } else {
            valid = true;
        }

        if ( valid ) {

            timeline.find( '.active' ).removeClass( 'active' );

            if ( action == 'next' ) {
                form_actions.data( 'step', next_step );
                steps[current_step].fadeOut( 120, function() {
                    steps[next_step].fadeIn( 120 );
                } );

                $j( '#timeline-' + next_step ).toggleClass( 'active' );
                $j( 'html, body' ).animate( {
                    scrollTop: $j( '#owp-checkout-timeline' ).offset().top - $offset },
                'slow' );
            } else if ( action == 'prev' ) {
                form_actions.data( 'step', prev_step );
                steps[current_step].fadeOut( 120, function() {
                    steps[prev_step].fadeIn( 120 );
                } );

                $j( '#timeline-' + prev_step ).toggleClass( 'active' );
                $j( 'html, body' ).animate( {
                    scrollTop: $j( '#owp-checkout-timeline' ).offset().top - $offset },
                'slow' );
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

        }

    } );

}