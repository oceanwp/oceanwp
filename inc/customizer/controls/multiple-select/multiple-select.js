wp.customize.controlConstructor['oceanwp-multiple-select'] = wp.customize.Control.extend({

	// When we're finished loading continue processing.
	ready: function() {

		'use strict';

		var control  = this,
		    element  = this.container.find( 'select' ),
		    selectValue,
		    select2Options = {
				escapeMarkup: function( markup ) {
					return markup;
				}
		    };

		jQuery( element ).select2( select2Options ).on( 'change', function() {
			selectValue = jQuery( this ).val();
			control.setting.set( selectValue );
			if ( null === selectValue ) {
				control.setting.set( '' );
			} else {
				control.setting.set( selectValue );
			}
		});

	}

});