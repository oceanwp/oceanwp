<?php
/**
 * Share template
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.13
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit; // Exit if accessed directly.
}
?>

<div class="yith-wcwl-share">
	<h4 class="yith-wcwl-share-title"><?php echo $share_title; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></h4>
	<ul>
		<?php if ( $share_facebook_enabled ) : ?>
			<li style="list-style-type: none; display: inline-block;">
				<a target="_blank" class="facebook" href="https://www.facebook.com/sharer.php?s=100&amp;p%5Btitle%5D=<?php echo $share_link_title; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>&amp;p%5Burl%5D=<?php echo urlencode( $share_link_url ); ?>"><i class="fa fa-facebook" aria-hidden="true"></i></a>
				<span class="screen-reader-text"><?php esc_html_e( 'Share on Facebook (opens in a new tab)', 'oceanwp' ); ?></span>
			</li>
		<?php endif; ?>

		<?php if ( $share_twitter_enabled ) : ?>
			<li style="list-style-type: none; display: inline-block;">
				<a target="_blank" class="twitter" href="https://twitter.com/share?url=<?php echo urlencode( $share_link_url ); ?>&amp;text=<?php echo $share_twitter_summary; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>"><i class="fa fa-twitter" aria-hidden="true"></i></a>
				<span class="screen-reader-text"><?php esc_html_e( 'Share on Twitter (opens in a new tab)', 'oceanwp' ); ?></span>
			</li>
		<?php endif; ?>

		<?php if ( $share_pinterest_enabled ) : ?>
			<li style="list-style-type: none; display: inline-block;">
				<a target="_blank" class="pinterest" href="http://pinterest.com/pin/create/button/?url=<?php echo urlencode( $share_link_url ); ?>&amp;description=<?php echo $share_summary; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>&amp;media=<?php echo $share_image_url; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" onclick="window.open(this.href); return false;"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
				<span class="screen-reader-text"><?php esc_html_e( 'Share on Pinterest (opens in a new tab)', 'oceanwp' ); ?></span>
			</li>
		<?php endif; ?>

		<?php if ( $share_email_enabled ) : ?>
			<li style="list-style-type: none; display: inline-block;">
				<a class="email" href="mailto:?subject=<?php echo urlencode( apply_filters( 'yith_wcwl_email_share_subject', $share_link_title ) ); ?>&amp;body=<?php echo apply_filters( 'yith_wcwl_email_share_body', urlencode( $share_link_url ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>&amp;title=<?php echo $share_link_title; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
				<span class="screen-reader-text"><?php esc_html_e( 'Share by email (opens in a new tab)', 'oceanwp' ); ?></span>
			</li>
		<?php endif; ?>
	</ul>
</div>
