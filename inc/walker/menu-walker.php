<?php
/**
 * Custom wp_nav_menu walker.
 *
 * @package OceanWP WordPress theme
 */

if ( ! class_exists( 'OceanWP_Custom_Nav_Walker' ) ) {
	class OceanWP_Custom_Nav_Walker extends Walker_Nav_Menu {
		/**
		 * Middle logo menu breaking point
		 *
		 * @access  private
		 * @var init
		 */
		private $break_point = null;

		/**
		 * Middle logo menu number of top level items displayed
		 *
		 * @access  private
		 * @var init
		 */
		private $displayed = 0;

		/**
		 * Menu context.
		 *
		 * @var string
		 */
		private $context = 'default';

		private $submenu_controls_enabled = false;

		/**
		 * Whether semantic submenu toggle controls should be output.
		 *
		 * @var bool
		 */
		private $semantic_submenu_toggles = false;

		private $submenu_dropdown_target = 'link';

		/**
		 * Submenu IDs indexed by depth.
		 *
		 * @var array
		 */
		private $submenu_ids = array();

		/**
		 * Constructor.
		 *
		 * @param array $args Walker args.
		 */
		public function __construct( $args = array() ) {
			$args = wp_parse_args(
				$args,
				array(
					'context'                  => 'default',
					'submenu_controls_enabled' => false,
					'semantic_submenu_toggles' => false,
					'submenu_dropdown_target'  => 'icon',
				)
			);

			$this->context                  = sanitize_html_class( $args['context'] );
			$this->submenu_controls_enabled = (bool) $args['submenu_controls_enabled'];
			$this->semantic_submenu_toggles = (bool) $args['semantic_submenu_toggles'];
			$this->submenu_dropdown_target  = in_array( $args['submenu_dropdown_target'], array( 'link', 'icon', 'auto' ), true )
				? $args['submenu_dropdown_target']
				: 'link';
		}

		private function has_submenu_controls() {
			return $this->submenu_controls_enabled;
		}

		/**
		 * Check whether this walker instance is rendering a mobile menu.
		 *
		 * Mobile menus should keep legacy category menu behavior: category
		 * items with "Display Latest Posts" remain normal category links.
		 * The generated latest-posts megamenu is desktop navigation only.
		 *
		 * @return bool
		 */
		private function is_mobile_menu_context() {
			return in_array(
				$this->context,
				array(
					'mobile-dropdown',
					'mobile-fullscreen',
				),
				true
			);
		}

		/**
		 * Starts the list before the elements are added.
		 *
		 * @since 3.0.0
		 *
		 * @see Walker::start_lvl()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param int      $depth  Depth of menu item. Used for padding.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 */
		public function start_lvl( &$output, $depth = 0, $args = null ) {
			$indent = str_repeat( "\t", $depth );

			$classes = array( 'sub-menu' );

			// Megamenu columns.
			$col = ! empty( $this->megamenu_col ) ? ( 'col-' . $this->megamenu_col ) : 'col-2';

			if ( $depth === 0 && $this->megamenu != '' && 'full_screen' != oceanwp_header_style() && 'vertical' != oceanwp_header_style() ) {
				$classes = array( 'megamenu', $col, 'sub-menu' );
			}

			$atts = array(
				'class' => implode( ' ', $classes ),
			);

			if ( $this->has_submenu_controls() && ! empty( $this->submenu_ids[ $depth ] ) ) {
				$atts['id'] = $this->submenu_ids[ $depth ];
			}

			$output .= "\n$indent<ul" . $this->build_html_atts( $atts ) . ">\n";
		}

		/**
		 * Starts the element output.
		 *
		 * @since 3.0.0
		 * @since 4.4.0 The {@see 'nav_menu_item_args'} filter was added.
		 *
		 * @see Walker::start_el()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param WP_Post  $item   Menu item data object.
		 * @param int      $depth  Depth of menu item. Used for padding.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 * @param int      $id     Current item ID.
		 */
		public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
			$args = (object) $args;

			global $wp_query;
			$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

			// Set some vars
			if ( $depth === 0 ) {
				$this->megamenu            = get_post_meta( $item->ID, '_menu_item_megamenu', true );
				$this->megamenu_auto_width = get_post_meta( $item->ID, '_menu_item_megamenu_auto_width', true );
				$this->megamenu_col        = get_post_meta( $item->ID, '_menu_item_megamenu_col', true );
				$this->megamenu_heading    = get_post_meta( $item->ID, '_menu_item_megamenu_heading', true );
			}

			// Set up empty variable.
			$class_names = '';

			$classes   = empty( $item->classes ) ? array() : (array) $item->classes;
			$classes[] = 'menu-item-' . $item->ID;

			// Mega menu and Hide headings
			if ( $depth === 0 && $this->has_children && 'vertical' != oceanwp_header_style() ) {
				if ( $this->megamenu != '' && $this->megamenu_auto_width == '' ) {
					$classes[] = 'megamenu-li full-mega';
				} elseif ( $this->megamenu != '' && $this->megamenu_auto_width != '' ) {
					$classes[] = 'megamenu-li auto-mega';
				}

				if ( $this->megamenu != '' && $this->megamenu_heading != '' ) {
					$classes[] = 'hide-headings';
				}
			}

			// Latest posts category megamenu is desktop navigation only.
			if (
				isset( $item->category_post )
				&& $item->category_post != ''
				&& $item->object == 'category'
				&& 'vertical' != oceanwp_header_style()
				&& ! $this->is_mobile_menu_context()
			) {
				$classes[] = 'menu-item-has-children megamenu-li full-mega mega-cat';
			}

			// Nav no click
			if ( ! empty( $item->nolink ) ) {
				$classes[] = 'nav-no-click';
			}

			/**
			 * Filters the arguments for a single nav menu item.
			 *
			 * @since 4.4.0
			 *
			 * @param stdClass $args  An object of wp_nav_menu() arguments.
			 * @param WP_Post  $item  Menu item data object.
			 * @param int      $depth Depth of menu item. Used for padding.
			 */
			$args = apply_filters( 'nav_menu_item_args', $args, $item, $depth );

			$has_children = ! empty( $args->has_children );
			$submenu_id   = '';

			$use_submenu_control = (
				$this->has_submenu_controls()
				&& $has_children
			);

			if ( $use_submenu_control ) {
				$submenu_id                   = 'oceanwp-sub-menu-' . absint( $item->ID );
				$this->submenu_ids[ $depth ] = $submenu_id;

				$classes[] = 'oceanwp-has-submenu-toggle';
				$classes[] = 'oceanwp-has-accessible-toggle'; // Keep current a11y CSS working.
				$classes[] = 'oceanwp-dropdown-target-' . $this->submenu_dropdown_target;
				$classes[] = $this->semantic_submenu_toggles
					? 'oceanwp-submenu-trigger-button'
					: 'oceanwp-submenu-trigger-link';
			}

			/**
			 * Filters the CSS class(es) applied to a menu item's list item element.
			 *
			 * @since 3.0.0
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param array    $classes The CSS classes that are applied to the menu item's `<li>` element.
			 * @param WP_Post  $item    The current menu item.
			 * @param stdClass $args    An object of wp_nav_menu() arguments.
			 * @param int      $depth   Depth of menu item. Used for padding.
			 */
			$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
			$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

			/**
			 * Filters the ID applied to a menu item's list item element.
			 *
			 * @since 3.0.1
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param string   $menu_id The ID that is applied to the menu item's `<li>` element.
			 * @param WP_Post  $item    The current menu item.
			 * @param stdClass $args    An object of wp_nav_menu() arguments.
			 * @param int      $depth   Depth of menu item. Used for padding.
			 */
			$id = apply_filters( 'nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args, $depth );
			$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

			$output .= $indent . '<li' . $id . $class_names . '>';

			$atts           = array();
			$atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
			$atts['target'] = ! empty( $item->target ) ? $item->target : '';
			$atts['rel']    = ! empty( $item->xfn ) ? $item->xfn : '';
			$atts['href']   = ! empty( $item->url ) ? $item->url : '';

			/**
			 * Filters the HTML attributes applied to a menu item's anchor element.
			 *
			 * @since 3.6.0
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param array $atts {
			 *     The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
			 *
			 *     @type string $title  Title attribute.
			 *     @type string $target Target attribute.
			 *     @type string $rel    The rel attribute.
			 *     @type string $href   The href attribute.
			 * }
			 * @param WP_Post  $item  The current menu item.
			 * @param stdClass $args  An object of wp_nav_menu() arguments.
			 * @param int      $depth Depth of menu item. Used for padding.
			 */
			$atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

			$item_url = isset( $atts['href'] ) ? trim( (string) $atts['href'] ) : '';

			$has_real_url = (
				'' !== $item_url
				&& '#' !== $item_url
			);

			$effective_dropdown_target = $this->submenu_dropdown_target;

			if ( 'auto' === $effective_dropdown_target ) {
				$effective_dropdown_target = $has_real_url ? 'icon' : 'link';
			}

			$menu_item_tag = 'a';

			$link_classes = array( 'menu-link' );

			if ( ! empty( $atts['class'] ) ) {
				$link_classes[] = $atts['class'];
				unset( $atts['class'] );
			}

			$parent_link_is_toggle = (
				$use_submenu_control
				&& 'link' === $effective_dropdown_target
			);

			/*
			* Mobile dropdown target = parent menu item.
			*
			* Legacy mode:
			*   Parent <a class="menu-link"> toggles submenu.
			*
			* Semantic mode:
			*   Parent <button class="menu-link"> toggles submenu.
			*/
			if ( $parent_link_is_toggle ) {
				$link_classes[] = 'dropdown-toggle';
				$link_classes[] = 'oceanwp-sub-menu-toggle-parent';
				$link_classes[] = 'oceanwp-sub-menu-toggle-' . $this->context;

				$atts['aria-expanded']               = 'false';
				$atts['aria-controls']               = $submenu_id;
				$atts['data-oceanwp-submenu-toggle'] = 'parent';

				if ( $this->semantic_submenu_toggles ) {
					$menu_item_tag = 'button';

					unset( $atts['href'], $atts['target'], $atts['rel'], $atts['title'] );

					$atts['type'] = 'button';
				} else {
					if ( empty( $atts['href'] ) ) {
						$atts['href'] = '#';
					}
				}
			}

			$atts['class'] = implode( ' ', array_unique( array_filter( $link_classes ) ) );

			$attributes = $this->build_html_atts( $atts );

			/** This filter is documented in wp-includes/post-template.php */
			$title = apply_filters( 'the_title', $item->title, $item->ID );

			/**
			 * Filters a menu item's title.
			 *
			 * @since 4.4.0
			 *
			 * @param string   $title The menu item's title.
			 * @param WP_Post  $item  The current menu item.
			 * @param stdClass $args  An object of wp_nav_menu() arguments.
			 * @param int      $depth Depth of menu item. Used for padding.
			 */
			$title = apply_filters( 'nav_menu_item_title', $title, $item, $args, $depth );

			// Output.
			$item_output = $args->before;

			$item_output .= '<' . $menu_item_tag . $attributes . '>';

			$item_output .= $args->link_before . $title . $args->link_after;

			if ( $parent_link_is_toggle ) {
				$item_output .= $this->get_submenu_toggle_icon( $depth );
			}

			// Description.
			if ( $item->description && 0 != $depth ) {
				$item_output .= '<span class="nav-content">' . $item->description . '</span>';
			}

			$item_output .= '</' . $menu_item_tag . '>';

			/*
			* Mobile dropdown target = icon.
			*
			* Legacy mode:
			*   Separate <a> toggles submenu.
			*
			* Semantic mode:
			*   Separate <button> toggles submenu.
			*/
			if ( $use_submenu_control && 'icon' === $effective_dropdown_target ) {
				$item_output .= $this->get_submenu_toggle_control( $item, $submenu_id, $depth, $args );
			}

			if ( ( ! empty( $item->template ) || ! empty( $item->mega_template ) ) && $this->megamenu != '' && 'vertical' != oceanwp_header_style() ) {
				ob_start();
					include OCEANWP_INC_DIR . 'walker/template.php';
					$template_content = ob_get_contents();
				ob_end_clean();
				$item_output .= $template_content;
			}

			if ( ! empty( $item->megamenu_widgetarea ) && $this->megamenu != '' && 'vertical' != oceanwp_header_style() ) {
				ob_start();
					dynamic_sidebar( $item->megamenu_widgetarea );
					$sidebar_content = ob_get_contents();
				ob_end_clean();
				$item_output .= $sidebar_content;
			}

			$item_output .= $args->after;

			/**
			 * Filters a menu item's starting output.
			 *
			 * The menu item's starting output only includes `$args->before`, the opening `<a>`,
			 * the menu item's title, the closing `</a>`, and `$args->after`. Currently, there is
			 * no filter for modifying the opening and closing `<li>` for a menu item.
			 *
			 * @since 3.0.0
			 *
			 * @param string   $item_output The menu item's starting HTML output.
			 * @param WP_Post  $item        Menu item data object.
			 * @param int      $depth       Depth of menu item. Used for padding.
			 * @param stdClass $args        An object of wp_nav_menu() arguments.
			 */
			$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );

		}

		/**
		 * Ends the element output, if needed.
		 *
		 * @since 3.0.0
		 *
		 * @see Walker::end_el()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param WP_Post  $item   Page data object. Not used.
		 * @param int      $depth  Depth of page. Not Used.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 */
		public function end_el( &$output, $item, $depth = 0, $args = null ) {

			// Header style
			$header_style = oceanwp_header_style();

			if (
				$depth === 0
				&& isset( $item->category_post )
				&& $item->category_post !== ''
				&& 'full_screen' !== $header_style
				&& 'vertical' !== $header_style
				&& ! $this->is_mobile_menu_context()
			 ) {
				global $post;

				$output .= "\n<ul class=\"megamenu col-4 sub-menu\">\n";

					// Sub Categories ===============================================================
				if ( isset( $item->category_post ) && $item->category_post != '' && $item->object == 'category' ) {
					$no_sub_categories = $sub_categories_exists = $sub_categories = '';

					$query_args     = array(
						'child_of' => $item->object_id,
					);
					$sub_categories = get_categories( $query_args );

					// Check if the category doesn't contain any sub categories.
					if ( count( $sub_categories ) == 0 ) {
						$sub_categories    = array( $item->object_id );
						$no_sub_categories = true;
					}

					foreach ( $sub_categories as $category ) {

						if ( ! $no_sub_categories ) {
							$cat_id = $category->term_id;
						} else {
							$cat_id = $category;
						}

						$original_post = $post;
						$count         = 0;

						$args      = array(
							'posts_per_page'      => 4,
							'cat'                 => $cat_id,
							'no_found_rows'       => true,
							'ignore_sticky_posts' => true,
						);
						$cat_query = new WP_Query( $args );

						// Title
						$output .= '<h3 class="mega-cat-title">' . esc_html__( 'Latest in', 'oceanwp' ) . ' ' . get_cat_name( $cat_id ) . '</h3>';

						while ( $cat_query->have_posts() ) {

							// first post
							$count++;

							if ( $count == 1 ) {
								$classes = 'mega-cat-post first';
							} else {
								$classes = 'mega-cat-post';
							}

							$cat_query->the_post();

							$output .= '<li class="' . $classes . '">';

							if ( has_post_thumbnail() ) {

								// Image args.
								$img_args = array(
									'alt' => esc_attr( oceanwp_theme_strings( 'owp-string-read-more-article', false ) ) . ' ' . get_the_title(),
								);
								if ( oceanwp_get_schema_markup( 'image' ) ) {
									$img_args['itemprop'] = 'image';
								}

								$output .= '<a href="' . get_permalink() . '" class="mega-post-link">';

									$output .= get_the_post_thumbnail( get_the_ID(), 'medium', $img_args );

									$output .= '<span class="overlay"></span>';
								$output     .= '</a>';

								$output .= '<h3 class="mega-post-title"><a href="' . get_permalink() . '">' . get_the_title() . '</a></h3><div class="mega-post-date">' . oceanwp_icon( 'date', false ) . ' ' . get_the_date() . '</div>';

							}

							$output .= '</li>';
						}

						wp_reset_postdata();

					}

					$output .= '</ul>';
				}
			}

			// </li> output.
			$output .= '</li>';

		}

		/**
		 * Ends the list of after the elements are added.
		 *
		 * @since 3.0.0
		 *
		 * @see Walker::end_lvl()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param int      $depth  Depth of menu item. Used for padding.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 */
		public function end_lvl( &$output, $depth = 0, $args = null ) {
			$indent  = str_repeat( "\t", $depth );
			$output .= "$indent</ul>\n";
		}

		/**
		 * Icon if sub menu.
		 */
		public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {

			if ( ! is_object( $element ) ) {
				return;
			}

			$id_field = $this->db_fields['id'];

			if ( ! isset( $element->$id_field ) ) {
				Walker_Nav_Menu::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
				return;
			}

			if ( empty( $element->classes ) || ! is_array( $element->classes ) ) {
				$element->classes = array();
			}

			$header_style         = oceanwp_header_style();
			$full_screen_dropdown = '<span class="nav-arrow"></span>';
			$has_children         = ! empty( $children_elements[ $element->$id_field ] );

			$has_category_mega = (
				isset( $element->category_post )
				&& '' !== $element->category_post
				&& isset( $element->object )
				&& 'category' === $element->object
				&& 'full_screen' !== $header_style
				&& 'vertical' !== $header_style
				&& ! $this->is_mobile_menu_context()
			);

			if ( isset( $args[0] ) && is_object( $args[0] ) ) {
				$args[0]->has_children = $has_children;
			}

			if ( ( $has_children && 0 === $depth ) || $has_category_mega ) {
				$element->classes[] = 'dropdown';

				if (
					true == get_theme_mod( 'ocean_menu_arrow_down', true )
					&& ( ! $this->has_submenu_controls() || $has_category_mega )
				) {
					( 'full_screen' == $header_style )
						? $element->title .= $full_screen_dropdown
						: $element->title .= oceanwp_icon( 'angle_down', false, 'nav-arrow' );
				}
			}

			if ( $has_children && $depth > 0 ) {
				$element->classes[] = 'dropdown';

				if (
					true == get_theme_mod( 'ocean_menu_arrow_side', true )
					&& ! $this->has_submenu_controls()
				) {
					if ( is_rtl() ) {
						( 'full_screen' == $header_style )
							? $element->title .= $full_screen_dropdown
							: $element->title .= oceanwp_icon( 'angle_left', false, 'nav-arrow' );
					} else {
						( 'full_screen' == $header_style )
							? $element->title .= $full_screen_dropdown
							: $element->title .= oceanwp_icon( 'angle_right', false, 'nav-arrow' );
					}
				}
			}

			Walker_Nav_Menu::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
		}

		/**
		 * Get submenu toggle control.
		 *
		 * @param WP_Post  $item       Menu item.
		 * @param string   $submenu_id Submenu ID.
		 * @param int      $depth      Menu depth.
		 * @param stdClass $args       Menu args.
		 *
		 * @return string
		 */
		private function get_submenu_toggle_control( $item, $submenu_id, $depth, $args ) {
			$label = sprintf(
				/* translators: %s: menu item title. */
				esc_html__( 'Toggle submenu: %s', 'oceanwp' ),
				wp_strip_all_tags( $item->title )
			);

			$tag = $this->semantic_submenu_toggles ? 'button' : 'a';

			$classes = array(
				'dropdown-toggle',
				'oceanwp-sub-menu-toggle',
				'oceanwp-sub-menu-toggle-icon',
				'oceanwp-sub-menu-toggle-' . $this->context,
			);

			$classes = apply_filters(
				'oceanwp_submenu_toggle_control_classes',
				$classes,
				$item,
				$depth,
				$args,
				$this->context,
				$tag
			);

			$atts = array(
				'class'                         => implode( ' ', array_map( 'sanitize_html_class', $classes ) ),
				'aria-expanded'                 => 'false',
				'aria-controls'                 => $submenu_id,
				'data-oceanwp-submenu-toggle'   => 'icon',
			);

			if ( 'button' === $tag ) {
				$atts['type'] = 'button';
			} else {
				$atts['href'] = '#' . $submenu_id;
			}

			$atts = apply_filters(
				'oceanwp_submenu_toggle_control_atts',
				$atts,
				$item,
				$submenu_id,
				$depth,
				$args,
				$this->context,
				$tag
			);

			$output  = '<' . $tag . $this->build_html_atts( $atts ) . '>';
			$output .= '<span class="screen-reader-text">' . esc_html( $label ) . '</span>';
			$output .= $this->get_submenu_toggle_icon( $depth );
			$output .= '</' . $tag . '>';

			return $output;
		}

		/**
		 * Get submenu toggle icon.
		 *
		 * @param int $depth Menu depth.
		 *
		 * @return string
		 */
		private function get_submenu_toggle_icon( $depth ) {
			if ( in_array( $this->context, array( 'mobile-fullscreen', 'full-screen-header' ), true ) ) {
				return '<span class="nav-arrow" aria-hidden="true"></span>';
			}

			if ( 0 === $depth ) {
				return oceanwp_icon( 'angle_down', false, 'nav-arrow' );
			}

			if ( is_rtl() ) {
				return oceanwp_icon( 'angle_left', false, 'nav-arrow' );
			}

			return oceanwp_icon( 'angle_right', false, 'nav-arrow' );
		}

		/**
		 * Build escaped HTML attributes.
		 *
		 * @param array $atts Attributes.
		 *
		 * @return string
		 */
		private function build_html_atts( $atts ) {
			$output = '';

			foreach ( $atts as $attr => $value ) {
				if ( is_bool( $value ) ) {
					$value = $value ? $attr : '';
				}

				if ( '' === $value || false === $value || null === $value ) {
					continue;
				}

				$value = 'href' === $attr ? esc_url( $value ) : esc_attr( $value );

				$output .= ' ' . esc_attr( $attr ) . '="' . $value . '"';
			}

			return $output;
		}
	}
}
