<<<<<<< HEAD
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

		<?php $item_prop = edd_add_schema_microdata() ? ' itemprop="name"' : ''; ?>
		<h1<?php echo $item_prop; ?> class="edd_download_title">
			<?php the_title(); ?>
		</h1>
			
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

		<?php
		if ( get_theme_mod( 'ocean_edd_display_navigation', true ) ) : ?>
		<div class="edd_download_navigation">
			<?php
			// Term
			$term_tax = get_theme_mod( 'ocean_edd_next_prev_taxonomy', 'download_tag' );
			$term_tax = $term_tax ? $term_tax : 'download_tag';

			// Args
			$args = array(
				'prev_text'             => '<span class="title"><i class="fa fa-long-arrow-left"></i>'. esc_html__( 'Previous', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
			    'next_text'             => '<span class="title"><i class="fa fa-long-arrow-right"></i>'. esc_html__( 'Next', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
			    'in_same_term'          => true,
			    'taxonomy'              => $term_tax,
			    'screen_reader_text'    => esc_html__( 'Continue Reading', 'oceanwp' ),
			);

			// Args
			$args = apply_filters( 'ocean_single_post_next_prev_args', $args ); ?>

			<?php do_action( 'ocean_before_single_post_next_prev' ); ?>

			<?php the_post_navigation( $args ); ?>

			<?php do_action( 'ocean_after_single_post_next_prev' ); ?>
		</div>
		<?php endif; ?>
	</div>
</div>
<?php 
=======
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

		<?php $item_prop = edd_add_schema_microdata() ? ' itemprop="name"' : ''; ?>
		<h1<?php echo $item_prop; ?> class="edd_download_title">
			<?php the_title(); ?>
		</h1>
			
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

		<?php
		if ( get_theme_mod( 'ocean_edd_display_navigation', true ) ) : ?>
		<div class="edd_download_navigation">
			<?php
			// Term
			$term_tax = get_theme_mod( 'ocean_edd_next_prev_taxonomy', 'download_tag' );
			$term_tax = $term_tax ? $term_tax : 'download_tag';

			// Args
			$args = array(
				'prev_text'             => '<span class="title"><i class="fa fa-long-arrow-left"></i>'. esc_html__( 'Previous', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
			    'next_text'             => '<span class="title"><i class="fa fa-long-arrow-right"></i>'. esc_html__( 'Next', 'oceanwp' ) .'</span><span class="post-title">%title</span>',
			    'in_same_term'          => true,
			    'taxonomy'              => $term_tax,
			    'screen_reader_text'    => esc_html__( 'Continue Reading', 'oceanwp' ),
			);

			// Args
			$args = apply_filters( 'ocean_single_post_next_prev_args', $args ); ?>

			<?php do_action( 'ocean_before_single_post_next_prev' ); ?>

			<?php the_post_navigation( $args ); ?>

			<?php do_action( 'ocean_after_single_post_next_prev' ); ?>
		</div>
		<?php endif; ?>
	</div>
</div>
<?php 
>>>>>>> 6238349295930c9be2289cb5c6fbcdab354fd6e2
do_action( 'ocean_after_single_download_item' );