wp.customize.controlConstructor['oceanwp-dimensions'] = wp.customize.Control.extend({

	ready: function() {

		'use strict';

		var control = this;

		control.container.on( 'change keyup paste', '.dimension-top', function() {
			control.settings['top'].set( jQuery( this ).val() );
		} );

		control.container.on( 'change keyup paste', '.dimension-right', function() {
			control.settings['right'].set( jQuery( this ).val() );
		} );

		control.container.on( 'change keyup paste', '.dimension-bottom', function() {
			control.settings['bottom'].set( jQuery( this ).val() );
		} );

		control.container.on( 'change keyup paste', '.dimension-left', function() {
			control.settings['left'].set( jQuery( this ).val() );
		} );
	}

});

jQuery( document ).ready( function($) {

	$( '.oceanwp-linked' ).on( 'click', function() {
		
		// Set up variables
		var $this = $( this );
		
		// Remove linked class
		$this.parent().parent( '.dimension-wrap' ).prevAll().slice(0,4).find( 'input' ).removeClass( 'linked' ).attr( 'data-element', '' );
		
		// Remove class
		$this.parent( '.link-dimensions' ).removeClass( 'unlinked' );

	} );
	
	$( '.oceanwp-unlinked' ).on( 'click', function() {

		// Set up variables
		var $this 		= $( this ),
			$element 	= $this.data( 'element' );
		
		// Add linked class
		$this.parent().parent( '.dimension-wrap' ).prevAll().slice(0,4).find( 'input' ).addClass( 'linked' ).attr( 'data-element', $element );
		
		// Add class
		$this.parent( '.link-dimensions' ).addClass( 'unlinked' );

	} );
	
	$( '.dimension-wrap' ).on( 'input', '.linked', function() {

		var $data 	= $( this ).attr( 'data-element' ),
			$val 	= $( this ).val();

		$( '.linked[ data-element="' + $data + '" ]' ).each( function( key, value ) {
			$( this ).val( $val ).change();
		} );

	} );

} );