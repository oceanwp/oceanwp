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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = exports.getSiblings = exports.visible = exports.offset = exports.fadeOut = exports.fadeIn = exports.slideToggle = exports.slideDown = exports.slideUp = exports.wrap = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var slideUp = function slideUp(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  element.style.boxSizing = "border-box";
  element.style.transitionProperty = "height, margin, padding";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.height = "".concat(element.offsetHeight, "px");
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = 0;
  }, 10);
  window.setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("height");
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
  }, duration);
};

exports.slideUp = slideUp;

var slideDown = function slideDown(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  element.style.removeProperty("display");
  var display = window.getComputedStyle(element).display;

  if (display === "none") {
    display = "block";
  }

  element.style.display = display;
  var height = element.offsetHeight;
  var paddingTop = window.getComputedStyle(element).paddingTop;
  var paddingBottom = window.getComputedStyle(element).paddingBottom;
  var marginTop = window.getComputedStyle(element).marginTop;
  var marginBottom = window.getComputedStyle(element).marginBottom;
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.style.overflow = "hidden";
  element.style.boxSizing = "border-box";
  element.style.transitionProperty = "height";
  element.style.transitionDuration = "".concat(duration, "ms");
  setTimeout(function () {
    element.style.height = "".concat(height, "px");
    element.style.transitionProperty = "padding";
    element.style.transitionDuration = "".concat(duration / 1.2, "ms");
    element.style.paddingTop = paddingTop;
    element.style.paddingBottom = paddingBottom;
    element.style.marginTop = marginTop;
    element.style.marginBottom = marginBottom;
  }, 10);
  window.setTimeout(function () {
    element.style.removeProperty("height");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
  }, duration);
};

exports.slideDown = slideDown;

var slideToggle = function slideToggle(element, duration) {
  return window.getComputedStyle(element).display === "none" ? slideDown(element, duration) : slideUp(element, duration);
};

exports.slideToggle = slideToggle;

var fadeIn = function fadeIn(element, display) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  element.style.opacity = 0;
  element.style.display = display || "block";

  var fade = function fade() {
    var opacity = parseFloat(element.style.opacity);
    opacity = Math.round(opacity * 100 + 10) / 100;

    if (opacity <= 1) {
      element.style.opacity = opacity;

      if (opacity === 1 && callback) {
        callback();
      }

      window.requestAnimationFrame(fade);
    }
  };

  window.requestAnimationFrame(fade);
};

exports.fadeIn = fadeIn;

var fadeOut = function fadeOut(element, display) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  element.style.opacity = 1;
  element.style.display = display || "block";

  var fade = function fade() {
    var opacity = parseFloat(element.style.opacity);
    opacity = Math.round(opacity * 100 - 10) / 100;

    if (opacity < 0) {
      element.style.display = "none";
    } else {
      element.style.opacity = opacity;

      if (opacity === 0 && callback) {
        callback();
      }

      window.requestAnimationFrame(fade);
    }
  };

  window.requestAnimationFrame(fade);
};

exports.fadeOut = fadeOut;

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
  return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? o instanceof HTMLElement // DOM2
  : o && _typeof(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
};

exports.isElement = isElement;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var WooRemoveCategoriesCountParenthesis = function WooRemoveCategoriesCountParenthesis() {
  _classCallCheck(this, WooRemoveCategoriesCountParenthesis);

  _start.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll(".widget_layered_nav span.count, .widget_product_categories span.count").forEach(function (item) {
        var count = item.innerHTML;
        item.innerHTML = count.substring(1, count.length - 1);
      });
    }
  });

  _classPrivateFieldGet(this, _start).call(this);
};

var _default = WooRemoveCategoriesCountParenthesis;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var WooResetVariations = function WooResetVariations() {
  _classCallCheck(this, WooResetVariations);

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
    _classPrivateFieldGet(this, _setupEventListeners).call(this);
  }
};

var _default = WooResetVariations;
exports["default"] = _default;

},{"../../../constants":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onGridClick = /*#__PURE__*/new WeakMap();

var _onListClick = /*#__PURE__*/new WeakMap();

var _productCarousel = /*#__PURE__*/new WeakMap();

var WooGridList = function WooGridList() {
  var _this = this;

  _classCallCheck(this, WooGridList);

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

        _classPrivateFieldGet(_this, _productCarousel).call(_this);
      }
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$woo$grid3, _DOM$woo$list3;

      (_DOM$woo$grid3 = _constants.DOM.woo.grid) === null || _DOM$woo$grid3 === void 0 ? void 0 : _DOM$woo$grid3.addEventListener("click", _classPrivateFieldGet(_this, _onGridClick));
      (_DOM$woo$list3 = _constants.DOM.woo.list) === null || _DOM$woo$list3 === void 0 ? void 0 : _DOM$woo$list3.addEventListener("click", _classPrivateFieldGet(_this, _onListClick));
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
        (0, _utils.fadeOut)(products, null, function () {
          products.classList.add("grid");
          products.classList.remove("list");
          (0, _utils.fadeIn)(products);
        });
      });

      setTimeout(function () {
        _classPrivateFieldGet(_this, _productCarousel).call(_this);
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
        (0, _utils.fadeOut)(products, null, function () {
          products.classList.add("list");
          products.classList.remove("grid");
          (0, _utils.fadeIn)(products);
        });
      });

      setTimeout(function () {
        _classPrivateFieldGet(_this, _productCarousel).call(_this);
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
    _classPrivateFieldGet(this, _start).call(this);

    _classPrivateFieldGet(this, _setupEventListeners).call(this);
  } else {
    _jsCookie["default"].remove("gridcookie", {
      path: ""
    });
  }
};

var _default = WooGridList;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":2,"js-cookie":12}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

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

  _classCallCheck(this, WooGuestAccountPage);

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

      _classPrivateFieldSet(_this, _loginBtn, (_DOM$woo$guestAccount = _constants.DOM.woo.guestAccountPageNav) === null || _DOM$woo$guestAccount === void 0 ? void 0 : _DOM$woo$guestAccount.querySelector(".login a"));

      _classPrivateFieldSet(_this, _registerBtn, (_DOM$woo$guestAccount2 = _constants.DOM.woo.guestAccountPageNav) === null || _DOM$woo$guestAccount2 === void 0 ? void 0 : _DOM$woo$guestAccount2.querySelector(".register a"));

      _classPrivateFieldSet(_this, _loginBox, (_DOM$woo$guestAccount3 = _constants.DOM.woo.guestAccountPageBox) === null || _DOM$woo$guestAccount3 === void 0 ? void 0 : _DOM$woo$guestAccount3.querySelector(".col-1"));

      _classPrivateFieldSet(_this, _registerBox, (_DOM$woo$guestAccount4 = _constants.DOM.woo.guestAccountPageBox) === null || _DOM$woo$guestAccount4 === void 0 ? void 0 : _DOM$woo$guestAccount4.querySelector(".col-2"));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _classPrivateFieldGet2, _classPrivateFieldGet3;

      (_classPrivateFieldGet2 = _classPrivateFieldGet(_this, _loginBtn)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", _classPrivateFieldGet(_this, _onLoginBtnClick));
      (_classPrivateFieldGet3 = _classPrivateFieldGet(_this, _registerBtn)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.addEventListener("click", _classPrivateFieldGet(_this, _onRegisterBtnClick));
    }
  });

  _onLoginBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();

      _classPrivateFieldGet(_this, _loginBtn).classList.add("current");

      _classPrivateFieldGet(_this, _registerBtn).classList.remove("current");

      (0, _utils.fadeOut)(_classPrivateFieldGet(_this, _registerBox), null, function () {
        (0, _utils.fadeIn)(_classPrivateFieldGet(_this, _loginBox));
      });
    }
  });

  _onRegisterBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();

      _classPrivateFieldGet(_this, _registerBtn).classList.add("current");

      _classPrivateFieldGet(_this, _loginBtn).classList.remove("current");

      (0, _utils.fadeOut)(_classPrivateFieldGet(_this, _loginBox), null, function () {
        (0, _utils.fadeIn)(_classPrivateFieldGet(_this, _registerBox));
      });
    }
  });

  // Return if registration disabled
  if ((_DOM$woo$guestAccount5 = _constants.DOM.woo.guestAccountPageNav) !== null && _DOM$woo$guestAccount5 !== void 0 && _DOM$woo$guestAccount5.classList.contains("registration-disabled")) {
    return;
  }

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = WooGuestAccountPage;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":2}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _changeEvent = /*#__PURE__*/new WeakMap();

var _firstTimeRunning = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onQuantityInputKeyup = /*#__PURE__*/new WeakMap();

var _onQuantityBtnClick = /*#__PURE__*/new WeakMap();

var WooQuantityButtons = function WooQuantityButtons() {
  var _this = this;

  _classCallCheck(this, WooQuantityButtons);

  _changeEvent.set(this, {
    writable: true,
    value: void 0
  });

  _firstTimeRunning.set(this, {
    writable: true,
    value: void 0
  });

  _defineProperty(this, "start", function () {
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

      if (_classPrivateFieldGet(_this, _firstTimeRunning)) {
        // Create a new 'change' event
        _classPrivateFieldSet(_this, _changeEvent, new Event("change", {
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
            quantityInput.addEventListener("keyup", _classPrivateFieldGet(_this, _onQuantityInputKeyup));
            quantityInput.addEventListener("change", _classPrivateFieldGet(_this, _onQuantityInputKeyup));
          });
        }
      }

      (0, _delegate["default"])(_constants.DOM.body, ".cart .minus, .cart .plus", "click", _classPrivateFieldGet(_this, _onQuantityBtnClick));
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


      quantityInput.dispatchEvent(_classPrivateFieldGet(_this, _changeEvent));
    }
  });

  _classPrivateFieldSet(this, _firstTimeRunning, true);

  this.start();

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = WooQuantityButtons;
exports["default"] = _default;

},{"../../../constants":1,"delegate":11}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onCustomerReviewLinkClick = /*#__PURE__*/new WeakMap();

var WooScrollToReviewTab = function WooScrollToReviewTab() {
  var _this = this;

  _classCallCheck(this, WooScrollToReviewTab);

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.woo.productCustomerReviewLink.addEventListener("click", _classPrivateFieldGet(_this, _onCustomerReviewLinkClick));
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

      _constants.DOM.body.scrollTo({
        top: reviewTabPositionTop - 120,
        behavior: "smooth"
      });
    }
  });

  if (!!_constants.DOM.woo.productCustomerReviewLink) {
    _classPrivateFieldGet(this, _setupEventListeners).call(this);
  }
};

var _default = WooScrollToReviewTab;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":2}],9:[function(require,module,exports){
"use strict";

var _resetVariations = _interopRequireDefault(require("./custom-features/reset-variations"));

var _wooGridList = _interopRequireDefault(require("./custom-features/woo-grid-list"));

var _wooGuestAccountPage = _interopRequireDefault(require("./custom-features/woo-guest-account-page"));

var _wooQuantityButtons = _interopRequireDefault(require("./custom-features/woo-quantity-buttons"));

var _wooScrollToReviewTab = _interopRequireDefault(require("./custom-features/woo-scroll-to-review-tab"));

var _removeCategoriesCountParenthesis = _interopRequireDefault(require("./custom-features/remove-categories-count-parenthesis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WooCustomFeatures = function WooCustomFeatures() {
  var _this = this;

  _classCallCheck(this, WooCustomFeatures);

  _defineProperty(this, "start", function () {
    _this.resetVariations = new _resetVariations["default"]();
    _this.gridList = new _wooGridList["default"]();
    _this.guestAccountPage = new _wooGuestAccountPage["default"]();
    _this.quantityButtons = new _wooQuantityButtons["default"]();
    _this.reviewScroll = new _wooScrollToReviewTab["default"]();
    _this.widgets = new _removeCategoriesCountParenthesis["default"]();
  });
};

window.oceanwpWooCustomFeatures = new WooCustomFeatures();
oceanwpWooCustomFeatures.start();

},{"./custom-features/remove-categories-count-parenthesis":3,"./custom-features/reset-variations":4,"./custom-features/woo-grid-list":5,"./custom-features/woo-guest-account-page":6,"./custom-features/woo-quantity-buttons":7,"./custom-features/woo-scroll-to-review-tab":8}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"./closest":10}],12:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy93cC1wbHVnaW5zL3dvb2NvbW1lcmNlL2N1c3RvbS1mZWF0dXJlcy9yZW1vdmUtY2F0ZWdvcmllcy1jb3VudC1wYXJlbnRoZXNpcy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvcmVzZXQtdmFyaWF0aW9ucy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLWdyaWQtbGlzdC5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLWd1ZXN0LWFjY291bnQtcGFnZS5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS9jdXN0b20tZmVhdHVyZXMvd29vLXF1YW50aXR5LWJ1dHRvbnMuanMiLCJhc3NldHMvc3JjL2pzL3dwLXBsdWdpbnMvd29vY29tbWVyY2UvY3VzdG9tLWZlYXR1cmVzL3dvby1zY3JvbGwtdG8tcmV2aWV3LXRhYi5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS93b28tY3VzdG9tLWZlYXR1cmVzLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sT0FBTyxHQUFHLGVBQWhCOztBQUVBLElBQU0sR0FBRyxHQUFHO0FBQ2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBvY2VhbndwTG9jYWxpemU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NID0ge1xyXG4gICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxyXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLFxyXG4gICAgc2VsZWN0VGFnczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmN1c3RvbVNlbGVjdHMpLFxyXG4gICAgZmxvYXRpbmdCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWZsb2F0aW5nLWJhclwiKSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHNpdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXJcIiksXHJcbiAgICAgICAgdmVydGljYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudmVydGljYWwtaGVhZGVyICNzaXRlLWhlYWRlci1pbm5lclwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlclwiKSxcclxuICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhclwiKSxcclxuICAgICAgICB0b3BiYXJXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXItd3JhcFwiKSxcclxuICAgICAgICB0b3BMZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5sZWZ0XCIpLFxyXG4gICAgICAgIHRvcFJpZ2h0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5yaWdodFwiKSxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmhlYWRlci1yZXBsYWNlICNzaXRlLW5hdmlnYXRpb25cIiksXHJcbiAgICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgICAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAjZnVsbC1zY3JlZW4tbWVudVwiKSxcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgLm1lbnUtYmFyXCIpLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nby5oYXMtZnVsbC1zY3JlZW4tbG9nb1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2E6IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpdGUtbmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9wLWJhci1uYXYgLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgbWVudUNvbnRlbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmF1dG8tbWVnYSAubWVnYW1lbnVcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS52ZXJ0aWNhbC10b2dnbGVcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVNZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93biA+IG5hdlwiKSxcclxuICAgICAgICBuYXZXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93blwiKSxcclxuICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSA+IC5oYW1idXJnZXJcIiksXHJcbiAgICAgICAgbWVudUl0ZW1zSGFzQ2hpbGRyZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWRyb3Bkb3duIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWZ1bGxzY3JlZW5cIiksXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgZm9ybXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtLmhlYWRlci1zZWFyY2hmb3JtXCIpLFxyXG4gICAgICAgIGRyb3BEb3duOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWRyb3Bkb3duLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyUmVwbGFjZToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1oZWFkZXItcmVwbGFjZS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2UtY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtb3ZlcmxheS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheSBhLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVXAgPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIH0sIDEwKTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInBhZGRpbmctYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZURvd24gPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xyXG5cclxuICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheTtcclxuXHJcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblxyXG4gICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IHBhZGRpbmdUb3AgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wYWRkaW5nVG9wO1xyXG4gICAgbGV0IHBhZGRpbmdCb3R0b20gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wYWRkaW5nQm90dG9tO1xyXG4gICAgbGV0IG1hcmdpblRvcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1hcmdpblRvcDtcclxuICAgIGxldCBtYXJnaW5Cb3R0b20gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5tYXJnaW5Cb3R0b207XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJwYWRkaW5nXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbiAvIDEuMn1tc2A7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gcGFkZGluZ1RvcDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBwYWRkaW5nQm90dG9tO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInBhZGRpbmctYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tYm90dG9tXCIpO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVG9nZ2xlID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PlxyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCIgPyBzbGlkZURvd24oZWxlbWVudCwgZHVyYXRpb24pIDogc2xpZGVVcChlbGVtZW50LCBkdXJhdGlvbik7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsIGRpc3BsYXksIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIGNvbnN0IGZhZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSBwYXJzZUZsb2F0KGVsZW1lbnQuc3R5bGUub3BhY2l0eSk7XHJcbiAgICAgICAgb3BhY2l0eSA9IE1hdGgucm91bmQob3BhY2l0eSAqIDEwMCArIDEwKSAvIDEwMDtcclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgPD0gMSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPT09IDEgJiYgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVPdXQgPSAoZWxlbWVudCwgZGlzcGxheSwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcblxyXG4gICAgY29uc3QgZmFkZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHBhcnNlRmxvYXQoZWxlbWVudC5zdHlsZS5vcGFjaXR5KTtcclxuICAgICAgICBvcGFjaXR5ID0gTWF0aC5yb3VuZChvcGFjaXR5ICogMTAwIC0gMTApIC8gMTAwO1xyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA8IDApIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ID09PSAwICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gISEoZWxlbWVudC5vZmZzZXRXaWR0aCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaWJsaW5ncyA9IChlKSA9PiB7XHJcbiAgICAvLyBmb3IgY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgY29uc3Qgc2libGluZ3MgPSBbXTtcclxuXHJcbiAgICAvLyBpZiBubyBwYXJlbnQsIHJldHVybiBubyBzaWJsaW5nXHJcbiAgICBpZiAoIWUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJzdCBjaGlsZCBvZiB0aGUgcGFyZW50IG5vZGVcclxuICAgIGxldCBzaWJsaW5nID0gZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgd2hpbGUgKHNpYmxpbmcpIHtcclxuICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2libGluZ3M7XHJcbn07XHJcblxyXG4vLyBSZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBET00gZWxlbWVudFxyXG5leHBvcnQgY29uc3QgaXNFbGVtZW50ID0gKG8pID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXHJcbiAgICAgICAgOiBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIjtcclxufTtcclxuIiwiY2xhc3MgV29vUmVtb3ZlQ2F0ZWdvcmllc0NvdW50UGFyZW50aGVzaXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLndpZGdldF9sYXllcmVkX25hdiBzcGFuLmNvdW50LCAud2lkZ2V0X3Byb2R1Y3RfY2F0ZWdvcmllcyBzcGFuLmNvdW50XCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaXRlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBjb3VudC5zdWJzdHJpbmcoMSwgY291bnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29SZW1vdmVDYXRlZ29yaWVzQ291bnRQYXJlbnRoZXNpcztcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgV29vUmVzZXRWYXJpYXRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCEhRE9NLndvby5yZXNldFZhcmlhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ud29vLnJlc2V0VmFyaWF0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNldFZhcmlhdGlvbnMgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgICAgICByZXNldFZhcmlhdGlvbnNcbiAgICAgICAgICAgICAgICAuY2xvc2VzdChcIi52YXJpYXRpb25zXCIpXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29SZXNldFZhcmlhdGlvbnM7XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIFdvb0dyaWRMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1ncmlkLWxpc3RcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImdyaWRjb29raWVcIiwgeyBwYXRoOiBcIlwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIShET00ud29vLmdyaWQgfHwgRE9NLndvby5saXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiZ3JpZGNvb2tpZVwiKSA9PT0gXCJncmlkXCIpIHtcbiAgICAgICAgICAgIERPTS53b28uZ3JpZD8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ubGlzdD8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cz8uZm9yRWFjaCgocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiZ3JpZGNvb2tpZVwiKSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgICAgICAgIERPTS53b28uZ3JpZD8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ubGlzdD8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cz8uZm9yRWFjaCgocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JpZFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiNwcm9kdWN0Q2Fyb3VzZWwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLndvby5ncmlkPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25HcmlkQ2xpY2spO1xuICAgICAgICBET00ud29vLmxpc3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkxpc3RDbGljayk7XG4gICAgfTtcblxuICAgICNvbkdyaWRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBET00ud29vLmdyaWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLndvby5saXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgQ29va2llcy5zZXQoXCJncmlkY29va2llXCIsIFwiZ3JpZFwiLCB7IHBhdGg6IFwiXCIgfSk7XG5cbiAgICAgICAgRE9NLndvby5hbGxQcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0cykgPT4ge1xuICAgICAgICAgICAgZmFkZU91dChwcm9kdWN0cywgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgZmFkZUluKHByb2R1Y3RzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3Byb2R1Y3RDYXJvdXNlbCgpO1xuICAgICAgICB9LCAzMDEpO1xuICAgIH07XG5cbiAgICAjb25MaXN0Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgRE9NLndvby5ncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIERPTS53b28ubGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIENvb2tpZXMuc2V0KFwiZ3JpZGNvb2tpZVwiLCBcImxpc3RcIiwgeyBwYXRoOiBcIlwiIH0pO1xuXG4gICAgICAgIERPTS53b28uYWxsUHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgIGZhZGVPdXQocHJvZHVjdHMsIG51bGwsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JpZFwiKTtcblxuICAgICAgICAgICAgICAgIGZhZGVJbihwcm9kdWN0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNwcm9kdWN0Q2Fyb3VzZWwoKTtcbiAgICAgICAgfSwgMzAxKTtcbiAgICB9O1xuXG4gICAgI3Byb2R1Y3RDYXJvdXNlbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWNhcm91c2VsXCIpICYmXG4gICAgICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vLWVudHJ5LWltYWdlLnByb2R1Y3QtZW50cnktc2xpZGVyXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd1NsaWRlci5mbGlja2l0eT8uZm9yRWFjaCgoZmxpY2tpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBmbGlja2l0eS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9jZWFud3AudGhlbWUub3dTbGlkZXIuc3RhcnQoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29HcmlkTGlzdDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgZ2V0U2libGluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIFdvb0d1ZXN0QWNjb3VudFBhZ2Uge1xuICAgICNsb2dpbkJ0bjtcbiAgICAjcmVnaXN0ZXJCdG47XG4gICAgI2xvZ2luQm94O1xuICAgICNyZWdpc3RlckJveDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBSZXR1cm4gaWYgcmVnaXN0cmF0aW9uIGRpc2FibGVkXG4gICAgICAgIGlmIChET00ud29vLmd1ZXN0QWNjb3VudFBhZ2VOYXY/LmNsYXNzTGlzdC5jb250YWlucyhcInJlZ2lzdHJhdGlvbi1kaXNhYmxlZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jbG9naW5CdG4gPSBET00ud29vLmd1ZXN0QWNjb3VudFBhZ2VOYXY/LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4gYVwiKTtcbiAgICAgICAgdGhpcy4jcmVnaXN0ZXJCdG4gPSBET00ud29vLmd1ZXN0QWNjb3VudFBhZ2VOYXY/LnF1ZXJ5U2VsZWN0b3IoXCIucmVnaXN0ZXIgYVwiKTtcbiAgICAgICAgdGhpcy4jbG9naW5Cb3ggPSBET00ud29vLmd1ZXN0QWNjb3VudFBhZ2VCb3g/LnF1ZXJ5U2VsZWN0b3IoXCIuY29sLTFcIik7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyQm94ID0gRE9NLndvby5ndWVzdEFjY291bnRQYWdlQm94Py5xdWVyeVNlbGVjdG9yKFwiLmNvbC0yXCIpO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jbG9naW5CdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkxvZ2luQnRuQ2xpY2spO1xuICAgICAgICB0aGlzLiNyZWdpc3RlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uUmVnaXN0ZXJCdG5DbGljayk7XG4gICAgfTtcblxuICAgICNvbkxvZ2luQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy4jbG9naW5CdG4uY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xuXG4gICAgICAgIGZhZGVPdXQodGhpcy4jcmVnaXN0ZXJCb3gsIG51bGwsICgpID0+IHtcbiAgICAgICAgICAgIGZhZGVJbih0aGlzLiNsb2dpbkJveCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjb25SZWdpc3RlckJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuI3JlZ2lzdGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xuICAgICAgICB0aGlzLiNsb2dpbkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcblxuICAgICAgICBmYWRlT3V0KHRoaXMuI2xvZ2luQm94LCBudWxsLCAoKSA9PiB7XG4gICAgICAgICAgICBmYWRlSW4odGhpcy4jcmVnaXN0ZXJCb3gpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29HdWVzdEFjY291bnRQYWdlO1xuIiwiaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xuaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBXb29RdWFudGl0eUJ1dHRvbnMge1xuICAgICNjaGFuZ2VFdmVudDtcbiAgICAjZmlyc3RUaW1lUnVubmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNmaXJzdFRpbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5Om5vdCguYnV0dG9uc19hZGRlZCkgLnF0eVwiKTtcblxuICAgICAgICBpZiAoISFxdWFudGl0eUlucHV0cykge1xuICAgICAgICAgICAgcXVhbnRpdHlJbnB1dHMuZm9yRWFjaCgocXVhbnRpdHlJbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IHF1YW50aXR5SW5wdXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcblxuICAgICAgICAgICAgICAgIGlmICghKGlucHV0VHlwZSA9PT0gXCJkYXRlXCIgfHwgaW5wdXRUeXBlID09PSBcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbWludXMgaWNvblxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlYmVnaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJtaW51c1wiPi08L2E+J1xuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBwbHVzIGljb25cbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFmdGVyZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwicGx1c1wiPis8L2E+J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBiaWdnZXIgdGhhbiBtaW5cbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dC5xdHk6bm90KC5wcm9kdWN0LXF1YW50aXR5IGlucHV0LnF0eSlcIilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgocXVhbnRpdHlJbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUZsb2F0KHF1YW50aXR5SW5wdXQuZ2V0QXR0cmlidXRlKFwibWluXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChxdWFudGl0eUlucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWluICYmIG1pbiA+IDAgJiYgY3VycmVudFZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNmaXJzdFRpbWVSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3ICdjaGFuZ2UnIGV2ZW50XG4gICAgICAgICAgICAgICAgdGhpcy4jY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBmbG9hdGluZyBiYXIgcXVhbnRpdHlcbiAgICAgICAgaWYgKCEhcXVhbnRpdHlJbnB1dHMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtcHJvZHVjdFwiKSAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmxvYXRpbmdfYmFyID09PSBcIm9uXCIgJiZcbiAgICAgICAgICAgICAgICAhQXJyYXkuZnJvbShET00ud29vLnByb2R1Y3RDYXJ0cykuc29tZShcbiAgICAgICAgICAgICAgICAgICAgKHsgY2xhc3NMaXN0IH0pID0+IGNsYXNzTGlzdC5jb250YWlucyhcImdyb3VwZWRfZm9ybVwiKSB8fCBjbGFzc0xpc3QuY29udGFpbnMoXCJjYXJ0X2dyb3VwXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dHMuZm9yRWFjaCgocXVhbnRpdHlJbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvblF1YW50aXR5SW5wdXRLZXl1cCk7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLiNvblF1YW50aXR5SW5wdXRLZXl1cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWxlZ2F0ZShET00uYm9keSwgXCIuY2FydCAubWludXMsIC5jYXJ0IC5wbHVzXCIsIFwiY2xpY2tcIiwgdGhpcy4jb25RdWFudGl0eUJ0bkNsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uUXVhbnRpdHlJbnB1dEtleXVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRRdWFudGl0eUlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IGN1cnJlbnRRdWFudGl0eUlucHV0LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIik7XG5cbiAgICAgICAgaWYgKCEoaW5wdXRUeXBlID09PSBcImRhdGVcIiB8fCBpbnB1dFR5cGUgPT09IFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBxdWFudGl0eUlucHV0cy5mb3JFYWNoKChxdWFudGl0eUlucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGN1cnJlbnRRdWFudGl0eUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uUXVhbnRpdHlCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBxdWFudGl0eUJ0biA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0O1xuICAgICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gcXVhbnRpdHlCdG4uY2xvc2VzdChcIi5xdWFudGl0eVwiKS5xdWVyeVNlbGVjdG9yKFwiLnF0eVwiKTtcblxuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChxdWFudGl0eUlucHV0LnZhbHVlKTtcbiAgICAgICAgbGV0IG1pbiA9IHBhcnNlRmxvYXQocXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xuICAgICAgICBsZXQgbWF4ID0gcGFyc2VGbG9hdChxdWFudGl0eUlucHV0LmdldEF0dHJpYnV0ZShcIm1heFwiKSk7XG4gICAgICAgIGxldCBzdGVwID0gcXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpO1xuXG4gICAgICAgIC8vIEZhbGxiYWNrIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlIHx8IGN1cnJlbnRWYWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4oY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXggPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKG1heCkpIHtcbiAgICAgICAgICAgIG1heCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWluID09PSBcIlwiIHx8IE51bWJlci5pc05hTihtaW4pKSB7XG4gICAgICAgICAgICBtaW4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXAgPT09IHVuZGVmaW5lZCB8fCBzdGVwID09PSBcIlwiIHx8IHN0ZXAgPT09IFwiYW55XCIgfHwgTnVtYmVyLmlzTmFOKHBhcnNlRmxvYXQoc3RlcCkpKSB7XG4gICAgICAgICAgICBzdGVwID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsdXMgYnV0dG9uXG4gICAgICAgIGlmIChxdWFudGl0eUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbHVzXCIpKSB7XG4gICAgICAgICAgICBpZiAobWF4ICYmIChjdXJyZW50VmFsdWUgPT09IG1heCB8fCBjdXJyZW50VmFsdWUgPiBtYXgpKSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IG1heDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGN1cnJlbnRWYWx1ZSArIHBhcnNlRmxvYXQoc3RlcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1pbnVzIGJ1dHRvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1pbiAmJiAoY3VycmVudFZhbHVlID09PSBtaW4gfHwgY3VycmVudFZhbHVlIDwgbWluKSkge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBtaW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gY3VycmVudFZhbHVlIC0gcGFyc2VGbG9hdChzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgIHF1YW50aXR5SW5wdXQuZGlzcGF0Y2hFdmVudCh0aGlzLiNjaGFuZ2VFdmVudCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29vUXVhbnRpdHlCdXR0b25zO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBXb29TY3JvbGxUb1Jldmlld1RhYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghIURPTS53b28ucHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluaykge1xuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS53b28ucHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DdXN0b21lclJldmlld0xpbmtDbGljayk7XG4gICAgfTtcblxuICAgICNvbkN1c3RvbWVyUmV2aWV3TGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghIURPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbl90YWJcIikpIHtcbiAgICAgICAgICAgIERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbl90YWJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIiN0YWItZGVzY3JpcHRpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIi5hZGRpdGlvbmFsX2luZm9ybWF0aW9uX3RhYlwiKSkge1xuICAgICAgICAgICAgRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiLmFkZGl0aW9uYWxfaW5mb3JtYXRpb25fdGFiXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBET00ud29vLnByb2R1Y3RUYWJzLnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLWFkZGl0aW9uYWxfaW5mb3JtYXRpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgRE9NLndvby5wcm9kdWN0VGFicy5xdWVyeVNlbGVjdG9yKFwiLnJldmlld3NfdGFiXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIERPTS53b28ucHJvZHVjdFRhYnMucXVlcnlTZWxlY3RvcihcIiN0YWItcmV2aWV3c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IHJldmlld1RhYlBvc2l0aW9uVG9wID0gb2Zmc2V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXZlbnQuY3VycmVudFRhcmdldC5oYXNoKSkudG9wO1xuXG4gICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogcmV2aWV3VGFiUG9zaXRpb25Ub3AgLSAxMjAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NLmJvZHkuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiByZXZpZXdUYWJQb3NpdGlvblRvcCAtIDEyMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29TY3JvbGxUb1Jldmlld1RhYjtcbiIsImltcG9ydCBXb29SZXNldFZhcmlhdGlvbnMgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3Jlc2V0LXZhcmlhdGlvbnNcIjtcbmltcG9ydCBXb29HcmlkTGlzdCBmcm9tIFwiLi9jdXN0b20tZmVhdHVyZXMvd29vLWdyaWQtbGlzdFwiO1xuaW1wb3J0IFdvb0d1ZXN0QWNjb3VudFBhZ2UgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3dvby1ndWVzdC1hY2NvdW50LXBhZ2VcIjtcbmltcG9ydCBXb29RdWFudGl0eUJ1dHRvbnMgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3dvby1xdWFudGl0eS1idXR0b25zXCI7XG5pbXBvcnQgV29vU2Nyb2xsVG9SZXZpZXdUYWIgZnJvbSBcIi4vY3VzdG9tLWZlYXR1cmVzL3dvby1zY3JvbGwtdG8tcmV2aWV3LXRhYlwiO1xuaW1wb3J0IFdvb1JlbW92ZUNhdGVnb3JpZXNDb3VudFBhcmVudGhlc2lzIGZyb20gXCIuL2N1c3RvbS1mZWF0dXJlcy9yZW1vdmUtY2F0ZWdvcmllcy1jb3VudC1wYXJlbnRoZXNpc1wiO1xuXG5jbGFzcyBXb29DdXN0b21GZWF0dXJlcyB7XG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRWYXJpYXRpb25zID0gbmV3IFdvb1Jlc2V0VmFyaWF0aW9ucygpO1xuICAgICAgICB0aGlzLmdyaWRMaXN0ID0gbmV3IFdvb0dyaWRMaXN0KCk7XG4gICAgICAgIHRoaXMuZ3Vlc3RBY2NvdW50UGFnZSA9IG5ldyBXb29HdWVzdEFjY291bnRQYWdlKCk7XG4gICAgICAgIHRoaXMucXVhbnRpdHlCdXR0b25zID0gbmV3IFdvb1F1YW50aXR5QnV0dG9ucygpO1xuICAgICAgICB0aGlzLnJldmlld1Njcm9sbCA9IG5ldyBXb29TY3JvbGxUb1Jldmlld1RhYigpO1xuICAgICAgICB0aGlzLndpZGdldHMgPSBuZXcgV29vUmVtb3ZlQ2F0ZWdvcmllc0NvdW50UGFyZW50aGVzaXMoKTtcbiAgICB9O1xufVxuXG53aW5kb3cub2NlYW53cFdvb0N1c3RvbUZlYXR1cmVzID0gbmV3IFdvb0N1c3RvbUZlYXR1cmVzKCk7XG5vY2VhbndwV29vQ3VzdG9tRmVhdHVyZXMuc3RhcnQoKTtcbiIsInZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcbiIsInZhciBjbG9zZXN0ID0gcmVxdWlyZSgnLi9jbG9zZXN0Jyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiJdfQ==
