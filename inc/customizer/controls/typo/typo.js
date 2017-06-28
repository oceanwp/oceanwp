wp.customize.controlConstructor['oceanwp-typo'] = wp.customize.Control.extend({

	// When we're finished loading continue processing.
	ready: function() {

		'use strict';

		var control = this,
		    element = this.container.find( 'select' );

		jQuery( element ).select2( {
            minimumResultsForSearch: 10,
            dropdownCssClass: 'oceanwp-select2',
            width: '100%'
        } );

		control.container.on( 'change', '.typography-font-family select',
			function() {
				control.settings['family'].set( jQuery( this ).val() );
			}
		);

		control.container.on( 'change', '.typography-font-size input',
			function() {
				control.settings['size'].set( jQuery( this ).val() );
			}
		);

		control.container.on( 'change', '.typography-font-weight select',
			function() {
				control.settings['weight'].set( jQuery( this ).val() );
			}
		);

		control.container.on( 'change', '.typography-font-style select',
			function() {
				control.settings['style'].set( jQuery( this ).val() );
			}
		);

		control.container.on( 'change', '.typography-text-transform select',
			function() {
				control.settings['transform'].set( jQuery( this ).val() );
			}
		);

		control.container.on( 'change', '.typography-line-height input',
			function() {
				control.settings['line_height'].set( jQuery( this ).val() );
			}
		);

		control.container.on( 'change', '.typography-letter-spacing input',
			function() {
				control.settings['spacing'].set( jQuery( this ).val() );
			}
		);

	}

});