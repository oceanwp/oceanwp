<?php
/**
 * OceanWP Customizer: Common functions
 *
 * @package OceanWP WordPress theme
 */

// if ( ! defined( 'ABSPATH' ) ) {
// 	exit;
// }

// function oceanwp_customize_add_panel( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$panel_args = array(
// 		'title'    => $args['title'],
// 		'priority' => $args['priority'],
// 	);

// 	$customize->add_panel(
// 		$id,
// 		$panel_args,
// 	);
// }

// function oceanwp_customize_add_section( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$section_args = array(
// 		'title'    => $args['title'],
// 		'priority' => $args['priority'],
// 	);

// 	if ( isset( $args['panel'] ) && $args['panel'] ) {
// 		$section_args['panel'] = $args['panel'];
// 	}

// 	if ( isset( $args['section'] ) && $args['section'] ) {
// 		$section_args['section'] = $args['section'];
// 	}

// 	$add_section = new OWP_Customize_Section(
// 		$customize,
// 		$id,
// 		$section_args
// 	);

// 	$customize->add_section( $add_section );
// }

// function oceanwp_customize_render_color( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$settings = array();
// 	$settingGroup = array();

// 	foreach ( $args['setting_args'] as $key => $setting) {
// 		$customize->add_setting(
// 			$setting['id'],
// 			$setting['attr']
// 		);

// 		$settings[$key] = $setting['id'];

// 		$settingGroup[$key] = array(
// 			'id' => $key,
// 			'label' => $setting['label']
// 		);
// 	}

// 	$control_args = array(
// 		'label'    => $args['label'],
// 		'description' => isset( $args['desc'] ) ? $args['desc'] : '',
// 		'type'     => $args['type'],
// 		'section'  => $args['section'],
// 		'settings' => $settings,
// 		'priority' => $args['priority'],
// 		'json' => array(
// 			'hideLabel'   => $args['hideLabel'],
// 			'showAlpha'   => $args['showAlpha'],
// 			'showPalette' => $args['showPalette'],
// 			'wrapper'     => $id,
// 			'settingGroup' => $settingGroup
// 		),
// 	);

// 	if ( isset( $args['active_callback'] ) && $args['active_callback'] ) {
// 		$control_args['active_callback'] = $args['active_callback'];
// 	}

// 	$customize->add_control(
// 		new WP_Customize_Control(
// 			$customize,
// 			$id,
// 			$control_args
// 		)
// 	);
// }

// function oceanwp_customize_render_switch( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$setting_args = array(
// 		'transport' => $args['transport'],
// 	);

// 	if ( isset( $args['default'] ) && $args['default'] ) {
// 		$setting_args['default'] = $args['default'];
// 	}

// 	$customize->add_setting(
// 		$id,
// 		$setting_args
// 	);

// 	$control_args = array(
// 		'label'    => $args['label'],
// 		'description' => isset( $args['desc'] ) ? $args['desc'] : '',
// 		'type'     => $args['type'],
// 		'section'  => $args['section'],
// 		'priority' => $args['priority'],
// 		'json' => array(
// 			'hideLabel'   => $args['hideLabel'],
// 			'wrapper'     => $id,
// 		),
// 	);

// 	if ( isset( $args['active_callback'] ) && $args['active_callback'] ) {
// 		$control_args['active_callback'] = $args['active_callback'];
// 	}

// 	$customize->add_control(
// 		new WP_Customize_Control(
// 			$customize,
// 			$id,
// 			$control_args
// 		)
// 	);
// }


// function oceanwp_customize_render_buttons( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$setting_args = array(
// 		'transport' => $args['transport'],
// 	);

// 	if ( isset( $args['default'] ) && $args['default'] ) {
// 		$setting_args['default'] = $args['default'];
// 	}

// 	$customize->add_setting(
// 		$id,
// 		$setting_args
// 	);

// 	$control_args = array(
// 		'label'    => $args['label'],
// 		'description' => isset( $args['desc'] ) ? $args['desc'] : '',
// 		'type'     => $args['type'],
// 		'section'  => $args['section'],
// 		'priority' => $args['priority'],
// 		'json' => array(
// 			'hideLabel'   => $args['hideLabel'],
// 			'wrapper'     => $id,
// 			'wrap'        => $args['wrap'],
// 			'choices'     => $args['choices']
// 		),
// 	);

// 	if ( isset( $args['active_callback'] ) && $args['active_callback'] ) {
// 		$control_args['active_callback'] = $args['active_callback'];
// 	}

// 	$customize->add_control(
// 		new WP_Customize_Control(
// 			$customize,
// 			$id,
// 			$control_args
// 		)
// 	);
// }


// function oceanwp_customize_render_multiselect( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$setting_args = array(
// 		'transport' => $args['transport'],
// 	);

// 	if ( isset( $args['default'] ) && $args['default'] ) {
// 		$setting_args['default'] = $args['default'];
// 	}

// 	$customize->add_setting(
// 		$id,
// 		$setting_args
// 	);

// 	$control_args = array(
// 		'label'    => $args['label'],
// 		'description' => isset( $args['desc'] ) ? $args['desc'] : '',
// 		'type'     => $args['type'],
// 		'section'  => $args['section'],
// 		'priority' => $args['priority'],
// 		'json' => array(
// 			'hideLabel'   => $args['hideLabel'],
// 			'wrapper'     => $id,
// 			'choices'     => $args['choices']
// 		),
// 	);

// 	if ( isset( $args['active_callback'] ) && $args['active_callback'] ) {
// 		$control_args['active_callback'] = $args['active_callback'];
// 	}

// 	$customize->add_control(
// 		new WP_Customize_Control(
// 			$customize,
// 			$id,
// 			$control_args
// 		)
// 	);
// }

// function oceanwp_customize_render_typography( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$settings = array();
// 	$settingGroup = array();

// 	foreach ( $args['setting_args'] as $key => $setting) {
// 		$customize->add_setting(
// 			$setting['id'],
// 			$setting['attr']
// 		);

// 		$settings[$key] = $setting['id'];
// 	}

// 	$control_args = array(
// 		'label'    => $args['label'],
// 		'description' => isset( $args['desc'] ) ? $args['desc'] : '',
// 		'type'     => $args['type'],
// 		'section'  => $args['section'],
// 		'settings' => $settings,
// 		'priority' => $args['priority'],
// 		'json' => array(
// 			'hideLabel'   => $args['hideLabel'],
// 			'wrapper'     => $id,
// 		),
// 	);

// 	if ( isset( $args['active_callback'] ) && $args['active_callback'] ) {
// 		$control_args['active_callback'] = $args['active_callback'];
// 	}

// 	$customize->add_control(
// 		new WP_Customize_Control(
// 			$customize,
// 			$id,
// 			$control_args
// 		)
// 	);
// }

// function oceanwp_customize_render_settings( $customize, $id, $args = array() ) {

// 	if ( empty( $args ) ) {
// 		return;
// 	}

// 	$setting_args = array(
// 		'transport' => $args['transport'],
// 	);

// 	$customize->add_setting(
// 		$id,
// 		$setting_args
// 	);

// 	$control_args = array(
// 		'label'    => $args['label'],
// 		'description' => isset( $args['desc'] ) ? $args['desc'] : '',
// 		'type'     => $args['type'],
// 		'section'  => $args['section'],
// 		'priority' => $args['priority'],
// 		'json' => array(
// 			'hideLabel'   => $args['hideLabel'],
// 			'wrapper'     => $id
// 		),
// 	);

// 	if ( isset( $args['active_callback'] ) && $args['active_callback'] ) {
// 		$control_args['active_callback'] = $args['active_callback'];
// 	}

// 	$customize->add_control(
// 		new WP_Customize_Control(
// 			$customize,
// 			$id,
// 			$control_args
// 		)
// 	);
// }
