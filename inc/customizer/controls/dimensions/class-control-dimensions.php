<?php
/**
 * Customizer Control: oceanwp-dimensions.
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
 * Buttonset control
 */
class OceanWP_Customizer_Dimensions_Control extends WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'oceanwp-dimensions';

	/**
	 * Translation strings.
	 */
	public $l10n = array();

	/**
	 * Start things.
	 *
	 * @access public
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );

		// Translation strings.
		$this->l10n = wp_parse_args(
			$this->l10n,
			array(
				'top' 		=> esc_attr__( 'Top', 'oceanwp' ),
				'bottom' 	=> esc_attr__( 'Bottom', 'oceanwp' ),
				'left' 		=> esc_attr__( 'Left', 'oceanwp' ),
				'right' 	=> esc_attr__( 'Right', 'oceanwp' ),
			)
		);

	}

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		wp_enqueue_script( 'oceanwp-dimensions', OCEANWP_INC_DIR_URI . 'customizer/controls/dimensions/dimensions.js', array( 'jquery', 'customize-base' ), false, true );
		wp_enqueue_style( 'oceanwp-dimensions', OCEANWP_INC_DIR_URI . 'customizer/controls/dimensions/dimensions.css', null );
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @see WP_Customize_Control::to_json()
	 */
	public function to_json() {
		parent::to_json();

		$this->json['id'] 		= $this->id;
		$this->json['title'] 	= esc_html__( 'Link values together', 'oceanwp' );

		$this->json['inputAttrs'] = '';
		foreach ( $this->input_attrs as $attr => $value ) {
			$this->json['inputAttrs'] .= $attr . '="' . esc_attr( $value ) . '" ';
		}

		foreach ( $this->settings as $setting_key => $setting_id ) {
			$this->json[ $setting_key ] = array(
				'link'  	=> $this->get_link( $setting_key ),
				'value' 	=> $this->value( $setting_key ),
				'label' 	=> isset( $this->l10n[ $setting_key ] ) ? $this->l10n[ $setting_key ] : ''
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
	protected function content_template() {
		?>
		<# if ( data.label ) { #>
			<span class="customize-control-title">{{{ data.label }}}</span>
		<# } #>

		<# if ( data.description ) { #>
			<span class="description customize-control-description">{{{ data.description }}}</span>
		<# } #>

		<ul>
			<# for ( key in data.settings ) { #>
				<li class="dimension-wrap {{ key }}">
					<input {{{ data.inputAttrs }}} type="number" class="dimension-{{ key }}" {{{ data[ key ].link }}} value="{{{ data[ key ].value }}}" />
					<span class="dimension-label">{{ data[ key ].label }}</span>
				</li>
			<# } #>

			<li class="dimension-wrap">
				<div class="link-dimensions">
					<span class="dashicons dashicons-admin-links oceanwp-linked" data-element="{{ data.id }}" title="{{ data.title }}"></span>
					<span class="dashicons dashicons-editor-unlink oceanwp-unlinked" data-element="{{ data.id }}" title="{{ data.title }}"></span>
				</div>
			</li>
		</ul>

		<?php
	}
}
