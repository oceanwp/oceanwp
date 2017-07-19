<?php
/**
 * The template for displaying 404 pages.
 *
 * @package OceanWP WordPress theme
 */

namespace Elementor;

// Get ID
$get_id = get_theme_mod( 'ocean_error_page_id' );

// Get the elementor template
$e_template = get_theme_mod( 'ocean_error_page_elementor_templates' );
if ( ! empty( $e_template ) ) {
    $get_id = $e_template;
}

// Get the template
$template = get_theme_mod( 'ocean_error_page_template' );
if ( ! empty( $template ) ) {
    $get_id = $template;
}

// Check if page is Elementor page
$elementor  = get_post_meta( $get_id, '_elementor_edit_mode', true );

// Get content
$get_content = oceanwp_error_page_template_content();

get_header(); ?>

	<?php do_action( 'ocean_before_content_wrap' ); ?>

	<div id="content-wrap" class="container clr">

		<?php do_action( 'ocean_before_primary' ); ?>

		<div id="primary" class="content-area clr">

			<?php do_action( 'ocean_before_content' ); ?>

			<div id="content" class="clr site-content">

				<?php do_action( 'ocean_before_content_inner' ); ?>

				<article class="entry clr">

					<?php
					// Check if there is a template
			        if ( ! empty( $get_id ) ) {

					    // If Elementor
					    if ( class_exists( 'Elementor\Plugin' ) && $elementor ) {

					        echo Plugin::instance()->frontend->get_builder_content_for_display( $get_id );

					    }

					    // If Beaver Builder
					    else if ( class_exists( 'FLBuilder' ) && ! empty( $get_id ) ) {

					        echo do_shortcode( '[fl_builder_insert_layout id="' . $get_id . '"]' );

					    }

					    // Else
					    else {

					        // Display template content
					        echo do_shortcode( $get_content );

					    }

					}

				    // Else
				    else { ?>

				    	<div class="error404-content clr">

							<h2 class="error-title"><?php esc_html_e( 'This page could not be found!', 'oceanwp' ) ?></h2>
							<p class="error-text"><?php esc_html_e( 'We are sorry. But the page you are looking for is not available.', 'oceanwp' ); ?><br /><?php esc_html_e( 'Perhaps you can try a new searching.', 'oceanwp' ); ?></p>
							<?php get_search_form(); ?>
							<a class="error-btn button" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Back To Homepage', 'oceanwp' ) ?></a>

						</div><!-- .error404-content -->

					<?php } ?>

				</article><!-- .entry -->

				<?php do_action( 'ocean_after_content_inner' ); ?>

			</div><!-- #content -->

			<?php do_action( 'ocean_after_content' ); ?>

		</div><!-- #primary -->

		<?php do_action( 'ocean_after_primary' ); ?>

	</div><!--#content-wrap -->

	<?php do_action( 'ocean_after_content_wrap' ); ?>
	
<?php get_footer(); ?>
