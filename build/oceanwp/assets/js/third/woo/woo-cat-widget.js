var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
    "use strict";
    // Woo categories widget
    oceanwpWooCategoriesWidget();
} );

/* ==============================================
WOOCOMMERCE CATEGORIES WIDGET
============================================== */
function oceanwpWooCategoriesWidget() {
    "use strict"

    $j( '.woo-dropdown-cat .product-categories' ).each( function() {

        var IconDown = '<i class="fa fa-angle-down"></i>',
        	IconUp 	 = '<i class="fa fa-angle-up"></i>';

        $j( this ).find( 'li' ).has( '.children' ).has( 'li' ).prepend( '<div class="open-this">'+ IconDown +'</div>' );

        $j( this ).find( '.open-this' ).on( 'click', function(){
            if ( $j( this ).parent().hasClass( 'opened' ) ) {
                $j( this ).html( IconDown ).parent().removeClass( 'opened' ).find( '> ul' ).slideUp( 200 );
            } else {
                $j( this ).html( IconUp ).parent().addClass( 'opened' ).find( '> ul' ).slideDown( 200 );
            }
        } );

    } );
    
}