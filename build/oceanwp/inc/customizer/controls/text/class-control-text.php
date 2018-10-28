<?php
/**
 * Customizer Control: oceanwp-text.
 *
 * @package     OceanWP WordPress theme
 * @subpackage  Controls
 * @since       1.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Typography control
 */
class OceanWP_Customizer_Text_Control extends WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'oceanwp-text';

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		wp_enqueue_script( 'oceanwp-text-js', OCEANWP_INC_DIR_URI . 'customizer/assets/min/js/text.min.js', array( 'jquery', 'customize-base' ), false, true );
	}

	/**
	 * Renders the control wrapper and calls $this->render_content() for the internals.
	 *
	 * @see WP_Customize_Control::render()
	 */
	protected function render() {
		$id    = 'customize-control-' . str_replace( array( '[', ']' ), array( '-', '' ), $this->id );
		$class = 'customize-control has-switchers customize-control-' . $this->type;

		?><li id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
			<?php $this->render_content(); ?>
		</li><?php
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @see WP_Customize_Control::to_json()
	 */
	public function to_json() {
		parent::to_json();

		$this->json['id'] = $this->id;

		$this->json['desktop'] = array();
	    $this->json['tablet']  = array();
	    $this->json['mobile']  = array();

	    foreach ( $this->settings as $setting_key => $setting ) {
	        $this->json[ $setting_key ] = array(
	            'id'        => $setting->id,
	            'default'   => $setting->default,
	            'link'      => $this->get_link( $setting_key ),
	            'value'     => $this->value( $setting_key ),
	        );
	    }

	}

	/**
	 * An Underscore (JS) template for this control's content (but not its container).
	 *
	 * Class variables for this control class are available in the `data` JS object;
	 * export custom variables by overriding {@see WP_Customize_Control::to_json()}.
	 *
	 * @see WP_Customize_Control::print_template()
	 *
	 * @access protected
	 */
	protected function content_template() { ?>
		
		<# if ( data.label ) { #>
			<span class="customize-control-title">
				<span>{{{ data.label }}}</span>

				<ul class="responsive-switchers">
					<li class="desktop">
						<button type="button" class="preview-desktop active" data-device="desktop">
							<i class="dashicons dashicons-desktop"></i>
						</button>
					</li>
					<li class="tablet">
						<button type="button" class="preview-tablet" data-device="tablet">
							<i class="dashicons dashicons-tablet"></i>
						</button>
					</li>
					<li class="mobile">
						<button type="button" class="preview-mobile" data-device="mobile">
							<i class="dashicons dashicons-smartphone"></i>
						</button>
					</li>
				</ul>

			</span>
		<# } #>

		<# if ( data.description ) { #>
			<span class="description customize-control-description">{{{ data.description }}}</span>
		<# } #>

		<# if ( data.desktop ) { #>
			<div class="desktop control-wrap active">
				<input type="text" value="{{ data.desktop.value }}" placeholder="<?php esc_html_e( 'px - em - rem', 'oceanwp' ); ?>" {{{ data.desktop.link }}} />
	    	</div>
	    <# } #>

		<# if ( data.tablet ) { #>
			<div class="tablet control-wrap">
				<input type="text" value="{{ data.tablet.value }}" placeholder="<?php esc_html_e( 'px - em - rem', 'oceanwp' ); ?>" {{{ data.tablet.link }}} />
	    	</div>
	    <# } #>

		<# if ( data.mobile ) { #>
			<div class="mobile control-wrap">
				<input type="text" value="{{ data.mobile.value }}" placeholder="<?php esc_html_e( 'px - em - rem', 'oceanwp' ); ?>" {{{ data.mobile.link }}} />
	    	</div>
	    <# } #>
	<?php
	}
}
