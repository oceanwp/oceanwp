<div class="edd_download_image">
	<a href="<?php the_permalink(); ?>">
		<?php
		if ( function_exists( 'has_post_thumbnail' ) && has_post_thumbnail( get_the_ID() ) ) :
			?>
			<?php

			$img_width  = get_theme_mod( 'ocean_edd_archive_image_width', 450 );
			$img_height = get_theme_mod( 'ocean_edd_archive_image_height', 450 );

			// Images attr.
			$img_id  = get_post_thumbnail_id( get_the_ID(), 'full' );
			$img_url = wp_get_attachment_image_src( $img_id, 'full', true );

			if ( OCEAN_EXTRA_ACTIVE
				&& function_exists( 'ocean_extra_image_attributes' ) ) {
				$img_atts = ocean_extra_image_attributes( $img_url[1], $img_url[2], $img_width, $img_height );
			}

			if ( OCEAN_EXTRA_ACTIVE
			&& function_exists( 'ocean_extra_resize' )
			&& ! empty( $img_atts ) ) {
				?>

				<img src="<?php echo ocean_extra_resize( $img_url[0], $img_atts['width'], $img_atts['height'], $img_atts['crop'], true, $img_atts['upscale'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" alt="<?php the_title_attribute(); ?>" width="<?php echo esc_attr( $img_width ); ?>" height="<?php echo esc_attr( $img_height ); ?>"<?php oceanwp_schema_markup( 'image' ); ?> />

				<?php
			} else {

				// Display post thumbnail.
				the_post_thumbnail( 'full' );

			}
			?>
			<?php
		else :
			echo '<img src="' . get_template_directory_uri() . '/assets/img/placeholder.png">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		endif;
		?>
	</a>
</div>
