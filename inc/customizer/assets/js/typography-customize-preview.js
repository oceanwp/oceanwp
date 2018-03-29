/**
 * Update Typography Customizer settings live.
 *
 * @version 1.0.0
 */

( function( $ ) {

	// Declare vars
	var api = wp.customize;

	/******** TYPOGRAPHY OPTIONS LOOP *********/
	api( "body_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-body-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-body-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-family">body{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-weight">body{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-style">body{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-size">body{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-tablet-font-size">@media (max-width: 768px){body{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-mobile-font-size">@media (max-width: 480px){body{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-color">body{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-line-height">body{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-tablet-line-height">@media (max-width: 768px){body{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-mobile-line-height">@media (max-width: 480px){body{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-letter-spacing">body{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-tablet-letter-spacing">@media (max-width: 768px){body{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-mobile-letter-spacing">@media (max-width: 480px){body{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-text-transform">body{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h1-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-heading_h1-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-family">h1{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-weight">h1{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-style">h1{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-size">h1{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-tablet-font-size">@media (max-width: 768px){h1{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-mobile-font-size">@media (max-width: 480px){h1{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-color">h1{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-line-height">h1{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-tablet-line-height">@media (max-width: 768px){h1{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-mobile-line-height">@media (max-width: 480px){h1{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-letter-spacing">h1{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-tablet-letter-spacing">@media (max-width: 768px){h1{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-mobile-letter-spacing">@media (max-width: 480px){h1{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-text-transform">h1{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h2-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-heading_h2-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-family">h2{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-weight">h2{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-style">h2{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-size">h2{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-tablet-font-size">@media (max-width: 768px){h2{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-mobile-font-size">@media (max-width: 480px){h2{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-color">h2{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-line-height">h2{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-tablet-line-height">@media (max-width: 768px){h2{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-mobile-line-height">@media (max-width: 480px){h2{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-letter-spacing">h2{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-tablet-letter-spacing">@media (max-width: 768px){h2{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-mobile-letter-spacing">@media (max-width: 480px){h2{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-text-transform">h2{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h3-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-heading_h3-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-family">h3{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-weight">h3{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-style">h3{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-size">h3{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-tablet-font-size">@media (max-width: 768px){h3{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-mobile-font-size">@media (max-width: 480px){h3{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-color">h3{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-line-height">h3{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-tablet-line-height">@media (max-width: 768px){h3{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-mobile-line-height">@media (max-width: 480px){h3{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-letter-spacing">h3{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-tablet-letter-spacing">@media (max-width: 768px){h3{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-mobile-letter-spacing">@media (max-width: 480px){h3{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-text-transform">h3{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h4-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-heading_h4-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-family">h4{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-weight">h4{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-style">h4{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-size">h4{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-tablet-font-size">@media (max-width: 768px){h4{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-mobile-font-size">@media (max-width: 480px){h4{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-color">h4{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-line-height">h4{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-tablet-line-height">@media (max-width: 768px){h4{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-mobile-line-height">@media (max-width: 480px){h4{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-letter-spacing">h4{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-tablet-letter-spacing">@media (max-width: 768px){h4{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-mobile-letter-spacing">@media (max-width: 480px){h4{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-text-transform">h4{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-headings-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-headings-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-font-family">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-font-weight">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-font-style">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-font-size">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-tablet-font-size">@media (max-width: 768px){h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-mobile-font-size">@media (max-width: 480px){h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-color">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-line-height">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-tablet-line-height">@media (max-width: 768px){h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-mobile-line-height">@media (max-width: 480px){h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-letter-spacing">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-tablet-letter-spacing">@media (max-width: 768px){h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-mobile-letter-spacing">@media (max-width: 480px){h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "headings_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-headings-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-headings-text-transform">h1,h2,h3,h4,h5,h6,.theme-heading,.widget-title,.oceanwp-widget-recent-posts-title,.comment-reply-title,.entry-title,.sidebar-box .widget-title{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-logo-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-logo-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-font-family">#site-logo a.site-logo-text{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-font-weight">#site-logo a.site-logo-text{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-font-style">#site-logo a.site-logo-text{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-font-size">#site-logo a.site-logo-text{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-tablet-font-size">@media (max-width: 768px){#site-logo a.site-logo-text{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-mobile-font-size">@media (max-width: 480px){#site-logo a.site-logo-text{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-color">#site-logo a.site-logo-text{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-line-height">#site-logo a.site-logo-text{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-tablet-line-height">@media (max-width: 768px){#site-logo a.site-logo-text{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-mobile-line-height">@media (max-width: 480px){#site-logo a.site-logo-text{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-letter-spacing">#site-logo a.site-logo-text{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-tablet-letter-spacing">@media (max-width: 768px){#site-logo a.site-logo-text{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-mobile-letter-spacing">@media (max-width: 480px){#site-logo a.site-logo-text{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "logo_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-logo-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-logo-text-transform">#site-logo a.site-logo-text{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-top_menu-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-top_menu-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-font-family">#top-bar-content{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-font-weight">#top-bar-content{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-font-style">#top-bar-content{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-font-size">#top-bar-content{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-tablet-font-size">@media (max-width: 768px){#top-bar-content{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-mobile-font-size">@media (max-width: 480px){#top-bar-content{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-color">#top-bar-content{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-line-height">#top-bar-content{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-tablet-line-height">@media (max-width: 768px){#top-bar-content{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-mobile-line-height">@media (max-width: 480px){#top-bar-content{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-letter-spacing">#top-bar-content{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-tablet-letter-spacing">@media (max-width: 768px){#top-bar-content{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-mobile-letter-spacing">@media (max-width: 480px){#top-bar-content{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "top_menu_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-top_menu-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-top_menu-text-transform">#top-bar-content{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-menu-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-menu-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-font-family">#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-font-weight">#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-font-style">#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-font-size">#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-tablet-font-size">@media (max-width: 768px){#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-mobile-font-size">@media (max-width: 480px){#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-color">#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-letter-spacing">#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-tablet-letter-spacing">@media (max-width: 768px){#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-mobile-letter-spacing">@media (max-width: 480px){#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu-text-transform">#site-navigation-wrap .dropdown-menu > li > a,#site-header.full_screen-header .fs-dropdown-menu > li > a,#site-header.top-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.center-header #site-navigation-wrap .dropdown-menu > li > a,#site-header.medium-header #site-navigation-wrap .dropdown-menu > li > a,.oceanwp-mobile-menu-icon a{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-menu_dropdown-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-menu_dropdown-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-font-family">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-font-weight">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-font-style">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-font-size">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-tablet-font-size">@media (max-width: 768px){.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-mobile-font-size">@media (max-width: 480px){.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-color">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-line-height">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-tablet-line-height">@media (max-width: 768px){.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-mobile-line-height">@media (max-width: 480px){.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-letter-spacing">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-tablet-letter-spacing">@media (max-width: 768px){.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-mobile-letter-spacing">@media (max-width: 480px){.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "menu_dropdown_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-menu_dropdown-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-menu_dropdown-text-transform">.dropdown-menu ul li a.menu-link,#site-header.full_screen-header .fs-dropdown-menu ul.sub-menu li a{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-mobile_menu_dropdown-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-mobile_menu_dropdown-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-font-family">.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-font-weight">.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-font-style">.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-font-size">.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-tablet-font-size">@media (max-width: 768px){.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-mobile-font-size">@media (max-width: 480px){.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-line-height">.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-tablet-line-height">@media (max-width: 768px){.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-mobile-line-height">@media (max-width: 480px){.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-letter-spacing">.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-tablet-letter-spacing">@media (max-width: 768px){.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-mobile-letter-spacing">@media (max-width: 480px){.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "mobile_menu_dropdown_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-mobile_menu_dropdown-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-mobile_menu_dropdown-text-transform">.sidr-class-dropdown-menu li a, a.sidr-class-toggle-sidr-close, #mobile-dropdown ul li a, body #mobile-fullscreen ul li a{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-page_title-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-page_title-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-font-family">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-font-weight">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-font-style">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-font-size">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-tablet-font-size">@media (max-width: 768px){.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-mobile-font-size">@media (max-width: 480px){.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-color">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-line-height">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-tablet-line-height">@media (max-width: 768px){.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-mobile-line-height">@media (max-width: 480px){.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-letter-spacing">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-tablet-letter-spacing">@media (max-width: 768px){.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-mobile-letter-spacing">@media (max-width: 480px){.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_title_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_title-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_title-text-transform">.page-header .page-header-title, .page-header.background-image-page-header .page-header-title{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-page_subheading-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-page_subheading-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-family">.page-header .page-subheading{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-weight">.page-header .page-subheading{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-style">.page-header .page-subheading{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-size">.page-header .page-subheading{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-tablet-font-size">@media (max-width: 768px){.page-header .page-subheading{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-mobile-font-size">@media (max-width: 480px){.page-header .page-subheading{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-color">.page-header .page-subheading{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-line-height">.page-header .page-subheading{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-tablet-line-height">@media (max-width: 768px){.page-header .page-subheading{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-mobile-line-height">@media (max-width: 480px){.page-header .page-subheading{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-letter-spacing">.page-header .page-subheading{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-tablet-letter-spacing">@media (max-width: 768px){.page-header .page-subheading{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-mobile-letter-spacing">@media (max-width: 480px){.page-header .page-subheading{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-text-transform">.page-header .page-subheading{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-breadcrumbs-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-breadcrumbs-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-family">.site-breadcrumbs{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-weight">.site-breadcrumbs{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-style">.site-breadcrumbs{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-size">.site-breadcrumbs{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-tablet-font-size">@media (max-width: 768px){.site-breadcrumbs{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-mobile-font-size">@media (max-width: 480px){.site-breadcrumbs{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-color">.site-breadcrumbs{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-line-height">.site-breadcrumbs{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-tablet-line-height">@media (max-width: 768px){.site-breadcrumbs{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-mobile-line-height">@media (max-width: 480px){.site-breadcrumbs{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-letter-spacing">.site-breadcrumbs{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-tablet-letter-spacing">@media (max-width: 768px){.site-breadcrumbs{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-mobile-letter-spacing">@media (max-width: 480px){.site-breadcrumbs{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-text-transform">.site-breadcrumbs{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-blog_entry_title-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-blog_entry_title-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-font-family">#blog-entries .post .blog-entry-header .entry-title a{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-font-weight">#blog-entries .post .blog-entry-header .entry-title a{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-font-style">#blog-entries .post .blog-entry-header .entry-title a{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-font-size">#blog-entries .post .blog-entry-header .entry-title a{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-tablet-font-size">@media (max-width: 768px){#blog-entries .post .blog-entry-header .entry-title a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-mobile-font-size">@media (max-width: 480px){#blog-entries .post .blog-entry-header .entry-title a{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-color">#blog-entries .post .blog-entry-header .entry-title a{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-line-height">#blog-entries .post .blog-entry-header .entry-title a{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-tablet-line-height">@media (max-width: 768px){#blog-entries .post .blog-entry-header .entry-title a{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-mobile-line-height">@media (max-width: 480px){#blog-entries .post .blog-entry-header .entry-title a{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-letter-spacing">#blog-entries .post .blog-entry-header .entry-title a{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-tablet-letter-spacing">@media (max-width: 768px){#blog-entries .post .blog-entry-header .entry-title a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-mobile-letter-spacing">@media (max-width: 480px){#blog-entries .post .blog-entry-header .entry-title a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_entry_title_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_entry_title-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_entry_title-text-transform">#blog-entries .post .blog-entry-header .entry-title a{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-blog_post_title-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-blog_post_title-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-font-family">.single-post .entry-title{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-font-weight">.single-post .entry-title{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-font-style">.single-post .entry-title{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-font-size">.single-post .entry-title{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-tablet-font-size">@media (max-width: 768px){.single-post .entry-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-mobile-font-size">@media (max-width: 480px){.single-post .entry-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-color">.single-post .entry-title{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-line-height">.single-post .entry-title{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-tablet-line-height">@media (max-width: 768px){.single-post .entry-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-mobile-line-height">@media (max-width: 480px){.single-post .entry-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-letter-spacing">.single-post .entry-title{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-tablet-letter-spacing">@media (max-width: 768px){.single-post .entry-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-mobile-letter-spacing">@media (max-width: 480px){.single-post .entry-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "blog_post_title_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-blog_post_title-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-blog_post_title-text-transform">.single-post .entry-title{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-sidebar_widget_title-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-sidebar_widget_title-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-font-family">.sidebar-box .widget-title{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-font-weight">.sidebar-box .widget-title{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-font-style">.sidebar-box .widget-title{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-font-size">.sidebar-box .widget-title{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-tablet-font-size">@media (max-width: 768px){.sidebar-box .widget-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-mobile-font-size">@media (max-width: 480px){.sidebar-box .widget-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-color">.sidebar-box .widget-title{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-line-height">.sidebar-box .widget-title{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-tablet-line-height">@media (max-width: 768px){.sidebar-box .widget-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-mobile-line-height">@media (max-width: 480px){.sidebar-box .widget-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-letter-spacing">.sidebar-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-tablet-letter-spacing">@media (max-width: 768px){.sidebar-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-mobile-letter-spacing">@media (max-width: 480px){.sidebar-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "sidebar_widget_title_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-sidebar_widget_title-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-sidebar_widget_title-text-transform">.sidebar-box .widget-title{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-footer_widget_title-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-footer_widget_title-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-font-family">#footer-widgets .footer-box .widget-title{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-font-weight">#footer-widgets .footer-box .widget-title{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-font-style">#footer-widgets .footer-box .widget-title{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-font-size">#footer-widgets .footer-box .widget-title{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-tablet-font-size">@media (max-width: 768px){#footer-widgets .footer-box .widget-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-mobile-font-size">@media (max-width: 480px){#footer-widgets .footer-box .widget-title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-color">#footer-widgets .footer-box .widget-title{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-line-height">#footer-widgets .footer-box .widget-title{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-tablet-line-height">@media (max-width: 768px){#footer-widgets .footer-box .widget-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-mobile-line-height">@media (max-width: 480px){#footer-widgets .footer-box .widget-title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-letter-spacing">#footer-widgets .footer-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-tablet-letter-spacing">@media (max-width: 768px){#footer-widgets .footer-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-mobile-letter-spacing">@media (max-width: 480px){#footer-widgets .footer-box .widget-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_widget_title_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_widget_title-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_widget_title-text-transform">#footer-widgets .footer-box .widget-title{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-copyright-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-copyright-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-font-family">#footer-bottom #copyright{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-font-weight">#footer-bottom #copyright{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-font-style">#footer-bottom #copyright{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-font-size">#footer-bottom #copyright{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-tablet-font-size">@media (max-width: 768px){#footer-bottom #copyright{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-mobile-font-size">@media (max-width: 480px){#footer-bottom #copyright{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-color">#footer-bottom #copyright{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-line-height">#footer-bottom #copyright{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-tablet-line-height">@media (max-width: 768px){#footer-bottom #copyright{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-mobile-line-height">@media (max-width: 480px){#footer-bottom #copyright{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-letter-spacing">#footer-bottom #copyright{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-tablet-letter-spacing">@media (max-width: 768px){#footer-bottom #copyright{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-mobile-letter-spacing">@media (max-width: 480px){#footer-bottom #copyright{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "copyright_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-copyright-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-copyright-text-transform">#footer-bottom #copyright{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-footer_menu-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-footer_menu-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-font-family">#footer-bottom #footer-bottom-menu{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-font-weight">#footer-bottom #footer-bottom-menu{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-font-style">#footer-bottom #footer-bottom-menu{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-font-size">#footer-bottom #footer-bottom-menu{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-tablet-font-size">@media (max-width: 768px){#footer-bottom #footer-bottom-menu{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-mobile-font-size">@media (max-width: 480px){#footer-bottom #footer-bottom-menu{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-color">#footer-bottom #footer-bottom-menu{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-line-height">#footer-bottom #footer-bottom-menu{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-tablet-line-height">@media (max-width: 768px){#footer-bottom #footer-bottom-menu{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-mobile-line-height">@media (max-width: 480px){#footer-bottom #footer-bottom-menu{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-letter-spacing">#footer-bottom #footer-bottom-menu{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-tablet-letter-spacing">@media (max-width: 768px){#footer-bottom #footer-bottom-menu{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-mobile-letter-spacing">@media (max-width: 480px){#footer-bottom #footer-bottom-menu{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "footer_menu_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-footer_menu-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-footer_menu-text-transform">#footer-bottom #footer-bottom-menu{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-product-title-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-product-title-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-font-family">.woocommerce div.product .product_title{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-title-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-font-weight">.woocommerce div.product .product_title{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-title-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-font-style">.woocommerce div.product .product_title{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-title-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-font-size">.woocommerce div.product .product_title{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_title-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_title-tablet-font-size">@media (max-width: 768px){.woocommerce div.product .product_title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_title-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_title-mobile-font-size">@media (max-width: 480px){.woocommerce div.product .product_title{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-title-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-color">.woocommerce div.product .product_title{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-title-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-line-height">.woocommerce div.product .product_title{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_title-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_title-tablet-line-height">@media (max-width: 768px){.woocommerce div.product .product_title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_title-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_title-mobile-line-height">@media (max-width: 480px){.woocommerce div.product .product_title{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-title-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-letter-spacing">.woocommerce div.product .product_title{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_title-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_title-tablet-letter-spacing">@media (max-width: 768px){.woocommerce div.product .product_title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_title-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_title-mobile-letter-spacing">@media (max-width: 480px){.woocommerce div.product .product_title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_title_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-title-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-title-text-transform">.woocommerce div.product .product_title{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-product-price-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-product-price-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-font-family">.woocommerce div.product p.price{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-font-weight">.woocommerce div.product p.price{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-font-style">.woocommerce div.product p.price{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-font-size">.woocommerce div.product p.price{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-tablet-font-size">@media (max-width: 768px){.woocommerce div.product p.price{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-mobile-font-size">@media (max-width: 480px){.woocommerce div.product p.price{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-line-height">.woocommerce div.product p.price{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-tablet-line-height">@media (max-width: 768px){.woocommerce div.product p.price{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-mobile-line-height">@media (max-width: 480px){.woocommerce div.product p.price{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-letter-spacing">.woocommerce div.product p.price{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-tablet-letter-spacing">@media (max-width: 768px){.woocommerce div.product p.price{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-mobile-letter-spacing">@media (max-width: 480px){.woocommerce div.product p.price{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_price_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-product-price-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-product-price-text-transform">.woocommerce div.product p.price{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-add-to-cart-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = oceanwp.googleFontsUrl + "/css?family=" + pair + ":" + oceanwp.googleFontsWeight;
				if ( $( "#" + idfirst ).length ) {
					$( "#" + idfirst ).attr( "href", fontSize );
				} else {
					$( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
				}
			}
			var $child = $( ".customizer-typography-add-to-cart-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-font-family">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-add-to-cart-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-font-weight">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-add-to-cart-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-font-style">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-add-to-cart-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-font-size">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_add_to_cart-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_add_to_cart-tablet-font-size">@media (max-width: 768px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_add_to_cart-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_add_to_cart-mobile-font-size">@media (max-width: 480px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-add-to-cart-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-color">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-add-to-cart-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-line-height">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_add_to_cart-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_add_to_cart-tablet-line-height">@media (max-width: 768px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_add_to_cart-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_add_to_cart-mobile-line-height">@media (max-width: 480px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-add-to-cart-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-letter-spacing">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_add_to_cart-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_add_to_cart-tablet-letter-spacing">@media (max-width: 768px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-woo_product_add_to_cart-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-woo_product_add_to_cart-mobile-letter-spacing">@media (max-width: 480px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "woo_product_add_to_cart_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-add-to-cart-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-add-to-cart-text-transform">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} );

} )( jQuery );