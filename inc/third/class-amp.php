<?php
/**
 * AMP support for Theme
 *
 * @package OceanWP WordPress theme
 *
 * @author Amit Singh (apprimit@gmail.com)
 * @since 1.8.7
 */

// Start and run class.
if ( ! class_exists( 'OceanWP_AMP' ) ) {

	/**
	 * OceanWP AMP Setup
	 */
	class OceanWP_AMP {

		/**
		 * Main Class Constructor
		 */
		public function __construct() {

			add_action( 'wp', array( $this, 'oceanwp_amp_config' ) );

		}

		/**
		 * It will add required functions to enable AMP support if AMP endpoinnt is detected.
		 *
		 * @return void
		 */
		public function oceanwp_amp_config() {

			if ( ! OCEANWP_Theme_Class::oceanwp_is_amp() ) {
				return;
			}

			add_filter( 'oceanwp_schema_location_html', array( $this, 'oceanwp_body_id' ) );
			add_filter( 'oceanwp_menu_toggle_data_attrs', array( $this, 'oceanwp_menu_taggle_attrs' ) );
			add_action( 'wp_footer', array( $this, 'render_amp_states' ) );
			add_filter( 'oceanwp_attrs_mobile_dropdown', array( $this, 'oceanwp_dropdown_menu_wrapper' ) );
			add_filter( 'oceanwp_attrs_mobile_fullscreen', array( $this, 'oceanwp_fullscreen_menu_wrapper' ) );
			add_filter( 'oceanwp_attrs_mobile_fullscreen_close', array( $this, 'oceanwp_fullscreen_menu_close' ) );
			add_filter( 'walker_nav_menu_start_el', array( $this, 'mobile_submenu_icon' ), 20, 4 );
			add_filter( 'oceanwp_toggle_submenu_icon', array( $this, 'toggle_submenu_icon' ), 20, 2 );
			add_filter( 'owp_attr_submenu-toggle', array( $this, 'menu_toggle_button' ), 20, 3 );
			add_filter( 'oceanwp_attrs_search_bar', array( $this, 'oceanwp_menu_search_bar' ) );
			add_filter( 'oceanwp_attrs_overlay_search_bar', array( $this, 'oceanwp_menu_overlay_search_bar' ) );
			add_filter( 'oceanwp_attrs_nav_search_bar', array( $this, 'oceanwp_nav_item_search_bar' ) );
			add_filter( 'oceanwp_attrs_main_nav', array( $this, 'oceanwp_attrs_nav_wrapper' ) );
			add_filter( 'oceanwp_attrs_vertical_header_style', array( $this, 'oceanwp_attrs_vertical_header_toggle' ) );
			add_filter( 'ocean_head_css', array( $this, 'oceanwp_amp_css' ) );

			// Woocommerce AMP.
			if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {

				add_filter( 'ocean_menu_cart_style', array( $this, 'oceanwp_amp_mini_cart_style' ) );

			}

		}

		/**
		 * Show body attrs.
		 *
		 * @since 1.8.7
		 * @param String $schema markup returned from theme.
		 * @return String
		 */
		public function oceanwp_body_id( $schema ) {
			return $schema . 'id="oceanwp-body"';
		}

		/**
		 * Get CSS
		 *
		 * @param obj $output    css output.
		 */
		public function oceanwp_amp_css( $output ) {

			$css = '';

			$css .= '#mobile-dropdown.opened {
				display: block;
			}
			.menu-item {
				display: flex;
				position: relative;
				align-item: center;
				-webkit-box-pack: center;
				-webkit-justify-content: center;
				-moz-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-webkit-flex-direction: column;
				-moz-box-orient: vertical;
				-moz-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
			}
			.menu-item-has-children > button.submenu-toggle {
				display: inline-block;
				position: absolute;
				background-color: transparent;
				color: #555;
				border: 0;
				font-size: 20px;
				top: .3em;
				right: 20px;
				cursor: pointer;
				padding: 0 1em;
				font-weight: normal;
				line-height: inherit;
			}
			.menu-item-has-children > button.submenu-toggle::before {
				content: "+";
				display: inline-block;
			}
			.menu-item-has-children > button.submenu-toggle.submenu-open+ul.sub-menu {
				display: block !important;
			}
			.menu-item-has-children > button.submenu-toggle.submenu-open::before {
				content: "-";
			}
			.menu-item-has-children:hover > ul.sub-menu {
				opacity: 1;
				display: block;
				visibility: visible;
			}';

			$amp_menu_breakpoint        = get_theme_mod( 'ocean_mobile_menu_breakpoints', '959' );
			$amp_menu_custom_breakpoint = get_theme_mod( 'ocean_mobile_menu_custom_breakpoint' );
			$amp_vheader_style_width    = get_theme_mod( 'ocean_vertical_header_width', '300' );

			if ( 'custom' === $amp_menu_breakpoint && ! empty( $amp_menu_custom_breakpoint ) ) {
				$amp_menu_breakpoint = $amp_menu_custom_breakpoint;
			}

			if ( ! empty( $amp_menu_breakpoint ) ) {

				$css .= '@media (min-width: ' . $amp_menu_breakpoint . 'px) {
					#site-header:not(.vertical-header) .menu-item-has-children > button.submenu-toggle {
						display: none;
					}

					body.vertical-header-style.default-collapse.left-header #site-header.vertical-header {
						left: -' . ( $amp_vheader_style_width - 36 ) . 'px;
					}
					body.vertical-header-style.default-collapse.left-header.amp-vertical-header #site-header.vertical-header {
						left: 0;
					}

					body.vertical-header-style.default-collapse.right-header #site-header.vertical-header {
						right: -' . ( $amp_vheader_style_width - 36 ) . 'px;
					}
					body.vertical-header-style.default-collapse.right-header.amp-vertical-header #site-header.vertical-header {
						right: 0;
					}

				}';
			}

			$css .= '#mobile-fullscreen.opened {
				display: block;
			}
			#mobile-fullscreen {
				overflow-y: auto;
			}
			.fullscreen-mobile .oceanwp-mobile-menu-icon a.mobile-menu.opened .oceanwp-text {
				display: inherit;
			}';

			$css .= '#searchform-overlay.active {
				display: block;
			}';

			if ( OCEANWP_WOOCOMMERCE_ACTIVE ) {

				$css .= '.woocommerce ul.products li.product:not(.product-category) .woo-entry-buttons li a.owp-quick-view,
				.owp-quick-view {
					display: none;
				}
				.woocommerce .oceanwp-grid-list {
					display: none;
				}
				@media only screen and (max-width: 480px) {
					.woocommerce .oceanwp-grid-list {
						display: none;
					}
				}

				';

			}

			// Return CSS.
			if ( ! empty( $css ) ) {
				$output .= '/* OceanWP AMP CSS */' . $css;
			}

			// Return output css.
			return $output;

		}

		/**
		 * Menu Toggle attributes
		 *
		 * @param string $input the data attrs already existing in nav toggle.
		 * @return string
		 */
		public function oceanwp_menu_taggle_attrs( $input ) {
			$input .= ' on="tap:AMP.setState( { owpAmpMenuExpanded: ! owpAmpMenuExpanded } ),oceanwp-body.toggleClass(class=mobile-dropdown)" ';
			$input .= ' [class]="\'mobile-menu\' + ( owpAmpMenuExpanded ? \' opened\' : \'\' )" ';
			$input .= ' aria-expanded="false" ';
			$input .= ' [aria-expanded]="owpAmpMenuExpanded ? \'true\' : \'false\'" ';

			return $input;
		}

		/**
		 * Add AMP attributes to the mobile dropdown menu wrapper.
		 *
		 * @param string $input the data attrs already existing in nav toggle.
		 * @return string
		 */
		public function oceanwp_dropdown_menu_wrapper( $input ) {
			$input .= ' [class]="\'clr\' + ( owpAmpMenuExpanded ? \' opened\' : \'\' )" ';
			$input .= ' aria-expanded="false" ';
			$input .= ' [aria-expanded]="owpAmpMenuExpanded ? \'true\' : \'false\'" ';

			return $input;
		}

		/**
		 * Add AMP attributes to the fullscreen menu wrapper.
		 *
		 * @param string $input the data attrs already existing in nav toggle.
		 * @return string
		 */
		public function oceanwp_fullscreen_menu_wrapper( $input ) {
			$input .= ' [class]="\'clr\' + ( owpAmpMenuExpanded ? \' opened\' : \'\' )" ';
			$input .= ' aria-expanded="false" ';
			$input .= ' [aria-expanded]="owpAmpMenuExpanded ? \'true\' : \'false\'" ';

			return $input;
		}

		/**
		 * Add AMP attributes to the fullscreen menu close wrapper.
		 *
		 * @param string $input the data attrs already existing in nav toggle.
		 * @return string
		 */
		public function oceanwp_fullscreen_menu_close( $input ) {
			$input .= ' on="tap:AMP.setState( { owpAmpMenuExpanded: ! owpAmpMenuExpanded } ),oceanwp-body.toggleClass(class=clr)" ';
			$input .= ' [class]="\'close\' + ( owpAmpMenuExpanded ? \' false\' : \'\' )" ';

			return $input;
		}


		/**
		 * Add AMP attributes to the Vertical header toggle.
		 *
		 * @param string $input the data attrs already existing in nav toggle.
		 * @return string
		 */
		public function oceanwp_attrs_vertical_header_toggle( $input ) {
			$input .= ' on="tap:AMP.setState( { owpAmpVhMenuExpanded: ! owpAmpVhMenuExpanded } ),oceanwp-body.toggleClass(class=amp-vertical-header)" ';
			$input .= ' [class]="\'hamburger hamburger--spin\' + ( owpAmpVhMenuExpanded ? \' is-active\' : \'\' )" ';
			$input .= ' aria-expanded="false" ';
			$input .= ' [aria-expanded]="owpAmpVhMenuExpanded ? \'true\' : \'false\'" ';

			return $input;
		}

		/**
		 * Add amp states to the dom.
		 */
		public function render_amp_states() {
			echo '<amp-state id="owpAmpMenuExpanded">';
			echo '<script type="application/json">false</script>';
			echo '</amp-state>';

		}


		/**
		 * Set AMP State for eeach sub menu toggle.
		 *
		 * @param String  $item_output HTML markup for the menu item.
		 * @param  WP_Post $item Post object for the navigation menu.
		 *
		 * @return String HTML MArkup for the menu including the AML State.
		 */
		public function toggle_submenu_icon( $item_output, $item ) {
			$item_output .= '<amp-state id="owpNavMenuItemExpanded' . esc_attr( $item->ID ) . '"><script type="application/json">false</script></amp-state>';

			return $item_output;
		}

		/**
		 * Add AMP attribites to the toggle button.
		 *
		 * @param array  $attr        Attribute to load default.
		 * @param string $context    The context, to build filter name.
		 * @param array  $args       Optional. Custom data to pass to filter.
		 *
		 * @return Array updated HTML attributes.
		 */
		public function menu_toggle_button( $attr, $context, $args ) {
			$attr['[class]'] = '( owpNavMenuItemExpanded' . $args->ID . ' ? \' submenu-toggle submenu-open\' : \'submenu-toggle\')';
			$attr['on']      = 'tap:AMP.setState( { owpNavMenuItemExpanded' . $args->ID . ': ! owpNavMenuItemExpanded' . $args->ID . ' } )';

			return $attr;
		}

		/**
		 * Add submenu toggle icon for AMP version.
		 *
		 * @param string   $item_output Menu item's HTML output.
		 * @param WP_Post  $item        Menu item data object.
		 * @param int      $depth       Depth of menu item.
		 * @param stdClass $args        An object of wp_nav_menu() arguments.
		 *
		 * @return String Menu item's starting markup.
		 */
		public function mobile_submenu_icon( $item_output, $item, $depth, $args ) {

			if ( true === is_object( $args ) ) {
				if ( isset( $args->theme_location ) &&
				( 'main_menu' === $args->theme_location ||
				'mobile_menu' === $args->theme_location )
				) {
					if ( isset( $item->classes ) && in_array( 'menu-item-has-children', $item->classes, true ) ) {
						$item_output = $this->menu_arrow_button_markup( $item_output, $item );
					}
				}
			} else {
				if ( isset( $item->post_parent ) && 0 === $item->post_parent ) {
					$item_output = $this->menu_arrow_button_markup( $item_output, $item );
				}
			}

			return $item_output;

		}

		/**
		 * Submenu item's toggle icon HTML markup
		 *
		 * @param string  $item_output Menu item's HTML output.
		 * @param WP_Post $item        Menu item data object.
		 *
		 * @return string Submenu toggle icon.
		 */
		public function menu_arrow_button_markup( $item_output, $item ) {
			$item_output  = apply_filters( 'oceanwp_toggle_submenu_icon', $item_output, $item );
			$item_output .= '<button ' . owp_attr(
				'submenu-toggle',
				array(
					'aria-expanded' => 'false',
				),
				$item
			) . '><span class="screen-reader-text">' . __( 'Menu Toggle', 'oceanwp' ) . '</span></button>';

			return $item_output;

		}

		/**
		 * Add AMP attributes to the nav search item.
		 *
		 * @param string $input the data attrs already existing in search toggle.
		 * @return string
		 */
		public function oceanwp_nav_item_search_bar( $input ) {

			$input .= ' on="tap:AMP.setState( { owpAmpSearchExpanded: ! owpAmpSearchExpanded } )" ';
			$input .= ' [class]="( owpAmpSearchExpanded ? \'search-toggle-li active\' : \'search-toggle-li\' )" ';
			$input .= ' aria-expanded="false" [aria-expanded]="owpAmpSearchExpanded ? \'true\' : \'false\'" ';

			return $input;

		}

		/**
		 * Add AMP attributes to the search bar wrapper.
		 *
		 * @param string $input the data attrs already existing in search toggle.
		 * @return string
		 */
		public function oceanwp_menu_search_bar( $input ) {

			$input .= ' on="tap:AMP.setState( { owpAmpSearchExpanded: ! owpAmpSearchExpanded } )" ';
			$input .= ' [class]="\'header-searchform-wrap clr\' + ( owpAmpSearchExpanded ? \' show\' : \'\' )" ';
			$input .= ' aria-expanded="false" ';
			$input .= ' [aria-expanded]="owpAmpSearchExpanded ? \'true\' : \'false\'" ';

			return $input;

		}

		/**
		 * Add AMP attributes to the overlay search bar wrapper.
		 *
		 * @param string $input the data attrs already existing in search toggle.
		 * @return string
		 */
		public function oceanwp_menu_overlay_search_bar( $input ) {

			$input .= ' on="tap:AMP.setState( { owpAmpSearchExpanded: ! owpAmpSearchExpanded } )" ';
			$input .= ' [class]="\'header-searchform-wrap clr\' + ( owpAmpSearchExpanded ? \' active\' : \'\' )" ';
			$input .= ' aria-expanded="false" ';
			$input .= ' [aria-expanded]="owpAmpSearchExpanded ? \'true\' : \'false\'" ';

			return $input;

		}

		/**
		 * Add AMP attributes to the oceanwp nav wrapper.
		 *
		 * @param string $input the data attrs already existing in search toggle.
		 * @return string
		 */
		public function oceanwp_attrs_nav_wrapper( $input ) {

			if ( 'header_replace' !== get_theme_mod( 'ocean_menu_search_style', 'drop_down' ) ) {
				return;
			}

			$inner_classes = oceanwp_header_menu_classes( 'inner' );

			$input .= ' [class]="\'' . $inner_classes . '\' + ( owpAmpSearchExpanded ? \' hide\' : \'\' )" ';
			$input .= ' aria-expanded="false" ';
			$input .= ' [aria-expanded]="owpAmpSearchExpanded ? \'true\' : \'false\'" ';

			return $input;

		}


		/**
		 * Woocommerce mini cart amp style
		 *
		 * @param obj $style Return mini cart style.
		 */
		public function oceanwp_amp_mini_cart_style( $style ) {
			$style = 'custom_link';
			return $style;
		}

	}

}
return new OceanWP_AMP();
