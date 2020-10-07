/**
 * Update Customizer settings live.
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
    ];

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
		});

} )( jQuery );