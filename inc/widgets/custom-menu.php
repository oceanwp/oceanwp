<?php
/**
 * Custom Menu Widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Custom_Menu_Widget' ) ) {
	class OceanWP_Custom_Menu_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct(
				'ocean_custom_menu',
				esc_html__( '&raquo; Custom Menu', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-custom-menu custom-menu-widget',
					'description' => esc_html__( 'Displays custom menu.', 'oceanwp' ),
					'customize_selective_refresh' => true,
				)
			);
		}

		/**
		 * Front-end display of widget.
		 *
		 * @see WP_Widget::widget()
		 * @since 1.0.0
		 *
		 * @param array $args     Widget arguments.
		 * @param array $instance Saved values from database.
		 */
		function widget( $args, $instance ) {

			$title 					= isset( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
			$nav_menu 				= ! empty( $instance['nav_menu'] ) ? wp_get_nav_menu_object( $instance['nav_menu'] ) : false;
			$position 				= isset( $instance['position'] ) ? $instance['position'] : 'left';
			$nav_padding 			= isset( $instance['nav_padding'] ) ? $instance['nav_padding'] : '';
			$nav_link_color 		= isset( $instance['nav_link_color'] ) ? $instance['nav_link_color'] : '';
			$nav_link_hover_color 	= isset( $instance['nav_link_hover_color'] ) ? $instance['nav_link_hover_color'] : '';
			$font_size 				= isset( $instance['font_size'] ) ? $instance['font_size'] : '';
			$line_height 			= isset( $instance['line_height'] ) ? $instance['line_height'] : '';
			$letter_spacing 		= isset( $instance['letter_spacing'] ) ? $instance['letter_spacing'] : '';
			$text_transform 		= isset( $instance['text_transform'] ) ? $instance['text_transform'] : '';

			if ( ! $nav_menu ) {
				return;
			}

			// Before widget WP hook
			echo $args['before_widget'];

				// Style
				if ( ( $nav_padding && '8px 0' != $nav_padding )
					|| ( $nav_link_color && '#555' != $nav_link_color )
					|| ( $nav_link_hover_color && '#333' != $nav_link_hover_color )
					|| ( $font_size && '13' != $font_size )
					|| ( $line_height && '20' != $line_height )
					|| ( $letter_spacing && '0.6' != $letter_spacing )
					|| ( $text_transform && 'default' != $text_transform ) ) {

					echo '<style type="text/css">';

					if ( ( $nav_padding && '8px 0' != $nav_padding )
						|| ( $nav_link_color && '#555' != $nav_link_color )
						|| ( $font_size && '13' != $font_size )
						|| ( $line_height && '20' != $line_height )
						|| ( $letter_spacing && '0.6' != $letter_spacing )
						|| ( $text_transform && 'default' != $text_transform ) ) {

						echo '.' . esc_attr( $this->id ) . ' > ul > li > a, .custom-menu-widget .' . esc_attr( $this->id ) . ' .dropdown-menu .sub-menu li a.menu-link{';
						if ( $nav_padding && '8px 0' != $nav_padding ) {
							echo 'padding:' . esc_attr( $nav_padding ) . ';';
						}
						if ( $nav_link_color && '#555' != $nav_link_color ) {
							echo 'color:' . esc_attr( $nav_link_color ) . ';';
						}
						if ( $font_size && '13' != $font_size ) {
							echo 'font-size:' . esc_attr( $font_size ) . 'px;';
						}
						if ( $line_height && '20' != $line_height ) {
							echo 'line-height:' . esc_attr( $line_height ) . 'px;';
						}
						if ( $letter_spacing && '0.6' != $letter_spacing ) {
							echo 'letter-spacing:' . esc_attr( $letter_spacing ) . 'px;';
						}
						if ( $text_transform && 'default' != $text_transform ) {
							echo 'text-transform:' . esc_attr( $text_transform ) . ';';
						}
						echo '}';

					}

					if ( $nav_link_hover_color && '#333' != $nav_link_hover_color ) {
						echo '.' . esc_attr( $this->id ) . ' > ul > li > a:hover, .custom-menu-widget .' . esc_attr( $this->id ) . ' .dropdown-menu .sub-menu li a.menu-link:hover{';
							echo 'color:' . esc_attr( $nav_link_hover_color ) . ';';
						echo '}';
					}

					echo '</style>';

				}

				// Show widget title
				if ( $title ) {
					echo $args['before_title'] . esc_html( $title ) . $args['after_title'];
				}

				$nav_menu_args = array(
					'menu' 			=> $nav_menu,
					'fallback_cb'   => false,
					'container'     => false,
					'menu_class'    => 'dropdown-menu sf-menu',
					'walker'        => new OceanWP_Custom_Nav_Walker(),
				);

				// Add classes
				$classes 	= array( 'oceanwp-custom-menu', 'clr' );
				$classes[] 	= esc_attr( $this->id );
				$classes[] 	= esc_attr( $position );
				$classes 	= implode( ' ', $classes );

				echo '<div class="'. esc_attr( $classes ) .'">';

					wp_nav_menu( $nav_menu_args );

				echo '</div>';

			// After widget WP hook
			echo $args['after_widget'];

		}

		/**
		 * Updates the widget control options for the particular instance of the widget.
		 *
		 * @since 1.0.0
		 */
		function update( $new_instance, $old_instance ) {
			$instance               			= $old_instance;
			$instance['title']      			= ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';
			$instance['nav_menu']   			= ! empty( $new_instance['nav_menu'] ) ? strip_tags( $new_instance['nav_menu'] ) : '';
			$instance['position']  				= strip_tags( $new_instance['position'] );
			$instance['nav_padding']  			= strip_tags( $new_instance['nav_padding'] );
			$instance['nav_link_color']    		= strip_tags( $new_instance['nav_link_color'] );
			$instance['nav_link_hover_color']  	= strip_tags( $new_instance['nav_link_hover_color'] );
			$instance['font_size']      		= strip_tags( $new_instance['font_size'] );
			$instance['line_height']      		= strip_tags( $new_instance['line_height'] );
			$instance['letter_spacing']      	= strip_tags( $new_instance['letter_spacing'] );
			$instance['text_transform']      	= strip_tags( $new_instance['text_transform'] );
			return $instance;
		}

		/**
		 * Back-end widget form.
		 *
		 * @see WP_Widget::form()
		 * @since 1.0.0
		 *
		 * @param array $instance Previously saved values from database.
		 */
		function form( $instance ) {

			global $wp_customize;

			$instance = wp_parse_args( ( array ) $instance, array(
				'title'             	=> '',
				'nav_menu'          	=> '',
				'position' 				=> 'left',
				'nav_padding'  			=> '',
				'nav_link_color'    	=> '#555',
				'nav_link_hover_color' 	=> '#333',
				'font_size'				=> '13',
				'line_height'			=> '20',
				'letter_spacing'		=> '0.6',
				'text_transform'		=> 'default',
			) );

			// Get menus
			$menus 		= wp_get_nav_menus();
			$nav_menu 	= isset( $instance['nav_menu'] ) ? $instance['nav_menu'] : '';

			// If no menus exists, direct the user to go and create some. ?>
			<p class="nav-menu-widget-no-menus-message" <?php if ( ! empty( $menus ) ) { echo ' style="display:none" '; } ?>>
				<?php
				if ( $wp_customize instanceof WP_Customize_Manager ) {
					$url = 'javascript: wp.customize.panel( "nav_menus" ).focus();';
				} else {
					$url = admin_url( 'nav-menus.php' );
				}
				?>
				<?php echo sprintf( esc_html__( 'No menus have been created yet. <a href="%s">Create some</a>.', 'oceanwp' ), esc_attr( $url ) ); ?>
			</p>
			<div class="nav-menu-widget-form-controls" <?php if ( empty( $menus ) ) { echo ' style="display:none" '; } ?>>
				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'oceanwp' ); ?>:</label>
					<input class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'nav_menu' ) ); ?>"><?php esc_html_e( 'Select Menu:', 'oceanwp' ); ?></label>
					<select class="widget-select widefat" id="<?php echo esc_attr( $this->get_field_id( 'nav_menu' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'nav_menu' ) ); ?>">
						<option value="0"><?php esc_html_e( '&mdash; Select &mdash;', 'oceanwp' ); ?></option>
						<?php foreach ( $menus as $menu ) : ?>
							<option value="<?php echo esc_attr( $menu->term_id ); ?>" <?php selected( $instance['nav_menu'], $menu->term_id ); ?>>
								<?php echo esc_html( $menu->name ); ?>
							</option>
						<?php endforeach; ?>
					</select>
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('position') ); ?>"><?php esc_html_e( 'Position:', 'oceanwp' ); ?></label>
					<select class="widget-select widefat" name="<?php echo esc_attr( $this->get_field_name('position') ); ?>" id="<?php echo esc_attr( $this->get_field_id('position') ); ?>">
						<option value="left" <?php selected( $instance['position'], 'left' ) ?>><?php esc_html_e( 'Left', 'oceanwp' ); ?></option>
						<option value="right" <?php selected( $instance['position'], 'right' ) ?>><?php esc_html_e( 'Right', 'oceanwp' ); ?></option>
						<option value="center" <?php selected( $instance['position'], 'center' ) ?>><?php esc_html_e( 'Center', 'oceanwp' ); ?></option>
					</select>
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'nav_padding' ) ); ?>"><?php esc_html_e( 'Menu Padding:', 'oceanwp' ); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id( 'nav_padding' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'nav_padding' ) ); ?>" value="<?php echo esc_attr( $instance['nav_padding'] ); ?>" />
					<small style="color: #777;"><?php esc_html_e( 'top left bottom right, eg: 15px 8px 15px 25px', 'oceanwp' ); ?></small>
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'nav_link_color' ) ); ?>"><?php esc_html_e( 'Menu Link Color:', 'oceanwp' ); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id( 'nav_link_color' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'nav_link_color' ) ); ?>" value="<?php echo esc_attr( $instance['nav_link_color'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'nav_link_hover_color' ) ); ?>"><?php esc_html_e( 'Menu Link Hover Color:', 'oceanwp' ); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id( 'nav_link_hover_color' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'nav_link_hover_color' ) ); ?>" value="<?php echo esc_attr( $instance['nav_link_hover_color'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'font_size' ) ); ?>"><?php esc_html_e( 'Font Size (px):', 'oceanwp' ); ?></label>
					<input class="widefat" type="number" min="5" max="50" step="1" id="<?php echo esc_attr( $this->get_field_id( 'font_size' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'font_size' ) ); ?>" value="<?php echo esc_attr( $instance['font_size'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'line_height' ) ); ?>"><?php esc_html_e( 'Line Height (px):', 'oceanwp' ); ?></label>
					<input class="widefat" type="number" min="5" max="200" step="1" id="<?php echo esc_attr( $this->get_field_id( 'line_height' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'line_height' ) ); ?>" value="<?php echo esc_attr( $instance['line_height'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id( 'letter_spacing' ) ); ?>"><?php esc_html_e( 'Letter Spacing (px):', 'oceanwp' ); ?></label>
					<input class="widefat" type="number" min="0" max="5" step="0.1" id="<?php echo esc_attr( $this->get_field_id( 'letter_spacing' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'letter_spacing' ) ); ?>" value="<?php echo esc_attr( $instance['letter_spacing'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('text_transform') ); ?>"><?php esc_html_e( 'Text Transform:', 'oceanwp' ); ?></label>
					<select class="widget-select widefat" name="<?php echo esc_attr( $this->get_field_name('text_transform') ); ?>" id="<?php echo esc_attr( $this->get_field_id('position') ); ?>">
						<option value="default" <?php selected( $instance['text_transform'], 'default' ) ?>><?php esc_html_e( 'Default', 'oceanwp' ); ?></option>
						<option value="capitalize" <?php selected( $instance['text_transform'], 'capitalize' ) ?>><?php esc_html_e( 'Capitalize', 'oceanwp' ); ?></option>
						<option value="lowercase" <?php selected( $instance['text_transform'], 'lowercase' ) ?>><?php esc_html_e( 'Lowercase', 'oceanwp' ); ?></option>
						<option value="uppercase" <?php selected( $instance['text_transform'], 'uppercase' ) ?>><?php esc_html_e( 'Uppercase', 'oceanwp' ); ?></option>
					</select>
				</p>

			</div>

		<?php

		}

	}
}
register_widget( 'OceanWP_Custom_Menu_Widget' );