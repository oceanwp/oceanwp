# OceanWP - Features Documentation

Complete documentation of all features available in OceanWP.

---

## Table of Contents

1. [Theme Overview](#theme-overview)
2. [License & Availability](#license--availability)
3. [Customizer](#customizer)
4. [Global Styling: Typography and Colors](#global-styling-typography-and-colors)
5. [Site Layouts & Sidebars](#site-layouts--sidebars)
6. [Pages, Page Title & Breadcrumbs](#pages-page-title--breadcrumbs)
7. [Top Bar](#top-bar)
8. [Header](#header)
9. [Mobile Menu](#mobile-menu)
10. [Menus & Mega Menu](#menus--mega-menu)
11. [Blog](#blog)
12. [Footer](#footer)
13. [Per-Page Settings (Metabox)](#per-page-settings-metabox)
14. [Custom Templates (My Library)](#custom-templates-my-library)
15. [SEO](#seo)
16. [Accessibility](#accessibility)
17. [Performance](#performance)
18. [WooCommerce](#woocommerce)
19. [Easy Digital Downloads, LearnDash & LifterLMS](#easy-digital-downloads-learndash--lifterlms)
20. [Page Builder & Plugin Integrations](#page-builder--plugin-integrations)
21. [Admin Pages](#admin-pages)
22. [Display & Developer API](#display--developer-api)

---

## Theme Overview

**OceanWP** is a free, multi-purpose classic WordPress theme for blogs, business sites and WooCommerce stores. Almost every part of the layout is controlled from the Customizer, and the theme is built to be extended with a child theme or the OceanWP plugins.

| Property | Value |
|----------|-------|
| Version | 4.2.8 |
| Minimum WordPress | 5.9 |
| Minimum PHP | 7.4 |
| Tested up to | WordPress 7.1 |
| Text Domain | `oceanwp` |
| Main class | `OCEANWP_Theme_Class` (`functions.php`) |
| Requires | Nothing. Ocean Extra is recommended and unlocks the metabox, templates library and theme panel features. WooCommerce, EDD, LearnDash, LifterLMS and page builders are optional. |
| Distribution | Free on WordPress.org |

### Key Capabilities

- 17 Customizer panels with responsive (desktop, tablet, mobile) controls, rendered by a React Customizer app with built-in search
- 5 content layouts (right sidebar, left sidebar, full width, 100% full width, both sidebars) set globally and per content type
- 3 site layouts (wide, boxed, separate)
- 8 header types, 3 mobile menu types, 3 header search styles
- Blog archives in large, grid (fit rows or masonry) or thumbnail style, with drag-and-drop element ordering
- 7 single post title styles
- Built-in WooCommerce features: quick view, floating add-to-cart bar, multi-step checkout, off-canvas filters, grid/list toggle, menu cart, distraction-free cart and checkout
- Custom header, footer, top bar, menu and 404 templates built with Elementor or the block editor (requires Ocean Extra's My Library)
- Mega menu, menu item icons and menu item templates
- Schema markup, optional accessibility mode, performance toggles for icon fonts, emoji, lightbox and scripts
- Integrations with Elementor (and Elementor Pro locations), Beaver Themer, Gutenberg, bbPress, BuddyPress, Sensei, AMP, PWA, Polylang and WPML

---

## License & Availability

OceanWP is free (GPLv2 or later). There is no license key in the theme and no feature in the theme itself is locked.

Premium features are sold as separate plugins. The theme only registers with Freemius when Ocean Extra is active and ships the Freemius SDK (`includes/freemius/start.php`):

| Property | Value |
|----------|-------|
| Freemius product ID | 3752 (slug `oceanwp`, type theme) |
| Freemius bundle ID | 3767 |
| `is_premium` | false |
| Helper | `owp_fs()`, fires `owp_fs_loaded` after init |

Without Ocean Extra there is no Freemius code running. With Ocean Extra and no paid license, the Customizer shows "Supercharge Your Site with OceanWP Pro Bundle" upsell notices in the Header, Top Bar, Blog, Footer Widgets and Footer Copyright panels (`ocean_upsell_notice_callback()` checks Freemius `is_pricing_page_visible()`).

Ocean Extra (`includes/client-migration/edd.php`) lists these paid add-ons:

| Add-on | Freemius ID |
|--------|-------------|
| Cookie Notice | 3765 |
| Elementor Widgets | 3757 |
| Footer Callout | 3754 |
| Full Screen | 3766 |
| Ocean Hooks | 3758 |
| Popup Login | 3764 |
| Portfolio | 3761 |
| Pro Demos | 3797 |
| Side Panel | 3756 |
| Sticky Footer | 3759 |
| Sticky Header | 3755 |
| White Label | 3762 |
| Woo Popup | 3760 |
| Ocean Treasure Box (Ocean eCommerce, sold separately) | 11449 |
| Ocean Gutenberg Blocks (sold separately) | 9081 |
| Ocean Site Booster (sold separately) | 17389 |

### Feature Availability

| Feature | Theme alone | With Ocean Extra |
|---------|-------------|------------------|
| All Customizer panels | ✓ | ✓ (panels can be turned off) |
| Per-page settings metabox | ✗ | ✓ |
| Custom header/footer/top bar/menu/404 templates | ✗ (template list is empty) | ✓ |
| Full theme panel (Customizer search, panel toggles, extra settings) | ✗ (promotional panes) | ✓ |
| OpenGraph tags, widgets stylesheet toggle, local Google Fonts | ✗ (settings saved but not applied) | ✓ |
| `[oceanwp_date]` shortcode in copyright text | ✗ | ✓ |
| Freemius account and upsells | ✗ | ✓ |

---

## Customizer

All theme settings live in **Appearance > Customize**. They are stored as theme mods (`theme_mods_oceanwp` option, keys prefixed `ocean_`).

| Panel | Contents |
|-------|----------|
| Typography | Google Fonts settings, body, all headings, H1 to H6 |
| Colors | Site background, primary, border, body, headings, links |
| Site Style & Settings | Site layout, icons, buttons, forms, scroll to top, pagination |
| Pages & Special Pages | Page layout, page title, breadcrumbs, search results page, 404 page |
| Top Bar | Top bar layout, content, social menu |
| Header | Header type, media, logo, menu, search, social menu, mobile menu |
| Blog | Blog archives, single post |
| Sidebar | Sidebar and widget styling |
| Footer Widgets | Footer widget area |
| Footer Copyright | Bottom bar |
| SEO Settings | Schema, image ALT, OpenGraph |
| Accessibility - A11Y | Accessibility mode and labels |
| Performance | Asset and script toggles |
| WooCommerce | Only when WooCommerce is active |
| Easy Digital Downloads | Only when EDD is active |
| LearnDash | Only when LearnDash is active |
| LifterLMS | Only when LifterLMS is active |

How it works:

- Each panel is a PHP array in `inc/customizer/options/<panel>.php`. `inc/customizer/options/options.php` lists the panels.
- Controls are drawn by a prebuilt React app (`inc/customizer/assets/dist/`). Control types include switch, buttons, select, multiselect, radio image, range slider, spacing, color, typography, sortable, social links, rich text and upsell.
- A Customizer search box finds any setting (`search.js`).
- Most settings use `postMessage` for live preview (about 3,270 versus 260 that refresh). CSS is generated from theme mods by the files in `inc/customizer/css-output/` and printed in `wp_head`, or saved to a file (see [Performance](#performance)).
- With Ocean Extra, the theme panel can hide Typography, Colors, Site Style & Settings, Pages, SEO, Performance, Blog, Header, Top Bar, Footer Widgets, Footer Copyright and Sidebar panels for a faster Customizer.

| Class | Responsibility |
|-------|---------------|
| `OceanWP_Customizer` (`inc/customizer/customizer.php`) | Reads the option arrays, registers sections, settings and controls, enqueues the React app and live preview |
| `inc/customizer/helpers.php` | `ocean_customize_options()`, `ocean_get_customize_settings_data()`, template choice lists |
| `inc/customizer/css-output/*.php` | One class per area, each adds CSS to the `ocean_head_css` filter |
| `inc/customizer/customizer-defaults.php` | Default values |

---

## Global Styling: Typography and Colors

**Where:** Customizer > Typography, Customizer > Colors.

| Setting | Description | Default |
|---------|-------------|---------|
| Disable Google Fonts | Stop loading Google Fonts | Off |
| Enable Local Google Fonts | Serve Google Fonts from the site (applied by Ocean Extra) | Off |
| Apply on Elementor | Also load Elementor's Google Fonts locally | Off |
| Preload Local Google Fonts | Preload local font files (applied by Ocean Extra) | Off |
| Font Format | ttf, woff, woff2 | ttf |
| Font Subsets | latin, latin-ext, cyrillic, cyrillic-ext, greek, greek-ext, vietnamese | latin |
| Body / All Headings / H1 to H6 | Font family, size, weight, line height, letter spacing, transform (responsive) | |
| Site Background, Primary, Border, Body, Headings, H1 to H6, Links colors | Global colors | |

The primary color is applied to many elements through the `ocean_primary_texts`, `ocean_primary_backgrounds`, `ocean_primary_borders` and `ocean_hover_primary_backgrounds` filters. Integrations (WooCommerce, Sensei) add their own selectors to these.

---

## Site Layouts & Sidebars

**Where:** Customizer > Site Style & Settings.

| Section | Settings |
|---------|----------|
| Site Layout | Site Layout (wide, boxed, separate; default wide), main container width, boxed width, content and sidebar width (%), content and widget padding (separate layout), site background color and image, boxed shadow, outside and inner background colors |
| Site Icons | Icon set: SVG, Simple Line Icons or Font Awesome (default Simple Line Icons) |
| Site Buttons | Padding, radius, border, typography and colors for theme buttons |
| Site Forms | Padding, radius, border, label/placeholder/text typography and colors for inputs |
| Scroll To Top | Enable (default on), visibility per device, size, radius, position (left/right), offsets, icon, colors |
| Site Pagination | Alignment (default right), border, typography and colors, active state colors |

**Content layouts.** Every content type has a layout setting with five choices: right sidebar, left sidebar, full width, 100% full width (full-screen), and both sidebars. "Both sidebars" adds a content order style (sidebar-sidebar-content, sidebar-content-sidebar, content-sidebar-sidebar) and widths. A responsive "sidebar order" setting chooses whether the sidebar shows before or after content on small screens.

| Content type | Setting key | Default |
|--------------|-------------|---------|
| Pages | `ocean_page_single_layout` | right-sidebar |
| Blog archives | `ocean_blog_archives_layout` | right-sidebar |
| Single posts | `ocean_blog_single_layout` | right-sidebar |
| Search results | `ocean_search_layout` | right-sidebar |
| 404 page | `ocean_error_page_layout` | full-width |
| WooCommerce shop / product | `ocean_woo_shop_layout` / `ocean_woo_product_layout` | left-sidebar |
| EDD archive / download | `ocean_edd_archive_layout` / `ocean_edd_download_layout` | left-sidebar |
| LearnDash / LifterLMS global | `ocean_ld_global_layout` / `ocean_llms_global_layout` | full-width |

The per-post meta `ocean_post_layout` (from the Ocean Extra metabox) wins over all of these.

**Sidebar styling** (Customizer > Sidebar): sidebar padding and background, widget padding, widget heading tag (default h4), widget and heading margins, widget heading and text typography and colors.

**Widget areas:**

| ID | Name |
|----|------|
| `sidebar` | Default Sidebar |
| `sidebar-2` | Left Sidebar (used by the both sidebars layout) |
| `search_sidebar` | Search Results Sidebar (when "Enable Custom Sidebar" is on) |
| `footer-one` to `footer-four` | Footer 1 to Footer 4 |
| `woo_sidebar` | WooCommerce Sidebar |
| `owp_off_canvas_sidebar` | Off-Canvas Filters (when the WooCommerce filter button is on) |
| `edd_sidebar` | EDD Sidebar |

---

## Pages, Page Title & Breadcrumbs

**Where:** Customizer > Pages & Special Pages.

| Section | Settings |
|---------|----------|
| Page Layout | Layout, content padding, both sidebars options, responsive sidebar order |
| Page Title | Enable (default on), visibility per device, heading tag (default h1), style (default, centered, centered minimal, background image), padding, background image with position/repeat/attachment/size/height/overlay, background and text colors, title and subtitle typography |
| Page Breadcrumbs | Enable (default on), source, position (default or under title), typography and colors, home as icon or text, home text, separator (default `>`), show item title, taxonomy used for posts/products/portfolio, custom 404 and search texts |
| Search Results Page | Layout, custom search sidebar, post type searched by the header search, results per page (default 8), custom logo |
| 404 Error Page | Layout, custom logo, "Custom 404" (use a My Library template, default off), template |

**Breadcrumb sources:** Default (the theme's own `OceanWP_Breadcrumb_Trail` in `inc/breadcrumbs.php`), Yoast SEO, SEOPress and Rank Math. Each third-party source is offered only when that plugin is active. Yoast SEO and Rank Math also need their own breadcrumbs setting turned on.

**Landing Page template:** the `templates/landing.php` page template outputs only the content area, with no top bar, header, page title or footer.

---

## Top Bar

**Where:** Customizer > Top Bar.

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Top Bar | Show the bar above the header | On |
| Full Width | Stretch the bar to full width | Off |
| Visibility | All devices, hide on tablet, hide on mobile, hide on both | All devices |
| Elements Positioning | Three layouts for content and social menu | one |
| Content | Text or HTML | "Add your content here" |
| Select Template (Content) | Replace content with a My Library template | None |
| Enable Social Menu | Social icons in the bar | On |
| Social Links | Profile URLs per network | |
| Links Target | New tab or same tab | New tab |
| Select Template (Social) | Replace the social menu with a template | None |
| Typography and Colors | Text, background, border, link colors | |

The "Top Bar" menu location (`topbar_menu`) is also shown in the bar.

---

## Header

**Where:** Customizer > Header.

### Header Types

`ocean_header_style` (default `minimal`):

| Type | Description |
|------|-------------|
| Minimal | Logo and menu on one row |
| Transparent | Header sits over the page content |
| Top | Menu bar above or below a centered logo (menu position setting) |
| Full Screen | Menu opens as a full-screen overlay, optional transparent header and separate logo |
| Center | Logo in the middle with a left menu and right menu, optional transparent header |
| Medium | Top row with search, logo and social (sortable), then a menu row (left, center, right) |
| Vertical | Fixed side header (left or right), optional closed (toggle) state, shadow, search form, top and bottom templates |
| Custom Header | Replace the header with a My Library template, optional container |

### Header Sections

| Section | Settings |
|---------|----------|
| General | Header type and its own options, full width, border bottom, height, padding, colors, content after header |
| Header Media | Uses the WordPress header image and video (`custom-header`), with position, repeat, attachment, size and overlay |
| Logo | Custom logo, retina logo, max width and max height, text logo typography and color |
| Menu | Menu position (default right), item spacing, link effects (10 styles plus none), dropdown icons, dropdown top border, dropdown panel width, menu typography and colors |
| Header Search | Style: disabled, drop down (default), header replace, overlay |
| Custom Menu | Replace the main menu with a My Library template |
| Social Menu | Enable (default off), style (simple, colored, minimal, dark), links target, profiles, custom template |

The header can be hidden per page with the `ocean_display_header` filter, which the Ocean Extra metabox uses. Beaver Themer and Elementor Pro theme builder headers replace it when assigned.

---

## Mobile Menu

**Where:** Customizer > Header > Mobile Menu.

| Setting | Description | Default |
|---------|-------------|---------|
| Breakpoints | Width where the mobile menu appears: 1280, 1080, 959, 767, 480, 320 or custom | 959 |
| Mobile Menu Type | Sidebar (slide in), drop down, full screen | Drop down |
| Mobile Header Search Type | Disabled, drop down, overlay | Disabled |
| Mobile Header Items Layout | Three positions for logo, menu icon and cart | one |
| Mobile Logo | Separate logo for mobile | |
| Opening Direction | Sidebar type: left or right | Left |
| Displace Content Effect | Sidebar type: push the page | On |
| Display Search Form Inside Menu | | On |
| Dropdown Target | Open submenus by icon or by link | Link |
| Menu Text, Hamburger Icon Class, Hamburger Animation | Toggle button text and icon | "Menu", `fa fa-bars`, default |
| Close Button, Close Text, Close Icon | | On, "Close Menu", `fas fa-times` |

The "Mobile (optional)" menu location (`mobile_menu`) is used instead of the main menu when assigned.

---

## Menus & Mega Menu

The theme registers four menu locations: Top Bar, Main, Footer and Mobile (optional). In **Appearance > Menus**, each menu item gets extra fields (`inc/walker/init.php`):

| Field | Description |
|-------|-------------|
| Template | Show a My Library template inside the item |
| Disable link | Item is a label only |
| Display Latest Posts | For category items, show the category's latest posts as a mega menu (desktop only) |
| Enable megamenu | Turn a top-level item into a mega menu |
| Megamenu auto width | Size the mega menu to its content |
| Megamenu columns | 1 to 6 |
| Hide Mega menu heading | For column headings |
| Widget area | Show a widget area in the item |
| Icon | Icon class shown before the label |

Values are stored as `_menu_item_*` post meta on the menu item.

---

## Blog

**Where:** Customizer > Blog.

### Blog Archives

| Setting | Description | Default |
|---------|-------------|---------|
| Archives Layout | Five content layouts | Right sidebar |
| Blog Style | Large entry, grid, thumbnail | Large entry |
| Grid settings | Grid columns, image size, fit rows or masonry, equal heights | Medium, fit rows |
| Thumbnail settings | Image position (left/right), vertical alignment | Left, center |
| Heading Tag | Entry title tag | h2 |
| Main Content Elements | Sortable: featured image, title, meta, content, read more | All |
| Meta Section Elements | Sortable: author, date, categories, comments, modified date, reading time | First four |
| Meta Separator | Default, modern, stylish, none | Default |
| Excerpt length | Number of words | |
| Pagination Style | Standard, infinite scroll, load more, next/prev | Standard |
| Infinite scroll and load more texts | Custom messages | |
| Image overlay on hover | | On |

### Single Post

| Setting | Description | Default |
|---------|-------------|---------|
| Single Layout | Five content layouts | Right sidebar |
| Single Post Title Style | Default plus six styles (`sph_style_2` to `sph_style_7`) | Default |
| Single Post Title | Show "Blog" or the post title in the page title area | Blog |
| Featured Image in Post Title | Use the featured image as title background | Off |
| Title meta style, separator and elements | For the styled title headers | |
| Main Content Elements | Sortable: featured image, title, meta, content, tags, social share, next/prev links, author box, related posts, comments | All |
| Meta Section Elements | Same choices as archives | |
| Comment Form Position | Before or after comments | After |
| Next/Prev Post Taxonomy | Category, tag or publish date | Tag |
| Related Posts Taxonomy | Category or tag | Category |
| Related Post Columns | Number of columns | |

The extra title styles load `assets/css/blog/blog-post-headers.css` only when a non-default style is chosen. Post formats (video, gallery, audio, quote, link) are supported and read their media from post meta (`ocean_post_video_embed`, `ocean_post_oembed`, `ocean_post_self_hosted_media`, `ocean_gallery_id`, `ocean_quote_format`, `ocean_link_format`, and others) set in the Ocean Extra metabox. The "Social Share" element fires `ocean_social_share`, which the Ocean Social Sharing plugin fills.

---

## Footer

### Footer Widgets

**Where:** Customizer > Footer Widgets.

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Footer Widgets | | On |
| Visibility | Per device | All devices |
| Enable Container | Keep widgets inside the site width | On |
| Padding | Responsive | |
| Heading Tag | Widget title tag | h4 |
| Footer Columns | 1 to 4 per device | 4 desktop, 2 tablet, 1 mobile |
| Select Template | Replace widgets with a My Library template | None |
| Fixed Footer | Adjusts the content height so the footer always sits at the bottom of the screen | Off |
| Footer Parallax | Footer is revealed as the page scrolls | Off |
| Typography and Colors | Heading, background, border, text, link colors | |

### Footer Copyright

**Where:** Customizer > Footer Copyright.

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Footer Copyright | | On |
| Visibility | Per device | All devices |
| Copyright Text | Text with shortcodes | `Copyright [oceanwp_date] - WordPress Theme by OceanWP` |
| Typography and Colors | Copyright text, footer menu, background, text, links | |

The Footer menu location (`footer_menu`) shows next to the copyright text.

---

## Per-Page Settings (Metabox)

The theme reads per-post settings, but the **OceanWP Settings** metabox that edits them comes from Ocean Extra (`includes/metabox/` and `includes/post-settings/` in that plugin). Without Ocean Extra there is no metabox.

What the theme reads directly from post meta:

| Meta key | Effect |
|----------|--------|
| `ocean_post_layout` | Content layout for this post, page or shop page. Overrides every Customizer layout |
| `ocean_both_sidebars_style` | Content order for the both sidebars layout |
| `ocean_breadcrumbs_color`, `ocean_breadcrumbs_separator_color`, `ocean_breadcrumbs_links_color`, `ocean_breadcrumbs_links_hover_color` | Breadcrumb colors for this page |
| Post format meta (`ocean_post_*`, `ocean_gallery_*`, `ocean_quote_*`, `ocean_link_*`) | Media for post formats |

Everything else in the metabox (hide top bar, header, page title, breadcrumbs, footer, pick a sidebar, header style, custom logo, menu, title background) is applied by Ocean Extra through theme filters such as `ocean_display_top_bar`, `ocean_display_header`, `ocean_display_page_header`, `ocean_display_breadcrumbs`, `ocean_display_footer_widgets`, `ocean_display_footer_bottom`, `ocean_get_sidebar`, `ocean_header_style`, `ocean_custom_logo` and `ocean_post_title_*`.

The settings are resolved against `oceanwp_post_id()`, which returns the current post, the WooCommerce shop page on the shop archive, or the posts page on the blog home.

---

## Custom Templates (My Library)

Several areas can be replaced with a template from the `oceanwp_library` post type. The theme does not register that post type; Ocean Extra does (OceanWP > My Library). Without it the template dropdowns only show "Select".

| Area | Customizer location | Setting |
|------|---------------------|---------|
| Top bar content | Top Bar > Content | `ocean_top_bar_template` |
| Top bar social | Top Bar > Social Menu | `ocean_top_bar_social_alt_template` |
| Header | Header > General (Custom Header type) | `ocean_header_template` |
| Vertical header top / bottom | Header > General | `ocean_vertical_header_template`, `ocean_vertical_header_bottom_template` |
| Main menu | Header > Menu > Custom Menu | `ocean_custom_nav_template` |
| Header social menu | Header > Social Menu | `ocean_menu_social_template` |
| Footer widgets | Footer Widgets | `ocean_footer_widgets_template` |
| 404 page | Pages > 404 Error Page | `ocean_error_page_template` |

Templates can be built with Elementor (the theme enqueues each template's Elementor CSS file), SiteOrigin Page Builder or the block editor. Polylang translations of a template are used automatically.

---

## SEO

**Where:** Customizer > SEO Settings.

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Schema Markup | Adds schema.org microdata to html, header, main, article, author and other elements | On |
| Featured image ALT on blog entries / single posts / related items | Use the image ALT text instead of the post title | Off |
| Enable OpenGraph | OpenGraph meta tags (output by Ocean Extra) | Off |
| X (Twitter) Username, Facebook Page URL, Facebook App ID | Used in OpenGraph output (by Ocean Extra) | |

---

## Accessibility

**Where:** Customizer > Accessibility - A11Y.

| Setting | Description |
|---------|-------------|
| Enable Accessibility Mode | Loads the accessibility stylesheet (`assets/css/a11y.min.css`) |
| Enable Keyboard Focus Outline | Visible focus rings (default off) |
| Enable Main Header Tags / Mobile Header Tags | Semantic markup for header parts |
| Search Forms | Semantic header search, visible label with custom text, size and color |
| Comment Form | Visible labels, size, color, required mark color |
| Header Media | Accessible header video layout: position (above top bar or above header), show on homepage or sitewide, use the header image on tablet and mobile, media height, play button colors |
| Main Header / Top Bar Social Menu | External link icon on social links, with size, offset and colors |

Skip links to `#main` are always printed.

---

## Performance

**Where:** Customizer > Performance.

| Setting | Description | Default |
|---------|-------------|---------|
| Styling Options Location | WP Head (inline `<style>`) or Custom File. With Custom File, CSS is served from `uploads/oceanwp/custom-style.css` (written by Ocean Extra) except inside the Customizer | WP Head |
| Emoji | Remove WordPress emoji scripts and styles when disabled | Enabled |
| Font Awesome Icons | Load Font Awesome 6.7.2 | Enabled |
| Ocean SVG Icons | Print the OceanWP SVG icon sprite in the footer (only used when Site Icons is set to SVG) | Enabled |
| Simple Line Icons | Load Simple Line Icons | Enabled |
| Lightbox | Load Magnific Popup and the theme lightbox script | Enabled |
| Custom Select | Adds a styled overlay to native select boxes (`select.min.js`) | Enabled |
| Widgets Stylesheet Load | Load Ocean Extra's widget CSS (applied by Ocean Extra) | Enabled |
| Scroll Effect | Smooth scrolling for anchor links, with a custom offset | Enabled |

Front-end scripts are also loaded only when needed: header style scripts, mobile menu type scripts, search style scripts, masonry only for masonry grids, infinite scroll and load more only when chosen, and blog header CSS only for styled single post titles.

---

## WooCommerce

Loaded only when WooCommerce is active (`inc/woocommerce/woocommerce-config.php`). The theme declares WooCommerce support with gallery zoom, lightbox and slider, and overrides templates in `woocommerce/`.

**Where:** Customizer > WooCommerce.

| Section | Settings |
|---------|----------|
| General | Additional WooCommerce Features (Enable by default; Disable keeps only plain WooCommerce), custom WooCommerce sidebar, categories widget style (default or dropdown), wishlist plugin (TI WooCommerce Wishlist or YITH), wishlist icon in header |
| Menu Cart | Visibility, hide when empty, open cart when a product is added, bag icon style, display (icon, icon + total, icon + count, icon + count + total), cart icon, cart style (drop down, cart, custom link), dropdown style (compact or spacious), mini cart on mobile, mobile cart sidebar |
| Archives | Layout, both sidebars and order, default catalog view (grid or list), product style (default or hover), product columns, list view excerpt length, quick view button (default on), content alignment, image style (featured image, image swap, gallery slider), element order (image, category, title, price/rating, rating, description, button), add to cart styling |
| Shop Conditional | Hide price and add to cart for logged-out users, message, My Account link, disable product links |
| Toolbar | Grid/list buttons, sort, result count (all on) |
| Off Canvas Filter | Filter button that opens the Off-Canvas Filters widget area, close button |
| Pagination | Standard, infinite scroll, load more |
| Category Page Featured Image | Show the category image on its archive |
| Single Product | Layout, product navigation, title tag, summary element order (title, rating, price, excerpt, quantity and button, meta), thumbnails horizontal or vertical, Ajax add to cart (default off), add to cart size (normal, big, very big), conditional display, tabs layout (horizontal, vertical, section) and position, up-sell and related product columns, related items, floating bar (default on) |
| Cart | Distraction Free Cart, cross-sells columns |
| Checkout | Distraction Free Checkout, Multi-Step Checkout with arrow or square timeline |

Distraction free mode removes the top bar, navigation, page title, footer widgets, scroll-to-top button, and (when those plugins are active) the sticky header, side panel and footer callout on the cart or checkout page.
| Additional Options | Sale badge style (square or circle) and content (Sale or percent), Login/Register style (original or side by side) |

Front-end features (all off when Additional WooCommerce Features is disabled):

| Feature | Behavior |
|---------|----------|
| Quick View | Modal with product images and summary, loaded by AJAX (`oceanwp_product_quick_view`), add to cart inside the modal |
| Floating Bar | Sticky bar with title, price and add to cart on single products |
| Ajax Add to Cart | Single product, floating bar and quick view add to cart without reload, with stock checks, notices and cart fragments |
| Multi-Step Checkout | Checkout split into steps with a timeline and per-step validation (`oceanwp_validate_checkout`) |
| Grid/List toggle | Switch catalog view on the shop page |
| Off-canvas filters | Side panel for filter widgets |
| Image swap / gallery slider | Second image on hover or a slider in product cards |

---

## Easy Digital Downloads, LearnDash & LifterLMS

Each panel shows only when its plugin is active.

| Panel | Settings |
|-------|----------|
| Easy Digital Downloads | Custom EDD sidebar, menu cart (hide when empty, open on add, bag style, dropdown style), archive layout and columns, content alignment, variable product button (button or options), add to cart styling, single download layout, navigation, add to cart button, next/prev taxonomy, distraction free checkout |
| LearnDash | Distraction Free Learning, global, course and lesson/topic layouts, advanced styling |
| LifterLMS | Distraction Free Checkout, Distraction Free Learning, membership featured image, global, course and lesson layouts, columns, advanced styling for courses, memberships and lessons |

EDD templates are in `partials/edd/` and EDD gets its own AJAX cart scripts.

---

## Page Builder & Plugin Integrations

Each integration is a class in `inc/third/` that loads only when the plugin is present.

| Plugin | What the theme does |
|--------|---------------------|
| Elementor | Enqueues Elementor CSS for My Library templates, preview styles in the editor, renders template content in theme areas |
| Elementor Pro | Registers all core Theme Builder locations (header, footer, single, archive) |
| Beaver Builder / Beaver Themer | Adds theme builder support; an assigned Beaver header or footer replaces the theme top bar, header and footer; registers part hooks; turns off the Beaver lightbox in favor of the theme's |
| Block editor (Gutenberg) | `align-wide`, `wp-block-styles`, `responsive-embeds`, editor styles with the Customizer primary and link colors |
| SiteOrigin Page Builder | Renders SiteOrigin layouts in My Library templates and the custom 404 |
| bbPress, BuddyPress | Extra stylesheets |
| Sensei | Content wrappers, primary color selectors, adds the metabox to Sensei post types |
| WordPress Social Login | Restyles provider icons |
| AMP | Replaces JS-driven menus, search and cart with AMP-compatible markup and CSS |
| PWA plugin | Offline and server error templates (`offline.php`, `500.php`) |
| Polylang | Registers translatable theme mod strings; uses translated templates |
| WPML | `wpml-config.xml` marks text theme mods (copyright, top bar content, menu texts and others) for translation |
| Yoast SEO, SEOPress, Rank Math | Breadcrumb sources |
| TI WooCommerce Wishlist, YITH Wishlist | Wishlist button and header icon |
| The Events Calendar | Template override in `tribe-events/default-template.php` |

Other OceanWP plugins detected by class: `Ocean_Extra`, `Ocean_Sticky_Header`, `Ocean_Sticky_Footer`, `Ocean_eCommerce`.

---

## Admin Pages

| Page | Location | Notes |
|------|----------|-------|
| OceanWP theme panel | Appearance > OceanWP (without Ocean Extra) or top-level OceanWP menu (with Ocean Extra) | Panes: Home, Customizer, Install Demos, Ocean Images, Integration, Useful Plugins, Changelog, Free vs Pro, Elementor Widgets, Elementor Library, Gutenberg Blocks, Extra Settings, Admin Settings, White Label, System Info, Help. Without Ocean Extra most panes describe the feature and link to installing Ocean Extra |
| Ocean Extra notice | Admin notice and panel notice | Recommends installing and activating Ocean Extra, with one-click install. Dismissal is stored in `oceanwp_plugin_notice_first_dismissed` and `oceanwp_plugin_notice_permanently_dismissed` |
| Menu item fields | Appearance > Menus | Mega menu and template fields (see [Menus & Mega Menu](#menus--mega-menu)) |

The panel reads White Label options (`oceanwp_hide_box`, `oceanwp_hide_changelog`, `oceanwp_hide_help_section`, `oceanwp_theme_name`, `oceanwp_theme_panel_logo`) to hide sections or rename the theme. The Ocean White Label add-on saves them.

---

## Display & Developer API

### Templates and Overrides

| Path | Purpose |
|------|---------|
| `partials/` | Header, top bar, footer, entry, single, page, search, mobile and EDD parts loaded with `get_template_part()` |
| `templates/landing.php` | "Landing Page" page template |
| `woocommerce/` | WooCommerce overrides (mini cart, loop, single product, multi-step checkout, quick view) |
| `tribe-events/default-template.php` | The Events Calendar wrapper |

Copy any of these into a child theme to override them. Most functions in `inc/helpers.php` are wrapped in `function_exists()` and can be redefined in a child theme.

### Shortcodes, Blocks, Widgets

The theme registers no shortcodes, blocks, custom widgets or post types. `[oceanwp_date]`, the `oceanwp_library` post type and the OceanWP widgets come from Ocean Extra.

### Key Actions

The theme has about 165 `ocean_*` actions. The main layout hooks:

| Hook | Description |
|------|-------------|
| `ocean_before_outer_wrap` / `ocean_after_outer_wrap` | Around the whole site wrapper |
| `ocean_top_bar` | Prints the top bar (`oceanwp_top_bar_template`) |
| `ocean_header` | Prints the header (`oceanwp_header_template`) |
| `ocean_header_inner_left_content` / `_middle_content` / `_right_content` | Header columns (logo, nav, social, mobile icon, cart) |
| `ocean_before_main` / `ocean_after_main` | Around `<main>` |
| `ocean_page_header` | Page title area |
| `ocean_before_content_wrap`, `ocean_before_primary`, `ocean_before_content`, `ocean_before_content_inner` (and `after_` pairs) | Content area |
| `ocean_before_sidebar` / `ocean_after_sidebar` | Sidebar |
| `ocean_footer` | Prints the footer (`oceanwp_footer_template`) |
| `ocean_before_blog_entry_*` / `ocean_after_blog_entry_*` | Around archive entry parts |
| `ocean_before_single_post_*` / `ocean_after_single_post_*` | Around single post parts |
| `ocean_social_share` | Social share slot on single posts |
| `ocean_do_offline`, `ocean_do_server_error` | PWA templates |
| `oceanwp_theme_panel_init` | Theme panel loaded |
| `owp_fs_loaded` | Freemius initialized |

### Key Filters

The theme has about 260 `ocean_*` filters. The most useful:

| Hook | Description |
|------|-------------|
| `ocean_head_css` | Add CSS to the generated Customizer CSS |
| `ocean_customize_options_data` | Add or remove Customizer panels and settings |
| `ocean_options_register` | Filter a single options file after it loads |
| `oceanwp_use_composite_customizer` | Turn off the composite React Customizer (default true) |
| `ocean_post_id` | Change the post ID used for per-page settings |
| `ocean_post_layout_meta_value`, `ocean_post_layout_class` | Change the content layout |
| `ocean_both_sidebars_style`, `ocean_sidebar_order`, `ocean_get_sidebar` | Sidebar layout and choice |
| `ocean_display_top_bar`, `ocean_display_header`, `ocean_display_page_header`, `ocean_display_breadcrumbs`, `ocean_display_footer_widgets`, `ocean_display_footer_bottom` | Show or hide areas |
| `ocean_header_style`, `ocean_custom_header_template` | Header type and template |
| `ocean_title`, `ocean_post_subheading` | Page title and subtitle text |
| `ocean_blog_entry_elements_positioning` | Archive entry element order |
| `ocean_footer_widgets_columns` | Footer column count |
| `ocean_localize_array` | Data passed to `oceanwp-main` JS |
| `ocean_primary_texts`, `ocean_primary_backgrounds`, `ocean_primary_borders`, `ocean_hover_primary_backgrounds` | Selectors that use the primary color |
| `ocean_custom_header_args`, `ocean_custom_logo_args` | WordPress custom header and logo support args |
| `ocean_meta_viewport`, `ocean_schema_markup` | Viewport tag and schema attributes |
| `oceanwp_breadcrumbs_source_list` | Breadcrumb source choices |
| `oceanwp_theme_panel_sections` | Theme panel panes |

### AJAX Actions

| Action | Purpose |
|--------|---------|
| `oceanwp_product_quick_view`, `oceanwp_add_cart_quick_view` | WooCommerce quick view (logged in and out) |
| `oceanwp_add_cart_single_product`, `oceanwp_add_cart_floating_bar` | Ajax add to cart |
| `oceanwp_validate_checkout` | Multi-step checkout validation |
| `ocean_update_search_box_light_mode` | Customizer search box theme |
| `oceanwp_cp_load_pane_action`, `oceanwp_cp_load_sidebar_warnings_action`, `oceanwp_cp_load_awaiting_mods_action`, `oceanwp_cp_fonts_clear` | Theme panel |
| `oceanwp_dismissed_notice`, `oceanwp_check_notice_actions`, `oceanwp_notice_button_click` (and `_panel_` versions) | Ocean Extra install notice |

The theme registers no REST routes.

### Data Storage

| Type | Keys |
|------|------|
| Theme mods | All Customizer settings (`ocean_*`), in the `theme_mods_oceanwp` option (or the child theme's) |
| Options | `oceanwp_theme_installed_version`, `oceanwp_plugin_notice_first_dismissed`, `oceanwp_plugin_notice_permanently_dismissed` |
| Post meta (read) | `ocean_post_layout`, `ocean_both_sidebars_style`, breadcrumb colors, post format meta (written by Ocean Extra) |
| Menu item meta | `_menu_item_template`, `_menu_item_mega_template`, `_menu_item_nolink`, `_menu_item_category_post`, `_menu_item_megamenu*`, `_menu_item_icon` |
| File (read) | `uploads/oceanwp/custom-style.css` when Styling Options Location is Custom File |

### Uninstall

Nothing is removed. Deleting the theme leaves its theme mods, options and post meta in the database.

---

*OceanWP - Free multi-purpose WordPress theme with deep Customizer control and WooCommerce features*
