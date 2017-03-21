wp.customize.controlConstructor['oceanwp-textarea'] = wp.customize.Control.extend({

	ready: function() {

		'use strict';

		var control = this,
		    element = this.container.find( 'textarea' );

		// On change
		this.container.on( 'change keyup paste', 'textarea', function() {
			control.setting.set( jQuery( this ).val() );
		});

	}

});
