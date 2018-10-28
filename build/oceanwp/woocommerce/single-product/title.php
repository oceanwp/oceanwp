<?php
/**
 * Single Product title
 *
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 1.6.4
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
} ?>

<h2 class="single-post-title product_title entry-title"<?php oceanwp_schema_markup( 'author_name' ); ?>><?php the_title(); ?></h2>