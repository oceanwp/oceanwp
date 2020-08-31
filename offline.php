<?php
/**
 * The template for displaying offline pages in PWA.
 *
 * @package OceanWP WordPress theme
 * @since   1.8.8
 */

pwa_get_header( 'pwa' );

do_action( 'ocean_do_offline' );

pwa_get_footer( 'pwa' );
