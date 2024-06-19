# OceanWP Changelog

### _2024.05.24_ - 3.5.7
- **Reversed**:: 3.5.6 changes: "Fixed: Customizer: Section display issues on rare conditions." due to Customizer image control type issues.

### _2024.05.22_ - 3.5.6
- **Added**:: Header: Mobile Header: Various icon support for the Sidebar mobile header type.
- **Updated**:: Compatibility: WordPress: version number.
- **Fixed**:: Header: Vertical header type causing mobile menu alignment issues.
- **Fixed**:: Compatibility: Elementor: Off Canvas widget from Ocean Elementor Widgets and Ocean eCommerce Pro: page position changes on button open action when anchor links used on the page.
- **Fixed**:: Customizer: Section display issues on rare conditions.

### _2024.03.27_ - 3.5.5
- **Fixed**:: Potential vulnerability patched: Report by Wordfence from March 18th 2024. And a special thanks to the Wordfence team for double-checking everything.
- **Fixed**:: Compatibility: PHP 8.3: PHP Warning:  Trying to access array offset on value of type bool in ...\themes\oceanwp\inc\helpers.php on line 2494
- **Fixed**:: Mobile Menu: Icons not displayed if not from the Font Awesome or Simple Line Icons library.

### _2024.03.12_ - 3.5.4
- **Added**:: Filter: ocean_page_header_background_image_size: Page Title: Background Image style: alter image size.
- **Added**:: Filter: ocean_post_comment_form_fields: Comment form field: Unset website or other fields.
- **Fixed**:: PHP Warning: Undefined property: stdClass::$category_post in .../oceanwp/inc/walker/menu-walker.php on line 391
- **Fixed**:: PHP Warning: Undefined array key 2 in .../oceanwp/inc/breadcrumbs.php on line 388
- **Fixed**:: PHP Warning: Undefined constant: oceanwp_is_woo_shop.
- **Fixed**:: Theme: Lightbox feature remains enabled on Gutenberg Gallery block even if disabled via Customize > General Options > Performance. Requires the latest version of Ocean Extra plugin.
- **Fixed**:: Customizer: Live preview in mobile responsive mode: Menu toggle button refreshes the preview.
- **Fixed**:: Header: Mobile: Full Screen style: Using anchor links scrolls back to the top instead of the anchored section.
- **Fixed**:: WooCommerce: Product layout in combination with infinite scroll issue: white gap display when reaching infinite scroll area.
- **Fixed**:: WooCommerce: Variation swatches in combination with infinite scroll issue.
- **Fixed**:: WooCommerce: Archive alignment of review stars issue: Customizer settings not applied.
- **Fixed**:: WooCommerce: Floating Bar and menu cart display: Cart not displayed if product added using the Floating Bar.

### _2023.12.14_ - 3.5.3
- All previous changelogs available at: https://docs.oceanwp.org/article/653-oceanwp-theme-changelog