# OceanWP Changelog

### _2026.07.01_ - 4.2.1
- **Improved**:: Accessibility: Focus outline colors logic and fallbacks for keyboard navigation.
- **Fixed**:: Accessibility: Focus outline color not visible on existing websites that upgraded from previous OceanWP versions to 4.2.0 and enabled the new Accessibility Mode option via Customize > Accessibility - A11Y.

### _2026.06.29_ - 4.2.0
- **NEW**:: Customizer: Panel: Accessibility - A11Y
- **NEW**:: Customizer: Accessibility - A11: Accessibility Mode: Global switch. Accessibility improvements are enabled by default for new installations and disabled by default for existing installations.
- **NEW**:: Customizer: Accessibility - A11: Semantic Main Header Tags option: Improved header, navigation and menu markup.
- **NEW**:: Customizer: Accessibility - A11: Semantic Mobile Header Tags option: Improved header, navigation and menu markup.
- **NEW**:: Customizer: Accessibility - A11: Search Forms: Improved all theme search forms markup, with additional options.
- **NEW**:: Customizer: Accessibility - A11: Comment Form: Display visible labels above comment form fields.
- **NEW**:: Customizer: Accessibility - A11: Header Media: Options for accessible header media video output.
- **NEW**:: Customizer: Accessibility - A11: Main Header Social Menu: Add optional visual indicators on social links that open in a new tab.
- **NEW**:: Customizer: Accessibility - A11: Top Bar Social Menu: Add optional visual indicators on social links that open in a new tab.
- **Added**:: Accessibility Statement: accessibility.txt in the main theme folder.
- **Added**:: Accessibility: 'focus-visible' support for modern browsers for improved keyboard navigation.
- **Improved**:: Accessibility: Menu Walker: Added context-aware submenu toggle support with aria-expanded, aria-controls, generated submenu IDs and support for parent-link or icon-based submenu triggers.
- **Improved**:: Accessibility: Keyboard support for menu and submenu toggles, including Enter, Space and Escape key handling where applicable.
- **Improved**:: Accessibility: Focus trapping behavior for Dropdown search, Overlay search, Header Replace search, Mobile Dropdown menu and Full Screen Mobile menu.
- **Improved**:: Accessibility: 'focus' support for older browsers without interferring with keyboard or click navigation.
- **Improved**:: Accessibility: Included Aria labels for relevant 'section' markups.
- **Updated**:: Template: .../comments.php
- **Updated**:: Template: .../searchform.php
- **Updated**:: Template: .../partials/single/author-bio.php
- **Updated**:: Template: .../partials/single/related-posts.php
- **Updated**:: Template: .../partials/footer/copyright.php
- **Updated**:: Template: .../partials/search/readmore.php
- **Updated**:: Template: .../partials/header/layout.php
- **Updated**:: Template: .../partials/header/logo.php
- **Updated**:: Template: .../partials/header/nav.php
- **Updated**:: Template: .../partials/header/search-dropdown.php
- **Updated**:: Template: .../partials/header/search-overlay.php
- **Updated**:: Template: .../partials/header/search-replace.php
- **Updated**:: Template: .../partials/header/social.php
- **Updated**:: Template: .../partials/header/style/center-header.php
- **Updated**:: Template: .../partials/header/style/full-screen-header.php
- **Updated**:: Template: .../partials/header/style/medium-header.php
- **Updated**:: Template: .../partials/header/style/vertical-header-search.php
- **Updated**:: Template: .../partials/header/style/vertical-header-toggle.php
- **Updated**:: Template: .../partials/mobile/mobile-dropdown.php
- **Updated**:: Template: .../partials/mobile/mobile-fullscreen-search.php
- **Updated**:: Template: .../partials/mobile/mobile-fullscreen.php
- **Updated**:: Template: .../partials/mobile/mobile-nav.php
- **Updated**:: Template: .../partials/mobile/mobile-search.php
- **Updated**:: Template: .../partials/mobile/mobile-sidr-close.php
- **Updated**:: Template: .../partials/mobile/mobile-icon.php
- **Updated**:: Template: .../partials/topbar/social.php
- **Fixed**:: Accessibility: Theme: Colors: Default colors failed the contrast test in some areas.
- **Fixed**:: Accessibility: Theme: Some elements did not communicate the open/close state via 'aria-expanded'.
- **Fixed**:: Accessibility: Footer: Duplicate 'contentinfo' landmark.
- **Fixed**:: Accessibility: Focus: Insufficient focus outline styling.
- **Fixed**:: Accessibility: Focus: Some elements missing focus outline on keyboard navigation.
- **Fixed**:: Customizer: Header: Social Menu: Border radius CSS output missing unit.
- **Fixed**:: Theme Panel: Missing plugin file check before reading plugin data.

### _2026.05.20_ - 4.1.6
- All previous changelogs available at: https://docs.oceanwp.org/article/653-oceanwp-theme-changelog
