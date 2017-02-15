<?php
/**
 * Custom Links Widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Custom_Links_Widget' ) ) {
	class OceanWP_Custom_Links_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct(
				'ocean_custom_links',
				esc_html__( '&raquo; Custom Links', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-custom-links custom-links-widget',
					'description' => esc_html__( 'Displays custom links.', 'oceanwp' ),
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

			$title 	= isset( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
			$count 	= isset( $instance['count'] ) ? $instance['count'] : '';
			$target = isset( $instance['target'] ) ? $instance['target'] : '';

			// Before widget WP hook
			echo $args['before_widget'];

				// Show widget title
				if ( $title ) {
					echo $args['before_title'] . $title . $args['after_title'];
				}

				echo '<ul class="oceanwp-custom-links">';
					if ( $count !== '0' ) {
						for ( $i=1; $i<=$count; $i++ ) {
							$url 	= isset( $instance["url_".$i] ) ? $instance["url_".$i] : '';
							$text 	= isset( $instance["text_".$i] ) ? $instance["text_".$i]:'';

							echo '<li>';
								echo '<a href="'. esc_url( $url ) .'" target="_'. esc_attr( $target ) .'">'. esc_attr( $text ) .'</a>';
							echo '</li>';

						}
					}
				echo '</ul>';

			// After widget WP hook
			echo $args['after_widget'];

		}

		/**
		 * Updates the widget control options for the particular instance of the widget.
		 *
		 * @since 1.0.0
		 */
		function update( $new_instance, $old_instance ) {
			$instance                   = $old_instance;
			$instance['title']          = ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';
			$instance['count']        	= ! empty( $new_instance['count'] ) ? strip_tags( $new_instance['count'] ) : '';
			$instance['target']         = ! empty( $new_instance['target'] ) ? strip_tags( $new_instance['target'] ) : '';
			for ( $i=1;$i<=$instance['count'];$i++ ) {
				$instance["url_".$i] 	= ! empty( $new_instance['url_'.$i] ) ? strip_tags( $new_instance['url_'.$i] ) : '';
				$instance["text_".$i] 	= ! empty( $new_instance['text_'.$i] ) ? strip_tags( $new_instance['text_'.$i] ) : '';
			}
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
				'title'             => esc_attr__( 'Useful Links', 'oceanwp' ),
				'count'             => '5',
				'target' 			=> esc_html__( 'Blank', 'oceanwp' ),
			) ) );

			for ( $i=1;$i<=15;$i++ ) {
				$url 			= 'url_'.$i;
				$$url 			= isset( $instance[$url] ) ? $instance[$url] : '';
				$text 			= 'text_'.$i;
				$$text 			= isset( $instance[$text] ) ? $instance[$text] : '';
			} ?>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'oceanwp' ); ?>:</label>
				<input class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
			</p>

			<p>
				<label for="<?php echo $this->get_field_id('target'); ?>"><?php esc_html_e( 'Link Target:', 'oceanwp' ); ?></label>
				<select class='widefat' name="<?php echo $this->get_field_name('target'); ?>" id="<?php echo $this->get_field_id('target'); ?>">
					<option value="blank" <?php selected( $target, 'blank' ) ?>><?php esc_html_e( 'Blank', 'oceanwp' ); ?></option>
					<option value="self" <?php selected( $target, 'self' ) ?>><?php esc_html_e( 'Self', 'oceanwp' ); ?></option>
				</select>
			</p>

			<p>
				<label for="<?php echo $this->get_field_id('count'); ?>"><?php esc_html_e( 'Number of Custom Links:', 'oceanwp' ); ?></label>
				<select class='widefat' name="<?php echo $this->get_field_name('count'); ?>" id="<?php echo $this->get_field_id('count'); ?>">
					<option value="1" <?php selected( $count, '1' ) ?>><?php esc_html_e( '1', 'oceanwp' ); ?></option>
					<option value="2" <?php selected( $count, '2' ) ?>><?php esc_html_e( '2', 'oceanwp' ); ?></option>
					<option value="3" <?php selected( $count, '3' ) ?>><?php esc_html_e( '3', 'oceanwp' ); ?></option>
					<option value="4" <?php selected( $count, '4' ) ?>><?php esc_html_e( '4', 'oceanwp' ); ?></option>
					<option value="5" <?php selected( $count, '5' ) ?>><?php esc_html_e( '5', 'oceanwp' ); ?></option>
					<option value="6" <?php selected( $count, '6' ) ?>><?php esc_html_e( '6', 'oceanwp' ); ?></option>
					<option value="7" <?php selected( $count, '7' ) ?>><?php esc_html_e( '7', 'oceanwp' ); ?></option>
					<option value="8" <?php selected( $count, '8' ) ?>><?php esc_html_e( '8', 'oceanwp' ); ?></option>
					<option value="9" <?php selected( $count, '9' ) ?>><?php esc_html_e( '9', 'oceanwp' ); ?></option>
					<option value="10" <?php selected( $count, '10' ) ?>><?php esc_html_e( '10', 'oceanwp' ); ?></option>
					<option value="11" <?php selected( $count, '11' ) ?>><?php esc_html_e( '11', 'oceanwp' ); ?></option>
					<option value="12" <?php selected( $count, '12' ) ?>><?php esc_html_e( '12', 'oceanwp' ); ?></option>
					<option value="13" <?php selected( $count, '13' ) ?>><?php esc_html_e( '13', 'oceanwp' ); ?></option>
					<option value="14" <?php selected( $count, '14' ) ?>><?php esc_html_e( '14', 'oceanwp' ); ?></option>
					<option value="15" <?php selected( $count, '15' ) ?>><?php esc_html_e( '15', 'oceanwp' ); ?></option>
				</select>
			</p>

			<div class="custom_links_wrap">
				<?php for ( $i=1;$i<=15;$i++ ): $url = 'url_'.$i; $text = 'text_'.$i; ?>
				<div class="custom_links_<?php echo $i;?>" <?php if ( $i>$count ):?>style="display:none;"<?php endif;?> style="padding-bottom:30px">
					<p>
						<label for="<?php echo $this->get_field_id( $url ); ?>">
							<?php printf( '#%s URL:', $i );?>
						</label>
						<input class="widefat" id="<?php echo $this->get_field_id( $url ); ?>" name="<?php echo $this->get_field_name( $url ); ?>" type="text" value="<?php echo esc_attr( $$url ); ?>" />
					</p>

					<p>
						<label for="<?php echo $this->get_field_id( $text ); ?>">
							<?php printf( '#%s Text:', $i );?>
						</label>
						<input class="widefat" id="<?php echo $this->get_field_id( $text ); ?>" name="<?php echo $this->get_field_name( $text ); ?>" type="text" value="<?php echo esc_attr( $$text ); ?>" />
					</p>
				</div>
				<?php endfor;?>
			</div>

		<?php

		}

	}
}
register_widget( 'OceanWP_Custom_Links_Widget' );