jQuery( document ).on( 'ready', function (e) {
    "use strict";

    var controls = {};
    var sections = {};
    Object.keys(_wpCustomizeSettings.controls).map(function( i ) {
        let section = _wpCustomizeSettings.controls[ i ]['section'];
        if ( typeof sections [ section ] === 'undefined' ) {
            sections [ section ] = true;
            return true;
        }

        controls[ i ] = _wpCustomizeSettings.controls[ i ];
        delete _wpCustomizeSettings.controls[ i ];
    })


    wp.customize.bind('ready', function() {
        var api = wp.customize;
        var added = false;
        api.section.each( function( section ) {
            section.container.bind( 'expanded', function() {
                added = false;
                Object.keys(controls).map(function( id ) {
                    var control = controls [ id ];
                    if ( control.section  === section.id ) {
                        delete controls [ id ];
                        var Constructor = api.controlConstructor[ control.type ] || api.Control, options;
                        // Inclusion of params alias is for back-compat for custom controls that expect to augment this property.
                        options = jQuery.extend( { params: control }, control );
                        api.control.add( new Constructor( id, options ) );
                        added = true;
                    }
                })

                if ( added ) {
                    jQuery( document ).trigger('oceanready');
                }
            } )
        } )


        wp.customize.previewer.bind('url',function(to) {
            localStorage.setItem( 'OceanCustomizePreviewUrl', to );
        })

        if ( localStorage.getItem( 'OceanCustomizePreviewUrl' ) ) {
            wp.customize.previewer.previewUrl( localStorage.getItem( 'OceanCustomizePreviewUrl' ) );
            localStorage.removeItem( 'OceanCustomizePreviewUrl' );
        }
    })


} );
