<?php
/**
 * Perform all main WooCommerce configurations for this theme
 *
 * @package OceanWP WordPress theme
 */

// Define global var for class
global $oceanwp_woocommerce_config;

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
			require_once( OCEANWP_INC_DIR .'woocommerce/woocommerce-helpers.php' );

			// These filters/actions must run on init
			add_action( 'init', array( $this, 'init' ) );

			// Register Woo sidebar
			add_filter( 'widgets_init', array( $this, 'register_woo_sidebar' ) );

			/*-------------------------------------------------------------------------------*/
			/* -  Front-End only actions/filters
			/*-------------------------------------------------------------------------------*/
			if ( ! is_admin() ) {

				// Display correct sidebar for products
				add_filter( 'ocean_get_sidebar', array( $this, 'display_woo_sidebar' ) );

				// Set correct post layouts
				add_filter( 'ocean_post_layout_class', array( $this, 'layouts' ) );

				// Disable WooCommerce main page title
				add_filter( 'woocommerce_show_page_title', '__return_false' );

				// Disable WooCommerce css
				add_filter( 'woocommerce_enqueue_styles', '__return_false' );

				// Show/hide category description
				add_filter( 'ocean_has_term_description_above_loop', array( $this, 'term_description_above_loop' ) );

				// Show/hide next/prev on products
				add_filter( 'ocean_has_next_prev', array( $this, 'next_prev' ) );

				// Define accents
				add_filter( 'ocean_primary_texts', array( $this, 'primary_texts' ) );
				add_filter( 'ocean_primary_borders', array( $this, 'primary_borders' ) );
				add_filter( 'ocean_primary_backgrounds', array( $this, 'primary_backgrounds' ) );
				add_filter( 'ocean_hover_primary_backgrounds', array( $this, 'hover_primary_backgrounds' ) );

				// Border colors
				add_filter( 'ocean_border_color_elements', array( $this, 'border_color_elements' ) );

			}

			// Main Woo Actions
			add_action( 'woocommerce_enqueue_styles', array( $this, 'remove_styles' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'remove_scripts' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'add_custom_css' ) );
			if ( get_theme_mod( 'ocean_woo_shop_result_count', true )
				|| get_theme_mod( 'ocean_woo_shop_sort', true )
				|| get_theme_mod( 'ocean_woo_grid_list', true ) ) {
				add_action( 'woocommerce_before_shop_loop', array( $this, 'add_shop_loop_div' ) );
			}
			if ( get_theme_mod( 'ocean_woo_grid_list', true ) ) {
				add_action( 'woocommerce_before_shop_loop', array( $this, 'grid_list_buttons' ), 10 );
			}
			if ( get_theme_mod( 'ocean_woo_shop_result_count', true )
				|| get_theme_mod( 'ocean_woo_shop_sort', true )
				|| get_theme_mod( 'ocean_woo_grid_list', true ) ) {
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
				add_action('woocommerce_before_customer_login_form', array( $this, 'oceanwp_login_wrap_before' ) );
				add_action('woocommerce_after_customer_login_form', array( $this, 'oceanwp_login_wrap_after' ) );
			}
			if ( get_theme_mod( 'ocean_woo_category_image', 'no' ) == 'yes' ) {
				add_action('woocommerce_archive_description', array( $this, 'woocommerce_category_image' ), 2 );
			}

			// Remove the single product summary content to add the sortable control
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
			add_action( 'woocommerce_single_product_summary', array( $this, 'single_product_content' ), 10 );

			// Main Woo Filters
			add_filter( 'wp_nav_menu_items', array( $this, 'menu_cart_icon' ) , 10, 2 );
			add_filter( 'add_to_cart_fragments', array( $this, 'menu_cart_icon_fragments' ) );
			add_filter( 'woocommerce_general_settings', array( $this, 'remove_general_settings' ) );
			add_filter( 'woocommerce_product_settings', array( $this, 'remove_product_settings' ) );
			add_filter( 'loop_shop_per_page', array( $this, 'loop_shop_per_page' ), 20 );
			add_filter( 'loop_shop_columns', array( $this, 'loop_shop_columns' ) );
			add_filter( 'woocommerce_output_related_products_args', array( $this, 'related_product_args' ) );
			add_filter( 'woocommerce_pagination_args', array( $this, 'pagination_args' ) );
			add_filter( 'woocommerce_continue_shopping_redirect', array( $this, 'continue_shopping_redirect' ) );
			add_filter( 'post_class', array( $this, 'add_product_entry_classes' ), 40, 3 );
			add_filter( 'product_cat_class', array( $this, 'product_cat_class' ) );

			// Add new typography settings
			add_filter( 'ocean_typography_settings', array( $this, 'typography_settings' ) );

			// WooCommerce Match Box extension single product layout support.
			add_action( 'woocommerce_match_box_single_product_layout', array( $this, 'remove_wc_match_box_single_product_summary' ), 10 );
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

			// Remove category descriptions, these are added already by the theme
			remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );

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

			// Remove loop product sale badge
			remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );

			// Remove loop product thumbnail function and add our own that pulls from template parts
			remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
			add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'loop_product_thumbnail' ), 10 );

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

			// Remove default product result/link/title/rating/price
			remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
			remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
			remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
			remove_action( 'woocommerce_before_subcategory', 'woocommerce_template_loop_category_link_open', 10 );
			remove_action( 'woocommerce_after_subcategory', 'woocommerce_template_loop_category_link_close', 10 );
			remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
			remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
			remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
			remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );

			if ( defined( 'ELEMENTOR_WOOSTORE__FILE__' ) ) {
				remove_action( 'woocommerce_after_shop_loop_item_title', 'woostore_output_product_excerpt', 35 );
				add_action( 'woocommerce_after_shop_loop_item', 'woostore_output_product_excerpt', 21 );
			}

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
			foreach( $settings as $key => $val ) {
				if ( isset( $val['id'] ) && in_array( $val['id'], $remove ) ) {
					unset( $settings[$key] );
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
				'woocommerce_enable_lightbox'
			);
			foreach( $settings as $key => $val ) {
				if ( isset( $val['id'] ) && in_array( $val['id'], $remove ) ) {
					unset( $settings[$key] );
				}
			}
			return $settings;
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
			register_sidebar( array (
				'name'          => esc_html__( 'WooCommerce Sidebar', 'oceanwp' ),
				'id'            => 'woo_sidebar',
				'before_widget' => '<div class="sidebar-box %2$s clr">',
				'after_widget'  => '</div>',
				'before_title'  => '<h4 class="widget-title">',
				'after_title'   => '</h4>',
			) );

		}

		/**
		 * Display WooCommerce sidebar.
		 *
		 * @since 1.0.0
		 */
		public static function display_woo_sidebar( $sidebar ) {

			// Alter sidebar display to show woo_sidebar where needed
			if ( get_theme_mod( 'ocean_woo_custom_sidebar', true ) && is_woocommerce() && is_active_sidebar( 'woo_sidebar' ) ) {
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
			if ( oceanwp_is_woo_shop() ) {
				$class = get_theme_mod( 'ocean_woo_shop_layout', 'left-sidebar' );
			} elseif ( oceanwp_is_woo_tax() ) {
				$class = get_theme_mod( 'ocean_woo_shop_layout', 'left-sidebar' );
			} elseif ( oceanwp_is_woo_single() ) {
				$class = get_theme_mod( 'ocean_woo_product_layout', 'left-sidebar' );
			}
			return $class;
		}

		/**
		 * Remove WooCommerce styles not needed for this theme.
		 *
		 * @since 1.0.0
		 * @link  http://docs.woothemes.com/document/disable-the-default-stylesheet/
		 */
		public static function remove_styles( $enqueue_styles ) {
			if ( is_array( $enqueue_styles ) ) {
				unset( $enqueue_styles['woocommerce-layout'] );
				unset( $enqueue_styles['woocommerce_prettyPhoto_css'] );
			}
			return $enqueue_styles;
		}

		/**
		 * Remove WooCommerce scripts.
		 *
		 * @since 1.0.0
		 */
		public static function remove_scripts() {
			wp_dequeue_style( 'woocommerce_prettyPhoto_css' );
			wp_dequeue_script( 'prettyPhoto' );
			wp_dequeue_script( 'prettyPhoto-init' );
		}

		/**
		 * Add Custom WooCommerce CSS.
		 *
		 * @since 1.0.0
		 */
		public static function add_custom_css() {

			// Register WooCommerce styles
			wp_enqueue_style( 'oceanwp-woocommerce', OCEANWP_CSS_DIR_URI .'woo/woocommerce.min.css' );
			wp_enqueue_style( 'oceanwp-woo-star-font', OCEANWP_CSS_DIR_URI .'woo/woo-star-font.min.css' );

			// If rtl
			if ( is_RTL() ) {
				wp_enqueue_style( 'oceanwp-woocommerce-rtl', OCEANWP_CSS_DIR_URI .'woo/woocommerce-rtl.css' );
			}

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

			$output = sprintf( '<nav class="oceanwp-grid-list"><a href="#" id="oceanwp-grid" title="%1$s" class="%2$sgrid-btn"><span class="icon-grid"></span></a><a href="#" id="oceanwp-list" title="%3$s" class="%4$slist-btn"><span class="icon-list"></span></a></nav>', esc_html( $grid_view ), esc_attr( $grid ), esc_html( $list_view ), esc_attr( $list ) );

			echo wp_kses_post( apply_filters( 'oceanwp_grid_list_buttons_output', $output) );
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
			if ( function_exists( 'wc_get_template' )
				&& ( oceanwp_is_woo_shop() || oceanwp_is_woo_tax() ) ) {
				wc_get_template( 'global/result-count.php' );
			}
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
				$label = esc_html__( 'Out of Stock', 'oceanwp' );  ?>
				<div class="outofstock-badge">
					<?php echo esc_html( apply_filters( 'ocean_woo_outofstock_text', $label ) ); ?>
				</div><!-- .product-entry-out-of-stock-badge -->
			<?php }
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
				wc_get_template( 'loop/thumbnail/'. $style .'.php' );
			}
		}

		/**
		 * Archive product content.
		 *
		 * @since 1.1.4
		 */
		public static function archive_product_content() {
			global $product, $post;

			echo '<ul class="woo-entry-inner clr">';

				// Get elements
				$elements = oceanwp_woo_product_elements_positioning();

				// Loop through elements
				foreach ( $elements as $element ) {

					// Image
					if ( 'image' == $element ) {

						echo '<li class="image-wrap">';
							do_action( 'ocean_before_archive_product_image' );
							self::add_out_of_stock_badge();
							woocommerce_show_product_loop_sale_flash();
							self::loop_product_thumbnail();
						echo '</li>';

					}

					// Category
					if ( 'category' == $element ) {

						do_action( 'ocean_before_archive_product_categories' );

						if ( version_compare( self::get_wc_version(), '2.7', '>=' ) ) {
							echo wp_kses_post( wc_get_product_category_list( $product->get_id(), ', ', '<li class="category">', '</li>' ) );
						} else {
							echo wp_kses_post( $product->get_categories( ', ', '<li class="category">', '</li>' ) );
						}

					}

					// Title
					if ( 'title' == $element ) {

						do_action( 'ocean_before_archive_product_title' );

						echo '<li class="title"><a href="'. esc_url( get_the_permalink() ) .'">'. get_the_title() .'</a></li>';

					}

					// Price/Rating
					if ( 'price-rating' == $element ) {

						do_action( 'ocean_before_archive_product_inner' );

						echo '<li class="inner">';
							do_action( 'ocean_before_archive_product_price' );
							woocommerce_template_loop_price();
							do_action( 'ocean_before_archive_product_rating' );
							woocommerce_template_loop_rating();
							do_action( 'ocean_after_archive_product_rating' );
						echo '</li>';

					}

					// Description
					if ( 'description' == $element ) {

						do_action( 'ocean_before_archive_product_description' );

						if ( ( oceanwp_is_woo_shop() || oceanwp_is_woo_tax() )
							&& get_theme_mod( 'ocean_woo_grid_list', true ) ) {
							$length = get_theme_mod( 'ocean_woo_list_excerpt_length', '60' );
							echo '<li class="woo-desc">';
								if ( ! $length ) {
									echo wp_kses_post( strip_shortcodes( $post->post_excerpt ) );
								} else {
									echo wp_kses_post( wp_trim_words( strip_shortcodes( $post->post_excerpt ), $length ) );
								}
							echo '</li>';
						}

					}

					// Add to cart button
					if ( 'button' == $element ) {

						do_action( 'ocean_before_archive_product_add_to_cart' );

						echo '<li class="btn-wrap clr">';
							woocommerce_template_loop_add_to_cart();
						echo '</li>';

						do_action( 'ocean_after_archive_product_add_to_cart' );

					}

				}

			echo '</ul>';

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

			// Get elements
			$elements = oceanwp_woo_summary_elements_positioning();

			// Loop through elements
			foreach ( $elements as $element ) {

				// Title
				if ( 'title' == $element ) {
					woocommerce_template_single_title();
				}

				// Rating
				if ( 'rating' == $element ) {
					woocommerce_template_single_rating();
				}

				// Price
				if ( 'price' == $element ) {
					woocommerce_template_single_price();
				}

				// Excerpt
				if ( 'excerpt' == $element ) {
					woocommerce_template_single_excerpt();
				}

				// Quantity & Add to cart button
				if ( 'quantity-button' == $element ) {
					woocommerce_template_single_add_to_cart();
				}

				// Meta
				if ( 'meta' == $element ) {
					woocommerce_template_single_meta();
				}

			}

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
					echo '<div class="image">'. get_avatar( $current_user->user_email, 128 ) .'</div>';
					echo '<div class="user-info">';
						echo '<p class="name">'. esc_attr( $name ) .'</p>';
						echo '<a class="logout" href="'. esc_url( wp_logout_url( get_permalink() ) ) .'">'. esc_html__( 'Logout', 'oceanwp' ) .'</a>';
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
			$term 			= get_term( $category->term_id, 'product_cat' );
			$description 	= $term->description;

			// Description
			if ( get_theme_mod( 'ocean_woo_grid_list', true )
				&& $description ) {
				echo '<div class="woo-desc">';
					echo '<div class="description">' . wp_kses_post( $description ) . '</div>';
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
			    $cat 			= $wp_query->get_queried_object();
			    $thumbnail_id 	= get_woocommerce_term_meta( $cat->term_id, 'thumbnail_id', true );
			    $image 			= wp_get_attachment_url( $thumbnail_id );

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
			$args['prev_text'] = '<i class="fa fa-angle-left"></i>';
			$args['next_text'] = '<i class="fa fa-angle-right"></i>';
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
		public static function add_product_entry_classes( $classes, $class = '', $post_id = '' ) {
			global $product, $woocommerce_loop;
			if ( $product && ! empty( $woocommerce_loop['columns'] ) ) {
				if ( $product->get_rating_count() ) {
					$classes[] = 'has-rating';
				}
				$classes[] = 'col';
				$classes[] = oceanwp_grid_class( $woocommerce_loop['columns'] );
			}
			return $classes;
		}

		/**
		 * Disables the next/previous links if disabled via the customizer.
		 *
		 * @since 1.0.0
		 */
		public static function next_prev( $return ) {
			if ( is_woocommerce() && is_singular( 'product' ) && ! get_theme_mod( 'ocean_woo_next_prev', true ) ) {
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
			return array_merge( array(
				'.woocommerce-MyAccount-navigation ul li a:before',
				'.woocommerce-checkout .woocommerce-info a',
				'.woocommerce-checkout #payment ul.payment_methods .wc_payment_method>input[type=radio]:first-child:checked+label:before',
				'.woocommerce-checkout #payment .payment_method_paypal .about_paypal',
				'.woocommerce ul.products li.product .category a:hover',
				'.woocommerce ul.products li.product .button:hover',
				'.woocommerce ul.products li.product .product-inner .added_to_cart:hover',
				'.product_meta .posted_in a:hover',
				'.product_meta .tagged_as a:hover',
				'.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover',
				'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a',
				'.woocommerce .oceanwp-grid-list a.active',
				'.woocommerce .oceanwp-grid-list a:hover',
			), $texts );
		}

		/**
		 * Adds border accents for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_borders( $borders ) {
			return array_merge( array(
				'#current-shop-items-dropdown' => array( 'top' ),
				'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a' => array( 'bottom' ),
				'.wcmenucart-details.count:before',
				'.woocommerce ul.products li.product .button:hover',
				'.woocommerce ul.products li.product .product-inner .added_to_cart:hover',
				'.woocommerce div.product .woocommerce-tabs ul.tabs li.active a',
				'.woocommerce .oceanwp-grid-list a.active',
				'.woocommerce .oceanwp-grid-list a:hover',
			), $borders );
		}

		/**
		 * Adds background accents for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function primary_backgrounds( $backgrounds ) {
			return array_merge( array(
				'.woocommerce div.product div.images .open-image',
				'.wcmenucart-details.count',
				'.woocommerce-message a',
				'.woocommerce-error a',
				'.woocommerce-info a',
				'.woocommerce .widget_price_filter .ui-slider .ui-slider-handle',
				'.woocommerce .widget_price_filter .ui-slider .ui-slider-range',
			), $backgrounds );
		}

		/**
		 * Adds background hover accents for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function hover_primary_backgrounds( $hover ) {
			return array_merge( array(
				'.woocommerce div.product div.images .open-image:hover',
				'.woocommerce-error a:hover',
				'.woocommerce-info a:hover',
				'.woocommerce-message a:hover',
			), $hover );
		}

		/**
		 * Adds border color elements for WooCommerce styles.
		 *
		 * @since 1.0.0
		 */
		public static function border_color_elements( $elements ) {
			return array_merge( array(
				'.woocommerce table.shop_table',
				'.woocommerce table.shop_table td',
				'.woocommerce-cart .cart-collaterals .cart_totals tr td',
				'.woocommerce-cart .cart-collaterals .cart_totals tr th',
				'.woocommerce table.shop_table tbody th',
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
				'.woocommerce-checkout form.checkout_coupon .checkout-coupon-inner',
				'.woocommerce-checkout-review-order-table tfoot th',
				'.woocommerce-checkout #payment',
				'.woocommerce ul.order_details',
				'.woocommerce #customer_login > div',
				'.woocommerce .oceanwp-loginform-wrap',
				'.woocommerce .lost_reset_password',
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
			), $elements );
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
		 * Adds cart icon to menu
		 *
		 * @since 1.0.0
		 */
		public static function menu_cart_icon( $items, $args ) {

			// Only used for the main menu
			if ( 'main_menu' != $args->theme_location ) {
				return $items;
			}

			// Get style
			$style 			= oceanwp_menu_cart_style();
			$header_style 	= oceanwp_header_style();

			// Return items if no style
			if ( ! $style ) {
				return $items;
			}

			// Return items if "hide if empty cart" is checked
			if ( true == get_theme_mod( 'ocean_woo_menu_icon_hide_if_empty', false )
				&& ! WC()->cart->cart_contents_count > 0 ) {
				return $items;
			}

			// Toggle class
			$toggle_class = 'toggle-cart-widget';

			// Define classes to add to li element
			$classes = array( 'woo-menu-icon' );

			// Add style class
			$classes[] = 'wcmenucart-toggle-'. $style;

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

			// Add cart link to menu items
			if ( 'full_screen' == $header_style ) {
				$items .= '<li class="woo-cart-link"><a href="'. esc_url( WC()->cart->get_cart_url() ) .'">'. esc_html__( 'Your cart', 'oceanwp' ) .'</a></li>';
			} else {
				$items .= '<li class="'. $classes .'">'. oceanwp_wcmenucart_menu_item() .'</li>';
			}

			// Return menu items
			return $items;
		}

		/**
		 * Add menu cart item to the Woo fragments so it updates with AJAX
		 *
		 * @since 1.0.0
		 */
		public static function menu_cart_icon_fragments( $fragments ) {
			$fragments['.wcmenucart'] = oceanwp_wcmenucart_menu_item();
			return $fragments;
		}

		/**
		 * Add typography options for the WooCommerce product title
		 *
		 * @since 1.0.0
		 */
		public static function typography_settings( $settings ) {
			$settings['woo_product_title'] = array(
				'label' 				=> esc_html__( 'WooCommerce Product Title', 'oceanwp' ),
				'target' 				=> '.woocommerce div.product .product_title',
				'defaults' 				=> array(
					'font-size' 		=> '24',
					'color' 			=> '#333333',
					'line-height' 		=> '1.4',
					'letter-spacing' 	=> '0.6',
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
		public static function remove_wc_match_box_single_product_summary() {
			global $product;

			if ( $product->is_type( 'mix-and-match' ) ) {
				remove_action( 'woocommerce_single_product_summary', array( $this, 'single_product_content' ), 10 );
				add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
			}
		}
	}

}

$oceanwp_woocommerce_config = new OceanWP_WooCommerce_Config();