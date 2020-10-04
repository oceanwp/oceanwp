/**
 * Update Learn Dash Customizer settings live.
 *
 * @version 1.0.0
 * 
 * @since 2.0
 */

( function( $ ) {

    // Declare vars
	var api = wp.customize;
    
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
				var img = '<style class="customizer-ocean_ld_item_hover_color">#lessons_list > div h4 a:hover, #lessons_list > div h4 a:hover > span, #course_list > div h4 a:hover, #course_list > div h4 a:hover > span, #quiz_list > div h4 a:hover, #quiz_list > div h4 a:hover > span, .learndash_topic_dots a:hover, .learndash_topic_dots a:hover span, #learndash_lesson_topics_list span a:hover{ color: ' + to + "; }</style>";
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