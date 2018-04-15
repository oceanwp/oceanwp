<?php
/**
 * Template for displaying archive layout for easy digital downloads 
 *
 */

global $post;

do_action( 'ocean_before_archive_download_item' );
?>
<div <?php post_class(); ?>>
	<div class="edd_download_inner">
	<?php
	// Get elements
	$elements = oceanwp_edd_archive_elements_positioning();

	// Loop through elements
	foreach ( $elements as $element ) {

		// Image
		if ( 'image' == $element ) {
			do_action( 'ocean_before_archive_download_image' );

			if ( function_exists( 'has_post_thumbnail' ) && has_post_thumbnail( get_the_ID() ) ) : ?>
				<div class="edd_download_image">
					<a href="<?php the_permalink(); ?>">
						<?php echo get_the_post_thumbnail( get_the_ID(), 'full' ); ?>
					</a>
				</div>
			<?php else: ?>
				<div class="edd_download_image">
					<a href="<?php the_permalink(); ?>">
						<?php echo '<img src="' . get_template_directory_uri() . '/assets/img/placeholder.png' . '">'; ?>
					</a>
				</div>
			<?php endif;

			do_action( 'ocean_after_archive_download_image' );
		}

		// Category
		if ( 'category' == $element ) {

			do_action( 'ocean_before_archive_download_categories' );

			echo '<div class="edd_download_categories">';

			echo oceanwp_edd_terms_list( 'download_category' );
			
			echo '</div>';
				
			do_action( 'ocean_after_archive_download_categories' );
		}

		// Title
		if ( 'title' == $element ) {

			do_action( 'ocean_before_archive_download_title' );
			?>

			<?php $item_prop = edd_add_schema_microdata() ? ' itemprop="name"' : ''; ?>
			<div<?php echo $item_prop; ?> class="edd_download_title">
				<a itemprop="url" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			</div>


			<?php
			do_action( 'ocean_after_archive_download_title' );

		}

		// Price
		if ( 'price' == $element ) {

			do_action( 'ocean_before_archive_download_price' );
			
			$item_props = edd_add_schema_microdata() ? ' itemprop="offers" itemscope itemtype="http://schema.org/Offer"' : ''; ?>
			<div<?php echo $item_props; ?>>
				<div itemprop="price" class="edd_price">
					<?php
					if ( ! edd_has_variable_prices( get_the_ID() ) ) : 
						echo edd_price( get_the_ID() );
					else:
						echo edd_price_range( get_the_ID() );
					endif;
					?>
				</div>
			</div>
			
			<?php
			do_action( 'ocean_before_archive_download_price' );

		}

		// Description
		if ( 'description' == $element ) {

			do_action( 'ocean_before_archive_download_description' );

			if ( has_excerpt() ) : ?>
				<div<?php echo $item_prop; ?> class="edd_download_excerpt">
					<?php echo apply_filters( 'edd_downloads_excerpt', wp_trim_words( get_post_field( 'post_excerpt', get_the_ID() ), 30 ) ); ?>
				</div>
			<?php elseif ( get_the_content() ) : ?>
				<div<?php echo $item_prop; ?> class="edd_download_excerpt">
					<?php echo apply_filters( 'edd_downloads_excerpt', wp_trim_words( get_post_field( 'post_content', get_the_ID() ), 30 ) ); ?>
				</div>
			<?php endif;

			do_action( 'ocean_after_archive_download_description' );

		}

		// Add to cart button
		if ( 'button' == $element ) {

			do_action( 'ocean_before_archive_download_add_to_cart' );
				
			echo oceanwp_edd_add_to_cart_link();

			do_action( 'ocean_after_archive_download_add_to_cart' );

		}

	}
	?>
	</div>
</div>
<?php 
do_action( 'ocean_after_archive_download_item' );