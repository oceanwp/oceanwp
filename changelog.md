# OceanWP Changelog

### _2025.09.15_ - 4.1.3
- **Added**:: Compatibility: EDD: Archive pages: Support for new EDD JSON-LD schema output.
- **Improved**:: Compatibility: EDD: Menu cart behavior on mobile following default EDD mobile behavior.
- **Deprecated**:: Hooks: ocean_blog_entry_columns. Will be removed entirely with 5.0.0 version. Use ocean_blog_entry_columns_{$device} instead.

### _2025.08.11_ - 4.1.2
- **Added**:: Compatibility: PHP: 8.3+: Warning: Trying to access array offset on false in .../themes/oceanwp/inc/breadcrumbs.php on line 1387
- **Fixed**:: Scroll to Top: Button side position not rendered on the front.
- **Fixed**:: Potential vulnerability patched: Report by CleanTalk from AUG 6th 2025.

### _2025.07.17_ - 4.1.1
- **Updated**:: Template: woocommerce/cart/mini-cart.php (version number for compatibility with WooCommerce 10+).

### _2025.06.17_ - 4.1.0
- **Added**:: Filter: oceanwp_post_reading_time_words_per_minute: Override words per minute for the blog post reading time functionality.
- **Improved**:: Blog: Single Post: Reading Time: improved accuracy. All-language-friendly and non-latin-friendly functionality intact.
- **Fixed**:: Blog: Archives: Full content strips HTML and doesn't display formatting (12256).
- **Fixed**:: Translations: Incorrect Customizer label in ...inc/customizer/options/learndash.php L#157. GH report #517.
- **Fixed**:: Potential vulnerability patched: Report by Wordfence from JUN 9th 2025. Shoutout and a thanks to the Wordfence team for patch test and confirmation.

### _2025.05.14_ - 4.0.9
- **NEW**:: Setup Wizard for new installations. Functions only in combination with the latest version of Ocean Extra plugin.
- **Fixed**:: Theme Icons: SVG Icons: blog meta data icons not displayed.
- **Fixed**:: Translation: Pagination: Load More style: string 'Loading...' can't be translated.

### _2025.04.21_ - 4.0.8
- **Updated**:: Compatibility: WordPress version number.
- **Fixed**:: Potential vulnerability patched: Report by Wordfence from APR 11th 2025. Related to Ocean Extra 1/3 report patch.

### _2025.04.03_ - 4.0.7
- **Added**:: OceanWP version constant for future updates.
- **Added**:: Compatibility: WooCommerce: View password button (the eye icon) styling. Previously, this element was a pseudo element.
- **Updated**:: OceanWP Copyright information.

### _2025.02.27_ - 4.0.6
- **Added**:: Turnstile integration for Popup Login and Elementor Widgets.
- **Added**:: Google Fonts: Funnel Sans and Funnel Display.
- **Updated**:: Template: woocommerce/single-product/product-image.php (version number for compatibility with WooCommerce 9.7).
- **Fixed**:: PHP Warning: Undefined variable $gutenberg_css in ...inc/third/class-gutenberg.php** on line 60.

### _2025.01.27_ - 4.0.5
- **Added**:: Pagination: New pagination style: Load More.
- **Added**:: Header: Social Menu: Bluesky option.
- **Added**:: Top Bar: Social Menu: Bluesky option.
- **Added**:: WooCommerce: Checkout: Multistep: previous and next button steps with validation.
- **Added**:: WooCommerce: Cart and checkout default button style support for Woo block templates.
- **Added**:: Customizer: Live Preview: WooCommerce: Mobile cart preview.
- **Updated**:: Icons: Font Awesome to version 6.7.2.
- **Updated**:: Customizer: Typography script code refactored, script size reduced.
- **Updated**:: Compatibility: WordPress version number.
- **Changed**:: Icons: X / Twitter: Font Awesome class changed from 'fab fa-x-twitter' to 'fa-brands fa-x-twitter' following the updated to the latest FA version.
- **Fixed**:: Site Layout: Image Background: Incorrect CSS output for the image Top Center position.
- **Fixed**:: Customizer: Blog: Blog Archives: Grid Style: Equal height option missing.
- **Fixed**:: Customizer: Customizer Search: Search icon placement covers the Customizer Publish button on RTL languages.
- **Fixed**:: Block Editor: Selected Customizer typography options not applied in the Block Editor (Gutenberg) in the backend.
- **Fixed**:: Customizer: Performance: Emoji Scripts: PHP Warning: Array to string conversion in .../themes/oceanwp/inc/- **helpers.php on line 387.

### _2024.12.17_ - 4.0.4
- All previous changelogs available at: https://docs.oceanwp.org/article/653-oceanwp-theme-changelog