<?php
/**
 * Custom Header Style
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$header_query = false;

$get_id = get_theme_mod( 'ocean_header_page_id' );

// Add container class if the header is not full width
$class = '';
if ( true == get_theme_mod( 'ocean_add_custom_header_container', true ) )  {
    $class = ' container';
}

if ( ! empty( $get_id ) ) {
    $header_query = new WP_Query( array( 'p' => $get_id, 'post_type' => 'any' ) );
} ?>

<?php do_action( 'ocean_before_header_inner' ); ?>

<div id="site-header-inner" class="clr<?php echo esc_attr( $class ); ?>">

    <?php
    // If Beaver Builder
    if ( class_exists( 'FLBuilder' ) && ! empty( $get_id ) ) {

        echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

    }

    // If page has content
    else if ( ! empty( $header_query ) && $header_query->have_posts() ) {

        $header_query->the_post();
        the_content();
        wp_reset_postdata();

    } ?>

</div>

<?php do_action( 'ocean_after_header_inner' ); ?>