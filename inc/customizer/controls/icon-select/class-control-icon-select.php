<?php
/**
 * Customizer Control: oceanwp-icon.
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
 * Range control
 */
class OceanWP_Customizer_Icon_Select_Control extends WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'oceanwp-icon';

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		wp_enqueue_script( 'oceanwp-icon-select', OCEANWP_INC_DIR_URI . 'customizer/assets/min/js/icon-select.min.js', array( 'jquery', 'customize-base' ), false, true );
		wp_enqueue_style( 'oceanwp-icon-select', OCEANWP_INC_DIR_URI . 'customizer/assets/min/css/icon-select.min.css', null );
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @see WP_Customize_Control::to_json()
	 */
	public function to_json() {
		parent::to_json();

		if ( isset( $this->default ) ) {
			$this->json['default'] = $this->default;
		} else {
			$this->json['default'] = $this->setting->default;
		}
		$this->json['value']       = $this->value();
		$this->json['choices']     = $this->choices;
		$this->json['link']        = $this->get_link();
		$this->json['id']          = $this->id;

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
	protected function content_template() {
		?>
		<label class="customizer-text">
			<# if ( data.label ) { #>
				<span class="customize-control-title">{{{ data.label }}}</span>
			<# } #>
			<# if ( data.description ) { #>
				<span class="description customize-control-description">{{{ data.description }}}</span>
			<# } #>
		</label>
		<div id="input_{{ data.id }}" class="icon-select clr">
			<# for ( key in data.choices ) { #>
				<label>
					<input class="icon-select-input" type="radio" value="{{ key }}" name="_customize-icon-select-{{ data.id }}" {{{ data.link }}}<# if ( data.value === key ) { #> checked<# } #> />
					<span class="icon-select-label"><i class="{{ key }}"></i></span>
				</label>
			<# } #>
		</div>
		<?php
	}
}
