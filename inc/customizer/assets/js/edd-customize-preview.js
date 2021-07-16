/**
 * Update EDD Customizer settings live.
 *
 * @version 1.0.0
 * 
 * @since 2.0
 */

( function( $ ) {

    // Declare vars
	var api 				= wp.customize,
    body 				= $( 'body' ),
    siteHeader 			= $( '#site-header' ),
    eddProductsCol 		= [
        '1',
        '2',
        '3',
        '4'
    ],
    eddProductsTabletCol = [
        'tablet-1-col',
        'tablet-2-col',
        'tablet-3-col',
        'tablet-4-col'
    ],
    eddProductsMobileCol = [
        'mobile-1-col',
        'mobile-2-col',
        'mobile-3-col',
        'mobile-4-col'
    ];

    /******** EDD *********/

		// Cart style
		api('ocean_edd_cart_dropdown_style', function( value ) {
			value.bind( function( newval ) {
				var cart = $( '.edd-menu-icon' );
				if ( cart.length ) {
					$.each( wooCartStyle, function( i, v ) {
						cart.removeClass( v );
					});
					cart.addClass( newval );
				}
			});
		});

		// Custom Cart icon
		api('ocean_edd_menu_custom_icon', function( value ) {
			value.bind( function( newval ) {
				var $cart = $( '#site-navigation-wrap .dropdown-menu > li > a.eddmenucart i' );

				if ( $cart.length ) {
					$cart.removeClass();
					$cart.addClass( newval );
				}
			});
		});

		// Menu cart icon size
		api( 'ocean_edd_menu_icon_size', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_menu_icon_size' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_menu_icon_size">.eddmenucart i { font-size: ' + to + 'px; } .eddmenucart .owp-icon { width: ' + to + 'px; height: ' + to + 'px; }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Menu cart icon size tablet
		api( 'ocean_edd_menu_icon_size_tablet', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_menu_icon_size_tablet' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_menu_icon_size_tablet">@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart { font-size: ' + to + 'px; } .oceanwp-mobile-menu-icon a.eddmenucart .owp-icon { width: ' + to + 'px; height: ' + to + 'px; }}</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Menu cart icon size mobile
		api( 'ocean_edd_menu_icon_size_mobile', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_menu_icon_size_mobile' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_menu_icon_size_mobile">@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart { font-size: ' + to + 'px; } .oceanwp-mobile-menu-icon a.eddmenucart .owp-icon { width: ' + to + 'px; height: ' + to + 'px; }}</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Menu cart icon center vertically
		api( 'ocean_edd_menu_icon_center_vertically', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_menu_icon_center_vertically' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_menu_icon_center_vertically">.eddmenucart i { top: ' + to + 'px; }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Menu cart icon center vertically tablet
		api( 'ocean_edd_menu_icon_center_vertically_tablet', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_menu_icon_center_vertically_tablet' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_menu_icon_center_vertically_tablet">@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart { top: ' + to + 'px; }}</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Menu cart icon center vertically mobile
		api( 'ocean_edd_menu_icon_center_vertically_mobile', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_menu_icon_center_vertically_mobile' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_menu_icon_center_vertically_mobile">@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart { top: ' + to + 'px; }}</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Archives products columns
		api('ocean_edd_archive_columns', function( value ) {
			value.bind( function( newval ) {
				var archivesCol = $( '.oceanwp-row .edd_downloads_list' );
				if ( archivesCol.length ) {
					$.each( eddProductsCol, function( i, v ) {
						archivesCol.parent().removeClass( 'desktop-col-'+ v );
						archivesCol.removeClass( 'span_1_of_'+ v );
					});
					archivesCol.parent().addClass( 'custom-col desktop-col-'+ newval );
					archivesCol.addClass( 'span_1_of_'+ newval );
				}
			});
		});

		// Archives tablet columns class
		api('ocean_edd_tablet_archive_columns', function( value ) {
			value.bind( function( newval ) {
				var archivesCol = $( '.oceanwp-row .edd_downloads_list' );
				if ( archivesCol.length ) {
					$.each( eddProductsTabletCol, function( i, v ) {
						archivesCol.removeClass( v );
					});
					archivesCol.addClass( 'tablet-col' );
					archivesCol.addClass( 'tablet-'+ newval +'-col' );
				}
			});
		});

		// Archives mobile columns class
		api('ocean_edd_mobile_archive_columns', function( value ) {
			value.bind( function( newval ) {
				var archivesCol = $( '.oceanwp-row .edd_downloads_list' );
				if ( archivesCol.length ) {
					$.each( eddProductsMobileCol, function( i, v ) {
						archivesCol.removeClass( v );
					});
					archivesCol.addClass( 'mobile-col' );
					archivesCol.addClass( 'mobile-'+ newval +'-col' );
				}
			});
		});

		// Content Alignment
		api('ocean_edd_archive_entry_content_alignment', function( value ) {
			value.bind( function( newval ) {
				var content_alignment = $( '.oceanwp-row .edd_downloads_list .edd-download' );
				if ( content_alignment.length ) {
					$.each( wooContentAlignment, function( i, v ) {
						content_alignment.removeClass( v );
					});
					content_alignment.addClass( 'owp-content-'+ newval );
				}
			});
		});

		// Both Sidebars layout shop page content width
		api( 'ocean_edd_archive_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_archive_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_archive_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.edd.archive.content-both-sidebars .content-area { width: ' + to + '%; } body.edd.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.edd.archive.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Both Sidebars layout archive page sidebars width
		api( 'ocean_edd_archive_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_archive_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_archive_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.edd.archive.content-both-sidebars .widget-area{width:' + to + '%;} body.edd.archive.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.edd.archive.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Both Sidebars layout single edd content width
		api( 'ocean_edd_download_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_download_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_download_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-edd.content-both-sidebars .content-area { width: ' + to + '%; } body.single-edd.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-edd.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		} );

		// Both Sidebars layout single edd sidebars width
		api( 'ocean_edd_download_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_edd_download_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_edd_download_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-edd.content-both-sidebars .widget-area{width:' + to + '%;} body.single-edd.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.single-edd.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
        } );
        
        api("ocean_edd_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_top_padding">.edd_downloads_list .edd_download_inner { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_right_padding">.edd_downloads_list .edd_download_inner { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_bottom_padding">.edd_downloads_list .edd_download_inner { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_left_padding">.edd_downloads_list .edd_download_inner { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_top_padding">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_right_padding">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_bottom_padding">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_left_padding">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_top_padding">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_right_padding">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_bottom_padding">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_left_padding">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_top_margin">.edd_downloads_list .edd_download_inner .edd_download_image { margin-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_right_margin">.edd_downloads_list .edd_download_inner .edd_download_image { margin-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_bottom_margin">.edd_downloads_list .edd_download_inner .edd_download_image { margin-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_left_margin">.edd_downloads_list .edd_download_inner .edd_download_image { margin-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_tablet_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_tablet_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_tablet_top_margin">@media (max-width: 768px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_tablet_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_tablet_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_tablet_right_margin">@media (max-width: 768px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_tablet_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_tablet_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_tablet_bottom_margin">@media (max-width: 768px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_tablet_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_tablet_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_tablet_left_margin">@media (max-width: 768px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_mobile_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_mobile_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_mobile_top_margin">@media (max-width: 480px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_mobile_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_mobile_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_mobile_right_margin">@media (max-width: 480px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_mobile_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_mobile_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_mobile_bottom_margin">@media (max-width: 480px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_image_mobile_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_image_mobile_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_image_mobile_left_margin">@media (max-width: 480px){.edd_downloads_list .edd_download_inner .edd_download_image { margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_top_border_width">.edd_downloads_list .edd_download_inner { border-top-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_right_border_width">.edd_downloads_list .edd_download_inner { border-right-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_bottom_border_width">.edd_downloads_list .edd_download_inner { border-bottom-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_left_border_width">.edd_downloads_list .edd_download_inner { border-left-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_top_border_width">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-top-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_right_border_width">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-right-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_bottom_border_width">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-bottom-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_left_border_width">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-left-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_top_border_width">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-top-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_right_border_width">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-right-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_bottom_border_width">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-bottom-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_left_border_width">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-left-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_top_border_radius">.edd_downloads_list .edd_download_inner { border-top-left-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_right_border_radius">.edd_downloads_list .edd_download_inner { border-top-right-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_bottom_border_radius">.edd_downloads_list .edd_download_inner { border-bottom-right-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_left_border_radius">.edd_downloads_list .edd_download_inner { border-bottom-left-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_top_border_radius">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-top-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_right_border_radius">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-top-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_bottom_border_radius">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-bottom-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_tablet_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_tablet_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_tablet_left_border_radius">@media (max-width: 768px){.edd_downloads_list .edd_download_inner { border-bottom-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_top_border_radius">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-top-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_right_border_radius">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-top-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_bottom_border_radius">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-bottom-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_mobile_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_mobile_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_mobile_left_border_radius">@media (max-width: 480px){.edd_downloads_list .edd_download_inner { border-bottom-left-radius:' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}) , api("ocean_edd_background_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner").css("background-color", size);
			});
		}), api("ocean_edd_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner").css("border-color", size);
			});
		}), api("ocean_edd_category_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner .edd_download_categories a").css("color", size);
			});
		}), api("ocean_edd_category_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_category_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_category_color_hover">.edd_downloads_list .edd_download_inner .edd_download_categories a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner .edd_download_title a").css("color", size);
			});
		}), api("ocean_edd_title_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_title_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_title_color_hover">.edd_downloads_list .edd_download_inner .edd_download_title a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_entry_price_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner span.edd_price").css("color", size);
			});
		}), api("ocean_edd_entry_addtocart_bg_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner .button").css("background-color", size);
			});
		}), api("ocean_edd_entry_addtocart_bg_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_entry_addtocart_bg_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_entry_addtocart_bg_color_hover">.edd_downloads_list .edd_download_inner .button:hover{ background-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_entry_addtocart_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner .button").css("color", size);
			});
		}), api("ocean_edd_entry_addtocart_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_entry_addtocart_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_entry_addtocart_color_hover">.edd_downloads_list .edd_download_inner .button:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_entry_addtocart_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".edd_downloads_list .edd_download_inner .button").css("border-color", size);
			});
		}), api("ocean_edd_entry_addtocart_border_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_entry_addtocart_border_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_entry_addtocart_border_color_hover">..edd_downloads_list .edd_download_inner .button:hover{ border-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_edd_entry_addtocart_border_style', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_edd_entry_addtocart_border_style');
				if (to) {
					var style = '<style class="customizer-ocean_edd_entry_addtocart_border_style">.edd_downloads_list .edd_download_inner .button{border-style:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_edd_entry_addtocart_border_size', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_edd_entry_addtocart_border_size');
				if (to) {
					var style = '<style class="customizer-ocean_edd_entry_addtocart_border_size">.edd_downloads_list .edd_download_inner .button{border-width:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_edd_entry_addtocart_border_radius', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_edd_entry_addtocart_border_radius');
				if (to) {
					var style = '<style class="customizer-ocean_edd_entry_addtocart_border_radius">.edd_downloads_list .edd_download_inner .button{border-radius:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_edd_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".single-download .edd-download .edd_download_title").css("color", size);
			});
		}), api("ocean_single_edd_description_color", function($swipe) {
			$swipe.bind(function(size) {
				$('.single-download .edd-download .edd_download_content').css("color", size);
			});
		}), api("ocean_edd_checkout_titles_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_form_wrap legend').css("color", size);
			});
		}), api("ocean_edd_checkout_titles_border_bottom_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_form_wrap legend').css("border-bottom-color", size);
			});
		}), api("ocean_edd_checkout_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_cart th, #edd_checkout_cart td, #edd_checkout_form_wrap #edd-discount-code-wrap, #edd_checkout_form_wrap #edd_final_total_wrap, #edd_checkout_form_wrap #edd_show_discount').css("border-color", size);
			});
		}), api("ocean_edd_checkout_label_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_form_wrap .edd-label').css("color", size);
			});
		}), api("ocean_edd_checkout_description_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_form_wrap .edd-description').css("color", size);
			});
		}), api("ocean_edd_checkout_head_bg", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_cart .edd_cart_header_row th, .edd-table tr th').css("background-color", size);
			});
		}), api("ocean_edd_checkout_head_titles_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_cart .edd_cart_header_row th, .edd-table tr th').css("color", size);
			});
		}), api("ocean_edd_checkout_totals_table_titles_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_cart th.edd_cart_total').css("color", size);
			});
		}), api("ocean_edd_checkout_remove_button_color", function($swipe) {
			$swipe.bind(function(size) {
				$('#edd_checkout_cart a.edd_cart_remove_item_btn').css("color", size);
			});
		}), api("ocean_edd_checkout_remove_button_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_checkout_remove_button_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_checkout_remove_button_color_hover">#edd_checkout_cart a.edd_cart_remove_item_btn:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_bg", function($swipe) {
			$swipe.bind(function(to) {
				$(".edd-menu-icon .current-shop-items-dropdown").css("background-color", to);
			});
		}), api("ocean_edd_cart_dropdown_borders", function($swipe) {
			$swipe.bind(function(to) {
				$(".edd-menu-icon .current-shop-items-dropdown .widget_edd_cart_widget li").css("border-color", to);
			});
		}), api("ocean_edd_cart_dropdown_title_color", function($swipe) {
			$swipe.bind(function(to) {
				$(".current-shop-items-dropdown .widget_edd_cart_widget li .edd-cart-item-title").css("color", to);
			});
		}), api("ocean_edd_cart_dropdown_price_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_price_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_price_color">.current-shop-items-dropdown .widget_edd_cart_widget li .edd-cart-item-price { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_remove_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_remove_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_remove_link_color">.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart { color: ' + to + '; } .widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_remove_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_remove_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_remove_link_color_hover">.current-shop-items-dropdown .widget_edd_cart_widget ul.edd-cart li a.edd-remove-from-cart:hover{ color: ' + to + '; } .widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_subtotal_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_subtotal_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_subtotal_bg">.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_subtotal_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_subtotal_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_subtotal_border_color">.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total { borde-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_subtotal_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_subtotal_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_subtotal_color">.current-shop-items-dropdown .widget_edd_cart_widget li.edd_total { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_total_price_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_total_price_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_total_price_color">.current-shop-items-dropdown .widget_edd_cart_widget .edd_total .cart-total{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_checkout_button_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_checkout_button_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_checkout_button_bg">.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a{ background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_checkout_button_bg_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_checkout_button_bg_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_checkout_button_bg_hover">.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_checkout_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_checkout_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_checkout_button_color">.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_cart_dropdown_checkout_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_checkout_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_checkout_button_hover_color">.current-shop-items-dropdown .widget_edd_cart_widget .edd_checkout a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}),  api("ocean_edd_cart_dropdown_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_cart_dropdown_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_cart_dropdown_width">.edd-menu-icon .current-shop-items-dropdown { min-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_menu_bag_icon_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_menu_bag_icon_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_menu_bag_icon_color">.eddmenucart-cart-icon .eddmenucart-count { border-color: ' + to + '; }eddmenucart-cart-icon .eddmenucart-count:after { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_menu_bag_icon_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_menu_bag_icon_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_menu_bag_icon_hover_color">.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count { background-color: ' + to + '; border-color: ' + to + '; }.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count:after, .show-cart .eddmenucart-cart-icon .eddmenucart-count:after { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_menu_bag_icon_count_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_menu_bag_icon_count_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_menu_bag_icon_count_color">.eddmenucart-cart-icon .eddmenucart-count, .edd-menu-icon .eddmenucart-total span{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_edd_menu_bag_icon_hover_count_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_edd_menu_bag_icon_hover_count_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_edd_menu_bag_icon_hover_count_color">.bag-style:hover .eddmenucart-cart-icon .eddmenucart-count, .show-cart .eddmenucart-cart-icon .eddmenucart-count{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		});


} )( jQuery );