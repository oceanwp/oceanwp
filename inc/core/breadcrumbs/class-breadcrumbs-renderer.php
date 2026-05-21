<?php
/**
 * OceanWP Breadcrumbs Renderer
 *
 * @package OceanWP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class OceanWP_Breadcrumbs_Renderer {

	/**
	 * Array of crumb objects.
	 *
	 * @var array
	 */
	private $crumbs = array();

	/**
	 * Configuration arguments.
	 *
	 * @var array
	 */
	private $args = array();

	/**
	 * Constructor.
	 *
	 * @param array $crumbs Array of Breadcrumbs_Crumb.
	 * @param array $args   Arguments.
	 */
	public function __construct( $crumbs, $args = array() ) {
		$this->crumbs = $crumbs;
		$this->args   = $args;
	}

	/**
	 * Render the breadcrumbs.
	 *
	 * @return string
	 */
	public function render() {
		if ( empty( $this->crumbs ) ) {
			return '';
		}

		$breadcrumb    = '';
		$separator     = apply_filters( 'oceanwp_breadcrumb_separator', get_theme_mod( 'ocean_breadcrumb_separator', '>' ) );
		$separator     = '<span class="breadcrumb-sep">' . $separator . '</span>';
		$item_count    = count( $this->crumbs );
		$item_position = 0;

		// Open the list
		$breadcrumb .= sprintf( '<ol class="trail-items" %s>', $this->get_schema( 'breadcrumbList' ) );

		if ( ! empty( $this->args['schema'] ) ) {
			$breadcrumb .= sprintf( '<meta name="numberOfItems" content="%d" />', absint( $item_count ) );
			$breadcrumb .= '<meta name="itemListOrder" content="Ascending" />';
		}

		foreach ( $this->crumbs as $crumb ) {
			$item_position++;
			
			$item_class = 'trail-item';
			if ( 1 === $item_position && 1 < $item_count ) {
				$item_class .= ' trail-begin';
			} elseif ( $item_count === $item_position ) {
				$item_class .= ' trail-end';
			}

			$attributes = 'class="' . $item_class . '" ' . $this->get_schema( 'ItempropList' );
			
			$content = '';
			if ( ! empty( $crumb->url ) && ! $crumb->is_last ) {
				$content = sprintf(
					'<a href="%s" itemprop="item"><span itemprop="name">%s</span></a>',
					esc_url( $crumb->url ),
					wp_kses_post( $crumb->label )
				);
			} else {
				$content = sprintf( '<span itemprop="name">%s</span>', wp_kses_post( $crumb->label ) );
			}

			$meta = '';
			if ( ! empty( $this->args['schema'] ) ) {
				$meta = sprintf( '<meta itemprop="position" content="%d" />', absint( $item_position ) );
			}

			$sep = ( $item_count === $item_position ) ? '' : $separator;

			$breadcrumb .= sprintf( '<li %s>%s%s%s</li>', $attributes, $content, $sep, $meta );
		}

		$breadcrumb .= '</ol>';

		$container_class = 'site-breadcrumbs clr';
		if ( $pos = get_theme_mod( 'ocean_breadcrumbs_position' ) ) {
			$container_class .= ' position-' . $pos;
		}

		$output = sprintf(
			'<%1$s role="navigation" aria-label="%2$s" class="%3$s">%4$s%5$s%6$s</%1$s>',
			tag_escape( $this->args['container'] ),
			esc_attr( $this->args['labels']['aria_label'] ),
			esc_attr( $container_class ),
			$this->args['before'],
			$breadcrumb,
			$this->args['after']
		);

		return apply_filters( 'breadcrumb_trail', $output, $this->args );
	}

	/**
	 * Get schema attributes.
	 */
	private function get_schema( $type ) {
		if ( empty( $this->args['schema'] ) ) {
			return '';
		}

		$schemas = apply_filters( 'oceanwp_theme_strings', array(
			'breadcrumbList' => 'itemscope itemtype="http://schema.org/BreadcrumbList"',
			'itempropName'   => 'itemprop="name"',
			'itempropThing'  => 'itemtype="https://schema.org/Thing"',
			'ItempropList'   => 'itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"',
		) );

		return isset( $schemas[ $type ] ) ? $schemas[ $type ] : '';
	}
}
