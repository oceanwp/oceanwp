<?php
/**
 * Single Product Image
 *
 * @author      WooThemes
 * @package     WooCommerce/Templates
 * @version     9999 // this file should never need updating...
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post, $woocommerce, $product;

// Get first image
$thumbnail_id  = get_post_thumbnail_id();

// Get gallery images
$attachment_ids = $product->get_gallery_attachment_ids();

// Get attachments count
$attachments_count = count( $attachment_ids );

// Get first image data
$image_title = get_the_title( $thumbnail_id );
$image_link  = wp_get_attachment_url( $thumbnail_id );
$image       = wp_get_attachment_image( $thumbnail_id, 'shop_single', '', array(
    'alt'           => get_the_title(),
    'itemprop'      => 'image',
) ); ?>

<div class="images clr">

	<div class="product-images-slider main-images owl-carousel owl-theme">

		<?php if ( has_post_thumbnail() ) : ?>

        	<div>

                <?php echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" itemprop="image" class="woocommerce-main-image product-image gallery-lightbox" title="%s">%s</a>', esc_url( $image_link ), esc_attr( $image_title ), $image ), $post->ID ); ?>

        	</div>

    	<?php else :

			// Display placeholder image
			oceanwp_woo_placeholder_img();

    	endif;

        if ( $attachments_count > 0 ) :

			foreach ( $attachment_ids as $id ) :

				// Get image data
				$image_title 	= get_the_title( $id );
				$image_link  	= wp_get_attachment_url( $id );
				$image       	= wp_get_attachment_image( $id, 'shop_single', '', array(
				    'alt'           => get_the_title(),
				    'itemprop'      => 'image',
				) ); ?>

				<div>

    				<?php 
        			echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" itemprop="image" class="woocommerce-main-image product-image gallery-lightbox" title="%s">%s</a>', esc_url( $image_link ), esc_attr( $image_title ), $image ), $post->ID ); ?>

				</div>

			<?php 
			endforeach;

		endif; ?>

	</div>
	    
    <script type="text/javascript">
    	var $j = jQuery.noConflict();

		$j( document ).ready( function() {
			$j( '.main-images' ).owlCarousel( {
		        singleItem: true,
		        navigation: true,
		    	navigationText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
		        pagination: false,
		        addClassActive: true,
		        afterMove: function(args) {
		            var owlMain 	= $j( '.main-images' ).data( 'owlCarousel' );
		            var owlThumbs 	= $j( '.product-thumbnails' ).data( 'owlCarousel' );
		            
		            $j( '.active-thumbnail' ).removeClass( 'active-thumbnail' );
		            $j( '.product-thumbnails' ).find( '.owl-item' ).eq(owlMain.currentItem).addClass( 'active-thumbnail' );

		            if ( typeof owlThumbs != 'undefined' ) {
		            	owlThumbs.goTo( owlMain.currentItem-1 );
		            }
		        }
		    } );

			$j( '.main-images a' ).click(function(e) {
				e.preventDefault();
			} );

		} );
    </script>

	<div class="product-thumbnails owl-carousel owl-theme">

		<?php
		$columns = apply_filters( 'woocommerce_product_thumbnails_columns', 3 );
        
		$thumbnail_title = esc_attr( get_the_title( $thumbnail_id ) );
		$thumbnail_link  = wp_get_attachment_url( $thumbnail_id );
		$thumbnail       = wp_get_attachment_image( $thumbnail_id, 'shop_thumbnail', '', array(
		    'alt'           => get_the_title(),
		    'itemprop'      => 'image',
		) );

		if ( has_post_thumbnail() ) :

        	echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<a href="%s" title="%s" class="active-thumbnail woo-thumbnail">%s</a>', $thumbnail_link, $thumbnail_title, $thumbnail ), $post->ID );

        else :

			// Display placeholder image
			oceanwp_woo_placeholder_img();

        endif;

		// Add thumbnails
		foreach ( $attachment_ids as $id ) :

			$thumbnail_title = esc_attr( get_the_title( $id ) );
			$thumbnail_link  = wp_get_attachment_url( $id );
			$thumbnail       = wp_get_attachment_image( $id, 'shop_thumbnail', '', array(
			    'alt'           => get_the_title(),
			    'itemprop'      => 'image',
			) );

			// Display thumbnail
			if ( $thumbnail ) :

				echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<a href="%s" title="%s" class="woo-thumbnail">%s</a>', $thumbnail_link, $thumbnail_title, $thumbnail ), $post->ID );

			endif;

		endforeach; ?>

	</div><!-- .product-thumbnails -->

    <script type="text/javascript">
    	var $j = jQuery.noConflict();

		$j( document ).ready( function() {
			$j( '.product-thumbnails' ).owlCarousel( {
		        items : 3,
	        	itemsCustom: [[0, 2], [479,2], [619,3], [768,3], [1200, 3], [1600, 3]],
		        transitionStyle: 'fade',
		        navigation : true,
		        navigationText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
		        addClassActive: true,
		        pagination: false,
		    } ); 
		    
		    $j( '.product-thumbnails .owl-item' ).click( function(e) {
	            var owlMain 	= $j( '.main-images' ).data( 'owlCarousel' );
	            var owlThumbs 	= $j( '.product-thumbnails' ).data( 'owlCarousel' );
	            owlMain.goTo($j(e.currentTarget).index());
		    } );
		    
		    $j( '.product-thumbnails a' ).click( function(e) {
			    e.preventDefault();
		    } );
	    } );
    </script>

</div>