<?php
/**
 * Custom Header nav widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Custom_Header_Nav_Widget' ) ) {
	class OceanWP_Custom_Header_Nav_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct(
				'ocean_custom_header_nav',
				esc_html__( '&raquo; Custom Header Nav', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-custom-header-nav custom-header-nav-widget',
					'description' => esc_html__( 'Display the main menu for the Custom Header style.', 'oceanwp' ),
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

			// Define vars
			$position 	= isset( $instance['position'] ) ? $instance['position'] : 'left';

			// Add classes
			$classes 	= array( 'custom-header-nav', 'clr' );
			$classes[] 	= $position;
			$classes 	= implode( ' ', $classes );

			// Before widget WP hook
			echo $args['before_widget']; ?>

				<div class="<?php echo esc_attr( $classes ); ?>">

					<?php
					// Menu
					get_template_part( 'partials/header/nav' );

					// Mobile menu
					get_template_part( 'partials/header/mobile-icon' ); ?>

				</div>
				
			<?php
			// After widget WP hook
			echo $args['after_widget'];

		}

		/**
		 * Sanitize widget form values as they are saved.
		 *
		 * @see WP_Widget::update()
		 * @since 1.0.0
		 *
		 * @param array $new_instance Values just sent to be saved.
		 * @param array $old_instance Previously saved values from database.
		 *
		 * @return array Updated safe values to be saved.
		 */
		function update( $new_instance, $old_instance ) {
			$instance            	= $old_instance;
			$instance['position']  	= strip_tags( $new_instance['position'] );
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

			$instance = wp_parse_args( ( array ) $instance, array(
				'position' 	=> 'left',
			) ); ?>

			<p>
				<?php esc_html_e( 'This widget is to display with your page builder the menu for the Custom Header style.', 'oceanwp' ); ?>
			</p>

			<p>
				<label for="<?php echo $this->get_field_id('position'); ?>"><?php esc_html_e( 'Position:', 'oceanwp' ); ?></label>
				<select class="widget-select widefat" name="<?php echo $this->get_field_name('position'); ?>" id="<?php echo $this->get_field_id('position'); ?>">
					<option value="left" <?php selected( $instance['position'], 'left' ) ?>><?php esc_html_e( 'Left', 'oceanwp' ); ?></option>
					<option value="right" <?php selected( $instance['position'], 'right' ) ?>><?php esc_html_e( 'Right', 'oceanwp' ); ?></option>
					<option value="center" <?php selected( $instance['position'], 'center' ) ?>><?php esc_html_e( 'Center', 'oceanwp' ); ?></option>
				</select>
			</p>

		<?php

		}

	}
}
register_widget( 'OceanWP_Custom_Header_Nav_Widget' );