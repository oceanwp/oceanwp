<?php
/**
 * Customizer Control: oceanwp-radio-image.
 *
 * @package     OceanWP WordPress theme
 * @subpackage  Controls
 * @see   		https://github.com/aristath/kirki
 * @license     http://opensource.org/licenses/https://opensource.org/licenses/MIT
 * @since       1.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Radio image control
 */
class OceanWP_Customizer_Radio_Image_Control extends WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'oceanwp-radio-image';

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		wp_enqueue_script( 'oceanwp-radio-image', OCEANWP_INC_DIR_URI . 'customizer/controls/radio-image/radio-image.js', array( 'jquery', 'customize-base' ), false, true );
		wp_enqueue_style( 'oceanwp-radio-image-css', OCEANWP_INC_DIR_URI . 'customizer/controls/radio-image/radio-image.css', null );
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @see WP_Customize_Control::to_json()
	 */
	public function to_json() {
		parent::to_json();

		if ( isset( $this->default ) ) {
			$this->json['default'] 	= $this->default;
		} else {
			$this->json['default'] 	= $this->setting->default;
		}
		$this->json['value']       	= $this->value();
		$this->json['choices']     	= $this->choices;
		$this->json['link']        	= $this->get_link();
		$this->json['id']          	= $this->id;

		$this->json['inputAttrs'] = '';
		foreach ( $this->input_attrs as $attr => $value ) {
			$this->json['inputAttrs'] .= $attr . '="' . esc_attr( $value ) . '" ';
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
	protected function content_template() {
		?>
		<# if ( data.label ) { #>
			<span class="customize-control-title">{{{ data.label }}}</span>
		<# } #>
		<# if ( data.description ) { #>
			<span class="description customize-control-description">{{{ data.description }}}</span>
		<# } #>
		<div id="input_{{ data.id }}" class="image">
			<# for ( key in data.choices ) { #>
				<input {{{ data.inputAttrs }}} class="image-select" type="radio" value="{{ key }}" name="_customize-radio-{{ data.id }}" id="{{ data.id }}{{ key }}" {{{ data.link }}}<# if ( data.value === key ) { #> checked="checked"<# } #>>
					<label for="{{ data.id }}{{ key }}">
						<img src="{{ data.choices[ key ] }}">
						<span class="image-clickable"></span>
					</label>
				</input>
			<# } #>
		</div>
		<?php
	}
}
