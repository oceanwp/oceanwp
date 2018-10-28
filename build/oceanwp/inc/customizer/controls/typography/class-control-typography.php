<?php
/**
 * Customizer Control: oceanwp-typography.
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
class OceanWP_Customizer_Typography_Control extends WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'oceanwp-typography';

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		// Don't call is The Event Calendar active to avoid conflict
		if ( ! class_exists( 'Tribe__Events__Main' ) ) {
			wp_enqueue_script( 'oceanwp-select2', OCEANWP_INC_DIR_URI . 'customizer/controls/select2.min.js', array( 'jquery' ), false, true );
			wp_enqueue_style( 'select2', OCEANWP_INC_DIR_URI . 'customizer/controls/select2.min.css', null );
			wp_enqueue_script( 'oceanwp-typography-js', OCEANWP_INC_DIR_URI . 'customizer/assets/min/js/typography.min.js', array( 'jquery', 'select2' ), false, true );
		}
		wp_enqueue_style( 'oceanwp-typography', OCEANWP_INC_DIR_URI . 'customizer/assets/min/css/typography.min.css', null );
	}

	/**
	 * Render the control's content.
	 * Allows the content to be overriden without having to rewrite the wrapper in $this->render().
	 *
	 * @access protected
	 */
	protected function render_content() {
		$this_val = $this->value(); ?>
		<label>
			<?php if ( ! empty( $this->label ) ) : ?>
				<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
			<?php endif; ?>
			<?php if ( ! empty( $this->description ) ) : ?>
				<span class="description customize-control-description"><?php echo wp_kses_post( $this->description ); ?></span>
			<?php endif; ?>

			<select class="oceanwp-typography-select" <?php $this->link(); ?>>
				<option value="" <?php if ( ! $this_val ) echo 'selected="selected"'; ?>><?php esc_html_e( 'Default', 'oceanwp' ); ?></option>
				<?php
				// Add custom fonts from child themes
				if ( function_exists( 'ocean_add_custom_fonts' ) ) {
					$fonts = ocean_add_custom_fonts();
					if ( $fonts && is_array( $fonts ) ) { ?>
						<optgroup label="<?php esc_html_e( 'Custom Fonts', 'oceanwp' ); ?>">
							<?php foreach ( $fonts as $font ) { ?>
								<option value="<?php echo esc_html( $font ); ?>" <?php if ( $font == $this_val ) echo 'selected="selected"'; ?>><?php echo esc_html( $font ); ?></option>
							<?php } ?>
						</optgroup>
					<?php }
				}

				// Get Standard font options
				if ( $std_fonts = oceanwp_standard_fonts() ) { ?>
					<optgroup label="<?php esc_html_e( 'Standard Fonts', 'oceanwp' ); ?>">
						<?php
						// Loop through font options and add to select
						foreach ( $std_fonts as $font ) { ?>
							<option value="<?php echo esc_html( $font ); ?>" <?php selected( $font, $this_val ); ?>><?php echo esc_html( $font ); ?></option>
						<?php } ?>
					</optgroup>
				<?php }

				// Google font options
				if ( $google_fonts = oceanwp_google_fonts_array() ) { ?>
					<optgroup label="<?php esc_html_e( 'Google Fonts', 'oceanwp' ); ?>">
						<?php
						// Loop through font options and add to select
						foreach ( $google_fonts as $font ) { ?>
							<option value="<?php echo esc_html( $font ); ?>" <?php selected( $font, $this_val ); ?>><?php echo esc_html( $font ); ?></option>
						<?php } ?>
					</optgroup>
				<?php } ?>
			</select>

		</label>

		<?php
	}
}
