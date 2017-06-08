<?php
/**
 * The template for displaying 404 pages.
 *
 * @package OceanWP WordPress theme
 */

namespace Elementor;

// Get elementor template
$get_template 	= get_theme_mod( 'ocean_error_page_elementor_templates' );

// Check if page is Elementor page
$elementor 		= get_post_meta( $get_template, '_elementor_edit_mode', true );

// Get page
$get_page    	= oceanwp_error_page_content();

// Get page ID
$get_page_id   	= get_theme_mod( 'ocean_error_page_id' );

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
					// If Elementor
				    if ( class_exists( 'Elementor\Plugin' )
				    	&& $get_template
				    	&& $elementor) {
						echo Plugin::instance()->frontend->get_builder_content_for_display( $get_template );
			    	}

			        // If page
			        else if ( ! empty( $get_page_id ) ) {

			            // If Beaver Builder
			            if ( class_exists( 'FLBuilder' ) ) {
				            echo do_shortcode( '[fl_builder_insert_layout id="' . $get_page_id . '"]' );
			        	} else {
				            echo do_shortcode( $get_page );
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
