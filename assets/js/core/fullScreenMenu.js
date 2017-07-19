var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
	// Full Screen header menu
	oceanwpFullScreenMenu();
} );

/* ==============================================
FULL SCREEN MENU
============================================== */
function oceanwpFullScreenMenu() {
	"use strict"

	var $menuWrap 		= $j( '#site-header.full_screen-header #full-screen-menu' ),
		$menuBar 		= $j( '#site-header.full_screen-header .menu-bar' ),
		$customLogo 	= $j( '#site-logo.has-full-screen-logo' );

	if ( $menuBar.length ) {

		$menuBar.on( 'click', function( e ) {
			e.preventDefault();

			if ( ! $j( this ).hasClass( 'exit' ) ) {

				$j( this ).addClass( 'exit' );
				$customLogo.addClass( 'opened' );
				$menuWrap.addClass( 'active' );
				$menuWrap.fadeIn( 200 );

                setTimeout( function() {
					$j( 'html' ).css( 'overflow', 'hidden' );
                }, 400);

	        } else {

				$j( this ).removeClass( 'exit' );
				$customLogo.removeClass( 'opened' );
				$menuWrap.removeClass( 'active' );
				$menuWrap.fadeOut( 200 );

                setTimeout( function() {
					$j( 'html' ).css( 'overflow', 'visible' );
                	$j( '#full-screen-menu #site-navigation ul > li.dropdown' ).removeClass( 'open-sub' );
                    $j( '#full-screen-menu #site-navigation ul.sub-menu' ).slideUp( 200 );
                }, 400);

	        }

		} );

		// Logic for open sub menus
        $j( '#full-screen-menu #site-navigation ul > li.dropdown > a' ).on( 'tap click', function ( e ) {
            e.preventDefault();

            if ( $j( this ).closest( 'li.dropdown' ).find( '> ul.sub-menu' ).is( ':visible' ) ) {
                $j( this ).closest( 'li.dropdown' ).removeClass( 'open-sub' );
                $j( this ).closest( 'li.dropdown' ).find( '> ul.sub-menu' ).slideUp( 200 );
            } else {
                $j( this ).closest( 'li.dropdown' ).addClass( 'open-sub' );
                $j( this ).closest( 'li.dropdown' ).find( '> ul.sub-menu' ).slideDown( 200 );
            }

            return false;
        } );

	}

}