# OceanWP Changelog

### _2023.09.06_ - 3.5.0
- **Added**: Supprot for new the metabox framework.
- **Updated**: Compatibility: WooCommerce: Template version number to dismiss potential outdated templates notification.
- **Updated**: Compatibility: WordPress version number.

### _2023.07.19_ - 3.4.7
- **Updated**: WooCommerce: Templates (mini-cart.php) version number for compatibility to dismiss WooCommerce potential outdated templates notification.

### _2023.07.05_ - 3.4.6
- **Updated**: Breadcrumbs: Functionality enhancement.

### _2023.06.14_ - 3.4.5
- **Updated**: WooCommerce: Templates (mini-cart.php, loop-start.php, content-single-product.php) version number for compatibility to dismiss WooCommerce potential outdated templates notification.

### _2023.05.23_ - 3.4.4
- **New**: Typography: Google fonts: Updated list.
- **Added**: Mobile Header: Search icon and form styling options in the Customizer.
- **Added**: Compatibility: SiteOrigin: Custom templates support.
- **Added**: Compatibility: Ocean eComm Treasure Box: Conditional assets loading for the next OeTB plugin update and feature.
- **Fixed**: WooCommerce: Shop Manager user role accessing the Customizer causes critical error due to Privacy Policy page.
- **Fixed**: Gutenberg: Align Full block layout display with the page Full Width layout.

### _2023.04.05_ - 3.4.3
- **Added**: Compatibility: Elementor Pro: WooCommerce: Checkout styling.
- **Added**: Compatibility: Ocean Popup Login: Google reCaptcha support for upcoming plugin release.
- **Improved**: Accessibility: Header: Search: Dropdown.
- **Improved**: Accessibility: Header: Full Screen: Search.
- **Improved**: Accessibility: Header: Full Screen: Menu toggle button.
- **Improved**: Accessibility: Header: Medium: Search.
- **Improved**: Accessibility: Header: Vertical: Search.
- **Improved**: Accessibility: Header: Vertical: Menu toggle button.
- **Improved**: Accessibility: Header: Mobile: Full Screen: Search.
- **Improved**: Accessibility: Header: Mobile: Header Search: Overlay.
- **Updated**: SEO: Header: Vertical: Menu toggle button: Crawlable icon URL following Google's latest Lighthouse (PSI) changes.
- **Updated**: SEO: Header: Full Screen: Menu toggle button: Crawlable icon URL following Google's latest Lighthouse (PSI) changes.
- **Updated**: SEO: Header: Mobile: Header Search: Overlay: Crawlable icon URL following Google's latest Lighthouse (PSI) changes.
- **Updated**: SEO: Header: Mobile: Full Screen: Menu toggle button: Crawlable icon URL following Google's latest Lighthouse (PSI) changes.
- **Updated**: SEO: Header: Mobile: Sidebar: Menu close button: Crawlable icon URL following Google's latest Lighthouse (PSI) changes.
- **Updated**: SEO: Header: Mobile: Menu toggle button: Crawlable icon URL following Google's latest Lighthouse (PSI) changes.
- **Updated**: SEO: Header: Search: Search Overlay close button: Crawlable icon URL following Google's latest Lighthouse (PSI) changes.
- **Updated**: Template: 404.php
- **Updated**: Template: header.php
- **Updated**: Template: searchform.php
- **Updated**: Template: comments.php
- **Updated**: Template: partials/scroll-top.php
- **Updated**: Template: partials/mobile/mobile-fullscreen-search.php
- **Updated**: Template: partials/mobile/mobile-fullscreen.php
- **Updated**: Template: partials/mobile/mobile-sidr-close.php
- **Updated**: Template: partials/mobile/mobile-search.php
- **Updated**: Template: partials/mobile/mobile-icon.php
- **Updated**: Template: partials/header/style/full-screen-header.php
- **Updated**: Template: partials/header/style/medium-header-search.php
- **Updated**: Template: partials/header/style/vertical-header-search.php
- **Updated**: Template: partials/header/style/vertical-header-toggle.php
- **Updated**: Template: partials/header/search-replace.php
- **Updated**: Template: partials/header/search-overlay.php
- **Updated**: Template: partials/entry/readmore.php
- **Updated**: Template: partials/entry/media/blog-entry-link.php
- **Updated**: Template: partials/single/author-bio.php
- **Updated**: Template: partials/single/next-prev.php
- **Updated**: Template: partials/single/related-posts.php
- **Updated**: Template: partials/single/media/blog-single-link.php
- **Updated**: Template: partials/single/media/blog-single.php
- **Updated**: Template: partials/search/readmore.php
- **Updated**: Language: Theme .pot file.
- **Fixed**: Incorrect oceanwp_theme_strings() function usage throughout the theme.
- **Fixed**: Blog: Archives: Video and audio post formats styling.
- **Fixed**: Compatibility: Events Calendar: Deprecated function tribe_get_view().

### _2023.02.22_ - 3.4.2
- **Improved**: Customizer: Customizer panel scrollbar width for some browsers, like Chrome and Edge.
- **Fixed**: OceanWP Panel: Potential vulnerability patch: Patchstack report #2023-23700.
- **Fixed**: Posts: Link post format: External link option doesn't function.
- **Fixed**: WooCommerce: Option to remove product category description with custom code doesn't function.
- **Fixed**: WooCommerce: Option to remove cart collaterals from the cart with custom code doesn't function.
- **Fixed**: WooCommerce: Option to remove upsell section from the single product page with custom code doesn't function.
- **Fixed**: Customizer: Some controls display incorrect output. Example, instead of a functional link, html is displayed.
- **Fixed**: Customizer: General Options: Performance: SVG icons: Disable / Enable buttons action misconfigured.

### _2023.01.11_ - 3.4.1
- **Fixed**: Customizer: Footer Bottom: Footer copyright text color applied settings do not work.

### _2023.01.10_ - 3.4.0
- **Added**: Customizer: SEO Settings: Quick access link to configure breadcrumb settings.
- **Added**: Customizer: Customizer Control: Info control.
- **Tweak**: Customizer: Enable Schema option moved to General Options > SEO Settings for improved UX (previously General Options > General Settings).
- **Tweak**: Customizer: Opengraph section and options moved to General Options > SEO Settings for improved UX (previously General Options > General Settings).
- **Tweak**: Accessibility: Footer bottom: Default copyright text color changed to white (#fff) for increased contrast.
- **Updated**: SEO: Search Icon URLs following Google's latest Lighthouse (PSI) changes.
- **Updated**: Language: OceanWP .pot file.
- **Fixed**: WooCommerce: Mini Cart: Occassional flashing of the mini cart on various conditions (quick view, single product removal, first product add, etc.).
- **Fixed**: WooCommerce: Login Register option.
- **Fixed**: WooCommerce: Add to Cart Ajax: Change button text when product removed from the cart.
- **Fixed**: Compatibility: Visual Composer: hoverbox link doesn't function.
- **Fixed**: Compatibility: Elementor: Single Post: Full Width Layout: distorted sections and columns configuration settings display on the backend.
- **Fixed**: Compatibility: Elementor: Single Post: Full Width Layout: increased paragraph margins display on the frontend.
- **Fixed**: OceanWP Panel: submenu item links in WP Dashboard don't function if OceanWP Panel already open.
- **Fixed**: Customizer: Header: Medium: Hide menu on hover option conditional logic: Display option only when Ocean Sticky Header active.
- **Fixed**: Customizer: Header: Medium: Stick only the menu option conditional logic: Display option only when Ocean Sticky Header active.

### _2022.11.9_ - 3.3.6
- All previous changelogs available at: https://docs.oceanwp.org/article/653-oceanwp-theme-changelog