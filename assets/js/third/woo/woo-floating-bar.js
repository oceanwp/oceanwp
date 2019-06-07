( function( $ ) {
    $( document ).scroll( function() {

        // Vars
		var $tabs  				= $( '.woocommerce div.product .woocommerce-tabs' ),
			$bottom  			= $tabs.offset().top,
			$bar 				= $( '.owp-floating-bar' ),
			$offset 			= 0,
			$adminBar 			= $( '#wpadminbar' ),
		    $hasStickyTopBar 	= $( '#top-bar-sticky-wrapper' ),
		    $stickyTopBar 		= $( '#top-bar-wrap' ),
		    $stickyHeader 		= $( '#site-header' );

		// Return if no tabs and from 960px
		if ( ! $tabs.length ) {
			return;
		}

	    // Offset adminbar
	    if ( $adminBar.length
	    	&& $( window ).width() > 600 ) {
			$offset = $offset + $adminBar.outerHeight();
		}

	    // Offset sticky topbar
	    if ( $hasStickyTopBar.length ) {
			$offset = $offset + $stickyTopBar.outerHeight();
		}

		// If header
		if ( $stickyHeader.length ) {

			// Offset header styles
			if ( $stickyHeader.hasClass( 'top-header' ) ) {
				$offset = $offset + $stickyHeader.find( '.header-top' ).outerHeight();
			} else if ( $stickyHeader.hasClass( 'medium-header' ) ) {
				if ( $( '#site-header .bottom-header-wrap' ).hasClass( 'fixed-scroll' ) ) {
					$offset = $offset + $stickyHeader.find( '.bottom-header-wrap' ).outerHeight();
				} else {
					$offset = $offset + $( '.is-sticky #site-header-inner' ).outerHeight();
				}
			} else if ( $stickyHeader.hasClass( 'center-header' )
					|| $stickyHeader.hasClass( 'custom-header' ) ) {
				$offset = $offset + $stickyHeader.outerHeight();
			} else if ( $stickyHeader.hasClass( 'vertical-header' ) ) {
				$offset = $offset;
			} else if ( $stickyHeader.hasClass( 'fixed-scroll' ) ) {
				$offset = $offset + $stickyHeader.data( 'height' );
			}

		}

		// Add offset to the $bottom variable
		$bottom = $bottom - $offset;

		// Offset
		$bar.css( 'top', $offset );

        // Display floating bar
        $( window ).scroll( function() {
            if ( $( this ).scrollTop() > $bottom ) {
                $bar.addClass( 'show' );
            } else {
                $bar.removeClass( 'show' );
            }
        } );

        // If variation or grouped product
        $( '.owp-floating-bar button.button.top' ).on( 'click', function( e ) {
        	e.preventDefault();

        	var $target = $( '.woocommerce div.product .cart' ),
        		$scrollPosition;
			
			if ( $target.length ) {
				$scrollPosition = $target.offset().top - $offset;

                $( 'html, body' ).stop().animate( {
					 scrollTop: Math.round( $scrollPosition )
				}, 1000 );
            }
		} );

    } );

	/**
	 * AddToCartHandler class.
	 */
	var owpFBAddToCartHandler = function() {
		$( document.body )
			.on( 'click', '.owp-floating-bar .floating_add_to_cart_button', this.onAddToCart )
			.on( 'added_to_cart', this.updateButton );
	};

	/**
	 * Handle the add to cart event.
	 */
	owpFBAddToCartHandler.prototype.onAddToCart = function( e ) {
		e.preventDefault();

		var button 					= $( this ),
			product_id 				= $( this ).val(),
			quantity 				= $('input[name="quantity"]').val();

		button.removeClass( 'added' );
		button.addClass( 'loading' );

		// Ajax action.
		$.ajax ({
			url: oceanwpLocalize.ajax_url,
			type:'POST',
			data:'action=oceanwp_add_cart_floating_bar&product_id=' + product_id + '&quantity=' + quantity,

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
	owpFBAddToCartHandler.prototype.updateButton = function( e, fragments, cart_hash, $button ) {
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
	 * Init owpFBAddToCartHandler.
	 */
	new owpFBAddToCartHandler();
})( jQuery );