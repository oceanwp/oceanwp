<div>
	<div class="edd_price">
		<?php
		if ( ! edd_has_variable_prices( get_the_ID() ) ) :
			edd_price( get_the_ID() );
		else :
			echo edd_price_range( get_the_ID() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		endif;
		?>
	</div>
</div>
