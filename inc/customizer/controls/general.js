jQuery(document).on('oceanready', function() {
	var $ = jQuery;
	// Responsive switchers
	$( '.customize-control .responsive-switchers button:not(.ocean-proccessed)' ).on( 'click', function( event ) {

		$(this).addClass('ocean-proccessed');
		// Set up variables
		var $this 		= $( this ),
			$devices 	= $( '.responsive-switchers' ),
			$device 	= $( event.currentTarget ).data( 'device' ),
			$control 	= $( '.customize-control.has-switchers' ),
			$body 		= $( '.wp-full-overlay' ),
			$footer_devices = $( '.wp-full-overlay-footer .devices' );

		// Button class
		$devices.find( 'button' ).removeClass( 'active' );
		$devices.find( 'button.preview-' + $device ).addClass( 'active' );

		// Control class
		$control.find( '.control-wrap' ).removeClass( 'active' );
		$control.find( '.control-wrap.' + $device ).addClass( 'active' );
		$control.removeClass( 'control-device-desktop control-device-tablet control-device-mobile' ).addClass( 'control-device-' + $device );

		// Wrapper class
		$body.removeClass( 'preview-desktop preview-tablet preview-mobile' ).addClass( 'preview-' + $device );

		// Panel footer buttons
		$footer_devices.find( 'button' ).removeClass( 'active' ).attr( 'aria-pressed', false );
		$footer_devices.find( 'button.preview-' + $device ).addClass( 'active' ).attr( 'aria-pressed', true );

		// Open switchers
		if ( $this.hasClass( 'preview-desktop' ) ) {
			$control.toggleClass( 'responsive-switchers-open' );
		}

	} );

	// If panel footer buttons clicked
	$( '.wp-full-overlay-footer .devices button:not(.ocean-proccessed)' ).on( 'click', function( event ) {

		$(this).addClass('ocean-proccessed');
		// Set up variables
		var $this 		= $( this ),
			$devices 	= $( '.customize-control.has-switchers .responsive-switchers' ),
			$device 	= $( event.currentTarget ).data( 'device' ),
			$control 	= $( '.customize-control.has-switchers' );

		// Button class
		$devices.find( 'button' ).removeClass( 'active' );
		$devices.find( 'button.preview-' + $device ).addClass( 'active' );

		// Control class
		$control.find( '.control-wrap' ).removeClass( 'active' );
		$control.find( '.control-wrap.' + $device ).addClass( 'active' );
		$control.removeClass( 'control-device-desktop control-device-tablet control-device-mobile' ).addClass( 'control-device-' + $device );

		// Open switchers
		if ( ! $this.hasClass( 'preview-desktop' ) ) {
			$control.addClass( 'responsive-switchers-open' );
		} else {
			$control.removeClass( 'responsive-switchers-open' );
		}

	} );

} );