var $j = jQuery.noConflict();

$j( document ).ready( function() {

	if ( typeof oceanwpLocalize === 'undefined' ) {
		return false;
	}

	// Vars
	var qv_modal 		= $j( '#owp-qv-wrap' ),
		qv_content 		= $j( '#owp-qv-content' );

	/**
	 * Open quick view.
	 */
	$j( document ).on( 'click', '.owp-quick-view', function( e ) {
		e.preventDefault();

		var $this 		= $j( this ),
			product_id  = $j( this ).data( 'product_id' );

		$this.parent().addClass( 'loading' );

		$j.ajax( {
			url: oceanwpLocalize.ajax_url,
			data: {
				action : 'oceanwp_product_quick_view',
				product_id : product_id
			},
			success: function( results ) {

				var innerWidth = $j( 'html' ).innerWidth();
				$j( 'html' ).css( 'overflow', 'hidden' );
				var hiddenInnerWidth = $j( 'html' ).innerWidth();
				$j( 'html' ).css( 'margin-right', hiddenInnerWidth - innerWidth );
				$j( 'html' ).addClass( 'owp-qv-open' );

				qv_content.html( results );

				// Display modal
				qv_modal.fadeIn();
				qv_modal.addClass( 'is-visible' );

				// Variation Form
				var form_variation = qv_content.find( '.variations_form' );

				form_variation.trigger( 'check_variations' );
				form_variation.trigger( 'reset_image' );

				var var_form = qv_content.find( '.variations_form' );

				if ( var_form.length > 0 ) {
					var_form.wc_variation_form();
					var_form.find( 'select' ).change();
				}

  				var image_slider_wrap = qv_content.find( '.owp-qv-image' );

  				if ( image_slider_wrap.find( 'li' ).length > 1 ) {
	  				image_slider_wrap.flexslider();
  				}

  				// If grouped product
  				var grouped = qv_content.find( 'form.grouped_form' );
  				if ( grouped ) {
  					var grouped_product_url = qv_content.find( 'form.grouped_form' ).attr( 'action' );
					grouped.find( '.group_table, button.single_add_to_cart_button' ).hide();
					grouped.append( ' <a href="' + grouped_product_url + '" class="button">' + oceanwpLocalize.grouped_text + '</a>' );
				}

			}

		} ).done( function() {
			$this.parent().removeClass( 'loading' );
		} );

	} );

	/**
	 * Close quick view function.
	 */
	var owpCloseQuickView = function() {
		$j( 'html' ).css( {
			'overflow': '',
			'margin-right': ''
		} );
		$j( 'html' ).removeClass( 'owp-qv-open' );

		qv_modal.fadeOut();
		qv_modal.removeClass( 'is-visible' );

		setTimeout( function() {
			qv_content.html( '' );
		}, 600);
	};

	/**
	 * Close quick view.
	 */
	$j( '.owp-qv-overlay, .owp-qv-close' ).on( 'click', function( e ) {
		e.preventDefault();
		owpCloseQuickView();
	} );

	/**
	 * Check if user has pressed 'Esc'.
	 */
	$j( document ).keyup( function( e ) {
    	if ( e.keyCode == 27 ) {
			owpCloseQuickView();
		}
	} );

	$j.fn.serializeArrayAll = function () {

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
	var owpQVAddToCartHandler = function() {
		$j( document.body )
			.on( 'click', '#owp-qv-content .product:not(.product-type-external) .single_add_to_cart_button', this.onAddToCart )
			.on( 'added_to_cart', this.updateButton );
	};

	/**
	 * Handle the add to cart event.
	 */
	owpQVAddToCartHandler.prototype.onAddToCart = function( e ) {
		e.preventDefault();

		var button 				= $j( this ),
			$form 				= button.closest('form.cart'),
			data 				= $form.find('input:not([name="product_id"]), select, button, textarea').serializeArrayAll() || 0;

		$j.each(data, function (i, item) {
			if (item.name == 'add-to-cart') {
				item.name = 'product_id';
				item.value = $form.find('input[name=variation_id]').val() || button.val();
			}
		});

		$j(document.body).trigger('adding_to_cart', [button, data]);

		button.removeClass( 'added' );
		button.addClass( 'loading' );

		// Ajax action.
		$j.ajax ({
			url: woocommerce_params.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'),
			type: 'POST',
			data : data,

			success:function(results) {
				$j( document.body ).trigger( 'wc_fragment_refresh' );
				$j( document.body ).trigger( 'added_to_cart', [ results.fragments, results.cart_hash, button ] );

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
	owpQVAddToCartHandler.prototype.updateButton = function( e, fragments, cart_hash, $button ) {
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
	new owpQVAddToCartHandler();
});