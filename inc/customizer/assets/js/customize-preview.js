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
			'hide-tablet-mobile'
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
		],
		wooCatStyle 		= [
			'woo-default-cat',
			'woo-dropdown-cat'
		],
		wooAccountStyle 	= [
			'account-side-style',
			'account-original-style'
		],
		wooSaleStyle 		= [
			'square-sale',
			'circle-sale'
		],
		wooCartStyle 		= [
			'compact',
			'spacious'
		],
		wooProductsCol 		= [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7'
		],
		wooProductsTabletCol = [
			'tablet-1-col',
			'tablet-2-col',
			'tablet-3-col',
			'tablet-4-col',
			'tablet-5-col',
			'tablet-6-col',
			'tablet-7-col'
		],
		wooProductsMobileCol = [
			'mobile-1-col',
			'mobile-2-col',
			'mobile-3-col',
			'mobile-4-col',
			'mobile-5-col',
			'mobile-6-col',
			'mobile-7-col'
		],
		wooContentAlignment = [
			'owp-content-left',
			'owp-content-right',
			'owp-content-center'
		],
		wooThumbsPosition 	= [
			'owp-thumbs-layout-horizontal',
			'owp-thumbs-layout-vertical'
		],
		wooAddToCartStyle 	= [
			'owp-btn-normal',
			'owp-btn-big',
			'owp-btn-very-big'
		],
		wooTabsLayout 		= [
			'owp-tabs-layout-horizontal',
			'owp-tabs-layout-vertical',
			'owp-tabs-layout-section'
		],
		wooTabsPosition 	= [
			'woo-left-tabs',
			'woo-right-tabs',
			'woo-center-tabs'
		],
		wooCheckoutTimeline = [
			'arrow',
			'square'
		];
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
		],
		llmsCol = [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6'
		],
		llmsTabletCol = [
			'tablet-1-col',
			'tablet-2-col',
			'tablet-3-col',
			'tablet-4-col',
			'tablet-5-col',
			'tablet-6-col'
		],
		llmsMobileCol = [
			'mobile-1-col',
			'mobile-2-col',
			'mobile-3-col',
			'mobile-4-col',
			'mobile-5-col',
			'mobile-6-col'
		],

	/******** WordPress Core *********/

		// Site title
		api('blogname', function( value ) {
			value.bind( function( newval ) {
				$( '.site-logo-text' ).text( newval );
			});
		});

		// Site description
		api('blogdescription', function( value ) {
			value.bind( function( newval ) {
				$( '#site-description h2' ).text( newval );
			});
		});

	/******** General *********/

	    api( 'ocean_primary_color', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_primary_color' );
				if ( to ) {
					var style = '<style class="customizer-ocean_primary_color">a:hover,a.light:hover,.theme-heading .text::before,#top-bar-content > a:hover,#top-bar-social li.oceanwp-email a:hover,#site-navigation-wrap .dropdown-menu > li > a:hover,.oceanwp-mobile-menu-icon a:hover,.blog-entry.post .blog-entry-header .entry-title a:hover,.blog-entry.post .blog-entry-readmore a:hover,ul.meta li a:hover,.dropcap,.single-post nav.post-navigation .nav-links .title,body .related-post-title a:hover,body #wp-calendar caption,body .contact-info-widget.default i,body .contact-info-widget.big-icons i,body .custom-links-widget .oceanwp-custom-links li a:hover,body .custom-links-widget .oceanwp-custom-links li a:hover:before,body .posts-thumbnails-widget li a:hover,body .social-widget li.oceanwp-email a:hover,.comment-author .comment-meta .comment-reply-link,#respond #cancel-comment-reply-link:hover,#footer-widgets .footer-box a:hover,#footer-bottom a:hover,#footer-bottom #footer-bottom-menu a:hover,.sidr a:hover,.sidr-class-dropdown-toggle:hover,.sidr-class-menu-item-has-children.active > a,.sidr-class-menu-item-has-children.active > a > .sidr-class-dropdown-toggle,#oceanwp-post-list.one .oceanwp-post-category:hover,#oceanwp-post-list.one .oceanwp-post-category:hover a,#oceanwp-post-list.two .slick-arrow:hover,#oceanwp-post-list.two article:hover .oceanwp-post-category,#oceanwp-post-list.two article:hover .oceanwp-post-category a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover,input[type=checkbox]:checked:before,.woocommerce-MyAccount-navigation ul li a:before,.woocommerce-checkout .woocommerce-info a,.woocommerce-checkout #payment ul.payment_methods .wc_payment_method>input[type=radio]:first-child:checked+label:before,.woocommerce-checkout #payment .payment_method_paypal .about_paypal,.woocommerce ul.products li.product li.category a:hover,.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover,.product_meta .posted_in a:hover,.product_meta .tagged_as a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover{ color: ' + to + '; } input[type="button"],input[type="reset"],input[type="submit"],.button,#site-navigation-wrap .dropdown-menu > li.btn > a > span,.thumbnail:hover i,.post-quote-content,body .contact-info-widget.big-icons li:hover i,#oceanwp-post-list.one .readmore:hover,#oceanwp-post-list.one .oceanwp-post-category,#oceanwp-post-list.two .oceanwp-post-category,#oceanwp-post-list.two article:hover .slide-overlay-wrap,.oceanwp-modal .oceanwp-close-modal,.woocommerce div.product div.images .open-image,.wcmenucart-details.count,.woocommerce-message a,.woocommerce-error a,.woocommerce-info a,.woocommerce .widget_price_filter .ui-slider .ui-slider-handle,.woocommerce .widget_price_filter .ui-slider .ui-slider-range{ background-color: ' + to + '; } .widget-title,blockquote,#searchform-dropdown,.dropdown-menu .sub-menu,.blog-entry.large-entry .blog-entry-readmore a:hover,.oceanwp-newsletter-form-wrap input[type="email"]:focus,.social-widget li.oceanwp-email a:hover,#respond #cancel-comment-reply-link:hover,body .contact-info-widget.big-icons li:hover i,#footer-widgets .oceanwp-newsletter-form-wrap input[type="email"]:focus,#oceanwp-post-list.one .readmore:hover,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover,.current-shop-items-dropdown,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.wcmenucart-details.count:before,.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce .oceanwp-grid-list a.active,.woocommerce .oceanwp-grid-list a:hover{ border-color: ' + to + '; }</style>';
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
					var style = '<style class="customizer-ocean_hover_primary_color">input[type="button"]:hover,input[type="reset"]:hover,input[type="submit"]:hover,input[type="button"]:focus,input[type="reset"]:focus,input[type="submit"]:focus,.button:hover,#site-navigation-wrap .dropdown-menu > li.btn > a:hover > span,.post-quote-author,.oceanwp-modal .oceanwp-close-modal:hover,.woocommerce div.product div.images .open-image:hover,.woocommerce-error a:hover,.woocommerce-info a:hover,.woocommerce-message a:hover{ background-color: ' + to + '; }</style>';
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

		api('ocean_scroll_top_arrow', function( value ) {
			value.bind( function( newval ) {
				var $arrow = $( '#scroll-top > span' );

				if ( $arrow.length ) {
					$arrow.removeClass();
					$arrow.addClass( newval );
				}
			});
		});

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
					var style = '<style class="customizer-ocean_blog_single_content_width">.single-post.content-max-width .thumbnail, .single-post.content-max-width .entry-header, .single-post.content-max-width ul.meta, .single-post.content-max-width .entry-content p, .single-post.content-max-width .entry-content h1, .single-post.content-max-width .entry-content h2, .single-post.content-max-width .entry-content h3, .single-post.content-max-width .entry-content h4, .single-post.content-max-width .entry-content h5, .single-post.content-max-width .entry-content h6, .single-post.content-max-width .wp-block-image, .single-post.content-max-width .wp-block-gallery, .single-post.content-max-width .wp-block-video, .single-post.content-max-width .wp-block-quote, .single-post.content-max-width .wp-block-text-columns, .single-post.content-max-width .entry-content ul, .single-post.content-max-width .entry-content ol, .single-post.content-max-width .wp-block-cover-text, .single-post.content-max-width .post-tags, .single-post.content-max-width .comments-area{max-width:' + to + 'px;} .single-post.content-max-width .wp-block-image.alignleft, .single-post.content-max-width .wp-block-image.alignright{max-width:'+ to / 2 +'px;} .single-post.content-max-width .wp-block-image.alignleft{margin-left: calc( 50% - '+ to / 2 +'px);} .single-post.content-max-width .wp-block-image.alignright{margin-right: calc( 50% - '+ to / 2 +'px);}</style>';
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

	/******** WooCommerce *********/

		// Categories widget style
		api('ocean_woo_cat_widget_style', function( value ) {
			value.bind( function( newval ) {
				if ( body.length ) {
					$.each( wooCatStyle, function( i, v ) {
						body.removeClass( v );
					});
					body.addClass( 'woo-'+ newval +'-cat' );
				}
			});
		});

		// Sale badge style
		api('ocean_woo_sale_badge_style', function( value ) {
			value.bind( function( newval ) {
				var sale_style = $( '.woocommerce div.product' );
				if ( sale_style.length ) {
					$.each( wooSaleStyle, function( i, v ) {
						sale_style.removeClass( v );
					});
					sale_style.addClass( newval + '-sale' );
				}
			});
		});

	    // Off canvas filter text
	    api('ocean_woo_off_canvas_filter_text', function( value ) {
			value.bind( function( newval ) {
				$( '.oceanwp-off-canvas-filter .off-canvas-filter-text' ).html( newval );
			});
	    });

		// Cart style
		api('ocean_woo_cart_dropdown_style', function( value ) {
			value.bind( function( newval ) {
				var cart = $( '.woo-menu-icon' );
				if ( cart.length ) {
					$.each( wooCartStyle, function( i, v ) {
						cart.removeClass( v );
					});
					cart.addClass( newval );
				}
			});
		});

		// Cart icon
		api('ocean_woo_menu_icon', function( value ) {
			value.bind( function( newval ) {
				var $cart = $( '#site-navigation-wrap .dropdown-menu > li > a.wcmenucart i' );

				if ( $cart.length ) {
					$cart.removeClass();
					$cart.addClass( newval );
				}
			});
		});

		// Custom Cart icon
		api('ocean_woo_menu_custom_icon', function( value ) {
			value.bind( function( newval ) {
				var $cart = $( '#site-navigation-wrap .dropdown-menu > li > a.wcmenucart i' );

				if ( $cart.length ) {
					$cart.removeClass();
					$cart.addClass( newval );
				}
			});
		});

		// Menu cart icon size
		api( 'ocean_woo_menu_icon_size', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_menu_icon_size' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_menu_icon_size">.wcmenucart i { font-size: ' + to + 'px; }</style>';
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
		api( 'ocean_woo_menu_icon_size_tablet', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_menu_icon_size_tablet' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_menu_icon_size_tablet">@media (max-width: 768px){.oceanwp-mobile-menu-icon a.wcmenucart { font-size: ' + to + 'px; }}</style>';
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
		api( 'ocean_woo_menu_icon_size_mobile', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_menu_icon_size_mobile' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_menu_icon_size_mobile">@media (max-width: 480px){.oceanwp-mobile-menu-icon a.wcmenucart { font-size: ' + to + 'px; }}</style>';
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
		api( 'ocean_woo_menu_icon_center_vertically', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_menu_icon_center_vertically' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_menu_icon_center_vertically">.wcmenucart i { top: ' + to + 'px; }</style>';
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
		api( 'ocean_woo_menu_icon_center_vertically_tablet', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_menu_icon_center_vertically_tablet' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_menu_icon_center_vertically_tablet">@media (max-width: 768px){.oceanwp-mobile-menu-icon a.wcmenucart { top: ' + to + 'px; }}</style>';
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
		api( 'ocean_woo_menu_icon_center_vertically_mobile', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_menu_icon_center_vertically_mobile' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_menu_icon_center_vertically_mobile">@media (max-width: 480px){.oceanwp-mobile-menu-icon a.wcmenucart { top: ' + to + 'px; }}</style>';
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
		api('ocean_woocommerce_shop_columns', function( value ) {
			value.bind( function( newval ) {
				var archivesCol = $( '.woocommerce .products .product' );
				if ( archivesCol.length ) {
					$.each( wooProductsCol, function( i, v ) {
						archivesCol.parent().removeClass( 'archives-col-'+ v );
						archivesCol.removeClass( 'span_1_of_'+ v );
					});
					archivesCol.parent().addClass( 'custom-col archives-col-'+ newval );
					archivesCol.addClass( 'span_1_of_'+ newval );
				}
			});
		});

		// Archives tablet columns class
		api('ocean_woocommerce_tablet_shop_columns', function( value ) {
			value.bind( function( newval ) {
				var archivesCol = $( '.woocommerce .products' );
				if ( archivesCol.length ) {
					$.each( wooProductsTabletCol, function( i, v ) {
						archivesCol.removeClass( v );
					});
					archivesCol.addClass( 'tablet-col' );
					archivesCol.addClass( 'tablet-'+ newval +'-col' );
				}
			});
		});

		// Archives mobile columns class
		api('ocean_woocommerce_mobile_shop_columns', function( value ) {
			value.bind( function( newval ) {
				var archivesCol = $( '.woocommerce .products' );
				if ( archivesCol.length ) {
					$.each( wooProductsMobileCol, function( i, v ) {
						archivesCol.removeClass( v );
					});
					archivesCol.addClass( 'mobile-col' );
					archivesCol.addClass( 'mobile-'+ newval +'-col' );
				}
			});
		});

		// Content Alignment
		api('ocean_woo_product_entry_content_alignment', function( value ) {
			value.bind( function( newval ) {
				var content_alignment = $( '.woocommerce .products .product' );
				if ( content_alignment.length ) {
					$.each( wooContentAlignment, function( i, v ) {
						content_alignment.removeClass( v );
					});
					content_alignment.addClass( 'owp-content-'+ newval );
				}
			});
		});

		// Infinite scroll spinners color
		api( 'ocean_woo_infinite_scroll_spinners_color', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_infinite_scroll_spinners_color' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_infinite_scroll_spinners_color">.woocommerce .loader-ellips__dot {background-color: ' + to + ';}</style>';
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

		// Infinite scroll last text
		api('ocean_woo_infinite_scroll_last_text', function( value ) {
			value.bind( function( newval ) {
				$( '.woocommerce .infinite-scroll-last' ).text( newval );
			});
		});

		// Infinite scroll error text
		api('ocean_woo_infinite_scroll_error_text', function( value ) {
			value.bind( function( newval ) {
				$( '.woocommerce .infinite-scroll-error' ).text( newval );
			});
		});

		// Thumbs Layout
		api('ocean_woo_product_thumbs_layout', function( value ) {
			value.bind( function( newval ) {
				var thumbs_layout = $( '.woocommerce div.product' );
				if ( thumbs_layout.length ) {
					$.each( wooThumbsPosition, function( i, v ) {
						thumbs_layout.removeClass( v );
					});
					thumbs_layout.addClass( 'owp-thumbs-layout-'+ newval );
				}
			});
		});

		// Add to cart button style
		api('ocean_woo_product_addtocart_style', function( value ) {
			value.bind( function( newval ) {
				var addtocart_style = $( '.woocommerce div.product' );
				if ( addtocart_style.length ) {
					$.each( wooAddToCartStyle, function( i, v ) {
						addtocart_style.removeClass( v );
					});
					addtocart_style.addClass( 'owp-btn-'+ newval );
				}
			});
		});

		// Tabs Layout
		api('ocean_woo_product_tabs_layout', function( value ) {
			value.bind( function( newval ) {
				var tabs_layout = $( '.woocommerce div.product' );
				if ( tabs_layout.length ) {
					$.each( wooTabsLayout, function( i, v ) {
						tabs_layout.removeClass( v );
					});
					tabs_layout.addClass( 'owp-tabs-layout-'+ newval );
				}
			});
		});

		// Tabs Position
		api('ocean_woo_product_meta_tabs_position', function( value ) {
			value.bind( function( newval ) {
				if ( body.length ) {
					$.each( wooTabsPosition, function( i, v ) {
						body.removeClass( v );
					});
					body.addClass( 'woo-'+ newval +'-tabs' );
				}
			});
		});

		// Multi-step checkout style
		api('ocean_woo_multi_step_checkout_timeline_style', function( value ) {
			value.bind( function( newval ) {
				var timeline = $( '#owp-checkout-timeline' );
				if ( timeline.length ) {
					$.each( wooCheckoutTimeline, function( i, v ) {
						timeline.removeClass( v );
					});
					timeline.addClass( newval );
				}
			});
		});

		// Both Sidebars layout shop page content width
		api( 'ocean_woo_shop_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_shop_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_shop_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.woocommerce.archive.content-both-sidebars .content-area { width: ' + to + '%; } body.woocommerce.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.woocommerce.archive.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
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

		// Both Sidebars layout shop page sidebars width
		api( 'ocean_woo_shop_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_shop_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_shop_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.woocommerce.archive.content-both-sidebars .widget-area{width:' + to + '%;} body.woocommerce.archive.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.woocommerce.archive.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
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

		// Both Sidebars layout single product content width
		api( 'ocean_woo_product_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_product_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_product_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-product.content-both-sidebars .content-area { width: ' + to + '%; } body.single-product.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-product.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
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

		// Both Sidebars layout single product sidebars width
		api( 'ocean_woo_product_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_woo_product_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_woo_product_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-product.content-both-sidebars .widget-area{width:' + to + '%;} body.single-product.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.single-product.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
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

		// Cart icon
		api('ocean_edd_menu_icon', function( value ) {
			value.bind( function( newval ) {
				var $cart = $( '#site-navigation-wrap .dropdown-menu > li > a.eddmenucart i' );

				if ( $cart.length ) {
					$cart.removeClass();
					$cart.addClass( newval );
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
					var style = '<style class="customizer-ocean_edd_menu_icon_size">.eddmenucart i { font-size: ' + to + 'px; }</style>';
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
					var style = '<style class="customizer-ocean_edd_menu_icon_size_tablet">@media (max-width: 768px){.oceanwp-mobile-menu-icon a.eddmenucart { font-size: ' + to + 'px; }}</style>';
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
					var style = '<style class="customizer-ocean_edd_menu_icon_size_mobile">@media (max-width: 480px){.oceanwp-mobile-menu-icon a.eddmenucart { font-size: ' + to + 'px; }}</style>';
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
					var img = '<style class="customizer-ocean_breadcrumbs_seperator_color">.site-breadcrumbs ul li:after { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_breadcrumbs_link_color">.site-breadcrumbs a, .background-image-page-header .site-breadcrumbs a { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_breadcrumbs_link_color_hover">.site-breadcrumbs a:hover, .background-image-page-header .site-breadcrumbs a:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_scroll_top_icon_size">#scroll-top { font-size: ' + to + "px; }</style>";
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
					var img = '<style class="customizer-ocean_scroll_top_color">#scroll-top { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_scroll_top_color_hover">#scroll-top:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_pagination_color">.page-numbers a, .page-numbers span:not(.elementor-screen-only), .page-links span { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_pagination_hover_color">.page-numbers a:hover, .page-links a:hover span, .page-numbers.current, .page-numbers.current:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_links_color">a { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_links_color_hover">a:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_top_bar_social_links_color">#top-bar-social li a { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_top_bar_social_hover_links_color">body #top-bar #top-bar-social li a:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_bg">#searchform-overlay { background-color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_input_color">#searchform-overlay form input,#searchform-overlay form label { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_placeholder_color">#searchform-overlay form label { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_input_dashed_bg">#searchform-overlay form label i { background-color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_input_border_color">#searchform-overlay form input { border-color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_input_hover_border_color">#searchform-overlay form input:hover { border-color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_input_focus_border_color">#searchform-overlay form input:focus { border-color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_close_button_color">.search-overlay .search-toggle-li .search-overlay-toggle.exit > span:before { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_search_overlay_close_button_hover_color">#searchform-overlay .overlay-close:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_menu_link_color">#site-navigation-wrap .dropdown-menu > li > a, .oceanwp-mobile-menu-icon a { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_menu_link_color_hover">#site-navigation-wrap .dropdown-menu > li > a:hover, .oceanwp-mobile-menu-icon a:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_dropdown_menu_background">.dropdown-menu .sub-menu,#searchform-dropdown,.current-shop-items-dropdown { background-color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_dropdown_menu_top_border">.dropdown-menu .sub-menu,#searchform-dropdown,.current-shop-items-dropdown { border-color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_dropdown_menu_link_color">.dropdown-menu ul li a.menu-link { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_dropdown_menu_link_color_hover">.dropdown-menu ul li a.menu-link:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_dropdown_category_date_color">.navigation li.mega-cat ul li .mega-post-date { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_menu_social_font_size">.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a { font-size: ' + to + "px; }</style>";
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
					var img = '<style class="customizer-ocean_menu_social_tablet_font_size">@media (max-width: 768px){.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a,.sidr-class-social-menu-inner ul li a { font-size: ' + to + "px; }}</style>";
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
					var img = '<style class="customizer-ocean_menu_social_mobile_font_size">@media (max-width: 768px){.oceanwp-social-menu ul li a,.oceanwp-social-menu .colored ul li a,.oceanwp-social-menu .minimal ul li a,.oceanwp-social-menu .dark ul li a,.sidr-class-social-menu-inner ul li a { font-size: ' + to + "px; }}</style>";
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
					var img = '<style class="customizer-ocean_menu_social_links_color">.oceanwp-social-menu.simple-social ul li a { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_menu_social_hover_links_color">.oceanwp-social-menu.simple-social ul li a:hover { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_button_color">.sidr-class-mobile-searchform button, #mobile-dropdown #mobile-menu-search form button { color: ' + to + "; }</style>";
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
					var img = '<style class="customizer-ocean_mobile_menu_sidr_search_button_hover_color">.sidr-class-mobile-searchform button:hover, #mobile-dropdown #mobile-menu-search form button:hover { color: ' + to + "; }</style>";
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
		}), api("ocean_woo_product_image_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_product_image_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_product_image_width">.woocommerce div.product div.images, .woocommerce.content-full-width div.product div.images { width: ' + to + "%; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_product_summary_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_product_summary_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_product_summary_width">.woocommerce div.product div.summary, .woocommerce.content-full-width div.product div.summary { width: ' + to + "%; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".owp-floating-bar").css("background-color", size);
			});
		}), api("ocean_woo_floating_bar_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".owp-floating-bar p.selected, .owp-floating-bar h2.entry-title").css("color", size);
			});
		}), api("ocean_woo_floating_bar_price_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".owp-floating-bar .product_price del .amount, .owp-floating-bar .product_price .amount, .owp-floating-bar .out-of-stock").css("color", size);
			});
		}), api("ocean_woo_floating_bar_quantity_buttons_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_quantity_buttons_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_quantity_buttons_bg">.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_quantity_buttons_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_quantity_buttons_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_quantity_buttons_hover_bg">.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_quantity_buttons_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_quantity_buttons_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_quantity_buttons_color">.owp-floating-bar form.cart .quantity .minus, .owp-floating-bar form.cart .quantity .plus { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_quantity_buttons_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_quantity_buttons_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_quantity_buttons_hover_color">.owp-floating-bar form.cart .quantity .minus:hover, .owp-floating-bar form.cart .quantity .plus:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_quantity_input_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".owp-floating-bar form.cart .quantity .qty").css("background-color", size);
			});
		}), api("ocean_woo_floating_bar_quantity_input_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".owp-floating-bar form.cart .quantity .qty").css("color", size);
			});
		}), api("ocean_woo_floating_bar_addtocart_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_addtocart_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_addtocart_bg">.owp-floating-bar button.button { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_addtocart_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_addtocart_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_addtocart_hover_bg">.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus { background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_addtocart_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_addtocart_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_addtocart_color">.owp-floating-bar button.button { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_floating_bar_addtocart_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_floating_bar_addtocart_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_floating_bar_addtocart_hover_color">.owp-floating-bar button.button:hover, .owp-floating-bar button.button:focus { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_checkout_timeline_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_checkout_timeline_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_checkout_timeline_bg">#owp-checkout-timeline .timeline-wrapper { background-color: ' + to + '; } #owp-checkout-timeline.arrow .timeline-wrapper:before{ border-top-color: ' + to + '; border-bottom-color: ' + to + '; } #owp-checkout-timeline.arrow .timeline-wrapper:after{ border-left-color: ' + to + '; border-right-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_checkout_timeline_color", function($swipe) {
			$swipe.bind(function(size) {
				$("#owp-checkout-timeline .timeline-wrapper").css("color", size);
			});
		}), api("ocean_woo_checkout_timeline_number_bg", function($swipe) {
			$swipe.bind(function(size) {
				$("#owp-checkout-timeline .timeline-step").css("background-color", size);
			});
		}), api("ocean_woo_checkout_timeline_number_color", function($swipe) {
			$swipe.bind(function(size) {
				$("#owp-checkout-timeline .timeline-step").css("color", size);
			});
		}), api("ocean_woo_checkout_timeline_number_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$("#owp-checkout-timeline .timeline-step").css("border-color", size);
			});
		}), api("ocean_woo_checkout_timeline_active_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_woo_checkout_timeline_active_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_woo_checkout_timeline_active_bg">#owp-checkout-timeline .active .timeline-wrapper { background-color: ' + to + '; } #owp-checkout-timeline.arrow .active .timeline-wrapper:before{ border-top-color: ' + to + '; border-bottom-color: ' + to + '; } #owp-checkout-timeline.arrow .active .timeline-wrapper:after{ border-left-color: ' + to + '; border-right-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_checkout_timeline_active_color", function($swipe) {
			$swipe.bind(function(size) {
				$("#owp-checkout-timeline .active .timeline-wrapper").css("color", size);
			});
		}), api("ocean_onsale_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce span.onsale").css("background-color", size);
			});
		}), api("ocean_onsale_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce span.onsale").css("color", size);
			});
		}), api("ocean_outofstock_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product.outofstock .outofstock-badge").css("background-color", size);
			});
		}), api("ocean_outofstock_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product.outofstock .outofstock-badge").css("color", size);
			});
		}), api("ocean_stars_color_before", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_stars_color_before");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_stars_color_before">.woocommerce .star-rating:before{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_stars_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce .star-rating span").css("color", size);
			});
		}), api("ocean_quantity_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".quantity .qty, .quantity .minus, .quantity .plus").css("border-color", size);
			});
		}), api("ocean_quantity_border_color_focus", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_quantity_border_color_focus");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_quantity_border_color_focus">body .quantity .qty:focus{ border-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_quantity_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".quantity .qty").css("color", size);
			});
		}), api("ocean_quantity_plus_minus_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".quantity .minus, .quantity .plus").css("color", size);
			});
		}), api("ocean_quantity_plus_minus_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_quantity_plus_minus_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_quantity_plus_minus_color_hover">.quantity .minus:hover, .quantity .plus:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_quantity_plus_minus_border_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_quantity_plus_minus_border_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_quantity_plus_minus_border_color_hover">.quantity .minus:hover, .quantity .plus:hover{ border-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce .oceanwp-toolbar").css("border-color", size);
			});
		}), api("ocean_toolbar_off_canvas_filter_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_off_canvas_filter_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_off_canvas_filter_color">.woocommerce .oceanwp-off-canvas-filter { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_off_canvas_filter_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_off_canvas_filter_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_off_canvas_filter_border_color">.woocommerce .oceanwp-off-canvas-filter { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_off_canvas_filter_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_off_canvas_filter_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_off_canvas_filter_hover_color">.woocommerce .oceanwp-off-canvas-filter:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_off_canvas_filter_hover_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_off_canvas_filter_hover_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_off_canvas_filter_hover_border_color">.woocommerce .oceanwp-off-canvas-filter:hover { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_grid_list_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_grid_list_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_grid_list_color">.woocommerce .oceanwp-grid-list a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_grid_list_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_grid_list_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_grid_list_border_color">.woocommerce .oceanwp-grid-list a { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_grid_list_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_grid_list_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_grid_list_hover_color">.woocommerce .oceanwp-grid-list a:hover { color: ' + to + "; border-color: " + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_grid_list_active_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_grid_list_active_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_grid_list_active_color">.woocommerce .oceanwp-grid-list a.active { color: ' + to + "; border-color: " + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_select_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_select_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_select_color">.woocommerce .woocommerce-ordering .theme-select,.woocommerce .woocommerce-ordering .theme-select:after { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_select_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_select_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_select_border_color">.woocommerce .woocommerce-ordering .theme-select,.woocommerce .woocommerce-ordering .theme-select:after { border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_number_of_products_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_number_of_products_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_number_of_products_color">.woocommerce .result-count li.view-title,.woocommerce .result-count li a.active, .woocommerce .result-count li a:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_number_of_products_inactive_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_number_of_products_inactive_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_number_of_products_inactive_color">.woocommerce .result-count li a { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_toolbar_number_of_products_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_toolbar_number_of_products_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_toolbar_number_of_products_border_color">.woocommerce .result-count li:after { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_top_padding">.woocommerce .products .product-inner { padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_right_padding">.woocommerce .products .product-inner { padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_bottom_padding">.woocommerce .products .product-inner { padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_left_padding">.woocommerce .products .product-inner { padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_top_padding">@media (max-width: 768px){.woocommerce .products .product-inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_right_padding">@media (max-width: 768px){.woocommerce .products .product-inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_bottom_padding">@media (max-width: 768px){.woocommerce .products .product-inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_left_padding">@media (max-width: 768px){.woocommerce .products .product-inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_top_padding">@media (max-width: 480px){.woocommerce .products .product-inner { padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_right_padding">@media (max-width: 480px){.woocommerce .products .product-inner { padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_bottom_padding">@media (max-width: 480px){.woocommerce .products .product-inner { padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_left_padding">@media (max-width: 480px){.woocommerce .products .product-inner { padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_top_margin">.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_right_margin">.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_bottom_margin">.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_left_margin">.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_tablet_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_tablet_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_tablet_top_margin">@media (max-width: 768px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_tablet_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_tablet_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_tablet_right_margin">@media (max-width: 768px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_tablet_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_tablet_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_tablet_bottom_margin">@media (max-width: 768px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_tablet_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_tablet_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_tablet_left_margin">@media (max-width: 768px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_mobile_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_mobile_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_mobile_top_margin">@media (max-width: 480px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_mobile_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_mobile_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_mobile_right_margin">@media (max-width: 480px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_mobile_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_mobile_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_mobile_bottom_margin">@media (max-width: 480px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_image_mobile_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_image_mobile_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_image_mobile_left_margin">@media (max-width: 480px){.woocommerce ul.products li.product .woo-entry-inner li.image-wrap { margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_top_border_width">.woocommerce .products .product-inner { border-top-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_right_border_width">.woocommerce .products .product-inner { border-right-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_bottom_border_width">.woocommerce .products .product-inner { border-bottom-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_left_border_width">.woocommerce .products .product-inner { border-left-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_top_border_width">@media (max-width: 768px){.woocommerce .products .product-inner { border-top-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_right_border_width">@media (max-width: 768px){.woocommerce .products .product-inner { border-right-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_bottom_border_width">@media (max-width: 768px){.woocommerce .products .product-inner { border-bottom-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_left_border_width">@media (max-width: 768px){.woocommerce .products .product-inner { border-left-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_top_border_width">@media (max-width: 480px){.woocommerce .products .product-inner { border-top-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_right_border_width">@media (max-width: 480px){.woocommerce .products .product-inner { border-right-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_bottom_border_width">@media (max-width: 480px){.woocommerce .products .product-inner { border-bottom-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_left_border_width">@media (max-width: 480px){.woocommerce .products .product-inner { border-left-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_top_border_radius">.woocommerce .products .product-inner { border-top-left-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_right_border_radius">.woocommerce .products .product-inner { border-top-right-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_bottom_border_radius">.woocommerce .products .product-inner { border-bottom-right-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_left_border_radius">.woocommerce .products .product-inner { border-bottom-left-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_top_border_radius">@media (max-width: 768px){.woocommerce .products .product-inner { border-top-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_right_border_radius">@media (max-width: 768px){.woocommerce .products .product-inner { border-top-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_bottom_border_radius">@media (max-width: 768px){.woocommerce .products .product-inner { border-bottom-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_tablet_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_tablet_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_tablet_left_border_radius">@media (max-width: 768px){.woocommerce .products .product-inner { border-bottom-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_top_border_radius">@media (max-width: 480px){.woocommerce .products .product-inner { border-top-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_right_border_radius">@media (max-width: 480px){.woocommerce .products .product-inner { border-top-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_bottom_border_radius">@media (max-width: 480px){.woocommerce .products .product-inner { border-bottom-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_mobile_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_mobile_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_mobile_left_border_radius">@media (max-width: 480px){.woocommerce .products .product-inner { border-bottom-left-radius:' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_background_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce .products .product-inner").css("background-color", size);
			});
		}), api("ocean_product_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce .products .product-inner").css("border-color", size);
			});
		}), api("ocean_category_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product li.category a").css("color", size);
			});
		}), api("ocean_category_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_category_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_category_color_hover">.woocommerce ul.products li.product li.category a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product li.title a").css("color", size);
			});
		}), api("ocean_product_title_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_title_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_title_color_hover">.woocommerce ul.products li.product li.title a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_entry_price_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product .price, .woocommerce ul.products li.product .price .amount").css("color", size);
			});
		}), api("ocean_product_entry_del_price_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product .price del .amount").css("color", size);
			});
		}), api("ocean_product_entry_addtocart_bg_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart").css("background-color", size);
			});
		}), api("ocean_product_entry_addtocart_bg_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_entry_addtocart_bg_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_entry_addtocart_bg_color_hover">.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover{ background-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_entry_addtocart_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart").css("color", size);
			});
		}), api("ocean_product_entry_addtocart_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_entry_addtocart_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_entry_addtocart_color_hover">.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_product_entry_addtocart_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart").css("border-color", size);
			});
		}), api("ocean_product_entry_addtocart_border_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_product_entry_addtocart_border_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_product_entry_addtocart_border_color_hover">.woocommerce ul.products li.product .button:hover,.woocommerce ul.products li.product .product-inner .added_to_cart:hover{ border-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_product_entry_addtocart_border_style', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_product_entry_addtocart_border_style');
				if (to) {
					var style = '<style class="customizer-ocean_product_entry_addtocart_border_style">.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart{border-style:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_product_entry_addtocart_border_size', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_product_entry_addtocart_border_size');
				if (to) {
					var style = '<style class="customizer-ocean_product_entry_addtocart_border_size">.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart{border-width:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_product_entry_addtocart_border_radius', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_product_entry_addtocart_border_radius');
				if (to) {
					var style = '<style class="customizer-ocean_product_entry_addtocart_border_radius">.woocommerce ul.products li.product .button,.woocommerce ul.products li.product .product-inner .added_to_cart{border-radius:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_woo_quick_view_button_bg', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_woo_quick_view_button_bg');
				if (to) {
					var style = '<style class="customizer-ocean_woo_quick_view_button_bg">.owp-quick-view{background-color:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_woo_quick_view_button_hover_bg', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_woo_quick_view_button_hover_bg');
				if (to) {
					var style = '<style class="customizer-ocean_woo_quick_view_button_hover_bg">.owp-quick-view:hover{background-color:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_woo_quick_view_button_color', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_woo_quick_view_button_color');
				if (to) {
					var style = '<style class="customizer-ocean_woo_quick_view_button_color">.owp-quick-view{color:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_woo_quick_view_button_hover_color', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_woo_quick_view_button_hover_color');
				if (to) {
					var style = '<style class="customizer-ocean_woo_quick_view_button_hover_color">.owp-quick-view:hover{color:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_woo_quick_view_overlay_bg', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_woo_quick_view_overlay_bg');
				if (to) {
					var style = '<style class="customizer-ocean_woo_quick_view_overlay_bg">.image-wrap.loading:after{background-color:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_woo_quick_view_overlay_spinner_outside_color', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_woo_quick_view_overlay_spinner_outside_color');
				if (to) {
					var style = '<style class="customizer-ocean_woo_quick_view_overlay_spinner_outside_color">.image-wrap.loading:before{border-color:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api('ocean_woo_quick_view_overlay_spinner_inner_color', function(value) {
			value.bind(function(to) {
				var $child = $('.customizer-ocean_woo_quick_view_overlay_spinner_inner_color');
				if (to) {
					var style = '<style class="customizer-ocean_woo_quick_view_overlay_spinner_inner_color">.image-wrap.loading:before{border-left-color:' + to + ';}</style>';
					if ($child.length) {
						$child.replaceWith(style);
					} else {
						$('head').append(style);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_woo_quick_view_modal_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".owp-qv-content-inner").css("background-color", size);
			});
		}), api("ocean_woo_quick_view_modal_close_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".owp-qv-content-inner .owp-qv-close").css("color", size);
			});
		}), api("ocean_woo_off_canvas_sidebar_bg", function($swipe) {
			$swipe.bind(function(size) {
				$("#oceanwp-off-canvas-sidebar-wrap .oceanwp-off-canvas-sidebar").css("background-color", size);
			});
		}), api("ocean_woo_off_canvas_sidebar_widgets_border", function($swipe) {
			$swipe.bind(function(size) {
				$("#oceanwp-off-canvas-sidebar-wrap .sidebar-box").css("border-color", size);
			});
		}), api("ocean_single_product_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product .product_title").css("color", size);
			});
		}), api("ocean_single_product_price_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".price,.amount").css("color", size);
			});
		}), api("ocean_single_product_del_price_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".price del,del .amount").css("color", size);
			});
		}), api("ocean_single_product_description_color", function($swipe) {
			$swipe.bind(function(size) {
				$('.woocommerce div.product div[itemprop="description"]').css("color", size);
			});
		}), api("ocean_single_product_meta_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".product_meta .posted_in,.product_meta .tagged_as").css("color", size);
			});
		}), api("ocean_single_product_meta_link_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".product_meta .posted_in a,.product_meta .tagged_as a").css("color", size);
			});
		}), api("ocean_single_product_meta_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_meta_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_meta_link_color_hover">.product_meta .posted_in a:hover,.product_meta .tagged_as a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_open_image_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product div.images .open-image").css("color", size);
			});
		}), api("ocean_single_product_open_image_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product div.images .open-image").css("border-color", size);
			});
		}), api("ocean_single_product_navigation_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_navigation_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_navigation_border_radius">.owp-product-nav li a.owp-nav-link{ -webkit-border-radius: ' + to + 'px; -moz-border-radius: ' + to + 'px; -ms-border-radius: ' + to + 'px; border-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_navigation_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_navigation_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_navigation_bg">.owp-product-nav li a.owp-nav-link{ background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_navigation_hover_bg", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_navigation_hover_bg");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_navigation_hover_bg">.owp-product-nav li a.owp-nav-link:hover{ background-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}),api("ocean_single_product_navigation_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_navigation_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_navigation_color">.owp-product-nav li a.owp-nav-link{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_navigation_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_navigation_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_navigation_hover_color">.owp-product-nav li a.owp-nav-link:hover{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_navigation_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_navigation_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_navigation_border_color">.owp-product-nav li a.owp-nav-link{ border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_navigation_hover_border_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_navigation_hover_border_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_navigation_hover_border_color">.owp-product-nav li a.owp-nav-link:hover{ border-color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_tabs_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product .woocommerce-tabs ul.tabs").css("border-color", size);
			});
		}), api("ocean_single_product_tabs_text_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product .woocommerce-tabs ul.tabs li a").css("color", size);
			});
		}), api("ocean_single_product_tabs_text_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_single_product_tabs_text_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_single_product_tabs_text_color_hover">.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_single_product_tabs_active_text_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product .woocommerce-tabs ul.tabs li.active a").css("color", size);
			});
		}), api("ocean_single_product_tabs_active_text_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product .woocommerce-tabs ul.tabs li.active a").css("border-color", size);
			});
		}), api("ocean_single_product_tabs_product_description_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product .woocommerce-tabs .panel h2").css("color", size);
			});
		}), api("ocean_single_product_tabs_product_description_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce div.product .woocommerce-tabs .panel p").css("color", size);
			});
		}), api("ocean_account_navigation_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-navigation ul,.woocommerce-MyAccount-navigation ul li").css("border-color", size);
			});
		}), api("ocean_account_navigation_icons_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_account_navigation_icons_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_account_navigation_icons_color">.woocommerce-MyAccount-navigation ul li a:before{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_account_navigation_links_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-navigation ul li a").css("color", size);
			});
		}), api("ocean_account_navigation_links_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_account_navigation_links_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_account_navigation_links_color_hover">.woocommerce-MyAccount-navigation ul li a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_account_addresses_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-content .addresses .woocommerce-Address .title, .woocommerce-MyAccount-content .addresses .woocommerce-Address address").css("background-color", size);
			});
		}), api("ocean_account_addresses_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-content .addresses .woocommerce-Address .title h3").css("color", size);
			});
		}), api("ocean_account_addresses_title_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-content .addresses .woocommerce-Address .title").css("border-color", size);
			});
		}), api("ocean_account_addresses_button_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-content .addresses .woocommerce-Address .title a").css("background-color", size);
			});
		}), api("ocean_account_addresses_button_bg_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_account_addresses_button_bg_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_account_addresses_button_bg_hover">.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a:hover{ background-color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_account_addresses_button_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-content .addresses .woocommerce-Address .title a").css("color", size);
			});
		}), api("ocean_account_addresses_button_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_account_addresses_button_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_account_addresses_button_color_hover">.woocommerce-MyAccount-content .addresses .woocommerce-Address .title a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_account_addresses_content_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-MyAccount-content .addresses .woocommerce-Address address").css("color", size);
			});
		}), api("ocean_cart_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-cart table.shop_table,.woocommerce-cart table.shop_table th,.woocommerce-cart table.shop_table td,.woocommerce-cart .cart-collaterals .cross-sells,.woocommerce-page .cart-collaterals .cross-sells,.woocommerce-cart .cart-collaterals h2,.woocommerce-cart .cart-collaterals .cart_totals,.woocommerce-page .cart-collaterals .cart_totals,.woocommerce-cart .cart-collaterals .cart_totals table th,.woocommerce-cart .cart-collaterals .cart_totals .order-total th,.woocommerce-cart table.shop_table td,.woocommerce-cart .cart-collaterals .cart_totals tr td,.woocommerce-cart .cart-collaterals .cart_totals .order-total td").css("border-color",
					size);
			});
		}), api("ocean_cart_head_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-cart table.shop_table thead,.woocommerce-cart .cart-collaterals h2").css("background-color", size);
			});
		}), api("ocean_cart_head_titles_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-cart table.shop_table thead th,.woocommerce-cart .cart-collaterals h2").css("color", size);
			});
		}), api("ocean_cart_totals_table_titles_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-cart .cart-collaterals .cart_totals table th").css("color", size);
			});
		}), api("ocean_cart_remove_button_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce table.shop_table a.remove").css("color", size);
			});
		}), api("ocean_cart_remove_button_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_cart_remove_button_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_cart_remove_button_color_hover">.woocommerce table.shop_table a.remove:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_checkout_notices_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout .woocommerce-info").css("border-color", size);
			});
		}), api("ocean_checkout_notices_icon_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_checkout_notices_icon_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_checkout_notices_icon_color">.woocommerce-checkout .woocommerce-info:before{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_checkout_notices_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout .woocommerce-info").css("color", size);
			});
		}), api("ocean_checkout_notices_link_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout .woocommerce-info a").css("color", size);
			});
		}), api("ocean_checkout_notices_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_checkout_notices_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_checkout_notices_link_color_hover">.woocommerce-checkout .woocommerce-info a:hover{ color: ' + to + "!important; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_checkout_notices_form_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout form.login,.woocommerce-checkout form.checkout_coupon").css("border-color", size);
			});
		}), api("ocean_checkout_titles_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce .woocommerce-checkout #customer_details h3,.woocommerce .woocommerce-checkout h3#order_review_heading").css("color", size);
			});
		}), api("ocean_checkout_titles_border_bottom_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce .woocommerce-checkout #customer_details h3,.woocommerce .woocommerce-checkout h3#order_review_heading").css("border-color", size);
			});
		}), api("ocean_checkout_table_main_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce table.shop_table thead,.woocommerce-checkout-review-order-table tfoot th").css("background-color", size);
			});
		}), api("ocean_checkout_table_titles_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout table.shop_table thead th,.woocommerce-checkout table.shop_table tfoot th").css("color", size);
			});
		}), api("ocean_checkout_table_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout table.shop_table,.woocommerce-checkout table.shop_table th,.woocommerce-checkout table.shop_table td,.woocommerce-checkout table.shop_table tfoot th,.woocommerce-checkout table.shop_table tfoot td").css("border-color", size);
			});
		}), api("ocean_checkout_payment_methods_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout #payment").css("background-color", size);
			});
		}), api("ocean_checkout_payment_methods_borders_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout #payment,.woocommerce-checkout #payment ul.payment_methods").css("border-color", size);
			});
		}), api("ocean_checkout_payment_box_bg", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout #payment div.payment_box").css("background-color", size);
			});
		}), api("ocean_checkout_payment_box_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".woocommerce-checkout #payment div.payment_box").css("color", size);
			});
		}), api("ocean_edd_top_padding", function($swipe) {
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
		}),


	/******** LifterLMS *********/
		// Courses columns
		api('ocean_llms_courses_columns', function( value ) {
			value.bind( function( newval ) {
				var coursesCol = $( '.llms-loop-list.llms-course-list' );
				if ( coursesCol.length ) {
					$.each( llmsCol, function( i, v ) {
						coursesCol.removeClass( 'cols-'+ v );
					});
					coursesCol.addClass( 'cols-'+ newval );
				}
			});
		}),

		// Courses Tablet columns
		api('ocean_llms_tablet_courses_columns', function( value ) {
			value.bind( function( newval ) {
				var coursesCol = $( '.llms-loop-list.llms-course-list' );
				if ( coursesCol.length ) {
					$.each( llmsTabletCol, function( i, v ) {
						coursesCol.removeClass( v );
					});
					coursesCol.addClass( 'tablet-col' );
					coursesCol.addClass( 'tablet-'+ newval +'-col' );
				}
			});
		}),

		// Courses Mobile columns
		api('ocean_llms_mobile_courses_columns', function( value ) {
			value.bind( function( newval ) {
				var coursesCol = $( '.llms-loop-list.llms-course-list' );
				if ( coursesCol.length ) {
					$.each( llmsMobileCol, function( i, v ) {
						coursesCol.removeClass( v );
					});
					coursesCol.addClass( 'mobile-col' );
					coursesCol.addClass( 'mobile-'+ newval +'-col' );
				}
			});
		});

		// Membership columns
		api('ocean_llms_membership_columns', function( value ) {
			value.bind( function( newval ) {
				var membershipCol = $( '.llms-loop-list.llms-membership-list' );
				if ( membershipCol.length ) {
					$.each( llmsCol, function( i, v ) {
						membershipCol.removeClass( 'cols-'+ v );
					});
					membershipCol.addClass( 'cols-'+ newval );
				}
			});
		}),

		// Membership Tablet columns
		api('ocean_llms_tablet_membership_columns', function( value ) {
			value.bind( function( newval ) {
				var membershipCol = $( '.llms-loop-list.llms-membership-list' );
				if ( membershipCol.length ) {
					$.each( llmsTabletCol, function( i, v ) {
						membershipCol.removeClass( v );
					});
					membershipCol.addClass( 'tablet-col' );
					membershipCol.addClass( 'tablet-'+ newval +'-col' );
				}
			});
		}),

		// Membership Mobile columns
		api('ocean_llms_mobile_membership_columns', function( value ) {
			value.bind( function( newval ) {
				var membershipCol = $( '.llms-loop-list.llms-membership-list' );
				if ( membershipCol.length ) {
					$.each( llmsMobileCol, function( i, v ) {
						membershipCol.removeClass( v );
					});
					membershipCol.addClass( 'mobile-col' );
					membershipCol.addClass( 'mobile-'+ newval +'-col' );
				}
			});
		}),

		// Advanced Styling Options
		api("ocean_llms_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_top_padding">.llms-loop-item .llms-loop-item-content{ padding-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_right_padding">.llms-loop-item .llms-loop-item-content{ padding-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_bottom_padding">.llms-loop-item .llms-loop-item-content{ padding-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_left_padding">.llms-loop-item .llms-loop-item-content{ padding-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_top_padding">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_right_padding">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_bottom_padding">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_left_padding">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_top_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_top_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_top_padding">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ padding-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_right_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_right_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_right_padding">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ padding-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_bottom_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_bottom_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_bottom_padding">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ padding-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_left_padding", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_left_padding");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_left_padding">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ padding-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_top_margin">.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-top: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_right_margin">.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-right: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_bottom_margin">.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-bottom: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_left_margin">.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-left: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_tablet_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_tablet_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_tablet_top_margin">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_tablet_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_tablet_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_tablet_right_margin">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_tablet_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_tablet_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_tablet_bottom_margin">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_tablet_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_tablet_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_tablet_left_margin">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_mobile_top_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_mobile_top_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_mobile_top_margin">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-top: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_mobile_right_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_mobile_right_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_mobile_right_margin">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-right: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_mobile_bottom_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_mobile_bottom_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_mobile_bottom_margin">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-bottom: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_image_mobile_left_margin", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_image_mobile_left_margin");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_image_mobile_left_margin">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content .llms-featured-image{ margin-left: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_top_border_width">.llms-loop-item .llms-loop-item-content{ border-top-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_right_border_width">.llms-loop-item .llms-loop-item-content{ border-right-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_bottom_border_width">.llms-loop-item .llms-loop-item-content{ border-bottom-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_left_border_width">.llms-loop-item .llms-loop-item-content{ border-left-width: ' + to + "px; border-style: solid; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_top_border_width">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-top-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_right_border_width">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-right-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_bottom_border_width">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-bottom-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_left_border_width">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-left-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_top_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_top_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_top_border_width">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-top-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_right_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_right_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_right_border_width">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-right-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_bottom_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_bottom_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_bottom_border_width">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-bottom-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_left_border_width", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_left_border_width");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_left_border_width">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-left-width: ' + to + "px; border-style: solid; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_top_border_radius">.llms-loop-item .llms-loop-item-content{ border-top-left-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_right_border_radius">.llms-loop-item .llms-loop-item-content{ border-top-right-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_bottom_border_radius">.llms-loop-item .llms-loop-item-content{ border-bottom-right-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_left_border_radius">.llms-loop-item .llms-loop-item-content{ border-bottom-left-radius: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_top_border_radius">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-top-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_right_border_radius">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-top-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_bottom_border_radius">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-bottom-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_tablet_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_tablet_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_tablet_left_border_radius">@media (max-width: 768px){.llms-loop-item .llms-loop-item-content{ border-bottom-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_top_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_top_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_top_border_radius">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-top-left-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_right_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_right_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_right_border_radius">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-top-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_bottom_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_bottom_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_bottom_border_radius">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-bottom-right-radius: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_mobile_left_border_radius", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_llms_mobile_left_border_radius");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_mobile_left_border_radius">@media (max-width: 480px){.llms-loop-item .llms-loop-item-content{ border-bottom-left-radius:' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_background_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-loop-item .llms-loop-item-content").css("background-color", size);
			});
		}), api("ocean_llms_border_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-loop-item .llms-loop-item-content").css("border-color", size);
			});
		}), api("ocean_llms_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-loop-item-content .llms-loop-title").css("color", size);
			});
		}), api("ocean_llms_title_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-llms_title_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_title_color_hover">.llms-loop-item-content .llms-loop-title:hover { color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_author_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-loop-item-content .llms-author").css("color", size);
			});
		}), api("ocean_llms_meta_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-loop-item-content .llms-meta").css("color", size);
			});
		}), api("ocean_llms_course_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".single-course .entry-title").css("color", size);
			});
		}), api("ocean_llms_course_subtitle_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".single-course .llms-meta-title").css("color", size);
			});
		}), api("ocean_llms_course_meta_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-meta-info .llms-meta p").css("color", size);
			});
		}), api("ocean_llms_course_meta_link_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-meta-info .llms-meta span, .llms-meta-info .llms-meta a").css("color", size);
			});
		}), api("ocean_llms_course_meta_link_color_hover", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-llms_course_meta_link_color_hover");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_course_meta_link_color_hover">.llms-meta-info .llms-meta a:hover{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_llms_course_author_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-instructor-info .llms-instructors .llms-author").css("color", size);
			});
		}), api("ocean_llms_course_progress_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-progress .progress-bar-complete").css("color", size);
			});
		}), api("ocean_llms_course_section_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-syllabus-wrapper .llms-section-title, .llms-access-plan-title").css("color", size);
			});
		}), api("ocean_llms_course_section_title_background", function($swipe) {
			$swipe.bind(function(size) {
				$(".llms-syllabus-wrapper .llms-section-title, .llms-access-plan-title").css("background-color", size);
			});
		}), api("ocean_llms_lesson_title_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".single-lesson .entry-title").css("color", size);
			});
		}), api("ocean_llms_lesson_description_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".single-lesson .entry-content").css("color", size);
			});
		}), 
		// Both Sidebars - LLMS Global
		api( 'ocean_llms_global_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_llms_global_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_llms_global_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.llms-global-layout.content-both-sidebars .content-area { width: ' + to + '%; } body.llms-global-layout.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.llms-global-layout.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		api( 'ocean_llms_global_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_llms_global_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_llms_global_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.llms-global-layout.content-both-sidebars .widget-area{width:' + to + '%;} body.llms-global-layout.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.llms-global-layout.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		// Both Sidebars - LLMS Course
		api( 'ocean_llms_course_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_llms_course_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_llms_course_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .content-area { width: ' + to + '%; } body.single-course.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-course.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		api( 'ocean_llms_course_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_llms_course_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_llms_course_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .widget-area{width:' + to + '%;} body.single-course.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.single-course.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		// Both Sidebars - LLMS Lesson
		api( 'ocean_llms_lesson_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_llms_lesson_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_llms_lesson_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .content-area { width: ' + to + '%; } body.single-lesson.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-lesson.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		api( 'ocean_llms_lesson_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_llms_lesson_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_llms_lesson_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .widget-area{width:' + to + '%;} body.single-lesson.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.single-lesson.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}), 

		// Both Sidebars - Learn Dash Global
		api( 'ocean_ld_global_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_ld_global_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_ld_global_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.ld-global-layout.content-both-sidebars .content-area { width: ' + to + '%; } body.ld-global-layout.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.ld-global-layout.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		api( 'ocean_ld_global_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_ld_global_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_ld_global_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.ld-global-layout.content-both-sidebars .widget-area{width:' + to + '%;} body.ld-global-layout.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.ld-global-layout.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		// Both Sidebars - Learn Dash Course
		api( 'ocean_ld_course_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_ld_course_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_ld_course_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .content-area { width: ' + to + '%; } body.single-course.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-course.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		api( 'ocean_ld_course_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_ld_course_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_ld_course_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .widget-area{width:' + to + '%;} body.single-course.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.single-course.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		// Both Sidebars - Learn Dash Lesson
		api( 'ocean_ld_lesson_both_sidebars_content_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_ld_lesson_both_sidebars_content_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_ld_lesson_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .content-area { width: ' + to + '%; } body.single-lesson.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-lesson.content-both-sidebars.ssc-style .widget-area {left: -' + to + '%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}),

		api( 'ocean_ld_lesson_both_sidebars_sidebars_width', function( value ) {
			value.bind( function( to ) {
				var $child = $( '.customizer-ocean_ld_lesson_both_sidebars_sidebars_width' );
				if ( to ) {
					var style = '<style class="customizer-ocean_ld_lesson_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .widget-area{width:' + to + '%;} body.single-lesson.content-both-sidebars.scs-style .content-area{left:' + to + '%;} body.single-lesson.content-both-sidebars.ssc-style .content-area{left:'+ to * 2 +'%;} }</style>';
					if ( $child.length ) {
						$child.replaceWith( style );
					} else {
						$( 'head' ).append( style );
					}
				} else {
					$child.remove();
				}
			} );
		}), api("ocean_ld_heading_color", function($swipe) {
			$swipe.bind(function(size) {
				$("#learndash_lessons #lesson_heading, #learndash_profile .learndash_profile_heading, #learndash_quizzes #quiz_heading, #learndash_lesson_topics_list div > strong").css("color", size);
			});
		}), api("ocean_ld_heading_bg_color", function($swipe) {
			$swipe.bind(function(size) {
				$("#learndash_lessons #lesson_heading, #learndash_profile .learndash_profile_heading, #learndash_quizzes #quiz_heading, #learndash_lesson_topics_list div > strong").css("background-color", size);
			});
		}), api("ocean_ld_item_color", function($swipe) {
			$swipe.bind(function(size) {
				$("#lessons_list > div h4 a, #course_list > div h4 a, #quiz_list > div h4 a, .learndash_topic_dots a, .learndash_topic_dots a > span, #learndash_lesson_topics_list span a").css("color", size);
			});
		}), api("ocean_ld_item_hover_color", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-ocean_ld_item_hover_color");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-ocean_llms_course_meta_link_color_hover">#lessons_list > div h4 a:hover, #lessons_list > div h4 a:hover > span, #course_list > div h4 a:hover, #course_list > div h4 a:hover > span, #quiz_list > div h4 a:hover, #quiz_list > div h4 a:hover > span, .learndash_topic_dots a:hover, .learndash_topic_dots a:hover span, #learndash_lesson_topics_list span a:hover{ color: ' + to + "; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		}), api("ocean_ld_complete_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".learndash_navigation_lesson_topics_list .topic-completed span:before, .learndash_navigation_lesson_topics_list ul .topic-completed span:before, .learndash_topic_dots .topic-completed span:before, .learndash_topic_dots ul .topic-completed span:before, .learndash .completed:before, #learndash_profile .completed:before").css("color", size);
			});
		}), api("ocean_ld_incomplete_color", function($swipe) {
			$swipe.bind(function(size) {
				$(".learndash_navigation_lesson_topics_list .topic-notcompleted span:before, .learndash_navigation_lesson_topics_list ul .topic-notcompleted span:before, .learndash_topic_dots .topic-notcompleted span:before, .learndash_topic_dots ul .topic-notcompleted span:before, .learndash .notcompleted:before, #learndash_profile .notcompleted:before").css("color", size);
			});
		}), api("ocean_ld_progressbar_color", function($swipe) {
			$swipe.bind(function(size) {
				$("dd.course_progress div.course_progress_blue").css("color", size);
			});
		}); 

} )( jQuery );