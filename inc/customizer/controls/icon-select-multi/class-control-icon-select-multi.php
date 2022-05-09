<?php
/**
 * Customizer Control: oceanwp-icon-multi.
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
class OceanWP_Customizer_Icon_Select_Multi_Control extends WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'oceanwp_iconmulti';

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		wp_enqueue_script( 'oceanwp-iconmulti-select', OCEANWP_INC_DIR_URI . 'customizer/assets/min/js/iconmulti-select.min.js', array( 'jquery', 'customize-base' ), false, true );
		wp_enqueue_style( 'oceanwp-iconmulti-select', OCEANWP_INC_DIR_URI . 'customizer/assets/min/css/iconmulti-select.min.css', null );
	}

	// /**
	//  * Refresh the parameters passed to the JavaScript via JSON.
	//  *
	//  * @see WP_Customize_Control::to_json()
	//  */
	// public function to_json() {
	// 	parent::to_json();

	// 	if ( isset( $this->default ) ) {
	// 		$this->json['default'] = $this->default;
	// 	} else {
	// 		$this->json['default'] = $this->setting->default;
	// 	}
	// 	$this->json['value']       = $this->value();
	// 	$this->json['choices']     = $this->choices;
	// 	$this->json['link']        = $this->get_link();
	// 	$this->json['id']          = $this->id;
	// 	$this->json['svg_icon']    = $this->svg_icon();

	// }

	// /**
	//  * Returns an array of translation strings.
	//  *
	//  * @access protected
	//  * @since 3.0.0
	//  * @param string|false $id The string-ID.
	//  * @return string
	//  */
	// protected function svg_icon( $icon = 'angle_up' ) {
	// 	oceanwp_icon( $icon, false, 'icon-select-label' );
	// }

	protected function render_content() {
		?>
		<label class="customizer-text">
			<?php if ( ! empty( $this->label ) ) { ?>
				<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
			<?php } ?>
			<?php if ( ! empty( $this->description ) ) { ?>
				<span class="description customize-control-description"><?php echo wp_kses_post( $this->description ); ?></span>
			<?php } ?>
		</label>
		<div id="input_<?php echo esc_attr( $this->id ); ?>" class="icon-select customize-control-oceanwp-iconmulti clr">
			<?php foreach ( $this->choices as $key => $value ) { ?>
				<label>
					<input class="icon-select-input" type="radio" value="<?php echo esc_attr( $key ); ?>" name="_customize-icon-select-<?php echo esc_attr( $this->id ); ?>"" <?php echo esc_attr( $this->get_link() ); ?> <?php checked( esc_attr( $key ), $this->value() ); ?> />
					<?php oceanwp_icon( $key, true, 'icon-select-label' ); ?>
				</label>
			<?php } ?>
		</div>
		<?php
	}
}
