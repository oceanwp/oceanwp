<?php
/**
 * Video widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Video_Widget' ) ) {
	class OceanWP_Video_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct(
				'ocean_video',
				esc_html__( '&raquo; Video', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-video video-widget',
					'description' => esc_html__( 'Easily to display any type of video.', 'oceanwp' ),
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

			$title       = isset( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
			$video_url   = isset( $instance['video_url'] ) ? $instance['video_url'] : '';
			$description = isset( $instance['video_description'] ) ? $instance['video_description'] : '';

			// Before widget WP hook
			echo $args['before_widget'];

				// Show widget title
				if ( $title ) {
					echo $args['before_title'] . $title . $args['after_title'];
				}
				
				// Show video
				if ( $video_url )  {
					echo '<p class="responsive-video-wrap clr">';
						echo wp_oembed_get( $video_url, array(
							'width' => 270
						) );
					echo '</p>';
				} else { 
					esc_html_e( 'You forgot to enter a video URL.', 'oceanwp' );
				}
				
				// Show video description if field isn't empty
				if ( $description ) {
					echo '<div class="oceanwp-video-widget-description">'. do_shortcode( $description ) .'</div>';
				}

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
			$instance                      = $old_instance;
			$instance['title']             = ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';
			$instance['video_url']         = ! empty( $new_instance['video_url'] ) ? esc_url( $new_instance['video_url'] ) : '';
			$instance['video_description'] = ! empty( $new_instance['video_description'] ) ? strip_tags( $new_instance['video_description'] ) : '';
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
			$instance = wp_parse_args((array) $instance, array(
				'title'             => esc_attr__( 'Video', 'oceanwp' ),
				'video_url'         => '',
				'video_description' => '',
			) ); ?>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'oceanwp' ); ?>:</label>
				<input class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'video_url' ) ); ?>">
				<?php esc_html_e( 'Video URL ', 'oceanwp' ); ?></label>
				<input class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'video_url' ) ); ?>" type="text" value="<?php echo esc_attr( esc_url( $instance['video_url'] ) ); ?>" />
				<span style="display:block;padding:5px 0" class="description"><?php esc_html_e( 'Enter in a video URL that is compatible with WordPress\'s built-in oEmbed feature.', 'oceanwp' ); ?> <a href="http://codex.wordpress.org/Embeds" target="_blank"><?php esc_html_e( 'Learn More', 'oceanwp' ); ?></a></span>
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'video_description' ) ); ?>">
				<?php esc_html_e( 'Description', 'oceanwp' ); ?></label>
				<textarea rows="15" id="<?php echo $this->get_field_id( 'video_description' ); ?>" name="<?php echo $this->get_field_name( 'video_description' ); ?>" class="widefat" style="height: 100px;"><?php if( !empty( $instance['video_description'] ) ) { echo $instance['video_description']; } ?></textarea>
			</p>

		<?php

		}

	}
}
register_widget( 'OceanWP_Video_Widget' );