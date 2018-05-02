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
		
		<?php
		if ( function_exists( 'has_post_thumbnail' ) && has_post_thumbnail( get_the_ID() ) ) :
			?>
		<div class="edd_download_image">

			<?php do_action( 'ocean_before_single_download_image' ); ?>

			<?php echo get_the_post_thumbnail( get_the_ID(), 'full' ); ?>

			<?php do_action( 'ocean_after_single_download_image' ); ?>

		</div>
		<?php endif; ?>

		<div class="edd_download_content">

			<?php do_action( 'ocean_before_single_download_content' ); ?>

			<?php the_content(); ?>

			<?php do_action( 'ocean_after_single_download_content' ); ?>

		</div>

	</div>
</div>
<?php 
do_action( 'ocean_after_single_download_item' );