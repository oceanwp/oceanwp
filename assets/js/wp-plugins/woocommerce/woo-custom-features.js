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
          // Add minus icon
          quantityInput.insertAdjacentHTML("beforebegin", '<a href="javascript:void(0)" class="minus">-</a>'); // Add plus icon

          quantityInput.insertAdjacentHTML("afterend", '<a href="javascript:void(0)" class="plus">+</a>');
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

      (0, _delegate["default"])(_constants.DOM.body, ".cart .minus, .cart .plus, .tinv-wishlist .minus, .tinv-wishlist .plus", "click", (0, _classPrivateFieldGet2["default"])(_this, _onQuantityBtnClick));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy93cC1wbHVnaW5zL3dvb2NvbW1lcmNlL2N1c3RvbS1mZWF0dXJlcy9yZW1vdmUtY2F0ZWdvcmllcy1jb3VudC1wYXJlbnRoZXNpcy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvcmVzZXQtdmFyaWF0aW9ucy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLWdyaWQtbGlzdC5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLWd1ZXN0LWFjY291bnQtcGFnZS5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLXF1YW50aXR5LWJ1dHRvbnMuanMiLCJhc3NldHMvc3JjL2pzL3dwLXBsdWdpbnMvd29vY29tbWVyY2UvY3VzdG9tLWZlYXR1cmVzL3dvby1zY3JvbGwtdG8tcmV2aWV3LXRhYi5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS93b28tY3VzdG9tLWZlYXR1cmVzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRHZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZFNldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sT0FBTyxHQUFHLGVBQWhCOztBQUVBLElBQU0sR0FBRyxHQUFHO0FBQ2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FEUztBQUVmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUZBO0FBR2YsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FIRztBQUlmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBSlM7QUFLZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUxTO0FBTWYsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQU8sQ0FBQyxhQUFsQyxDQU5HO0FBT2YsRUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBUEU7QUFRZixFQUFBLE1BQU0sRUFBRTtBQUNK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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBvY2VhbndwTG9jYWxpemU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NID0ge1xyXG4gICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxyXG4gICAgd3JhcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwXCIpLFxyXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLFxyXG4gICAgc2VsZWN0VGFnczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmN1c3RvbVNlbGVjdHMpLFxyXG4gICAgZmxvYXRpbmdCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWZsb2F0aW5nLWJhclwiKSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHNpdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXJcIiksXHJcbiAgICAgICAgdmVydGljYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudmVydGljYWwtaGVhZGVyICNzaXRlLWhlYWRlci1pbm5lclwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlclwiKSxcclxuICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhclwiKSxcclxuICAgICAgICB0b3BiYXJXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXItd3JhcFwiKSxcclxuICAgICAgICB0b3BMZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5sZWZ0XCIpLFxyXG4gICAgICAgIHRvcFJpZ2h0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5yaWdodFwiKSxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmhlYWRlci1yZXBsYWNlICNzaXRlLW5hdmlnYXRpb25cIiksXHJcbiAgICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgICAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAjZnVsbC1zY3JlZW4tbWVudVwiKSxcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgLm1lbnUtYmFyXCIpLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nby5oYXMtZnVsbC1zY3JlZW4tbG9nb1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2E6IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpdGUtbmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9wLWJhci1uYXYgLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgbWVudUNvbnRlbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmF1dG8tbWVnYSAubWVnYW1lbnVcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS52ZXJ0aWNhbC10b2dnbGVcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVNZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93biA+IG5hdlwiKSxcclxuICAgICAgICBuYXZXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93blwiKSxcclxuICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSA+IC5oYW1idXJnZXJcIiksXHJcbiAgICAgICAgbWVudUl0ZW1zSGFzQ2hpbGRyZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWRyb3Bkb3duIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWZ1bGxzY3JlZW5cIiksXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgZm9ybXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtLmhlYWRlci1zZWFyY2hmb3JtXCIpLFxyXG4gICAgICAgIGRyb3BEb3duOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWRyb3Bkb3duLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyUmVwbGFjZToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1oZWFkZXItcmVwbGFjZS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2UtY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtb3ZlcmxheS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheSBhLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHNpdGVGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpLFxyXG4gICAgICAgIGNhbGxvdXRGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWNhbGxvdXQtd3JhcFwiKSxcclxuICAgICAgICBmb290ZXJCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWJhclwiKSxcclxuICAgICAgICBwYXJhbGxheDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbGxheC1mb290ZXJcIiksXHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsOiB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbC10b3BcIiksXHJcbiAgICAgICAgZ29Ub3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIiNnby10b3BcIl0nKSxcclxuICAgICAgICBnb1RvcFNsYXNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5LmhvbWUgYVtocmVmPVwiLyNnby10b3BcIl0nKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbE5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtd3JhcFwiKSxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgICAgbWFzb25yeUdyaWRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctbWFzb25yeS1ncmlkXCIpLFxyXG4gICAgfSxcclxuICAgIGVkZDoge1xyXG4gICAgICAgIGNhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZC1tZW51LWljb25cIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICB0b3RhbFByaWNlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGRtZW51Y2FydC1kZXRhaWxzLnRvdGFsXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld01vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld0NvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICB9LFxyXG4gICAgd29vOiB7XHJcbiAgICAgICAgcmVzZXRWYXJpYXRpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0X3ZhcmlhdGlvbnNcIiksXHJcbiAgICAgICAgcHJvZHVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdFwiKSxcclxuICAgICAgICBhbGxQcm9kdWN0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSB1bC5wcm9kdWN0c1wiKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvby1kcm9wZG93bi1jYXQgLnByb2R1Y3QtY2F0ZWdvcmllc1wiKSxcclxuICAgICAgICB2ZXJ0aWNhbFRodW1iczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICB0aHVtYnNWZXJ0aWNhbExheW91dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICBncmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWdyaWRcIiksXHJcbiAgICAgICAgbGlzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1saXN0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RUYWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS10YWJzXCIpLFxyXG4gICAgICAgIHByb2R1Y3RDYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAuY2FydFwiKSxcclxuICAgICAgICBwcm9kdWN0Q3VzdG9tZXJSZXZpZXdMaW5rOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS1yZXZpZXctbGlua1wiKSxcclxuICAgICAgICBxdWFudGl0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyksXHJcbiAgICAgICAgY2hlY2tvdXRGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS53b29jb21tZXJjZS1jaGVja291dFwiKSxcclxuICAgICAgICBjaGVja291dExvZ2luOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2xvZ2luXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0Q291cG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2NvdXBvblwiKSxcclxuICAgICAgICBjaGVja291dFRpbWVsaW5lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1jaGVja291dC10aW1lbGluZVwiKSxcclxuICAgICAgICBjdXN0b21lckJpbGxpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2JpbGxpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBjdXN0b21lclNoaXBwaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9zaGlwcGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIG9yZGVyUmV2aWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX3Jldmlld1wiKSxcclxuICAgICAgICBvcmRlckNoZWNrb3V0UGF5bWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9jaGVja291dF9wYXltZW50XCIpLFxyXG4gICAgICAgIHBsYWNlT3JkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2Vfb3JkZXJcIiksXHJcbiAgICAgICAgZm9ybUFjdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9hY3Rpb25zXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZU5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtYWNjb3VudC1saW5rc1wiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlQm94OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2xvZ2luXCIpLFxyXG4gICAgICAgIHF1YW50aXR5SW5wdXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5Om5vdCguYnV0dG9uc19hZGRlZCkgLnF0eVwiKSxcclxuICAgICAgICBxdWlja1ZpZXc6IHtcclxuICAgICAgICAgICAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRE9NU3RyaW5nID0ge307XHJcbiIsImV4cG9ydCBjb25zdCB3cmFwID0gKGVsZW1lbnQsIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZURvd24gPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheTtcclxuXHJcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHRcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVVwID0gKGVsZW1lbnQsIGR1cmF0aW9uID0gMzAwKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcclxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiID8gc2xpZGVEb3duKGVsZW1lbnQsIGR1cmF0aW9uKSA6IHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZVRvZ2dsZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IGZhZGVJbihlbGVtZW50LCBvcHRpb25zKSA6IGZhZGVPdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmICghZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1JcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmlzaWJsZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhKGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSAoZSkgPT4ge1xyXG4gICAgLy8gZm9yIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIGNvbnN0IHNpYmxpbmdzID0gW107XHJcblxyXG4gICAgLy8gaWYgbm8gcGFyZW50LCByZXR1cm4gbm8gc2libGluZ1xyXG4gICAgaWYgKCFlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gc2libGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuLy8gUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnRcclxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudCA9IChvKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgLy8gRE9NMlxyXG4gICAgICAgIDogbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTZWxlY3RvclZhbGlkID0gKChkdW1teUVsZW1lbnQpID0+IChzZWxlY3RvcikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdW1teUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcclxuIiwiY2xhc3MgV29vUmVtb3ZlQ2F0ZWdvcmllc0NvdW50UGFyZW50aGVzaXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLndpZGdldF9sYXllcmVkX25hdiBzcGFuLmNvdW50LCAud2lkZ2V0X3Byb2R1Y3RfY2F0ZWdvcmllcyBzcGFuLmNvdW50XCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaXRlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBjb3VudC5zdWJzdHJpbmcoMSwgY291bnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29SZW1vdmVDYXRlZ29yaWVzQ291bnRQYXJlbnRoZXNpcztcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgV29vUmVzZXRWYXJpYXRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCEhRE9NLndvby5yZXNldFZhcmlhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ud29vLnJlc2V0VmFyaWF0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNldFZhcmlhdGlvbnMgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgICAgICByZXNldFZhcmlhdGlvbnNcbiAgICAgICAgICAgICAgICAuY2xvc2VzdChcIi52YXJpYXRpb25zXCIpXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29SZXNldFZhcmlhdGlvbnM7XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIFdvb0dyaWRMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1ncmlkLWxpc3RcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImdyaWRjb29raWVcIiwgeyBwYXRoOiBcIlwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIShET00ud29vLmdyaWQgfHwgRE9NLndvby5saXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiZ3JpZGNvb2tpZVwiKSA9PT0gXCJncmlkXCIpIHtcbiAgICAgICAgICAgIERPTS53b28uZ3JpZD8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ubGlzdD8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cz8uZm9yRWFjaCgocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiZ3JpZGNvb2tpZVwiKSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgICAgICAgIERPTS53b28uZ3JpZD8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ubGlzdD8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cz8uZm9yRWFjaCgocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JpZFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiNwcm9kdWN0Q2Fyb3VzZWwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLndvby5ncmlkPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25HcmlkQ2xpY2spO1xuICAgICAgICBET00ud29vLmxpc3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkxpc3RDbGljayk7XG4gICAgfTtcblxuICAgICNvbkdyaWRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBET00ud29vLmdyaWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLndvby5saXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgQ29va2llcy5zZXQoXCJncmlkY29va2llXCIsIFwiZ3JpZFwiLCB7IHBhdGg6IFwiXCIgfSk7XG5cbiAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0cykgPT4ge1xuICAgICAgICAgICAgZmFkZU91dChwcm9kdWN0cywge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBmYWRlSW4ocHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNwcm9kdWN0Q2Fyb3VzZWwoKTtcbiAgICAgICAgfSwgMzAxKTtcbiAgICB9O1xuXG4gICAgI29uTGlzdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIERPTS53b28uZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBET00ud29vLmxpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBDb29raWVzLnNldChcImdyaWRjb29raWVcIiwgXCJsaXN0XCIsIHsgcGF0aDogXCJcIiB9KTtcblxuICAgICAgICBET00ud29vLmFsbFByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgICBmYWRlT3V0KHByb2R1Y3RzLCB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZhZGVJbihwcm9kdWN0cyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3Byb2R1Y3RDYXJvdXNlbCgpO1xuICAgICAgICB9LCAzMDEpO1xuICAgIH07XG5cbiAgICAjcHJvZHVjdENhcm91c2VsID0gKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tY2Fyb3VzZWxcIikgJiZcbiAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b28tZW50cnktaW1hZ2UucHJvZHVjdC1lbnRyeS1zbGlkZXJcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93U2xpZGVyLmZsaWNraXR5Py5mb3JFYWNoKChmbGlja2l0eSkgPT4ge1xuICAgICAgICAgICAgICAgIGZsaWNraXR5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb2NlYW53cC50aGVtZS5vd1NsaWRlci5zdGFydCgpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvb0dyaWRMaXN0O1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBnZXRTaWJsaW5ncyB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgV29vR3Vlc3RBY2NvdW50UGFnZSB7XG4gICAgI2xvZ2luQnRuO1xuICAgICNyZWdpc3RlckJ0bjtcbiAgICAjbG9naW5Cb3g7XG4gICAgI3JlZ2lzdGVyQm94O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFJldHVybiBpZiByZWdpc3RyYXRpb24gZGlzYWJsZWRcbiAgICAgICAgaWYgKERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZU5hdj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVnaXN0cmF0aW9uLWRpc2FibGVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNsb2dpbkJ0biA9IERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZU5hdj8ucXVlcnlTZWxlY3RvcihcIi5sb2dpbiBhXCIpO1xuICAgICAgICB0aGlzLiNyZWdpc3RlckJ0biA9IERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZU5hdj8ucXVlcnlTZWxlY3RvcihcIi5yZWdpc3RlciBhXCIpO1xuICAgICAgICB0aGlzLiNsb2dpbkJveCA9IERPTS53b28uZ3Vlc3RBY2NvdW50UGFnZUJveD8ucXVlcnlTZWxlY3RvcihcIi5jb2wtMVwiKTtcbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJCb3ggPSBET00ud29vLmd1ZXN0QWNjb3VudFBhZ2VCb3g/LnF1ZXJ5U2VsZWN0b3IoXCIuY29sLTJcIik7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNsb2dpbkJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTG9naW5CdG5DbGljayk7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25SZWdpc3RlckJ0bkNsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uTG9naW5CdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLiNsb2dpbkJ0bi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XG5cbiAgICAgICAgZmFkZU91dCh0aGlzLiNyZWdpc3RlckJveCwge1xuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmYWRlSW4odGhpcy4jbG9naW5Cb3gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNvblJlZ2lzdGVyQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJCdG4uY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XG4gICAgICAgIHRoaXMuI2xvZ2luQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xuXG4gICAgICAgIGZhZGVPdXQodGhpcy4jbG9naW5Cb3gsIHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmFkZUluKHRoaXMuI3JlZ2lzdGVyQm94KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvb0d1ZXN0QWNjb3VudFBhZ2U7XG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XG5pbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFdvb1F1YW50aXR5QnV0dG9ucyB7XG4gICAgI2NoYW5nZUV2ZW50O1xuICAgICNmaXJzdFRpbWVSdW5uaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2ZpcnN0VGltZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpO1xuXG4gICAgICAgIGlmICghIXF1YW50aXR5SW5wdXRzKSB7XG4gICAgICAgICAgICBxdWFudGl0eUlucHV0cy5mb3JFYWNoKChxdWFudGl0eUlucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gcXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoaW5wdXRUeXBlID09PSBcImRhdGVcIiB8fCBpbnB1dFR5cGUgPT09IFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBtaW51cyBpY29uXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cIm1pbnVzXCI+LTwvYT4nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgcGx1cyBpY29uXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cInBsdXNcIj4rPC9hPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBiaWdnZXIgdGhhbiBtaW5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dC5xdHk6bm90KC5wcm9kdWN0LXF1YW50aXR5IGlucHV0LnF0eSlcIikuZm9yRWFjaCgocXVhbnRpdHlJbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlRmxvYXQocXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQocXVhbnRpdHlJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluICYmIG1pbiA+IDAgJiYgY3VycmVudFZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBtaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNmaXJzdFRpbWVSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3ICdjaGFuZ2UnIGV2ZW50XG4gICAgICAgICAgICAgICAgdGhpcy4jY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBmbG9hdGluZyBiYXIgcXVhbnRpdHlcbiAgICAgICAgaWYgKCEhcXVhbnRpdHlJbnB1dHMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtcHJvZHVjdFwiKSAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmxvYXRpbmdfYmFyID09PSBcIm9uXCIgJiZcbiAgICAgICAgICAgICAgICAhQXJyYXkuZnJvbShET00ud29vLnByb2R1Y3RDYXJ0cykuc29tZShcbiAgICAgICAgICAgICAgICAgICAgKHsgY2xhc3NMaXN0IH0pID0+IGNsYXNzTGlzdC5jb250YWlucyhcImdyb3VwZWRfZm9ybVwiKSB8fCBjbGFzc0xpc3QuY29udGFpbnMoXCJjYXJ0X2dyb3VwXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dHMuZm9yRWFjaCgocXVhbnRpdHlJbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvblF1YW50aXR5SW5wdXRLZXl1cCk7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLiNvblF1YW50aXR5SW5wdXRLZXl1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWxlZ2F0ZShcbiAgICAgICAgICAgIERPTS5ib2R5LFxuICAgICAgICAgICAgXCIuY2FydCAubWludXMsIC5jYXJ0IC5wbHVzLCAudGludi13aXNobGlzdCAubWludXMsIC50aW52LXdpc2hsaXN0IC5wbHVzXCIsXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLiNvblF1YW50aXR5QnRuQ2xpY2tcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgI29uUXVhbnRpdHlJbnB1dEtleXVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRRdWFudGl0eUlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IGN1cnJlbnRRdWFudGl0eUlucHV0LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIik7XG5cbiAgICAgICAgaWYgKCEoaW5wdXRUeXBlID09PSBcImRhdGVcIiB8fCBpbnB1dFR5cGUgPT09IFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBxdWFudGl0eUlucHV0cy5mb3JFYWNoKChxdWFudGl0eUlucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGN1cnJlbnRRdWFudGl0eUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uUXVhbnRpdHlCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBxdWFudGl0eUJ0biA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0O1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gcXVhbnRpdHlCdG4uY2xvc2VzdChcIi5xdWFudGl0eVwiKS5xdWVyeVNlbGVjdG9yKFwiLnF0eVwiKTtcblxuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChxdWFudGl0eUlucHV0LnZhbHVlKTtcbiAgICAgICAgbGV0IG1pbiA9IHBhcnNlRmxvYXQocXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xuICAgICAgICBsZXQgbWF4ID0gcGFyc2VGbG9hdChxdWFudGl0eUlucHV0LmdldEF0dHJpYnV0ZShcIm1heFwiKSk7XG4gICAgICAgIGxldCBzdGVwID0gcXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpO1xuXG4gICAgICAgIC8vIEZhbGxiYWNrIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlIHx8IGN1cnJlbnRWYWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4oY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXggPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKG1heCkpIHtcbiAgICAgICAgICAgIG1heCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWluID09PSBcIlwiIHx8IE51bWJlci5pc05hTihtaW4pKSB7XG4gICAgICAgICAgICBtaW4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXAgPT09IHVuZGVmaW5lZCB8fCBzdGVwID09PSBcIlwiIHx8IHN0ZXAgPT09IFwiYW55XCIgfHwgTnVtYmVyLmlzTmFOKHBhcnNlRmxvYXQoc3RlcCkpKSB7XG4gICAgICAgICAgICBzdGVwID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsdXMgYnV0dG9uXG4gICAgICAgIGlmIChxdWFudGl0eUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbHVzXCIpKSB7XG4gICAgICAgICAgICBpZiAobWF4ICYmIChjdXJyZW50VmFsdWUgPT09IG1heCB8fCBjdXJyZW50VmFsdWUgPiBtYXgpKSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IG1heDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGN1cnJlbnRWYWx1ZSArIHBhcnNlRmxvYXQoc3RlcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1pbnVzIGJ1dHRvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1pbiAmJiAoY3VycmVudFZhbHVlID09PSBtaW4gfHwgY3VycmVudFZhbHVlIDwgbWluKSkge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBtaW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gY3VycmVudFZhbHVlIC0gcGFyc2VGbG9hdChzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgIHF1YW50aXR5SW5wdXQuZGlzcGF0Y2hFdmVudCh0aGlzLiNjaGFuZ2VFdmVudCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29vUXVhbnRpdHlCdXR0b25zO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBXb29TY3JvbGxUb1Jldmlld1RhYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghIURPTS53b28ucHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluaykge1xuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS53b28ucHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DdXN0b21lclJldmlld0xpbmtDbGljayk7XG4gICAgfTtcblxuICAgICNvbkN1c3RvbWVyUmV2aWV3TGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghIURPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbl90YWJcIikpIHtcbiAgICAgICAgICAgIERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbl90YWJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIiN0YWItZGVzY3JpcHRpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIi5hZGRpdGlvbmFsX2luZm9ybWF0aW9uX3RhYlwiKSkge1xuICAgICAgICAgICAgRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiLmFkZGl0aW9uYWxfaW5mb3JtYXRpb25fdGFiXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBET00ud29vLnByb2R1Y3RUYWJzLnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLWFkZGl0aW9uYWxfaW5mb3JtYXRpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiLnJldmlld3NfdGFiXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIiN0YWItcmV2aWV3c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IHJldmlld1RhYlBvc2l0aW9uVG9wID0gb2Zmc2V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXZlbnQuY3VycmVudFRhcmdldC5oYXNoKSkudG9wO1xuXG4gICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogcmV2aWV3VGFiUG9zaXRpb25Ub3AgLSAxMjAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29vU2Nyb2xsVG9SZXZpZXdUYWI7XG4iLCJpbXBvcnQgV29vUmVzZXRWYXJpYXRpb25zIGZyb20gXCIuL2N1c3RvbS1mZWF0dXJlcy9yZXNldC12YXJpYXRpb25zXCI7XG5pbXBvcnQgV29vR3JpZExpc3QgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3dvby1ncmlkLWxpc3RcIjtcbmltcG9ydCBXb29HdWVzdEFjY291bnRQYWdlIGZyb20gXCIuL2N1c3RvbS1mZWF0dXJlcy93b28tZ3Vlc3QtYWNjb3VudC1wYWdlXCI7XG5pbXBvcnQgV29vUXVhbnRpdHlCdXR0b25zIGZyb20gXCIuL2N1c3RvbS1mZWF0dXJlcy93b28tcXVhbnRpdHktYnV0dG9uc1wiO1xuaW1wb3J0IFdvb1Njcm9sbFRvUmV2aWV3VGFiIGZyb20gXCIuL2N1c3RvbS1mZWF0dXJlcy93b28tc2Nyb2xsLXRvLXJldmlldy10YWJcIjtcbmltcG9ydCBXb29SZW1vdmVDYXRlZ29yaWVzQ291bnRQYXJlbnRoZXNpcyBmcm9tIFwiLi9jdXN0b20tZmVhdHVyZXMvcmVtb3ZlLWNhdGVnb3JpZXMtY291bnQtcGFyZW50aGVzaXNcIjtcblxuY2xhc3MgV29vQ3VzdG9tRmVhdHVyZXMge1xuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0VmFyaWF0aW9ucyA9IG5ldyBXb29SZXNldFZhcmlhdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ncmlkTGlzdCA9IG5ldyBXb29HcmlkTGlzdCgpO1xuICAgICAgICB0aGlzLmd1ZXN0QWNjb3VudFBhZ2UgPSBuZXcgV29vR3Vlc3RBY2NvdW50UGFnZSgpO1xuICAgICAgICB0aGlzLnF1YW50aXR5QnV0dG9ucyA9IG5ldyBXb29RdWFudGl0eUJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5yZXZpZXdTY3JvbGwgPSBuZXcgV29vU2Nyb2xsVG9SZXZpZXdUYWIoKTtcbiAgICAgICAgdGhpcy53aWRnZXRzID0gbmV3IFdvb1JlbW92ZUNhdGVnb3JpZXNDb3VudFBhcmVudGhlc2lzKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJlY2F1c2UgV29vY29tbWVyY2UgcGx1Z2luIHVzZXMgalF1ZXJ5IGN1c3RvbSBldmVudCxcbiAgICAgICAgICogV2UgYWxzbyBoYXZlIHRvIHVzZSBqUXVlcnkgdG8gY3VzdG9taXplIHRoaXMgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBqUXVlcnkoXCJib2R5XCIpLm9uKFwidXBkYXRlZF9jYXJ0X3RvdGFsc1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5QnV0dG9ucy5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG53aW5kb3cub2NlYW53cFdvb0N1c3RvbUZlYXR1cmVzID0gbmV3IFdvb0N1c3RvbUZlYXR1cmVzKCk7XG5vY2VhbndwV29vQ3VzdG9tRmVhdHVyZXMuc3RhcnQoKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSkge1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICB9XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCA9IHJlcXVpcmUoXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCIpO1xuXG52YXIgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yID0gcmVxdWlyZShcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICByZXR1cm4gY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JTZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRTZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcbiIsInZhciBjbG9zZXN0ID0gcmVxdWlyZSgnLi9jbG9zZXN0Jyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiJdfQ==
