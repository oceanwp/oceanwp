<?php
/**
 * Social widget.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Social_Widget' ) ) {
	class OceanWP_Social_Widget extends WP_Widget {

		/**
		 * Register widget with WordPress.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {

			// Declare social services array
			$this->social_services_array = apply_filters( 'ocean_social_widget_profiles', array(
				'twitter' => array(
					'name' => 'Twitter',
					'url'  => '',
				),
				'facebook' => array(
					'name' => 'Facebook',
					'url'  => '',
				),
				'instagram' => array(
					'name' => 'Instagram',
					'url'  => '',
				),
				'google-plus' => array(
					'name' => 'GooglePlus',
					'url'  => '',
				),
				'linkedin' => array(
					'name' => 'LinkedIn',
					'url'  => '',
				),
				'pinterest' => array(
					'name' => 'Pinterest',
					'url'  => '',
				),
				'yelp' => array(
					'name' => 'Yelp',
					'url'  => '',
				),
				'dribbble' => array(
					'name' => 'Dribbble',
					'url'  => '',
				),
				'flickr' => array(
					'name' => 'Flickr',
					'url'  => '',
				),
				'vk' => array(
					'name' => 'VK',
					'url'  => '',
				),
				'github' => array(
					'name' => 'GitHub',
					'url'  => '',
				),
				'tumblr' => array(
					'name' => 'Tumblr',
					'url'  => '',
				),
				'skype' => array(
					'name' => 'Skype',
					'url'  => '',
				),
				'trello' => array(
					'name' => 'Trello',
					'url'  => '',
				),
				'foursquare' => array(
					'name' => 'Foursquare',
					'url'  => '',
				),
				'xing' => array(
					'name' => 'Xing',
					'url'  => '',
				),
				'vimeo-square' => array(
					'name' => 'Vimeo',
					'url'  => '',
				),
				'vine' => array(
					'name' => 'Vine',
					'url'  => '',
				),
				'youtube' => array(
					'name' => 'Youtube',
					'url'  => '',
				),
				'rss' => array(
					'name' => 'RSS',
					'url'  => '',
				),
			) );

			// Start up widget
			parent::__construct(
				'ocean_social',
				esc_html__( '&raquo; Social Icons', 'oceanwp' ),
				array(
					'classname'   => 'widget-oceanwp-social social-widget',
					'description' => esc_html__( 'Display your social media icons.', 'oceanwp' ),
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

			// Get social services and 
			$social_services = isset( $instance['social_services'] ) ? $instance['social_services'] : '';

			// Return if no services defined
			if ( ! $social_services ) {
				return;
			}

			// Define vars
			$title         	= isset( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
			$style   		= isset( $instance['style'] ) ? $instance['style'] : '';
			$transition   	= isset( $instance['transition'] ) ? $instance['transition'] : '';
			$target        	= isset( $instance['target'] ) ? $instance['target'] : '';
			$size          	= isset( $instance['size'] ) ? $instance['size'] : '';
			$font_size     	= isset( $instance['font_size'] ) ? $instance['font_size'] : '';
			$border_radius 	= isset( $instance['border_radius'] ) ? $instance['border_radius'] : '';

			// Sanitize vars
			$size          = $size ? $size : '';
			$font_size     = $font_size ? $font_size : '';
			$border_radius = $border_radius ? $border_radius  : '';
			$target        = 'blank' == $target ? ' target="_blank"' : '';

			// Inline style
			$add_style = '';
			if ( $size && 'simple' != $style ) {
				$add_style .= 'height:'. $size .';width:'. $size .';line-height:'. $size .';';
			}
			if ( $font_size ) {
				$add_style .= 'font-size:'. $font_size .';';
			}
			if ( $border_radius && 'simple' != $style ) {
				$add_style .= 'border-radius:'. $border_radius .';';
			}
			if ( $add_style ) {
				$add_style = ' style="' . esc_attr( $add_style ) . '"';
			}

			// Before widget hook
			echo $args['before_widget'];

				// Display title
				if ( $title ) {
					echo $args['before_title'] . $title . $args['after_title'];
				}

				// Display the social icons. ?>
				<ul class="social-icons <?php echo esc_attr( $transition ); ?> style-<?php echo esc_attr( $style ); ?>">
					<?php
					// Original Array
					$social_services_array = $this->social_services_array;

					// Loop through each item in the array
					foreach( $social_services as $key => $val ) {
						$link     = ! empty( $social_services[$key]['url'] ) ? $social_services[$key]['url'] : null;
						$name     = $social_services_array[$key]['name'];
						if ( $link ) {
							$key  = 'vimeo-square' == $key ? 'vimeo' : $key;
							$icon = 'youtube' == $key ? 'youtube-play' : $key;
							$icon = 'pinterest' == $key ? 'pinterest-p' : $icon;
							$icon = 'bloglovin' == $key ? 'heart' : $icon;
							$icon = 'vimeo-square' == $key ? 'vimeo' : $icon;
							echo '<li class="oceanwp-'. esc_attr( $key ) .'"><a href="'. esc_url( $link ) .'" title="'. esc_attr( $name ) .'" '. $add_style . $target .'><i class="fa fa-'. esc_attr( $icon ) .'"></i></a></li>';
						}
					} ?>
				</ul>

			<?php
			// After widget hook
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
			// Sanitize data
			$instance = $old_instance;
			$instance['title']           	= ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : null;
			$instance['style'] 				= ! empty( $new_instance['style'] ) ? strip_tags( $new_instance['style'] ) : 'light';
			$instance['transition'] 	 	= ! empty( $new_instance['transition'] ) ? strip_tags( $new_instance['transition'] ) : 'rotate';
			$instance['target']          	= ! empty( $new_instance['target'] ) ? strip_tags( $new_instance['target'] ) : 'blank';
			$instance['size']            	= ! empty( $new_instance['size'] ) ? strip_tags( $new_instance['size'] ) : '';
			$instance['border_radius']   	= ! empty( $new_instance['border_radius'] ) ? strip_tags( $new_instance['border_radius'] ) : '';
			$instance['font_size']       	= ! empty( $new_instance['font_size'] ) ? strip_tags( $new_instance['font_size'] ) : '';
			$instance['social_services'] 	= $new_instance['social_services'];
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
				'title'           	=> esc_attr__( 'Follow Us', 'oceanwp' ),
				'style' 	  		=> esc_html__( 'Light', 'oceanwp' ),
				'transition' 	  	=> esc_html__( 'Rotate', 'oceanwp' ),
				'font_size'       	=> '',
				'border_radius'   	=> '',
				'target'          	=> 'blank',
				'size'            	=> '',
				'social_services' 	=> $this->social_services_array
			) ); ?>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'oceanwp' ); ?>:</label> 
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />
			</p>

			<p>
				<label for="<?php echo $this->get_field_id( 'style' ); ?>"><?php esc_html_e( 'Style:', 'oceanwp' ); ?></label>
				<select class='widefat' name="<?php echo $this->get_field_name( 'style' ); ?>" id="<?php echo $this->get_field_id( 'style' ); ?>">
					<option value="light" <?php selected( $instance['style'], 'light' ) ?>><?php esc_html_e( 'Light', 'oceanwp' ); ?></option>
					<option value="dark" <?php selected( $instance['style'], 'dark' ) ?>><?php esc_html_e( 'Dark', 'oceanwp' ); ?></option>
					<option value="colored" <?php selected( $instance['style'], 'colored' ) ?>><?php esc_html_e( 'Colored', 'oceanwp' ); ?></option>
					<option value="simple" <?php selected( $instance['style'], 'simple' ) ?>><?php esc_html_e( 'Simple', 'oceanwp' ); ?></option>
				</select>
			</p>

			<p>
				<label for="<?php echo $this->get_field_id( 'transition' ); ?>"><?php esc_html_e( 'Transition:', 'oceanwp' ); ?></label>
				<select class='widefat' name="<?php echo $this->get_field_name( 'transition' ); ?>" id="<?php echo $this->get_field_id( 'transition' ); ?>">
					<option value="no-transition" <?php selected( $instance['transition'], 'no-transition' ) ?>><?php esc_html_e( 'None', 'oceanwp' ); ?></option>
					<option value="float" <?php selected( $instance['transition'], 'float' ) ?>><?php esc_html_e( 'Float', 'oceanwp' ); ?></option>
					<option value="rotate" <?php selected( $instance['transition'], 'rotate' ) ?>><?php esc_html_e( 'Rotate', 'oceanwp' ); ?></option>
					<option value="zoomout" <?php selected( $instance['transition'], 'zoomout' ) ?>><?php esc_html_e( 'Zoom Out', 'oceanwp' ); ?></option>
				</select>
			</p>
			
			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'target' ) ); ?>"><?php esc_html_e( 'Link Target', 'oceanwp' ); ?>:</label>
				<br />
				<select class="oceanwp-widget-select" name="<?php echo esc_attr( $this->get_field_name( 'target' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'target' ) ); ?>">
					<option value="blank" <?php selected( $instance['target'], 'blank' ) ?>><?php esc_html_e( 'Blank', 'oceanwp' ); ?></option>
					<option value="self" <?php selected( $instance['target'], 'self' ) ?>><?php esc_html_e( 'Self', 'oceanwp' ); ?></option>
				</select>
			</p>
			
			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'size' ) ); ?>"><?php esc_html_e( 'Dimensions', 'oceanwp' ); ?>:</label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'size' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'size' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['size'] ); ?>" />
				<small><?php esc_html_e( 'Example:', 'oceanwp' ); ?> 40px</small>
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'font_size' ) ); ?>"><?php esc_html_e( 'Font Size', 'oceanwp' ); ?>:</label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'font_size' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'font_size' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['font_size'] ); ?>" />
				<small><?php esc_html_e( 'Example:', 'oceanwp' ); ?> 18px</small>
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'border_radius' ) ); ?>"><?php esc_html_e( 'Border Radius', 'oceanwp' ); ?></label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'border_radius' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'border_radius' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['border_radius'] ); ?>" />
				<small><?php esc_html_e( 'Example:', 'oceanwp' ); ?> 4px</small>
			</p>

			<?php
			$field_id_services   = $this->get_field_id( 'social_services' );
			$field_name_services = $this->get_field_name( 'social_services' ); ?>
			<h3 style="margin-top:20px;margin-bottom:0;"><?php esc_html_e( 'Social Links','oceanwp' ); ?></h3>
			<ul id="<?php echo esc_attr( $field_id_services ); ?>" class="oceanwp-social-widget-services-list">
				<input type="hidden" id="<?php echo esc_attr( $field_name_services ); ?>" value="<?php echo esc_attr( $field_name_services ); ?>">
				<input type="hidden" id="<?php echo esc_attr( wp_create_nonce( 'oceanwp_fontawesome_social_widget_nonce' ) ); ?>">
				<?php
				// Social array
				$social_services_array = $this->social_services_array;
				// Get current services display
				$display_services = isset ( $instance['social_services'] ) ? $instance['social_services']: '';
				// Loop through social services to display inputs
				foreach( $display_services as $key => $val ) {
					$url  = ! empty( $display_services[$key]['url'] ) ? esc_url( $display_services[$key]['url'] ) : null;
					$name = $social_services_array[$key]['name']; ?>
					<li id="<?php echo esc_attr( $field_id_services ); ?>_0<?php echo esc_attr( $key ); ?>">
						<p>
							<label for="<?php echo esc_attr( $field_id_services ); ?>-<?php echo esc_attr( $key ); ?>-name"><?php echo strip_tags( $name ); ?>:</label>
							<input type="hidden" id="<?php echo esc_attr( $field_id_services ); ?>-<?php echo esc_attr( $key ); ?>-url" name="<?php echo esc_attr( $field_name_services .'['.$key.'][name]' ); ?>" value="<?php echo esc_attr( $name ); ?>">
							<input type="url" class="widefat" id="<?php echo esc_attr( $field_id_services ); ?>-<?php echo esc_attr( $key ); ?>-url" name="<?php echo esc_attr( $field_name_services .'['.$key.'][url]' ); ?>" value="<?php echo esc_attr( $url ); ?>" />
						</p>
					</li>
				<?php } ?>
			</ul>

		<?php

		}

	}
}
register_widget( 'OceanWP_Social_Widget' );

// Widget Styles
if ( ! function_exists( 'oceanwp_social_widget_style' ) ) {
	function oceanwp_social_widget_style() { ?>
		<style>
		.oceanwp-social-widget-services-list { padding-top: 10px; }
		.oceanwp-social-widget-services-list li { cursor: move; background: #fafafa; padding: 10px; border: 1px solid #e5e5e5; margin-bottom: 10px; }
		.oceanwp-social-widget-services-list li p { margin: 0 }
		.oceanwp-social-widget-services-list li label { margin-bottom: 3px; display: block; color: #222; }
		.oceanwp-social-widget-services-list li label span.fa { margin-right: 10px }
		.oceanwp-social-widget-services-list .placeholder { border: 1px dashed #e3e3e3 }
		.oceanwp-widget-select { width: 100% }
		</style>
	<?php
	}
}


// Widget AJAX functions
function oceanwp_social_widget_scripts() {
	global $pagenow;
	if ( is_admin() && $pagenow == "widgets.php" ) {
		add_action( 'admin_head', 'oceanwp_social_widget_style' );
		add_action( 'admin_footer', 'add_new_oceanwp_social_ajax_trigger' );
		function add_new_oceanwp_social_ajax_trigger() { ?>
			<script type="text/javascript" >
				jQuery(document).ready(function($) {
					jQuery(document).ajaxSuccess(function(e, xhr, settings) {
						var widget_id_base = 'ocean_social';
						if ( settings.data.search( 'action=save-widget' ) != -1 && settings.data.search( 'id_base=' + widget_id_base) != -1 ) {
							oceanwpSortServices();
						}
					} );
					function oceanwpSortServices() {
						jQuery( '.oceanwp-social-widget-services-list' ).each( function() {
							var id = jQuery(this).attr( 'id' );
							$( '#'+ id ).sortable( {
								placeholder : "placeholder",
								opacity     : 0.6
							} );
						} );
					}
					oceanwpSortServices();
				} );
			</script>
		<?php
		}
	}
}
add_action( 'admin_init', 'oceanwp_social_widget_scripts' );