<?php
/**
 * Flickr Widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Flickr_Widget' ) ) {
	class OceanWP_Flickr_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct(
				'ocean_flickr',
				esc_html__( '&raquo; Flickr', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-flickr flickr-widget',
					'description' => esc_html__( 'Pulls in images from your flickr account.', 'oceanwp' ),
					'customize_selective_refresh' => true,
				)
			);
		}

		/**
		 * Front-end display of widget.
		 *
		 * @see WP_Widget::widget()
		 *
		 * @param array $args     Widget arguments.
		 * @param array $instance Saved values from database.
		 */
		function widget( $args, $instance ) {

			$title      = isset( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
			$number   	= isset( $instance['number'] ) ? $instance['number'] : '';
			$id  		= isset( $instance['id'] ) ? $instance['id'] : '';

			// Before widget WP hook
			echo $args['before_widget'];

				// Show widget title
				if ( $title ) {
					echo $args['before_title'] . $title . $args['after_title'];
				}

				// Display flickr feed if ID is defined
				if ( $id ) : ?>
					<div class="flickr-widget-wrap">
						<script type="text/javascript" src="https://www.flickr.com/badge_code_v2.gne?count=<?php echo intval( $number ); ?>&amp;display=latest&amp;size=s&amp;layout=x&amp;source=user&amp;user=<?php echo strip_tags( $id ); ?>"></script>
						<p class="flickr_stream_wrap"><a class="follow_btn" href="http://www.flickr.com/photos/<?php echo strip_tags( $id ); ?>"><?php esc_html_e( 'View stream on flickr', 'oceanwp' ); ?></a></p>
					</div>
				<?php endif;

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
			$instance               = $old_instance;
			$instance['title']      = ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';
			$instance['number']     = ! empty( $new_instance['number'] ) ? intval( $new_instance['number'] ) : '';
			$instance['id']     	= ! empty( $new_instance['id'] ) ? strip_tags( $new_instance['id'] ) : '';
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

			// Parse arguments
			extract( wp_parse_args( (array) $instance, array(
				'title'         => esc_attr__( 'Flickr Photos', 'oceanwp' ),
				'id' 			=> '73064996@N08',
				'number'		=> 6
			) ) ); ?>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'oceanwp' ); ?>:</label>
				<input class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
			</p>

			<p>
				<label for="<?php echo $this->get_field_id('id'); ?>"><?php esc_html_e( 'Flickr ID', 'oceanwp' ); ?></label>
				<input class="widefat" id="<?php echo $this->get_field_id('id'); ?>" name="<?php echo $this->get_field_name('id'); ?>" type="text" value="<?php echo esc_attr( $id ); ?>" />
				<small><?php esc_html_e( 'Enter the url of your Flickr page on this site: idgettr.com.', 'oceanwp' ); ?></small>
			</p>

			<p>
				<label for="<?php echo $this->get_field_id('number'); ?>"><?php esc_html_e( 'Number:', 'oceanwp' ); ?></label>
				<input class="widefat" id="<?php echo $this->get_field_id('number'); ?>" name="<?php echo $this->get_field_name('number'); ?>" type="text" value="<?php echo esc_attr( $number ); ?>" />
				<small><?php esc_html_e( 'The maximum is 10 images.', 'oceanwp' ); ?></small>
			</p>

		<?php

		}

	}
}
register_widget( 'OceanWP_Flickr_Widget' );