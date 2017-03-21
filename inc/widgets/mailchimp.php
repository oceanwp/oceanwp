<?php
/**
 * MailChimp Widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_MailChimp_Widget' ) ) {
	class OceanWP_MailChimp_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct(
				'ocean_mailchimp',
				esc_html__( '&raquo; MailChimp', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-mailchimp mailchimp-widget',
					'description' => esc_html__( 'Displays mailchimp subscription form.', 'oceanwp' ),
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

			$title       		= isset( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
			$subscribe_text   	= isset( $instance['subscribe_text'] ) ? $instance['subscribe_text'] : '';
			$mailchimpaction   	= isset( $instance['mailchimpaction'] ) ? $instance['mailchimpaction'] : '';
			$width   			= isset( $instance['width'] ) ? $instance['width'] : '';
			$height   			= isset( $instance['height'] ) ? $instance['height'] : '';
			$placeholder   		= isset( $instance['placeholder'] ) ? $instance['placeholder'] : '';
			$submit_text   		= isset( $instance['submit_text'] ) ? $instance['submit_text'] : '';

			// Sanitize vars
			$width 		= $width ? $width : '';
			$height 	= $height ? $height : '';

			// Inline style
			$form_style = '';
			$input_style = '';
			if ( $width ) {
				$form_style .= 'width:'. esc_attr( $width ) .';';
			}
			if ( $height ) {
				$input_style .= 'height:'. esc_attr( $height ) .';';
			}
			if ( $form_style ) {
				$form_style = ' style="' . esc_attr( $form_style ) . '"';
			}
			if ( $input_style ) {
				$input_style = ' style="' . esc_attr( $input_style ) . '"';
			}

			// Before widget WP hook
			echo $args['before_widget'];

				// Show widget title
				if ( $title ) {
					echo $args['before_title'] . esc_html( $title ) . $args['after_title'];
				} ?>

				<div class="oceanwp-newsletter-form clr">

					<div class="oceanwp-newsletter-form-wrap">

						<?php if ( $subscribe_text ) { ?>

							<div class="oceanwp-mail-text"><?php echo do_shortcode( $subscribe_text ); ?></div>
							
						<?php } ?>

						<form action="<?php echo esc_url( $mailchimpaction ); ?>" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate<?php echo wp_kses_post( $form_style ); ?>>

							<input type="email" value="<?php echo esc_attr( $placeholder ); ?>" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" name="EMAIL" class="required email"<?php echo wp_kses_post( $input_style ); ?>>

							<?php if ( $submit_text ) { ?>

			                    <button type="submit" value="" name="subscribe" class="button">
			                        <?php echo esc_attr( $submit_text ); ?>
			                    </button>

			                <?php } ?>

			            </form>

			        </div><!--.oceanwp-newsletter-form-wrap-->

			    </div><!-- .oceanwp-newsletter-form -->

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
			$instance                      	= $old_instance;
			$instance['title']             	= ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';
			$instance['subscribe_text']    	= ! empty( $new_instance['subscribe_text'] ) ? strip_tags( $new_instance['subscribe_text'] ) : '';
			$instance['mailchimpaction']    = ! empty( $new_instance['mailchimpaction'] ) ? strip_tags( $new_instance['mailchimpaction'] ) : '';
			$instance['width']    			= ! empty( $new_instance['width'] ) ? strip_tags( $new_instance['width'] ) : '';
			$instance['height']    			= ! empty( $new_instance['height'] ) ? strip_tags( $new_instance['height'] ) : '';
			$instance['placeholder']    	= ! empty( $new_instance['placeholder'] ) ? strip_tags( $new_instance['placeholder'] ) : '';
			$instance['submit_text']    	= ! empty( $new_instance['submit_text'] ) ? strip_tags( $new_instance['submit_text'] ) : '';
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
			$instance = wp_parse_args( (array) $instance, array(
				'title'             => esc_attr__( 'Newsletter', 'oceanwp' ),
				'subscribe_text' 	=> esc_html__('Get all latest content delivered to your email a few times a month. Updates and news about all categories will send to you.', 'oceanwp'),
				'mailchimpaction' 	=> '//domain.us1.list-manage.com/subscribe/post?u=numbers_go_here',
				'width' 			=> '',
				'height' 			=> '',
				'placeholder' 		=> esc_html__('Your Email', 'oceanwp'),
				'submit_text' 		=> esc_html__('Go', 'oceanwp'),
			) ); ?>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'oceanwp' ); ?>:</label>
				<input class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'subscribe_text' ) ); ?>">
				<?php esc_html_e( 'Text', 'oceanwp' ); ?></label>
				<textarea rows="15" id="<?php echo esc_attr( $this->get_field_id( 'subscribe_text' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'subscribe_text' ) ); ?>" class="widefat" style="height: 100px;"><?php if( !empty( $instance['subscribe_text'] ) ) { echo esc_textarea( $instance['subscribe_text'] ); } ?></textarea>
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id('mailchimpaction') ); ?>"><?php esc_html_e('MailChimp Form Action', 'oceanwp'); ?></label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id('mailchimpaction') ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'mailchimpaction' ) ); ?>" type="text" value="<?php echo esc_url( $instance['mailchimpaction'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id('width') ); ?>"><?php esc_html_e('Input Width (px)', 'oceanwp'); ?></label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id('width' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'width' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['width'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id('height') ); ?>"><?php esc_html_e('Input Height (px)', 'oceanwp'); ?></label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id('height' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'height' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['height'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id('placeholder') ); ?>"><?php esc_html_e('Placeholder', 'oceanwp'); ?></label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id('placeholder' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'placeholder' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['placeholder'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id('submit_text') ); ?>"><?php esc_html_e('Submit Text', 'oceanwp'); ?></label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id('submit_text' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'submit_text' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['submit_text'] ); ?>" />
			</p>

		<?php

		}

	}
}
register_widget( 'OceanWP_MailChimp_Widget' );