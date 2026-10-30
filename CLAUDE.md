# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

OceanWP is a free, classic (PHP template) WordPress theme. Requires WordPress 5.9+ and PHP 7.4+. The version lives in `style.css`, `sass/style.scss`, `readme.txt` and `README.md`. Release notes go in `changelog.md`.

## Commands

Front-end JS and SCSS are built with Grunt, not npm scripts:

```bash
npx grunt              # default: browserify + uglify JS, compile SCSS (expanded + .min), autoprefixer, cssmin
npx grunt watch        # rebuild on changes to sass/**/*.scss, assets/src/js/**/*.js, inc/customizer/**/*.js
npx grunt build        # copy a distributable theme into build/oceanwp/ (excludes dev files)
npx grunt package      # zip build/oceanwp/ into build/oceanwp.zip
npx grunt final        # default + build + package
```

npm scripts (`package.json`):

```bash
npm run build          # webpack production build (single entry, see below)
npm run dev            # webpack watch
npm run lint:js        # eslint assets/src (eslint is not in devDependencies and there is no eslint config in the repo)
npm run make:json      # wp i18n make-json languages --no-purge
```

Composer scripts (`composer.json`):

```bash
composer lint:php      # php-parallel-lint over the repo (syntax check)
composer lint          # phpcs --standard=phpcs.xml.dist
composer format        # phpcbf --standard=phpcs.xml.dist
composer make-pot      # regenerate languages/oceanwp.pot
composer update-mo     # msgmerge + msgfmt for every bundled .po file
```

`phpcs.xml.dist` is referenced by `lint` and `format` but is not in the repo, so those two fail until it is added.

There are no automated tests.

## Built files are committed

Compiled CSS and JS are tracked in git and loaded directly by PHP. After editing a source file, rebuild and commit the output too.

- `assets/src/js/theme/**` -> `assets/js/*.min.js` (browserify + babelify, then uglify). WooCommerce and EDD scripts: `assets/src/js/wp-plugins/**` -> `assets/js/wp-plugins/**`.
- `sass/*.scss` -> `assets/css/**` (both `.css` and `.min.css`). `sass/stylesheet.scss` builds `assets/css/style.css` / `style.min.css`, which is the real front-end stylesheet (`oceanwp-style`).
- `sass/style.scss` builds the root `style.css` (theme header only). Keep the two version headers in sync.
- `inc/activation-notice/assets` and `inc/themepanel/assets` also have `.scss`/`.js` sources compiled next to themselves.
- The React Customizer is prebuilt in `inc/customizer/assets/dist/` (`index.js`, `live-preview.js`, `search.js` plus `*.asset.php`). Its source (`inc/customizer/customizer-src/`, built with `@wordpress/scripts` via `inc/customizer/package.json`) is gitignored and not in this repo, so those bundles cannot be rebuilt from here.
- The root `webpack.config.js` has one entry, `inc/customizer/assets/src/js/customize-search.js`, which is also missing (gitignored). Its committed output is `inc/customizer/assets/js/customize-search.js`.

## Architecture

**Bootstrap.** `functions.php` defines `OCEANWP_Theme_Class` and instantiates it at the bottom. The constructor:
1. Runs small theme_mod migrations.
2. Defines constants, including plugin-detection flags such as `OCEAN_EXTRA_ACTIVE`, `OCEANWP_WOOCOMMERCE_ACTIVE`, `OCEANWP_EDD_ACTIVE`, `OCEANWP_ELEMENTOR_ACTIVE`, `OCEANWP_LEARNDASH_ACTIVE`, `OCEANWP_LIFTERLMS_ACTIVE` (all `class_exists` checks).
3. Requires `inc/helpers.php`, `inc/header-content.php`, `inc/template-helpers.php`, the walker, and every `inc/third/class-*.php` integration. `inc/woocommerce/woocommerce-config.php` and `inc/edd/edd-config.php` load only when those plugins are active.
4. On `after_setup_theme` (priority 4) loads `inc/breadcrumbs.php`, `inc/customizer/customizer.php`, and in admin the Ocean Extra install notice (`inc/activation-notice/`).

Front-end assets are enqueued in `theme_css()` / `theme_js()`. Most scripts are enqueued conditionally based on theme_mods (header style, mobile menu style, search style, pagination style, and the `ocean_performance_*` toggles).

**Templates and hooks.** Root templates (`header.php`, `index.php`, `footer.php`, etc.) are mostly `do_action( 'ocean_*' )` calls. The content is attached in `inc/helpers.php` and `inc/header-content.php` (for example `add_action( 'ocean_header', 'oceanwp_header_template' )`), which then load files from `partials/`. Integrations and plugins can swap these (Beaver Themer replaces `ocean_header` / `ocean_footer`). Plugin template overrides live in `woocommerce/` and `tribe-events/`.

Functions in `helpers.php` are often wrapped in `function_exists()` so a child theme can redefine them (see `oceanwp-child-theme`).

**Customizer settings.** All settings are theme_mods (`get_theme_mod( 'ocean_...' )`), not options. They are declared as PHP arrays:
- `inc/customizer/options/options.php` lists the top-level sections and pulls each one from `inc/customizer/options/<name>.php` via `ocean_customize_options()`. WooCommerce, EDD, LearnDash and LifterLMS sections only register when the plugin is active.
- The full tree passes through the `ocean_customize_options_data` filter (Ocean Extra and other add-ons hook here), then `OceanWP_Customizer::register_options_recursive()` turns it into `add_section` / `add_setting` / `add_control` calls.
- Defaults are in `inc/customizer/customizer-defaults.php`, active-callbacks in `inc/customizer/callback.php` and `inc/customizer/active-callback-rules/`.
- Controls are rendered by the prebuilt React app in `assets/dist/`. The "composite" renderer is on by default (`oceanwp_use_composite_customizer` filter) and falls back to legacy controls for sections with unsupported control types.

**Dynamic CSS.** Each file in `inc/customizer/css-output/` adds to the `ocean_head_css` filter. `custom_css()` prints the result as an inline `<style>` in `wp_head`. If the theme_mod `ocean_customzer_styling` is `file`, the CSS is served from `wp-content/uploads/oceanwp/custom-style.css` instead (when that file exists and you are not in the Customizer).

## Ocean Extra and other OceanWP plugins

The theme works alone but several pieces change when Ocean Extra (`class Ocean_Extra`) is active:

- **Admin menu.** With Ocean Extra, the theme adds a top-level "OceanWP" menu that renders Ocean Extra's `ocean_admin_page_contents`. Without it, the theme adds Appearance > OceanWP using its own `inc/themepanel/views/layout/master.php`. `inc/themepanel/theme-panel.php` loads on `admin_init` and only fully initializes on `?page=oceanwp` or AJAX.
- **Customizer panels can be hidden.** `register_customize_options()` removes core sections (typography, colors, header, blog, etc.) when `Ocean_Extra_Theme_Panel::get_setting( 'oe_<section>_panel' )` is false. If a Customizer section is missing on a dev site, check those Ocean Extra panel settings.
- **Freemius.** `owp_fs()` (theme slug `oceanwp`, Freemius id 3752, bundle 3767) is only initialized when Ocean Extra is active and ships `includes/freemius/start.php`. It fires `owp_fs_loaded`. Without Ocean Extra there is no Freemius in the theme.
- **Pro checks.** Some Customizer callbacks call `ocean_check_pro_license()` (defined by Ocean Extra), for example `ocean_cb_oec_active()` needs Ocean Extra, a pro license and Ocean eCommerce together.
- Other add-ons are detected by class: `Ocean_Sticky_Header`, `Ocean_Sticky_Footer`, `Ocean_eCommerce`.
