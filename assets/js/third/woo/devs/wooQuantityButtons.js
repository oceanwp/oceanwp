var $j = jQuery.noConflict();

$j( window ).on( 'load', function() {
	"use strict";
	// Woo quantity buttons
	oceanwpWooQuantityButtons();
} );

$j( document ).ajaxComplete( function() {
	"use strict";
	// Woo quantity buttons
	oceanwpWooQuantityButtons();
} );

/* ==============================================
WOOCOMMERCE QUANTITY BUTTONS
============================================== */
function oceanwpWooQuantityButtons( $quantitySelector ) {

	var $quantityBoxes
		$cart = $j( '.woocommerce div.product form.cart' );

	if ( ! $quantitySelector ) {
		$quantitySelector = '.qty';
	}

	$quantityBoxes = $j( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).find( $quantitySelector );

	if ( $quantityBoxes && 'date' !== $quantityBoxes.prop( 'type' ) && 'hidden' !== $quantityBoxes.prop( 'type' ) ) {

		// Add plus and minus icons
		$quantityBoxes.parent().addClass( 'buttons_added' ).prepend('<a href="javascript:void(0)" class="minus">-</a>');
        $quantityBoxes.after('<a href="javascript:void(0)" class="plus">+</a>');

		// Target quantity inputs on product pages
		$j( 'input' + $quantitySelector + ':not(.product-quantity input' + $quantitySelector + ')' ).each( function() {
			var $min = parseFloat( $j( this ).attr( 'min' ) );

			if ( $min && $min > 0 && parseFloat( $j( this ).val() ) < $min ) {
				$j( this ).val( $min );
			}
		});

		// Quantity input
		if ( $j( 'body' ).hasClass( 'single-product' )
			&& 'on' == oceanwpLocalize.floating_bar
			&& ! $cart.hasClass( 'grouped_form' ) ) {
			var $quantityInput = $j( '.woocommerce form input[type=number].qty' );
			$quantityInput.on( 'keyup', function() { 
				var qty_val = $j( this ).val();
				$quantityInput.val( qty_val ); 
			});
		}

		$j( '.plus, .minus' ).unbind( 'click' );

		$j( '.plus, .minus' ).on( 'click', function() {

			// Quantity
			var $quantityBox;

			// If floating bar is enabled
			if ( $j( 'body' ).hasClass( 'single-product' )
				&& 'on' == oceanwpLocalize.floating_bar
				&& ! $cart.hasClass( 'grouped_form' )
				&& ! $cart.hasClass( 'cart_group' ) ) {
				$quantityBox = $j( '.plus, .minus' ).closest( '.quantity' ).find( $quantitySelector );
			} else {
				$quantityBox = $j( this ).closest( '.quantity' ).find( $quantitySelector );
			}

			// Get values
			var $currentQuantity = parseFloat( $quantityBox.val() ),
			    $maxQuantity     = parseFloat( $quantityBox.attr( 'max' ) ),
			    $minQuantity     = parseFloat( $quantityBox.attr( 'min' ) ),
			    $step            = $quantityBox.attr( 'step' );

			// Fallback default values
			if ( ! $currentQuantity || '' === $currentQuantity  || 'NaN' === $currentQuantity ) {
				$currentQuantity = 0;
			}
			if ( '' === $maxQuantity || 'NaN' === $maxQuantity ) {
				$maxQuantity = '';
			}

			if ( '' === $minQuantity || 'NaN' === $minQuantity ) {
				$minQuantity = 0;
			}
			if ( 'any' === $step || '' === $step  || undefined === $step || 'NaN' === parseFloat( $step )  ) {
				$step = 1;
			}

			// Change the value
			if ( $j( this ).is( '.plus' ) ) {

				if ( $maxQuantity && ( $maxQuantity == $currentQuantity || $currentQuantity > $maxQuantity ) ) {
					$quantityBox.val( $maxQuantity );
				} else {
					$quantityBox.val( $currentQuantity + parseFloat( $step ) );
				}

			} else {

				if ( $minQuantity && ( $minQuantity == $currentQuantity || $currentQuantity < $minQuantity ) ) {
					$quantityBox.val( $minQuantity );
				} else if ( $currentQuantity > 0 ) {
					$quantityBox.val( $currentQuantity - parseFloat( $step ) );
				}

			}

			// Trigger change event
			$quantityBox.trigger( 'change' );
			
		} );
	}
}