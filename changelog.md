# OceanWP Changelog

### _2026.02.16_ - 4.1.5
- **NEW: Customizer**:: WooCommerce: Archives: Toolbar: Shop Result Count Max Cap option for the 'ALL' preview link: Added to protect server performance. Defaults to 36 for new sites and 100 for existing sites (max limit 1200).
- **Added**:: Compatibility: PHP 8.X+: Deprecated: Increment on non-alphanumeric string is deprecated in .../themes/oceanwp/partials/header/style/medium-header.php on line 50
- **Added**:: Compatibility: PHP 8.X+: Warning: Undefined property: stdClass::$category_post in .../themes/oceanwp/inc/walker/menu-walker.php on line 98
- **Added**:: Compatibility: PHP 8.X+: Warning: Undefined property: stdClass::$nolink in .../themes/oceanwp/inc/walker/menu-walker.php on line 103
- **Added**:: Compatibility: PHP 8.X+: Warning: Undefined property: stdClass::$template in .../themes/oceanwp/inc/walker/menu-walker.php on line 211
- **Added**:: Compatibility: PHP 8.X+: Warning: Undefined property: stdClass::$mega_template in .../themes/oceanwp/inc/walker/menu-walker.php on line 211
- **Added**:: Compatibility: PHP 8.X+: Warning: Undefined property: stdClass::$megamenu_widgetarea in .../themes/oceanwp/inc/walker/menu-walker.php on line 219
- **Added**:: Compatibility: PHP 8.X+: Warning: Undefined property: stdClass::$category_post in .../themes/oceanwp/inc/walker/menu-walker.php on line 264
- **Added**:: Compatibility: WooCommerce: 10.5 version.
- **Improved**:: SEO: WooCommerce: Shop Result Count: Added ' rel="nofollow" ' to toolbar preview links. This prevents unnecessary crawls and indexing of multiple view variations.
- **Updated**:: Template: .../woocommerce/single-product/product-image.php (version number for compatibility with WooCommerce 10.5).
- **Updated**:: Template: .../woocommerce/result-count.php
- **Updated**:: Compatibility: WordPress: Version number.
- **Fixed**:: Customizer: Mobile Menu: Dropdown Style: Menu Background color option missing (Customize > Header > Mobile Menu > Mobile Menu Styling).
- **Fixed**:: Customizer: Mobile Menu: Dropdown Style: Separators color option missing (Customize > Header > Mobile Menu > Mobile Menu Styling).

### _2025.11.24_ - 4.1.4
- All previous changelogs available at: https://docs.oceanwp.org/article/653-oceanwp-theme-changelog