/**
 * Update Customizer settings live.
 *
 * @version 1.0.0
 */

( function( $ ) {

	// Declare vars
	var api 				= wp.customize,
		body 				= $( 'body' ),
		siteHeader 			= $( '#site-header' ),
		visibility 			= [
			'all-devices',
			'hide-tablet',
			'hide-mobile',
			'hide-tablet-mobile',
			'hide-all-devices'
		],
		menuPosition 		= [
			'left-menu',
			'right-menu',
			'center-menu'
		],
		centerMenusPosition = [
			'wider',
			'centered',
			'closer'
		],
		mediumMenuPosition 	= [
			'left-menu',
			'right-menu',
			'center-menu'
		],
		verticalHeaderPosition 	= [
			'left-header',
			'right-header',
		],
		verticalHeaderLogoPosition 	= [
			'left-logo',
			'center-logo',
			'right-logo',
		],
		tabletCol 			= [
			'tablet-1-col',
			'tablet-2-col',
			'tablet-3-col',
			'tablet-4-col'
		],
		mobileCol 			= [
			'mobile-1-col',
			'mobile-2-col',
			'mobile-3-col',
			'mobile-4-col'
		],
		blogThumbnailPosition 	= [
			'top',
			'center',
			'bottom'
		];

	/******** WordPress Core *********/
		// Site title
		api( 'blogname', function( value ) {
			value.bind( function( newval ) {
				$( '.site-logo-text' ).text( newval );
			});
		});

		// Site description
		api( 'blogdescription', function( value ) {
			value.bind( function( newval ) {
				$( '#site-description h2' ).text( newval );
			});
		});

	/******** General *********/

	    api( 'ocean_primary_color', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_primary_color' );
				if ( to ) {
					var style = '<style class="customizer-ocean_primary_color">a:hover,a.light:hover,.theme-heading .text::before,#top-bar-content > a:hover,#top-bar-social li.oceanwp-email a:hover,#site-navigation-wrap .dropdown-menu > li > a:hover,.oceanwp-mobile-menu-icon a:hover,.blog-entry.post .blog-entry-header .entry-title a:hover,.blog-entry.post .blog-entry-readmore a:hover,ul.meta li a:hover,.dropcap,.single-post nav.post-navigation .nav-links .title,body .related-post-title a:hover,body #wp-calendar caption,body .contact-info-widget.default i,body .contact-info-widget.big-icons i,body .custom-links-widget .oceanwp-custom-links li a:hover,body .custom-links-widget .oceanwp-custom-links li a:hover:before,body .posts-thumbnails-widget li a:hover,body .social-widget li.oceanwp-email a:hover,.comment-author .comment-meta .comment-reply-link,#respond #cancel-comment-reply-link:hover,#footer-widgets .footer-box a:hover,#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover,.sidr a:hover,.sidr-class-dropdown-toggle:hover,.sidr-class-menu-item-has-children.active > a,.sidr-class-menu-item-has-children.active > a > .sidr-class-dropdown-toggle,#oceanwp-post-list.one .oceanwp-post-category:hover,#oceanwp-post-list.one .oceanwp-post-category:hover a,#oceanwp-post-list.two .slick-arrow:hover,#oceanwp-post-list.two article:hover .oceanwp-post-category,#oceanwp-post-list.two article:hover .oceanwp-post-category a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover,input[type=checkbox]:checked:before,.woocommerce-MyAccount-navigation ul li a:before,.woocommerce-checkout .woocommerce-info a,.woocommerce-checkout #payment ul.payment_methods .wc_payment_method>input[type=radio]:first-child:checked+label:before,.woocommerce-checkout #payment .payment_method_paypal .about_paypal,.woocommerce ul.products li.product li.category a:hover,.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover,.product_meta .posted_in a:hover,.product_meta .tagged_as a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover{ color: ' + to + '; } input[type="button"],input[type="reset"],input[type="submit"],.button,#site-navigation-wrap .dropdown-menu > li.btn > a > span,.thumbnail:hover i,.post-quote-content,body .contact-info-widget.big-icons li:hover i,#oceanwp-post-list.one .readmore:hover,#oceanwp-post-list.one .oceanwp-post-category,#oceanwp-post-list.two .oceanwp-post-category,#oceanwp-post-list.two article:hover .slide-overlay-wrap,.oceanwp-modal .oceanwp-close-modal,.woocommerce div.product div.images .open-image,.wcmenucart-details.count,.woocommerce-message a,.woocommerce-error a,.woocommerce-info a,.woocommerce .widget_price_filter .ui-slider .ui-slider-handle,.woocommerce .widget_price_filter .ui-slider .ui-slider-range{ background-color: ' + to + '; } .widget-title,blockquote,#searchform-dropdown,#icon-searchform-dropdown,.dropdown-menu .sub-menu,.blog-entry.large-entry .blog-entry-readmore a:hover,.oceanwp-newsletter-form-wrap input[type="email"]:focus,.social-widget li.oceanwp-email a:hover,#respond #cancel-comment-reply-link:hover,body .contact-info-widget.big-icons li:hover i,#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"]:focus,#oceanwp-post-list.one .readmore:hover,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover,.current-shop-items-dropdown,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.wcmenucart-details.count:before,.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover{ border-color: ' + to + '; }</style>';
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

	    api( 'ocean_hover_primary_color', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_hover_primary_color' );
				if ( to ) {
					var style = '<style class="customizer-ocean_hover_primary_color">input[type="button"]:hover,input[type="reset"]:hover,input[type="submit"]:hover,input[type="button"]:focus,input[type="reset"]:focus,input[type="submit"]:focus,.button:hover,.button:focus,#site-navigation-wrap .dropdown-menu > li.btn > a:hover > span,.post-quote-author,.oceanwp-modal .oceanwp-close-modal:hover,.woocommerce div.product div.images .open-image:hover,.woocommerce-error a:hover,.woocommerce-info a:hover,.woocommerce-message a:hover, .woocommerce-message a:focus, .woocommerce .button:focus{ background-color: ' + to + '; }</style>';
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

	    api( 'ocean_main_border_color', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_main_border_color' );
				if ( to ) {
					var style = '<style class="customizer-ocean_main_border_color">table th,table td,hr,.content-area,body.content-left-sidebar #content-wrap .content-area,.content-left-sidebar .content-area,#top-bar-wrap,#site-header,#site-header.top-header #search-toggle,.dropdown-menu ul li,.centered-minimal-page-header,.blog-entry.post,.blog-entry.grid-entry .blog-entry-inner,.single-post .entry-title,.single-post .entry-share,.single-post .entry-share ul li a,.single-post nav.post-navigation,.single-post nav.post-navigation .nav-links .nav-previous,#author-bio,#author-bio .author-bio-avatar,#author-bio .author-bio-social li a,#related-posts,#comments,.comment-body,#respond #cancel-comment-reply-link,#blog-entries .type-page,.page-numbers a,.page-numbers span:not(.elementor-screen-only),.page-links span,#wp-calendar caption,#wp-calendar th,#wp-calendar tbody,.contact-info-widget i,.posts-thumbnails-widget li,.tagcloud a{ border-color: ' + to + '; }</style>';
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

		api('ocean_scroll_top_position', function( value ) {
			value.bind( function( newval ) {
				var $position = $( '#scroll-top' );

				if ( $position.length ) {
					$position.removeClass();
					$position.addClass( 'scroll-top-' + newval );
				}
			});
		});

		api('ocean_pagination_align', function( value ) {
			value.bind( function( newval ) {
				if ( body.length ) {
					body.removeClass( 'pagination-center pagination-left pagination-right' );
					body.addClass( 'pagination-'+ newval );
				}
			});
		});

		// Both Sidebars layout page content width
		api( 'ocean_page_single_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_page_single_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_page_single_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.page.content-both-sidebars .content-area { width: ' + to + '%; } body.page.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.page.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
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

		// Both Sidebars layout page sidebars width
		api( 'ocean_page_single_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_page_single_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_page_single_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.page.content-both-sidebars .widget-area{width:' + to + '%;} body.page.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.page.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
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

		// Both Sidebars layout search content width
		api( 'ocean_search_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_search_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_search_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.search-results.content-both-sidebars .content-area { width: ' + to + '%; } body.search-results.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.search-results.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
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

		// Both Sidebars layout search sidebars width
		api( 'ocean_search_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_search_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_search_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.search-results.content-both-sidebars .widget-area{width:' + to + '%;} body.search-results.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.search-results.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
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

	/******** Site Background *********/

	    api('ocean_background_color', function( value ) {
	      value.bind( function( newval ) {
	        if ( newval ) {
	          $( 'body, .has-parallax-footer #main' ).css( 'background-color', newval );
	        }
	      });
	    });

	    api('ocean_background_image_position', function( value ) {
	      value.bind( function( newval ) {
	        if ( newval ) {
	          body.css( 'background-position', newval );
	        }
	      });
	    });

	    api('ocean_background_image_attachment', function( value ) {
	      value.bind( function( newval ) {
	        if ( newval ) {
	          body.css( 'background-attachment', newval );
	        }
	      });
	    });

	    api('ocean_background_image_repeat', function( value ) {
	      value.bind( function( newval ) {
	        if ( newval ) {
	          body.css( 'background-repeat', newval );
	        }
	      });
	    });

	    api('ocean_background_image_size', function( value ) {
	      value.bind( function( newval ) {
	        if ( newval ) {
	          body.css( 'background-size', newval );
	        }
	      });
		});


	/******** Layouts *********/

	api('ocean_boxed_dropdshadow', function( value ) {
		value.bind( function( newval ) {
			if ( newval ) {
				body.addClass( 'wrap-boxshadow' );
			} else {
				body.removeClass( 'wrap-boxshadow' );
			}
		});
	});

  /******** Top Bar *********/

	    // Content
	    api('ocean_top_bar_content', function( value ) {
	      value.bind( function( newval ) {
	        $( '#top-bar-content .topbar-content' ).html( newval );
	      });
	    });

	    // Full width
	    api('ocean_top_bar_full_width', function( value ) {
	    	value.bind( function( newval ) {
				var $inner = $( '#top-bar' );
				if ( true == newval ) {
					$inner.removeClass( 'container' );
				} else {
					$inner.addClass( 'container' );
				}
			});
	    });

		// Visibility
		api('ocean_top_bar_visibility', function( value ) {
			value.bind( function( newval ) {
				var topBar = $( '#top-bar-wrap' );
				if ( topBar.length ) {
					$.each( visibility, function( i, v ) {
						topBar.removeClass( v );
					});
					topBar.addClass( newval );
				}
			});
		});

  /******** Header *********/

	    // Full width
	    api('ocean_header_full_width', function( value ) {
	    	value.bind( function( newval ) {
				var $inner = $( '#site-header-inner' );
				if ( true == newval && ! siteHeader.hasClass( 'custom-header' ) ) {
					$inner.removeClass( 'container' );
				} else {
					$inner.addClass( 'container' );
				}
			});
	    });

		// Custom Header add container class
		api('ocean_add_custom_header_container', function( value ) {
			value.bind( function( newval ) {
				var $inner = $( '#site-header.custom-header #site-header-inner' );
				if ( false == newval ) {
					$inner.removeClass( 'container' );
				} else {
					$inner.addClass( 'container' );
				}
			});
		});

		// Header Height
		api( 'ocean_header_height', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_header_height' );
				if ( to ) {
					var style = '<style class="customizer-ocean_header_height">#site-logo #site-logo-inner,.oceanwp-social-menu .social-menu-inner,#site-header.full_screen-header .menu-bar-inner, .after-header-content .after-header-content-inner { height: ' + to + 'px; }#site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a, .after-header-content-inner > a { line-height: ' + to + 'px; }</style>';
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
		api( 'ocean_top_header_height', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_top_header_height' );
				if ( to ) {
					var style = '<style class="customizer-ocean_top_header_height">#site-header.top-header .oceanwp-social-menu,#site-header.top-header #search-toggle { height: ' + to + 'px; }#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.top-header .oceanwp-mobile-menu-icon a { line-height: ' + to + 'px; }</style>';
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

		// Medium Header Hidden Menu Class
		api('ocean_medium_header_hidden_menu', function( value ) {
			value.bind( function( newval ) {
				var mediumHeader = $( '#site-header.medium-header' );
				if ( newval ) {
					mediumHeader.addClass( 'hidden-menu' );
				} else {
					mediumHeader.removeClass( 'hidden-menu' );
				}
			});
		});

		// Closed vertical header
		api('ocean_vertical_header_closed', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					body.addClass( 'vh-closed' );
				} else {
					body.removeClass( 'vh-closed' );
				}
			});
		});

		// Header Border Bottom
		api('ocean_has_header_border_bottom', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					body.removeClass( 'no-header-border' );
				} else {
					body.addClass( 'no-header-border' );
				}
			});
		});

	    // Content
	    api('ocean_after_header_content', function( value ) {
	      value.bind( function( newval ) {
	        $( '#site-header .after-header-content-inner' ).html( newval );
	      });
	    });

	    api('ocean_header_image_position', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '#site-header' ).css( 'background-position', newval );
				}
			});
		});

		api('ocean_header_image_attachment', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '#site-header' ).css( 'background-attachment', newval );
				}
			});
		});

		api('ocean_header_image_repeat', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '#site-header' ).css( 'background-repeat', newval );
				}
			});
		});

		api('ocean_header_image_size', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '#site-header' ).css( 'background-size', newval );
				}
			});
		});

		// Dropdown Border Top
		api('ocean_menu_dropdown_top_border', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '#site-navigation-wrap' ).removeClass( 'no-top-border' );
				} else {
					$( '#site-navigation-wrap' ).addClass( 'no-top-border' );
				}
			});
		});

		// Menu Position
		api('ocean_menu_position', function( value ) {
			value.bind( function( newval ) {
				if ( siteHeader.length && ! siteHeader.hasClass( 'medium-header' ) ) {
					$.each( menuPosition, function( i, v ) {
						siteHeader.removeClass( v );
					});
					siteHeader.addClass( newval );
				}
			});
		});

		// Center Header Style Menus Position
		api('ocean_center_header_menu_position', function( value ) {
			value.bind( function( newval ) {
				var headerInner = $( '#site-header.center-header #site-header-inner' );
				if ( headerInner.length ) {
					$.each( centerMenusPosition, function( i, v ) {
						headerInner.removeClass( v );
					});
					headerInner.addClass( newval );
				}
			});
		});

		// Medium Header Style Menu Position
		api('ocean_medium_header_menu_position', function( value ) {
			value.bind( function( newval ) {
				var siteNav = $( '#site-navigation-wrap' );
				if ( siteNav.length && $( '#site-header' ).hasClass( 'medium-header' ) ) {
					$.each( mediumMenuPosition, function( i, v ) {
						siteNav.removeClass( v );
					});
					siteNav.addClass( newval );
				}
			});
		});

		// Vertical Header Style Position
		api('ocean_vertical_header_position', function( value ) {
			value.bind( function( newval ) {
				var body = $( 'body.vertical-header-style' );
				if ( body.length && $( '#site-header' ).hasClass( 'vertical-header' ) ) {
					$.each( verticalHeaderPosition, function( i, v ) {
						body.removeClass( v );
					});
					body.addClass( newval );
				}
			});
		});

		// Vertical Header Style Shadow
		api('ocean_vertical_header_shadow', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '#site-header.vertical-header' ).addClass( 'has-shadow' );
				} else {
					$( '#site-header.vertical-header' ).removeClass( 'has-shadow' );
				}
			});
		});

		// Vertical Header Style Logo Position
		api('ocean_vertical_header_logo_position', function( value ) {
			value.bind( function( newval ) {
				var siteHeader = $( '#site-header.vertical-header' );
				if ( siteHeader.length && siteHeader.hasClass( 'vertical-header' ) ) {
					$.each( verticalHeaderLogoPosition, function( i, v ) {
						siteHeader.removeClass( v );
					});
					siteHeader.addClass( newval );
				}
			});
		});

		// Mobile Header Height
		api( 'ocean_mobile_header_height', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_mobile_header_height' );
				if ( to ) {
					var style = '<style class="customizer-ocean_mobile_header_height">@media only screen and (max-width: 959px) {#site-logo #site-logo-inner{height: ' + to + 'px;}.oceanwp-mobile-menu-icon a { line-height: ' + to + 'px; }</style>';
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

	    // Mobile menu icon
		api('ocean_mobile_menu_open_icon', function( value ) {
			value.bind( function( newval ) {
				var $mobileMenuIcon = $( '.oceanwp-mobile-menu-icon a i' );

				if ( $mobileMenuIcon.length ) {
					$mobileMenuIcon.removeClass();
					$mobileMenuIcon.addClass( newval );
				}
			});
		});

	    // Mobile menu text
	    api('ocean_mobile_menu_text', function( value ) {
			value.bind( function( newval ) {
				$( '.oceanwp-mobile-menu-icon a .oceanwp-text' ).html( newval );
			});
	    });

	    // Mobile menu text
	    api('ocean_mobile_menu_close_text', function( value ) {
			value.bind( function( newval ) {
				$( '.oceanwp-mobile-menu-icon a .oceanwp-close-text' ).html( newval );
			});
	    });

	    // Mobile menu close button icon
		api('ocean_mobile_menu_close_btn_icon', function( value ) {
			value.bind( function( newval ) {
				var $closeIcon = $( 'a.sidr-class-toggle-sidr-close i' );

				if ( $closeIcon.length ) {
					$closeIcon.removeClass();
					$closeIcon.addClass( newval );
				}
			});
		});

	    // Mobile menu close button text
	    api('ocean_mobile_menu_close_btn_text', function( value ) {
			value.bind( function( newval ) {
				$( 'a.sidr-class-toggle-sidr-close .sidr-class-close-text' ).html( newval );
			});
	    });

	    // Custom hamburger mobile menu button color
		api( 'ocean_mobile_menu_open_hamburger_color', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_mobile_menu_open_hamburger_color' );
				if ( to ) {
					var style = '<style class="customizer-ocean_mobile_menu_open_hamburger_color">.mobile-menu .hamburger-inner, .mobile-menu .hamburger-inner::before, .mobile-menu .hamburger-inner::after { background-color: ' + to + '; }</style>';
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

	    // Drop down mobile menu min height
		api( 'ocean_dropdown_mobile_menu_max_height', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_dropdown_mobile_menu_max_height' );
				if ( to ) {
					var style = '<style class="customizer-ocean_dropdown_mobile_menu_max_height">#mobile-dropdown { max-height: ' + to + 'px !important; }</style>';
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

	/******** Page Header *********/

		api( 'ocean_page_header_bg_title_breadcrumb_position', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_page_header_bg_title_breadcrumb_position' );
				if ( to ) {
					var style = '<style class="customizer-ocean_page_header_bg_title_breadcrumb_position">.background-image-page-header .page-header-inner, .background-image-page-header .site-breadcrumbs {text-align: ' + to + ';}</style>';
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

		api('ocean_page_header_bg_image_position', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.page-header' ).css( 'background-position', newval );
				}
				if ( 'initial' == newval ) {
					$( '.page-header' ).css( 'background-position', 'top center' );
				}
			});
		});

		api('ocean_page_header_bg_image_attachment', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.page-header' ).css( 'background-attachment', newval );
				}
			});
		});

		api('ocean_page_header_bg_image_repeat', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.page-header' ).css( 'background-repeat', newval );
				}
				if ( 'initial' == newval ) {
					$( '.page-header' ).css( 'background-repeat', 'no-repeat' );
				}
			});
		});

		api('ocean_page_header_bg_image_size', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.page-header' ).css( 'background-size', newval );
				}
				if ( 'initial' == newval ) {
					$( '.page-header' ).css( 'background-size', 'cover' );
				}
			});
		});

		// Visibility
		api('ocean_page_header_visibility', function( value ) {
			value.bind( function( newval ) {
				var pageHeader = $( '.page-header' );
				if ( pageHeader.length ) {
					$.each( visibility, function( i, v ) {
						pageHeader.removeClass( v );
					});
					pageHeader.addClass( newval );
				}
			});
		});

		// Breadcrumb separator
		api('ocean_breadcrumb_separator', function( value ) {
			value.bind( function( newval ) {
				$( '.site-breadcrumbs ul li .breadcrumb-sep' ).text( newval );
			});
		});

		// Home item
		api('ocean_breadcrumb_home_item', function( value ) {
			value.bind( function( newval ) {
				var $icon_item = $( '.site-breadcrumbs ul li i, .site-breadcrumbs ol li i, .site-breadcrumbs ul li .owp-icon, .site-breadcrumbs ol li .owp-icon' ),
					$home_item = $( '.site-breadcrumbs ul li .breadcrumb-home, .site-breadcrumbs ol li .breadcrumb-home' );

				if ( 'icon' == newval && $icon_item.length ) {
					$icon_item.removeClass( 'has-text' );
					$home_item.addClass( 'has-icon' );
				}

				if ( 'text' == newval ) {
					$icon_item.addClass( 'icon-home has-text' );
					$home_item.removeClass( 'has-icon' );
				}
			});
		});

		// Translation for Homepage
		api('ocean_breadcrumb_translation_home', function( value ) {
			value.bind( function( newval ) {
				$( '.site-breadcrumbs ul li .breadcrumb-home' ).text( newval );
			});
		});

		// Translation for "404 Not Found"
		api('ocean_breadcrumb_translation_error', function( value ) {
			value.bind( function( newval ) {
				$( '.site-breadcrumbs ul li .breadcrumb-error' ).text( newval );
			});
		});

		// Translation for "Search results for"
		api('ocean_breadcrumb_translation_search', function( value ) {
			value.bind( function( newval ) {
				$( '.site-breadcrumbs ul li .breadcrumb-search' ).text( newval );
			});
		});

	/******** Blog *********/

		// Both Sidebars layout blog archives content width
		api( 'ocean_blog_archives_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_blog_archives_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_blog_archives_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.blog.content-both-sidebars .content-area, body.archive.content-both-sidebars .content-area { width: ' + to + '%; } body.blog.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.blog.content-both-sidebars.ssc-style .widget-area, body.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.archive.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
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

		// Both Sidebars layout blog archives sidebars width
		api( 'ocean_blog_archives_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_blog_archives_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_blog_archives_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.blog.content-both-sidebars .widget-area, body.archive.content-both-sidebars .widget-area{width:' + to + '%;} body.blog.content-both-sidebars.scs-style .content-area, body.archive.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.blog.content-both-sidebars.ssc-style .content-area, body.archive.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
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

		// Both Sidebars layout single post content width
		api( 'ocean_blog_single_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_blog_single_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_blog_single_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-post.content-both-sidebars .content-area { width: ' + to + '%; } body.single-post.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-post.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
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

		// Both Sidebars layout blog archives sidebars width
		api( 'ocean_blog_single_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_blog_single_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_blog_single_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-post.content-both-sidebars .widget-area{width:' + to + '%;} body.single-post.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.single-post.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
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

		// Overlay on image hover
		api('ocean_blog_image_overlay', function( value ) {
			value.bind( function( newval ) {
				var overlay = $( '.blog-entry.post .thumbnail .thumbnail-link > span' );
				if ( newval ) {
					overlay.removeClass( 'no-overlay' );
					overlay.addClass( 'overlay' );
				} else {
					overlay.removeClass( 'overlay' );
					overlay.addClass( 'no-overlay' );
				}
			});
		});

		// Title breadcrumb position
		api( 'ocean_blog_single_title_breadcrumb_position', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_blog_single_title_breadcrumb_position' );
				if ( to ) {
					var style = '<style class="customizer-ocean_blog_single_title_breadcrumb_position">.single-post .background-image-page-header .page-header-inner, .single-post .background-image-page-header .site-breadcrumbs {text-align: ' + to + ';}</style>';
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

		// Image in page header
		api('ocean_blog_single_title_bg_image_position', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.single-post .page-header' ).css( 'background-position', newval );
				}
				if ( 'initial' == newval ) {
					$( '.single-post .page-header' ).css( 'background-position', 'top center' );
				}
			});
		});

		api('ocean_blog_single_title_bg_image_attachment', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.single-post .page-header' ).css( 'background-attachment', newval );
				}
			});
		});

		api('ocean_blog_single_title_bg_image_repeat', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.single-post .page-header' ).css( 'background-repeat', newval );
				}
				if ( 'initial' == newval ) {
					$( '.single-post .page-header' ).css( 'background-repeat', 'no-repeat' );
				}
			});
		});

		api('ocean_blog_single_title_bg_image_size', function( value ) {
			value.bind( function( newval ) {
				if ( newval ) {
					$( '.single-post .page-header' ).css( 'background-size', newval );
				}
				if ( 'initial' == newval ) {
					$( '.single-post .page-header' ).css( 'background-size', 'cover' );
				}
			});
		});

		// Blog thumbnail style vertical position
		api('ocean_blog_thumbnail_vertical_position', function( value ) {
			value.bind( function( newval ) {
				var blogThumbnail = $( '.blog-entry.thumbnail-entry .blog-entry-inner' );
				if ( blogThumbnail.length ) {
					$.each( blogThumbnailPosition, function( i, v ) {
						blogThumbnail.removeClass( v );
					});
					blogThumbnail.addClass( newval );
				}
			});
		});

		// Blog infinite scroll spinners color
		api( 'ocean_blog_infinite_scroll_spinners_color', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_blog_infinite_scroll_spinners_color' );
				if ( to ) {
					var style = '<style class="customizer-ocean_blog_infinite_scroll_spinners_color">.loader-ellips__dot {background-color: ' + to + ';}</style>';
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

		// Blog infinite scroll last text
		api('ocean_blog_infinite_scroll_last_text', function( value ) {
			value.bind( function( newval ) {
				$( '.infinite-scroll-last' ).text( newval );
			});
		});

		// Blog infinite scroll error text
		api('ocean_blog_infinite_scroll_error_text', function( value ) {
			value.bind( function( newval ) {
				$( '.infinite-scroll-error' ).text( newval );
			});
		});

		// Full width content max width
		api( 'ocean_blog_single_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_blog_single_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_blog_single_content_width">.single-post.content-max-width .thumbnail, .single-post.content-max-width .entry-header, .single-post.content-max-width ul.meta, .single-post.content-max-width .entry-content p, .single-post.content-max-width .entry-content h1, .single-post.content-max-width .entry-content h2, .single-post.content-max-width .entry-content h3, .single-post.content-max-width .entry-content h4, .single-post.content-max-width .entry-content h5, .single-post.content-max-width .entry-content h6, .single-post.content-max-width .wp-block-image, .single-post.content-max-width .wp-block-gallery, .single-post.content-max-width .wp-block-video, .single-post.content-max-width .wp-block-quote, .single-post.content-max-width .wp-block-text-columns, .single-post.content-max-width .entry-content ul, .single-post.content-max-width .entry-content ol, .single-post.content-max-width .wp-block-cover-text, .single-post.content-max-width .post-tags, .single-post.content-max-width .comments-are, .wp-block-separator.is-style-wide{max-width:' + to + 'px;} .single-post.content-max-width .wp-block-image.alignleft, .single-post.content-max-width .wp-block-image.alignright{max-width:'+ to / 2 +'px;} .single-post.content-max-width .wp-block-image.alignleft{margin-left: calc( 50% - '+ to / 2 +'px);} .single-post.content-max-width .wp-block-image.alignright{margin-right: calc( 50% - '+ to / 2 +'px);}</style>';
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

		api("oceanwp_single_post_header_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-oceanwp_single_post_header_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-oceanwp_single_post_header_background">.single-post-header-wrap, .single-header-ocean-6 .blog-post-title, .single-header-ocean-7 .blog-post-title{ background-color: ' + to + "; }</style>";
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

		api("oceanwp_single_post_header_background_cover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-oceanwp_single_post_header_background_cover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-oceanwp_single_post_header_background_cover">.single-post-header-wrap .header-color-overlay{ background-color: ' + to + "; }</style>";
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

		api("oceanwp_single_post_header_author_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-oceanwp_single_post_header_author_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-oceanwp_single_post_header_author_color">.ocean-single-post-header .post-author-name, .ocean-single-post-header .post-author-name a{color: ' + to + "; }</style>";
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

		api("oceanwp_single_post_header_author_bio_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-oceanwp_single_post_header_author_bio_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-oceanwp_single_post_header_author_bio_color">.ocean-single-post-header .post-author-description{color: ' + to + "; }</style>";
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

		api("oceanwp_single_post_meta_icon_clr", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-oceanwp_single_post_meta_icon_clr");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-oceanwp_single_post_meta_icon_clr">.ocean-single-post-header ul.meta-item li i { color: ' + to + '; } .ocean-single-post-header ul.meta-item li .owp-icon use { stroke: ' + to + "; }</style>";
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

	/******** Footer *********/

		// Tablet columns class
		api('ocean_footer_widgets_tablet_columns', function( value ) {
			value.bind( function( newval ) {
				var tabletWidgets = $( '#footer-widgets' );
				if ( tabletWidgets.length ) {
					$.each( tabletCol, function( i, v ) {
						tabletWidgets.removeClass( v );
					});
					tabletWidgets.addClass( 'tablet-'+ newval +'-col' );
				}
			});
		});

		// Mobile columns class
		api('ocean_footer_widgets_mobile_columns', function( value ) {
			value.bind( function( newval ) {
				var mobileWidgets = $( '#footer-widgets' );
				if ( mobileWidgets.length ) {
					$.each( mobileCol, function( i, v ) {
						mobileWidgets.removeClass( v );
					});
					mobileWidgets.addClass( 'mobile-'+ newval +'-col' );
				}
			});
		});

		// Add container class
		api('ocean_add_footer_container', function( value ) {
			value.bind( function( newval ) {
				var $inner = $( '#footer-widgets .footer-widgets-inner' );
				if ( false == newval ) {
					$inner.removeClass( 'container' );
				} else {
					$inner.addClass( 'container' );
				}
			});
		});

		// Copyright text
		api('ocean_footer_copyright_text', function( value ) {
			value.bind( function( newval ) {
				$( '#copyright' ).html( newval );
			});
		});

		// Footer widgets visibility
		api('ocean_footer_widgets_visibility', function( value ) {
			value.bind( function( newval ) {
				var footerWidgets = $( '#footer-widgets' );
				if ( footerWidgets.length ) {
					$.each( visibility, function( i, v ) {
						footerWidgets.removeClass( v );
					});
					footerWidgets.addClass( newval );
				}
			});
		});

		// Footer bottom visibility
		api('ocean_bottom_footer_visibility', function( value ) {
			value.bind( function( newval ) {
				var footerBottom = $( '#footer-bottom' );
				if ( footerBottom.length ) {
					$.each( visibility, function( i, v ) {
						footerBottom.removeClass( v );
					});
					footerBottom.addClass( newval );
				}
			});
		});

	/******** Styling *********/

		api("ocean_page_header_bg_image_height", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_bg_image_height");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_bg_image_height">.page-header { height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_bg_image_overlay_opacity", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_bg_image_overlay_opacity");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_bg_image_overlay_opacity">.background-image-page-header-overlay { opacity: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_bg_image_overlay_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_bg_image_overlay_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_bg_image_overlay_color">.background-image-page-header-overlay { background-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_top_padding">.page-header, .has-transparent-header .page-header { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_bottom_padding">.page-header, .has-transparent-header .page-header { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_tablet_top_padding">@media (max-width: 768px){.page-header, .has-transparent-header .page-header { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_tablet_bottom_padding">@media (max-width: 768px){.page-header, .has-transparent-header .page-header { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_mobile_top_padding">@media (max-width: 480px){.page-header, .has-transparent-header .page-header { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_mobile_bottom_padding">@media (max-width: 480px){.page-header, .has-transparent-header .page-header { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_background">.page-header { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_header_title_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_header_title_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_header_title_color">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_single_title_bg_image_height", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_single_title_bg_image_height");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_single_title_bg_image_height">.single-post .page-header { height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_single_title_bg_image_overlay_opacity", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_single_title_bg_image_overlay_opacity");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_single_title_bg_image_overlay_opacity">.single-post .background-image-page-header-overlay { opacity: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_single_title_bg_image_overlay_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_single_title_bg_image_overlay_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_single_title_bg_image_overlay_color">.single-post .background-image-page-header-overlay { background-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_breadcrumbs_text_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-breadcrumbs_text_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_breadcrumbs_text_color">.site-breadcrumbs, .background-image-page-header .site-breadcrumbs { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_breadcrumbs_seperator_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-breadcrumbs_seperator_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_breadcrumbs_seperator_color">.site-breadcrumbs ul li .breadcrumb-sep, .site-breadcrumbs ol li .breadcrumb-sep { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_breadcrumbs_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-breadcrumbs_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_breadcrumbs_link_color">.site-breadcrumbs a, .background-image-page-header .site-breadcrumbs a { color: ' + to + '; } .site-breadcrumbs a .owp-icon use, .background-image-page-header .site-breadcrumbs a .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_breadcrumbs_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-breadcrumbs_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_breadcrumbs_link_color_hover">.site-breadcrumbs a:hover, .background-image-page-header .site-breadcrumbs a:hover { color: ' + to + '; } .site-breadcrumbs a:hover .owp-icon use, .background-image-page-header .site-breadcrumbs a:hover .owp-icon use { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_bottom_position", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_bottom_position");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_bottom_position">#scroll-top { bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_size">#scroll-top { width: ' + to + "px;height: " + to + "px;line-height: " + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_content_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_content_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_content_top_padding">#main #content-wrap, .separate-layout #main #content-wrap { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_content_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_content_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_content_bottom_padding">#main #content-wrap, .separate-layout #main #content-wrap { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_content_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_content_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_content_tablet_top_padding">@media (max-width: 768px){#main #content-wrap, .separate-layout #main #content-wrap { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_content_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_content_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_content_tablet_bottom_padding">@media (max-width: 768px){#main #content-wrap, .separate-layout #main #content-wrap { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_content_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_content_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_content_mobile_top_padding">@media (max-width: 480px){#main #content-wrap, .separate-layout #main #content-wrap { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_page_content_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_page_content_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_page_content_mobile_bottom_padding">@media (max-width: 480px){#main #content-wrap, .separate-layout #main #content-wrap { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_icon_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_icon_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_icon_size">#scroll-top { font-size: ' + to + 'px; } #scroll-top .owp-icon { width: ' + to + 'px; height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_border_radius">#scroll-top { border-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_color">#scroll-top { color: ' + to + '; } #scroll-top .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_color_hover">#scroll-top:hover { color: ' + to + '; } #scroll-top:hover .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_bg">#scroll-top { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_bg_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_bg_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_bg_hover">#scroll-top:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_border", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_border");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_border">#scroll-top { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_scroll_top_border_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_scroll_top_border_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_scroll_top_border_hover">#scroll-top:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_font_size">.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span { font-size: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_border_width">.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span { border-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_border_color">.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_border_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_border_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_border_hover_color">.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_color">.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span { color: ' + to + '; } .page-numbers a .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_hover_color">.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover { color: ' + to + '; } .page-numbers a:hover .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_bg">.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_pagination_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_pagination_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_pagination_hover_bg">.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_label_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_label_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_label_color">label { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_top_padding">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_right_padding">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_bottom_padding">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_left_padding">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_top_padding">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_right_padding">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_bottom_padding">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_left_padding">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_top_padding">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_right_padding">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_bottom_padding">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_left_padding">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_border_radius">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_font_size">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { font-size: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_background">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_border_color">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea,.select2-container .select2-choice, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_border_color_focus", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_border_color_focus");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_border_color_focus">form input[type="text"]:focus,form input[type="password"]:focus,form input[type="email"]:focus,form input[type="tel"]:focus,form input[type="url"]:focus,form input[type="search"]:focus,form textarea:focus,.select2-drop-active,.select2-dropdown-open.select2-drop-above .select2-choice,.select2-dropdown-open.select2-drop-above .select2-choices,.select2-drop.select2-drop-above.select2-drop-active,.select2-container-active .select2-choice,.select2-container-active .select2-choices, body div.wpforms-container-full .wpforms-form input:focus, body div.wpforms-container-full .wpforms-form textarea:focus, body div.wpforms-container-full .wpforms-form select:focus { border-color: ' +
						to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_top_border_width">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-top-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_right_border_width">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-right-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_bottom_border_width">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-bottom-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_left_border_width">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-left-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_top_border_width">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-top-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_right_border_width">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-right-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_bottom_border_width">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-bottom-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_tablet_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_tablet_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_tablet_left_border_width">@media (max-width: 768px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-left-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_top_border_width">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-top-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_right_border_width">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-right-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_bottom_border_width">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-bottom-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_mobile_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_mobile_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_mobile_left_border_width">@media (max-width: 480px){form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { border-left-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_input_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_input_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_input_color">form input[type="text"],form input[type="password"],form input[type="email"],form input[type="tel"],form input[type="url"],form input[type="search"],form textarea, body div.wpforms-container-full .wpforms-form input[type=date], body div.wpforms-container-full .wpforms-form input[type=datetime], body div.wpforms-container-full .wpforms-form input[type=datetime-local], body div.wpforms-container-full .wpforms-form input[type=email], body div.wpforms-container-full .wpforms-form input[type=month], body div.wpforms-container-full .wpforms-form input[type=number], body div.wpforms-container-full .wpforms-form input[type=password], body div.wpforms-container-full .wpforms-form input[type=range], body div.wpforms-container-full .wpforms-form input[type=search], body div.wpforms-container-full .wpforms-form input[type=tel], body div.wpforms-container-full .wpforms-form input[type=text], body div.wpforms-container-full .wpforms-form input[type=time], body div.wpforms-container-full .wpforms-form input[type=url], body div.wpforms-container-full .wpforms-form input[type=week], body div.wpforms-container-full .wpforms-form select, body div.wpforms-container-full .wpforms-form textarea { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mailchimp_input_border", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mailchimp_input_border");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mailchimp_input_border">body .oceanwp-newsletter-form-wrap input[type="email"] { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mailchimp_input_border_focus", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mailchimp_input_border_focus");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mailchimp_input_border_focus">body .oceanwp-newsletter-form-wrap input[type="email"]:focus,body #footer-widgets .oceanwp-newsletter-form-wrap input[type="email"]:focus { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_links_color">a { color: ' + to + '; } a .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_links_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_links_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_links_color_hover">a:hover { color: ' + to + '; } a:hover .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_top_padding">.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_right_padding">.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_bottom_padding">.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_left_padding">.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_tablet_top_padding">@media (max-width: 768px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_tablet_right_padding">@media (max-width: 768px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_tablet_bottom_padding">@media (max-width: 768px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_tablet_left_padding">@media (max-width: 768px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_mobile_top_padding">@media (max-width: 480px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_mobile_right_padding">@media (max-width: 480px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_mobile_bottom_padding">@media (max-width: 480px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_mobile_left_padding">@media (max-width: 480px){.theme-button,input[type="submit"],button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_border_radius">input[type="button"], input[type="reset"], input[type="submit"], .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { border-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_color">body .theme-button,body input[type="submit"],body button[type="submit"],body button,body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_hover_color">body .theme-button:hover,body input[type="submit"]:hover,body button[type="submit"]:hover,body button:hover,body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_bg">body input[type="button"],body button[type="submit"], body input[type="reset"], body input[type="submit"], body .button, body div.wpforms-container-full .wpforms-form input[type=submit], body div.wpforms-container-full .wpforms-form button[type=submit], body div.wpforms-container-full .wpforms-form .wpforms-page-button { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_button_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_button_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_button_hover_bg">body input[type="button"]:hover,body button[type="submit"]:hover, body input[type="reset"]:hover, body input[type="submit"]:hover, body .button:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:hover, body div.wpforms-container-full .wpforms-form input[type=submit]:active, body div.wpforms-container-full .wpforms-form button[type=submit]:hover, body div.wpforms-container-full .wpforms-form button[type=submit]:active, body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover, body div.wpforms-container-full .wpforms-form .wpforms-page-button:active { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_boxed_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_boxed_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_boxed_width">.boxed-layout #wrap, .boxed-layout .parallax-footer, .boxed-layout .owp-floating-bar, .osf-footer .site-footer { width: ' + to + "px; }.osf-footer .site-footer { margin-left: -" + to / 2 + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_boxed_outside_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_boxed_outside_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_boxed_outside_bg">.boxed-layout { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_separate_outside_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_separate_outside_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_separate_outside_bg">.separate-layout, .has-parallax-footer.separate-layout #main { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_boxed_inner_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_boxed_inner_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_boxed_inner_bg">.boxed-layout #wrap, .separate-layout .content-area, .separate-layout .widget-area .sidebar-box, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner, .has-parallax-footer:not(.separate-layout) #main { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_separate_content_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_separate_content_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_separate_content_padding">.separate-layout .content-area, .separate-layout.content-left-sidebar .content-area, .content-both-sidebars.scs-style .content-area, .separate-layout.content-both-sidebars.ssc-style .content-area, body.separate-blog.separate-layout #blog-entries > *, body.separate-blog.separate-layout .oceanwp-pagination, body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner { padding: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_thumbnail_category_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_thumbnail_category_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_thumbnail_category_color">.blog-entry.thumbnail-entry .blog-entry-category a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_thumbnail_category_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_thumbnail_category_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_thumbnail_category_hover_color">.blog-entry.thumbnail-entry .blog-entry-category a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_thumbnail_comments_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_thumbnail_comments_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_thumbnail_comments_color">.blog-entry.thumbnail-entry .blog-entry-comments, .blog-entry.thumbnail-entry .blog-entry-comments a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_thumbnail_comments_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_thumbnail_comments_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_thumbnail_comments_hover_color">.blog-entry.thumbnail-entry .blog-entry-comments a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_blog_thumbnail_date_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_blog_thumbnail_date_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_blog_thumbnail_date_color">.blog-entry.thumbnail-entry .blog-entry-date { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_separate_widgets_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_separate_widgets_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_separate_widgets_padding">.separate-layout .widget-area .sidebar-box { padding: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_main_container_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_main_container_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_main_container_width">.container { width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_left_container_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_left_container_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_left_container_width">@media only screen and (min-width: 960px){ .content-area { width: ' + to + "%; } }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_width">@media only screen and (min-width: 960px){ .widget-area { width: ' + to + "%; } }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_bg">#top-bar-wrap { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_border_color">#top-bar-wrap { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_text_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_text_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_text_color">#top-bar-wrap,#top-bar-content strong { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_link_color">#top-bar-content a,#top-bar-social-alt a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_link_color_hover">#top-bar-content a:hover,#top-bar-social-alt a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_bg">.widget-area { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_top_padding">.widget-area { padding-top: ' + to + "px !important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_right_padding">.widget-area { padding-right: ' + to + "px !important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_bottom_padding">.widget-area { padding-bottom: ' + to + "px !important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_left_padding">.widget-area { padding-left: ' + to + "px !important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_tablet_top_padding">@media (max-width: 768px){.widget-area { padding-top: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_tablet_right_padding">@media (max-width: 768px){.widget-area { padding-right: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_tablet_bottom_padding">@media (max-width: 768px){.widget-area { padding-bottom: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_tablet_left_padding">@media (max-width: 768px){.widget-area { padding-left: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_mobile_top_padding">@media (max-width: 480px){.widget-area { padding-top: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_mobile_right_padding">@media (max-width: 480px){.widget-area { padding-right: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_mobile_bottom_padding">@media (max-width: 480px){.widget-area { padding-bottom: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_sidebar_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_sidebar_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_sidebar_mobile_left_padding">@media (max-width: 480px){.widget-area { padding-left: ' + to + "px !important; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_bg">.widget-area .sidebar-box { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_top_padding">.widget-area .sidebar-box { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_right_padding">.widget-area .sidebar-box { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_bottom_padding">.widget-area .sidebar-box { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_left_padding">.widget-area .sidebar-box { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_tablet_top_padding">@media (max-width: 768px){.widget-area .sidebar-box { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_tablet_right_padding">@media (max-width: 768px){.widget-area .sidebar-box { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_tablet_bottom_padding">@media (max-width: 768px){.widget-area .sidebar-box { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_tablet_left_padding">@media (max-width: 768px){.widget-area .sidebar-box { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_mobile_top_padding">@media (max-width: 480px){.widget-area .sidebar-box { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_mobile_right_padding">@media (max-width: 480px){.widget-area .sidebar-box { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_mobile_bottom_padding">@media (max-width: 480px){.widget-area .sidebar-box { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_mobile_left_padding">@media (max-width: 480px){.widget-area .sidebar-box { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_margin_bottom", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_margin_bottom");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_margin_bottom">.widget-area .sidebar-box, .separate-layout .sidebar-box { margin-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_titles_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_titles_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_titles_border_color">.widget-title { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_widgets_titles_margin_bottom", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_widgets_titles_margin_bottom");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_widgets_titles_margin_bottom">.widget-title { margin-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_top_padding">#top-bar { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_right_padding">#top-bar { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_bottom_padding">#top-bar { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_left_padding">#top-bar { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_tablet_top_padding">@media (max-width: 768px){#top-bar { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_tablet_right_padding">@media (max-width: 768px){#top-bar { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_tablet_bottom_padding">@media (max-width: 768px){#top-bar { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_tablet_left_padding">@media (max-width: 768px){#top-bar { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_mobile_top_padding">@media (max-width: 480px){#top-bar { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_mobile_right_padding">@media (max-width: 480px){#top-bar { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_mobile_bottom_padding">@media (max-width: 480px){#top-bar { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_mobile_left_padding">@media (max-width: 480px){#top-bar { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_font_size">#top-bar-social li a { font-size: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_tablet_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_tablet_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_tablet_font_size">@media (max-width: 768px){#top-bar-social li a,.sidr-class-social-menu-inner ul li a { font-size: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_mobile_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_mobile_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_mobile_font_size">@media (max-width: 768px){#top-bar-social li a,.sidr-class-social-menu-inner ul li a { font-size: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_right_padding">#top-bar-social li a { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_left_padding">#top-bar-social li a { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_tablet_right_padding">@media (max-width: 768px){#top-bar-social li a { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_tablet_left_padding">@media (max-width: 768px){#top-bar-social li a { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_mobile_right_padding">@media (max-width: 480px){#top-bar-social li a { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_mobile_left_padding">@media (max-width: 480px){#top-bar-social li a { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_links_color">#top-bar-social li a { color: ' + to + '; } #top-bar-social li a .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_bar_social_hover_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_bar_social_hover_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_bar_social_hover_links_color">body #top-bar #top-bar-social li a:hover { color: ' + to + '; } body #top-bar #top-bar-social li a:hover .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_top_padding");
				if (to && !siteHeader.hasClass("medium-header")) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_top_padding">#site-header-inner { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_right_padding");
				if (to && !siteHeader.hasClass("medium-header")) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_right_padding">#site-header-inner { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_bottom_padding");
				if (to && !siteHeader.hasClass("medium-header")) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_bottom_padding">#site-header-inner { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_left_padding");
				if (to && !siteHeader.hasClass("medium-header")) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_left_padding">#site-header-inner { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_tablet_top_padding">@media (max-width: 768px){#site-header-inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_tablet_right_padding">@media (max-width: 768px){#site-header-inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_tablet_bottom_padding">@media (max-width: 768px){#site-header-inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_tablet_left_padding">@media (max-width: 768px){#site-header-inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_mobile_top_padding">@media (max-width: 480px){#site-header-inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_mobile_right_padding">@media (max-width: 480px){#site-header-inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_mobile_bottom_padding">@media (max-width: 480px){#site-header-inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_mobile_left_padding">@media (max-width: 480px){#site-header-inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_background");
				if (to && !$("#site-header").hasClass("medium-header")) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_background">#site-header,.has-transparent-header .is-sticky #site-header,.has-vh-transparent .is-sticky #site-header.vertical-header,#searchform-header-replace { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_border_bottom", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_border_bottom");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_border_bottom">#site-header { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_transparent_header_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_transparent_header_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_transparent_header_bg">#site-header.transparent-header { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_hamburger_icon_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_hamburger_icon_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_hamburger_icon_width">#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after { width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_hamburger_icon_height", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_hamburger_icon_height");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_hamburger_icon_height">#site-header.full_screen-header .menu-bar .ham, #site-header.full_screen-header .menu-bar .ham:before, #site-header.full_screen-header .menu-bar .ham:after { height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_hamburger_icon_gap", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_hamburger_icon_gap");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_hamburger_icon_gap">#site-header.full_screen-header .menu-bar .ham:before { top: -' + to + 'px; } #site-header.full_screen-header .menu-bar .ham:after { top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_menu_bar_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_menu_bar_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_menu_bar_color">#site-header.full_screen-header .menu-bar .ham,#site-header.full_screen-header .menu-bar .ham:before,#site-header.full_screen-header .menu-bar .ham:after { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_menu_bar_close_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_menu_bar_close_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_menu_bar_close_color">#site-header.full_screen-header .menu-bar.exit .ham:before,#site-header.full_screen-header .menu-bar.exit .ham:after { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_bg">#site-header.full_screen-header #full-screen-menu { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_links_bg_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_links_bg_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_links_bg_color">#site-header.full_screen-header .fs-dropdown-menu li a { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_links_hover_bg_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_links_hover_bg_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_links_hover_bg_color">#site-header.full_screen-header .fs-dropdown-menu li a:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_links_color">#site-header.full_screen-header .fs-dropdown-menu li a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_links_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_links_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_links_hover_color">#site-header.full_screen-header .fs-dropdown-menu li a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_search_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_search_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_search_color">#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input,#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li label { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_search_dashed_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_search_dashed_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_search_dashed_bg">#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li label i { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_search_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_search_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_search_border_color">#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_search_hover_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_search_hover_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_search_hover_border_color">#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_header_search_focus_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_header_search_focus_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_header_search_focus_border_color">#site-header.full_screen-header .fs-dropdown-menu>li.search-toggle-li input:focus { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_header_menu_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_header_menu_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_header_menu_background">#site-header.top-header .header-top,#site-header.top-header #searchform-header-replace { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_header_search_button_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_header_search_button_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_header_search_button_border_color">#site-header.top-header #search-toggle { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_header_search_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_header_search_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_header_search_button_color">#site-header.top-header #search-toggle a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_top_header_search_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_top_header_search_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_top_header_search_button_hover_color">#site-header.top-header #search-toggle a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_top_header_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_top_header_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_top_header_bg">#site-header.medium-header .top-header-wrap,.is-sticky #site-header.medium-header.is-transparent .top-header-wrap,#searchform-header-replace { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_top_header_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_top_header_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_top_header_top_padding">#site-header.medium-header .top-header-wrap { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_top_header_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_top_header_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_top_header_bottom_padding">#site-header.medium-header .top-header-wrap { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_top_header_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_top_header_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_top_header_pablet_top_padding">@media (max-width: 768px){#site-header.medium-header .top-header-wrap { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_top_header_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_top_header_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_top_header_tablet_bottom_padding">@media (max-width: 768px){#site-header.medium-header .top-header-wrap { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_top_header_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_top_header_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_top_header_mobile_top_padding">@media (max-width: 480px){#site-header.medium-header .top-header-wrap { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_top_header_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_top_header_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_top_header_mobile_bottom_padding">@media (max-width: 480px){#site-header.medium-header .top-header-wrap { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_sticky_top_header_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_sticky_top_header_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_sticky_top_header_top_padding">.is-sticky #site-header.medium-header .top-header-wrap { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_sticky_top_header_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_sticky_top_header_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_sticky_top_header_bottom_padding">.is-sticky #site-header.medium-header .top-header-wrap { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_sticky_top_header_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_sticky_top_header_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_sticky_top_header_tablet_top_padding">@media (max-width: 768px){.is-sticky #site-header.medium-header .top-header-wrap { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_sticky_top_header_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_sticky_top_header_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_sticky_top_header_tablet_bottom_padding">@media (max-width: 768px){.is-sticky #site-header.medium-header .top-header-wrap { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_sticky_top_header_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_sticky_top_header_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_sticky_top_header_mobile_top_padding">@media (max-width: 480px){.is-sticky #site-header.medium-header .top-header-wrap { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_sticky_top_header_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_sticky_top_header_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_sticky_top_header_mobile_bottom_padding">@media (max-width: 480px){.is-sticky #site-header.medium-header .top-header-wrap { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_items_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_items_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_items_right_padding">#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_items_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_items_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_items_left_padding">#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_items_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_items_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_items_tablet_right_padding">@media (max-width: 768px){#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header .oceanwp-mobile-menu-icon a { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_items_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_items_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_items_tablet_left_padding">@media (max-width: 768px){#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_items_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_items_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_items_mobile_right_padding">@media (max-width: 480px){#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_items_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_items_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_items_mobile_left_padding">@media (max-width: 480px){#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header .oceanwp-mobile-menu-icon a { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_height", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_height");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_height">#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header .oceanwp-mobile-menu-icon a { line-height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_bg">#site-header.medium-header #site-navigation-wrap,#site-header.medium-header .oceanwp-mobile-menu-icon,.is-sticky #site-header.medium-header.is-transparent #site-navigation-wrap,.is-sticky #site-header.medium-header.is-transparent .oceanwp-mobile-menu-icon,#site-header.medium-header.is-transparent .is-sticky #site-navigation-wrap,#site-header.medium-header.is-transparent .is-sticky .oceanwp-mobile-menu-icon { background-color: ' +
						to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_search_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_search_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_search_bg">#site-header.medium-header #medium-searchform .search-bg { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_search_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_search_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_search_color">#site-header.medium-header #medium-searchform input { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_search_placeholder_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_search_placeholder_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_search_placeholder_color">#site-header.medium-header #medium-searchform label { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_search_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_search_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_search_button_color">#site-header.medium-header #medium-searchform button { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_search_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_search_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_search_button_hover_color">#site-header.medium-header #medium-searchform button:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_collapse_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_collapse_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_collapse_width">@media only screen and (max-width: ' + to + "px) {body.vertical-header-style.left-header #site-header.vertical-header { left: -266px; }body.vertical-header-style.left-header #outer-wrap {margin-left: 34px;}body.vertical-header-style.right-header #site-header.vertical-header {right: -266px;}body.vertical-header-style.right-header #outer-wrap {margin-right: 34px;}body.vertical-header-style.vh-opened.left-header #site-header.vertical-header {left: 0;}body.vertical-header-style.vh-opened.right-header #site-header.vertical-header {right: 0;}body.vertical-header-style.vh-opened #site-header.vertical-header #site-navigation-wrap {padding-right: 0;}#site-header.vertical-header .vertical-toggle { display: block; }#site-header.vertical-header #site-navigation-wrap { padding-right: 34px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_width");
				if (to) {
					/** @type {string} */
					var minus = to - 34;
					var img = '<style class="customizer-ocean_vertical_header_width">#site-header.vertical-header { width: ' + to + 'px; }body.vertical-header-style.left-header #outer-wrap { margin-left: ' + to + 'px; }body.vertical-header-style.right-header #outer-wrap { margin-right: ' + to + 'px; }body.vertical-header-style.vh-closed.left-header #site-header.vertical-header {left: -' + minus + 'px;}body.vertical-header-style.vh-closed.left-header #outer-wrap {margin-left: 34px;}body.vertical-header-style.vh-closed.right-header #site-header.vertical-header {right: -' + minus + 'px;}body.vertical-header-style.vh-closed.right-header #outer-wrap {margin-right: 34px;}@media only screen and (max-width: 1280px) {body.vertical-header-style.left-header #site-header.vertical-header {left: -' + minus + 'px;}body.vertical-header-style.left-header #outer-wrap {margin-left: 34px;}body.vertical-header-style.right-header #site-header.vertical-header {right: -' + minus + "px;}body.vertical-header-style.right-header #outer-wrap {margin-right: 34px;}}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_top_padding">#site-header.vertical-header #site-header-inner { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_right_padding">#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_bottom_padding">#site-header.vertical-header #site-header-inner { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_left_padding">#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_tablet_top_padding">@media (max-width: 768px){#site-header-inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_tablet_right_padding">@media (max-width: 768px){#site-header-inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_tablet_bottom_padding">@media (max-width: 768px){#site-header-inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_tablet_left_padding">@media (max-width: 768px){#site-header-inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_mobile_top_padding">@media (max-width: 480px){#site-header-inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_mobile_right_padding">@media (max-width: 480px){#site-header-inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_mobile_bottom_padding">@media (max-width: 480px){#site-header-inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_inner_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_inner_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_inner_mobile_left_padding">@media (max-width: 480px){#site-header-inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("vertical_header_search_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-vertical_header_search_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-vertical_header_search_border_width">#site-header.vertical-header #vertical-searchform form input { border-width: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_border_radius">#site-header.vertical-header #vertical-searchform form input, #site-header.vertical-header #vertical-searchform form .search-bg { border-radius: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_bg">#site-header.vertical-header #vertical-searchform form .search-bg { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_color">#site-header.vertical-header #vertical-searchform form input, #site-header.vertical-header #vertical-searchform form label { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_btn_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_btn_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_btn_color">#site-header.vertical-header #vertical-searchform form button { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_border_color">#site-header.vertical-header #vertical-searchform form input { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_hover_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_hover_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_hover_border_color">#site-header.vertical-header #vertical-searchform form input:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_focus_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_focus_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_focus_border_color">#site-header.vertical-header #vertical-searchform form input:focus { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_header_image_overlay_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_header_image_overlay_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_header_image_overlay_color">#site-header.has-header-media .overlay-header-media { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_search_btn_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_search_btn_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_search_btn_hover_color">#site-header.vertical-header #vertical-searchform form button:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_hamburger_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_hamburger_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_hamburger_color">.vertical-toggle .hamburger-inner, .vertical-toggle .hamburger-inner::before, .vertical-toggle .hamburger-inner::after{background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_menu_items_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_menu_items_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_menu_items_padding">#site-header.vertical-header #site-navigation-wrap .dropdown-menu>li>a { padding-top: ' + to + "px; padding-bottom: " + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_menu_items_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_menu_items_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_menu_items_border_color">#site-header.vertical-header #site-navigation-wrap .dropdown-menu li, #site-header.vertical-header #site-navigation-wrap .dropdown-menu .sub-menu { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_sub_menu_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_sub_menu_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_sub_menu_bg">#site-header.vertical-header #site-navigation-wrap .dropdown-menu .sub-menu { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_sub_menu_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_sub_menu_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_sub_menu_links_color">#site-header.vertical-header .dropdown-menu ul li a.menu-link { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_sub_menu_links_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_sub_menu_links_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_sub_menu_links_hover_color">#site-header.vertical-header .dropdown-menu ul li a.menu-link:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_sub_menu_links_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_sub_menu_links_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_sub_menu_links_bg">#site-header.vertical-header .dropdown-menu ul li a.menu-link { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_vertical_header_sub_menu_links_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_vertical_header_sub_menu_links_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_vertical_header_sub_menu_links_hover_bg">#site-header.vertical-header .dropdown-menu ul li a.menu-link:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_max_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_max_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_max_width">#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img { max-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_max_width_tablet", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_max_width_tablet");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_max_width_tablet">@media (max-width: 768px){#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img { max-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_max_width_mobile", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_max_width_mobile");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_max_width_mobile">@media (max-width: 480px){#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img { max-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_max_height", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_max_height");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_max_height">#site-header #site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img { max-height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_max_height_tablet", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_max_height_tablet");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_max_height_tablet">@media (max-width: 768px){#site-header #site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img { max-height: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_max_height_mobile", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_max_height_mobile");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_max_height_mobile">@media (max-width: 480px){#site-header #site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img { max-height: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_color">#site-logo a.site-logo-text { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_logo_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_logo_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_logo_hover_color">#site-logo a.site-logo-text:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_responsive_logo_height", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_responsive_logo_height");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_responsive_logo_height">#site-logo.has-responsive-logo .responsive-logo-link img { max-height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_bg">#searchform-overlay, #icon-searchform-overlay { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_input_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_input_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_input_color">#searchform-overlay form input,#searchform-overlay form label, #icon-searchform-overlay form input, #icon-searchform-overlay form label{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_placeholder_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_placeholder_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_placeholder_color">#searchform-overlay form label, #icon-searchform-overlay form label { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_input_dashed_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_input_dashed_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_input_dashed_bg">#searchform-overlay form label i, #icon-searchform-overlay form label i { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_input_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_input_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_input_border_color">#searchform-overlay form input, #icon-searchform-overlay form input { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_input_hover_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_input_hover_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_input_hover_border_color">#searchform-overlay form input:hover, #icon-searchform-overlay form input:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_input_focus_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_input_focus_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_input_focus_border_color">#searchform-overlay form input:focus, #icon-searchform-overlay form input:focus { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_close_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_close_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_close_button_color">#searchform-overlay a.search-overlay-close span::before, #searchform-overlay a.search-overlay-close span::after, #icon-searchform-overlay a.search-overlay-close span::before, #icon-searchform-overlay a.search-overlay-close span::after{ background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_links_effect_blue_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_links_effect_blue_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_links_effect_blue_color">.effect-one #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-three #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-five #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-five #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-nine #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-nine #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after { background-color: ' +
						to + "; } .effect-four #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-four #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span:after { color: " + to + "; } .effect-seven #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span:after { text-shadow: 10px 0 " +
						to + ", -10px 0 " + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_links_effect_dark_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_links_effect_dark_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_links_effect_dark_color">.effect-two #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after, .effect-eight #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-eight #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after { background-color: ' + to + "; } .effect-six #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:before, .effect-six #site-navigation-wrap .dropdown-menu > li > a.menu-link > span:after { border-color: " +
						to + "; } .effect-ten #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span, .effect-ten #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span{-webkit-box-shadow: 0 0 10px 4px " + to + "; -moz-box-shadow: 0 0 10px 4px " + to + "; box-shadow: 0 0 10px 4px " + to + ";}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_search_overlay_close_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_search_overlay_close_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_search_overlay_close_button_hover_color">#searchform-overlay .overlay-close:hover, #icon-searchform-overlay .overlay-close:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_items_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_items_padding");
				if (to && !$("#site-header").hasClass("medium-header")) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_items_padding">#site-navigation-wrap .dropdown-menu > li > a { padding: 0 ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_medium_header_menu_items_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_medium_header_menu_items_padding");
				if (to && $("#site-header").hasClass("medium-header")) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_medium_header_menu_items_padding">#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a { padding: 0 ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_link_color">#site-navigation-wrap .dropdown-menu > li > a, .oceanwp-mobile-menu-icon a { color: ' + to + '; } #site-navigation-wrap .dropdown-menu > li > a .owp-icon use,.oceanwp-mobile-menu-icon a .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_link_color_hover">#site-navigation-wrap .dropdown-menu > li > a:hover, .oceanwp-mobile-menu-icon a:hover { color: ' + to + '; } #site-navigation-wrap .dropdown-menu > li > a:hover .owp-icon use,.oceanwp-mobile-menu-icon a:hover .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_link_color_active", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_link_color_active");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_link_color_active">#site-navigation-wrap .dropdown-menu > .current-menu-item > a,#site-navigation-wrap .dropdown-menu > .current-menu-parent > a,#site-navigation-wrap .dropdown-menu > .current-menu-item > a:hover,#site-navigation-wrap .dropdown-menu > .current-menu-parent > a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_link_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_link_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_link_background">#site-navigation-wrap .dropdown-menu > li > a { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_link_hover_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_link_hover_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_link_hover_background">#site-navigation-wrap .dropdown-menu > li > a:hover,#site-navigation-wrap .dropdown-menu > li.sfHover > a { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_link_active_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_link_active_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_link_active_background">#site-navigation-wrap .dropdown-menu > .current-menu-item > a,#site-navigation-wrap .dropdown-menu > .current-menu-parent > a,#site-navigation-wrap .dropdown-menu > .current-menu-item > a:hover,#site-navigation-wrap .dropdown-menu > .current-menu-parent > a:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_width">.dropdown-menu .sub-menu { min-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_menu_bag_icon_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_menu_bag_icon_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_menu_bag_icon_color">.wcmenucart-cart-icon .wcmenucart-count { border-color: ' + to + '; }.wcmenucart-cart-icon .wcmenucart-count:after { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_menu_bag_icon_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_menu_bag_icon_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_menu_bag_icon_hover_color">.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count, .show-cart .wcmenucart-cart-icon .wcmenucart-count { background-color: ' + to + '; }.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count:after, .show-cart .wcmenucart-cart-icon .wcmenucart-count:after { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_menu_bag_icon_count_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_menu_bag_icon_count_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_menu_bag_icon_count_color">.wcmenucart-cart-icon .wcmenucart-count, .woo-menu-icon .wcmenucart-total span { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_menu_bag_icon_hover_count_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_menu_bag_icon_hover_count_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_menu_bag_icon_hover_count_color">.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count, .show-cart .wcmenucart-cart-icon .wcmenucart-count { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_background">.dropdown-menu .sub-menu,#searchform-dropdown,#icon-searchform-dropdown,.current-shop-items-dropdown { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_top_border", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_top_border");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_top_border">.dropdown-menu .sub-menu,#searchform-dropdown,#icon-searchform-dropdown,.current-shop-items-dropdown { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_borders", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_borders");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_borders">.dropdown-menu ul li.menu-item, .navigation > ul > li > ul.megamenu.sub-menu > li, .navigation .megamenu li ul.sub-menu { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_link_color">.dropdown-menu ul li a.menu-link { color: ' + to + '; } .dropdown-menu ul li a.menu-link .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_link_color_hover">.dropdown-menu ul li a.menu-link:hover { color: ' + to + '; } .dropdown-menu ul li a.menu-link:hover .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_link_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_link_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_link_hover_bg">.dropdown-menu ul li a.menu-link:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_link_color_active", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_link_color_active");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_link_color_active">.dropdown-menu ul > .current-menu-item > a.menu-link { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_menu_link_bg_active", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_menu_link_bg_active");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_menu_link_bg_active">.dropdown-menu ul > .current-menu-item > a { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_category_title_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_category_title_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_category_title_bg">.navigation li.mega-cat .mega-cat-title { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_category_title_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_category_title_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_category_title_color">.navigation li.mega-cat .mega-cat-title { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_category_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_category_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_category_links_color">.navigation li.mega-cat ul li .mega-post-title a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_category_links_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_category_links_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_category_links_hover_color">.navigation li.mega-cat ul li .mega-post-title a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_dropdown_category_date_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_dropdown_category_date_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_dropdown_category_date_color">.navigation li.mega-cat ul li .mega-post-date { color: ' + to + '; } .navigation li.mega-cat ul li .mega-post-date .owp-icon use{ stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_font_size">.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a { font-size: ' + to + 'px; } .oceanwp-social-menu ul li a .owp-icon,.oceanwp-social-menu .colored ul li a .owp-icon,.oceanwp-social-menu .minimal ul li a .owp-icon,.oceanwp-social-menu .dark ul li a .owp-icon { width: ' + to + 'px; height: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_tablet_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_tablet_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_tablet_font_size">@media (max-width: 768px){.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a,.sidr-class-social-menu-inner ul li a { font-size: ' + to + 'px; } .oceanwp-social-menu ul li a .owp-icon,.oceanwp-social-menu .colored ul li a .owp-icon,.oceanwp-social-menu .minimal ul li a .owp-icon,.oceanwp-social-menu .dark ul li a .owp-icon { width: ' + to + 'px; height: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_mobile_font_size", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_mobile_font_size");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_mobile_font_size">@media (max-width: 768px){.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a,.sidr-class-social-menu-inner ul li a { font-size: ' + to + 'px; } .oceanwp-social-menu ul li a .owp-icon,.oceanwp-social-menu .colored ul li a .owp-icon,.oceanwp-social-menu .minimal ul li a .owp-icon,.oceanwp-social-menu .dark ul li a .owp-icon { width: ' + to + 'px; height: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_top_padding">.oceanwp-social-menu ul li a { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_right_padding">.oceanwp-social-menu ul li a { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_bottom_padding">.oceanwp-social-menu ul li a { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_left_padding">.oceanwp-social-menu ul li a { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_tablet_top_padding">@media (max-width: 768px){.oceanwp-social-menu ul li a { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_tablet_right_padding">@media (max-width: 768px){.oceanwp-social-menu ul li a { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_tablet_bottom_padding">@media (max-width: 768px){.oceanwp-social-menu ul li a { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_tablet_left_padding">@media (max-width: 768px){.oceanwp-social-menu ul li a { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_mobile_top_padding">@media (max-width: 480px){.oceanwp-social-menu ul li a { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_mobile_right_padding">@media (max-width: 480px){.oceanwp-social-menu ul li a { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_mobile_bottom_padding">@media (max-width: 480px){.oceanwp-social-menu ul li a { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_mobile_left_padding">@media (max-width: 480px){.oceanwp-social-menu ul li a { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_right_margin">.oceanwp-social-menu ul li a { margin-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_left_margin">.oceanwp-social-menu ul li a { margin-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_tablet_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_tablet_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_tablet_right_margin">@media (max-width: 768px){.oceanwp-social-menu ul li a { margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_tablet_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_tablet_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_tablet_left_margin">@media (max-width: 768px){.oceanwp-social-menu ul li a { margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_mobile_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_mobile_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_mobile_right_margin">@media (max-width: 480px){.oceanwp-social-menu ul li a { margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_mobile_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_mobile_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_mobile_left_margin">@media (max-width: 480px){.oceanwp-social-menu ul li a { margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_border_radius">.oceanwp-social-menu ul li a { border-radius: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_links_color">.oceanwp-social-menu.simple-social ul li a { color: ' + to + '; } .oceanwp-social-menu.simple-social ul li a .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_hover_links_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_hover_links_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_hover_links_color">.oceanwp-social-menu.simple-social ul li a:hover { color: ' + to + '; } .oceanwp-social-menu.simple-social ul li a:hover .owp-icon use { stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_links_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_links_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_links_bg">.oceanwp-social-menu.simple-social ul li a { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_menu_social_hover_links_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_menu_social_hover_links_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_menu_social_hover_links_bg">.oceanwp-social-menu.simple-social ul li a:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_close_button_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_close_button_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_close_button_background">a.sidr-class-toggle-sidr-close { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_background">#sidr, #mobile-dropdown { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_mobile_menu_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_mobile_menu_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_mobile_menu_bg">#mobile-fullscreen { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_dropdowns_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_dropdowns_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_dropdowns_background">.sidr-class-dropdown-menu ul, #mobile-dropdown ul li ul, #mobile-fullscreen ul ul.sub-menu { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_borders", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_borders");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_borders">#sidr li, #sidr ul, #mobile-dropdown ul li, #mobile-dropdown ul li ul { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_links", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_links");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_links">body .sidr a, body .sidr-class-dropdown-toggle, #mobile-dropdown ul li a, #mobile-dropdown ul li a .dropdown-toggle, #mobile-fullscreen ul li a, #mobile-fullscreen .oceanwp-social-menu.simple-social ul li a { color: ' + to + '; }#mobile-fullscreen a.close .close-icon-inner, #mobile-fullscreen a.close .close-icon-inner::after{background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_links_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_links_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_links_hover">body .sidr a:hover, body .sidr-class-dropdown-toggle:hover, body .sidr-class-dropdown-toggle .fa, body .sidr-class-menu-item-has-children.active > a, body .sidr-class-menu-item-has-children.active > a > .sidr-class-dropdown-toggle, #mobile-dropdown ul li a:hover, #mobile-dropdown ul li a .dropdown-toggle:hover, #mobile-dropdown .menu-item-has-children.active > a, #mobile-dropdown .menu-item-has-children.active > a > .dropdown-toggle, #mobile-fullscreen ul li a:hover, #mobile-fullscreen .oceanwp-social-menu.simple-social ul li a:hover { color: ' + to + '; }#mobile-fullscreen a.close:hover .close-icon-inner, #mobile-fullscreen a.close:hover .close-icon-inner::after{ background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_mobile_menu_links_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_mobile_menu_links_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_mobile_menu_links_bg">#mobile-fullscreen ul > li > a { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_mobile_menu_links_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_mobile_menu_links_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_mobile_menu_links_hover_bg">#mobile-fullscreen ul > li > a:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_search_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_search_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_bg">body .sidr-class-mobile-searchform input, #mobile-dropdown #mobile-menu-search form input { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_search_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_search_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_color">body .sidr-class-mobile-searchform input,body .sidr-class-mobile-searchform input:focus, #mobile-dropdown #mobile-menu-search form input, #mobile-fullscreen #mobile-search input, #mobile-fullscreen #mobile-search label { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_search_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_search_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_border_color">body .sidr-class-mobile-searchform input, #mobile-dropdown #mobile-menu-search form input, #mobile-fullscreen #mobile-search input { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_full_screen_mobile_menu_search_border_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_full_screen_mobile_menu_search_border_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_full_screen_mobile_menu_search_border_color_hover">#mobile-fullscreen #mobile-search input:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_search_border_color_focus", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_search_border_color_focus");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_border_color_focus">body .sidr-class-mobile-searchform input:focus, #mobile-dropdown #mobile-menu-search form input:focus, #mobile-fullscreen #mobile-search input:focus { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_search_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_search_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_button_color">.sidr-class-mobile-searchform button, #mobile-dropdown #mobile-menu-search form button { color: ' + to + '; } .sidr-class-mobile-searchform button .owp-icon use, #mobile-dropdown #mobile-menu-search form button .owp-icon use{ stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_mobile_menu_sidr_search_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_mobile_menu_sidr_search_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_button_hover_color">.sidr-class-mobile-searchform button:hover, #mobile-dropdown #mobile-menu-search form button:hover { color: ' + to + '; } .sidr-class-mobile-searchform button:hover .owp-icon use, #mobile-dropdown #mobile-menu-search form button:hover .owp-icon use{ stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_width">.current-shop-items-dropdown { width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_bg", function($swipe) {
			$swipe.bind(function(to) {
				$(".current-shop-items-dropdown").css("background-color", to);
			});
		}), api("ocean_woo_cart_dropdown_borders", function($swipe) {
			$swipe.bind(function(to) {
				$(".widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid.thumbnail, .widget_shopping_cart ul.cart_list li, .woocommerce ul.product_list_widget li:first-child, .widget_shopping_cart .total").css("border-color", to);
			});
		}), api("ocean_woo_cart_dropdown_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_link_color">.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_link_color_hover">.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_remove_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_remove_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_remove_link_color">.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove { color: ' + to + '; } .widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_remove_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_remove_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_remove_link_color_hover">.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover { color: ' + to + '; } .widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_quantity_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_quantity_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_quantity_color">.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid .quantity { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_price_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_price_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_price_color">.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid .amount { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_subtotal_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_subtotal_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_subtotal_bg">.widget_shopping_cart .total { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_subtotal_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_subtotal_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_subtotal_color">.widget_shopping_cart .total strong { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_total_price_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_total_price_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_total_price_color">.widget_shopping_cart .total .amount { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_cart_button_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_cart_button_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_cart_button_bg">.widget_shopping_cart_content .buttons .button:first-child { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_cart_button_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_cart_button_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_cart_button_hover_bg">.widget_shopping_cart_content .buttons .button:first-child:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_cart_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_cart_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_cart_button_color">.widget_shopping_cart_content .buttons .button:first-child { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_cart_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_cart_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_cart_button_hover_color">.widget_shopping_cart_content .buttons .button:first-child:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_cart_button_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_cart_button_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_cart_button_border_color">.widget_shopping_cart_content .buttons .button:first-child { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_cart_button_hover_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_cart_button_hover_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_cart_button_hover_border_color">.widget_shopping_cart_content .buttons .button:first-child:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_checkout_button_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_checkout_button_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_checkout_button_bg">.widget_shopping_cart_content .buttons .checkout { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_checkout_button_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_checkout_button_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_checkout_button_hover_bg">.widget_shopping_cart_content .buttons .checkout:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_checkout_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_checkout_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_checkout_button_color">.widget_shopping_cart_content .buttons .checkout { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_checkout_button_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_checkout_button_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_checkout_button_hover_color">.widget_shopping_cart_content .buttons .checkout:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_checkout_button_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_checkout_button_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_checkout_button_border_color">.widget_shopping_cart_content .buttons .checkout { border: solid 1px ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_cart_dropdown_checkout_button_border_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_cart_dropdown_checkout_button_border_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_cart_dropdown_checkout_button_border_hover_color">.widget_shopping_cart_content .buttons .checkout:hover { border: solid 1px ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_mobile_cart_sidebar_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_mobile_cart_sidebar_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_mobile_cart_sidebar_bg">#oceanwp-cart-sidebar-wrap .oceanwp-cart-sidebar { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_mobile_cart_sidebar_close_button_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_mobile_cart_sidebar_close_button_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_mobile_cart_sidebar_close_button_color">#oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div, #oceanwp-cart-sidebar-wrap .oceanwp-cart-close .close-wrap>div:before { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_mobile_cart_sidebar_title_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_mobile_cart_sidebar_title_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_mobile_cart_sidebar_title_color">#oceanwp-cart-sidebar-wrap h4 { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_mobile_cart_sidebar_divider_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_mobile_cart_sidebar_divider_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_mobile_cart_sidebar_divider_color">#oceanwp-cart-sidebar-wrap .divider { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_top_padding">#footer-widgets { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_right_padding">#footer-widgets { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_bottom_padding">#footer-widgets { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_left_padding">#footer-widgets { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_tablet_top_padding">@media (max-width: 768px){#footer-widgets { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_tablet_right_padding">@media (max-width: 768px){#footer-widgets { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_tablet_bottom_padding">@media (max-width: 768px){#footer-widgets { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_tablet_left_padding">@media (max-width: 768px){#footer-widgets { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_mobile_top_padding">@media (max-width: 480px){#footer-widgets { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_mobile_right_padding">@media (max-width: 480px){#footer-widgets { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_mobile_bottom_padding">@media (max-width: 480px){#footer-widgets { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_mobile_left_padding">@media (max-width: 480px){#footer-widgets { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_background">#footer-widgets { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_color">#footer-widgets,#footer-widgets p,#footer-widgets li a:before,#footer-widgets .contact-info-widget span.oceanwp-contact-title,#footer-widgets .recent-posts-date,#footer-widgets .recent-posts-comments,#footer-widgets .widget-recent-posts-icons li .fa { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_borders", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_borders");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_borders">#footer-widgets li,#footer-widgets #wp-calendar caption,#footer-widgets #wp-calendar th,#footer-widgets #wp-calendar tbody,#footer-widgets .contact-info-widget i,#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"],#footer-widgets .posts-thumbnails-widget li,#footer-widgets .social-widget li a { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_link_color">#footer-widgets .footer-box a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_footer_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_footer_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_footer_link_color_hover">#footer-widgets .footer-box a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_text_align", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_text_align");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_text_align">#footer-bottom { text-align: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_top_padding">#footer-bottom { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_right_padding">#footer-bottom { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_bottom_padding">#footer-bottom { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_left_padding">#footer-bottom { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_tablet_top_padding">@media (max-width: 768px){#footer-bottom { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_tablet_right_padding">@media (max-width: 768px){#footer-bottom { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_tablet_bottom_padding">@media (max-width: 768px){#footer-bottom { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_tablet_left_padding">@media (max-width: 768px){#footer-bottom { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_mobile_top_padding">@media (max-width: 480px){#footer-bottom { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_mobile_right_padding">@media (max-width: 480px){#footer-bottom { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_mobile_bottom_padding">@media (max-width: 480px){#footer-bottom { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_mobile_left_padding">@media (max-width: 480px){#footer-bottom { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_background", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_background");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_background">#footer-bottom { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_color">#footer-bottom,#footer-bottom p { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_link_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_link_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_link_color">#footer-bottom a,#footer-bottom #footer-bottom-menu a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_bottom_footer_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_bottom_footer_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_bottom_footer_link_color_hover">#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_blog_posts_icons_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_blog_posts_icons_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_blog_posts_icons_color">#blog-entries ul.meta li i{ color: ' + to + '; } #blog-entries ul.meta li .owp-icon use{ stroke: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_theme_single_post_icons_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_theme_single_post_icons_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_theme_single_post_icons_color">.single-post ul.meta li i{ color: ' + to + '; } .single-post ul.meta li .owp-icon use{ stroke: ' + to + "; }</style>";
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