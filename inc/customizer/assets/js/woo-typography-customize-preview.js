/**
 * Update WooCommerce Typography Customizer settings live.
 *
 * @version 1.0.0
 *
 * @since 2.0
 */
(function ($) {
    // Declare vars
    var api = wp.customize;

    api("woo_product_title_typography[font-family]", function ($swipe) {
        $swipe.bind(function (pair) {
            if (pair) {
                /** @type {string} */
                var idfirst =
                    (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-product-title-font-family");
                var fontSize = pair.replace(" ", "%20");
                fontSize = fontSize.replace(",", "%2C");
                /** @type {string} */
                fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                if ($("#" + idfirst).length) {
                    $("#" + idfirst).attr("href", fontSize);
                } else {
                    $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                }
            }
            var $child = $(".customizer-typography-product-title-font-family");
            if (pair) {
                /** @type {string} */
                var img =
                    '<style class="customizer-typography-product-title-font-family">.woocommerce div.product .product_title{font-family: ' +
                    pair +
                    ";}</style>";
                if ($child.length) {
                    $child.replaceWith(img);
                } else {
                    $("head").append(img);
                }
            } else {
                $child.remove();
            }
        });
    }),
        api("woo_product_title_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-title-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-title-font-weight">.woocommerce div.product .product_title{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-title-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-title-font-style">.woocommerce div.product .product_title{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-title-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-title-font-size">.woocommerce div.product .product_title{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_title-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_title-tablet-font-size">@media (max-width: 768px){.woocommerce div.product .product_title{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_title-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_title-mobile-font-size">@media (max-width: 480px){.woocommerce div.product .product_title{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_typography[color]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-title-color");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-title-color">.woocommerce div.product .product_title{color: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-title-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-title-line-height">.woocommerce div.product .product_title{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_title-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_title-tablet-line-height">@media (max-width: 768px){.woocommerce div.product .product_title{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_title-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_title-mobile-line-height">@media (max-width: 480px){.woocommerce div.product .product_title{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-title-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-title-letter-spacing">.woocommerce div.product .product_title{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_title-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_title-tablet-letter-spacing">@media (max-width: 768px){.woocommerce div.product .product_title{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_title-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_title-mobile-letter-spacing">@media (max-width: 480px){.woocommerce div.product .product_title{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_title_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-title-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-title-text-transform">.woocommerce div.product .product_title{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-product-price-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-product-price-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-font-family">.woocommerce div.product p.price{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-font-weight">.woocommerce div.product p.price{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-font-style">.woocommerce div.product p.price{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-font-size">.woocommerce div.product p.price{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-tablet-font-size">@media (max-width: 768px){.woocommerce div.product p.price{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-mobile-font-size">@media (max-width: 480px){.woocommerce div.product p.price{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-line-height">.woocommerce div.product p.price{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-tablet-line-height">@media (max-width: 768px){.woocommerce div.product p.price{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-mobile-line-height">@media (max-width: 480px){.woocommerce div.product p.price{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-letter-spacing">.woocommerce div.product p.price{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-tablet-letter-spacing">@media (max-width: 768px){.woocommerce div.product p.price{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-mobile-letter-spacing">@media (max-width: 480px){.woocommerce div.product p.price{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_price_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-product-price-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-product-price-text-transform">.woocommerce div.product p.price{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-add-to-cart-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-add-to-cart-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-add-to-cart-font-family">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-add-to-cart-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-add-to-cart-font-weight">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-add-to-cart-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-add-to-cart-font-style">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-add-to-cart-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-add-to-cart-font-size">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_add_to_cart-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_add_to_cart-tablet-font-size">@media (max-width: 768px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_add_to_cart-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_add_to_cart-mobile-font-size">@media (max-width: 480px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-add-to-cart-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-add-to-cart-line-height">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_add_to_cart-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_add_to_cart-tablet-line-height">@media (max-width: 768px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_add_to_cart-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_add_to_cart-mobile-line-height">@media (max-width: 480px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-add-to-cart-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-add-to-cart-letter-spacing">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_add_to_cart-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_add_to_cart-tablet-letter-spacing">@media (max-width: 768px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_product_add_to_cart-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_product_add_to_cart-mobile-letter-spacing">@media (max-width: 480px){.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_product_add_to_cart_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-add-to-cart-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-add-to-cart-text-transform">.woocommerce ul.products li.product .button, .woocommerce ul.products li.product .product-inner .added_to_cart{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-single-notice-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-single-notice-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-notice-font-family">.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-notice-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-notice-font-weight">.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-notice-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-notice-font-style">.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-notice-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-notice-font-size">.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_notice-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_notice-tablet-font-size">@media (max-width: 768px){.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_notice-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_notice-mobile-font-size">@media (max-width: 480px){.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-notice-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-notice-line-height">.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_notice-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_notice-tablet-line-height">@media (max-width: 768px){.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_notice-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_notice-mobile-line-height">@media (max-width: 480px){.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-notice-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-notice-letter-spacing">.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_notice-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_notice-tablet-letter-spacing">@media (max-width: 768px){.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_notice-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_notice-mobile-letter-spacing">@media (max-width: 480px){.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_notice_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-notice-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-notice-text-transform">.woocommerce div.owp-woo-single-cond-notice span, .woocommerce div.owp-woo-single-cond-notice a{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-archive-title-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-archive-title-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-title-font-family">.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-title-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-title-font-weight">.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-title-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-title-font-style">.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-title-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-title-font-size">.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_title-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_title-tablet-font-size">@media (max-width: 768px){.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_title-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_title-mobile-font-size">@media (max-width: 480px){.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-title-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-title-line-height">.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_title-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_title-tablet-line-height">@media (max-width: 768px){.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_title-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_title-mobile-line-height">@media (max-width: 480px){.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-title-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-title-letter-spacing">.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_title-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_title-tablet-letter-spacing">@media (max-width: 768px){.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_title-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_title-mobile-letter-spacing">@media (max-width: 480px){.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_title_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-title-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-title-text-transform">.woocommerce ul.products li.product li.title h2, .woocommerce ul.products li.product li.title a{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-archive-category-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-archive-category-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-category-font-family">.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-category-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-category-font-weight">.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-category-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-category-font-style">.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-category-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-category-font-size">.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_category-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_category-tablet-font-size">@media (max-width: 768px){.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_category-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_category-mobile-font-size">@media (max-width: 480px){.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-category-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-category-line-height">.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_category-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_category-tablet-line-height">@media (max-width: 768px){.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_category-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_category-mobile-line-height">@media (max-width: 480px){.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-category-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-category-letter-spacing">.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_category-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_category-tablet-letter-spacing">@media (max-width: 768px){.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_category-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_category-mobile-letter-spacing">@media (max-width: 480px){.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_cats_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-category-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-category-text-transform">.woocommerce ul.products li.product li.category, .woocommerce ul.products li.product li.category a{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-archive-price-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-archive-price-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-price-font-family">.woocommerce ul.products li.product .price{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-price-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-price-font-weight">.woocommerce ul.products li.product .price{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-price-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-price-font-style">.woocommerce ul.products li.product .price{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-price-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-price-font-size">.woocommerce ul.products li.product .price{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_price-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_price-tablet-font-size">@media (max-width: 768px){.woocommerce ul.products li.product .price{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_price-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_price-mobile-font-size">@media (max-width: 480px){.woocommerce ul.products li.product .price{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-price-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-price-line-height">.woocommerce ul.products li.product .price{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_price-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_price-tablet-line-height">@media (max-width: 768px){.woocommerce ul.products li.product .price{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_price-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_price-mobile-line-height">@media (max-width: 480px){.woocommerce ul.products li.product .price{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-price-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-price-letter-spacing">.woocommerce ul.products li.product .price{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_price-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_price-tablet-letter-spacing">@media (max-width: 768px){.woocommerce ul.products li.product .price{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_price-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_price-mobile-letter-spacing">@media (max-width: 480px){.woocommerce ul.products li.product .price{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_price_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo-archive-price-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo-archive-price-text-transform">.woocommerce ul.products li.product .price{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"),
                        "customizer-typography-single-add-to-cart-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-single-add-to-cart-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-add-to-cart-font-family">.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-add-to-cart-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-add-to-cart-font-weight">.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-add-to-cart-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-add-to-cart-font-style">.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-add-to-cart-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-add-to-cart-font-size">.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_add_to_cart-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_add_to_cart-tablet-font-size">@media (max-width: 768px){.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_add_to_cart-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_add_to_cart-mobile-font-size">@media (max-width: 480px){.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-add-to-cart-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-add-to-cart-line-height">.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_add_to_cart-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_add_to_cart-tablet-line-height">@media (max-width: 768px){.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_add_to_cart-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_add_to_cart-mobile-line-height">@media (max-width: 480px){.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-add-to-cart-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-add-to-cart-letter-spacing">.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_add_to_cart-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_add_to_cart-tablet-letter-spacing">@media (max-width: 768px){.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_single_add_to_cart-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_single_add_to_cart-mobile-letter-spacing">@media (max-width: 480px){.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_single_add_to_cart_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-single-add-to-cart-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-single-add-to-cart-text-transform">.woocommerce .owp-btn-normal .summary form button.button, .woocommerce .owp-btn-big .summary form button.button, .woocommerce .owp-btn-very-big .summary form button.button{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_typography[font-family]", function ($swipe) {
            $swipe.bind(function (pair) {
                if (pair) {
                    /** @type {string} */
                    var idfirst =
                        (pair.trim().toLowerCase().replace(" ", "-"), "customizer-typography-archive-notice-font-family");
                    var fontSize = pair.replace(" ", "%20");
                    fontSize = fontSize.replace(",", "%2C");
                    /** @type {string} */
                    fontSize = oceanwpTG.googleFontsUrl + "/css?family=" + pair + ":" + oceanwpTG.googleFontsWeight;
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append(
                            '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">'
                        );
                    }
                }
                var $child = $(".customizer-typography-archive-notice-font-family");
                if (pair) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-notice-font-family">.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{font-family: ' +
                        pair +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_typography[font-weight]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-archive-notice-font-weight");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-notice-font-weight">.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{font-weight: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_typography[font-style]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-archive-notice-font-style");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-notice-font-style">.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{font-style: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-archive-notice-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-notice-font-size">.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{font-size: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_tablet_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_notice-tablet-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_notice-tablet-font-size">@media (max-width: 768px){.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_mobile_typography[font-size]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_notice-mobile-font-size");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_notice-mobile-font-size">@media (max-width: 480px){.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{font-size: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-archive-notice-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-notice-line-height">.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{line-height: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_tablet_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_notice-tablet-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_notice-tablet-line-height">@media (max-width: 768px){.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_mobile_typography[line-height]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_notice-mobile-line-height");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_notice-mobile-line-height">@media (max-width: 480px){.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{line-height: ' +
                        dataAndEvents +
                        ";}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-archive-notice-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-notice-letter-spacing">.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_tablet_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_notice-tablet-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_notice-tablet-letter-spacing">@media (max-width: 768px){.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_mobile_typography[letter-spacing]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-woo_archive_notice-mobile-letter-spacing");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-woo_archive_notice-mobile-letter-spacing">@media (max-width: 480px){.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{letter-spacing: ' +
                        dataAndEvents +
                        "px;}}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        }),
        api("woo_archive_notice_typography[text-transform]", function ($swipe) {
            $swipe.bind(function (dataAndEvents) {
                var $child = $(".customizer-typography-archive-notice-text-transform");
                if (dataAndEvents) {
                    /** @type {string} */
                    var img =
                        '<style class="customizer-typography-archive-notice-text-transform">.woocommerce ul.products li.owp-woo-cond-notice span, .woocommerce ul.products li.owp-woo-cond-notice a{text-transform: ' +
                        dataAndEvents +
                        ";}</style>";
                    if ($child.length) {
                        $child.replaceWith(img);
                    } else {
                        $("head").append(img);
                    }
                } else {
                    $child.remove();
                }
            });
        });
})(jQuery);
