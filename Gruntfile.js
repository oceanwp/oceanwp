module.exports = function (grunt) {
    const sass = require("node-sass");

    // require it at the top and pass in the grunt instance
    require("time-grunt")(grunt);

    // Load all Grunt tasks
    require("jit-grunt")(grunt, {
        makepot: "grunt-wp-i18n",
        browserify: "grunt-browserify",
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        browserify: {
            prod: {
                files: {
                    // Theme scripts
                    "./assets/js/theme.vanilla.min.js": "./assets/src/js/index.js",
                    // Woocommerce custom features
                    "./assets/js/wp-plugins/woocommerce/woo-custom-features.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-custom-features.js",
                },
                options: {
                    transform: [["babelify", { presets: ["@babel/preset-env"] }]],
                    browserifyOptions: {
                        debug: true,
                    },
                },
            },
            dev: {
                files: {
                    // Easy Digital Downloads ajax cart
                    "./assets/js/wp-plugins/easy-digital-downloads/edd-ajax-cart.min.js":
                        "./assets/src/js/wp-plugins/easy-digital-downloads/edd-ajax-cart.js",
                    // Easy Digital Downloads display cart
                    "./assets/js/wp-plugins/easy-digital-downloads/edd-display-cart.min.js":
                        "./assets/src/js/wp-plugins/easy-digital-downloads/edd-display-cart.js",

                    // Woocommerce ajax add to cart
                    "./assets/js/wp-plugins/woocommerce/woo-ajax-add-to-cart.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-ajax-add-to-cart.js",
                    // Woocommerce categories widget
                    "./assets/js/wp-plugins/woocommerce/woo-cat-widget.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-cat-widget.js",
                    // Woocommerce display cart
                    "./assets/js/wp-plugins/woocommerce/woo-display-cart.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-display-cart.js",
                    // Woocommerce floating bar
                    "./assets/js/wp-plugins/woocommerce/woo-floating-bar.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-floating-bar.js",
                    // Woocommerce mini cart
                    "./assets/js/wp-plugins/woocommerce/woo-hover-style.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-hover-style.js",
                    // Woocommerce mini cart
                    "./assets/js/wp-plugins/woocommerce/woo-mini-cart.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-mini-cart.js",
                    // Woocommerce multi step checkout
                    "./assets/js/wp-plugins/woocommerce/woo-multi-step-checkout.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-multi-step-checkout.js",
                    // Woocommerce canvans filter
                    "./assets/js/wp-plugins/woocommerce/woo-off-canvas.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-off-canvas.js",
                    // Woocommerce quick view
                    "./assets/js/wp-plugins/woocommerce/woo-quick-view.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-quick-view.js",
                    // Woocommerce thumbnails
                    "./assets/js/wp-plugins/woocommerce/woo-thumbnails.min.js":
                        "./assets/src/js/wp-plugins/woocommerce/woo-thumbnails.js",
                },
                options: {
                    transform: [["babelify", { presets: ["@babel/preset-env"] }]],
                    browserifyOptions: {
                        debug: true,
                    },
                },
            },
        },

        // Concat and Minify our js.
        uglify: {
            dev: {
                files: {
                    "assets/js/third/html5.min.js": "assets/js/third/html5.js",
                    "assets/js/third/magnific-popup.min.js": "assets/js/third/magnific-popup.js",
                    "assets/js/third/lightbox.min.js": "assets/js/third/lightbox.js",
                    "assets/js/third/woo/woo-scripts.min.js": ["assets/js/third/woo/devs/**/*.js"],
                    "assets/js/third/woo/woo-display-cart.min.js": "assets/js/third/woo/woo-display-cart.js",
                    "assets/js/third/woo/woo-mini-cart.min.js": "assets/js/third/woo/woo-mini-cart.js",
                    "assets/js/third/woo/woo-quick-view.min.js": "assets/js/third/woo/woo-quick-view.js",
                    "assets/js/third/woo/woo-multistep-checkout.min.js": "assets/js/third/woo/woo-multistep-checkout.js",
                    "assets/js/third/woo/woo-floating-bar.min.js": "assets/js/third/woo/woo-floating-bar.js",
                    "assets/js/third/woo/woo-hover-style.min.js": "assets/js/third/woo/woo-hover-style.js",

                    "inc/customizer/assets/js/customize-preview.min.js": "inc/customizer/assets/js/customize-preview.js",
                    "inc/customizer/assets/js/typography-customize-preview.min.js":
                        "inc/customizer/assets/js/typography-customize-preview.js",
                    "inc/customizer/assets/js/woo-typography-customize-preview.min.js":
                        "inc/customizer/assets/js/woo-typography-customize-preview.js",
                    "inc/customizer/assets/js/woo-customize-preview.min.js":
                        "inc/customizer/assets/js/woo-customize-preview.js",
                    "inc/customizer/assets/js/edd-customize-preview.min.js":
                        "inc/customizer/assets/js/edd-customize-preview.js",
                    "inc/customizer/assets/js/llms-customize-preview.min.js":
                        "inc/customizer/assets/js/llms-customize-preview.js",
                    "inc/customizer/assets/js/ld-customize-preview.min.js":
                        "inc/customizer/assets/js/ld-customize-preview.js",
                    "inc/customizer/assets/min/js/general.min.js": "inc/customizer/controls/general.js",
                    "inc/customizer/assets/min/js/buttonset.min.js": "inc/customizer/controls/buttonset/buttonset.js",
                    "inc/customizer/assets/min/js/color.min.js": "inc/customizer/controls/color/color.js",
                    "inc/customizer/assets/min/js/dimensions.min.js": "inc/customizer/controls/dimensions/dimensions.js",
                    "inc/customizer/assets/min/js/dropdown-pages.min.js":
                        "inc/customizer/controls/dropdown-pages/dropdown-pages.js",
                    "inc/customizer/assets/min/js/icon-select.min.js": "inc/customizer/controls/icon-select/icon-select.js",
                    "inc/customizer/assets/min/js/multicheck.min.js": "inc/customizer/controls/multicheck/multicheck.js",
                    "inc/customizer/assets/min/js/multiple-select.min.js":
                        "inc/customizer/controls/multiple-select/multiple-select.js",
                    "inc/customizer/assets/min/js/radio-image.min.js": "inc/customizer/controls/radio-image/radio-image.js",
                    "inc/customizer/assets/min/js/range.min.js": "inc/customizer/controls/range/range.js",
                    "inc/customizer/assets/min/js/slider.min.js": "inc/customizer/controls/slider/slider.js",
                    "inc/customizer/assets/min/js/sortable.min.js": "inc/customizer/controls/sortable/sortable.js",
                    "inc/customizer/assets/min/js/text.min.js": "inc/customizer/controls/text/text.js",
                    "inc/customizer/assets/min/js/textarea.min.js": "inc/customizer/controls/textarea/textarea.js",
                    "inc/customizer/assets/min/js/typo.min.js": "inc/customizer/controls/typo/typo.js",
                    "inc/customizer/assets/min/js/typography.min.js": "inc/customizer/controls/typography/typography.js",
                    "inc/customizer/assets/min/js/upsell.min.js": "inc/customizer/controls/upsell/upsell.js",
                },
            },
            prod: {
                // options: {
                //     sourceMap: true,
                // },
                files: {
                    "./assets/js/main.min.js": ["./assets/js/devs/**/*.js", "./assets/js/core/**/*.js"],
                    // "assets/js/main.vanilla.min.js": ["assets/js/main.vanilla.min.js"],
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
                    "assets/css/third/elementor-editor.min.css": "assets/css/third/elementor-editor.css",
                    "assets/css/third/hamburgers/hamburgers.min.css": "assets/css/third/hamburgers/hamburgers.css",
                    "assets/css/third/magnific-popup.min.css": "assets/css/third/magnific-popup.css",
                    "assets/css/third/slick.min.css": "assets/css/third/slick.css",
                    "assets/css/third/bbpress.min.css": "assets/css/third/bbpress.css",
                    "assets/css/third/buddypress.min.css": "assets/css/third/buddypress.css",
                    "assets/css/third/sensei.min.css": "assets/css/third/sensei.css",
                    "assets/css/third/social-login.min.css": "assets/css/third/social-login.css",
                    "assets/css/woo/woo-star-font.min.css": "assets/css/woo/woo-star-font.css",
                    "assets/css/editor-style.min.css": "assets/css/editor-style.css",

                    "inc/customizer/assets/css/customizer-simple-line-icons.min.css":
                        "inc/customizer/assets/css/customizer-simple-line-icons.css",
                    "inc/customizer/assets/min/css/rtl.min.css": "inc/customizer/controls/rtl.css",
                    "inc/customizer/assets/min/css/general.min.css": "inc/customizer/controls/general.css",
                    "inc/customizer/assets/min/css/buttonset.min.css": "inc/customizer/controls/buttonset/buttonset.css",
                    "inc/customizer/assets/min/css/color.min.css": "inc/customizer/controls/color/color.css",
                    "inc/customizer/assets/min/css/dimensions.min.css": "inc/customizer/controls/dimensions/dimensions.css",
                    "inc/customizer/assets/min/css/heading.min.css": "inc/customizer/controls/heading/heading.css",
                    "inc/customizer/assets/min/css/icon-select.min.css":
                        "inc/customizer/controls/icon-select/icon-select.css",
                    "inc/customizer/assets/min/css/multiple-select.min.css":
                        "inc/customizer/controls/multiple-select/multiple-select.css",
                    "inc/customizer/assets/min/css/radio-image.min.css":
                        "inc/customizer/controls/radio-image/radio-image.css",
                    "inc/customizer/assets/min/css/range.min.css": "inc/customizer/controls/range/range.css",
                    "inc/customizer/assets/min/css/slider.min.css": "inc/customizer/controls/slider/slider.css",
                    "inc/customizer/assets/min/css/sortable.min.css": "inc/customizer/controls/sortable/sortable.css",
                    "inc/customizer/assets/min/css/textarea.min.css": "inc/customizer/controls/textarea/textarea.css",
                    "inc/customizer/assets/min/css/typo.min.css": "inc/customizer/controls/typo/typo.css",
                    "inc/customizer/assets/min/css/typography.min.css": "inc/customizer/controls/typography/typography.css",
                    "inc/customizer/assets/min/css/upsell.min.css": "inc/customizer/controls/upsell/upsell.css",
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
                    "assets/css/woo/woo-multistep-checkout.css": "sass/woo-multistep-checkout.scss",
                    "assets/css/woo/wishlist.css": "sass/wishlist.scss",
                    "assets/css/gutenberg/gutenberg-editor.css": "sass/gutenberg-editor.scss",
                    "assets/css/edd/edd.css": "sass/edd.scss",
                    "assets/css/llms/llms.css": "sass/llms.scss",
                    "assets/css/learndash/learndash.css": "sass/learndash.scss",
                    "assets/css/style.css": "sass/stylesheet.scss",
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
                    "assets/css/woo/woo-floating-bar.min.css": "sass/woo-floating-bar.scss",
                    "assets/css/woo/woo-mini-cart.min.css": "sass/woo-mini-cart.scss",
                    "assets/css/woo/woo-quick-view.min.css": "sass/woo-quick-view.scss",
                    "assets/css/woo/woo-multistep-checkout.min.css": "sass/woo-multistep-checkout.scss",
                    "assets/css/woo/wishlist.min.css": "sass/wishlist.scss",
                    "assets/css/gutenberg/gutenberg-editor.min.css": "sass/gutenberg-editor.scss",
                    "assets/css/edd/edd.min.css": "sass/edd.scss",
                    "assets/css/llms/llms.min.css": "sass/llms.scss",
                    "assets/css/learndash/learndash.min.css": "sass/learndash.scss",
                    "assets/css/style.min.css": "sass/stylesheet.scss",
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
                    "assets/fonts/owp-icons/owp-icons.svg": ["assets/fonts/owp-icons/files/**/*.svg"],
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
                files: ["assets/src/js/**/*.js"],
                tasks: ["browserify:prod", "newer:browserify:dev", "newer:uglify:prod"],
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
                    "!bower_components/**",
                    "!build/**",
                    "!vendor/**",
                    "!composer.json",
                    "!composer.lock",
                    "!.git/**",
                    "!Gruntfile.js",
                    "!package.json",
                    "!package-lock.json",
                    "!desktop.ini",
                    "!prepros.cfg",
                    "!CONTRIBUTING.md",
                    "!README.md",
                    "!.csscomb.json",
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

        makepot: {
            target: {
                options: {
                    domainPath: "/languages/", // Where to save the POT file.
                    exclude: [
                        // Exlude folder.
                        "build/.*",
                        "vendor/.*",
                        "assets/.*",
                        "readme/.*",
                        "sass/.*",
                        "bower_components/.*",
                        "node_modules/.*",
                    ],
                    potFilename: "<%= pkg.name %>.pot", // Name of the POT file.
                    type: "wp-theme", // Type of project (wp-plugin or wp-theme).
                    updateTimestamp: true, // Whether the POT-Creation-Date should be updated without other changes.
                    processPot: function (pot, options) {
                        pot.headers["plural-forms"] = "nplurals=2; plural=n != 1;";
                        pot.headers["last-translator"] = "OceanWP\n";
                        pot.headers["language-team"] = "OceanWP\n";
                        pot.headers["x-poedit-basepath"] = "..\n";
                        pot.headers["x-poedit-language"] = "English\n";
                        pot.headers["x-poedit-country"] = "UNITED STATES\n";
                        pot.headers["x-poedit-sourcecharset"] = "utf-8\n";
                        pot.headers["x-poedit-searchpath-0"] = ".\n";
                        pot.headers["x-poedit-keywordslist"] =
                            "_esc_attr__;esc_attr_x;esc_attr_e;esc_html__;esc_html_e;esc_html_x;__;_e;__ngettext:1,2;_n:1,2;__ngettext_noop:1,2;_n_noop:1,2;_c;_nc:4c,1,2;_x:1,2c;_ex:1,2c;_nx:4c,1,2;_nx_noop:4c,1,2;\n";
                        pot.headers["x-textdomain-support"] = "yes\n";
                        return pot;
                    },
                },
            },
        },
    });

    // Dev task
    grunt.registerTask("default", [
        "browserify:prod",
        "uglify:dev",
        "newer:uglify:prod",
        "cssmin:prod",
        "sass:dev",
        "sass:prod",
        "makepot",
    ]);

    // Production task
    grunt.registerTask("build", [
        "browserify:prod",
        "newer:uglify:prod",
        "sass:dev",
        "sass:prod",
        "autoprefixer:main",
        "makepot",
        "copy",
    ]);

    // Package task
    grunt.registerTask("package", ["compress"]);
};
