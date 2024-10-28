const scriptsPath = "./assets/src/js/theme";
const outputsPath = "./assets/js";

// Easy Digital Downloads Plugin Pathes
const eddScriptsPath = "./assets/src/js/wp-plugins/easy-digital-downloads";
const eddOutputsPath = "./assets/js/wp-plugins/easy-digital-downloads";

// Easy Wocommerce Plugin Pathes
const wooScriptsPath = "./assets/src/js/wp-plugins/woocommerce";
const wooOutputsPath = "./assets/js/wp-plugins/woocommerce";

module.exports = function (grunt) {
  const sass = require("sass");

  // require it at the top and pass in the grunt instance
  require("time-grunt")(grunt);

  // Load all Grunt tasks
  require("jit-grunt")(grunt, {
    browserify: "grunt-browserify",
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    browserify: {
      prod: {
        files: {
          [`${outputsPath}/theme.min.js`]: `${scriptsPath}/theme.js`,
          [`${outputsPath}/select.min.js`]: `${scriptsPath}/select.js`,
          [`${outputsPath}/vertical-header.min.js`]: `${scriptsPath}/header/vertical-header.js`,
          [`${outputsPath}/full-screen-menu.min.js`]: `${scriptsPath}/menu/full-screen-menu.js`,
          [`${outputsPath}/drop-down-mobile-menu.min.js`]: `${scriptsPath}/mobile-menu/drop-down-mobile-menu.js`,
          [`${outputsPath}/full-screen-mobile-menu.min.js`]: `${scriptsPath}/mobile-menu/full-screen-mobile-menu.js`,
          [`${outputsPath}/sidebar-mobile-menu.min.js`]: `${scriptsPath}/mobile-menu/sidebar-mobile-menu.js`,
          [`${outputsPath}/drop-down-search.min.js`]: `${scriptsPath}/search/drop-down-search.js`,
          [`${outputsPath}/header-replace-search.min.js`]: `${scriptsPath}/search/header-replace-search.js`,
          [`${outputsPath}/mobile-search-icon.min.js`]: `${scriptsPath}/search/mobile-search-icon.js`,
          [`${outputsPath}/overlay-search.min.js`]: `${scriptsPath}/search/overlay-search.js`,
          [`${outputsPath}/blog-masonry.min.js`]: `${scriptsPath}/blog-masonry.js`,
          [`${outputsPath}/scroll-top.min.js`]: `${scriptsPath}/scroll-top.js`,
          [`${outputsPath}/scroll-effect.min.js`]: `${scriptsPath}/scroll-effect.js`,
          [`${outputsPath}/equal-height-elements.min.js`]: `${scriptsPath}/equal-height-elements.js`,
          [`${outputsPath}/ow-infinite-scroll.min.js`]: `${scriptsPath}/ow-infinite-scroll.js`,
          [`${outputsPath}/ow-slider.min.js`]: `${scriptsPath}/ow-slider.js`,
          [`${outputsPath}/ow-lightbox.min.js`]: `${scriptsPath}/ow-lightbox.js`,
        },
        options: {
          transform: [["babelify", { presets: ["@babel/preset-env"] }]],
        },
      },
      dev: {
        files: {
          // Easy Digital Downloads
          [`${eddOutputsPath}/edd-ajax-cart.min.js`]: `${eddScriptsPath}/edd-ajax-cart.js`,
          [`${eddOutputsPath}/edd-display-cart.min.js`]: `${eddScriptsPath}/edd-display-cart.js`,

          // Woocommerce
          [`${wooOutputsPath}/woo-custom-features.min.js`]: `${wooScriptsPath}/woo-custom-features.js`,
          [`${wooOutputsPath}/woo-ajax-add-to-cart.min.js`]: `${wooScriptsPath}/woo-ajax-add-to-cart.js`,
          [`${wooOutputsPath}/woo-cat-widget.min.js`]: `${wooScriptsPath}/woo-cat-widget.js`,
          [`${wooOutputsPath}/woo-display-cart.min.js`]: `${wooScriptsPath}/woo-display-cart.js`,
          [`${wooOutputsPath}/woo-floating-bar.min.js`]: `${wooScriptsPath}/woo-floating-bar.js`,
          [`${wooOutputsPath}/woo-hover-style.min.js`]: `${wooScriptsPath}/woo-hover-style.js`,
          [`${wooOutputsPath}/woo-mini-cart.min.js`]: `${wooScriptsPath}/woo-mini-cart.js`,
          [`${wooOutputsPath}/woo-multi-step-checkout.min.js`]: `${wooScriptsPath}/woo-multi-step-checkout.js`,
          [`${wooOutputsPath}/woo-off-canvas.min.js`]: `${wooScriptsPath}/woo-off-canvas.js`,
          [`${wooOutputsPath}/woo-quick-view.min.js`]: `${wooScriptsPath}/woo-quick-view.js`,
          [`${wooOutputsPath}/woo-thumbnails.min.js`]: `${wooScriptsPath}/woo-thumbnails.js`,
        },
        options: {
          transform: [["babelify", { presets: ["@babel/preset-env"] }]],
        },
      },
    },

    // Concat and Minify our js.
    uglify: {
      prod: {
        files: {
          [`${outputsPath}/theme.min.js`]: `${outputsPath}/theme.min.js`,
          [`${outputsPath}/select.min.js`]: `${outputsPath}/select.min.js`,
          [`${outputsPath}/vertical-header.min.js`]: `${outputsPath}/vertical-header.min.js`,
          [`${outputsPath}/full-screen-menu.min.js`]: `${outputsPath}/full-screen-menu.min.js`,
          [`${outputsPath}/drop-down-mobile-menu.min.js`]: `${outputsPath}/drop-down-mobile-menu.min.js`,
          [`${outputsPath}/full-screen-mobile-menu.min.js`]: `${outputsPath}/full-screen-mobile-menu.min.js`,
          [`${outputsPath}/sidebar-mobile-menu.min.js`]: `${outputsPath}/sidebar-mobile-menu.min.js`,
          [`${outputsPath}/drop-down-search.min.js`]: `${outputsPath}/drop-down-search.min.js`,
          [`${outputsPath}/header-replace-search.min.js`]: `${outputsPath}/header-replace-search.min.js`,
          [`${outputsPath}/mobile-search-icon.min.js`]: `${outputsPath}/mobile-search-icon.min.js`,
          [`${outputsPath}/overlay-search.min.js`]: `${outputsPath}/overlay-search.min.js`,
          [`${outputsPath}/blog-masonry.min.js`]: `${outputsPath}/blog-masonry.min.js`,
          [`${outputsPath}/scroll-top.min.js`]: `${outputsPath}/scroll-top.min.js`,
          [`${outputsPath}/scroll-effect.min.js`]: `${outputsPath}/scroll-effect.min.js`,
          [`${outputsPath}/equal-height-elements.min.js`]: `${outputsPath}/equal-height-elements.min.js`,
          [`${outputsPath}/ow-infinite-scroll.min.js`]: `${outputsPath}/ow-infinite-scroll.min.js`,
          [`${outputsPath}/ow-slider.min.js`]: `${outputsPath}/ow-slider.min.js`,
          [`${outputsPath}/ow-lightbox.min.js`]: `${outputsPath}/ow-lightbox.min.js`,
        },
      },
      dev: {
        files: {
          // Frontend
          // Easy Digital Downloads
          [`${eddOutputsPath}/edd-ajax-cart.min.js`]: `${eddOutputsPath}/edd-ajax-cart.min.js`,
          [`${eddOutputsPath}/edd-display-cart.min.js`]: `${eddOutputsPath}/edd-display-cart.min.js`,

          // Woocommerce
          [`${wooOutputsPath}/woo-custom-features.min.js`]: `${wooOutputsPath}/woo-custom-features.min.js`,
          [`${wooOutputsPath}/woo-ajax-add-to-cart.min.js`]: `${wooOutputsPath}/woo-ajax-add-to-cart.min.js`,
          [`${wooOutputsPath}/woo-cat-widget.min.js`]: `${wooOutputsPath}/woo-cat-widget.min.js`,
          [`${wooOutputsPath}/woo-display-cart.min.js`]: `${wooOutputsPath}/woo-display-cart.min.js`,
          [`${wooOutputsPath}/woo-floating-bar.min.js`]: `${wooOutputsPath}/woo-floating-bar.min.js`,
          [`${wooOutputsPath}/woo-hover-style.min.js`]: `${wooOutputsPath}/woo-hover-style.min.js`,
          [`${wooOutputsPath}/woo-mini-cart.min.js`]: `${wooOutputsPath}/woo-mini-cart.min.js`,
          [`${wooOutputsPath}/woo-multi-step-checkout.min.js`]: `${wooOutputsPath}/woo-multi-step-checkout.min.js`,
          [`${wooOutputsPath}/woo-off-canvas.min.js`]: `${wooOutputsPath}/woo-off-canvas.min.js`,
          [`${wooOutputsPath}/woo-quick-view.min.js`]: `${wooOutputsPath}/woo-quick-view.min.js`,
          [`${wooOutputsPath}/woo-thumbnails.min.js`]: `${wooOutputsPath}/woo-thumbnails.min.js`,

          // // Admin
          // "inc/customizer/assets/js/customize-preview.min.js":
          //   "inc/customizer/assets/js/customize-preview.js",

          // "inc/customizer/assets/js/typography-customize-preview.min.js":
          //   "inc/customizer/assets/js/typography-customize-preview.js",

          // "inc/customizer/assets/js/woo-typography-customize-preview.min.js":
          //   "inc/customizer/assets/js/woo-typography-customize-preview.js",

          // "inc/customizer/assets/js/woo-customize-preview.min.js":
          //   "inc/customizer/assets/js/woo-customize-preview.js",

          // "inc/customizer/assets/js/edd-customize-preview.min.js":
          //   "inc/customizer/assets/js/edd-customize-preview.js",

          // "inc/customizer/assets/js/llms-customize-preview.min.js":
          //   "inc/customizer/assets/js/llms-customize-preview.js",

          // "inc/customizer/assets/js/ld-customize-preview.min.js":
          //   "inc/customizer/assets/js/ld-customize-preview.js",

          // "inc/customizer/assets/min/js/general.min.js":
          //   "inc/customizer/controls/general.js",

          // "inc/customizer/assets/min/js/buttonset.min.js":
          //   "inc/customizer/controls/buttonset/buttonset.js",

          // "inc/customizer/assets/min/js/color.min.js":
          //   "inc/customizer/controls/color/color.js",

          // "inc/customizer/assets/min/js/dimensions.min.js":
          //   "inc/customizer/controls/dimensions/dimensions.js",

          // "inc/customizer/assets/min/js/dropdown-pages.min.js":
          //   "inc/customizer/controls/dropdown-pages/dropdown-pages.js",

          // "inc/customizer/assets/min/js/icon-select.min.js":
          //   "inc/customizer/controls/icon-select/icon-select.js",

          // "inc/customizer/assets/min/js/multicheck.min.js":
          //   "inc/customizer/controls/multicheck/multicheck.js",

          // "inc/customizer/assets/min/js/multiple-select.min.js":
          //   "inc/customizer/controls/multiple-select/multiple-select.js",

          // "inc/customizer/assets/min/js/radio-image.min.js":
          //   "inc/customizer/controls/radio-image/radio-image.js",

          // "inc/customizer/assets/min/js/range.min.js":
          //   "inc/customizer/controls/range/range.js",

          // "inc/customizer/assets/min/js/slider.min.js":
          //   "inc/customizer/controls/slider/slider.js",

          // "inc/customizer/assets/min/js/sortable.min.js":
          //   "inc/customizer/controls/sortable/sortable.js",

          // "inc/customizer/assets/min/js/text.min.js":
          //   "inc/customizer/controls/text/text.js",

          // "inc/customizer/assets/min/js/textarea.min.js":
          //   "inc/customizer/controls/textarea/textarea.js",

          // "inc/customizer/assets/min/js/typo.min.js":
          //   "inc/customizer/controls/typo/typo.js",

          // "inc/customizer/assets/min/js/typography.min.js":
          //   "inc/customizer/controls/typography/typography.js",

          // "inc/customizer/assets/min/js/upsell.min.js":
          //   "inc/customizer/controls/upsell/upsell.js",
        },
      },
    },

    // Minify CSS
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: 0,
      },
      prod: {
        files: {
          "assets/css/third/elementor-editor.min.css":
            "assets/css/third/elementor-editor.css",
          "assets/css/third/hamburgers/hamburgers.min.css":
            "assets/css/third/hamburgers/hamburgers.css",
          "assets/css/third/magnific-popup.min.css":
            "assets/css/third/magnific-popup.css",
          "assets/css/third/slick.min.css": "assets/css/third/slick.css",
          "assets/css/third/bbpress.min.css": "assets/css/third/bbpress.css",
          "assets/css/third/buddypress.min.css":
            "assets/css/third/buddypress.css",
          "assets/css/third/sensei.min.css": "assets/css/third/sensei.css",
          "assets/css/third/social-login.min.css":
            "assets/css/third/social-login.css",
          "assets/css/woo/woo-star-font.min.css":
            "assets/css/woo/woo-star-font.css",
          "assets/css/editor-style.min.css": "assets/css/editor-style.css",
          'assets/css/blog/blog-post-headers.min.css': 'assets/css/blog/blog-post-headers.css',

          // "inc/customizer/assets/css/customizer-simple-line-icons.min.css":
          //   "inc/customizer/assets/css/customizer-simple-line-icons.css",
          // "inc/customizer/assets/min/css/rtl.min.css":
          //   "inc/customizer/controls/rtl.css",
          // "inc/customizer/assets/min/css/general.min.css":
          //   "inc/customizer/controls/general.css",
          // "inc/customizer/assets/min/css/buttonset.min.css":
          //   "inc/customizer/controls/buttonset/buttonset.css",
          // "inc/customizer/assets/min/css/color.min.css":
          //   "inc/customizer/controls/color/color.css",
          // "inc/customizer/assets/min/css/dimensions.min.css":
          //   "inc/customizer/controls/dimensions/dimensions.css",
          // "inc/customizer/assets/min/css/heading.min.css":
          //   "inc/customizer/controls/heading/heading.css",
          // "inc/customizer/assets/min/css/info.min.css":
          //   "inc/customizer/controls/info/info.css",
          // "inc/customizer/assets/min/css/icon-select.min.css":
          //   "inc/customizer/controls/icon-select/icon-select.css",
          // "inc/customizer/assets/min/css/multiple-select.min.css":
          //   "inc/customizer/controls/multiple-select/multiple-select.css",
          // "inc/customizer/assets/min/css/radio-image.min.css":
          //   "inc/customizer/controls/radio-image/radio-image.css",
          // "inc/customizer/assets/min/css/range.min.css":
          //   "inc/customizer/controls/range/range.css",
          // "inc/customizer/assets/min/css/slider.min.css":
          //   "inc/customizer/controls/slider/slider.css",
          // "inc/customizer/assets/min/css/sortable.min.css":
          //   "inc/customizer/controls/sortable/sortable.css",
          // "inc/customizer/assets/min/css/textarea.min.css":
          //   "inc/customizer/controls/textarea/textarea.css",
          // "inc/customizer/assets/min/css/typo.min.css":
          //   "inc/customizer/controls/typo/typo.css",
          // "inc/customizer/assets/min/css/typography.min.css":
          //   "inc/customizer/controls/typography/typography.css",
          // "inc/customizer/assets/min/css/upsell.min.css":
          //   "inc/customizer/controls/upsell/upsell.css",
          "inc/themepanel/assets/css/theme-panel.min.css":
            "inc/themepanel/assets/css/theme-panel.css",
        },
      },
    },

    // Compile our sass.
    sass: {
      dev: {
        // This outputs the expanded css file
        options: {
          implementation: sass,
          outputStyle: "expanded",
          sourceMap: false,
        },
        files: {
          "assets/css/woo/woocommerce.css": "sass/woocommerce.scss",
          "assets/css/woo/hover-style.css": "sass/hover-style.scss",
          "assets/css/woo/woo-floating-bar.css": "sass/woo-floating-bar.scss",
          "assets/css/woo/woo-mini-cart.css": "sass/woo-mini-cart.scss",
          "assets/css/woo/woo-quick-view.css": "sass/woo-quick-view.scss",
          "assets/css/woo/woo-multistep-checkout.css":
            "sass/woo-multistep-checkout.scss",
          "assets/css/woo/wishlist.css": "sass/wishlist.scss",
          "assets/css/gutenberg/gutenberg-editor.css":
            "sass/gutenberg-editor.scss",
          "assets/css/edd/edd.css": "sass/edd.scss",
          "assets/css/llms/llms.css": "sass/llms.scss",
          "assets/css/learndash/learndash.css": "sass/learndash.scss",
          "assets/css/style.css": "sass/stylesheet.scss",
          'assets/css/blog/blog-post-headers.css': 'sass/blog-post-headers.scss',
        },
      },
      prod: {
        // This outputs the compressed css file
        options: {
          implementation: sass,
          outputStyle: "compressed",
          sourceMap: false,
        },
        files: {
          "style.css": "sass/style.scss",
          "assets/css/woo/woocommerce.min.css": "sass/woocommerce.scss",
          "assets/css/woo/hover-style.min.css": "sass/hover-style.scss",
          "assets/css/woo/woo-floating-bar.min.css":
            "sass/woo-floating-bar.scss",
          "assets/css/woo/woo-mini-cart.min.css": "sass/woo-mini-cart.scss",
          "assets/css/woo/woo-quick-view.min.css": "sass/woo-quick-view.scss",
          "assets/css/woo/woo-multistep-checkout.min.css":
            "sass/woo-multistep-checkout.scss",
          "assets/css/woo/wishlist.min.css": "sass/wishlist.scss",
          "assets/css/gutenberg/gutenberg-editor.min.css":
            "sass/gutenberg-editor.scss",
          "assets/css/edd/edd.min.css": "sass/edd.scss",
          "assets/css/llms/llms.min.css": "sass/llms.scss",
          "assets/css/learndash/learndash.min.css": "sass/learndash.scss",
          "assets/css/style.min.css": "sass/stylesheet.scss",
          'assets/css/blog/blog-post-headers.min.css': 'sass/blog-post-headers.scss',
        },
      },
    },

    svgstore: {
      options: {
        prefix: "owp-icon-", // This will prefix each ID
        svg: {
          // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          id: "owp-svg-icons",
          version: "1.0.0",
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          class: "no-display",
        },
      },
      prod: {
        files: {
          "assets/fonts/owp-icons/owp-icons.svg": [
            "assets/fonts/owp-icons/files/**/*.svg",
          ],
        },
      },
    },

    // Autoprefixer.
    autoprefixer: {
      options: {
        browsers: ["last 8 versions", "ie 8", "ie 9"],
      },
      main: {
        files: {
          "assets/css/style.css": "assets/css/style.css",
        },
      },
    },

    // Newer files checker
    newer: {
      options: {
        override: function (detail, include) {
          if (detail.task === "php" || detail.task === "sass") {
            include(true);
          } else {
            include(false);
          }
        },
      },
    },

    // Watch for changes.
    watch: {
      options: {
        livereload: true,
        spawn: false,
      },
      scss: {
        files: ["sass/**/*.scss"],
        tasks: ["newer:sass:dev", "newer:sass:prod", "newer:autoprefixer:main"],
      },
      js: {
        files: ["assets/src/js/**/*.js", "inc/customizer/**/*.js"],
        tasks: [
          "browserify:prod",
          "browserify:dev",
          "newer:uglify:prod",
          "newer:uglify:dev",
        ],
      },
    },

    // Images minify
    imagemin: {
      screenshot: {
        files: {
          "screenshot.png": "screenshot.png",
        },
      },
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "assets/img/",
            src: ["**/*.{png,jpg,gif}"],
            dest: "assets/img/",
          },
        ],
      },
    },

    // Copy the theme into the build directory
    copy: {
      build: {
        expand: true,
        src: [
          "**",
          "!node_modules/**",
          "!**/node_modules/**",
          "!bower_components/**",
          "!build/**",
          "!inc/customizer/src/**",
          "!inc/customizer/customizer-src/**",
          "!vendor/**",
          "!composer.json",
          "!composer.lock",
          "!.git/**",
          "!Gruntfile.js",
          "!package.json",
          "!package-lock.json",
          "!phpcs.xml.dist",
          "!desktop.ini",
          "!prepros.cfg",
          "!CONTRIBUTING.md",
          "!.csscomb.json",
          "!.editorconfig",
          "!.tern-project",
          "!.gitignore",
          "!.jshintrc",
          "!.DS_Store",
          "!*.map",
          "!**/*.map",
          "!**/Gruntfile.js",
          "!**/package.json",
          "!**/*~",
        ],
        dest: "build/<%= pkg.name %>/",
      },
    },

    // Compress build directory into <name>.zip
    compress: {
      build: {
        options: {
          mode: "zip",
          archive: "./build/<%= pkg.name %>.zip",
        },
        expand: true,
        cwd: "build/<%= pkg.name %>/",
        src: ["**/*"],
        dest: "<%= pkg.name %>/",
      },
    },

    // Clean up build directory
    clean: {
      build: ["build/<%= pkg.name %>", "build/<%= pkg.name %>.zip"],
    },
  });

  // Dev task
  grunt.registerTask("default", [
    "browserify:prod",
    "browserify:dev",
    "uglify:prod",
    "uglify:dev",
    "sass:prod",
    "sass:dev",
    "autoprefixer:main",
    "cssmin:prod",
  ]);

  // Production task
  grunt.registerTask("build", ["copy"]);

  // Package task
  grunt.registerTask("package", ["compress"]);

  grunt.registerTask("final", [
    "browserify:prod",
    "browserify:dev",
    "uglify:prod",
    "uglify:dev",
    "sass:prod",
    "sass:dev",
    "autoprefixer:main",
    "cssmin:prod",
    "copy",
    "compress"
  ]);
};
