<?php

$sections = oceanwp_theme_panel()->get_sections();

$default = reset( $sections );
?>

<div class="oceanwp-tp-sidebar">
	<ul class="oceanwp-tp-sidebar-list">
	<?php foreach ( $sections as $key => $section ) : ?>
		<?php
			$extra_classes = $default['href'] === $section['href'] ? 'oceanwp-is-active' : '';
		?>
		<li class="oceanwp-tp-sidebar-list-items <?php echo esc_attr( $extra_classes ); ?>">
			<a class="oceanwp-tp-sidebar-link" href="#<?php echo esc_attr( $section['href'] ); ?>">
				<?php echo esc_html( $section['title'] ); ?>
			</a>
		</li>
	<?php endforeach; ?>
	</ul>
</div>
