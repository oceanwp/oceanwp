<?php
/**
 * Template for displaying single layout for easy digital downloads 
 *
 */

global $post;

do_action( 'ocean_before_single_download_item' );
?>
<div <?php post_class(); ?>>
	<div class="edd_download_inner">

		<?php echo oceanwp_edd_download_navigation(); ?>
		
		<?php do_action( 'ocean_before_single_download_image' ); ?>

		<div class="edd_download_image">
		<?php
			if ( function_exists( 'has_post_thumbnail' ) && has_post_thumbnail( get_the_ID() ) ) :
				echo get_the_post_thumbnail( get_the_ID(), 'large' );
			else:
				echo '<img src="' . get_template_directory_uri() . '/assets/img/placeholder.png' . '">';
			endif;
		?>
		</div>

		<?php do_action( 'ocean_after_single_download_image' ); ?>

		<div class="edd_download_summary">
			<?php
			// Get elements
			$elements = oceanwp_edd_single_elements_positioning();

			// Loop through elements
			foreach ( $elements as $element ) {

				// Category
				if ( 'category' == $element ) {

					do_action( 'ocean_before_single_download_categories' );

					$category_list =  get_the_terms( get_the_ID(), 'download_category' );

					echo get_the_term_list( get_the_ID(), 'download_category', '<div class="edd_download_categories">' . _n( 'Category: ', 'Categories: ', count( $category_list ), 'oceanwp' ), ', ', '</div>' );
											
					do_action( 'ocean_after_single_download_categories' );
				}

				// Tag
				if ( 'tag' == $element ) {

					do_action( 'ocean_before_single_download_tags' );

					$tag_list =  get_the_terms( get_the_ID(), 'download_tag' );

					echo get_the_term_list( get_the_ID(), 'download_tag', '<div class="edd_download_tags">' . _n( 'Tag: ', 'Tags: ', count( $tag_list ), 'oceanwp' ), ', ', '</div>' );
						
					do_action( 'ocean_after_single_download_tags' );
				}

				// Title
				if ( 'title' == $element ) {

					do_action( 'ocean_before_single_download_title' );
					?>

					<?php $item_prop = edd_add_schema_microdata() ? ' itemprop="name"' : ''; ?>
					<h2<?php echo $item_prop; ?> class="edd_download_title">
						<?php the_title(); ?>
					</h2>


					<?php
					do_action( 'ocean_after_single_download_title' );

				}

				// Price
				if ( 'price' == $element ) {

					do_action( 'ocean_before_single_download_price' );
				
					$item_props = edd_add_schema_microdata() ? ' itemprop="offers" itemscope itemtype="http://schema.org/Offer"' : ''; ?>
					<div<?php echo $item_props; ?>>
						<span itemprop="price" class="edd_price">
							<?php
							if ( ! edd_has_variable_prices( get_the_ID() ) ) : 
								echo edd_price( get_the_ID() );
							else:
								echo edd_price_range( get_the_ID() );
							endif;
							?>
						</span>
					</div>
					
					<?php
					do_action( 'ocean_before_single_download_price' );

				}

				// Add to cart button
				if ( 'button' == $element ) {

					do_action( 'ocean_before_single_download_add_to_cart' );
						
					echo edd_get_purchase_link( array('price' => false, 'text' => esc_html__( 'Add to Cart', 'oceanwp') ) );

					do_action( 'ocean_after_single_download_add_to_cart' );

				}

			}
			?>
		</div>

		<div class="edd_download_content">
			<?php the_content( __( 'Read More', 'checkout' ) ); ?>
		</div>

	</div>
</div>
<?php 
do_action( 'ocean_after_single_download_item' );