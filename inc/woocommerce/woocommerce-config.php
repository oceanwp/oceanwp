<?php
/**
 * Perform all main WooCommerce configurations for this theme
 *
 * @package OceanWP WordPress theme
 */

// Start and run class
if ( ! class_exists( 'OceanWP_WooCommerce_Config' ) ) {

	class OceanWP_WooCommerce_Config {

		/**
		 * Main Class Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {

			// Include helper functions
			require_once OCEANWP_INC_DIR . 'woocommerce/woocommerce-helpers.php';

			// Move default WooCommerce customizer sections to the theme section
			add_action( 'customize_register', array( $this, 'woo_section' ), 11 );

			// Register Woo sidebar
			add_filter( 'widgets_init', array( $this, 'register_woo_sidebar' ) );

			if ( ! is_admin() ) {

				// Remove default wrappers and add new ones
				remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
				remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
				add_action( 'woocommerce_before_main_content', array( $this, 'content_wrapper' ), 10 );
				add_action( 'woocommerce_after_main_content', array( $this, 'content_wrapper_end' ), 10 );

				// Display correct sidebar for products
				remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
				add_filter( 'ocean_get_sidebar', array( $this, 'display_woo_sidebar' ) );

				// Set correct post layouts
				add_filter( 'ocean_post_layout_class', array( $this, 'layouts' ) );

				// Set correct both sidebars layout style
				add_filter( 'ocean_both_sidebars_style', array( $this, 'bs_class' ) );

				// Set correct mobile sidebar order
				add_filter( 'ocean_sidebar_order', array( $this, 'sidebar_order' ) );

			}

			// Woo mini cart style
			add_action( 'wp_enqueue_scripts', array( $this, 'mini_cart_style' ) );

			// If the custom WooCommerce features are not disabled
			if ( 'yes' != get_theme_mod( 'ocean_woo_remove_custom_features', 'no' ) ) {

				// These filters/actions must run on init
				add_action( 'init', array( $this, 'init' ) );

				// Pagination.
				add_action( 'wp', array( $this, 'shop_pagination' ), 999 );

				// Body classes
				add_filter( 'body_class', array( $this, 'body_class' ) );

				// Define accents
				add_filter( 'ocean_primary_texts', array( $this, 'primary_texts' ) );
				add_filter( 'ocean_primary_svg_icons', array( $this, 'primary_svg_icons' ) );
				add_filter( 'ocean_primary_borders', array( $this, 'primary_borders' ) );
				add_filter( 'ocean_primary_backgrounds', array( $this, 'primary_backgrounds' ) );
				add_filter( 'ocean_hover_primary_backgrounds', array( $this, 'hover_primary_backgrounds' ) );

				/*
				-------------------------------------------------------------------------------*/
				/*
				 -  Front-End only actions/filters
				/*-------------------------------------------------------------------------------*/
				if ( ! is_admin() ) {

					// Disable WooCommerce main page title
					add_filter( 'woocommerce_show_page_title', '__return_false' );

					// Disable WooCommerce css
					add_filter( 'woocommerce_enqueue_styles', '__return_false' );

					// Remove the category description under the page title on taxonomy
					add_filter( 'ocean_post_subheading', array( $this, 'post_subheading' ) );

					// Show/hide next/prev on products
					add_filter( 'ocean_has_next_prev', array( $this, 'next_prev' ) );

					// Border colors
					add_filter( 'ocean_border_color_elements', array( $this, 'border_color_elements' ) );

				}

				// Main Woo Actions
				add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_scripts' ), 99 );
				add_filter( 'ocean_localize_array', array( $this, 'localize_array' ) );
				if ( get_theme_mod( 'ocean_woo_shop_result_count', true )
					|| get_theme_mod( 'ocean_woo_shop_sort', true )
					|| get_theme_mod( 'ocean_woo_grid_list', true )
					|| true == get_theme_mod( 'ocean_woo_off_canvas_filter', false ) ) {
					add_action( 'woocommerce_before_shop_loop', array( $this, 'add_shop_loop_div' ) );
				}
				if ( true == get_theme_mod( 'ocean_woo_off_canvas_filter', false ) ) {
					add_filter( 'widgets_init', array( $this, 'register_off_canvas_sidebar' ) );
					add_action( 'wp_footer', array( $this, 'get_off_canvas_sidebar' ) );
					add_action( 'woocommerce_before_shop_loop', array( $this, 'off_canvas_filter_button' ), 10 );
				}
				if ( get_theme_mod( 'ocean_woo_grid_list', true ) ) {
					add_action( 'woocommerce_before_shop_loop', array( $this, 'grid_list_buttons' ), 10 );
				}
				if ( get_theme_mod( 'ocean_woo_shop_result_count', true )
					|| get_theme_mod( 'ocean_woo_shop_sort', true )
					|| get_theme_mod( 'ocean_woo_grid_list', true )
					|| true == get_theme_mod( 'ocean_woo_off_canvas_filter', false ) ) {
					add_action( 'woocommerce_before_shop_loop', array( $this, 'close_shop_loop_div' ), 40 );
				}
				add_action( 'woocommerce_before_shop_loop_item', array( $this, 'add_shop_loop_item_inner_div' ) );
				add_action( 'woocommerce_after_shop_loop_item', array( $this, 'archive_product_content' ), 10 );
				add_action( 'woocommerce_after_shop_loop_item', array( $this, 'close_shop_loop_item_inner_div' ) );
				add_action( 'woocommerce_before_subcategory_title', array( $this, 'add_container_wrap_category' ), 8 );
				add_action( 'woocommerce_before_subcategory_title', array( $this, 'add_div_before_category_thumbnail' ), 9 );
				add_action( 'woocommerce_before_subcategory_title', array( $this, 'close_div_after_category_thumbnail' ), 11 );
				add_action( 'woocommerce_shop_loop_subcategory_title', array( $this, 'add_div_before_category_title' ), 9 );
				add_action( 'woocommerce_shop_loop_subcategory_title', array( $this, 'add_category_description' ), 11 );
				add_action( 'woocommerce_shop_loop_subcategory_title', array( $this, 'close_div_after_category_title' ), 12 );
				add_action( 'woocommerce_shop_loop_subcategory_title', array( $this, 'close_container_wrap_category' ), 13 );

				add_action( 'woocommerce_after_single_product_summary', array( $this, 'clear_summary_floats' ), 1 );
				add_action( 'woocommerce_before_account_navigation', array( $this, 'oceanwp_before_account_navigation' ) );
				add_action( 'woocommerce_after_account_navigation', array( $this, 'oceanwp_after_account_navigation' ) );
				if ( get_option( 'woocommerce_enable_myaccount_registration' ) !== 'yes' ) {
					add_action( 'woocommerce_before_customer_login_form', array( $this, 'oceanwp_login_wrap_before' ) );
					add_action( 'woocommerce_after_customer_login_form', array( $this, 'oceanwp_login_wrap_after' ) );
				}
				if ( get_theme_mod( 'ocean_woo_category_image', 'no' ) == 'yes' ) {
					add_action( 'woocommerce_archive_description', array( $this, 'woocommerce_category_image' ), 2 );
				}

				// Quick view
				if ( get_theme_mod( 'ocean_woo_quick_view', true ) ) {
					if ( 'hover' != get_theme_mod( 'ocean_woo_products_style', 'default' ) ) {
						if ( 'gallery-slider' == get_theme_mod( 'ocean_woo_product_entry_style', 'image-swap' ) ) {
							add_action( 'ocean_after_product_entry_slider', array( $this, 'quick_view_button' ) );
						} else {
							add_action( 'ocean_after_product_entry_image', array( $this, 'quick_view_button' ) );
						}
					}
					add_action( 'wp_ajax_oceanwp_product_quick_view', array( $this, 'product_quick_view_ajax' ) );
					add_action( 'wp_ajax_nopriv_oceanwp_product_quick_view', array( $this, 'product_quick_view_ajax' ) );
					add_action( 'wp_footer', array( $this, 'quick_view_template' ) );
					add_action( 'ocean_woo_quick_view_product_image', 'woocommerce_show_product_sale_flash', 10 );
					add_action( 'ocean_woo_quick_view_product_image', array( $this, 'quick_view_image' ), 20 );
					add_action( 'ocean_woo_quick_view_product_content', array( $this, 'single_product_content' ), 10 );
				}

				// Ajax single product add to cart
				add_action( 'wp_ajax_oceanwp_add_cart_single_product', array( $this, 'add_cart_single_product_ajax' ) );
				add_action( 'wp_ajax_nopriv_oceanwp_add_cart_single_product', array( $this, 'add_cart_single_product_ajax' ) );

				// Add cart overlay
				if ( 'yes' == get_theme_mod( 'ocean_woo_display_cart_product_added', 'no' ) ) {
					add_action( 'ocean_after_footer', array( $this, 'cart_overlay' ), 99 );
				}

				// Add mobile menu mini cart
				if ( get_theme_mod( 'ocean_woo_add_mobile_mini_cart', true ) ) {
					add_action( 'wp_footer', array( $this, 'get_mini_cart_sidebar' ) );
				}

				// Remove default elements
				remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
				add_action( 'woocommerce_before_template_part', array( $this, 'before_template_part' ), 10, 4 );
				self::remove_elements();

				// Remove the single product summary content to add the sortable control
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
				add_action( 'woocommerce_single_product_summary', array( $this, 'single_product_content' ), 10 );

				// Add product navigation
				if ( true == get_theme_mod( 'ocean_woocommerce_display_navigation', true ) ) {
					add_action( 'woocommerce_before_single_product_summary', array( $this, 'product_next_prev_nav' ), 10 );
				}

				// Add floating bar
				if ( 'on' == get_theme_mod( 'ocean_woo_display_floating_bar', 'on' ) ) {
					add_action( 'ocean_before_main', array( $this, 'floating_bar' ) );

					// Ajax add to cart
					add_action( 'wp_ajax_oceanwp_add_cart_floating_bar', array( $this, 'add_cart_floating_bar_ajax' ) );
					add_action( 'wp_ajax_nopriv_oceanwp_add_cart_floating_bar', array( $this, 'add_cart_floating_bar_ajax' ) );
				}

				// Main Woo Filters
				add_filter( 'wp_nav_menu_items', array( $this, 'menu_wishlist_icon' ), 10, 2 );
				add_filter( 'wp_nav_menu_items', array( $this, 'menu_cart_icon' ), 10, 2 );
				add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'menu_cart_icon_fragments' ) );
				add_filter( 'woocommerce_general_settings', array( $this, 'remove_general_settings' ) );
				add_filter( 'woocommerce_product_settings', array( $this, 'remove_product_settings' ) );
				add_filter( 'loop_shop_per_page', array( $this, 'loop_shop_per_page' ), 20 );
				add_filter( 'loop_shop_columns', array( $this, 'loop_shop_columns' ) );
				add_filter( 'woocommerce_output_related_products_args', array( $this, 'related_product_args' ) );
				add_filter( 'woocommerce_pagination_args', array( $this, 'pagination_args' ) );
				add_filter( 'woocommerce_continue_shopping_redirect', array( $this, 'continue_shopping_redirect' ) );
				add_filter( 'post_class', array( $this, 'add_product_classes' ), 40, 3 );
				add_filter( 'post_class', array( $this, 'add_product_class_for_elementor' ) );
				add_filter( 'product_cat_class', array( $this, 'product_cat_class' ) );

				// Sale badge content
				if ( 'percent' == get_theme_mod( 'ocean_woo_sale_badge_content', 'sale' ) ) {
					add_filter( 'woocommerce_sale_flash', array( $this, 'sale_flash' ), 10, 3 );
				}

				// Add links Login/Register on the my account page
				add_action( 'woocommerce_before_customer_login_form', array( $this, 'login_register_links' ) );

				// Distraction free cart/checkout
				add_filter( 'ocean_display_top_bar', array( $this, 'distraction_free' ), 11 );
				add_filter( 'ocean_display_navigation', array( $this, 'distraction_free' ), 11 );
				add_filter( 'osh_enable_sticky_header', array( $this, 'distraction_free' ), 11 );
				add_filter( 'osp_display_side_panel', array( $this, 'distraction_free' ), 11 );
				add_filter( 'ocean_display_page_header', array( $this, 'distraction_free' ), 11 );
				add_filter( 'ocean_display_footer_widgets', array( $this, 'distraction_free' ), 11 );
				add_filter( 'ocean_display_scroll_up_button', array( $this, 'distraction_free' ), 11 );
				add_filter( 'osh_header_sticky_logo', array( $this, 'distraction_free' ), 11 );
				add_filter( 'ofc_display_footer_callout', array( $this, 'distraction_free' ), 11 );

				// Multi-step checkout
				if ( true == get_theme_mod( 'ocean_woo_multi_step_checkout', false ) ) {

					// Checkout validation
					add_action( 'wp_ajax_oceanwp_validate_checkout', array( $this, 'validate_checkout_callback' ) );
					add_action( 'wp_ajax_nopriv_oceanwp_validate_checkout', array( $this, 'validate_checkout_callback' ) );

					// Add checkout timeline template
					add_action( 'woocommerce_before_checkout_form', array( $this, 'checkout_timeline' ), 10 );

					// Change checkout template
					add_filter( 'woocommerce_locate_template', array( $this, 'multistep_checkout' ), 10, 3 );

					// Checkout hack
					remove_action( 'woocommerce_checkout_order_review', 'woocommerce_order_review', 10 );
					remove_action( 'woocommerce_checkout_order_review', 'woocommerce_checkout_payment', 20 );
					remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_login_form', 10 );
					remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10 );
					add_action( 'ocean_woocommerce_checkout_order_review', 'woocommerce_order_review', 10 );
					add_action( 'ocean_woocommerce_checkout_payment', 'woocommerce_checkout_payment', 20 );
					add_action( 'ocean_checkout_login_form', array( $this, 'checkout_login_form' ), 10 );
					add_action( 'ocean_woocommerce_checkout_coupon', 'woocommerce_checkout_coupon_form', 10 );

					// Prevent empty shipping tab
					add_filter( 'woocommerce_enable_order_notes_field', '__return_true' );

					// Support to WooCommerce secure submit gateway
					if ( class_exists( 'WC_Gateway_SecureSubmit' ) ) {
						$secure_submit_options = get_option( 'woocommerce_securesubmit_settings' );
						if ( ! empty( $secure_submit_options['use_iframes'] ) && 'yes' == $secure_submit_options['use_iframes'] ) {
							add_filter( 'option_woocommerce_securesubmit_settings', array( $this, 'woocommerce_securesubmit_support' ), 10, 2 );
						}
					}
				}

				// Add new typography settings
				add_filter( 'ocean_typography_settings', array( $this, 'typography_settings' ) );

				// WooCommerce Match Box extension single product layout support.
				add_action( 'woocommerce_match_box_single_product_layout', array( $this, 'remove_wc_match_box_single_product_summary' ), 10 );

			}
		} // End __construct

		/*
		-------------------------------------------------------------------------------*/
		/*
		 -  Start Class Functions
		/*-------------------------------------------------------------------------------*/

		/**
		 * Move default WooCommerce customizer sections to the theme section.
		 *
		 * @since 1.5.0
		 */
		public static function woo_section( $wp_customize ) {
			$wp_customize->get_section( 'woocommerce_checkout' )->panel                                      = 'ocean_woocommerce_panel';
			$wp_customize->get_section( 'woocommerce_store_notice' )->panel                                  = 'ocean_woocommerce_panel';
			$wp_customize->get_section( 'woocommerce_product_images' )->panel                                = 'ocean_woocommerce_panel';
			$wp_customize->get_section( 'woocommerce_product_images' )->priority                             = 999;
			$wp_customize->get_control( 'woocommerce_shop_page_display' )->section                           = 'ocean_woocommerce_archives';
			$wp_customize->get_control( 'woocommerce_category_archive_display' )->section                    = 'ocean_woocommerce_archives';
			$wp_customize->get_control( 'woocommerce_default_catalog_orderby' )->section                     = 'ocean_woocommerce_archives';
			$wp_customize->get_control( 'woocommerce_checkout_company_field' )->section                      = 'ocean_woocommerce_checkout';
			$wp_customize->get_control( 'woocommerce_checkout_address_2_field' )->section                    = 'ocean_woocommerce_checkout';
			$wp_customize->get_control( 'woocommerce_checkout_phone_field' )->section                        = 'ocean_woocommerce_checkout';
			$wp_customize->get_control( 'woocommerce_checkout_highlight_required_fields' )->section          = 'ocean_woocommerce_checkout';
			$wp_customize->get_control( 'wp_page_for_privacy_policy' )->section                              = 'ocean_woocommerce_checkout';
			$wp_customize->get_control( 'woocommerce_terms_page_id' )->section                               = 'ocean_woocommerce_checkout';
			$wp_customize->get_control( 'woocommerce_checkout_privacy_policy_text' )->section                = 'ocean_woocommerce_checkout';
			$wp_customize->get_control( 'woocommerce_checkout_terms_and_conditions_checkbox_text' )->section = 'ocean_woocommerce_checkout';
		}

		/**
		 * Content wrapper.
		 *
		 * @since 1.4.7
		 */
		public static function content_wrapper() {
			get_template_part( 'woocommerce/wc-content-wrapper' );
		}

		/**
		 * Content wrapper end.
		 *
		 * @since 1.4.7
		 */
		public static function content_wrapper_end() {
			get_template_part( 'woocommerce/wc-content-wrapper-end' );
		}

		/**
		 * Register new WooCommerce sidebar.
		 *
		 * @since 1.0.0
		 */
		public static function register_woo_sidebar() {

			// Return if custom sidebar disabled
			if ( ! get_theme_mod( 'ocean_woo_custom_sidebar', true ) ) {
				return;
			}

			// Register new woo_sidebar widget area
			register_sidebar(
				array(
					'name'          => esc_html__( 'WooCommerce Sidebar', 'oceanwp' ),
					'id'            => 'woo_sidebar',
					'before_widget' => '<div id="%1$s" class="sidebar-box %2$s clr">',
					'after_widget'  => '</div>',
					'before_title'  => '<h4 class="widget-title">',
					'after_title'   => '</h4>',
				)
			);

		}

		/**
		 * Display WooCommerce sidebar.
		 *
		 * @since 1.0.0
		 */
		public static function display_woo_sidebar( $sidebar ) {

			// Alter sidebar display to show woo_sidebar where needed
			if ( get_theme_mod( 'ocean_woo_custom_sidebar', true )
				&& is_active_sidebar( 'woo_sidebar' )
				&& is_woocommerce() ) {
				$sidebar = 'woo_sidebar';
			}

			// Return correct sidebar
			return $sidebar;

		}

		/**
		 * Tweaks the post layouts for WooCommerce archives and single product posts.
		 *
		 * @since 1.0.0
		 */
		public static function layouts( $class ) {
			if ( oceanwp_is_woo_shop()
				|| oceanwp_is_woo_tax() ) {
				$class = get_theme_mod( 'ocean_woo_shop_layout', 'left-sidebar' );
			} elseif ( oceanwp_is_woo_single() ) {
				$class = get_theme_mod( 'ocean_woo_product_layout', 'left-sidebar' );
			}
			return $class;
		}

		/**
		 * Set correct both sidebars layout style.
		 *
		 * @since 1.4.0
		 */
		public static function bs_class( $class ) {
			if ( oceanwp_is_woo_shop()
				|| oceanwp_is_woo_tax() ) {
				$class = get_theme_mod( 'ocean_woo_shop_both_sidebars_style', 'scs-style' );
			} elseif ( oceanwp_is_woo_single() ) {
				$class = get_theme_mod( 'ocean_woo_product_both_sidebars_style', 'scs-style' );
			}
			return $class;
		}

		/**
		 * Set correct mobile sidebar order.
		 *
		 * @since 1.6
		 */
		public static function sidebar_order( $order ) {
			if ( oceanwp_is_woo_shop()
				|| oceanwp_is_woo_tax() ) {
				$order = get_theme_mod( 'ocean_woo_shop_sidebar_order', 'content-sidebar' );
			} elseif ( oceanwp_is_woo_single() ) {
				$order = get_theme_mod( 'ocean_woo_product_sidebar_order', 'content-sidebar' );
			}
			return $order;
		}

		/**
		 * Mini cart style.
		 *
		 * @since 1.0.0
		 */
		public static function mini_cart_style() {

			// Register WooCommerce styles
			wp_enqueue_style( 'oceanwp-woo-mini-cart', OCEANWP_CSS_DIR_URI . 'woo/woo-mini-cart.min.css' );

			// If rtl
			if ( is_RTL() ) {
				wp_enqueue_style( 'oceanwp-woo-mini-cart-rtl', OCEANWP_CSS_DIR_URI . 'woo/woo-mini-cart-rtl.css' );
			}

		}

		/**
		 * Runs on Init.
		 * You can't remove certain actions in the constructor because it's too early.
		 *
		 * @since 1.0.0
		 */
		public function init() {

			// Remove WooCommerce breadcrumbs
			remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );

			// Alter upsells display
			remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
			if ( '0' != get_theme_mod( 'ocean_woocommerce_upsells_count', '3' ) ) {
				add_action( 'woocommerce_after_single_product_summary', array( $this, 'upsell_display' ), 15 );
			}

			// Alter cross-sells display
			remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );
			if ( '0' != get_theme_mod( 'ocean_woocommerce_cross_sells_count', '2' ) ) {
				add_action( 'woocommerce_cart_collaterals', array( $this, 'cross_sell_display' ) );
			}

			// Add product thumbnail
			if ( 'hover' != get_theme_mod( 'ocean_woo_products_style', 'default' ) ) {
				add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'loop_product_thumbnail' ), 10 );
			}

			// Remove related products if is set to no
			if ( 'on' != get_theme_mod( 'ocean_woocommerce_display_related_items', 'on' ) ) {
				remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
			}

			// Remove orderby if disabled
			if ( ! get_theme_mod( 'ocean_woo_shop_sort', true ) ) {
				remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
			}

			// Add result count if not disabled
			if ( get_theme_mod( 'ocean_woo_shop_result_count', true ) ) {
				add_action( 'woocommerce_before_shop_loop', array( $this, 'result_count' ), 31 );
			}

			if ( defined( 'ELEMENTOR_WOOSTORE__FILE__' ) ) {
				remove_action( 'woocommerce_after_shop_loop_item_title', 'woostore_output_product_excerpt', 35 );
				add_action( 'woocommerce_after_shop_loop_item', 'woostore_output_product_excerpt', 21 );
			}

			if ( ! function_exists( 'yith_wcbm_shop_badge_container_start' )
				&& ! function_exists( 'yith_wcbm_shop_badge_container_end' ) ) {
				add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'yith_wcbm_shop_badge_container_start' ), 9 );
				add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'yith_wcbm_shop_badge_container_end' ), 20 );
			}

			if ( class_exists( 'WooCommerce_Germanized' ) ) {

				// Product entries.
				remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_gzd_template_single_delivery_time_info', 8 );
				remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_gzd_template_single_price_unit', 11 );
				remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_gzd_template_single_product_units', 9 );
				remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_gzd_template_single_shipping_costs_info', 7 );
				remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_gzd_template_single_tax_info', 6 );
				add_action( 'ocean_after_archive_product_inner', array( $this, 'woocommerce_germanized' ) );

				// Single product.
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_gzd_template_single_price_unit', 11 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_gzd_template_single_legal_info', 12 );
				add_action( 'ocean_after_single_product_price', array( $this, 'woocommerce_germanized_single' ) );

				// Single product product units and delivery time info.
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_gzd_template_single_delivery_time_info', 27 );
				remove_action( 'woocommerce_product_meta_start', 'woocommerce_gzd_template_single_product_units', 5 );
				add_action( 'ocean_after_single_product_excerpt', array( $this, 'woocommerce_germanized_single_meta' ) );
			}

			if ( class_exists( 'YITH_WCWL' ) ) {

				add_action( 'wp_enqueue_scripts', 'ocean_dequeue_yith_wl_scripts' );
				add_filter( 'yith_wcwl_button_label', 'owp_yith_wishlist_button_label' );
				add_filter( 'yith_wcwl_browse_wishlist_label', 'owp_yith_wishlist_browse_button_label' );

			}

			if ( class_exists( 'SitePress' ) ) {
				add_filter( 'wcml_multi_currency_ajax_actions', array( $this, 'add_action_to_multi_currency_ajax' ), 10, 1 );
			}
		}

		/**
		 * Add action to multi currency ajax.
		 *
		 * @param array $ajax_actions The ajax actions.
		 * @since 3.0.0
		 */
		public function add_action_to_multi_currency_ajax( $ajax_actions ) {
			$ajax_actions[] = 'oceanwp_product_quick_view';
			return $ajax_actions;
		}

		/**
		 * Remove elements.
		 *
		 * @since 1.0.0
		 */
		public function remove_elements() {
			remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
			remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
			remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );
			remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
			remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
			remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
			remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
			remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );
		}

		/**
		 * Fix the issue in the Elementor Pro editor.
		 *
		 * @since 1.5.19
		 */
		public function before_template_part( $template_name, $template_path, $located, $args ) {
			if ( class_exists( 'Elementor\Plugin' )
				&& \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
				self::remove_elements();
			}
		}

		/**
		 * Pagination.
		 *
		 * @since 1.4.16
		 */
		public function shop_pagination() {
			if ( 'infinite_scroll' == get_theme_mod( 'ocean_woo_pagination_style', 'standard' ) && is_woocommerce() ) {
				remove_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 10 );
				add_action( 'woocommerce_after_shop_loop', array( $this, 'infinite_pagination' ), 10 );
			}
		}

		/**
		 * Infinite scroll pagination.
		 *
		 * @since 1.4.16
		 */
		public static function infinite_pagination() {
			global $wp_query;

			if ( $wp_query->max_num_pages <= 1 ) {
				return;
			}

			// Last text
			$last = get_theme_mod( 'ocean_woo_infinite_scroll_last_text' );
			$last = oceanwp_tm_translation( 'ocean_woo_infinite_scroll_last_text', $last );
			$last = $last ? $last : esc_html__( 'End of content', 'oceanwp' );

			// Error text
			$error = get_theme_mod( 'ocean_woo_infinite_scroll_error_text' );
			$error = oceanwp_tm_translation( 'ocean_woo_infinite_scroll_error_text', $error );
			$error = $error ? $error : esc_html__( 'No more pages to load', 'oceanwp' );

			// Output pagination HTML ?>
			<div class="scroller-status">
				<div class="loader-ellips infinite-scroll-request">
					<span class="loader-ellips__dot"></span>
					<span class="loader-ellips__dot"></span>
					<span class="loader-ellips__dot"></span>
					<span class="loader-ellips__dot"></span>
				</div>
				<p class="scroller-status__message infinite-scroll-last"><?php echo esc_html( $last ); ?></p>
				<p class="scroller-status__message infinite-scroll-error"><?php echo esc_html( $error ); ?></p>
			</div>
			<div class="infinite-scroll-nav clr">
				<div class="alignleft newer-posts"><?php echo get_previous_posts_link( '&larr; ' . esc_html__( 'Newer Posts', 'oceanwp' ) ); ?></div>
				<div class="alignright older-posts"><?php echo get_next_posts_link( esc_html__( 'Older Posts', 'oceanwp' ) . ' &rarr;', $wp_query->max_num_pages ); ?></div>
			</div>
			<?php
		}

		/**
		 * Helper method to get the version of the currently installed WooCommerce.
		 *
		 * @since 1.1.7
		 * @return string woocommerce version number or null.
		 */
		public static function get_wc_version() {
			return defined( 'WC_VERSION' ) && WC_VERSION ? WC_VERSION : null;
		}

		/**
		 * Remove general settings from Woo Admin panel.
		 *
		 * @since 1.0.0
		 */
		public static function remove_general_settings( $settings ) {
			$remove = array( 'woocommerce_enable_lightbox' );
			foreach ( $settings as $key => $val ) {
				if ( isset( $val['id'] ) && in_array( $val['id'], $remove ) ) {
					unset( $settings[ $key ] );
				}
			}
			return $settings;
		}

		/**
		 * Remove product settings from Woo Admin panel.
		 *
		 * @since 1.0.0
		 */
		public static function remove_product_settings( $settings ) {
			$remove = array(
				'woocommerce_enable_lightbox',
			);
			foreach ( $settings as $key => $val ) {
				if ( isset( $val['id'] ) && in_array( $val['id'], $remove ) ) {
					unset( $settings[ $key ] );
				}
			}
			return $settings;
		}

		/**
		 * Body classes
		 *
		 * @since 1.5.0
		 */
		public static function body_class( $classes ) {

			// If dropdown categories widget style
			if ( 'dropdown' == get_theme_mod( 'ocean_woo_cat_widget_style', 'default' ) ) {
				$classes[] = 'woo-dropdown-cat';
			}

			// Distraction free class
			if ( ( is_cart()
					&& true == get_theme_mod( 'ocean_woo_distraction_free_cart', false ) )
				|| ( is_checkout()
					&& true == get_theme_mod( 'ocean_woo_distraction_free_checkout', false ) ) ) {
				$classes[] = 'distraction-free';
			}

			// My Account page style
			$style = get_theme_mod( 'ocean_woo_account_page_style', 'original' );
			if ( 'side' == $style ) {
				$classes[] = 'account-side-style';
			} else {
				$classes[] = 'account-original-style';
			}

			// Return
			return $classes;

		}

		/**
		 * Add Custom WooCommerce scripts.
		 *
		 * @since 1.0.0
		 */
		public static function add_custom_scripts() {

			// Register WooCommerce styles
			wp_enqueue_style( 'oceanwp-woocommerce', OCEANWP_CSS_DIR_URI . 'woo/woocommerce.min.css' );
			wp_enqueue_style( 'oceanwp-woo-star-font', OCEANWP_CSS_DIR_URI . 'woo/woo-star-font.min.css' );

			// If rtl
			if ( is_RTL() ) {
				wp_enqueue_style( 'oceanwp-woocommerce-rtl', OCEANWP_CSS_DIR_URI . 'woo/woocommerce-rtl.css' );
			}

			// If products hover style
			if ( 'hover' == get_theme_mod( 'ocean_woo_products_style', 'default' ) ) {
				wp_enqueue_style( 'oceanwp-woo-hover-style', OCEANWP_CSS_DIR_URI . 'woo/hover-style.min.css' );
				wp_enqueue_script( 'oceanwp-woo-hover-style', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-hover-style.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If dropdown category widget style
			if ( 'dropdown' == get_theme_mod( 'ocean_woo_cat_widget_style', 'default' ) ) {
				wp_enqueue_script( 'oceanwp-woo-cat-widget', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-cat-widget.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If vertical thumbnails style
			if ( 'vertical' == get_theme_mod( 'ocean_woo_product_thumbs_layout', 'horizontal' ) ) {
				wp_enqueue_script( 'oceanwp-woo-thumbnails', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-thumbnails.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If quick view.
			if ( get_theme_mod( 'ocean_woo_quick_view', true ) ) {
				wp_enqueue_script( 'oceanwp-woo-quick-view', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-quick-view.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
				wp_enqueue_style( 'oceanwp-woo-quick-view', OCEANWP_CSS_DIR_URI . 'woo/woo-quick-view.min.css' );
				wp_enqueue_script( 'wc-add-to-cart-variation' );
				wp_enqueue_script( 'flexslider' );
			}

			// If whislist.
			if ( class_exists( 'TInvWL_Wishlist' ) || class_exists( 'YITH_WCWL' ) ) {
				wp_enqueue_style( 'oceanwp-wishlist', OCEANWP_CSS_DIR_URI . 'woo/wishlist.min.css' );
			}

			// If single product ajax add to cart
			if ( true == get_theme_mod( 'ocean_woo_product_ajax_add_to_cart', false )
				&& oceanwp_is_woo_single() ) {
				wp_enqueue_script( 'oceanwp-woo-ajax-addtocart', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-ajax-add-to-cart.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If floating bar
			if ( 'on' == get_theme_mod( 'ocean_woo_display_floating_bar', 'on' )
				&& oceanwp_is_woo_single() ) {
				wp_enqueue_style( 'oceanwp-woo-floating-bar', OCEANWP_CSS_DIR_URI . 'woo/woo-floating-bar.min.css' );
				wp_enqueue_script( 'oceanwp-woo-floating-bar', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-floating-bar.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If display cart when product added
			if ( 'yes' == get_theme_mod( 'ocean_woo_display_cart_product_added', 'no' ) ) {
				wp_enqueue_script( 'oceanwp-woo-display-cart', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-display-cart.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If off canvas filter
			if ( true == get_theme_mod( 'ocean_woo_off_canvas_filter', false )
				&& ( oceanwp_is_woo_shop()
					|| oceanwp_is_woo_tax() ) ) {
				wp_enqueue_script( 'oceanwp-woo-off-canvas', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-off-canvas.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If mobile menu mini cart
			if ( get_theme_mod( 'ocean_woo_add_mobile_mini_cart', true ) ) {
				wp_enqueue_script( 'oceanwp-woo-mini-cart', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-mini-cart.min.js', array( 'oceanwp-main' ), OCEANWP_THEME_VERSION, true );
			}

			// If multi step checkout
			if ( true == get_theme_mod( 'ocean_woo_multi_step_checkout', false )
				&& is_checkout() ) {
				wp_enqueue_style( 'oceanwp-woo-multistep-checkout', OCEANWP_CSS_DIR_URI . 'woo/woo-multistep-checkout.min.css' );

				$woo_deps = array( 'wc-checkout', 'wc-country-select' );

				if ( class_exists( 'WC_Ship_Multiple' ) ) {
					$woo_deps[] = 'wcms-country-select';
				}

				wp_enqueue_script( 'oceanwp-woo-multistep-checkout', OCEANWP_JS_DIR_URI . 'wp-plugins/woocommerce/woo-multi-step-checkout.min.js', $woo_deps, OCEANWP_THEME_VERSION, true );
			}

		}

		/**
		 * Localize array.
		 *
		 * @since 1.5.0
		 */
		public static function localize_array( $array ) {

			// If single product ajax add to cart
			if ( true == get_theme_mod( 'ocean_woo_product_ajax_add_to_cart', false ) ) {
				$array['is_cart']  = is_cart();
				$array['cart_url'] = apply_filters( 'ocean_woocommerce_add_to_cart_redirect', wc_get_cart_url() );
			}

			// If multi step checkout
			if ( true == get_theme_mod( 'ocean_woo_multi_step_checkout', false ) ) {
				$array['ajax_url']               = admin_url( 'admin-ajax.php' );
				$array['login_reminder_enabled'] = 'yes' == get_option( 'woocommerce_enable_checkout_login_reminder', 'yes' ) ? true : false;
				$array['is_logged_in']           = is_user_logged_in();
				$array['no_account_btn']         = esc_html__( 'I don&rsquo;t have an account', 'oceanwp' );
				$array['next']                   = esc_html__( 'Next', 'oceanwp' );
			}

			// If quick view, ajax add to cart or floating bar
			if ( get_theme_mod( 'ocean_woo_quick_view', true )
				|| true == get_theme_mod( 'ocean_woo_product_ajax_add_to_cart', false )
				|| 'on' == get_theme_mod( 'ocean_woo_display_floating_bar', 'on' ) ) {
				$array['ajax_url']                = admin_url( 'admin-ajax.php' );
				$array['cart_url']                = apply_filters( 'woocommerce_add_to_cart_redirect', wc_get_cart_url(), null );
				$array['cart_redirect_after_add'] = get_option( 'woocommerce_cart_redirect_after_add' );
			}

			// Add the View Cart here to avoid the undefined word on the related products
			$array['view_cart'] = esc_html__( 'View cart', 'oceanwp' );

			// Check if the floating bar is enabled for the quantity button
			$array['floating_bar'] = get_theme_mod( 'ocean_woo_display_floating_bar', 'on' );

			// Grouped product button text in the quick view
			$array['grouped_text'] = esc_html__( 'View products', 'oceanwp' );

			$array['multistep_checkout_error'] = __( 'Some required fields are empty. Please fill the required fields to go to the next step.', 'oceanwp' );

			return $array;

		}

		/**
		 * Single Product add to cart ajax request.
		 *
		 * @since 1.5.0
		 */
		public static function add_cart_single_product_ajax() {

			$product_id   = sanitize_text_field( $_POST['product_id'] );
			$variation_id = sanitize_text_field( $_POST['variation_id'] );
			$variation    = $_POST['variation'];
			$quantity     = sanitize_text_field( $_POST['quantity'] );

			if ( $variation_id ) {
				WC()->cart->add_to_cart( $product_id, $quantity, $variation_id, $variation );
			} else {
				WC()->cart->add_to_cart( $product_id, $quantity );
			}
			die();

		}

		/**
		 * Add cart overlay.
		 *
		 * @since 1.5.0
		 */
		public static function cart_overlay() {
			?>
			<div class="owp-cart-overlay"></div>
			<?php
		}

		/**
		 * Get mini cart sidebar.
		 *
		 * @since 1.5.0
		 */
		public static function get_mini_cart_sidebar() {

			// Style
			$cart_style = get_theme_mod( 'ocean_woo_cart_dropdown_style', 'compact' );

			// Define classes
			$classes = array( 'oceanwp-cart-sidebar' );

			// Cart style
			if ( 'compact' != $cart_style ) {
				$classes[] = $cart_style;
			}

			// Turn classes into string
			$classes = implode( ' ', $classes );

			echo '<div id="oceanwp-cart-sidebar-wrap">';
				echo '<div class="' . $classes . '">';
					echo '<a href="#" class="oceanwp-cart-close">×</a>';
					echo '<p class="owp-cart-title">' . esc_html__( 'Cart', 'oceanwp' ) . '</p><div class="divider"></div>';
					echo '<div class="owp-mini-cart">';
						the_widget( 'WC_Widget_Cart', 'title=' );
					echo '</div>';
				echo '</div>';
				echo '<div class="oceanwp-cart-sidebar-overlay"></div>';
			echo '</div>';

		}

		/**
		 * Adds an opening div "oceanwp-toolbar" around top elements.
		 *
		 * @since 1.1.1
		 */
		public static function add_shop_loop_div() {
			echo '<div class="oceanwp-toolbar clr">';
		}

		/**
		 * Register off canvas filter sidebar.
		 *
		 * @since 1.5.0
		 */
		public static function register_off_canvas_sidebar() {

			register_sidebar(
				array(
					'name'          => esc_html__( 'Off-Canvas Filters', 'oceanwp' ),
					'description'   => esc_html__( 'Widgets in this area are used in the off canvas sidebar. To enable the Off Canvas filter, go to the WooCommerce > Archives section of the customizer and enable the Display Filter Button option.', 'oceanwp' ),
					'id'            => 'owp_off_canvas_sidebar',
					'before_widget' => '<div id="%1$s" class="sidebar-box %2$s clr">',
					'after_widget'  => '</div>',
					'before_title'  => '<h4 class="widget-title">',
					'after_title'   => '</h4>',
				)
			);

		}

		/**
		 * Get Off Canvas Sidebar.
		 *
		 * @since 1.5.0
		 */
		public static function get_off_canvas_sidebar() {

			// Return if is not in shop page
			if ( ! oceanwp_is_woo_shop()
				&& ! oceanwp_is_woo_tax() ) {
				return;
			}

			if ( function_exists( 'wc_get_template' ) ) {
				wc_get_template( 'owp-off-canvas-sidebar.php' );
			}

		}

		/**
		 * Add off canvas filter button.
		 *
		 * @since 1.5.0
		 */
		public static function off_canvas_filter_button() {

			// Return if is not in shop page
			if ( ! oceanwp_is_woo_shop()
				&& ! oceanwp_is_woo_tax() ) {
				return;
			}

			// Get filter text
			$text = get_theme_mod( 'ocean_woo_off_canvas_filter_text' );
			$text = oceanwp_tm_translation( 'ocean_woo_off_canvas_filter_text', $text );
			$text = $text ? $text : esc_html__( 'Filter', 'oceanwp' );

			$output = '<a href="#" class="oceanwp-off-canvas-filter">' . oceanwp_icon( 'menu', false ) . '<span class="off-canvas-filter-text">' . esc_html( $text ) . '</span></a>';

			echo apply_filters( 'oceanwp_off_canvas_filter_button_output', $output );
		}

		/**
		 * Add grid/list buttons.
		 *
		 * @since 1.1.1
		 */
		public static function grid_list_buttons() {

			// Return if is not in shop page
			if ( ! oceanwp_is_woo_shop()
				&& ! oceanwp_is_woo_tax() ) {
				return;
			}

			// Titles
			$grid_view = esc_html__( 'Grid view', 'oceanwp' );
			$list_view = esc_html__( 'List view', 'oceanwp' );

			// Active class
			if ( 'list' == get_theme_mod( 'ocean_woo_catalog_view', 'grid' ) ) {
				$list = 'active ';
				$grid = '';
			} else {
				$grid = 'active ';
				$list = '';
			}

			$grid_view_icon = oceanwp_icon( 'grid', false );
			$list_view_icon = oceanwp_icon( 'list', false );

			$output = '<nav class="oceanwp-grid-list"><a href="#" id="oceanwp-grid" title="' . esc_html( $grid_view ) . '" class="' . esc_attr( $grid ) . ' grid-btn">' . $grid_view_icon . '</a><a href="#" id="oceanwp-list" title="' . esc_html( $list_view ) . '" class="' . esc_attr( $list ) . ' list-btn">' . $list_view_icon . '</a></nav>';

			echo apply_filters( 'oceanwp_grid_list_buttons_output', $output );
		}

		/**
		 * Closes the opening div "oceanwp-toolbar" around top elements.
		 *
		 * @since 1.1.1
		 */
		public static function close_shop_loop_div() {
			echo '</div>';
		}

		/**
		 * Add result count.
		 *
		 * @since 1.1.1
		 */
		public static function result_count() {

			// Return if is not in shop page
			if ( ! oceanwp_is_woo_shop()
				&& ! is_product_category()
				&& ! is_product_tag()
				&& ! ocean_is_wc_attribute() ) {
				return;
			}

			get_template_part( 'woocommerce/result-count' );
		}

		/**
		 * Returns correct posts per page for the shop
		 *
		 * @since 1.0.0
		 */
		public static function loop_shop_per_page() {
			if ( get_theme_mod( 'ocean_woo_shop_result_count', true ) ) {
				$posts_per_page = ( isset( $_GET['products-per-page'] ) ) ? sanitize_text_field( wp_unslash( $_GET['products-per-page'] ) ) : get_theme_mod( 'ocean_woo_shop_posts_per_page', '12' );

				if ( $posts_per_page == 'all' ) {
					$posts_per_page = wp_count_posts( 'product' )->publish;
				}
			} else {
				$posts_per_page = get_theme_mod( 'ocean_woo_shop_posts_per_page' );
				$posts_per_page = $posts_per_page ? $posts_per_page : '12';
			}
			return $posts_per_page;
		}

		/**
		 * Change products per row for the main shop.
		 *
		 * @since 1.0.0
		 */
		public static function loop_shop_columns() {
			$columns = get_theme_mod( 'ocean_woocommerce_shop_columns', '3' );
			$columns = $columns ? $columns : '3';
			return $columns;
		}

		/**
		 * Change products per row for upsells.
		 *
		 * @since 1.0.0
		 */
		public static function upsell_display() {

			// Get count
			$count = get_theme_mod( 'ocean_woocommerce_upsells_count', '3' );
			$count = $count ? $count : '3';

			// Get columns
			$columns = get_theme_mod( 'ocean_woocommerce_upsells_columns', '3' );
			$columns = $columns ? $columns : '3';

			// Alter upsell display
			woocommerce_upsell_display( $count, $columns );

		}

		/**
		 * Change products per row for crossells.
		 *
		 * @since 1.0.0
		 */
		public static function cross_sell_display() {

			// Get count
			$count = get_theme_mod( 'ocean_woocommerce_cross_sells_count', '2' );
			$count = $count ? $count : '2';

			// Get columns
			$columns = get_theme_mod( 'ocean_woocommerce_cross_sells_columns', '2' );
			$columns = $columns ? $columns : '2';

			// Alter cross-sell display
			woocommerce_cross_sell_display( $count, $columns );

		}

		/**
		 * Alter the related product arguments.
		 *
		 * @since 1.0.0
		 */
		public static function related_product_args() {

			// Get global vars
			global $product, $orderby, $related;

			// Get posts per page
			$posts_per_page = get_theme_mod( 'ocean_woocommerce_related_count', '3' );
			$posts_per_page = $posts_per_page ? $posts_per_page : '3';

			// Get columns
			$columns = get_theme_mod( 'ocean_woocommerce_related_columns', '3' );
			$columns = $columns ? $columns : '3';

			// Return array
			return array(
				'posts_per_page' => $posts_per_page,
				'columns'        => $columns,
			);

		}

		/**
		 * Adds an opening div "product-inner" around product entries.
		 *
		 * @since 1.0.0
		 */
		public static function add_shop_loop_item_inner_div() {
			echo '<div class="product-inner clr">';
		}

		/**
		 * Adds an out of stock tag to the products.
		 *
		 * @since 1.0.0
		 */
		public static function add_out_of_stock_badge() {
			if ( function_exists( 'oceanwp_woo_product_instock' ) && ! oceanwp_woo_product_instock() ) {
				$label = esc_html__( 'Out of Stock', 'oceanwp' );
				?>
				<div class="outofstock-badge">
					<?php echo esc_html( apply_filters( 'ocean_woo_outofstock_text', $label ) ); ?>
				</div><!-- .product-entry-out-of-stock-badge -->
				<?php
			}
		}

		/**
		 * Returns our product thumbnail from our template parts based on selected style in theme mods.
		 *
		 * @since 1.0.0
		 */
		public static function loop_product_thumbnail() {
			if ( function_exists( 'wc_get_template' ) ) {
				// Get entry product media style
				$style = get_theme_mod( 'ocean_woo_product_entry_style' );
				$style = $style ? $style : 'image-swap';
				// Get entry product media template part
				wc_get_template( 'loop/thumbnail/' . $style . '.php' );
			}
		}

		/**
		 * Archive product content.
		 *
		 * @since 1.1.4
		 */
		public static function archive_product_content() {
			if ( function_exists( 'wc_get_template' ) ) {
				if ( 'hover' == get_theme_mod( 'ocean_woo_products_style', 'default' ) ) {
					wc_get_template( 'owp-archive-product-hover.php' );
				} else {
					wc_get_template( 'owp-archive-product.php' );
				}
			}
		}

		/**
		 * Closes the "product-inner" div around product entries.
		 *
		 * @since 1.0.0
		 */
		public static function close_shop_loop_item_inner_div() {
			echo '</div><!-- .product-inner .clr -->';
		}

		/**
		 * Quick view button.
		 *
		 * @since 1.5.0
		 */
		public static function quick_view_button() {
			global $product;

			$button = '<a href="#" id="product_id_' . $product->get_id() . '" class="owp-quick-view" data-product_id="' . $product->get_id() . '">' . oceanwp_icon( 'eye', false ) . ' ' . oceanwp_theme_strings( 'owp-string-woo-quick-view-text', false ) . '</a>';

			echo apply_filters( 'ocean_woo_quick_view_button_html', $button ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		/**
		 * Quick view ajax.
		 *
		 * @since 1.5.0
		 */
		public static function product_quick_view_ajax() {
			if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'oceanwp' ) ) {
				wp_die();
			}

			if ( ! isset( $_POST['product_id'] ) ) {
				wp_die();
			}

			$product_id = intval( $_POST['product_id'] );

			// wp_query for the product.
			wp( 'p=' . $product_id . '&post_type=product' );

			ob_start();

			get_template_part( 'woocommerce/quick-view-content' );

			$output = ob_get_clean();

			echo wp_json_encode( array( 'output' => $output ) );

			wp_die();
		}

		/**
		 * Quick view template.
		 *
		 * @since 1.5.0
		 */
		public static function quick_view_template() {
			get_template_part( 'woocommerce/quick-view' );
		}

		/**
		 * Quick view image.
		 *
		 * @since 1.5.0
		 */
		public static function quick_view_image() {
			get_template_part( 'woocommerce/quick-view-image' );
		}

		/**
		 * Clear floats after single product summary.
		 *
		 * @since 1.0.0
		 */
		public static function clear_summary_floats() {
			echo '<div class="clear-after-summary clr"></div>';
		}

		/**
		 * Single product content.
		 *
		 * @since 1.1.9
		 */
		public static function single_product_content() {
			if ( function_exists( 'wc_get_template' ) ) {
				wc_get_template( 'owp-single-product.php' );
			}
		}

		/**
		 * Add product navigation.
		 *
		 * @since 1.5.0
		 */
		public static function product_next_prev_nav() {
			global $post;

			$next_post                    = get_next_post( true, '', 'product_cat' );
			$prev_post                    = get_previous_post( true, '', 'product_cat' );
			$ocean_next_prev_prod_content = '';

			if ( is_a( $prev_post, 'WP_Post' ) ) {
				$next_arrow = is_rtl() ? oceanwp_icon( 'angle_right', false ) : oceanwp_icon( 'angle_left', false );
				ob_start();
				?>

				<li class="prev-li">
				<a href="<?php echo get_the_permalink( $prev_post->ID ); ?>" class="owp-nav-link prev" rel="next"><?php echo $next_arrow; ?></a>
					<a href="<?php echo get_the_permalink( $prev_post->ID ); ?>" class="owp-nav-text prev-text"><?php oceanwp_theme_strings( 'owp-string-woo-nav-prev-product', 'oceanwp' ); ?></a>
					<div class="owp-nav-thumb">
						<a title="<?php echo get_the_title( $prev_post->ID ); ?>" href="<?php echo get_the_permalink( $prev_post->ID ); ?>"><?php echo get_the_post_thumbnail( $prev_post->ID, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ) ); ?></a>
					</div>
				</li>

				<?php
				$ocean_next_prev_prod_content .= ob_get_clean();
			}

			if ( is_a( $next_post, 'WP_Post' ) ) {
				$prev_arrow = is_rtl() ? oceanwp_icon( 'angle_left', false ) : oceanwp_icon( 'angle_right', false );
				ob_start();
				?>

				<li class="next-li">
					<a href="<?php echo get_the_permalink( $next_post->ID ); ?>" class="owp-nav-text next-text"><?php oceanwp_theme_strings( 'owp-string-woo-nav-next-product', 'oceanwp' ); ?></a>
					<a href="<?php echo get_the_permalink( $next_post->ID ); ?>" class="owp-nav-link next" rel="next"><?php echo $prev_arrow; ?></i></a>
					<div class="owp-nav-thumb">
						<a title="<?php echo get_the_title( $next_post->ID ); ?>" href="<?php echo get_the_permalink( $next_post->ID ); ?>"><?php echo get_the_post_thumbnail( $next_post->ID, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ) ); ?></a>
					</div>
				</li>

				<?php
				$ocean_next_prev_prod_content .= ob_get_clean();
			}

			?>

			<div class="owp-product-nav-wrap clr">
				<ul class="owp-product-nav">
					 <?php echo $ocean_next_prev_prod_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</ul>
			</div>

			<?php
		}

		/**
		 * Add floating bar.
		 *
		 * @since 1.5.0
		 */
		public static function floating_bar() {

			// Return if is not single product
			if ( ! oceanwp_is_woo_single() ) {
				return;
			}

			// Get product object.
			$product = wc_get_product( get_the_ID() );

			// Floating bar conditional
			$fb_woo_cond = get_theme_mod( 'ocean_single_conditional', false );

			// Floating Bar conditional vars.
			$fb_show_cond = '';
			$fb_show_cond = ( is_user_logged_in() && $fb_woo_cond === true );

			// Floating Bar Heading tag.
			$fb_h_tag = 'h2';
			$fb_h_tag = apply_filters( 'ocean_floating_bar_h_tag', $fb_h_tag );

			?>

			<div class="owp-floating-bar">
				<div class="container clr">
					<div class="left">
						<p class="selected"><?php oceanwp_theme_strings( 'owp-string-woo-floating-bar-selected', 'oceanwp' ); ?></p>
						<<?php echo esc_attr( $fb_h_tag ); ?> class="entry-title" itemprop="name"><?php echo wp_trim_words( $product->get_title(), '4' ); ?></<?php echo esc_attr( $fb_h_tag ); ?>>
					</div>
					<?php
					if ( false === $fb_woo_cond || $fb_show_cond ) {
						?>
						<div class="right">
							<div class="product_price">
								<p class="price"><?php echo $product->get_price_html(); ?></p>
							</div>
					<?php } ?>
						<?php
						// If out of stock.
						if ( 'outofstock' == $product->get_stock_status() ) {
							?>
							<p class="stock out-of-stock"><?php oceanwp_theme_strings( 'owp-string-woo-floating-bar-out-stock', 'oceanwp' ); ?></p>
							<?php
						} elseif ( false === $fb_woo_cond || $fb_show_cond ) {

							if ( $product && $product->is_type( 'simple' ) && $product->is_purchasable() && $product->is_in_stock() && ! $product->is_sold_individually() ) {
								echo self::floating_bar_add_to_cart( $product );
							} else {
								?>
								<button type="submit" class="button top"><?php oceanwp_theme_strings( 'owp-string-woo-floating-bar-select-btn', 'oceanwp' ); ?></button>
								<?php
							}
						} else {

							// Get price message display state.
							$fb_woo_cond_msg = get_theme_mod( 'ocean_woo_single_cond_msg', 'yes' );

							if ( 'yes' === $fb_woo_cond_msg ) {

								// Get Add to Cart button replacement message.
								$fb_woo_msg_txt = get_theme_mod( 'ocean_woo_single_cond_msg_text' );
								$fb_woo_msg_txt = $fb_woo_msg_txt ? $fb_woo_msg_txt : esc_html__( 'Log in to view price and purchase', 'oceanwp' );
								?>
							<div class="right">
								<p class="selected"><?php echo $fb_woo_msg_txt; ?></p>
							</div>
								<?php
							}
						}
						if ( false === $fb_woo_cond || $fb_show_cond ) {
							?>
					</div>
						<?php } ?>
				</div>
			</div>

			<?php
		}

		/**
		 * Floating bar add to cart button.
		 *
		 * @since 1.5.0
		 */
		public static function floating_bar_add_to_cart( $product ) {

			$html  = '<form action="' . esc_url( $product->add_to_cart_url() ) . '" class="cart" method="post" enctype="multipart/form-data">';
			$html .= woocommerce_quantity_input(
				array(
					'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
					'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
					'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
				),
				$product,
				false
			);
			$html .= '<button type="submit" name="add-to-cart" value="' . get_the_ID() . '" class="floating_add_to_cart_button button alt">' . esc_html( $product->add_to_cart_text() ) . '</button>';
			$html .= '</form>';

			return $html;
		}

		/**
		 * Floating bar add to cart ajax request.
		 *
		 * @since 1.5.0
		 */
		public static function add_cart_floating_bar_ajax() {
			if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'oceanwp' ) ) {
				wp_die();
			}

			$product_id = sanitize_text_field( $_POST['product_id'] );
			$quantity   = sanitize_text_field( $_POST['quantity'] );

			$cart_item_key = WC()->cart->add_to_cart( $product_id, $quantity );

			echo $cart_item_key;
			wp_die();

		}

		/**
		 * Add wrap and user info to the account navigation.
		 *
		 * @since 1.0.0
		 */
		public static function oceanwp_before_account_navigation() {

			// Name to display
			$current_user = wp_get_current_user();

			if ( $current_user->display_name ) {
				$name = $current_user->display_name;
			} else {
				$name = esc_html__( 'Welcome!', 'oceanwp' );
			}
			$name = apply_filters( 'ocean_user_profile_name_text', $name );

			echo '<div class="woocommerce-MyAccount-tabs clr">';
				echo '<div class="oceanwp-user-profile clr">';
					echo '<div class="image">' . get_avatar( $current_user->user_email, 128 ) . '</div>';
					echo '<div class="user-info">';
						echo '<p class="name">' . esc_attr( $name ) . '</p>';
						echo '<a class="logout" href="' . esc_url( wp_logout_url( get_permalink() ) ) . '">' . esc_html__( 'Logout', 'oceanwp' ) . '</a>';
					echo '</div>';
				echo '</div>';

		}

		/**
		 * Add wrap to the account navigation.
		 *
		 * @since 1.0.0
		 */
		public static function oceanwp_after_account_navigation() {
			echo '</div>';
		}

		/**
		 * Adds container wrap for the thumbnail and title of the categories products.
		 *
		 * @since 1.1.1.1
		 */
		public static function add_container_wrap_category() {
			echo '<div class="product-inner clr">';
		}

		/**
		 * Adds a container div before the thumbnail for the categories products.
		 *
		 * @since 1.1.1.1
		 */
		public static function add_div_before_category_thumbnail( $category ) {
			echo '<div class="woo-entry-image clr">';
				echo '<a href="' . esc_url( get_term_link( $category, 'product_cat' ) ) . '">';
		}

		/**
		 * Close a container div before the thumbnail for the categories products.
		 *
		 * @since 1.1.1.1
		 */
		public static function close_div_after_category_thumbnail() {
				echo '</a>';
			echo '</div>';
		}

		/**
		 * Adds a container div before the thumbnail for the categories products.
		 *
		 * @since 1.1.1.1
		 */
		public static function add_div_before_category_title( $category ) {
			echo '<div class="woo-entry-inner clr">';
				echo '<a href="' . esc_url( get_term_link( $category, 'product_cat' ) ) . '">';
		}

		/**
		 * Add description if list view for the categories products.
		 *
		 * @since 1.1.1.1
		 */
		public static function add_category_description( $category ) {
			// Close category link openend in add_div_before_category_title()
			echo '</a>';

			 // Var
			$term        = get_term( $category->term_id, 'product_cat' );
			$description = $term->description;
			$length      = get_theme_mod( 'ocean_woo_list_excerpt_length', '60' );

			// Description
			if ( get_theme_mod( 'ocean_woo_grid_list', true )
				&& $description ) {
				echo '<div class="woo-desc">';
					echo '<div class="description">';
				if ( ! $length ) {
					echo wp_kses_post( strip_shortcodes( $description ) );
				} else {
					echo wp_trim_words( strip_shortcodes( $description ), $length );
				}
					echo '</div>';
				echo '</div>';
			}
		}

		/**
		 * Close a container div before the thumbnail for the categories products.
		 *
		 * @since 1.1.1.1
		 */
		public static function close_div_after_category_title() {
			echo '</div>';
		}

		/**
		 * Close container wrap for the thumbnail and title of the categories products.
		 *
		 * @since 1.1.1.1
		 */
		public static function close_container_wrap_category() {
			echo '</div>';
		}

		/**
		 * Before my account login.
		 *
		 * @since 1.0.0
		 */
		public static function oceanwp_login_wrap_before() {
			echo '<div class="oceanwp-loginform-wrap">';
		}

		/**
		 * After my account login.
		 *
		 * @since 1.0.0
		 */
		public static function oceanwp_login_wrap_after() {
			echo '</div>';
		}

		/**
		 * Display the categories featured images.
		 *
		 * @since 1.0.0
		 */
		public static function woocommerce_category_image() {
			if ( is_product_category() ) {
				global $wp_query;
				$cat          = $wp_query->get_queried_object();
				$thumbnail_id = get_term_meta( $cat->term_id, 'thumbnail_id', true );
				$image        = wp_get_attachment_url( $thumbnail_id );

				if ( $image ) {
					echo '<div class="category-image"><img src="' . $image . '" alt="' . $cat->name . '" /></div>';
				}
			}
		}

		/**
		 * Tweaks pagination arguments.
		 *
		 * @since 1.0.0
		 */
		public static function pagination_args( $args ) {

			// Nav icons.
			$p_arrow = is_rtl() ? oceanwp_icon( 'angle_right', false ) : oceanwp_icon( 'angle_left', false );
			$n_arrow = is_rtl() ? oceanwp_icon( 'angle_left', false ) : oceanwp_icon( 'angle_right', false );

			// Args.
			$args['prev_text'] = $p_arrow;
			$args['next_text'] = $n_arrow;

			return $args;
		}

		/**
		 * Alter continue shoping URL.
		 *
		 * @since 1.0.0
		 */
		public static function continue_shopping_redirect( $return_to ) {
			$shop_id = wc_get_page_id( 'shop' );
			if ( function_exists( 'icl_object_id' ) ) {
				$shop_id = icl_object_id( $shop_id, 'page' );
			}
			if ( $shop_id ) {
				$return_to = get_permalink( $shop_id );
			}
			return $return_to;
		}

		/**
		 * Add classes to WooCommerce product entries.
		 *
		 * @since 1.0.0
		 */
		public static function add_product_classes( $classes ) {
			global $woocommerce_loop;

			// Vars
			$product           = wc_get_product( get_the_ID() );
			$content_alignment = get_theme_mod( 'ocean_woo_product_entry_content_alignment', 'center' );
			$content_alignment = $content_alignment ? $content_alignment : 'center';
			$thumbs_layout     = get_theme_mod( 'ocean_woo_product_thumbs_layout', 'horizontal' );
			$thumbs_layout     = $thumbs_layout ? $thumbs_layout : 'horizontal';
			$tabs_layout       = get_theme_mod( 'ocean_woo_product_tabs_layout', 'horizontal' );
			$tabs_layout       = $tabs_layout ? $tabs_layout : 'horizontal';
			$btn_style         = get_theme_mod( 'ocean_woo_product_addtocart_style', 'normal' );
			$btn_style         = $btn_style ? $btn_style : 'normal';

			// Product entries
			if ( $product && ! empty( $woocommerce_loop['columns'] ) ) {

				// If has rating.
				if ( $product->get_rating_count() ) {
					$classes[] = 'has-rating';
				}

				// If product navigation
				if ( true == get_theme_mod( 'ocean_woocommerce_display_navigation', true ) ) {
					$classes[] = 'has-product-nav';
				}

				// Column Alignment.
				$classes[] = 'col';
				$classes[] = oceanwp_grid_class( $woocommerce_loop['columns'] );
				$classes[] = 'owp-content-' . $content_alignment;

				// If infinite scroll.
				if ( 'infinite_scroll' == get_theme_mod( 'ocean_woo_pagination_style', 'standard' ) ) {
					$classes[] = 'item-entry';
				}
			}

			// Single product
			if ( post_type_exists( 'product' ) ) {

				// Thumbnails layout
				$classes[] = 'owp-thumbs-layout-' . $thumbs_layout;

				// Add to cart button style
				$classes[] = 'owp-btn-' . $btn_style;

				// Tabs layout
				$classes[] = 'owp-tabs-layout-' . $tabs_layout;

				// If no thumbnails
				$thumbnails = get_post_meta( get_the_ID(), '_product_image_gallery', true );
				if ( empty( $thumbnails ) ) {
					$classes[] = 'has-no-thumbnails';
				}

				// Display product navigation.
				if ( true == get_theme_mod( 'ocean_woocommerce_display_navigation', true ) ) {
					$classes[] = 'has-product-nav';
				}
			}

			// Sale badge style
			$sale_style = get_theme_mod( 'ocean_woo_sale_badge_style', 'square' );
			if ( 'circle' == $sale_style ) {
				$classes[] = $sale_style . '-sale';
			}

			return $classes;
		}

		/**
		 * Add the product class to the Elementor editor to fix the product display issue.
		 *
		 * @since 1.5.18
		 */
		public static function add_product_class_for_elementor( $classes ) {
			if ( in_array( 'type-product', $classes ) ) {
				$classes[] = 'product';
			}
			return $classes;
		}

		/**
		 * Remove the category description under the page title on taxonomy.
		 *
		 * @since 1.4.7
		 */
		public static function post_subheading( $return ) {
			if ( is_woocommerce() && is_product_taxonomy() ) {
				$return = false;
			}
			return $return;
		}

		/**
		 * Disables the next/previous links.
		 *
		 * @since 1.0.0
		 */
		public static function next_prev( $return ) {
			if ( is_woocommerce() && is_singular( 'product' ) ) {
				$return = false;
			}
			return $return;
		}

		/**
		 * Adds color accents for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_texts( $texts ) {
			return array_merge(
				array(
					'.woocommerce-MyAccount-navigation ul li a:before',
					'.woocommerce-checkout .woocommerce-info a',
					'.woocommerce-checkout #payment ul.payment_methods .wc_payment_method>input[type=radio]:first-child:checked+label:before',
					'.woocommerce-checkout #payment .payment_method_paypal .about_paypal',
					'.woocommerce ul.products li.product li.category a:hover',
					'.woocommerce ul.products li.product .button:hover',
					'.woocommerce ul.products li.product .product-inner .added_to_cart:hover',
					'.product_meta .posted_in a:hover',
					'.product_meta .tagged_as a:hover',
					'.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover',
					'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a',
					'.woocommerce .oceanwp-grid-list a.active',
					'.woocommerce .oceanwp-grid-list a:hover',
					'.woocommerce .oceanwp-off-canvas-filter:hover',
					'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover',
					'.widget_product_categories li a:hover ~ .count',
					'.widget_layered_nav li a:hover ~ .count',
					'.woocommerce ul.products li.product:not(.product-category) .woo-entry-buttons li a:hover',
				),
				$texts
			);
		}

		/**
		 * Adds color accents for SVG icons.
		 *
		 * @since 1.0.0
		 */
		public static function primary_svg_icons( $svg_icons ) {
			return array_merge(
				array(
					'.woocommerce .oceanwp-grid-list a.active .owp-icon use',
					'.woocommerce .oceanwp-grid-list a:hover .owp-icon use',
				),
				$svg_icons
			);
		}

		/**
		 * Adds border accents for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_borders( $borders ) {
			return array_merge(
				array(
					'.current-shop-items-dropdown' => array( 'top' ),
					'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a' => array( 'bottom' ),
					'.wcmenucart-details.count:before',
					'.woocommerce ul.products li.product .button:hover',
					'.woocommerce ul.products li.product .product-inner .added_to_cart:hover',
					'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a',
					'.woocommerce .oceanwp-grid-list a.active',
					'.woocommerce .oceanwp-grid-list a:hover',
					'.woocommerce .oceanwp-off-canvas-filter:hover',
					'.owp-product-nav li a.owp-nav-link:hover',
					'.widget_shopping_cart_content .buttons .button:first-child:hover',
					'.widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover',
					'.widget_product_categories li a:hover ~ .count',
					'.woocommerce .widget_product_categories li.current-cat > a ~ .count',
					'.woocommerce .widget_product_categories li.current-cat > a:before',
					'.widget_layered_nav li a:hover ~ .count',
					'.woocommerce .widget_layered_nav li.chosen a ~ .count',
					'.woocommerce .widget_layered_nav li.chosen a:before',
					'#owp-checkout-timeline.arrow .active .timeline-wrapper:before' => array( 'top', 'bottom' ),
					'#owp-checkout-timeline.arrow .active .timeline-wrapper:after' => array( 'left', 'right' ),
					'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count',
					'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count:after',
					'.show-cart .wcmenucart-cart-icon .wcmenucart-count',
					'.show-cart .wcmenucart-cart-icon .wcmenucart-count:after',
					'.woocommerce ul.products li.product:not(.product-category) .woo-product-gallery .active a',
					'.woocommerce ul.products li.product:not(.product-category) .woo-product-gallery a:hover',
				),
				$borders
			);
		}

		/**
		 * Adds background accents for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_backgrounds( $backgrounds ) {
			return array_merge(
				array(
					'.woocommerce div.product div.images .open-image',
					'.wcmenucart-details.count',
					'.woocommerce-message a',
					'.woocommerce-error a',
					'.woocommerce-info a',
					'.woocommerce .widget_price_filter .ui-slider .ui-slider-handle',
					'.woocommerce .widget_price_filter .ui-slider .ui-slider-range',
					'.owp-product-nav li a.owp-nav-link:hover',
					'.woocommerce div.product.owp-tabs-layout-vertical .woocommerce-tabs ul.tabs li a:after',
					'.woocommerce .widget_product_categories li.current-cat > a ~ .count',
					'.woocommerce .widget_product_categories li.current-cat > a:before',
					'.woocommerce .widget_layered_nav li.chosen a ~ .count',
					'.woocommerce .widget_layered_nav li.chosen a:before',
					'#owp-checkout-timeline .active .timeline-wrapper',
					'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count',
					'.show-cart .wcmenucart-cart-icon .wcmenucart-count',
					'.woocommerce ul.products li.product:not(.product-category) .image-wrap .button',
				),
				$backgrounds
			);
		}

		/**
		 * Adds background hover accents for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function hover_primary_backgrounds( $hover ) {
			return array_merge(
				array(
					'.woocommerce div.product div.images .open-image:hover',
					'.woocommerce-error a:hover',
					'.woocommerce-info a:hover',
					'.woocommerce-message a:hover',
					'.woocommerce ul.products li.product:not(.product-category) .image-wrap .button:hover',
				),
				$hover
			);
		}

		/**
		 * Adds border color elements for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function border_color_elements( $elements ) {
			return array_merge(
				array(
					'.woocommerce table.shop_table',
					'.woocommerce table.shop_table td',
					'.woocommerce-cart .cart-collaterals .cart_totals tr td',
					'.woocommerce-cart .cart-collaterals .cart_totals tr th',
					'.woocommerce table.shop_table tth',
					'.woocommerce table.shop_table tfoot td',
					'.woocommerce table.shop_table tfoot th',
					'.woocommerce .order_details',
					'.woocommerce .shop_table.order_details tfoot th',
					'.woocommerce .shop_table.customer_details th',
					'.woocommerce .cart-collaterals .cross-sells',
					'.woocommerce-page .cart-collaterals .cross-sells',
					'.woocommerce .cart-collaterals .cart_totals',
					'.woocommerce-page .cart-collaterals .cart_totals',
					'.woocommerce .cart-collaterals h2',
					'.woocommerce .cart-collaterals h2',
					'.woocommerce .cart-collaterals h2',
					'.woocommerce-cart .cart-collaterals .cart_totals .order-total th',
					'.woocommerce-cart .cart-collaterals .cart_totals .order-total td',
					'.woocommerce ul.order_details',
					'.woocommerce .shop_table.order_details tfoot th',
					'.woocommerce .shop_table.customer_details th',
					'.woocommerce .woocommerce-checkout #customer_details h3',
					'.woocommerce .woocommerce-checkout h3#order_review_heading',
					'.woocommerce-checkout #payment ul.payment_methods',
					'.woocommerce-checkout form.login',
					'.woocommerce-checkout form.checkout_coupon',
					'.woocommerce-checkout-review-order-table tfoot th',
					'.woocommerce-checkout #payment',
					'.woocommerce ul.order_details',
					'.woocommerce #customer_login > div',
					'.woocommerce .col-1.address',
					'.woocommerce .col-2.address',
					'.woocommerce-checkout .woocommerce-info',
					'.woocommerce div.product form.cart',
					'.product_meta',
					'.woocommerce div.product .woocommerce-tabs ul.tabs',
					'.woocommerce #reviews #comments ol.commentlist li .comment_container',
					'p.stars span a',
					'.woocommerce ul.product_list_widget li',
					'.woocommerce .widget_shopping_cart .cart_list li',
					'.woocommerce.widget_shopping_cart .cart_list li',
					'.woocommerce ul.product_list_widget li:first-child',
					'.woocommerce .widget_shopping_cart .cart_list li:first-child',
					'.woocommerce.widget_shopping_cart .cart_list li:first-child',
					'.widget_product_categories li a',
					'.woocommerce .oceanwp-toolbar',
					'.woocommerce .products.list .product',
				),
				$elements
			);
		}

		/**
		 * Alter WooCommerce category classes
		 *
		 * @since 1.0.0
		 */
		public static function product_cat_class( $classes ) {
			global $woocommerce_loop;
			$classes[] = 'col';
			$classes[] = oceanwp_grid_class( $woocommerce_loop['columns'] );
			return $classes;
		}

		/**
		 * Adds wishlist icon to menu
		 *
		 * @since 1.5.0
		 */
		public static function menu_wishlist_icon( $items, $args ) {

			// Return items if is in the Elementor edit mode, to avoid error.
			if ( OCEANWP_ELEMENTOR_ACTIVE
				&& \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
				return $items;
			}

			// Return.
			if ( ! ocean_woo_wishlist()
				|| true != get_theme_mod( 'ocean_woo_wishlist_icon', false )
				|| 'main_menu' != $args->theme_location ) {
				return $items;
			}

			$wl_plugin = get_theme_mod( 'ocean_woo_wl_plugin', 'ti_wl' );

			$items .= '<li class="woo-wishlist-link">';

			if ( 'ti_wl' === $wl_plugin ) {
				$items .= do_shortcode( '[ti_wishlist_products_counter]' );
			} elseif ( 'yith_wl' === $wl_plugin ) {

				// Get YITH Wishlist URL.
				$wishlist_url = YITH_WCWL()->get_last_operation_url();
				$woo_wl_count = ocean_woo_wishlist_count();

				$items .= '<a href="' . esc_url( $wishlist_url ) . '">' . oceanwp_icon( 'heart', false ) . '<span class="count">' . esc_html( $woo_wl_count ) . '</i></span></a>';
			}

			$items .= '</li>';

			// Return menu items.
			return $items;
		}

		/**
		 * Adds cart icon to menu
		 *
		 * @since 1.0.0
		 */
		public static function menu_cart_icon( $items, $args ) {

			// Return items if is in the Elementor edit mode, to avoid error
			if ( OCEANWP_ELEMENTOR_ACTIVE
				&& \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
				return $items;
			}

			// Only used for the main menu
			if ( 'main_menu' != $args->theme_location ) {
				return $items;
			}

			// Get style
			$style        = oceanwp_menu_cart_style();
			$header_style = oceanwp_header_style();

			// Return items if no style
			if ( ! $style ) {
				return $items;
			}

			// Add cart link to menu items
			if ( 'full_screen' == $header_style ) {
				$items .= '<li class="woo-cart-link"><a href="' . esc_url( wc_get_cart_url() ) . '">' . esc_html__( 'Your cart', 'oceanwp' ) . '</a></li>';
			} else {
				$items .= self::get_cart_icon();
			}

			// Return menu items
			return $items;
		}

		/**
		 * Add cart icon
		 *
		 * @since 1.5.0
		 */
		public static function get_cart_icon() {

			// Style
			$style        = oceanwp_menu_cart_style();
			$header_style = oceanwp_header_style();
			$cart_style   = get_theme_mod( 'ocean_woo_cart_dropdown_style', 'compact' );

			// Toggle class
			$toggle_class = 'toggle-cart-widget';

			// Define classes to add to li element
			$classes = array( 'woo-menu-icon' );

			// Add style class
			$classes[] = 'wcmenucart-toggle-' . $style;

			// If bag style
			if ( 'yes' == get_theme_mod( 'ocean_woo_menu_bag_style', 'no' ) ) {
				$classes[] = 'bag-style';
			}

			// Cart style
			if ( 'compact' != $cart_style ) {
				$classes[] = $cart_style;
			}

			// Prevent clicking on cart and checkout
			if ( 'custom_link' != $style && ( is_cart() || is_checkout() ) ) {
				$classes[] = 'nav-no-click';
			}

			// Add toggle class
			else {
				$classes[] = $toggle_class;
			}

			// Turn classes into string
			$classes = implode( ' ', $classes );

			ob_start();
			?>

			<li class="<?php echo esc_attr( $classes ); ?>">
				<?php oceanwp_wcmenucart_menu_item(); ?>
				<?php
				if ( 'drop_down' == $style
					&& 'full_screen' != $header_style
					&& 'vertical' != $header_style ) {
					?>
					<div class="current-shop-items-dropdown owp-mini-cart clr">
						<div class="current-shop-items-inner clr">
							<?php the_widget( 'WC_Widget_Cart', 'title=' ); ?>
						</div>
					</div>
				<?php } ?>
			</li>

			<?php
			return ob_get_clean();

		}

		/**
		 * Add menu cart item to the Woo fragments so it updates with AJAX
		 *
		 * @since 1.0.0
		 */
		public static function menu_cart_icon_fragments( $fragments ) {
			ob_start();
			oceanwp_wcmenucart_menu_item();
			$fragments['li.woo-menu-icon a.wcmenucart, .oceanwp-mobile-menu-icon a.wcmenucart'] = ob_get_clean();

			return $fragments;
		}

		/**
		 * Sale badge content
		 *
		 * @since 1.5.0
		 */
		public static function sale_flash() {
			global $product;

			if ( $product->is_type( 'simple' ) || $product->is_type( 'external' ) ) {

				$r_price = $product->get_regular_price();
				$s_price = $product->get_sale_price();
				$percent = round( ( ( floatval( $r_price ) - floatval( $s_price ) ) / floatval( $r_price ) ) * 100 );

			} elseif ( $product->is_type( 'variable' ) ) {

				$available_variations = $product->get_available_variations();
				$maximumper           = 0;

				for ( $i = 0; $i < count( $available_variations ); ++ $i ) {
					$variation_id     = $available_variations[ $i ]['variation_id'];
					$variable_product = new WC_Product_Variation( $variation_id );

					if ( ! $variable_product->is_on_sale() ) {
						continue;
					}

					$r_price = $variable_product->get_regular_price();
					$s_price = $variable_product->get_sale_price();
					$percent = round( ( ( floatval( $r_price ) - floatval( $s_price ) ) / floatval( $r_price ) ) * 100 );

					if ( $percent > $maximumper ) {
						$maximumper = $percent;
					}
				}

				$percent = sprintf( __( '%s', 'oceanwp' ), $maximumper );

			} else {

				$percent = '<span class="onsale">' . __( 'Sale!', 'oceanwp' ) . '</span>';
				return $percent;

			}

			$value = '-' . esc_html( $percent ) . '%';

			return '<span class="onsale">' . esc_html( $value ) . '</span>';
		}

		/**
		 * Add links Login/Register on the my account page
		 *
		 * @since 1.5.0
		 */
		public static function login_register_links() {

			// Return if not Original style
			if ( 'original' != get_theme_mod( 'ocean_woo_account_page_style', 'original' ) ) {
				return;
			}

			// Var
			$registration = get_option( 'woocommerce_enable_myaccount_registration' );

			// Define classes
			$classes = array( 'owp-account-links' );

			// If registration disabled
			if ( 'yes' != $registration ) {
				$classes[] = 'registration-disabled';
			}

			// Turn classes into string
			$classes = implode( ' ', $classes );

			// Login text
			$text = esc_html__( 'Login', 'oceanwp' );

			$html      = '<ul class="' . $classes . '">';
				$html .= '<li class="login">';
			if ( 'yes' == $registration ) {
				$html .= '<a href="#" class="owp-account-link current">' . $text . '</a>';
			} else {
				$html .= '<span class="owp-account-link current">' . $text . '</span>';
			}
				$html .= '</li>';

				// If registration
			if ( 'yes' == $registration ) {
				$html     .= '<li class="or">' . esc_html__( 'Or', 'oceanwp' ) . '</li>';
				$html     .= '<li class="register">';
					$html .= '<a href="#" class="owp-account-link">' . esc_html__( 'Register', 'oceanwp' ) . '</a>';
				$html     .= '</li>';
			}

			$html .= '</ul>';

			echo $html;
		}

		/**
		 * Distraction free on cart/checkout
		 *
		 * @since 1.5.0
		 */
		public static function distraction_free( $return ) {

			if ( ( is_cart()
					&& true == get_theme_mod( 'ocean_woo_distraction_free_cart', false ) )
				|| ( is_checkout()
					&& true == get_theme_mod( 'ocean_woo_distraction_free_checkout', false ) ) ) {
				$return = false;
			}

			// Return
			return $return;

		}

		/**
		 * Validate multi-step checkout fields.
		 *
		 * @since 1.5.17
		 */
		public function validate_checkout_callback() {
			$posted_data = isset( $_POST['posted_data'] ) ? $_POST['posted_data'] : array();

			$WC_Checkout = new WC_Checkout();
			$errors      = new WP_Error();

						$skipped = array();
			$data                = array(
				'terms'                              => (int) isset( $posted_data['terms'] ),
				'createaccount'                      => (int) ! empty( $posted_data['createaccount'] ),
				'payment_method'                     => isset( $posted_data['payment_method'] ) ? wc_clean( $posted_data['payment_method'] ) : '',
				'shipping_method'                    => isset( $posted_data['shipping_method'] ) ? wc_clean( $posted_data['shipping_method'] ) : '',
				'ship_to_different_address'          => ! empty( $posted_data['ship_to_different_address'] ) && ! wc_ship_to_billing_address_only(),
				'woocommerce_checkout_update_totals' => isset( $posted_data['woocommerce_checkout_update_totals'] ),
			);

			foreach ( $WC_Checkout->get_checkout_fields() as $fieldset_key => $fieldset ) {
				if ( isset( $data['ship_to_different_address'] ) ) {
					if ( 'shipping' === $fieldset_key && ( ! $data['ship_to_different_address'] || ! WC()->cart->needs_shipping_address() ) ) {
						continue;
					}
				}

				if ( isset( $data['createaccount'] ) ) {
					if ( 'account' === $fieldset_key && ( is_user_logged_in() || ( ! $WC_Checkout->is_registration_required() && empty( $data['createaccount'] ) ) ) ) {
						continue;
					}
				}
				foreach ( $fieldset as $key => $field ) {
					$type = sanitize_title( isset( $field['type'] ) ? $field['type'] : 'text' );

					switch ( $type ) {
						case 'checkbox':
							$value = isset( $posted_data[ $key ] ) ? 1 : '';
							break;
						case 'multiselect':
							$value = isset( $posted_data[ $key ] ) ? implode( ', ', wc_clean( $posted_data[ $key ] ) ) : '';
							break;
						case 'textarea':
							$value = isset( $posted_data[ $key ] ) ? wc_sanitize_textarea( $posted_data[ $key ] ) : '';
							break;
						default:
							$value = isset( $posted_data[ $key ] ) ? wc_clean( $posted_data[ $key ] ) : '';
							break;
					}

					$data[ $key ] = apply_filters( 'woocommerce_process_checkout_' . $type . '_field', apply_filters( 'woocommerce_process_checkout_field_' . $key, $value ) );
				}
			}

			if ( in_array( 'shipping', $skipped ) && ( WC()->cart->needs_shipping_address() || wc_ship_to_billing_address_only() ) ) {
				foreach ( $this->get_checkout_fields( 'shipping' ) as $key => $field ) {
					$data[ $key ] = isset( $data[ 'billing_' . substr( $key, 9 ) ] ) ? $data[ 'billing_' . substr( $key, 9 ) ] : '';
				}
			}

			foreach ( $WC_Checkout->get_checkout_fields() as $fieldset_key => $fieldset ) {

				if ( $fieldset_key != $_POST['type'] ) {
					 continue;
				}

				if ( isset( $data['ship_to_different_address'] ) ) {
					if ( 'shipping' === $fieldset_key && ( ! $data['ship_to_different_address'] || ! WC()->cart->needs_shipping_address() ) ) {
						continue;
					}
				}

				if ( isset( $data['createaccount'] ) ) {
					if ( 'account' === $fieldset_key && ( is_user_logged_in() || ( ! $WC_Checkout->is_registration_required() && empty( $data['createaccount'] ) ) ) ) {
						continue;
					}
				}

				foreach ( $fieldset as $key => $field ) {
					if ( ! isset( $data[ $key ] ) ) {
						continue;
					}
					$required    = ! empty( $field['required'] );
					$format      = array_filter( isset( $field['validate'] ) ? (array) $field['validate'] : array() );
					$field_label = isset( $field['label'] ) ? $field['label'] : '';

					switch ( $fieldset_key ) {
						case 'shipping':
							/* translators: %s: field name */
							$field_label = sprintf( __( 'Shipping %s', 'oceanwp' ), $field_label );
							break;
						case 'billing':
							/* translators: %s: field name */
							$field_label = sprintf( __( 'Billing %s', 'oceanwp' ), $field_label );
							break;
					}

					if ( in_array( 'postcode', $format ) ) {
						$country      = isset( $data[ $fieldset_key . '_country' ] ) ? $data[ $fieldset_key . '_country' ] : WC()->customer->{"get_{$fieldset_key}_country"}();
						$data[ $key ] = wc_format_postcode( $data[ $key ], $country );

						if ( '' !== $data[ $key ] && ! WC_Validation::is_postcode( $data[ $key ], $country ) ) {
							$errors->add( 'validation', sprintf( __( '%s is not a valid postcode / ZIP.', 'oceanwp' ), '<strong>' . esc_html( $field_label ) . '</strong>' ) );
						}
					}

					if ( in_array( 'phone', $format ) ) {
						$data[ $key ] = wc_format_phone_number( $data[ $key ] );

						if ( '' !== $data[ $key ] && ! WC_Validation::is_phone( $data[ $key ] ) ) {
							/* translators: %s: phone number */
							$errors->add( 'validation', sprintf( __( '%s is not a valid phone number.', 'oceanwp' ), '<strong>' . esc_html( $field_label ) . '</strong>' ) );
						}
					}

					if ( in_array( 'email', $format ) && '' !== $data[ $key ] ) {
						$data[ $key ] = sanitize_email( $data[ $key ] );

						if ( ! is_email( $data[ $key ] ) ) {
							/* translators: %s: email address */
							$errors->add( 'validation', sprintf( __( '%s is not a valid email address.', 'oceanwp' ), '<strong>' . esc_html( $field_label ) . '</strong>' ) );
							continue;
						}
					}

					if ( '' !== $data[ $key ] && in_array( 'state', $format ) ) {
						$country      = isset( $data[ $fieldset_key . '_country' ] ) ? $data[ $fieldset_key . '_country' ] : WC()->customer->{"get_{$fieldset_key}_country"}();
						$valid_states = WC()->countries->get_states( $country );

						if ( ! empty( $valid_states ) && is_array( $valid_states ) && sizeof( $valid_states ) > 0 ) {
							$valid_state_values = array_map( 'wc_strtoupper', array_flip( array_map( 'wc_strtoupper', $valid_states ) ) );
							$data[ $key ]       = wc_strtoupper( $data[ $key ] );

							if ( isset( $valid_state_values[ $data[ $key ] ] ) ) {
								// With this part we consider state value to be valid as well, convert it to the state key for the valid_states check below.
								$data[ $key ] = $valid_state_values[ $data[ $key ] ];
							}

							if ( ! in_array( $data[ $key ], $valid_state_values ) ) {
								/* translators: 1: state field 2: valid states */
								$errors->add( 'validation', sprintf( __( '%1$s is not valid. Please enter one of the following: %2$s', 'oceanwp' ), '<strong>' . esc_html( $field_label ) . '</strong>', implode( ', ', $valid_states ) ) );
							}
						}
					}

					if ( $required && '' === $data[ $key ] ) {
						/* translators: %s: field name */
						$errors->add( 'required-field', apply_filters( 'woocommerce_checkout_required_field_notice', sprintf( __( '%s is a required field.', 'oceanwp' ), '<strong>' . esc_html( $field_label ) . '</strong>' ), $field_label ) );
					}
				}
			}

			$html  = '';
			$valid = true;
			if ( $errors->get_error_messages() ) {
				$valid = false;
				$html  = '<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout"><ul class="woocommerce-error" role="alert">';
				foreach ( $errors->get_error_messages() as $message ) {
					$html .= '<li>' . $message . '</li>';
				}
				$html .= '</ul></div>';
			}

			wp_send_json(
				array(
					'valid' => $valid,
					'html'  => $html,
				)
			);
			wp_die();
		}

		/**
		 * Checkout timeline template.
		 *
		 * @since 1.5.0
		 */
		public static function checkout_timeline() {
			get_template_part( 'woocommerce/checkout/checkout-timeline' );
		}

		/**
		 * Change checkout template
		 *
		 * @since 1.5.0
		 */
		public function multistep_checkout( $template, $template_name, $template_path ) {

			if ( 'checkout/form-checkout.php' == $template_name ) {
				$template   = OCEANWP_THEME_DIR . '/woocommerce/checkout/form-multistep-checkout.php';
				$theme_file = get_stylesheet_directory() . '/woocommerce/checkout/form-multistep-checkout.php';

				if ( file_exists( $theme_file ) ) {
					$template = $theme_file;
				}
			}

			// Return
			return $template;

		}

		/**
		 * Checkout login form.
		 *
		 * @since 1.5.0
		 */
		public static function checkout_login_form( $login_message ) {
			woocommerce_login_form(
				array(
					'message'  => $login_message,
					'redirect' => wc_get_page_permalink( 'checkout' ),
					'hidden'   => false,
				)
			);

			// If WooCommerce social login
			if ( class_exists( 'WC_Social_Login' ) ) {
				do_shortcode( '[woocommerce_social_login_buttons]' );
			}
		}

		/**
		 * Support to WooCommerce secure submit gateway
		 *
		 * @since 1.5.0
		 */
		public static function woocommerce_securesubmit_support( $value, $options ) {
			$value['use_iframes'] = 'no';
			return $value;
		}

		/**
		 * Add typography options for the WooCommerce product title
		 *
		 * @since 1.0.0
		 */
		public static function typography_settings( $settings ) {
			$settings['woo_product_title'] = array(
				'label'    => esc_html__( 'WooCommerce Product Title', 'oceanwp' ),
				'target'   => '.woocommerce div.product .product_title',
				'defaults' => array(
					'font-size'      => '24',
					'color'          => '#333333',
					'line-height'    => '1.4',
					'letter-spacing' => '0.6',
				),
			);

			$settings['woo_product_price'] = array(
				'label'    => esc_html__( 'WooCommerce Product Price', 'oceanwp' ),
				'target'   => '.woocommerce div.product p.price',
				'defaults' => array(
					'font-size'      => '36',
					'line-height'    => '1',
					'letter-spacing' => '0',
				),
			);

			$settings['woo_single_add_to_cart'] = array(
				'label'    => esc_html__( 'WooCommerce Product Add To Cart', 'oceanwp' ),
				'target'   => '.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button',
				'exclude'  => array( 'font-color' ),
				'defaults' => array(
					'font-size'      => '12',
					'text-transform' => 'uppercase',
					'line-height'    => '1.5',
					'letter-spacing' => '1',
				),
			);

			$settings['woo_single_notice'] = array(
				'label'    => esc_html__( 'WooCommerce Product Notice', 'oceanwp' ),
				'target'   => '.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a',
				'exclude'  => array( 'font-color' ),
				'defaults' => array(
					'font-size'      => '18',
					'font-weight'    => '600',
					'text-transform' => 'capitalize',
					'line-height'    => '2',
					'letter-spacing' => '1.5',
				),
			);

			$settings['woo_archive_title'] = array(
				'label'    => esc_html__( 'WooCommerce Archive Title', 'oceanwp' ),
				'target'   => '.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a',
				'exclude'  => array( 'font-color' ),
				'defaults' => array(
					'font-size'      => '14',
					'line-height'    => '1.5',
					'letter-spacing' => '0',
				),
			);

			$settings['woo_archive_cats'] = array(
				'label'    => esc_html__( 'WooCommerce Archive Category', 'oceanwp' ),
				'target'   => '.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a',
				'exclude'  => array( 'font-color' ),
				'defaults' => array(
					'font-size'      => '12',
					'line-height'    => '1',
					'letter-spacing' => '0',
				),
			);

			$settings['woo_archive_price'] = array(
				'label'    => esc_html__( 'WooCommerce Archive Price', 'oceanwp' ),
				'target'   => '.woocommerce ul.products li.product .price',
				'exclude'  => array( 'font-color' ),
				'defaults' => array(
					'font-size'      => '18',
					'line-height'    => '1',
					'letter-spacing' => '0',
				),
			);

			$settings['woo_product_add_to_cart'] = array(
				'label'    => esc_html__( 'WooCommerce Archive Add To Cart', 'oceanwp' ),
				'target'   => '.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart',
				'exclude'  => array( 'font-color' ),
				'defaults' => array(
					'font-size'      => '12',
					'line-height'    => '1.5',
					'letter-spacing' => '1',
				),
			);

			$settings['woo_archive_notice'] = array(
				'label'    => esc_html__( 'WooCommerce Archive Notice', 'oceanwp' ),
				'target'   => '.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a',
				'exclude'  => array( 'font-color' ),
				'defaults' => array(
					'font-size'      => '16',
					'font-weight'    => '600',
					'text-transform' => 'capitalize',
					'line-height'    => '1',
					'letter-spacing' => '1',
				),
			);

			return $settings;
		}

		/**
		 * Supports WooCommerce Match Box extension by removing
		 * duplicate single product summary features on the
		 * product page.
		 *
		 * @since 1.2.9
		 * @static
		 * @author Sébastien Dumont
		 * @global object WC_Product $product
		 */
		public function remove_wc_match_box_single_product_summary() {
			global $product;

			if ( $product->is_type( 'mix-and-match' ) ) {
				remove_action( 'woocommerce_single_product_summary', array( $this, 'single_product_content' ), 10 );
				add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
			}
		}

		/**
		 * Compatibility with YITH WooCommerce Badge.
		 *
		 * @since 1.5.23
		 */
		public function yith_wcbm_shop_badge_container_start() {
			do_action( 'yith_wcbm_theme_badge_container_start' );
		}

		/**
		 * Compatibility with YITH WooCommerce Badge.
		 *
		 * @since 1.5.23
		 */
		public function yith_wcbm_shop_badge_container_end() {
			do_action( 'yith_wcbm_theme_badge_container_end' );
		}

		/**
		 * Compatibility with WooCommerce Germanized.
		 *
		 * @since 1.5.6
		 */
		public function woocommerce_germanized() {
			echo '<li class="wc-gzd">';
				wc_get_template( 'single-product/price-unit.php' );
				wc_get_template( 'single-product/tax-info.php' );
				wc_get_template( 'single-product/shipping-costs-info.php' );
				wc_get_template( 'single-product/delivery-time-info.php' );
				wc_get_template( 'single-product/units.php' );
			echo '</li>';
		}

		/**
		 * Compatibility with WooCommerce Germanized Single Product template.
		 *
		 * @since 2.0
		 */
		public function woocommerce_germanized_single() {
			echo '<div class="wc-gzd-single">';
				wc_get_template( 'single-product/price-unit.php' );
				wc_get_template( 'single-product/tax-info.php' );
				wc_get_template( 'single-product/shipping-costs-info.php' );
			echo '</div>';
		}

		/**
		 * Compatibility with WooCommerce Germanized Single Product meta template.
		 *
		 * @since 2.0
		 */
		public function woocommerce_germanized_single_meta() {
			echo '<div class="wc-gzd-single-meta">';
				wc_get_template( 'single-product/units.php' );
				wc_get_template( 'single-product/delivery-time-info.php' );
			echo '</div>';
		}
	}

}
new OceanWP_WooCommerce_Config();
