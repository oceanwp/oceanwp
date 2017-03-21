var $j 					= jQuery.noConflict(),
	$window 			= $j( window ),
	$lastWindowWidth 	= $window.width(),
	$lastWindowHeight 	= $window.height();

$j( document ).on( 'ready', function() {
	"use strict";
	// Superfish menus
	superFish();
	// Nav no click
	navNoClick();
	// Full Screen header menu
	fullScreenMenu();
	// Header search form label
	headerSearchForm();
	// Mega menu
	megaMenu();
	// Menu search
	menuSearch();
	// Mobile menu
	mobileMenu();
    // Smooth comment scroll
    smoothCommentScroll();
	// Carousel
	initCarousel();
	// Custom select
	customSelects();
	// Masonry grids
	masonryGrids();
    // Responsive Video
	initFitVids();
    // Equal height elements
	initEqualHeight();
	// Recent posts widget
	postsWidget();
	// Scroll effect
	scrollEffect();
	// Scroll top
	scrollTop();
} );

$window.on( 'load', function() {
	"use strict";
	if ( $j.fn.infinitescroll !== undefined && $j( 'div.infinite-scroll-nav' ).length ) {
		// Infinite scroll
		infiniteScrollInit();
	}
	// Fixed footer
	fixedFooter();
} );

$window.on( 'orientationchange', function() {
	"use strict";
	// Masonry grids
	masonryGrids();
} );

$window.resize( function() {
	"use strict";

	var $windowWidth  = $window.width(),
		$windowHeight = $window.height();

    if ( $lastWindowWidth !== $windowWidth
    	|| $lastWindowHeight !== $windowHeight ) {
        fixedFooter();
    }

} );

/* ==============================================
SUPERFISH MENUS
============================================== */
function superFish() {
	"use strict"

	$j( 'ul.sf-menu' ).superfish( {
		delay: 600,
		animation: {
			opacity: 'show'
		},
		animationOut: {
			opacity: 'hide'
		},
		speed: 'fast',
		speedOut: 'fast',
		cssArrows: false,
		disableHI: false,
	} );

}

/* ==============================================
NAV NO CLICK
============================================== */
function navNoClick() {
	"use strict"

	$j( 'li.nav-no-click > a, li.sidr-class-nav-no-click > a' ).on( 'click', function() {
		return false;
	} );

}

/* ==============================================
FULL SCREEN MENU
============================================== */
function fullScreenMenu() {
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

/* ==============================================
HEADER SEARCH Form LABEL
============================================== */
function headerSearchForm() {
	"use strict"

	// Add class when the search input is not empty
	$j( 'form.header-searchform' ).each( function() {

		var form 		= $j( this ),
			listener	= form.find( 'input' ),
			$label 		= form.find( 'label' );

		if ( listener.val().length ) {
			form.addClass( 'search-filled' );
		}

		listener.on( 'keyup blur', function() {
			if ( listener.val().length > 0 ) {
			  form.addClass( 'search-filled' );
			} else {
			  form.removeClass( 'search-filled' );
			}
		} );

    } );

}

/* ==============================================
MEGA MENU
============================================== */
function megaMenu() {
	"use strict"

    $j( '#site-navigation .megamenu-li.full-mega' ).hover( function() {
        var siteHeader          = $j( '#site-header-inner' ),
            menuWidth        	= siteHeader.width(),     
            menuPosition        = siteHeader.offset(),     
            menuItemPosition    = $j( this ).offset(),
            PositionLeft        = menuItemPosition.left-menuPosition.left+1;

        if ( $j( '#site-header' ).hasClass( 'medium-header' ) ) {
        	siteHeader          = $j( '#site-navigation-wrap > .container' ),
        	menuWidth           = siteHeader.width(),
        	menuPosition        = siteHeader.offset(),     
            PositionLeft        = menuItemPosition.left-menuPosition.left+1;
		}

        $j( this ).find( '.megamenu' ).css( { left: '-'+PositionLeft+'px', width: menuWidth } );
    } );

    // Megamenu auto width
    $j( '#site-navigation .megamenu-li.auto-mega .megamenu' ).each( function() {
        var li                  = $j( this ).parent();
        var liOffset            = li.offset().left;
        var liOffsetTop         = li.offset().top;
        var liWidth             = $j( this ).parent().width();
        var dropdowntMarginLeft = liWidth/2;
        var dropdownWidth       = $j( this ).outerWidth();
        var dropdowntLeft       = liOffset - dropdownWidth/2;
        
        if ( dropdowntLeft < 0 ) {
            var left            = liOffset - 10;
            dropdowntMarginLeft = 0;
        } else {
            var left            = dropdownWidth/2;
            
        }
        
        if ( oceanwpLocalize.isRTL ) {
            $j( this ).css( {
                'right': - left,
                'marginRight': dropdowntMarginLeft
            } );
        } else {
            $j( this ).css( {
                'left': - left,
                'marginLeft': dropdowntMarginLeft
            } );
        }
        
        var dropdownRight = ( $window.width() ) - ( liOffset - left + dropdownWidth + dropdowntMarginLeft );
        
        if ( dropdownRight < 0 ) {
            $j( this ).css( {
                'left': 'auto',
                'right': - ( $window.width() - liOffset - liWidth - 10 )
            } );
        }
        
    } );

}

/* ==============================================
MENU SEARCH
============================================== */
function menuSearch() {
	"use strict"

	/* Menu Search > Dropdown */
	if ( 'drop_down' == oceanwpLocalize.menuSearchStyle ) {

		var $searchDropdownToggle = $j( 'a.search-dropdown-toggle' ),
			$searchDropdownForm   = $j( '#searchform-dropdown' );

		$searchDropdownToggle.click( function( event ) {
			// Display search form
			$searchDropdownForm.toggleClass( 'show' );
			// Active menu item
			$j( this ).parent( 'li' ).toggleClass( 'active' );
			// Focus
			var $transitionDuration = $searchDropdownForm.css( 'transition-duration' );
			$transitionDuration = $transitionDuration.replace( 's', '' ) * 1000;
			if ( $transitionDuration ) {
				setTimeout( function() {
					$searchDropdownForm.find( 'input[type="search"]' ).focus();
				}, $transitionDuration );
			}
			// Hide other things
			$j( 'div#current-shop-items-dropdown' ).removeClass( 'show' );
			$j( 'li.wcmenucart-toggle-drop_down' ).removeClass( 'active' );
			// Return false
			return false;
		} );

		// Close on doc click
		$j( document ).on( 'click', function( event ) {
			if ( ! $j( event.target ).closest( '#searchform-dropdown.show' ).length ) {
				$searchDropdownToggle.parent( 'li' ).removeClass( 'active' );
				$searchDropdownForm.removeClass( 'show' );
			}
		} );

	}
	
	/* Menu Search > Header Replace */
	else if ( 'header_replace' == oceanwpLocalize.menuSearchStyle ) {

		// Show
		var $header = $j( '#site-header' );

		// If is top menu header style
		if ( $header.hasClass( 'top-header' ) ) {

			// Show
			var $headerReplace 	= $j( '#searchform-header-replace' ),
				$siteLeft 		= $j( '#site-header.top-header .header-top .left' ),
				$siteRight 		= $j( '#site-header.top-header .header-top .right' );
			
			$j( 'a.search-header-replace-toggle' ).click( function( event ) {
				// Display search form
				$headerReplace.toggleClass( 'show' );
				$siteLeft.toggleClass( 'hide' );
				$siteRight.toggleClass( 'hide' );
				// Focus
				var $transitionDuration =  $headerReplace.css( 'transition-duration' );
				$transitionDuration = $transitionDuration.replace( 's', '' ) * 1000;
				if ( $transitionDuration ) {
					setTimeout( function() {
						$headerReplace.find( 'input[type="search"]' ).focus();
					}, $transitionDuration );
				}
				// Return false
				return false;
			} );

			// Close on click
			$j( '#searchform-header-replace-close' ).click( function() {
				$headerReplace.removeClass( 'show' );
				$siteLeft.removeClass( 'hide' );
				$siteRight.removeClass( 'hide' );
				return false;
			} );

			// Close on doc click
			$j( document ).on( 'click', function( event ) {
				if ( ! $j( event.target ).closest( $j( '#searchform-header-replace.show' ) ).length ) {
					$headerReplace.removeClass( 'show' );
					$siteLeft.removeClass( 'hide' );
					$siteRight.removeClass( 'hide' );
				}
			} );

		} else {

			// Show
			var $headerReplace 	= $j( '#searchform-header-replace' ),
				$siteNavigation = $j( '#site-header.header-replace #site-navigation' );
			
			$j( 'a.search-header-replace-toggle' ).click( function( event ) {
				// Display search form
				$headerReplace.toggleClass( 'show' );
				$siteNavigation.toggleClass( 'hide' );
				var menu_width = $j( '#site-navigation > ul.dropdown-menu' ).width();
				$headerReplace.css( 'max-width', menu_width + 60 );
				// Focus
				var $transitionDuration =  $headerReplace.css( 'transition-duration' );
				$transitionDuration = $transitionDuration.replace( 's', '' ) * 1000;
				if ( $transitionDuration ) {
					setTimeout( function() {
						$headerReplace.find( 'input[type="search"]' ).focus();
					}, $transitionDuration );
				}
				// Return false
				return false;
			} );

			// Close on click
			$j( '#searchform-header-replace-close' ).click( function() {
				$headerReplace.removeClass( 'show' );
				$siteNavigation.removeClass( 'hide' );
				return false;
			} );

			// Close on doc click
			$j( document ).on( 'click', function( event ) {
				if ( ! $j( event.target ).closest( $j( '#searchform-header-replace.show' ) ).length ) {
					$headerReplace.removeClass( 'show' );
					$siteNavigation.removeClass( 'hide' );
				}
			} );

		}

	}
	
	/* Menu Search > Overlay */
	else if ( 'overlay' == oceanwpLocalize.menuSearchStyle ) {

		var $searchOverlayToggle 	= $j( 'a.search-overlay-toggle' ),
			$searchOverlay 			= $j( '#searchform-overlay' );

		if ( $searchOverlayToggle.length ) {

			$searchOverlayToggle.on( 'click', function( e ) {
				e.preventDefault();

				if ( ! $j( this ).hasClass( 'exit' ) ) {

					$j( this ).addClass( 'exit' );
					$searchOverlay.addClass( 'active' );
					$searchOverlay.fadeIn( 200 );

	                setTimeout( function() {
						$j( 'html' ).css( 'overflow', 'hidden' );
	                }, 400);

		        } else {

					$j( this ).removeClass( 'exit' );
					$searchOverlay.removeClass( 'active' );
					$searchOverlay.fadeOut( 200 );

	                setTimeout( function() {
						$j( 'html' ).css( 'overflow', 'visible' );
	                }, 400);

		        }

			} );

		}

		$searchOverlayToggle.on( 'click', function() {
			if ( $j( this ).hasClass( 'exit' ) ) {
				$j( '#searchform-overlay input' ).focus();
			}
		} );

	}

}

/* ==============================================
MOBILE SCRIPT
============================================== */
function mobileMenu( event ) {
	"use strict"

	if ( typeof oceanwpLocalize.sidrSource !== 'undefined' ) {

		// Add sidr
		$j( '.mobile-menu' ).sidr( {
			name     : 'sidr',							// Name for the 'sidr'
			source   : oceanwpLocalize.sidrSource,		// Override the source of the content
			side     : oceanwpLocalize.sidrSide,     	// Accepts 'left' or 'right'
			displace : oceanwpLocalize.sidrDisplace, 	// Displace the body content or not
			speed    : 300,            					// Accepts standard jQuery effects speeds (i.e. fast, normal or milliseconds)
			renaming : true,							// The ids and classes will be prepended with a prefix when loading existent content
			onOpen   : function() {

				// Declare useful vars
				var $hasChildren = $j( '.sidr-class-menu-item-has-children' );

				// Add dropdown toggle (plus)
				$hasChildren.children( 'a' ).append( '<span class="sidr-class-dropdown-toggle"></span>' );

				// Toggle dropdowns
				var $sidrDropdownTarget = $j( '.sidr-class-dropdown-toggle' );

				// Check localization
				if ( oceanwpLocalize.sidrDropdownTarget == 'li' ) {
					$sidrDropdownTarget = $j( '.sidr-class-sf-with-ul' );
				}

				// Add toggle click event
				$sidrDropdownTarget.on( 'click', function( event ) {

					// Define toggle vars
					if ( oceanwpLocalize.sidrDropdownTarget == 'li' ) {
						var $toggleParentLi = $j( this ).parent( 'li' );
					} else {
						var $toggleParentLink = $j( this ).parent( 'a' ),
							$toggleParentLi   = $toggleParentLink.parent( 'li' );
					}

					// Get parent items and dropdown
					var $allParentLis = $toggleParentLi.parents( 'li' ),
						$dropdown     = $toggleParentLi.children( 'ul' );

					// Toogle items
					if ( ! $toggleParentLi.hasClass( 'active' ) ) {
						$hasChildren.not( $allParentLis ).removeClass( 'active' ).children( 'ul' ).slideUp( 'fast' );
						$toggleParentLi.addClass( 'active' ).children( 'ul' ).slideDown( 'fast' );
					} else {
						$toggleParentLi.removeClass( 'active' ).children( 'ul' ).slideUp( 'fast' );
					}

					// Return false
					return false;

				} );

				// Add light overlay to content
				$j( 'body' ).append( '<div class="oceanwp-sidr-overlay"></div>' );
				$j( '.oceanwp-sidr-overlay' ).fadeIn( 300 );

				// Close sidr when clicking overlay
				$j( '.oceanwp-sidr-overlay' ).on( 'click', function() {
					$j.sidr( 'close', 'sidr' );
					return false;
				} );

				// Close on resize
				$window.resize( function() {
					if ( $window.width() >= 960 ) {
						$j.sidr( 'close', 'sidr' );
					}
				} );

			},
			onClose : function() {

				// Remove active dropdowns
				$j( '.sidr-class-menu-item-has-children.active' ).removeClass( 'active' ).children( 'ul' ).hide();
				
				// FadeOut overlay
				$j( '.oceanwp-sidr-overlay' ).fadeOut( 300, function() {
					$j( this ).remove();
				} );
			}

		} );

        // Replace sidr class in the icons classes
		$j( '#sidr li.sidr-class-menu-item a i[class*="sidr-class-icon"]' ).each( function() {
			var old_class = $j( this ).attr( 'class' ),
				old_class = old_class.replace( 'sidr-class-icon-', 'icon-' );
			$j( this ).attr( 'class', old_class );
		} );

		// Close sidr when clicking on close button
		$j( 'a.sidr-class-toggle-sidr-close' ).on( 'click', function() {
			$j.sidr( 'close', 'sidr' );
			return false;
		} );

		// Close when clicking local scroll link
		$j( 'li.sidr-class-local-scroll > a' ).on( 'click', function() {
			$j.sidr( 'close', 'sidr' );
			scrollEffect();
			return false;
		} );

	}

}

/* ==============================================
SMOOTH COMMENT SCROLL
============================================== */
function smoothCommentScroll() {
	"use strict"

	$j( '.single a.comments-link' ).click( function( event ) {
		$j( 'html, body' ).stop(true,true).animate( {
			scrollTop: $j( this.hash ).offset().top -120
		}, 'normal' );
		return false;
	} );

}

/* ==============================================
CAROUSEL
============================================== */
function initCarousel( $context ) {
	"use strict"

	var $carousel = $j( '.gallery-format, .product-entry-slider', $context );

	// If RTL
	if ( $j( 'body' ).hasClass( 'rtl' ) ) {
		var rtl = true;
	} else {
		var rtl = false;
	}

	// Return autoplay to false if woo slider
	if ( $j( 'body' ).hasClass( 'woocommerce' ) ) {
		var autoplay = false;
	} else {
		var autoplay = true;
	}

	// Slide speed
	var speed = 7000;

	// Gallery slider
	$carousel.imagesLoaded( function() {
		$carousel.slick( {
			autoplay: autoplay,
			autoplaySpeed: speed,
			prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
			rtl: rtl,
		} );
	} );

	// WooCommerce slider
    $j( '.product .main-images' ).slick( {
		prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
		asNavFor: '.product-thumbnails',
		rtl: rtl,
	} );

	// WooCommerce thumbnails slider
	$j( '.product .product-thumbnails' ).slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
		asNavFor: '.product .main-images',
		focusOnSelect: true,
		rtl: rtl,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	} );

	// WooCommerce: prevent clicking
	$j( '.product .main-images a, .product .product-thumbnails a' ).click( function(e) {
		e.preventDefault();
    } );

}

/* ==============================================
CUSTOM SELECT
============================================== */
function customSelects() {
	"use strict"

	$j( oceanwpLocalize.customSelects ).customSelect( {
		customClass: 'theme-select'
	} );

}

/* ==============================================
INFINITE SCROLL
============================================== */
function infiniteScrollInit() {
	"use strict"

	// Get infinite scroll container
	var $container = $j( '#blog-entries' );

	// Start infinite sccroll
	$container.infinitescroll( {
		loading : {
			msg         : null,
			finishedMsg : null,
			msgText     : '<div class="infinite-scroll-loader">'+ oceanwpInfiniteScroll.msgText +'</div>',
		},
		navSelector  : 'div.infinite-scroll-nav',
		nextSelector : 'div.infinite-scroll-nav div.older-posts a',
		itemSelector : '.blog-entry',
	},

	// Callback function
	function( newElements ) {

		var $newElems = $j( newElements ).css( 'opacity', 0 );

		$newElems.imagesLoaded( function() {

			// Isotope
			if ( $container.hasClass( 'blog-masonry-grid' ) ) {
				$container.isotope( 'appended', $newElems );
				$newElems.css( 'opacity', 0 );
			}

			// Animate new Items
			$newElems.animate( {
				opacity : 1
			} );

			// Add trigger
			$container.trigger( 'oceanwpinfiniteScrollLoaded' );

			// Re-run functions
			initCarousel( $newElems );

			if ( $j( 'body' ).hasClass( 'has-lightbox' ) ) {
				initLightbox( $newElems );
			}

			// Equal heights
			if ( $j.fn.equalHeights !== undefined ) {
				$j( '.blog-equal-heights' ).equalHeights( {
					children : '.blog-entry-inner'
				} );
			}

		    // Gallery posts
		    if ( $j( '.gallery-format' ).parent( '.thumbnail' ) && $j( '.blog-masonry-grid' ).length ) {
				setTimeout( function() {
					$j( '.blog-masonry-grid' ).isotope( 'layout' );
				}, 600 + 1 );
			}

		} );

	} );

}

/* ==============================================
MASONRY
============================================== */
function masonryGrids() {
	"use strict"

	$j( '.blog-masonry-grid' ).each( function() {

		var $this               = $j( this ),
			$transitionDuration = '0.0',
			$layoutMode         = 'masonry';

		// Load isotope after images loaded
		$this.imagesLoaded( function() {
			$this.isotope( {
				itemSelector       : '.isotope-entry',
				transformsEnabled  : true,
				isOriginLeft       : oceanwpLocalize.isRTL ? false : true,
				transitionDuration : $transitionDuration + 's'
			} );
		} );

	} );

}

/* ==============================================
RESPONSIVE VIDEOS
============================================== */
function initFitVids() {
	"use strict"

	$j( '.responsive-video-wrap, .responsive-audio-wrap' ).fitVids();

}

/* ==============================================
EQUAL HEIGHTS
============================================== */
function initEqualHeight() {
	"use strict"

	if ( $j.fn.equalHeights != undefined ) {

		// Add equal heights grid
		$j( '.match-height-grid .match-height-content' ).equalHeights();

		// Blog entries
		$j( '.blog-equal-heights .blog-entry-inner' ).equalHeights();

	}

}

/* ==============================================
RECENT POSTS WIDGET
============================================== */
function postsWidget() {
	"use strict"

	$j( '.oceanwp-recent-posts li' ).each( function() {

		var $this = $j( this );

		$this.imagesLoaded( function() {
			$this.find( '.recent-posts-details-inner' ).css( { 'height': $this.height() } );
		} );

	} );

}

/* ==============================================
SCROLL EFFECT
============================================== */
function scrollEffect() {
	"use strict"

	if ( ! $j( 'body' ).hasClass( 'single-product' )
		&& ! $j( 'body' ).hasClass( 'no-local-scroll' ) ) {

	    $j( 'a[href*="#"]:not([href="#"])' ).on( 'click', function() {

	        if ( ! $j( this ).hasClass( 'no-effect' )
	        	&& ! $j( this ).hasClass( 'page-numbers' )
	        	&& ! $j( this ).hasClass( 'omw-open-modal' )
	        	&& ! $j( this ).parent().hasClass( 'omw-open-modal' )
	        	&& ! $j( this ).parent().parent().parent().hasClass( 'omw-open-modal' ) ) {

	        	var $href     				= $j( this ).attr( 'href' ),
				    $hrefHash 				= $href.substr( $href.indexOf( '#' ) ).slice( 1 ),
				    $target   				= $j( '#' + $hrefHash ),
					$adminbarHeight        	= getAdminbarHeight(),
					$topbarHeight        	= getTopbarHeight(),
					$stickyHeaderHeight    	= getStickyHeaderHeight(),
				    $scrollPosition;

				if ( $target.length && '' !== $hrefHash ) {
					$scrollPosition     	= $target.offset().top - $adminbarHeight - $topbarHeight - $stickyHeaderHeight;

	                $j( 'html, body' ).stop().animate( {
						 scrollTop: Math.round( $scrollPosition )
					}, 1000 );

					return false;

	            }
	        }

	    } );

	}

}

// Admin bar height
function getAdminbarHeight() {
	"use strict"

	var $adminbarHeight = 0;

	if ( $j( '#wpadminbar' ).length ) {
		$adminbarHeight = parseInt( $j( '#wpadminbar' ).outerHeight() );
	}

	return $adminbarHeight;
}

// Top bar height
function getTopbarHeight() {
	"use strict"

	var $topbarHeight = 0;

	if ( $j( '#top-bar-wrap' ).hasClass( 'oceanwp-top-bar-sticky' )
		&& $j( '#top-bar-wrap' ).length ) {
		$topbarHeight = parseInt( $j( '#top-bar-wrap' ).outerHeight() );
	}

	return $topbarHeight;
}

// Header height
function getStickyHeaderHeight() {
	"use strict"

	var $stickyHeaderHeight = 0;

	if ( $j( '#site-header' ).hasClass( 'fixed-scroll' )
		&& $j( '#site-header' ).length ) {
		$stickyHeaderHeight = $j( '#site-header' ).attr( 'data-height' );
	}

	if ( $window.width() <= 960
		&& ! $j( '#site-header' ).hasClass( 'has-sticky-mobile' )
		&& $j( '#site-header' ).length ) {
		$stickyHeaderHeight = 0;
	}

	return $stickyHeaderHeight;
}

/* ==============================================
SCROLL TOP
============================================== */
function scrollTop() {
	"use strict"

	var selectors  = {
		scrollTop  		: '#scroll-top',
		topLink    		: 'a[href="#go-top"]',
		slashTopLink 	: 'body.home a[href="/#go-top"]'
	}

	$window.on( 'scroll', function() {
		if ( $j( this ).scrollTop() > 100 ) {
			$j( '#scroll-top' ).fadeIn();
		} else {
			$j( '#scroll-top' ).fadeOut();
		}
	});

	$j.each( selectors, function( key, value ){
		$j( value ).on( 'click', function(e){
			e.preventDefault();
			$j( 'html, body' ).animate( { scrollTop:0 }, 400 );
			$j( this ).parent().removeClass( 'sfHover' );
		});
	});

}

/* ==============================================
FIXED FOOTER
============================================== */
function fixedFooter() {
	"use strict"

    if ( ! $j( 'body' ).hasClass( 'has-fixed-footer' ) ) {
        return;
    }

    // Set main vars
    var $mainHeight 		= $j( '#main' ).outerHeight(),
    	$htmlHeight 		= $j( 'html' ).height(),
    	$adminbarHeight		= getAdminbarHeight(),
    	$minHeight 			= $mainHeight + ( $window.height() - $htmlHeight - $adminbarHeight );

    // Add min height
    $j( '#main' ).css( 'min-height', $minHeight );

}