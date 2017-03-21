<?php
/**
 * The next/previous links to go to another post.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Check if post has terms if so then show next/prev from the same_cat
$has_terms = oceanwp_post_has_terms( get_the_ID() );
$same_cat  = $has_terms;
$same_cat  = apply_filters( 'ocean_next_prev_in_same_term', $same_cat );

// Get taxonomy for same_term filter
if ( $same_cat ) {
    $taxonomy = oceanwp_get_post_type_cat_tax();
    $taxonomy = apply_filters( 'ocean_next_prev_same_cat_taxonomy', $taxonomy );
} else {
    $taxonomy = '';
}

// Exclude terms
$excluded_terms = '';

// Previous post link title
$prev_post_link_title = '%title';
$prev_post_link_title = apply_filters( 'ocean_prev_post_link_title', $prev_post_link_title );

// Next post link title
$next_post_link_title = '%title';
$next_post_link_title = apply_filters( 'ocean_next_post_link_title', $next_post_link_title );

// Get post links
if ( $has_terms ) {
    $prev_link  = get_previous_post_link( '%link',  $prev_post_link_title, $same_cat, $excluded_terms, $taxonomy );
    $next_link  = get_next_post_link( '%link', $next_post_link_title, $same_cat, $excluded_terms, $taxonomy );
} else {
    $prev_link  = get_previous_post_link( '%link', $prev_post_link_title, false );
    $next_link  = get_next_post_link( '%link', $next_post_link_title, false );
} ?>

<?php if ( $prev_link || $next_link ) : ?>

    <div class="post-pagination-wrap clr">

        <ul class="post-pagination clr">

            <?php if ( $prev_link ) : ?>

                <li class="post-prev"><span class="title"><i class="fa fa-long-arrow-left"></i><?php esc_html_e( 'Previous Post', 'oceanwp' ); ?></span><?php echo wp_kses_post( $prev_link ); ?></li>

            <?php endif; ?>

            <?php if ( $next_link ) : ?>

                <li class="post-next"><span class="title"><i class="fa fa-long-arrow-right"></i><?php esc_html_e( 'Next Post', 'oceanwp' ); ?></span><?php echo wp_kses_post( $next_link ); ?></li>

            <?php endif; ?>
            
        </ul><!-- .post-post-pagination -->

    </div><!-- .post-pagination-wrap -->

<?php endif; ?>