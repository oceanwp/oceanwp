wp.customize.controlConstructor['oceanwp-slider'] = wp.customize.Control.extend({

	ready: function() {

		'use strict';

		var control = this,
			desktop_slider 			= control.container.find( '.oceanwp-slider.desktop-slider' ),
			desktop_slider_input 	= desktop_slider.next( '.oceanwp-slider-input' ).find( 'input.desktop-input' ),
			tablet_slider 			= control.container.find( '.oceanwp-slider.tablet-slider' ),
			tablet_slider_input 	= tablet_slider.next( '.oceanwp-slider-input' ).find( 'input.tablet-input' ),
			mobile_slider 			= control.container.find( '.oceanwp-slider.mobile-slider' ),
			mobile_slider_input 	= mobile_slider.next( '.oceanwp-slider-input' ).find( 'input.mobile-input' ),
			slider_input,
			$this,
			val;

		// Desktop slider
		desktop_slider.slider( {
			range: 'min',
			value: desktop_slider_input.val(),
			min: +desktop_slider_input.attr( 'min' ),
			max: +desktop_slider_input.attr( 'max' ),
			step: +desktop_slider_input.attr( 'step' ),
			slide: function( event, ui ) {
				desktop_slider_input.val( ui.value ).keyup();
			},
	        change: function( event, ui ){
	            control.settings['desktop'].set( ui.value );
	        }
		} );

		// Tablet slider
		tablet_slider.slider( {
			range: 'min',
			value: tablet_slider_input.val(),
			min: +tablet_slider_input.attr( 'min' ),
			max: +tablet_slider_input.attr( 'max' ),
			step: +desktop_slider_input.attr( 'step' ),
			slide: function( event, ui ) {
				tablet_slider_input.val( ui.value ).keyup();
			},
	        change: function( event, ui ){ 
	            control.settings['tablet'].set( ui.value );
	        }
		} );

		// Mobile slider
		mobile_slider.slider( {
			range: 'min',
			value: mobile_slider_input.val(),
			min: +mobile_slider_input.attr( 'min' ),
			max: +mobile_slider_input.attr( 'max' ),
			step: +desktop_slider_input.attr( 'step' ),
			slide: function( event, ui ) {
				mobile_slider_input.val( ui.value ).keyup();
			},
	        change: function( event, ui ){ 
	            control.settings['mobile'].set( ui.value );
	        }
		} );

		// Update the slider when the number value change
		jQuery( 'input.desktop-input' ).on( 'change keyup paste', function() {
			$this 			= jQuery( this );
			val 			= $this.val();
			slider_input 	= $this.parent().prev( '.oceanwp-slider.desktop-slider' );

			slider_input.slider( 'value', val );
		} );

		jQuery( 'input.tablet-input' ).on( 'change keyup paste', function() {
			$this 			= jQuery( this );
			val 			= $this.val();
			slider_input 	= $this.parent().prev( '.oceanwp-slider.tablet-slider' );

			slider_input.slider( 'value', val );
		} );

		jQuery( 'input.mobile-input' ).on( 'change keyup paste', function() {
			$this 			= jQuery( this );
			val 			= $this.val();
			slider_input 	= $this.parent().prev( '.oceanwp-slider.mobile-slider' );

			slider_input.slider( 'value', val );
		} );

		// Save the values
		control.container.on( 'change keyup paste', '.desktop input', function() {
			control.settings['desktop'].set( jQuery( this ).val() );
		} );

		control.container.on( 'change keyup paste', '.tablet input', function() {
			control.settings['tablet'].set( jQuery( this ).val() );
		} );

		control.container.on( 'change keyup paste', '.mobile input', function() {
			control.settings['mobile'].set( jQuery( this ).val() );
		} );

	}

});