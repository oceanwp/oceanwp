<?php
/**
 * Header cart dropdown
 *
 * @package OceanWP WordPress theme
 */ ?>

<div id="current-shop-items-dropdown" class="clr">

	<div id="current-shop-items-inner" class="clr">

		<?php
		// Display WooCommerce cart
		the_widget( 'WC_Widget_Cart' ); ?>

	</div><!-- #current-shop-items-inner -->
	
</div><!-- #current-shop-items-dropdown -->