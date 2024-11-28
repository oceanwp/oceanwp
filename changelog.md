# OceanWP Changelog

### _2024.11.27_ - 4.0.3
- **Added**:: Typography: Google Fonts: Font family: Source Sans 3.
- **Added**:: Compatibility: Ocean eCommerce Pro: Single Product: Brands element added to the Product Builder.
- **Added**:: Compatibility: Ocean Gutenberg Blocks: "add styles to iframes" browser console warning.
- **Updated**:: Template: woocommerce/owp-single-product.php (for the Added compatibility for Ocean eCommerce Pro and the Brands element in the Product Builder).
- **Fixed**:: Customizer: Controller: Range slider: "Unique key prop" error in the browser console.
- **Fixed**:: Customizer: Controller: Color picker: Opacity selection missing.
- **Fixed**:: Customizer: Controller: Color picker: Currently set color not displaying the correct color code in the box.
- **Fixed**:: Customizer: Header: Logo: Max Height input box ignores manual input.
- **Fixed**:: Customizer: Blog: Single Post: Color options not reflected on the front end.
- **Fixed**:: Single Post Page Title: PHP Deprecated:  preg_replace(): Passing null to parameter #3 ($subject) of type array|string is deprecated in ...\wp-includes\kses.php.
- **Fixed**:: Breadcrumbs: Fatal error: Uncaught Error: count(): Argument #1 ($value) must be of type Countable|array, null given in ...\inc\breadcrumbs.php on line 958.
- **Fixed**:: Breadcrumbs: Fatal error: Uncaught Error: ltrim(): Argument #1 ($string) must be of type string, WP_Error given in ...\wp-includes\formatting.php on line 4467.
- **Removed**:: Typography: Google Fonts: Font family: Source Sans Pro (removed by author or Google).

### _2024.10.29_ - 4.0.2
- **Added**:: Compatibility: WordPress: Customizer styling support for WordPress 6.7.
- **Updated**:: Compatibility: WordPress: version number.
- **Fixed**:: Customizer: Site Style: Boxed: Content width not rendered correclty on the front end.
- **Fixed**:: Customizer: WooCommerce: Archives: Product Display Options: Product Image Style: Gallery Slider style: images not rendered correctly.
- **Fixed**:: Customizer: WooCommerce: Store Notice: Enable Store Notice: control option changed from input to toggle button.
- **Fixed**:: Customizer: WooCommerce: Single Product: Product Summary Content Builder: Quantity and Add to Cart option displaying HTML in the label.
- **Fixed**:: Customizer: Top Bar: Social Menu: Social Menu Options: Icons Size: icon size not rendered correctly on the front end.
- **Fixed**:: Customizer: Pages & Special Pages: Page Title: Background Image style: Title / Breadcrumbs position doesn't work.
- **Fixed**:: Customizer: Blog: Single Post: Meta typography: default value not applied on the front end.
- **Fixed**:: Customizer: Live Preview: some typography options do not render line height changes in live preview.
- **Fixed**:: Customizer: Live Preview: WooCommerce border width changes for archives do not display changes in live preview.
- **Fixed**:: Customizer: Control: Color: on options with previously no default color value the reset color option doesn't function.

### _2024.10.21_ - 4.0.1
- **Fixed**:: Customizer: Enable Google Fonts option doesn't inherit old settings from version 3.6.1 and lower.
- **Fixed**:: Customizer: Footer Copyright: Typography: option for footer menu missing.
- **Fixed**:: Customizer: Performance: incorrect help document link.
- **Fixed**:: Function: Enqueue Google Fonts: incorrect conditional check for enqueueing.
- **Fixed**:: WooCommerce: Single Product: Variable Products: parent product added to cart instead of product variation.
- **Fixed**:: Page Title: Page Title heading and subheading colors reset after update.
- **Fixed**:: WooCommerce: Archives: Hover Style: Add to Cart button colors.
- **Removed**:: Theme: method of loading Google fonts via a json file due to increased API calls. PHP method reinstated.
- **Removed**:: Customizer: Controls: Typography: dynamic display of available font weights for simplicity. Standard font weights reinstated.
- **Removed**:: Customizer: Controls: Typography: individual font subset for simplicity (global font Google fonts subset options available).

### _2024.10.16_ - 4.0.0
- **NEW**:: Customizer: Library upgraded to default WordPress ReactJS.
- **NEW**:: Customizer: Customizer Controls.
- **NEW**:: Customizer: User Interface.
- **NEW**:: Customizer: Reorganized settings for improved user experience.
- **NEW**:: Customizer: Panels: Site Style & Settings, Pages & Special Pages, Colors.
- **Added**:: Customizer: User documentation: https://docs.oceanwp.org/category/894-oceanwp-customizer
- **Added**:: Customizer: Enhanced Device Preview support.
- **Added**:: Customizer: Improved handling of nested settings.
- **Removed**:: Customizer: Panels: General Options panel in favor of additional, smaller and more intuitive panels.
- **Removed**:: Customizer: Legacy PHP Controls. (edited)

### _2024.10.08_ - 3.6.1
- **Updated**:: Magnific Popup library.
- **Updated**:: WordPress version number for compatibility:
- **Fixed**:: Potential vulnerability patched: Report by Wordfence from Oct 2nd 2024.

### _2024.09.10_ - 3.6.0
- **Updated**:: Compatibility: WooCommerce: Template version number for mini-cart.php

### _2024.08.05_ - 3.5.9
- **Updated**:: WordPress version for compatibility.
- **Fixed**:: Page Title: 'ocean_page_header_background_image' hook doesn't function with custom background image URL.
- **Fixed**:: Header: Mobile Header: Sidebar Style: Ocean Popup Login window doesn't display with this mobile header style.
- **Fixed**:: WooCommerce: Archives: Hover Style: Background color doesn't render on the front.
- **Fixed**:: Compatibility: WPIDE plugin: Fatal error on plugin activation: Uncaught Error: Call to undefined function oceanwp_theme_panel().

### _2024.07.12_ - 3.5.8
- **Updated**:: Compatibility: WooCommerce: Single product featured image template number.
- **Updated**:: Compatibility: WordPress: version number.
- **Updated**:: Translation: Polish: 'Previous Post' and 'Tags' strings.
- **Updated**:: Template: woocommerce/single-product/product-image.php
- **Fixed**:: WooCommerce: My Account: Password visibility toggle icon not visible.

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