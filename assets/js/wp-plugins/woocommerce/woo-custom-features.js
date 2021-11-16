(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMString = exports.DOM = exports.options = void 0;
var options = oceanwpLocalize;
exports.options = options;
var DOM = {
  html: document.querySelector("html"),
  body: document.body,
  WPAdminbar: document.querySelector("#wpadminbar"),
  wrap: document.querySelector("#wrap"),
  main: document.querySelector("#main"),
  selectTags: document.querySelectorAll(options.customSelects),
  floatingBar: document.querySelector(".owp-floating-bar"),
  header: {
    site: document.querySelector("#site-header"),
    vertical: document.querySelector("#site-header.vertical-header #site-header-inner"),
    fullScreen: document.querySelector("#site-header.full_screen-header"),
    topbar: document.querySelector("#top-bar"),
    topbarWrapper: document.querySelector("#top-bar-wrap"),
    topLeftSide: document.querySelector("#site-header.top-header .header-top .left"),
    topRightSide: document.querySelector("#site-header.top-header .header-top .right")
  },
  menu: {
    nav: document.querySelector("#site-header.header-replace #site-navigation"),
    main: document.querySelector(".main-menu"),
    fullScreen: {
      menu: document.querySelector("#site-header.full_screen-header #full-screen-menu"),
      toggleMenuBtn: document.querySelector("#site-header.full_screen-header .menu-bar"),
      logo: document.querySelector("#site-logo.has-full-screen-logo")
    },
    mega: {
      menuItems: document.querySelectorAll("#site-navigation .megamenu-li.full-mega"),
      topbarMenuItems: document.querySelectorAll("#top-bar-nav .megamenu-li.full-mega"),
      menuContents: document.querySelectorAll(".navigation .megamenu-li.auto-mega .megamenu")
    },
    vertical: {
      toggleMenuBtn: document.querySelector("a.vertical-toggle")
    }
  },
  mobileMenu: {
    nav: document.querySelector("#mobile-dropdown > nav"),
    navWrapper: document.querySelector("#mobile-dropdown"),
    toggleMenuBtn: document.querySelector(".mobile-menu"),
    hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"),
    menuItemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
    fullScreen: document.querySelector("#mobile-fullscreen")
  },
  search: {
    forms: document.querySelectorAll("form.header-searchform"),
    dropDown: {
      toggleSearchBtn: document.querySelector("a.search-dropdown-toggle"),
      form: document.querySelector("#searchform-dropdown")
    },
    headerReplace: {
      toggleSearchBtn: document.querySelector("a.search-header-replace-toggle"),
      closeBtn: document.querySelector("#searchform-header-replace-close"),
      form: document.querySelector("#searchform-header-replace")
    },
    overlay: {
      toggleSearchBtn: document.querySelector("a.search-overlay-toggle"),
      closeBtn: document.querySelector("#searchform-overlay a.search-overlay-close"),
      form: document.querySelector("#searchform-overlay")
    }
  },
  footer: {
    siteFooter: document.querySelector("#footer"),
    calloutFooter: document.querySelector("#footer-callout-wrap"),
    footerBar: document.querySelector("#footer-bar"),
    parallax: document.querySelector(".parallax-footer")
  },
  scroll: {
    scrollTop: document.querySelector("#scroll-top"),
    goTop: document.querySelector('a[href="#go-top"]'),
    goTopSlash: document.querySelector('body.home a[href="/#go-top"]'),
    infiniteScrollNav: document.querySelector(".infinite-scroll-nav"),
    infiniteScrollWrapper: document.querySelector(".infinite-scroll-wrap")
  },
  blog: {
    masonryGrids: document.querySelectorAll(".blog-masonry-grid")
  },
  edd: {
    carts: document.querySelectorAll(".edd-menu-icon"),
    overlayCart: document.querySelector(".owp-cart-overlay"),
    totalPrices: document.querySelectorAll(".eddmenucart-details.total"),
    quickViewModal: document.querySelector("#owp-qv-wrap"),
    quickViewContent: document.querySelector("#owp-qv-content")
  },
  woo: {
    resetVariations: document.querySelector(".reset_variations"),
    product: document.querySelector(".woocommerce div.product"),
    allProducts: document.querySelectorAll(".woocommerce ul.products"),
    categories: document.querySelectorAll(".woo-dropdown-cat .product-categories"),
    verticalThumbs: document.querySelectorAll(".owp-thumbs-layout-vertical"),
    thumbsVerticalLayout: document.querySelector(".owp-thumbs-layout-vertical"),
    grid: document.querySelector(".oceanwp-grid-list #oceanwp-grid"),
    list: document.querySelector(".oceanwp-grid-list #oceanwp-list"),
    productTabs: document.querySelector(".woocommerce div.product .woocommerce-tabs"),
    productCarts: document.querySelectorAll(".woocommerce div.product .cart"),
    productCustomerReviewLink: document.querySelector(".woocommerce div.product .woocommerce-review-link"),
    quantity: document.querySelector('input[name="quantity"]'),
    checkoutForm: document.querySelector("form.woocommerce-checkout"),
    checkoutLogin: document.querySelector("#checkout_login"),
    checkoutCoupon: document.querySelector("#checkout_coupon"),
    checkoutTimeline: document.querySelector("#owp-checkout-timeline"),
    customerBillingDetails: document.querySelector("#customer_billing_details"),
    customerShippingDetails: document.querySelector("#customer_shipping_details"),
    orderReview: document.querySelector("#order_review"),
    orderCheckoutPayment: document.querySelector("#order_checkout_payment"),
    placeOrder: document.querySelector("#place_order"),
    formActions: document.querySelector("#form_actions"),
    overlayCart: document.querySelector(".owp-cart-overlay"),
    guestAccountPageNav: document.querySelector(".owp-account-links"),
    guestAccountPageBox: document.querySelector("#customer_login"),
    quantityInputs: document.querySelectorAll(".quantity:not(.buttons_added) .qty"),
    quickView: {
      modal: document.querySelector("#owp-qv-wrap"),
      content: document.querySelector("#owp-qv-content")
    }
  }
};
exports.DOM = DOM;
var DOMString = {};
exports.DOMString = DOMString;

},{}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSelectorValid = exports.isElement = exports.getSiblings = exports.visible = exports.offset = exports.fadeToggle = exports.fadeOut = exports.fadeIn = exports.slideToggle = exports.slideUp = exports.slideDown = exports.wrap = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var wrap = function wrap(element) {
  var wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.createElement("div");

  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }

  return wrapper.appendChild(element);
};

exports.wrap = wrap;

var slideDown = function slideDown(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var display = window.getComputedStyle(element).display;

  if (display === "none") {
    display = "block";
  }

  element.style.transitionProperty = "height";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.opacity = 0;
  element.style.display = display;
  var height = element.offsetHeight;
  element.style.height = 0;
  element.style.opacity = 1;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = "".concat(height, "px");
  }, 5);
  window.setTimeout(function () {
    element.style.removeProperty("height");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
    element.style.removeProperty("opacity");
  }, duration + 50);
};

exports.slideDown = slideDown;

var slideUp = function slideUp(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  element.style.boxSizing = "border-box";
  element.style.transitionProperty = "height, margin";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.height = "".concat(element.offsetHeight, "px");
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = 0;
  }, 5);
  window.setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("height");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
  }, duration + 50);
};

exports.slideUp = slideUp;

var slideToggle = function slideToggle(element, duration) {
  window.getComputedStyle(element).display === "none" ? slideDown(element, duration) : slideUp(element, duration);
};

exports.slideToggle = slideToggle;

var fadeIn = function fadeIn(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (element.style.display !== "none") {
    return;
  }

  var options = {
    duration: 300,
    display: null,
    opacity: 1,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 0;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeIn = fadeIn;

var fadeOut = function fadeOut(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (element.style.display === "none") {
    return;
  }

  var options = {
    duration: 300,
    display: null,
    opacity: 0,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 1;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeOut = fadeOut;

var fadeToggle = function fadeToggle(element, options) {
  window.getComputedStyle(element).display === "none" ? fadeIn(element, options) : fadeOut(element, options);
};

exports.fadeToggle = fadeToggle;

var offset = function offset(element) {
  if (!element.getClientRects().length) {
    return {
      top: 0,
      left: 0
    };
  } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


  var rect = element.getBoundingClientRect();
  var win = element.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
};

exports.offset = offset;

var visible = function visible(element) {
  if (!element) {
    return false;
  }

  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};

exports.visible = visible;

var getSiblings = function getSiblings(e) {
  // for collecting siblings
  var siblings = []; // if no parent, return no sibling

  if (!e.parentNode) {
    return siblings;
  } // first child of the parent node


  var sibling = e.parentNode.firstChild; // collecting siblings

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
}; // Returns true if it is a DOM element


exports.getSiblings = getSiblings;

var isElement = function isElement(o) {
  return (typeof HTMLElement === "undefined" ? "undefined" : (0, _typeof2["default"])(HTMLElement)) === "object" ? o instanceof HTMLElement // DOM2
  : o && (0, _typeof2["default"])(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
};

exports.isElement = isElement;

var isSelectorValid = function (dummyElement) {
  return function (selector) {
    try {
      dummyElement.querySelector(selector);
    } catch (_unused) {
      return false;
    }

    return true;
  };
}(document.createDocumentFragment());

exports.isSelectorValid = isSelectorValid;

},{"@babel/runtime/helpers/interopRequireDefault":17,"@babel/runtime/helpers/typeof":18}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _start = /*#__PURE__*/new WeakMap();

var WooRemoveCategoriesCountParenthesis = function WooRemoveCategoriesCountParenthesis() {
  (0, _classCallCheck2["default"])(this, WooRemoveCategoriesCountParenthesis);

  _start.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll(".widget_layered_nav span.count, .widget_product_categories span.count").forEach(function (item) {
        var count = item.innerHTML;
        item.innerHTML = count.substring(1, count.length - 1);
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = WooRemoveCategoriesCountParenthesis;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":12,"@babel/runtime/helpers/classPrivateFieldGet":14,"@babel/runtime/helpers/interopRequireDefault":17}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var WooResetVariations = function WooResetVariations() {
  (0, _classCallCheck2["default"])(this, WooResetVariations);

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.woo.resetVariations.addEventListener("click", function (event) {
        var resetVariations = event.currentTarget;
        resetVariations.closest(".variations").querySelectorAll("select").forEach(function (select) {
          setTimeout(function () {
            select.nextSibling.innerHTML = select.options[select.selectedIndex].text;
          }, 100);
        });
      });
    }
  });

  if (!!_constants.DOM.woo.resetVariations) {
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = WooResetVariations;
exports["default"] = _default;

},{"../../../constants":1,"@babel/runtime/helpers/classCallCheck":12,"@babel/runtime/helpers/classPrivateFieldGet":14,"@babel/runtime/helpers/interopRequireDefault":17}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onGridClick = /*#__PURE__*/new WeakMap();

var _onListClick = /*#__PURE__*/new WeakMap();

var _productCarousel = /*#__PURE__*/new WeakMap();

var WooGridList = function WooGridList() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, WooGridList);

  _start.set(this, {
    writable: true,
    value: function value() {
      if (!(_constants.DOM.woo.grid || _constants.DOM.woo.list)) {
        return;
      }

      if (_jsCookie["default"].get("gridcookie") === "grid") {
        var _DOM$woo$grid, _DOM$woo$list, _DOM$woo$allProducts;

        (_DOM$woo$grid = _constants.DOM.woo.grid) === null || _DOM$woo$grid === void 0 ? void 0 : _DOM$woo$grid.classList.add("active");
        (_DOM$woo$list = _constants.DOM.woo.list) === null || _DOM$woo$list === void 0 ? void 0 : _DOM$woo$list.classList.remove("active");
        (_DOM$woo$allProducts = _constants.DOM.woo.allProducts) === null || _DOM$woo$allProducts === void 0 ? void 0 : _DOM$woo$allProducts.forEach(function (products) {
          products.classList.add("grid");
          products.classList.remove("list");
        });
      }

      if (_jsCookie["default"].get("gridcookie") === "list") {
        var _DOM$woo$grid2, _DOM$woo$list2, _DOM$woo$allProducts2;

        (_DOM$woo$grid2 = _constants.DOM.woo.grid) === null || _DOM$woo$grid2 === void 0 ? void 0 : _DOM$woo$grid2.classList.remove("active");
        (_DOM$woo$list2 = _constants.DOM.woo.list) === null || _DOM$woo$list2 === void 0 ? void 0 : _DOM$woo$list2.classList.add("active");
        (_DOM$woo$allProducts2 = _constants.DOM.woo.allProducts) === null || _DOM$woo$allProducts2 === void 0 ? void 0 : _DOM$woo$allProducts2.forEach(function (products) {
          products.classList.add("list");
          products.classList.remove("grid");
        });
        (0, _classPrivateFieldGet2["default"])(_this, _productCarousel).call(_this);
      }
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$woo$grid3, _DOM$woo$list3;

      (_DOM$woo$grid3 = _constants.DOM.woo.grid) === null || _DOM$woo$grid3 === void 0 ? void 0 : _DOM$woo$grid3.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onGridClick));
      (_DOM$woo$list3 = _constants.DOM.woo.list) === null || _DOM$woo$list3 === void 0 ? void 0 : _DOM$woo$list3.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onListClick));
    }
  });

  _onGridClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();

      _constants.DOM.woo.grid.classList.add("active");

      _constants.DOM.woo.list.classList.remove("active");

      _jsCookie["default"].set("gridcookie", "grid", {
        path: ""
      });

      _constants.DOM.woo.allProducts.forEach(function (products) {
        (0, _utils.fadeOut)(products, {
          callback: function callback() {
            products.classList.add("grid");
            products.classList.remove("list");
            (0, _utils.fadeIn)(products);
          }
        });
      });

      setTimeout(function () {
        (0, _classPrivateFieldGet2["default"])(_this, _productCarousel).call(_this);
      }, 301);
    }
  });

  _onListClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();

      _constants.DOM.woo.grid.classList.remove("active");

      _constants.DOM.woo.list.classList.add("active");

      _jsCookie["default"].set("gridcookie", "list", {
        path: ""
      });

      _constants.DOM.woo.allProducts.forEach(function (products) {
        (0, _utils.fadeOut)(products, {
          callback: function callback() {
            products.classList.add("list");
            products.classList.remove("grid");
            (0, _utils.fadeIn)(products);
          }
        });
      });

      setTimeout(function () {
        (0, _classPrivateFieldGet2["default"])(_this, _productCarousel).call(_this);
      }, 301);
    }
  });

  _productCarousel.set(this, {
    writable: true,
    value: function value() {
      if (!_constants.DOM.body.classList.contains("no-carousel") && !!document.querySelector(".woo-entry-image.product-entry-slider")) {
        var _oceanwp$theme$owSlid;

        (_oceanwp$theme$owSlid = oceanwp.theme.owSlider.flickity) === null || _oceanwp$theme$owSlid === void 0 ? void 0 : _oceanwp$theme$owSlid.forEach(function (flickity) {
          flickity.destroy();
        });
      }

      oceanwp.theme.owSlider.start();
    }
  });

  if (_constants.DOM.body.classList.contains("has-grid-list")) {
    (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  } else {
    _jsCookie["default"].remove("gridcookie", {
      path: ""
    });
  }
};

var _default = WooGridList;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":2,"@babel/runtime/helpers/classCallCheck":12,"@babel/runtime/helpers/classPrivateFieldGet":14,"@babel/runtime/helpers/interopRequireDefault":17,"js-cookie":21}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet4 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _loginBtn = /*#__PURE__*/new WeakMap();

var _registerBtn = /*#__PURE__*/new WeakMap();

var _loginBox = /*#__PURE__*/new WeakMap();

var _registerBox = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onLoginBtnClick = /*#__PURE__*/new WeakMap();

var _onRegisterBtnClick = /*#__PURE__*/new WeakMap();

var WooGuestAccountPage = function WooGuestAccountPage() {
  var _this = this,
      _DOM$woo$guestAccount5;

  (0, _classCallCheck2["default"])(this, WooGuestAccountPage);

  _loginBtn.set(this, {
    writable: true,
    value: void 0
  });

  _registerBtn.set(this, {
    writable: true,
    value: void 0
  });

  _loginBox.set(this, {
    writable: true,
    value: void 0
  });

  _registerBox.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      var _DOM$woo$guestAccount, _DOM$woo$guestAccount2, _DOM$woo$guestAccount3, _DOM$woo$guestAccount4;

      (0, _classPrivateFieldSet2["default"])(_this, _loginBtn, (_DOM$woo$guestAccount = _constants.DOM.woo.guestAccountPageNav) === null || _DOM$woo$guestAccount === void 0 ? void 0 : _DOM$woo$guestAccount.querySelector(".login a"));
      (0, _classPrivateFieldSet2["default"])(_this, _registerBtn, (_DOM$woo$guestAccount2 = _constants.DOM.woo.guestAccountPageNav) === null || _DOM$woo$guestAccount2 === void 0 ? void 0 : _DOM$woo$guestAccount2.querySelector(".register a"));
      (0, _classPrivateFieldSet2["default"])(_this, _loginBox, (_DOM$woo$guestAccount3 = _constants.DOM.woo.guestAccountPageBox) === null || _DOM$woo$guestAccount3 === void 0 ? void 0 : _DOM$woo$guestAccount3.querySelector(".col-1"));
      (0, _classPrivateFieldSet2["default"])(_this, _registerBox, (_DOM$woo$guestAccount4 = _constants.DOM.woo.guestAccountPageBox) === null || _DOM$woo$guestAccount4 === void 0 ? void 0 : _DOM$woo$guestAccount4.querySelector(".col-2"));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _classPrivateFieldGet2, _classPrivateFieldGet3;

      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet4["default"])(_this, _loginBtn)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onLoginBtnClick));
      (_classPrivateFieldGet3 = (0, _classPrivateFieldGet4["default"])(_this, _registerBtn)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onRegisterBtnClick));
    }
  });

  _onLoginBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      (0, _classPrivateFieldGet4["default"])(_this, _loginBtn).classList.add("current");
      (0, _classPrivateFieldGet4["default"])(_this, _registerBtn).classList.remove("current");
      (0, _utils.fadeOut)((0, _classPrivateFieldGet4["default"])(_this, _registerBox), {
        callback: function callback() {
          (0, _utils.fadeIn)((0, _classPrivateFieldGet4["default"])(_this, _loginBox));
        }
      });
    }
  });

  _onRegisterBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      (0, _classPrivateFieldGet4["default"])(_this, _registerBtn).classList.add("current");
      (0, _classPrivateFieldGet4["default"])(_this, _loginBtn).classList.remove("current");
      (0, _utils.fadeOut)((0, _classPrivateFieldGet4["default"])(_this, _loginBox), {
        callback: function callback() {
          (0, _utils.fadeIn)((0, _classPrivateFieldGet4["default"])(_this, _registerBox));
        }
      });
    }
  });

  // Return if registration disabled
  if ((_DOM$woo$guestAccount5 = _constants.DOM.woo.guestAccountPageNav) !== null && _DOM$woo$guestAccount5 !== void 0 && _DOM$woo$guestAccount5.classList.contains("registration-disabled")) {
    return;
  }

  (0, _classPrivateFieldGet4["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet4["default"])(this, _setupEventListeners).call(this);
};

var _default = WooGuestAccountPage;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":2,"@babel/runtime/helpers/classCallCheck":12,"@babel/runtime/helpers/classPrivateFieldGet":14,"@babel/runtime/helpers/classPrivateFieldSet":15,"@babel/runtime/helpers/interopRequireDefault":17}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _changeEvent = /*#__PURE__*/new WeakMap();

var _firstTimeRunning = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onQuantityInputKeyup = /*#__PURE__*/new WeakMap();

var _onQuantityBtnClick = /*#__PURE__*/new WeakMap();

var WooQuantityButtons = function WooQuantityButtons() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, WooQuantityButtons);

  _changeEvent.set(this, {
    writable: true,
    value: void 0
  });

  _firstTimeRunning.set(this, {
    writable: true,
    value: void 0
  });

  (0, _defineProperty2["default"])(this, "start", function () {
    var quantityInputs = document.querySelectorAll(".quantity:not(.buttons_added) .qty");

    if (!!quantityInputs) {
      quantityInputs.forEach(function (quantityInput) {
        var inputType = quantityInput.getAttribute("type");

        if (!(inputType === "date" || inputType === "hidden")) {
          var _quantityInput$previo, _quantityInput$nextEl;

          // Add minus icon
          if (!((_quantityInput$previo = quantityInput.previousElementSibling) !== null && _quantityInput$previo !== void 0 && _quantityInput$previo.classList.contains("minus"))) {
            quantityInput.insertAdjacentHTML("beforebegin", '<a href="javascript:void(0)" class="minus">-</a>');
          } // Add plus icon


          if (!((_quantityInput$nextEl = quantityInput.nextElementSibling) !== null && _quantityInput$nextEl !== void 0 && _quantityInput$nextEl.classList.contains("plus"))) {
            quantityInput.insertAdjacentHTML("afterend", '<a href="javascript:void(0)" class="plus">+</a>');
          }
        }
      }); // Check quantity bigger than min

      document.querySelectorAll("input.qty:not(.product-quantity input.qty)").forEach(function (quantityInput) {
        var min = parseFloat(quantityInput.getAttribute("min"));
        var currentValue = parseFloat(quantityInput.value);

        if (min && min > 0 && currentValue < min) {
          quantityInput.value = min;
        }
      });

      if ((0, _classPrivateFieldGet2["default"])(_this, _firstTimeRunning)) {
        // Create a new 'change' event
        (0, _classPrivateFieldSet2["default"])(_this, _changeEvent, new Event("change", {
          bubbles: true
        }));
      }
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var quantityInputs = document.querySelectorAll(".quantity:not(.buttons_added) .qty"); // Update floating bar quantity

      if (!!quantityInputs) {
        if (_constants.DOM.body.classList.contains("single-product") && _constants.options.floating_bar === "on" && !Array.from(_constants.DOM.woo.productCarts).some(function (_ref) {
          var classList = _ref.classList;
          return classList.contains("grouped_form") || classList.contains("cart_group");
        })) {
          quantityInputs.forEach(function (quantityInput) {
            quantityInput.addEventListener("keyup", (0, _classPrivateFieldGet2["default"])(_this, _onQuantityInputKeyup));
            quantityInput.addEventListener("change", (0, _classPrivateFieldGet2["default"])(_this, _onQuantityInputKeyup));
          });
        }
      }

      (0, _delegate["default"])(_constants.DOM.body, ".cart .minus, .cart .plus, .tinv-wishlist .minus, .tinv-wishlist .plus, .quantity .minus, .quantity .plus", "click", (0, _classPrivateFieldGet2["default"])(_this, _onQuantityBtnClick));
    }
  });

  _onQuantityInputKeyup.set(this, {
    writable: true,
    value: function value(event) {
      var currentQuantityInput = event.target;
      var inputType = currentQuantityInput.getAttribute("type");
      var quantityInputs = document.querySelectorAll(".quantity:not(.buttons_added) .qty");

      if (!(inputType === "date" || inputType === "hidden")) {
        quantityInputs.forEach(function (quantityInput) {
          quantityInput.value = currentQuantityInput.value;
        });
      }
    }
  });

  _onQuantityBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      var _quantityBtn$closest, _quantityBtn$closest2;

      event.preventDefault();
      event.stopPropagation();
      var quantityBtn = event.delegateTarget;
      var quantityInput = quantityBtn.closest(".quantity").querySelector(".qty");
      var currentValue = parseFloat(quantityInput.value);
      var min = parseFloat(quantityInput.getAttribute("min"));
      var max = parseFloat(quantityInput.getAttribute("max"));
      var step = quantityInput.getAttribute("step"); // Fallback default values

      if (!currentValue || currentValue === "" || Number.isNaN(currentValue)) {
        currentValue = 0;
      }

      if (max === "" || Number.isNaN(max)) {
        max = "";
      }

      if (min === "" || Number.isNaN(min)) {
        min = 0;
      }

      if (step === undefined || step === "" || step === "any" || Number.isNaN(parseFloat(step))) {
        step = 1;
      } // Plus button


      if (quantityBtn.classList.contains("plus")) {
        if (max && (currentValue === max || currentValue > max)) {
          quantityInput.value = max;
        } else {
          quantityInput.value = currentValue + parseFloat(step);
        } // Minus button

      } else {
        if (min && (currentValue === min || currentValue < min)) {
          quantityInput.value = min;
        } else if (currentValue > 0) {
          quantityInput.value = currentValue - parseFloat(step);
        }
      }

      if (!!((_quantityBtn$closest = quantityBtn.closest("form")) !== null && _quantityBtn$closest !== void 0 && _quantityBtn$closest.querySelector(".add_to_cart_button"))) {
        quantityBtn.closest("form").querySelector(".add_to_cart_button").dataset.quantity = quantityInput.value;
      }

      if (!!((_quantityBtn$closest2 = quantityBtn.closest(".cart")) !== null && _quantityBtn$closest2 !== void 0 && _quantityBtn$closest2.querySelector(".add_to_cart_button"))) {
        quantityBtn.closest(".cart").querySelector(".add_to_cart_button").dataset.quantity = quantityInput.value;
      } // Trigger change event


      quantityInput.dispatchEvent((0, _classPrivateFieldGet2["default"])(_this, _changeEvent));
    }
  });

  (0, _classPrivateFieldSet2["default"])(this, _firstTimeRunning, true);
  this.start();
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = WooQuantityButtons;
exports["default"] = _default;

},{"../../../constants":1,"@babel/runtime/helpers/classCallCheck":12,"@babel/runtime/helpers/classPrivateFieldGet":14,"@babel/runtime/helpers/classPrivateFieldSet":15,"@babel/runtime/helpers/defineProperty":16,"@babel/runtime/helpers/interopRequireDefault":17,"delegate":20}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onCustomerReviewLinkClick = /*#__PURE__*/new WeakMap();

var WooScrollToReviewTab = function WooScrollToReviewTab() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, WooScrollToReviewTab);

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.woo.productCustomerReviewLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onCustomerReviewLinkClick));
    }
  });

  _onCustomerReviewLinkClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();

      if (!!_constants.DOM.woo.productTabs.querySelector(".description_tab")) {
        _constants.DOM.woo.productTabs.querySelector(".description_tab").classList.remove("active");

        _constants.DOM.woo.productTabs.querySelector("#tab-description").style.display = "none";
      }

      if (_constants.DOM.woo.productTabs.querySelector(".additional_information_tab")) {
        _constants.DOM.woo.productTabs.querySelector(".additional_information_tab").classList.remove("active");

        _constants.DOM.woo.productTabs.querySelector("#tab-additional_information").style.display = "none";
      }

      _constants.DOM.woo.productTabs.querySelector(".reviews_tab").classList.add("active");

      _constants.DOM.woo.productTabs.querySelector("#tab-reviews").style.display = "block";
      var reviewTabPositionTop = (0, _utils.offset)(document.querySelector(event.currentTarget.hash)).top;

      _constants.DOM.html.scrollTo({
        top: reviewTabPositionTop - 120,
        behavior: "smooth"
      });
    }
  });

  if (!!_constants.DOM.woo.productCustomerReviewLink) {
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = WooScrollToReviewTab;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":2,"@babel/runtime/helpers/classCallCheck":12,"@babel/runtime/helpers/classPrivateFieldGet":14,"@babel/runtime/helpers/interopRequireDefault":17}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _resetVariations = _interopRequireDefault(require("./custom-features/reset-variations"));

var _wooGridList = _interopRequireDefault(require("./custom-features/woo-grid-list"));

var _wooGuestAccountPage = _interopRequireDefault(require("./custom-features/woo-guest-account-page"));

var _wooQuantityButtons = _interopRequireDefault(require("./custom-features/woo-quantity-buttons"));

var _wooScrollToReviewTab = _interopRequireDefault(require("./custom-features/woo-scroll-to-review-tab"));

var _removeCategoriesCountParenthesis = _interopRequireDefault(require("./custom-features/remove-categories-count-parenthesis"));

var WooCustomFeatures = function WooCustomFeatures() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, WooCustomFeatures);
  (0, _defineProperty2["default"])(this, "start", function () {
    _this.resetVariations = new _resetVariations["default"]();
    _this.gridList = new _wooGridList["default"]();
    _this.guestAccountPage = new _wooGuestAccountPage["default"]();
    _this.quantityButtons = new _wooQuantityButtons["default"]();
    _this.reviewScroll = new _wooScrollToReviewTab["default"]();
    _this.widgets = new _removeCategoriesCountParenthesis["default"]();
    /**
     * Because Woocommerce plugin uses jQuery custom event,
     * We also have to use jQuery to customize this event.
     */

    jQuery("body").on("updated_cart_totals", function () {
      _this.quantityButtons.start();
    });
    jQuery(document).on("append.infiniteScroll", function () {
      _this.quantityButtons.start();
    });
  });
};

window.oceanwpWooCustomFeatures = new WooCustomFeatures();
oceanwpWooCustomFeatures.start();

},{"./custom-features/remove-categories-count-parenthesis":3,"./custom-features/reset-variations":4,"./custom-features/woo-grid-list":5,"./custom-features/woo-guest-account-page":6,"./custom-features/woo-quantity-buttons":7,"./custom-features/woo-scroll-to-review-tab":8,"@babel/runtime/helpers/classCallCheck":12,"@babel/runtime/helpers/defineProperty":16,"@babel/runtime/helpers/interopRequireDefault":17}],10:[function(require,module,exports){
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],11:[function(require,module,exports){
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

module.exports = _classApplyDescriptorSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],12:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],13:[function(require,module,exports){
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],14:[function(require,module,exports){
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorGet.js":10,"./classExtractFieldDescriptor.js":13}],15:[function(require,module,exports){
var classApplyDescriptorSet = require("./classApplyDescriptorSet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorSet.js":11,"./classExtractFieldDescriptor.js":13}],16:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],17:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],18:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],19:[function(require,module,exports){
var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;

},{}],20:[function(require,module,exports){
var closest = require('./closest');

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;

},{"./closest":19}],21:[function(require,module,exports){
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy93cC1wbHVnaW5zL3dvb2NvbW1lcmNlL2N1c3RvbS1mZWF0dXJlcy9yZW1vdmUtY2F0ZWdvcmllcy1jb3VudC1wYXJlbnRoZXNpcy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvcmVzZXQtdmFyaWF0aW9ucy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLWdyaWQtbGlzdC5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLWd1ZXN0LWFjY291bnQtcGFnZS5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLXF1YW50aXR5LWJ1dHRvbnMuanMiLCJhc3NldHMvc3JjL2pzL3dwLXBsdWdpbnMvd29vY29tbWVyY2UvY3VzdG9tLWZlYXR1cmVzL3dvby1zY3JvbGwtdG8tcmV2aWV3LXRhYi5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS93b28tY3VzdG9tLWZlYXR1cmVzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRHZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZFNldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sT0FBTyxHQUFHLGVBQWhCOztBQUVBLElBQU0sR0FBRyxHQUFHO0FBQ2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FEUztBQUVmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUZBO0FBR2YsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FIRztBQUlmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBSlM7QUFLZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUxTO0FBTWYsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQU8sQ0FBQyxhQUFsQyxDQU5HO0FBT2YsRUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBUEU7QUFRZixFQUFBLE1BQU0sRUFBRTtBQUNK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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICB3cmFwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgc2l0ZUZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIiksXHJcbiAgICAgICAgY2FsbG91dEZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItY2FsbG91dC13cmFwXCIpLFxyXG4gICAgICAgIGZvb3RlckJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItYmFyXCIpLFxyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVXAgPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW5cIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLWJvdHRvbVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVRvZ2dsZSA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCJcclxuICAgICAgICA/IHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbilcclxuICAgICAgICA6IHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZVRvZ2dsZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIlxyXG4gICAgICAgID8gZmFkZUluKGVsZW1lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgOiBmYWRlT3V0KGVsZW1lbnQsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlID0gZWxlbWVudCA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhKFxyXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0V2lkdGggfHxcclxuICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodCB8fFxyXG4gICAgICAgIGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGhcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSBlID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSBvID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXHJcbiAgICAgICAgOiBvICYmXHJcbiAgICAgICAgICAgICAgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICBvICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgby5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0b3JWYWxpZCA9IChkdW1teUVsZW1lbnQgPT4gc2VsZWN0b3IgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdW1teUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcclxuIiwiY2xhc3MgV29vUmVtb3ZlQ2F0ZWdvcmllc0NvdW50UGFyZW50aGVzaXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLndpZGdldF9sYXllcmVkX25hdiBzcGFuLmNvdW50LCAud2lkZ2V0X3Byb2R1Y3RfY2F0ZWdvcmllcyBzcGFuLmNvdW50XCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaXRlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBjb3VudC5zdWJzdHJpbmcoMSwgY291bnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29SZW1vdmVDYXRlZ29yaWVzQ291bnRQYXJlbnRoZXNpcztcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgV29vUmVzZXRWYXJpYXRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCEhRE9NLndvby5yZXNldFZhcmlhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ud29vLnJlc2V0VmFyaWF0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNldFZhcmlhdGlvbnMgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgICAgICByZXNldFZhcmlhdGlvbnNcbiAgICAgICAgICAgICAgICAuY2xvc2VzdChcIi52YXJpYXRpb25zXCIpXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29SZXNldFZhcmlhdGlvbnM7XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIFdvb0dyaWRMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1ncmlkLWxpc3RcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImdyaWRjb29raWVcIiwgeyBwYXRoOiBcIlwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIShET00ud29vLmdyaWQgfHwgRE9NLndvby5saXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiZ3JpZGNvb2tpZVwiKSA9PT0gXCJncmlkXCIpIHtcbiAgICAgICAgICAgIERPTS53b28uZ3JpZD8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ubGlzdD8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cz8uZm9yRWFjaCgocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiZ3JpZGNvb2tpZVwiKSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgICAgICAgIERPTS53b28uZ3JpZD8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ubGlzdD8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cz8uZm9yRWFjaCgocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JpZFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiNwcm9kdWN0Q2Fyb3VzZWwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLndvby5ncmlkPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25HcmlkQ2xpY2spO1xuICAgICAgICBET00ud29vLmxpc3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkxpc3RDbGljayk7XG4gICAgfTtcblxuICAgICNvbkdyaWRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBET00ud29vLmdyaWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLndvby5saXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgQ29va2llcy5zZXQoXCJncmlkY29va2llXCIsIFwiZ3JpZFwiLCB7IHBhdGg6IFwiXCIgfSk7XG5cbiAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0cykgPT4ge1xuICAgICAgICAgICAgZmFkZU91dChwcm9kdWN0cywge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBmYWRlSW4ocHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNwcm9kdWN0Q2Fyb3VzZWwoKTtcbiAgICAgICAgfSwgMzAxKTtcbiAgICB9O1xuXG4gICAgI29uTGlzdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIERPTS53b28uZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBET00ud29vLmxpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBDb29raWVzLnNldChcImdyaWRjb29raWVcIiwgXCJsaXN0XCIsIHsgcGF0aDogXCJcIiB9KTtcblxuICAgICAgICBET00ud29vLmFsbFByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgICBmYWRlT3V0KHByb2R1Y3RzLCB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZhZGVJbihwcm9kdWN0cyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3Byb2R1Y3RDYXJvdXNlbCgpO1xuICAgICAgICB9LCAzMDEpO1xuICAgIH07XG5cbiAgICAjcHJvZHVjdENhcm91c2VsID0gKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tY2Fyb3VzZWxcIikgJiZcbiAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b28tZW50cnktaW1hZ2UucHJvZHVjdC1lbnRyeS1zbGlkZXJcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93U2xpZGVyLmZsaWNraXR5Py5mb3JFYWNoKChmbGlja2l0eSkgPT4ge1xuICAgICAgICAgICAgICAgIGZsaWNraXR5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb2NlYW53cC50aGVtZS5vd1NsaWRlci5zdGFydCgpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvb0dyaWRMaXN0O1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBnZXRTaWJsaW5ncyB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgV29vR3Vlc3RBY2NvdW50UGFnZSB7XG4gICAgI2xvZ2luQnRuO1xuICAgICNyZWdpc3RlckJ0bjtcbiAgICAjbG9naW5Cb3g7XG4gICAgI3JlZ2lzdGVyQm94O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFJldHVybiBpZiByZWdpc3RyYXRpb24gZGlzYWJsZWRcbiAgICAgICAgaWYgKERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZU5hdj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVnaXN0cmF0aW9uLWRpc2FibGVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNsb2dpbkJ0biA9IERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZU5hdj8ucXVlcnlTZWxlY3RvcihcIi5sb2dpbiBhXCIpO1xuICAgICAgICB0aGlzLiNyZWdpc3RlckJ0biA9IERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZU5hdj8ucXVlcnlTZWxlY3RvcihcIi5yZWdpc3RlciBhXCIpO1xuICAgICAgICB0aGlzLiNsb2dpbkJveCA9IERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZUJveD8ucXVlcnlTZWxlY3RvcihcIi5jb2wtMVwiKTtcbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJCb3ggPSBET00ud29vLmd1ZXN0QWNjb3VudFBhZ2VCb3g/LnF1ZXJ5U2VsZWN0b3IoXCIuY29sLTJcIik7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNsb2dpbkJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTG9naW5CdG5DbGljayk7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25SZWdpc3RlckJ0bkNsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uTG9naW5CdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLiNsb2dpbkJ0bi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XG5cbiAgICAgICAgZmFkZU91dCh0aGlzLiNyZWdpc3RlckJveCwge1xuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmYWRlSW4odGhpcy4jbG9naW5Cb3gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNvblJlZ2lzdGVyQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJCdG4uY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XG4gICAgICAgIHRoaXMuI2xvZ2luQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xuXG4gICAgICAgIGZhZGVPdXQodGhpcy4jbG9naW5Cb3gsIHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmFkZUluKHRoaXMuI3JlZ2lzdGVyQm94KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvb0d1ZXN0QWNjb3VudFBhZ2U7XG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XG5pbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFdvb1F1YW50aXR5QnV0dG9ucyB7XG4gICAgI2NoYW5nZUV2ZW50O1xuICAgICNmaXJzdFRpbWVSdW5uaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2ZpcnN0VGltZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIlxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghIXF1YW50aXR5SW5wdXRzKSB7XG4gICAgICAgICAgICBxdWFudGl0eUlucHV0cy5mb3JFYWNoKHF1YW50aXR5SW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IHF1YW50aXR5SW5wdXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcblxuICAgICAgICAgICAgICAgIGlmICghKGlucHV0VHlwZSA9PT0gXCJkYXRlXCIgfHwgaW5wdXRUeXBlID09PSBcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbWludXMgaWNvblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhcXVhbnRpdHlJbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW51c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmViZWdpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJtaW51c1wiPi08L2E+J1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBwbHVzIGljb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgIXF1YW50aXR5SW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFmdGVyZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cInBsdXNcIj4rPC9hPidcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgYmlnZ2VyIHRoYW4gbWluXG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQucXR5Om5vdCgucHJvZHVjdC1xdWFudGl0eSBpbnB1dC5xdHkpXCIpXG4gICAgICAgICAgICAgICAgLmZvckVhY2gocXVhbnRpdHlJbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlRmxvYXQocXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KHF1YW50aXR5SW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW4gJiYgbWluID4gMCAmJiBjdXJyZW50VmFsdWUgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuI2ZpcnN0VGltZVJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgJ2NoYW5nZScgZXZlbnRcbiAgICAgICAgICAgICAgICB0aGlzLiNjaGFuZ2VFdmVudCA9IG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIFwiLnF1YW50aXR5Om5vdCguYnV0dG9uc19hZGRlZCkgLnF0eVwiXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGZsb2F0aW5nIGJhciBxdWFudGl0eVxuICAgICAgICBpZiAoISFxdWFudGl0eUlucHV0cykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1wcm9kdWN0XCIpICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mbG9hdGluZ19iYXIgPT09IFwib25cIiAmJlxuICAgICAgICAgICAgICAgICFBcnJheS5mcm9tKERPTS53b28ucHJvZHVjdENhcnRzKS5zb21lKFxuICAgICAgICAgICAgICAgICAgICAoeyBjbGFzc0xpc3QgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5jb250YWlucyhcImdyb3VwZWRfZm9ybVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FydF9ncm91cFwiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXRzLmZvckVhY2gocXVhbnRpdHlJbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5dXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI29uUXVhbnRpdHlJbnB1dEtleXVwXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNvblF1YW50aXR5SW5wdXRLZXl1cFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZWdhdGUoXG4gICAgICAgICAgICBET00uYm9keSxcbiAgICAgICAgICAgIFwiLmNhcnQgLm1pbnVzLCAuY2FydCAucGx1cywgLnRpbnYtd2lzaGxpc3QgLm1pbnVzLCAudGludi13aXNobGlzdCAucGx1cywgLnF1YW50aXR5IC5taW51cywgLnF1YW50aXR5IC5wbHVzXCIsXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLiNvblF1YW50aXR5QnRuQ2xpY2tcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgI29uUXVhbnRpdHlJbnB1dEtleXVwID0gZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UXVhbnRpdHlJbnB1dCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSBjdXJyZW50UXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIlxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghKGlucHV0VHlwZSA9PT0gXCJkYXRlXCIgfHwgaW5wdXRUeXBlID09PSBcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgcXVhbnRpdHlJbnB1dHMuZm9yRWFjaChxdWFudGl0eUlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gY3VycmVudFF1YW50aXR5SW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25RdWFudGl0eUJ0bkNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBxdWFudGl0eUJ0biA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0O1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gcXVhbnRpdHlCdG5cbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLnF1YW50aXR5XCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5xdHlcIik7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQocXVhbnRpdHlJbnB1dC52YWx1ZSk7XG4gICAgICAgIGxldCBtaW4gPSBwYXJzZUZsb2F0KHF1YW50aXR5SW5wdXQuZ2V0QXR0cmlidXRlKFwibWluXCIpKTtcbiAgICAgICAgbGV0IG1heCA9IHBhcnNlRmxvYXQocXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpO1xuICAgICAgICBsZXQgc3RlcCA9IHF1YW50aXR5SW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKTtcblxuICAgICAgICAvLyBGYWxsYmFjayBkZWZhdWx0IHZhbHVlc1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhY3VycmVudFZhbHVlIHx8XG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgICAgIE51bWJlci5pc05hTihjdXJyZW50VmFsdWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXggPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKG1heCkpIHtcbiAgICAgICAgICAgIG1heCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWluID09PSBcIlwiIHx8IE51bWJlci5pc05hTihtaW4pKSB7XG4gICAgICAgICAgICBtaW4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc3RlcCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBzdGVwID09PSBcIlwiIHx8XG4gICAgICAgICAgICBzdGVwID09PSBcImFueVwiIHx8XG4gICAgICAgICAgICBOdW1iZXIuaXNOYU4ocGFyc2VGbG9hdChzdGVwKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdGVwID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsdXMgYnV0dG9uXG4gICAgICAgIGlmIChxdWFudGl0eUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbHVzXCIpKSB7XG4gICAgICAgICAgICBpZiAobWF4ICYmIChjdXJyZW50VmFsdWUgPT09IG1heCB8fCBjdXJyZW50VmFsdWUgPiBtYXgpKSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IG1heDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGN1cnJlbnRWYWx1ZSArIHBhcnNlRmxvYXQoc3RlcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1pbnVzIGJ1dHRvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1pbiAmJiAoY3VycmVudFZhbHVlID09PSBtaW4gfHwgY3VycmVudFZhbHVlIDwgbWluKSkge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBtaW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gY3VycmVudFZhbHVlIC0gcGFyc2VGbG9hdChzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhcXVhbnRpdHlCdG4uY2xvc2VzdChcImZvcm1cIik/LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3RvX2NhcnRfYnV0dG9uXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcXVhbnRpdHlCdG5cbiAgICAgICAgICAgICAgICAuY2xvc2VzdChcImZvcm1cIilcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5hZGRfdG9fY2FydF9idXR0b25cIikuZGF0YXNldC5xdWFudGl0eSA9XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhcXVhbnRpdHlCdG4uY2xvc2VzdChcIi5jYXJ0XCIpPy5xdWVyeVNlbGVjdG9yKFwiLmFkZF90b19jYXJ0X2J1dHRvblwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHF1YW50aXR5QnRuXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoXCIuY2FydFwiKVxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFkZF90b19jYXJ0X2J1dHRvblwiKS5kYXRhc2V0LnF1YW50aXR5ID1cbiAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAgICAgICAgcXVhbnRpdHlJbnB1dC5kaXNwYXRjaEV2ZW50KHRoaXMuI2NoYW5nZUV2ZW50KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29RdWFudGl0eUJ1dHRvbnM7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIFdvb1Njcm9sbFRvUmV2aWV3VGFiIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCEhRE9NLndvby5wcm9kdWN0Q3VzdG9tZXJSZXZpZXdMaW5rKSB7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLndvby5wcm9kdWN0Q3VzdG9tZXJSZXZpZXdMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkN1c3RvbWVyUmV2aWV3TGlua0NsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uQ3VzdG9tZXJSZXZpZXdMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCEhRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uX3RhYlwiKSkge1xuICAgICAgICAgICAgRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uX3RhYlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiI3RhYi1kZXNjcmlwdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiLmFkZGl0aW9uYWxfaW5mb3JtYXRpb25fdGFiXCIpKSB7XG4gICAgICAgICAgICBET00ud29vLnByb2R1Y3RUYWJzLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkaXRpb25hbF9pbmZvcm1hdGlvbl90YWJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIiN0YWItYWRkaXRpb25hbF9pbmZvcm1hdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICBET00ud29vLnByb2R1Y3RUYWJzLnF1ZXJ5U2VsZWN0b3IoXCIucmV2aWV3c190YWJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiI3RhYi1yZXZpZXdzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgY29uc3QgcmV2aWV3VGFiUG9zaXRpb25Ub3AgPSBvZmZzZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihldmVudC5jdXJyZW50VGFyZ2V0Lmhhc2gpKS50b3A7XG5cbiAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiByZXZpZXdUYWJQb3NpdGlvblRvcCAtIDEyMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29TY3JvbGxUb1Jldmlld1RhYjtcbiIsImltcG9ydCBXb29SZXNldFZhcmlhdGlvbnMgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3Jlc2V0LXZhcmlhdGlvbnNcIjtcbmltcG9ydCBXb29HcmlkTGlzdCBmcm9tIFwiLi9jdXN0b20tZmVhdHVyZXMvd29vLWdyaWQtbGlzdFwiO1xuaW1wb3J0IFdvb0d1ZXN0QWNjb3VudFBhZ2UgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3dvby1ndWVzdC1hY2NvdW50LXBhZ2VcIjtcbmltcG9ydCBXb29RdWFudGl0eUJ1dHRvbnMgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3dvby1xdWFudGl0eS1idXR0b25zXCI7XG5pbXBvcnQgV29vU2Nyb2xsVG9SZXZpZXdUYWIgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3dvby1zY3JvbGwtdG8tcmV2aWV3LXRhYlwiO1xuaW1wb3J0IFdvb1JlbW92ZUNhdGVnb3JpZXNDb3VudFBhcmVudGhlc2lzIGZyb20gXCIuL2N1c3RvbS1mZWF0dXJlcy9yZW1vdmUtY2F0ZWdvcmllcy1jb3VudC1wYXJlbnRoZXNpc1wiO1xuXG5jbGFzcyBXb29DdXN0b21GZWF0dXJlcyB7XG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRWYXJpYXRpb25zID0gbmV3IFdvb1Jlc2V0VmFyaWF0aW9ucygpO1xuICAgICAgICB0aGlzLmdyaWRMaXN0ID0gbmV3IFdvb0dyaWRMaXN0KCk7XG4gICAgICAgIHRoaXMuZ3Vlc3RBY2NvdW50UGFnZSA9IG5ldyBXb29HdWVzdEFjY291bnRQYWdlKCk7XG4gICAgICAgIHRoaXMucXVhbnRpdHlCdXR0b25zID0gbmV3IFdvb1F1YW50aXR5QnV0dG9ucygpO1xuICAgICAgICB0aGlzLnJldmlld1Njcm9sbCA9IG5ldyBXb29TY3JvbGxUb1Jldmlld1RhYigpO1xuICAgICAgICB0aGlzLndpZGdldHMgPSBuZXcgV29vUmVtb3ZlQ2F0ZWdvcmllc0NvdW50UGFyZW50aGVzaXMoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQmVjYXVzZSBXb29jb21tZXJjZSBwbHVnaW4gdXNlcyBqUXVlcnkgY3VzdG9tIGV2ZW50LFxuICAgICAgICAgKiBXZSBhbHNvIGhhdmUgdG8gdXNlIGpRdWVyeSB0byBjdXN0b21pemUgdGhpcyBldmVudC5cbiAgICAgICAgICovXG4gICAgICAgIGpRdWVyeShcImJvZHlcIikub24oXCJ1cGRhdGVkX2NhcnRfdG90YWxzXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHlCdXR0b25zLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeSggZG9jdW1lbnQgKS5vbihcImFwcGVuZC5pbmZpbml0ZVNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5QnV0dG9ucy5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG53aW5kb3cub2NlYW53cFdvb0N1c3RvbUZlYXR1cmVzID0gbmV3IFdvb0N1c3RvbUZlYXR1cmVzKCk7XG5vY2VhbndwV29vQ3VzdG9tRmVhdHVyZXMuc3RhcnQoKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSkge1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICB9XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCA9IHJlcXVpcmUoXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCIpO1xuXG52YXIgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yID0gcmVxdWlyZShcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICByZXR1cm4gY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JTZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRTZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcbiIsInZhciBjbG9zZXN0ID0gcmVxdWlyZSgnLi9jbG9zZXN0Jyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiJdfQ==
