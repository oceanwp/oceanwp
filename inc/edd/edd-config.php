<?php
/**
 * Perform all main EDD configurations for this theme
 *
 * @package OceanWP WordPress theme
 */

// Start and run class
if ( ! class_exists( 'OceanWP_EDD_Config' ) ) {

	class OceanWP_EDD_Config {

		/**
		 * Main Class Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {

			// Include helper functions
			require_once( OCEANWP_INC_DIR .'edd/edd-helpers.php' );

			// These filters/actions must run on init
			add_action( 'init', array( $this, 'init' ) );

			// Body classes
			add_filter( 'body_class', array( $this, 'body_class' ) );

			// Register Woo sidebar
			add_filter( 'widgets_init', array( $this, 'register_edd_sidebar' ) );

			// Define accents
			add_filter( 'ocean_primary_texts', array( $this, 'primary_texts' ) );
			add_filter( 'ocean_primary_borders', array( $this, 'primary_borders' ) );
			add_filter( 'ocean_primary_backgrounds', array( $this, 'primary_backgrounds' ) );
			add_filter( 'ocean_hover_primary_backgrounds', array( $this, 'hover_primary_backgrounds' ) );

			add_action( 'ocean_main_metaboxes_post_types', array( $this, 'add_metabox' ), 20 );


			/*-------------------------------------------------------------------------------*/
			/* -  Front-End only actions/filters
			/*-------------------------------------------------------------------------------*/
			if ( ! is_admin() ) {

				// Remove default wrappers and add new ones
				remove_action( 'edd_before_main_content', 'edd_output_content_wrapper', 10 );
				remove_action( 'edd_after_main_content', 'edd_output_content_wrapper_end', 10 );
				add_action( 'edd_before_main_content', array( $this, 'content_wrapper' ), 10 );
				add_action( 'edd_after_main_content', array( $this, 'content_wrapper_end' ), 10 );

				// Display correct sidebar for products
				remove_action( 'edd_sidebar', 'edd_get_sidebar', 10 );
				add_filter( 'ocean_get_sidebar', array( $this, 'display_edd_sidebar' ) );

				// Set correct post layouts
				add_filter( 'ocean_post_layout_class', array( $this, 'layouts' ) );

				// Set correct both sidebars layout style
				add_filter( 'ocean_both_sidebars_style', array( $this, 'bs_class' ) );

				// Disable EDD main page title
				add_filter( 'edd_show_page_title', '__return_false' );

				// Disable EDD css
				add_filter( 'edd_enqueue_styles', '__return_false' );

				// Border colors
				add_filter( 'ocean_border_color_elements', array( $this, 'border_color_elements' ) );

			}

			// Main Woo Actions
			add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_scripts' ) );
			add_filter( 'ocean_localize_array', array( $this, 'localize_array' ) );

			// Add cart overlay
			if ( 'yes' == get_theme_mod( 'ocean_edd_display_cart_product_added', 'no' ) ) {
				add_action( 'ocean_after_footer', array( $this, 'cart_overlay' ), 99 );
			}

			// Add product navigation
			if ( true == get_theme_mod( 'ocean_edd_display_navigation', true ) ) {
				add_action( 'edd_before_single_product_summary', array( $this, 'product_next_prev_nav' ), 10 );
			}

			// Main Woo Filters
			add_filter( 'wp_nav_menu_items', array( $this, 'menu_cart_icon' ) , 10, 2 );
			add_filter( 'post_class', array( $this, 'add_download_classes' ), 40, 3 );

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
			if ( true == get_theme_mod( 'ocean_edd_multi_step_checkout', false ) ) {

				// Add checkout timeline template
	            add_action( 'edd_before_checkout_form', array( $this, 'checkout_timeline' ), 10 );

				// Change checkout template
	            add_filter( 'edd_locate_template', array( $this, 'multistep_checkout' ), 10, 3 );

	            // Checkout hack
	            remove_action( 'edd_checkout_order_review', 'edd_order_review', 10 );
            	remove_action( 'edd_checkout_order_review', 'edd_checkout_payment', 20 );
	            remove_action( 'edd_before_checkout_form', 'edd_checkout_login_form', 10 );
	            remove_action( 'edd_before_checkout_form', 'edd_checkout_coupon_form', 10 );
	            add_action( 'ocean_edd_checkout_order_review', 'edd_order_review', 20 );
            	add_action( 'ocean_edd_checkout_payment', 'edd_checkout_payment', 10 );
	            add_action( 'ocean_checkout_login_form', array( $this, 'checkout_login_form' ), 10 );
	            add_action( 'ocean_edd_checkout_coupon', 'edd_checkout_coupon_form', 10 );

	            // Prevent empty shipping tab
	            add_filter( 'edd_enable_order_notes_field', '__return_true' );

	        }

			// Add new typography settings
			add_filter( 'ocean_typography_settings', array( $this, 'typography_settings' ) );

			// EDD Match Box extension single product layout support.
			add_action( 'edd_match_box_single_product_layout', array( $this, 'remove_wc_match_box_single_product_summary' ), 10 );
		} // End __construct

		/*-------------------------------------------------------------------------------*/
		/* -  Start Class Functions
		/*-------------------------------------------------------------------------------*/

		/**
		 * Runs on Init.
		 * You can't remove certain actions in the constructor because it's too early.
		 *
		 * @since 1.0.0
		 */
		public function init() {

			// Remove EDD breadcrumbs
			remove_action( 'edd_before_main_content', 'edd_breadcrumb', 20, 0 );

			// Remove related products if is set to no
			if ( 'on' != get_theme_mod( 'ocean_edd_display_related_items', 'on' ) ) {
				remove_action( 'edd_after_single_product_summary', 'edd_output_related_products', 20 );
			}

			// Remove orderby if disabled
			if ( ! get_theme_mod( 'ocean_edd_archive_sort', true ) ) {
				remove_action( 'edd_before_shop_loop', 'edd_catalog_ordering', 30 );
			}
		}

		/**
		 * Body classes
		 *
		 * @since 1.5.0
		 */
		public static function body_class( $classes ) {

			// Distraction free class
			// if ( ( is_cart()
			// 		&& true == get_theme_mod( 'ocean_edd_distraction_free_cart', false ) )
			// 	|| ( is_checkout()
			// 		&& true == get_theme_mod( 'ocean_edd_distraction_free_checkout', false ) ) ) {
			// 	$classes[] = 'distraction-free';
			// }

			// Return
 			return $classes;
			
		}

		/**
		 * Register new EDD sidebar.
		 *
		 * @since 1.0.0
		 */
		public static function register_edd_sidebar() {

			// Return if custom sidebar disabled
			if ( ! get_theme_mod( 'ocean_edd_custom_sidebar', true ) ) {
				return;
			}

			// Register new edd_sidebar widget area
			register_sidebar( array (
				'name'          => esc_html__( 'EDD Sidebar', 'oceanwp' ),
				'id'            => 'edd_sidebar',
				'before_widget' => '<div id="%1$s" class="sidebar-box %2$s clr">',
				'after_widget'  => '</div>',
				'before_title'  => '<h4 class="widget-title">',
				'after_title'   => '</h4>',
			) );

		}

		/**
		 * Display EDD sidebar.
		 *
		 * @since 1.0.0
		 */
		public static function display_edd_sidebar( $sidebar ) {

			// Alter sidebar display to show edd_sidebar where needed
			// @todo check if the page is EDD
			if ( get_theme_mod( 'ocean_edd_custom_sidebar', true )
				&& is_active_sidebar( 'edd_sidebar' )
				&& oceanwp_is_edd_page() ) {
				$sidebar = 'edd_sidebar';
			}

			// Return correct sidebar
			return $sidebar;

		}

		/**
		 * Tweaks the post layouts for EDD archives and single product posts.
		 *
		 * @since 1.0.0
		 */
		public static function layouts( $class ) {
			if ( 
				is_post_type_archive( 'download' ) ||
				is_tax( 'download_category' ) ||
				is_tax( 'download_tag' ) ) {
				$class = get_theme_mod( 'ocean_edd_archive_layout', 'left-sidebar' );
			} elseif ( is_singular( 'download' ) ) {
				$class = get_theme_mod( 'ocean_edd_product_layout', 'left-sidebar' );
			}
			return $class;
		}

		/**
		 * Set correct both sidebars layout style.
		 *
		 * @since 1.4.0
		 */
		public static function bs_class( $class ) {
			if ( 
				is_post_type_archive( 'download' ) ||
				is_tax( 'download_category' ) ||
				is_tax( 'download_tag' ) ) {
				$class = get_theme_mod( 'ocean_edd_archive_both_sidebars_style', 'scs-style' );
			} elseif ( is_singular( 'download' ) ) {
				$class = get_theme_mod( 'ocean_edd_product_both_sidebars_style', 'scs-style' );
			}
			return $class;
		}

		/**
		 * Add Custom EDD scripts.
		 *
		 * @since 1.0.0
		 */
		public static function add_custom_scripts() {

			wp_enqueue_style( 'oceanwp-edd', OCEANWP_CSS_DIR_URI .'edd/edd.min.css' );

			// If display cart when product added
			if ( 'yes' == get_theme_mod( 'ocean_edd_display_cart_product_added', 'no' ) ) {
				wp_enqueue_script( 'oceanwp-edd-display-cart', OCEANWP_JS_DIR_URI .'third/edd/edd-display-cart.min.js', array( 'jquery' ), OCEANWP_THEME_VERSION, true );
			}
		}

		/**
		 * Localize array.
		 *
		 * @since 1.5.0
		 */
		public static function localize_array( $array ) {

			// If quick view
			if ( get_theme_mod( 'ocean_edd_quick_view', true ) ) {
				$array['ajax_url'] = admin_url( 'admin-ajax.php' );
			}

			// If single product ajax add to cart
			if ( true == get_theme_mod( 'ocean_edd_product_ajax_add_to_cart', false ) ) {
				$array['ajax_url'] 			= admin_url( 'admin-ajax.php' );
				$array['is_cart'] 			= is_cart();
				$array['cart_url'] 			= apply_filters( 'ocean_edd_add_to_cart_redirect', wc_get_cart_url() );
				$array['view_cart'] 		= esc_attr__( 'View cart', 'oceanwp' );
			}

			// If multi step checkout
			if ( true == get_theme_mod( 'ocean_edd_multi_step_checkout', false ) ) {
				$array['login_reminder_enabled'] = 'yes' == get_option( 'edd_enable_checkout_login_reminder', 'yes' ) ? true : false;
				$array['is_logged_in'] 		 	 = is_user_logged_in();
				$array['no_account_btn'] 		 = esc_html__( 'I don&rsquo;t have an account', 'oceanwp' );
				$array['next'] 		 			 = esc_html__( 'Next', 'oceanwp' );
			}

			return $array;

		}

		/**
		 * Get current user ID.
		 *
		 * @since 1.5.0
		 */
		public static function isAuthorizedUser() {
			return get_current_user_id();
		}

		/**
		 * Add cart overlay.
		 *
		 * @since 1.5.0
		 */
		public static function cart_overlay() { ?>
			<div class="owp-cart-overlay"></div>
		<?php
		}

		/**
		 * Register off canvas filter sidebar.
		 *
		 * @since 1.5.0
		 */
		public static function register_off_canvas_sidebar() {

			register_sidebar( array (
				'name'          => esc_html__( 'Off-Canvas Filters', 'oceanwp' ),
				'description'   => esc_html__( 'Widgets in this area are used in the off canvas sidebar. To enable the Off Canvas filter, go to the EDD > Archives section of the customizer and enable the Display Filter Button option.', 'oceanwp' ),
				'id'            => 'owp_off_canvas_sidebar',
				'before_widget' => '<div id="%1$s" class="sidebar-box %2$s clr">',
				'after_widget'  => '</div>',
				'before_title'  => '<h4 class="widget-title">',
				'after_title'   => '</h4>',
			) );

		}

		/**
		 * Add product navigation.
		 *
		 * @since 1.5.0
		 */
		public static function product_next_prev_nav() {
			global $post;

			$next_post = get_next_post( true, '', 'download_category' );
			$prev_post = get_previous_post( true, '', 'download_category' ); ?>

			<div class="owp-product-nav-wrap">
				<ul class="owp-product-nav">
			        <?php
			        if ( is_a( $next_post , 'WP_Post' ) ) { ?>
						<li>
							<a href="<?php echo get_the_permalink( $next_post->ID ); ?>" class="owp-nav-link next" rel="next"><i class="fa fa-angle-left"></i></a>
							<div class="owp-nav-thumb">
								<a title="<?php echo get_the_title( $next_post->ID ); ?>" href="<?php echo get_the_permalink( $next_post->ID ); ?>"><?php echo get_the_post_thumbnail( $next_post->ID, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ) ); ?></a>
							</div>
						</li>
					<?php
					}

					if ( is_a( $prev_post , 'WP_Post' ) ) { ?>
						<li>
							<a href="<?php echo get_the_permalink( $prev_post->ID ); ?>" class="owp-nav-link prev" rel="next"><i class="fa fa-angle-right"></i></a>
							<div class="owp-nav-thumb">
								<a title="<?php echo get_the_title( $prev_post->ID ); ?>" href="<?php echo get_the_permalink( $prev_post->ID ); ?>"><?php echo get_the_post_thumbnail( $prev_post->ID, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ) ); ?></a>
							</div>
						</li>
					<?php
					} ?>
		        </ul>
		    </div>

		<?php
		}

		/**
		 * Add classes to EDD product entries.
		 *
		 * @since 1.0.0
		 */
		public static function add_download_classes( $classes ) {
			if (
				! is_singular( 'download' ) &&
				! is_post_type_archive( 'download' ) &&
				! is_tax( 'download_category' ) &&
				! is_tax( 'download_tag' )
			) {
				return $classes;
			}

			// Vars
			$content_alignment 	= get_theme_mod( 'ocean_edd_product_entry_content_alignment', 'center' );
			$content_alignment 	= $content_alignment ? $content_alignment : 'center';

			$classes[] = 'col';
			$classes[] = oceanwp_grid_class( get_theme_mod( 'ocean_edd_archive_columns', 3 ) );
			$classes[] = 'owp-content-'. $content_alignment;

			return $classes;
		}

		/**
		 * Add the OceanWP Settings metabox into the custom post types
		 *
		 * @since 1.0.0
		 */
		public static function add_metabox( $types ) {
			$types[] = 'download';
			return $types;
		}

		/**
		 * Adds color accents for EDD styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_texts( $texts ) {
			return array_merge( array(
				'.edd-MyAccount-navigation ul li a:before',
				'.edd-checkout .edd-info a',
				'.edd-checkout #payment ul.payment_methods .wc_payment_method>input[type=radio]:first-child:checked+label:before',
				'.edd-checkout #payment .payment_method_paypal .about_paypal',
				'.edd ul.products li.product .category a:hover',
				'.edd ul.products li.product .button:hover',
				'.edd ul.products li.product .product-inner .added_to_cart:hover',
				'.product_meta .posted_in a:hover',
				'.product_meta .tagged_as a:hover',
				'.edd div.product .edd-tabs ul.tabs li a:hover',
				'.edd div.product .edd-tabs ul.tabs li.active a',
				'.edd .oceanwp-grid-list a.active',
				'.edd .oceanwp-grid-list a:hover',
				'.edd .oceanwp-off-canvas-filter:hover',
				'.edd .widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover',
				'.widget_product_categories li a:hover ~ .count',
				'.widget_layered_nav li a:hover ~ .count',
			), $texts );
		}

		/**
		 * Adds border accents for EDD styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_borders( $borders ) {
			return array_merge( array(
				'.current-shop-items-dropdown' => array( 'top' ),
				'.edd div.product .edd-tabs ul.tabs li.active a' => array( 'bottom' ),
				'.wcmenucart-details.count:before',
				'.edd ul.products li.product .button:hover',
				'.edd ul.products li.product .product-inner .added_to_cart:hover',
				'.edd div.product .edd-tabs ul.tabs li.active a',
				'.edd .oceanwp-grid-list a.active',
				'.edd .oceanwp-grid-list a:hover',
				'.edd .oceanwp-off-canvas-filter:hover',
				'.owp-product-nav li a.owp-nav-link:hover',
				'.widget_shopping_cart_content .buttons .button:first-child:hover',
				'.edd .widget_shopping_cart ul.cart_list li .owp-grid-wrap .owp-grid a.remove:hover',
				'.widget_product_categories li a:hover ~ .count',
				'.edd .widget_product_categories li.current-cat a ~ .count',
				'.edd .widget_product_categories li.current-cat a:before',
				'.widget_layered_nav li a:hover ~ .count',
				'.edd .widget_layered_nav li.chosen a ~ .count',
				'.edd .widget_layered_nav li.chosen a:before',
				'#owp-checkout-timeline.arrow .active .timeline-wrapper:before' => array( 'top', 'bottom' ),
				'#owp-checkout-timeline.arrow .active .timeline-wrapper:after' => array( 'left', 'right' ),
				'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count',
				'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count:after',
				'.show-cart .wcmenucart-cart-icon .wcmenucart-count',
				'.show-cart .wcmenucart-cart-icon .wcmenucart-count:after',
			), $borders );
		}

		/**
		 * Adds background accents for EDD styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_backgrounds( $backgrounds ) {
			return array_merge( array(
				'.edd div.product div.images .open-image',
				'.wcmenucart-details.count',
				'.edd-message a',
				'.edd-error a',
				'.edd-info a',
				'.edd .widget_price_filter .ui-slider .ui-slider-handle',
				'.edd .widget_price_filter .ui-slider .ui-slider-range',
				'.owp-product-nav li a.owp-nav-link:hover',
				'.edd div.product.owp-tabs-layout-vertical .edd-tabs ul.tabs li a:after',
				'.edd .widget_product_categories li.current-cat a ~ .count',
				'.edd .widget_product_categories li.current-cat a:before',
				'.edd .widget_layered_nav li.chosen a ~ .count',
				'.edd .widget_layered_nav li.chosen a:before',
				'#owp-checkout-timeline .active .timeline-wrapper',
				'.bag-style:hover .wcmenucart-cart-icon .wcmenucart-count',
				'.show-cart .wcmenucart-cart-icon .wcmenucart-count',
			), $backgrounds );
		}

		/**
		 * Adds background hover accents for EDD styles.
		 *
		 * @since 1.0.0
		 */
		public static function hover_primary_backgrounds( $hover ) {
			return array_merge( array(
				'.edd div.product div.images .open-image:hover',
				'.edd-error a:hover',
				'.edd-info a:hover',
				'.edd-message a:hover',
			), $hover );
		}

		/**
		 * Adds border color elements for EDD styles.
		 *
		 * @since 1.0.0
		 */
		public static function border_color_elements( $elements ) {
			return array_merge( array(
				'.edd table.shop_table',
				'.edd table.shop_table td',
				'.edd-cart .cart-collaterals .cart_totals tr td',
				'.edd-cart .cart-collaterals .cart_totals tr th',
				'.edd table.shop_table tth',
				'.edd table.shop_table tfoot td',
				'.edd table.shop_table tfoot th',
				'.edd .order_details',
				'.edd .shop_table.order_details tfoot th',
				'.edd .shop_table.customer_details th',
				'.edd .cart-collaterals .cross-sells',
				'.edd-page .cart-collaterals .cross-sells',
				'.edd .cart-collaterals .cart_totals',
				'.edd-page .cart-collaterals .cart_totals',
				'.edd .cart-collaterals h2',
				'.edd .cart-collaterals h2',
				'.edd .cart-collaterals h2',
				'.edd-cart .cart-collaterals .cart_totals .order-total th',
				'.edd-cart .cart-collaterals .cart_totals .order-total td',
				'.edd ul.order_details',
				'.edd .shop_table.order_details tfoot th',
				'.edd .shop_table.customer_details th',
				'.edd .edd-checkout #customer_details h3',
				'.edd .edd-checkout h3#order_review_heading',
				'.edd-checkout #payment ul.payment_methods',
				'.edd-checkout form.login',
				'.edd-checkout form.checkout_coupon',
				'.edd-checkout-review-order-table tfoot th',
				'.edd-checkout #payment',
				'.edd ul.order_details',
				'.edd #customer_login > div',
				'.edd .col-1.address',
				'.edd .col-2.address',
				'.edd-checkout .edd-info',
				'.edd div.product form.cart',
				'.product_meta',
				'.edd div.product .edd-tabs ul.tabs',
				'.edd #reviews #comments ol.commentlist li .comment_container',
				'p.stars span a',
				'.edd ul.product_list_widget li',
				'.edd .widget_shopping_cart .cart_list li',
				'.edd.widget_shopping_cart .cart_list li',
				'.edd ul.product_list_widget li:first-child',
				'.edd .widget_shopping_cart .cart_list li:first-child',
				'.edd.widget_shopping_cart .cart_list li:first-child',
				'.widget_product_categories li a',
				'.edd .oceanwp-toolbar',
				'.edd .products.list .product',
			), $elements );
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
			$style 			= oceanwp_edd_menu_cart_style();
			$header_style 	= oceanwp_header_style();

			// Return items if no style
			if ( ! $style ) {
				return $items;
			}

			// Return items if "hide if empty cart" is checked
			if ( true == get_theme_mod( 'ocean_edd_menu_icon_hide_if_empty', false )
				&& ! count( edd_get_cart_quantity() ) > 0 ) {
				return $items;
			}

			// Add cart link to menu items
			if ( 'full_screen' == $header_style ) {
				$items .= '<li class="edd-cart-link"><a href="'. edd_get_checkout_uri() .'">'. esc_html__( 'Your cart', 'oceanwp' ) .'</a></li>';
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
			$style = oceanwp_edd_menu_cart_style();
			$header_style = oceanwp_header_style();
			$cart_style = get_theme_mod( 'ocean_edd_cart_dropdown_style', 'compact' );

			// Toggle class
			$toggle_class = 'toggle-cart-widget';

			// Define classes to add to li element
			$classes = array( 'edd-menu-icon' );

			// Add style class
			$classes[] = 'eddmenucart-toggle-'. $style;

			// If bag style
			if ( 'yes' == get_theme_mod( 'ocean_edd_menu_bag_style', 'no' ) ) {
				$classes[] = 'bag-style';
			}

			// Cart style
			if ( 'compact' != $cart_style ) {
				$classes[] = $cart_style;
			}

			// Prevent clicking on cart and checkout
			if ( 'custom_link' != $style ) {
				$classes[] = 'nav-no-click';
			}

			// Add toggle class
			else {
				$classes[] = $toggle_class;
			}

			// Turn classes into string
			$classes = implode( ' ', $classes );

			ob_start(); ?>

			<li class="<?php echo esc_attr( $classes ); ?>">
				<?php oceanwp_eddmenucart_menu_item(); ?>
				<?php
				if ( 'drop_down' == $style
					&& 'full_screen' != $header_style
					&& 'vertical' != $header_style ) { ?>
					<div class="current-shop-items-dropdown owp-mini-cart clr">
						<div class="current-shop-items-inner clr">
							<?php the_widget( 'edd_cart_widget', 'title=' ); ?>
						</div>
					</div>
				<?php } ?>
			</li>

			<?php
			return ob_get_clean();

		}

		/**
		 * Distraction free on cart/checkout
		 *
		 * @since 1.5.0
		 */
		public static function distraction_free( $return ) {

			// if ( ( is_cart()
			// 		&& true == get_theme_mod( 'ocean_edd_distraction_free_cart', false ) )
			// 	|| ( is_checkout()
			// 		&& true == get_theme_mod( 'ocean_edd_distraction_free_checkout', false ) ) ) {
			// 	$return = false;
			// }

			// Return
			return $return;
			
		}

		/**
		 * Checkout timeline template.
		 *
		 * @since 1.5.0
		 */
		public static function checkout_timeline() {
			//get_template_part( 'edd/checkout/checkout-timeline' );
		}

		/**
		 * Change checkout template
		 *
		 * @since 1.5.0
		 */
		public static function multistep_checkout( $template, $template_name, $template_path ) {

			if ( 'checkout/form-checkout.php' == $template_name ) {
                $template = OCEANWP_THEME_DIR . '/edd/checkout/form-multistep-checkout.php';
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
			edd_login_form(
				array(
					'message'  => $login_message,
					'redirect' => wc_get_page_permalink( 'checkout' ),
					'hidden'   => false
				)
			);

			// If EDD social login
			if ( class_exists( 'WC_Social_Login' ) ) {
                do_shortcode( '[edd_social_login_buttons]' );
            }
		}

		/**
		 * Add typography options for the EDD product title
		 *
		 * @since 1.0.0
		 */
		public static function typography_settings( $settings ) {
			$settings['edd_product_title'] = array(
				'label' 				=> esc_html__( 'EDD Product Title', 'oceanwp' ),
				'target' 				=> '.edd div.product .product_title',
				'defaults' 				=> array(
					'font-size' 		=> '24',
					'color' 			=> '#333333',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
				),
			);

			$settings['edd_product_price'] = array(
				'label' 				=> esc_html__( 'EDD Product Price', 'oceanwp' ),
				'target' 				=> '.edd div.product p.price',
				'defaults' 				=> array(
					'font-size' 		=> '36',
					'line-height' 		=> '1',
					'letter-spacing' 	=> '0',
				),
			);

			$settings['edd_product_add_to_cart'] = array(
				'label'                 => esc_html__( 'EDD Product Add To Cart', 'oceanwp' ),
				'target'                => '.edd ul.products li.product .button, .edd ul.products li.product .product-inner .added_to_cart',
				'exclude' 				=> array( 'font-color' ),
				'defaults'              => array(
					'font-size'         => '12',
					'line-height'       => '1.5',
					'letter-spacing'    => '1',
				),
			);

			return $settings;
		}
	}

}
new OceanWP_EDD_Config();