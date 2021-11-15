<?php

/**
 * Load all our Customizer Custom Controls
 */

add_action( 'customize_register', function() {
    require_once trailingslashit( dirname(__FILE__) ) . 'custom-controls.php';
}, -100 );
