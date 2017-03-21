<?php
/**
 * Contact Info Widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Contact_Info_Widget' ) ) {
	class OceanWP_Contact_Info_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct(
				'ocean_contact_info',
				esc_html__( '&raquo; Contact Info', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-contact-info contact-info-widget',
					'description' => esc_html__( 'Adds support for contact info.', 'oceanwp' ),
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

			$title      	= isset( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
			$text   		= isset( $instance['text'] ) ? $instance['text'] : '';
			$address_icon 	= isset( $instance['address_icon'] ) ? $instance['address_icon'] : '';
			$address_text 	= isset( $instance['address_text'] ) ? $instance['address_text'] : '';
			$address 		= isset( $instance['address'] ) ? $instance['address'] : '';
			$phone_icon 	= isset( $instance['phone_icon'] ) ? $instance['phone_icon'] : '';
			$phone_text 	= isset( $instance['phone_text'] ) ? $instance['phone_text'] : '';
			$phone 			= isset( $instance['phone'] ) ? $instance['phone'] : '';
			$mobile_icon 	= isset( $instance['mobile_icon'] ) ? $instance['mobile_icon'] : '';
			$mobile_text 	= isset( $instance['mobile_text'] ) ? $instance['mobile_text'] : '';
			$mobile 		= isset( $instance['mobile'] ) ? $instance['mobile'] : '';
			$fax_icon 		= isset( $instance['fax_icon'] ) ? $instance['fax_icon'] : '';
			$fax_text 		= isset( $instance['fax_text'] ) ? $instance['fax_text'] : '';
			$fax 			= isset( $instance['fax'] ) ? $instance['fax'] : '';
			$email_icon 	= isset( $instance['email_icon'] ) ? $instance['email_icon'] : '';
			$email_text 	= isset( $instance['email_text'] ) ? $instance['email_text'] : '';
			$email 			= isset( $instance['email'] ) ? $instance['email'] : '';
			$emailtxt 		= isset( $instance['emailtxt'] ) ? $instance['emailtxt'] : '';
			$web_icon 		= isset( $instance['web_icon'] ) ? $instance['web_icon'] : '';
			$web_text 		= isset( $instance['web_text'] ) ? $instance['web_text'] : '';
			$web 			= isset( $instance['web'] ) ? $instance['web'] : '';
			$webtxt 		= isset( $instance['webtxt'] ) ? $instance['webtxt'] : '';
			$skype 			= isset( $instance['skype'] ) ? $instance['skype'] : '';
			$skypetxt 		= isset( $instance['skypetxt'] ) ? $instance['skypetxt'] : '';

			// Before widget WP hook
			echo $args['before_widget'];

				// Show widget title
				if ( $title ) {
					echo $args['before_title'] . esc_html( $title ) . $args['after_title'];
				}

				echo '<ul class="contact-info-container">';
					if ( $text ) {
						echo '<li class="text">'. do_shortcode( $text ) .'</li>';
					}

					if ( $address ) {
						echo '<li class="address">';
							echo '<i class="'. esc_attr( $address_icon ) .'"></i>';
							echo '<div class="oceanwp-info-wrap">';
								echo '<span class="oceanwp-contact-title">'. esc_html( $address_text ) .'</span>';
								echo '<span class="oceanwp-contact-text">'. esc_html( $address ) .'</span>';
							echo '</div>';
						echo '</li>';
					}

					if ( $phone ) {
						echo '<li class="phone">';
							echo '<i class="'. esc_attr( $phone_icon ) .'"></i>';
							echo '<div class="oceanwp-info-wrap">';
								echo '<span class="oceanwp-contact-title">'. esc_html( $phone_text ) .'</span>';
								echo '<span class="oceanwp-contact-text">'. esc_html( $phone ) .'</span>';
							echo '</div>';
						echo '</li>';
					}

					if ( $mobile ) {
						echo '<li class="mobile">';
							echo '<i class="'. esc_attr( $mobile_icon ) .'"></i>';
							echo '<div class="oceanwp-info-wrap">';
								echo '<span class="oceanwp-contact-title">'. esc_html( $mobile_text ) .'</span>';
								echo '<span class="oceanwp-contact-text">'. esc_html( $mobile ) .'</span>';
							echo '</div>';
						echo '</li>';
					}

					if ( $fax ) {
						echo '<li class="fax">';
							echo '<i class="'. esc_attr( $fax_icon ) .'"></i>';
							echo '<div class="oceanwp-info-wrap">';
								echo '<span class="oceanwp-contact-title">'. esc_html( $fax_text ) .'</span>';
								echo '<span class="oceanwp-contact-text">'. esc_html( $fax ) .'</span>';
							echo '</div>';
						echo '</li>';
					}

					if ( $email ) {
						echo '<li class="email">';
							echo '<i class="'. esc_attr( $email_icon ) .'"></i>';
							echo '<div class="oceanwp-info-wrap">';
								echo '<span class="oceanwp-contact-title">'. esc_html( $email_text ) .'</span>';
								echo '<span class="oceanwp-contact-text">';
									echo '<a href="mailto:'. esc_html( antispambot( $email ) ) .'">';
										if($emailtxt) {
											echo esc_html( $emailtxt );
										} else {
											echo esc_html( antispambot( $email ) );
										}
									echo '</a>';
								echo '</span>';
							echo '</div>';
						echo '</li>';
					}

					if ( $web ) {
						echo '<li class="web">';
							echo '<i class="'. esc_attr( $web_icon ) .'"></i>';
							echo '<div class="oceanwp-info-wrap">';
								echo '<span class="oceanwp-contact-title">'. esc_html( $web_text ) .'</span>';
								echo '<span class="oceanwp-contact-text">';
									echo '<a href="'. esc_url( $web ) .'">';
										if($webtxt) {
											echo esc_html( $webtxt );
										} else {
											echo esc_html( $web );
										}
									echo '</a>';
								echo '</span>';
							echo '</div>';
						echo '</li>';
					}

					if ( $skype ) {
						echo '<li class="skype">';
							echo '<a href="skype:'. esc_attr( $skype ) .'?call" target="_self" class="oceanwp-skype-button">';
								if($skypetxt) {
									echo esc_html( $skypetxt );
								} else {
									esc_html__('Skype', 'oceanwp');
								}
							echo '</a>';
						echo '</li>';
					}
				echo '</ul>';

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
			$instance               	= $old_instance;
			$instance['title']      	= ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';
			$instance['text']    		= ! empty( $new_instance['text'] ) ? strip_tags( $new_instance['text'] ) : '';
			$instance['address_icon']   = ! empty( $new_instance['address_icon'] ) ? strip_tags( $new_instance['address_icon'] ) : '';
			$instance['address_text']   = ! empty( $new_instance['address_text'] ) ? strip_tags( $new_instance['address_text'] ) : '';
			$instance['address']    	= ! empty( $new_instance['address'] ) ? strip_tags( $new_instance['address'] ) : '';
			$instance['phone_icon']    	= ! empty( $new_instance['phone_icon'] ) ? strip_tags( $new_instance['phone_icon'] ) : '';
			$instance['phone_text']    	= ! empty( $new_instance['phone_text'] ) ? strip_tags( $new_instance['phone_text'] ) : '';
			$instance['phone']      	= ! empty( $new_instance['phone'] ) ? strip_tags( $new_instance['phone'] ) : '';
			$instance['mobile_icon']    = ! empty( $new_instance['mobile_icon'] ) ? strip_tags( $new_instance['mobile_icon'] ) : '';
			$instance['mobile_text']    = ! empty( $new_instance['mobile_text'] ) ? strip_tags( $new_instance['mobile_text'] ) : '';
			$instance['mobile']     	= ! empty( $new_instance['mobile'] ) ? strip_tags( $new_instance['mobile'] ) : '';
			$instance['fax_icon']    	= ! empty( $new_instance['fax_icon'] ) ? strip_tags( $new_instance['fax_icon'] ) : '';
			$instance['fax_text']    	= ! empty( $new_instance['fax_text'] ) ? strip_tags( $new_instance['fax_text'] ) : '';
			$instance['fax']        	= ! empty( $new_instance['fax'] ) ? strip_tags( $new_instance['fax'] ) : '';
			$instance['email_icon']    	= ! empty( $new_instance['email_icon'] ) ? strip_tags( $new_instance['email_icon'] ) : '';
			$instance['email_text']    	= ! empty( $new_instance['email_text'] ) ? strip_tags( $new_instance['email_text'] ) : '';
			$instance['email']      	= ! empty( $new_instance['email'] ) ? strip_tags( $new_instance['email'] ) : '';
			$instance['emailtxt']   	= ! empty( $new_instance['emailtxt'] ) ? strip_tags( $new_instance['emailtxt'] ) : '';
			$instance['web_icon']    	= ! empty( $new_instance['web_icon'] ) ? strip_tags( $new_instance['web_icon'] ) : '';
			$instance['web_text']    	= ! empty( $new_instance['web_text'] ) ? strip_tags( $new_instance['web_text'] ) : '';
			$instance['web']        	= ! empty( $new_instance['web'] ) ? strip_tags( $new_instance['web'] ) : '';
			$instance['webtxt']     	= ! empty( $new_instance['webtxt'] ) ? strip_tags( $new_instance['webtxt'] ) : '';
			$instance['skype']      	= ! empty( $new_instance['skype'] ) ? strip_tags( $new_instance['skype'] ) : '';
			$instance['skypetxt']   	= ! empty( $new_instance['skypetxt'] ) ? strip_tags( $new_instance['skypetxt'] ) : '';
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
				'title'         => esc_attr__( 'Contact Info', 'oceanwp' ),
				'text' 			=> 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, aspernatur, velit. Adipisci, animi, molestiae, neque voluptatum non voluptas atque aperiam.',
				'address_icon'  => esc_attr__( 'icon-location-pin', 'oceanwp' ),
				'address_text'  => esc_attr__( 'Address:', 'oceanwp' ),
				'address'       => esc_attr__( 'Street Name, FL 54785', 'oceanwp' ),
				'phone_icon'  	=> esc_attr__( 'icon-phone', 'oceanwp' ),
				'phone_text'  	=> esc_attr__( 'Phone:', 'oceanwp' ),
				'phone' 		=> '621-254-2147',
				'mobile_icon'  	=> esc_attr__( 'icon-screen-smartphone', 'oceanwp' ),
				'mobile_text'  	=> esc_attr__( 'Mobile:', 'oceanwp' ),
				'mobile' 		=> '621-254-2147',
				'fax_icon'  	=> esc_attr__( 'icon-printer', 'oceanwp' ),
				'fax_text'  	=> esc_attr__( 'Fax:', 'oceanwp' ),
				'fax' 			=> '621-254-2147',
				'email_icon'  	=> esc_attr__( 'icon-envelope', 'oceanwp' ),
				'email_text'  	=> esc_attr__( 'Email:', 'oceanwp' ),
				'email' 		=> 'contact@support.com',
				'emailtxt' 		=> 'contact@support.com',
				'web_icon'  	=> esc_attr__( 'icon-link', 'oceanwp' ),
				'web_text'  	=> esc_attr__( 'Website:', 'oceanwp' ),
				'web' 			=> '#',
				'webtxt' 		=> 'yourwebsite.com',
				'skype' 		=> 'YourUsername',
				'skypetxt' 		=> esc_html__( 'Skype Call Us', 'oceanwp' ),
			) ); ?>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'oceanwp' ); ?>:</label>
				<input class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'text' ) ); ?>"><?php esc_html_e( 'Text', 'oceanwp' ); ?></label>
				<textarea rows="15" id="<?php echo esc_attr( $this->get_field_id( 'text' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'text' ) ); ?>" class="widefat" style="height: 100px;"><?php if( !empty( $instance['text'] ) ) { echo esc_textarea( $instance['text'] ); } ?></textarea>
			</p>

			<div class="oceanwp-infos">
				<h2><?php esc_html_e('Address:', 'oceanwp'); ?></h2>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('address_icon') ); ?>"><?php esc_html_e('Icon Class', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('address_icon') ); ?>" name="<?php echo esc_attr( $this->get_field_name('address_icon') ); ?>" value="<?php echo esc_attr( $instance['address_icon'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('address_text') ); ?>"><?php esc_html_e('Title', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('address_text') ); ?>" name="<?php echo esc_attr( $this->get_field_name('address_text') ); ?>" value="<?php echo esc_attr( $instance['address_text'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('address') ); ?>"><?php esc_html_e('Content', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('address') ); ?>" name="<?php echo esc_attr( $this->get_field_name('address') ); ?>" value="<?php echo esc_attr( $instance['address'] ); ?>" />
				</p>
			</div>

			<div class="oceanwp-infos">
				<h2><?php esc_html_e('Phone:', 'oceanwp'); ?></h2>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('phone_icon') ); ?>"><?php esc_html_e('Icon Class', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('phone_icon') ); ?>" name="<?php echo esc_attr( $this->get_field_name('phone_icon') ); ?>" value="<?php echo esc_attr( $instance['phone_icon'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('phone_text') ); ?>"><?php esc_html_e('Title', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('phone_text') ); ?>" name="<?php echo esc_attr( $this->get_field_name('phone_text') ); ?>" value="<?php echo esc_attr( $instance['phone_text'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('phone') ); ?>"><?php esc_html_e('Content', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('phone') ); ?>" name="<?php echo esc_attr( $this->get_field_name('phone') ); ?>" value="<?php echo esc_attr( $instance['phone'] ); ?>" />
				</p>
			</div>

			<div class="oceanwp-infos">
				<h2><?php esc_html_e('Mobile:', 'oceanwp'); ?></h2>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('mobile_icon') ); ?>"><?php esc_html_e('Icon Class', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('mobile_icon') ); ?>" name="<?php echo esc_attr( $this->get_field_name('mobile_icon') ); ?>" value="<?php echo esc_attr( $instance['mobile_icon'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('mobile_text') ); ?>"><?php esc_html_e('Title', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('mobile_text') ); ?>" name="<?php echo esc_attr( $this->get_field_name('mobile_text') ); ?>" value="<?php echo esc_attr( $instance['mobile_text'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('mobile') ); ?>"><?php esc_html_e('Content', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('mobile') ); ?>" name="<?php echo esc_attr( $this->get_field_name('mobile') ); ?>" value="<?php echo esc_attr( $instance['mobile'] ); ?>" />
				</p>
			</div>

			<div class="oceanwp-infos">
				<h2><?php esc_html_e('Fax:', 'oceanwp'); ?></h2>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('fax_icon') ); ?>"><?php esc_html_e('Icon Class', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('fax_icon') ); ?>" name="<?php echo esc_attr( $this->get_field_name('fax_icon') ); ?>" value="<?php echo esc_attr( $instance['fax_icon'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('fax_text') ); ?>"><?php esc_html_e('Title', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('fax_text') ); ?>" name="<?php echo esc_attr( $this->get_field_name('fax_text') ); ?>" value="<?php echo esc_attr( $instance['fax_text'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('fax') ); ?>"><?php esc_html_e('Content', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('fax') ); ?>" name="<?php echo esc_attr( $this->get_field_name('fax') ); ?>" value="<?php echo esc_attr( $instance['fax'] ); ?>" />
				</p>
			</div>

			<div class="oceanwp-infos">
				<h2><?php esc_html_e('Email:', 'oceanwp'); ?></h2>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('email_icon') ); ?>"><?php esc_html_e('Icon Class', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('email_icon') ); ?>" name="<?php echo esc_attr( $this->get_field_name('email_icon') ); ?>" value="<?php echo esc_attr( $instance['email_icon'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('email_text') ); ?>"><?php esc_html_e('Title', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('email_text') ); ?>" name="<?php echo esc_attr( $this->get_field_name('email_text') ); ?>" value="<?php echo esc_attr( $instance['email_text'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('email') ); ?>"><?php esc_html_e('URL', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('email') ); ?>" name="<?php echo esc_attr( $this->get_field_name('email') ); ?>" value="<?php echo esc_attr( $instance['email'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('emailtxt') ); ?>"><?php esc_html_e('URL Text', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('emailtxt') ); ?>" name="<?php echo esc_attr( $this->get_field_name('emailtxt') ); ?>" value="<?php echo esc_attr( $instance['emailtxt'] ); ?>" />
				</p>
			</div>

			<div class="oceanwp-infos">
				<h2><?php esc_html_e('Website:', 'oceanwp'); ?></h2>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('web_icon') ); ?>"><?php esc_html_e('Icon Class', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('web_icon') ); ?>" name="<?php echo esc_attr( $this->get_field_name('web_icon') ); ?>" value="<?php echo esc_attr( $instance['web_icon'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('web_text') ); ?>"><?php esc_html_e('Title', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('web_text') ); ?>" name="<?php echo esc_attr( $this->get_field_name('web_text') ); ?>" value="<?php echo esc_attr( $instance['web_text'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('web') ); ?>"><?php esc_html_e('URL (with HTTP)', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('web') ); ?>" name="<?php echo esc_attr( $this->get_field_name('web') ); ?>" value="<?php echo esc_attr( $instance['web'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('webtxt') ); ?>"><?php esc_html_e('URL Text', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('webtxt') ); ?>" name="<?php echo esc_attr( $this->get_field_name('webtxt') ); ?>" value="<?php echo esc_attr( $instance['webtxt'] ); ?>" />
				</p>
			</div>

			<div class="oceanwp-infos">
				<h2><?php esc_html_e('Skype:', 'oceanwp'); ?></h2>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('skype') ); ?>"><?php esc_html_e('Username', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('skype') ); ?>" name="<?php echo esc_attr( $this->get_field_name('skype') ); ?>" value="<?php echo esc_attr( $instance['skype'] ); ?>" />
				</p>

				<p>
					<label for="<?php echo esc_attr( $this->get_field_id('skypetxt') ); ?>"><?php esc_html_e('Text', 'oceanwp'); ?></label>
					<input class="widefat" type="text" id="<?php echo esc_attr( $this->get_field_id('skypetxt') ); ?>" name="<?php echo esc_attr( $this->get_field_name('skypetxt') ); ?>" value="<?php echo esc_attr( $instance['skypetxt'] ); ?>" />
				</p>
			</div>

		<?php

		}

	}
}
register_widget( 'OceanWP_Contact_Info_Widget' );

// Widget Styles
function oceanwp_contact_info_widget_style() {
	global $pagenow;
	if ( is_admin() && $pagenow == "widgets.php" ) {
		add_action( 'admin_head', 'oceanwp_contact_infos_style' );
		function oceanwp_contact_infos_style() { ?>
			<style>
				.oceanwp-infos { background: #fafafa; padding: 16px 10px; border: 1px solid #e5e5e5; margin-bottom: 10px; }
				.oceanwp-infos h2 { font-size: 16px; margin: 0 0 10px; }
				.oceanwp-infos p { margin: 0 0 8px; }
				.oceanwp-infos p:last-child { margin: 0; }
				.oceanwp-infos label { margin-bottom: 3px; display: block; color: #222; }
			</style>
		<?php
		}
	}
}
add_action( 'admin_init', 'oceanwp_contact_info_widget_style' );