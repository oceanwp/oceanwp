var $j = jQuery.noConflict();

$j( document ).ready( function() {

	// Wishlist button
	if ( $j( '.woocommerce ul.products li.product .woo-entry-buttons li.woo-wishlist-btn' ).length ) {

		$j( document ).on( 'click', '.tinvwl_add_to_wishlist_button', function() {
			var $this = $j( this );

			$this.parent().parent().addClass( 'loading' );

			window.setTimeout( function() {
				$this.parent().parent().removeClass( 'loading' );
			}, 1000 );

		} );

	}

	// Thumbnails
	$j( document ).on( 'click', '.woo-product-gallery a.woo-product-gallery-link', function( e ) {
        e.preventDefault();

        var $this 		= $j( this ),
            $img 		= $this.attr( 'href' ),
            $main_img 	= $this.closest( '.product-inner' ).find( '.woo-entry-image-main' );

        if ( $main_img ) {
            $main_img.parent().addClass( 'loading' );
            $main_img.attr( 'src', $img ).attr( 'srcset', $img );

            $main_img.css( {
                '-webkit-transform': 'scale(0.5)',
                '-moz-transform': 'scale(0.5)',
                '-ms-transform': 'scale(0.5)',
                '-o-transform': 'scale(0.5)',
                'transform': 'scale(0.5)',
                'opacity': '0',
                '-webkit-transition': 'all 0.3s ease',
                '-moz-transition': 'all 0.3s ease',
                '-ms-transition': 'all 0.3s ease',
                '-o-transition': 'all 0.3s ease',
                'transition': 'all 0.3s ease',
            } ).load( function() {
                var $image = $j( this );

                setTimeout( function() {
                    $image.css( {
                        '-webkit-transform': 'scale(1)',
                        '-moz-transform': 'scale(1)',
                        '-ms-transform': 'scale(1)',
                        '-o-transform': 'scale(1)',
                        'transform': 'scale(1)',
                        'opacity': '1',
                        '-webkit-transition': 'all 0.3s ease',
                        '-moz-transition': 'all 0.3s ease',
                        '-ms-transition': 'all 0.3s ease',
                        '-o-transition': 'all 0.3s ease',
                        'transition': 'all 0.3s ease',
                    } );

                    $image.parent().removeClass( 'loading' );

                }, 300 );
            } );

            $j( this ).parent().addClass( 'active' ).siblings().removeClass( 'active' );
        }
    } );
});