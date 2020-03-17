jQuery( function( $ ) {

	if ( typeof oceanwpLocalize === 'undefined'
		|| $( '.woocommerce div.product' ).hasClass( 'product-type-grouped' ) ) {
		return false;
	}

	$.fn.serializeArrayAll = function () {

		var rCRLF = /\r?\n/g;
		return this.map(function () {
			return this.elements ? jQuery.makeArray(this.elements) : this;
		}).map(function (i, elem) {
			var val = jQuery(this).val();

			if (val == null) {
				return val == null

			//If checkbox is unchecked
			} else if (this.type == "checkbox" && this.checked == false) {
				return {name: this.name, value: this.checked ? this.value : ''}

			//default: all checkboxes = on
			} else {
				return jQuery.isArray(val) ?
						jQuery.map(val, function (val, i) {
							return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
						}) :
						{name: elem.name, value: val.replace(rCRLF, "\r\n")};
			}
		}).get();
	};

	/**
	 * AddToCartHandler class.
	 */
	var owpAddToCartHandler = function() {
		$( document.body )
			.on( 'click', '.product:not(.product-type-external) .single_add_to_cart_button:not(.disabled)', this.onAddToCart )
			.on( 'added_to_cart', this.updateButton );
	};

	/**
	 * Handle the add to cart event.
	 */
	owpAddToCartHandler.prototype.onAddToCart = function( e ) {
		e.preventDefault();

    	var button				= $(this),
            $form 				= button.closest('form.cart'),
            data 				= $form.find('input:not([name="product_id"]), select, button, textarea').serializeArrayAll() || 0;

		$.each(data, function (i, item) {
			if (item.name == 'add-to-cart') {
				item.name = 'product_id';
				item.value = $form.find('input[name=variation_id]').val() || button.val();
			}
		});

		$(document.body).trigger('adding_to_cart', [button, data]);

		button.removeClass( 'added' );
		button.addClass( 'loading' );

		// Ajax action.
		$.ajax ({
			url: woocommerce_params.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'),
			type: 'POST',
			data : data,

			success:function(results) {
				$( document.body ).trigger( 'wc_fragment_refresh' );
				$( document.body ).trigger( 'added_to_cart', [ results.fragments, results.cart_hash, button ] );

				// Redirect to cart option
				if ( oceanwpLocalize.cart_redirect_after_add === 'yes' ) {
					window.location = oceanwpLocalize.cart_url;
					return;
				}
			}
		});
	};

	/**
	 * Update cart page elements after add to cart events.
	 */
	owpAddToCartHandler.prototype.updateButton = function( e, fragments, cart_hash, $button ) {
		$button = typeof $button === 'undefined' ? false : $button;

		if ( $button ) {
			$button.removeClass( 'loading' );
			$button.addClass( 'added' );

			// View cart text.
			if ( ! oceanwpLocalize.is_cart && $button.parent().find( '.added_to_cart' ).length === 0 ) {
				$button.after( ' <a href="' + oceanwpLocalize.cart_url + '" class="added_to_cart wc-forward" title="' +
					oceanwpLocalize.view_cart + '">' + oceanwpLocalize.view_cart + '</a>' );
			}
		}
	};

	/**
	 * Init owpAddToCartHandler.
	 */
	new owpAddToCartHandler();
});